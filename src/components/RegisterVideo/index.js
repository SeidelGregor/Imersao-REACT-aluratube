import { StyledRegisterVideo } from "./styles";
import React from "react";
import { createClient } from '@supabase/supabase-js';

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

const PROJECT_URL ='https://tloyzvoifrngskhlyoqd.supabase.co'
const PUBLIC_KEY =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRsb3l6dm9pZnJuZ3NraGx5b3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwNTQwMDMsImV4cCI6MTk4NDYzMDAwM30.l30aM_8a5YpYstsWi95EQ0On-M3LuiXRwGjhk7JoDvk'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumbmail(url){
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
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

                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: getThumbmail(formCadastro.values.url),
                        playlist: formCadastro.values.playlist
                    })
                    .then((e) =>{console.log(e)})
                    .catch((e) =>{console.log(e)})

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
                        <input
                            placeholder="Playlist"
                            name="playlist"
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ) : null}
        </StyledRegisterVideo>
    )
}