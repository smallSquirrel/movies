var express = require('express')
var port = process.env.PORT || 3000   //process 全局变量，获取环境的变量
var app = express()

app.set('views','./views')   //设置视图文件地址
app.set('view engine','jade')   //设置模板引擎

app.listen(port)

console.log('movies starting in port:'+port)


//index page
app.get('/',function(req,res){
  res.render('index',{
    title:'index-首页'
  })
});

//details page
app.get('/movis/:id',function(req,res){
  res.render('details',{
    title:'details-详情页'
  })
});

//admin page
app.get('/admin',function(req,res){
  res.render('admin',{
    title:'admin-后台录入页'
  })
});

//list page
app.get('/admin/list',function(req,res){
  res.render('list',{
    title:'list-列表页面'
  })
});
