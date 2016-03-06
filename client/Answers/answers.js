Meteor.subscribe("answers");
// This code only runs on the client

Template.answers.helpers({
	Answers: function () {
	  // Show newest tasks at the top
	  return Answers.find({questionId: this._id});
	},
	hasAccess: function () {
		return this.createdBy && this.createdBy === Meteor.userId();
	}
});

AutoForm.addHooks('insertAnswerForm', {
	before: {
      insert: function(doc, template) {
      	doc.questionId =  Session.get('currentQuestion');
      	this.result(doc);
      }
    }
});

Template.answers.events({
	// "submit form": function (event) {
	// 	if (Meteor.userId() && Session.get('currentQuestion')) {
	// 		Meteor.call('addAnswer', $('[name=content]').val(),  Session.get('currentQuestion') , function (err) {
	// 			if (err) {
	// 		  		alert(err);
	// 		  	} else {
	// 				setTimeout(function () {$('[name=content]').val('')},10);
	// 		  	}
	// 		});
	// 	}
	// },
	"click .answers.delete": function () {
		Meteor.call('removeQuestion',this._id  , function (err, response) {
		  	if (err) {
		  		Alert(err);
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
