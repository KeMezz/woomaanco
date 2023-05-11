import { ReactNode } from "react";
import FooterIcon from "./footer-icon";
import { useScrollDirection } from "libs/useScrollDirection";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface LayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  hideNav?: boolean;
  canGoBack?: boolean;
}

export default function Layout({
  title,
  subtitle,
  children,
  hideNav,
  canGoBack,
}: LayoutProps) {
  const scrollDirection = useScrollDirection();
  const { back } = useRouter();
  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="flex h-14 items-center pl-6 pt-2">
          {canGoBack ? (
            <button
              onClick={back}
              className="hover:bg-rose-100 hover:text-rose-400 transition-colors w-8 h-8 rounded-full flex justify-center items-center -ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          ) : null}
        </div>
        <div className="max-w-2xl mx-auto pl-6 pb-6 leading-relaxed">
          <p className="text-gray-600 text-sm">{subtitle}</p>
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </header>
      {/* <header className="flex justify-center items-center h-12 border-b w-full fixed top-0 bg-white">
        <h1 className="text-lg font-medium">{title}</h1>
      </header> */}
      <main className="mb-[85px] pb-12">{children}</main>
      {!hideNav ? (
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
      ) : null}
    </>
  );
}
