import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';
import Barrasuperior from './Barrasuperior'
import BackgroundSlider from 'react-background-slider'
import image1 from '../img/login/slide-img-1.jpg'
import image2 from '../img/login/slide-img-2.jpg'
import image3 from '../img/login/slide-img-3.png'
import axios from 'axios';
import './Login.css'


//Sincere@april.biz
//Bret
function Login() {

    axios.defaults.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    const [usersApi, setUsersApi] = useState("");
    const [userNick, setUserNick] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorCuenta, setError] = useState(false);
    const [errorUser, setErrorUser] = useState(false);
    const [errorpassport, setErrorPassport] = useState(false);
    var bandera = false;
    //const [hasError, setErrors] = useState(false)

    const getAuth = () => {

            window.localStorage.setItem('token', 'qeeqweewqewqw')
                bandera = true;
                window.localStorage.setItem('user', "temporal")
                window.location = '/home'


        // return (
        //     axios
        //         .post(`/api/v1/admin/login`,
        //             { correo: userNick, password: userPassword })
        //         .then(response => {
        //             window.localStorage.setItem('token', response.data.token)
        //             bandera = true;
        //             window.localStorage.setItem('user', response.data.usuario)
        //             window.location = '/home'
        //         }).catch((err) => {
        //             setError(true);
        //             console.log(err);
        //             setUserPassword('');
        //         }))
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

                    <Message positive >
                        <Message.Header>
                            Desabilitado Servidor
                        </Message.Header>
                        Para activarlo, comentar las lineas de Login.jsx del 28 al 31 y descomentar desde 34 al 47. 
                        Para ingresar escribir cualquier wea xD
                    </Message>

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