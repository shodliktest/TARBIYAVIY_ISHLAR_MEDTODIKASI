// ===== PAROL TIZIMI =====
const AUTH_KEY = 'test_authenticated';
const VALID_CREDENTIALS = {
    username: 'Talim2025',
    password: 'Odina1221'
};

// ===== TEST SAVOLLARI (400 TA) =====
const questionsData = [
    {
        question: "Tarbiyaviy ishlar metodikasi fanining asosiy maqsadi nima?",
        options: [
            "Oëquvchilarning bilimini nazorat qilish",
            "Tarbiyaviy ishlarni ilmiy asosda tashkil etish va samaradorligini oshirish",
            "Darsliklarni yaratish va tahlil qilish",
            "Fanlarni chuqur oërganishga yoënaltirish"
        ],
        correctAnswer: "Tarbiyaviy ishlarni ilmiy asosda tashkil etish va samaradorligini oshirish"
    },
    {
        question: "Quyidagilardan qaysi biri tarbiyaviy ishlar metodikasining vazifasiga kiradi?",
        options: [
            "Oëquv dasturlarini ishlab chiqish",
            "Maktab binosini loyihalash",
            "Tarbiyaviy ishlarni rejalashtirish, tashkil etish va baholash",
            "Fanni test asosida oëqitish"
        ],
        correctAnswer: "Tarbiyaviy ishlarni rejalashtirish, tashkil etish va baholash"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi fanining asosiy obyekti nima?",
        options: [
            "Oëqituvchilar mehnati",
            "Tarbiyaviy jarayon",
            "Darsliklar sifati",
            "Texnik vositalar"
        ],
        correctAnswer: "Tarbiyaviy jarayon"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi fani qaysi fanlar bilan bevosita bogëliq?",
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
            "Oëquv rejasini qisqartirish"
        ],
        correctAnswer: "Tarbiyaviy faoliyatni rejalashtirish va nazorat qilish"
    },
    {
        question: "Tarbiyaviy ishlar metodikasida ìusulî deganda nima tushuniladi?",
        options: [
            "Tarixiy yondashuv",
            "Oëqitish shakli",
            "Tarbiyaviy maqsadga erishish yoëllari",
            "Ijtimoiy tahlil"
        ],
        correctAnswer: "Tarbiyaviy maqsadga erishish yoëllari"
    },
    {
        question: "Quyidagilardan qaysi biri tarbiyaviy ishlar metodikasining shakli hisoblanadi?",
        options: [
            "Kitob oëqish",
            "Suhbat, ekskursiya, davra suhbati",
            "Hisobot tayyorlash",
            "Tahliliy ishlar"
        ],
        correctAnswer: "Suhbat, ekskursiya, davra suhbati"
    },
    {
        question: "Tarbiyaviy ishlar samaradorligi nimaga bogëliq?",
        options: [
            "Oíquv dasturiga",
            "Fanlar soniga",
            "Oíqituvchi shaxsiyati va metodik yondashuvga",
            "Dars soatlariga"
        ],
        correctAnswer: "Oíqituvchi shaxsiyati va metodik yondashuvga"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi fanining vazifalaridan biri bu ñ",
        options: [
            "Imtihon olish",
            "Tarbiyaviy usullarni tizimlashtirish va amalda qoëllash",
            "Baholash mezonlarini ishlab chiqish",
            "Dars jadvalini tuzish"
        ],
        correctAnswer: "Tarbiyaviy usullarni tizimlashtirish va amalda qoëllash"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi fanining shakllanishi qachon boshlandi?",
        options: [
            "XIX asrda",
            "XX asr boshlarida",
            "XVII asrda",
            "XXI asrda"
        ],
        correctAnswer: "XX asr boshlarida"
    },
    {
        question: "Jadidehilik harakati tarbiyaning qaysi jihatini rivojlantirishga katta hissa qoëshgan?",
        options: [
            "Texnik jihatini",
            "Iqtisodiy tomonni",
            "Maínaviy-axloqiy tarbiyani",
            "Jismoniy tarbiyani"
        ],
        correctAnswer: "Maínaviy-axloqiy tarbiyani"
    },
    {
        question: "Tarbiyaviy ishlar metodikasiga oid dastlabki ilmiy izlanishlar kimlar tomonidan olib borilgan?",
        options: [
            "Kimyogarlar tomonidan",
            "Pedagog olimlar tomonidan",
            "Muhandislar tomonidan",
            "Iqtisodchilar tomonidan"
        ],
        correctAnswer: "Pedagog olimlar tomonidan"
    },
    {
        question: "Oëzbekistonda tarbiyaviy ishlar metodikasining shakllanishida qaysi davr muhim bosqich hisoblanadi?",
        options: [
            "Sovetlar davri",
            "Mustaqillikdan keyingi davr",
            "Amir Temur davri",
            "Oltin Oërda davri"
        ],
        correctAnswer: "Mustaqillikdan keyingi davr"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining tarixiy ildizlari qayerdan boshlanadi?",
        options: [
            "Antik davr siyosati",
            "Faqat zamonaviy Oëzbekiston tarixidan",
            "Ilk Sharq mutafakkirlarining asarlaridan",
            "Yevropa sanoat ingilobidan"
        ],
        correctAnswer: "Ilk Sharq mutafakkirlarining asarlaridan"
    },
    {
        question: "Tarbiyaning nazariy va amaliy asoslarini rivojlantirgan oízbek mutafakkiri kim?",
        options: [
            "Ibn Sino",
            "Mirzo Ulugëbek",
            "Ahmad Fargëoniy",
            "Beruniy"
        ],
        correctAnswer: "Beruniy"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining XX asrdagi rivojlanishiga kimlar hissa qoëshgan?",
        options: [
            "Quruvchilar",
            "Harbiylar",
            "Pedagog olimlar",
            "Sportchilar"
        ],
        correctAnswer: "Pedagog olimlar"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi mustaqillik yillarida qanday yoënalishda rivojlandi?",
        options: [
            "texnik yoënalishda",
            "Yevropa standartlariga asoslangan",
            "Milliy qadriyatlar va umuminsoniy tamoyillar asosida",
            "diniy asosda"
        ],
        correctAnswer: "Milliy qadriyatlar va umuminsoniy tamoyillar asosida"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining rivojlanishida qaysi omil muhim rol oëynaydi?",
        options: [
            "Kompyuter texnologiyalari",
            "Internet tezligi",
            "Jamiyat ehtiyoji va davr talabiga moslashuvchanlik",
            "Tabiiy resurslar"
        ],
        correctAnswer: "Jamiyat ehtiyoji va davr talabiga moslashuvchanlik"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi fanining predmeti nima?",
        options: [
            "Oëquv jarayoni natijalari",
            "Darsliklar va uslubiy qoëllanmalar",
            "Tarbiyaviy jarayonning mazmuni, shakli, usuli va vositalari",
            "Maktab binosi va uning jihozlari"
        ],
        correctAnswer: "Tarbiyaviy jarayonning mazmuni, shakli, usuli va vositalari"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining asosiy maqsadi nima?",
        options: [
            "Oëquvchilarning sinfdan tashqari faoliyatini nazorat qilish",
            "Tarbiyaviy ishlarni ilmiy asosda tashkil etish va samaradorligini oshirish",
            "Yangi darsliklar yozish",
            "Fanlararo alogalarni kuchaytirish"
        ],
        correctAnswer: "Tarbiyaviy ishlarni ilmiy asosda tashkil etish va samaradorligini oshirish"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining asosiy vazifalaridan biri bu ñ",
        options: [
            "Hisobotlarni rasmiylashtirish",
            "Tashkiliy yigëilishlar oëtkazish",
            "Tarbiyaviy ishlarni rejalashtirish, tashkil etish va baholash",
            "Moliyaviy tahlil qilish"
        ],
        correctAnswer: "Tarbiyaviy ishlarni rejalashtirish, tashkil etish va baholash"
    },
    {
        question: "Quyidagilardan qaysi biri tarbiyaviy ishlar metodikasining predmeti hisoblanadi?",
        options: [
            "Ilmiy-texnik taraqqiyot",
            "Oíquvchilarni ragíbatlantirish tizimi",
            "Tarbiyaviy faoliyatning mazmuni va metodlari",
            "Laboratoriya uskunalari"
        ],
        correctAnswer: "Tarbiyaviy faoliyatning mazmuni va metodlari"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining fan sifatida shakllanishida nimalar asos boëladi?",
        options: [
            "Muhandislik tajribalari",
            "Psixologik testlar",
            "Ilmiy-nazariy izlanishlar va amaliy tajribalar",
            "Ekskursiyalar"
        ],
        correctAnswer: "Ilmiy-nazariy izlanishlar va amaliy tajribalar"
    },
    {
        question: "Tarbiyaviy ishlar metodikasi fanining vazifasi quyidagilardan qaysi biri boëlishi mumkin?",
        options: [
            "Hisobot yozish boëyicha koërsatmalar berish",
            "Rivojlangan davlatlarning tajribasini koër-koërona koëchirish",
            "Tarbiyaviy faoliyat samaradorligini oshirishga yoënaltirilgan metodlar ishlab chiqish",
            "Oíqituvchilarning maoshini belgilash"
        ],
        correctAnswer: "Tarbiyaviy faoliyat samaradorligini oshirishga yoënaltirilgan metodlar ishlab chiqish"
    },
    {
        question: "ìMetodikaî soëzining maínosi nima?",
        options: [
            "Nazariya",
            "Usul, yoël, yondashuvlar tizimi",
            "Baholash mezoni",
            "Tashkiliy rejalar"
        ],
        correctAnswer: "Usul, yoël, yondashuvlar tizimi"
    },
    {
        question: "Tarbiyaviy ishlar metodikasining vazifalaridan biri sifatida toëgëri variantni aniqlang:",
        options: [
            "Maktab direktori lavozimiga nomzod tayinlash",
            "Texnik vositalarni xarid qilish",
            "Tarbiyaviy ishlarning usullarini ishlab chiqish va takomillashtirish",
            "Davlat imtihonini tashkil etish"
        ],
        correctAnswer: "Tarbiyaviy ishlarning usullarini ishlab chiqish va takomillashtirish"
    },
    {
        question: "Xalq pedagogikasi deganda nimani tushunasiz?",
        options: [
            "qadimiy darsliklar tizimini",
            "Odamlarning hayotiy tajribasi asosida shakllangan tarbiya tizimini",
            "Zamonaviy texnologiyalar asosidagi taílimni",
            "Yevropa andozalariga mos oëquv tizimini"
        ],
        correctAnswer: "Odamlarning hayotiy tajribasi asosida shakllangan tarbiya tizimini"
    },
    {
        question: "Xalq pedagogikasida tarbiyaning asosiy manbai nima hisoblanadi?",
        options: [
            "Darsliklar va internet",
            "Oliy taílim tizimi",
            "Ota-ona, ota-bobolar, urf-odat va aníanalar",
            "Tashqi siyosiy manbalar"
        ],
        correctAnswer: "Ota-ona, ota-bobolar, urf-odat va aníanalar"
    },
    {
        question: "Xalq pedagogikasida yoshlar tarbiyasining asosiy maqsadi nima?",
        options: [
            "Yuksak texnik bilim berish",
            "Chet tillarini oërgatish",
            "Yaxshi xulq, odob va mehnatsevarlikni shakllantirish",
            "Kasbiy tayyorlovni oshirish"
        ],
        correctAnswer: "Yaxshi xulq, odob va mehnatsevarlikni shakllantirish"
    },
    {
        question: "Xalq pedagogikasida qoëllaniladigan asosiy usullardan biri bu ñ",
        options: [
            "Laboratoriya tajribalari",
            "Ogëzaki ijod ñ ertak, maqol, topishmoq orqali tarbiya",
            "Kompyuter dasturlari",
            "Oëquv fanlarini chuqur oërganish"
        ],
        correctAnswer: "Ogëzaki ijod ñ ertak, maqol, topishmoq orqali tarbiya"
    },
    {
        question: "Maqol va matallar xalq pedagogikasida qanday rol oëynaydi?",
        options: [
            "oërganishga yordam beradi",
            "Axloqiy, maínaviy qadriyatlarni shakllantiradi",
            "Yozma ishlar uchun ishlatiladi",
            "Test yechish vositasi hisoblanadi"
        ],
        correctAnswer: "Axloqiy, maínaviy qadriyatlarni shakllantiradi"
    },
    {
        question: "Xalq pedagogikasidagi ìnamuna koërsatishî usuli qanday usulga kiradi?",
        options: [
            "Nazariy tahlil",
            "eshitish orqali taílim",
            "Amaliy-uslubiy tarbiya usuli",
            "Tashkiliy nazorat vositasi"
        ],
        correctAnswer: "Amaliy-uslubiy tarbiya usuli"
    },
    {
        question: "Quyidagilardan qaysi biri xalq pedagogikasidagi tarbiya vositalaridan biridir?",
        options: [
            "Kompyuter va printer",
            "Ertak, qoëshiq, doston",
            "Robototexnika jihozlari",
            "Laboratoriya uskunalari"
        ],
        correctAnswer: "Ertak, qoëshiq, doston"
    },
    {
        question: "Xalq pedagogikasida yoshlarni mehnatga oërgatishda asosiy vosita nima?",
        options: [
            "Kitob oëqitish",
            "Ota-onaga yordam berish, hunarga jalb qilish",
            "Maktabda dars oëtish",
            "Elektron qurilmalar orqali trening"
        ],
        correctAnswer: "Ota-onaga yordam berish, hunarga jalb qilish"
    },
    {
        question: "Xalq pedagogikasidagi tarbiya vositalarining asosiy xususiyati qanday?",
        options: [
            "Ilmiylik va statistik asosga ega",
            "Hayotiy tajriba va xalq ogëzaki ijodiga tayanadi",
            "Yangi teknologiyalarga asoslanadi",
            "Faqat darsliklar bilan cheklanadi"
        ],
        correctAnswer: "Hayotiy tajriba va xalq ogëzaki ijodiga tayanadi"
    },
    {
        question: "Xalq pedagogikasida axloqiy tarbiya qanday shakllanadi?",
        options: [
            "Baholash tizimi orqali",
            "Koërsatkichlar va reytinglar bilan",
            "Urf-odatlar, udumlar va namunali xatti-harakatlar orqali",
            "Fanlararo bogëliglik asosida"
        ],
        correctAnswer: "Urf-odatlar, udumlar va namunali xatti-harakatlar orqali"
    },
    {
        question: "Gëoyaviy tarbiyaning asosiy maqsadi nima?",
        options: [
            "Oëquvchilarga texnik bilim berish",
            "Chet tillarini oërgatish",
            "Oëquvchilarda mustahkam hayotiy pozitsiyani shakllantirish",
            "Faqat imtihonlarga tayyorlash"
        ],
        correctAnswer: "Oëquvchilarda mustahkam hayotiy pozitsiyani shakllantirish"
    },
    {
        question: "Gëoyaviy-siyosiy tarbiyada asosiy eëtibor nima orqali beriladi?",
        options: [
            "Darsliklar va testlar orqali",
            "Milliy qadriyatlar, tarixiy ong va fuqarolik pozitsiyasi orqali",
            "Texnik koënikmalar orqali",
            "Internet saytlari orqali"
        ],
        correctAnswer: "Milliy qadriyatlar, tarixiy ong va fuqarolik pozitsiyasi orqali"
    },
    {
        question: "Axloqiy tarbiyaning asosiy mezoni nima?",
        options: [
            "Baholash tizimi",
            "Reytinglar va test ballari",
            "Yaxshi xulq, odob, halollik, insonparvarlik",
            "Dars davomati"
        ],
        correctAnswer: "Yaxshi xulq, odob, halollik, insonparvarlik"
    },
    {
        question: "Gëoyaviy-siyosiy-axloqiy tarbiya asosan qayerda olib boriladi?",
        options: [
            "universitetda",
            "dars vaqtida",
            "Oila, maktab, mahalla va jamiyatda",
            "Ish joylarida"
        ],
        correctAnswer: "Oila, maktab, mahalla va jamiyatda"
    },
    {
        question: "Gëoyaviy tarbiyada tarix fanining oërni qanday?",
        options: [
            "Tarix bu yerda umuman kerak emas",
            "yodlash uchun kerak",
            "Tarixiy ong va vatanparvarlikni shakllantirish uchun muhim",
            "Faqat faktlarni eslab qolish uchun"
        ],
        correctAnswer: "Tarixiy ong va vatanparvarlikni shakllantirish uchun muhim"
    },
    {
        question: "Quyidagilardan qaysi biri gëoyaviy tarbiyaning vositasiga kirmaydi?",
        options: [
            "Adabiyotlar, film, suhbatlar",
            "Ijtimoiy hayotidagi misollar",
            "Matematik formulalar",
            "Mashhur shaxslar hayoti"
        ],
        correctAnswer: "Matematik formulalar"
    },
    {
        question: "Axloqiy tarbiyaning samarali shakllaridan biri bu ñ",
        options: [
            "Sinov imtihonlari",
            "Namuna koërsatish, ogëzaki nasibat, suhbatlar",
            "Sport bellashuvlari",
            "Test tizimi"
        ],
        correctAnswer: "Namuna koërsatish, ogëzaki nasibat, suhbatlar"
    },
    {
        question: "Siyosiy tarbiyaning eng asosiy maqsadi bu ñ",
        options: [
            "Saylovda qatnashishni oërgatish",
            "Yuridik hujjatlarni bilish",
            "Yoshlarda vatanparvarlik, fuqarolik ongini shakllantirish",
            "Davlat organlarining sonini yod olish"
        ],
        correctAnswer: "Yoshlarda vatanparvarlik, fuqarolik ongini shakllantirish"
    },
    {
        question: "Tarbiyaviy jarayonda axloqiy qadriyatlar qanday singdiriladi?",
        options: [
            "Faqat majburlash orqali",
            "Musobaqalar orqali",
            "Kundalik hayotiy misollar, urf-odatlar, suhbat va amaliy faoliyat orqali",
            "Reyting tizimi orqali"
        ],
        correctAnswer: "Kundalik hayotiy misollar, urf-odatlar, suhbat va amaliy faoliyat orqali"
    },
    {
        question: "Gëoyaviy-siyosiy-axloqiy tarbiya kimlarning ishtirokida samarali amalga oshadi?",
        options: [
            "oëqituvchi",
            "davlat tashkilotlari",
            "Oila, oëqituvchi, mahalla, jamiyat hamkorligida",
            "Internet orqali mustaqil"
        ],
        correctAnswer: "Oila, oëqituvchi, mahalla, jamiyat hamkorligida"
    },
    {
        question: "Sinf rahbarining tarbiyaviy faoliyatdagi asosiy vazifasi nima?",
        options: [
            "Faqat darsga qatnashishini nazorat qilish",
            "Hujjatlarni yuritish",
            "Oëquvchilarning maínaviy-axloqiy, gëoyaviy tarbiyasini tashkil etish",
            "Baholash mezonlarini tuzish"
        ],
        correctAnswer: "Oëquvchilarning maínaviy-axloqiy, gëoyaviy tarbiyasini tashkil etish"
    },
    {
        question: "Sinf rahbari kimlar bilan hamkorlikda tarbiyaviy ishlarni olib boradi?",
        options: [
            "direktor bilan",
            "Ota-ona, fan oëqituvchilari, mahalla va jamoatchilik bilan",
            "Kutubxonachi va farrosh bilan",
            "psixolog bilan"
        ],
        correctAnswer: "Ota-ona, fan oëqituvchilari, mahalla va jamoatchilik bilan"
    },
    {
        question: "Quyidagilardan qaysi biri sinf rahbarining tarbiyaviy ishlarida qoëllaniladigan usul emas?",
        options: [
            "Suhbat",
            "Tadbir oëtkazish",
            "Imtihon oëtkazish",
            "Ekskursiya"
        ],
        correctAnswer: "Imtihon oëtkazish"
    },
    {
        question: "Sinf rahbari faoliyatida ìshaxsga yoënaltirilgan yondashuvî degani nimani anglatadi?",
        options: [
            "Har bir sinfga umumiy yondashuv",
            "Har bir oëquvchining individual xususiyatlarini hisobga olish",
            "Dars rejasiga qatíiy amal qilish",
            "yomon baho qoëyish"
        ],
        correctAnswer: "Har bir oëquvchining individual xususiyatlarini hisobga olish"
    },
    {
        question: "Sinf rahbarining yillik tarbiyaviy ish rejasini kim tasdiqlaydi?",
        options: [
            "Oëquvchilar",
            "Ota-onalar",
            "Maktab direktori",
            "Sinf sardori"
        ],
        correctAnswer: "Maktab direktori"
    },
    {
        question: "Quyidagilardan qaysi biri sinf rahbarining asosiy hujjatlaridan biri hisoblanadi?",
        options: [
            "Tibbiy karta",
            "Tarbiyaviy ish rejasi",
            "Darsliklar roëyxati",
            "Baholash varaqasi"
        ],
        correctAnswer: "Tarbiyaviy ish rejasi"
    },
    {
        question: "Sinf rahbari oëquvchilarning oilasi bilan qanday aloqa oërnatadi?",
        options: [
            "Telefon orqali soëkib",
            "Faqat yozma ogohlantirish bilan",
            "Uchrashuvlar, suhbatlar, ota-onalar yigëilishi orqali",
            "Oëquvchilar orqali xabar yuborib"
        ],
        correctAnswer: "Uchrashuvlar, suhbatlar, ota-onalar yigëilishi orqali"
    },
    {
        question: "Sinf rahbarining tarbiyaviy ishlarida qanday shakllar samarali hisoblanadi?",
        options: [
            "Nazorat ishi va testlar",
            "Yozma ishlar va diktant",
            "Davra suhbatlari, viktorinalar, tadbirlar, ekskursiyalar",
            "Dars jadvallari tuzish"
        ],
        correctAnswer: "Davra suhbatlari, viktorinalar, tadbirlar, ekskursiyalar"
    },
    {
        question: "Sinf rahbarining faoliyati quyidagilardan qaysi tamoyilga asoslanadi?",
        options: [
            "Tanqidiy yondashuv",
            "Maëmuriy nazorat",
            "Hamkorlik, hurmat, ishonch, yondashuv",
            "darsdan keyingi ishlarga"
        ],
        correctAnswer: "Hamkorlik, hurmat, ishonch, yondashuv"
    },
    {
        question: "Sinf rahbarining oëquvchilar bilan ishlashidagi eng muhim jihat bu ñ",
        options: [
            "Baholarni nazorat qilish",
            "Tarbiyaviy ishlarni shaxsiy yondashuv asosida tashkil etish",
            "Ulaming kiyim-kechagiga qarash",
            "Imtihonga tayyorlash"
        ],
        correctAnswer: "Tarbiyaviy ishlarni shaxsiy yondashuv asosida tashkil etish"
    },
    {
        question: "Sinf rahbarining asosiy vazifasi nimadan iborat?",
        options: [
            "Faoliyatini baholash va hisobot yozish",
            "Oíquvchilarni sportga jalb qilish",
            "Oíquvchilarning tarbiyasi, rivojlanishi va ijtimoiy himoyasini taíminlash",
            "Oíquvchilarni testga tayyorlash"
        ],
        correctAnswer: "Oíquvchilarning tarbiyasi, rivojlanishi va ijtimoiy himoyasini taíminlash"
    },
    {
        question: "Sinf rahbarining faoliyati kim tomonidan nazorat qilinadi?",
        options: [
            "Mahalla qoímitasi",
            "Oíquvchilar kengashi",
            "Maktab direktori va uning oírinbosari tomonidan",
            "Ota-onalar"
        ],
        correctAnswer: "Maktab direktori va uning oírinbosari tomonidan"
    },
    {
        question: "Sinf rahbari ota-onalar bilan qanday munosabatda boëlishi kerak?",
        options: [
            "Masofaviy aloqa orqali",
            "Hamkorlik, hurmat va ishonch tamoyillariga asoslangan holda",
            "yozma murojaat bilan",
            "Noaniq va cheklangan shaklda"
        ],
        correctAnswer: "Hamkorlik, hurmat va ishonch tamoyillariga asoslangan holda"
    },
    {
        question: "Sinf rahbari faoliyat yuritishda qaysi hujjatga tayanishi lozim?",
        options: [
            "Konstitutsiyaga",
            "Jamoat tashkiloti ustaviga",
            "ìSinf rahbari toëgërisidagi Nizomîga",
            "Mehnat kodeksiga"
        ],
        correctAnswer: "ìSinf rahbari toëgërisidagi Nizomîga"
    },
    {
        question: "Sinf rahbari tomonidan har oylik hisobot kimga topshiriladi?",
        options: [
            "Sinf sardoriga",
            "Maínaviy-maírifiy ishlar boëyicha direktor oërinbosariga",
            "Ota-onalarga",
            "Sinf vakiliga"
        ],
        correctAnswer: "Maínaviy-maírifiy ishlar boëyicha direktor oërinbosariga"
    },
    {
        question: "Sinf rahbari sinfda qanday muhit yaratishga masíul?",
        options: [
            "intizomiy muhit",
            "Bellashuvchi muhit",
            "Maínaviy, sogëlom, ijtimoiy-psixologik muhit",
            "Tanqidiy va baholovchi muhit"
        ],
        correctAnswer: "Maínaviy, sogëlom, ijtimoiy-psixologik muhit"
    },
    {
        question: "Sinf rahbarining oëquvchilar bilan ishlashida qanday yondashuv afzal?",
        options: [
            "Qatíiy va sovuq munosabat",
            "Individual, demokratik va tarbiyaviy yondashuv",
            "guruh asosida",
            "Masofadan yondashuv"
        ],
        correctAnswer: "Individual, demokratik va tarbiyaviy yondashuv"
    },
    {
        question: "Sinf rahbarining huquqlaridan biri qaysi?",
        options: [
            "Oëquvchini maktabdan chetlashtirish",
            "Oëquvchilar oilasi bilan aloqada boëlish va tarbiyaviy maslahat berish",
            "Baholarni mustaqil oëzgartirish",
            "Davomat boíyicha qaror chiqarish"
        ],
        correctAnswer: "Oëquvchilar oilasi bilan aloqada boëlish va tarbiyaviy maslahat berish"
    },
    {
        question: "Sinfdan va maktabdan tashqari tarbiyaviy ishlar deganda nima tushuniladi?",
        options: [
            "yozgi taítil paytida olib boriladigan ishlar",
            "Darsdan boësh vaqtlarda oëquvchilar bilan amalga oshiriladigan tarbiyaviy faoliyat",
            "Maktabdagi test va imtihonlar",
            "Dars davomida oëquvchilarga beriladigan topshiriqlar"
        ],
        correctAnswer: "Darsdan boësh vaqtlarda oëquvchilar bilan amalga oshiriladigan tarbiyaviy faoliyat"
    },
    {
        question: "Sinfdan tashqari tarbiyaviy ishlarning asosiy maqsadi nima?",
        options: [
            "fanlarni chuqurlashtirish",
            "Sport musobaqalarida qatnashish",
            "Oëquvchilarning boësh vaqtini mazmunli tashkil etish va maínaviy rivojlantirish",
            "Darsga tayyorlash"
        ],
        correctAnswer: "Oëquvchilarning boësh vaqtini mazmunli tashkil etish va maínaviy rivojlantirish"
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