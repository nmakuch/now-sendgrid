import Navbar from "./Navbar";

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="antialiased text-gray-900 flex items-center justify-center min-h-screen">
        {children}
      </div>
    </div>
  );
};
