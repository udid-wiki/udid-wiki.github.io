<!-- span class="content-title"> Dns Cost Contract</span -->
# Dns Cost Contract ABI
1. Contract Address: 
2. ABI File:  DnsCost.abi


## 1.Set second level did price

> ABI: set second level did price


```js
function setSecondLevelNamePrice(bytes32 ownerNameHash_,uint256[8] calldata prices_) external 
```

- Parameter
   1. ownerNameHash_: //top level did (like meta) hash from keccak256
   2. prices_: //eight level price, one byte did price equals to prices_[0], two bytes did price equlas to prices_[1] ...


## 2.Get second level did tax 

> ABI: Get second level did tax


```js
function getAllSecondLevelNameTax() external view returns (uint256[8] memory)
```

- Returns
1. uint256[8]: tax for did length, index 0 indicate one byte did, index 1 indicate two bytes did. more than 8 bytes equals index 7 tax.



## 3.Get second level did price

> ABI: Mint a second did by signature


```js
function getAllSecondLevelNamePrice(bytes32 ownerNameHash_) external view returns(uint256[8] memory)
```

- Parameter
   1. ownerNameHash_: //top level did (like meta) hash from keccak256
   

- Returns
   1. uint256[8]: price for did length, index 0 indicate one byte did, index 1 indicate two bytes did. more than 8 bytes equals index 7 price.



## 4.Get payment count

> ABI: Get payment count


```js
  function getPaymentsCount() external view returns(uint256)
```

- Returns
1. uint256: //payment count where contract support




## 5.Get all payment list

> ABI: Get all payment list


```js
 function paymentList(uint256 idx) external 
```

- Parameter
1. idx: //index of payment




## 6.Get Latest Exchange Value

> ABI: Get Latest Exchange Value


```js
function getLatestExchangeValue(address erc20Addr_,uint256 price_) external view returns(uint256,uint80); 
```

- Parameter
   1. erc20Addr_: [required] //payment erc20 address
   2. price_: [required] //usdt price

- Returns
   1. uint256: exchange price
   2. uint80: current exchange id get from chainlink roundid


## 7.Get Second Level Name Price

> ABI: Get Second Level Name Price


```js
function getSecondLevelNamePrice(bytes32 fatherHash_,address erc20Addr_,uint80 lastPriceId_, uint8 nameLength_, uint8 year_)
    external override view returns(uint256,uint256,bool)
```

- Parameter
   1. fatherHash_: [required] // a hash (like did) value from keccak256
   2. erc20Addr_: [required] //a hash (like a.did) value from keccak256
   3. lastPriceId_: [required] // if usdt, last id set to 0, other payment get from getLatestExchangeValue
   4. nameLength_: [required] //second level did length
   5. year_: [required] // >1 
   
- Returns
   1. tax uint256: //tax
   2. cost uint256: //price
   3. bool: //valid



## 8.Price is valid

> ABI: Price is valid 


```js
 function priceIdIsValid(address erc20Addr_,uint80 lastPriceId) external override view returns(bool)
```

- Parameter
   1. erc20Addr_: [required] // payment address
   2. lastPriceId: [required] //round id , get from chainlink, if payment is usdt, set to 0
   
- Returns
   1. bool: //valid or not



   








