// This code only runs on the client
Template.questions.helpers({
	questions: function () {
	  // Show newest tasks at the top
	  return Questions.find();
	}
});

Template.question.events({
	"click .delete": function () {
	  Questions.remove(this._id);
	}
});

