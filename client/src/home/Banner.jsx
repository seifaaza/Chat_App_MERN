import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Banner = () => {
  return (
    <div className="banner relative isolate flex justify-center items-center gap-6 overflow-hidden px-8 py-2  ">
      <div className="banner-title flex items-center">
        <p className="text-sm leading-6 text-mainDark flex gap-5 items-center">
          <strong className="font-semibold text-lg">
            Stand For Palestine 🇵🇸
          </strong>

          <span className="text-sm font-semibold">
            Be the light for the palestinian victims
          </span>
        </p>
      </div>

      <Button
        href="https://donate.unrwa.org/-landing-page/en_EN"
        target="_blank"
        className="btn banner-btn"
        size="medium"
        variant="filled"
        endIcon={<FavoriteIcon />}
      >
        donate
      </Button>
    </div>
  );
};

export default Banner;
