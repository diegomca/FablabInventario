import React from 'react'
import { Dropdown, Image } from 'semantic-ui-react'
import perfil from '../../img/perfil.jpg'

const trigger = (
  <span>
    <Image size="mini" avatar src={perfil} /> {'Administrador'}
  </span>
)

const options = [
  { key: 'sign-out', text: 'Cerrar Sesión', icon: 'sign out' },
]

const DropdownImageTriggerExample = () => (
  <Dropdown
    trigger={trigger}
    options={options}
    pointing='top left'
    icon={null}
  />
)

export default DropdownImageTriggerExample
