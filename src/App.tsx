import router from "./routes.tsx";
import Header from "@/layouts/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
      <Header />
      <Routes>
        {router.map(route => <Route key={route.path} path={route.path} element={route.element}/>)}
      </Routes>
    </>
  )
}

export default App
