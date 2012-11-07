this.window.handler = {
    add:function(){
        $("div.appbar > div").click(function(){
            var func = $(this).attr("handler");
            func+"();";
            eval(func.toLowerCase());
            $.fn.appbar.close();
        });
        
    }
}

