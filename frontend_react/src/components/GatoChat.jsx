import gatoSolo from '../assets/img/Gato solo.png';

function GatoChat() {
    return (
        <div>
            <div className="col-12 text-center">
                <div className="container justify-content-center p-3">
                    <img src={gatoSolo} alt="GatoChat" />
                    <h2 className="bg-color8 w-50 mx-auto rounded p-2">
                        Chat
                        <i className="fa-regular fa-comment ps-3" />
                    </h2>
                </div>
            </div>


        </div>
    )
}

export default GatoChat
