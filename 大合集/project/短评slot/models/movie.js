import{HTTP}from "../utils/http"
class MovieModel extends HTTP{
    getInTheaters(){
        return this.request({
            url:"in_theaters"
        })
    }
}
export {
    MovieModel
}