import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";

// app router skal ind og ligge
function App() {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
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
