
var Cart = new Object();

Cart.goods = [{name: 'tovar1', price: 75}, {name: 'tovar2', price: 25}];

Cart.countBasketPrice = function(){
    let result = 0;
    for(var i = 0; i < this.goods.length; i++){
        result += this.goods[i].price;
    }
    return result;
}

console.log(Cart.countBasketPrice());
