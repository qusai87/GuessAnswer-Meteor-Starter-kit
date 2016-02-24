Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        }, function(error){
		    if(error){
		    	alert(console.log(error.reason) || error.reason); // Output error if registration fails
		    } else {
		        Router.go("home"); // Redirect user if registration succeeds
		    }
		});
        Router.go('home');
    }
});