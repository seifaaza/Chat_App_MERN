import NavMenu from "./navMenu/NavMenu";
import AppRoutes from "../routes/AppRoutes";

const Main = () => {
  return (
    <div className="h-screen w-screen bg-main overflow-hidden flex">
      <NavMenu />
      <AppRoutes />
    </div>
  );
};

export default Main;
