import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { globalSettings } from "@/js/utils/global";
import { copyBankDetails } from "@/js/pages/home/bank-details";
import { otherCategoriesSlider } from "./pages/category/other-categories";

document.addEventListener('DOMContentLoaded', () => {
  globalSettings();
  header();
  howWorkSlider();
  otherCategoriesSlider();
  copyBankDetails();
});