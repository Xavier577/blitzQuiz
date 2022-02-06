import create from "zustand";

interface AuthUser {
  authUser: any;
  isAuthenticated: boolean;
  setAuthUser: (user: any) => void;
  setIsAuthenticated: (value: boolean) => void;
}

export const useAuthUser = create<AuthUser>((set) => ({
  authUser: null,
  isAuthenticated: false,
  setAuthUser: (user) => set({ authUser: user }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));
