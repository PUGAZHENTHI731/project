
function digital_clock() {
     // variable declaration
     let time = new Date();
     let day = time.getDay();
     let hrs = time.getHours();
     let min = time.getMinutes();
     let sec = time.getSeconds();
     let date = time.getDate();
     let month = time.getMonth();
     let year = time.getFullYear();
     // console.log(day, hrs, min, sec, date, month + 1);

     //day manipulation
     let day_fun = document.getElementsByClassName("day");
     day_fun[day==0?6:day-1].style.color = "#ffd22b";

     //time maniputation
     let hour_fun = document.getElementsByClassName("hour");
     let min_fun = document.getElementsByClassName("minutes");
     let sec_fun = document.getElementsByClassName("second");
     let AMPM_fun = document.getElementsByClassName("AMPM");
     // console.log(hour_fun);

     hour_fun[0].innerHTML = (hrs>=10)?(hrs>12)?hrs-12:hrs:'0'+hrs;
     min_fun[0].innerHTML = min<10?'0'+min:min;
     sec_fun[0].innerHTML = sec<10?'0'+sec:sec;
     AMPM_fun[0].innerHTML = hrs < 12 ? "AM" : "PM";
     // console.log(hour_fun.innerHTML, min_fun.innerHTML, sec_fun.innerHTML);


     // date manipulation
     let date_fun = document.getElementsByClassName("date-day");
     let month_fun = document.getElementsByClassName("month-day");
     let year_fun = document.getElementsByClassName("year-day");
     date_fun[0].innerHTML = date<10?'0'+date:date;
     month_fun[0].innerHTML = month<10?'0'+month:month;
     year_fun[0].innerHTML = year<10?'0'+year:year;

     // month manipulation
     let month_dis = document.getElementsByClassName("month");
     month_dis[month].style.color = "#ffd22b";
     // console.log(month_dis)
}
setInterval(digital_clock, 1000);


