$(document).ready(function() {
    // Attach event listener to registration form
    $('#registration-form').submit(function(event) {
      event.preventDefault();
  
      // Extract form data
      var formData = {
        username: $('#username').val(),
        surname: $('#surname').val(),
        age: $('#age').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        accountType: $('#account-type').val(),
        gender: $('input[name="gender"]:checked').val(),
        id: $('#id').val(),
        address: $('#address').val(),
        medicare: $('#medicare').is(':checked')
      };
  
      // Log form data
      var logEntry = $('<li>').text(JSON.stringify(formData));
      $('#user-log').append(logEntry);
  
      // Save form data to database file
      $.post('save-user.php', formData);
    });
  });