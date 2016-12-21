
window.$ = window.jQuery = require('jquery');
const path = require('path')

var video=document.getElementById("video");
var context=canvas.getContext("2d");
var errocb=function(){
    console.log("sth srong");
}
var fs1 = require('fs');

navigator.webkitGetUserMedia(
        {video: true},
        function (stream) {
            video.src = window.URL.createObjectURL(stream);
            localMediaStream = stream;
        },
        function () {
            alert('your browser does not support getUserMedia');
        }
);
document.getElementById("paizhao").addEventListener("click",function(){
    context.drawImage(video,0,0,1024,768);
});
//拍照
$("#paizhao").click(function(){
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + date.getHours() + seperator2 + date.getMinutes()
          + seperator2 + date.getSeconds();

  var child_process = require('child_process');
  console.log();
  child_process.execSync('cd '+path.join(__dirname,'../img')+' &&  ./imagesnap '+currentdate+'.jpg', function(error, stdout, stderr){
      if(error){
          throw error;
      }else{
          console.log(stdout);
      }
  });

});
