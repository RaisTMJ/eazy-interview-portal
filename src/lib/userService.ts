
import { UserProfile } from "@/type/userProfile";
import { apiMultipart } from "./api";
import api from "./api";

export const getUserProfile =  async (): Promise<UserProfile> =>{
        const response= await api.get<UserProfile>("/users/profile");
        return response.data;
    
}

export const uploadProfileImage = async (file: File): Promise<void> => {
        
    const formData = new FormData();
    formData.append('file', file);
    await apiMultipart.post("/users/profile-picture", formData);
}

export const updateUserProfile = async (profile: Partial<UserProfile>): Promise<void> => {
    await api.put("/users/profile", profile);
}