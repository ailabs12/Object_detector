// Скачать файл в корень проекта перез запуском примера https://pjreddie.com/media/files/yolov3.weights
// Запуск [node examples/yolov3.js]

const { Darknet } = require('../darknet');
const nodeBase64Image = require("node-base64-image");

const darknet = new Darknet({
    weights: './yolov3.weights',
    config: './yolov3.cfg',
    namefile: './coco.names'
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

    /*
    Результат в виде массива объектов 
    Пример:
        [ 
            { 
                name: 'laptop', // Наименование класса
                prob: 0.9892822504043579, // Уверенность 0-1
                box: { // Стандартный вывод из yolo - указвает центр прямоуголника и его высоту ширину
                    x: 418.2134704589844,
                    y: 341.5401916503906,
                    w: 318.2478942871094,
                    h: 146.30218505859375 
                },
                rectangle: { // Модифицированный вывод для отрисовки на canvas в виде 2 точек: [левый верхний угол], [правый нижний угол].
                             // Необходимо определиться с тем которым будем пользоваться
                    x: 259.0895233154297,
                    y: 268.38909912109375,
                    x2: 577.3374176025391,
                    y2: 414.6912841796875 
                } 
            },
            { 
                name: 'person',
                prob: 0.9993502497673035,
                box: { 
                    x: 490.81689453125,
                    y: 194.27603149414062,
                    w: 266.047607421875,
                    h: 406.52069091796875 
                },
                rectangle:
                { 
                    x: 357.7930908203125,
                    y: -8.98431396484375,
                    x2: 623.8406982421875,
                    y2: 397.536376953125 
                } 
            } 
        ]
    */
});