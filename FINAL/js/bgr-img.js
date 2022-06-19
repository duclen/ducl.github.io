const img = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.gif", "7.gif"];

const randomImage = img[Math.floor(Math.random()*img.length)];

const bgrImage = document.createElement("img");
bgrImage.src= `img/${randomImage}`;
console.log(bgrImage);

document.body.appendChild(bgrImage);