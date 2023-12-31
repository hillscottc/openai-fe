import {Route, Routes as BaseRoutes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ChatBot from "./pages/ChatBot";
import Completer from "./pages/Completer";
import About from "./pages/About";


export default function AppRoutes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home/>}/>
      <Route path="/chat" element={<ChatBot/>}/>
      {/*<Route path="/completer" element={<Completer/>}/>*/}
      <Route path="/about" element={<About/>}/>

      {/*<Route path="products">*/}
      {/*  <Route index element={<Products />} />*/}
      {/*  <Route path=":productId" element={<Product />} />*/}
      {/*</Route>*/}
    </BaseRoutes>
  );
}
