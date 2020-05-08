// Redirecting to creating a new post
function exampleProfile(){
    window.location.href = "employee_profile.html#testDummy";
}

// Redirecting to creating a new post
function myProfile(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.location.href = "employee_profile.html#" + user.uid;
          console.log(user.uid);
        } else {
            console.log("Error, not logged in");
        }
    });    
}