// Redirecting to creating a new post
function search(){
    window.location.href = "browse_jobs.html";
}

function editProfile(){
    window.location.href = "employee_profile.html";
}

// Easter Egg
function easterEgg() {
    $('body').css('transform', 'rotate(180deg)');
    $('body').css('background-color', 'purple');
    timer()
}

function timer() {
    setTimeout(function() {
    $('body').css('transform', 'rotate(0deg)');
    $('body').css('background-color', 'white');
}, 3000)
}

// Pulling from Database
window.onload = function () {
    preview();
}

/**
 * Adds posts dynamically to the DOM
 */
function preview() {
    let arrayOfPosts = [];
    let arrayOfID = [];
    let lastFour = (arrayOfPosts.length - (arrayOfPosts.length - 4));

    db.collection("job_posts").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            arrayOfPosts.push(doc.data());
            arrayOfID.push(doc.id);
        })
}).then(function() {
    for (i = 0; i < lastFour; i++) {

        var tag = document.createElement("div");
        tag.id = "posting" + i;
        tag.class = "posting";
        var element = document.getElementById("recentPostings");
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

        var tag = document.createElement("p");
        tag.id = "postAddress";
        var text = document.createTextNode(arrayOfPosts[i].address);
        tag.appendChild(text);
        var element = document.getElementById("posting" + i);
        element.appendChild(tag);  

        var tag = document.createElement("p");
        tag.id = "postPay";
        var text = document.createTextNode(arrayOfPosts[i].pay);
        tag.appendChild(text);
        var element = document.getElementById("posting" + i);
        element.appendChild(tag);  
            
        var tag = document.createElement("button");
        tag.id = "postButton" + i;
        tag.class = "postButton";
        var text = document.createTextNode("View Post");
        tag.appendChild(text);
        tag.onclick = function(){
            jobPageTransfer(arrayOfID[i])
        };
        var element = document.getElementById("posting" + i);
        element.appendChild(tag);
    }
})

}
