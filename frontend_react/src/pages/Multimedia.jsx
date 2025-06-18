import "../styles/styles.css";
import "../styles/variables.css";
import "../styles/backgrounds.css";
import "../styles/Multimedia.css";
import "../styles/menuLateral.css";

import Navbar from "../components/Navbar";
import BotonesMenu from "../components/BotonesMenu";
import MenuLateralMultimediaOffcanvas from "../components/MenuLateralMultimediaOffcanvas";

import { useState } from "react";

const Multimedia = () => {
  const [temaActivo, setTemaActivo] = useState(null);

  const temas = {
    rcp: {
      titulo: "Guía paso a paso para aprender RCP",
      video: "https://www.youtube.com/embed/wbp_AdGkWPM",
      descripcion:
        "Aprende a realizar reanimación cardiopulmonar básica. Este procedimiento puede salvar vidas.",
      texto: "La reanimación cardiopulmonar (RCP)...",
      texto1: "Antes de comenzar la RCP...",
      texto2: "La técnica correcta de compresiones incluye...",
    },
    convulsiones: {
      titulo: "Cómo actuar ante convulsiones",
      video: "https://www.youtube.com/embed/-ZRKueLrTRo",
      descripcion:
        "Aprende a reconocer y actuar correctamente durante una crisis convulsiva para proteger a la persona afectada.",
      texto:
        "Las convulsiones son episodios de actividad eléctrica anormal en el cerebro que pueden manifestarse de diferentes formas, desde movimientos corporales incontrolables hasta períodos de ausencia o confusión. Es importante mantener la calma y saber que la mayoría de las convulsiones cesan por sí solas en pocos minutos. El objetivo principal es proteger a la persona de lesiones durante el episodio y brindar apoyo después del mismo.",
      texto1:
        "Durante una convulsión, nunca intentes sujetar o restringir los movimientos de la persona, ya que esto puede causar lesiones. Tampoco introduzcas objetos en su boca, contrario a la creencia popular de que puede 'tragarse la lengua'. En su lugar, retira objetos peligrosos del área circundante, coloca algo suave bajo su cabeza si es posible, y afloja la ropa alrededor del cuello para facilitar la respiración.",
      texto2:
        "Después de la convulsión, la persona puede estar confundida o somnolienta. Colócala en posición de recuperación (de lado) para mantener las vías respiratorias despejadas. Permanece con ella hasta que esté completamente alerta. Busca atención médica inmediata si es la primera convulsión de la persona, dura más de 5 minutos, ocurren convulsiones consecutivas, hay dificultad para respirar después del episodio, o si la persona está embarazada, lesionada o tiene diabetes.",
    },
    fracturas: {
      titulo: "Manejo inicial de fracturas",
      video: "https://www.youtube.com/embed/2_m49c9XFTQ",
      descripcion:
        "Identifica los signos de una fractura y aprende los primeros auxilios básicos antes de recibir atención médica.",
      texto:
        "Una fractura es la ruptura parcial o completa de un hueso, que puede ser causada por trauma directo, caídas, accidentes deportivos o debilitamiento óseo. Los signos incluyen dolor intenso, hinchazón, deformidad visible, incapacidad para mover la parte afectada, y a veces se puede escuchar un chasquido en el momento de la lesión. Las fracturas pueden ser cerradas (sin ruptura de la piel) o abiertas (con herida que expone el hueso).",
      texto1:
        "El manejo inicial incluye inmovilizar la zona afectada en la posición encontrada, sin intentar realinear el hueso. Utiliza férulas improvisadas con materiales rígidos como tablillas, revistas enrolladas o bastones, acolchando con toallas o ropa. Inmoviliza las articulaciones por encima y debajo de la fractura. Controla cualquier sangrado con presión directa alrededor de la herida, no sobre el hueso expuesto.",
      texto2:
        "Aplica hielo envuelto en un paño durante 15-20 minutos para reducir la hinchazón y el dolor, evitando el contacto directo con la piel. Eleva la extremidad lesionada si es posible y no compromete otras lesiones. Busca atención médica inmediata, especialmente si hay deformidad obvia, entumecimiento, hormigueo, coloración azulada, fractura abierta, o si la persona no puede mover los dedos de manos o pies de la extremidad afectada.",
    },
    quemaduras: {
      titulo: "Tratamiento de quemaduras",
      video: "https://www.youtube.com/embed/gmAhgtrTLYA",
      descripcion:
        "Clasifica las quemaduras según su gravedad y aprende el tratamiento inmediato para cada tipo.",
      texto:
        "Las quemaduras se clasifican en tres grados según su profundidad. Las de primer grado afectan solo la capa superficial de la piel, causando enrojecimiento y dolor. Las de segundo grado penetran más profundamente, formando ampollas y causando dolor intenso. Las de tercer grado destruyen todas las capas de la piel y pueden afectar tejidos profundos, paradójicamente pueden ser menos dolorosas debido al daño nervioso.",
      texto1:
        "Para quemaduras menores de primer grado, enfría la zona con agua fría (no helada) durante 10-15 minutos. Evita usar hielo, mantequilla, pasta dental u otros remedios caseros que pueden empeorar la lesión. Después del enfriamiento, aplica aloe vera o una crema hidratante suave. Cubre con una venda estéril suelta si es necesario para proteger de la fricción.",
      texto2:
        "Las quemaduras de segundo y tercer grado requieren atención médica inmediata. Mientras llega la ayuda, enfría con agua fría, cubre con un paño limpio y húmedo, y no revientes las ampollas. Para quemaduras extensas, trata el shock elevando las piernas y manteniendo a la persona abrigada. Busca ayuda médica urgente si la quemadura es más grande que la palma de la mano, está en cara, manos, pies o genitales, o si hay signos de infección.",
    },
    shock: {
      titulo: "Shock anafiláctico: actuación de emergencia",
      video: "https://www.youtube.com/embed/ShrJ94jnp5s",
      descripcion:
        "Reconoce los síntomas del shock anafiláctico y aprende a actuar rápidamente para salvar vidas.",
      texto:
        "El shock anafiláctico es una reacción alérgica grave y potencialmente mortal que puede desarrollarse en minutos. Los síntomas incluyen dificultad respiratoria, hinchazón de cara y garganta, urticaria generalizada, náuseas, vómitos, pulso rápido y débil, mareos y pérdida de conciencia. Los desencadenantes comunes incluyen alimentos, medicamentos, picaduras de insectos y látex.",
      texto1:
        "La acción inmediata es fundamental: llama a emergencias inmediatamente. Si la persona tiene un autoinyector de epinefrina (EpiPen), ayúdala a usarlo o adminístralo si está inconsciente. Inyecta en el muslo externo, a través de la ropa si es necesario, mantén presionado por 10 segundos. Masajea el área durante 10 segundos después de la inyección.",
      texto2:
        "Coloca a la persona acostada con las piernas elevadas, a menos que tenga dificultad respiratoria, en cuyo caso debe sentarse. Afloja la ropa ajustada y cúbrela con una manta. Si vomita, colócala de lado para evitar asfixia. Prepárate para realizar RCP si pierde el pulso. Una segunda dosis de epinefrina puede ser necesaria si los síntomas no mejoran en 5-15 minutos.",
    },
    hemorragias: {
      titulo: "Control de hemorragias",
      video: "https://www.youtube.com/embed/JG1wfNUTzCc",
      descripcion:
        "Aprende técnicas efectivas para controlar diferentes tipos de sangrado y prevenir el shock hipovolémico.",
      texto:
        "Las hemorragias se clasifican según su origen: arteriales (sangre roja brillante que sale a borbotones), venosas (sangre roja oscura de flujo constante) y capilares (sangrado superficial lento). El control rápido del sangrado es crucial para prevenir el shock y preservar la vida. La pérdida de más del 20% del volumen sanguíneo puede ser mortal.",
      texto1:
        "La técnica principal es la presión directa sobre la herida con un paño limpio o venda estéril. Si el sangrado empapa el primer vendaje, añade más capas sin quitar el original. Eleva la parte lesionada por encima del nivel del corazón si no hay sospecha de fractura. Si la presión directa no es efectiva, aplica presión en puntos arteriales específicos.",
      texto2:
        "Para sangrado severo que no se controla con presión directa, considera el uso de un torniquete solo como último recurso y únicamente en extremidades. Marca la hora de aplicación. Trata los signos de shock manteniendo a la persona caliente, elevando las piernas y proporcionando tranquilidad. Busca atención médica inmediata para cualquier herida profunda, sangrado que no se detiene, o signos de shock como palidez, sudoración fría y pulso rápido.",
    },
    desmayos: {
      titulo: "Manejo de desmayos y síncope",
      video: "https://www.youtube.com/embed/syv0ZyIWakE",
      descripcion:
        "Identifica las causas de los desmayos y aprende a brindar los primeros auxilios apropiados.",
      texto:
        "El desmayo o síncope es la pérdida temporal de conciencia debido a la disminución del flujo sanguíneo al cerebro. Las causas comunes incluyen deshidratación, calor excesivo, estar de pie por largo tiempo, dolor intenso, estrés emocional, medicamentos o problemas cardíacos. Generalmente es breve y la persona se recupera completamente.",
      texto1:
        "Si alguien se siente mareado o a punto de desmayarse, ayúdalo a sentarse con la cabeza entre las rodillas, o acostarse con las piernas elevadas. Esto mejora el retorno venoso al corazón y el flujo sanguíneo al cerebro. Afloja la ropa ajustada, especialmente alrededor del cuello, y asegura ventilación adecuada.",
      texto2:
        "Si la persona ya se desmayó, verifica que respire normalmente y tenga pulso. Colócala boca arriba con las piernas elevadas 15-30 cm. No intentes despertarla con golpes o agua fría. La mayoría se recupera en uno o dos minutos. Cuando despierte, ayúdala a incorporarse gradualmente. Busca atención médica si el desmayo dura más de 2 minutos, ocurre sin causa aparente, se acompaña de dolor en el pecho, dificultad respiratoria, o si hay antecedentes cardíacos.",
    },
    atragantamiento: {
      titulo: "Maniobra de Heimlich y desobstrucción",
      video: "https://www.youtube.com/embed/eUCVvA8HThE",
      descripcion:
        "Domina las técnicas de desobstrucción de vías aéreas para adultos, niños y bebés.",
      texto:
        "El atragantamiento ocurre cuando un objeto bloquea las vías respiratorias, impidiendo el paso del aire. Los signos incluyen incapacidad para hablar, tos débil o ausente, dificultad respiratoria, coloración azulada alrededor de labios y uñas, y la señal universal de atragantamiento (manos al cuello). La acción rápida es vital, ya que el cerebro puede sufrir daño irreversible en 4-6 minutos sin oxígeno.",
      texto1:
        "Para adultos conscientes, realiza la maniobra de Heimlich: colócate detrás de la persona, abraza su cintura, coloca un puño con el pulgar hacia adentro justo arriba del ombligo, cubre el puño con la otra mano y realiza compresiones rápidas y firmes hacia arriba y adentro. Repite hasta que el objeto salga o la persona pierda la conciencia.",
      texto2:
        "Si la persona pierde la conciencia, colócala en el suelo y comienza RCP, verificando la boca antes de cada ventilación para remover cualquier objeto visible. Para niños de 1-8 años, usa la misma técnica pero con menos fuerza. En bebés menores de 1 año, alterna 5 golpes en la espalda (con el bebé boca abajo sobre tu antebrazo) con 5 compresiones torácicas (boca arriba). Nunca realices barridos ciegos en la boca, especialmente en niños.",
    },
  };

  const menuItems = [
    { key: "rcp", label: "RCP" },
    { key: "convulsiones", label: "Convulsiones" },
    { key: "fracturas", label: "Fracturas" },
    { key: "quemaduras", label: "Quemaduras" },
    { key: "shock", label: "Shock anafiláctico" },
    { key: "hemorragias", label: "Hemorragias" },
    { key: "desmayos", label: "Desmayos" },
    { key: "atragantamiento", label: "Atragantamiento" },
  ];

  const mostrarContenido = (clave) => {
    setTemaActivo(clave);
  };

  const ContenidoInicial = () => (
    <div className="col-12 col-md-8 mt-3">
      <div id="contenido-tema" />
      <div id="bloque-inicial">
        <div className="d-flex justify-content-center my-4 bg-color8 w-50 mx-auto rounded opacity-75 text-uppercase shadow-sm">
          <div className="rounded-container p-3 text-center">
            <h3 id="titulo-quizz" className="mb-0">
              Primeros Auxilios
            </h3>
          </div>
        </div>
        <div className="container py-4">
          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="bg-color7 text-white p-3 text-center rounded opacity-75 shadow-lg">
                <h4>Aprende a mantener la calma y ayudar</h4>
                <p>
                  Los primeros segundos en una emergencia importan. Aquí verás y
                  leerás qué hacer, paso a paso, para actuar sin miedo cuando
                  alguien más lo necesita.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="bg-color7 text-white p-3 text-center rounded opacity-75 shadow-lg">
                <h4>Primeros auxilios desde cero, para todos</h4>
                <p>
                  No necesitas experiencia previa. Este espacio te enseña desde
                  lo más básico con explicaciones simples, ejemplos cotidianos y
                  videos que muestran cómo hacerlo bien.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="bg-color7 text-white p-3 text-center rounded opacity-75 shadow-lg">
                <h4>Conocimiento que se queda contigo</h4>
                <p>
                  Con cada video y lectura, sumarás herramientas útiles que
                  podrás aplicar en casa, en el colegio o en cualquier lugar.
                  Saber primeros auxilios es un acto de cuidado.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="bg-color7 text-white p-3 text-center rounded opacity-75 shadow-lg">
                <h4>Ciencia y empatía para actuar bien</h4>
                <p>
                  Cada tema está respaldado por información actualizada y
                  explicado con sensibilidad. Porque saber primeros auxilios es
                  combinar conocimiento y humanidad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-color1 w-50 mx-auto mt-3 p-4 rounded-4 shadow-sm">
          <h2 className="text-center">Selecciona un tema del menú</h2>
        </div>
      </div>
    </div>
  );

  const ContenidoTema = ({ tema }) => {
    return (
      <>
        <h2 className="d-flex justify-content-center my-4 bg-color8 w-75 mx-auto p-4 rounded opacity-75 text-uppercase shadow-sm">
          {tema.titulo}
        </h2>
        <div className="ratio ratio-16x9 my-3">
          <iframe src={tema.video} allowFullScreen title="Video RCP" />
        </div>
        <div className="d-flex justify-content-center my-4 bg-color8 w-100 mx-auto p-4 rounded opacity-75 shadow-sm">
          <p className="lead fw-semibold">{tema.descripcion}</p>
        </div>
        <div className="bg-color1 w-100 mx-auto p-4 rounded shadow-sm">
          <p>{tema.texto}</p>
        </div>
        <div className="container py-4">
          <div className="row justify-content-center g-4">
            <div className="col-md-5">
              <div className="bg-color8 text-white p-3 text-center rounded">
                <p>{tema.texto1}</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="bg-color8 text-white p-3 text-center rounded">
                <p>{tema.texto1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-color7 w-100 mx-auto p-4 rounded shadow-sm opacity-75">
          <p>{tema.texto2}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar titulo="Multimedia" mostrarLogout={true} />
      <MenuLateralMultimediaOffcanvas onSelect={mostrarContenido} />
      <main className="container-fluid">
        <div className="row position-relative">
          <BotonesMenu />
          <div className="col-2 d-none d-lg-block mt-3">
            <div className="main-container">
              <div className="sidebar bg-color3 opacity-75">
                {menuItems.map((item) => (
                  <div
                    key={item.key}
                    className="menu-item p-2 mb-2 rounded cursor-pointer transition"
                    onClick={() => mostrarContenido(item.key)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {temaActivo ? (
            <div className="col-12 col-md-8 mt-3">
              <ContenidoTema tema={temas[temaActivo]} />
            </div>
          ) : (
            <ContenidoInicial />
          )}
        </div>
      </main>
    </>
  );
};

export default Multimedia;
