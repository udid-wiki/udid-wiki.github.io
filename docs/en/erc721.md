<!-- span class="content-title"> Second Level DID</span -->
# Second Level DID Contract ABI
1. Contract Address: 


## 1.Get ERC721 address of top level DID

> ABI: Get ERC721 address of top level DID


```js
function getErc721Contract(bytes32 fatherHash) external override view returns(address) 
```

- Parameter
   1. fatherHash: [required] //a hash of DID generated from keccak256 function

- Returns    
   1. erc721 address //all second name token id will minted from the erc721 contract.


