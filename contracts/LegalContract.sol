
pragma solidity ^0.5.2;

import './ClauseRegistry.sol';
import './DisputeManager.sol';

contract LegalContract {

    mapping(string => uint256) values;
    mapping(string => address) roles;

    ClauseRegistry public clauseRegistry;
    DisputeManager public disputeManager;

    constructor(ClauseRegistry _registry) public {
        clauseRegistry = _registry;
        disputeManager = new DisputeManager();
    }

    function execute(address target, bytes memory data) internal {
        bool success;
        bytes memory result;

        (success, result) = target.delegatecall(data);
        clauseRegistry.reportExecution.value(msg.value)(target, success, false);
        if (!success) {
            disputeManager.addDispute(target, data);
        }
    }

    function appeal(uint256 _index) public {
        require(msg.sender == getRole('ARBITER'));
        address target;
        bytes memory data;
        bool appealed;
        (target, data, appealed) = disputeManager.getDispute(_index);

        if (!appealed) {
            bool success;
            bytes memory result;
            (success, result) = target.delegatecall(data);
            clauseRegistry.reportExecution(target, success, true);
            if (success) {
                disputeManager.resolveDispute(_index);
            }
        }
    }

    function setValue(string memory symbol, uint256 val) public {
        values[symbol] = val;
    }

    function getValue(string memory symbol) public view returns(uint256) {
        return values[symbol];
    }

    function setRole(string memory symbol, address _role) public {
        roles[symbol] = _role;
    }

    function getRole(string memory symbol) public view returns(address) {
        return roles[symbol];
    }

}
