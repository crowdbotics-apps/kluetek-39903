import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const slackapi_post_api_conversationscreate_create = createAsyncThunk(
  "slackapi_response_post_CreateConversations/slackapi_post_api_conversationscreate_create",
  async payload => {
    const response = await apiService.slackapi_post_api_conversationscreate_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const slackapi_response_post_CreateConversationsSlice = createSlice({
  name: "slackapi_response_post_CreateConversations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        slackapi_post_api_conversationscreate_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        slackapi_post_api_conversationscreate_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        slackapi_post_api_conversationscreate_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  slackapi_post_api_conversationscreate_create,
  slice: slackapi_response_post_CreateConversationsSlice
}
