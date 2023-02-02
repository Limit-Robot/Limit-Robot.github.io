var tot = 0;

function print1() {
    document.getElementById("font1").innerHTML = "Windows 30";
    var box = document.getElementById("font1");
    box.style.animationName = "font1";
    box.style.animationDuration = "1.2s";
}
setTimeout(print1, 1200);

function zzh1() {
    var body = document.getElementsByTagName("body")[0];
    body.className = "zzb1";
    var img = document.getElementsByTagName("img")[0];
    img.className = "zzb2";
    var span = document.getElementsByTagName("span")[0];
    span.className = "zzb2";
    var a = document.getElementById("renwulan");
    a.style = "display: block;";
    /*
                    var b = document.getElementsByTagName("div")[2];
                    b.style = "margin-top: -1000px";*/
}
setTimeout(zzh1, 2600);

function zzh2() {
    ++tot;
    //document.getElementById('dock-k').style.display = 'block';
    //var c = document.getElementById("zzb4");
    //window.alert('Debug');
    if (tot == 1) document.getElementById('dock-k').style.display = 'block', document.getElementById('dock-k').style.marginTop = '-305px';
    else if (tot == 2) document.getElementById('dock-k').style.display = 'none', document.getElementById('dock-k').style.marginTop = '-1000px', tot = 0;
    //document.getElementById('dock-k').style = "display: block; margin-top: -305px; text-align: center; font-size: 15px; color: #000000; border-radius: 8px; margin: auto; background-color: #eeeeee; width: 10%; height: 250px;";

}