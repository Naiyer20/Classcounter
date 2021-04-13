// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyALWFDUJixzYMAq7hMVQDKZ6SaG42dwPo4",
    authDomain: "classcounter.firebaseapp.com",
    databaseURL: "https://classcounter-default-rtdb.firebaseio.com",
    projectId: "classcounter",
    storageBucket: "classcounter.appspot.com",
    messagingSenderId: "845077401888",
    appId: "1:845077401888:web:4d6a56a0c74692f0984745"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


// JavaScript source code
const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");


    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
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

    document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i == new Date().getDate() && date.getMonth() == new Date().getMonth() && date.getYear() == new Date().getYear()) {
            console.log(i);
            days += `<div class="today"><button class="d${i}/${date.getMonth()}/${date.getFullYear()}" onclick="clicked( ${i}_${date.getMonth()}_${date.getFullYear()} ) "> <p>${i}</p> </button></div>`;
        } else {
            //  days += `<div>${i}</div>`;
            days += `<div><button class="d${i}/${date.getMonth()}/${date.getFullYear()}" onclick="clicked( ${i},${date.getMonth()},${date.getFullYear()} ) "> <p>${i}</p> </button></div>`;



        }
    }

    for (let j = 1; j <= nextDays + 1; j++) {
        days += `<div class="next-date">${j}</div>`;

        monthDays.innerHTML = days;
    }
};


document.querySelector(".selectionhide").style.display="none";
var l
const daytoedi = document.querySelector(".daytoedit");

function clicked(d, m, y) {
    l = d + "" + m + "" + y + "";
    daytoedi.innerHTML = `<div id = "c">You are editing this date : ${d}/${m}/${y}</div>`;
    document.querySelector(".selectionhide").style.display="block";
}
const n = document.querySelector(".name");
n.innerHTML = `<div >You are currently logged in as : ${name}</div>`;









function savetext(x) {
    console.log(x)
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


var name = "";
//create
btn = document.getElementById("signin");
btnc = document.getElementById("btnc");
btnc.addEventListener("click", () => {
    
    input = document.getElementById("btnt").value;
    var b = 0;
    if (input != "") {
        var dbref = firebase.database().ref().child('Users/' + input);
        dbref.on('value', (snapshot) => {
           
            const data = snapshot.val();
            console.log(data)
            if (data != null&&b==0) {
                document.getElementById("alert").style.display = "block";
                p = document.getElementById("alertmessage");
                p.innerHTML = "This name already exist";

            } else {
                b=1;
                document.getElementById("sinin").style.display = "none";
                document.getElementById("container").style.display = "flex";
                console.log(input)
                name = input;
                
                firebase.database().ref('Users/' + input).set({
                    MissedClasses: "",
                    happpenClasses:"",
                    Price:""
                });
                
            }

        });

    } else {
        document.getElementById("alert").style.display = "block";
        p = document.getElementById("alertmessage");
        p.innerHTML = "There is no name in the box";

    }
});


//login
btn.addEventListener("click", () => {

    input = document.getElementById("value").value;
    var b = 0;
    if (input != "") {
        var dbref = firebase.database().ref().child('Users/' + input);
        dbref.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if (data != null) {
                document.getElementById("sinin").style.display = "none";
                document.getElementById("container").style.display = "flex";
                renderCalendar();
                console.log(input)
                name = input;

            } else {
                document.getElementById("alert").style.display = "block";
                p = document.getElementById("alertmessage");
                p.innerHTML = "You put the wrong username";

            }

        });

    } else {
        document.getElementById("alert").style.display = "block";
        p = document.getElementById("alertmessage");
        p.innerHTML = "You put no username, you can create one";

    }
});
//selectioner
const selecto = document.getElementById("mySelect");
let y = `<option value="none">none`;
users = [];
var dbref = firebase.database().ref().child('Users/');
dbref.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        users.push(childKey);


    }); for (i = 0; i < users.length; i++) {
        y += `<option value="${users[i]}">${users[i]}`
        selecto.innerHTML = y;

    }
});
function select() {
    var x = document.getElementById("mySelect").value;
    name = x
    document.getElementById("sinin").style.display = "none";
    document.getElementById("container").style.display = "flex";
    
}

