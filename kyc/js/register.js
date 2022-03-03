function showDiv(select){
    if(select.value== "Student"){
        document.getElementById('student-form').style.display = "block";
        document.getElementById('institute-form').style.display = "none";
        document.getElementById('company-form').style.display = "none";
    }
    else if(select.value == 'Institute'){
        document.getElementById('institute-form').style.display = "inline-block";
        document.getElementById('company-form').style.display = "none";
        document.getElementById('student-form').style.display = "none";
    }
    else if(select.value == 'Verifier'){
        document.getElementById('company-form').style.display = "inline-block";
        document.getElementById('student-form').style.display = "none";
        document.getElementById('institute-form').style.display = "none";
    }
   
}

