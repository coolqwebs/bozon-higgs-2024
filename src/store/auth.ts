import { create } from "zustand";

export interface AuthState {
  user: null | unknown;
  isAuthenticated: boolean;
  setUser: (user: unknown) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user: unknown) => set({ user }),
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));
