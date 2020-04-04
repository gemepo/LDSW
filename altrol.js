import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre" name=" Nombre" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Apellido" name="Apellido" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Correo" name="Correo" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Numero Celular" name="Numero Celular" ref={register({required: true, minLength: 6, maxLength: 12})} />
      <select name="Puesto" ref={register({ required: true })}>
        <option value="Admin">Adm</option>
        <option value="Operativo">Oper.</option>
        <option value="Rosas">Rosas.</option>
        <option value="Atg">Atg</option>
      </select>

      <input name="Developer" type="radio" value="Yes" ref={register({ required: true })}/>
      <input name="Developer" type="radio" value="No" ref={register({ required: true })}/>

      <input type="submit" />
    </form>
  );
}