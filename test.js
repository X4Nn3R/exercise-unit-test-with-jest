test("One euro should be 1.07 dollars", function () {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Yen should be 156.5 Yens", function () {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(3.5);

    const expected = 3.5 * 156.5;


    expect(fromDollarToYen(3.5)).toBe(547.75); 
})

test("One Yen should be 0.87 Pounds", function () {
    // Importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js');

    const yens = fromYentoPound(3.5);

    const expected = 3.5 * 0.87;


    expect(fromYentoPound(3.5)).toBe(3.045); 
})