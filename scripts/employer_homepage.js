// Scroll to the top feature
//mybutton = document.getElementById("top");
window.onload = function() {
    document.getElementById("employerProfileButton").onclick = employerProfilePage;

    firebase.auth().onAuthStateChanged((user) => {

            console.log(user.uid);
    });
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Redirecting to creating a new post
function createNew() {
    window.location.href = "employer_jobpost.html";
}

/**
 * Change to employer profile page
 */
function employerProfilePage() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.location.href = "employer_profile.html#" + user.uid;
            console.log(user.uid);
        } else {
            console.log("Error, not logged in");
        }
    });
}
