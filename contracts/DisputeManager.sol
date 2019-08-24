
pragma solidity ^0.5.2;


contract DisputeManager {

    struct Execution {
        address target;
        bytes data;
        bool appealed;
    }

    Execution[] failures;

    function addDispute(address target, bytes memory data) public {
        failures.push(Execution(target, data, false));
    }

    function getDisputesCount() public view returns(uint256) {
        return failures.length;
    }

    function getDispute(uint256 index) public view returns(address, bytes memory data, bool appealed) {
        return (failures[index].target, failures[index].data, failures[index].appealed);
    }

    function resolveDispute(uint256 index) public {
        failures[index].appealed = true;
    }

}
