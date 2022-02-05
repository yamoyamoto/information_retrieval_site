import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div style={{ backgroundColor: "#000055", color: "#C0C0C0" }}>
      <Head>
        <title>Yamoyamoto's Site</title>
      </Head>

      <header style={{ position: "fixed", top: "0", right: "50px" }}>
        <div style={{ textAlign: "center" }}>
          <Link href="/">
            <Button>
              <HomeIcon style={{ fontSize: "50px" }}></HomeIcon>
            </Button>
          </Link>
        </div>
      </header>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {children}
      </div>

      <footer></footer>
    </div>
  );
};

export default Layout;
