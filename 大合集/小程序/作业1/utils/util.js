function http(url,callback,type){
  wx.request({
    url,
    header: {
      'Content-Type': 'json'
    },
    success: function(res) {
       callback(res,type);
    }
  })
}


function handleCasts(casts){
  var arr=[];
  casts.forEach(ele=>{
    arr.push(ele.name)
  })
  var newArr=arr.join(" ");
  return newArr
}


export default{
  http,
  handleCasts
}
