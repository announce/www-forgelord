import { Link } from "react-router";
import { ENV_VAR } from "~/env";
// import "swiper/css";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

export const Hero = () => {
  return (
    <div className="pb-8 lg:pb-16 xl:pb-24 2xl:pb-28">
      <div className="relative">
        <div className="absolute inset-0 -top-40 -z-2 h-[1600px] bg-[url(/images/home/hero-bg-gradient.png)] [background-size:200%_60%] bg-no-repeat opacity-15 [background-position-x:center] sm:[background-size:100%_100%] dark:opacity-10" />

        <div className="z-10 container mt-8 md:mt-12 lg:mt-16 2xl:mt-24">
          <div className="flex flex-col items-center">
            <div className="mt-4 max-w-[1000px] transition-all duration-1000 starting:scale-125 starting:opacity-0 starting:blur-sm">
              <h1 className="text-center text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
                Where you prepare for{" "}
                <span className="animate-background-shift from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400">
                  League
                </span>
              </h1>
            </div>

            <div className="mt-4 max-w-[750px] transition-all duration-1000 sm:mt-6 xl:mt-8 starting:opacity-0 starting:blur-sm">
              <h2 className="text-center max-sm:text-sm md:text-lg">
                See how others prepare for League, and share your own with the community.
              </h2>
            </div>
            <div className="mt-6 flex items-center gap-2.5 transition-all delay-300 duration-1000 sm:gap-5 xl:mt-10 starting:opacity-0 starting:blur-sm">
              <Link to={`${ENV_VAR.VITE_APP_WEB_ENDPOINT}/dashboard?utm_source=www-hero`} target="_blank" className="btn btn-primary btn-wide">
                <span className="iconify ri--user-add-fill size-5 sm:size-5.5" />
                <div className="text-start">
                  <p className="text-sm/none">Create your account</p>
                  <p className="text-primary-content/70 mt-px text-[11px]/none">and start to contribute!</p>
                </div>
              </Link>
              {/* <Link
                to={`${ENV_VAR.VITE_APP_WEB_ENDPOINT}/feed?utm_source=www-hero`}
                className="btn btn-neutral btn-lg gap-3 !border-transparent text-base dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black">
                <span className="iconify ri--fire-fill size-5 sm:size-5.5" />
                Top community preps
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-8 flex scroll-mt-36 justify-center overflow-visible transition-all delay-1500 duration-1000 md:mt-12 xl:mt-16 starting:opacity-0"
        id="demo">
      </div>
      <div className="mt-20 text-center md:mt-12">
        <p className="text-base-content/60 font-medium">Top Contributors</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 md:gap-6 2xl:gap-8">
          <div className="avatar tooltip h-10" data-tip="User#20">
            <div className="bg-base-200 mask mask-circle">
              <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/20.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="avatar tooltip h-10" data-tip="User#21">
            <div className="bg-base-200 mask mask-circle">
              <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/21.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="avatar tooltip h-10" data-tip="User#22">
            <div className="bg-base-200 mask mask-circle">
              <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/22.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="avatar tooltip h-10" data-tip="User#23">
            <div className="bg-base-200 mask mask-circle">
              <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/23.jpg" alt="Avatar" />
            </div>
          </div>
          <div className="avatar tooltip h-10" data-tip="User#24">
            <div className="bg-base-200 mask mask-circle">
              <img src="https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/24.jpg" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
