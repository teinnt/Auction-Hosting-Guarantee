// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

import './ProtectedItem.sol';

contract ItemFactory {
    address[] public items;

    event AddNewItem(address itemAddress);

    function createNewItem(
        string memory ipfsHash,
        string memory name,
        string memory location,
        string memory description,
        string memory ownerAddress,
        uint256 price
    ) public {
        address newItem = address(
            new ProtectedItem(ipfsHash, name, location, description, ownerAddress, price)
        );

        items.push(newItem);

        emit AddNewItem(newItem);
    }

    function getAllItems() public view returns (address[] memory) {
        return items;
    }
}
