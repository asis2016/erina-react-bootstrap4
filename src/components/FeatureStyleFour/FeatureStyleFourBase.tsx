import React, {FC} from "react";
import {FeatureStyleFourBase} from "./FeatureStyleFourBase.style";
import {Col, Container, Row} from "react-bootstrap";
import {FeatureStyleFourContent} from "../../assets/content";

interface IProps {
    title: string;
    caption: string;
}

export const FeatureStyleFour: FC<IProps> = (props) => {
    return <FeatureStyleFourBase>
        <Container fluid>
            <Row>
                <div className="overlay"></div>
                {FeatureStyleFourContent.map((item) =>
                    <Col
                        style={{backgroundImage: "url(" + require("../../assets/images/" + item.img) + ")"}}>
                        <h2>{item.title}</h2>
                        <p className="price">from ${item.price}</p>
                        <button className="btn btn-primary-outline-erina">Eine Reservierung machen</button>
                    </Col>
                )}
            </Row>
        </Container>
    </FeatureStyleFourBase>
}