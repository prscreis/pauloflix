import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setCategorias([
      ...categorias,
      values,
    ]);

    clearForm();
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://paulo-flix.herokuapp.com/categorias';

    fetch(URL).then(async (response) => {
      const resposta = await response.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {values.titulo}
      </h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título da categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0 && (<div>Carregando...</div>)}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
