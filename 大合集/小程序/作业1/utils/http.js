import{config} from "../config";
class HTTP{
    request({url,method="GET",data={},}){
        const promise=new Promise((resolve,reject)=>{
            wx.request({
                url: config.base_url_api+url,
                data,
                method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                    'Content-Type':'json'
                }, // 设置请求的 header
                success: function(res){
                    // success
                    const statusCode=res.statusCode.toString();
                    if(statusCode.startsWith("2")){
                        resolve(res.data);
                    }else{
                        this._show_error()
                    }
                },
                fail: function(err) {
                    // fail
                    reject(err)
                    this._show_error();
                },
              
            })
        })
        return promise
    }
    _request({
        url,
        method="GET",
        data={},
        success
    }){
        wx.request({
            url: config.base_url_api+url,
            data,
            method,
            header: {
                'Content-Type': 'json'
            },
            success: function(res) {
                 const statusCode=res.statusCode.toString();
                 if(statusCode.startsWith("2")){
                     success(res.data)
                 }else{
                     this._show_error()
                 }
            },
            fail: function() {
                this._show_error()
            }
        })
    }
    _show_error(){
        wx.showToast({
            title: '网络错误',
            icon: 'none'
        })
    }
}
export{HTTP}