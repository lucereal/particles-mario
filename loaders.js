export function loadImage(url, callback) {
    const image = new Image();
    image.addEventListener('load', function () {
        callback(image);
    })
    image.src = url;


}