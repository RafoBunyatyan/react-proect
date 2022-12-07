import React from "react";
import Avan_Tauers from '../../assets/images/0.jpg'
import Avan_Tauers_1 from '../../assets/images/1.jpg'
import Avan_Tauers_2 from '../../assets/images/2.jpg'
import Avan_Tauers_3 from '../../assets/images/3.jpg'
import Avan_Tauers_4 from '../../assets/images/4.jpg'
import Avan_Tauers_5 from '../../assets/images/5.jpg'
import Avan_Tauers_6 from '../../assets/images/6.jpg'
import Avan_Tauers_7 from '../../assets/images/7.jpg'
import Avan_Tauers_8 from '../../assets/images/8.jpg'
import Avan_Tauers_9 from '../../assets/images/9.jpg'
import Avan_Tauers_10 from '../../assets/images/10.jpg'
import Avan_Tauers_11 from '../../assets/images/11.jpg'
import Avan_Tauers_12 from '../../assets/images/12.jpg'
import Avan_Tauers_13 from '../../assets/images/13.jpg'
import { Container, Row, Col, } from 'react-bootstrap';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import './Header.css'

function Header() {
	return (
		<>{/* backgroundi xndir ka*/}
			<Container style={{ paddingBottom: '25px', height: 'auto', }}>
				<Row style={{ flexDirection: 'column', margin: 'auto', padding: '220px 0px 40px', }}>
					<Col style={{ maxWidth: '1180px', margin: '0 auto 200px', }}>
						<h2 className='' style={{ width: 'auto', color: '#fff', fontSize: '36px', marginBottom: '0px', }}>Նոր բնակարան. Նոր սկիզբ.</h2>
						<p className='large-h2' style={{ width: 'auto', color: '#fff', marginBottom: '4px', fontSize: '24px', lineHeight: '35px', }}>Բնակարաններ անմիջապես կառուցապատողից</p>
					</Col>
					<Col style={{ maxWidth: '89%', margin: 'auto', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gridGap: '8px', padding: '0', }}>

						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Ավան Թաուերս</Typography>
								</CardContent>
							</CardActionArea>
						</Card>


						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_1} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Նոր Երևան</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_2} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Ադոնց</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_3} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Ադոնց Պրեմիում</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_4} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Դալմա Հիլզ</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_5} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Քանաքեռ</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_6} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Քանաքեռ 2</Typography>
								</CardContent>
							</CardActionArea>
						</Card>

						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_7} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Այգիներ</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_8} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Գրիբոյեդով</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_9} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Ճառագայթ</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_10} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Աբովյան Սիթի</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_11} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Արտաշատ</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_12} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Արաբկիր 27</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className='header-complex' >
							<CardActionArea href='https://mlmining.am/construction/'>
								<CardMedia component="img" image={Avan_Tauers_13} alt="complex" />
								<CardContent>
									<Typography className='header-name' variant="h5" component="div">Նոր Տուն</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Col>
				</Row>
				<Row className='crane'></Row>
			</Container>
		</>
	)
}

export default Header