
import { UserInterface } from "@/store/userSlice";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { logoutUser } from "@/lib/authService";
import ProfilePage from '../../app/profile/page';



export default function ProfilePageUI({ user }: { user: UserInterface }) {

  const navigate = useRouter();

  const handleEditProfile = () => {
    navigate.push("/profile/edit");
  };
  const handleLogout = async () => {

    alert("Logging out...");
    await logoutUser();
    navigate.push("/index");

    // Implement logout functionality here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl text-center">
        <div className="flex flex-col items-center">
          {user && user.profileImageUrl != null && user.profileImageUrl !== "" && (
          <Image
            width={112}
            height={112}
            src={user.profileImageUrl} // Use user's image or fallback
            alt="Profile Picture"
            className="h-28 w-28 rounded-full object-cover ring-4 ring-indigo-200"
          />
         ) }
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            {user.firstName} {user.lastName}
          </h2>

          <div className="mt-2 flex items-center gap-2">
            <Mail/>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          <div className="mt-8 flex w-full space-x-4">
            <button
              onClick={handleEditProfile}
              type="button" 
              className="flex-1 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}  
              type="button"
              className="flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}