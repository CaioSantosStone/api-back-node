const { assert } = require('chai');
const ReturnLoremIpsum = require('../../Config/ExampleRoute/Actions/ReturnLoremIpsum')
const returnLoremIpsum = new ReturnLoremIpsum()

describe("ExempleRoute - Teste Unitario da funcionalidade.", () => {
    it("Buscando o loremIpsum e verificando se o mesmo é uma string", () => {
        let loremIpsum = returnLoremIpsum.returnLoremIpsum()
        assert.isString(loremIpsum)
    });

});