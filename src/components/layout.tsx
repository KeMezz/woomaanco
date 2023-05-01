import { ReactNode } from "react";
import FooterIcon from "./footer-icon";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <header className="flex justify-center items-center h-12 border-b w-full fixed top-0">
        <h1 className="text-lg font-medium">{title}</h1>
      </header>
      <main className="mt-12 mb-[85px]">{children}</main>
      <footer className="grid grid-cols-4 border-t w-full fixed bottom-0">
        <FooterIcon id="home" />
        <FooterIcon id="trending" />
        <FooterIcon id="dm" />
        <FooterIcon id="profile" />
      </footer>
    </>
  );
}
