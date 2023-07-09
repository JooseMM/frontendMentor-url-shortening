import ActionCall from "./Components/ActionCall/ActionCall";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import InputBox from "./Components/InputBox/InputBox";
import Links from "./Components/Links/Links";
import Navbar from "./Components/Navbar/Navbar";
import Whyus from "./Components/Whyus/Whyus";
import useData from "./CustomHooks/useData";

function App() {
  const { fetchFunction, setInput, data, input } = useData();

  return (
    <>
      <Navbar />
      <Home />
      <InputBox fetch={fetchFunction} input={input} setInput={setInput} />
      <Links data={data} />
      <Whyus />
      <ActionCall />
      <Footer />
    </>
  );
}

export default App;
