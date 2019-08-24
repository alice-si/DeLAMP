
pragma solidity ^0.5.2;


contract UpdateManager {

    struct Proposal {
        string symbol;
        uint256 value;
        bool updated;
    }

    Proposal[] proposals;

    function addProposal(string memory symbol, uint256 value) public {
        proposals.push(Proposal(symbol, value, false));
    }

    function getProposalsCount() public view returns(uint256) {
        return proposals.length;
    }

    function getProposal(uint256 index) public view returns(string memory symbol, uint256 value, bool updated) {
        return (proposals[index].symbol, proposals[index].value, proposals[index].updated);
    }

    function updateProposal(uint256 index) public {
        proposals[index].updated = true;
    }

}
