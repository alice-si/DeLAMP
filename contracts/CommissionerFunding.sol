
pragma solidity ^0.5.2;

import './IFunding.sol';
import './BaseClause.sol';

contract CommissionerFunding is IFunding, BaseClause {

    uint public num;

    function fund(uint256 _amount) public payable {
        require(_amount <= values['MAX_DONATION']);
        num = 123;
    }
}
