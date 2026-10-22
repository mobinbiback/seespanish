/*
  seespanish · تمرین امتحان
  - همه‌ی سؤال‌ها تازه نوشته شده‌اند و از نمونه‌سوال‌های رسمی کپی نشده‌اند.
  - نوع‌ها: mcq (چندگزینه‌ای)، fill (جای خالی)، writing (نوشتن با چک‌لیست).
  - grammar و vocab به داده‌های data.js و همین فایل وصل‌اند.
  - اگر در پاسخ "fill" چند جواب درست هست، همه در accept آمده‌اند.
*/
window.SEE_PRACTICE = {
  vocab: {
    A1: [
      { es: "vivir", fa: "زندگی کردن", topic: "فعل پایه" },
      { es: "trabajar", fa: "کار کردن", topic: "شغل" },
      { es: "hospital", fa: "بیمارستان", topic: "شهر و خدمات" },
      { es: "simpático", fa: "خوش‌برخورد", topic: "صفت شخصیت" },
      { es: "cocinar", fa: "آشپزی کردن", topic: "سرگرمی" },
      { es: "fin de semana", fa: "آخر هفته", topic: "زمان" },
      { es: "hermano", fa: "برادر", topic: "خانواده" },
      { es: "origen", fa: "زادگاه", topic: "هویت" }
    ],
    A2: [
      { es: "mercado", fa: "بازار", topic: "خرید" },
      { es: "comprar", fa: "خریدن", topic: "خرید" },
      { es: "tarde", fa: "دیر / عصر", topic: "زمان" },
      { es: "campo", fa: "روستا / دشت", topic: "مکان" },
      { es: "vacaciones", fa: "تعطیلات", topic: "سفر" },
      { es: "ayer", fa: "دیروز", topic: "زمان گذشته" },
      { es: "barrio", fa: "محله", topic: "شهر" },
      { es: "cansado", fa: "خسته", topic: "حالت" }
    ],
    B1: [
      { es: "exagerar", fa: "اغراق کردن", topic: "رفتار" },
      { es: "dudar", fa: "شک کردن", topic: "نظر" },
      { es: "empresa", fa: "شرکت", topic: "کار" },
      { es: "reclamación", fa: "شکایت", topic: "خدمات" },
      { es: "disculpa", fa: "عذرخواهی", topic: "ارتباط" },
      { es: "propuesta", fa: "پیشنهاد", topic: "ارتباط" },
      { es: "barato", fa: "ارزان", topic: "خرید" },
      { es: "mejorar", fa: "بهتر شدن", topic: "یادگیری" }
    ],
    B2: [
      { es: "estrés", fa: "استرس", topic: "سلامت و کار" },
      { es: "teletrabajo", fa: "کار از راه دور", topic: "کار" },
      { es: "límite", fa: "حد و مرز", topic: "قوانین" },
      { es: "beneficio", fa: "سود / مزیت", topic: "اقتصاد" },
      { es: "fomentar", fa: "تشویق کردن", topic: "جامعه" },
      { es: "contaminación", fa: "آلودگی", topic: "محیط زیست" },
      { es: "opinar", fa: "نظر دادن", topic: "گفتگو" },
      { es: "convencer", fa: "قانع کردن", topic: "بحث" }
    ],
    C1: [
      { es: "financiación", fa: "تأمین مالی", topic: "اقتصاد" },
      { es: "mantenerse firme", fa: "محکم ماندن", topic: "تصمیم" },
      { es: "garantizar", fa: "تضمین کردن", topic: "قانون" },
      { es: "repercusión", fa: "پیامد", topic: "تحلیل" },
      { es: "inteligencia artificial", fa: "هوش مصنوعی", topic: "فناوری" },
      { es: "precariedad", fa: "ناپایداری شغلی", topic: "کار" },
      { es: "sostener", fa: "پشتیبانی کردن / نگه داشتن", topic: "استدلال" },
      { es: "desmentir", fa: "تکذیب کردن", topic: "بحث" }
    ],
    C2: [
      { es: "hipótesis", fa: "فرضیه", topic: "استدلال" },
      { es: "matiz", fa: "ظرافت معنا", topic: "زبان" },
      { es: "rebatir", fa: "رد کردن استدلال", topic: "بحث" },
      { es: "cavilar", fa: "عمیقاً فکر کردن", topic: "ادبی" },
      { es: "trasfondo", fa: "زمینه‌ی پنهان", topic: "تحلیل" },
      { es: "sesgo", fa: "سوگیری", topic: "رسانه" },
      { es: "vehemente", fa: "پرشور", topic: "سبک" },
      { es: "ambivalente", fa: "دوگانه", topic: "احساس" }
    ]
  },

  items: [
    // ---------- A1 ----------
    {
      id: "a1-r1", level: "A1", skill: "comprensión lectora", type: "mcq",
      prompt: "Lee el texto: «Hola, me llamo Laura. Soy de Madrid, pero vivo en Valencia. Trabajo en un hospital y tengo dos hermanos. Me gusta cocinar los fines de semana.»",
      question: "¿Dónde vive Laura?",
      options: ["En Madrid", "En Valencia", "En un hospital", "Con sus hermanos"],
      answer: 1,
      analysis: "پاسخ درست «En Valencia» است. این سؤال محل زندگی را می‌سنجد. «soy de» مبدأ را نشان می‌دهد و «vivo en» محل فعلی زندگی را. اگر این دو را قاطی کنی، جواب را اشتباه می‌دهی.",
      grammar: ["a1-ser", "a1-presente-regular"],
      vocab: ["vivir", "hospital", "fin de semana"]
    },
    {
      id: "a1-f1", level: "A1", skill: "gramática en contexto", type: "fill",
      prompt: "Completa: Mi hermana ___ muy simpática.",
      accept: ["es"],
      answer: "es",
      analysis: "پاسخ «es» است. برای توصیف ویژگی دائمی شخص از ser استفاده می‌شود. اگر «está» بنویسی، جمله به معنای حالت موقت می‌شود، که اینجا درست نیست.",
      grammar: ["a1-ser", "a1-estar"],
      vocab: ["simpático", "hermano"]
    },
    {
      id: "a1-w1", level: "A1", skill: "expresión escrita", type: "writing",
      prompt: "Escribe tres frases sobre ti (30 a 40 palabras): tu nombre, de dónde eres y un pasatiempo.",
      minWords: 30, maxWords: 40,
      checklist: [
        "نام خودم را با «me llamo» گفته‌ام",
        "ملیت یا زادگاهم را با ser گفته‌ام",
        "یک سرگرمی را با «me gusta + مصدر» نوشته‌ام",
        "سه جمله نوشته‌ام"
      ],
      analysis: "این تمرین توانایی نوشتن ساده و درست را می‌سنجد. سه ساختار اصلی A1 را در آن به کار ببر.",
      grammar: ["a1-ser", "a1-gustar"],
      vocab: ["origen", "cocinar"]
    },

    // ---------- A2 ----------
    {
      id: "a2-r1", level: "A2", skill: "comprensión lectora", type: "mcq",
      prompt: "Lee el texto: «Ayer fui al mercado con mi madre. Compramos frutas y pan. Cuando llegamos a casa, ya era tarde y cocinamos rápido.»",
      question: "¿Qué hicieron ayer?",
      options: ["Fueron al mercado", "Cocinaron una cena especial", "Llegaron tarde a la oficina", "Compraron carne"],
      answer: 0,
      analysis: "پاسخ «Fueron al mercado» است. فعل‌های «fui» و «compramos» کارهای تمام‌شده‌اند و با pretérito indefinido آمده‌اند. «era tarde» توصیف وضعیت است و با imperfecto آمده. گزینه‌های دیگر در متن نیستند.",
      grammar: ["a2-preterito-indefinido", "a2-contraste-indefinido-imperfecto"],
      vocab: ["mercado", "comprar", "tarde"]
    },
    {
      id: "a2-f1", level: "A2", skill: "gramática en contexto", type: "fill",
      prompt: "Completa con el pretérito imperfecto: Cuando era niño, ___ (vivir) en el campo.",
      accept: ["vivia", "vivía"],
      answer: "vivía",
      analysis: "پاسخ «vivía» است. برای عادت و زندگی در دوره‌ای طولانی در گذشته از imperfecto استفاده می‌شود. اگر «viví» بنویسی، یعنی یک رویداد مشخص و تمام‌شده را گفته‌ای.",
      grammar: ["a2-preterito-imperfecto", "a2-contraste-indefinido-imperfecto"],
      vocab: ["campo"]
    },
    {
      id: "a2-w1", level: "A2", skill: "expresión escrita", type: "writing",
      prompt: "Describe tus últimas vacaciones (80 a 100 palabras). Usa el pretérito indefinido y el imperfecto.",
      minWords: 80, maxWords: 100,
      checklist: [
        "برای کارهای تمام‌شده از indefinido استفاده کرده‌ام",
        "برای توصیف یا عادت از imperfecto استفاده کرده‌ام",
        "حداقل دو نشانه‌ی زمان (ayer، el año pasado...) دارم",
        "متن را با یک ربط ساده به هم وصل کرده‌ام"
      ],
      analysis: "کنار هم گذاشتن indefinido و imperfecto سخت‌ترین بخش A2 است. هر بار بپرس: این یک رویداد است یا توصیف پس‌زمینه؟",
      grammar: ["a2-preterito-indefinido", "a2-contraste-indefinido-imperfecto", "a2-preterito-imperfecto"],
      vocab: ["vacaciones", "ayer"]
    },

    // ---------- B1 ----------
    {
      id: "b1-r1", level: "B1", skill: "comprensión lectora", type: "mcq",
      prompt: "Lee el texto: «Mi amiga dijo que había viajado a Perú, pero no la creo. Ella siempre exagera cuando habla de sus viajes.»",
      question: "¿Qué opina el narrador de lo que dice su amiga?",
      options: ["Está seguro de que viajó a Perú", "Duda de lo que dice la amiga", "Ella nunca viaja", "Viajó con él a Perú"],
      answer: 1,
      analysis: "پاسخ «Duda de lo que dice» است. «dijo que había viajado» گفتار غیرمستقیم است و زمان را یک گام به گذشته برده. فعل creer در جمله‌ی منفی («no la creo») یعنی باور نداشتن و تردید. کلمه‌ی exagera هم نشان می‌دهد که گوینده به حرف دوستش اعتماد ندارد.",
      grammar: ["b1-estilo-indirecto", "b1-opinion-creer"],
      vocab: ["exagerar", "dudar"]
    },
    {
      id: "b1-f1", level: "B1", skill: "gramática en contexto", type: "fill",
      prompt: "Completa: Espero que tú ___ (poder) venir mañana.",
      accept: ["puedas"],
      answer: "puedas",
      analysis: "پاسخ «puedas» است. بعد از «espero que» زمان حال subjuntivo می‌آید، چون خواسته یا امید است و واقعیت ثابت‌شده نیست.",
      grammar: ["b1-subjuntivo-deseos"],
      vocab: ["propuesta"]
    },
    {
      id: "b1-w1", level: "B1", skill: "expresión escrita", type: "writing",
      prompt: "Escribe un mensaje a un amigo (130 a 150 palabras): explica por qué no puedes ir a su fiesta y propón otra fecha.",
      minWords: 130, maxWords: 150,
      checklist: [
        "لحن غیررسمی و مناسب دوست را رعایت کرده‌ام",
        "دلیل را با porque یا como توضیح داده‌ام",
        "یک پیشنهاد جایگزین با subjuntivo یا ¿Qué tal si...? نوشته‌ام",
        "متن بین ۱۳۰ تا ۱۵۰ کلمه است"
      ],
      analysis: "این شکل تمرین نزدیک به بخش نوشتاری DELE B1 است؛ در امتحان واقعی دو تکلیف نوشتاری با محدوده‌ی کلمه‌ای مشخص داده می‌شود. کلمه‌ها را بشمار.",
      grammar: ["b1-causa-finalidad", "b1-subjuntivo-deseos"],
      vocab: ["disculpa", "propuesta"]
    },

    // ---------- B2 ----------
    {
      id: "b2-r1", level: "B2", skill: "comprensión lectora", type: "mcq",
      prompt: "Lee el texto: «Desde que muchas empresas adoptaron el teletrabajo, se han registrado más casos de estrés laboral, aunque algunos expertos creen que el problema no se debe al modelo, sino a la falta de límites claros.»",
      question: "Según el texto, el estrés laboral…",
      options: ["se debe al modelo de trabajo en sí", "se relaciona con la falta de límites claros", "ha disminuido con el teletrabajo", "no tiene ninguna relación con el trabajo"],
      answer: 1,
      analysis: "پاسخ «se relaciona با نبود مرزهای روشن» است. ساختار «no se debe… sino a…» تضاد را نشان می‌دهد و نظر کارشناسان را از نظر نویسنده جدا می‌کند. «aunque» هم قیدی است که اطلاعات مخالف می‌آورد.",
      grammar: ["b2-concesivas-avanzadas", "b2-pasiva"],
      vocab: ["estrés", "teletrabajo", "límite"]
    },
    {
      id: "b2-f1", level: "B2", skill: "gramática en contexto", type: "fill",
      prompt: "Completa: Si hubiera sabido que llovía, ___ (llevar) paraguas.",
      accept: ["habria llevado", "habría llevado"],
      answer: "habría llevado",
      analysis: "پاسخ «habría llevado» است. برای شرط غیرواقعی در گذشته، جمله‌ی شرط با pluscuamperfecto de subjuntivo و جمله‌ی نتیجه با condicional compuesto ساخته می‌شود.",
      grammar: ["b2-condicionales", "b2-condicional-compuesto"],
      vocab: ["límite"]
    },
    {
      id: "b2-w1", level: "B2", skill: "expresión escrita", type: "writing",
      prompt: "Escribe un artículo de opinión (150 a 180 palabras) sobre si las redes sociales deben tener límites para los menores de edad.",
      minWords: 150, maxWords: 180,
      checklist: [
        "یک نظر روشن در ابتدا آورده‌ام",
        "حداقل دو استدلال با ربط‌های ساده یا پیشرفته دارم",
        "بعد از عبارت‌های نظر، subjuntivo یا indicativo را درست به کار برده‌ام",
        "یک بار ساخت مجهول یا se غیرشخصی استفاده کرده‌ام"
      ],
      analysis: "هدف این تمرین نوشتن استدلالی است، نه فقط کنار هم گذاشتن جمله. قبل از نوشتن، دو دلیل و یک مخالف را فهرست کن.",
      grammar: ["b2-subj-opinion", "b2-conectores-consecuencia", "b2-pasiva"],
      vocab: ["opinar", "fomentar", "beneficio"]
    },

    // ---------- C1 ----------
    {
      id: "c1-r1", level: "C1", skill: "comprensión lectora", type: "mcq",
      prompt: "Lee el texto: «Por más que intentaron convencerla, la directora se mantuvo firme: el proyecto no se llevaría a cabo hasta que no se garantizara la financiación.»",
      question: "¿Qué indica la expresión «Por más que intentaron»?",
      options: ["Una causa del éxito del proyecto", "Una concesión: aunque lo intentaron, no cambió la decisión", "Una finalidad del intento", "Una comparación de intensidad"],
      answer: 1,
      analysis: "پاسخ «concesión» است: با وجود تلاش‌ها، تصمیم عوض نشد. «por más que» در C1 یکی از ساخت‌های اصلی تضاد است. «hasta que no se garantizara» هم نشان می‌دهد که شرط با subjuntivo بیان شده.",
      grammar: ["c1-concesivas-avanzadas", "c1-subjuntivo-sustantivas"],
      vocab: ["financiación", "mantenerse firme", "garantizar"]
    },
    {
      id: "c1-f1", level: "C1", skill: "gramática en contexto", type: "fill",
      prompt: "Completa: Te ayudaré ___ me avises con tiempo.",
      accept: ["siempre que", "siempre y cuando", "solo si"],
      answer: "siempre que",
      analysis: "پاسخ «siempre que» (یا siempre y cuando / solo si) است. این ربط شرط دارد و بعد از آن subjuntivo می‌آید.",
      grammar: ["c1-condiciones-complejas"],
      vocab: ["garantizar"]
    },
    {
      id: "c1-w1", level: "C1", skill: "expresión escrita", type: "writing",
      prompt: "Escribe un comentario (180 a 220 palabras) sobre el impacto de la inteligencia artificial en el empleo.",
      minWords: 180, maxWords: 220,
      checklist: [
        "ساختار روشن: مقدمه، دو یا سه استدلال و نتیجه",
        "زبان رسمی و بدون عامیانه",
        "حداقل یک جمله با احتمال در زمان آینده یا شرطی",
        "یک پیامد یا تحلیل بلندمدت را توضیح داده‌ام"
      ],
      analysis: "در C1 تمرکز روی انسجام و سبک است، نه فقط درستی گرامر. برای هر استدلال یک مثال یا پیامد بیاور.",
      grammar: ["c1-condicional-probabilidad", "c1-causa-finalidad-avanzada"],
      vocab: ["inteligencia artificial", "precariedad", "repercusión"]
    },

    // ---------- C2 ----------
    {
      id: "c2-r1", level: "C2", skill: "comprensión lectora", type: "mcq",
      prompt: "Lee el texto: «No sé si habría llegado a tiempo de haber tomado otro tren; lo cierto es que, de haberlo sabido, habría cambiado mis planes.»",
      question: "¿Qué expresa la estructura «de haberlo sabido»?",
      options: ["Una hipótesis en el pasado que no se cumplió", "Una orden directa en presente", "Un hecho confirmado en el presente", "Una comparación de igualdad"],
      answer: 0,
      analysis: "پاسخ «فرض گذشته‌ای که محقق نشده» است. «de haberlo sabido» معادل «si lo hubiera sabido» است و با نتیجه‌ی condicional compuesto همراه می‌شود.",
      grammar: ["c2-condicional-pasado"],
      vocab: ["hipótesis", "matiz"]
    },
    {
      id: "c2-f1", level: "C2", skill: "gramática en contexto", type: "fill",
      prompt: "Completa: Por ___ que insistas, no cambiará de opinión.",
      accept: ["mucho"],
      answer: "mucho",
      analysis: "پاسخ «mucho» است: por mucho que. این ساخت تضاد قوی می‌سازد و با subjuntivo می‌آید. با «poco» یا «bien» معنی را عوض می‌کنی.",
      grammar: ["c2-marcadores-avanzados", "b2-concesivas-avanzadas"],
      vocab: ["rebatir", "sesgo"]
    },
    {
      id: "c2-w1", level: "C2", skill: "expresión escrita", type: "writing",
      prompt: "Escribe un texto argumentativo (250 a 280 palabras) que rebata la idea de que la lectura en papel desaparecerá.",
      minWords: 250, maxWords: 280,
      checklist: [
        "تز روشن و یک جمله‌ی مخالف را رد کرده‌ام",
        "از نشانه‌های ربط پیشرفته استفاده کرده‌ام",
        "لحن و واژگان را متناسب با متن رسمی انتخاب کرده‌ام",
        "در پایان جمع‌بندی دارم که از تز اولیه دفاع می‌کند"
      ],
      analysis: "در C2 توانایی بیان استدلال ظریف و کنترل سبک مهم است. مرز بین گفتار رسمی و خنثی را حفظ کن.",
      grammar: ["c2-registros", "c2-marcadores-avanzados"],
      vocab: ["rebatir", "matiz", "trasfondo"]
    }
  ]
};
