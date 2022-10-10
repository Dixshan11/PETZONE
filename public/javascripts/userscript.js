// SIGNIN
$('#signin-form').on('submit', function (event) {
    event.preventDefault();

    var username = $('#signin-username');
    var gmail = $('#signin-gmail');
    var password = $('#signin-password');

    $.ajax({
        url: '/user/register',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(
            {name: username.val(), email: gmail.val(), password: password.val()}
        ),
        success: function (response) {
            console.log(response);
            gmail.val('');
            username.val('');
            password.val('');

        }
    });
});

// LOGIN
$('#login-form').on('submit', function (event) {
    event.preventDefault();

    // var username=$('#login-username');
    var gmail = $('#login-gmail');
    var password = $('#login-password');

    $.ajax({
        url: '/users/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({gmail: gmail.val(), password: password.val()}),
        success: function (response) {
            console.log(response);
            gmail.val('');

            password.val('');

        }
    });
});
