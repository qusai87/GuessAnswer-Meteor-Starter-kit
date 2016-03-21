Template.loading.rendered = function () {
  if ( ! Session.get('loadingSplash') ) {
    Session.set('loadingSplash',true);
    this.loading = window.pleaseWait({
      logo: '/images/logo.png',
      backgroundColor: '#ffffff',
      loadingHtml: message + spinner
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};

var message = '<h1 class="loading-message">Welcome To Guess The Answer!</h1><p>Please Wait..</p>';
var spinner = '<div class="sk-circle">'+
                '<div class="sk-circle1 sk-child"></div>'+
                '<div class="sk-circle2 sk-child"></div>'+
                '<div class="sk-circle3 sk-child"></div>'+
                '<div class="sk-circle4 sk-child"></div>'+
                '<div class="sk-circle5 sk-child"></div>'+
                '<div class="sk-circle6 sk-child"></div>'+
                '<div class="sk-circle7 sk-child"></div>'+
                '<div class="sk-circle8 sk-child"></div>'+
                '<div class="sk-circle9 sk-child"></div>'+
                '<div class="sk-circle10 sk-child"></div>'+
                '<div class="sk-circle11 sk-child"></div>'+
                '<div class="sk-circle12 sk-child"></div>'+
              '</div>';