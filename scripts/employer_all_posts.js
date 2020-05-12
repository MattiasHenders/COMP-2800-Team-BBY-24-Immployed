const storageRef = firebase.storage().ref();

let userId = location.hash.substring(1);
let profile = db.collection("employee_users").doc(userId);

//Populate the profile page
window.onload = function () {
    loadPosts();
}

//Loads database company logo
function loadPosts() {
    logoPicsStores = storageRef.child('companyLogos');
    console.log(logoPicsStores);

    logoPics = logoPicsStores.child(userId);
    console.log(logoPics);

    userProfilePic = logoPics.child('logoPic.png');
    console.log(userProfilePic);
    userProfilePic.getDownloadURL().then(function (url) {
        var test = url;
        document.querySelector('img').src = test;
    }).catch(function (error) {
        console.log('Error');
    });

    addPostsDOM()
}

function addPostsDOM() {
    let arrayOfPosts = [];
    db.collection("job_posts").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (doc.data().ownerOfPost == profile) {
                arrayOfPosts.push(doc.data());
            }
        })
    }).then(function () {
        for (i = 0; i < arrayOfPosts.length; i++) {
            arrayOfPosts(i);

            var tag = document.createElement("div");
            tag.id = "posting" + i;
            var element = document.getElementById("myPostings");
            element.appendChild(tag);

            var tag = document.createElement("h4");
            tag.id = "postTitle";
            var text = document.createTextNode(arrayOfPosts(i).title);
            tag.appendChild(text);
            var element = document.getElementById("posting" + i);
            element.appendChild(tag);

            var tag = document.createElement("div");
            tag.id = "companyLogo";
            var element = document.getElementById("posting" + i);
            element.appendChild(tag);
            
            var tag = document.createElement("img");
            companyLogoStore = storageRef.child('companyLogos');
            userLogo = companyLogoStore.child(userId);
            userLogo.getDownloadURL().then(function(url) {
                var test = url;
                document.querySelector('img').src = test;
            }).catch(function(error) {
                console.log('error');
            });
            var element = document.getElementById("companyLogo");
            element.appendChild(tag);

            /*
            <div id="postingOne">
                <h4 id="postTitle"></h4>
                Image goes here
                <div id="companyLogo">
                    <img alt="My company Logo">
                </div>
                <p id="jobDescription"></p>
            </div>
             */
        }
    })
}