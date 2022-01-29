// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(document).scrollTop() > 200) {
//             $('.navbar').hide(1000);
//         } else {
//             $('.navbar').show();
//         }
//     })
// });


$('.progress-value > span').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


$('#sendBtn').click(function(){
    var email = $('#exampleInputEmail1').val();
    $('#exampleInputEmail1').val('');
    var Message = $('#exampleInputMessage1').val();
    $('#exampleInputMessage1').val('');
    alert("You send a message :"+Message+"  from email id :"+email)
})

$('.nav-link').click(function(){
    if($(this).attr("href")==="#contact"){
        $('.nav-link').attr("class","nav-link")
        $(this).attr("class","nav-link active")
    }else if($(this).attr("href")==="#home"){
        $('.nav-link').attr("class","nav-link")
        $(this).attr("class","nav-link active")
    }else if($(this).attr("href")==="#projects"){
        $('.nav-link').attr("class","nav-link")
        $(this).attr("class","nav-link active")
    }else{
        $('.nav-link').attr("class","nav-link")
        $(this).attr("class","nav-link active")
    }
})

