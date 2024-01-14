import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context/appContext";
import { router } from "./utils/router";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
