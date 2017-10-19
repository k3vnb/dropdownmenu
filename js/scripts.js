var userAge

// $(document).ready(function() {
//   userAge = confirm("Are you old enough to vote? Click OK for yes, cancel for no");
//
//   if (userAge === true) {
//     $("#oldenough").show();
//   } else {
//     $("#tooyoung").show();
//   }
// });
$(document).ready(function() {
  var userAge = parseInt (prompt("How old are you?"));

  if (userAge >= 21) {
    $("#oldenough").show();
  } else {
    $("#tooyoung").show();
  }
})
