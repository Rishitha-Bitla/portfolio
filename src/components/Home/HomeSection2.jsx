import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeAboutCard from "./HomeAboutCard";
import mypic from "../../Assets/mypic.jpeg";
import HomeSkills from "./HomeSkills";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import { useSpring, animated, config, useInView } from "react-spring";

const HomeSection2 = () => {
  const [homeAboutCardRef, homeAboutCardInView] = useInView({
    triggerOnce: true,
  });

  const [homeSkillsRef, homeSkillsInView] = useInView({
    triggerOnce: true,
  });

  const homeAboutCard = useSpring({
    opacity: homeAboutCardInView ? 1 : 0,
    transform: homeAboutCardInView
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100%, 0)",
    config: config.default,
  });

  const homeSkills = useSpring({
    opacity: homeSkillsInView ? 1 : 0,
    transform: homeSkillsInView
      ? "translate3d(0, 0, 0)"
      : "translate3d(0, 100%, 0)",
    config: config.default,
  });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <animated.div ref={homeAboutCardRef} style={homeAboutCard}>
            <HomeAboutCard
              imgPath={mypic}
              title="Meet the Creator"
              description="I am Rishitha Reddy Bitla, a Master's graduate in Data Analytics Engineering, with a B.Tech degree in Electronics and Communications Engineering. Although my academic background is in electronics, my true passion lies in software development. I am proficient in HTML, CSS, JS, ReactJS, NodeJS, ExpressJS, Bootstrap, SQL, R, Python, C, and C Sharp."
            />
          </animated.div>
        </Row>
        <Row>
          <Col md={12} className="home-about-skills ">
            <animated.div ref={homeSkillsRef} style={homeSkills}>
              <h1 className="heading-name-skills">Tools & Technologies</h1>
              <HeadingDivider color={"purple"} />

              <p className="home-about-body">
                I'm fimiliar with couple of Languages, Tools & Technologies. I
                mainly works in following Technologies
              </p>
              <HomeSkills />
            </animated.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HomeSection2;
