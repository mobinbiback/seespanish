/*
  تمرین‌های اضافه‌ی B1، تازه نوشته شده‌اند.
  بعد از practice-extra.js بارگذاری می‌شوند.
*/
window.SEE_PRACTICE.items.push(
  {
    id: "b1-r2", level: "B1", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Cuando llegué a la estación, el tren ya había salido. Mi hermano me esperaba desde hacía media hora.»",
    question: "¿Qué había pasado antes de que llegara el narrador?",
    options: ["El tren había llegado tarde", "El tren ya había salido", "El hermano llegó después que él", "El narrador había perdido el autobús"],
    answer: 1,
    analysis: "پاسخ «قطار قبلاً رفته بود» است. «había salido» pluscuamperfecto است و کاری را نشان می‌دهد که قبل از رسیدن راوی تمام شده. «desde hacía media hora» مدت زمان ادامه‌دار را در گذشته نشان می‌دهد.",
    grammar: ["b1-pluscuamperfecto", "b1-imperfecto-indefinido"],
    vocab: []
  },
  {
    id: "b1-f2", level: "B1", skill: "gramática en contexto", type: "fill",
    prompt: "Completa en estilo indirecto: Ella dijo: «Vendré mañana.» → Ella dijo que ___ (venir) al día siguiente.",
    accept: ["vendria", "vendría"],
    answer: "vendría",
    analysis: "پاسخ «vendría» است. در گزارش گفته‌ی گذشته، futuro به condicional تبدیل می‌شود. «mañana» هم به «al día siguiente» تغییر می‌کند.",
    grammar: ["b1-estilo-indirecto"],
    vocab: []
  },
  {
    id: "b1-r3", level: "B1", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «No me gusta el vestido que compré ayer, pero la dependienta, a quien conozco desde hace años, me aconsejó devolverlo.»",
    question: "¿Quién aconsejó devolver el vestido?",
    options: ["La dependienta", "El narrador", "Una amiga del narrador", "Su hermano"],
    answer: 0,
    analysis: "پاسخ «فروشنده» است. «a quien» یک جمله‌ی موصولی است که آدم را توضیح می‌دهد و quien بعد از حرف اضافه a آمده. «que compré ayer» هم توضیح می‌دهد کدام لباس است.",
    grammar: ["b1-relativo"],
    vocab: []
  },
  {
    id: "b1-f3", level: "B1", skill: "gramática en contexto", type: "fill",
    prompt: "Completa: Aunque ___ (estar) cansado, fui al gimnasio.",
    accept: ["estaba"],
    answer: "estaba",
    analysis: "پاسخ «estaba» است. چون خستگی واقعیتی است که در گذشته رخ داده، aunque با indicativo می‌آید. اگر فرضی بود، subjuntivo می‌آمد.",
    grammar: ["b1-concesivas"],
    vocab: []
  },
  {
    id: "b1-r4", level: "B1", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Me he hecho amigo de mis compañeros de trabajo, y ahora me siento más integrado en la empresa.»",
    question: "¿Qué expresa «me he hecho amigo»?",
    options: ["Que el narrador se convirtió en amigo de sus compañeros", "Que los compañeros lo olvidaron", "Que el narrador cambió de empresa", "Que el narrador está enfermo"],
    answer: 0,
    analysis: "پاسخ «راوی با همکارانش دوست شده» است. hacerse + اسم/صفت یعنی تبدیل شدن یا به دست آوردن یک وضعیت از راه تلاش و زمان. «empresa» هم کلمه‌ی کلیدی محیط کار است.",
    grammar: ["b1-verbos-pronominales"],
    vocab: ["empresa"]
  },
  {
    id: "b1-r5", level: "B1", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Este regalo es para ti, y te lo doy por tu cumpleaños.»",
    question: "¿Por qué da el regalo?",
    options: ["Para pedirle un favor", "Por su cumpleaños", "Para cambiar de ciudad", "Por error"],
    answer: 1,
    analysis: "پاسخ «به خاطر تولدش» است. «para ti» گیرنده را نشان می‌دهد و «por tu cumpleaños» علت یا مناسبت را. این تفاوت por و para در B1 مهم است.",
    grammar: ["b1-por-para"],
    vocab: []
  },
  {
    id: "b1-w2", level: "B1", skill: "expresión escrita", type: "writing",
    prompt: "Escribe una reclamación breve (100 a 120 palabras) a una tienda: el producto llegó roto y pides una solución.",
    minWords: 100, maxWords: 120,
    checklist: [
      "از سبک رسمی شروع کرده‌ام (Estimados señores / Muy señores míos)",
      "مشکل را با زمان گذشته شرح داده‌ام (pretérito indefinido یا perfecto)",
      "دلیل شکایت را با porque یا ya que توضیح داده‌ام",
      "یک درخواست مشخص مثل devolución یا cambio نوشته‌ام"
    ],
    analysis: "این شکل نوشتن در DELE B1 به‌عنوان تکلیف تعاملی آمده است. لحن رسمی و ساختار منظم مهم‌ترین نکته است.",
    grammar: ["b1-causa-finalidad", "b1-pluscuamperfecto"],
    vocab: ["reclamación", "empresa"]
  }
);
