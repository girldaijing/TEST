import {config} from "../config"
class HTTP{
    request({
    url,
    method="GET",
    data={},
    success
    }){
     wx.request({
         url:config.base_url_api+url,
         data,
         method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
         header: {
             'Content-Type':'application/json',
             "appkey":config.appkey
         }, // 设置请求的 header
         success: res=>{
             // success
            //  const statusCode=res.statusCode.toString();
             const statusCode = res.statusCode.toString();
             if (statusCode.startsWith("2")) {
               success&&success(res.data)
             } else {
               this._show_error()
             }
   
         },
         fail:err=>{
      
             this._show_error();   
         },
     })
    }
    _show_error() {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        })
      }    
}
export {HTTP}