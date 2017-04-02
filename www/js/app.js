var app = angular.module('longshore-boats-otd', ['ionic', 'ionic.cloud', 'ngCordova' ]);

app.config(function($ionicCloudProvider, $compileProvider, $ionicConfigProvider){
  $ionicCloudProvider.init({
    "core": {
      "app_id": "33d9d68e"
    },
    "push": {
      "sender_id": "1094185085815",
      "pluginConfig": {
        "ios": {
          "badge": true,
          "alert": true,
          "sound": true
        },
        "android": {
          "iconColor": "#343434"
        }
      }
    }
  });

  $ionicConfigProvider.tabs.position('bottom');

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|map|geo|skype):/);
});

app.run(function($ionicPlatform, $ionicPush, currentUserService) {
  $ionicPlatform.ready(function() {
    $ionicPush.register().then(function(t) {
      return $ionicPush.saveToken(t);
    }).then(function(t) {
      currentUserService.device_token = t.token;
      currentUserService.device_type = t.type;

      console.log("DEVICE TOKEN:::::::", t.token);
    });
    TestFairy.begin("993218db594324f249e28bfa5a72f74f0d21732d");
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
