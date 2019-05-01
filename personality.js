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

}
}

  const form = document.querySelector('form');
  let btn = document.querySelector('button');
  let para = document.querySelector('p');

  //response.addEventListener('change', myColor);
  btn.addEventListener('click', myColor);

  function myColor() {
    let choice = form.color.value;
    let canvas = document.getElementById('canvas');
    if (!choice) {
      para.textContent = 'Please chose one of the answers above.';
    }

    if (choice === 'red') {
      para.textContent = 'You´re so red! Red people likes to get things done...yesterday! They´re go getters, and usually get things done as well. Poor you if you´re standing in their way. Many bosses are red.';
      // Adding a black circle to indicate color on canvas
      if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      ctx.beginPath();
      ctx.arc(75, 75, 23, 0, Math.PI * 2, true);
      ctx.fillStyle ='rgb(0, 0, 0)';
      ctx.fill();
    }

    } else if (choice === 'blue') {
      para.textContent = 'You´re so blue! Blue people are the logical nerds. Good luck bringing a blue person to a conseptual art exhibiton with mingling included!';
      // Adding a black circle to indicate color on canvas
      if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      ctx.beginPath();
      ctx.arc(225, 225, 23, 0, Math.PI * 2, true);
      ctx.fillStyle ='rgb(0, 0, 0)';
      ctx.fill();
    }
    }

    else if (choice === 'yellow') {
      para.textContent = 'You´re so yellow! Yellow people are cannot stop talking and loves to be the centre of attention. The creative drama queens among us.';
      // Adding a black circle to indicate color on canvas
      if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      ctx.beginPath();
      ctx.arc(225, 75, 23, 0, Math.PI * 2, true);
      ctx.fillStyle ='rgb(0, 0, 0)';
      ctx.fill();
    }
    }

    else if (choice === 'green') {
      para.textContent = 'You´re so green! The majority of the population are green. Green people are easy-going, group oriented and just wants everybody to be happy.';
      // Adding a black circle to indicate color on canvas
      if (canvas.getContext) {
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      ctx.beginPath();
      ctx.arc(75, 225, 23, 0, Math.PI * 2, true);
      ctx.fillStyle ='rgb(0, 0, 0)';
      ctx.fill();
    }
    }
}
