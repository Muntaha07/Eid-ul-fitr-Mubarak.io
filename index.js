const hourE1 = document.getElementById ("hour")
const minuteE1 =document.getElementById("minutes")
const secoundE1 =document.getElementById("seconds")
const  ampmE1 =document.getElementById("ampm")

function updateClock() {
    let h = new Date ().getHours()
    let m = new Date ().getMinutes()
    let s = new Date ().getSeconds()
    let ampm ="PM"

    if (h>12) {
        h =h-12
        ampm="AM"
    }
    h = h<10? "0" + h :h;
    m = m<10? "0" + m :m;
    s = s<10? "0" + s :s;

    hourE1.innerText =h;
    minuteE1.innerText=m;
    secoundE1.innerText=s;
    ampm,(innerText =ampm);
    setTimeout(()=>{
        updateClock()
    },1000)
}
updateClock()