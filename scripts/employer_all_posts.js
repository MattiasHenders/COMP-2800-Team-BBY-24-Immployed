const storageRef = firebase.storage().ref();

let userId = location.hash.substring(1);
let profile = db.collection("employee_users").doc(userId);
let isEditing = false;
let imageUploaded = false;

//Populate the profile page
window.onload = function() {
    loadPosts();
}

//Loads database company logo
function loadPosts(){
    profilePicsStore = storageRef.child('profilePictures');
    console.log(profilePicsStore);

    userPics = profilePicsStore.child(userId);
    console.log(userPics);

    userProfilePic = userPics.child('profilePic.png');
    console.log(userProfilePic);
    userProfilePic.getDownloadURL().then(function(url) {
        var test = url;
        document.querySelector('img').src = test;
    }).catch(function(error) {
        console.log('Error');
    });

    profile.get().then(function(doc) {

        $("#profileComponents > div > p").each(function(){
            if($(this).text() == "" || $(this).text() == "undefined") {
                $(this).text("Nothing entered yet!");
            }
        })
    })
}
