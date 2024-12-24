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
  files: File[] | IFile[];
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
      description: "cos",
      email: "cosik@gmail.com",
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
      console.log(formData.get("file"));
      const response = await fetch("http://localhost:5174/directus/files", {
        method: "POST",
        body: formData,
      });
      console.log(response.headers+" Nagłowki")
      if (!response.ok) {
        throw new Error("Error uploading file");
      }
      if (response.status === 204) {
        console.log("brak tresci w odpowiedzi");
        return null;  
      }
      const data = await response.json();
      return data.data.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const addAnnouncemntToDirectus = async () => {
    try {
      const uploadedFiles: { id: string }[] = [];
      console.log(addAnnouncemnt.value.files);
      for(const file of addAnnouncemnt.value.files as File[]){
        const fileId = await uploadFileToDirectus(file);
        if(fileId){
          uploadedFiles.push({id: fileId});
        }
      }  

      //DOdanie ogłozenia do directusa
      await client.request(
        createItem("announcements", {
          price: addAnnouncemnt.value.price,
          title: addAnnouncemnt.value.title,
          description: addAnnouncemnt.value.description,
          email: addAnnouncemnt.value.email,
          phone: addAnnouncemnt.value.phone,
          place: addAnnouncemnt.value.place.id,
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
function newFile(arg0: Blob[], name: any, arg2: { type: string; }) {
  throw new Error("Function not implemented.");
}

