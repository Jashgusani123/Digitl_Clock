let first = document.getElementById("hour");
let second = document.getElementById("minutes");
let thrd = document.getElementById("seconds");
let amOrpm = document.getElementById("ampm");

function time(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h=h-12;
        ampm = "PM";
    }

    h=h < 10 ? "0"+h : h;
    m=m < 10 ? "0"+m : m;
    s=s < 10 ? "0"+s : s;

    first.innerText = h ;
    second.innerText = m ;
    thrd.innerText = s ;
    amOrpm.innerText = ampm;

    setTimeout(()=>{
        time()
    },1000);
}
time();