import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header>
        <img src="src/assets/images/Logo.png" alt="FN Verdensmål logo" />
        My first react app
        <NavBar />
      </Header>
      <Main>
        <Container color="#bce4ff" width="80%" padding={20}>
          <h1>My first react project</h1>
        </Container>
        <Container color="#ffffff" width="100%" padding={20}>
          <h2>Hvad er FN's Verdensmål for bæredygtig udvikling?</h2>
          <h3>
            FN's Verdensmål består af 17 mål og 169 delmål og er den til dato
            mest ambitiøse globale udviklingsdagsorden.
          </h3>
          <body>
            FN's Verdensmål for bæredygtig udvikling blev vedtaget af verdens
            stats- og regeringsledere på FN topmødet i New York den 25.
            september 2015. Det markerede en hidtil uset ambitiøs og
            transformativ udviklingsdagsorden. Målene trådte i kraft den 1.
            Januar 2016 og skal frem til 2030 sætte os kurs mod en mere
            bæredygtig udvikling for både mennesker og planeten, vi bor på.
          </body>
        </Container>
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
