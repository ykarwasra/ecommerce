import kids_tshirt from "../asset/kids_tshirt.jpg"
import kids_jeans from "../asset/kids_jeans.jpg"
import kids_dress from "../asset/kids_dress.jpg"
import kids_sneakers from "../asset/kids_sneakers.jpg"
import men_polo from "../asset/men_polo.jpg"
import men_chinos from "../asset/men_chinos.jpg"
import men_jacket from "../asset/men_jacket.jpg"
import men_sneakers from "../asset/men_sneakers.jpg"
import women_blouse from "../asset/women_blouse.jpg"
import women_skirt from "../asset/women_skirt.jpg"
import women_dress from "../asset/women_dress.jpg"
import women_heels from "../asset/women_heels.jpg"

const allProducts = [
    // Kids Category
    { id: 1, name: 'Kids T-shirt', category: 'kids', oldPrice: 19.99, newPrice: 14.99, image: kids_tshirt},
    { id: 2, name: 'Kids Jeans', category: 'kids', oldPrice: 29.99, newPrice: 24.99, image: kids_jeans},
    { id: 3, name: 'Kids Dress', category: 'kids', oldPrice: 39.99, newPrice: 34.99, image: kids_dress},
    { id: 4, name: 'Kids Sneakers', category: 'kids', oldPrice: 24.99, newPrice: 19.99, image: kids_sneakers},
  
    // Men Category
    { id: 5, name: 'Men Polo Shirt', category: 'men', oldPrice: 29.99, newPrice: 24.99, image: men_polo },
    { id: 6, name: 'Men Chinos', category: 'men', oldPrice: 39.99, newPrice: 34.99, image: men_chinos },
    { id: 7, name: 'Men Jacket', category: 'men', oldPrice: 59.99, newPrice: 49.99, image: men_jacket },
    { id: 8, name: 'Men Sneakers', category: 'men', oldPrice: 44.99, newPrice: 39.99, image: men_sneakers },
  
    // Women Category
    { id: 9, name: 'Women Blouse', category: 'women', oldPrice: 34.99, newPrice: 29.99, image: women_blouse},
    { id: 10, name: 'Women Skirt', category: 'women', oldPrice: 49.99, newPrice: 39.99, image: women_skirt },
    { id: 11, name: 'Women Dress', category: 'women', oldPrice: 69.99, newPrice: 59.99, image: women_dress },
    { id: 12, name: 'Women Heels', category: 'women', oldPrice: 54.99, newPrice: 49.99, image: women_heels }
  ];
  
  export default allProducts;