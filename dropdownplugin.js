/* 
# CODER: MAKA EDWARDS #
# VERSION: 1.0 #
# INCLUDE THIS IN YOUR HTML FILE:
        <div id="menu_container">
            <div id="drop_down" class="dropper">
                <div id="head"><p id="text"><!-- INSERT MENU HEADER !-->LANDMARKS</p></div>
                <ul id="dropper">   
                    <!-- INSERT MENU ITEMS HERE !-->
                    <li class="dropper">Space Center</li>
                    <li class="dropper">Everglades</li>
                    <li class="dropper">Disney World</li>
                    <li class="dropper">Miami</li>
                    <li class="dropper">Tampa</li>
                </ul>
            </div>
        </div>
# CODER: MAKA EDWARDS #
*/
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
});
