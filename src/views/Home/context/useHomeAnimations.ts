import { useLayoutEffect, useRef } from "react";
import { animationParams } from "helpers";

import { gsap } from "gsap";


export const useHomeAnimations = () => {
  const aboutSectionContainerRef = useRef(null);
  const headerRightImageRef = useRef(null);
  const headerLeftImageRef = useRef(null);
  const headerContainerRef = useRef(null);
  const headerParagraphRef = useRef(null);
  const headerHeadingRef = useRef(null);
  const headerButtonRef = useRef(null);


  // Header animations
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        headerContainerRef.current,
        {
          y: "+=300",
        },
        {
          y: 0,
          duration: animationParams.duration,
          opacity: 1,
        }
      );

      gsap.fromTo(
        headerHeadingRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          delay: .25
        }
      );

      gsap.fromTo(
        headerParagraphRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5
        }
      );

      gsap.fromTo(
        headerButtonRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          delay: 0.75
        }
      );

      gsap.fromTo(
        headerLeftImageRef.current,
        {
          y: "+=25",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: headerLeftImageRef.current,
            start: "top bottom",
          },
        },
        
      );

      gsap.fromTo(
        headerRightImageRef.current,
        {
          y: "+=25",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: headerRightImageRef.current,
            start: "top bottom",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // About section
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        aboutSectionContainerRef.current,
        {
          y: "+=50",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: animationParams.duration,
          scrollTrigger: {
            trigger: headerRightImageRef.current,
            start: "bottom bottom",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);


  return {
    headerContainerRef,
    headerParagraphRef,
    headerRightImageRef,
    headerLeftImageRef,
    headerHeadingRef,
    headerButtonRef,
    aboutSectionContainerRef,
   
  };
};