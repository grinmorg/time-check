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
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substr(2, 5);
  return `${timestamp}-${randomString}`;
}
