// url - 0, name - 1,position - 2, designation - 3,email - 4, contact_number - 5, Research_Areas - 6
faculty = [
    ['sudeshna.jpg','Sudeshna Sarkar','Head, Centre for AI','Professor, CSE','sudeshna@cse.iitkgp.ac.in','03222-282256','Artificial Intelligence Information Retrieval    Machine Learning    Natural Language Processing'],
    ['PawanG.jpg','Pawan Goyal','Academic Coordinator','Assistant Professor, CSE','sudeshna@cse.iitkgp.ac.in','03222-282256','Natural Language Processing  Information Retrieval    Data and Web Mining  Complex and Social Networks'],
    ['AritraHazra.jpg','Aritra Hazra','Laboratory and Research Coordinator','Assistant Professor, CSE','sudeshna@cse.iitkgp.ac.in','03222-282256','Formal Methods    CAD for VLSI & Embedded Systems    VLSI and Embedded Systems    Embedded Systems    Design Verification'],
];
staff = [
    ['utkarsh.jpeg','Utkarsh Prasad','Program Manager, Centre for AI','utkarsh.iitkgp@gmail.com','283462']
];
student = [
];
(function() {
    faculty_block = document.getElementById("faculty_list");
    
    for(i=0;i<faculty.length;i++){
        elem = document.createElement("div");
        elem.classList.add("row");
        elem.innerHTML = '        <div class="col-md-3">          <img src="ai/images/'+ faculty[i][0] +'" alt="'+faculty[i][1]+'" class="img-thumbnail" width="150" height="200"/></div>        <div class="col-md-4">          <ul class="list-unstyled">            <li><font color="#0000ff">'+faculty[i][1]+'</font></li>            <li>'+ faculty[i][2] +'</li>            <li>'+ faculty[i][3] +'</li>            <li>'+ faculty[i][4] +'</li>            <li>'+ faculty[i][5] +'</li>          </ul>        </div>        <div class="col-md-3">            '+faculty[i][6]+'</div><hr>';
        faculty_block.appendChild(elem);
    }
    staff_block = document.getElementById("staff_list");
    
    for(i=0;i<staff.length;i++){
        elem = document.createElement("div");
        elem.classList.add("row");
        elem.innerHTML = '        <div class="col">          <img src="ai/images/'+ staff[i][0] +'" alt="'+staff[i][1]+'" class="img-thumbnail" width="150" height="200"/></div>        <div class="col-md-4">          <ul class="list-unstyled">            <li><font color="#0000ff">'+staff[i][1]+'</font></li>            <li>'+ staff[i][2] +'</li>           <li>'+ staff[i][3] +'</li>            <li>'+ staff[i][4] +'</li>          </ul>        </div> <hr>';
        staff_block.appendChild(elem);
    }

    student_block = document.getElementById("student_list");
    
    for(i=0;i<student.length;i++){
        elem = document.createElement("div");
        elem.classList.add("row");
        elem.innerHTML = '        <div class="col-md-3">          <img src="ai/images/'+ student[i][0] +'" alt="'+student[i][1]+'" class="img-thumbnail" width="150" height="200"/></div>        <div class="col-md-4">          <ul class="list-unstyled">            <li><font color="#0000ff">'+student[i][1]+'</font></li>            <li>'+ student[i][2] +'</li>            <li>'+ student[i][3] +'</li>            <li>'+ student[i][4] +'</li>            <li>'+ student[i][5] +'</li>          </ul>        </div>        <div class="col-md-3">            '+student[i][6]+'</div><hr>';
        student_block.appendChild(elem);
    }


})();