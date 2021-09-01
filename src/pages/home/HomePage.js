import "./HomePage.css";
import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Media,
  CardHeader,
} from "reactstrap";
import * as myConstant from "./../../constants/Constants";
import img from "./../../assets/img.png";
import Filter from "../../components/Filter";
import { Link } from "react-router-dom";

function HomePage({ togleDisabledFilter }) {
  //Hook to save todos
  const [data, setData] = useState();

  //request data
  const fetchAPI = async () => {
    const response = await fetch(myConstant.API_URL + "db");
    const responseJSON = await response.json();
    setData(responseJSON);
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  useEffect(() => {
    togleDisabledFilter(true);
  }, [togleDisabledFilter]);
  return (
    <div>
      <section>
        <Row className="col-sm-12 col-md-6 offset-md-3">
          <Col>
            <Filter />
          </Col>
        </Row>
      </section>

      {/*General Content */}
      <Row className="card-row">
        <Col sm="6">
          <Card body>
            <CardHeader>Latest Blocks</CardHeader>
            <ListGroup>
              {!data
                ? "Cargando.."
                : data.blocks.map((data, index) => {
                    return (
                      <ListGroupItem
                        className="justify-content-between"
                        key={data.blockCount}
                      >
                        <Row>
                          <Col>
                            <Media left bottom href="#" sm="1">
                              <Media object src={img} />
                            </Media>
                          </Col>
                          <Col>
                            <dl>
                              <dd>
                                <Link to="/blockdetail">{data.blockCount}</Link>
                              </dd>
                              <dd>9 secs ago</dd>
                            </dl>
                          </Col>
                          <Col>
                            <dl>
                              <dd>
                                Validated By{" "}
                                <Link to="/addressdetail">
                                  {data.lastHash.slice(0, 5)}
                                </Link>
                              </dd>
                              <dd>{data.transactions.length}</dd>
                            </dl>
                          </Col>
                          <Col>
                            <dl>
                              <dd>
                                {data.transactions
                                  .map((txn, i) => {
                                    return txn.amount;
                                  })
                                  .reduce((a, b) => a + b, 0)}
                              </dd>
                            </dl>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    );
                  })}
            </ListGroup>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardHeader>Latest Transactions</CardHeader>
            <ListGroup>
              {!data
                ? "Cargando.."
                : data.blocks.map((data, index) => {
                    return (
                      <ListGroupItem
                        className="justify-content-between"
                        key={data.blockCount}
                      >
                        <Row>
                          <Col>
                            <Media left bottom href="#" sm="1">
                              <Media object src={img} />
                            </Media>
                          </Col>
                          <Col>
                            <dl>
                              <dd>
                                <Link to="/addressdetail">
                                  {data.transactions.map((txn1, int) => {
                                    return txn1.id.slice(0, 6);
                                  })}
                                </Link>
                              </dd>
                              <dd>9 secs ago</dd>
                            </dl>
                          </Col>
                          <Col>
                            <dl>
                              <dd>
                                From :{" "}
                                <Link to="/addressdetail">
                                  {" "}
                                  {data.transactions.map((txn2, ina) => {
                                    return txn2.senderPublicKey.slice(0, 6);
                                  })}
                                </Link>
                              </dd>
                              <dd>
                                To:{" "}
                                <Link to="/addressdetail">
                                  {" "}
                                  {data.transactions.map((txn3, inc) => {
                                    return txn3.receiverPublicKey.slice(0, 6);
                                  })}
                                </Link>
                              </dd>
                            </dl>
                          </Col>
                          <Col>
                            <dl>
                              <dd>
                                {data.transactions.map((txn4, inb) => {
                                  return txn4.amount;
                                })}
                              </dd>
                            </dl>
                          </Col>
                        </Row>
                      </ListGroupItem>
                    );
                  })}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
