// components/success/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
         src:{
           type:Boolean
         },
         param:{
           type:String
         }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
        handleclick(){
          // var type=this.data.type;
          // this.setData({
          //   type:!type
          // });
          // console.log("组件可以使用js")
          
          // var src=this.properties.src;
          console.log(this.data)
        }
  }
});
