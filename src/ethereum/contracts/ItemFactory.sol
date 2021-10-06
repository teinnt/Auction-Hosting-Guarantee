// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import './ProtectedItem.sol';

contract ItemFactory {
    address[] public items;

    function createNewItem(
        string memory url,
        string memory name,
        string memory location,
        string memory description,
        // address ownerAddress,
        uint256 price
    ) public {
        address newItem = address(
            new ProtectedItem(url, name, location, description, msg.sender, price)
        );

        items.push(newItem);
    }

    function getAllItems() public view returns (address[] memory) {
        return items;
    }
}
