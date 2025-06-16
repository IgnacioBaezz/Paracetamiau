import "../styles/Recupera.css";

const FormRecuperarContra = () => {

    return (
        <div className="row d-flex justify-content-center align-items-center mt-3">
            <div className="col-8 col-md-7 col-lg-6 container-recupera">
                <h1 className="text-center mt-5">Recuperar contraseña</h1>
                <div className="mb-3">
                    <label htmlFor="nueva" className="form-label">
                        Nueva contraseña
                    </label>
                    <input type="password" className="form-control" id="nueva" />
                </div>
                <div className="mb-3">
                    <label htmlFor="repiteNueva" className="form-label">
                        Repite la contraseña
                    </label>
                    <input type="password" className="form-control" id="repiteNueva" />
                </div>
                <div className="d-flex justify-content-center mb-3">
                <button type="button" className="btn bg-color2">
                    {" "}
                    Guardar
                    {" "}
                </button>
                </div>
            </div>
        </div>

    );
};

export default FormRecuperarContra;
