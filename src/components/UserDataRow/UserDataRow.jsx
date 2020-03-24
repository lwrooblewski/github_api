import React from 'react';
import {Col, Row} from "react-bootstrap";

function UserDataRow({ label, value }){
    return (
        <Row>
            <Col>
                <strong>
                    {label}
                </strong>
            </Col>
            <Col className="text-right">
                {value}
            </Col>
        </Row>
    )
}

UserDataRow.propTypes = {

};

export default UserDataRow;
