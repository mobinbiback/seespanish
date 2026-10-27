/*
  جدول صرف افعال پرکاربرد برای دفترچه.
  زمان‌ها: presente، indefinido، imperfecto، futuro.
  ترتیب صمیرها: yo، tú، él/ella، nosotros، vosotros، ellos/ellas
*/
window.SEE_VERBS = [
  { verb: "ser", meaning: "بودن (هویت، ویژگی ثابت)", level: "A1", tenses: {
    presente: ["soy", "eres", "es", "somos", "sois", "son"],
    indefinido: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
    imperfecto: ["era", "eras", "era", "éramos", "erais", "eran"],
    futuro: ["seré", "serás", "será", "seremos", "seréis", "serán"] } },
  { verb: "estar", meaning: "بودن (حالت، مکان)", level: "A1", tenses: {
    presente: ["estoy", "estás", "está", "estamos", "estáis", "están"],
    indefinido: ["estuve", "estuviste", "estuvo", "estuvimos", "estuvisteis", "estuvieron"],
    imperfecto: ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"],
    futuro: ["estaré", "estarás", "estará", "estaremos", "estaréis", "estarán"] } },
  { verb: "tener", meaning: "داشتن", level: "A1", tenses: {
    presente: ["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"],
    indefinido: ["tuve", "tuviste", "tuvo", "tuvimos", "tuvisteis", "tuvieron"],
    imperfecto: ["tenía", "tenías", "tenía", "teníamos", "teníais", "tenían"],
    futuro: ["tendré", "tendrás", "tendrá", "tendremos", "tendréis", "tendrán"] } },
  { verb: "ir", meaning: "رفتن", level: "A1", tenses: {
    presente: ["voy", "vas", "va", "vamos", "vais", "van"],
    indefinido: ["fui", "fuiste", "fue", "fuimos", "fuisteis", "fueron"],
    imperfecto: ["iba", "ibas", "iba", "íbamos", "ibais", "iban"],
    futuro: ["iré", "irás", "irá", "iremos", "iréis", "irán"] } },
  { verb: "hacer", meaning: "انجام دادن، ساختن", level: "A1", tenses: {
    presente: ["hago", "haces", "hace", "hacemos", "hacéis", "hacen"],
    indefinido: ["hice", "hiciste", "hizo", "hicimos", "hicisteis", "hicieron"],
    imperfecto: ["hacía", "hacías", "hacía", "hacíamos", "hacíais", "hacían"],
    futuro: ["haré", "harás", "hará", "haremos", "haréis", "harán"] } },
  { verb: "hablar", meaning: "صحبت کردن (باقاعده ‑ar)", level: "A1", tenses: {
    presente: ["hablo", "hablas", "habla", "hablamos", "habláis", "hablan"],
    indefinido: ["hablé", "hablaste", "habló", "hablamos", "hablasteis", "hablaron"],
    imperfecto: ["hablaba", "hablabas", "hablaba", "hablábamos", "hablabais", "hablaban"],
    futuro: ["hablaré", "hablarás", "hablará", "hablaremos", "hablaréis", "hablarán"] } },
  { verb: "comer", meaning: "خوردن (باقاعده ‑er)", level: "A1", tenses: {
    presente: ["como", "comes", "come", "comemos", "coméis", "comen"],
    indefinido: ["comí", "comiste", "comió", "comimos", "comisteis", "comieron"],
    imperfecto: ["comía", "comías", "comía", "comíamos", "comíais", "comían"],
    futuro: ["comeré", "comerás", "comerá", "comeremos", "comeréis", "comerán"] } },
  { verb: "vivir", meaning: "زندگی کردن (باقاعده ‑ir)", level: "A1", tenses: {
    presente: ["vivo", "vives", "vive", "vivimos", "vivís", "viven"],
    indefinido: ["viví", "viviste", "vivió", "vivimos", "vivisteis", "vivieron"],
    imperfecto: ["vivía", "vivías", "vivía", "vivíamos", "vivíais", "vivían"],
    futuro: ["viviré", "vivirás", "vivirá", "viviremos", "viviréis", "vivirán"] } },
  { verb: "poder", meaning: "توانستن", level: "A2", tenses: {
    presente: ["puedo", "puedes", "puede", "podemos", "podéis", "pueden"],
    indefinido: ["pude", "pudiste", "pudo", "pudimos", "pudisteis", "pudieron"],
    imperfecto: ["podía", "podías", "podía", "podíamos", "podíais", "podían"],
    futuro: ["podré", "podrás", "podrá", "podremos", "podréis", "podrán"] } },
  { verb: "querer", meaning: "خواستن، دوست داشتن", level: "A2", tenses: {
    presente: ["quiero", "quieres", "quiere", "queremos", "queréis", "quieren"],
    indefinido: ["quise", "quisiste", "quiso", "quisimos", "quisisteis", "quisieron"],
    imperfecto: ["quería", "querías", "quería", "queríamos", "queríais", "querían"],
    futuro: ["querré", "querrás", "querrá", "querremos", "querréis", "querrán"] } },
  { verb: "saber", meaning: "دانستن، بلد بودن", level: "A2", tenses: {
    presente: ["sé", "sabes", "sabe", "sabemos", "sabéis", "saben"],
    indefinido: ["supe", "supiste", "supo", "supimos", "supisteis", "supieron"],
    imperfecto: ["sabía", "sabías", "sabía", "sabíamos", "sabíais", "sabían"],
    futuro: ["sabré", "sabrás", "sabrá", "sabremos", "sabréis", "sabrán"] } },
  { verb: "decir", meaning: "گفتن", level: "A2", tenses: {
    presente: ["digo", "dices", "dice", "decimos", "decís", "dicen"],
    indefinido: ["dije", "dijiste", "dijo", "dijimos", "dijisteis", "dijeron"],
    imperfecto: ["decía", "decías", "decía", "decíamos", "decíais", "decían"],
    futuro: ["diré", "dirás", "dirá", "diremos", "diréis", "dirán"] } }
];
