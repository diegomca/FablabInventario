import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import Barrasuperior from './Barrasuperior'
import BackgroundSlider from 'react-background-slider'
import image1 from '../img/login/slide-img-1.jpg'
import image2 from '../img/login/slide-img-2.jpg'
import image3 from '../img/login/slide-img-3.png'
import './Login.css'
import { ingresarLogin } from '../firebase';


function Login() {

    const [userNick, setUserNick] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorCuenta, setError] = useState(false);
    const [errorUser, setErrorUser] = useState(false);
    const [errorpassport, setErrorPassport] = useState(false);

    const getAuth = () => {

        ingresarLogin(userNick, userPassword, (resp) => {
            if (!resp) {
                setError(true);
                console.log('error');
                setUserPassword('');
            }
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (userNick === '' || userPassword === '') {
            setError(false);
            if (userNick === '') {
                setErrorUser(true);
            } else {
                setErrorUser(false);
            }
            if (userPassword === '') {
                setErrorPassport(true);

            } else {
                setErrorPassport(false);
            }
        } else {
            setErrorUser(false);
            setErrorPassport(false);
            getAuth();
        }
    }

    return (
        <div>
            <Barrasuperior />
            <div className="Login">
                <BackgroundSlider images={[image2, image1, image3]}
                    duration={5} transition={2} />
                <Grid textAlign="center" verticalAlign="middle">
                    <Grid.Column style={{ maxWidth: 400 }}>
                        {errorCuenta ? <Message negative><Message.Header>Datos Incorrectos</Message.Header>
                            <p>Nombre de Usuario o contraseña son invalidas, Intente nuevamente</p>
                        </Message> : <div></div>}
                        <Segment>
                            <Header as="h2" textAlign="center">
                                Ingreso a Fablab Inventario
                        </Header>
                            <Form size="large" >
                                {errorUser ? <Form.Input
                                    error
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Usuario"
                                    value={userNick}
                                    onChange={e => setUserNick(e.target.value)}
                                /> : <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="Usuario"
                                        value={userNick}
                                        onChange={e => setUserNick(e.target.value)}
                                    />}
                                {errorpassport ? <Form.Input
                                    error
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Contraseña"
                                    type="password"
                                    onChange={e => setUserPassword(e.target.value)}
                                    value={userPassword}

                                /> : <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Contraseña"
                                        type="password"
                                        onChange={e => setUserPassword(e.target.value)}
                                        value={userPassword}

                                    />}
                                <Button color="instagram" fluid size="large" type="submit" onClick={handleSubmit} >
                                    Iniciar Sesión
                                </Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>

        </div>
    );
}
export default Login;