import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "",
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
    setValue(data.target.getAttribute("name"), data.target.value);
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form
        onSubmit={function handleSubmit(data) {
          data.preventDefault();
          console.log("Tentou Enviar o form");
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria: "
          name="nome"
          type="text"
          values={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição; "
          name="descricao"
          type="textarea"
          values={values.descricao}
        />

        <FormField
          label="cor: "
          name="cor"
          type="color"
          values={values.nome}
          onChange={handleChange}
        />
        <button>Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para a Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
