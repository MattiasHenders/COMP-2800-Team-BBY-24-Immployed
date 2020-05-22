// Live Update
let profile;
let arrayOfIDs = [];
let arrayOfPosts = [];

window.onload = function() {
    document.getElementById("employerProfileButton").onclick = employerProfilePage;
    // Scroll to the top feature
    mybutton = document.getElementById("top");
    document.getElementById("myPostsButton").onclick = postsButton;
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            profile = String(user.uid);
            console.log(profile);
        } else {
            console.log("Error, not logged in");
        }
    });
};

// Scrolls to the top
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

function postsButton() {
    window.location.href = "employer_all_posts.html";
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

/**
 * Populate the profile page
 */
window.onload = function () {
    addPostsDOM();
}

/**
 * Adds posts dynamically to the DOM
 */
function addPostsDOM() {

    db.collection("job_posts").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (doc.data().ownerOfPost == profile) {
                arrayOfPosts.push(doc.data());
                arrayOfIDs.push(doc.id);
            }
        })

    }).then(function () {
        for (i = 0; i < 2; i++) {

            var tag = document.createElement("div");
            tag.id = "posting" + i;
            tag.class = "posting";
            var element = document.getElementById("myPostings");
            element.appendChild(tag);

            var tag = document.createElement("h4");
            tag.id = "postTitle";
            var text = document.createTextNode(arrayOfPosts[i].title);
            tag.appendChild(text);
            var element = document.getElementById("posting" + i);
            element.appendChild(tag);

            var tag = document.createElement("p");
            tag.id = "postDescription";
            var text = document.createTextNode(arrayOfPosts[i].description);
            tag.appendChild(text);
            var element = document.getElementById("posting" + i);
            element.appendChild(tag);
            }
        })
    }