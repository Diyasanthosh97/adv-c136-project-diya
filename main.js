status="";
object_detect="";
values="";
function setup(){
    canvas=createCanvas(480,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,480,480);
}
function start(){
    objectdetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:detecting objects";
    document.getElementById("obj").value;
    values=obj;
}
function modelLoaded(){
    console.log("Model is loaded");
    status=true;
    
}
