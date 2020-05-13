//let profile = db.collection("employee_users").doc(userId);

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
    let arrayOfPosts = [];
    let arrayOfID = [];

    db.collection("job_posts").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            arrayOfPosts.push(doc.data());
            arrayOfID.push(doc.id);
            if (doc.data().ownerOfPost == profile) {
                arrayOfPosts.push(doc.data());
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
            tag.onclick = jobPageTransfer(arrayOfID[i]);
            var element = document.getElementById("posting" + i);
            element.appendChild(tag);
        }
    })
}

/**
 * Change to specific job page
 * @param {*} id id of job post
 */
function jobPageTransfer(id){
    localStorage.setItem(0, id);
    window.location = 'employer_specific_post.html';
}