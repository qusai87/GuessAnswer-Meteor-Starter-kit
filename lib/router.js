subs = new SubsManager();

Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'main'
});

Router.route('/', {
  // render the Home template with a custom data context
  subscriptions : function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return [subs.subscribe('users'),subs.subscribe('questions'),subs.subscribe('answers')];
  },
  action : function () {
    if (this.ready()) {
      if (Meteor.user()) {
        this.render('dashboard');
      } else {
        this.render('home');
      }
    } else {
      this.render('loading');
    }
  }
});

Router.route('/home', {
  path: '/home',
  subscriptions : function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return [subs.subscribe('users'),subs.subscribe('questions'),subs.subscribe('answers')];
  },
  onBeforeAction : function () {
    if (Meteor.user()) {
      this.redirect('/dashboard');
    }
    this.next();
  },
  action : function () {
    if (this.ready()) {
      this.render();
    } else {
      this.render('loading');
    }
  }
});

Router.route('/questions');

Router.route('/answers', {
  path: '/answers/:_id',
  subscriptions : function() {
    // returning a subscription handle or an array of subscription handles
    // adds them to the wait list.
    return [subs.subscribe('users'),subs.subscribe('questions'),subs.subscribe('answers')];
  },
  onBeforeAction: function () {
    Session.set('currentQuestion', this.params._id);
    subs.subscribe('questions');
    this.answersHandle = subs.subscribe('answers', this.params._id);
    this.next();
  },
  data: function () {
    return Questions.findOne(this.params._id);
  },
  action: function () {
    if (this.ready()) {
      this.render();
    } else {
      this.render('Loading');
    }
  }
});



// **************
// Account Routes 
// **************
Router.route('/register');
Router.route('/login');
Router.route('/dashboard',{
  path: '/dashboard'
});
Router.route('/ask');

Router.route("/profile");
Router.route("/account", {
  path: "/account",
  onBeforeAction: function () {
     if (!(Meteor.userId())) {
        this.redirect('/');
      }
      this.next();
    }
});
Router.route("/setUserName", {
    path: "/setUserName",
    onBeforeAction: function () {
      if (!(Meteor.userId())) {
        this.redirect('/');
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

