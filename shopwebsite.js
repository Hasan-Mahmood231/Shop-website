// Array of image URLs
const images = ["screen pic.png", "https://m.media-amazon.com/images/I/71aBPZq5BJL._AC_SX569_.jpg" , "https://m.media-amazon.com/images/I/81QU2X+ef0S._AC_SX569_.jpg"  , "https://m.media-amazon.com/images/I/91HuntPlNGL._AC_SX569_.jpg" , "https://m.media-amazon.com/images/I/71m4gf9YMZL._AC_SX569_.jpg"];
let currentIndex = 0;

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("imag").src = images[currentIndex];
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 3000);
