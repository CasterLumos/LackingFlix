import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(data) {
    setValue(data.target.getAttribute('name'), data.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname
      .includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://lackingflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategorias([...resposta]);
      });
  }, [

  ]);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(data) {
          data.preventDefault();
          console.log('Tentou Enviar o form');
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria: "
          name="nome"
          type="text"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição; "
          name="descricao"
          type="textarea"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="cor: "
          name="cor"
          type="color"
          value={values.nome}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => <li key={`${categoria.nome}`}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
