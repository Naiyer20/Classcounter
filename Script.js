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
priced = ""
cmd = ""
chd = ""
pricedf = ""
pricedr = ""
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

            days += `<div class="today"><button id="${i}/${date.getMonth()}/${date.getFullYear()}" onclick="clicked( ${i},${date.getMonth()},${date.getFullYear()} ) "> <p>${i}</p> </button></div>`;
        } else {
            //  days += `<div>${i}</div>`;
            days += `<div><button id="${i}/${date.getMonth()}/${date.getFullYear()}" onclick="clicked( ${i},${date.getMonth()},${date.getFullYear()} ) "> <p>${i}</p> </button></div>`;



        }
    }

    for (let j = 1; j <= nextDays + 1; j++) {
        days += `<div class="next-date">${j}</div>`;

        monthDays.innerHTML = days;
    }
    //day editing  style
    if (l != "" && dl.m == date.getMonth() && dl.y == date.getFullYear()) {

        document.getElementById(l).style.background = "blue";
        document.getElementById(l).style.color = "orange";
    }
    //class happende style
    var cha = chd.split(',');
    cha.pop(0)
    cha = cha.filter(el => {
        return el != null && el != '';
    });

    if (cha.length != 0) {
        for (i = 0; i < cha.length; i++) {



            var la = cha[i].split('/');
            if (la[1] == date.getMonth() && la[2] == date.getFullYear()) {
                document.getElementById(cha[i]).style.background = "green";
                document.getElementById(cha[i]).style.color = "white";
            }

        }
    }

    //class missed style
    var cma = cmd.split(',');
    cma.pop(0)
    cma = cma.filter(el => {
        return el != null && el != '';
    });
    if (cma.length != 0) {
        for (i = 0; i < cma.length; i++) {
            var la = cma[i].split('/');
            if (la[1] == date.getMonth() && la[2] == date.getFullYear()) {

                document.getElementById(cma[i]).style.background = "red";
                document.getElementById(cma[i]).style.color = "black";
            }

        }
    }
   
    cho = document.getElementById("numberofhappenclasse");
    cmo = document.getElementById("numberofmissedclasse");
    priceo = document.getElementById("priceforall");
    var cha = chd.split(',');
    cha.pop(0);
    var cma = cmd.split(',');
    cma.pop(0);
    cha = cha.filter(el => {
        return el != null && el != '';
    });
    cma = cma.filter(el => {
        return el != null && el != '';
    });
    k = 0;
    p = 0;
    for (i = 0; i < cma.length; i++) {
        var la = cma[i].split('/');
        if (la[1] == date.getMonth() && la[2] == date.getFullYear()) {
            p++
        }

    }

    for (i = 0; i < cha.length; i++) {
        var la = cha[i].split('/');
        if (la[1] == date.getMonth() && la[2] == date.getFullYear()) {
            k++
        }

    }

    cho.innerHTML = `<div class="h"> ${k} classes</div>`
    cmo.innerHTML = `<div class="h"> ${p} classes</div>`
    priceo.innerHTML = `<div class="h"> ${pricedr * k + pricedf} rupees</div>`




   
};


document.querySelector(".selectionhide").style.display = "none";
var l = ""
var dl;
const daytoedi = document.querySelector(".daytoedit");

function clicked(d, m, y) {

    dl = { d, m, y }
    l = d + "/" + m + "/" + y + "";
    daytoedi.innerHTML = `<div id = "c">You are editing this date : ${l}</div>`;
    document.querySelector(".selectionhide").style.display = "block";
    renderCalendar();

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






//editting


btns = document.getElementById("btns");

btns.addEventListener("click", () => {




    ch = document.getElementById("ch").checked;
    cm = document.getElementById("cm").checked;
    if (ch) {

        if (!chd.includes("," + l + ",")) {
            if (!cmd.includes("," + l + ",")) {

                firebase.database().ref('Users/' + name + '/happpenClasses').set({
                    happpenClasses: chd + "," + l + ","
                });
            } else {
                document.getElementById("alert").style.display = "block";
                p = document.getElementById("alertmessage");
                p.innerHTML = "You first need to remove it form missed class";
            }
        } else {
            document.getElementById("alert").style.display = "block";
            p = document.getElementById("alertmessage");
            p.innerHTML = "You have already added this class here";

        }
    } else {
        if (!cmd.includes("," + l + ",")) {
            if (chd.includes("," + l + ",")) {

                chd = chd.replace("," + l + ",", "");
                firebase.database().ref('Users/' + name + '/happpenClasses').set({
                    happpenClasses: chd
                });

            }
        }
    }



    if (cm) {
        if (!cmd.includes("," + l + ",")) {
            if (!chd.includes("," + l + ",")) {

                firebase.database().ref('Users/' + name + '/MissedClasses').set({
                    MissedClasses: cmd + "," + l + ","
                });
            } else {
                document.getElementById("alert").style.display = "block";
                p = document.getElementById("alertmessage");
                p.innerHTML = "You first need to remove it form missed class";
            }
        } else {
            document.getElementById("alert").style.display = "block";
            p = document.getElementById("alertmessage");
            p.innerHTML = "You have already added this class here";

        }
    } else {
        if (!chd.includes("," + l + ",")) {
            if (cmd.includes("," + l + ",")) {

                cmd = cmd.replace("," + l + ",", "");
                firebase.database().ref('Users/' + name + '/MissedClasses').set({
                    MissedClasses: cmd
                });

            }
        }
    }


    priceiv = document.getElementById("price").value;
    if (priceiv != "" && priceiv != priced) {
        firebase.database().ref('Users/' + name + '/Price').set({
            Price: priceiv
        });
    }
    renderCalendar();
});

//checkingchecbox
function checkcheckbox1() {
    document.getElementById("cm").checked = false


}
function checkcheckbox2() {
    document.getElementById("ch").checked = false


}
btnb = document.getElementById("btnb");
document.getElementById("help").style.display = "none";
btnb.addEventListener("click", () => {
    window.location='https://rehan2000.github.io/Classcounter/';
  
});

btnhh = document.getElementById("btnhh");

btnhh.addEventListener("click", () => {
    document.getElementById("sinin").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("help").style.display = "inherit";
  
});
btnh = document.getElementById("btnh");

btnh.addEventListener("click", () => {
    document.getElementById("sinin").style.display = "none";
    document.getElementById("container").style.display = "none";
    document.getElementById("help").style.display = "inherit";

});


//create
btn = document.getElementById("signin");
var name = "";
btnc = document.getElementById("btnc");

btnc.addEventListener("click", () => {

    input = document.getElementById("btnt").value;
    var b = 0;
    if (input != "") {
        var dbref = firebase.database().ref().child('Users/' + input);
        dbref.on('value', (snapshot) => {

            const data = snapshot.val();
            if (data != null && b == 0) {
                document.getElementById("alert").style.display = "block";
                p = document.getElementById("alertmessage");
                p.innerHTML = "This name already exist";

            } else {
                b = 1;
                onlaunch();
                name = input;


                firebase.database().ref('Users/' + input).set({
                    MissedClasses: "",
                    happpenClasses: "",
                    Price: ""
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
    inputt = document.getElementById("value").value;

    var b = 0;
    if (inputt != "") {
        var dbref = firebase.database().ref().child('Users/' + inputt);
        dbref.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data != null) {
               
                name = inputt;
 onlaunch();


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
    onlaunch();


}
document.getElementById("help").style.display = "none";







function onlaunch() {
    priced = ""
    pricedf = ""
    pricedr = ""
    cmd = ""
    chd = ""
    document.getElementById("sinin").style.display = "none";
    document.getElementById("container").style.display = "flex";
    document.getElementById("help").style.display = "none";
    x=0;

    pricei = document.getElementById("price")
    
    var priceref = firebase.database().ref().child('Users/Farhan/Price/Price');
    priceref.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
            x=parseInt(x)+parseInt(data);
            pricedf = x;
        }

    });
    var priceref = firebase.database().ref().child('Users/Rehan/Price/Price');
    priceref.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
            x=parseInt(x)+parseInt(data);
            pricedr = x;
        }

    });
    
    
    var priceref = firebase.database().ref().child('Users/' + name + '/Price/Price');
    priceref.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
            x=parseInt(x)+parseInt(data);
            pricei.value = data;
            priced = x;
            renderCalendar();
        }

    });
    
    
    
    const n = document.querySelector(".name");
    n.innerHTML = `<div class ="jeff" >${name}</div>`;


    var chf = firebase.database().ref().child('Users/' + name + '/happpenClasses/happpenClasses');
    chf.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
            chd = data;
            renderCalendar();
        }

    });
    var chf = firebase.database().ref().child('Users/' + name + '/MissedClasses/MissedClasses');
    chf.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data != null) {
            cmd = data;
            renderCalendar();
        }


    });

    renderCalendar();

}


