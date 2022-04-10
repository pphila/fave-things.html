$(document).ready(function() {
  $("form#formOne").submit(function(event) { 
    event.preventDefault();
    let faveListArray = [];
    faveListArray.push($("#q1").val());
    faveListArray.push($("#q2").val());
    faveListArray.push($("#q3").val());
    faveListArray.push($("#q4").val());
    faveListArray.push($("#q5").val());
    // $("#q1").val() <---- "pineapple"
    // faceListArray.push("pineapple")
    console.log(faveListArray)

    $("#return").show();
    /*$("#faveListArray").show();*/
    $("#faveList").append("<li>" + faveListArray[0] + "</li>"); 
    $("#faveList").append("<li>" + faveListArray[1] + "</li>");
    $("#faveList").append("<li>" + faveListArray[2] + "</li>");
    $("#faveList").append("<li>" + faveListArray[3] + "</li>");
    $("#faveList").append("<li>" + faveListArray[4] + "</li>");
  });
});
