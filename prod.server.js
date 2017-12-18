var  express= require('express');
var config = require('./config/index.js');

var port=process.env.PORT||config.build.port;

var app = express();
var router= express.Router();

router.get('',function(req,res,next){
	req.url='/index.html';
	next();
});

app.use(router);

var appData = require('./data.json');
var seller=appData.seller;    //获取data.json中的商家数据
var goods=appData.goods;      //商品数据
var ratings=appData.ratings   //评论数据
//编写路由
var apiRoutes=express.Router();
//编写接口
apiRoutes.get('/seller',function(req,res){ //取数据
  res.json({
    errno:0,//数据正常时通过0来标识，真实情况比如对数据有权限限制之类的errno可能不为0，具体数值根据业务所定的错误码
    data:seller
  });
});
apiRoutes.get('/goods',function(req,res){ //取数据
  res.json({
    errno:0,    
    data:goods
  });
});
apiRoutes.get('/ratings',function(req,res){ //取数据
  res.json({
    errno:0,    
    data:ratings
  });
});
//定义好后要在express中使用他,这里即可通过localhost:8080/api/goods查看到从模拟的数据文件中获取到的数据了
app.use('/api',apiRoutes);

app.use(express.static('./dist'));


module.exports =app.listen(port,function(err){
   if (err) {
   	console.log(err);
   }
  console.log('listening at http://localhost:' +port+'\n')
});