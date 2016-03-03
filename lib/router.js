Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'main'
});


Router.route('/', function () {
  // render the Home template with a custom data context
  this.render('Home');
});

Router.route('/home', {
  path: '/home',
  onBeforeAction: function () {
    //this.usersHandle = Meteor.subscribe('allUsers');
    this.next();
  }
});
Router.route('/register');
Router.route('/login');
Router.route('/logout');
Router.route('/ask');



Router.route('/answers', {
  path: '/answers/:_id',

  onBeforeAction: function () {
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
