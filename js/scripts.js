$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var passCode = $("input#passCode").val();
    var userName = $("input#userName").val();

    if (passCode === 'password1') {
      $('#hiden').show();
      $('#pageOne').hide();
            }else{
      alert('sorry try again.');
    };
    event.preventDefault();


  });
});
