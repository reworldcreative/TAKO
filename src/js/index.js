import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { reviewsSlider } from "@/js/pages/home/reviews";
import { globalSettings } from "@/js/utils/global";
import { acknowledgmentsSlider } from "@/js/pages/home/acknowledgments";
import { mediaAboutUsSlider } from "@/js/pages/home/media-about-us";
import { copyBankDetails } from "@/js/pages/home/bank-details";

document.addEventListener('DOMContentLoaded', () => {
  globalSettings();
  header();
  howWorkSlider();
  reviewsSlider();
  acknowledgmentsSlider();
  mediaAboutUsSlider();
  copyBankDetails();
});