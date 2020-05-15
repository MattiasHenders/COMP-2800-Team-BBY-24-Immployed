function signout(){
    firebase.auth().signOut().then(function() {
        window.location = "index.html"
    }).catch(function(error) {
        console.log("Error: could not sign out")
    });
}

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