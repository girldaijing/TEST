// pages/map/map.js
const app = getApp()

Page({
  data:{
    longitude:114.333649,
    latitude:30.537094,
    circles:[{
      longitude:114.333649,
      latitude:30.537094,
      radius:30,
      fillColor:"#4555ffaa"
    }],
    markers:[{
      iconPath:"/images/icon/map.png",
      longitude:114.333649,
      latitude:30.537094,
      width:20,
      height:20,
      title:"极客营科技",
      id:0,
      label:{
        content:"武汉极客营有限公司",
        color:"#44f",
        borderWidth:1,
        borderColor:"#44f",
        padding:5,
        borderRadius:5
      },
      callout:{
        content:"极客营科技",
        color:"#44ff",
        borderWidth:1,
        borderColor:"#44f",
        padding:5,
        borderRadius:5
      }
    }],
  },
  marker(){
    
  }
})