
pragma solidity ^0.5.2;

import './BaseClause.sol';
import './LegalContract.sol';

contract ImpactInvestment is LegalContract {

    uint256 public funded;

    BaseClause public fundingClause;
    BaseClause public investmentClause;
    BaseClause public validationClause;
    BaseClause public redemptionClause;

    constructor(ClauseRegistry _registry) LegalContract(_registry) public { }

    function setFundingClause(BaseClause clause) public {
        fundingClause = clause;
    }

    function fund(uint256 _amount) public payable {
        address target = address(fundingClause);
        bytes memory data = abi.encodePacked(bytes4(keccak256("fund(uint256)")), _amount);

        execute(target, data);
    }

}
