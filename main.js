var canvas=new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_objects="";
function  player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_objects=Img;
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,left:player_x
        });
        canvas.add(player_objects);

    });
}
function  new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,left:player_x
        });
        canvas.add(block_image_object);

    });
}
 window.addEventListener("keydown",my_keydown);
 function my_keydown(e) {
     keypressed=e.keyCode;
     console.log (keypressed);
     if(e.shiftKey==true&&keypressed=='80')
     {
         console.log("p&shift are pressed together");
         block_image_width=block_image_width+10;
         block_image_height=block_image_height+10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;
     }
     if(e.shiftKey==true&&keypressed=='77')
     {
         console.log("m&shift are pressed together");
         block_image_width=block_image_width-10;
         block_image_height=block_image_height-10;
         document.getElementById("current_width").innerHTML=block_image_width;
         document.getElementById("current_height").innerHTML=block_image_height;
     }
     if(keypressed=='38'){
         up();
         console.log("up")
     }
     if(keypressed=='40'){
        down();
        console.log("down")
    }
    if(keypressed=='37'){
        right();
        console.log("right")
    }
    if(keypressed=='39'){
        left();
        console.log("left")
    }
    if(keypressed=='84') {
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keypressed=='68') {
        new_image('dark_green.png');
        console.log("d");
    }
    if(keypressed=='76') {
        new_image('light_green.png');
        console.log("l");
    }
    if(keypressed=='71') {
        new_image('ground.png');
        console.log("g");
    }
    if(keypressed=='87') {
        new_image('wall.jpg');
        console.log("w");
    }
    if(keypressed=='89') {
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keypressed=='82') {
        new_image('roof.jpg');
        console.log("r");
    }
    if(keypressed=='67') {
        new_image('cloud.jpg');
        console.log("c");
    }
    if(keypressed=='85') {
        new_image('unique.png');
        console.log("u");
    }
}
     
function up() {
    if(player_y>=0){
        player_y= player_y-block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when up arrow key is pressed x ="+ player_x +"y=" +player_y );
        canvas.remove(player_objects);
        player_update() ;

    }
}

function down() {
    if(player_y<=500){
        player_y= player_y+block_image_height;
        console.log("block_image_height="+block_image_height);
        console.log("when down arrow key is pressed x ="+ player_x +"y=" +player_y );
        canvas.remove(player_objects);
        player_update() ;
        
    }
}

function right() {
    if(player_x>0){
        player_x= player_x-block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when left arrow key is pressed x ="+ player_x +"y=" +player_y );
        canvas.remove(player_objects);
        player_update() ;
        
    }
}   

function left() {
    if(player_x<=850){
        player_x= player_x+block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when right arrow key is pressed x ="+ player_x +"y=" +player_y );
        canvas.remove(player_objects);
        player_update() ;
        
    }
}