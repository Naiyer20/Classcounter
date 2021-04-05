// JavaScript source code
const date = new Date();

const renderCalendar = () => {date.setDate(1);

    const monthDays = document.querySelector(".days");
   

    const lastDay = new Date( date.getFullYear(),date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
   






    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today"><button class="d${i}/${date.getMonth()}/${date.getFullYear()}" onclick="clicked( ${i}_${date.getMonth()}_${date.getFullYear()} ) "> <p>${i}</p> </button></div>`;
        } else {
         //  days += `<div>${i}</div>`;
            days += `<div><button class="d${i}/${date.getMonth()}/${date.getFullYear()}" onclick="clicked( ${i},${date.getMonth()},${date.getFullYear()} ) "> <p>${i}</p> </button></div>`;

         

        }
    }

    for (let j = 1; j <= nextDays+1; j++) {
        days += `<div class="next-date">${j}</div>`;
       
        monthDays.innerHTML = days;
    }
};




const daytoedi = document.querySelector(".daytoedit");
function clicked(d,m,y)
{
    daytoedi.innerHTML = `<div>You are editing this date : ${d}/${m}/${y}</div>` ;
  
}










document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 100);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


