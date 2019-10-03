import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import Barrasuperior from './Barrasuperior'
import BackgroundSlider from 'react-background-slider'
import image1 from '../img/login/slide-img-1.jpg'
import image2 from '../img/login/slide-img-2.jpg'
import image3 from '../img/login/slide-img-3.png'
import './Login.css'
//import { Redirect } from 'react-router-dom'


function Login() {

    const [usersApi, setUsersApi] = useState("");
    const [userNick, setUserNick] = useState("");
    const [userPassword, setUserPassword] = useState("");
    //const [hasError, setErrors] = useState(false)

    useEffect(() => {

        async function fetchData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            res
                .json()
                .then(res => setUsersApi(res))/*
                .catch(err => setErrors(err))*/;
        }
        fetchData();
    });
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Usuario: ${userNick} \nContraseña: ${userPassword}`)
        setUserNick('');
        setUserPassword('');
    }

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
                            <Form size="large" >
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Usuario"
                                    value={userNick}
                                    onChange={e => setUserNick(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Contraseña"
                                    type="password"
                                    onChange={e => setUserPassword(e.target.value)}
                                    value={userPassword}
                                />

                                <Button color="instagram" fluid size="large" type="submit" onClick={handleSubmit} >
                                    Iniciar Sesión
                                </Button>

                            </Form>
                        </Segment>

                    </Grid.Column>
                </Grid>
            </div>
            <div>
                {/*JSON.stringify(usersApi)*/}
            </div>
        </div>
    );
}
export default Login;