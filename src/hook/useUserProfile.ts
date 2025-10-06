"use client";
import { getUserProfile } from "@/lib/userService";
import { LoadingState, Action } from "@/type/LoadingState";
import {  useEffect, useReducer } from "react";


function profileReducer(state: LoadingState, action: Action): LoadingState {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Unhandled action type");
  }
}


export function useUserProfile() {
    const initialState: LoadingState = {
        data: null,
        loading: false,
        error: null
    };

const [state, dispatch] = useReducer(profileReducer, initialState);

useEffect(() => {
    const fetchUserProfile = async () => {
        dispatch({ type: 'FETCH_START' });      
        try {
           
            const data = await getUserProfile();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        }
        catch (error: unknown) {
            if (error instanceof Error) {
                dispatch({ type: 'FETCH_ERROR', payload: error.message });
            } else {
                dispatch({ type: 'FETCH_ERROR', payload: 'An unexpected error occurred' });
            }       
        }
    }   
    fetchUserProfile(); 
}, []);

return {user: state.data, loading: state.loading, error: state.error}

}

