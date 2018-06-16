  $(document).ready(function(){

 
  var config = {
    apiKey: "AIzaSyDafBtnThfjLxGVND6lv2SfYLeQNPuh5OU",
    authDomain: "portfolio-contact-form-4d853.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-4d853.firebaseio.com",
    projectId: "portfolio-contact-form-4d853",
    storageBucket: "portfolio-contact-form-4d853.appspot.com",
    messagingSenderId: "153109918941"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var name = "";
  var email = "";
  var message = "";

  $("#submitC").on("click", function(event) {

    event.preventDefault();


    name = $("#name").val().trim();
    email = $("#email").val().trim();
    message = $("#msg").val().trim();
   console.log(name);
    var newSubmission = {
      newName: name,
      newEmail: email,
      NewMessage: message,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    };
    database.ref().push(newSubmission);

    console.log(newSubmission);

    $("#name").val("");
    $("#email").val("");
    $("#msg").val("");
    $("#cmpmsg").text("Thank You For Your Submission");

  }); 
  });