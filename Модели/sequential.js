const tf = require('@tensorflow/tfjs-node');

// Модель из двух слоев

const model = tf.sequential({
    layers: [
        tf.layers.dense({units: 1, inputShape: [3]}),
        tf.layers.dense({units: 5})
    ]
});

// Второй слой длжен автоматически определить выходную форму как [null, 5]
console.log(JSON.stringify(model.outputs[0].shape));

// Сделаем какое-нибдуь случайное предсказание
model.predict(tf.ones([2, 3])).print();

