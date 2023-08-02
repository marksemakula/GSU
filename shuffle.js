// Array of image file names
var images = ['1.jpeg', '2.jpeg', '3.jpeg'];

// Function to shuffle the images
function shuffleImages() {
    // Shuffle the array
    images.sort(() => Math.random() - 0.5);

    // Update the src attribute of each image within the pic divs
    var picDivs = document.getElementsByClassName('pic');
    for (var i = 0; i < picDivs.length; i++) {
        var img = picDivs[i].getElementsByTagName('img')[0];
        img.src = 'images/' + images[i];
    }
}

// Call the shuffleImages function to shuffle the images initially
shuffleImages();