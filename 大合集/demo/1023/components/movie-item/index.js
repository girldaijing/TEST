// components/movie-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  movieId:String,
    //  title:String,
    //  imgUrl:String,
     num:{
       type:Number,
       value:0,
       observer:function(newVal,oldVal,changedPath){
         console.log(newVal);
         console.log(oldVal);
         var value=newVal+10;
         this.setData({
           _num:value
         })
       }
     }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _num:null
  },

  /**
   * 组件的方法列表
   */
  // methods: {
  //   onclick(){
  //     var movieId=tjis.properties.movieId;
  //     wx.navigateTo({
  //       url: '/pages/detail/detail?movieId='+movieId
  //     })
  //   }

  // }
})
