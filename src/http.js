

function getData(){
    var  url="https://apkparse.inxtech.cn/online1c1.json";
    var res=http.get(url);
    log(res);
    if(res.statusCode=200){
        toast("请求成功")
        log("=================>>>>>0");
        log(res.body);
        log(res.body.string());
        log("=================>>>>>1");
    }else{
        toast("请求失败")
    }
}
threads.start(function(){
    getData();
});