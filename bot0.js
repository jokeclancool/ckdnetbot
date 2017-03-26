var linebot = require('linebot');
var express = require('express');

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


    var m = "สวัสดี "  + event.source.userId + " " + testm("test") ;
//   event.reply({ type: 'text', text: m});

   event.reply({
       type: 'image',
       originalContentUrl: 'https://storage.thaicarecloud.org/editor/BD/IMG_3627.PNG',
       previewImageUrl: 'https://storage.thaicarecloud.org/editor/BD/IMG_3627.PNG'
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

const app = express();
const linebotParser = bot.parser();
app.post('/linebot', linebotParser);
app.listen( process.env.PORT || 3000);


//bot.listen('/linebot', process.env.PORT || 3000);
