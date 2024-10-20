const text = document.getElementById('bouncingText');

let xSpeed = 2;
let ySpeed = 2;
let posX = 0;
let posY = 0;
let container = document.querySelector('.container');

function moveText() {
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    let textWidth = text.offsetWidth;
    let textHeight = text.offsetHeight;

    posX += xSpeed;
    posY += ySpeed;

    // Check for collision with walls and reverse direction if needed
    if (posX + textWidth >= containerWidth || posX <= 0) {
        xSpeed *= -1;
    }

    if (posY + textHeight >= containerHeight || posY <= 0) {
        ySpeed *= -1;
    }

    text.style.transform = `translate(${posX}px, ${posY}px)`;

    requestAnimationFrame(moveText);
}

moveText();
