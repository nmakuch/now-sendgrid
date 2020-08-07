import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
