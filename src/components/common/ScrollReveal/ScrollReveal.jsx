import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

function ScrollReveal({
	children,
	variant = "fade-up",
	delay = 0,
	duration = 700,
	threshold = 0.15,
	once = true,
	className = "",
	style = {},
	as: Component = "div",
	...restProps
}) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		// Fallback for environments without IntersectionObserver
		if (!("IntersectionObserver" in window)) {
			setIsVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					if (once) {
						observer.unobserve(element);
					}
				} else if (!once) {
					setIsVisible(false);
				}
			},
			{
				threshold,
				rootMargin: "0px 0px -40px 0px",
			}
		);

		observer.observe(element);

		return () => {
			if (element) observer.unobserve(element);
		};
	}, [threshold, once]);

	const delayStyle = typeof delay === "number" ? `${delay}ms` : delay;
	const durationStyle = typeof duration === "number" ? `${duration}ms` : duration;

	const combinedStyle = {
		...style,
		transitionDelay: delayStyle,
		transitionDuration: durationStyle,
	};

	const combinedClassName = `scroll-reveal reveal-${variant} ${
		isVisible ? "is-revealed" : ""
	} ${className}`.trim();

	return (
		<Component
			ref={ref}
			className={combinedClassName}
			style={combinedStyle}
			{...restProps}
		>
			{children}
		</Component>
	);
}

export default ScrollReveal;
