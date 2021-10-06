// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract ProtectedItem {
    enum Status {
        IN_AUCTION,
        SHIPPING,
        RECEIVED,
        IDLE,
        READY_TO_BID
    }

    struct ItemOwner {
        address owner;
        uint256 price;
    }

    struct ItemDetails {
        ItemOwner[] purchasedHistory;
        string url;
        string name;
        string location;
        string description;
        Status status;
    }

    ItemDetails details;

    constructor(
        string memory _url,
        string memory _name,
        string memory _location,
        string memory _description,
        address _currentOwner,
        uint256 _price
    ) {
        details.name = _name;
        details.location = _location;

        updateImageUrl(_url);
        updateDescription(_description);
        updateStatus(Status.IDLE);
        updatePurchaseHistory(_currentOwner, _price);
    }

    function getDetails() public view ownerOnly returns (ItemDetails memory) {
        return details;
    }

    function updateStatus(Status _status) public {
        details.status = _status;
    }

    function updateLocation(string memory _location) public validStatusOrOwnerOnly {
        details.location = _location;
    }

    function updatePurchaseHistory(address _currentOwner, uint256 _price) public {
        details.purchasedHistory.push(ItemOwner(_currentOwner, _price));
    }

    function updateImageUrl(string memory _url) public {
        details.url = _url;
    }

    function updateDescription(string memory _description) public {
        details.description = _description;
    }

    modifier validStatusOrOwnerOnly() {
        ItemOwner memory currentOwner = details.purchasedHistory[
            details.purchasedHistory.length - 1
        ];

        require(
            details.status == Status.SHIPPING || msg.sender == currentOwner.owner,
            'Status is not SHIPPING or you are not the current owner!'
        );
        _;
    }

    modifier ownerOnly() {
        ItemOwner memory currentOwner = details.purchasedHistory[
            details.purchasedHistory.length - 1
        ];

        require(msg.sender == currentOwner.owner, 'You are not the current owner!');
        _;
    }
}
