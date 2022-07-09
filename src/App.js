import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Defaultpages from "./pages/pagesDefault";
import PagesLoginSigin from "./pages/pagesLoginSigin";
import {useGlobalContext} from "./context"
import Loading from "./loading";
function App() {
  const {loading} = useGlobalContext()
if(loading){
  return <Loading />
}
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Defaultpages />} />
        <Route path="/sigin" element={<PagesLoginSigin />} />
      </Routes>
    </Router>
  );
}

export default App;
