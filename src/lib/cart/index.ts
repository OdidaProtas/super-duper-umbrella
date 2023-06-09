import { writable } from "svelte/store";

export const basket = writable({
  1: {
    id: 1,
    title: "Beauty",
    media: [],
    quantity: 1,
    price: 200,
  },
});
