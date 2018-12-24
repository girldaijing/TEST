// conponents/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:Number
  },
  data: {
     year:0,
     month:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached(){
     let date=new Date();
     let year=date.getFullYear();
     let month=date.getMonth();
     this.setData({
       year,
       month
     })
  }
})
