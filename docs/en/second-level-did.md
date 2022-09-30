<!-- span class="content-title"> Second Level DID</span -->
# Second Level DID Contract ABI
1. Contract Address: 
2. ABI File: DnsSecondLevelName.abi


## 1.Mint a second did

> ABI: Mint second did


```js
function MintSecondLevelName(string memory entireName_, uint8 year_, address erc20Addr_, uint80 lastPriceId) external 
```

- Parameter
   1. entireName_: [required] //a did name,  if your top name is did, the the parameter should be like a.did
   2. year_: [required] // did name will expire in year_ years
   3. erc20Addr_: [required] //payment , if use eth pay for, the erc20Addr_ is 0x0000000000000000000000000000000000000000
   4. uint80: [required] //from cost contract you can get it, it is get from chainlink

- Event  
   - the function will send a event, development should listen the event.

```js
   event EvMintSecondLevelName(string entireName, uint8 year, address erc20Addr, uint256 tokenId);
```

## 2.Renew a second did 

> ABI: Renew second did


```js
function ChargeSecondLevelName(bytes32 fatherHash_,
        bytes32 nameHash_,
        uint8 year_,
        address erc20Addr_,
        uint80 lastPriceId,
        bool isTransfer_) external
```

- Parameter
   1. nameHash_: [required] //a did (like a.did) name hash value from keccak256
   2. year_: [required] // did name will expire in year_ years
   3. erc20Addr_: [required] //payment , if use eth pay for, the erc20Addr_ is 0x0000000000000000000000000000000000000000
   4. lastPriceId: [required] //from cost contract you can get it, it is get from chainlink
   5. isTransfer_: [required] //when the did expired, isTransfer_ set true, the did will transfer to user of pay for

- Event  
   - the function will send a event, development should listen the event.

```js
   event EvChargeSecondLevelName(bytes32 fatherHash, bytes32 nameHash,
        uint8 year, address erc20Addr, bool isTransfer);
```

## 3.Mint a second did by signature

> ABI: Mint a second did by signature


```js
function MintSecondLevelNameBySig(string memory entireName_, uint8 year_, address erc20Addr_, uint80 lastPriceId,
        uint256 nonce, uint256 price_, bytes memory sig) external
```

- Parameter
   1. entireName_: [required] //a did name,  if your top name is did, the the parameter should be like a.did
   2. year_: [required] // did name will expire in year_ years
   3. erc20Addr_: [required] //payment , if use eth pay for, the erc20Addr_ is 0x0000000000000000000000000000000000000000
   4. lastPriceId: [required] //from cost contract you can get it, it is get from chainlink
   5. nonce: [required] //from transaction that send to ethereum
   6. price_: [required] //usdt price, must large than tax
   7. sig: [required]  //sign by signature sdk.

- Event  
   - the function will send a event, development should listen the event.

```js
   event EvMintSecondLevelNameBySig(string entireName, 
                uint8 year, 
                address erc20Addr, 
                uint256 nonce, 
                uint256 price, 
                uint256 tokenId);
```



## 4.Renew a second did by signature

> ABI: Renew a second did by signature


```js
 function ChargeSecondLevelNameBySig(bytes32 fatherHash_,
        bytes32 nameHash_,
        uint8 year_,
        address erc20Addr_,
        uint80 lastPriceId,
        uint256 nonce, uint256 price_, bytes memory sig,
        bool isTransfer_) external 
```

- Parameter
   1. nameHash_: [required] //a did (like a.did) hash value from keccak256
   2. year_: [required] // did name will expire in year_ years
   3. erc20Addr_: [required] //payment , if use eth pay for, the erc20Addr_ is 0x0000000000000000000000000000000000000000
   4. lastPriceId: [required] //from cost contract you can get it, it is get from chainlink
   5. nonce: [required] //from transaction that send to ethereum
   6. price_: [required] //usdt price, must large than tax
   7. sig: [required]  //sign by signature sdk.
   8. isTransfer_:  [required]  //when the did expired, isTransfer_ set true, the did will transfer to user of pay for

- Event  
   - the function will send a event, development should listen the event.

```js
   event EvMintSecondLevelNameBySig(string entireName, 
                uint8 year, 
                address erc20Addr, 
                uint256 nonce, 
                uint256 price, 
                uint256 tokenId);
```


## 5.Add a sub did

> ABI: Add a sub name


```js
 function AddSubName(string memory entireSubName_, bytes32 level2FatherHash_) external 
```

- Parameter
   1. entireSubName_: [required] //a did (like c.a.did)  
   2. level2FatherHash_: [required] //a hash (like a.did) value from keccak256

- Event  
   - the function will send a event, development should listen the event.

```js
   event EvAddSubName(string entireSubName, bytes32 level2FatherHash);
```

## 6.Del a sub did

> ABI: Del a sub did


```js
 function DelSubName(bytes32 nameHash_, bytes32 level2FatherHash_, bytes32 topHash_) external 
```

- Parameter
   1. nameHash_: [required] //a hash (like c.a.did) value from keccak256
   2. level2FatherHash_: [required] //a hash (like a.did) value from keccak256
   3. topHash_: [required] // a hash (like did) value from keccak256

- Event  
   - the function will send a event, development should listen the event.

```js
   event EvDelSubName(bytes32 nameHash, bytes32 level2FatherHash, bytes32 topHash);
```


## 7.Get a second did information

> ABI: Get a second did information


```js
 function nameStore(bytes32 topHash_, bytes32 nameHash_) external returns(
    struct {
        string entireName;
        uint32 expireTime;
        uint256 tokenId;
    }
 )
```

- Parameter
   1. topHash_: [required] // a hash (like did) value from keccak256
   2. nameHash_: [required] //a hash (like a.did) value from keccak256
   
- Returns
   1. entireName: did
   2. expireTime: expire time
   3. tokenId: token id mint in erc721 contract



## 8.Get a sub did

> ABI: Get a sub did 


```js
 function subNameStore(bytes32 level2FatherHash_, bytes32 nameHash_) external returns( string memory);
```

- Parameter
   1. level2FatherHash_: [required] // a hash (like a.did) value from keccak256
   2. nameHash_: [required] //a hash (like c.a.did) value from keccak256
   
- Returns
   1. entireName: did
   








