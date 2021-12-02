import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Carget from "./Sections/Projects/Carget/Carget";
import Travelo from "./Sections/Projects/Travelo/Travelo";
import FitFreak from "./Sections/Projects/FitFreak/FitFreak";
import Blog from "./Sections/Blog/Blog";

const Home = lazy(() => import("./Pages/Home"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <ScrollToTop />
        <Router>
         
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/blogs'>
              <Blog></Blog>
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/carget'>
              <Carget />
            </Route>
            <Route path='/travelo'>
              <Travelo />
            </Route>
            <Route path='/fitfreak'>
              <FitFreak />
            </Route>
            <Route path='/blogs'>
              <Blog/>
            </Route>
          </Switch>
         
        </Router>
      </Suspense>
    </>
  );
}

export default App;
