import "./App.css";
import { Button } from "./components/Button/Button";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Main>
        <p>My first react project</p>
        <Button textValue="Say Heinz" />
        <Container color="#114466" width="80%" padding={20} />
        <Container color="#115455" width="100%" padding={10} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
