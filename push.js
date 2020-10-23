var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BLqnzNMyLMTLozMvLEiihnaguGA9yE9-xNvd3EtYOIJlScfbG5DyzYsTi3b-Ru7ApUkruYWaweHELTWhm9OZIDk",
    "privateKey": "JkuFsStydHozNI-HduAOUH8jTe6dPSDhT8qhV1sgR7Y"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/djVYDHnFCvk:APA91bFIXD9kbDM0bjVdHzol3KB00GlxIp9RRbPGnreBLnLAEg_af-MptYLaLaRtuCgpIh2B3RqyMtn6coqyTqysduUfm6xv4xQl0JMLpLbjurTPd_G4SrH3bG4YIBtDw3UWEVNG0fxr",
    "keys": {
        "p256dh": "BHkSwzB+zlfoO0I/UfcFpFq4JNOpgUn/gief38QIuwpq+73MnIvyFNEvvDPNKnbSkjaIn61d596829HYWWqucVY=",
        "auth": "WACKo86g3kRL0btddCGmSA=="
    }
};

var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi';
var options = {
    gcmAPIKey: '763852040401',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);