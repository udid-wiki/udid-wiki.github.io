<!-- span class="content-title"> Dns Accountant Contract</span -->
# Dns Accountant Contract ABI
1. Contract Address: 
2. ABI File: DnsAccountant.abi


## 1.Get income with payment

> ABI: Get income with payment


```js
function get(address account_,address erc20Addr_) external view returns(uint256)
```

- Parameter
   1. account_: //erc721 address of top level did
   2. erc20Addr_: //payment


## 2.Withdraw income from accountant 

> ABI: Withdraw income from accountant


```js
function withdrawCash(address erc20Addr_,uint256 amount_,address payable out_, address contractAddr_)
    external
    sigMatched(contractAddr_,keccak256(abi.encodePacked(erc20Addr_,amount_,out_,contractAddr_,this.withdrawCash.selector)))
```

- Parameter
   1. erc20Addr_: //payment
   2. amount_: //cash amount
   3. out_: //out address
   4. contractAddr_: //erc721 address of top level did











