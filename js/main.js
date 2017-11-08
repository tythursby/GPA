var click = 0;
$('#face_wrapper').click(function (){
  click++;
  if (click == 1){
    alert("Hey Buddy");
  }
  if (click == 2){
    alert("Hey Guy");
  }
  if (click == 3){
    alert("Hey Pal");
  }
  if (click > 3){
    alert("That's all the click events Buddy...Sadly this isn't a loop");
  }
});

$(document).ready(function(){
    $('#characterLeft').text('300 characters left');
    $('#message').keydown(function () {
        var max = 300;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');
        }
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');
        }
    });

    $(".scroll").click(function () {
      $('html, body').animate({scrollTop: $( $(this).attr('href') ).offset().top -100 }, 'slow');
    });

});
