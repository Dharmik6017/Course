import React from "react";

const Images = (props) => {
  return (
    <div>
      {props.images.map((u) => {
        return <img src={u.urls.small} />;
      })}
    </div>
    // <img src={props}/>
  );
};

const ImageList = (props) => {
  const { images } = props;

  return (
    <div>
      <Images images={images} />
    </div>
  );
};

export default ImageList;
