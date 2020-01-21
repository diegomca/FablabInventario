import React from 'react'
import { Image, Modal, Button } from 'semantic-ui-react'

function AbrirIMG({ ruta }) {
    return (
        <div>
            <Modal dimmer={'blurring'} trigger={<Button size="big" icon="image"></Button>} >
                <Modal.Content image>
                    <Image
                        centered
                        wrapped
                        size='big'
                        src={ruta}
                    />
                </Modal.Content>
            </Modal>
        </div>
    )
}

export default AbrirIMG
