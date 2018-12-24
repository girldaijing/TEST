// pages/index/index.js
Page({
  data:{
    show:false
  },
  onLoad(){
    console.log(1);
    
    this.handle();
  },
  click(){
    if(this.data.show){
      this.setData({
        show:false
      })
    }else{
      this.setData({
        show:true
      })
    }
  },
  handle(){
    console.log("handle")
  }  
});