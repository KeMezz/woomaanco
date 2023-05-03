import { ReactNode } from "react";
import FooterIcon from "./footer-icon";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <header className="flex justify-center items-center h-12 border-b w-full fixed top-0 bg-white">
        <h1 className="text-lg font-medium">{title}</h1>
      </header>
      <main className="mt-12 mb-[85px]">{children}</main>
      <nav className="grid grid-cols-4 bg-white shadow-md bottom-3 left-0 right-0 px-4 w-[calc(100vw-24px)] rounded-full fixed max-w-xl mx-auto">
        <FooterIcon id="home" />
        <FooterIcon id="trending" />
        <FooterIcon id="dm" />
        <FooterIcon id="profile" />
      </nav>
    </>
  );
}
