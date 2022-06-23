import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useSwipeable } from "react-swipeable";

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = children.length - 1;
    } else if (newIndex >= children.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      className="w-[380px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex">
        <div className="hidden lg:flex items-center min-w-[22px]">
          <button onClick={() => updateIndex(activeIndex - 1)}>
            <StaticImage
              alt=""
              src="../../images/carousel-left.png"
              quality={100}
              width={22}
            ></StaticImage>
          </button>
        </div>
        <div {...handlers} className="overflow-hidden">
          <div
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            className="transition-all duration-300 whitespace-nowrap"
          >
            {children}
          </div>
        </div>
        <div className="hidden lg:flex items-center min-w-[22px]">
          <button onClick={() => updateIndex(activeIndex + 1)}>
            <StaticImage
              alt=""
              src="../../images/carousel-right.png"
              quality={100}
              width={22}
            ></StaticImage>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {children.map((c, i) => (
          <button key={i} onClick={() => updateIndex(i)}>
            <div
              className={`${
                i === activeIndex
                  ? "bg-base-blue border-[3px] border-stroke"
                  : `bg-stroke`
              }  rounded-full w-3 h-3 `}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
