const storageRef = firebase.storage().ref();

let userId = location.hash.substring(1);
let profile = db.collection("employee_users").doc(userId);
let isEditing = false;
let imageUploaded = false;

//for uploaded images
let selectedFile;

let profilePic = document.getElementById("profilePic");
let bio = document.getElementById("intro");
let exp = document.getElementById("experience");
let skills = document.getElementById("skills");
let interests = document.getElementById("interests");
let email =  document.getElementById("email");
let website =  document.getElementById("website");
let phone =  document.getElementById("phone");

//Populate the profile page
window.onload = function() {
    $('#saveChanges').toggle();
    $('#success-alert').toggle();
    $('.custom-file').toggle();
    populateProfile();
}
let map = new Map();

//Loads database version of profile
function populateProfile(){
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
        console.log('error');
    });
    profile.get().then(function(doc) {
        profileMap = (doc.data().profile_info)

        bio.innerHTML = profileMap["bio"]
        exp.innerHTML = profileMap["experience"]
        skills.innerHTML = profileMap["skills"]
        interests.innerHTML = profileMap["interests"]
        email.innerHTML = profileMap["email"]
        website.innerHTML = profileMap["website"]
        phone.innerHTML = profileMap["phone"]

        $("#profileComponents > div > p").each(function(){
            if($(this).text() == "" || $(this).text() == "undefined") {
                $(this).text("Nothing entered yet!");
            }
        })
    })
}

//Edit button/Stop editing button
$("#editProfile").click(function(){
    if (isEditing){
        stopEditing();
    } else {
        isEditing = true;
        $("#editProfile").text("Quit Editing")
        $('#saveChanges').toggle();
        $('.custom-file').toggle();
        $('.textBox').toggleClass("editing");

        fields = $("#profileComponents > div > p")
        fields.attr('contentEditable', 'true');
        $(fields).after('<span class="edit"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8">'
        +'<path d="M6 0l-1 1 2 2 1-1-2-2zm-2 2l-4 4v2h2l4-4-2-2z"/></svg><span>');
    }
})

function stopEditing(){
    isEditing = false;
        $("#editProfile").text("Click to Edit");
        populateProfile();
        $('.edit').remove();
        $('#saveChanges').toggle();
        $('.custom-file').toggle();
        $('.textBox').toggleClass("editing");
}

//Save changes to Firebase
$("#saveChanges").click(function() {
    console.log("clicked");
    profile.update({
        ["profile_info"]: {
            bio: $('#intro').text(),
            experience: $('#experience').text(),
            skills: $('#skills').text(),
            experience: $('#interests').text(), 
            email: $('#email').text(),
            website: $('#website').text(),
            phone: $('#phone').text() 
        }
    });
    if (imageUploaded == true) {
        const uploadTask = storageRef.child('profilePictures/' + userId + '/profilePic.png').put(selectedFile); 
        uploadTask.on('state_changed', (snapshot) => {
            // Observe state change events such as progress, pause, and resume
        }, (error) => {
            // Handle unsuccessful uploads
            console.log(error);
        }, () => {
            // Do something once upload is complete
            console.log('success');
            imageUploaded = false;
        });
    }
    
    
        $('#success-alert').toggle();
        setTimeout(function() {
            $(".alert").alert('close');
        }, 2000);
    
});

//Changes the picture to the newly updated picture.
$(".custom-file-input").on("change", function(e) {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    selectedFile = e.target.files[0];
    imageUploaded = true;
});
