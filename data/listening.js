/*
  متن‌های شنیداری تازه‌نوشته برای هر سطح، با دو سؤال درک مطلب.
  متن با صدای مرورگر پخش می‌شود و بعد از جواب دادن نشان داده می‌شود.
*/
window.SEE_LISTEN = [
  {
    id: "listen-a1", level: "A1",
    text: "Hola, me llamo Marta. Vivo en Sevilla con mi perro. Por la mañana trabajo en una tienda y por la tarde estudio inglés.",
    questions: [
      { q: "¿Dónde vive Marta?", options: ["En Madrid", "En Sevilla", "En Barcelona"], answer: 1 },
      { q: "¿Qué hace por la tarde?", options: ["Trabaja en una tienda", "Estudia inglés", "Duerme"], answer: 1 }
    ],
    note: "این متن درباره‌ی محل زندگی و کارهای روزانه است. «Vivo en» محل زندگی را می‌گوید و «por la tarde» زمان را نشان می‌دهد."
  },
  {
    id: "listen-a2", level: "A2",
    text: "Ayer fui al mercado con mi hermana. Compramos verduras y pescado. Después, cocinamos juntas y comimos en el jardín.",
    questions: [
      { q: "¿Qué compraron?", options: ["Frutas y pan", "Verduras y pescado", "Carne y leche"], answer: 1 },
      { q: "¿Dónde comieron?", options: ["En la cocina", "En el jardín", "En un restaurante"], answer: 1 }
    ],
    note: "رویدادهای گذشته با pretérito indefinido بیان شده‌اند: fui، compramos، cocinamos، comimos. «Ayer» زمان را روشن می‌کند."
  },
  {
    id: "listen-b1", level: "B1",
    text: "Me llamó mi jefe para decirme que el proyecto se retrasaba. Aunque estaba cansada, decidí quedarme en la oficina hasta tarde para terminarlo.",
    questions: [
      { q: "¿Por qué se quedó la persona en la oficina?", options: ["Porque estaba de vacaciones", "Para terminar el proyecto", "Porque no tenía casa"], answer: 1 },
      { q: "¿Cómo estaba la persona?", options: ["Contenta", "Cansada", "Enferma"], answer: 1 }
    ],
    note: "«Aunque» تضاد می‌سازد و «para terminarlo» هدف را می‌گوید. ضمیر «lo» به proyecto برمی‌گردد."
  },
  {
    id: "listen-b2", level: "B2",
    text: "Según el informe, el teletrabajo ha aumentado la productividad en algunos sectores, aunque también ha generado aislamiento. Los expertos coinciden en que las empresas deben establecer horarios claros.",
    questions: [
      { q: "¿Qué efecto tiene el teletrabajo según el informe?", options: ["Solo efectos negativos", "Aumenta la productividad en algunos sectores, pero puede generar aislamiento", "No tiene efectos"], answer: 1 },
      { q: "¿Qué recomiendan los expertos?", options: ["Trabajar más horas", "Establecer horarios claros", "Eliminar el teletrabajo"], answer: 1 }
    ],
    note: "«Según» منبع اطلاعات را می‌گوید و «aunque» تضاد می‌سازد. «coinciden en que» یعنی نظر مشترک."
  },
  {
    id: "listen-c1", level: "C1",
    text: "Por más que el gobierno insistiera en que la reforma era necesaria, los sindicatos se negaron a aceptarla sin una negociación previa. Desde entonces, las conversaciones se han estancado.",
    questions: [
      { q: "¿Cómo reaccionaron los sindicatos?", options: ["Aceptaron la reforma de inmediato", "Se negaron sin una negociación previa", "Pidieron más impuestos"], answer: 1 },
      { q: "¿Cuál es la situación actual?", options: ["Las conversaciones avanzan", "Las conversaciones se han estancado", "La reforma se aprobó"], answer: 1 }
    ],
    note: "«Por más que» تضاد قوی با subjuntivo می‌سازد. «se han estancado» وضعیت فعلی را با pretérito perfecto نشان می‌دهد."
  },
  {
    id: "listen-c2", level: "C2",
    text: "Cabe reconocer que la crítica del ensayo, aunque mordaz, resulta en el fondo justa. Sin embargo, el autor deja sin resolver el trasfondo ético que plantea, de modo que su argumento queda inconcluso.",
    questions: [
      { q: "¿Qué valoración hace el hablante del ensayo?", options: ["Lo considera totalmente injusto", "Reconoce que la crítica es mordaz pero justa", "No tiene ninguna crítica"], answer: 1 },
      { q: "¿Qué queda sin resolver?", options: ["El trasfondo ético", "La economía", "La historia"], answer: 0 }
    ],
    note: "«Cabe reconocer» و «Sin embargo» سبک رسمی دارند. «de modo que» نتیجه‌ی ناتمام‌ماندن استدلال را نشان می‌دهد."
  }
];

// متن‌های بیشتر برای هر سطح (هر سطح حالا چند متن دارد)
window.SEE_LISTEN.push(
  { id: "listen-a1-2", level: "A1",
    text: "En mi familia somos cuatro: mis padres, mi hermana y yo. Mi madre es profesora y mi padre es médico. Los domingos comemos juntos en casa.",
    questions: [
      { q: "¿Cuántas personas hay en la familia?", options: ["Tres", "Cuatro", "Cinco"], answer: 1 },
      { q: "¿Qué es el padre?", options: ["Profesor", "Médico", "Ingeniero"], answer: 1 }
    ],
    note: "«Somos» و «es» از ser برای شغل و تعداد استفاده شده‌اند. «comemos» فعل باقاعده‌ی زمان حال است." },
  { id: "listen-a1-3", level: "A1",
    text: "Hoy hace mucho sol en Valencia. Vamos a la playa a las diez y volvemos a casa a las dos. Me gusta nadar en el mar.",
    questions: [
      { q: "¿Qué tiempo hace hoy?", options: ["Llueve", "Hace sol", "Nieva"], answer: 1 },
      { q: "¿A qué hora vuelven a casa?", options: ["A las diez", "A las dos", "A las cinco"], answer: 1 }
    ],
    note: "«Hace sol» و «hace mucho sol» برای توصیف هوا هستند. ساخت «a las + ساعت» زمان را نشان می‌دهد." },
  { id: "listen-a2-2", level: "A2",
    text: "El mes pasado empecé un curso de cocina. Voy los martes por la tarde y ya sé preparar paella. Mi profesor es muy simpático.",
    questions: [
      { q: "¿Cuándo empezó el curso?", options: ["Esta semana", "El mes pasado", "Hoy"], answer: 1 },
      { q: "¿Qué sabe preparar ya?", options: ["Paella", "Pizza", "Sopa"], answer: 0 }
    ],
    note: "«Empecé» رویداد گذشته‌ی تمام‌شده است (indefinido). «ya sé preparar» یعنی الان بلد است." },
  { id: "listen-a2-3", level: "A2",
    text: "Ayer no fui al gimnasio porque tenía mucho trabajo. Hoy voy a ir por la mañana, antes de la reunión.",
    questions: [
      { q: "¿Por qué no fue ayer?", options: ["Estaba enfermo", "Tenía mucho trabajo", "Estaba de vacaciones"], answer: 1 },
      { q: "¿Cuándo va a ir hoy?", options: ["Por la noche", "Por la mañana", "Mañana"], answer: 1 }
    ],
    note: "«No fui» گذشته‌ی تمام‌شده و «tenía» توضیح وضعیت گذشته است. «voy a ir» آینده‌ی نزدیک است." },
  { id: "listen-b1-2", level: "B1",
    text: "Cuando era pequeña, mi abuela me contaba historias antes de dormir. Ahora yo le cuento a mi sobrino las mismas historias, aunque no las recuerdo todas.",
    questions: [
      { q: "¿Qué hacía la abuela?", options: ["Cocinaba", "Contaba historias", "Trabajaba en el campo"], answer: 1 },
      { q: "¿Qué hace la persona ahora?", options: ["Le cuenta historias a su sobrino", "Vive con su abuela", "Estudia medicina"], answer: 0 }
    ],
    note: "«Contaba» توصیف عادت گذشته (imperfecto) است. «aunque» تضاد با حافظه‌ی ناقص را نشان می‌دهد." },
  { id: "listen-b1-3", level: "B1",
    text: "Me han ofrecido un trabajo en Barcelona, pero todavía no sé si aceptarlo. Mi familia quiere que me quede aquí, así que tengo que pensarlo bien.",
    questions: [
      { q: "¿Qué le han ofrecido?", options: ["Un viaje", "Un trabajo en Barcelona", "Una casa"], answer: 1 },
      { q: "¿Qué quiere su familia?", options: ["Que se vaya", "Que se quede aquí", "Que estudie"], answer: 1 }
    ],
    note: "«Quiere que me quede» خواسته‌ی دیگران با subjuntivo است. «así que» نتیجه‌ی آن را می‌گوید." },
  { id: "listen-b2-2", level: "B2",
    text: "La contaminación acústica en las ciudades puede afectar a la salud, sobre todo cuando se duerme mal. Por eso, algunos ayuntamientos han limitado el tráfico nocturno, aunque no todos los vecinos están de acuerdo.",
    questions: [
      { q: "¿Qué problema se menciona?", options: ["La falta de agua", "La contaminación acústica", "El precio de la vivienda"], answer: 1 },
      { q: "¿Qué han hecho algunos ayuntamientos?", options: ["Aumentar el tráfico", "Limitar el tráfico nocturno", "Prohibir las bicicletas"], answer: 1 }
    ],
    note: "«Por eso» نتیجه‌ی ربط است. «se duerme mal» ساخت غیرشخصی با se است. «aunque» مخالفت بعضی را نشان می‌دهد." },
  { id: "listen-b2-3", level: "B2",
    text: "Si el proyecto se hubiera aprobado a tiempo, la ciudad tendría ahora un nuevo parque. Sin embargo, la falta de presupuesto lo retrasó varios años.",
    questions: [
      { q: "¿Qué habría tenido la ciudad?", options: ["Un nuevo parque", "Un hospital", "Una autopista"], answer: 0 },
      { q: "¿Qué causó el retraso?", options: ["La falta de presupuesto", "El mal tiempo", "La oposición de los vecinos"], answer: 0 }
    ],
    note: "«Si hubiera aprobado» شرط غیرواقعی گذشته است و «tendría» نتیجه‌ی فرضی امروز را می‌گوید." },
  { id: "listen-c1-2", level: "C1",
    text: "A pesar de que la tecnología ha facilitado el acceso al conocimiento, algunos expertos advierten de que la atención se ha fragmentado. Lo que preocupa no es tanto la cantidad de información como la capacidad de profundizar en ella.",
    questions: [
      { q: "¿Qué advierten algunos expertos?", options: ["Que la atención se ha fragmentado", "Que la tecnología es cara", "Que no hay libros"], answer: 0 },
      { q: "¿Qué es lo que preocupa?", options: ["La cantidad de información", "La capacidad de profundizar", "El precio de los dispositivos"], answer: 1 }
    ],
    note: "«A pesar de que» تضاد با indicativo است. ساخت «lo que preocupa no es… sino…» تأکید مقایسه‌ای دارد." },
  { id: "listen-c1-3", level: "C1",
    text: "Ha sido un año de cambios profundos en el sector. Pese a las dificultades iniciales, las empresas que apostaron por la innovación han logrado sortear la crisis mejor que las demás.",
    questions: [
      { q: "¿Qué han logrado las empresas innovadoras?", options: ["Evitar la crisis por completo", "Sortear la crisis mejor que las demás", "Cerrar"], answer: 1 },
      { q: "¿Cómo ha sido el año?", options: ["Tranquilo", "De cambios profundos", "Sin problemas"], answer: 1 }
    ],
    note: "«Pese a» تضاد با اسم است. «han logrado sortear» نشان می‌دهد که بحران با تلاش پشت سر گذاشته شده است." },
  { id: "listen-c2-2", level: "C2",
    text: "No cabe duda de que el debate sobre la censura en internet es complejo. Lo que suele pasarse por alto es que cada restricción, por bienintencionada que parezca, puede socavar la confianza de los usuarios en la red.",
    questions: [
      { q: "¿Qué suele pasarse por alto?", options: ["El coste económico", "Que cada restricción puede socavar la confianza", "Que internet es nuevo"], answer: 1 },
      { q: "¿Cómo presenta el hablante el debate?", options: ["Sencillo", "Complejo", "Irrelevante"], answer: 1 }
    ],
    note: "«No cabe duda» و «por bienintencionada que parezca» سبک بسیار رسمی دارند. «suele pasarse por alto» ساخت غیرشخصی و توصیفی است." },
  { id: "listen-c2-3", level: "C2",
    text: "El informe, lejos de zanjar la polémica, la ha avivado: sus conclusiones, cuando menos discutibles, se apoyan en una muestra exigua. De ahí que varios especialistas reclamen una revisión exhaustiva.",
    questions: [
      { q: "¿Qué efecto ha tenido el informe?", options: ["Ha zanjado la polémica", "La ha avivado", "La ha ignorado"], answer: 1 },
      { q: "¿Qué piden varios especialistas?", options: ["Suspender el informe", "Una revisión exhaustiva", "Publicar más datos"], answer: 1 }
    ],
    note: "«Lejos de zanjar» یعنی برعکس حل کردن. «De ahí que» نتیجه‌ی منطقی را با subjuntivo می‌آورد." }
);
