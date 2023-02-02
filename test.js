// importar la función sum del archivo app.js
const { fromDollarToYen } = require('./app.js');

// comienza tu primera prueba
test('should return 127.9 if the parameter is one dollar', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromDollarToYen(1);
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(127.9);
});