# Genesis Pass Card API

## 1. Get my Passcard list 

> 查询我持有的PassCard

- Request

**${.api-method} GET** /api/passcard/get_all

<!-- tabs:start -->

<!-- tab:API document -->
- 1. coinbase : current connected address . [required]

<!-- tab: JSON -->

```js
{
    coinbase:'0xAe..98c5', // required
    collection:[''] //NFT 合约地址 备用
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
                name:"green card #NO.4073",
                erc721_addr:'0x67...98Fd', //
                token_id:1,
                owner:"0x...fe85",
                remaining_times: 1, // 剩余使用次数 备用，暂不返回
            },
            ...
        ]
    }
}
```

----

## 1. Signed for mint 

> 获取mint 签名

- Request

**${.api-method} POST** /api/passcard/signed_mint

<!-- tabs:start -->

<!-- tab:API document -->
- 1. coinbase : current connected address . [required]
- 2. erc721Addr: Pass card contract address [required]
- 3. tokenId : Pass card ID [required]
- 4. domainhash: the did name sha256 [required]
- 5. years: [required]
- 6. erc20Addr: 支付token address [required]
 
<!-- tab: JSON -->

```js
{
    coinbase:'0xAe..98c5',    // required
    erc721Addr:'0xed...72Bb', // string 
    tokenId:2,                // number
    domainhash:'xsxxxxss'     // 这里用hash 还是用 did name ?
    years:1,
    erc20Addr: '0x00....00'
}
```
<!-- tabs:end -->

- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
      signature:'0x...8ef', 签名后的字符串
      params:{  // 返回服务端签名参数， 有可能会对参数排序
        coinbase:'0xAe..98c5',    // required
        erc721Addr:'0xed...72Bb', // string 
        tokenId:2,                // number
        domainhash:'xsxxxxss'     // 这里用hash 还是用 did name ?
        years:1,
        erc20Addr: '0x00....00'
      }
    }
}
```

----
