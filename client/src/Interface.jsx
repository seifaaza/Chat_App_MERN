import Button from "@mui/material/Button";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import { Link } from "react-router-dom";

const Interface = () => {
  return (
    <div className="relative overflow-hidden bg-main w-full h-screen">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Your Chat, Your Rules.
            </h1>
            <p className="mt-4 text-xl font-light text-slate-300">
              Stay connected with friends and loved ones, share moments, and
              make memories through seamless, secure, and fun chat experiences.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-0 lg:opacity-50 rotate-6">
                        <img
                          src="/images/img6.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img5.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img4.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img3.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img2.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img7.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img1.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                component={Link}
                to="/home"
                className="btn"
                size="large"
                variant="contained"
                endIcon={<RocketLaunchRoundedIcon />}
              >
                Get Started !
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
