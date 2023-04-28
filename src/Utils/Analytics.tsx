import { useEffect } from "react";
import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
    const itt = localStorage.getItem('itt') || null;
    ReactGA.initialize("G-5K9K6PVVZC", {
        gaOptions: {
            userId: itt
        }
    });
};

export const usePageView = (page: string, title: string) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: page, title: title });
    }, []);
}

export const trackEvent = (category: string, action: string, label?: string) => {
    ReactGA.event({
        category: category,
        action: action,
        // label: "your label", // optional
        // value: 99, // optional, must be a number
        // nonInteraction: true, // optional, true/false
        // transport: "xhr", // optional, beacon/xhr/image
      });
}