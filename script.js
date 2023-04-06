function age() {
    var d1 = document.getElementById('day').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById("year").value;
    var button = document.getElementById('activation--button');
    var dm = document.querySelector(".warning1");
    var mm = document.querySelector(".warning2");
    var ym = document.querySelector('.warning3');

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var di = document.getElementById('day');
    var mi = document.getElementById('month');
    var yi = document.getElementById('year');
    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    
 // date validation//
    if(d1 === "") {
        di.style.borderColor = 'red';
        dm.innerHTML = "This field is required";
    } else if (d1 > month[m1 - 1] || d1 < 1) {
        di.style.borderColor = 'red';
        dm.innerHTML = "Must be a valid date";
    } else {
        di.style.borderColor = 'hsl(0, 0%, 86%)';
        dm.innerHTML = "";
    }
    if (d1 > 31) {
        di.style.borderColor = 'red';
        dm.innerHTML = "Must be a valid day";
    }
  //month validation//
    if (m1 === "") {
        mi.style.borderColor = 'red';
        mm.innerHTML = "This field is required";
    }else if (m1 > 12 || m1 < 1) {
        mi.style.borderColor = 'red';
        mm.innerHTML = "Must be a valid month";
    } else {
        mi.style.borderColor = 'hsl(0, 0%, 86%)';
        mm.innerHTML = "";
    }
    // year validation //
    if (y1 === '') {
        yi.style.borderColor = 'red';
        ym.innerHTML = "This field is required";
    }else if (y1 > y2) {
        yi.style.borderColor = 'red';
        ym.innerHTML = "Must be in the past";
    } else {
        yi.style.borderColor = 'hsl(0, 0%, 86%)';
        ym.innerHTML = "";
    }


 //input validatiion//
    if (di.style.borderColor === 'red' || mi.style.borderColor === 'red' || yi.style.borderColor === 'red') {
        document.querySelector('.days').innerHTML = "--";
        document.querySelector('.months').innerHTML = "--";
        document.querySelector('.years').innerHTML = "--";
        button.preventDefault();
    }
    

    var d = d2 - d1;
    document.querySelector('.days').innerHTML = d;
    
    var  m = m2 - m1;
    document.querySelector('.months').innerHTML = m;

    var y = y2 - y1;
    document.querySelector('.years').innerHTML = y;
}