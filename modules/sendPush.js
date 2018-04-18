const request = require('request');

var IdUser = 'fUapoqS7lgE:APA91bF-K_f3MP8l6rddYM_Hb5faSLq41M4yl9u_vrVPmgeGUgMbaRzi3Wr7DSNC8QZP9ccQWxhnuWchs3cPhnJyEETfD70T2zdOO0myo1nRhplVEGHfOp7eBZR93hHd81JcJQP3jKeE';
function sendPush(idUser) {
    console.log(idUser);
    request({
        url: "https://gcm-http.googleapis.com/gcm/send",
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': 'key=AIzaSyAadM3P7ingR9IuFXJCFzrT7oFN3q95FX4',
        },
        body: JSON.stringify({
            'registration_ids': [idUser]})
    },
        function (error, response, body) {
            if (error) {
                return console.error('upload failed:', error);
            }
            console.log(response);
            console.log('Upload successful!  Server responded with:', body);
        });
}

module.exports = sendPush;
// curl --header "Authorization: key=AIzaSyAadM3P7ingR9IuFXJCFzrT7oFN3q95FX4" \
// --header Content-Type:"application/json" \
// https://gcm-http.googleapis.com/gcm/send \
//     -d "{\"registration_ids\":[\"fUapoqS7lgE:APA91bF-K_f3MP8l6rddYM_Hb5faSLq41M4yl9u_vrVPmgeGUgMbaRzi3Wr7DSNC8QZP9ccQWxhnuWchs3cPhnJyEETfD70T2zdOO0myo1nRhplVEGHfOp7eBZR93hHd81JcJQP3jKeE\"]}"
