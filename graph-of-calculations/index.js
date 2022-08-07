const tf = require('@tensorflow/tfjs-node');

//
// Создает новую переменную с заданным начальным значением.
// @link: https://js.tensorflow.org/api/latest/#variable
//

const x = tf.variable(tf.tensor([2, 0])); // две переменные x и y со значениями 2 и -4
const y = tf.variable(tf.tensor([-4, 0]));

x.print(); // просто выведу их в консоль
y.print();

// f = (x + y) ** 2 + 2 * x * y
const f = (x, y) => (x.add(y)).square().add(x.mul(y).mul(2));

// Градиент функции
const g = tf.grads(f);

// Вызываем с аргументами, по которым будет производиться вычисление производных
const [res] = g([x, y]);

//  [-12, 0]
res.print();