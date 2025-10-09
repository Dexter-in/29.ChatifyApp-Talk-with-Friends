import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";


export const useAuthStore = create((set) =>({
    authUser:null,
    isCheckingAuth: true,
    isSigningUp:false,
    isLoggingIn:false,
    isLoggingIn:false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({authUser:res.data})
        } catch (error) {
            console.log("Error in authCheck:",error)
            set({authUser:null});
            
        } finally {
            set({isCheckingAuth:false});
        }
    }, 

    signup: async (data) => {
        set({isSigningUp:true})
        try {
           const res = await axiosInstance.post("/auth/signup",data);
           set({authUser:res.data});

           toast.success("Account created Succssfully!")
            
        } catch (error) {
            toast.error(error.response.data.message)
            
        }finally{
         set({isSigningUp:false})

    }
    },

    login: async (data) => {
        set({isLoggingIn:true})
        try {
           const res = await axiosInstance.post("/auth/login",data);
           set({authUser:res.data});

           toast.success("Logged in Succssfully!")
            
        } catch (error) {
            toast.error(error.response.data.message)
            
        }finally{
         set({isloggedIn:false})

    }
    },
 
    logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      
    } catch (error) {
      toast.error("Error logging out");
      console.log("Logout error:", error);
    }
  },
  
  updateProfile: async (data) => {
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("Error in update profile:", error);
      toast.error(error.response.data.message);
    }
  },

}));

