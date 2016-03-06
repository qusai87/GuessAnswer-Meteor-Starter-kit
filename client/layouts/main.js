Template.main.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
    'click .admin': function(event){
        event.preventDefault();
        Router.go('/admin');
    }
});

Template.main.helpers({
	user_name : function() {
		return Meteor.userId() && Meteor.user() && Meteor.user().profile ? Meteor.user().profile.name :  Meteor.user().emails[0].address;
	}
})