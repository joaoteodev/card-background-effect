const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.onmousemove = e => {
    const x = e.offsetX;
    const y = e.offsetY;

    card.style = `--x: ${x + "px"}; --y: ${y + "px"};`;
  };
});
