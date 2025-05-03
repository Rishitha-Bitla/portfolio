import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import aboutMe from "../../Assets/aboutMe.svg";
import { useSpring, animated, config, useInView } from "react-spring";

const AboutMyStory = () => {
  const [homeMyStoryRef, homeMyStoryInView] = useInView({
    triggerOnce: true,
  });
  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });
  const homeMyStorySection = useSpring({
    opacity: homeMyStoryInView ? 1 : 0,
    transform: homeMyStoryInView
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100%, 0)",
    config: config.default,
  });

  const textAnimation = useSpring({
    opacity: textInView ? 1 : 0,
    transform: textInView ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)",
    config: config.default,
  });

  return (
    <Container fluid>
      <h2 className="heading-mystory"> My Story </h2>
      <HeadingDivider color={"white"} />
      <Row style={{ justifyContent: "left", position: "relative" }}>
        <Col md={8}>
          <animated.div className="text" ref={textRef} style={textAnimation}>
            <p className="mystory">
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <span style={{ color: "#c770f0" }}>Hello there,</span> I'm Rishitha
              Reddy Bitla. I'm driven by a strong passion for transforming data into meaningful insights that support smart, informed decisions. Currently pursuing a Master’s in Data Analytics Engineering at George Mason University, I’ve built a solid foundation in data analysis, visualization, and business intelligence through academic coursework and hands-on projects.
              With practical skills in <span style={{ color: "#c770f0" }}>
                {" "}Python, SQL, R, Power BI, and data modeling </span>{" "}, I’ve tackled real-world challenges such as predicting employee attrition, analyzing global financial trends, and building NLP models for emotion detection. I enjoy designing intuitive dashboards, streamlining data workflows, and extracting key patterns from complex datasets
              <div className="mystory-div"></div>
              <div className="mystory-div"></div>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, I'm on the
              lookout for an opportunity as a{" "}
              <span style={{ color: "#c770f0" }}>
                Data Analyst
              </span>{" "}
              to further my career in this dynamic field.
            </p>
          </animated.div>
        </Col>
        <Col md={4} className="mystory-image">
          <animated.div
            className="text"
            ref={homeMyStoryRef}
            style={homeMyStorySection}
          >
            <img src={aboutMe} alt="about" className="img-about" />
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMyStory;
