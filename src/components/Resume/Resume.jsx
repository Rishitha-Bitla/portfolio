// import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import pdf from "../../Assets/RISHITHA_REDDY_BITLA.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import "../../style.css";
// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import HeadingDivider from "../UI-Elements/HeadingDivider";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// const updatedResumeGitLink =
//   "https://drive.google.com/file/d/14tvAsUhYw3KY_dqNRa9_F1SXW9Gjtwt2/view?usp=sharing";

// const Resume = () => {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="section-style">
//         <h2 className="heading-mystory"> My Resume </h2>
//         <HeadingDivider color={"white"} />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Col xs={12}>
//             <div className="resume-message">
//               <div className="resume-message-greet"> Hello there,</div>
//               Thank you for visiting my profile. If you are impressed with my
//               profile and skills, please let me know. You can download my
//               current Resume/CV below. If it is not updated, you can always find
//               my updated resume in my Git Resume Repo. Click on the "Updated CV"
//               button to access my most recent resume.
//               <div className="resume-message-dec">Sincerely,</div>
//               <div className="resume-message-dec">Rishitha Reddy Bitla</div>
//             </div>
//           </Col>
//         </Row>
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Col md={2} sm={2} className="resume-button">
//             {" "}
//             <Button
//               variant="primary"
//               href={pdf}
//               target="_blank"
//               style={{ maxWidth: "250px" }}
//             >
//               &nbsp;
//               <AiOutlineDownload />
//               &nbsp;&nbsp;Download CV&nbsp;
//             </Button>
//           </Col>
//           <Col md={2} sm={2} className="resume-button">
//             {" "}
//             <Button
//               variant="primary"
//               href={updatedResumeGitLink}
//               target="_blank"
//               style={{ maxWidth: "250px" }}
//             >
//               &nbsp; <FaExternalLinkAlt />
//               &nbsp; &nbsp;Updated CV&nbsp;&nbsp;
//             </Button>
//           </Col>
//         </Row>

//         <Row className="resume">
//           <Document file={pdf} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Resume;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import "../../style.css";
import HeadingDivider from "../UI-Elements/HeadingDivider";

// Replace this with your hosted PDF URL (from Google Drive or GitHub)
const pdf = "https://drive.google.com/file/d/1TCih2AYFpxzBAPDy10pqTEQXSeVlFu-e/view?usp=sharing";
const updatedResumeGitLink =
  "https://drive.google.com/file/d/1TCih2AYFpxzBAPDy10pqTEQXSeVlFu-e/view?usp=sharing";

const Resume = () => {
  return (
    <div>
      <Container fluid className="section-style">
        <h2 className="heading-mystory"> My Resume </h2>
        <HeadingDivider color={"white"} />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col xs={12}>
            <div className="resume-message">
              <div className="resume-message-greet"> Hello there,</div>
              Thank you for visiting my profile. If you are impressed with my
              profile and skills, feel free to reach out to me. You can download
              my current resume below. If it is not updated, you can always find
              my most recent resume by clicking on the "Updated CV" button.
              <div className="resume-message-dec">Sincerely,</div>
              <div className="resume-message-dec">Rishitha Reddy Bitla</div>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={2} sm={2} className="resume-button">
            <Button
              variant="primary"
              href={pdf} // Hosted PDF resume link here
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp; <AiOutlineDownload />
              &nbsp;&nbsp;Download Resume&nbsp;
            </Button>
          </Col>
          <Col md={2} sm={2} className="resume-button">
            <Button
              variant="primary"
              href={updatedResumeGitLink} // Updated Resume link
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              &nbsp; <FaExternalLinkAlt />
              &nbsp; &nbsp;Updated Resume&nbsp;&nbsp;
            </Button>
          </Col>
        </Row>

        <Row className="resume">
          {/* You can display the resume PDF here if you want it visible in the browser */}
          {/* <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document> */}
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
