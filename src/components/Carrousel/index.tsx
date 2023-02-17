import { CarrouselStyled } from "./styles";

import { useCallback, useEffect, useRef, useState } from "react";

interface IPropsCarrousel {
  children: React.ReactNode;
  carrouselTitle: string;
  gapBetweenItems?: string;
  autoScroll?: boolean;
  autoScrollWidth?: number;
  autoScrollTime?: "slow" | "medium" | "fast" | "flash";
}

const Carrousel = ({
  children,
  carrouselTitle,
  gapBetweenItems,
  autoScroll = false,
  autoScrollWidth = 350,
  autoScrollTime = "medium",
}: IPropsCarrousel) => {
  const [isDragging, setIsDragging] = useState(false);

  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const carouselRef = useRef<any>(null);

  //Funções para scroll lateral utilizando o mouse - desktop
  //----------------------------------------------------------------------------
  const handleMouseDown = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if (!isDragging) return;
    const x = e.pageX - carouselRef.current!.offsetLeft;
    const walk = (x - startX) * 1; //Ajustar velocidade do scroll de arrastar lateralmente com o mouse
    carouselRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  //----------------------------------------------------------------------------

  //Funções para scroll lateral utilizando o toque na tela - mobile
  //----------------------------------------------------------------------------
  const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current!.offsetLeft);
    setScrollLeft(carouselRef.current!.scrollLeft);
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLUListElement>) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - carouselRef.current!.offsetLeft;
      const walk = (x - startX) * 1; //Ajustar velocidade do scroll de arrastar lateralmente com o toque
      carouselRef.current!.scrollLeft = scrollLeft - walk;
    },
    [isDragging, scrollLeft, startX]
  );

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchCancel = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      carousel.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleTouchMove]);

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    const element = carouselRef.current;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    if (element.scrollLeft === maxScrollLeft) {
      return;
    } else if (autoScroll) {
      interval = setInterval(
        () => {
          if (element) {
            element.scrollBy({
              left: autoScrollWidth,
              behavior: "smooth",
            });
          }
        },
        autoScrollTime === "slow"
          ? 4000
          : autoScrollTime === "medium"
          ? 2000
          : autoScrollTime === "fast"
          ? 1000
          : 1000
      );
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, autoScrollWidth, autoScrollTime]);
  //----------------------------------------------------------------------------
  return (
    <CarrouselStyled gapBetweenItems={gapBetweenItems}>
      <h2 className="carrouselTitle">{carrouselTitle}</h2>
      <ul
        className="ListItems"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchCancel}
      >
        {children}
      </ul>
    </CarrouselStyled>
  );
};

export default Carrousel;
