const LOGOS = firebase.storage().ref().child('companyLogos');
const ITEMS_PER_PAGE = 12;
let cardNumber = 0;
let jobsListing = document.getElementById("job-posts");
let formDictionary = {
    search: ""
};
let refUrl;
let jobs;
$("#sal").hide();

//Generate a grid of job postings based on filters
$(document).ready(function() {
    showJobs();
});

$( "form" ).submit(function( event ) {
    let formData = ( $( this ).serializeArray() );
    event.preventDefault();
    $.each(formData, function(formData, field){
        let name = "" + (field.name);
        let value = "" + (field.value);
        formDictionary[name] = value;
    });
    showJobs();
});

function showJobs(){
    jobsListing.innerHTML = "";
    jobs = db.collection("job_posts");
    sortWage();
    sortType();
    searchTags();
    jobs.limit(ITEMS_PER_PAGE).get().then(function(querySnapshot) {     
        querySnapshot.forEach(function(doc) {    
            let logo = LOGOS.child(doc.data().ownerOfPost).child('logoPic.png');
            logo.getDownloadURL().then(function(url) {
                refUrl = url;
                jobsListing.innerHTML += '<div class="p-2"><div class="card" href = "___JOB PAGE____"' + doc.data().ownerOfPost + '">'
                + '<div class="card-body card-header">'
                + '<img src = "' + refUrl
                + '" class="cardimg" alt="No Image">'
                + '<p class="card-text">' + doc.data().title + '</p>'
                + '<p class="card-text">' + doc.data().city + '</p>'
                + '</div>'
                + '<div class="card-body">'
                + '<p class="card-text">' + doc.data().description + '</p>'
                + '<a href="HTML/results.html#' + doc.data().ownerOfPost + '" class="btn btn-primary stretched-link">Apply</a>'
                + '</div></div></div>';
                cardNumber++;
            }).catch(function(error) {
                console.log('Logo image not found for ' + doc.data().ownerOfPost);
                jobsListing.innerHTML += '<div class="p-2"><div class="card" href = "___JOB PAGE____"' + doc.data().ownerOfPost + '">'
                + '<div class="card-body card-header">'
                + '<img src = "images/briefcase.png' 
                + '" class="cardimg" alt="No Image">'
                + '<p class="card-text">' + doc.data().title + '</p>'
                + '<p class="card-text">' + doc.data().city + '</p>'
                + '</div>'
                + '<div class="card-body">'
                + '<p class="card-text">' + doc.data().description + '</p>'
                + '<a href="HTML/results.html#' + doc.data().ownerOfPost + '" class="btn btn-primary stretched-link">Apply</a>'
                + '</div></div></div>';
                cardNumber++;
            });  
        });
    });
}

//Wage sorting based on the form's "Wage Range" field.
function sortWage(){
    if (formDictionary.wage == 1){
        jobs = jobs.where("payAmount", ">=", 14).where("payAmount", "<", 20);
    } else if (formDictionary.wage == 2){
        jobs = jobs.where("payAmount", ">=", 20).where("payAmount", "<", 25);
    } else if (formDictionary.wage == 3){
        jobs = jobs.where("payAmount", ">=", 25).where("payAmount", "<", 30);
    } else if (formDictionary.wage == 4){
        jobs = jobs.where("payAmount", ">=", 30).where("payAmount", "<", 35);
    } else if (formDictionary.wage == 5){
        jobs = jobs.where("payAmount", ">=", 35).where("payAmount", "<", 40);
    } else if (formDictionary.wage == 6){
        jobs = jobs.where("payAmount", ">=", 40).where("payAmount", "<", 45);
    } else if (formDictionary.wage == 7){
        jobs = jobs.where("payAmount", ">=", 45);
    }
}

//Type sorting based on the form's "Job Type" field.
function sortType(){
    if (formDictionary.type == 1){
        jobs = jobs.where("type", "==", "full-time");
    } else if (formDictionary.type == 2){
        jobs = jobs.where("type", "==", "part-time");
    } else if (formDictionary.type == 3){
        jobs = jobs.where("type", "==", "permanent");
    } else if (formDictionary.type == 4){
        jobs = jobs.where("ptype", "==", "temporary");
    } else if (formDictionary.type == 5){
        jobs = jobs.where("type", "==", "internship");
    }
}

//Search for jobs containing any of the input tags.
function searchTags(){
    if (formDictionary.search != ""){
        let searchArr = formDictionary.search.toLowerCase().split(" ");
        jobs = jobs.where("tags", "array-contains-any", searchArr);
    } else {
        return;
    }
}