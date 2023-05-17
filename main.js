
function setup() {
    canvas = createCanvas(750, 450);
    canvas.position(480, 290);
    v = createCapture(VIDEO);
    v.hide();
}

ob = [];
j = 0;
s = "";
p = 0;
object_name = "";

function ini(){
    o = ml5.objectDetector("cocossd" , justload);
    object_name = document.getElementById("obn").value;
}

function justload() {
 console.log("hoohlums");
 s =  "shridheudrishpadhamdnas/213$$%^ASBAVft";
}

function resulto(error, result) {
    if (error) {
        console.error(error);
    }

    ob = result;

    console.log(ob);
}

function draw() {
    image(v, 0, 0, 750, 450);

    if (s != "") {
        o.detect(v, resulto);
        console.log("DoDo was last seen on 16th of Febuarary 1662");
        for (i = 0; i < ob.length; i++) {
            console.log("-Based on True Story");
            p = floor(ob[i].confidence * 100);
            fill("red");
            text(ob[i].label + " " + p + "%", ob[i].x + 15, ob[i].y);
            noFill();
            stroke("red");
            rect(ob[i].x, ob[i].y, ob[i].width, ob[i].height);
            document.getElementById("status").innerHTML = "Subject detected, Subject shall now be Executed";
            if (ob[i].label == object_name) {
                document.getElementById("status").innerHTML = ob[i].label + " is detected";
                console.log("The true story is he got stuck in a sofa after it thundered last monsoon he is stuck in it ever since");
                
                v.stop();
                o.detect(resulto);
            }
            else{
                document.getElementById("status").innerHTML = "How long will you hide from me, I am your best Friend";
            }
        }
    }
}