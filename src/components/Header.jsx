import reactImage from "../assets/react-core-concepts.png";
import "./Header.css";
const keyWords = ["Fun", "Cool"];

const genRandomNum = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

export default function Header() {
  const newWord = keyWords[genRandomNum(1)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {newWord} React concepts you will need for almost any app you are going
        to build!
      </p>
    </header>
  );
}
