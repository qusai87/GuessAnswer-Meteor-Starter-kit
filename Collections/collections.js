'user strict';

Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection('answers');

if (typeof Schemas !== 'object') {
  Schemas = {};
}

SimpleSchema.messages({  
  "tooSimple": "Title has few words!"
});
Schemas.Questions = new SimpleSchema({
  'title': {
    type: String,
    label: "Title",
    max: 60,
    min: 10,
    autoform: {
      rows: 3
    },
    custom: function () {
      if (this.value.split(' ').length<3) {
        return "tooSimple";
      }
    }
  },
  'createdAt': {
    type: Date,
    label: 'Owner',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  'createdBy': {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    label: "createdBy",
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    'autoform': {
      options: function () {
        _.map(Meteor.users.find().fetch(), function (user) {
          return {
            label: user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  }
});

Questions.allow({
   'insert': function () {
      // add custom authentication code here
     return true;
      }
 });

Questions.attachSchema(Schemas.Questions);

Schemas.Answers = new SimpleSchema({
  'content': {
    type: String,
    label: "Content",
    max: 10,
    autoform: {
      rows: 5
    },
    custom: function () {
      if (this.value.split(' ').length<3) {
        return "tooSimple";
      }
    }
  },
  'createdAt': {
    type: Date,
    label: 'Date',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  'createdBy': {
    type: String,
    label: "Owner",
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    autoform: {
      options: function () {
        _.map(Meteor.users.find().fetch(), function (user) {
          return {
            label: user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  },
  'questionId' : {
  	type: String,
    label: "Question ID",
    regEx: SimpleSchema.RegEx.Id
  }
});


Answers.allow({
   'insert': function () {
      // add custom authentication code here
     return true;
      }
 });

Answers.attachSchema(Schemas.Answers);
