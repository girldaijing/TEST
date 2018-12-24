import {config} from "../config"
class HTTP{
    request({url,method="GET",data={}}){
        return new Promise((resolve,reject)=>{
           wx.request({
               url: config.base_url_api+url,
               data,
               method, 
               header: {
                'Content-Type':'application/json',
                "appkey":config.appkey
               }, 
               success:res=>{
                 
                   resolve(res.data)
               },
               fail: err=>{
                 
                   reject(err)
               },
             
           })
        })
    }
}
export{HTTP}