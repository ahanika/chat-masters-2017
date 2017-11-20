/*$('#email').focusout(function(){
	if (validateEmail()){
		$("#email").css('backgroundColor') = 'green';
		enableSubmit();
	}
	else {
		window.alert("E-mail уже использован! Перейдите на страницу авторизации.");
	}
});*/

$('#email').focus(function(){
	alert('ZHOPA');
	$(this).css('border-color', 'green');
	enableSubmit();
});

/*$('#login').focusout(function(){
	if (validateEmail()){
		$("#login").css('background-color') = 'green';
		enableSubmit();
	}
	else {
		window.alert("Такое имя уже существует!");
	}
});

function validateEmail() {
	var emailToCheck = $('#email').val();
	var OK = false;
	$.post('checkingEmail.hs', emailToCheck, statusCode: {
		200: function() {
			OK = true;
		}
	});
	return OK;
}

function validateLogin() {
	var emailToCheck = $('#email').val();
	var OK = false;
	$.post('checkingEmail.hs', emailToCheck, statusCode: {
		200: function() {
			OK = true;
		}
	});
	return OK;
}

function enableSubmit() {
	if ($("#email").css('backgroundColor') == 'green' && $("#login").css('backgroundColor') == 'green'){
		$('#sub').disabled = false;
	}
}*/