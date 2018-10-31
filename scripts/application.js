(function(){    
    checkForm();
    displayEntry();
    $('input[name="check1"]').on('click change', function(e) {
        displayEntry();
    });
    $('#checkFinalYear').on('click change', function(e) {
        displayEntry();
    });

    $('#CoEform').on('click change', function(e) {
        checkForm();
    });

})();

function displayEntry(){
    if (document.getElementById('checkjob').checked) {
        $("#ifEmployee").removeClass('d-none');
      }else{
        $("#ifEmployee").addClass('d-none');
      }

    if (document.getElementById('checkstudent').checked) {
        $("#ifStudent").removeClass('d-none');
    }else{
        $("#ifStudent").addClass('d-none');
    }    
    if (document.getElementById('checkFinalYear').checked) {
        $("#ifFinalYear").removeClass('d-none');
    }else{
        $("#ifFinalYear").addClass('d-none');
    }    

}

function checkForm(){
    if (document.getElementById('checkstudent').checked){
        if (document.getElementById('checkFinalYear').checked && document.getElementById('inputCollege').value != '' && document.getElementById('inputBranch').value != '') {
            $('#formSubmit').prop('disabled', false);
            console.log(1);
            
        }else{
            $('#formSubmit').prop('disabled', true);
            console.log(2);
        }
    }else{
        if(document.getElementById('inputExperience').value != '' && document.getElementById('inputCompany').value != '' && document.getElementById('inputDesignation').value != '' )
        {
            $('#formSubmit').prop('disabled', false);
        }else{
            $('#formSubmit').prop('disabled', true);
        }
    }
}