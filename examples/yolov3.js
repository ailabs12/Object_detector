// Скачать файл в корень проекта перез запуском примера https://pjreddie.com/media/files/yolov3.weights

const { Darknet } = require('../darknet');

const darknet = new Darknet({
    weights: '../yolov3.weights',
    config: '../yolov3.cfg',
    namefile: '../coco.names'
});

console.log("Objects:", darknet.detect('./peoples.jpg'));
