import "./App.css";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Header>
        {" "}
        <img src="src/assets/images/Logo.png" alt="FN Verdensmål logo" />
        My first React app
        <Navbar />
      </Header>
      <Main>
        <p>My first react project</p>
        <Button textValue="Say Heinz" />
        <Container color="#114466" width="80%" padding={20} />
        <Container color="#115455" width="100%" padding={10} />
      </Main>
      <Footer>
        <img src="src/assets/images/UNDP Logo.png" alt="UNDP logo"></img>
        <img src="src/assets/images/MS Logo.png" alt="MS logo"></img>
        <img
          src="src/assets/images/Globale Gymnasier Logo.png"
          alt="lobale Gymnasier logo"
        ></img>
        <img src="src/assets/images/Danida Logo.png" alt="Danida logo"></img>
      </Footer>
    </>
  );
}

export default App;
