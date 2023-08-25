import {create} from 'zustand';
import { persist } from "zustand/middleware";

// import { IUser } from '../api/types';

// type Store = {
//   // authUser: IUser | null;
//   requestLoading: boolean;
//   setAuthUser: (user: IUser | null) => void;
//   setRequestLoading: (isLoading: boolean) => void;
// };

const useAuthStore = create(
  persist(
    (set) => ({
      authUser: null,
      requestLoggedIn: false,
      setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
      setRequestIsLogged: (isLoggedIn) =>
        set((state) => ({ ...state, requestLoggedIn: isLoggedIn })),
    }),
    { name: "auth" }
  )
);

export default useAuthStore;