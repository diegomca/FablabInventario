
import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import SubirRegistro from "./SubirRegistro";

const ModalExampleScrollingContent = () => (

    <Modal trigger={<Button color="instagram" >Agregar Nuevo Registro</Button>} size="large" >
        <Modal.Header>Nuevo Registro</Modal.Header>
        <Modal.Content >
            <Modal.Description>
                <SubirRegistro/>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color="facebook">
                Agregar  <Icon name=' add square' />
            </Button>
        </Modal.Actions>
    </Modal>

)

export default ModalExampleScrollingContent
