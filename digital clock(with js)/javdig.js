function clock(){
    var time = new Date();
    var hours = time.getHours();
    var minute = time.getMinutes();
    var secon = time.getSeconds();

    if(hours>12){
        document.getElementById('session').innerHTML = 'PM'
    }

    if(hours>12){
        hours -= 12;
    }

    document.getElementById('hrs').innerHTML = hours;
    document.getElementById('min').innerHTML = minute;
    document.getElementById('sec').innerHTML = secon;
}
setInterval(clock, 1000);