import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        Everything: resolve(__dirname, "Everything.html"),
        Grocerie: resolve(__dirname, "Grocerie.html"),
        Juice: resolve(__dirname, "Juice.html"),
        cart: resolve(__dirname, "cart.html"),
        contact: resolve(__dirname, "contact.html"),
        About: resolve(__dirname, "About.html"),
        CheckoutForm: resolve(__dirname, "CheckoutForm.html"),
        productView: resolve(__dirname, "productView.html"),
        orderPlaced: resolve(__dirname, "orderPlaced.html"),
      },
    },
  },
});
