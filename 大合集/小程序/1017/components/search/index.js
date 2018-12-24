// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     search:String  //在子主键里注册search
  },

  /**
   * 组件的初始数据
   */
  data: {
      count:1
  },

  /**
   * 组件的方法列表
   */
  methods: {
       onLike(){
         var count=this.data.count;
         this.triggerEvent('like',{
             count
         })
       }
  }
});
