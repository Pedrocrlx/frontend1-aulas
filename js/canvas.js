const gameCanvas = document.getElementById("canvas");
const gameCtx = gameCanvas.getContext("2d");

// Reset canvas
gameCtx.fillStyle = "black";
gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

// Player square properties
const player = {
  x: gameCanvas.width / 2 - 25,
  y: gameCanvas.height / 2 - 25,
  width: 50,
  height: 50,
  color: "red",
  speed: 5,
};

// Track which keys are currently pressed
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

// Event listeners for key presses
window.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.key)) {
    keys[e.key] = false;
  }
});

// New animation function for player movement
function gameLoop() {
  // Clear the canvas
  gameCtx.fillStyle = "black";
  gameCtx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);

  // Update player position based on key presses
  if (keys.ArrowUp) {
    player.y = Math.max(0, player.y - player.speed);
  }
  if (keys.ArrowDown) {
    player.y = Math.min(
      gameCanvas.height - player.height,
      player.y + player.speed
    );
  }
  if (keys.ArrowLeft) {
    player.x = Math.max(0, player.x - player.speed);
  }
  if (keys.ArrowRight) {
    player.x = Math.min(
      gameCanvas.width - player.width,
      player.x + player.speed
    );
  }

  // Draw the player
  gameCtx.fillStyle = player.color;
  gameCtx.fillRect(player.x, player.y, player.width, player.height);

  // Continue the animation
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();