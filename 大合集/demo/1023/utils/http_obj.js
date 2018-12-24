function sliceTitle(title){
  if(title.length>6){
      title=title.slice(0,6)+"...";
  }
  return title;
}



var tips={
    1:"没有网络",
    999:"无效请求",
    // 400:"错误请求",
    5000:"没有这个电影"
  }
  
  function http(params){
    if(!params.method){
      params.method="GET";
    }
    wx.request({
      url:params.url,
     method:params.method,
     data:params.data,
  
      header: {
        'Content-Type':'json'
      }, // 设置请求的 header
      success: function(res){
        // success
        var statusCode=res.statusCode.toString();//statusCode状态码
        if(statusCode.startsWith("2")){
          params.success(res.data)
        }else{
         
          var errorCode=res.data.code;
          console.log(res);
          _show_error(errorCode);
        }
      },
      fail: err=>{
        
        _show_error(1);
      },
    })
  }
  
  function _show_error(errorCode){
    wx.showToast({
      title: tips[errorCode],
      icon: 'none',
      duration:2000
    })
  }
  
  export{
    http,
  
  }