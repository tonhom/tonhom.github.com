this.window.handler = {
    add:function(){
        $("div.appbar > div").click(function(){
            var func = $(this).attr("handler");
            func+="();";
            console.log(func);
            eval(func.toLowerCase());
            $.fn.liveicon.unselected();
            $.fn.appbar.close();
        });
        
    }
}

