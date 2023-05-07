import { ReactNode } from "react";
import FooterIcon from "./footer-icon";
import { useScrollDirection } from "libs/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Layout({ title, subtitle, children }: LayoutProps) {
  const scrollDirection = useScrollDirection();
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto pt-14 p-6 leading-relaxed">
          <p className="text-gray-600 text-sm">{subtitle}</p>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </header>
      {/* <header className="flex justify-center items-center h-12 border-b w-full fixed top-0 bg-white">
        <h1 className="text-lg font-medium">{title}</h1>
      </header> */}
      <main className="mb-[85px] pb-12">{children}</main>
      <AnimatePresence initial={false}>
        {scrollDirection === "down" ? null : (
          <motion.nav
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 150 }}
            className="grid grid-cols-4 bg-white shadow-md bottom-3 left-0 right-0 px-4 w-[calc(100vw-24px)] rounded-full fixed max-w-xl mx-auto"
          >
            <FooterIcon id="home" />
            <FooterIcon id="trending" />
            <FooterIcon id="dm" />
            <FooterIcon id="profile" />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
