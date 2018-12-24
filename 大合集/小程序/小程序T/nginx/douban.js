var url=require('url');
var http = require('http');
var server = http.createServer((request, response) => {
    //获取要访问的路径
    var pathname=url.parse(request.url).pathname;
    //生成整个访问链接
    var requrl='http://api.douban.com'+pathname;
    //缓存数据
    var body = [];
    response.writeHead(200, { 'Content-Type': 'application/json' });
//发起代理请求
    http.get(requrl, function (res) {
        res.on('data', (chunk) => {
            body.push(chunk)
        });
        res.on('end', () => {
            body = Buffer.concat(body);
            //请求回来的数据写入浏览器
            response.end(body.toString())
        })
    });
})
server.listen(8000);

