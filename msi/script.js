const btnStart = document.getElementById("start");
const cuerpo = document.getElementById("cuerpo");
const result = document.getElementById("result");
const pregunta = document.getElementById("pregunta");
const respuesta = document.getElementById("respuesta");
const questionsBefore = [
  {
    question: "Explique el modelo en cascada",
    response: ``,
  },
  {
    question: "Explique el modelo de prototipo",
    response: ``,
  },
  {
    question: "Explique el modelo en espiral",
    response: ``,
  },
  {
    question: "Que es una prueba de regresion",
    response: `
La prueba de regresión es un tipo de prueba de software que se realiza para verificar que los cambios recientes en el código del software no hayan introducido nuevos errores o afectado negativamente las funcionalidades existentes. Este tipo de prueba es crucial cuando se realizan modificaciones, como correcciones de errores, mejoras o adiciones de nuevas características, para asegurarse de que el software siga funcionando como se espera.`,
  },
  {
    question: "Que es una prueba exploratoria",
    response: `La prueba exploratoria es un enfoque de pruebas de software en el cual los testers exploran activamente el sistema sin seguir un conjunto predefinido de casos de prueba. Este método se basa en la experiencia, el conocimiento y la intuición del tester para identificar posibles problemas y errores en el software.`,
  },
  {
    question: "Para que usan la informacion las organizaciones?",
    response: `Aumentar el conocimiento del usuario: La información incrementa el conocimiento de quienes la utilizan.</br>
                Reducir la incertidumbre de lo que no se conoce: Ayuda a disminuir la incertidumbre en la toma de decisiones al proporcionar datos relevantes.</br>
                Ayudar a la toma de decisiones: Provee los datos necesarios para tomar decisiones informadas.</br>
                Permitir realizar el control de tareas y eventos: Facilita el control y seguimiento de tareas y eventos dentro de la organización​​.`,
  },
  {
    question:
      "Cuales son las restricciones del proyecto, cuales son flexibles en tradicional y cual en ágil",
    response: `Las restricciones del proyecto originalmente son 3, Alcance,costos y tiempos.</br>
              despues se le sumaron, Calidad, satisfaccion del usuario y Riesgos.</br>
              En Agil el Alcance es Flexible </br>
              En tradicional los tiempos y los costos`,
  },
  {
    question: "Para que se usa el Roi en el proyecto",
    response: `cuando se utiliza para la justificación del proyecto, evalúa los ingresos netos que se esperan obtener a partir de un proyecto.</br>
              ROI = (Ingresos del proyecto - Costo del proyecto) / Costo del proyecto 
    
    `,
  },
  {
    question: "Para que modelamos el dominio",
    response:
      "Modelamos el dominio principalmente para entender y representar los aspectos relevantes del mismo, permitiendo que todos los involucrados tengan una comprensión común y precisa de las características y procesos del sistema a desarrollar. La modelación del dominio facilita la comunicación entre los desarrolladores, los usuarios y otros stakeholders, asegurando que todos tengan una visión alineada y comprensible del proyecto. Esto es esencial para definir correctamente los requisitos y asegurar que el desarrollo del software cumpla con las expectativas y necesidades del cliente .",
  },
  {
    question: "Clasifique la Toma de decisiones",
    response: `La toma de decisiones se clasifica en: </br>
                Decisiones Tacticas </br>
                Decisiones Estrategicas </br>
                Decisiones Operativas </br>`,
  },
  {
    question: "Que es UML",
    response: `Lenguaje estandar para escribir planos de software. </br>
               que nos permite visualizar,especificar,construir y documentar la arquitectura de software.`,
  },
  {
    question: "Elementos de construccion de UML",
    response: `clases, interfaces, colaboraciones, clases activas, casos de uso, 
componentes y nodos. Son los elementos estructurales básicos que se pueden incluir en el modelo 
UML.</br> Existen variaciones de estos siete elementos, tales como actores, procesos, hilos y aplicaciones, 
documentos, archivos, bibliotecas, páginas y tablas.
`,
  },
  {
    question: "Principios agile mencione 3",
    response: `
      <ol>
        <li>Productos funcionando sobre una documentacion extensa</li>
        <li>Las personas y sus interacciones sobre los procesos y las herramientas</li>
        <li>La comunicacion con el cliente sobre la negociacion contractual</li>
        <li>La capacidad de respuesta al cambio sobre el seguimiento de un plan</li>
    </ol>
    
    `,
  },
  {
    question: "Que es Bdd",
    response: `<bold>Behavior Driven Development</bold> <br>
                técnica que mediante ejemplos de escenarios y comportamiento crea un entendimiento sencillo
y común para todos los que participan de la prueba. Un enfoque basado en BDD debería resultar en
una cobertura de prueba completa.`,
  },
  {
    question: "Que es TDD",
    response: `prueba orientada al desarrollador donde se traduce un caso de uso o funcionalidad en ejemplos
              prácticos hasta que el número de ejemplos sea suficiente como para describir la funcionalidad en
              forma completa.
              • Pilares
              o La implementación de las funciones justas que el cliente necesita y no más.
              o La minimización del número de defectos que llegan al software en fase de producción.
              o La producción de software modular, altamente reutilizable y preparado para el cambio.
              • Pasos
              o Implementar y ejecutar la prueba.
              o Refactorización para eliminar código duplicado.
              o Promover la mejora continua.`,
  },
  {
    question: "Que es ATDD",
    response: `técnica de prueba colaborativa donde las personas involucradas en la creación del software
                definen los criterios de aceptación que el sistema debe cumplir en las primeras etapas de desarrollo.
                El objetivo de este tipo de prueba es garantizar que todas estas partes interesadas estén de acuerdo
                con los principales objetivos del proyecto, especialmente en términos de la funcionalidad que el
                usuario final puede esperar`,
  },
  {
    question: "Como se relaciona un PO con factibilidad",
    response: `El Product Owner (PO) está estrechamente relacionado con la factibilidad de un proyecto en el contexto de la metodología Scrum. La justificación del negocio, que es una de las responsabilidades principales del PO, implica evaluar si un proyecto es viable y rentable. Esta evaluación se basa en varios factores que determinan la factibilidad del proyecto:`,
  },

  {
    question: "Que es el PUD",
    response: `Proceso Unificado de Desarrollo de software que utiliza UML para para conseguir un 
                desarrollo de software con una infraestructura de bloques de construcción del proceso y de 
                contenidos reutilizables.`,
  },
  {
    question: "Tipos de sistemas de informacion",
    response: `
              <ol>
                <li> Sistema de procesamiento de transacciones</li>
                <li>Sistema de Informacion Ejecutiva</li>
                <li>Sistema de Informacion de Gerencial</li>
                <li>Sistema de Automatizacion de Oficinas</li>
                <li>Sistema Experto</li>
                <li>Sistema de Soporte de Deciciones</li>
                <li> Sistema Planificación de Recursos</li>
                
              </ol>
    
    `,
  },
  {
    question: "Factibilidad tecnica(dar ejemplos)",
    response: ` Se refiere a
              • Los recursos necesarios como herramientas, conocimientos, experiencia que son necesarios para 
              efectuar las actividades o procesos que requiere el proyecto. <br>
              En el caso de la evaluación técnica podemos recurrir a una técnica llamada matriz de homogeneización, que 
              permite evaluar y seleccionar un proveedor entre varias alternativas:`,
  },
  {
    question: "Factibilidad operativa(dar ejemplos)",
    response: ` Se refiere a <br>
              • Todos aquellos recursos donde interviene algún tipo de actividad y depende de los recursos humanos 
              que participen durante la operación del proyecto. <br>
              • Posibilidad de éxito que tendrá el sistema al momento de ser implantado y operado por el personal de 
              la empresa.`,
  },
  {
    question: "Factibilidad economica(dar ejemplos)",
    response: `Un Estudio de Factibilidad Economica debe representar graficamente  los costos y los beneficios que 
                acarreará la puesta en marcha del sistema </br>
                <ul>
                  <li>Beneficios Tangibles</li>
                  <li>Beneficios Intangibles</li>
                </ul>
                Calculo de Relación costo-beneficio (R)</br>
                Calculo del ROI
                `,
  },
  {
    question: "Que es smoke test",
    response: `test básico de corto tiempo, para asegurar 
                el funcionamiento correcto e las funciones críticas del software en donde no 
                buscamos defectos sino confianza en la prueba. <br>
    `,
  },
  {
    question: "las relaciones uml",
    response: `conexiones entre elementos de UML<br>
          <ol>
            <li>Generalizacion</li>
            <li>Realizacion</li>
            <li>Asociacion</li>
            <li>Dependencia</li>
            <li>Agregacion</li>
            <li>Composicion</li>
          </ol>`,
  },
  {
    question: "ejemplificar los beneficios tangibles",
    response: "",
  },
  {
    question: "ejemplificar los beneficios intangibles",
    response: "",
  },
  {
    question: "que relacion tenian un servicio IT y los sistemas d información",
    response: "",
  },
  {
    question: "Como se describe un sistema de informacion y sus elementos",
    response: "Entrada,Procesamiento, Salida,Retroalimentacion",
  },
  {
    question: "Test de caja blanca(ejemplo)",
    response: "",
  },
  {
    question: "Test de caja negra(ejemplo)",
    response: "",
  },
  {
    question: "Modelo de vistas de un sistema",
    response: "",
  },
  {
    question: "Que diagramas se modelan en el dominio del problema",
    response: "",
  },
];
let questions = mezclarPreguntas(questionsBefore);
function mezclarPreguntas(preguntas) {
  for (let i = preguntas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]];
  }
  return preguntas;
}
preguntasNoResueltas = [];
let index = 0;
let score = 0;
function finished() {
  cuerpo.classList.add("d-none");

  result.classList.remove("d-none");
  result.innerHTML = `Has acertado ${score} de ${index} preguntas<br/>`;
  preguntasNoResueltas.forEach((element) => {
    element.question;

    result.innerHTML += `${element.question} <br/>`;
  });

  if (score == index) {
    result.classList.add("text-success");
  }
  btnStart.classList.remove("d-none");
}
function questionsAdd() {
  // Añadir la clase fade-out para iniciar la transición de desaparición
  pregunta.classList.add("fade-out");

  // Esperar el tiempo de la transición antes de cambiar el texto
  setTimeout(() => {
    pregunta.innerHTML =
      `${index + 1}/${questions.length} - ` + questions[index].question;

    // Eliminar la clase fade-out y añadir la clase fade-in para iniciar la transición de aparición
    pregunta.classList.remove("fade-out");
    pregunta.classList.add("fade-in");
    respuesta.innerHTML = questions[index].response;
    // Eliminar la clase fade-in después de que la transición haya terminado
    setTimeout(() => {
      pregunta.classList.remove("fade-in");
    }, 200); // El tiempo debe coincidir con la duración de la transición en CSS
  }, 200); // El tiempo debe coincidir con la duración de la transición en CSS
}

//START
btnStart.addEventListener("click", () => {
  preguntasNoResueltas = [];
  result.classList.add("d-none");
  questions = mezclarPreguntas(questionsBefore);
  index = 0;
  score = 0;
  btnStart.classList.add("d-none");
  cuerpo.classList.remove("d-none");
  questionsAdd();
});

const toEnd = document.getElementById("toEnd");
toEnd.addEventListener("click", () => {
  finished();
});

const nextNo = document.getElementById("nextNo");
nextNo.addEventListener("click", () => {
  index++;

  if (index < questions.length) {
    preguntasNoResueltas.push(questions[index]);
    questionsAdd();
  } else {
    finished();
  }
  questionsAdd();
});

const nextYes = document.getElementById("nextYes");
nextYes.addEventListener("click", () => {
  index++;
  score++;
  if (index < questions.length) {
    questionsAdd();
  } else {
    finished();
  }
  questionsAdd();
});
