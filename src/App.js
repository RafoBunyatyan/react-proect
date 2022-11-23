import React from 'react';
import { Box, Slider } from '@mui/material';
import Icon, { Stack } from '@mdi/react';
import { } from '@mdi/js';
import './App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function valuetext(value) {
	return `${value}°C`;
}

function App() {
	const [value, setValue] = React.useState([40, 67]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
							<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>


			<Box sx={{ width: 300 }}>
				<Slider
					getAriaLabel={() => 'Temperature range'}
					value={value}
					onChange={handleChange}
					valueLabelDisplay="auto"
					getAriaValueText={valuetext}
				/>
			</Box>
		</>
	);
}

export default App;
