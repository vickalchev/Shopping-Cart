# Shopping Cart

## Objective

To practice objects and manipulating data in objects.

## Assignment

- Create a shopping cart as an object;
- The shopping cart will hold items in an array;
- Each item will be an object with specific properties:
  - name;
  - price;
- Create a getter to retrieve items from the cart;
- Create a function within shoppingCart that will return an object and add it to \_items;
- Call that function with specific arguments;
- Create a function within the object that calculates the total in the cart;
- Call that function outside of the object

## Key Lesson

- Even though the loop cycles through an array of objects, we are looking to pull the price (an object property). To do this, we need to loop through each object's property and use `for...in` instead of `for...of` loop.
