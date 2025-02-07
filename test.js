
// importar la función del archivo app.js
const { fromDollarToYen,  fromYenToPound, fromEuroToDollar } = require('./app.js');
// comienza tu primera prueba
test('should return 127.9 if the parameter is one dollar', () => {
    //dentro de la prueba llamamos a nuestra función 
    let total1 = fromDollarToYen(1);
    // esperamos que la conversion sea
    expect(total1).toBe(127.9);
});

test('should return 1.2 if the parameter is one Euro', () => {
    //dentro de la prueba llamamos a nuestra función 
    let total3 = fromEuroToDollar(1);
    // esperamos que la conversion sea
    expect(total3).toBe(1.2);
});

test('should return 0.0063 if the parameter is one Yen', () => {
    //dentro de la prueba llamamos a nuestra función 
    let total2 = fromYenToPound(1);
    // esperamos que la conversion sea
    expect(total2).toBe(0.0063);
});



