import Nav from "./Nav";
import HeadInfo from "../components/HeadInfo";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
