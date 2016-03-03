Template.ask.events({
	"submit form": function (event) {
		event.preventDefault();
		if (Meteor.userId()) {

			Meteor.call('addQuestion', $('[name=title]').val() , $('[name=content]').val(), function(err, response) {
				Router.go("/answers/" + response);
			});

			$('[name=title]').val('');
			$('[name=content]').val('');
			
		}
	}
});

// Template.ask.onRendered(function() { 
//   $('#summernote').summernote();
// });