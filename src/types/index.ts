import { ReactElement } from "react";

export type AuthState = {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: null | {
    name: string;
    email: string;
    id: string;
    username: string;
  };
  error: string | null;
};

export type User = {
  name: string;
  email: string;
  id: string;
  username: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AdminDashboardApps = {
  name: string;
  icon: ReactElement;
  path: string;
  color: string;
};
