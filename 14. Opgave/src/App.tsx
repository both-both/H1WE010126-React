import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Main } from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./pages/HomePage/HomePage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { EducationPage } from "./pages/EducationPage/EducationPage";
import { FaqPage } from "./pages/FaqPage/FaqPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { CustomGoalPage } from "./pages/CustomGoalPage/CustomGoalPage";

// app router skal ind og ligge
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/education-page" element={<EducationPage />} />
            <Route path="/custom-goal" element={<CustomGoalPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
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
      </BrowserRouter>
    </>
  );
}

export default App;
