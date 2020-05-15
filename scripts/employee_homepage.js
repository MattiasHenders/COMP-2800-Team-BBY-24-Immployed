// Redirecting to creating a new post
function search(){
    window.location.href = "browse_jobs.html";
}

function editProfile(){
    window.location.href = "employee_profile.html";
}

// Easter Egg
$(function(){
    $('#easter').on('click',function(){
        $('body').addClass('animate');
    });
});

