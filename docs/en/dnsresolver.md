

<!-- span class="content-title"> DID list API</span -->
# DnsDao Resolver API  ALL




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
                remaining_times: 1, // 剩余使用次数 备用，暂不返回,
                status: 0, // 0 ready ,1: using,2: used
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
## 2. Look up all the domain names in the address

> 查地址下所有域名信息

- Request

* method    : GET
* url       : /dns/addr
* params    :

```js
{
    addr:'0x5DA2a8Ec74A62089c8678E9DB3EA6D3E8D265edE',[required]
    pageSize:10,
    pageNumber:0
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 15,
    "page_size": 10,
    "page_number": 0,
    "data": [
    "{\"name\":\"did\",\"hash\":\"9cb4777bc61baeb5c84f2ed7e7dc586e5e21f1c1194bf295bc2430cbabe5eeae\",\"contract\":\"0xbf351a9f429932001b9f07102cf994a1d380d29c\",\"sub_name\":{\"4\":[\"plur.did\"],\"5\":[\"12452.did\"],\"6\":[\"rickey.did\"],\"7\":[\"yelihui.did\"],\"9\":[\"microsoft.did\"]},\"sub_name_count\":{\"4\":1,\"5\":1,\"6\":1,\"7\":1,\"8\":1},\"price\":{\"3\":60000000000000000,\"4\":50000000000000000,\"5\":400000000000000000,\"6\":20000000000000000,\"default\":20000000000000000,\"defaultp\":20000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692351342,\"token_id\":6,\"conf\":null}",
    "{\"name\":\"metamask\",\"hash\":\"69edc0ff6c1e084ebd1295782a6c284c57eda43f402b6ecc23762b9316812888\",\"contract\":\"0x3bb8a549344ff55e88705f4c2d90eb4262f93266\",\"sub_name\":{\"3\":[\"abc.metamask\"],\"6\":[\"rickey.metamask\"]},\"sub_name_count\":{\"3\":1,\"6\":1},\"price\":{\"3\":70000000000000000,\"4\":50000000000000000,\"5\":40000000000000000,\"6\":20000000000000000,\"default\":20000000000000000,\"defaultp\":20000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692352168,\"token_id\":7,\"conf\":null}",
    "{\"name\":\"com\",\"hash\":\"b5fcf7e95d62d6d62a9de5c98619595652bd6d90a3ef4a4b23bde43cb10e3035\",\"contract\":\"0x622b2da072f2c9fc450ec57289117e2dc8ae8535\",\"sub_name\":{\"7\":[\"stephen.com\"]},\"sub_name_count\":{\"7\":1},\"price\":{\"3\":80000000000000000,\"4\":50000000000000000,\"5\":40000000000000000,\"6\":20000000000000000,\"default\":20000000000000000,\"defaultp\":20000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692360778,\"token_id\":9,\"conf\":null}",
    "{\"name\":\"name\",\"hash\":\"2361458367e696363fbcc70777d07ebbd2394e89fd0adcaf147faccd1d294d60\",\"contract\":\"0x779e25c05d3d6274a295ed9502a4da5a07425121\",\"sub_name\":null,\"sub_name_count\":null,\"price\":{\"3\":60000000000000000,\"4\":50000000000000000,\"5\":40000000000000000,\"6\":20000000000000000,\"default\":20000000000000000,\"defaultp\":20000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692407518,\"token_id\":10,\"conf\":null}",
    "{\"name\":\"eth\",\"hash\":\"4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0\",\"contract\":\"0x20ccebf4f44eeb2f9ba3ccc56db4114d8a211e67\",\"sub_name\":null,\"sub_name_count\":null,\"price\":{\"3\":70000000000000000,\"4\":60000000000000000,\"5\":40000000000000000,\"6\":30000000000000000,\"default\":30000000000000000,\"defaultp\":30000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692407698,\"token_id\":11,\"conf\":null}",
    "{\"name\":\"btc\",\"hash\":\"4bac7d8baf3f4f429951de9baff555c2f70564c6a43361e09971ef219908703d\",\"contract\":\"0x080baf9edfbc4ed5b6eb3715f4e0e27a76034984\",\"sub_name\":null,\"sub_name_count\":null,\"price\":{\"3\":70000000000000000,\"4\":50000000000000000,\"5\":40000000000000000,\"6\":20000000000000000,\"default\":20000000000000000,\"defaultp\":20000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692407833,\"token_id\":12,\"conf\":null}",
    "{\"name\":\"nick\",\"hash\":\"5d5727cb0fb76e4944eafb88ec9a3cf0b3c9025a4b2f947729137c5d7f84f68f\",\"contract\":\"0x3ddd6f3e5b45295407043d7af30f21a837519106\",\"sub_name\":null,\"sub_name_count\":null,\"price\":{\"3\":80000000000000000,\"4\":50000000000000000,\"5\":40000000000000000,\"6\":20000000000000000,\"default\":20000000000000000,\"defaultp\":20000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692665494,\"token_id\":28,\"conf\":null}",
    "{\"name\":\"fusdt\",\"hash\":\"a4d1f235afe9cea27ac39a785cb16e2e0bb9cb2130b76a5f5d53b9bc4a80c196\",\"contract\":\"0x7f4bb8740a7c5e44331d3db206d9b3683cb95ad1\",\"sub_name\":null,\"sub_name_count\":null,\"price\":{\"1\":50000000000000000000,\"2\":50000000000000000000,\"3\":50000000000000000000,\"4\":20000000000000000000,\"5\":20000000000000000000,\"6\":10000000000000000000,\"default\":10000000000000000000,\"defaultp\":10000000000000000000},\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"open_to_reg\":true,\"expireTime\":1692757201,\"token_id\":34,\"conf\":null}",
    "{\"name\":\"rickey.udid\",\"hash\":\"30ef76f5c5ac9f443936be27023ffb8bc476aa7b426361e7f7ea75a98d8d05aa\",\"father_name\":\"udid\",\"contract\":\"0x2a4e0df80fb188fbc41283317e20eb5a079ab326\",\"sub_name\":null,\"price\":null,\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"expireTime\":1692348939,\"token_id\":4,\"conf\":null}",
    "{\"name\":\"rickey.did\",\"hash\":\"412c8e3b58796224445db0e501f9d3830be9467702f0a693ea0713d699af82fa\",\"father_name\":\"did\",\"contract\":\"0xbf351a9f429932001b9f07102cf994a1d380d29c\",\"sub_name\":null,\"price\":null,\"owner\":\"0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede\",\"expireTime\":1692351522,\"token_id\":1,\"conf\":{\"eth\":\"0x5DA2a8Ec74A62089c8678E9DB3EA6D3E8D265edE\"}}"
  ]
}
```
## 3. Check the subdomain information under the root domain name

> 查根域名下的子域名信息

- Request

* method    : GET
* url       : /dns/querysub
* params    :

```js
{
    tldName:'com',[required]
    pageSize:10,
    pageNumber:0,
    minlen, 最小长度 
    maxlen, 最大长度
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 1,
    "page_size": 10,
    "page_number": 0,
    "data": [
    {
      "name": "stephen.com",
      "owner": "0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede",
      "expiration": 1692360958
    }
  ]
}
```

## 4. Check wallet address and root domain revenue summary

> 查钱包地址及根域名的收入汇总

- Request

* method    : GET
* url       : /dns/getincomebyaddr
* params    :

```js
{
    addr:'0xFd30d2c32E6A22c2f026225f1cEeA72bFD9De865',[required]
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 0,
    "page_size": 0,
    "page_number": 0,
    "data": {
    "income_summary": 316.61395258967644,
      "details": {
      "gogoogle": 63.34023222112866,
        "udid": 253.27372036854777
    }
  }
}
```

## 5. Check the sum of character lengths of all subdomains in the root domain

> 查根域名下所有子域名 各个字符长度的汇总值

- Request

* method    : GET
* url       : /dns/totalbysub
* params    :

```js
{
  tldName:'com',[required]
}
```



- Response

```js
{
    "code": 1,
    "message": "ok",
    "total": 0,
    "page_size": 0,
    "page_number": 0,
    "data": {
    "7": 1
  }
}
```

## 6. Single account withdrawal summary and details

> 单个账户提现汇总及明细

- Request

* method    : GET
* url       : /dns/getcashbyaddr
* params    :

```js
{
  addr:'0xFd30d2c32E6A22c2f026225f1cEeA72bFD9De865',[required]
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 0,
    "page_size": 0,
    "page_number": 0,
    "data": {
    "amount": 0.1,
      "details": [
      {
        "operator": "0xfd30d2c32e6a22c2f026225f1ceea72bfd9de865",
        "contract": "0x0d472c3ceee8fd52f624fe713f482f7fce7a1d63",
        "amount": 100000000000000000,
        "to": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
        "cash_time": 1663146627
      }
    ]
  }
}
```

## 7. Summary of individual account income summary of root domain name and details of root domain name

> 单个账户收入汇总 根域名汇总 及根域名明细

- Request

* method    : GET
* url       : /dns/getincomedetails
* params    :

```js
{
  addr:'0xFd30d2c32E6A22c2f026225f1cEeA72bFD9De865',[required]
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 0,
    "page_size": 0,
    "page_number": 0,
    "data": {
    "earnings": 316.61395258967644,
    "root_name_map": {
    "gogoogle": {
      "earnings": 63.34023222112866,
      "details": [
      {
        "contract": "0x63c3d32111b9847038fe52ac5822d5c72dfdd9eb",
        "register_owner": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
        "register_name": "jiu.gogoogle",
        "price": 10000000000000000000,
        "register_time": 1663146613
      },
      {
        "contract": "0x63c3d32111b9847038fe52ac5822d5c72dfdd9eb",
        "register_owner": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
        "register_name": "bsc.gogoogle",
        "price": 10000000000000000000,
        "register_time": 1663146613
      },
      {
        "contract": "0x63c3d32111b9847038fe52ac5822d5c72dfdd9eb",
        "register_owner": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
        "register_name": "9875.gogoogle",
        "price": 8000000000000000000,
        "register_time": 1663146613
      },
      {
        "contract": "0x63c3d32111b9847038fe52ac5822d5c72dfdd9eb",
        "register_owner": "0x1477876d1264be678636b19bd74adb48473311b7",
        "register_name": "sss.gogoogle",
        "price": 10000000000000000000,
        "register_time": 1663146613
      }
    ]
    },
    "udid": {
      "earnings": 253.27372036854777,
      "details": [
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xfd30d2c32e6a22c2f026225f1ceea72bfd9de865",
          "register_name": "lanbery.udid",
          "price": 10000000000000000,
          "register_time": 1663146610
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xddd29a4e667213485f7b56af4c1210742553e556",
          "register_name": "okex.udid",
          "price": 6000000000000000000,
          "register_time": 1663146610
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xddd29a4e667213485f7b56af4c1210742553e556",
          "register_name": "9527zxx.udid",
          "price": 10000000000000000,
          "register_time": 1663146610
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede",
          "register_name": "rickey.udid",
          "price": 4000000000000000000,
          "register_time": 1663146610
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
          "register_name": "cai.udid",
          "price": 7000000000000000000,
          "register_time": 1663146610
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
          "register_name": "98.udid",
          "price": 8000000000000000000,
          "register_time": 1663146611
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xd1af2fe0bc15e47c3a6c9f4270311b74ab5bf9d1",
          "register_name": "nevermore.udid",
          "price": 10000000000000000,
          "register_time": 1663146611
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x01dc42c9a940a2517b23fd9a3c26c2f30935da59",
          "register_name": "985.udid",
          "price": 7000000000000000000,
          "register_time": 1663146611
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xd66ba9cd5208517606fe41ed2c0f1b7e359686e3",
          "register_name": "yelihui.udid",
          "price": 10000000000000000,
          "register_time": 1663146611
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xddd29a4e667213485f7b56af4c1210742553e556",
          "register_name": "look.udid",
          "price": 6000000000000000000,
          "register_time": 1663146611
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x5120b54e64c1fba0a94ef2771dab84a97b7d7cc4",
          "register_name": "kes.udid",
          "price": 7000000000000000000,
          "register_time": 1663146612
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x25be8eeda3baa3110a5b29f8b70ea9b08136c755",
          "register_name": "t.udid",
          "price": 10000000000000000000,
          "register_time": 1663146612
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xc27d5edebafa61e08fa13d3e4ff4397fb730ee1f",
          "register_name": "8.udid",
          "price": 10000000000000000000,
          "register_time": 1663146612
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0x1477876d1264be678636b19bd74adb48473311b7",
          "register_name": "sss.udid",
          "price": 7000000000000000000,
          "register_time": 1663146612
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xd07bdb622a7e9d519a17c4c097bc479012761880",
          "register_name": "did.udid",
          "price": 7000000000000000000,
          "register_time": 1663146612
        },
        {
          "contract": "0x2a4e0df80fb188fbc41283317e20eb5a079ab326",
          "register_owner": "0xabcf83acfe4c616d81e65d6063558d2257705b9b",
          "register_name": "moon.udid",
          "price": 6000000000000000000,
          "register_time": 1663146613
        }
      ]
    }
    }
  }
}
```

## 8. List of domain names to be signed

> 待签名域名列表

- Request

* method    : GET
* url       : /dns/querysign
* params    :

```js
{
  addr:'0xd07bdb622a7E9d519a17c4C097Bc479012761880',[required]
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 0,
    "page_size": 0,
    "page_number": 0,
    "data": [
    {
      "name": "asimov7",
      "work": false,
      "erc_721_addr": "0x7Aa272f77d3d281bC217EB37E94B0898f030695D",
      "erc_20_addr": "0x0000000000000000000000000000000000000000",
      "income": 0.03,
      "singners": [
        "0xd07bdb622a7e9d519a17c4c097bc479012761880",
        "0x5da2a8ec74a62089c8678e9db3ea6d3e8d265ede",
        "0xd1af2fe0bc15e47c3a6c9f4270311b74ab5bf9d1"
      ],
      "owner": "0xd07bdb622a7e9d519a17c4c097bc479012761880",
      "token_id": 3
    },
    {
      "name": "namedao",
      "work": true,
      "erc_721_addr": "0xa2aB05d5252131783616e31d8853EA4411B11870",
      "erc_20_addr": "0x0000000000000000000000000000000000000000",
      "income": 0.53,
      "singners": [
        "0x5120b54e64c1fba0a94ef2771dab84a97b7d7cc4",
        "0x95421dc6e981f3a705e5d4ea6d8006e5aa5f4ffb",
        "0xd1af2fe0bc15e47c3a6c9f4270311b74ab5bf9d1",
        "0xd07bdb622a7e9d519a17c4c097bc479012761880"
      ],
      "owner": "0x5120b54e64c1fba0a94ef2771dab84a97b7d7cc4",
      "token_id": 13
    }
  ]
}
```

## 9. Configure the domain name parser

> 域名配置解析器

- Request

* method    : GET
* url       : /dns/resolve
* params    :

```js
{
  addrtype:'eth',[required]
  pageSize:10, 
  pageNumber:0
}
```



- Response

```js
{
  "code": 1,
    "message": "ok",
    "total": 32,
    "page_size": 10,
    "page_number": 0,
    "data": [
    {
      "name": "darkrain",
      "conf_type": "eth",
      "conf_value": "0x9a78Efd069dBb25EE33577069d62E1e68a4534dB"
    },
    {
      "name": "asimov7",
      "conf_type": "eth",
      "conf_value": "0xd07bdb622a7E9d519a17c4C097Bc479012761880"
    },
    {
      "name": "lanbery.udid",
      "conf_type": "eth",
      "conf_value": "0xFd30d2c32E6A22c2f026225f1cEeA72bFD9De865"
    },
    {
      "name": "naruto",
      "conf_type": "eth",
      "conf_value": "0x01dc42c9A940a2517b23fd9a3C26C2F30935da59"
    },
    {
      "name": "45643454534534534",
      "conf_type": "eth",
      "conf_value": "0x95421dC6e981f3a705E5D4EA6D8006e5aA5f4ffb"
    },
    {
      "name": "tesla",
      "conf_type": "eth",
      "conf_value": "0xE7c8680EcDf64829d6D33Fd8d5A0Cb1176FEa15d"
    },
    {
      "name": "gogoogle",
      "conf_type": "eth",
      "conf_value": ""
    },
    {
      "name": "cai.udid",
      "conf_type": "eth",
      "conf_value": ""
    },
    {
      "name": "gogoogle",
      "conf_type": "eth",
      "conf_value": ""
    },
    {
      "name": "gogoogle",
      "conf_type": "eth",
      "conf_value": ""
    }
  ]
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

