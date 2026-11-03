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

  window.SEE_I18N = { lang: lang, setLang: setLang, apply: apply, LANGS: LANGS };
  applyDirection(lang());
  document.addEventListener("DOMContentLoaded", apply);
})();
