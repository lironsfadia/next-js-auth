import { create } from 'zustand';

export const appState = create<{ cartTotal: number; price: number }>((set) => ({
  price: 0,
  cartTotal: 0,
}));
