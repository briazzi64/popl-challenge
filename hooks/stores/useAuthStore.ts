import { create } from 'zustand';
import { AuthUser, RefreshTokenResponse } from '../../types/auth';

type UseAuthStoreState = {
  authUser: AuthUser | null;
  accessToken: RefreshTokenResponse | null;
  setAuthUser: (data: AuthUser | null) => void;
  setAccessToken: (data: RefreshTokenResponse | null) => void;
};

export const useAuthStore = create<UseAuthStoreState>((set) => {
  return {
    authUser: null,
    accessToken: null,
    setAuthUser: (authUser) => {
      set({ authUser });
    },
    setAccessToken: (accessToken) => {
      set({ accessToken });
    },
  };
});
