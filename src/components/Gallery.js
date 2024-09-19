import styled from "styled-components";
import { useGlobalContext } from "../context/global";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Gallery() {
  const { getAnimePictures, pictures } = useGlobalContext();
  const { id } = useParams();

  ///// state
  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
  };
  useEffect(() => {
    getAnimePictures(id);
  }, [id]);

  return (
    <GalleryStyled>
      <div className="back">
        <Link to='/'>
        <i class="fa-solid fa-arrow-left"></i>
        
        back to home
        </Link>
      </div>
      <div className="big-image">
        <img src={pictures[index]?.jpg.image_url} alt="" />
      </div>
      <div className="small-images ">
        {
        pictures?.map((picture, i) => {
          return (
            <div
              className="image-con"
              onClick={() => {
                handleImageClick(i);
              }}
              key={i}
            >
              <img
                src={picture.jpg.image_url}
                style={{
                  border:
                    i === index ? "3px solid #27ae60" : "3px solid #e5e7eb",
                  filter: i === index ? "grayscale(1.2)" : "grayscale(1)",
                  transform: i === index ? "scale(1.1)" : "scale(1)",
                  transition: "all .3s ease-in-out",
                }}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </GalleryStyled>
  );
}

export default Gallery;
const GalleryStyled = styled.div`
  background-color: #ededed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .back {
    position: absolute;
    top: 2rem;
    left: 2rem;
    a {
      font-weight: 600;
      text-decoration: none;
      color: #eb5757;
      display:flex;
       align-item: center;
        gap: .5rem;
    }
  }
  .big-image {
    display: inline-block;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #fff;
    border-radius: 7px;
    border: 5px solid #e5e7eb;
    position: relative;
    img {
      width: 350px;
    }
  }
  .small-images {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 80%;
    padding: 2rem;
    border-radius: 7px;
    background-color: #fff;
    border: 5px solid #e5e7eb;
    img {
      width: 6rem;
      height: 6rem;
      object-fit: cover;
      cursor: pointer;
      border-radius: 5px;
      border: 5px solid #e5e7eb;
    }
  }
`;
