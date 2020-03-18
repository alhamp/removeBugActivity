function changeBugImage() {
    let image = document.getElementById('someImage');
    if (image.src.match("freeBug")) {
        image.src = "closedBug.png"
    } 

    else {
        image.src = "freeBug.png";
    }
}

