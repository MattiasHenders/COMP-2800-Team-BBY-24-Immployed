var selectedFile;
var userId;
var URL;

$(document).ready(function() {
    $("#uploadButton").hide();
    $("#viewButton").hide();
    $("#disclaimer").hide();

    function myEmployeeProfile(){
    firebase.auth().onAuthStateChanged((user) => {
       if (user) {
            userId = String(user.uid)
            console.log(user.uid);
        } else {
            console.log("Error, not logged in");
        }
    });    
}

})

$("#file").on("change", function(event) {
    $("#uploadButton").show();
    $("#disclaimer").show();
    selectedFile = event.target.files[0];
})

function upload() {
    // Root reference
    var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('/resumes/' + filename);
    var uploadTask = storageRef.put(selectedFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
        }
    }, function(error) {
    // Handle unsuccessful uploads
    }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        URL = String(downloadURL);
            db.collection("resumes").doc(userId).set({
                url: URL
            });
        });
    
    
    $("#viewButton").show();
    });
}

function view() {
    window.open(URL);
}