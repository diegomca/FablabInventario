import React from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import Barrasuperior from './Barrasuperior'
import BackgroundSlider from 'react-background-slider'
import image1 from '../img/login/slide-img-1.jpg'
import image2 from '../img/login/slide-img-2.jpg'
import image3 from '../img/login/slide-img-3.png'
import './Login.css'
//import { Redirect } from 'react-router-dom'
import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            //submitted: false,
            loading: false,
            //error: ''
        };

    }

/*
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password, returnUrl } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        
    }
*/
    render() {
        const { username, password, /*submitted, error*/ } = this.state;
        return (
            <div>
                <Barrasuperior />
                <div className="Login">
                    <BackgroundSlider images={[image2, image1, image3]}
                        duration={5} transition={2} />
                    <Grid textAlign="center" verticalAlign="middle">
                        <Grid.Column style={{ maxWidth: 400 }}>
                            <Segment>
                                <Header as="h2" textAlign="center">
                                    Ingreso a Fablab Inventario
                        </Header>
                                <Form size="large" onSubmit={this.handleSubmit} >
                                    <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Usuario"
                                        value={username}
                                    />

                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Contraseña"
                                        type="password"
                                        value={password}
                                    />

                                    <Button color="instagram" fluid size="large"  >
                                        Ingresar
                                </Button>

                                </Form>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default Login ;