import React from "react";
import Icon, { Stack } from '@mdi/react';
import { mdiPhoneInTalk } from '@mdi/js';
import Ml_Mining from '../../assets/images/logo-1.png'
import { Navbar, Container, Nav, } from 'react-bootstrap';
import './Navibar.css'

function Navibar() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Brand style={{ padding: '16px 0', margin: '0', }} href="#home">
						<img style={{ width: '170px', }} className='navbar-img' src={Ml_Mining} title='ML Mining' alt='logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto" style={{ gridGap: '12px', justifyContent: 'center', margin: 'auto', }}>
							<Nav.Link className='nav-link' href="https://mlmining.am/hy/mines/" target='_blank'>Հանքավայրեր</Nav.Link>
							<Nav.Link className='nav-link' href="https://mlmining.am/hy/construction/" target='_blank'>Կառուցապատում</Nav.Link>
							<Nav.Link className='nav-link' href="https://mlmining.am/hy/concrete/" target='_blank'>Բետոն</Nav.Link>
							<Nav.Link className='nav-link' href="https://mlmining.am/hy/materials/" target='_blank'>Շինանյութ</Nav.Link>
							<Nav.Link className='nav-link' href="https://mlmining.am/hy/equipment/#" target='_blank'>Տեխնիկա</Nav.Link>
							<Nav.Link className='nav-link' href="https://mlmining.am/about/" target='_blank'>Ընկերություն</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Nav className='navbar-icon' style={{ justifyContent: 'flex-end', width: '155px', height: '65px', alignItems: 'center', }}>
						<Icon style={{ height: '30px', opacity: '0.3', }} path={mdiPhoneInTalk} title='Զանգել հիմա' />
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}

export default Navibar