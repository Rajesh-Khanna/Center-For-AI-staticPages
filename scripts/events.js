event = [
    ['http://upai-summit.in/','UPAI workshop','upai-summit.in','up.AI (pronounced “upay” (उपाय), meaning “solution” in Hindi) is a joint initiative of The Department of Computer Science and Engineering, IIT Kharagpur and the Centre for Excellence in Artificial Intelligence, IIT Kharagpur to invite the KGPians to learn and identify burning problems in our country and create AI powered solutions.','Oct. 5, 2018 - Oct. 7, 2018 ','IIT Kharagpur '],
    ['#','Industry Connect','','Prof P P Chakrabarti, Director of IIT Kharagpur met with several industry members and Alumni in Bengaluru on 6th October 2018 along with Prof Sudeshna Sarkar and Prof Aritra Hazra. There were discussions with various stakeholders on the roadmap for the Centre for Artificial intelligence IIT Kharagpur including the founding sponsors, corporates, participating faculty from industry and other institutions, startups and alumni.','Oct. 6, 2018 ','Bengaluru ']
];
(function() {
    notice_block = document.getElementById("events");
    
    for(i=0;i<event.length;i++){
        elem = document.createElement("tr");
        elem.classList.add("col-6");
        elem.classList.add("p-4");
        elem.innerHTML ='<div class="card"><div class="card-header"><a href="'+ event[i][0]+'">'+ event[i][1] +'</a></div>            <div class="card-body">              <h6 class="card-subtitle mb-2 text-muted">'+ event[i][2] +'</h6>              <p class="card-text">'+ event[i][3] +'</p>  </div>  <div class="card-footer">  <small class="text-muted "> '+ event[i][4] +' </small>  <small class="text-muted text-right" > '+ event[i][5] +' </small></div></div>';
        notice_block.appendChild(elem);
    }
})();