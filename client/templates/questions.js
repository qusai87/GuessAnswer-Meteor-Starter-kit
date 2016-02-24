// This code only runs on the client
Template.questions.helpers({
	questions: function () {
	  // Show newest tasks at the top
	  return Questions.find({createdBy:  Meteor.userId()});
	},
	
});

Template.question.helpers({
	hasAccess: function () {
		return this.createdBy && this.createdBy === Meteor.userId();
	}
});

Template.question.events({
	"click .delete": function () {
	  Questions.remove(this._id);
	}
});

