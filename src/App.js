import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Navbar from "./aa/nav/navbar";
import Slides from "./aa/slides/Slides";

const AppContainer = styled.div`
  width: 160vw;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div className="a1">
      <Navbar/>
      <br/>
      <br/>
      <div style={{display:"flex",float:"left", marginTop:"-5vh"}}>
      <Slides/>
      </div>

      <div className="L_S_form" style={{display:"flex",float:"right"}}>
      <AppContainer>
        <AccountBox />
      </AppContainer>
      </div>
    </div>
  );
}

export default App;
