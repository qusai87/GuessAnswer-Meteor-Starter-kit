// This code only runs on the client
Meteor.subscribe('users');

Template.home.helpers({
	public_questions: function () {
		// Show newest tasks at the top
		return Questions.find();
	},
	user_name : function() {
		return Meteor.userId() && Meteor.user() && Meteor.user().profile ? Meteor.user().profile.name :  Meteor.user().emails[0].address;
	}
});

