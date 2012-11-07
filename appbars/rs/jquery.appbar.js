/*
 * @Live Icon 1.0.1
 * @author: semicolon
 * @fix bug
 * - interval checking
 */
$.fn.appbar = function(){
    
    // initiallize 
    var appname = $(this).attr("appname");
    var apppath = "apps/"+appname+"/";
    var config = apppath+"appbar.json";
    
    // override options 
    var opts = $.fn.appbar.defaults;
    
    // create appbar
    var appbar = $("div.appbar");
    appbar.attr("appname", appname);
    if($.fn.appbar.other.display == true){
        $.fn.appbar.other.display = false;
        $.fn.appbar.close();
        return;
    }
    // render
    var path = config;
    $.getJSON(path, function(data){
        var content = "";
        for(var index in data["items"]){
            var text = data["items"][index].text;
            var icon = data["items"][index].icon;
            var handler = data["items"][index].handler;
            var open = "<div class='item' handler='"+appname.toLowerCase()+"."+handler+"'>";
            var close = "</div>";
            var img_icon = "<div class='icon'><img src='"+ apppath +"src/"+ icon +"' /></div>";
            var label = "<div class='text'>"+text+"</div>";
            var item = open+img_icon+label+close;
            content+= item ;
        }
        $("div.appbar").html("");
        $("div.appbar").html(content);
    });
    // setting animate style
    var animateStyle = {
        bottom: "0px"  
    };
    $("div.appbar").animate(animateStyle, "fast", function(){
        // add handler
    handler.add();
    });
    $.fn.appbar.other.display = true;
     
};

$.fn.appbar.close = function(){
    $.fn.appbar.other.display = false;
    var animateStyle = {
        bottom: "-120px"  
    };
        
    $("div.appbar").animate(animateStyle, "normal");
};

$.fn.appbar.items = [];

$.fn.appbar.handlers = [];

$.fn.appbar.other = {
    display: false
}

$.fn.appbar.defaults = {
    name: ""
};

