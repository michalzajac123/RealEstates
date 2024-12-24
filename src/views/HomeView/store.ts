import { defineStore } from "pinia";
import { createItem, readItems } from "@directus/sdk";
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
  price: number | null;
  place: {
    id: number;
    sort: null;
    name: string;
  };
  files: IFile[] | FileList[];
}
/**
 * useAnnouncementStore - store for announcements
 * @returns {object} - object with methods and variables
 */
export const useAnnouncementStore = defineStore("announcements", () => {
  const announcements = ref<IAnnouncement[]>([]),
    announcementId = ref<number | null>(null),
    pageNumber = ref<number>(0),
    addAnnouncemnt = ref<IAnnouncement>({
      id: 0,
      status: "",
      date_created: "",
      date_updated: "",
      title: "",
      description: "",
      email: "",
      phone: "",
      price: 5,
      place: {
        id: 1,
        sort: null,
        name: "Gnojnik",
      },
      files: [] as File[],
    });
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
  }
  const data = computed(() => {
    let result = announcements.value;
    result = result.filter((item) => item.id === announcementId.value) || [];
    return result[0];
  });

  const uploadFileToDirectus = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("http://localhost:5173/directus/files", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data.data.id;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addAnnouncemntToDirectus = async () => {
    try {
      const uploadedFiles = [];
      for (const file of addAnnouncemnt.value.files) {
        const fileBlob = await fetch(file).then((r) => r.blob());
        const image = new File([fileBlob], "Image.jpg", { type: "image/jpeg" });
        const uploadedFile = await uploadFileToDirectus(image);
        uploadedFiles.push(uploadedFile);
      }
      addAnnouncemnt.value.title = "test";
      await client.request(
        createItem("announcements", {
          price: addAnnouncemnt.value.price,
          title: addAnnouncemnt.value.title,
          description: addAnnouncemnt.value.description,
          email: addAnnouncemnt.value.email,
          phone: addAnnouncemnt.value.phone,
          files: uploadedFiles,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loadData,
    announcements,
    data,
    announcementId,
    pageNumber,
    addAnnouncemnt,
    addAnnouncemntToDirectus,
  };
});
