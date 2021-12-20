let days = 0;
let hours = 0;
let minutes = 0;
let secunds = 0;
let millisecuds = 0;
let interval = null;

const setTime = (id, value = Date) => {
    document.querySelector(id).innerHTML = value;
}

btniniciar.addEventListener('click', () => {
    document.querySelector('#btniniciar').setAttribute("disabled", "disabled");
    document.querySelector('#btniniciar').classList.add("disabled")
    interval = setInterval(function () {
        const currentDate = new Date();
        const inpDate = document.querySelector('#date').value
        const selectedDate = new Date(inpDate)
        const cronDate = selectedDate.getTime() - currentDate.getTime()
    
        convertTime(cronDate)
    
        if(cronDate <= 0 || isNaN(cronDate)){
            clearInterval(interval)
            reset()
        }
        else{
            setTime("#days", days)
            setTime("#hours", hours)
            setTime("#minutes", minutes)
            setTime("#secunds", secunds)
        }
    }, 1000);
})

const convertTime = (millisecuds) => {
    let resto = 0
    resto = millisecuds;
    days = Math.floor(resto / 86400000)
    resto = resto % 86400000;
    hours = Math.floor(resto / 3600000)
    resto = resto % 3600000;
    minutes = Math.floor(resto / 60000)
    resto = resto % 60000;
    secunds = Math.floor(resto / 1000)
}


btnstop.addEventListener('click', function () {
    clearInterval(interval)
    reset()
})

const reset = ()=>{
    days = 0;
    hours = 0;
    minutes = 0;
    secunds = 0;
    millisecuds = 0;
    interval = null;
    setTime("#days", days)
    setTime("#hours", hours)
    setTime("#minutes", minutes)
    setTime("#secunds", secunds)
    document.querySelector('#btniniciar').removeAttribute("disabled");
    document.querySelector('#btniniciar').classList.remove("disabled")
    document.querySelector("#date").value = ""
}

btnreinciar.addEventListener('click', () => {
    clearInterval(interval)
    days = 0;
    hours = 0;
    minutes = 0;
    secunds = 0;
    millisecuds = 0;
    setTime("#days", days)
    setTime("#hours", hours)
    setTime("#minutes", minutes)
    setTime("#secunds", secunds)
    document.querySelector('#btniniciar').removeAttribute("disabled");
    document.querySelector('#btniniciar').classList.remove("disabled")
    
    
})
