import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Signup.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import img3 from "../Gokul page/img3.avif";
function Signup() {
  return (
    <div>
      <Container>
        <Row className="pt-5 pb-3 mt-lg-5 mt-md-5 px-2">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="bg-light mx-auto order-sm-2 order-xs-2 order-md-1 order-lg-1 order-xl-1 order-xll-1  order-2 m-0 p-0 card img"
          >
            <div class="col-8 mt-5 mb-5 mx-auto">
              <h1 className="text-center pb-1">SING UP</h1>
              <div className="col-5 mx-auto">
                <div class="row mt-1 mb-4 ">
                  <div class="col-4 ">
                    <FcGoogle size={30} />
                  </div>
                  <div class="col-4 bor">
                    <BsFacebook size={30} />
                  </div>
                  <div class="col-4 bor">
                    <AiFillTwitterCircle size={33} />
                  </div>
                </div>
              </div>
              <div class="box ps-3 mt-3">
                <i className="fa fa-user align-self-center"></i>
                <input type="text" className="form" placeholder="Name" />
              </div>
              <div class="box ps-3 mt-3">
                <i className="fa fa-envelope align-self-center"></i>
                <input
                  type="text"
                  className="form"
                  placeholder="E-mail Addres"
                />
              </div>
              <div class="box ps-3  mt-3">
                <i className="fa fa-key align-self-center"></i>
                <input type="text" className="form" placeholder="Password" />
              </div>
              <div className="ps-4 pt-2">
                <input type="checkbox" />
                <span className="ps-4 ">
                  I read and Agree Terms & Conditions
                </span>
              </div>
              {/* <div class="d-fle x align-items-center pt-2 "> <a href="" class=" ms-auto under">Forget password?</a></div> */}
              <div class=" mt-3 mb-3 text-center mb-2">
                <Button className="btncolor" size="lg">
                  CREATE ACCOUNT{" "}
                </Button>{" "}
              </div>
            </div>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className=" img mx-auto order-sm-1 order-xs-1 order-md-2 order-lg-2 order-xl-2 order-xll-2 m-0 p-0 order-1 "
          >
            <img src={img3} className="img" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
