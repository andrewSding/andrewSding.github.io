$(document).ready(function() {


  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:


$(".page-wrapper").click(function() {
    $("body").removeClass("no-scroll");
    $(".page-wrapper").removeClass("wrapper-active");
 })
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here

  //Implement the "slide to right" when the user clicks on #carousel-prev here

var x = parseInt($("#carousel").css("margin-left").replace("px", ""));
var counter = 1;

  $("#carousel-prev").click(function() {
if (x!=0){
    x=x+960;
    $("#carousel").css("margin-left",x+"px");
  }
  if (x==0){
        $("#carousel-prev").css("display", "none");
  }
  if (x==-3840){
    $("#carousel-next").css("display", "block");  
  }
  counter=counter-1;
if (counter==2){
    $(".button").css("background-color", "black");
  $("#btn2").css("background-color", "#00CFFF");
}
if (counter==3){
    $(".button").css("background-color", "black");
  $("#btn3").css("background-color", "#00CFFF");
}
if (counter==4){
    $(".button").css("background-color", "black");
  $("#btn4").css("background-color", "#00CFFF");
}
if (counter==5){
    $(".button").css("background-color", "black");
  $("#btn5").css("background-color", "#00CFFF");
}
if (counter==1){
    $(".button").css("background-color", "black");
  $("#btn1").css("background-color", "#00CFFF");
}
})


$("#carousel-next").click(function() {
if (x!=-4800){
    x=x-960;
    $("#carousel").css("margin-left",x+"px");
}
console.log(x);
if (x==-960){
    $("#carousel-prev").css("display", "block");
}
if (x==-4800){
      $("#carousel-next").css("display", "none");  
}
counter=counter+1;
if (counter==2){
    $(".button").css("background-color", "black");
  $("#btn2").css("background-color", "#00CFFF");
}
if (counter==3){
    $(".button").css("background-color", "black");
  $("#btn3").css("background-color", "#00CFFF");
}
if (counter==4){
    $(".button").css("background-color", "black");
  $("#btn4").css("background-color", "#00CFFF");
}
if (counter==5){
    $(".button").css("background-color", "black");
  $("#btn5").css("background-color", "#00CFFF");
}
if (counter==6){
    $(".button").css("background-color", "black");
  $("#btn6").css("background-color", "#00CFFF");
}
})

$("#carousel-prev").hover(function() {
if (x!=0){
    $("#carousel-prev").css("border", "1px solid #00CFFF");
}
}, function() { 
    $("#carousel-prev").css("border", "1px solid #fff");
})

$("#carousel-next").hover(function() {
if (x!=-4800){
    $("#carousel-next").css("border", "1px solid #00CFFF");
}
}, function() { 
    $("#carousel-next").css("border", "1px solid #fff");
})

function hide(){
  if (x=0){
     $("#carousel-prev").css("visibility", "1px solid #fff");   
  }
}

$(window).load(function() {
    hide();
})

$("#lm1").click(function() {
 $("#modal-box").show();
  });

$("#lm1").click(function() {
 $("#modal-overlay").show();
  });

$("#lm2").click(function() {
 $("#modal-overlay2").show();
  });

$("#lm3").click(function() {
 $("#modal-overlay3").show();
  });

$("#lm4").click(function() {
 $("#modal-overlay4").show();
  });

$("#lm5").click(function() {
 $("#modal-overlay5").show();
  });

$("#lm6").click(function() {
 $("#modal-overlay6").show();
  });

  $("#modal-container").click(function() {
 $("#modal-box").hide();
  });

    $("#modal-container").click(function() {
 $("#modal-overlay").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-overlay").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-overlay").hide();
});

  $("#carousel-prev").click(function() {
 $("#modal-box").hide();
  });

    $("#modal-container2").click(function() {
 $("#modal-overlay2").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-overlay2").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-overlay2").hide();
});
        $("#modal-container3").click(function() {
 $("#modal-overlay3").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-overlay3").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-overlay3").hide();
});
        $("#modal-container4").click(function() {
 $("#modal-overlay4").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-overlay4").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-overlay4").hide();
});
        $("#modal-container5").click(function() {
 $("#modal-overlay5").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-overlay5").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-overlay5").hide();
});
        $("#modal-container6").click(function() {
 $("#modal-overlay6").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-overlay6").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-overlay6").hide();
});
    $("#carousel-next").click(function() {
 $("#modal-box").hide();
  });
    $("#logo").click(function() {
 $("#modal-box").hide();
  });

$("#lm2").click(function() {
 $("#modal-box2").show();
  });

  $("#modal-container2").click(function() {
 $("#modal-box2").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-box2").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-box2").hide();
  });
    $("#logo").click(function() {
 $("#modal-box2").hide();
  });

$("#lm3").click(function() {
 $("#modal-box3").show();
  });

  $("#modal-container3").click(function() {
 $("#modal-box3").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-box3").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-box3").hide();
  });
    $("#logo").click(function() {
 $("#modal-box3").hide();
  });

    $("#lm4").click(function() {
 $("#modal-box4").show();
  });

  $("#modal-container4").click(function() {
 $("#modal-box4").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-box4").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-box4").hide();
  });
    $("#logo").click(function() {
 $("#modal-box4").hide();
  });

$("#lm5").click(function() {
 $("#modal-box5").show();
  });

  $("#modal-container5").click(function() {
 $("#modal-box5").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-box5").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-box5").hide();
  });

    $("#logo").click(function() {
 $("#modal-box5").hide();
  });

$("#lm6").click(function() {
 $("#modal-box6").show();
  });

  $("#modal-container6").click(function() {
 $("#modal-box6").hide();
  });

  $("#carousel-prev").click(function() {
 $("#modal-box6").hide();
  });

    $("#carousel-next").click(function() {
 $("#modal-box6").hide();
  });
    $("#logo").click(function() {
 $("#modal-box6").hide();
  });

});