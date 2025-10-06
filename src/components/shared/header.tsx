"use client";
import { getUserProfile } from '@/lib/userService';
import React, { useState } from 'react';
import { useEffect } from "react";
import Image from 'next/image';
import { UserProfile } from '@/type/userProfile';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// You can pass the user object as a prop to the header


const initialProfile: UserProfile | null = null
export  function Header() {
    const navigate = useRouter();
    
  const [isOpen, setIsOpen] = useState(false);

  const [profile, setProfile] = useState(initialProfile);
const [isLoading, setIsLoading] = useState(true);

    const handleSession = () => {


        if(profile && profile.email){ 
            navigate.push("/profile");
        }
        else{
            navigate.push("/login");
        }
    };

useEffect(() => {
  const fetchUserProfile = async () => {
    try {
      const data = await getUserProfile();
      setProfile(data);
    } catch (error) {
      // You could set an error state here as well
    } finally {
      setIsLoading(false);
    }
  };

  fetchUserProfile();
}, []); // 


const navigateTo = (route: string) => {
    navigate.push(`/${route}`);
  }




  const handleImageError = (e) => {
    e.currentTarget.src = 'https://via.placeholder.com/150';
  };

  return (
    <nav className="bg-brand-surface shadow-soft font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo/Brand Name */}
          <div className="flex-shrink-0">
            <Link href={"/"} className="text-2xl font-bold text-brand-text">Eazy Interview Portal</Link>
          </div>

          {/* Center Section: Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            </div>
          </div>

          {/* Right Section: Profile (Desktop) */}
          <div className="hidden md:flex items-center ml-4">
             <div className="relative">
                <button className="p-1 rounded-full text-brand-subtext hover:text-brand-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-primary">
                  <span className="sr-only">View notifications</span>
                  {/* Bell Icon SVG */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
             </div>
             <div className="ml-3 relative flex items-center" onClick={handleSession}>
                <span className="text-brand-text font-medium mr-3">{profile?.firstName ?? "Guest"}</span>
                <button className="max-w-xs bg-brand-surface rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                  <span className="sr-only">Open user menu</span>
                  {/* {profile &&  profile.profileImageUrl !== "" && (
                    <Image width={32} height={32}
                      className="h-8 w-8 rounded-full object-cover"
                      src={profile?.profileImageUrl }
                      alt="User profile"
              
                    />
                  )} */}
                </button>
             </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-surface inline-flex items-center justify-center p-2 rounded-md text-brand-subtext hover:text-brand-text hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a onClick={() => navigateTo("register")} className="text-brand-primary font-semibold block px-3 py-2 rounded-md text-base">Register</a>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    {profile &&  profile.profileImageUrl && 
                    <Image  width={40} height={40}
                        className="h-10 w-10 rounded-full object-cover" 
                        src={profile.profileImageUrl} 
                        alt="User profile"
                        onError={handleImageError}
                    /> 
                    }
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium text-brand-text" >{profile?.firstName ?? "Guest"}</div>

                </div>
                 <button className="ml-auto bg-brand-surface flex-shrink-0 p-1 rounded-full text-brand-subtext hover:text-brand-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-primary">
                    <span className="sr-only">View notifications</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </div>
        </div>
      </div>
    </nav>
  );
}
