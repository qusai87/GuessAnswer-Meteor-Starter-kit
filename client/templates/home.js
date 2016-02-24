// This code only runs on the client
Template.home.helpers({
	public_questions: function () {
	  // Show newest tasks at the top
	  return Questions.find();
	}
});

