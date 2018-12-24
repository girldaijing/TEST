import{HTTP}from "../utils/http"
class MovieModel extends HTTP{
    getInTheaters(){
        return this.request({
            url:"in_theaters",
            // type:in_theaters
        })
    }
    getTop250(){
        return this.request({
            url:"top250",
            // type:"top250"
        })
    }
    getComingSoon(){
        return this.request({
            url:"coming_soon",
            // type:coming_soon
        })
    }
    getUsBox(){
        return this.request({
            url:"us_box",
            // type:us_box
        })
    }
}
export{
    MovieModel
}