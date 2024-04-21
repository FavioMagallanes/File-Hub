import { FC } from "react";
import { Header } from "./components/layout/header/header";
import { Hero } from "./components/layout/hero/hero";
import { Footer } from "./components/layout/footer/footer";

const App: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
