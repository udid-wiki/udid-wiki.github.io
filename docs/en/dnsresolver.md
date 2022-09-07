

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
                card_color:0, // 卡片颜色 ： 0,1,2,3 对应合约 noColorCard,ColorCard,GoldColor,GreenColor
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


**${.api-method} POST** /dns/passcard/signed_mint


<!-- tabs:start -->


<!-- tab:API document -->

[//]: # (- 1. coinbase : current connected address . [required])

[//]: # ()
[//]: # (- 2. erc721Addr: Pass card contract address [required])

[//]: # ()
[//]: # (- 3. tokenId : Pass card ID [required])

[//]: # ()
[//]: # (- 4. domainhash: the did name sha256 [required])

[//]: # ()
[//]: # (- 5. years: [required])

[//]: # ()
[//]: # (- 6. erc20Addr: 支付token address [required])
```js

{
  "token_id":"9999",
  "domain_name":"cc.did",
  "year":"2",
  "erc_20_addr":"0x6043bfe64a866c7fb17D1855fe3eBC4342Ca9c15",
  "price":"3000000000000000000000",
  "msg_sender":"0x5DA2a8Ec74A62089c8678E9DB3EA6D3E8D265edE",
}

```
<!-- tab: JSON -->


```js

{
  "token_id":"9999",
  "domain_name":"cc.did",
  "year":"2",
  "erc_20_addr":"0x6043bfe64a866c7fb17D1855fe3eBC4342Ca9c15",
  "price":"3000000000000000000000",
  "msg_sender":"0x5DA2a8Ec74A62089c8678E9DB3EA6D3E8D265edE",
}

```

<!-- tabs:end -->


- Response


```js

{
  "code": 1,
  "message": "ok",
  "data": {
  "signature": "bf7d8c40693c3dc48e4029a1fe3d653f999340eb1b64b4f0cba13c0ca02792726f5c3255c364da385c18c17f8eff5cc3e8147d13fdf5222d78f991b87e84bdb91c",
    "params": {
      "domain_name": "cc.did",
      "year": 2,
      "erc_20_addr": "0x6043bfe64a866c7fb17d1855fe3ebc4342ca9c15",
      "price": "3000000000000000000000",
      "msg_sender": "0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede",
      "token_id": 9999
  }
}
}

```

----



# RESOLVER

## 1. Get Domains info

> 查询域名信息

- Request

**${.api-method} GET** /dns/name

<!-- tabs:start -->

<!-- tab:API document -->
- 1. name : current connected name . [required]

<!-- tab: JSON -->

```js
{
    name:'eth.did', // required
}
```
<!-- tabs:end -->

- Response

```js
{
  "name": "did",
    "hash": "9cb4777bc61baeb5c84f2ed7e7dc586e5e21f1c1194bf295bc2430cbabe5eeae",
    "contract": "0xff480a9dec20ad7e6627165c0316270b8e96ac15",
    "sub_name": {
    "1": [
      "6.did"
    ],
      "2": [
      "aa.did"
    ],
      "3": [
      "eth.did"
    ],
      "4": [
      "dsad.did"
    ],
      "7": [
      "lanbery.did"
    ]
  },
  "sub_name_count": {
    "1": 1,
      "2": 1,
      "3": 1,
      "4": 1,
      "7": 1
  },
  "price": {
    "default": 100000000000000000000
  },
  "owner": "0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede",
    "open_to_reg": true,
    "expireTime": 1694005208,
    "token_id": 2,
    "conf": null
}
```






# DNSDAO OPENSEA

## 1. Get Opensea metadata

> 查询opensea元数据

- Request

**${.api-method} GET** /opensea/0xD792f2507Df03f7335b8AfC0527A4D239915ad47/2

<!-- tabs:start -->

<!-- tab:API document -->
- 1. /0xD792f2507Df03f7335b8AfC0527A4D239915ad47 : contract addr . [required]
- 2. /2  : tokenid [required]
<!-- tab: JSON -->

<!-- tabs:end -->

- Response

```js
{
  "name": "did",
    "image": "https://dnsdaonftpasscard.s3.ap-east-1.amazonaws.com/dnsname/0xd792f2507df03f7335b8afc0527a4d239915ad47_2.png",
    "external_url": "",
    "animation_url": "",
    "description": "Udid",
}
```

