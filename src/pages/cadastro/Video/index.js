import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/video';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Título padrão',
    url: 'https://www.youtube.com/watch?v=4W55nFDyIrc',
    categoria: 'Front end',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // eslint-disable-next-line no-alert
    // alert('Vídeo cadastrado com sucesso!!!');

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: 1,
    })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
