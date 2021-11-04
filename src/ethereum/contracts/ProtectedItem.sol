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
    string shippingCode;
    string confirmationCode;

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
        details.ipfsHash = ipfsHash;
        details.description = description;
        details.status = Status.READY_TO_BID;

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

    function updateItemToBid(
        string memory _ownerAddress,
        uint256 _price,
        string memory _location
    ) public ownerOnly(_ownerAddress) {
        details.purchasedHistory[details.purchasedHistory.length - 1].price = _price;
        details.status = Status.READY_TO_BID;
        details.location = _location;
    }

    function updateItemAfterBid(
        string memory _ownerAddress,
        uint256 _price,
        string memory _shippingCode,
        string memory _confirmationCode
    ) public {
        updatePurchasedHistory(_ownerAddress, _price);
        shippingCode = _shippingCode;
        confirmationCode = _confirmationCode;
        details.status = Status.SHIPPING;
    }

    function updatePurchasedHistory(string memory _ownerAddress, uint256 _price) public {
        details.purchasedHistory.push(ItemOwner(_ownerAddress, _price));
    }

    function updateLocation(string memory _shippingCode, string memory _location)
        public
        shippingOnly(_shippingCode)
    {
        details.location = _location;
    }

    function receiveItem(string memory _confirmationCode)
        public
        validConfirmationCode(_confirmationCode)
    {
        details.status = Status.RECEIVED;
        confirmationCode = '';
        shippingCode = '';
    }

    modifier shippingOnly(string memory _shippingCode) {
        require(details.status == Status.SHIPPING, 'The item is not shipped!');
        require(
            keccak256(bytes(shippingCode)) == keccak256(bytes(_shippingCode)),
            'The shipping code is invalid!'
        );
        _;
    }   

    modifier validConfirmationCode(string memory _confirmationCode) {
        require(
            keccak256(bytes(confirmationCode)) == keccak256(bytes(_confirmationCode)),
            'The confirmation code is invalid!'
        );
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
