var canvas = new fabric.Canvas("Mycanvas")
var playerx = 50
var playery = 50
var partwidth = 30
var partheight = 30
var playerobject = ""
var bodypart = ""

function updateplayer(){
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
        playerobject.scaleToWidth(120);
        playerobject.scaleToHeight(120);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject)
    })
}

function updatebodypart(block){
    fabric.Image.fromURL(block,function(img){
        bodypart=img
        bodypart.scaleToWidth(partwidth);
        bodypart.scaleToHeight(partheight);
        bodypart.set({
            top:playery,
            left:playerx
        });
        canvas.add(bodypart)
    })
}

window.addEventListener("keydown",kd)

function kd(e){
    var x= e.keyCode
    console.log(x)
    if(x==72){
        updatebodypart("captain_america_left_hand.png")
        console.log("h is pressed")
    }
    if(x==70){
        updatebodypart("hulk_face.png")
        console.log("f is pressed")
    }
    if(x==76){
        updatebodypart("hulk_left_hand.png")
        console.log("l is pressed")  
    }
    if(x==75){
        updatebodypart("hulk_legs.png")
        console.log("k is pressed")
    }
    if(x==82){
        updatebodypart("hulk_right_hand.png")
        console.log("r is pressed")
    }
    if(x==66){
        updatebodypart("hulkd_body.png")
        console.log("b is pressed")
    }
    if(x==73){
        updatebodypart("ironman_body.png")
        console.log("i is pressed")
    }
    if(x==77){
        updatebodypart("ironman_face.png")
        console.log("m is pressed")
    }

    if(x==65){
        updatebodypart("ironman_left_hand.png")
        console.log("a is pressed")
    } 

    if(x==83){
        updatebodypart("ironman_legs.png")
        console.log("s is pressed")
    }

    if(x==78){
        updatebodypart("ironman_right_hand.png")
        console.log("n is presses")
    }

    if(x==80){
        updatebodypart("spiderman_body.png")
        console.log("p is pressed")
        
    }

    if(x==69){
        updatebodypart("spiderman_face.png")
        console.log("e is pressed")
    }

    if(x==71){
        updatebodypart("spiderman_left_hand.png")
        console.log("g is pressed")
    }

    if(x==52){
        updatebodypart("spiderman_legs.png")
        console.log("4 is pressed")
    }

    if(x==53){
        updatebodypart("spiderman_right_hand.png")
        console.log("5 is pressed")
    }


    if(x==37){
        left()
    }
    if(x==38){
        up()
    }
    if(x==39){
        right()
    }
    if(x==40){
        down()
    }
    if(e.shiftKey==true && x==80){
        partkwidth=partwidth+10
        partheight=partheight+10
       document.getElementById("width").innerHTML=partwidth;
       document.getElementById("height").innerHTML=partheight; 
    }
    if(e.shiftKey==true && x==77){
        partwidth=partwidth-10
        partheight=partheight-10
        document.getElementById("width").innerHTML=partwidth;
        document.getElementById("height").innerHTML=partheight;
    }
}

function right(){
    if(playerx<700){
        playerx=playerx+partwidth;
        canvas.remove(playerobject)
        updateplayer()
    }
}

function left(){
    if(playerx>0){
        playerx=playerx-partwidth;
        canvas.remove(playerobject)
        updateplayer()
    }
}

function down(){
    if(playery<500){
        playery=playery+partheight;
        canvas.remove(playerobject)
        updateplayer()
    }
}

function up(){
    if(playery>0){
        playery=playery-partheight;
        canvas.remove(playerobject)
        updateplayer()
    }
}
