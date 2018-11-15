$('.small-img').on('click', function(e){
    let myTarget = $(e.target);
    let mySource = myTarget.attr('src');
    $('.big-img').attr('src', mySource);
    console.log("test");

    $('.big-img').fadeOut(1);
    $('.big-img').fadeIn(1500);
})