import React from "react";
import { NextButton, PrevButton } from "./CarouselArrowButtons";
import { DotButton } from "./CarouselDotButton";

interface CarouselControlsProps {
  onClick: () => void;
  onDotButtonClick: (index: number) => void;
  onNextButtonClick: () => void;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  scrollSnaps: number[];
  selectedIndex: number;
}

export const CarouselControls = ({
  onClick,
  onDotButtonClick,
  onNextButtonClick,
  prevBtnDisabled,
  nextBtnDisabled,
  scrollSnaps,
  selectedIndex,
}: CarouselControlsProps) => {
  return (
    <div className="embla__controls">
      <PrevButton onClick={onClick} disabled={prevBtnDisabled} />
      <div className="embla__dots">
        {scrollSnaps.map((_, index: number) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
          />
        ))}
      </div>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};
