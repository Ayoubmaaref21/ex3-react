import Skill from "./components/skill.jsx";
import Result from "./components/resultPart.jsx";
import "./App.css";
import img_bolt from "./assets/Bolt.svg";
import img_brain from "./assets/Brain.svg";
import img_comment from "./assets/Comment.svg";
import img_eye from "./assets/Eye.svg";

function App() {
  return (
    <div className="App">
      <div className="right-part-app">
        <Result />
      </div>
      <div className="left-part-app">
        <p className="left-part-title">Summary</p>
        <Skill
          logo={img_bolt}
          title={"Reaction"}
          note={"80"}
          color="rgb(255,0,0)"
          bgcolor="rgb(255,0,0,0.1)"
        />
        <Skill
          logo={img_brain}
          title={"Memory"}
          note={"65"}
          color="rgb(255,200,0)"
          bgcolor="rgb(255,200,0,0.1)"
        />
        <Skill
          logo={img_comment}
          title={"Verbal"}
          note={"75"}
          color="rgb(0,200,210)"
          bgcolor="rgb(0,200,210,0.1)"
        />
        <Skill
          logo={img_eye}
          title={"Visual"}
          note={"50"}
          color="rgb(177,151,255)"
          bgcolor="rgb(177,151,255,0.1)"
        />
        <button className="btn-continue">Continue</button>
      </div>
    </div>
  );
}

export default App;
