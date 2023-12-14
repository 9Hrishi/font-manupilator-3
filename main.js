function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
    console.log('posenet is initialized');
}
function gotposes(results)
{
  if(results.length > 0)
  {console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    rightwristx=results[0].pose.rightWrist.x;
    leftwristx=results[0].pose.leftWrist.x;
    difference=floor(leftwristx-rightwristx);
  }
}
function draw()
{
    background('#969A97');
    fill('#F90093');
    textSize(difference);
    text('Hrishi',nosex,nosey);
}
