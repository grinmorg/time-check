import { PAGE_TIMELINES } from "./constants";
import { isPageValid } from "./validators";

export function normalizePageHash() {
  const page = window.location.hash.slice(1);

  if (isPageValid(page)) {
    return page;
  }

  window.location.hash = PAGE_TIMELINES;

  return PAGE_TIMELINES;
}

export function generateUniqueId() {
  const randomNumber = Math.floor(Math.random() * 90000000000) + 10000000000;

  return randomNumber;
}
