

<!-- span class="content-title"> DID list API</span -->
# DnsDao Resolver API  ALL
https://dnsdao.udid.domains




# DID list API

## 1.Get my top level did list

> 获取我的 Top level DID 列表

- Request

* method    : GET
* url       : /dns/dids/top/get_list
* params    :

```js
{
    coinbase:'0xAe..98c5', // required 必传
    pageSize:10,
    pageNumber:0
}
```

- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
        total:32,
        pageSize:10,   // 默认数量
        pageNumber:0, //起始页默认0
        items:[
            {
                name:"udid",
                erc721_addr:'0x67...98Fd', //
                token_id:1,
                open_to_reg:true,
                expire_time:219291131,
                owner:'0x64....D865',
                pay_tokens:['0x99d...dfed','0x00..00'], // 已开启的支付方式 ERC20 address 数组，未开启时 []或无此字段 
            },
            ...
        ]
    }
}
```

----

## 2.Get my second level did list

> 获取我的Second level DID 列表

- Request

* method    : GET
* url       : /dns/dids/second/get_list
* params    :

```js
{
    coinbase:'0xAe..98c5',
    pageSize:10,
    pageNumber:0
}
```

- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
        total:32,
        pageSize:10,
        pageNumber:0,
        items:[
            {
                name:"lanbery.udid",
                erc721_addr:'0x67...98Fd',// Top DID erc721addr [即 udid 的 erc721Addr]
                token_id:1, // 二级域名本身 tokenId
                open_to_reg:false,
                expire_time:219291131,
                owner:'0x64....D865'
            },
            ...
        ]
    }
}
```

---

## 3.Get the top level did list of all secondary registration enabled

> 获取所有已开启二级注册的 Top level DID 列表

- Request

* method    : GET
* url       : /dns/dids/top/get_open_dids
* params    :

```js
{
    coinbase:'0xAe..98c5',
    pageSize:10,
    pageNumber:0
}
```

- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
        total:32,
        pageSize:10,
        pageNumber:0,
        items:[
            {
                name:"lanbery.udid",
                erc721_addr:'0x67...98Fd',// Top DID erc721addr [即 udid 的 erc721Addr]
                token_id:1, //  tokenId
                expire_time:219291131,
                owner:'0x64....D865',
                pay_tokens:['0x99d...dfed','0x00..00'], // 已开启的支付方式 ERC20 address 数组，未开启时 []或无此字段

            },
            ...
        ]
    }
}
```
# Genesis Pass Card API

## 1. Get my Passcard list

> 查询我持有的PassCard

- Request

**${.api-method} GET** /dns/passcard/get_all

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
        pageSize:10,
        pageNumber:0,
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

[//]: # (----)

[//]: # (## 1. Signed for mint)

[//]: # ()
[//]: # (> 获取mint 签名)

[//]: # ()
[//]: # (- Request)

[//]: # ()
[//]: # (**${.api-method} POST** /api/passcard/signed_mint)

[//]: # ()
[//]: # (<!-- tabs:start -->)

[//]: # ()
[//]: # (<!-- tab:API document -->)

[//]: # (- 1. coinbase : current connected address . [required])

[//]: # (- 2. erc721Addr: Pass card contract address [required])

[//]: # (- 3. tokenId : Pass card ID [required])

[//]: # (- 4. domainhash: the did name sha256 [required])

[//]: # (- 5. years: [required])

[//]: # (- 6. erc20Addr: 支付token address [required])

[//]: # ()
[//]: # (<!-- tab: JSON -->)

[//]: # ()
[//]: # (```js)

[//]: # ({)

[//]: # (    coinbase:'0xAe..98c5',    // required)

[//]: # (    erc721Addr:'0xed...72Bb', // string )

[//]: # (    tokenId:2,                // number)

[//]: # (    domainhash:'xsxxxxss'     // 这里用hash 还是用 did name ?)

[//]: # (    years:1,)

[//]: # (    erc20Addr: '0x00....00')

[//]: # (})

[//]: # (```)

[//]: # (<!-- tabs:end -->)

[//]: # ()
[//]: # (- Response)

[//]: # ()
[//]: # (```js)

[//]: # ({)

[//]: # (    code:1,  // 1 服务正常返回，0 服务端异常)

[//]: # (    message:'ok',// 异常时 描述)

[//]: # (    data:{  // 异常时 data null 或 无此字段)

[//]: # (      signature:'0x...8ef', 签名后的字符串)

[//]: # (      params:{  // 返回服务端签名参数， 有可能会对参数排序)

[//]: # (        coinbase:'0xAe..98c5',    // required)

[//]: # (        erc721Addr:'0xed...72Bb', // string )

[//]: # (        tokenId:2,                // number)

[//]: # (        domainhash:'xsxxxxss'     // 这里用hash 还是用 did name ?)

[//]: # (        years:1,)

[//]: # (        erc20Addr: '0x00....00')

[//]: # (      })

[//]: # (    })

[//]: # (})

[//]: # (```)

----
