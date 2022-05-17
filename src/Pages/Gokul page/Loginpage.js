import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./loginpage.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import img3 from "./img3.avif";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <>
      <Container>
        <Row className="pt-5 pb-3 mt-lg-5 mt-md-5 mx-2">
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
              <h1 className="text-center pb-1">LOGIN</h1>
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
              <div class="d-flex align-items-center pt-2 ">
                <Link to="#" class=" ms-auto under">
                  Forget password?
                </Link>
              </div>
              <div class=" mt-3 mb-3 text-center">
                <Button className="btncolor" size="lg">
                  Login
                </Button>
              </div>
              <h6 className="text-center under mt-1 mb-2">
                <Link to="#" class=" ms-auto under">
                  Don't have an account? signup
                </Link>
              </h6>
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
    </>
  );
}

export default Loginpage;
