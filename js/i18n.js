/*
  سه‌زبانه: فارسی (پیش‌فرض)، English، Español.
  - زبان انتخابی در seespanish:lang ذخیره می‌شود.
  - متن‌های رابط با «متن فارسی» به‌عنوان کلید ترجمه می‌شوند؛ پس هر جا متن فارسی یکسان باشد، ترجمه اعمال می‌شود.
  - جهت صفحه (راست‌به‌چپ / چپ‌به‌راست) خودکار تنظیم می‌شود.
*/
(function () {
  var KEY = "seespanish:lang";
  var LANGS = ["fa", "en", "es"];
  var DICT = {
    en: {
      "خانه": "Home", "برنامه": "Plan", "تمرین": "Practice", "دفترچه": "Notebook", "من": "Me",
      "حساب": "Account", "سطح من": "My level", "هوش مصنوعی امروز": "AI today",
      "صدا و افکت‌ها": "Sound & effects", "شخصیت‌ها": "Characters", "تلفظ اسپانیایی": "Spanish pronunciation",
      "ظاهر و زبان": "Appearance & language", "آفلاین و نصب": "Offline & install", "داده‌ها": "Data",
      "🔥 روز پیاپی": "🔥 Day streak", "⭐ امتیاز": "⭐ Points", "🏅 آزمون قبول": "🏅 Tests passed",
      "مهمان": "Guest", "وارد حساب نشدی": "Not signed in",
      "پخش صدا": "Sound on", "افکت‌ها و صدای شخصیت‌ها": "Effects and character voices",
      "رنگ صداها": "Sound colors", "حس صدای افکت‌ها رو عوض کن": "Change the feel of the effects",
      "نرم": "Soft", "درخشان": "Bright", "رترو": "Retro", "تست صداها": "Test sounds",
      "کلیک، درست، غلط و تشویق": "Click, correct, wrong and cheer", "تست": "Test",
      "مربی اصلی": "Main tutor", "کمک واژه‌یاب": "Word helper", "همراه تمرین": "Practice buddy",
      "پیش‌نمایش": "Preview", "صدای ۱": "Voice 1", "صدای ۲": "Voice 2", "صدای ۳": "Voice 3", "صدای ۴": "Voice 4",
      "صدای خواندن جمله‌ها": "Sentence reading voice",
      "صدایی که جمله‌های اسپانیایی رو با مرورگر می‌خونه": "The voice that reads Spanish sentences",
      "حالت نمایش": "Display mode", "خودکار": "Auto", "روشن": "Light", "تیره": "Dark",
      "زبان رابط": "Interface language",
      "ذخیره برای آفلاین": "Save offline", "بعد از ذخیره، درس‌ها و تمرین‌ها بدون اینترنت باز میشن": "After saving, lessons work offline",
      "ذخیره": "Save", "نصب به‌عنوان اپ": "Install as app", "روی صفحه‌ی اصلی گوشی یا کامپیوتر": "On your home screen",
      "نصب": "Install", "مرورگرت هنوز پشتیبانی نمی‌کنه": "Your browser doesn't support it yet",
      "پاک کردن پیشرفت این مرورگر": "Clear progress on this browser",
      "گرامر، واژه، تمرین، امتیاز و آزمون‌ها پاک میشن": "Grammar, words, exercises, points and tests will be cleared",
      "پاک کن": "Clear", "باز کردن مربی": "Open tutor",
      "ادامه با Google": "Continue with Google", "ادامه با GitHub": "Continue with GitHub", "ادامه با LinkedIn": "Continue with LinkedIn",
      "ورود": "Sign in", "ساخت حساب": "Create account", "یا با ایمیل": "or with email",
      "ورود یا ساخت حساب": "Sign in or create account",
      "با یکی از روش‌های زیر وارد شو تا پیشرفتت بین دستگاه‌ها هماهنگ بشه.": "Sign in with one of these options to sync your progress across devices.",
      "نام کاربری یا ایمیل": "Username or email", "ایمیل": "Email", "نام کاربری": "Username", "رمز عبور": "Password",
      "خروج": "Sign out", "در حال بررسی…": "Checking…",
      "هر سطح مسیر و پیشرفت جدا دارد. سطح‌های بعدی با آزمون سطح قبل باز می‌شن.": "Each level has its own path. The next levels unlock after passing the previous test.",
      "مربی": "Tutor", "واژه‌یاب": "Word lookup", "صدای شخصیت‌ها": "Character voices",
      "با کلید شخصی خودت (Gemini یا سرویس سفارشی) سقف سایت برداشته میشه.": "With your own key (Gemini or a custom service) the site limit is lifted.",
      "نامحدود": "Unlimited", "باز": "Open", "قفل": "Locked", "قبول شدی": "Passed",
      "گرامر": "Grammar", "واژه": "Words",
      "بسته‌ی صدا": "Sound pack", "صدای صفحه": "Page voice",
      "پشتیبانی نمی‌شود": "Not supported", "در حال ذخیره…": "Saving…", "ذخیره شد ✓": "Saved ✓",
      "برای دیدن، وارد شو": "Sign in to see", "برای دیدن سهمیه، دوباره وارد شو.": "Sign in again to see your quota.",
      "حساب مدیر: بدون محدودیت.": "Admin account: no limits.",
      "اتصال با سرور برقرار نشد.": "Could not reach the server.",
      "صدای اسپانیایی روی دستگاه نیست (صدای پیش‌فرض)": "No Spanish voice on this device (default voice)",
      "مرورگر پشتیبانی نمی‌کند": "Browser not supported"
    },
    es: {
      "خانه": "Inicio", "برنامه": "Plan", "تمرین": "Práctica", "دفترچه": "Cuaderno", "من": "Yo",
      "حساب": "Cuenta", "سطح من": "Mi nivel", "هوش مصنوعی امروز": "IA de hoy",
      "صدا و افکت‌ها": "Sonido y efectos", "شخصیت‌ها": "Personajes", "تلفظ اسپانیایی": "Pronunciación",
      "ظاهر و زبان": "Apariencia e idioma", "آفلاین و نصب": "Sin conexión e instalación", "داده‌ها": "Datos",
      "🔥 روز پیاپی": "🔥 Días seguidos", "⭐ امتیاز": "⭐ Puntos", "🏅 آزمون قبول": "🏅 Pruebas aprobadas",
      "مهمان": "Invitado", "وارد حساب نشدی": "No has iniciado sesión",
      "پخش صدا": "Sonido", "افکت‌ها و صدای شخصیت‌ها": "Efectos y voces de los personajes",
      "رنگ صداها": "Colores de sonido", "حس صدای افکت‌ها رو عوض کن": "Cambia el sonido de los efectos",
      "نرم": "Suave", "درخشان": "Brillante", "رترو": "Retro", "تست صداها": "Probar sonidos",
      "کلیک، درست، غلط و تشویق": "Clic, correcto, incorrecto y aplauso", "تست": "Probar",
      "مربی اصلی": "Tutora principal", "کمک واژه‌یاب": "Ayudante de palabras", "همراه تمرین": "Compañera de práctica",
      "پیش‌نمایش": "Vista previa", "صدای ۱": "Voz 1", "صدای ۲": "Voz 2", "صدای ۳": "Voz 3", "صدای ۴": "Voz 4",
      "صدای خواندن جمله‌ها": "Voz para leer frases",
      "صدایی که جمله‌های اسپانیایی رو با مرورگر می‌خونه": "La voz que lee las frases en español",
      "حالت نمایش": "Modo de pantalla", "خودکار": "Auto", "روشن": "Claro", "تیره": "Oscuro",
      "زبان رابط": "Idioma de la interfaz",
      "ذخیره برای آفلاین": "Guardar sin conexión", "بعد از ذخیره، درس‌ها و تمرین‌ها بدون اینترنت باز میشن": "Tras guardar, las lecciones funcionan sin conexión",
      "ذخیره": "Guardar", "نصب به‌عنوان اپ": "Instalar como app", "روی صفحه‌ی اصلی گوشی یا کامپیوتر": "En tu pantalla de inicio",
      "نصب": "Instalar", "مرورگرت هنوز پشتیبانی نمی‌کنه": "Tu navegador aún no lo admite",
      "پاک کردن پیشرفت این مرورگر": "Borrar progreso en este navegador",
      "گرامر، واژه، تمرین، امتیاز و آزمون‌ها پاک میشن": "Se borrarán gramática, palabras, ejercicios, puntos y pruebas",
      "پاک کن": "Borrar", "باز کردن مربی": "Abrir tutora",
      "ادامه با Google": "Continuar con Google", "ادامه با GitHub": "Continuar con GitHub", "ادامه با LinkedIn": "Continuar con LinkedIn",
      "ورود": "Entrar", "ساخت حساب": "Crear cuenta", "یا با ایمیل": "o con correo",
      "ورود یا ساخت حساب": "Entrar o crear cuenta",
      "با یکی از روش‌های زیر وارد شو تا پیشرفتت بین دستگاه‌ها هماهنگ بشه.": "Entra con una de estas opciones para sincronizar tu progreso entre dispositivos.",
      "نام کاربری یا ایمیل": "Usuario o correo", "ایمیل": "Correo", "نام کاربری": "Usuario", "رمز عبور": "Contraseña",
      "خروج": "Salir", "در حال بررسی…": "Verificando…",
      "هر سطح مسیر و پیشرفت جدا دارد. سطح‌های بعدی با آزمون سطح قبل باز می‌شن.": "Cada nivel tiene su propia ruta. Los siguientes se desbloquean al aprobar la prueba anterior.",
      "مربی": "Tutora", "واژه‌یاب": "Palabras", "صدای شخصیت‌ها": "Voces de los personajes",
      "با کلید شخصی خودت (Gemini یا سرویس سفارشی) سقف سایت برداشته میشه.": "Con tu propia clave (Gemini o servicio propio) se quita el límite del sitio.",
      "نامحدود": "Ilimitado", "باز": "Abierto", "قفل": "Bloqueado", "قبول شدی": "Aprobado",
      "گرامر": "Gramática", "واژه": "Palabras",
      "بسته‌ی صدا": "Paquete de sonido", "صدای صفحه": "Voz de la página",
      "پشتیبانی نمی‌شود": "No compatible", "در حال ذخیره…": "Guardando…", "ذخیره شد ✓": "Guardado ✓",
      "برای دیدن، وارد شو": "Entra para ver", "برای دیدن سهمیه، دوباره وارد شو.": "Vuelve a entrar para ver tu cuota.",
      "حساب مدیر: بدون محدودیت.": "Cuenta de administrador: sin límites.",
      "اتصال با سرور برقرار نشد.": "No se pudo conectar con el servidor.",
      "صدای اسپانیایی روی دستگاه نیست (صدای پیش‌فرض)": "No hay voz en español en este dispositivo (voz predeterminada)",
      "مرورگر پشتیبانی نمی‌کند": "El navegador no es compatible"
    }
  };
  var ATTRS = ["placeholder", "aria-label", "title"];

  function lang() {
    try { var l = localStorage.getItem(KEY); return LANGS.indexOf(l) >= 0 ? l : "fa"; } catch (e) { return "fa"; }
  }
  function setLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
    applyDirection(l);
  }
  function applyDirection(l) {
    document.documentElement.lang = l;
    document.documentElement.dir = l === "fa" ? "rtl" : "ltr";
  }

  function translate(text, l) {
    if (l === "fa" || !DICT[l]) return null;
    return DICT[l][text] || null;
  }

  function apply() {
    var l = lang();
    applyDirection(l);
    if (!document.body) return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    var nodes = [], n;
    while ((n = walker.nextNode())) {
      var p = n.parentNode;
      if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.nodeName)) continue;
      nodes.push(n);
    }
    nodes.forEach(function (node) {
      if (node.__orig === undefined) node.__orig = node.nodeValue;
      var orig = node.__orig;
      var t = orig.trim();
      var tr = translate(t, l);
      node.nodeValue = tr ? orig.replace(t, tr) : orig;
    });
    var els = document.querySelectorAll("[placeholder],[aria-label],[title]");
    Array.prototype.forEach.call(els, function (el) {
      ATTRS.forEach(function (a) {
        if (!el.hasAttribute(a)) return;
        var key = "__orig_" + a;
        if (el[key] === undefined) el[key] = el.getAttribute(a);
        var tr = translate(String(el[key]).trim(), l);
        el.setAttribute(a, tr || el[key]);
      });
    });
  }

  // ترجمه‌ی یک فیلد محتوای درس (مثلاً title یا note) برای زبان فعلی؛ اگر ترجمه نبود، متن اصلی
  function tx(item, field) {
    var l = lang();
    var src = item && item[field];
    if (l === "fa" || !item || !window.SEE_CONTENT) return src;
    var t = window.SEE_CONTENT[item.id];
    return (t && t[l] && t[l][field]) || src;
  }


  // ترجمه‌ی پیام‌های پویا (ساخته‌شده با جاوااسکریپت). کلید = متن فارسی؛ {n} و مانند آن جایگزین می‌شود.
  var MSG = {
    en: {
      "سؤالت رو درباره‌ی اسپانیایی بپرس.": "Ask me anything about Spanish.",
      "یک کلمه‌ی اسپانیایی یا فارسی بنویس تا معنیش رو بگم.": "Type a Spanish or Persian word and I'll explain it.",
      "سؤالت رو بنویس…": "Type your question…",
      "مثلاً: madrugada یا صبح زود": "e.g. madrugada or early morning",
      "سهمیه‌ی امروزت تموم شد ({n}). فردا دوباره می‌تونی.": "Today's quota is used up ({n}). You can try again tomorrow.",
      "ورودت منقضی شده. دوباره با Google وارد شو.": "Your session expired. Sign in again.",
      "الان جواب نداد. کمی بعد دوباره امتحان کن.": "No answer right now. Try again shortly.",
      "این هم معنیش.": "Here's the meaning.",
      "آفرین! ادامه بده.": "Well done! Keep going.",
      "امروز دیگه نمی‌تونیم ادامه بدیم.": "We can't continue today.",
      "با کلید شخصی خودت (بدون محدودیت سایت)": "With your own key (no site limit)",
      "پرسش‌های امروز: ": "Questions today: ",
      "واژه‌های امروز: ": "Words today: ",
      "ارسال": "Send", "برگشت": "Back",
"امروز": "Today", "از": "of", "انجام شد": "done", "حدود": "about", "دقیقه مانده": "min left", "بعدی": "Next", "دقیقه": "min", "امروز را رد کردی": "Skipped today", "فردا دوباره برنامه داری.": "You have a new plan tomorrow.", "امروز تمام شد": "Today is done", "عالی! کارهای امروز کامل شد.": "Great! Today's tasks are complete.", "صفحه‌ی خانه": "Home page", "درس": "Lesson", "همه‌ی درس‌های این سطح تمام شد": "All lessons in this level are done", "دقیقه در روز": "min a day", "امروز را رد کن": "Skip for today", "کارهای امروز": "Today's tasks", "تمرین بیشتر": "More practice", "کارت‌های واژه": "Word cards", "مرور واژه‌ها با کارت": "Review words with cards", "نقاط ضعف": "Weak spots", "سؤال‌هایی که اشتباه زدی": "Questions you got wrong", "درک شنیداری": "Listening comprehension", "گوش کن و جواب بده": "Listen and answer", "آزمون پایان سطح": "End-of-level test", "قبولی باز می‌کند سطح بعدی را": "Passing unlocks the next level", "مرور واژگان": "Vocabulary review", "تمرین نقاط ضعف": "Weak-spot practice",
"سطح": "Level", "شروع از اینجا": "Start here", "یک سطح بالاتر یا تمرین نقاط ضعف.": "Go to the next level or practice your weak spots.", "شروع": "Start", "کتابی برای این سطح ثبت نشده.": "No books are listed for this level.", "واحد": "Unit", "مسیر": "Path", "نشون بده": "Show", "پنهان کن": "Hide", "این کتاب هنوز مسیر ندارد.": "This book has no path yet.", "موردی پیدا نشد.": "Nothing found.", "جستجوی گرامر یا واژه در همه‌ی سطح‌ها": "Search grammar or words across all levels", "کتاب‌های این سطح": "Books for this level", "برنامه‌ی امروز": "Today's plan", "باز کردن": "Open", "کل": "Total",
"یه کمک بهم بده با این تمرین، ولی جوابش رو مستقیم نگو، فقط راهنمایی کن: ": "Help me with this exercise, but don't give the answer directly, just guide me: ", "بررسی جواب": "Check answer", "درست است": "Correct", "پاسخ درست: ": "Correct answer: ", "جواب را بنویس": "Write the answer", "ارزیابی متن": "Text check", "متن کامل است": "Text is complete", "هنوز کامل نیست": "Not complete yet", "طول متن مناسب است.": "Good text length.", "همه‌ی موارد چک‌لیست را بررسی کن.": "Check every item on the list.", "ثبت آزمون": "Submit test", "قبول شدی!": "You passed!", "هنوز نه، دوباره تلاش کن": "Not yet, try again", "درست بود": "Correct", "این جمله بود:": "This was the sentence:", "پخش متن": "Play text", "پخش آهسته": "Slow play", "بررسی جواب‌ها": "Check answers", "متن بعدی": "Next text", "حال ساده": "Present", "گذشته‌ی کامل": "Preterite", "گذشته‌ی استمراری": "Imperfect", "آینده": "Future", "پخش کل جدول": "Play whole table", "فرم درست": "Correct form", "درست بود ✓": "Correct ✓", "ادامه": "Continue", "مرور واژگان": "Vocabulary review", "امروز کارتی برای مرور نداری.": "You have no cards to review today.", "یک گرامر تازه": "A new grammar point", "تمرین نقاط ضعف": "Weak-spot practice", "یک تمرین": "One exercise", "یک سؤال را حل کن و توضیحش را بخوان.": "Solve one question and read its explanation.", "درک شنیداری": "Listening comprehension", "یک متن را گوش کن و به سؤال‌هایش جواب بده.": "Listen to a text and answer its questions.", "شروع": "Start", "برگرداندن": "Undo", "انجام شد": "Done", "هر مرحله که انجام شد، تیک بزن. فردا برنامه‌ی تازه‌ای برات ساخته می‌شود.": "Tick each step when done. Tomorrow you get a new plan.", "برای ۶۰ دقیقه، بعد از انجام مراحل بالا، تمرین بیشتری از همین سطح حل کن.": "For 60 minutes, after the steps above, do more practice from this level.", "ایمیل معتبر نیست.": "Invalid email.", "رمز باید حداقل ۸ کاراکتر باشه.": "Password must be at least 8 characters.", "نام کاربری ۲ تا ۴۰ کاراکتر باشه.": "Username must be 2 to 40 characters.", "با این ایمیل حساب هست؛ وارد شو.": "An account with this email exists; sign in.", "این نام کاربری گرفته شده.": "This username is taken.", "اطلاعات ورود اشتباهه.": "Wrong sign-in details.", "ثبت‌نام جدید الان بسته‌ست.": "Sign-up is closed right now.", "خطایی پیش آمد.": "Something went wrong.", "کاربر": "User", "پیشرفت این مرورگر پاک بشه؟ این کار برگشت نداره.": "Clear progress on this browser? This can't be undone."
    },
    es: {
      "سؤالت رو درباره‌ی اسپانیایی بپرس.": "Pregúntame lo que quieras sobre español.",
      "یک کلمه‌ی اسپانیایی یا فارسی بنویس تا معنیش رو بگم.": "Escribe una palabra en español o en persa y te la explico.",
      "سؤالت رو بنویس…": "Escribe tu pregunta…",
      "مثلاً: madrugada یا صبح زود": "p. ej. madrugada o madrugada temprana",
      "سهمیه‌ی امروزت تموم شد ({n}). فردا دوباره می‌تونی.": "Se acabó tu cuota de hoy ({n}). Puedes volver mañana.",
      "ورودت منقضی شده. دوباره با Google وارد شو.": "Tu sesión caducó. Vuelve a entrar.",
      "الان جواب نداد. کمی بعد دوباره امتحان کن.": "No responde ahora. Inténtalo de nuevo en un momento.",
      "این هم معنیش.": "Aquí tienes el significado.",
      "آفرین! ادامه بده.": "¡Muy bien! Sigue así.",
      "امروز دیگه نمی‌تونیم ادامه بدیم.": "Hoy no podemos seguir.",
      "با کلید شخصی خودت (بدون محدودیت سایت)": "Con tu propia clave (sin límite del sitio)",
      "پرسش‌های امروز: ": "Preguntas de hoy: ",
      "واژه‌های امروز: ": "Palabras de hoy: ",
      "ارسال": "Enviar", "برگشت": "Volver",
"امروز": "Hoy", "از": "de", "انجام شد": "hechos", "حدود": "unos", "دقیقه مانده": "min restantes", "بعدی": "Siguiente", "دقیقه": "min", "امروز را رد کردی": "Hoy lo has saltado", "فردا دوباره برنامه داری.": "Mañana tendrás un plan nuevo.", "امروز تمام شد": "Hoy está completo", "عالی! کارهای امروز کامل شد.": "¡Genial! Las tareas de hoy están completas.", "صفحه‌ی خانه": "Inicio", "درس": "Lección", "همه‌ی درس‌های این سطح تمام شد": "Se completaron todas las lecciones de este nivel", "دقیقه در روز": "min al día", "امروز را رد کن": "Saltar hoy", "کارهای امروز": "Tareas de hoy", "تمرین بیشتر": "Más práctica", "کارت‌های واژه": "Tarjetas de palabras", "مرور واژه‌ها با کارت": "Repasa palabras con tarjetas", "نقاط ضعف": "Puntos débiles", "سؤال‌هایی که اشتباه زدی": "Preguntas que fallaste", "درک شنیداری": "Comprensión auditiva", "گوش کن و جواب بده": "Escucha y responde", "آزمون پایان سطح": "Prueba de fin de nivel", "قبولی باز می‌کند سطح بعدی را": "Aprobar desbloquea el siguiente nivel", "مرور واژگان": "Repaso de vocabulario", "تمرین نقاط ضعف": "Práctica de puntos débiles",
"سطح": "Nivel", "شروع از اینجا": "Empieza aquí", "یک سطح بالاتر یا تمرین نقاط ضعف.": "Pasa al siguiente nivel o practica tus puntos débiles.", "شروع": "Empezar", "کتابی برای این سطح ثبت نشده.": "No hay libros para este nivel.", "واحد": "Unidad", "مسیر": "Ruta", "نشون بده": "Mostrar", "پنهان کن": "Ocultar", "این کتاب هنوز مسیر ندارد.": "Este libro aún no tiene ruta.", "موردی پیدا نشد.": "No se encontró nada.", "جستجوی گرامر یا واژه در همه‌ی سطح‌ها": "Busca gramática o palabras en todos los niveles", "کتاب‌های این سطح": "Libros de este nivel", "برنامه‌ی امروز": "Plan de hoy", "باز کردن": "Abrir", "کل": "Total",
"یه کمک بهم بده با این تمرین، ولی جوابش رو مستقیم نگو، فقط راهنمایی کن: ": "Ayúdame con este ejercicio, pero no me des la respuesta directamente, solo guíame: ", "بررسی جواب": "Revisar respuesta", "درست است": "Correcto", "پاسخ درست: ": "Respuesta correcta: ", "جواب را بنویس": "Escribe la respuesta", "ارزیابی متن": "Revisión del texto", "متن کامل است": "El texto está completo", "هنوز کامل نیست": "Aún no está completo", "طول متن مناسب است.": "Buena longitud del texto.", "همه‌ی موارد چک‌لیست را بررسی کن.": "Revisa todos los puntos de la lista.", "ثبت آزمون": "Enviar prueba", "قبول شدی!": "¡Aprobaste!", "هنوز نه، دوباره تلاش کن": "Todavía no, inténtalo otra vez", "درست بود": "Correcto", "این جمله بود:": "Esta era la frase:", "پخش متن": "Reproducir texto", "پخش آهسته": "Reproducción lenta", "بررسی جواب‌ها": "Revisar respuestas", "متن بعدی": "Siguiente texto", "حال ساده": "Presente", "گذشته‌ی کامل": "Indefinido", "گذشته‌ی استمراری": "Imperfecto", "آینده": "Futuro", "پخش کل جدول": "Reproducir toda la tabla", "فرم درست": "Forma correcta", "درست بود ✓": "Correcto ✓", "ادامه": "Continuar", "مرور واژگان": "Repaso de vocabulario", "امروز کارتی برای مرور نداری.": "Hoy no tienes tarjetas para repasar.", "یک گرامر تازه": "Un punto de gramática nuevo", "تمرین نقاط ضعف": "Práctica de puntos débiles", "یک تمرین": "Un ejercicio", "یک سؤال را حل کن و توضیحش را بخوان.": "Resuelve una pregunta y lee su explicación.", "درک شنیداری": "Comprensión auditiva", "یک متن را گوش کن و به سؤال‌هایش جواب بده.": "Escucha un texto y responde sus preguntas.", "شروع": "Empezar", "برگرداندن": "Deshacer", "انجام شد": "Hecho", "هر مرحله که انجام شد، تیک بزن. فردا برنامه‌ی تازه‌ای برات ساخته می‌شود.": "Marca cada paso al terminarlo. Mañana tendrás un plan nuevo.", "برای ۶۰ دقیقه، بعد از انجام مراحل بالا، تمرین بیشتری از همین سطح حل کن.": "Para 60 minutos, después de los pasos anteriores, haz más práctica de este nivel.", "ایمیل معتبر نیست.": "Correo no válido.", "رمز باید حداقل ۸ کاراکتر باشه.": "La contraseña debe tener al menos 8 caracteres.", "نام کاربری ۲ تا ۴۰ کاراکتر باشه.": "El usuario debe tener entre 2 y 40 caracteres.", "با این ایمیل حساب هست؛ وارد شو.": "Ya existe una cuenta con este correo; inicia sesión.", "این نام کاربری گرفته شده.": "Ese usuario ya está en uso.", "اطلاعات ورود اشتباهه.": "Datos de acceso incorrectos.", "ثبت‌نام جدید الان بسته‌ست.": "El registro está cerrado ahora.", "خطایی پیش آمد.": "Algo salió mal.", "کاربر": "Usuario", "پیشرفت این مرورگر پاک بشه؟ این کار برگشت نداره.": "¿Borrar el progreso de este navegador? No se puede deshacer."
    }
  };

  // ترجمه‌ی یک پیام پویا؛ با vars مثل {n} جایگزین می‌شود
  function t(key, vars) {
    var l = lang();
    var s = (l !== "fa" && MSG[l] && MSG[l][key]) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(String(vars[k])); });
    return s;
  }

  // معنی و مثال واژه‌ها: فارسی یا ترجمه‌ی انگلیسی/اسپانیایی
  function vtx(item, field) {
    var l = lang();
    if (l === "fa") return field === "ex" ? item.ex : item.fa;
    var v = window.SEE_VOCAB && window.SEE_VOCAB[item.es];
    var got = v && v[l] && v[l][field];
    if (got) return got;
    return field === "ex" ? item.ex : (l === "en" ? item.es : item.fa);
  }

  window.SEE_I18N = { lang: lang, setLang: setLang, apply: apply, LANGS: LANGS, tx: tx, t: t, vtx: vtx };
  applyDirection(lang());
  document.addEventListener("DOMContentLoaded", apply);
})();
