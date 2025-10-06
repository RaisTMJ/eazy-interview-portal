import { UserProfile } from "./userProfile";

export type LoadingState = {
  data: UserProfile | null;
  loading: boolean;
  error: string | null;
};

export type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: UserProfile }
  | { type: 'FETCH_ERROR'; payload: string };