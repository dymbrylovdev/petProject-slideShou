window.onload = function () {
    document.getElementById("btn1").addEventListener("click", function () {
        start(1);
    })
    document.getElementById("btn2").addEventListener("click", function () {
        start(2);
    })
    document.getElementById("btn3").addEventListener("click", restart);
}


let a = 1;
let t = 2;
let d = 0;

function cycle() {
    if (a === 1) {
        let ph = "p" + d;
        if (d < 8) {
            if (t <= 0) {
                d++;
                t = 2;
                cycle();
            } else {
                document.getElementById(ph).style.opacity = t;
                t = t - 0.01;
                window.setTimeout(cycle, 10);
            }
        } else {
            document.getElementById("p0").style.opacity = 2;
            document.getElementById("p0").style.zIndex = 6;
            if (t <= 0) {
                document.getElementById("p0").style.zIndex = 15;
                for (let i = 0; i < 9; i++) {
                    document.getElementById(`p${i}`).style.opacity = 2;
                }
                let ph = "p0";
                d = 0;
                t = 2;
                cycle();
            } else {
                document.getElementById(ph).style.opacity = t;
                t = t - 0.01;
                window.setTimeout(cycle, 10);
            }
        }
    }
}

let b = 1;
let i = 1;
let k = 0;
let s = 0;

let k1 = 0
let zi = 7

function drive(j) {
    if (j === 1) {

    } else {
        let ph = "p" + s
        if (b === 1) {
            if (s < 9) {
                if (i === 1) {
                    zi = 7
                    i = 0
                    window.setTimeout(drive, 20)
                }else {
                    if (k < 1000) {
                        document.getElementById(ph).style.left = `${k}px`
                        k += 10
                        window.setTimeout(drive, 20)
                    } else {
                        k = 0
                        document.getElementById(ph).style.zIndex = zi
                        document.getElementById(ph).style.left = 0 + "px"
                        zi -= 1
                        s++
                        window.setTimeout(drive, 20)
                    }
                }
            } else {
                stop()
                window.setTimeout(drive, 20)
            }

        }
    }
}

function restart() {
    window.location.reload()
}

function stop() {
    a = 0;
    b = 0;
    zi = 15
    for (let i = 0; i < 9; i++) {
        document.getElementById(`p${i}`).style.zIndex = zi - i
        document.getElementById(`p${i}`).style.opacity = 2;
        document.getElementById(`p${i}`).style.left = 0;
    }
    b = 1;
    i = 1;
    k = 0;
    s = 0;
    d = 0;
    t = 2;
}


function start(g) {
    if (g === 1) {
        a = 1;
        cycle();
    }
    if (g === 2) {
        b = 1;
        drive();
    }
}
