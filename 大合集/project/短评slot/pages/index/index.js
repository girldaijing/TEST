//index.js
//获取应用实例
const app = getApp()
import {MovieModel} from "../../models/movie";
const movieModel=new MovieModel();
Page({
  data: {
      movies:[]
  },
 
  onLoad: function () {
       const intheaters=movieModel.getInTheaters();
       intheaters.then(res=>{
         let  intheaters=res;
        //  console.log(intheaters)

        var header=intheaters.title;
        // console.log(header)
        var movies=[]
        var subjects=intheaters.subjects;
        subjects.forEach(ele=> {
        // console.log(ele)
        var title=ele.title;
        var collect_count=ele.collect_count;
        var temp={
           title,
           collect_count,
        }
        movies.push(temp)
        });
        this.setData({
          header,
          movies
        })
        console.log(movies)
       })
  }
})
