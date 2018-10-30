project = [
];
(function() {
    notice_block = document.getElementById("projects_list");
    
    for(i=0;i<project.length;i++){
        elem = document.createElement("tr");
        elem.innerHTML = '   <td><b> '+ project[i][0] +'</b></td><td>'+project[i][1]+'</td><td>'+project[i][2]+'</td>        <td>'+project[i][3]+'</td>       <td>'+ project[i][4]+'</td>';
        notice_block.appendChild(elem);
    }
})();