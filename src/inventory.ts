import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory: InventoryItem[] = [
  {
    product: {
      name: "motor",
      price: 10.0,
    },
    quantity: 10,
  },
  {
    product: {
      name: "sensor",
      price: 12.5,
    },
    quantity: 4,
  },
  {
    product: {
      name: "LED",
      price: 1.0,
    },
    quantity: 20,
  },
];

export function calcInventoryValue(array: InventoryItem[]): number {
  if (inventory.length === 0) {
    return 0;
  }

  let total = 0;

  for (const item of inventory) {
    total += item.product.price * item.quantity;
  }

  return total;
}

const totalValue = calcInventoryValue(inventory);
console.log(totalValue);
