document.getElementById("backButton").onclick = jobPostPage;
document.getElementById("submitButton").onclick = employerHomePage;

function jobPostPage(){
    window.location.href = "employer_jobpost.html";
}

function employerHomePage(){
    window.location.href = "employer_home.html";
}

function getInfo(){
    let title = localStorage.getItem(0);
    let address = localStorage.getItem(1);
    let city = localStorage.getItem(2);
    let province = localStorage.getItem(3);
    let inputPostalCode = localStorage.getItem(4);
    let payAmount = localStorage.getItem(5);
    let payNegotiable = localStorage.getItem(6);
    let description = localStorage.getItem(7);

    sendReview(title, address, city, province, inputPostalCode, payAmount, payNegotiable, description);
}

function sendReview(title, address, city, province, inputPostalCode, payAmount, payNegotiable, description){
    
    document.getElementById("titleReview").innerHTML = title;
    document.getElementById("addressReview").innerHTML = address;
    document.getElementById("cityReview").innerHTML = city;
    document.getElementById("provinceReview").innerHTML = province;
    document.getElementById("postalCodeReview").innerHTML = inputPostalCode;
    document.getElementById("payReview").innerHTML = payAmount;
    document.getElementById("payNegotiableReview").innerHTML = payNegotiable;
    document.getElementById("descriptionReview").innerHTML = description;
}

getInfo();