/*
  seespanish · داده‌ها
  - عنوان‌ها و توضیح‌ها با بیان خودم نوشته شده‌اند، متن کتاب کپی نشده.
  - ارجاع‌ها (refs) فقط شماره‌ی درس یا واحد هر کتاب است.
  - stars = اولویت آموزشی (۱ تا ۳). اولویت امتحانی بعد از بررسی نمونه‌سوال‌های رسمی اضافه می‌شود.
*/
window.SEE = {
  levels: ["A1", "A2", "B1", "B2", "C1", "C2"],

  // وضعیت هر سطح: "ready" یعنی گرامرها کامل شده، "pending" یعنی در نوبت پردازش
  status: { A1: "ready", A2: "ready", B1: "ready", B2: "ready", C1: "ready", C2: "partial" },

  books: [
    { id: "prisma-a1", title: "Nuevo Prisma A1", levels: ["A1"] },
    { id: "aula1", title: "Aula Plus 1", levels: ["A1"] },
    { id: "suena-a1a2", title: "Nuevo Sueña A1-A2", levels: ["A1", "A2"] },
    { id: "uso-elem", title: "Uso de la gramática · Elemental", levels: ["A1", "A2"] },
    { id: "anaya", title: "Anaya ELE · Gramática Elemental A1-A2", levels: ["A1", "A2"] },

    { id: "prisma-a2", title: "Nuevo Prisma A2", levels: ["A2"] },
    { id: "aula2", title: "Aula Plus 2", levels: ["A2"] },

    { id: "prisma-b1", title: "Nuevo Prisma B1", levels: ["B1"] },
    { id: "aula3", title: "Aula Plus 3", levels: ["B1"] },
    { id: "aula4", title: "Aula Plus 4", levels: ["B1"] },
    { id: "suena-b1", title: "Nuevo Sueña B1", levels: ["B1"] },

    { id: "prisma-b2", title: "Nuevo Prisma B2", levels: ["B2"] },
    { id: "aula5", title: "Aula Plus 5", levels: ["B2"] },
    { id: "aula6", title: "Aula Plus 6", levels: ["B2"] },
    { id: "suena-b2", title: "Nuevo Sueña B2", levels: ["B2"] },

    { id: "prisma-c1", title: "Nuevo Prisma C1", levels: ["C1"] },
    { id: "suena-c1", title: "Nuevo Sueña C1", levels: ["C1"], note: "کتاب درسی هنوز دریافت نشده" },
    { id: "general", title: "مرجع عمومی C2", levels: ["C2"], note: "بدون کتاب؛ منبع C2 هنوز دریافت نشده" }
  ],

  // گرامر به تفکیک سطح
  grammar: {
    A1: [
      {
        id: "a1-ser", title: "ser برای هویت، ملیت و شغل",
        note: "پایه‌ی توصیف دائمی. ملیت و شغل و ویژگی‌های ثابت با ser می‌آیند.",
        stars: 3,
        refs: { "prisma-a1": "درس ۱", "aula1": "درس ۱", "suena-a1a2": "درس ۱", "uso-elem": "درس ۲", "anaya": "درس ۲" }
      },
      {
        id: "a1-estar", title: "estar برای حالت و مکان",
        note: "برای حال موقت و موقعیت مکانی. تفاوتش با ser را از همین‌جا شروع کن.",
        stars: 3,
        refs: { "prisma-a1": "درس ۴", "suena-a1a2": "درس ۲", "uso-elem": "درس ۷", "anaya": "درس ۴ و ۵" }
      },
      {
        id: "a1-hay", title: "hay برای گفتن وجود چیزی",
        note: "hay یعنی «وجود دارد» و برای مکان از estar استفاده می‌شود.",
        stars: 3,
        refs: { "prisma-a1": "درس ۴", "suena-a1a2": "درس ۲", "uso-elem": "درس ۳", "anaya": "درس ۴" }
      },
      {
        id: "a1-genero", title: "جنس و شمار اسم و صفت",
        note: "بیشتر اسم‌ها و صفت‌ها با a و s یا es در جمع تغییر می‌کنند. صفت باید با اسم هماهنگ باشد.",
        stars: 3,
        refs: { "prisma-a1": "درس ۲", "aula1": "درس ۱", "suena-a1a2": "درس ۱", "uso-elem": "درس ۱", "anaya": "درس ۱" }
      },
      {
        id: "a1-articulos", title: "حرف تعریف و نکره",
        note: "el/la/los/las و un/una/unos/unas. جنس اسم مشخص می‌کند کدام را بیاوری.",
        stars: 3,
        refs: { "prisma-a1": "درس ۲", "aula1": "درس ۲", "suena-a1a2": "درس ۲", "uso-elem": "درس ۱", "anaya": "درس ۱" }
      },
      {
        id: "a1-presente-regular", title: "زمان حال ساده؛ افعال باقاعده",
        note: "پایه‌ی همه‌ی زمان‌ها. ریشه‌ی فعل ثابت می‌ماند و پایان‌ها با ضمیر فاعلی هماهنگ می‌شوند.",
        stars: 3,
        refs: { "prisma-a1": "درس ۳", "aula1": "درس ۲", "uso-elem": "درس ۵", "anaya": "درس ۶" }
      },
      {
        id: "a1-presente-irregular", title: "زمان حال؛ افعال بی‌قاعده",
        note: "تغییر حرف‌های ریشه (e→ie، o→ue، e→i) و فعل‌های با شکل اول شخص خاص.",
        stars: 3,
        refs: { "uso-elem": "درس ۶", "anaya": "درس ۷ و ۸" }
      },
      {
        id: "a1-gustar", title: "gustar و فعل‌های مشابه",
        note: "در این ساخت فعل با فاعل ذهنی هماهنگ است، نه با کسی که لذت می‌برد. «me gusta» و «me gustan» را از همین‌جا بفهم.",
        stars: 3,
        refs: { "uso-elem": "درس ۱۱", "anaya": "درس ۱۰" }
      },
      {
        id: "a1-ir-a", title: "ir a + مصدر برای آینده‌ی نزدیک",
        note: "برای برنامه و نیت. ساده‌ترین راه گفتن کاری که قرار است انجام شود.",
        stars: 3,
        refs: { "prisma-a1": "درس ۶", "uso-elem": "درس ۱۰", "anaya": "درس ۲۰" }
      },
      {
        id: "a1-posesivos", title: "صفت‌های ملکی",
        note: "mi/tu/su/nuestro… قبل از اسم می‌آیند و با شمار اسم بعدشان هماهنگ می‌شوند.",
        stars: 2,
        refs: { "prisma-a1": "درس ۵", "suena-a1a2": "درس ۳", "uso-elem": "درس ۴", "anaya": "درس ۱۷ و ۱۸" }
      },
      {
        id: "a1-reflexivos", title: "فعل‌های بازتابی",
        note: "me llamo، me levanto. ضمیر بازتابی قبل از فعل صرف‌شده می‌آید.",
        stars: 2,
        refs: { "prisma-a1": "درس ۳", "suena-a1a2": "درس ۳", "uso-elem": "درس ۸", "anaya": "درس ۱۲" }
      },
      {
        id: "a1-interrogativos", title: "کلمات پرسشی",
        note: "qué، cómo، dónde، cuándo، cuánto. هر کدام یک نوع پاسخ می‌خواهد.",
        stars: 2,
        refs: { "prisma-a1": "درس ۱ و ۴", "suena-a1a2": "درس ۱", "anaya": "درس ۱۱" }
      },
      {
        id: "a1-numerales", title: "اعداد اصلی و ترتیبی",
        note: "از ۰ تا ۱۰۰ برای زمان، قیمت و شماره‌ها کافی است. ترتیبی‌ها بعداً در سطح A2 بیشتر می‌شوند.",
        stars: 2,
        refs: { "suena-a1a2": "درس ۲", "uso-elem": "درس ۹", "anaya": "درس ۹ و ۱۶" }
      },
      {
        id: "a1-demostrativos", title: "صفت‌ها و ضمیرهای اشاره",
        note: "este/esta، ese/esa، aquel/aquella. فاصله‌ی گوینده تا چیز را نشان می‌دهند.",
        stars: 2,
        refs: { "uso-elem": "درس ۱۲", "anaya": "درس ۱۴" }
      },
      {
        id: "a1-estar-gerundio", title: "estar + gerundio",
        note: "برای کاری که هم‌اکنون در حال انجام است. ساخت: estar صرف‌شده + ‑ando یا ‑iendo.",
        stars: 2,
        refs: { "uso-elem": "درس ۱۰", "anaya": "درس ۲۱" }
      }
    ],
    A2: [
      {
        id: "a2-preterito-indefinido", title: "pretérito indefinido (regular e irregular)",
        note: "برای رویدادهای تمام‌شده‌ی مشخص. بسیاری از فعل‌های پرکاربرد بی‌قاعده‌اند، پس آن‌ها را جدا یاد بگیر.",
        stars: 3,
        refs: { "prisma-a2": "درس ۴", "aula2": "درس ۲", "suena-a1a2": "درس ۸", "uso-elem": "درس ۱۷ و ۱۸", "anaya": "درس ۲۵" }
      },
      {
        id: "a2-preterito-perfecto", title: "pretérito perfecto (haber + participio)",
        note: "برای تجربه و گذشته‌ی متصل به زمان حال. ساختار: haber صرف‌شده + participio.",
        stars: 3,
        refs: { "prisma-a2": "درس ۳", "aula2": "درس ۶", "suena-a1a2": "درس ۷", "uso-elem": "درس ۱۳", "anaya": "درس ۲۷" }
      },
      {
        id: "a2-preterito-imperfecto", title: "pretérito imperfecto (شکل و کاربرد)",
        note: "برای عادت‌های گذشته، توصیف و پس‌زمینه‌ی داستان. پایان‌ها باقاعده‌اند، فقط چند فعل استثناست.",
        stars: 3,
        refs: { "prisma-a2": "درس ۶", "suena-a1a2": "درس ۹", "uso-elem": "درس ۲۵", "anaya": "درس ۲۹" }
      },
      {
        id: "a2-contraste-indefinido-imperfecto", title: "تفاوت pretérito indefinido و imperfecto",
        note: "indefinido برای اتفاق‌های مشخص و imperfecto برای وضعیت و عادت. این تفاوت در کتاب‌های این سطح جدا آموزش داده می‌شود.",
        stars: 3,
        refs: { "suena-a1a2": "درس ۸ و ۹", "uso-elem": "درس ۲۶" }
      },
      {
        id: "a2-contraste-perfecto-indefinido", title: "تفاوت pretérito perfecto و indefinido",
        note: "perfecto برای زمانی که هنوز ادامه دارد یا به حال مربوط است. indefinido برای زمان کاملاً تمام‌شده.",
        stars: 2,
        refs: { "prisma-a2": "درس ۴", "uso-elem": "درس ۱۹" }
      },
      {
        id: "a2-imperativo", title: "امر مثبت و منفی (tú / ustedes)",
        note: "برای درخواست و دستور. برای امر منفی شکل زمان حال ساده‌ی فعل را می‌گیری و تغییر می‌دهی.",
        stars: 3,
        refs: { "prisma-a2": "درس ۱۱", "suena-a1a2": "درس ۴", "uso-elem": "درس ۱۴", "anaya": "درس ۲۳" }
      },
      {
        id: "a2-pronombres-od-oi", title: "ضمیرهای مفعولی مستقیم و غیرمستقیم",
        note: "lo/la/los/las و le/les. جای ضمیر نسبت به فعل مهم است و در امر مثبت به آخر فعل می‌چسبد.",
        stars: 3,
        refs: { "prisma-a2": "درس ۳ و ۱۱", "suena-a1a2": "درس ۴", "uso-elem": "درس ۲۸", "anaya": "درس ۲۸ و ۳۰" }
      },
      {
        id: "a2-futuro-simple", title: "آینده‌ی ساده (futuro imperfecto)",
        note: "برای پیش‌بینی و آینده‌ی دور. پایان‌ها برای همه‌ی فعل‌ها یکسان است.",
        stars: 2,
        refs: { "prisma-a2": "درس ۸", "suena-a1a2": "درس ۱۰", "uso-elem": "درس ۲۲", "anaya": "درس ۲۶" }
      },
      {
        id: "a2-comparativos", title: "صفت برتر و برابر و کم‌تر",
        note: "más / menos / tan… como / tanto… como. چند صفت هم شکل برتر بی‌قاعده دارند.",
        stars: 2,
        refs: { "prisma-a2": "درس ۵", "suena-a1a2": "درس ۴", "uso-elem": "درس ۱۶", "anaya": "درس ۳۱" }
      },
      {
        id: "a2-obligacion-permiso", title: "بایستن، توانستن و اجازه (hay que، tener que، poder)",
        note: "برای بیان الزام، امکان و اجازه. هر کدام یک معنا دارد و جایگزین هم نیستند.",
        stars: 3,
        refs: { "prisma-a2": "درس ۱ و ۵", "suena-a1a2": "درس ۶", "uso-elem": "درس ۲۷", "anaya": "درس ۲۲" }
      },
      {
        id: "a2-perifrasis", title: "perífrasis: empezar a، acabar de، volver a، dejar de",
        note: "فعل کمکی و مصدر یا gerundio. معنای هر perífrasis را با مثال یاد بگیر، چون ترجمه‌ی لفظی کمک نمی‌کند.",
        stars: 2,
        refs: { "prisma-a2": "درس ۱۲", "aula2": "درس ۲", "anaya": "درس ۲۲" }
      },
      {
        id: "a2-condicional", title: "شرطی ساده (condicional simple)",
        note: "برای درخواست مؤدبانه و تخمین. پایان‌ها با آینده یکسان است ولی ریشه‌ی آینده‌ی باقاعده را می‌گیرد.",
        stars: 2,
        refs: { "prisma-a2": "درس ۹", "aula2": "درس ۵" }
      },
      {
        id: "a2-subjuntivo-presente", title: "زمان حال subjuntivo؛ بیان آرزو",
        note: "معمولاً بعد از que و برای خواسته، آرزو و دستور غیرمستقیم. این بخش در سطح A2 مقدماتی است.",
        stars: 2,
        refs: { "prisma-a2": "درس ۱۲" }
      },
      {
        id: "a2-indefinidos", title: "کلمات نامشخص: algo، nada، poco، mucho، todo",
        note: "برای مقدار و چیزهای نامشخص. دو به دو مخالف‌اند (algo/nada، alguien/nadie).",
        stars: 2,
        refs: { "anaya": "درس ۲۴", "uso-elem": "درس ۳۲" }
      },
      {
        id: "a2-verbos-pronominales", title: "فعل‌های بازتابی و ساخت‌های ویژه (costar، sentirse، llevarse)",
        note: "این فعل‌ها در معنی با فعل ساده فرق دارند و معمولاً با ضمیر بازتابی می‌آیند.",
        stars: 2,
        refs: { "prisma-a2": "درس ۱", "aula2": "درس ۱ و ۳" }
      }
    ],
    B1: [
      {
        id: "b1-subjuntivo-deseos", title: "subjuntivo برای آرزو، خواسته و دستور",
        note: "بعد از que و برای خواسته، امید و توصیه. مقایسه کن با زمان حال ساده که برای واقعیت است.",
        stars: 3,
        refs: { "prisma-b1": "درس ۲ و ۵", "aula4": "درس ۲ و ۴" }
      },
      {
        id: "b1-opinion-creer", title: "creer que و no creer que",
        note: "باور و تردید را بیان می‌کند. بعد از creer در جمله‌ی مثبت indicativo و در جمله‌ی منفی اغلب subjuntivo می‌آید.",
        stars: 3,
        refs: { "prisma-b1": "درس ۲", "aula4": "درس ۶" }
      },
      {
        id: "b1-relativo", title: "جمله‌های موصولی (que، donde، quien)",
        note: "برای توضیح دادن اسم قبلی. que برای همه، donde برای مکان و quien برای آدم.",
        stars: 2,
        refs: { "prisma-b1": "درس ۴" }
      },
      {
        id: "b1-estilo-indirecto", title: "گزارش گفته‌ی دیگران (estilo indirecto)",
        note: "گفته‌ی کسی را بدون نقل قول مستقیم می‌آوری. زمان فعل معمولاً یک گام به گذشته می‌رود.",
        stars: 3,
        refs: { "aula4": "درس ۸", "aula3": "درس ۶" }
      },
      {
        id: "b1-pluscuamperfecto", title: "pretérito pluscuamperfecto",
        note: "برای عملی که قبل از عمل دیگری در گذشته انجام شده. ساخت: había + participio.",
        stars: 3,
        refs: { "suena-b1": "درس ۴", "aula4": "درس ۳" }
      },
      {
        id: "b1-imperfecto-indefinido", title: "contraste imperfecto و indefinido",
        note: "imperfecto برای پس‌زمینه و indefinido برای رویداد اصلی. این تفاوت در B1 مهم‌ترین بحث گذشته است.",
        stars: 3,
        refs: { "aula3": "درس ۴", "suena-b1": "درس ۳" }
      },
      {
        id: "b1-ser-estar", title: "تفاوت ser و estar در بافت‌های پیچیده‌تر",
        note: "تکرار و تعمیق ser و estar با صفت‌هایی که معنی‌شان با فعل تغییر می‌کند.",
        stars: 2,
        refs: { "suena-b1": "درس ۱" }
      },
      {
        id: "b1-por-para", title: "por و para",
        note: "مقصد و هدف با para، علت و مسیر با por. این دو کلمه همیشه ترجمه‌ی یکسان ندارند.",
        stars: 2,
        refs: { "prisma-b1": "درس ۱۰" }
      },
      {
        id: "b1-causa-finalidad", title: "جمله‌های علّی و غایی",
        note: "porque و para que و a fin de que. هر کدام نوع متفاوتی از دلیل را می‌رسانند.",
        stars: 2,
        refs: { "prisma-b1": "درس ۷ و ۱۰" }
      },
      {
        id: "b1-perifrasis", title: "perífrasis زمانی و نمودی",
        note: "estar a punto de، acabar de، volver a، llevar + gerundio. هر کدام زمان یا حالت خاصی از کار را نشان می‌دهد.",
        stars: 2,
        refs: { "aula3": "درس ۳", "prisma-b1": "درس ۱۱", "suena-b1": "درس ۴" }
      },
      {
        id: "b1-futuro-probabilidad", title: "آینده برای احتمال و حدس",
        note: "futuro simple برای حدس درباره‌ی زمان حال، مثل «الان باید خسته باشد». با probablemente هم می‌آید.",
        stars: 2,
        refs: { "prisma-b1": "درس ۹", "aula3": "درس ۷" }
      },
      {
        id: "b1-marcadores-discurso", title: "نشانه‌های ربط در متن",
        note: "luego، después، por último، además. برای منسجم کردن متن و سازمان‌دهی ایده‌ها.",
        stars: 2,
        refs: { "prisma-b1": "درس ۶", "aula3": "درس ۸" }
      },
      {
        id: "b1-concesivas", title: "جمله‌های مخالف (aunque، sin embargo)",
        note: "برای بیان تضاد با وجود اینکه. aunque با indicativo یا subjuntivo می‌آید بسته به معنی.",
        stars: 2,
        refs: { "prisma-b1": "درس ۴", "aula4": "درس ۱" }
      },
      {
        id: "b1-verbos-pronominales", title: "فعل‌های بازتابی با معنی تغییر یافته",
        note: "hacerse، ponerse، quedarse، sentirse. یک فعل با ضمیر، معنی کاملاً تازه‌ای می‌گیرد.",
        stars: 2,
        refs: { "aula4": "درس ۱" }
      },
      {
        id: "b1-indefinidos", title: "کلمه‌های نامعلوم (nadie، alguien، nada)",
        note: "برای اشاره به کسی یا چیزی که معلوم نیست. دو به دو مخالف‌اند و در جمله‌ی منفی جای دیگری دارند.",
        stars: 2,
        refs: { "prisma-b1": "درس ۴" }
      }
    ],
    B2: [
      {
        id: "b2-pretérito-perfecto-subj", title: "pretérito perfecto de subjuntivo",
        note: "برای عمل تمام‌شده‌ای که در زمان حال یا نزدیک به آن قضاوت می‌شود. ساخت: haya + participio.",
        stars: 3,
        refs: { "prisma-b2": "درس ۱", "aula6": "درس ۶" }
      },
      {
        id: "b2-imperfecto-subj", title: "pretérito imperfecto de subjuntivo",
        note: "بعد از زمان گذشته یا شرط‌های فرضی به کار می‌رود. دو شکل دارد (‑ra و ‑se) و ساخت آن از ریشه‌ی indefinido ساخته می‌شود.",
        stars: 3,
        refs: { "prisma-b2": "درس ۴" }
      },
      {
        id: "b2-subj-opinion", title: "subjuntivo بعد از عبارت‌های نظر و احتمال",
        note: "no creo que، es indispensable que، es ilógico que. تشخیص indicativo از subjuntivo در این جمله‌ها مهم است.",
        stars: 3,
        refs: { "aula5": "درس ۲ و ۶" }
      },
      {
        id: "b2-relativo-avanzado", title: "جمله‌های موصولی پیشرفته",
        note: "explicativas و especificativas، و استفاده از el/la que و quien برای متن‌های رسمی‌تر.",
        stars: 3,
        refs: { "prisma-b2": "درس ۲", "aula5": "درس ۵" }
      },
      {
        id: "b2-pasiva", title: "ساخت مجهول و pasiva refleja",
        note: "ser + participio و se + فعل برای بیان فعل بی‌فاعل. هر کدام در متن رسمی و غیررسمی کاربرد متفاوت دارد.",
        stars: 3,
        refs: { "prisma-b2": "درس ۶", "aula5": "درس ۱ و ۵", "aula6": "درس ۶" }
      },
      {
        id: "b2-se-involuntario", title: "se برای رویداد ناخواسته",
        note: "se me olvidó، se me cayó. وقتی فاعل مسئول نیست، از این ساخت استفاده می‌شود.",
        stars: 2,
        refs: { "prisma-b2": "درس ۶", "aula6": "درس ۲" }
      },
      {
        id: "b2-estilo-indirecto-avanzado", title: "گزارش گفتار با تغییرات کامل",
        note: "تغییر زمان، ضمیر و قید مکان و زمان. مثل B1 ولی با جزئیات بیشتر.",
        stars: 3,
        refs: { "prisma-b2": "درس ۸", "aula6": "درس ۲" }
      },
      {
        id: "b2-condicional-compuesto", title: "condicional compuesto",
        note: "برای آنچه می‌توانست رخ دهد اما نداد. ساخت: habría + participio.",
        stars: 2,
        refs: { "aula6": "درس ۶", "prisma-b2": "درس ۹" }
      },
      {
        id: "b2-condicionales", title: "جمله‌های شرطی واقعی و غیرواقعی",
        note: "si + presente برای شرط واقعی و si + imperfecto de subjuntivo برای شرط فرضی. زمان جمله‌ی اصلی را هم درست بگذار.",
        stars: 3,
        refs: { "prisma-b2": "درس ۹", "aula6": "درس ۶" }
      },
      {
        id: "b2-concesivas-avanzadas", title: "جمله‌های تضاد با subjuntivo",
        note: "aunque، a pesar de، por mucho que. اگر فعل واقعی باشد indicativo و اگر فرضی باشد subjuntivo می‌آید.",
        stars: 2,
        refs: { "prisma-b2": "درس ۱۱", "aula6": "درس ۵" }
      },
      {
        id: "b2-futuro-compuesto", title: "futuro compuesto",
        note: "برای حدس درباره‌ی عملی که قبل از زمان مشخصی تمام می‌شود. ساخت: habré + participio.",
        stars: 2,
        refs: { "aula6": "درس ۴" }
      },
      {
        id: "b2-verbos-cambio", title: "فعل‌های تغییر (ponerse، hacerse، volverse)",
        note: "تغییر حالت در فعل‌های مختلف متفاوت است. هر کدام نوع تغییر را نشان می‌دهد.",
        stars: 2,
        refs: { "prisma-b2": "درس ۵" }
      },
      {
        id: "b2-como-si", title: "como si + subjuntivo",
        note: "برای مقایسه‌ی فرضی: parecer como si، actuar como si.",
        stars: 2,
        refs: { "prisma-b2": "درس ۷" }
      },
      {
        id: "b2-perifrasis-modales", title: "perífrasis modales (deber، poder، soler)",
        note: "تعهد، توانایی و عادت را با فعل کمکی و مصدر بیان می‌کند.",
        stars: 2,
        refs: { "prisma-b2": "درس ۵", "aula6": "درس ۱" }
      },
      {
        id: "b2-conectores-consecuencia", title: "ربط علّی و نتیجه (de modo que، así que، por eso)",
        note: "برای نشان دادن نتیجه‌ی یک عمل. تفاوت ربط نتیجه‌ی قطعی و نتیجه‌ی ممکن را یاد بگیر.",
        stars: 2,
        refs: { "aula6": "درس ۶" }
      }
    ],
    C1: [
      {
        id: "c1-ser-estar-avanzado", title: "ser و estar در معناهای ثانویه",
        note: "ساخت‌های اصطلاحی و تفاوت معنی در جمله‌های نسبتاً پیچیده.",
        stars: 3,
        refs: { "prisma-c1": "درس ۱" }
      },
      {
        id: "c1-pasados-avanzados", title: "کاربرد زمان‌های گذشته در روایت",
        note: "indefinido، perfecto، imperfecto و pluscuamperfecto در یک متن روایی. هدف فهم روایت پیچیده است.",
        stars: 3,
        refs: { "prisma-c1": "درس ۲" }
      },
      {
        id: "c1-subjuntivo-sustantivas", title: "جمله‌های اسمی با subjuntivo",
        note: "بعد از فعل‌های خواسته، احساس و ارتباط. ساختار جمله‌ی دوم اغلب با que شروع می‌شود.",
        stars: 3,
        refs: { "prisma-c1": "درس ۳" }
      },
      {
        id: "c1-imperativo-pronombres", title: "امر با ضمیرهای مفعولی و نکات ویژه",
        note: "کنار هم قرار گرفتن ضمیرها و جای آن‌ها، به‌ویژه در امر و مصدر.",
        stars: 2,
        refs: { "prisma-c1": "درس ۴" }
      },
      {
        id: "c1-concesivas-avanzadas", title: "ربط‌های تضاد پیشرفته (por más que، aun así)",
        note: "بیان تضاد در متن رسمی. این ساخت‌ها در امتحان C1 خواندن و نوشتن زیاد دیده می‌شوند.",
        stars: 3,
        refs: { "prisma-c1": "درس ۶" }
      },
      {
        id: "c1-condicional-probabilidad", title: "احتمال در زمان آینده و شرطی",
        note: "futuro و condicional برای حدس، و futuro perfecto برای حدس درباره‌ی گذشته.",
        stars: 3,
        refs: { "prisma-c1": "درس ۹" }
      },
      {
        id: "c1-condiciones-complejas", title: "شرط‌های پیچیده (siempre que، solo si)",
        note: "شرط‌هایی که با تأکید و قید ربط داده می‌شوند. کنار شرط‌های ساده قرار بده تا تفاوت را ببینی.",
        stars: 2,
        refs: { "prisma-c1": "درس ۱۰" }
      },
      {
        id: "c1-causa-finalidad-avanzada", title: "علت و غرض پیشرفته",
        note: "تفاوت por و para در جمله‌های علّی و غایی، و ربط‌های رسمی‌تر برای دلیل.",
        stars: 2,
        refs: { "prisma-c1": "درس ۱۱" }
      },
      {
        id: "c1-perifrasis-aspectuales", title: "perífrasis نمودی (acabar por، llegar a، dejar de)",
        note: "نشان می‌دهند کار در آغاز، ادامه یا پایان است. معنی هر perífrasis را با مثال یاد بگیر.",
        stars: 2,
        refs: { "prisma-c1": "درس ۱۲" }
      },
      {
        id: "c1-discurso-referido", title: "گزارش پیشرفته‌ی گفتار و نوشته",
        note: "تغییر زمان، ضمیر و قید در گزارش. این مبحث در متن‌های خبری و داستانی هم دیده می‌شود.",
        stars: 3,
        refs: { "prisma-c1": "درس ۷ و ۸" }
      },
      {
        id: "c1-relativo-pronombres", title: "ضمیرهای موصولی و تأکیدی",
        note: "lo que، el cual و ساخت‌های تأکیدی. برای خواندن متن‌های ادبی و رسمی ضروری است.",
        stars: 2,
        refs: { "prisma-c1": "درس ۷" }
      }
    ],
    C2: [
      {
        id: "c2-enfasis", title: "ساخت‌های تأکیدی و ساختار جمله",
        note: "lo que، es… que، cuanto más… más. برای تأکید بدون تغییر معنی.",
        stars: 2,
        refs: { general: "مرجع عمومی" }
      },
      {
        id: "c2-condicional-pasado", title: "شرط غیرواقعی در گذشته",
        note: "si hubiera + pluscuamperfecto de subjuntivo و condicional compuesto. نشان‌دهنده‌ی شرط نتیجه‌نداده.",
        stars: 3,
        refs: { general: "مرجع عمومی" }
      },
      {
        id: "c2-registros", title: "سبک رسمی و غیررسمی",
        note: "انتخاب واژگان، ساخت جمله و ربط‌ها بر اساس موقعیت و مخاطب.",
        stars: 2,
        refs: { general: "مرجع عمومی" }
      },
      {
        id: "c2-matices-se", title: "کاربردهای مختلف se",
        note: "بازتابی، مفعول غیرمستقیم، غیرشخصی و نشانه‌ی مجهول در یک ساختار.",
        stars: 2,
        refs: { general: "مرجع عمومی" }
      },
      {
        id: "c2-marcadores-avanzados", title: "نشانه‌های ربط پیشرفته",
        note: "no obstante، con todo، así las cosas. برای ساختن متن استدلالی.",
        stars: 2,
        refs: { general: "مرجع عمومی" }
      }
    ]
  }
};
