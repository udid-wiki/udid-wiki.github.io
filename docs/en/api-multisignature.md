# Multisignature API <!-- {docsify-ignore} -->

> 多签接口需求






## 1. Get my todo list for sign

> Get my todo list to sign 

**notes**

  Include my top-level DID name and my wallet address in the proxy administrator


- Request

**${.api-method} GET** /api/multisign/dids/get_todos

<!-- tabs:start -->

<!-- tab:API document -->
- 1. coinbase : current connected address . [required]
- 2. pageNumber: get list start page number ,default 0 [optional]
- 3. pageSize: get list size per request time ,default 100  [optional]

<!-- tab: JSON -->

```js
{
    coinbase:'0xAe..98c5', // required
    pageSize:100,
    pageNumber:0
}
```
<!-- tabs:end -->

- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
        total:32,
        items:[
            {
                name:"did",
                erc721_addr:'0x67...98Fd', //
                token_id:1,
                balances:[
                  {
                    erc20_addr:'0x000...00', // eth address, required
                    withdraw_wei:'12000500000000000000000000',  // eth withdraw balance, wei  required
                    decimals:18, // optional
                    symbol:'ETH',// optional
                    withdraw_value: 12.0005,// optional show value 
                  },
                  {
                    erc20_addr:'0xAe0...15', // eth address, required
                    withdraw_wei:'980005000000',  // eth withdraw balance, wei  required
                    decimals:6, // optional
                    symbol:'ETH',// optional
                    withdraw_value: 980050,// optional show value 
                  }
                ]
            },
            ...
        ]
    }
}
```

----

## 2. Get multi sign task by top level did name

> 获取多签任务

- Request

**${.api-method} POST** /api/multisign/tasks/get_list

<!-- tabs:start -->

<!-- tab:API document -->
- 1. didName : the top level did name . [required]
- 2. pageNumber: get list start page number ,default 0 [optional]
- 3. pageSize: get list size per request time ,default 100  [optional]
 
<!-- tab: JSON -->

```js
{
    didName:'did',    // required
    pageNumber:0,     // optional
    pageSize:100,     // optional
}
```
<!-- tabs:end -->

- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
      total:4,
      pageNumber:0,
      items:[
        {
          namehash: '0x....abs',        //多签任务 对应域名 的 namehash,如 `did` hash   
          task_hash:'0x....abc', //
          max_sig:3,                    // 最少签名数量
          work:true,                    // 对应合约 contracts\dnsProject\multisig\LibMultiSig.sol work 
          lock:true,                    // 
          signer_list:[                 // 已参与签名的 list 
            {
              signer: '0x...ac',        // 操作签名的地址
              sign_type:1,              // 操作类型 ，Agree 1 ，Disagree： 0
            },
            {
              signer: '0x...ad',        // 操作签名的地址
              sign_type:1,              // 操作类型 ，Agree 1 ，Disagree： 0
            }
          ]                

        }
      ]
    }
}
```

----






