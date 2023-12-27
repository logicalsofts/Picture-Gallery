import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
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
      return state = Object.assign({
        ...state,
        loading: true,
        images: [],
        error: "",
      });
    });
    builder.addCase(
      fetchAllImages.fulfilled,
      (state, action: PayloadAction<any>) => {
        return state = Object.assign({
          ...state,
          loading: false,
          images: action.payload,
          error: "",
        });
      }
    );
    builder.addCase(fetchAllImages.rejected, (state) => {
      return state = Object.assign({
        ...state,
        loading: false,
        images: [],
        error: "Something went wrong",
      });
    });
  },
});
export const { updateImages } = imagesSlice.actions;
export default imagesSlice.reducer;
