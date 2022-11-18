import { StyledRegisterVideo } from "./styles";
import React from "react";

function useForm() {
    const [values, setValues] = React.useState("");

    return {
        values,
        handleChange(evento) {
            const value = evento.target.value;
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const [formViseble, setFormViseble] = React.useState(false)
    let formCadastro = useForm()

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormViseble(true)}>
                +
            </button>
            {formViseble ? (
                <form onSubmit={(evento) => {
                    evento.preventDefault();
                    console.log(formCadastro.values);
                    setFormViseble(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button className="close-modal" onClick={() => setFormViseble(false)}>X</button >
                        <input
                            placeholder="Titulo do video"
                            name="titulo"
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URL"
                            name="url"
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ) : null}
        </StyledRegisterVideo>
    )
}