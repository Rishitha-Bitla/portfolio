import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import HeadingDivider from "../UI-Elements/HeadingDivider";

const AboutMyJourney = () => {
  return (
    <div className="aboutMyStory">
      <h2 className="heading-mystory"> My Journey </h2>
      <HeadingDivider color={"white"} />
      <VerticalTimeline
        lineColor="#3e1454"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e1454", color: "#fff" }}
          icon={<i className="fa-solid fa-building-columns about-icon"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology in ECE
          </h3>
          <br />
          <h3 className="vertical-timeline-element-title">Score: 8.89 CGPA</h3>
          <p> CVR College of Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2025"
          iconStyle={{ background: "#3e1454", color: "#fff" }}
          icon={<i className="fa-solid fa-building-columns about-icon"></i>}
        >
          <h3 className="vertical-timeline-element-title">
            Master's Degree
          </h3>
          <br />
          <h3 className="vertical-timeline-element-title">Score: 3.93 CGPA</h3>

          <p>George Mason University</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default AboutMyJourney;
