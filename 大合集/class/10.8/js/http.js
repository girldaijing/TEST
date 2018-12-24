function http(url,callback){
    $.ajax({
        type:"get",
        url,
        dataType:"jsonp",
        success(res){
            callback(res);
        }
    })

}