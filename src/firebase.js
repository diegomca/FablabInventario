import firebase from 'firebase';

const config = {

    apiKey: "AIzaSyApwjHjFIfP0VmtAqFH-Cp5Kha2GnD6q3E",
    authDomain: "inventario-fablabuv.firebaseapp.com",
    databaseURL: "https://inventario-fablabuv.firebaseio.com",
    projectId: "inventario-fablabuv",
    storageBucket: "inventario-fablabuv.appspot.com",
    messagingSenderId: "1070405211534",
    appId: "1:1070405211534:web:d7275629df2fb90bc900df",
    measurementId: "G-PG0YWD8M1Z"

}

const firebaseConf = firebase.initializeApp(config);
export default firebaseConf;


export const getListaProducto = (callback) => {
    const temp = [];
    firebaseConf.database().ref().child("productos").orderByChild("marca").once("value", snapshot => {
        snapshot.forEach(datos => {
            const data = { codigo: datos.val().codigo, marca: datos.val().marca, modelo: datos.val().modelo, stock: datos.val().stock, disponible: datos.val().disponible, ubicacion: datos.val().ubicacion, key: datos.key }
            temp.push(data);
        })
        callback(temp)
    });
};

export const getListaRegistro = (callback) => {
    const temp = [];
    firebaseConf.firestore().collection('registros').orderBy('fecha').onSnapshot(querySnapshot => {
        querySnapshot.forEach(data => {
            temp.push(data.data())
        })
        callback(temp.reverse());
    })
};

export const setRegistro = (data_subir, callback) => {
    firebaseConf.firestore().collection('registros').add(data_subir).then(() => {
        callback(true)
    }).catch(() => {
        callback(false)
    })
};

export const updateProducto = (ruta, datos) => {
    firebaseConf.database().ref().child('productos').child(String(ruta)).update({
        "disponible": datos
    }).then(() => {
    }).catch(() => {
    })
};

export const updateProductoStock = (new_stock, new_disp, ruta) => {
    firebaseConf.database().ref().child('productos').child(String(ruta)).update({
        "disponible": new_disp,
        "stock": new_stock
    }).then(() => {
    }).catch(() => {
    })
};

export const setProducto = (datos, callback) => {

    firebaseConf.database().ref().child('productos').push(datos).then(() => callback(true)).catch(() => { callback(false) })
};

export const removeProducto = (ruta) => {

    firebaseConf.database().ref().child('productos').child(String(ruta)).remove();
};

export const ingresarLogin = (userNick, userPassword, callback) => {

    firebaseConf.auth().signInWithEmailAndPassword(userNick, userPassword).then(function (result) {
        window.localStorage.setItem('token_inventarioUV', Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2));
        window.localStorage.setItem('user_inventarioUV', userNick)
        if (userNick === 'admin@inventariofablab.uv.cl') {
            window.localStorage.setItem('permisos_inventarioUV', '0')
        }
        if (userNick === 'visita@inventariofablab.uv.cl') {
            window.localStorage.setItem('permisos_inventarioUV', '2')
        }
        if (userNick === 'ayudantes@inventariofablab.uv.cl') {
            window.localStorage.setItem('permisos_inventarioUV', '1')
        }
        window.location = '/home';
    }).catch(() => {
        callback(false)
    })
};