import { memo, useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import './dostoevsky.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import useMediaQuery from '../../useMediaQuery'
const Dostoevsky =  memo(({Author,profile,data}) => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const isDesktop = useMediaQuery('(min-width: 960px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 960px)');
    const [nmbr, setNmbr] = useState(1);
    const [nmbr_slides, setNmbr_slides] = useState(1);
    useEffect(
        () => {
            if (isMobile) {
                setNmbr(1);
                setNmbr_slides(1.5);
            }
            if (isTablet) {
                setNmbr(2);
                setNmbr_slides(2.5);
            }
            if (isDesktop) {
                setNmbr(3);
                setNmbr_slides(3.5);
            }
        }, [isMobile, isTablet, isDesktop]
    )
  return (
    <div className='dostoevsky'>
        <div className="type">
        <h1>{Author}</h1>
        <LazyLoadImage src={profile}
        width={600} height={400}
        effect="blur"
        alt="Image Alt"
      />
        </div>
        <Swiper
        slidesPerView={nmbr_slides}
        spaceBetween={30}
        slidesPerGroup={nmbr}
        loop={false}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            data.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <a href="https://wa.me/+212771487686">
                        <div className="book" >
                            <LazyLoadImage className='img' src={item.profile}
                            width={'100%'} height={'100%'}
                            effect="blur"
                            alt="Image Alt"
                             />
                            <div className="book-info">
                            </div>
                        </div>
                        </a>
                    </SwiperSlide>
                )
            }
            )}
      </Swiper>
    </div>
  )
}
)
export default Dostoevsky;