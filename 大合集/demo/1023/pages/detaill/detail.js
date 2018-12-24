// pages/detaill/detail.js
import {MovieModel} from "../../models/movies";
var movie=new MovieModel();
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
       num:10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(){
    movie.getTop250(res=>{
      console.log(res);
    })
    movie.getComingSoon(res=>{
      console.log(res)
    })

  },

  
})