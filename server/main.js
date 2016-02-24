Meteor.publish('answers', function(questionId) {
  check(questionId, String);

  return Answers.find({questionId: questionId});
});
