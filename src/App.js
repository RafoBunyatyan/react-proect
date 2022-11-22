import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
	return `${value}°C`;
}

function App() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [value, setValue] = React.useState([20, 70]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>

			<Box sx={{ width: 400 }}>
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
