const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdown = document.getElementById("countdown");
const loading = document.getElementById("loading");

window.addEventListener("load", ()=>{
    loading.style.display = "block"
    //to make it invisible in 1 second //useage of setTimeout
    setTimeout(() =>{
        loading.style.display = "none"
        countdown.style.display = "flex"  //to make visible the "00"s

    }, 1000)

    //this is long way. Down I will make the shortest way
/*     years.innerHTML = "00"
    months.innerHTML = "00"
    days.innerHTML = "00"
    hours.innerHTML = "00"
    minutes.innerHTML = "00" */
    //to turn h2 elements
    let H2Elements = countdown.getElementsByTagName("h2");
    console.log(H2Elements);
    //this is the shortest way

    for (let index = 0; index < H2Elements.length; index++) {
        H2Elements[index].innerHTML = "00";  
    }

    let H2Elements2 = countdown.getElementsByTagName("h2");
    console.log("H2Elements2 -->", H2Elements2);

})

let selectedBirthday  ;//tarih varsa initialize yapmak mantikli olur
let birthdayInput = document.querySelector("input[name=birthday]")
birthdayInput.addEventListener("change", (event) =>{
    //convert to date from datestring
    console.log(event.target.value);
    //event.target.value == birthdayInput.value

    console.log("dateobject", selectedBirthday);
    //convert to date from datestring
    selectedBirthday = new Date(event.target.value); //new Date()'e string formatli tarih verilebilir
    if (selectedBirthday > new Date()){     //parametre vermezsen bugunu ifade eder
        alert("Dogum tarihiniz bugunden buyuk olamaz!!");
        return ;
    }
    document.body.style.backgroundImage = "url(https://wallpaperaccess.com/full/1499033.jpg)";


    //fonksiyonu her saniye calistirmak icin
    loading.style.display = "block"
    setInterval(updateCountdown, 1000);
    setTimeout(() => {
        loading.style.display = "none";
    }, 1000)
})

const updateCountdown = () =>{
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHours = selectedBirthday.getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();

    let now = new Date() ;
    let currentYear = selectedBirthday.getFullYear();
    let currentMonth = selectedBirthday.getMonth();
    let currentDay = selectedBirthday.getDate();
    let currentHours = selectedBirthday.getHours();
    let currentMinutes = selectedBirthday.getMinutes();
    let currentSeconds = selectedBirthday.getSeconds();

    //if positive  --> No problem
    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let hourOfAge = currentHours - dobHours;
    let minuteOfAge = currentMinutes - dobMinutes;
    let seondOfAge = currentSeconds  - dobSeconds;

    if (dayOfAge < 0) { 
        monthOfAge += 12 ;
        yearOfAge -- ;
    }

    if (dayOfAge < 0) { 
        dayOfAge += 30 ;
        monthOfAge -- ;
    }

    if (monthOfAge < 0) {
        monthOfAge += 12;
        yearOfAge--;
    }


    //add values to DOM
    years.innerHTML = yearOfAge.toString().padStart(2, "0");  //padStart = her bir rakam 2 digitten olusuyor. Eger 1 digitten olusuyorsa sagina "0 verir"
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = hourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minuteOfAge.toString().padStart(2, "0");
    seconds.innerHTML = seondOfAge.toString().padStart(2, "0");

}








