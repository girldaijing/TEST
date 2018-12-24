//index.js
//获取应用实例
const app = getApp()
import {MovieModel} from "../../models/movie-p.js";
const movieModel=new MovieModel();
Page({
  data: {
    
  },
  //事件处理函数
 
  onLoad: function () {
    //  movieModel.getInTheaters().then(res=>{
    //    console.log(res)
    //  })


     const inTheaters=movieModel.getInTheaters();
     const top250=movieModel.getTop250();
     const comingSoon=movieModel.getCommingSoon();
   
    Promise.all([inTheaters,top250,comingSoon]).then(res=>{
       let[inTheaters,top250,comingSoon]=res;
       console.log(inTheaters)
       console.log(top250)
       console.log(comingSoon)
    })
  }
})
