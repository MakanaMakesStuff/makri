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
##  milliseconds. Any innerHTML within this specified class will be manipulated by ##
##  the plugin. You can also call the Typer function and bind the action to an     ##
##  element or event.                                                              ##
##                                                                                 ##
##  For example:                                                                   ##         
##       Typer('.insertclass').One(150);                                           ##
##                                                                                 ##
##                                                                                 ##
##                                                                                 ##
#####################################################################################
#####################################################################################
*/
function Typer(obj){
    if(obj != null){ this.obj = document.querySelectorAll(obj); }
    if(this instanceof Typer){ /* ignore */ }
    else{ return new Typer(obj); }
}
Typer.prototype.One = (delay)=>{
    let temp;
    if(this.obj == 0 || this.obj == undefined){ return 0; }
    else{
        if(this.obj.length > 0){
            temp = [...this.obj];
            temp.map((v, i)=>{
                let letters;    
                letters = v.innerHTML;
                temp[i].innerHTML = "";
                process(v, letters, delay, 0, "");
            });
        }
        else{
            temp = this.obj;
            let letters;
            letters = temp.innerHTML;
            process(temp, letters, delay, 0, "");
        }
    }
    function process(obj, letters, delay, count, temp){
        if(count < letters.length){
            temp += letters[count];
            obj.innerHTML = temp;
            count++;
            return setTimeout(()=>{
                process(obj, letters, delay, count, temp);
            }, delay);
        }
    }
}
Typer.prototype.set = (delay)=>{
    let obj = document.querySelectorAll("[class*='type-']");
    obj = [...obj];
    obj.map((v)=>{if(v.className.indexOf('type-') > -1){
        let letters;
        letters = v.innerHTML;
        v.innerHTML = "";
        process(v, letters, delay, 0, "");
    }});

    function process(obj, letters, delay, count, temp){
        let name = [...obj.classList];
        name.map((v)=>{if(v.indexOf('type-') > -1){return delay = v.split("-")[1] || 150 }});
        if(count < letters.length){
            temp += letters[count];
            obj.innerHTML = temp;
            count++;
            return setTimeout(()=>{
                process(obj, letters, delay, count, temp);
            }, delay);
        }
    }
}
window.onload = ()=>{ Typer().set(); }
