
"use client";
import { useUserProfile } from '@/hook/useUserProfile';
// In a real app, you would fetch this from your database or state management

import { useRef, useState } from 'react';
import { Input } from '@/components/ui/Input';
import Image from 'next/image';
import { updateUserProfile, uploadProfileImage } from '@/lib/userService';

import { useRouter } from 'next/navigation';
export default  function EditProfilePage() {

  const { user, loading, error } = useUserProfile();
  const navigate = useRouter();

  const [profileImage, setProfileImage]  =useState(user?.profileImageUrl || null);
    const [newImageFile, setNewImageFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);


  const handleImageError = (err: any) => {
    err.currentTarget.src = "public\placeholder-300x200.webp"
  }
  

  const handleButtonClick = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (file: any) => {
    if (file && file.type.startsWith('image/')) {
      setNewImageFile(file);
      // Create a temporary URL to preview the image
      setProfileImage(URL.createObjectURL(file));
    } else {
      console.log('Please select a valid image file.');
    }
  };

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      handleFileChange(file);
    };
  }

  const handleDragOver = (event: any) => {
    console.log("drag over", event);
    event.preventDefault();
    setIsDragging(true);
  }

  const handleDragLeave = (event: any) => {
    console.log("drag leave", event);
    event.preventDefault();
    setIsDragging(false);
  }

    const handleDrop = (e: any) => {
      console.log("drag drop", e);
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileChange(file);
    }
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let submitStatus: boolean = false;

    if (newImageFile) {
      submitStatus = true;
      await uploadProfileImage(newImageFile);
    }

    // form data changes
      const formElements = event.target.elements;
      const updatedProfile = {
        firstName: formElements.firstName.value,
        lastName: formElements.lastName.value,
      };
      if(updatedProfile.firstName !== user?.firstName || updatedProfile.lastName !== user?.lastName){
        await updateUserProfile(updatedProfile);
      submitStatus = true;
      }
      if (submitStatus) {
        alert('Profile updated successfully!');
        navigate.replace('/profile');
      }


  }

  if(loading){

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="text-lg">loading profile ... </p>
      </main>
    );
  }

  console.log("User profile data:", user);
if(user != null && user.email != null){

  let imageUrl = user.profileImageUrl;
  if(imageUrl === null || imageUrl === undefined || imageUrl === ""){
    imageUrl = "/public/placeholder-300x200.webp";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-background p-4 font-sans">
      <div className="w-full max-w-2xl bg-brand-surface p-8 sm:p-10 rounded-2xl shadow-soft">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-text">
            Edit Profile
          </h2>
          <p className="mt-1 text-sm text-brand-subtext">
            Update your photo and personal details.
          </p>
        </div>

        {/* Form Element */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}           
            onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}>
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-5">
            <div 
              className={`relative rounded-full p-1 border-2 ${isDragging ? 'border-brand-primary border-dashed' : 'border-transparent'}`}

            >

              {(
              <Image 
              width={96} height={96}
                src={imageUrl}
                alt="Profile Preview"
                onError={handleImageError}
                className="h-24 w-24 rounded-full object-cover pointers-events-none"
              />
              )}
              {isDragging && (
                <div className="absolute inset-0 bg-brand-primary-light bg-opacity-50 rounded-full flex items-center justify-center">
                  <p className="text-white font-semibold text-sm">Drop Image</p>
                </div>
              )}
            </div>
            <div className="mt-4 sm:mt-6">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    accept="image/*"
                    className="hidden" // Hidden, we trigger it with the button
                />
              <button
                type="button"
                onClick={handleButtonClick}
                className="rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Change Photo
              </button>
               <p className="mt-2 text-xs text-brand-subtext">or drag and drop</p>
            </div>
          </div>

          {/* Form Fields Section */}
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-brand-text">
                First Name
              </label>
              <div className="mt-1">
                <Input type="text"  id="firstName" name="firstName" defaultValue={user?.firstName} />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-brand-text">
                Last Name
              </label>
              <div className="mt-1">
                <Input type="text" id="lastName" name="lastName" defaultValue={user?.lastName} />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-brand-text">
                Email Address
              </label>
              <div className="mt-1">
                <Input type="email" id="email" name="email" defaultValue={user?.email} />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-gray-200">
            <div className="flex justify-end gap-x-3">
              <button onClick={() => navigate.back()}
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-semibold text-brand-text shadow-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

  if(error){

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

}