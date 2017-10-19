

$(document).ready(function() {
  $("form#ageform").submit(function(event) {
    var userAge = $("select#age").val();
    event.preventDefault();
    if (userAge === 'oldenough') {
      $("#oldenough").show();
    } else if (userAge === 'tooyoung'){
      $("#tooyoung").show();
    } else {
      alert("Please make a selection");
    };
  });
});
// $(document).ready(function() {
//   var userAge = parseInt (prompt("How old are you?"));
//
//   if (userAge >= 21) {
//     $("#oldenough").show();
//   } else {
//     $("#tooyoung").show();
//   }
// })
