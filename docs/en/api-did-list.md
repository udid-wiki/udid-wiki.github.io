

<!-- span class="content-title"> DID list API</span -->
# DID list API

## 1.Get my top level did list

> 获取我的 Top level DID 列表

- Request

**${.api-method} GET** /api/dids/top/get_list


<!-- tabs:start -->

<!-- tab:API document -->
- 1. coinbase : current connected address . [required]
- 2. pageSize: Number [default 10]
- 3. pageNumber : Number [default 1]

<!-- tab: JSON -->

```js
{
    coinbase:'0xAe..98c5',
    pageSize:10,
    pageNumber:1
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
        pageNumber:1,
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

**${.api-method} GET** /dids/second/get_list

<!-- tabs:start -->

<!-- tab:API document -->
- 1. coinbase : current connected address . [required]
- 2. pageSize: Number [default 10]
- 3. pageNumber : Number [default 1]

<!-- tab: JSON -->

```js
{
    coinbase:'0xAe..98c5',
    pageSize:10,
    pageNumber:1
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
        pageNumber:1,
        items:[
            {
                name:"lanbery.udid",
                erc721_addr:'0x67...98Fd',// Top DID erc721addr [即 udid 的 erc721Addr]
                token_id:1, // 二级域名本身 tokenId
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

**${.api-method} GET** /did/top/get_open_dids



<!-- tabs:start -->
<!-- tab:API document -->
- 1. coinbase : current connected address . [required]
- 2. pageSize: Number [default 10]
- 3. pageNumber : Number [default 1]

<!-- tab: JSON -->

```js
{
    coinbase:'0xAe..98c5',
    pageSize:10,
    pageNumber:1
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
        pageNumber:1,
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
