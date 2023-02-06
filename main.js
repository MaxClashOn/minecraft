var canvas=new fabric.Canvas("myCanvas");
ancho_block=30;
altura_block=30;
jugador_x=10;
jugador_y=10;
var jugador_objeto="";
var blocke_objeto="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
    jugador_objeto=Img;
    jugador_objeto.scaleToWidth(150);
    jugador_objeto.scaleToHeight(140);
    jugador_objeto.set({
       top:jugador_y,left:jugador_x 
    });
    canvas.add(jugador_objeto);

    });

}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
    blocke_objeto=Img;
    blocke_objeto.scaleToWidth(ancho_block);
    blocke_objeto.scaleToHeight(altura_block);
    blocke_objeto.set({
       top:jugador_y,left:jugador_x 
    });
    canvas.add(blocke_objeto);

    });
    
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true&&keyPressed=="80"){
        ancho_block=ancho_block+10;
        altura_block=altura_block+10;
        document.getElementById("ancho_actual").innerHTML=ancho_block;
        document.getElementById("altura_actual").innerHTML=altura_block;
        
    }
    if(e.shiftKey==true&&keyPressed=="77"){
        ancho_block=ancho_block-10;
        altura_block=altura_block-10;
        document.getElementById("ancho_actual").innerHTML=ancho_block;
        document.getElementById("altura_actual").innerHTML=altura_block;
        
    }
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
    if(keyPressed=="71"){
        new_image("ground.png");
    }
    if(keyPressed=="87"){
        new_image("wall.jpg");
    }
    if(keyPressed=="76"){
        new_image("light_green.png");
    }
    if(keyPressed=="84"){
        new_image("trunk.jpg");
    }
    if(keyPressed=="82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if(keyPressed=="89"){
        new_image("yellow_wall.png");
    }
    if(keyPressed=="68"){
        new_image("dark_green.png");
    }
    if(keyPressed=="85"){
        new_image("unique.png");
    }
    if(keyPressed=="67"){
        new_image("cloud.jpg");
    }
    if(keyPressed=="65"){
        new_image("air.png");
    }
}
function down(){
    if(jugador_y<=450){
        jugador_y=jugador_y+altura_block;
        canvas.remove(jugador_objeto);
        player_update();
    }
}
function up (){
    if (jugador_y>=0){
        jugador_y=jugador_y-altura_block;
        canvas.remove(jugador_objeto);
        player_update();
    }
}
function right (){
    if (jugador_x<=850){
        jugador_x=jugador_x+ancho_block;
        canvas.remove(jugador_objeto);
        player_update();
    }
}
function left (){
    if(jugador_x>=0){
        jugador_x=jugador_x-ancho_block;
        canvas.remove(jugador_objeto);
        player_update();
    }
}