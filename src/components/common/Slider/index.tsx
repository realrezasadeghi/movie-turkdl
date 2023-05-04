import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type TSliderProps<T> = {
    items: T[];
    options?: EmblaOptionsType;
    renderItem: (item: T) => React.ReactNode;
}

export default function Slider<T>({ items, options, renderItem }: TSliderProps<T>) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>();
    const [emblaRef, emblaApi] = useEmblaCarousel({ direction: 'rtl', loop: true, ...options })

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {items.map((slide, index) => (
                        <React.Fragment key={index}>{renderItem(slide)}</React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

