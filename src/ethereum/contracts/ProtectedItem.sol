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
        string owner;
        uint256 price;
    }

    struct ItemDetails {
        ItemOwner[] purchasedHistory;
        string ipfsHash;
        string name;
        string location;
        string description;
        Status status;
    }

    ItemDetails details;

    constructor(
        string memory ipfsHash,
        string memory name,
        string memory location,
        string memory description,
        string memory ownerAddress,
        uint256 price
    ) {
        details.name = name;
        details.location = location;

        updateIpfsHash(ipfsHash);
        updateDescription(description);
        updateStatus(Status.IDLE);
        updatePurchasedHistory(ownerAddress, price);
    }

    function getDetails(string memory ownerAddress)
        public
        view
        ownerOnly(ownerAddress)
        returns (ItemDetails memory)
    {
        return details;
    }

    function getCurrentOwnerAddress() public view returns (string memory) {
        string memory ownerAddress = details
            .purchasedHistory[details.purchasedHistory.length - 1]
            .owner;

        return ownerAddress;
    }

    function updateStatus(Status _status) public {
        details.status = _status;
    }

    function updateLocationShipment(string memory _location) public shippingOnly {
        details.location = _location;
    }

    function updateLocation(string memory _ownerAddress, string memory _location)
        public
        ownerOnly(_ownerAddress)
    {
        details.location = _location;
    }

    function updatePurchasedHistory(string memory _ownerAddress, uint256 _price) public {
        details.purchasedHistory.push(ItemOwner(_ownerAddress, _price));
    }

    function updatePriceToBid(string memory _ownerAddress, uint256 _price)
        public
        ownerOnly(_ownerAddress)
    {
        // details.purchasedHistory[details.purchasedHistory.length - 1].price = _price;
        details.status = Status.READY_TO_BID;
    }

    function updateIpfsHash(string memory _ipfsHash) public {
        details.ipfsHash = _ipfsHash;
    }

    function updateDescription(string memory _description) public {
        details.description = _description;
    }

    modifier shippingOnly() {
        require(details.status == Status.SHIPPING);
        _;
    }

    modifier ownerOnly(string memory _ownerAddress) {
        require(
            keccak256(bytes(_ownerAddress)) == keccak256(bytes(getCurrentOwnerAddress())),
            'You are not the current owner!'
        );
        _;
    }
}
