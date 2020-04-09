lasers = [];
laserVel = [];

function keyPressed() {
    if (keyCode === 32) {      
        lasers.push(createVector(p.x, p.y));
        laserRay=p5.Vector.fromAngle(radians(heading)).mult(15);
        laserVel.push(laserRay);
   
        laserSound.play();
    }
}

function updateLasers() {
    for (var i = 0; i < lasers.length; i++) {

       
        for (var z = 0; z < bb.length; z++) {
            if (dist(lasers[i].x, lasers[i].y, bb[z].x, bb[z].y) < bubSize / 2) {
                bb[z] = createVector(random(0, width), random(0, height));
                bubVel[z] = p5.Vector.random2D().mult(random(0.25, 2.25));
                background(254,12,134);
                Score++;

            }  
        }
        lasers[i].add(laserVel[i]);
       
        push();
        stroke("blue");
        point(lasers[i].x,lasers[i].y);
        line(lasers[i].x, lasers[i].y, lasers[i].x + laserVel[i].x * 4, lasers[i].y + laserVel[i].y * 4)
        pop();
    }
}
