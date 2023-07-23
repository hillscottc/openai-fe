import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import RapBattle from "./pages/RapBattle";
import Completer from "./pages/Completer";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/rap" element={<RapBattle />} />
      <Route path="/completer" element={<Completer />} />
      <Route path="products">
        <Route index element={<Products />} />
        <Route path=":productId" element={<Product />} />
      </Route>
    </BaseRoutes>
  );
}
