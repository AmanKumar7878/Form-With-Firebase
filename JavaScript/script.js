import {
    getDatabase,
    ref,
    get,
    set,
    update,
    remove,
    child,
  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
  
  var nameV, emailV, messageV;
  const db = getDatabase();
  
  // Reference
  // Getting data from Textboxes
  var NameBox = document.getElementById("nameBox");
  var EmailBox = document.getElementById("emailBox");
  var MsgBox = document.getElementById("msgBox");
  
  // Button References
  
  function insertData() {
    if (nameV == "" && emailV == "" && messageV == "") {
      alert("Fields can not be blank");
    } else {
      // Code to send the data to Firebase
       set(ref(db, "data/" + nameV), {
        name: nameV,
        email:emailV,
        message: messageV,
      })
        .then(() => {
          alert("Data Stored Successfully");
        })
        .catch((error) => {
          alert("Unsccussful", error);
        });
  
      clearFormData();
    }
  }
  
  
  // Clear Form after data Submission
  
  function clearFormData() {
    NameBox.value = "";
    EmailBox.value = "";
    MsgBox.value = "";
  }
  
  document.querySelectorAll(".btn")[0].onclick = insertData;