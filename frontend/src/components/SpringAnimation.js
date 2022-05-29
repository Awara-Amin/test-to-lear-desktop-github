import React from "react";
// https://www.youtube.com/watch?v=S8yn3-WpVV8
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Spring } from "react-spring";

export default function SpringAnimation() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -1000 }}
      to={{ opacity: 1, marginTop: 1000 }}
    >
      {(props) => (
        <Container style={props} className="marginForTop">
          <Row>
            <Col
              sm={5}
              className="d-flex justify-content-center align-center align-items-center w-20"
            >
              <h1 className="toMakeBold">
                ABOUT OUR COMPANY IN ERBIL-
                <span className="d-flex justify-content-center align-center align-items-center ">
                  KURDISTAN-IRAQ
                </span>
              </h1>
            </Col>

            <Col sm={7}>
              <p className="textJustify">
                Glossy Code is one of the leading website designing & website
                Development Company in Erbil. We believe to deliver quality
                services to our client. We provide a media through you can
                interact with latest industry trends. You can assure yourself
                for a world class web solutions and 24x7 support & quality based
                designing. Glossy Code is an Erbil based web designing and web
                development company, this company is a rapidly growing and
                trusted name in today's web design Industry in Kurdistan and
                whole Iraq. Glossy Code is a top Website designing company in
                Erbil. We provide affordable website designing,Best SEO, Mobile
                website(Responsive Website), E-commerce and website development
                solution. Glossy Code is a fast-growing company providing
                full-service web products and project development, including
                website management products,e-business site development;
                re-design development; creative services, graphic web design,
                project management and complete custom development.
              </p>
            </Col>
          </Row>
        </Container>
      )}
    </Spring>
  );
}

// import React from "react";
// import { Spring } from "react-spring";
// // import { Spring } from "react-spring/renderprops";

// export default function SpringAnimation() {
//   return (
//     <Spring
//       from={{ opacity: 0, marginTop: -100 }}
//       to={{ opacity: 1, marginTop: 0 }}
//       config={{ delay: 1000, duration: 1000 }}
//     >
//       {(props) => (
//         <div style={props}>
//           <div style={c1Style}>
//             <h1>Component 1</h1>
//             <p>
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
//               nobis adipisci eum minima deserunt at porro, veritatis officia
//               commodi itaque voluptates vel suscipit assumenda soluta ipsa
//               voluptatibus laudantium labore harum?
//             </p>
//             {/* <Spring
//               from={{ number: 0 }}
//               to={{ number: 10 }}
//               config={{ duration: 10000 }}
//             >
//               {(props) => (
//                 <div style={props}>
//                   <h1 style={counter}>{props.number.toFixed()}</h1>
//                 </div>
//               )}
//             </Spring> */}
//           </div>
//         </div>
//       )}
//     </Spring>
//   );
// }

// const c1Style = {
//   background: "steelblue",
//   color: "white",
//   padding: "1.5rem",
// };

// const counter = {
//   background: "#333",
//   textAlign: "center",
//   width: "100px",
//   borderRadius: "50%",
//   margin: "1rem auto",
// };
