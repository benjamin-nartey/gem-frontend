"use client";

// import { SchoolIcon, StarIcon, WorkflowIcon } from "lucide-react";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import { GiJetFighter, GiLovers } from "react-icons/gi";
import { SiGotomeeting } from "react-icons/si";
import { MdChurch } from "react-icons/md";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaStar } from "react-icons/fa";

const morningGloryIcon = {
  icon: <LiaPrayingHandsSolid />,
  iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
};

const kharisIcon = {
  icon: <GiLovers />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const cellMeetingIcon = {
  icon: <SiGotomeeting />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};

const breakthroughIcon = {
  icon: <GiJetFighter />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};
const sundayServiceIcon = {
  icon: <MdChurch />,
  iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
};

const starIcon = {
  icon: <FaStar />,
  iconStyle: { background: "rgb(16, 204, 82)", color: "#fff" },
};

const timeline = [
  {
    icon: morningGloryIcon,
    date: "Monday's 5:00am - 6:00am",
    title: "Morning Glory",
    subtitle: "Whatsapp and Zoom",
    desc: "Morning Glory is a an early morning prayer to to boost your day. Morning Glory! an hour a day keeps the devil away",
  },
  {
    icon: kharisIcon,
    date: "Wednesday's 6:30pm - 8:30pm",
    title: "Kharis Service",
    subtitle: "Sarbah Main Hall",
    desc: "Campus Dates, Relationship Seminars, How to choose a partner and how to choose right. Kharis service, don't slack!!",
  },
  {
    icon: cellMeetingIcon,
    date: "Thursday's 7:00pm - 8:30pm",
    title: "Cell Meeting",
    subtitle: "Ekklesia",
    desc: "A cell meeting is a small, informal gathering of individuals—often within a church.",
  },
  {
    icon: breakthroughIcon,
    date: "Friday's 6:30pm - 8:30pm",
    title: "Breakthrough Service",
    subtitle: "Athletic Oval",
    desc: "A breakthrough service is a special gathering focused on intense prayer, worship, and teaching.",
  },
  {
    icon: sundayServiceIcon,
    date: "Sunday's 8:00am - 12:00pm",
    title: "Sunday Service",
    subtitle: "Hatso",
    desc: "A Sunday service is a weekly worship gathering where believers come together to honor God through praise, prayer, teaching of the Word, and fellowship.",
  },

  { icon: starIcon },
];

export default function ServicesTimeline() {
  return (
    <VerticalTimeline>
      {timeline.map((t, i) => {
        const contentStyle =
          i === 0
            ? { background: "rgb(33, 150, 243)", color: "#fff" }
            : i === 1
            ? { background: "		rgb(220, 20, 60)", color: "#fff" }
            : i === 2
            ? { background: "rgb(251,21,232)", color: "#fff" }
            : i === 3
            ? { background: "rgb(221,22,2)", color: "#fff" }
            : i === 4
            ? { background: "rgb(148, 0, 211)", color: "#fff" }
            : undefined;
        const arrowStyle =
          i === 0 ? { borderRight: "7px solid  rgb(33, 150, 243)" } : undefined;

        return (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={contentStyle}
            contentArrowStyle={arrowStyle}
            date={t.date}
            {...t.icon}
          >
            {t.title ? (
              <>
                <h3 className="vertical-timeline-element-title">{t.title}</h3>
                {t.subtitle && (
                  <h4 className="vertical-timeline-element-subtitle">
                    {t.subtitle}
                  </h4>
                )}
                {t.desc && <p>{t.desc}</p>}
              </>
            ) : undefined}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
