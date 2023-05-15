import {
  BUTTON_TYPES,
  NAV_ITEMS,
} from "./constants";

export function isPageValid(page: string) {
  return Object.keys(NAV_ITEMS).includes(page);
}

export function isButtonTypeValid(type: string) {
  return BUTTON_TYPES.includes(type);
}