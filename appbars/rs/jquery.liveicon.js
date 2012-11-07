/*
 * @Live Icon 1.0.1
 * @author: semicolon
 * @fix bug
 * - interval checking
 */
$.fn.liveicon = function(options){
    var opts = $.extend({}, $.fn.liveicon.defaults, options);
    // re-render
    if(opts.size != "small"){
        $(this).animate({
            width:"200px"
        });
    }
    $(this).css({
        "backgroundColor": opts.backgroundColor, 
        "color": opts.color
        });
    // for right click to expand size
    $(this).bind("contextmenu", function(e){
        $(this).css({border:"2px solid white"});
        $(this).appbar();
        return false;
    });
        
    // for update live icon
        
    // set timeout to update live
    var command = "$(this).liveicon.update("+ $(this).attr("id") +")";
    window.setInterval(command, opts.stepTime);
};

$.fn.liveicon.update = function(element){
    var id = "#" + element.id;
    var subpage = $(id).find(".subpage");
    $.fn.liveicon.counter.counter++;
    if($.fn.liveicon.counter.counter < subpage.length){
        var position = $.fn.liveicon.counter.counter*90;
        $(id+ "> .subpages").animate({
            scrollTop:position+ "px"
        });
        
    }
    else{
        $(id+ "> .subpages").animate({
            scrollTop: "0px"
        }, "300");
        $.fn.liveicon.counter.counter = 0;
    }
    window.clearInterval();
};

$.fn.liveicon.counter = {
    counter: 0
};

$.fn.liveicon.defaults = {
    size: "small",
    stepTime: 3000,
    backgroundColor: "#0066ff",
    color: "#fff"
};

$.fn.liveicon.contextmenu = {
    option: ""
}
