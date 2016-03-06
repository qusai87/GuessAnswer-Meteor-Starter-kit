Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'main'
});


Router.route('/', function () {
  // render the Home template with a custom data context
  if (Meteor.user()) {
    this.render('dashboard');
  } else {
    this.render('home');
  }
});

Router.route('/home', {
  path: '/home',
  onBeforeAction : function () {
    if (Meteor.user()) {
        this.redirect('/dashboard');
      }
      this.next();
  }
});
Router.route('/register');
Router.route('/login');
Router.route('/dashboard');
Router.route('/ask');

Router.route("/profile");
Router.route("/account", {
  path: "/account",
  onBeforeAction: function () {
     if (!(Meteor.userId())) {
        this.redirect('/home');
      }
      this.next();
    }
});
Router.route("/setUserName", {
    path: "/setUserName",
    onBeforeAction: function () {
      if (!(Meteor.userId())) {
        this.redirect('/home');
      }
      this.next();
    }
});

Router.route("/signOut", {
    path: "/sign-out",
    onBeforeAction: function () {
      Meteor.logout(function () {
        this.redirect('/');
      });
      this.next();
    }
});


Router.route('/answers', {
  path: '/answers/:_id',
  onBeforeAction: function () {
    Session.set('currentQuestion', this.params._id);
    this.answersHandle = Meteor.subscribe('answers', this.params._id);
    this.next();
  },
  data: function () {
    return Questions.findOne(this.params._id);
  },
  action: function () {
    this.render();
  }
});

Router.route('/questions');
