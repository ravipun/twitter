//Load Twitter Module
const twitModule = require('./twitterModule');
var T = twitModule.T


module.exports = {
    searchTwit : function searchTweet(){
    var params = {
        q:'#ทดสอบAPITwitter',
        count:100
    }
    T.get('search/tweets',params,gotData);
            function gotData(err,data,response){
            if(err) {
                console.log(err)
            } else {
            console.log(data)
            }
    }
    }
}