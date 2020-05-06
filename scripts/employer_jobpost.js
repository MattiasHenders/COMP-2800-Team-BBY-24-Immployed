// Global Variables
let title;
let address;
let city;
let province;
let inputPostalCode;
let payAmount;
let payNegotiable;
let description;

/**
 * Gets buttons and check if uses is coming back from review page.
 */
function onLoad(){
    document.getElementById("employerHomeButton").onclick = employerHomePage;
    document.getElementById("jobPostNextButton").onclick = jobReviewPage;
    if(localStorage.getItem(0) != undefined && localStorage.getItem(1) != undefined
        && localStorage.getItem(2) != undefined && localStorage.getItem(3) != undefined
        && localStorage.getItem(4) != undefined && localStorage.getItem(5) != undefined
        && localStorage.getItem(6) != undefined && localStorage.getItem(7) != undefined){
            loadLocalStorageInfo();
    }
}

/**
 * Moves to job review page after getting the input from the user. 
 * (N/A if nothing entered)
 */
function jobReviewPage(){
    getInputData();
    window.location.href = "employer_jobpost_review.html";
}

/**
 * Changed to employer home page
 */
function employerHomePage(){
    window.location.href = "employer_home.html";
}

/**
 * Gets data input form the input boxes for use on review page.
 */
function getInputData(){
    title = "N/A";
    address = "N/A";
    city = "N/A";
    province = "N/A";
    inputPostalCode = "N/A";
    payAmount = "N/A";
    payNegotiable = "N/A";
    description = "N/A";

    if(document.getElementById("titleInput").value != ""){
        title = document.getElementById("titleInput").value;
    }
    if(document.getElementById("inputAddress").value != ""){
        address = document.getElementById("inputAddress").value;
    }
    if(document.getElementById("inputCity").value != ""){
        city = document.getElementById("inputCity").value;
    }
    if(document.getElementById("inputProvince").value != ""){
        province = document.getElementById("inputProvince").value;
    }
    if(document.getElementById("inputPostalCode").value != ""){
        inputPostalCode = document.getElementById("inputPostalCode").value;
    }
    if(document.getElementById("payAmountInput").value != ""){
        payAmount = document.getElementById("payAmountInput").value;
    }
    if(document.getElementById("descriptionInput").value != ""){
        description = document.getElementById("descriptionInput").value;
    }
    if(document.getElementById("payNegotiableYes").checked){
        payNegotiable = "Yes";
    } else {
        payNegotiable = "No";
    }
    
    sendToReview();
}

/**
 * Sends all data to local storage for use on the review page.
 */
function sendToReview(){
    localStorage.setItem(0, title);
    localStorage.setItem(1, address);
    localStorage.setItem(2, city);
    localStorage.setItem(3, province);
    localStorage.setItem(4, inputPostalCode);
    localStorage.setItem(5, payAmount);
    localStorage.setItem(6, payNegotiable);
    localStorage.setItem(7, description);
}

/**
 * Reloads in previous local storage for ease of use.
 */
function loadLocalStorageInfo(){
    title = localStorage.getItem(0);
    address = localStorage.getItem(1);
    city = localStorage.getItem(2);
    province = localStorage.getItem(3);
    inputPostalCode = localStorage.getItem(4);
    payAmount = localStorage.getItem(5);
    payNegotiable = localStorage.getItem(6);
    description = localStorage.getItem(7);

    changeInputValues();
}

/**
 * Changes the values of the input boxes
 */
function changeInputValues(){
    document.getElementById("titleInput").value = title;
    document.getElementById("inputAddress").value = address;
    document.getElementById("inputCity").value = city;
    document.getElementById("inputProvince").value = province;
    document.getElementById("inputPostalCode").value = inputPostalCode;
    document.getElementById("payAmountInput").value = payAmount;
    document.getElementById("descriptionInput").value = description;
}

/**
 * On load, checks if info the user previously entered needs to be
 * loaded back in for ease of use.
 * Sets buttons functions.
 */
$(document).ready(onLoad);
