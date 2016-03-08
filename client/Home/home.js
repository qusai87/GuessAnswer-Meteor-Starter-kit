// This code only runs on the client
//Meteor.subscribe('users');

Template.home.helpers({
	user_name : function() {
		return Meteor.userId() && Meteor.user() && Meteor.user().profile ? Meteor.user().profile.name :  Meteor.user().emails[0].address;
	}
});



Template.home.onCreated( function() {
  this.subscribe('questions', function() {
    if ($( ".loader" ).length) {
      $( ".loader" ).delay( 1000 ).fadeOut( 'slow', function() {
        $( ".loading-wrapper" ).fadeIn( 'slow' );
      });
    } else {
      $( ".loading-wrapper" ).fadeIn( 'slow' );
    }
  });
});

Template.home.onRendered( function() {
  $( "svg" ).delay( 750 ).fadeIn();
});