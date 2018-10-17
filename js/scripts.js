$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var message2Input = $("input#message").val();
    $(".name").append(nameInput);
    $(".message").append(message2Input);

    $("#story").show();
    event.preventDefault();
  });
});
