Template.ask.events({
	"submit form": function (event) {
		event.preventDefault();
		if (Meteor.userId()) {
			Questions.insert( {
				'createdBy': Meteor.userId(),
				'createdAt': new Date(),
				'title': $('[name=title]').val(),
				'content': $('[name=content]').val()
			});
			$('[name=title]').val('');
			$('[name=content]').val('');	
		}
	}
});