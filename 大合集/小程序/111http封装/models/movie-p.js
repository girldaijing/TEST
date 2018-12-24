import {HTTP} from "../utils/http-p";
class MovieModel extends HTTP{
    getInTheaters(){
        return this.request({
            url:"in_theaters"
        })
    }
    getTop250(){
        return this.request({
            url:"top250"
        })
    }
    getCommingSoon(){
        return this.request({
            url:"coming_soon"
        })
    }
}
export {
    MovieModel
}