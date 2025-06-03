import candado from '../assets/img/candado.png';
function IndexSeccion() {
    return (
        <div>

            <section className="seccion-index container my-5" style={{ maxWidth: '700px' }}>
                <div className="row align-items-start">
                    <div className="col-md-12 text-center text-white">
                        <img src={candado} alt="Logo ParacetaMiau" className="logo-paracetamiau mb-3" style={{ maxWidth: '200px' }} />
                        <h2 className="fw-bold">
                            Aprende <span className="">primeros auxilios</span> jugando
                        </h2>
                        <p className="text-white">
                            ParacetaMiau es tu app educativa donde niños, jóvenes y familias aprenden a actuar frente a emergencias de manera simple, divertida y responsable.
                        </p>
                        <p className="fw-bold mt-3">
                            ¡Comienza ahora!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndexSeccion
