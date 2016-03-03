Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection('answers');


Schemas = {};


Schemas.Questions = new SimpleSchema({
  'title': {
    type: String,
    label: "Title",
    max: 60
  },
  'content': {
    type: String,
    optional: true,
    label: "Content",
    autoform: {
      rows: 5
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
  }
});

Questions.attachSchema(Schemas.Questions);

Schemas.Answers = new SimpleSchema({
  content: {
    type: String,
    label: "Content",
    autoform: {
      rows: 5
    }
  },
  createdAt: {
    type: Date,
    label: 'Date',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  createdBy: {
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
  questionId : {
  	type: String,
    label: "Question ID",
    regEx: SimpleSchema.RegEx.Id
  }
});

Answers.attachSchema(Schemas.Answers);

AdminConfig = {
	adminEmails: ['qusaitabbal@gmail.com'],
	collections: {
		Questions: {
			icon: 'comment',
			omitFields: ['createdAt'],
			tableColumns: [
			   { label: 'Title', name: 'title' },
			   { label: 'Content', name: 'content' },
			 ],
			showEditColumn: true, // Set to false to hide the edit button. True by default.
			showDelColumn: true, // Set to false to hide the edit button. True by default.
			showWidget: false,
			color: 'blue'
		},
		Answers : {
			omitFields: ['createdAt'],
			tableColumns: [
			   { label: 'Content', name: 'content' }
			 ],
			showEditColumn: true, // Set to false to hide the edit button. True by default.
			showDelColumn: true, // Set to false to hide the edit button. True by default.
			showWidget: false,
			color: 'red'
		}
	}
};