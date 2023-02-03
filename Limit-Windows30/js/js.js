var tot1 = 0;

var f = document.getElementById("TaskBack");
f.style = "display: none;";

function print1() {
    document.getElementById("font1").innerHTML = "Windows 30";
    var box = document.getElementById("font1");
    box.style.animationName = "font1";
    box.style.animationDuration = "1.2s";
}
setTimeout(print1, 1400);
// setTimeout(print1, 10);

function print2() {
    var boxb = document.getElementById("font1");
    boxb.style.animationName = "font2";
    boxb.style.animationDuration = "1.2s";
}
setTimeout(print2, 3600);
// setTimeout(print2, 10);

function zzh1() {
    var span = document.getElementsByTagName("span")[0];
    span.className = "zzb2";
}
setTimeout(zzh1, 4400);
// setTimeout(zzh1, 10);

function zzh2() {
    var a = document.getElementsByTagName("div")[1];
    a.style = "display: block;";
}
setTimeout(zzh2, 4800);
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
setTimeout(zzh3, 10000);
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
    f.style = "display: block;"
}

function icon_blue_1() {
    ++tot1;
    var a = document.getElementById("icon-blue-1");
    var b = document.getElementById("Icon-1");
    var c = document.getElementsByTagName("img")[2];
    var d = document.getElementById("menu-1");
    c.style.animationName = "Icon2";
    c.style.animationDuration = ".5s";
    if (tot1 == 1) {
        a.style = "display: block;";
        b.style = "background-color: #ffffffc2;";
        d.style = "display: block;";
    }
    if (tot1 == 2) {
        a.style = "display: none;";
        b.style = "background-color: #ffffff00;";
        d.style = "display: none;";
        tot1 = 0;
    }
}