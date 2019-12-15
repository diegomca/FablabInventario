import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react'
import perfil from '../../img/perfil.jpg'

function DropdownSecion() {


  const trigger = (
    <span>
      <Image size="mini" avatar src={perfil} /> {window.localStorage.getItem('user_inventarioUV')}
    </span>
  )
  const cerrarSesion = () => {
    window.localStorage.clear();
    window.location = '/login';

  }

  const options = [
    { key: 'sign-out', text: 'Cerrar Sesión', icon: 'sign out' }
  ]
  return (
    <div>
      <Dropdown
        trigger={trigger}
        options={options}
        pointing='top left'
        icon={null}
        onChange={e => cerrarSesion()}
      />
    </div>
  );
}
export default DropdownSecion;