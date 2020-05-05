document.getElementById("employerHomeButton").onclick = employerHomePage;
document.getElementById("jobPostNextButton").onclick = jobReviewPage;

function jobReviewPage(){
    getData();
    window.location.href = "employer_jobpost_review.html";
}

function employerHomePage(){
    window.location.href = "employer_home.html";
}

function getData(){
    let title = "N/A";
    let address = "N/A";
    let city = "N/A";
    let province = "N/A";
    let inputPostalCode = "N/A";
    let payAmount = "N/A";
    let payNegotiable = "N/A";
    let description = "N/A";

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
    sendReview(title, address, city, province, inputPostalCode, payAmount, payNegotiable, description);
}

function sendReview(title, address, city, province, inputPostalCode, payAmount, payNegotiable, description){
    localStorage.setItem(0, title);
    localStorage.setItem(1, address);
    localStorage.setItem(2, city);
    localStorage.setItem(3, province);
    localStorage.setItem(4, inputPostalCode);
    localStorage.setItem(5, payAmount);
    localStorage.setItem(6, payNegotiable);
    localStorage.setItem(7, description);
}
