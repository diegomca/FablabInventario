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


export const getTipoRegistrovsCantidad = (ano, callback, termino) => {

    var query = [];
    var cont = 0;

    firebaseConf.firestore().collection('registros').where("año", "==", ano)
        .where('peticion', "==", "Entrega de producto").get().then(function (querySnapshot) {
            query.push({ x: "Entrega de producto", y: querySnapshot.size })
            cont = cont + 1;
            if (cont === 5) {
                callback(query)
                termino(true)
            }
        });
    firebaseConf.firestore().collection('registros').where("año", "==", ano)
        .where('peticion', "==", "Devolucion de producto").get().then(function (querySnapshot) {
            query.push({ x: "Devolucion de producto", y: querySnapshot.size })
            cont = cont + 1;
            if (cont === 5) {
                callback(query)
                termino(true)
            }
        });
    firebaseConf.firestore().collection('registros').where("año", "==", ano)
        .where('peticion', "==", "Actualizar stock").get().then(function (querySnapshot) {
            query.push({ x: "Actualizar stock", y: querySnapshot.size })
            cont = cont + 1;
            if (cont === 5) {
                callback(query)
                termino(true)
            }
        });
    firebaseConf.firestore().collection('registros').where("año", "==", ano)
        .where('peticion', "==", "Nuevo producto").get().then(function (querySnapshot) {
            query.push({ x: "Nuevo producto", y: querySnapshot.size })
            cont = cont + 1;
            if (cont === 5) {
                callback(query)
                termino(true)
            }
        });
    firebaseConf.firestore().collection('registros').where("año", "==", ano)
        .where('peticion', "==", "Producto removido").get().then(function (querySnapshot) {
            query.push({ x: "Producto removido", y: querySnapshot.size })
            cont = cont + 1;
            if (cont === 5) {
                callback(query)
                termino(true)
            }
        });
}

export const updateHistorica = (ruta, cantidad) => {

    var value;
    firebaseConf.database().ref().child('productos').child(String(ruta)).once("value", snapshot => {
        value = snapshot.val().historica_pedidos + cantidad
        firebaseConf.database().ref().child('productos').child(String(ruta)).update({
            "historica_pedidos": value
        })
    })
}


export const setDatosGrafico = (marca, modelo, cantidad, año, mes) => {

    let temp_subir = { marca: marca, modelo: modelo, cantidad: cantidad, año: año, mes: mes }
    var bandera = false;
    firebaseConf.database().ref().child("datos-grafico").child("entrega").orderByChild('modelo')
    .equalTo(modelo).once('value', function (snapshot) {
            snapshot.forEach(data =>{
               if (data.val().año === año && data.val().mes === mes && data.val().marca === marca) {
                   let nueva_cantidad = data.val().cantidad + cantidad
                   bandera = true;
                   firebaseConf.database().ref().child("datos-grafico").child("entrega").child(data.key).update({
                       "cantidad": nueva_cantidad
                   })
                }
            })
        }).finally(() =>{
            if (!bandera) {
                firebaseConf.database().ref().child('datos-grafico').child('entrega').push(temp_subir)
            }
        })
}

export const getDatosHistoricosProductos = (callback) => {
    var return_value = []
    firebaseConf.database().ref().child('productos').orderByChild('historica_pedidos').
        limitToLast(5).once('value', snapshot => {
            snapshot.forEach((data) => {
                return_value.push({ id: data.val().marca + " - " + data.val().modelo, label: data.val().marca + "  " + data.val().modelo, value: data.val().historica_pedidos })
            })
            callback(return_value)
        })
}

export const getDatosGraficosBarra = (año, mes, callbackdatos ) => {
    var temp_datos = []
    var datos_enviar = []
    var key = []

    firebaseConf.database().ref().child("datos-grafico").child("entrega").orderByChild('cantidad').once('value', function(snapshot){
        snapshot.forEach((dato) =>{
            if (dato.val().año === año && dato.val().mes === mes) {
                temp_datos.push(dato.val())
            }
        })
    }).finally(()=>{
        temp_datos.reverse().forEach(datos => {
            if (datos_enviar.length < 10) {
                datos_enviar.push({ id: datos.marca + " - " + datos.modelo, label: datos.marca + "  " + datos.modelo, value: datos.cantidad })
            }
        })
        callbackdatos(datos_enviar)
    })
}

export const getListaRegistroHome = (callback, termino) => {
    const temp = [];
    firebaseConf.firestore().collection('registros').orderBy('fecha').limitToLast(3).onSnapshot(querySnapshot => {
        querySnapshot.forEach(data => {
            temp.push(data.data())
        })
        callback(temp.reverse());
        termino(true)
    })
};


export const getTipoRegistroHome = (callback, termino) => {

    var cont = 0;
    var date = new Date();
    firebaseConf.firestore().collection('registros').where("año", "==", date.getFullYear())
        .get().then(function (snapshot) {
            cont = snapshot.size;
        }).finally(() => {
            callback(cont);
            termino(true)
        });
}

export const getEntregasMes = (callback, termino) => {
    var cont  = 0
    var date = new Date();
    let año = date.getFullYear(); let mes = date.getMonth();

    firebaseConf.database().ref().child("datos-grafico").child("entrega").orderByChild('cantidad').once('value', function (snapshot) {
        snapshot.forEach((dato) => {
            if (dato.val().año === año && dato.val().mes === mes) {
                cont = cont + dato.val().cantidad;
            }
        })
    }).finally(()=> {
        callback(cont);
        termino(true)
    })
}

export const getDevolucionesHome = (callback, termino) => {
    var cont = 0

    firebaseConf.database().ref().child("productos").once('value', function (snapshot) {
        snapshot.forEach((dato) => {
            if (dato.val().stock !== dato.val().disponible) {
                cont++;
            }
        })
    }).finally(() => {
        callback(cont);
        termino(true)
    })
}


export const getRegistrosMensual = (callback, termino) => {

    var cont = 0;
    var date = new Date();
    firebaseConf.firestore().collection('registros').where("año", "==", date.getFullYear()).where("mes","==",date.getMonth())
        .get().then(function (snapshot) {
            cont = snapshot.size;
        }).finally(() => {
            callback(cont);
            termino(true)
        });
}
