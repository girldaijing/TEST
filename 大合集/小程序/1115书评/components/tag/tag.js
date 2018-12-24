// components/tag/tag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      content:String,
  },
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
      onAdd(){
        this.triggerEvent("add",{value:this.properties.content})
      }
  }
})
