//Load Twitter Module
const twitModule = require('./twitterModule');
var T = twitModule.T


module.exports = {
    getListTwitter : function getListTwitter(){
        
        var params = {
            user_id : 1140091420511887400
        }
        
        T.get('lists/list',params,getList);
        function getList(err,data,response){
            if(err){
                console.log(err)
            } else {
            console.log(data);
            }
        }
    }
}