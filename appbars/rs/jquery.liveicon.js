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
        // clear other liveicon
        $("div.live").css({border:"2px solid transparent"});
        if(!$.fn.liveicon.temp.toggle){
            $(this).css({border:"2px solid white"});
            $.fn.liveicon.temp.toggle = true;
        }
        else{
            $(this).css({border:"2px solid transparent"});
            $.fn.liveicon.temp.toggle = false;
        }
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
    $.fn.liveicon.temp.counter++;
    if($.fn.liveicon.temp.counter < subpage.length){
        var position = $.fn.liveicon.temp.counter*90;
        $(id+ "> .subpages").animate({
            scrollTop:position+ "px"
        });
        
    }
    else{
        $(id+ "> .subpages").animate({
            scrollTop: "0px"
        }, "300");
        $.fn.liveicon.temp.counter = 0;
    }
    window.clearInterval();
};

$.fn.liveicon.unselected = function(){
    $("div.live").css({border:"2px solid transparent"});
    //$.fn.liveicon.temp.toggle = false;
};

$.fn.liveicon.temp = {
    counter: 0,
    toggle: false
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
