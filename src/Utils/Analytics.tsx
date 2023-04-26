import { useEffect } from "react";
import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
    ReactGA.initialize("G-5K9K6PVVZC");
};

export const usePageView = (page: string, title: string) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: page, title: title });
    }, []);
}