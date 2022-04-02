import React from "react";
import { Card, Container, Row, Button } from 'react-bootstrap';
import NavBar from "./NavBar";
import NavBarDashboard from "./NavBarDashboard";
import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <NavBarDashboard />
            <Card className="totalCard">
                <Container>
                    <Row>
                    <Card.Body className='eachCard'>Description</Card.Body>
                    </Row>
                    <Row>
                    <Card.Body className='cardLeft eachCard'>
                        <h6>Upload hand-written document to extract the csv from it</h6>
                        <div className="uploadbutton"><Button>Upload file</Button></div></Card.Body>
                    <Card.Body className='cardRight eachCard'>
                        <h6 className='content'>Click on the download option to download the csv extracted from your uploaded document which consists of the the deatils in comma separated form that can be easily uploaded into database for further processiong.</h6>
                        <div className="downloadbutton"><Button>Download CSV</Button></div></Card.Body>
                    </Row>
                    </Container>
                </Card>
        </div>
    );
}

export default Dashboard;