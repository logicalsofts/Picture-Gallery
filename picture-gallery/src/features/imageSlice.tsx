import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { State } from "./types";

const initialState: State = {
  loading: false,
  images: [],
  populars: ["Festivals", "Mountains", "Corals", "Birds"],
  error: "",
};

export const fetchAllImages = createAsyncThunk(
  "images/fetchAllImages",
  async () => {
    return axios
      .all(
        initialState.populars.map((popular) =>
          axios.get(
            `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${`a4954b7f1ad4d0064cdc3f259849c390`}&text=${popular}&per_page=24&page=1&format=json&nojsoncallback=true`
          )
        )
      )
      .then(
        axios.spread(
          (
            { data: Festivals },
            { data: Mountains },
            { data: Corals },
            { data: Birds }
          ) => {
            return [
              { Festivals: Festivals.photos.photo },
              { Mountains: Mountains.photos.photo },
              { Corals: Corals.photos.photo },
              { Birds: Birds.photos.photo },
            ];
          }
        )
      );
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    updateImages: (state, action: PayloadAction<any>) => {
      state.images = state.images.map((image) => {
        if (Object.keys(image)[0] === action.payload.key) {
          return { [action.payload.key]: action.payload[action.payload.key] };
        } else {
          return image;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllImages.pending, (state) => {
      state.loading = true;
      state.images = [];
      state.error = "";
      state.populars = state.populars;
    });
    builder.addCase(
      fetchAllImages.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.images = action.payload;
        state.error = "";
        state.populars = state.populars;
      }
    );
    builder.addCase(fetchAllImages.rejected, (state) => {
      state.loading = false;
      state.images = [];
      state.error = "Something went wrong";
      state.populars = state.populars;
    });
  },
});
export const { updateImages } = imagesSlice.actions;
export default imagesSlice.reducer;
