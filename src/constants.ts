import { ArchiveBoxIcon, ClockIcon } from "@heroicons/vue/24/outline";

export const BUTTON_TYPE_PRIMARY = "primary";
export const BUTTON_TYPE_NEUTRAL = "neutral";
export const BUTTON_TYPE_DANGER = "danger";

export const BUTTON_TYPES = [
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
];

export const PAGE_TIMELINES = "timelines";
export const PAGE_ARCHIVE = "archive";

export const HOURS_IN_DAY = 24;
export const MIDNIGHT_HOUR = 0;

export const NAV_ITEMS = {
  [PAGE_TIMELINES]: ClockIcon,
  [PAGE_ARCHIVE]: ArchiveBoxIcon,
};

export const PERIOD_SELECT_OPTIONS = [
  {
    value: 15,
    label: "0:15",
  },
  {
    value: 30,
    label: "0:30",
  },
  {
    value: 45,
    label: "0:45",
  },
];
