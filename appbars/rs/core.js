this.window.handler = {
    add:function(){
        $("div.appbar > div").click(function(){
            var func = $(this).attr("handler");
            eval(func);
            $.fn.appbar.close();
        });
        
    }
}

