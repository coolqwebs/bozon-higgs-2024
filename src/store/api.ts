import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuth, setProfileData } from "./slice";
const API_URL = "https://back.boson-higgs.link/api/";

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders(headers) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      { url: "/Auth/Refresh", method: "post" },
      api,
      extraOptions
    );
    if (refreshResult.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setIsAuth(false));
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Profile", "Leaderboard", "Levels", "Solution", "SubmitToken"],
  endpoints: (builder) => ({
    register: builder.mutation<unknown, { email: string; userName: string }>({
      query: (data) => {
        return {
          url: "/accounts/register",
          method: "post",
          body: data,
          responseHandler: (response: any) => response.text(),
        };
      },
      transformErrorResponse: (response: any) => {
        return {
          status: response.status,
          data: JSON.parse(response.data),
        };
      },
      invalidatesTags: ["Profile"],
    }),
    login: builder.mutation<unknown, { email: string; password: string }>({
      query: (data) => {
        return {
          url: "/authorize/login",
          method: "post",
          body: data,
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
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
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
          responseHandler: (response: any) => response.text(),
        };
      },
      transformErrorResponse: (response: any) => {
        return {
          status: response.status,
          data: JSON.parse(response.data),
        };
      },
      providesTags: ["Levels"],
    }),
    submitSolution: builder.mutation<{ code: string; target: number }, void>({
      query: (data) => {
        return {
          url: "/solutions/submit",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Solution"],
    }),
    sendMarqueeMessage: builder.mutation<string, void>({
      query: (message) => {
        return {
          url: "/marquees/send?message=" + message,
          method: "post",
        };
      },
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
  useSendMarqueeMessageMutation,
} = api;
