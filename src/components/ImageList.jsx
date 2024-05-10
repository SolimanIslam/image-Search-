import ImageShow from "./ImageShow";
import "../style/ImageList.css";

function ImageList({ images }) {
   const renderedImageShows =
      images.map(image =><ImageShow key={image.id} image={image} />);

   return (<div className="image-list">
      {renderedImageShows}
   </div>);
}

export default ImageList;