import Navbar from "./navbar/Navbar";
import AppRoutes from "../routes/AppRoutes";

const Main = () => {
  return (
    <div className="h-screen w-screen overflow-hidden flex">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default Main;
