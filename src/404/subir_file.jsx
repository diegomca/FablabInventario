import React, { useState, useEffect } from 'react'
import { Button, Image, Progress } from 'semantic-ui-react';
import { setArchivo } from '../firebase';

function Subir_file() {

    const [file, setFile] = useState(null);
    const [nameFile, setNameFile] = useState(null);
    const [url_link, setUrl] = useState(null)
    const [progreso, setProgreso] = useState(null)

    const getFile = e => {
        setFile(e.target.files[0])
        setNameFile(e.target.files[0].name)
        setArchivo(e.target.files[0], e.target.files[0].name, resp =>{
            setUrl(resp)
        }, (porcentaje)=>{
            setProgreso(porcentaje)
        })
    }
    const fileInputRef = React.createRef();

    return (
        <div>
            <Button icon="upload" onClick={() => fileInputRef.current.click()} />
            <input ref={fileInputRef} type="file" hidden onChange={getFile} />
            {nameFile}
            {
                progreso !== null &&
                <Progress percent={progreso} indicating size="medium"/>

            }
            <Image centered size="big" src={String(url_link)} ></Image>
        </div>
    )
}

export default Subir_file
