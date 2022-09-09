import Footer from "./layout/Footer";
import Header from "./layout/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
