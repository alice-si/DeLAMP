
pragma solidity ^0.5.2;
pragma experimental ABIEncoderV2;

import './BaseClause.sol';
import './LegalContract.sol';

contract ImpactInvestment is LegalContract {

    uint256 public funded;

    BaseClause public fundingClause;
    BaseClause public investmentClause;
    BaseClause public validationClause;
    BaseClause public redemptionClause;

    constructor(ClauseRegistry _registry, BaseClause _fundingClause, string[] memory valNames, uint256[] memory values) LegalContract(_registry) public {
        fundingClause = _fundingClause;
        for (uint i=0; i<valNames.length; i++) {
            setValue(valNames[i], values[i]);
        }
    }

    function setFundingClause(BaseClause clause) public {
        fundingClause = clause;
    }

    function fund(uint256 _amount) public payable {
        address target = address(fundingClause);
        bytes memory data = abi.encodePacked(bytes4(keccak256("fund(uint256)")), _amount);

        execute(target, data);
    }

}
