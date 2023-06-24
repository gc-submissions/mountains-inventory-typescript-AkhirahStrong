export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Sony WH-1000XM4", price: 349 },
  { name: "Bose QuietComfort 35 II", price: 299 },
  { name: "Sennheiser HD 660 S", price: 499 },
  { name: "Apple AirPods Pro", price: 249 },
  { name: "JBL Tune 750BTNC", price: 129 },
];

export function calcAverageProductPrice(array: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }

  const average = sum / products.length;
  return average;
}

const averagePrice = calcAverageProductPrice(products);
console.log(averagePrice);
