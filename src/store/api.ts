import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/lib/request";
import { setProfileData } from "./slice";

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: "https://back.boson-higgs.link/api" }),
  tagTypes: ["Profile", "Leaderboard", "Levels", "Solution", "SubmitToken"],
  endpoints: (builder) => ({
    register: builder.mutation<unknown, { email: string; userName: string }>({
      query: (data) => {
        return {
          url: "/accounts/register",
          method: "post",
          data: data,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    login: builder.mutation<unknown, { email: string; password: string }>({
      query: (data) => {
        return {
          url: "/authorize/login",
          method: "post",
          data: data,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    getProfileData: builder.query<IUser, void>({
      query: () => {
        return {
          url: "/accounts/about-me",
          method: "get",
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;

          dispatch(setProfileData(res.data));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["Profile"],
    }),
    getLeaderBoard: builder.query<ILeaderboardData, void>({
      query: () => {
        return {
          url: "/leader-boards",
          method: "get",
        };
      },
      providesTags: ["Leaderboard"],
    }),
    getLevelsAsAdmin: builder.query<ILevel[], void>({
      query: () => {
        return {
          url: "/levels/get-levels",
          method: "get",
        };
      },
      providesTags: ["Levels"],
    }),
    getMyLevels: builder.query<ILevel[], void>({
      query: () => {
        return {
          url: "/levels/my-levels",
          method: "get",
        };
      },
      providesTags: ["Levels", "Profile", "SubmitToken"],
    }),
    submitNextLevelToken: builder.mutation<void, string>({
      query: (levelToken) => {
        return {
          url: "/levels/by-token?token=" + levelToken,
          method: "post",
        };
      },
      invalidatesTags: ["Levels", "SubmitToken", "Profile"],
    }),
    getLevelHint: builder.query<string, string>({
      query: (levelId) => {
        return {
          url: "/levels/get-hint?id=" + levelId,
          method: "get",
        };
      },
      providesTags: ["Levels"],
    }),
    submitSolution: builder.mutation<{ code: string; target: number }, void>({
      query: (data) => {
        return {
          url: "/solutions/submit",
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: ["Solution"],
    }),
  }),
});

export const {
  useGetLeaderBoardQuery,
  useGetProfileDataQuery,
  useLazyGetProfileDataQuery,
  useLoginMutation,
  useRegisterMutation,
  useGetMyLevelsQuery,
  useGetLevelsAsAdminQuery,
  useSubmitNextLevelTokenMutation,
  useLazyGetLevelHintQuery,
} = api;
