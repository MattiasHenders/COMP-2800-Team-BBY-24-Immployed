// Global Variables from previous page
let title = localStorage.getItem(0);
let address = localStorage.getItem(1);
let city = localStorage.getItem(2);
let province = localStorage.getItem(3);
let inputPostalCode = localStorage.getItem(4);
let payAmount = localStorage.getItem(5);
let payNegotiable = localStorage.getItem(6);
let description = localStorage.getItem(7);

let profile;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        profile = String(user.uid);
        console.log(profile);
    }else {
        console.log("Error, not logged in");
    }
});

/**
 * Sets the page with the info previously provided
 */
function setPage() {
    document.getElementById("titleReview").innerHTML = title;
    document.getElementById("addressReview").innerHTML = address;
    document.getElementById("cityReview").innerHTML = city;
    document.getElementById("provinceReview").innerHTML = province;
    document.getElementById("postalCodeReview").innerHTML = inputPostalCode;
    document.getElementById("payReview").innerHTML = payAmount;
    document.getElementById("payNegotiableReview").innerHTML = payNegotiable;
    document.getElementById("descriptionReview").innerHTML = description;
    document.getElementById("backButton").onclick = jobPostPage;
    document.getElementById("submitButton").onclick = submitPost;

    
}

/**
 * For going back to the previous page
 */
function jobPostPage() {
    window.location.href = "employer_jobpost.html";
}

/**
 * Clears local storage and takes the employer to the home page.
 */
function employerHomePage() {
    localStorage.clear();
    window.location.href = "employer_homepage.html";
}

/**
 * Submits the reviewed post to the database.
 */
function submitPost() {

    //Post to be added to job_posts collection
    db.collection("job_posts").add({
            title: title,
            address: address,
            city: city,
            province: province,
            inputPostalCode: inputPostalCode,
            payAmount: payAmount,
            payNegotiable: payNegotiable,
            description: description,
            ownerOfPost: profile
        })
        .then(function () {
            employerHomePage();
        })
}

$(document).ready(setPage);