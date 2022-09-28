

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
- 1. pageSize: Number [default 200]
- 2. pageNumber : Number [default 1]

<!-- tab: JSON -->

```js
{
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
        pageSize:200,
        pageNumber:1,
        items:[
            {
                name:"udid",
                erc721_addr:'0x67...98Fd',// Top DID erc721addr [即 udid 的 erc721Addr]
                token_id:1, //  tokenId
                expire_time:219291131,
                owner:'0x64....D865',
                usdt_prices:['300000000000','2000000000'] ,// 已开启的价格数组 数组，只有数组中有一个值 > 0 ,即视为，已开启二级注册。 UI 开启也是用此规则

            },
            ...
        ]
    }
}
```

-----

# TLD Analysis

## 4.Get the top level did second level registration counts

> 获取指定 Top Level DID 的二级域名注册数量 

- Request

**${.api-method} GET** /dns/did/top/get_second_counts



<!-- tabs:start -->
<!-- tab:API document -->
- 1. tldName : string [required] 
- 2. rules: array [required]  :域名规则条件  {rule:'1~2',min:0,max:3 } min<= len < max
- 3. coinbase: address []

<!-- tab: JSON -->

```js
{
    tldName:'did',              //required
    rules:[
      {rule:'1~2',min:0,max:3 },   // min<= len <max
      {rule:'3',min:3,max:4 },     // min(3)<= len <max(4)
      {rule:'4~6',min:4,max:7 },
      {rule:' 7 or more',min:7}
    ]           
    coinbase:'0xF...865',       //optinal
}
```

<!-- tabs:end -->


- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
      all:721,
      rules:[
        {rule:'1~2',min:0,max:3 ,total:10, },   // min<= len <max
        {rule:'3',min:3,max:4 ,total:22},     // min(3)<= len <max(4)
        {rule:'4~6',min:4,max:7 ,total:22},
        {rule:' 7 or more',min:7 ,max:128,total:20}
      ]
    }
}
```

----
## 5.Get the top level did second level registration counts

> 获取指定 Top Level DID 的二级域名注册数量 

- Request

**${.api-method} GET** /dns/did/top/get_second_counts



<!-- tabs:start -->
<!-- tab:API document -->
- 1. tldName : string [required] 
- 2. min： number [defaut:0]     
- 3. max: number [default:128]   : 128 为域名规范中最大长度， 所以所有域名不会超过此值
- 4. coinbase: address [optinal]
- 5. pageSize: number 10 [default]
- 6. pageNumber: number 0 [default]

<!-- tab: JSON -->

```js
{
    tldName:'did',              //required
    min：0,
    max:5,                      // query  min <=length < max   // length 指 xxx.com 中 xxx length = 3
    coinbase:'0xF...865',       //optinal
    page_size: 10,
    page_number:0,
}
```

<!-- tabs:end -->


- Response

```js
{
    code:1,  // 1 服务正常返回，0 服务端异常
    message:'ok',// 异常时 描述
    data:{  // 异常时 data null 或 无此字段
      total:721,
      page_size:10,
      page_number:0,
      items:[
        {
          name:'abc.did',
          erc_721_addr:'0x...ef',
          expire_time:112123123,
          token_id:12,
          owner:'0x...865'
        }
      ]
    }
}
```
