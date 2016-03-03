Template.main.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    },
    'click .admin': function(event){
        event.preventDefault();
        Router.go('/admin');
    }
});