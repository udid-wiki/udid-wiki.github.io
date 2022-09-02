# API interface general specification

> Url 以 /api + v1 版本号开头 

* example:

  /apiv1/dns/querysign?addr=0x...

* Response data structure

```js
{
    "code":1,           // interface response status code
    "message":"ok",     // interface response status message
    "data": null        // interface response data : undefined | String |Number |Array |Object|Boolean |Null
}
```

----

## Demo api


