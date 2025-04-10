import { defineStore } from "pinia"
import { createItem, readItems, uploadFiles } from "@directus/sdk"
import { client } from "../../utils/directusClient"
import { computed, ref } from "vue"
export interface IFile {
   id: number
   announcments_id: number
   directus_files_id: string
}
export interface IAnnouncement {
   id: number
   status: string
   date_created: string
   date_updated: string
   title: string
   description: string
   email: string
   phone: string
   price: number | null
   place: {
      id: number
      sort: null
      name: string
   }
   files: File[] | IFile[]
}
/**
 * useAnnouncementStore - store for announcements
 * @returns {object} - object with methods and variables
 */
export const useAnnouncementStore = defineStore("announcements", () => {
   const announcements = ref<IAnnouncement[]>([]),
      announcementId = ref<number | null>(null),
      pageNumber = ref<number>(1),
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
            name: "Gnojnik"
         },
         files: [] as File[]
      })
   /**
   *function loadData - download data from the server
   @returns {Promise<void>}
   */
   async function loadData() {
      const response = await client.request(
         readItems("announcements", {
            fields: ["*.*"]
         })
      )
      announcements.value = response as unknown as IAnnouncement[]
      if (Array.from(announcements.value).length > 6) {
         //check if there are more than 10 announcements
         pageNumber.value = Array.from(announcements.value).length / 6 //if yes, calculate the number of pages
         if (pageNumber.value === 1) {
            pageNumber.value = 0
         } else {
            pageNumber.value = Math.ceil(pageNumber.value) //round up the number of pages
         }
         console.log(pageNumber.value)
      }
   }
   const data = computed(() => {
      return announcements.value.find((item) => item.id === announcementId.value)
   })

   const uploadFileToDirectus = async (file: File, folderId: string) => {
      const formData = new FormData()

      formData.append("folder", folderId)
      formData.append("file", file)

      const result = await client.request(uploadFiles(formData))

      return result.id
   }

   const addAnnouncemntToDirectus = async () => {
      const response = await fetch("http://localhost:5173/directus/folders")
      const data = await response.json()
      const folder = data.data.find((item: { name: string }) => item.name === "announcements")

      try {
         const uploadedFiles: { create: { announcements_id: string; directus_files_id: { id: number } }[] } = {
            create: []
         }

         for (const file of addAnnouncemnt.value.files as File[]) {
            const fileId = await uploadFileToDirectus(file, folder.id)

            if (fileId) {
               uploadedFiles.create.push({
                  announcements_id: "+",
                  directus_files_id: { id: fileId }
               })
            }
         }

         await client.request(
            createItem("announcements", {
               price: addAnnouncemnt.value.price,
               title: addAnnouncemnt.value.title,
               description: addAnnouncemnt.value.description,
               email: addAnnouncemnt.value.email,
               phone: addAnnouncemnt.value.phone,
               place: addAnnouncemnt.value.place.id,
               files: uploadedFiles
            })
         )
      } catch (error) {
         console.error(error)
      }
   }

   return {
      loadData,
      announcements,
      data,
      announcementId,
      pageNumber,
      addAnnouncemnt,
      addAnnouncemntToDirectus
   }
})
