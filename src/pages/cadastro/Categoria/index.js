import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

const CadastroCategoria = () => {
	const valoresIniciais = {
		nome: '',
		descricao: '',
		cor: ''
	};

	const [categorias, setCategorias] = useState([]);
	const [values, setValues] = useState(valoresIniciais);

	const setValue = (chave, valor) => {
		setValues({ ...values, [chave]: valor });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		setCategorias([
			...categorias,
			values
		]);

		setValues(valoresIniciais);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValue(name, value);
	};

	return (
		<PageDefault>
			<h1>Cadastro de categoria: {values.nome}</h1>

			<form onSubmit={handleSubmit}>
				<FormField
					label="Nome da categoria"
					type="text"
					name="nome"
					value={values.nome}
					onChange={handleChange}
				/>

				<FormField
					label="Descrição da categoria"
					type="textarea"
					name="descricao"
					value={values.descricao}
					onChange={handleChange}
				/>

				<FormField
					label="Cor da categoria"
					type="color"
					name="cor"
					value={values.cor}
					onChange={handleChange}
				/>

				<button>Cadastrar</button>
			</form>

			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>
							{categoria.nome}
						</li>
					);
				})}
			</ul>

			<Link to="/">
				Ir para home
			</Link>
		</PageDefault>
	);
}

export default CadastroCategoria;