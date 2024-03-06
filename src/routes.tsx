import Main from "@/pages/Main/Main.tsx";
import Products from "@/pages/Products/Products.tsx";

const router = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/products/:type",
    element: <Products />,
  },
]

export default router
