import axios from 'axios';
import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';



export const useChatStore = create((set,get) => ({
    allContacts: [],
    chats: [],
    message: [],
    activeTab: [],
    selecetedUser: [],
    isUsersLoading:false,
    isUserMessageLoading:false,
    isSoundEnabled:localStorage.getItem("isSoundEnabled") === true,

    toggleSound: () => {
        localStorage.setItem("isSoundEnabled",!get().isSoundEnabled)
        set({isSoundEnabled:!get().isSoundEnabled})
    },

   SetActiveTab : (tab) => set({activeTab:tab}),
   setSelectedUser: (selecetedUser) => set({selecetedUser}),

   getAllContacts: async() => {
    set({isUsersLoading : true});
    try {
        const res = await axiosInstance.get("/messages/contacts");
        set:({allContacts:res.data});
        
    } catch (error) {
        toast.error(error.response.data.message);
        
    }finally{
        set({isUsersLoading:false});
    }
   },

   getMyChatPartners: async() => {
    set({isUsersLoading : true});
    try {
        const res = await axiosInstance.get("/messages/chats");
        set:({chats:res.data});
        
    } catch (error) {
        toast.error(error.response.data.message);
        
    }finally{
        set({isUsersLoading:false});
    }
     
   },

}))