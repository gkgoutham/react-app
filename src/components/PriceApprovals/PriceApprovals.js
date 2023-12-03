import React from "react";
import { Card } from "react-bootstrap";
import './PriceApprovals.css';
import PriceApprovalDetails from "../PriceApprovalDetails/PriceApprovalDetails";

export default function PriceApproval(props) {
    const { title } = props;
    return (
        <Card border="secondary">
            <Card.Header className="header">{title}</Card.Header>
            <Card.Body className='px-2'>
                <PriceApprovalDetails></PriceApprovalDetails>
            </Card.Body>
        </Card>
    );
}