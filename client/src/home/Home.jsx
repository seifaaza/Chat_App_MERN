import mainStore from "../store/mainStore";
import Header from "./Header";
import Navbar from "../navbar/Navbar";
import Banner from "./Banner";

export default function Home() {
  const store = mainStore();

  return (
    <div className="relative overflow-hidden bg-main w-full h-screen">
      <Banner />
      <Navbar />
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <Header />
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
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 sm:opacity-0 lg:opacity-50 rotate-6">
                        <img
                          src="/images/img6.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img5.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img4.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img3.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img2.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img7.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-72 w-52 overflow-hidden rounded-lg opacity-50 rotate-6">
                        <img
                          src="/images/img1.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
