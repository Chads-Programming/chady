import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="relative w-full z-10 flex flex-row flex-wrap justify-start px-2 gap-8 flex-1 h-[calc(100dvh-8rem)]">
      {children}
    </main>
  );
};

export default Layout;
