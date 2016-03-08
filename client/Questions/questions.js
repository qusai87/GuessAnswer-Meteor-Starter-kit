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
	},
	createdByFromatted : function (id) {
		if (id === Meteor.userId())
			return '';
		return '[' + Meteor.users.findOne({_id: id}).emails[0].address + ']';
	}
});

Template.question.events({
	"click .delete": function () {
	  Meteor.call('removeQuestion',this._id  , function (err, response) {
	  	if (err) {
	  		Alert('something wrong!');
	  	}
	  });
	}
});

Template.publicQuestions.helpers({
	public_questions: function () {
		// Show newest tasks at the top
		return Questions.find();
	}
});