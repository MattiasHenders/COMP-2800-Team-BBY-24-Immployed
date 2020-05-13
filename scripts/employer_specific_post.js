let postID = location.hash.substring(1);
let profile = db.collection("job_posts").doc(postID);

window.onload = function() {
    profile.get().then(function(doc) {

        document.getElementById("postTitle").innerHTML = doc.data().title;
    })
}