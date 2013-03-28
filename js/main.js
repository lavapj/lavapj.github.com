// $(window).scroll(function () {
//     $('#nav-wrapper').css({ position: 'fixed', top: '0' });
// });

// function isScrolledIntoView(elem)
// {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
// }


// $(document).ready(function(){
//     $('.btn').hover(function(){
//         this.src = this.src.split(".png").join("-over.png");
//         console.log("hey");
//     }, function() {
//         this.src = this.src.split("-over.jpg").join(".png");
//     });
// });


$('.btn').hover(function() {
    var src = $(this).attr("src");
    src = src.replace(/(.*)\.(png|gif|jpg|jpeg)$/, "$1-over.$2");
    $(this).attr("src", src);
}, function() {
    var src = $(this).attr("src");
    src = src.replace(/(.*)-over\.(png|gif|jpg|jpeg)$/, "$1.$2");
    $(this).attr("src", src);
});

$('#quotes-rotating').cycle();

