

var btn = document.querySelector('#cal');



btn.addEventListener("click", function () {

    var dob = document.querySelector("#dob").value;

    var current_date = document.querySelector("#cur-date").value;

    if (dob == '') {
        alert("Please select the Date of Birth!");
    }
    else if(current_date == '')
    {
        alert("Please select the Today's Date!");
    }
    else {

        var dob_year = parseInt(dob.substring(0, 4));
        var dob_month = parseInt(dob.substring(5, 7));
        var dob_day = parseInt(dob.substring(8,));



        var current_year = parseInt(current_date.substring(0, 4));
        var current_month = parseInt(current_date.substring(5, 7));
        var current_day = parseInt(current_date.substring(8,));

        var next_dob_year = parseInt(current_date.substring(0, 4)) + 1;
        var next_dob_month = parseInt(dob.substring(5, 7));
        var next_dob_day = parseInt(dob.substring(8,));

        var next_year = parseInt(current_date.substring(0, 4));
        var next_month = parseInt(current_date.substring(5, 7));
        var next_day = parseInt(current_date.substring(8,));

        let week = new Date(next_dob_year + "-" + next_dob_month + "-" + next_dob_day);

        const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if (current_day < dob_day) {
            current_month--;
            current_day += month[dob_month - 1];
        }
        if (current_month < dob_month) {
            current_year--;
            current_month += 12;
        }

        if (next_day > next_dob_day) {
            next_dob_month--;
            next_dob_day += month[next_month - 1];
        }
        if (next_month > next_dob_month) {
            next_dob_year--;
            next_dob_month += 12;
        }

        var bnext_year = next_dob_year - next_year;
        var bmonths = next_dob_month - next_month;
        if (bnext_year == 1) {
            bmonths = 12;
        }
        document.querySelector(".bmonths").innerHTML = (bmonths);
        document.querySelector(".bdays").innerHTML = (next_dob_day - next_day);


        document.querySelector(".daysss").innerHTML = weekday[week.getDay()];

        document.querySelector("#years").innerHTML = (current_year - dob_year);
        document.querySelector(".months").innerHTML = (current_month - dob_month);
        document.querySelector(".days").innerHTML = (current_day - dob_day);

        var date1 = new Date(dob);
        var date2 = new Date(current_date);
        var timediff = date2 - date1;

        console.log(timediff);

        var second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, weeks = day * 7;

        document.querySelector(".Syears").innerHTML = (date2.getFullYear() - date1.getFullYear());
        document.querySelector(".Smonths").innerHTML = (date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth());
        document.querySelector(".Sweeks").innerHTML = Math.floor(timediff / weeks);
        document.querySelector(".Sdays").innerHTML = Math.floor(timediff / day);
        document.querySelector(".Shours").innerHTML = Math.floor(timediff / hour);
        document.querySelector(".Smin").innerHTML = Math.floor(timediff / minute);
    }

});



