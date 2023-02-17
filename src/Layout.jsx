import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
