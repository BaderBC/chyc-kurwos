const from = document.getElementById('from');
const time = document.getElementById('time');
const whereIsPornol = document.getElementById('whereIsPornol');

fetch("/history?limit=1")
    .then(res => res.json())
    .then(res => res[0])
    .then(res => {
        const date = new Date(res.date);
        console.log(res, date);

        whereIsPornol.innerText = res.whereIsPornol;

        from.innerText = "Od: " + date.toLocaleString("pl-PL", {hour12: false});
        setInterval(() => {
            time.innerText = "Czas: " + msToTime(Date.now() - date);
        }, 1000)
    });


function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
    let hrs = (s - mins) / 60;

    if(hrs.toString().length === 1) hrs = `0${hrs}`;
    if(mins.toString().length === 1) mins = `0${mins}`;
    if(secs.toString().length === 1) secs = `0${secs}`;

    return hrs + ':' + mins + ':' + secs;
}