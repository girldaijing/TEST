function http(url,callback){
    $.ajax({
        url,
        dataType:"jsonp",
        success: function(res) {
            callback(res)
        }
    })
}

function promise(url){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url,
            dataType:"jsonp",
            success(res){
                resolve(res)
            },
            error(err){
                reject(res)
            }
            
        })
    })
}