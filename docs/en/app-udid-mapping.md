

<!-- span class="content-title"> Support Mapping Type</span -->
# Support Mapping Type List

- There are 5 interfaces in this section, which are used for the mapping of configuration names in the udid network; the 4th and 5th interfaces are written interfaces, and the owner of the name is required to update the mapping.
- The reverse mapping does not make a unique judgment on the fourth interface, mainly because there is no way to know whether the configured address belongs to the user itself.
- The fifth interface is used to solve the above problem. For the configured address, if the user can provide the signature of the configured address itself, the mapping configuration considers that the configuration has passed the authentication. For the application, the authenticated configuration must be used first.

## 1.Get all mapping type

> API: Get all mapping type 

- Request

**${.api-method} GET** /conf/types


- Response

```js
{
    "code":0,       
    "errMsg":"success",
    "result":[
        "resolve",
        "eth",
        "btc",
        "sol",
        "etc",
        "trx",
        "eos",
        "bnb",
        "fil",
        "ipv4",
        "ipv6",
        "cname"
    ]
}
```

----

## 2.Get Mapping Value from a DID

> API: Get Mapping Value from a DID

- Request

**${.api-method} GET** /conf/mapping?name=[did]

<!-- tabs:start -->

<!-- tab:API document -->
- 1. name : did . [required]

<!-- tab: JSON -->

```js

```

<!-- tabs:end -->

- Response

```js
{
    "code":0,       //code > 0, not a correct reponse
    "errMsg":"success",
    "result":{
        "name":"xx.did",    //from request parameter
        "conf":{
            "btc":{
                "value":"bc1q9x30z7rz52c97jwc2j79w76y7l3ny54nlvd4ew",   //mapping to a btc address
                "auth":false    //it is not a authorized value, it is not be trusted
            },
            "cname":{
                "value":"rickey.did",
                "auth":false
            },
            "eth":{
                "value":"0x780f881b5f0EDf0CbA1F4baa4da697D0Bc3531b1",
                "auth":true     //it was authorized value, application should use it priority.
            },"ipv4":{
                "value":"127.0.0.1",
                "auth":false
            }
        },
        "timeStamp":1663419982, //last modify date
        "userAddr":"0x9737100D2F42a196DE56ED0d1f6fF598a250E7E4" //did is belong to this user
    }
}

```

---

## 3.Get DID by mapping value (Reverse mapping value)

> API: Get DID by mapping value

- Request

**${.api-method} GET** /conf/reversemapping?type=[type value]&key=[mapping value]



<!-- tabs:start -->
<!-- tab:API document -->
- 1. type: type value from /conf/types
- 2. key: a value of type

<!-- tab: JSON -->

```js

```

<!-- tabs:end -->


- Response

```js
{
    “code”:0,
    "errMsg":"success",
    "result":[
        {
            "value":"xx.did",
            "auth":true
        },
        {
            "value":"x1.did",
            "auth":false
        }
    ]
}
```


----

## 4.Save Mapping value

> API: Save Mapping value

- Request

**${.api-method} POST** /conf/save

<!-- tabs:start -->

<!-- tab:API document -->
- Post Content
1. content: json serialized from Configuration Json
2. sig: . [required] //sign content by current user
- Configuration Json 
1. content.name : did . [required]
2. content.operation: 3 . [required]
3. content.conf.btc: . [option]  //type of btc, eth, ipv4 etc.. from /conf/types
4. content.timeStamp: . [required] //signature will expired after 120s 
5. content.userAddr: . [required] //user address

<!-- tab: JSON -->

- 1. Post Content -- serialized from Configuration Json
```js
{
    "content":"{\"name\":\"xx.did\",\"operation\":3,\"conf\":{\"btc\":\"bc1q9x30z7rz52c97jwc2j79w76y7l3ny54nlvd4ew\",\"cname\":\"rickey.did\",\"eth\":\"0x780f881b5f0EDf0CbA1F4baa4da697D0Bc3531b1\",\"ipv4\":\"127.0.0.1\"},\"timeStamp\":1663512074,\"userAddr\":\"0x9737100D2F42a196DE56ED0d1f6fF598a250E7E4\"}",
    "sig":"81fe6af5093c687982dc45d9f5258aeb1950423b7a84e11d94e08e8c9c45bb606820bd393e246a7e213cf5b16ac1246ae8966fe5443b898434cf18e21cd9d5f100"
}
```

- 2. Configuration Json
```js
{
    "name":"xx.did",        //did 
    "operation":3,          //must be 3
    "conf":{
        "btc":"bc1q9x30z7rz52c97jwc2j79w76y7l3ny54nlvd4ew", //type is btc from /conf/types
        "cname":"rickey.did",
        "eth":"0x780f881b5f0EDf0CbA1F4baa4da697D0Bc3531b1",
        "ipv4":"127.0.0.1"
    },
    "timeStamp":1663512074,         //current time, the signature will expired timeStamp+120s
    "userAddr":"0x9737100D2F42a196DE56ED0d1f6fF598a250E7E4"  //owner of did
}
```

<!-- tabs:end -->

- Response

```js
{
    "code": 0,      //code > 0, failed
    "errMsg": "success",
    "result": null
}
```


----

## 5.Authrize Mapping value

> API: Authrize Mapping value

- Request

**${.api-method} POST** /conf/authmapping

<!-- tabs:start -->

<!-- tab:API document -->
- Configuration Item
1. name: . [required] //did
2. type: . [required] //eth,btc ..
3. value: . [required] //eth address, btc address, ipv4 address ...
4. timeStamp: . [required] //item signature expire time, 5 minutes is recommanded
- Configuration Json 
1. itemContent : . [required]  //json serialized from Configuration Item
2. itemSig: . [required]    //signature which sign with value address of Configuration Item
3. timeStamp: . [required]  //Configure Json expire time, 120 second is recommanded
4. userAddr: . [required] //owner of did 
5. operation: . [required] //value must be 4
- Post Content
1. content: . [required] //json serialized from Configuration Json
2. sig: . [required] //signature which sign Configuration Json with owner of did

<!-- tab: JSON -->

- 1. Configuration Item
```js
{
    "name":"xx.did",
    "type":"eth",
    "value":"0x780f881b5f0EDf0CbA1F4baa4da697D0Bc3531b1",
    "timeStamp":1663515687
}
```

- 2. Configuration Content
```js
{
    "itemContent":"{\"name\":\"xx.did\",\"type\":\"eth\",\"value\":\"0x780f881b5f0EDf0CbA1F4baa4da697D0Bc3531b1\",\"timeStamp\":1663515687}","itemSig":"5c1413af84983caa9b9ef3619da8c07d10cf742356a607a1d63b706108e1295f032f85e8fec077f086abc8549485c8dc7eb65f9781c3f7ff53178c88fb3a489e00","timeStamp":1663515688,
    "userAddr":"0x9737100D2F42a196DE56ED0d1f6fF598a250E7E4",
    "operation":4
}
```

- 3. Post Content
```js
{
    "content":"{\"itemContent\":\"{\\\"name\\\":\\\"xx.did\\\",\\\"type\\\":\\\"eth\\\",\\\"value\\\":\\\"0x780f881b5f0EDf0CbA1F4baa4da697D0Bc3531b1\\\",\\\"timeStamp\\\":1663515687}\",\"itemSig\":\"5c1413af84983caa9b9ef3619da8c07d10cf742356a607a1d63b706108e1295f032f85e8fec077f086abc8549485c8dc7eb65f9781c3f7ff53178c88fb3a489e00\",\"timeStamp\":1663515688,\"userAddr\":\"0x9737100D2F42a196DE56ED0d1f6fF598a250E7E4\",\"operation\":4}",
    "sig":"a0040c4478bcdc9391e23aaeb4af004b0295ed41be7c9bc97fd52aeb0360d91e31dee4c00b7b7f03f6639bbdb89987578a7d4cc59aff2f63b43061b98688647301"
}
```

<!-- tabs:end -->

- Response

```js
{
    "code": 0,      //code > 0, failed
    "errMsg": "success",
    "result": null
}
```
