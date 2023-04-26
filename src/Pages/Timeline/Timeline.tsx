import "./Timeline.scss";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { arrowColor, lineColor, projectEvents, timelineEvents } from "./TimelineDataModel";
import { ScrollToTop } from "../../Utils/ScrollToTop";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { usePageView } from "../../Utils/Analytics";


export const Timeline = () => {
    useEffect(() => {
        ScrollToTop();
    }, []);
    
    usePageView("/timeline", "Timeline");
    
    return  <div className={`animate__animated animate__fadeIn page-content timeline`}>
                <h3 className="align-center margin-bottom-0">Work Experiences</h3>
                <p className="align-center margin-top-0">My carreer journey</p>
                <VerticalTimeline 
                        // layout="1-column-left" 
                        lineColor={lineColor}
                        animate={true}>
                            {timelineEvents.map(event => <TimelineEvent key={`${event.title}_${event.date}`} {...event} />)}
                </VerticalTimeline>
                <h3 className="align-center margin-bottom-0">My projects</h3>
                <p className="align-center margin-top-0">The full list of my experiences</p>
                <VerticalTimeline 
                        // layout="1-column-left" 
                        lineColor={lineColor}
                        animate={true}>
                            {projectEvents.map(event => <TimelineEvent key={`${event.title}_${event.date}`} {...event} />)}
                </VerticalTimeline> 
            </div>
}

export interface EventProps {
    title: string;
    date: string;
    position?: "left" | "right";
    content: React.ReactNode;
    icon: React.ReactNode;
    iconColor?: string;
    iconBackgroundColor?: string;
    contentBackgroundColor?: string;
    contentBorderColor?: string;
}

export const TimelineEvent = (props: EventProps) => {
    return <VerticalTimelineElement
                className=""
                contentStyle={{ backgroundColor: props.contentBackgroundColor, borderTop: `4px solid ${props.contentBorderColor}`}}
                contentArrowStyle={{ borderRight: `7px solid ${arrowColor}` }}
                date={props.date}
                position={props.position}
                iconStyle={{ background: props.iconBackgroundColor, color: props.iconColor }}
                icon={props.icon}>
                    <strong>{props.title}</strong>
                    {props.content && <div className="timeline-content">{props.content}</div>}
                </VerticalTimelineElement>
}