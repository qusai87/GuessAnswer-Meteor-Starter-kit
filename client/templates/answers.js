
// This code only runs on the client
Template.answers.helpers({
	Answers: function (questionId) {
	  // Show newest tasks at the top
	  return Answers.find({questionId: this._id});
	}
});

Template.answers.events({
	"submit form": function (event) {
		event.preventDefault();
		if (Meteor.userId()) {
			Answers.insert( {
				'createdBy': Meteor.userId(),
				'createdAt': new Date(),
				'content': $('[name=content]').val(),
				questionId: this._id
			});
			$('[name=title]').val('');
			$('[name=content]').val('');	
		}
	}
});

Template.answer.helpers({
	hasAccess: function () {
		return this.createdBy && this.createdBy === Meteor.userId();
	}
});

Template.answer.events({
	"click .delete": function () {
	  Answers.remove(this._id);
	}
});