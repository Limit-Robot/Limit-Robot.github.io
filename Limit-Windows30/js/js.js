var tot1 = 0;

var f = document.getElementById("TaskBack");
f.style = "display: none;";

function print1() {
    document.getElementById("font1").innerHTML = "Windows 30";
    var box = document.getElementById("font1");
    box.style.animationName = "font1";
    box.style.animationDuration = "1.2s";
}

// setTimeout(print1, 10);

function print2() {
    var boxb = document.getElementById("font1");
    boxb.style.animationName = "font2";
    boxb.style.animationDuration = "1.2s";
}

// setTimeout(print2, 10);

function zzh1() {
    var span = document.getElementsByTagName("span")[0];
    span.className = "zzb2";
}

// setTimeout(zzh1, 10);

function zzh2() {
    var a = document.getElementsByTagName("div")[1];
    a.style = "display: block;";
}

// setTimeout(zzh2, 10);

function zzh3() {
    var body = document.getElementsByTagName("body")[0];
    body.className = "zzb1";
    var img = document.getElementsByTagName("img")[0];
    img.className = "zzb2";
    var b = document.getElementsByTagName("div")[1];
    b.style = "display: none;";
    var c = document.getElementsByTagName("div")[2];
    c.style = "display: block;";
}

// setTimeout(zzh3, 10);


function win_login() {
    if (event.keyCode == '13') {
        if (document.getElementById('win-input').value == "zzh") {
            document.getElementById('win-input').value = '';
            var d = document.getElementsByTagName("div")[2];
            d.style.animationName = "win-login";
            d.style.animationDuration = "1.2s";
            setTimeout(win_login_2, 1200);
        } else {
            document.getElementById('win-input').value = '';
            document.getElementsById('win-input').style.animation = 'wrongpass 1.2s ease';
            setTimeout(() => {
                document.getElementsById('win-input').style.animation = '';
            }, 1200);
        }
    }
}

function win_login_2() {
    var e = document.getElementsByTagName("div")[2];
    e.style = "margin-top: -15em";
    var body = document.getElementsByTagName("body")[0];
    body.className = "zzb5";
    var g = document.getElementsByTagName("div")[4];
    g.style.animationName = "win-login";
    g.style.animationDuration = "1.2s";
    setTimeout(win_login_3, 0);
}

function win_login_3() {
    var f = document.getElementById("TaskBack");
    f.style = "display: block;";
    var desk = document.getElementById("desktop");
    desk.style = "display: block;";
}

function start() {
	setTimeout(print1, 1400);
	setTimeout(print2, 3600);
	setTimeout(zzh1, 4400);
	setTimeout(zzh2, 4800);
	setTimeout(zzh3, 10000)
}

function Start() {
	setTimeout(print1, 10);
	setTimeout(print2, 10);
	setTimeout(zzh1, 10);
	setTimeout(zzh2, 10);
	setTimeout(zzh3, 10);
	setTimeout(win_login, 10);
	setTimeout(win_login_2, 10);
	setTimeout(win_login_3, 10);
    // setTimeout(icon_blue_1, 10);
}

function icon_blue_1() {
    ++tot1;
    var b = document.getElementById("Icon-1");
    var dock = document.getElementsByTagName("div")[6];
    if (tot1 == 1) {
        b.style = "background-color: #ffffffc2;";
        dock.style.animationName = "dock-up";
        dock.style.animationDuration = "0.8s";
    }
    else if (tot1 >= 2) {
        b.style = "background-color: #ffffff00;";
        dock.style.animationName = "dock-down";
        dock.style.animationDuration = "0.8s";
    }
    setTimeout(dock_move, 780);
}

function dock_move() {
    var dock = document.getElementsByTagName("div")[6];
    if (tot1 == 1) {
        dock.style = "margin-top: -600px; opacity: 100%;";
    }
    else if (tot1 >= 2) {
        dock.style = "margin-top: 0px; opacity: 0%;";
        tot1 = 0;
    }
    
}

function dock_search() {
    if (event.keyCode == "13") {
        if (document.getElementById('win-search').value != '') {
            var app = document.getElementsByTagName("div")[9];
            var App = document.getElementsByTagName("div")[12];
            var str = document.getElementById('win-search').value;
            if (str == '设置') {
                app.style = "opacity: 0%";
                App.style = "opacity: 100%; transform: translate(-250px, -258px);";
                document.getElementsByTagName("div")[13].style = "opacity: 100%;";
                document.getElementsByTagName("div")[14].style = "opacity: 0%;";
                document.getElementsByTagName("div")[15].style = "opacity: 0%;";
            }
            else if (str == 'Microsoft Edge') {
                app.style = "opacity: 0%";
                App.style = "opacity: 100%; transform: translate(-250px, -258px);";
                document.getElementsByTagName("div")[13].style = "opacity: 0%;";
                document.getElementsByTagName("div")[14].style = "opacity: 100%; transform: translate(287px, -46px);";
                document.getElementsByTagName("div")[15].style = "opacity: 0%;";
            }
            else {
                app.style = "opacity: 0%";
                App.style = "opacity: 100%; transform: translate(-250px, -258px);";
                document.getElementsByTagName("div")[13].style = "opacity: 0%;";
                document.getElementsByTagName("div")[14].style = "opacity: 0%;";
                document.getElementsByTagName("div")[15].style = "opacity: 100%; transform: translate(0px, -70px);";
            }
        }
        else {
            document.getElementsByTagName("div")[9].style = "opacity: 100%;";
            document.getElementsByTagName("div")[12].style = "opacity: 0%; transform: translate(-220px, -80px);";
        }
    }
}

function edge() {
    document.getElementsByTagName("div")[19].style = "display: block";
}

function Edge() {
    document.getElementsByTagName("div")[19].style = "display: none";
}

// 调试 Start
//Start(); // 测试
start(); // 正式
// 调试 End
