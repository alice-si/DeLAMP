
pragma solidity ^0.5.2;


contract ClauseRegistry {

    struct Stats {
        address payable author;
        address payable auditor;
        uint256 authorFee;
        uint256 auditorFee;
        uint256 registryFee;
        uint256 successCount;
        uint256 failureCount;
    }

    mapping(address => Stats) tracking;

    function registerClause(address clause, address payable author, uint256 authorFee, uint256 registryFee) public {
        tracking[clause] = Stats(author, address(0), authorFee, 0, registryFee, 0, 0);
    }

    function getStats(address clause) public view returns(uint256 success, uint256 failure) {
        success = tracking[clause].successCount;
        failure = tracking[clause].failureCount;
    }

    function reportExecution(address clause, bool success, bool appeal) public payable {
        if (success) {
            tracking[clause].successCount = tracking[clause].successCount + 1;
            if (!appeal) {
                tracking[clause].author.transfer(tracking[clause].authorFee);
            }
        } else {
            tracking[clause].failureCount = tracking[clause].failureCount + 1;
        }
    }

}
