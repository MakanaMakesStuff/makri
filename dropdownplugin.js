$(document).ready(function(){
var bod = $(document);
var container = $("#menu_container");
var main = $("#drop_down");
var drop = $("#dropper");
var head = $("#head");
var text = $("#text");
var el = drop.children();
    
                $('li').each(function(index){
                   $(this).transition({
                      y: -30
                   });
                });
   (function MakeMenu(){
       $("ul").css({
          'z-index':'-1',
          'position':'absolute',
          'list-style':'none',
          'list-style-type':'none',
          'color':'white',
          'padding':'0',
          'margin':'0',
       });
       container.css({
           'z-index':'-2',
           'position':'absolute',
           'width':'120',
           'height':'150',
       })
       $('.dropper').css({
           'position':'absolute',
           'width':'120px',
           'height':'30px',
           'background-color':'#4e4e4e',
           'line-height':'200%',
           'text-align':'center',
       });
        main.css({
           'position':'relative',
           'background-color':'cornflowerblue' 
       });
       head.css({
           'z-index':'1',
           'position':'relative',
           'width': main.width(),
           'height': main.height(),
           'line-height':'200%',
           'text-align':'center',
       });
       text.css({
           'position':'relative',
           'width':'120px',
           'height':'30px',
           'font-size':'12px', 
           'color':'white'
       });
   })();
    function AlignHorizontal(target, obj){
        var width = target.width();
        var myWidth = obj.width();
        var posX = (width/2) - myWidth/2;
        obj.css({
           'left': posX
        });
    }
    (function ButtonAnimation(){
         $(head).mouseenter(
            function(){
                $('li').each(function(index){
                   $(this).transition({
                      y: 30 * index
                   });
                    
                });
                $(this).css({
                   'background-color' : 'darkgray' 
                });
            });
        $(head).mouseleave(function(){
            $(this).css({
                   'background-color' : 'cornflowerblue' 
                });
        });
        $(container).mouseleave(function(){
            $('li').each(function(index){
                   $(this).transition({
                      y: -30
                   });
                });
        });
        $(".dropper").click(
            function(){
                $('li').each(function(index){
                   $(this).transition({
                      y: -30
                   });
                });
            });
        for(var i = 0; i < el.length; i++){
            $(el[i]).hover(
            function(){
                $(this).css({
                   'opacity':'0.5' 
                });
            },
            function(){
                $(this).css({
                   'opacity':'1' 
                });
            });
        }
    })();
    
     AlignHorizontal(bod, container);
    
    $(window).resize(function(){
    AlignHorizontal(bod, container);
    });
});