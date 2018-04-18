'use strict';

function SendPushMe() {
    if ('serviceWorker' in navigator) {
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('/serviceworker/sw.js').then(function () {
            return navigator.serviceWorker.ready;
        }).then(function (reg) {
            console.log('Service Worker is ready :^)', reg);
            reg.pushManager.subscribe({userVisibleOnly: true}).then(function (sub) {
                var login = localStorage.getItem('username');
                console.log('endpoint:', sub.endpoint);
                $.ajax({
                    method: "POST",
                    url: "/notification",
                    data: { userId: sub.endpoint,login}
                })
                    .done(function( msg ) {
                        console.log( "Data Saved: " + msg );
                    });
            });
        }).catch(function (error) {
            console.log('Service Worker error :^(', error);
        });
    }
}

$(()=>{
    SendPushMe()
});