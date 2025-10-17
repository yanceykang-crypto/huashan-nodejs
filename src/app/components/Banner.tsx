import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";
import { Image } from "@heroui/react";
import { bannerConfig } from "@/app/config/banner";
import { useCallback, useRef } from "react";
const Banner = () => {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);
  const onAutoplayTimeLeft = useCallback(
    (swiper: SwiperClass, time: number, progress: number) => {
      if (progressContent?.current) {
        progressCircle?.current?.style.setProperty("--progress", `${progress}`);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      }
    },
    [progressContent]
  );
  return (
    <Swiper
      className=" w-full swiper-super-flow"
      spaceBetween={30}
      centeredSlides={true}
      height={400}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      {bannerConfig.map((item, index) => (
        <SwiperSlide key={index} className="h-full">
          <Image
            src={item.src}
            className="rounded-none !w-dvw h-full object-cover cursor-pointer"
            alt={item.alt}
            onClick={() => {
              window.location.href = "/contact";
            }}
          />
        </SwiperSlide>
      ))}
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
};
export default Banner;
