
pragma solidity ^0.5.2;

import './IFunding.sol';
import './BaseClause.sol';

contract OpenFunding is IFunding, BaseClause {

    uint256 public funded;

    function verify(uint256 _amount) private {
        if (roles['ARBITER'] != msg.sender) {
            require(_amount >= values['MIN_DONATION']);
            require(_amount <= values['MAX_DONATION']);
        }
    }

    function fund(uint256 _amount) public payable {
        verify(_amount);
        funded = funded + _amount;
    }
}
