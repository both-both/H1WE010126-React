import "./App.css";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Navbar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Header>
        <img src="./src/assets/images/Logo.png" alt="FN Verdensmål logo" />
        My first React app
        <Navbar />
      </Header>
      <Main>
        <Container color="#bce4ff" width="80%" margin="auto" padding={20}>
          <h1>My first react project</h1>
          <Button textValue="Say Heinz" />
        </Container>
        <Container color="#3b6701" width="100%" padding={10} margin="auto" />
      </Main>
      <Footer />
    </>
  );
}

export default App;
