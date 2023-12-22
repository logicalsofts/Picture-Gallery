import React, { FC } from "react";
import ImageElement from "./Image";
import { Images } from "../features/types";

interface ImageListProps {
  imagesListData: Images[];
}

const ImageList: FC<ImageListProps> = (props) => {
  return (
    <React.Fragment>
      {props.imagesListData &&
        props.imagesListData.map((image, index) => {
          return (
            <ImageElement key={index}
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
            />
          );
        })}
    </React.Fragment>
  );
};

export default ImageList;
