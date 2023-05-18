import { defineStore } from "pinia";
import { ITimelinesItem } from "../@types/interfaces";

export const useTimelinesStore = defineStore("timelines", {
  state: () => ({
    items: [] as ITimelinesItem[],
    lastUpdateTimelineItemId: 0,
  }),

  getters: {
    getLastUpdateTimelineItem(): ITimelinesItem | undefined {
      const existingItem = this.items.find(
        (item) => item.id === this.lastUpdateTimelineItemId
      );

      if (existingItem) {
        return existingItem;
      }
    },
  },

  actions: {
    addItem(timeline: ITimelinesItem) {
      const existingItem = this.items.find((item) => item.id === timeline.id);
      if (!existingItem) {
        // Item doesn't exist - add it
        this.items.push(timeline);

        this.saveItems();
      }
    },
    removeItem(id: number) {
      this.items = this.items.filter((item) => {
        return item.id !== id;
      });

      this.saveItems();
    },

    updateItemFields(updatedItem: ITimelinesItem) {
      const existingItemIndex = this.items.findIndex(
        (item) => item.id === updatedItem.id
      );

      if (existingItemIndex !== -1) {
        const existingItem = this.items[existingItemIndex];
        this.items[existingItemIndex] = { ...existingItem, ...updatedItem };

        this.lastUpdateTimelineItemId = updatedItem.id;

        this.saveItems();
      }
    },

    // LocalStorage
    loadItems() {
      const savedItems = localStorage.getItem("timelines");
      if (savedItems) {
        this.items = JSON.parse(savedItems);
      }
    },
    saveItems() {
      localStorage.setItem("timelines", JSON.stringify(this.items));
    },
  },
});
