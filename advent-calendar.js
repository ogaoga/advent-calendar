if (Meteor.is_client) {

  Accounts.ui.config({
    requestPermissions: {
      github: ['user'],
      google: ['https://www.googleapis.com/auth/userinfo.profile']
    },
    //passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Template.hello.greeting = function () {
    return "Welcome to advent-calendar.";
  };

  Template.hello.events = {
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  };
}

if (Meteor.is_server) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}