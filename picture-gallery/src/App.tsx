import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { updateImages, fetchAllImages } from "./features/imageSlice";
import axios from "axios";
import Title from "./components/Title";
import ImageList from "./components/ImageList";
import PopularsList from "./components/NavContainer";
import Search from "./components/Search";

function App() {
  const [imagesListData, setImagesListData] = useState<any>([]);
  const [activePopular, setActivePopular] = useState("Festivals");
  const images = useAppSelector((state) => state.images.images);
  const populars = useAppSelector((state) => state.images.populars);
  const loading = useAppSelector((state) => state.images.loading);

  const dispatch = useAppDispatch();

  const handleSearch = async (query: string) => {
    let searchedImages = await fetchImages(query);
    setImagesListData(searchedImages);
    if (populars.some((popular) => popular === query)) {
      dispatch(
        updateImages({
          [query]: searchedImages,
          key: query,
        })
      );
    }
  };

  const fetchImages = async (query: string) => {
    setActivePopular(query);
    return axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${`a4954b7f1ad4d0064cdc3f259849c390`}&text=${query}&per_page=24&page=1&format=json&nojsoncallback=true`
      )
      .then((response) => {
        return response.data.photos.photo;
      });
  };

  const filterImages = async (active: string) => {
    setActivePopular(active);
    let updatedImages = images?.filter((popular) => {
      if (Object.keys(popular)[0] === active) {
        return popular;
      }
    });
    updatedImages && setImagesListData(updatedImages[0]?.[active] as any);
  };

  const fetchAllPopulars = async () => {
    await dispatch(fetchAllImages());
  };

  useEffect(() => {
    activePopular === "Festivals" && filterImages(activePopular);
  }, [images]);

  useEffect(() => {
    fetchAllPopulars();
  }, []);

  return (
    <div className="App">
      <Title $largeFont>Picture Gallery</Title>
      <Search handleSearch={handleSearch} />
      <PopularsList populars={populars} onSearch={filterImages} />
      <Title $largeFont>{activePopular}</Title>
      <ImageList imagesListData={imagesListData} />
    </div>
  );
}

export default App;
