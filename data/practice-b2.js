/*
  تمرین‌های اضافه‌ی B2، تازه نوشته شده‌اند.
*/
window.SEE_PRACTICE.items.push(
  {
    id: "b2-r2", level: "B2", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Si hubiera llegado antes, habría podido despedirme de mi madre.»",
    question: "¿Qué indica la frase?",
    options: ["Llegó temprano y se despidió", "No llegó a tiempo para despedirse", "Llegará mañana", "Su madre llegó antes que él"],
    answer: 1,
    analysis: "پاسخ «به موقع نرسید و نتوانست خداحافظی کند» است. این شرط غیرواقعی در گذشته است: si + pluscuamperfecto de subjuntivo و نتیجه با condicional compuesto. یعنی شرط محقق نشد.",
    grammar: ["b2-condicionales", "b2-condicional-compuesto"],
    vocab: []
  },
  {
    id: "b2-f2", level: "B2", skill: "gramática en contexto", type: "fill",
    prompt: "Completa: Es importante que tú ___ (tomar) las decisiones con calma.",
    accept: ["tomes"],
    answer: "tomes",
    analysis: "پاسخ «tomes» است. بعد از عبارت ضرورت «es importante que» و فاعل متفاوت، فعل در subjuntivo می‌آید. indicativo در این ساخت اشتباه است.",
    grammar: ["b2-subj-opinion"],
    vocab: []
  },
  {
    id: "b2-r3", level: "B2", skill: "comprensión lectora", type: "mcq",
    prompt: "Lee el texto: «Se han vendido más de mil entradas. Fueron compradas por jóvenes de toda la región.»",
    question: "¿Qué estructura es «fueron compradas»?",
    options: ["Pasiva con ser; el participio concuerda con el sujeto", "Impersonal con se", "Futuro compuesto", "Condicional simple"],
    answer: 0,
    analysis: "پاسخ «مجهول با ser؛ participio با فاعل هماهنگ است» است. «entradas» مؤنث جمع است، پس «compradas» هم مؤنث جمع آمده. «Se han vendido» هم pasiva refleja است.",
    grammar: ["b2-pasiva"],
    vocab: []
  }
);
