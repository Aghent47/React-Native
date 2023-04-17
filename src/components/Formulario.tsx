import { useForm } from '../hooks/useForm';
export const Formulario = () => {

    const {onChange, formulario, email, password} = useForm({
      email: 'neiderkk@gmail.com',
      password: '123456',

  })

  return (
    <>
    <h3>Formulario</h3>
    <input type="email" className="form-control" placeholder="Ingrese su email" value={email} 
    onChange={({target}) => onChange(target.value, 'email')}
    />
    
    <input type="password" className="form-control mt-2" placeholder="Ingrese su contraseña" value={password}
    onChange={({target}) => onChange(target.value, 'password')} />
    
    <code>
      <pre> 
        { JSON.stringify(formulario, null, 2) }
         </pre>
    </code>
    </>
    
  )
}
