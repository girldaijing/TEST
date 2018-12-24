//将组件共有的JS提取出来
var common= Behavior({
    properties: {
        title:String,
        content:String
    },
})
export {common}