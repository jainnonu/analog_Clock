setInterval( function() {

  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  ntime = d.getMilliseconds();

  hrotation = 30*htime + mtime/2 + stime/120;
  mrotation = 6*mtime + stime/10;
  srotation = 6*stime + (6/1000)*ntime;

  document.getElementById("hourContainer").style.transform = "rotate(" + hrotation + "deg)";
  document.getElementById("minContainer").style.transform = "rotate(" + mrotation + "deg)";
  document.getElementById("secContainer").style.transform = "rotate(" + srotation + "deg)";

  document.querySelector("p").innerHTML = htime + ":" + mtime + ":" + stime ;

}, 1);
