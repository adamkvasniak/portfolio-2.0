import { Fragment } from "react";
import TopBar from "./TopBar";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <Fragment>
      {/* optional fixed/floating switcher */}

      <TopBar />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
