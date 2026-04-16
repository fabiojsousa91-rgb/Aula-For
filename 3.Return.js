/* 

Carcula desconto:
todos os produtos acima de R$ 30,00 tem 10% de desconto

*/

const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValueWithDiscount = 0
let finalValueWithoutDiscount = 0


    cart.forEach(value => {
        finalValueWithoutDiscount = finalValueWithoutDiscount + value
        return finalValueWithoutDiscount
    });

    /* 
        R$ 250,00 // 7% -> R$ 17,50
        R$ 250,00 * 7 -> 1750,00 / 100 -> R$ 17,50
    
    */

    function calculateDiscount(price, discount) {
        const result = price * discount / 100
        return result
    }

    cart.forEach(value => {
        if (value > 30) {
            const discount = calculateDiscount(value, 10)
            finalValueWithDiscount = finalValueWithDiscount + (value - discount)
        } else {
            finalValueWithDiscount = finalValueWithDiscount + value
        }
    });

    console.log(`O valor final da compra foi de R$ ${finalValueWithoutDiscount.toFixed(2)},
porém, você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)}, ou seja,
você economizou R$ ${(finalValueWithDiscount - finalValueWithoutDiscount).toFixed(2)}`)
