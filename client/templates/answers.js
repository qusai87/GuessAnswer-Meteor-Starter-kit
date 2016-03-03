Meteor.subscribe("answers");
// This code only runs on the client
Template.answers.helpers({
	Answers: function (questionId) {
	  // Show newest tasks at the top
	  return Answers.find({questionId: this._id});
	},
	hasAccess: function () {
		return this.createdBy && this.createdBy === Meteor.userId();
	}
});

Template.answers.events({
	"submit form": function (event) {
		event.preventDefault();
		if (Meteor.userId()) {
			Meteor.call('addAnswer', $('[name=content]').val(),  this._id );
			$('[name=content]').val('');
		}
	},
	"click .answers.delete": function () {
		Meteor.call('removeQuestion',this._id  , function (err, response) {
		  	if (err) {
		  		Alert('something wrong!');
		  	} else {
				Router.go("/");
		  	}
		});
	}
});

Template.answer.helpers({
	hasAccess: function () {
		return this.createdBy && this.createdBy === Meteor.userId();
	},
	createdByFromatted : function (id) {
		if (id === Meteor.userId())
			return '';
		return '[' + Meteor.users.findOne({_id: id}).emails[0].address + ']';
	}
});

Template.answer.events({
	"click .answer.delete": function () {
		Meteor.call('removeAnswer',this._id );
	}
});
