Template.registerHelper 'niceName', (_id)->
	if _id
		user = Meteor.users.findOne _id

	if user
		if user.username
			user.username
		else if typeof user.profile != 'undefined' and user.profile.firstName
			user.profile.firstName
		else if user.emails[0].address
			user.emails[0].address
		else
			'A user'