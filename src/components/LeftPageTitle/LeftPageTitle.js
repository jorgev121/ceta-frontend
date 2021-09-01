import React from "react";
import { Container, Row } from "reactstrap";

export default function LeftPageTitle({
  // position,
  // icon,
  title,
  rightText,
  bottomText,
  info,
  link,
  // button,
}) {
  // console.log(title, rightText, bottomText, info, link);
  return (
    // justify-content-center
    // d-sm-flex align-items-center
    <>
      <Container>
        <Row>
          <div className="font-weight-normal mb-0 align-items-left">
            <h1 className="h4 mb-0 text-left py-3">
              {" "}
              {/** cambiar posicion tex-left*/}
              {title}
              {rightText ? (
                <span className="small text-secondary"> {rightText}</span>
              ) : (
                ""
              )}
            </h1>

            {bottomText ? (
              <div className="border-top py-3">
                <h6>
                  <p className="small text-secondary">{bottomText}</p>
                </h6>
              </div>
            ) : (
              ""
            )}

            {info ? (
              <div className="border-top py-3">
                <small>
                  <i className="fal fa-info-circle mr-1"></i>
                  {info}

                  {link ? <a href="!#"> Learn more</a> : ""}
                </small>
              </div>
            ) : (
              ""
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}
