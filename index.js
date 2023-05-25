document.querySelector(".w").addEventListener("click",playCrash);

document.querySelector(".a").addEventListener("click",function (){
    var w = new Audio('./sounds/kick-bass.mp3');
    w.play();

    document.querySelector(".a").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".a").classList.remove("pressed");
    }, 100);
});

document.querySelector(".s").addEventListener("click",function(){
    var w = new Audio('./sounds/snare.mp3');
    w.play();

    document.querySelector(".s").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".s").classList.remove("pressed");
    }, 100);
});
document.querySelector(".d").addEventListener("click",function(){
    var w = new Audio('./sounds/tom-1.mp3');
    w.play();


    document.querySelector(".d").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".d").classList.remove("pressed");
    }, 100);
});
document.querySelector(".j").addEventListener("click",function(){
    var w = new Audio('./sounds/tom-2.mp3');
    w.play();


    document.querySelector(".j").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".j").classList.remove("pressed");
    }, 100);
});
document.querySelector(".k").addEventListener("click",function(){
    var w = new Audio('./sounds/tom-3.mp3');
    w.play();


    document.querySelector(".k").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".k").classList.remove("pressed");
    }, 100);
});
document.querySelector(".l").addEventListener("click",function(){
    var w = new Audio('./sounds/tom-4.mp3');
    w.play();


    document.querySelector(".l").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".l").classList.remove("pressed");
    }, 100);
});


function playCrash()
{
    var w = new Audio('./sounds/crash.mp3');
    w.play();

    document.querySelector(".w").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".w").classList.remove("pressed");
    }, 100);
}



document.addEventListener('keyup',function (event){
    
    if(event.key=='w')
    {
        var w = new Audio('./sounds/crash.mp3');
        w.play();

        document.querySelector(".w").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".w").classList.remove("pressed");
    }, 100);
    }
    else if(event.key=='a'){
        
            var w = new Audio('./sounds/kick-bass.mp3');
            w.play();


            document.querySelector(".a").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".a").classList.remove("pressed");
    }, 100);

    }
    else if(event.key=='s'){

            var w = new Audio('./sounds/snare.mp3');
            w.play();

            document.querySelector(".s").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".s").classList.remove("pressed");
    }, 100);

    }
    else if(event.key=='d'){
        

         var w = new Audio('./sounds/tom-1.mp3');
          w.play();
    

    document.querySelector(".d").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".d").classList.remove("pressed");
    }, 100);


 }
 else if(event.key=='j'){

        var w = new Audio('./sounds/tom-2.mp3');
        w.play();
        

        document.querySelector(".j").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".j").classList.remove("pressed");
    }, 100);


 }
 else if(event.key=='k'){

        var w = new Audio('./sounds/tom-3.mp3');
        w.play();
        

        document.querySelector(".k").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".k").classList.remove("pressed");
    }, 100);

 }

 else if(event.key=='l'){

        var l = new Audio('./sounds/tom-4.mp3');
        l.play();
        

        document.querySelector(".l").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".l").classList.remove("pressed");
    }, 100);

 }


function playCrash()
{
    var w = new Audio('./sounds/crash.mp3');
    w.play();
    document.querySelector(".w").style.color= "green";

    document.querySelector(".w").classList.add("pressed");

    setTimeout(function(){
        document.querySelector(".w").classList.remove("pressed");
    }, 100);
}

});

