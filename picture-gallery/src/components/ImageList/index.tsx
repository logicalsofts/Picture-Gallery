import React, { FC } from "react";
import { Images } from "../../features/types";
import { ImageElement, ImageWrapper } from "./styled";

interface ImageListProps {
  imagesListData: Images[];
}

const ImageList: FC<ImageListProps> = (props) => {
  return (
    <React.Fragment>
      <ImageWrapper>
        {props.imagesListData &&
          props.imagesListData.map((image, index) => {
            return (
              <ImageElement
                key={index}
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
              />
            );
          })}
      </ImageWrapper>
    </React.Fragment>
  );
};

export default ImageList;
