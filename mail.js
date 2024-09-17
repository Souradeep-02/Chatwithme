const firebaseConfig = {
    //   copy your firebase config informations const firebaseConfig = {
    apiKey: "AIzaSyBrqtH5eDDWgaN2jhtpjxY3MEa3OMH2Mr4",
    authDomain: "contactform-b8d06.firebaseapp.com",
    databaseURL: "https://contactform-b8d06-default-rtdb.firebaseio.com",
    projectId: "contactform-b8d06",
    storageBucket: "contactform-b8d06.appspot.com",
    messagingSenderId: "585974734811",
    appId: "1:585974734811:web:6ad084a0444b5233e6d1fe"
  
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };