import "../styles/Recupera.css";
import React, { useState } from "react";
import {createApiInstance} from "../api/axiosConfig.js";
import {useNavigate} from "react-router-dom";

const FormRecuperarContra = () => {
    const api = createApiInstance("http://localhost:8000/api");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        correo: "",
        nueva: "",
        repiteNueva: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post("/usuarios/reset_password/", {
                email: formData.correo,
                password : formData.nueva,
                password_confirm: formData.repiteNueva
            })
            navigate("/formulario");
        }
        catch (error) {
            console.error("Error al enviar el formulario:", error);
    }
    }


    return (
        <div className="justify-content-center align-items-center">
            <form onSubmit = { handleSubmit } className="row d-flex justify-content-center align-items-center">
                <div className="col-8 container-recupera p-4">
                    <h1 className="text-center mt-3">Recuperar contraseña</h1>
                     <div className="mb-3">
                        <label htmlFor="correo" className="form-label">
                            Correo
                        </label>
                        <input type="text" 
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="form-control" 
                        id="nueva" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nueva" className="form-label">
                            Nueva contraseña
                        </label>
                        <input type="password"
                        onChange={(e) => setFormData({ ...formData, nueva: e.target.value })}
                        className="form-control" 
                        id="nueva" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repiteNueva" className="form-label">
                            Repite la contraseña
                        </label>
                        <input type="password"
                        onChange={(e) => setFormData({ ...formData, repiteNueva: e.target.value })}
                         className="form-control" 
                         id="repiteNueva" />
                    </div>
                    <div className="d-flex justify-content-center">
                    <button className="btn bg-color2">
                        {" "}
                        Guardar
                        {" "}
                    </button>
                    </div>
                 </div>
            </form>
        </div>

    );
};

export default FormRecuperarContra;
