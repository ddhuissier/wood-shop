import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo',
        description: 'Product Description',
        image: '0aef81532c9c62c2a90c5ff1c2a13ef7.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Fuji',
        description: 'Product Description',
        image: '0c497be4f26586c41253d9fc9e9d42c3.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Kurai',
        description: 'Product Description',
        image: '6f26457aa3dc3f1badf44d7a1f1802c0.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3
      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Hanayakana',
        description: 'Product Description',
        image: '352c8a14861a45c91c49904edd1390bf2.jpg',
        price: 129,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5
      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Ankokudzura',
        description: 'Product Description',
        image: 'e43f291c90edb2a66f95047ff5eb0908.jpg',
        price: 150,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4
      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'Product Description',
        image: 'a0ef8452013e124f71f38471f0d141a8.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4
      }
    ];
  }
  constructor() { }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }
}
