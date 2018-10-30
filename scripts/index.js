// topic - 0 ; message - 1 ; link - 2
notice = [['Prof P P Chakrabarti',"Prof P P Chakrabarti to be honoured by Intel India with Intel's Technology Excellence Award for his exemplary contribution ",''],
    ['Seminars'," Steering Social Activity: A Stochastic Optimal Control Point Of View Abir De ",""]
    ];
(function() {
    notice_block = document.getElementById("notice_list");
    
    for(i=0;i<notice.length;i++){
        elem = document.createElement("li");
        elem.classList.add("list-group-item");
        elem.innerHTML = '<p><b>'+notice[i][0]+'</b> : '+ notice[i][1]+ '</p>';
        if(notice[i][2])
            elem.innerHTML = '<p><b>'+notice[i][0]+'</b> : '+ notice[i][1]+ '        <a href="'+ notice[2] +'"><i> link </i></a>    </p>';
        notice_block.appendChild(elem);
    }
})();