import { GlobalStyles } from "./Styles/GlobalStyles";
import { MainRoutes } from "./Routes";
import { UserProvider } from "./contexts/UserContext";
import { ProductsProvider } from "./contexts/ProductsContext";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <UserProvider>
        <ProductsProvider>
          <MainRoutes />
        </ProductsProvider>
      </UserProvider>

      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
export default App;