import { defineStore } from "pinia";
import { readItems } from "@directus/sdk";
import { client } from "../../utils/directusClient";
import { computed, ref } from "vue";
interface IFile {
  id: number;
  announcments_id: number;
  directus_files_id: string;
}
export interface IAnnouncement {
  id: number;
  status: string;
  date_created: string;
  date_updated: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  price: number;
  place: {
    id: number;
    sort: null;
    name: string;
  };
  files: IFile[];
}
/**
 * useAnnouncementStore - store for announcements
 * @returns {object} - object with methods and variables
 */
export const useAnnouncementStore = defineStore("announcements", () => {
  const announcements = ref<IAnnouncement[]>([]),
    announcementId = ref<number | null>(null),
    pageNumber = ref<number>(0);
  /**
   *function loadData - download data from the server
   @returns {Promise<void>}
   */
  async function loadData() {
    const response = await client.request(
      readItems("announcements", {
        fields: ["*.*"],
      })
    );
    announcements.value = response as unknown as IAnnouncement[];
    if (Array.from(announcements.value).length > 10) {
      pageNumber.value = Array.from(announcements.value).length / 10;
     
      pageNumber.value = Math.ceil(pageNumber.value);
    }
    console.log(pageNumber.value);
    console.log(announcements.value);
  }
  const data = computed(() => {
    let result = announcements.value;
    result = result.filter((item) => item.id === announcementId.value) || [];
    return result[0];
  });

  return { loadData, announcements, data, announcementId, pageNumber };
});
