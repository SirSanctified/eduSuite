import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type RootLayoutProps = {
  children: ReactNode
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <main className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center min-h-screen font-inter">
      {children}
      <Outlet />
    </main>
  )
}