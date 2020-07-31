import React from "react";

const FormField = ({ label, type, name, value, onChange }) => {
	return (
		<div>
			<label>{label}:
				{type === "textarea" ?
					<textarea
						name={name}
						onChange={onChange}>
						{value}
					</textarea>
					:
					<input
						type={type}
						name={name}
						value={value}
						onChange={onChange}
					/>
				}
			</label>
		</div>);
};

export default FormField;