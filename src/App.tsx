import { RootLayout } from "./components/layouts/RootLayout";
import Home from "./pages/admin/home";
// import Login from "./components/auth/login";

function App() {
  return (
      <RootLayout>
        <div className="w-full min-h-screen">
          {/* <Login /> */}
          <Home />
        </div>
      </RootLayout>
  );
}

export default App;
