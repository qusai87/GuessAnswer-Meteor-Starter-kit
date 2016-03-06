AutoForm.hooks({
	'updateProfile': {
		onSuccess: function (operation, result, template) {
			sAlert.success('Profile updated');
		},
		onError: function (operation, error, template) {
			sAlert.error(error);
		}
	},
	'updatePicture': {
		onSuccess: function (operation, result, template) {

			sAlert.success('Picture Updated');
		},
		onError: function (operation, error, template) {
			sAlert.error(error);
		}
		
	}
});
	


Template.profile.helpers({
	users: function () {
		return Meteor.users;
	},
	
});

// Autoupdate form
// Autoform's autosave="true" wasn't working
Template.profile.events({
	'change form#updatePicture input': function (e,t) {
		Meteor.setTimeout(function () {
			$('form#updatePicture').submit();
		}, 10);
	}
});

