import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import placeholderImage from "../../homePageStory/images/StoryScape_placeholder2.png"
import "../../homePageStory/homePageStory.css";

export default function StoryCard({ storyTitle, storyLocation, storyDescription, storyId }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/story", { state: { storyId, storyTitle, storyLocation, storyDescription } });
  }
  
  console.log(storyId);
  return (
    <>
    {result && (
      <ul>
      <Container className="piccontainer">
      <img src={placeholderImage} alt="Story" className="image" />
      <div className="ustorycontainer">
        <h2 className="title">{storyTitle}</h2>
        <em className="storyUserName">  {storyLocation} </em>
        <p className="text">{storyDescription}</p>
      </div>
      <button onClick={handleClick} className="click-here-btn">Click here for more...</button>
    </Container>
      </ul>
    )}
    </>
  );
} 
