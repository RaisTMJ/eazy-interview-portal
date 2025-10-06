"use client";

import { useUserProfile } from "@/hook/useUserProfile";
import ProfilePageUI from '@/components/ui/ProfilePageUi';



export default  function ProfilePage() {  


const { user, loading, error } = useUserProfile();

      if(loading){

        return (
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p className="text-lg">loading profile ... </p>
          </main>
        );
      }
      if(error){

        return (
          <main className="flex min-h-screen flex-col item-center justify-center p-24">
            <p className="text-red-500">{error}</p>
          </main>
        );
      }
      return (user && <ProfilePageUI user={user}></ProfilePageUI>
        
      );  

}