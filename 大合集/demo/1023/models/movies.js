import {HTTP} from "../utils/http";
const movie="movie/";
class MovieModel extends HTTP{
    getTop250(callback){
        this.request({
            url:movie+"top250",
            success: res=>{
                 callback(res);
            }
        })
    }
    getComingSoon(callback){
        this.request({
            url:movie+"coming_soon",
            success:res=>{
                callback(res)
            }
        })
    }
}
export {MovieModel};