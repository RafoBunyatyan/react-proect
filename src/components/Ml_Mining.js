import React from "react";
import Navibar from "./Navibar/Navibar";
import Header from "./Header/Header";

import { Container, Row, } from 'react-bootstrap';

function Ml_Mining() {
	return (
		<>
			<Container style={{ marginBottom: '65px', padding: '0', }}>
				<Navibar />
				<Row style={{}}>
					<Header />
				</Row>
			</Container>
		</>
	)
}

export default Ml_Mining