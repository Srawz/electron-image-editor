// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.remote.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
var fs1 = require('fs');
// console.log(path.join(__dirname,'../img'));
window.$=window.jQuery = require('jquery');
var myImg = fs1.readdirSync(path.join(__dirname,'../img'));

for(var i = 1;i < myImg.length;i++){
  if( myImg[i]!=='imagesnap')
  $('.disp').append('<img class="dispimg" src="../img/'+myImg[i]+'">')
}





//点击图片
$(".dispimg").click(function(){


  var route = $(this).attr('src');
  // console.log(route);

  var win = new BrowserWindow({ width: 800, height: 800})
  win.loadURL(url.format({
    pathname: path.join(__dirname,route),
    protocol: 'file:',
    slashes: true
  }))
});

//编辑
$(".pull-right").click(function(){

  var win = new BrowserWindow({ width: 1500, height: 800})
  win.loadURL(url.format({
    pathname: path.join(__dirname,'../view/edit.html'),
    protocol: 'file:',
    slashes: true
  }))
});

//拍照
$(".btn-default").click(function(){

  var win = new BrowserWindow({ width: 1500, height: 800})
  win.loadURL(url.format({
    pathname: path.join(__dirname,'../view/photo.html'),
    protocol: 'file:',
    slashes: true
  }))
});
