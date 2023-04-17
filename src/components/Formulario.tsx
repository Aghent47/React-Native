import { useState } from 'react';
export const Formulario = () => {
  const [formulario, setFormulario] = useState({
    email: 'neiderkk@gmail.com',
    password: '123456',
    
});

const onChange = (value: string, campo: string) => {
  setFormulario({
    ...formulario,
    [campo]: value
  })
}

  return (
    <>
    <h3>Formulario</h3>
    <input type="email" className="form-control" placeholder="Ingrese su email" value={formulario.email} 
    onChange={({target}) => onChange(target.value, 'email')}
    />
    
    <input type="password" className="form-control mt-2" placeholder="Ingrese su contraseña" value={formulario.password}
    onChange={({target}) => onChange(target.value, 'password')} />
    
    <code>
      <pre> 
        { JSON.stringify(formulario, null, 2) }
         </pre>
    </code>
    </>
    
  )
}