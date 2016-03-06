AutoForm.hooks({
	updatePassword: {
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			if (insertDoc.new != insertDoc.confirm) {
				sAlert.error('Passwords do not match');
				return false;
			}

			$('.btn-primary').attr('disabled',null);


			Accounts.changePassword(insertDoc.old, insertDoc.new, function (e) {
				if (e) {
					sAlert.error(e.message);
				}
				else {
					sAlert.success('Password Updated');
				}
			});
		}
	}
});



Template.account.events({
	'click .js-delete-account': function () {
		Meteor.call('deleteAccount', Meteor.userId());
	}
});

Template.account.helpers({
});

Template.setUserName.helpers({
	user: function () {
		Meteor.user();
	},
	
});