/*
  سؤال‌های اضافه‌ی تمرین (A1 و A2) به‌صورت تازه نوشته شده‌اند.
  بعد از practice.js بارگذاری می‌شوند.
*/
window.SEE_PRACTICE.items.push(
  {
    id: "a1-r2", level: "A1", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Mi hermano se levanta a las siete. Desayuna pan y café, y después va a la universidad en bicicleta.»",
    question: "¿Cómo va el hermano a la universidad?",
    options: ["En autobús", "A pie", "En bicicleta", "En coche"],
    answer: 2,
    analysis: "پاسخ «En bicicleta» است. va یعنی «می‌رود» و در ادامه en bicicleta وسیله‌ی رفت‌وآمد را می‌گوید. «se levanta» فعل بازتابی است: ضمیر se قبل از فعل صرف‌شده آمده.",
    grammar: ["a1-reflexivos", "a1-presente-regular"],
    vocab: ["vivir"]
  },
  {
    id: "a1-f2", level: "A1", skill: "gramática en contexto", type: "fill",
    prompt: "Completa: A mi madre ___ (gustar) cocinar los domingos.",
    accept: ["le gusta"],
    answer: "le gusta",
    analysis: "پاسخ «le gusta» است. فاعل gustar خود کار (cocinar) است، پس فعل به شکل مفرد می‌آید. ضمیر «le» نشان می‌دهد که خوشایند برای «مادر» است.",
    grammar: ["a1-gustar"],
    vocab: ["cocinar"]
  },
  {
    id: "a2-r2", level: "A2", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Esta semana he visitado a mis abuelos dos veces. El año pasado no los vi tanto, porque viví en otra ciudad.»",
    question: "¿Qué indica «El año pasado no los vi tanto»?",
    options: ["Visita a los abuelos esta semana", "Menos visitas en un periodo terminado", "Que los abuelos viven en otra ciudad", "Que el autor vive con ellos"],
    answer: 1,
    analysis: "پاسخ «کمتر دیدن در یک دوره‌ی تمام‌شده» است. «el año pasado» زمان تمام‌شده است و indefinido «vi» آمده، در حالی که «he visitado» برای هفته‌ی جاری است که هنوز تمام نشده.",
    grammar: ["a2-contraste-perfecto-indefinido", "a2-pronombres-od-oi"],
    vocab: ["ayer", "tarde"]
  },
  {
    id: "a2-f2", level: "A2", skill: "gramática en contexto", type: "fill",
    prompt: "Completa con el imperativo (tú): Este libro es muy bueno, ___ (leerlo) hoy.",
    accept: ["leelo", "léelo"],
    answer: "léelo",
    analysis: "پاسخ «léelo» است. امر مثبت tú است و ضمیر مفعولی «lo» به انتهای فعل می‌چسبد. تلفظ کلمه روی «le» است، پس accent نوشته می‌شود.",
    grammar: ["a2-imperativo", "a2-pronombres-od-oi"],
    vocab: ["comprar"]
  }
);
