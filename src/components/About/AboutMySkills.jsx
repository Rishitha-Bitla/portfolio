// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { Container, Row, Col } from "react-bootstrap";
// import HeadingDivider from "../UI-Elements/HeadingDivider";

// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiJava,
//   DiMysql,
//   DiHtml5,
//   DiCss3Full,
//   DiBootstrap,
//   DiEclipse,
//   DiGit,
//   DiGithub,
//   DiWordpress,
// } from "react-icons/di";

// const AboutMySkills = () => {
//   const responsive = {
//     0: {
//       items: 2,
//       itemsFit: "contain",
//     },
//     568: {
//       items: 3,
//       itemsFit: "contain",
//     },
//     1024: {
//       items: 5,
//       itemsFit: "contain",
//     },
//   };

//   const items = [
//     <DiHtml5 />,
//     <DiCss3Full />,
//     <DiBootstrap />,
//     <DiJavascript1 />,
//     <DiReact />,
//     <DiNodejs />,
//     <DiJava />,
//     <DiMysql />,
//     <DiMongodb />,
//     <DiEclipse />,
//     <DiGit />,
//     <DiGithub />,
//     <DiWordpress />,
//   ].map((item) => <div className="tech-icons-myskill"> {item} </div>);

//   return (
//     <Container>
//       <Row style={{ paddingTop: "80px" }}>
//         <h2 className="heading-mystory"> My Skills </h2>
//         <HeadingDivider color={"white"} />
//         <Col style={{ paddingTop: "60px" }}>
//           <AliceCarousel
//             mouseTracking
//             items={items}
//             disableButtonsControls
//             responsive={responsive}
//             autoPlay
//             autoPlayInterval={2000}
//             infinite
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AboutMySkills;


import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";

const AboutMySkills = () => {
  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5,
      itemsFit: "contain",
    },
  };

  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "MySQL",
    "HTML5",
    "CSS",
    "FastAPI",
    "Machine Learning",
    "AWS",
    "C",
    "C Sharp",
    "Power Bi",
    "SQL",
    "R"
  ];

  return (
    <Container>
      <Row style={{ paddingTop: "80px" }}>
        <h2 className="heading-mystory"> My Skills </h2>
        <HeadingDivider color={"white"} />
        <Col style={{ paddingTop: "60px" }}>
          <AliceCarousel
            mouseTracking
            items={skills.map((skill) => (
              <div className="tech-icons-myskill">
                <p className="skill-text">{skill}</p>
              </div>
            ))}
            disableButtonsControls
            responsive={responsive}
            autoPlay
            autoPlayInterval={2000}
            infinite
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMySkills;
