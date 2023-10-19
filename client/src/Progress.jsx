import CircularProgress from "@mui/material/CircularProgress";

const Progress = () => {
  return (
    <div className="h-screen bg-main flex justify-center items-center">
      <CircularProgress sx={{ color: "#60f8ee" }} />
    </div>
  );
};

export default Progress;
