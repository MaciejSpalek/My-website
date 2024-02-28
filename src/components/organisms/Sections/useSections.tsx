import "react-alice-carousel/lib/alice-carousel.css";
import { useIsMobileView } from "hooks";
import {  useLayoutEffect, useRef, useState } from "react";
import { DotItem, ImageWrapper, SlideHeading } from "./Sections.styled";
import Image from "next/image";
import { animationParams } from "helpers";
import { gsap } from "gsap";

export const useSections = (sections) => {
  const sectionsCarouselContainerRef = useRef(null);
  const sectionsCarouselBarRef = useRef(null);
  const sectionsContainerRef = useRef(null);
  const sectionsHeadingRef = useRef(null);
  const sectionsListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobileView = useIsMobileView();
  const carouselRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (carouselRef.current) {
      carouselRef.current.slideTo(index);
    }
  };

  const dots = sections?.map((_, index) => (
    <DotItem
      key={index}
      isActive={currentIndex === index}
      onClick={() => handleDotClick(index)}
    />
  ));

  const renderCarouselSlides = () =>
    sections.map(({ id, image, title }) => (
      <ImageWrapper key={id}>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </ImageWrapper>
    ));

  const carouselSlides = renderCarouselSlides();

  const handleNextSlide = () => {
    if (carouselRef.current) {
      if (currentIndex >= sections.length - 1) {
        setCurrentIndex(0);
        carouselRef.current.slidePrev();
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        carouselRef.current.slideNext();
      }
    }
  };

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      if (currentIndex <= 0) {
        setCurrentIndex(sections.length);
        carouselRef.current.slideNext();
      } else {
        setCurrentIndex((prevIndex) => prevIndex - 1);
        carouselRef.current.slidePrev();
      }
    }
  };

   // Sections
   useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionsContainerRef.current,
        {
          y: "+=300",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: sectionsContainerRef.current,
            start: "-300px bottom",
          },
        }
      );

      gsap.fromTo(
        sectionsHeadingRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: sectionsHeadingRef.current,
            start: "-100px bottom",

          },
        }
      );

      gsap.fromTo(
        sectionsListRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: sectionsListRef.current,
            start: "-100px bottom",

          },
        }
      );

      gsap.fromTo(
        sectionsCarouselBarRef.current,
        {
          y: "+50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: sectionsCarouselBarRef.current,
            start: "-300px bottom",

          },
        }
      );

      gsap.fromTo(
        sectionsCarouselContainerRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: sectionsCarouselContainerRef.current,
            start: "top bottom",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);


  return {
    handlePrevSlide,
    handleNextSlide,
    setCurrentIndex,
    carouselSlides,
    currentIndex,
    isMobileView,
    sectionsCarouselContainerRef,
    sectionsCarouselBarRef,
    sectionsContainerRef,
    sectionsHeadingRef,
    sectionsListRef,
    carouselRef,
    dots,
  };
};
