// pages/book/book.js
import {BookModel} from "../../models/book"
const bookModel=new BookModel()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      books:[]
  },

  onLoad: function (options) {
     bookModel.getHotBook().then(res=>{
      this.setData({
        books:res
      })
     })
  },

  onsearch(){
     wx.navigateTo({
       url: '/pages/search/search'
     })
  }
})