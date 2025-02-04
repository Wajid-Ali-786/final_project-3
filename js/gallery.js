// Function to initialize event listeners and accessibility settings
function initializeGallery() {
    console.log("Gallery initialized!");

    // Select all images
    let images = document.querySelectorAll(".preview");

    // Loop through images and add event listeners
    images.forEach((img, index) => {
        img.setAttribute("tabindex", "0"); // Add tabindex dynamically
        console.log(`Tabindex added to image ${index + 1}`);

        img.addEventListener("mouseover", function() {
            upDate(this);
        });

        img.addEventListener("mouseleave", function() {
            unDo();
        });

        img.addEventListener("focus", function() {
            upDate(this);
        });

        img.addEventListener("blur", function() {
            unDo();
        });
    });
}

// Function to update the large display image
function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// Function to reset the display image and text
function unDo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
