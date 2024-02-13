# Description

The project consists of two pages (Shop and Cart) with various features such as product listing,
pagination, responsive design, "Add to Cart" functionality.
The components are structured according to the Atomic Design methodology.

## libraries used

- chakra ui for styling which was important for grid and FlexBox and responsive design

## main components

- atoms
  - button
  - image
  - text

- molecules
  - pagination
  - product

- organisms
  - cart product card
  - product card
  
- pages
  - listing all products
  - show cart

## features

- saving cart data using local storage
- get products using fetch api
- checking the product quantity in the cart when clicking add to cart in the product card
- increase / decrease product quantity in the cart
- paginate all the products in the home page

## server components vs client components

### client components

- cart page
- pagination molecule
- product card organism

### server components

- button atom
- image atom
- text atom
- product molecule
- cart product card organism
- product page

## notes

- i have used server components in the listing page to be able to fetch the data from the API endpoint in the server side so i can have a good SEO
- used client side components to able to use client side features like local storage
