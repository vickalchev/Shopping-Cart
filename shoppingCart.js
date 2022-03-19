const shoppingCart = {
    //We don't want to manipulate this property of the object, so we will use a getter method to access the data. 
    _items: [
        {
            productName: 'Brussel Sprouts',
            price: 5,
            category: 'Produce' 
        },
        {
            productName: 'Onions',
            price: 1.49,
            category: 'Produce'
        },
        {
            productName: 'Midday Squares',
            price: 3.49,
            category: 'Packaged Snack'
        },
        {
            productName: 'La Croix',
            price: 5.99,
            category: 'Water'
        },
        {
            productName: 'Skyr',
            price: 4.99,
            category: 'Dairy'
        },
        
    ],
    get items () {
        return shoppingCart._items;
    },
    addToCart (productName, price, category) {
        let newItem = {
            productName: productName,
            price: price,
            category: category
        }
        this.items.push(newItem);
    },
    calcTotal () {
        let allPrices = [];

        for (let p in this.items)
            allPrices.push(this.items[p].price);
        
        return allPrices.reduce((a,b) => a+b);
    }

}; //closing brace of shoppingCart

shoppingCart.addToCart('Eggs', 7.99,'Poultry');
console.log(shoppingCart._items);
console.log(shoppingCart.calcTotal());