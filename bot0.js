var linebot = require('linebot');
var express = require('express');
var request = require('request');
const app = express();

var bot = linebot({
    channelId: "1506550028",
    channelSecret: "61a5028a4d00c01d7c179dcc41f849c2",
    channelAccessToken: "Dhs/TAId7FiwLOfTtzMobtuMH1qTeKMhinhMagfXxwyFGdMeiMFvU1FDMYoawd8g4gG6zA4ccoqyXTfCPQFD/V8ZY2Mgr1PKPYR+AqXqs8zD3ftNbJEGbr1Z2vX+WwuKRMsEs/zTclZy8xf2coG2IgdB04t89/1O/w1cDnyilFU="
});
var testm = function (m) {
  return m;
}

bot.on('message', function (event) {
  if( event.source.type == "user" ){

var imageurl="";
    var m = "สวัสดี "  + event.source.userId + " " + testm("test") ;
//   event.reply({ type: 'text', text: m});
request.get('https://www.thaicarecloud.org/emobile/linebot', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var imageurl = body;
        // Continue with your processing here.
        event.reply({
            type: 'image',
            originalContentUrl: imageurl,
            previewImageUrl: imageurl
        });

        
    }
});

    return;

  }



  var test =event.message.text;
  if( test.indexOf('ckdbot') >= 0){

    var m = "สวัสดี "  + event.source.type + " " + testm("test")  ;
    event.reply({ type: 'text', text: m});

}

});





bot.on('join',     function (event) {
event.reply({ type: 'text', text: event.source.groupId});
});

app.get('/testimg', function(req, res){
    //var imageurl ="";
  request.get('https://www.thaicarecloud.org/emobile/linebot', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var   imageurl = body;
           res.send(imageurl);
          // Continue with your processing here.
      }});



});


const linebotParser = bot.parser();
app.post('/linebot', linebotParser);
app.listen( process.env.PORT || 3000);


//bot.listen('/linebot', process.env.PORT || 3000);
