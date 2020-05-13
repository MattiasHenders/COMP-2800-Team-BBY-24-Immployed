// Load profile
let profile;
let arrayOfIDs = [];
let arrayOfPosts = [];

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        profile = String(user.uid);
        console.log(profile);
    } else {
        console.log("Error, not logged in");
    }
});

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
        for (i = 0; i < arrayOfPosts.length; i++) {

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

            var tag = document.createElement("button");
            tag.id = "postButton" + i;
            tag.class = "postButton";
            var text = document.createTextNode("View Post");
            tag.appendChild(text);
            var element = document.getElementById("posting" + i);
            element.appendChild(tag);

            let test = arrayOfIDs[i];

            tag.onclick = function(){
                window.location = "employer_specific_post.html#" + test;
            }
        }
    })
}
