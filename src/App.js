import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Products,
  PrivateRoute,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  AuthWrapper,
} from "./pages";
import { Sidebar, Navbar, Footer } from "./components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id" children={<SingleProduct />} />
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
