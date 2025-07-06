import { header } from "@/js/components/header";
import { globalSettings } from "@/js/utils/global";
import { copyBankDetails } from "@/js/pages/home/bank-details";

document.addEventListener('DOMContentLoaded', () => {
  globalSettings();
  header();
  copyBankDetails();
});