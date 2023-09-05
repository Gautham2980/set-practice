// let int=setInterval(Start(),2000)
let interval;
function Start(){
    //  interval= setInterval(Start,1000)
    
        res=setInterval(function(){
            let a=new Date();
    // console.log(a);
    let b=a.getTime()
    let d=a.toLocaleTimeString()
    document.getElementById("time").innerHTML=d
    // console.log(a);
        },1000)
}

function stop(){
    clearInterval(res)
}

function delay(){
//     let del=setTimeout(delay,5000)
//     alert("hai i'm delay")
//     clearTimeout(del);

    del=setTimeout(function(){
        alert("hai i'm delay")
    },3000)

 }

function delays(){
    // let dele=setTimeout(delay,5000)
    alert("delay stopped")
    clearTimeout(del);
}