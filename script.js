// ===== PAROL TIZIMI =====
const AUTH_KEY = 'test_tsrbiyashodlikauthenticated';
const VALID_CREDENTIALS = {
    username: 'Tarbiya2026',
    password: 'Odina1221'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
  {
    question: "Tarbiyaviy ishlar metodikasi fanining asosiy maqsadi nima?",
    options: [
      "Darsliklarni yaratish va tahlil qilish",
      "Tarbiyaviy ishlarni ilmiy asosda tashkil etish va samaradorligini oshirish",
      "Fanlarni chuqur o'rganishga yo'naltirish",
      "bilimini nazorat qilish"
    ],
    correctAnswer: "Tarbiyaviy ishlarni ilmiy asosda tashkil etish va samaradorligini oshirish"
  },
  {
    question: "Quyidagilardan qaysi biri tarbiyaviy ishlar metodikasining vazifasiga kiradi?",
    options: [
      "O'quv dasturlarini ishlab chiqish",
      "Maktab binosini loyihalash",
      "Tarbiyaviy ishlarni rejalashtirish, tashkil etish va baholash",
      "Fanni test asosida o'qitish"
    ],
    correctAnswer: "Tarbiyaviy ishlarni rejalashtirish, tashkil etish va baholash"
  },
  {
    question: "Tarbiyaviy ishlar metodikasi fanining asosiy obyekti nima?",
    options: [
      "O'qituvchilar mehnati",
      "Tarbiyaviy jarayon",
      "Darsliklar sifati",
      "Texnik vositalar"
    ],
    correctAnswer: "Tarbiyaviy jarayon"
  },
  {
    question: "Tarbiyaviy ishlar metodikasi fani qaysi fanlar bilan bevosita bog'liq?",
    options: [
      "Matematika va fizika",
      "Biologiya va kimyo",
      "Pedagogika va psixologiya",
      "Iqtisod va menejment"
    ],
    correctAnswer: "Pedagogika va psixologiya"
  },
  {
    question: "Tarbiyaviy ishlar metodikasining funksiyalaridan biri qaysi?",
    options: [
      "Hisobot yozish",
      "Fanlarni baholash",
      "Tarbiyaviy faoliyatni rejalashtirish va nazorat qilish",
      "O'quv rejasini qisqartirish"
    ],
    correctAnswer: "Tarbiyaviy faoliyatni rejalashtirish va nazorat qilish"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida o'quvchi shaxsi qanday tushuniladi?",
    options: [
      "Bilim olish obyekti sifatida",
      "Ijtimoiy-madaniy muhitning faol subyekti sifatida",
      "Musiqiy ijodning ijrochisi",
      "Asosan sport mashg'ulotlari ishtirokchisi"
    ],
    correctAnswer: "Ijtimoiy-madaniy muhitning faol subyekti sifatida"
  },
  {
    question: "Tarbiyaning asosiy qonuniyatlaridan biri qaysi?",
    options: [
      "Tarbiyaning jamiyat talablari va shaxs imkoniyatlari bilan bog'liqligi",
      "Tarbiyaning faqat nazariy bilim berishdan iborat ekanligi",
      "Tarbiyaning sinf xonasida tugashi",
      "O'qituvchining yagona tarbiya manbai ekanligi"
    ],
    correctAnswer: "Tarbiyaning jamiyat talablari va shaxs imkoniyatlari bilan bog'liqligi"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida qaysi tamoyil muhim ahamiyatga ega?",
    options: [
      "Ilmiylik va izchillik",
      "Qattiq qoidalar va cheklovlar",
      "Faqat ma'ruza usulini qo'llash",
      "O'zgaruvchanlikning yo'qligi"
    ],
    correctAnswer: "Ilmiylik va izchillik"
  },
  {
    question: "Tarbiyaviy ishlarning eng samarali usullaridan biri nima?",
    options: [
      "Munozara va bahs-mudohazalar",
      "Faqat yodlash usuli",
      "Uyga vazifalarni ko'paytirish",
      "Darsdan tashqari ishlarni bekor qilish"
    ],
    correctAnswer: "Munozara va bahs-mudohazalar"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida tarbiyachi faoliyati qanday bo'lishi kerak?",
    options: [
      "Passiv va kuzatuvchi",
      "Avtoritar va buyruq beruvchi",
      "Ijodiy, tizimli va tahliliy",
      "Faqat bilim beruvchi"
    ],
    correctAnswer: "Ijodiy, tizimli va tahliliy"
  },
  {
    question: "Milliy g'oya tushunchasining asosiy mazmuni nimadan iborat?",
    options: [
      "Faqat iqtisodiy o'sish",
      "Xalqning orzu-umidlari, maqsadlari va manfaatlari ifodasi",
      "Hukumatning siyosiy qarashlari",
      "Bir necha kishining shaxsiy fikri"
    ],
    correctAnswer: "Xalqning orzu-umidlari, maqsadlari va manfaatlari ifodasi"
  },
  {
    question: "Milliy g'oyaning tarbiyadagi ahamiyati qanday?",
    options: [
      "Yuridik hujjatlarni o'rgatish",
      "O'quvchilarda vatanparvarlik, fidoyilik va insonparvarlik tuyg'ularini shakllantirish",
      "Chet tillarini o'rganishga majburlash",
      "Texnologik taraqqiyotni nazorat qilish"
    ],
    correctAnswer: "O'quvchilarda vatanparvarlik, fidoyilik va insonparvarlik tuyg'ularini shakllantirish"
  },
  {
    question: "Qaysi alloma axloqiy tarbiyani ilm bilan chambarchas bog'lagan?",
    options: [
      "Ibn Rushd",
      "Yusuf Xos Hojib",
      "Ibn Xaldun",
      "Umar Xayyom"
    ],
    correctAnswer: "Yusuf Xos Hojib"
  },
  {
    question: "Tarbiyani ìdavlat ishining asosiî deb baholagan Sharq allomasi kim?",
    options: [
      "Ibn Sino",
      "Al-Beruniy",
      "Abu Nasr Forobiy",
      "Jaloliddin Rumiy"
    ],
    correctAnswer: "Abu Nasr Forobiy"
  },
  {
    question: "ìKomil insonî tushunchasini ilk bor kim tarbiya jarayonining maqsadi sifatida ilgari surgan?",
    options: [
      "Ahmad Yassaviy",
      "Alisher Navoiy",
      "Abu Nasr Forobiy",
      "Mirzo Ulug'bek"
    ],
    correctAnswer: "Abu Nasr Forobiy"
  },
  {
    question: "Ahmad Yassaviy qanday tarbiyani targëib qilgan?",
    options: [
      "Faqat jismoniy tarbiyani",
      "Siyosiy tarbiyani",
      "Ruhiy-maínaviy poklik, tasavvufiy tarbiya, nafsni tarbiya qilish",
      "Kuch bilan boshqariladigan tarbiya"
    ],
    correctAnswer: "Ruhiy-maínaviy poklik, tasavvufiy tarbiya, nafsni tarbiya qilish"
  },
  {
    question: "Beruniy tarbiya jarayonida nimaga eítibor bergan?",
    options: [
      "Faqat tabiiy fanlar oëqitilishiga",
      "Aql, bilim, tajriba orqali komil insonni tarbiyalash",
      "Jazolash orqali insonni toëgërilashga",
      "Saníatni inkor qilishga"
    ],
    correctAnswer: "Aql, bilim, tajriba orqali komil insonni tarbiyalash"
  },
  {
    question: "Tarbiya jarayonining samaradorligi nimaga asoslangan?",
    options: [
      "Moliya mablag'lariga",
      "Tarbiyachi shaxsi, o'quvchilar faolligi va usullarning to'g'ri tanlanishiga",
      "Faqat jazo orqali odob berish",
      "Koëp mehnatga jalb qilish"
    ],
    correctAnswer: "Tarbiyachi shaxsi, o'quvchilar faolligi va usullarning to'g'ri tanlanishiga"
  },
  {
    question: "Tarbiyaviy ish rejasini tuzishda nimaga asoslaniladi?",
    options: [
      "Faqat tarbiyachining shaxsiy istaklariga",
      "O'quvchilarning yoshi, qiziqishlari, sinf jamoasining rivojlanish darajasi va maktab dasturiga",
      "Tasodifiy vaziyatlarga",
      "O'tilgan darslarning qisqacha mazmuniga"
    ],
    correctAnswer: "O'quvchilarning yoshi, qiziqishlari, sinf jamoasining rivojlanish darajasi va maktab dasturiga"
  },
  {
    question: "A.Navoiyning qaysi asari axloqiy tarbiyaga oid masalalarni qamrab olgan?",
    options: [
      "Lison ut-tayr",
      "Mahbub ul-qulub",
      "Hamsa",
      "Xazoyin ul-maoniy"
    ],
    correctAnswer: "Mahbub ul-qulub"
  },
  // Keyingi savollar fayldagi tartibda davom etadi...
  {
    question: "Tarbiyaviy ishlar metodikasida ijtimoiy muhitning o'rni qanday?",
    options: [
      "Muhim emas, faqat maktab muhiti muhim",
      "Tarbiyalanuvchining shaxsiy sifatlarini shakllantiruvchi asosiy omil",
      "Faqat o'yin-kulgiga ta'sir qiladi",
      "Axloqiy tarbiyaga ta'siri yo'q"
    ],
    correctAnswer: "Tarbiyalanuvchining shaxsiy sifatlarini shakllantiruvchi asosiy omil"
  },
  {
    question: "Tarbiyaviy ishlar turlari (ma'naviy-axloqiy, estetik, jismoniy, mehnat) qanday mezonlarga asoslanadi?",
    options: [
      "Sinf xonasining kattaligiga",
      "Inson shaxsiyatining barcha tomonlarini rivojlantirish zaruratiga",
      "Faqat ota-onalarning xohishiga",
      "O'quvchilarning jinsiga"
    ],
    correctAnswer: "Inson shaxsiyatining barcha tomonlarini rivojlantirish zaruratiga"
  },
  {
    question: "Axloqiy tarbiyaning maqsadi nima?",
    options: [
      "Sport sohasida yutuqlarga erishish",
      "O'quvchilarda axloqiy me'yorlar va qadriyatlarni shakllantirish",
      "Faqat adabiy asarlarni yodlash",
      "Darslarni qoldirmaslik"
    ],
    correctAnswer: "O'quvchilarda axloqiy me'yorlar va qadriyatlarni shakllantirish"
  },
  {
    question: "Estetik tarbiya deganda nimani tushunasiz?",
    options: [
      "Faqat muzeyga borish",
      "San'at, tabiat va hayotdagi go'zallikni idrok etish, baholash va yaratish qobiliyatini rivojlantirish",
      "Aql-zakovatni oshirish",
      "Chet tillarini o'rganish"
    ],
    correctAnswer: "San'at, tabiat va hayotdagi go'zallikni idrok etish, baholash va yaratish qobiliyatini rivojlantirish"
  },
  {
    question: "Jismoniy tarbiyaning asosiy vazifasi nima?",
    options: [
      "O'quvchilarni kasb tanlashga yo'naltirish",
      "Sog'lom turmush tarzi ko'nikmalarini shakllantirish, jismoniy rivojlanishni ta'minlash",
      "Kompyuter texnologiyalarini o'rgatish",
      "Tarixiy voqealarni yodlash"
    ],
    correctAnswer: "Sog'lom turmush tarzi ko'nikmalarini shakllantirish, jismoniy rivojlanishni ta'minlash"
  },
  {
    question: "Mehnat tarbiyasining asosiy maqsadi nima?",
    options: [
      "Sport musobaqalarini o'tkazish",
      "Mehnatga ongli munosabatni shakllantirish, kasbiy ko'nikmalarni rivojlantirish",
      "Faqat musiqa chalishni o'rgatish",
      "Badiiy adabiyot o'qish"
    ],
    correctAnswer: "Mehnatga ongli munosabatni shakllantirish, kasbiy ko'nikmalarni rivojlantirish"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida \"Sinf rahbari\"ning asosiy roli nima?",
    options: [
      "Faqat dars jadvalini tuzish",
      "Tarbiyaviy jarayonni boshqarish, o'quvchilarga shaxsiy yordam berish va ota-onalar bilan ishlash",
      "Maktabni moliyalashtirish",
      "Darsliklarni ta'mirlash"
    ],
    correctAnswer: "Tarbiyaviy jarayonni boshqarish, o'quvchilarga shaxsiy yordam berish va ota-onalar bilan ishlash"
  },
  {
    question: "Sinf rahbari faoliyatini rejalashtirishning asosiy shakllari qaysilar?",
    options: [
      "Faqat yozma reja",
      "Yillik, choraklik va kunlik reja",
      "Faqat maktab rahbariyati ko'rsatmasi",
      "Og'zaki reja"
    ],
    correctAnswer: "Yillik, choraklik va kunlik reja"
  },
  {
    question: "Tarbiyaviy tadbirlarni o'tkazish metodlari (og'zaki, amaliy, ko'rgazmali) qanday vazifalarni bajaradi?",
    options: [
      "Tadbirlar sonini ko'paytirish",
      "O'quvchilarga bilim berish, ularning ko'nikmalarini shakllantirish va his-tuyg'ulariga ta'sir qilish",
      "O'qituvchi faoliyatini osonlashtirish",
      "Vaqtni o'tkazish"
    ],
    correctAnswer: "O'quvchilarga bilim berish, ularning ko'nikmalarini shakllantirish va his-tuyg'ulariga ta'sir qilish"
  },
  {
    question: "Tarbiyaviy tadbirlarni tashkil etishda o'quvchilarning ishtiroki qanday bo'lishi kerak?",
    options: [
      "Majburiy va passiv",
      "O'z xohishi bilan, faol va ijodiy",
      "Faqat kuzatuvchi sifatida",
      "Kattalarning aytganini qilish"
    ],
    correctAnswer: "O'z xohishi bilan, faol va ijodiy"
  },
  {
    question: "Tarbiyaviy ishlarning natijasi qanday baholanadi?",
    options: [
      "Faqat baholar bilan",
      "O'quvchilarning xulq-atvori, dunyoqarashi, shaxsiy fazilatlaridagi o'zgarishlar va yutuqlariga ko'ra",
      "Maktab binosining yangilanishi",
      "Pul mukofoti bilan"
    ],
    correctAnswer: "O'quvchilarning xulq-atvori, dunyoqarashi, shaxsiy fazilatlaridagi o'zgarishlar va yutuqlariga ko'ra"
  },
  {
    question: "Sinf soati nima uchun o'tkaziladi?",
    options: [
      "Yangi darsliklarni tarqatish uchun",
      "O'quvchilarni ma'naviy-axloqiy, ijtimoiy va shaxsiy rivojlantirish masalalarini muhokama qilish uchun",
      "Faqat nazorat ishlarini o'tkazish uchun",
      "O'qituvchining dam olishi uchun"
    ],
    correctAnswer: "O'quvchilarni ma'naviy-axloqiy, ijtimoiy va shaxsiy rivojlantirish masalalarini muhokama qilish uchun"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda ota-onalar bilan ishlashning ahamiyati qanday?",
    options: [
      "Ota-onalar faqat pul yig'ishga yordam beradi",
      "Maktab va oila o'rtasida hamkorlikni mustahkamlash va tarbiyaviy ta'sirni kuchaytirish",
      "Ota-onalarning tarbiyaviy jarayondan chetda turishi",
      "Faqat ota-onalarni tanqid qilish"
    ],
    correctAnswer: "Maktab va oila o'rtasida hamkorlikni mustahkamlash va tarbiyaviy ta'sirni kuchaytirish"
  },
  {
    question: "Tarbiyaviy ta'sir ko'rsatish usullaridan biri bo'lgan 'Ishontirish'ning asosiy mohiyati nima?",
    options: [
      "Kattalarni qo'rqitish",
      "Mantiqiy dalillar, misollar va tushuntirishlar orqali shaxsning ongi va hissiyotiga ta'sir o'tkazish",
      "Faqat buyruq berish",
      "Jismoniy jazo qo'llash"
    ],
    correctAnswer: "Mantiqiy dalillar, misollar va tushuntirishlar orqali shaxsning ongi va hissiyotiga ta'sir o'tkazish"
  },
  {
    question: "Tarbiyaviy ta'sir ko'rsatish usullaridan biri bo'lgan 'Mashq'ning maqsadi nima?",
    options: [
      "Faqat yugurish mashqlari",
      "Ijobiy xulq-atvor ko'nikmalari va odatlarini shakllantirish uchun amaliy faoliyatni takrorlash",
      "Nazariy bilimlarni yodlash",
      "O'yin-kulgini tashkil etish"
    ],
    correctAnswer: "Ijobiy xulq-atvor ko'nikmalari va odatlarini shakllantirish uchun amaliy faoliyatni takrorlash"
  },
  {
    question: "Tarbiyaviy ta'sir ko'rsatish usullaridan biri bo'lgan 'Rag'batlantirish' qanday ahamiyatga ega?",
    options: [
      "O'quvchini jazolash",
      "Shaxsning ijobiy xatti-harakatlarini mustahkamlash va uni yangi yutuqlarga ilhomlantirish",
      "Faqat tanqid qilish",
      "Uydan haydab yuborish"
    ],
    correctAnswer: "Shaxsning ijobiy xatti-harakatlarini mustahkamlash va uni yangi yutuqlarga ilhomlantirish"
  },
  {
    question: "Tarbiyaviy ta'sir ko'rsatish usullaridan biri bo'lgan 'Jazolash' qanday maqsadda qo'llaniladi?",
    options: [
      "O'quvchini ruhan ezish",
      "Nog'ri xatti-harakatlarning oldini olish, ularning sabablarini tushuntirish va axloqiy me'yorlarni o'rgatish",
      "Faqat o'qituvchi g'azabini chiqarish",
      "Boshqa bolalarni qo'rqitish"
    ],
    correctAnswer: "Nog'ri xatti-harakatlarning oldini olish, ularning sabablarini tushuntirish va axloqiy me'yorlarni o'rgatish"
  },
  {
    question: "Taílim va tarbiyaning birligi nimani anglatadi?",
    options: [
      "Bu ikki jarayonning bir-biridan ajralganligini",
      "Bilim berish jarayoni doimo tarbiyaviy xarakterga ega bo'lishi va tarbiya bilimga asoslanishi",
      "Faqat bilim berish tarbiyaga ta'sir qilmasligini",
      "Faqat maktab rahbari hal qiladi"
    ],
    correctAnswer: "Bilim berish jarayoni doimo tarbiyaviy xarakterga ega bo'lishi va tarbiya bilimga asoslanishi"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida o'quvchilarni o'rganish usullariga qaysilar kiradi?",
    options: [
      "Faqat ularning kiyimlari",
      "Kuzatish, suhbat, anketalashtirish, test sinovlari, hujjatlarni tahlil qilish",
      "O'qituvchining shaxsiy farazlari",
      "Faqat sport natijalari"
    ],
    correctAnswer: "Kuzatish, suhbat, anketalashtirish, test sinovlari, hujjatlarni tahlil qilish"
  },
  {
    question: "O'quvchilar jamoasi rivojlanishining asosiy bosqichlari nima?",
    options: [
      "Bir necha kun ichida rivojlanish",
      "Shaxsiy, Guruhli, Jamoaviy, Hamkorlik bosqichlari",
      "Faqat jazolash bosqichi",
      "Hech qanday bosqich yo'q"
    ],
    correctAnswer: "Shaxsiy, Guruhli, Jamoaviy, Hamkorlik bosqichlari"
  },
  {
    question: "Tarbiyaviy ishlarni rejalashtirishda 'tashxis (diagnostika)' nima uchun kerak?",
    options: [
      "Rejani murakkablashtirish uchun",
      "O'quvchilar va sinf jamoasining rivojlanish darajasini aniqlash, ularning ehtiyojlarini o'rganish va rejalarni ularga moslashtirish",
      "Faqat ma'muriy ishlarni bajarish",
      "Kerak bo'lmagan ma'lumotlarni yig'ish"
    ],
    correctAnswer: "O'quvchilar va sinf jamoasining rivojlanish darajasini aniqlash, ularning ehtiyojlarini o'rganish va rejalarni ularga moslashtirish"
  },
  {
    question: "O'quvchilarda mustaqil fikrlashni rivojlantirishning eng samarali usuli qaysi?",
    options: [
      "Faqat tayyor javoblarni berish",
      "Munozara, muammoli vaziyatlarni tahlil qilish, ijodiy loyihalar ustida ishlash",
      "Faqat jismoniy mashqlar",
      "Ko'p kitoblarni yodlash"
    ],
    correctAnswer: "Munozara, muammoli vaziyatlarni tahlil qilish, ijodiy loyihalar ustida ishlash"
  },
  {
    question: "Kasbga yo'naltirish ishlari qanday maqsadda amalga oshiriladi?",
    options: [
      "O'quvchilarni majburan bir kasbga yuborish",
      "O'quvchilarda kasblarga qiziqish uyg'otish, ularning qobiliyat va istaklariga mos kasb tanlashga yordam berish",
      "Faqat o'qituvchining kasbini targ'ib qilish",
      "Sport sohasida yutuqlarga erishish"
    ],
    correctAnswer: "O'quvchilarda kasblarga qiziqish uyg'otish, ularning qobiliyat va istaklariga mos kasb tanlashga yordam berish"
  },
  {
    question: "Maktab va oila hamkorligining asosiy shakllari qaysilar?",
    options: [
      "Faqat pul yig'ish",
      "Ota-onalar majlislari, yakka tartibdagi suhbatlar, ota-onalar qo'mitasi, birgalikdagi tadbirlar",
      "Ota-onalarni butunlay chetlashtirish",
      "Faqat o'qituvchining uyga borishi"
    ],
    correctAnswer: "Ota-onalar majlislari, yakka tartibdagi suhbatlar, ota-onalar qo'mitasi, birgalikdagi tadbirlar"
  },
  {
    question: "Tarbiyaviy tadbirlarni samarali tashkil etish uchun nimalarga e'tibor berish kerak?",
    options: [
      "Faqat tashqi ko'rinishga",
      "Tadbirning maqsadi, mazmuni, o'quvchilarning yoshi, qiziqishi va faol ishtirokiga",
      "Imkon qadar qisqa qilish",
      "O'qituvchining shaxsiy qiziqishlariga"
    ],
    correctAnswer: "Tadbirning maqsadi, mazmuni, o'quvchilarning yoshi, qiziqishi va faol ishtirokiga"
  },
  {
    question: "O'quvchilar o'rtasida sog'lom turmush tarzi tarbiyasining maqsadi nima?",
    options: [
      "Faqat sport rekordlari",
      "Badan tarbiya, to'g'ri ovqatlanish, zararli odatlardan voz kechish ko'nikmalarini shakllantirish",
      "Faqat dam olish",
      "Tibbiy bilimlarni yodlash"
    ],
    correctAnswer: "Badan tarbiya, to'g'ri ovqatlanish, zararli odatlardan voz kechish ko'nikmalarini shakllantirish"
  },
  {
    question: "Ekologik tarbiyaning asosiy vazifasi nima?",
    options: [
      "Faqat o'simliklarni o'rganish",
      "O'quvchilarda tabiatga ehtiyotkorona munosabatni shakllantirish, atrof-muhitni muhofaza qilishga oid bilim va ko'nikmalarni berish",
      "Faqat shahar hayotini o'rganish",
      "Tarixiy obidalarni yodlash"
    ],
    correctAnswer: "O'quvchilarda tabiatga ehtiyotkorona munosabatni shakllantirish, atrof-muhitni muhofaza qilishga oid bilim va ko'nikmalarni berish"
  },
  {
    question: "O'quvchilarda ma'naviy-axloqiy qadriyatlarni shakllantirishda milliy qadriyatlarning o'rni qanday?",
    options: [
      "Muhim emas, faqat zamonaviy qadriyatlar muhim",
      "Milliy o'zlikni anglash, urf-odatlar va merosga hurmatni shakllantirishda asosiy manba",
      "Faqat kiyim-kechak madaniyatiga ta'sir qiladi",
      "Sport sohasida yutuqlarga erishish"
    ],
    correctAnswer: "Milliy o'zlikni anglash, urf-odatlar va merosga hurmatni shakllantirishda asosiy manba"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda to'garaklar va fakultativ mashg'ulotlarning ahamiyati nima?",
    options: [
      "Faqat bo'sh vaqtni o'tkazish",
      "O'quvchilarning qiziqishlarini, qobiliyatlarini rivojlantirish va ularning kasbiy moyilliklarini shakllantirish",
      "Asosiy darslarning o'rnini bosish",
      "Faqat baholar yig'ish"
    ],
    correctAnswer: "O'quvchilarning qiziqishlarini, qobiliyatlarini rivojlantirish va ularning kasbiy moyilliklarini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda tarbiyachi qanday me'yoriy hujjatlarga asoslanishi kerak?",
    options: [
      "Faqat shaxsiy kundaligiga",
      "O'zbekiston Respublikasining Ta'lim to'g'risidagi qonuni, Milliy kadrlar tayyorlash dasturi, tarbiyaviy ishlar konsepsiyasi va boshqa tegishli me'yoriy hujjatlar",
      "Qo'shni davlatlarning qonunlari",
      "Faqat maktab qoidalari"
    ],
    correctAnswer: "O'zbekiston Respublikasining Ta'lim to'g'risidagi qonuni, Milliy kadrlar tayyorlash dasturi, tarbiyaviy ishlar konsepsiyasi va boshqa tegishli me'yoriy hujjatlar"
  },
  {
    question: "O'quvchilarda huquqiy ongni shakllantirishning asosiy maqsadi nima?",
    options: [
      "Faqat qonunlarni yodlash",
      "O'quvchilarda huquqiy madaniyat, qonunlarga hurmat va javobgarlik hissini shakllantirish",
      "Faqat harbiy bilimlarni o'rgatish",
      "Musiqa asboblarini chalishni o'rgatish"
    ],
    correctAnswer: "O'quvchilarda huquqiy madaniyat, qonunlarga hurmat va javobgarlik hissini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarda interfaol metodlardan foydalanishning afzalligi nima?",
    options: [
      "Vaqtni cho'zish",
      "O'quvchilarning faolligi, mustaqil fikrlashi, jamoada ishlash va muammolarni hal qilish ko'nikmalarini rivojlantirish",
      "Faqat o'qituvchining gapirishi",
      "An'anaviy dars usulini qo'llash"
    ],
    correctAnswer: "O'quvchilarning faolligi, mustaqil fikrlashi, jamoada ishlash va muammolarni hal qilish ko'nikmalarini rivojlantirish"
  },
  {
    question: "O'quvchilarni o'z-o'zini boshqarishga o'rgatishning ahamiyati nima?",
    options: [
      "Sinf rahbarining ishini kamaytirish",
      "Jamoa ishlarini tashkil etish, javobgarlik, tashabbuskorlik va yetakchilik qobiliyatlarini rivojlantirish",
      "Faqat katta sinflarda qo'llash",
      "Hamma ishlarni o'qituvchining o'zi qilish"
    ],
    correctAnswer: "Jamoa ishlarini tashkil etish, javobgarlik, tashabbuskorlik va yetakchilik qobiliyatlarini rivojlantirish"
  },
  {
    question: "Tarbiyaviy ishlarni nazorat qilish qanday amalga oshiriladi?",
    options: [
      "Faqat yozma hisobotlar orqali",
      "Tadbir va mashg'ulotlarni kuzatish, hujjatlarni tahlil qilish, o'quvchilar va ota-onalar bilan suhbatlar o'tkazish orqali",
      "Tasodifiy tekshiruvlar",
      "Faqat o'qituvchining xohishi bilan"
    ],
    correctAnswer: "Tadbir va mashg'ulotlarni kuzatish, hujjatlarni tahlil qilish, o'quvchilar va ota-onalar bilan suhbatlar o'tkazish orqali"
  },
  {
    question: "O'quvchilarda Vatanga muhabbat tuyg'usini shakllantirishning asosiy shakllari qaysilar?",
    options: [
      "Faqat darsliklarni o'qish",
      "Vatanparvarlik mavzusidagi tadbirlar, muzeylarga sayohatlar, tarixiy joylarni ziyorat qilish, milliy bayramlarni nishonlash",
      "Chet tillarini o'rganish",
      "Texnik vositalarni ishlatish"
    ],
    correctAnswer: "Vatanparvarlik mavzusidagi tadbirlar, muzeylarga sayohatlar, tarixiy joylarni ziyorat qilish, milliy bayramlarni nishonlash"
  },
  {
    question: "Tarbiyaviy ishlar samaradorligini oshirishda nimalar muhim rol o'ynaydi?",
    options: [
      "Faqat texnik jihozlar",
      "Tarbiyachi shaxsining bilimdonligi, ijodkorligi, o'quvchilarning faolligi va oila hamkorligi",
      "Qattiq qoidalar o'rnatish",
      "Faqat bilim berish"
    ],
    correctAnswer: "Tarbiyachi shaxsining bilimdonligi, ijodkorligi, o'quvchilarning faolligi va oila hamkorligi"
  },
  {
    question: "Abu Nasr Forobiyning tarbiya borasidagi asosiy g'oyasi nima?",
    options: [
      "Faqat jismoniy tarbiya",
      "Ilm va axloqning birligi, komil insonni tarbiyalash",
      "Faqat musiqa bilan shug'ullanish",
      "Harbiy tarbiya"
    ],
    correctAnswer: "Ilm va axloqning birligi, komil insonni tarbiyalash"
  },
  {
    question: "Beruniyning tarbiyaga oid qarashlarida nimaga alohida e'tibor berilgan?",
    options: [
      "Faqat badiiy adabiyot",
      "Aql, bilim va tajribaning tarbiyadagi o'rni",
      "Faqat siyosiy mavzular",
      "Dinni inkor qilish"
    ],
    correctAnswer: "Aql, bilim va tajribaning tarbiyadagi o'rni"
  },
  {
    question: "Yusuf Xos Hojibning 'Qutadg'u Bilig' asarida qanday tarbiya masalalari yoritilgan?",
    options: [
      "Faqat harbiy san'at",
      "Axloq, adolat, bilim va davlatni boshqarish odobi",
      "Tabiatni muhofaza qilish",
      "Sport musobaqalarini o'tkazish"
    ],
    correctAnswer: "Axloq, adolat, bilim va davlatni boshqarish odobi"
  },
  {
    question: "Alisher Navoiyning tarbiyaviy g'oyalari qaysi asarlarida yaqqol namoyon bo'lgan?",
    options: [
      "Faqat tarixiy asarlarida",
      "'Xamsa' va 'Mahbub ul-qulub' kabi asarlarida",
      "Faqat ilmiy risolalarida",
      "Geografiyaga oid kitoblarida"
    ],
    correctAnswer: "'Xamsa' va 'Mahbub ul-qulub' kabi asarlarida"
  },
  {
    question: "Temuriylar davrida tarbiyaga qanday yondashilgan?",
    options: [
      "Faqat amaliy ishlarga e'tibor berilgan",
      "Ilm, ma'rifat, san'at va hunarni egallashga katta ahamiyat berilgan",
      "Faqat jismoniy kuchni rivojlantirish",
      "Chet tillarini taqiqlash"
    ],
    correctAnswer: "Ilm, ma'rifat, san'at va hunarni egallashga katta ahamiyat berilgan"
  },
  {
    question: "Zahiriddin Muhammad Boburning tarbiyaga oid qarashlari nimaga qaratilgan?",
    options: [
      "Faqat harbiy yurishlar",
      "O'zlikni anglash, adolat va insonparvarlik",
      "Faqat siyosiy nazariyalar",
      "Diniy bilimni inkor qilish"
    ],
    correctAnswer: "O'zlikni anglash, adolat va insonparvarlik"
  },
  {
    question: "O'zbekiston Respublikasining 'Ta'lim to'g'risida'gi qonuni qachon qabul qilingan?",
    options: [
      "1991 yil",
      "1997 yil",
      "2002 yil",
      "2020 yil"
    ],
    correctAnswer: "1997 yil"
  },
  {
    question: "Milliy kadrlar tayyorlash dasturining asosiy maqsadi nima?",
    options: [
      "Faqat sportchilarni tayyorlash",
      "Jamiyatni taraqqiy ettirishga qodir, raqobatbardosh, yuksak ma'naviyatli mutaxassislarni tayyorlash",
      "Faqat harbiy kishilarni tayyorlash",
      "Chet el ta'limini to'liq ko'chirish"
    ],
    correctAnswer: "Jamiyatni taraqqiy ettirishga qodir, raqobatbardosh, yuksak ma'naviyatli mutaxassislarni tayyorlash"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida innovatsion yondashuv nimani anglatadi?",
    options: [
      "Faqat yangi texnikalarni sotib olish",
      "Tarbiyaviy jarayonga yangi usullar, texnologiyalar va g'oyalarni joriy etish",
      "Eski usullarni takrorlash",
      "O'qituvchining shaxsiy ishlari"
    ],
    correctAnswer: "Tarbiyaviy jarayonga yangi usullar, texnologiyalar va g'oyalarni joriy etish"
  },
  {
    question: "Tarbiyaviy ishlarda 'loyihaviy metod'ning afzalligi nima?",
    options: [
      "Faqat nazariy bilimlarni berish",
      "O'quvchilarda muammolarni aniqlash, hal qilish, tadqiqot o'tkazish va amaliy natijalarga erishish ko'nikmalarini rivojlantirish",
      "Faqat yakka tartibda ishlash",
      "O'qituvchi faoliyatini kamaytirish"
    ],
    correctAnswer: "O'quvchilarda muammolarni aniqlash, hal qilish, tadqiqot o'tkazish va amaliy natijalarga erishish ko'nikmalarini rivojlantirish"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida 'keys-stadi' usuli qanday maqsadlarda qo'llaniladi?",
    options: [
      "Faqat qiyin vazifalarni berish",
      "Haqiqiy hayotiy vaziyatlarni tahlil qilish orqali o'quvchilarda tanqidiy fikrlash, qaror qabul qilish va muammolarni yechish ko'nikmalarini rivojlantirish",
      "Yangi darsliklarni tarqatish",
      "Faqat tarixiy voqealarni yodlash"
    ],
    correctAnswer: "Haqiqiy hayotiy vaziyatlarni tahlil qilish orqali o'quvchilarda tanqidiy fikrlash, qaror qabul qilish va muammolarni yechish ko'nikmalarini rivojlantirish"
  },
  {
    question: "O'quvchilarda o'zini o'zi anglash va o'z-o'zini baholashni rivojlantirishning ahamiyati nima?",
    options: [
      "Boshqalarning fikriga bog'liq bo'lish",
      "O'z kuchli va zaif tomonlarini bilish, shaxsiy rivojlanish maqsadlarini belgilash va mustaqil ravishda harakat qilish",
      "Faqat boshqalarni baholash",
      "O'zgarishga qarshilik qilish"
    ],
    correctAnswer: "O'z kuchli va zaif tomonlarini bilish, shaxsiy rivojlanish maqsadlarini belgilash va mustaqil ravishda harakat qilish"
  },
  {
    question: "Sinf jamoasi bilan ishlashda 'Sotsiometriya' usuli nimani aniqlashga xizmat qiladi?",
    options: [
      "Faqat o'quvchilarning baholarini",
      "Sinf jamoasidagi norasmiy munosabatlar, yetakchilar va chetdagilarni aniqlash",
      "O'quvchilarning oilaviy ahvoli",
      "Darsliklar sifati"
    ],
    correctAnswer: "Sinf jamoasidagi norasmiy munosabatlar, yetakchilar va chetdagilarni aniqlash"
  },
  {
    question: "O'smirlar orasida salbiy odatlarning oldini olishda qanday tarbiyaviy ishlar samarali?",
    options: [
      "Faqat jazolash",
      "Sport, san'at va qiziqarli mashg'ulotlarga jalb qilish, tushuntirish ishlari, muvaffaqiyatli insonlar bilan uchrashuvlar",
      "Ularni e'tiborsiz qoldirish",
      "Faqat nazariy bilim berish"
    ],
    correctAnswer: "Sport, san'at va qiziqarli mashg'ulotlarga jalb qilish, tushuntirish ishlari, muvaffaqiyatli insonlar bilan uchrashuvlar"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'individual yondashuv' nima uchun kerak?",
    options: [
      "Hamma o'quvchilarga bir xil yondashish",
      "Har bir o'quvchining shaxsiy xususiyatlari, qiziqishlari, muammolari va rivojlanish darajasini hisobga olish",
      "Faqat o'qituvchining istagini bajarish",
      "O'quvchilarning sonini kamaytirish"
    ],
    correctAnswer: "Har bir o'quvchining shaxsiy xususiyatlari, qiziqishlari, muammolari va rivojlanish darajasini hisobga olish"
  },
  {
    question: "Tarbiyaviy ishlarning ma'naviy-axloqiy yo'nalishida qaysi qadriyatlar muhim?",
    options: [
      "Faqat moddiy qadriyatlar",
      "Vatanparvarlik, insonparvarlik, halollik, adolat, mehnatsevarlik, ezgulik",
      "Faqat siyosiy qarashlar",
      "Sport musobaqalari"
    ],
    correctAnswer: "Vatanparvarlik, insonparvarlik, halollik, adolat, mehnatsevarlik, ezgulik"
  },
  {
    question: "O'quvchilarning bo'sh vaqtini mazmunli tashkil etishning asosiy maqsadi nima?",
    options: [
      "Faqat uyda o'tirish",
      "O'quvchilarni zararli odatlardan himoya qilish, ularning qiziqishlarini rivojlantirish va ijtimoiy faolligini oshirish",
      "Faqat yuridik bilimlarni o'rgatish",
      "O'qituvchining dam olishi"
    ],
    correctAnswer: "O'quvchilarni zararli odatlardan himoya qilish, ularning qiziqishlarini rivojlantirish va ijtimoiy faolligini oshirish"
  },
  {
    question: "Jamoa tarbiyasining asosiy afzalligi nima?",
    options: [
      "Faqat jazolash imkoniyati",
      "Shaxsni ijtimoiy muhitda rivojlantirish, hamkorlik, mas'uliyat va o'zini boshqarish ko'nikmalarini shakllantirish",
      "O'quvchini yakkalab qo'yish",
      "Faqat o'qituvchining fikrini qabul qilish"
    ],
    correctAnswer: "Shaxsni ijtimoiy muhitda rivojlantirish, hamkorlik, mas'uliyat va o'zini boshqarish ko'nikmalarini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'ijtimoiy foydali mehnat'ning ahamiyati qanday?",
    options: [
      "Faqat maktabni tozalash",
      "Mehnatga hurmatni shakllantirish, jamoa bilan ishlash, ijtimoiy mas'uliyatni oshirish",
      "O'quvchilarning bilim olishiga to'sqinlik qilish",
      "Faqat vaqtni o'tkazish"
    ],
    correctAnswer: "Mehnatga hurmatni shakllantirish, jamoa bilan ishlash, ijtimoiy mas'uliyatni oshirish"
  },
  {
    question: "Vatanparvarlik tarbiyasining asosiy maqsadi nima?",
    options: [
      "Chet tillarini o'rgatish",
      "O'quvchilarda Vatanga muhabbat, sadoqat, milliy g'urur va uni himoya qilishga tayyorlik tuyg'ularini shakllantirish",
      "Faqat harbiy yurishlar",
      "Iqtisodiy bilimlarni berish"
    ],
    correctAnswer: "O'quvchilarda Vatanga muhabbat, sadoqat, milliy g'urur va uni himoya qilishga tayyorlik tuyg'ularini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni rejalashtirishda 'maqsad' nima uchun kerak?",
    options: [
      "Rejani murakkablashtirish",
      "Barcha ishlarni muayyan natijaga yo'naltirish, samaradorlikni baholash mezoni bo'lib xizmat qilish",
      "Faqat pul sarflash",
      "Tasodifiy ishlarni bajarish"
    ],
    correctAnswer: "Barcha ishlarni muayyan natijaga yo'naltirish, samaradorlikni baholash mezoni bo'lib xizmat qilish"
  },
  {
    question: "Tarbiyaviy jarayonning dinamikligi nimani anglatadi?",
    options: [
      "Jarayonning o'zgarmasligi",
      "Tarbiyaviy jarayonning doimiy rivojlanishi, o'zgarishi va yangilanishi",
      "Faqat tarbiyachining o'zgarishi",
      "Bir xil usullarni qo'llash"
    ],
    correctAnswer: "Tarbiyaviy jarayonning doimiy rivojlanishi, o'zgarishi va yangilanishi"
  },
  {
    question: "Pedagogik diagnostikaning tarbiyaviy ishdagi ahamiyati nima?",
    options: [
      "Faqat baholar yig'ish",
      "O'quvchilar shaxsiyati, ularning tarbiyalanganlik darajasi va rivojlanish xususiyatlarini aniqlash",
      "Darsliklarni ta'mirlash",
      "Faqat maktab binosini tekshirish"
    ],
    correctAnswer: "O'quvchilar shaxsiyati, ularning tarbiyalanganlik darajasi va rivojlanish xususiyatlarini aniqlash"
  },
  {
    question: "Tarbiyaviy ishlarda 'pedagogik takt' nima uchun muhim?",
    options: [
      "O'quvchilarni qo'rqitish",
      "Tarbiyachi va o'quvchi o'rtasidagi munosabatlarda hurmat, o'zaro tushunish va optimal muloqotni ta'minlash",
      "Faqat qattiq gapirish",
      "O'quvchilarning shaxsiy ishlariga aralashish"
    ],
    correctAnswer: "Tarbiyachi va o'quvchi o'rtasidagi munosabatlarda hurmat, o'zaro tushunish va optimal muloqotni ta'minlash"
  },
  {
    question: "Estetik tarbiyaning mazmuniga nimalar kiradi?",
    options: [
      "Faqat kiyim-kechak",
      "Go'zallikni idrok etish, estetik didni rivojlantirish, san'atga qiziqish va ijodiy faoliyat",
      "Faqat sport bilan shug'ullanish",
      "Yuridik bilimlarni yodlash"
    ],
    correctAnswer: "Go'zallikni idrok etish, estetik didni rivojlantirish, san'atga qiziqish va ijodiy faoliyat"
  },
  {
    question: "Mehnat tarbiyasining maqsadi nima?",
    options: [
      "Faqat o'qish",
      "Mehnatga ongli munosabat, mehnat ko'nikmalarini shakllantirish, ijodiy yondashuv va kasbga yo'naltirish",
      "Faqat musiqa chalish",
      "Televizor ko'rish"
    ],
    correctAnswer: "Mehnatga ongli munosabat, mehnat ko'nikmalarini shakllantirish, ijodiy yondashuv va kasbga yo'naltirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'o'yin' usulining ahamiyati qanday?",
    options: [
      "Faqat vaqtni o'tkazish",
      "O'quvchilarda jamoada ishlash, qoidaga rioya qilish, muloqot va raqobat ko'nikmalarini rivojlantirish",
      "Faqat jazo sifatida",
      "Bilim berishni to'xtatish"
    ],
    correctAnswer: "O'quvchilarda jamoada ishlash, qoidaga rioya qilish, muloqot va raqobat ko'nikmalarini rivojlantirish"
  },
  {
    question: "O'quvchilarda intellektual tarbiyaning maqsadi nima?",
    options: [
      "Faqat hisoblash",
      "Aqliy qobiliyatlarni, mustaqil fikrlashni, bilimga qiziqishni va o'rganish motivatsiyasini rivojlantirish",
      "Faqat jismoniy mashqlar",
      "Do'stlar bilan uchrashish"
    ],
    correctAnswer: "Aqliy qobiliyatlarni, mustaqil fikrlashni, bilimga qiziqishni va o'rganish motivatsiyasini rivojlantirish"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida o'quvchilarning 'yosh xususiyatlari' nima uchun hisobga olinadi?",
    options: [
      "Kerak bo'lmagan ma'lumot",
      "Tarbiyaviy ta'sir usullari va mazmunini ularning psixologik va fiziologik rivojlanish darajasiga moslashtirish",
      "Faqat bir xil yondashuvni ta'minlash",
      "O'qituvchi ishini murakkablashtirish"
    ],
    correctAnswer: "Tarbiyaviy ta'sir usullari va mazmunini ularning psixologik va fiziologik rivojlanish darajasiga moslashtirish"
  },
  {
    question: "O'quvchilarda ijtimoiy faollikni rivojlantirishning ahamiyati nima?",
    options: [
      "Faqat uyda o'tirish",
      "Jamiyat hayotida faol ishtirok etish, ijtimoiy muammolarni hal qilishda mas'uliyatni his qilish va tashabbus ko'rsatish",
      "Faqat yuridik bilimlarni o'rganish",
      "San'atni inkor qilish"
    ],
    correctAnswer: "Jamiyat hayotida faol ishtirok etish, ijtimoiy muammolarni hal qilishda mas'uliyatni his qilish va tashabbus ko'rsatish"
  },
  {
    question: "Tarbiyaviy ishlarda 'namuna' usulining ta'sir kuchi nimada?",
    options: [
      "Faqat moddiy boylikda",
      "Tarbiyachining shaxsiy ijobiy xulq-atvori, nutqi, munosabati orqali o'quvchilarga bevosita ta'sir ko'rsatish",
      "Faqat jazolashda",
      "O'qituvchining passivligi"
    ],
    correctAnswer: "Tarbiyachining shaxsiy ijobiy xulq-atvori, nutqi, munosabati orqali o'quvchilarga bevosita ta'sir ko'rsatish"
  },
  {
    question: "O'quvchilarning sinfdan tashqari ishlarni rejalashtirishda nimaga e'tibor berish kerak?",
    options: [
      "Faqat qiyin ishlar",
      "O'quvchilarning qiziqishlari, maktab dasturi, mavjud resurslar va ota-onalar bilan hamkorlik",
      "Faqat sinf rahbarining istagi",
      "Rejani juda qisqa qilish"
    ],
    correctAnswer: "O'quvchilarning qiziqishlari, maktab dasturi, mavjud resurslar va ota-onalar bilan hamkorlik"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida 'ma'lumot'ning o'rni qanday?",
    options: [
      "Hech qanday o'rni yo'q",
      "Tarbiyaviy ta'sir ko'rsatish, o'quvchilarning dunyoqarashini kengaytirish va ularni axloqiy me'yorlar bilan tanishtirish manbai",
      "Faqat darsliklar bilan cheklanish",
      "Faqat dars berish"
    ],
    correctAnswer: "Tarbiyaviy ta'sir ko'rsatish, o'quvchilarning dunyoqarashini kengaytirish va ularni axloqiy me'yorlar bilan tanishtirish manbai"
  },
  {
    question: "O'quvchilarni mustaqil hayotga tayyorlashning asosiy yo'nalishlari qaysilar?",
    options: [
      "Faqat moddiy ta'minot",
      "Kasbga yo'naltirish, ijtimoiy ko'nikmalar, shaxsiy javobgarlik va moliyaviy savodxonlikni shakllantirish",
      "Faqat sport bilan shug'ullanish",
      "Tarixiy obidalarni yodlash"
    ],
    correctAnswer: "Kasbga yo'naltirish, ijtimoiy ko'nikmalar, shaxsiy javobgarlik va moliyaviy savodxonlikni shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'an'anaviy tadbirlar'ning ahamiyati nima?",
    options: [
      "Vaqtni behuda sarflash",
      "Maktab, sinf jamoasini birlashtirish, milliy qadriyatlarni targ'ib qilish va an'analarga hurmatni shakllantirish",
      "Faqat eskilikni targ'ib qilish",
      "Yangi g'oyalarni cheklash"
    ],
    correctAnswer: "Maktab, sinf jamoasini birlashtirish, milliy qadriyatlarni targ'ib qilish va an'analarga hurmatni shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarda 'hamkorlik pedagogikasi' nimani anglatadi?",
    options: [
      "Faqat o'qituvchining hukmronligi",
      "O'qituvchi, o'quvchi va ota-onaning teng sheriklik, o'zaro hurmat va birgalikda maqsadga erishish tamoyiliga asoslangan munosabati",
      "Faqat jazo qo'llash",
      "O'qituvchining passivligi"
    ],
    correctAnswer: "O'qituvchi, o'quvchi va ota-onaning teng sheriklik, o'zaro hurmat va birgalikda maqsadga erishish tamoyiliga asoslangan munosabati"
  },
  {
    question: "O'quvchilarda fuqarolik pozitsiyasini shakllantirishning asosiy vazifasi nima?",
    options: [
      "Faqat siyosiy partiyalarga a'zo bo'lish",
      "Vatanga sodiq fuqaro bo'lish, huquq va burchlarini bilish, ijtimoiy hayotda faol ishtirok etish",
      "Faqat tarixiy bilimlarni yodlash",
      "Sport musobaqalarini tashkil etish"
    ],
    correctAnswer: "Vatanga sodiq fuqaro bo'lish, huquq va burchlarini bilish, ijtimoiy hayotda faol ishtirok etish"
  },
  {
    question: "Tarbiyaviy ishlarda 'sinf burchagi' qanday funksiyani bajaradi?",
    options: [
      "Faqat devorni bezash",
      "Sinf hayoti, yutuqlari, qoidalari va tarbiyaviy ma'lumotlarni ko'rsatish, jamoaviy ruhni mustahkamlash",
      "Faqat eski narsalarni saqlash",
      "O'qituvchining shaxsiy narsalari"
    ],
    correctAnswer: "Sinf hayoti, yutuqlari, qoidalari va tarbiyaviy ma'lumotlarni ko'rsatish, jamoaviy ruhni mustahkamlash"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida 'ijtimoiy o'rganish nazariyasi' nimaga asoslangan?",
    options: [
      "Faqat tug'ma qobiliyat",
      "Inson xulq-atvori atrofdagi odamlarni kuzatish, taqlid qilish va mustahkamlash orqali o'rganilishiga",
      "Faqat jismoniy jazo",
      "Kitoblarni yodlash"
    ],
    correctAnswer: "Inson xulq-atvori atrofdagi odamlarni kuzatish, taqlid qilish va mustahkamlash orqali o'rganilishiga"
  },
  {
    question: "Tarbiyaviy ishlarda 'axborot-kommunikatsiya texnologiyalari (AKT)'dan foydalanishning afzalligi nima?",
    options: [
      "Faqat o'qituvchining ishini murakkablashtirish",
      "Tarbiyaviy ta'sirning ko'rgazmaliligi, qiziqarliligi va o'quvchilar faolligini oshirish",
      "An'anaviy usullarni butunlay bekor qilish",
      "Faqat o'yin o'ynash"
    ],
    correctAnswer: "Tarbiyaviy ta'sirning ko'rgazmaliligi, qiziqarliligi va o'quvchilar faolligini oshirish"
  },
  {
    question: "O'quvchilarda ijodiy qobiliyatlarni rivojlantirish uchun qanday tadbirlar o'tkaziladi?",
    options: [
      "Faqat yuridik ma'ruzalar",
      "San'at, musiqa, raqs, adabiy to'garaklar, ko'rik-tanlovlar va ijodiy loyihalar",
      "Faqat sport musobaqalari",
      "Tarixiy sanalarni yodlash"
    ],
    correctAnswer: "San'at, musiqa, raqs, adabiy to'garaklar, ko'rik-tanlovlar va ijodiy loyihalar"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida 'pedagogik tahlil' nima uchun kerak?",
    options: [
      "Faqat xato topish",
      "O'tkazilgan tadbirlarning samaradorligini, sabab va natijalarini o'rganish, kelajakdagi rejalarni takomillashtirish",
      "Faqat ma'muriy jazo berish",
      "Boshqalarni ayblash"
    ],
    correctAnswer: "O'tkazilgan tadbirlarning samaradorligini, sabab va natijalarini o'rganish, kelajakdagi rejalarni takomillashtirish"
  },
  {
    question: "O'quvchilarda millatlararo totuvlikni tarbiyalashning asosiy maqsadi nima?",
    options: [
      "Faqat bir millatni targ'ib qilish",
      "Har xil millat va madaniyat vakillariga hurmat, bag'rikenglik va do'stona munosabatni shakllantirish",
      "Faqat chet tillarini o'rgatish",
      "Tarixiy nizolarni qo'zg'atish"
    ],
    correctAnswer: "Har xil millat va madaniyat vakillariga hurmat, bag'rikenglik va do'stona munosabatni shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarda 'shaxsga yo'naltirilgan yondashuv' nimani anglatadi?",
    options: [
      "Hamma o'quvchilarga bir xil yondashish",
      "Tarbiyaviy jarayonni har bir o'quvchining shaxsiy ehtiyojlari, qiziqishlari va rivojlanish darajasiga qarab qurish",
      "Faqat jamoa manfaatini ko'zlash",
      "O'qituvchining shaxsiy manfaatlari"
    ],
    correctAnswer: "Tarbiyaviy jarayonni har bir o'quvchining shaxsiy ehtiyojlari, qiziqishlari va rivojlanish darajasiga qarab qurish"
  },
  {
    question: "O'quvchilarda ijtimoiy-siyosiy ongni shakllantirishning ahamiyati nima?",
    options: [
      "Faqat eskirgan ma'lumotlarni yodlash",
      "Mamlakatdagi va xalqaro hayotdagi voqealarga ongli munosabat, fuqarolik mas'uliyatini shakllantirish",
      "Faqat sport musobaqalarini o'tkazish",
      "San'atni inkor qilish"
    ],
    correctAnswer: "Mamlakatdagi va xalqaro hayotdagi voqealarga ongli munosabat, fuqarolik mas'uliyatini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'tarbiyaviy muhit'ning o'rni qanday?",
    options: [
      "Muhim emas",
      "O'quvchining rivojlanishiga ta'sir qiluvchi, uning qadriyatlar tizimini shakllantiruvchi moddiy va ma'naviy sharoitlar majmuasi",
      "Faqat maktab binosi",
      "Faqat o'qituvchining shaxsiy fikri"
    ],
    correctAnswer: "O'quvchining rivojlanishiga ta'sir qiluvchi, uning qadriyatlar tizimini shakllantiruvchi moddiy va ma'naviy sharoitlar majmuasi"
  },
  {
    question: "O'quvchilarda oilaga hurmatni shakllantirishning asosiy maqsadi nima?",
    options: [
      "Faqat moddiy yordam",
      "Oila qadriyatlari, ota-onalarga hurmat, oilaviy munosabatlarda mas'uliyatni anglash va ularni mustahkamlash",
      "Faqat jazo qo'llash",
      "O'qishdan bo'shatish"
    ],
    correctAnswer: "Oila qadriyatlari, ota-onalarga hurmat, oilaviy munosabatlarda mas'uliyatni anglash va ularni mustahkamlash"
  },
  {
    question: "Tarbiyaviy ishlarda 'pedagogik etika' nimani anglatadi?",
    options: [
      "Faqat jazo berish",
      "Tarbiyachining kasbiy majburiyatlari, axloqiy me'yorlari va o'quvchilarga nisbatan ehtiyotkorona munosabati",
      "Faqat ma'muriy buyruq",
      "O'qituvchining shaxsiy istaklari"
    ],
    correctAnswer: "Tarbiyachining kasbiy majburiyatlari, axloqiy me'yorlari va o'quvchilarga nisbatan ehtiyotkorona munosabati"
  },
  {
    question: "Tarbiyaviy ishlar samaradorligini tahlil qilish usullariga qaysilar kiradi?",
    options: [
      "Faqat ma'muriy jazo",
      "Suhbatlar, anketalashtirish, kuzatish, natijalarni taqqoslash, pedagogik kengash muhokamasi",
      "Darsliklarni yig'ish",
      "Maktab binosini tozalash"
    ],
    correctAnswer: "Suhbatlar, anketalashtirish, kuzatish, natijalarni taqqoslash, pedagogik kengash muhokamasi"
  },
  {
    question: "O'quvchilarda ekologik madaniyatni shakllantirishning asosiy yo'nalishlari qaysilar?",
    options: [
      "Faqat shahar hayoti",
      "Atrof-muhitni muhofaza qilishga oid bilim, ko'nikma, qadriyat va faol munosabatni shakllantirish",
      "Faqat yuridik bilimlarni o'rganish",
      "Sport musobaqalarini o'tkazish"
    ],
    correctAnswer: "Atrof-muhitni muhofaza qilishga oid bilim, ko'nikma, qadriyat va faol munosabatni shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'sayohatlar va ekskursiyalar'ning ahamiyati nima?",
    options: [
      "Faqat dam olish",
      "Bilimlarni amaliyotda mustahkamlash, madaniy va tarixiy qadriyatlarni bevosita o'rganish, dunyoqarashni kengaytirish",
      "Faqat darslarni qoldirish",
      "Uyga vazifalarni bekor qilish"
    ],
    correctAnswer: "Bilimlarni amaliyotda mustahkamlash, madaniy va tarixiy qadriyatlarni bevosita o'rganish, dunyoqarashni kengaytirish"
  },
  {
    question: "O'quvchilarda axloqiy tushunchalarni (yaxshilik, yomonlik, adolat) shakllantirishning eng samarali usuli qaysi?",
    options: [
      "Faqat ma'ruza",
      "Axloqiy mavzudagi munozaralar, hayotiy misollarni tahlil qilish, badiiy asarlarni o'rganish",
      "Faqat jazo qo'llash",
      "Texnik ishlarni bajarish"
    ],
    correctAnswer: "Axloqiy mavzudagi munozaralar, hayotiy misollarni tahlil qilish, badiiy asarlarni o'rganish"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida o'quvchilarni 'o'z-o'zini tarbiyalash'ga yo'naltirishning maqsadi nima?",
    options: [
      "Faqat o'qituvchining ishini kamaytirish",
      "Shaxsiy kamchiliklarini anglash, ularni tuzatish, o'z ustida ishlash va mustaqil rivojlanishga erishish",
      "Faqat boshqalarga taqlid qilish",
      "O'zgarishga qarshilik qilish"
    ],
    correctAnswer: "Shaxsiy kamchiliklarini anglash, ularni tuzatish, o'z ustida ishlash va mustaqil rivojlanishga erishish"
  },
  {
    question: "Tarbiyaviy ishlarda 'pedagogik muhit'ning asosiy talabi nima?",
    options: [
      "Qattiq nazorat",
      "O'quvchilar uchun xavfsiz, qulay, do'stona va rivojlantiruvchi muhit yaratish",
      "Faqat jazo qo'llash",
      "O'qituvchining passivligi"
    ],
    correctAnswer: "O'quvchilar uchun xavfsiz, qulay, do'stona va rivojlantiruvchi muhit yaratish"
  },
  {
    question: "O'quvchilarda 'mehnat madaniyati'ni shakllantirish nimani anglatadi?",
    options: [
      "Faqat jismoniy kuch",
      "Mehnatga ongli munosabat, ishni rejalashtirish, samarali ishlash va ish joyida tartibga rioya qilish",
      "Faqat pul ishlash",
      "Dam olishni o'rganish"
    ],
    correctAnswer: "Mehnatga ongli munosabat, ishni rejalashtirish, samarali ishlash va ish joyida tartibga rioya qilish"
  },
  {
    question: "Tarbiyaviy ishlarda 'jamoa bo'lib ijodiy faoliyat'ning afzalligi nima?",
    options: [
      "Faqat yolg'izlikda ishlash",
      "Birlashgan holda ijodiy muammolarni hal qilish, bir-birini qo'llab-quvvatlash va umumiy natijaga erishish",
      "Faqat individual yutuqlar",
      "O'qituvchining yagona qaror qabul qilishi"
    ],
    correctAnswer: "Birlashgan holda ijodiy muammolarni hal qilish, bir-birini qo'llab-quvvatlash va umumiy natijaga erishish"
  },
  {
    question: "O'quvchilarda 'kommunikativ kompetentlik'ni rivojlantirishning maqsadi nima?",
    options: [
      "Faqat chet tilini o'rganish",
      "Turli vaziyatlarda samarali muloqot qilish, o'z fikrini aniq ifodalash va boshqalarni tushunish qobiliyatini shakllantirish",
      "Faqat yozishni o'rgatish",
      "Kitoblarni yodlash"
    ],
    correctAnswer: "Turli vaziyatlarda samarali muloqot qilish, o'z fikrini aniq ifodalash va boshqalarni tushunish qobiliyatini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'tarbiyaviy loyihalar' qanday ahamiyatga ega?",
    options: [
      "Faqat vaqtni behuda sarflash",
      "O'quvchilarni ma'lum bir maqsadga yo'naltirish, ularning mustaqilligini, ijodkorligini va amaliy ko'nikmalarini rivojlantirish",
      "Faqat nazariy bilim berish",
      "O'qituvchining yagona ishi"
    ],
    correctAnswer: "O'quvchilarni ma'lum bir maqsadga yo'naltirish, ularning mustaqilligini, ijodkorligini va amaliy ko'nikmalarini rivojlantirish"
  },
  {
    question: "O'quvchilarni 'axborot madaniyati'ga o'rgatishning asosiy vazifasi nima?",
    options: [
      "Faqat kompyuter o'yinlari",
      "Axborotni izlash, tanqidiy tahlil qilish, to'g'ri foydalanish va axborot xavfsizligiga rioya qilish ko'nikmalarini shakllantirish",
      "Faqat eskirgan ma'lumotlarni yodlash",
      "Kitob o'qimaslik"
    ],
    correctAnswer: "Axborotni izlash, tanqidiy tahlil qilish, to'g'ri foydalanish va axborot xavfsizligiga rioya qilish ko'nikmalarini shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida 'pedagogik hamkorlik' nimani talab qiladi?",
    options: [
      "Faqat buyruq berish",
      "O'qituvchi va o'quvchi o'rtasida teng munosabat, o'zaro ishonch, hurmat va birgalikda qaror qabul qilish",
      "Faqat jazo qo'llash",
      "O'qituvchining passivligi"
    ],
    correctAnswer: "O'qituvchi va o'quvchi o'rtasida teng munosabat, o'zaro ishonch, hurmat va birgalikda qaror qabul qilish"
  },
  {
    question: "O'quvchilarda ekologik ongni shakllantirishning eng samarali usuli qaysi?",
    options: [
      "Faqat ma'ruza",
      "Amaliy ishlarga jalb qilish (ko'chat ekish, tabiatni tozalash), ekskursiyalar, tadqiqot loyihalari",
      "Faqat jazo berish",
      "Kitoblarni yodlash"
    ],
    correctAnswer: "Amaliy ishlarga jalb qilish (ko'chat ekish, tabiatni tozalash), ekskursiyalar, tadqiqot loyihalari"
  },
  {
    question: "Tarbiyaviy ishlarda 'bahs-munozara' usulining ahamiyati qanday?",
    options: [
      "Faqat tortishish",
      "O'quvchilarda tanqidiy fikrlash, o'z fikrini himoya qilish, boshqalarning fikrini hurmat qilish va muammolarni birgalikda hal qilish ko'nikmalarini rivojlantirish",
      "Faqat eshitish",
      "O'qituvchining yagona hukmronligi"
    ],
    correctAnswer: "O'quvchilarda tanqidiy fikrlash, o'z fikrini himoya qilish, boshqalarning fikrini hurmat qilish va muammolarni birgalikda hal qilish ko'nikmalarini rivojlantirish"
  },
  {
    question: "O'quvchilarda 'o'z-o'zini boshqarish' organlarining maqsadi nima?",
    options: [
      "Sinf rahbarining ishini kamaytirish",
      "Jamoa ishlarini tashkil etish, o'quvchilarning mas'uliyatini oshirish, tashabbuskorlikni rivojlantirish va maktab hayotida faol ishtirok etish",
      "Faqat o'yin o'ynash",
      "O'qituvchining passivligi"
    ],
    correctAnswer: "Jamoa ishlarini tashkil etish, o'quvchilarning mas'uliyatini oshirish, tashabbuskorlikni rivojlantirish va maktab hayotida faol ishtirok etish"
  },
  {
    question: "Tarbiyaviy ishlarni rejalashtirishda 'tashxis' natijalari qanday qo'llaniladi?",
    options: [
      "Faqat arxivda saqlash",
      "Rejalarni o'quvchilarning haqiqiy ehtiyojlari va rivojlanish darajasiga moslashtirish, maqsad va vazifalarni aniqlashtirish",
      "Faqat jazo berish",
      "O'qituvchining shaxsiy ishlari"
    ],
    correctAnswer: "Rejalarni o'quvchilarning haqiqiy ehtiyojlari va rivojlanish darajasiga moslashtirish, maqsad va vazifalarni aniqlashtirish"
  },
  {
    question: "O'quvchilarda 'san'at madaniyati'ni shakllantirishning asosiy vazifasi nima?",
    options: [
      "Faqat rasm chizish",
      "San'at asarlarini tushunish, estetik didni rivojlantirish, san'atga hurmat va ijodiy faoliyatga qiziqish uyg'otish",
      "Faqat yuridik bilimlarni o'rganish",
      "Sport musobaqalarini o'tkazish"
    ],
    correctAnswer: "San'at asarlarini tushunish, estetik didni rivojlantirish, san'atga hurmat va ijodiy faoliyatga qiziqish uyg'otish"
  },
  {
    question: "Tarbiyaviy ishlarda 'pedagogik texnologiyalar' nimani anglatadi?",
    options: [
      "Faqat kompyuterlar",
      "Tarbiyaviy jarayonni tizimli, samarali va kafolatlangan natijaga erishishga qaratilgan usullar, vositalar va jarayonlar majmuasi",
      "Faqat eski usullar",
      "O'qituvchining shaxsiy istaklari"
    ],
    correctAnswer: "Tarbiyaviy jarayonni tizimli, samarali va kafolatlangan natijaga erishishga qaratilgan usullar, vositalar va jarayonlar majmuasi"
  },
  {
    question: "O'quvchilarda 'o'z-o'zini nazorat qilish' ko'nikmasini shakllantirishning ahamiyati nima?",
    options: [
      "Faqat jazo berish",
      "O'z xatti-harakatlari, his-tuyg'ulari va faoliyatini mustaqil ravishda tartibga solish, maqsadlarga erishish va xatolarni tuzatish",
      "Faqat boshqalarni nazorat qilish",
      "O'qituvchiga bog'liq bo'lish"
    ],
    correctAnswer: "O'z xatti-harakatlari, his-tuyg'ulari va faoliyatini mustaqil ravishda tartibga solish, maqsadlarga erishish va xatolarni tuzatish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'ijtimoiy foydali amaliyot'ning maqsadi nima?",
    options: [
      "Faqat vaqtni o'tkazish",
      "O'quvchilarni jamiyatga foyda keltiradigan amaliy ishlarga jalb qilish, mas'uliyat, jamoaviy ruh va mehnatsevarlikni rivojlantirish",
      "Faqat nazariy bilim berish",
      "O'qituvchining yagona ishi"
    ],
    correctAnswer: "O'quvchilarni jamiyatga foyda keltiradigan amaliy ishlarga jalb qilish, mas'uliyat, jamoaviy ruh va mehnatsevarlikni rivojlantirish"
  },
  {
    question: "O'quvchilarda 'tarixiy ong'ni shakllantirishning asosiy vazifasi nima?",
    options: [
      "Faqat eskirgan ma'lumotlarni yodlash",
      "O'z Vatanining tarixi, madaniyati, buyuk ajdodlari merosini bilish va ularga hurmatni shakllantirish",
      "Faqat chet tillarini o'rgatish",
      "Texnik bilimlarni o'rganish"
    ],
    correctAnswer: "O'z Vatanining tarixi, madaniyati, buyuk ajdodlari merosini bilish va ularga hurmatni shakllantirish"
  },
  {
    question: "Tarbiyaviy ishlarni tashkil etishda 'teatrlashtirilgan tomoshalar'ning ahamiyati nima?",
    options: [
      "Faqat dam olish",
      "O'quvchilarda ijodiy qobiliyat, nutq, badiiy didni rivojlantirish va axloqiy qadriyatlarni emotsional qabul qilish",
      "Faqat nazariy bilimlarni berish",
      "Sport musobaqalarini o'tkazish"
    ],
    correctAnswer: "O'quvchilarda ijodiy qobiliyat, nutq, badiiy didni rivojlantirish va axloqiy qadriyatlarni emotsional qabul qilish"
  },
  {
    question: "O'quvchilarni 'o'zini o'zi boshqarish' organlari faoliyatini tashkil etishda sinf rahbari qanday rol o'ynaydi?",
    options: [
      "Faqat buyruq berish",
      "Maslahatchi, yo'naltiruvchi va ko'mak beruvchi, ularning mustaqilligini rag'batlantiruvchi",
      "Faqat nazorat qiluvchi",
      "O'qituvchining passivligi"
    ],
    correctAnswer: "Maslahatchi, yo'naltiruvchi va ko'mak beruvchi, ularning mustaqilligini rag'batlantiruvchi"
  },
  {
    question: "Tarbiyaviy ishlar metodikasida 'pedagogik ta'sir o'tkazish' nimani anglatadi?",
    options: [
      "Faqat jazo berish",
      "Tarbiyachi tomonidan o'quvchining ongiga, his-tuyg'ulariga va xatti-harakatlariga ijobiy o'zgarishlar kiritish maqsadida yo'naltirilgan faoliyat",
      "Faqat ma'lumot berish",
      "O'quvchining xohishini inkor qilish"
    ],
    correctAnswer: "Tarbiyachi tomonidan o'quvchining ongiga, his-tuyg'ulariga va xatti-harakatlariga ijobiy o'zgarishlar kiritish maqsadida yo'naltirilgan faoliyat"
  },
  {
    question: "O'quvchilarda 'estetik qadriyatlar'ni shakllantirishning asosiy yo'nalishlari qaysilar?",
    options: [
      "Faqat pul ishlash",
      "San'at, tabiat va inson faoliyatidagi go'zallikni idrok etish, estetik didni rivojlantirish va ijodiy faollik",
      "Faqat sport musobaqalari",
      "Yuridik bilimlarni yodlash"
    ],
    correctAnswer: "San'at, tabiat va inson faoliyatidagi go'zallikni idrok etish, estetik didni rivojlantirish va ijodiy faollik"
  },
  {
    question: "Tarbiyaviy ishlarda 'amaliy metodlar'ning afzalligi nima?",
    options: [
      "Faqat yodlash",
      "O'quvchilarda amaliy ko'nikmalar, odatlar va xulq-atvor me'yorlarini bevosita faoliyat orqali shakllantirish",
      "Faqat nazariy bilim berish",
      "O'qituvchining yagona ishi"
    ],
    correctAnswer: "O'quvchilarda amaliy ko'nikmalar, odatlar va xulq-atvor me'yorlarini bevosita faoliyat orqali shakllantirish"
  },
  {
    question: "O'quvchilarda 'o'z-o'zini rivojlantirish'ga motivatsiya uyg'otishning ahamiyati nima?",
    options: [
      "Faqat jazo berish",
      "O'quvchining shaxsiy o'sishi, bilim olishga intilishi va hayotda muvaffaqiyatga erishishga intilishini rag'batlantirish",
      "Faqat o'qituvchining o'sishi",
      "Boshqalarga bog'liq bo'lish"
    ],
    correctAnswer: "O'quvchining shaxsiy o'sishi, bilim olishga intilishi va hayotda muvaffaqiyatga erishishga intilishini rag'batlantirish"
  },
  {
    question: "Tarbiyaviy ishlarda 'pedagogik muloqot'ning asosiy talabi nima?",
    options: [
      "Faqat rasmiy ohang",
      "O'zaro hurmat, ishonch, samimiylik, eshitish qobiliyati va o'quvchiga shaxs sifatida yondashish",
      "Faqat buyruq berish",
      "O'qituvchining yagona gapirishi"
    ],
    correctAnswer: "O'zaro hurmat, ishonch, samimiylik, eshitish qobiliyati va o'quvchiga shaxs sifatida yondashish"
  },
  {
    question: "O'quvchilarda 'ijtimoiy mas'uliyat'ni shakllantirish nimani anglatadi?",
    options: [
      "Faqat o'ziga javob berish",
      "Jamiyat, maktab va o'z xatti-harakatlari uchun javobgarlikni his qilish, ijtimoiy normalarga rioya qilish va faol fuqarolik pozitsiyasini egallash",
      "Faqat pul ishlash",
      "Tarixiy obidalarni yodlash"
    ],
    correctAnswer: "Jamiyat, maktab va o'z xatti-harakatlari uchun javobgarlikni his qilish, ijtimoiy normalarga rioya qilish va faol fuqarolik pozitsiyasini egallash"
  },
  {
    question: "Tarbiyaviy ishlarni rejalashtirishda 'tashxis'dan keyingi bosqich qaysi?",
    options: [
      "Natijalarni arxivga topshirish",
      "Tarbiyaviy ish maqsadlari va vazifalarini aniqlash",
      "Faqat o'yin o'ynash",
      "O'qituvchini tanqid qilish"
    ],
    correctAnswer: "Tarbiyaviy ish maqsadlari va vazifalarini aniqlash"
  },
  {
    question: "O'quvchilarda 'madaniy meros'ga hurmatni shakllantirishning asosiy shakllari qaysilar?",
    options: [
      "Faqat internetda o'tirish",
      "Muzey, tarixiy joylarga sayohatlar, milliy urf-odatlar va bayramlarni o'rganish, adabiy-badiiy tadbirlar",
      "Faqat sport musobaqalari",
      "Yuridik bilimlarni yodlash"
    ],
    correctAnswer: "Muzey, tarixiy joylarga sayohatlar, milliy urf-odatlar va bayramlarni o'rganish, adabiy-badiiy tadbirlar"
  },
  {
    question: "Tarbiyaviy ishlarda 'pedagogik kuzatish'ning maqsadi nima?",
    options: [
      "Faqat xato topish",
      "O'quvchining xulq-atvori, rivojlanish darajasi, qiziqishlari va tarbiyalanganlik holatini tizimli ravishda o'rganish",
      "Faqat jazo berish",
      "Darsliklarni yig'ish"
    ],
    correctAnswer: "O'quvchining xulq-atvori, rivojlanish darajasi, qiziqishlari va tarbiyalanganlik holatini tizimli ravishda o'rganish"
  }
];


// ===== GLOBAL O'ZGARUVCHILAR =====
const quizContainer = document.getElementById('quiz-container');
const nextButton = document.getElementById('nextBtn');
const summaryResultsSpan = document.getElementById('summaryResults');
const resultModal = document.getElementById('resultModal');
const continueBtn = document.getElementById('continueBtn');

let shuffledAllQuestions = [];
let currentQuestionIndex = 0;
let totalAttempts = 0;
let correctCount = 0;
let questionAnsweredThisTurn = false;

// 20 ta savollik blok uchun
let blockCorrectCount = 0;
let blockTotalCount = 0;
let blockStartIndex = 0;

// ===== YORDAMCHI FUNKSIYALAR =====
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateResults() {
    let percentage = 0;
    if (totalAttempts > 0) {
        percentage = (correctCount / totalAttempts) * 100;
    }
    summaryResultsSpan.textContent = `Urinish: ${totalAttempts}, To'g'ri: ${correctCount}, Foiz: ${percentage.toFixed(0)}%`;
}

function loadQuestion() {
    quizContainer.innerHTML = '';
    questionAnsweredThisTurn = false;
    nextButton.disabled = true;

    if (shuffledAllQuestions.length === 0) {
        shuffledAllQuestions = [...questionsData];
        shuffleArray(shuffledAllQuestions);
        currentQuestionIndex = 0;
    }

    if (currentQuestionIndex >= shuffledAllQuestions.length) {
        currentQuestionIndex = 0;
        shuffleArray(shuffledAllQuestions);
    }

    const q = shuffledAllQuestions[currentQuestionIndex];
    const questionBlock = document.createElement('div');
    questionBlock.classList.add('question-block');

    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = `${totalAttempts + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    const optionsList = document.createElement('ul');
    optionsList.classList.add('options-list');

    const shuffledOptions = [...q.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option, optionIndex) => {
        const listItem = document.createElement('li');
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'question';
        radioInput.value = option;
        radioInput.id = `q-option${optionIndex}`;

        const label = document.createElement('label');
        label.htmlFor = `q-option${optionIndex}`;
        label.textContent = option;

        radioInput.addEventListener('change', (event) => {
            if (questionAnsweredThisTurn) return;

            const selectedValue = event.target.value;
            const allLabels = questionBlock.querySelectorAll('label');
            
            totalAttempts++;
            blockTotalCount++;

            if (selectedValue === q.correctAnswer) {
                // To'g'ri javob
                label.classList.add('selected-correct');
                correctCount++;
                blockCorrectCount++;

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'correct');
                feedbackDiv.textContent = 'To\'g\'ri!';
                questionBlock.appendChild(feedbackDiv);
            } else {
                // Noto'g'ri javob
                label.classList.add('selected-wrong');
                
                // To'g'ri javobni ko'rsatish
                allLabels.forEach(lbl => {
                    const radio = document.getElementById(lbl.htmlFor);
                    if (radio && radio.value === q.correctAnswer) {
                        lbl.classList.add('show-correct');
                    }
                });

                let feedbackDiv = questionBlock.querySelector('.feedback');
                if (feedbackDiv) feedbackDiv.remove();
                
                feedbackDiv = document.createElement('div');
                feedbackDiv.classList.add('feedback', 'incorrect');
                feedbackDiv.textContent = `Noto\'g\'ri. To'g'ri javob: "${q.correctAnswer}"`;
                questionBlock.appendChild(feedbackDiv);
            }

            updateResults();

            const radioButtons = questionBlock.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.disabled = true;
            });

            questionAnsweredThisTurn = true;
            nextButton.disabled = false;
        });

        listItem.appendChild(radioInput);
        listItem.appendChild(label);
        optionsList.appendChild(listItem);
    });

    questionBlock.appendChild(optionsList);
    quizContainer.appendChild(questionBlock);
}

function showResultModal() {
    const modalCorrect = document.getElementById('modalCorrect');
    const modalWrong = document.getElementById('modalWrong');
    const modalPercent = document.getElementById('modalPercent');
    const modalVerdict = document.getElementById('modalVerdict');
    const modalIcon = document.querySelector('.modal-icon');

    const wrongCount = blockTotalCount - blockCorrectCount;
    const percentage = blockTotalCount > 0 ? (blockCorrectCount / blockTotalCount) * 100 : 0;

    modalCorrect.textContent = blockCorrectCount;
    modalWrong.textContent = wrongCount;
    modalPercent.textContent = percentage.toFixed(0) + '%';

    // Baholash (70% o'tish bali)
    if (percentage >= 70) {
        modalVerdict.textContent = 'üéâ Tabriklaymiz! Siz imtihondan muvaffaqiyatli o\'tdingiz!';
        modalVerdict.className = 'modal-verdict pass';
        modalIcon.textContent = 'üéâ';
    } else {
        modalVerdict.textContent = 'üòî Afsuski, siz imtihondan o\'ta olmadingiz. Yana harakat qiling!';
        modalVerdict.className = 'modal-verdict fail';
        modalIcon.textContent = 'üòî';
    }

    resultModal.style.display = 'block';
}

function handleNextQuestion() {
    currentQuestionIndex++;
    
    // Har 20 ta savoldan keyin modal ko'rsatish
    if (blockTotalCount > 0 && blockTotalCount % 20 === 0) {
        showResultModal();
        return;
    }

    loadQuestion();
}

// ===== HODISA TINGLOVCHILAR =====
nextButton.addEventListener('click', handleNextQuestion);

continueBtn.addEventListener('click', () => {
    resultModal.style.display = 'none';
    
    // Blok statistikasini tiklash
    blockCorrectCount = 0;
    blockTotalCount = 0;
    blockStartIndex = currentQuestionIndex;
    
    // Yangi savol yuklash
    loadQuestion();
});

// ===== LOGIN TIZIMI =====
window.addEventListener('DOMContentLoaded', function() {
    const isAuthenticated = localStorage.getItem(AUTH_KEY);
    
    if (isAuthenticated === 'true') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    } else {
        document.body.classList.add('login-active');
        document.getElementById('loginScreen').style.display = 'flex';
    }
});

document.getElementById('loginBtn').addEventListener('click', function() {
    checkCredentials();
});

document.getElementById('password').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkCredentials();
    }
});

document.getElementById('username').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('password').focus();
    }
});

function checkCredentials() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const btnText = document.getElementById('btnText');

    if (!username || !password) {
        errorMessage.textContent = '‚ö†Ô∏è Iltimos, barcha maydonlarni to\'ldiring!';
        errorMessage.classList.add('show');
        return;
    }

    loginBtn.disabled = true;
    btnText.innerHTML = 'Tekshirilmoqda<span class="loading"></span>';
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
            localStorage.setItem(AUTH_KEY, 'true');
            errorMessage.classList.remove('show');
            
            btnText.textContent = '‚úì Muvaffaqiyatli!';
            loginBtn.style.background = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';
            
            setTimeout(() => {
                showMainContent();
            }, 500);
        } else {
            errorMessage.textContent = '‚ùå Login yoki parol noto\'g\'ri!';
            errorMessage.classList.add('show');
            loginBtn.disabled = false;
            btnText.textContent = 'Kirish';
            
            document.getElementById('password').value = '';
            document.getElementById('password').focus();
        }
    }, 500);
}

function showMainContent() {
    const loginScreen = document.getElementById('loginScreen');
    
    loginScreen.style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        document.body.classList.remove('login-active');
        startTimer();
        updateResults();
        loadQuestion();
    }, 500);
}

function logout() {
    if (confirm('Rostdan ham tizimdan chiqmoqchimisiz?')) {
        localStorage.removeItem(AUTH_KEY);
        location.reload();
    }
}

console.log('%cüí° Tizimdan chiqish uchun:', 'color: blue; font-size: 14px; font-weight: bold;');
console.log('%clogout()', 'color: green; font-size: 12px; background: #f0f0f0; padding: 5px;');

// ===== TAYMER =====
let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = 
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = formattedTime;
}