questions = [
];
(function() {
    cardPos();
    question_block = document.getElementById("question_list");
    for(i=0;i<questions.length;i++){
        elem = document.createElement("div");
        elem.classList.add("card");
        elem.classList.add("border-success");
        elem.innerHTML = '<div class="card-header bg-success text-white">'+ questions[i][0] +'</div>            <div class="card-body " style=" text-indent: 25px;">                <p class="card-text">'+ questions[i][1] +'</p>             </div>' ;
        question_block.appendChild(elem);
    }

})();

$(window).resize(function(){
  cardPos();
});

function cardPos(){
    // var fc = document.getElementById("floating-card");
    $('#floating-card').css('width',$('#side-card').width());


     window.onscroll = function(){
      if(window.scrollY > $('#side-card').offset().top-60){
        $('#floating-card').addClass("fixy");
        // document.get
        $('#floating-card').css('top',120);
      }
      else {
        $('#floating-card').css('top',120);
        $('#floating-card').removeClass("fixy");
      }

    };
}
