var Navigation =$('#Navigation');
var head=$('#head');
var hide=$('.hide');
var tags=$('#tags');
var detail=$('.detail');
var container=$('.container');
Navigation.on('click', function () {
    if(head.hasClass('motion1')){
       // console.log(1);
        hide.css('display','none');
        hide.removeClass('animate');
        head.removeClass('motion1');
        tags.removeClass('motion');
        detail.removeClass('motion');
        container.removeClass('motion');
    }
    else {
        hide.css('display','block');
        hide.addClass('animate');
        head.addClass('motion1');
        tags.addClass('motion');
        detail.addClass('motion');
        container.addClass('motion');
    }
});
window.onresize= function () {
    hide.css('display','none');
    hide.removeClass('animate');
    head.removeClass('motion1');
    tags.removeClass('motion');
    detail.removeClass('motion');
    container.removeClass('motion');
};
$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))|| (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
    if (delta > 0) {
        $('.roller').css('opacity','1');
        console.log("向上滚");
    } else if (delta < 0) {
        $('.roller').css('opacity','0');
        console.log("向下滚");
    }
});







