//
// Простой пример для предсказания линейной регресии - зависимости одной переменной от другой
//

const tf = require('@tensorflow/tfjs-node');

// Определить модель для линейной регрессии
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

// Подготовить модель к обучению: указать потери и оптимизатор
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

// Синтетические данные для обучения
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Обучение модели, используя данные
model.fit(xs, ys).then(() => {
    model.predict(tf.tensor2d([5], [1, 1])).print(); // Применить модель на данных, которых она раньше не видела
});
      