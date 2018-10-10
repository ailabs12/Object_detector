const { Darknet } = require('../darknet');
const nodeBase64Image = require("node-base64-image");

const darknet = new Darknet({
    weights: __dirname + '/yolov3.weights',
    config: __dirname + '/yolov3.cfg',
    namefile: __dirname + '/coco.names'
});

const urlImage = __dirname + '/peoples.jpg';

// Преобразование изображения в base64
nodeBase64Image.encode(urlImage, { string: true, local: true }, function (err, imageBase64) {
    if (err) {
        return console.error("err: ", err);
    }
    imageBase64 = imageBase64 || '';
    let result = darknet.detectBase64(imageBase64);
    console.log(result); 
});