$(document).ready(function(){

  $(".menu").on("change", function(event){
    var choice = $(this).val();

    if(choice=="low"){
         $(".item.active").removeClass("active highlight less more")
         $(".item").removeClass("highlight")
         $(".item").removeClass("less")
         $(".item").removeClass("more")
      $("."+choice).addClass("less");
    }

    else if(choice=="middle"){
         $(".item").removeClass("less")
         $(".item").removeClass("active")
         $(".item").removeClass("highlight")
      $("."+choice).addClass("more")
    }
    
    else if(choice=="high"){
         $(".item").removeClass("more")
         $(".item").removeClass("less")
         $(".item").removeClass("active")
       $("."+choice).addClass("highlight")
    }

    // else (choice=="all")
    //   $(".item").removeClass("more")
    //  $(".item").removeClass("less")
    //  $(".item").removeClass("active")
    //  $(".item").removeClass("highlight")
    //  $("."+choice).addClass("image")
    // else (choice=="all")
    //   $(".item.highlight").removeClass("active")
    // $(".").addClass("more","less")

  })
})
// $(document).ready(function(){

//   $(".menu").on("change", function(event){
//     var choice = $(this).val();

//     if(choice=="low"){
//          $(".item.active").removeClass("active")
//       $("."+choice).addClass("less");
//     }

//     else if(choice=="middle"){
//          $(".item.less").removeClass("less")
//       $("."+choice).addClass("more")
//     }
    
//     else if(choice=="high"){
//          $(".item.more").removeClass("more")
//        $("."+choice).addClass("highlight")
//     }
    
//     // else (choice=="all")
//     //   $(".item.highlight").removeClass("active")
//     // $(".").addClass("more","less")

//   })
// })


$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}

