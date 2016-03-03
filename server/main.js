Meteor.publish('questions', function() {
  return Questions.find();
});

Meteor.publish('answers', function() {
  return Answers.find();
});

Meteor.publish('users', function() {
  return Meteor.users.find();
});
	
Meteor.methods({
	'addQuestion': function(title,content){
		console.log('title', title);
		console.log('content', content);
	    // Make sure the user is logged in before inserting a task
	    if (! Meteor.userId()) {
	      throw new Meteor.Error("not-authorized");
	    }

	    var id = Questions.insert({
	      title: title,
	      content: content,
	      createdAt: new Date(),
	      createBy: Meteor.userId()
	    });

	    console.log('Question Added', id);
	    return id;
	},
	'removeQuestion': function (questionID) {
		console.log('id', questionID );
		var question = Questions.findOne(questionID);

		if (!question || this.userId !== question.createdBy)
			return false;

		Questions.remove(questionID);
		Answers.remove({questionId:questionID});
		return true; 
	},
	'addAnswer': function(content, questionID){
		console.log('content', content);
		console.log('questionID', questionID);
	    // Make sure the user is logged in before inserting a task
	    if (! Meteor.userId()) {
	      throw new Meteor.Error("not-authorized");
	    }

	    var id = Answers.insert({
	      content: content,
	      questionId : questionID,
	      createdAt: new Date(),
	      createBy: Meteor.userId()
	    });

	    console.log('Answer Added', id);
	    return id;
	},
	'removeAnswer': function (answerID) {
	    var answer = Answers.findOne(answerID);
	    if (answer.createdBy !== Meteor.userId()) {
	      // If the task is private, make sure only the owner can delete it
	      throw new Meteor.Error("not-authorized");
	    }

	    Answers.remove(answerID);
	}
});