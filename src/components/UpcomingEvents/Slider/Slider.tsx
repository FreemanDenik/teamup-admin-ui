import classNames from "classnames";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import s from "./Slider.module.scss";
interface SliderProps<T> {
  data: T[];
  renderItem(dataElement: T): ReactElement;
  width: number;
  height: number;
  gap: number;
}

function Slider<T>({
  data,
  renderItem,
  width,
  height,
  gap,
}: SliderProps<T>): ReactElement {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prev = () => {
    setCurrentIndex((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  };

  const next = () => {
    setCurrentIndex((prev) => {
      return prev < data.length - 1 ? prev + 1 : prev;
    });
  };

  const checkNavigation = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      switch (key) {
        case "ArrowLeft": {
          prev();
          break;
        }

        case "ArrowRight": {
          next();
          break;
        }

        default:
          break;
      }
    },
    [data]
  );

  useEffect(() => {
    window.addEventListener("keydown", checkNavigation);

    return () => {
      console.log("remove listener on keydown");
      window.removeEventListener("keydown", checkNavigation);
    };
  }, [checkNavigation]);

  return (
    <>
      <div
        className={s.slider}
        style={{
          height,
        }}
      >
        <div
          className={s.slider__carousel}
          style={{
            transform: `translateX(-${(width + gap * 2) * currentIndex}px)`,
            marginLeft: `calc(50% - ${width / 2}px)`,
            gap: `${gap}px`,
          }}
        >
          {data.map((el, index) => {
            return (
              <div
                className={classNames(s.slide, {
                  [s.slide_active]: currentIndex === index,
                })}
                style={{
                  width,
                  height,
                }}
                key={JSON.stringify(el)}
                onClick={() => setCurrentIndex(index)}
              >
                {renderItem(el)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Slider;
