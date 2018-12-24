// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     comment:String
  },

  // 使用slot传递什么东西,这两个必须注册
  options:{
   multipleSlots:true
  },
  externalClasses: ['tag-class'],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
