import Head from "next/head";
import { Nav } from "./Nav";

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout = ({ title = "Default Title", description = "Default Description", children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
};

export default Layout;
