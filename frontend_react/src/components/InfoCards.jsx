
const InfoCards = () => {
    return (
        <div className="container my-5">
            <div className="row text-center g-4">

                {/* Card 1 */}
                <div className="col-12 col-md-4">
                    <div className="card h-100 bg-color7 rounded-4 shadow-sm border-0">
                        <div className="card-body">
                            <i className="fa-solid fa-user-nurse fa-2x mb-3 text-white"></i>
                            <h5 className="card-title fw-bold">¿Qué es ParacetaMiau?</h5>
                            <p className="card-text small text-white">
                                Una app educativa que enseña autocuidado y primeros auxilios en salud mediante desafíos y juegos con personajes felinos.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-md-4">
                    <div className="card h-100 bg-color8 rounded-4 shadow-sm border-0 ">
                        <div className="card-body">
                            <i className="fa-solid fa-heartbeat fa-2x mb-3 text-white"></i>
                            <h5 className="card-title fw-bold">¿A quién está dirigida?</h5>
                            <p className="card-text small text-white">
                                A adolescentes y adultos jóvenes que deseen aprender hábitos saludables de forma lúdica.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-md-4">
                    <div className="card h-100 bg-color7 rounded-4 shadow-sm border-0">
                        <div className="card-body">
                            <i className="fa-solid fa-gamepad fa-2x mb-3 text-white"></i>
                            <h5 className="card-title fw-bold">¿Qué ofrece?</h5>
                            <p className="card-text small text-white">
                                Juegos interactivos, desafíos médicos, logros, seguimiento de progreso y recursos educativos.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoCards;
