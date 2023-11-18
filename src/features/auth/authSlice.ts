import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { AuthState } from "../../types";

// const AUTH_URL = "";

type ResponseData = {
  data: {
    name?: string | null;
    email?: string | null;
    id?: string | null;
    username?: string | null;
  };
  error?: string | null;
  status?: number;
};

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: { username: string; password: string }) => {
    // Make API call to authenticate user
    // const response = await axios.post(`${AUTH_URL}/login`, credentials);
    let response: ResponseData = {
      data: {
        name: null,
        email: null,
        id: null,
        username: null,
      },
    };
    if (
      credentials.username !== "johndoe" ||
      credentials.password !== "password"
    ) {
      response = {
        data: {},
        error: "Invalid credentials",
        status: 401,
      };
    } else {
      response = {
        data: {
          name: "John Doe",
          email: "john@example.com",
          id: "123",
          username: "johndoe",
        },
        status: 200,
      };
    }

    if (response.status !== 200) {
      throw new Error(response.error ?? "Unknown error");
    }

    return response.data;
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  // Make API call to log out user
  // const response = await axios.post(`${AUTH_URL}/logout`);
  const response: ResponseData = {
    data: {
      name: null,
      email: null,
      id: null,
      username: null,
    },
    status: 200,
  };
  if (response.status !== 200) {
    throw new Error(response.error ?? "Unknown error");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = {
          name: action.payload.name!,
          email: action.payload.email!,
          id: action.payload.id!,
          username: action.payload.username!,
        };
        state.error = null;
        // set auth state in local storage
        localStorage.setItem("auth", JSON.stringify(state));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
        // remove auth state from local storage
        localStorage.removeItem("auth");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? null;
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export default authSlice.reducer;
