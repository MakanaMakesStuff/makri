/*
#####################################################################################
#####################################################################################
##                                                                                 ##
## Author: Makana O' Ke Akua Edwards                                               ##
##                                                                                 ##
## Date: 6/1/2019                                                                  ##
##                                                                                 ##
## Time: 1:08 am EST                                                               ##
##                                                                                 ##
## Description: This is a JavaScript plugin that takes the inner text of a given   ##
## element, then outputs the text iteratively in a delayed fashion                 ##
##                                                                                 ##
## Copyright @ Makanaokeakua Edwards. This code can be used for any purpose.       ##
## (If used in commercial projects, do not use in its original unaltered form).    ##
##  All implementations of this code should cite myself as the original writer.    ##
##                                                                                 ##
##  How to use: simply name your classes as such 'type-500' (the word 'type'       ##
##  followed by a hyphen and a number). That number represents the type speed in   ##
##  milliseconds. Any innerHTML within this specified class will be manipulated by  ##
##  the plugin                                                                     ##
##                                                                                 ##
#####################################################################################
#####################################################################################
*/
function Typer(delay){
    var types = document.querySelectorAll("[class*='type']");
    if(this instanceof Typer){
        var all = [...types];
        this.typeout(all, delay);
    }
    else{
        return new Typer(delay);
    }
}

Typer.prototype.typeout = (initObj, delay)=>{
    for(var i = 0; i < initObj.length; i++){
        var right = initObj[i].className.split("-")[1];
        if(/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(right) || !/^[0-9]/.test(right)){
            //Ignore and Let Loop Continue
        }
        else{
            init(initObj[i]);
        }
    }
    
    function init (obj){
        delay = parseInt(obj.className.split("-")[1]) || 1000;
        var letters = obj.innerHTML;
        obj.innerHTML = "";
        var temp = "";
        process(obj, letters, temp, 0, delay);
    }
    
    function process (obj, letters, temp, count, delay){
        if(count < letters.length){
            temp += letters[count];
            obj.innerHTML = temp;
            count++;
            setTimeout(function(){
                return process(obj, letters, temp, count, delay);
            }, delay);
        }
        else{
            return;
        }
    }
}

window.onload = ()=>{
    var typer = new Typer();
}
