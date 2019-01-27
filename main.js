function draw() {
  let canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    // The 4 colored squares
    ctx.fillStyle = 'rgb(204, 51, 0)';
    ctx.fillRect(0, 0, 150, 150);
    ctx.fillStyle  = 'rgb(51, 153, 51)';
    ctx.fillRect(0, 150, 150, 150);
    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.fillRect(150, 0, 150, 150);
    ctx.fillStyle = 'rgb(51, 102, 204)';
    ctx.fillRect(150, 150, 150, 150);

    //The circle indicating your color personality
    ctx.beginPath();
    ctx.arc(150, 150, 23, 0, Math.PI * 2, true);
    ctx.fillStyle ='rgb(0, 0, 0)';
    ctx.fill();
  }
}
