const storageRef = firebase.storage().ref();
let postID = location.hash.substring(1);
let jobPost = db.collection("job_posts").doc(postID);
let applicantIDs = [];
let applicantLocation = [];


window.onload = function () {

    jobPost.get().then(function (doc) {

        applicantIDs = doc.data().applicants;

        if (applicantIDs == undefined || applicantIDs.length == 0) {

            var tag = document.createElement("div");
            tag.id = "applicantNone";
            tag.class = "applicant";
            var element = document.getElementById("applicantsSection");
            element.appendChild(tag);

            var tag = document.createElement("h4");
            tag.id = "applicantNone";
            var text = document.createTextNode("No Applicants found!");
            tag.appendChild(text);
            var element = document.getElementById("applicantNone");
            element.appendChild(tag);

        } else {
            for (let i = 0; i < applicantIDs.length; i++) {

                console.log("Applicant found");
                applicantLocation[i] = db.collection("employee_users").doc(applicantIDs[i]);

                applicantLocation[i].get().then(function (doc) {
                    console.log("Applicant added");
                    console.log(doc.data())
                    addPostsDOM(doc.data(), i);
                });
            }
        }

        document.getElementById("postTitle").innerHTML = doc.data().title;
        document.getElementById("postDescription").innerHTML = doc.data().description;
        document.getElementById("postAddress").innerHTML = doc.data().address;
        document.getElementById("postCity").innerHTML = doc.data().city;
        document.getElementById("postProvince").innerHTML = doc.data().province;
        document.getElementById("postPostalCode").innerHTML = doc.data().inputPostalCode;
        document.getElementById("payAmount").innerHTML = doc.data().payAmount;
        document.getElementById("payNegotiable").innerHTML = doc.data().payNegotiable;
    });
}

/**
 * Adds applicatnts dynamically to the DOM
 */
function addPostsDOM(applicantInput, i) {

    var tag = document.createElement("div");
    tag.id = "applicant" + i;
    tag.class = "applicant";
    var element = document.getElementById("applicantsSection");
    element.appendChild(tag);

    var tag = document.createElement("h4");
    tag.id = "applicantName";
    var text = document.createTextNode(applicantInput.name);
    tag.appendChild(text);
    var element = document.getElementById("applicant" + i);
    element.appendChild(tag);

    var tag = document.createElement("p");
    tag.id = "applicantDescription";
    var text = document.createTextNode(applicantInput.profile_info.bio);
    tag.appendChild(text);
    var element = document.getElementById("applicant" + i);
    element.appendChild(tag);

    var tag = document.createElement("button");
    tag.id = "applicant" + i;
    tag.class = "postButton";
    var text = document.createTextNode("View Resume");
    tag.appendChild(text);
    tag.onclick = function () {
        //Redirect to resume
    }
    var element = document.getElementById("applicant" + i);
    element.appendChild(tag);

}