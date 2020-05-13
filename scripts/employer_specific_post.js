let postID = location.hash.substring(1);
let profile = db.collection("job_posts").doc(postID);

window.onload = function() {
    profile.get().then(function(doc) {

        document.getElementById("postTitle").innerHTML = doc.data().title;
        document.getElementById("postDescription").innerHTML = doc.data().description;
        document.getElementById("postAddress").innerHTML = doc.data().address;
        document.getElementById("postCity").innerHTML = doc.data().city;
        document.getElementById("postProvince").innerHTML = doc.data().province;
        document.getElementById("postPostalCode").innerHTML = doc.data().inputPostalCode;
        document.getElementById("payAmount").innerHTML = doc.data().payAmount;
        document.getElementById("payNegotiable").innerHTML = doc.data().payNegotiable;
    })
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
            tag.id = "applicant" + i;
            tag.class = "applicant";
            var element = document.getElementById("applicantsSection");
            element.appendChild(tag);

            var tag = document.createElement("h4");
            tag.id = "applicantName";
            var text = document.createTextNode(arrayOfPosts[i].title);
            tag.appendChild(text);
            var element = document.getElementById("applicant" + i);
            element.appendChild(tag);

            var tag = document.createElement("p");
            tag.id = "applicantDescription";
            var text = document.createTextNode(arrayOfPosts[i].description);
            tag.appendChild(text);
            var element = document.getElementById("applicant" + i);
            element.appendChild(tag);

            var tag = document.createElement("button");
            tag.id = "applicant" + i;
            tag.class = "postButton";
            var text = document.createTextNode("View Resume");
            tag.appendChild(text);
            var element = document.getElementById("applicant" + i);
            element.appendChild(tag);

            let test = arrayOfIDs[i];

            tag.onclick = function(){
                window.location = "employer_specific_post.html#" + test;
            }
        }
    })
}