import { header } from "@/js/components/header";
import { form } from "./pages/checkout/form";
import { products } from "./pages/checkout/products";

document.addEventListener('DOMContentLoaded', () => {
  header();
  form();
  products();
});