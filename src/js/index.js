import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { reviewsSlider } from "@/js/pages/home/reviews";

document.addEventListener('DOMContentLoaded', () => {
  header();
  howWorkSlider();
  reviewsSlider();
});