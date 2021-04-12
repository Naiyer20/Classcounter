// JavaScript source code
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



var l
const daytoedi = document.querySelector(".daytoedit");
function clicked(d,m,y)
{
    l = d + "" + m + "" + y + "";
    daytoedi.innerHTML = `<div id = "c">You are editing this date : ${d}/${m}/${y}</div>` ;
  
}











document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

function dofirst() {
    var button = document.getElementById("ayo");
    button.addEventListener("click", save, false);
    display();
}

function save() {
    var key = "date editing";
    var tosave = l
    sessionStorage.setItem(key,tosave);

    console.log(key, tosave);
    console.log(sessionStorage.getItem(key));
    console.log(sessionStorage.length);
    console.log("save");

    display();

}

function display() {
    var areatooutput = document.getElementById("b");
    b.innerHTML = "";
    for (var x = 0; x < sessionStorage.length; x++) {
        var a = sessionStorage.key(x);
        var getsave = sessionStorage.getItem(a)
        b.innerHTML += "" + "" + getsave
        console.log(getsave)
    }

    console.log("display")
}
dofirst();





/*
function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
    } else {
        alert('FileReader are not supported in this browser.');
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader();
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
    // Read file into memory as UTF-8      
    reader.readAsText(fileToRead);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
    console.log(lines);
    drawOutput(lines);
}

//if your csv file contains the column names as the first line
function processDataAsObj(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];

    //first line of csv
    var keys = allTextLines.shift().split(',');

    while (allTextLines.length) {
        var arr = allTextLines.shift().split(',');
        var obj = {};
        for (var i = 0; i < keys.length; i++) {
            obj[keys[i]] = arr[i];
        }
        lines.push(obj);
    }
    console.log(lines);
    drawOutputAsObj(lines);
}

function errorHandler(evt) {
    if (evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

function drawOutput(lines) {
    //Clear previous data
    document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < lines[i].length; j++) {
            var firstNameCell = row.insertCell(-1);
            firstNameCell.appendChild(document.createTextNode(lines[i][j]));
        }
    }
    document.getElementById("output").appendChild(table);
}

//draw the table, if first line contains heading
function drawOutputAsObj(lines) {
    //Clear previous data
    document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");

    //for the table headings
    var tableHeader = table.insertRow(-1);
    Object.keys(lines[0]).forEach(function (key) {
        var el = document.createElement("TH");
        el.innerHTML = key;
        tableHeader.appendChild(el);
    });

    //the data
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        Object.keys(lines[0]).forEach(function (key) {
            var data = row.insertCell(-1);
            data.appendChild(document.createTextNode(lines[i][key]));
        });
    }
    document.getElementById("output").appendChild(table);
    
}
*/


