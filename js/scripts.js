$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var passCode = $("input#passCode").val();

    if (passCode === 'password') {
      $('#hiden').show()
            }else{
      alert('sorry try again.')
    }
  });
});
