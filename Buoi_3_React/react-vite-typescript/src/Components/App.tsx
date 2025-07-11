import { Apple, Facebook, GanttChart, ArrowRight, Search, Globe, SlidersHorizontal, Phone, Smile,} from "lucide-react";
import "./App.css";
import Button from "./Button/Button";
import SearchInput from "./SearchInputs/SearchInput";
import Card_1 from "./Card/Card_1";
import Card_3 from "./Card/Card_3";
import Card_2 from "./Card/Card_2";
import Card_4 from "./Card/Card_4";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <div className="container">
      <div className="leftPanel">
        <div className="buttonGroup">
          <Button label="Get started" type="primary" rightIcon={<ArrowRight size={18} />} />
          <Button label="Continue with Apple" type="apple" icon={<Apple size={18} />} />
          <Button label="Continue with Google" type="outline" icon={<GanttChart size={18} />} />
          <Button label="Continue with Facebook" type="outline" icon={<Facebook size={18} />} />
        </div>
      </div>

      <div className="middlePanel">
        <SearchInput placeholder="" leftIcon={Search} />
        <SearchInput placeholder="Search" leftIcon={Search} />
        <SearchInput placeholder="Textfield" bold  leftIcon={Search} />
        <SearchInput placeholder="Search in the web" leftIcon={Search} rightIcon={Globe} />
        <SearchInput placeholder="Search crypto" leftIcon={Search} rightIcon={SlidersHorizontal} />
        <SearchInput placeholder="Phone number" rightIcon={Phone} rightBgColor="#ccf7d4" />
        <SearchInput placeholder="Search in the web" leftIcon={Search} rightIcon={Smile} rightBgColor="#ffe26f" />
      </div>

      <div className="rightPanel">
        <Card_1 />
        <Card_2 />
        <Card_3 />
        <Card_4 />
      </div>

      <div className="contactPanel">
        <Contact />
      </div>
    </div>

  );
};

export default App;
