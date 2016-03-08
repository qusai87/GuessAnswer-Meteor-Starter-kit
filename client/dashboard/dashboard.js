Template.dashboard.onCreated( function() {
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

Template.dashboard.onRendered( function() {
  $( "svg" ).delay( 750 ).fadeIn();
});