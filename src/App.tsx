import { RootLayout } from "./components/layouts/RootLayout";
import Dashboard from "./components/students/Dashboard";
// import Login from "./components/auth/login";

function App() {
  return (
      <RootLayout>
        <div className="w-full min-h-screen px-4 sm:px-6 md:px-8">
          {/* <Login /> */}
          <Dashboard />
        </div>
      </RootLayout>
  );
}

export default App;
