/* ==========================================================================
   TShTMDM DM — ПРЕЙСКУРАНТ ЦЕН / NARXLAR RO'YXATI
   ==========================================================================

   ЭТО ЕДИНСТВЕННЫЙ ФАЙЛ, КОТОРЫЙ НУЖНО ПРАВИТЬ ДЛЯ ИЗМЕНЕНИЯ ЦЕН.

   Одна строка = одна услуга, шесть колонок через запятую:

       category_ru , category_uz , name_ru , name_uz , price , active

   price   — только цифры: 90000, а не 90 000 и не «90000 сум»
   active  — 1 показывать, 0 скрыть (строка остаётся в файле)

   Если в названии есть запятая — возьмите название в двойные кавычки:
       ...,"УЗИ печени, желчного пузыря","Jigar, o't pufagi UTT",75000,1
   Кавычки внутри названия — удвоить: "Гепатит ""А"""

   НЕ ТРОГАЙТЕ первую строку ниже (window.SERVICES_CSV = String.raw`)
   и самую последнюю строку файла (`;) — на них держится весь список.
   Не используйте символ обратной кавычки ` внутри названий услуг.
   ======================================================================== */

window.SERVICES_CSV = String.raw`
category_ru,category_uz,name_ru,name_uz,price,active
Функциональные исследования,Funksional tekshiruvlar,Электрокардиографические исследования (ЭКГ) с расшифровкой,Elektrokardiografik tekshiruv (EKG) talqini bilan,70000,1
Функциональные исследования,Funksional tekshiruvlar,Эхоэнцефалография (Эхо ЭГ),Exoensefalografiya (Exo EG),60000,1
Функциональные исследования,Funksional tekshiruvlar,Электроэнцефалография (ЭЭГ),Elektroensefalografiya (EEG),90000,1
Функциональные исследования,Funksional tekshiruvlar,Реоэнцефалография (РЭГ),Reoensefalografiya (REG),60000,1
Функциональные исследования,Funksional tekshiruvlar,Исследование функции внешнего дыхания (ФВД),Tashqi nafas funksiyasini tekshirish (TNF),80000,1
Функциональные исследования,Funksional tekshiruvlar,Эхокардиография (Эхо КГ) УЗД система ДС-7,Exokardiografiya (Exo KG) UTD tizimi DS-7,130000,1
Функциональные исследования,Funksional tekshiruvlar,Ультразвуковое дуплексное сканирование сосудов брахиоцефального ствола,Braxiosefal tomirlarni ultratovushli duplex skanerlash,130000,1
Функциональные исследования,Funksional tekshiruvlar,Выдача дубликата исследования,Tekshiruv dublikatini berish,20000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ брюшной полости комплексное (печень, желчный пузырь, поджелудочная железа, селезенка)","Qorin bo'shlig'i kompleks UTT (jigar, o't pufagi, oshqozon osti bezi, taloq)",120000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ печени, желчного пузыря","Jigar, o't pufagi UTT",75000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ печени с доплерометрией,Jigar UTT doplerometriya bilan,90000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ поджелудочной железы,Oshqozon osti bezi UTT,50000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ селезенки,Taloq UTT,50000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ селезенки с доплерометрией,Taloq UTT doplerometriya bilan,60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ лимфоузлов (1 область),Limfa tugunlari UTT (1 soha),60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ молочной железы,Sut bezi UTT,100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ матки и придатков,Bachadon va uning ortiqlari UTT,80000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ матки и придатков с доплерометрией,Bachadon va uning ortiqlari UTT doplerometriya bilan,100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ почек и надпочечников,Buyraklar va buyrak usti bezlari UTT,80000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ почек с допплерометрией,Buyraklar UTT doplerometriya bilan,120000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ щитовидной железы, паращитовидной железы, шейных лимфоузлов","Qalqonsimon bez, qalqonsimon oldi bezi, bo'yin limfa tugunlari UTT",150000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ щитовидной железы с допплерометрией,Qalqonsimon bez UTT doplerometriya bilan,80000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ урологии комплексное (почки, надпочечники, мочевой пузырь с определением остаточной мочи, предстательная железа) (муж)","Urologik kompleks UTT (buyraklar, buyrak usti bezlari, qoldiq siydik aniqlash bilan siydik pufagi, prostata bezi) (erkaklar)",120000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ урологии комплексное (почки, надпочечники, мочевой пузырь с определением остаточной мочи) (жен)","Urologik kompleks UTT (buyraklar, buyrak usti bezlari, qoldiq siydik aniqlash bilan siydik pufagi) (ayollar)",100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ простаты,Prostata bezi UTT,60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ мочевого пузыря с остаточной мочой,Siydik pufagi UTT qoldiq siydik bilan,60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ мошонки (яички, придатки) (исслед 1 органа)","Yorg'oq UTT (moyaklar, ortiqlar) (1 a'zo tekshiruvi)",90000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,"УЗИ мошонки (яички, придатки) (исслед 1 органа) с доплерометрией","Yorg'oq UTT (moyaklar, ortiqlar) (1 a'zo tekshiruvi) doplerometriya bilan",110000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ трансвагинальное,Transvaginal UTT,100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ плода в I триместре,Homila UTT I trimestrda,90000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ плода во II-III триместре,Homila UTT II-III trimestrda,110000,1
Эндоскопические исследования,Endoskopik tekshiruvlar,Эзофагогастродуоденоскопия диагностическая (ЭФГДС),Diagnostik ezofagogastroduodenoskopiya (EFGDS),200000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография легких в 1-й проекции,O'pka rentgenografiyasi 1 proyeksiyada,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография легких в 2-х проекциях,O'pka rentgenografiyasi 2 proyeksiyada,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография придаточных пазух носа,Burun yondosh bo'shliqlari rentgenografiyasi,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография отделов позвоночника в 1-й проекции,Umurtqa pog'onasi bo'limlari rentgenografiyasi 1 proyeksiyada,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография отделов позвоночника в 2-х проекциях,Umurtqa pog'onasi bo'limlari rentgenografiyasi 2 proyeksiyada,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография сустава в 1 проекции,Bo'g'im rentgenografiyasi 1 proyeksiyada,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография сустава в 2-х проекциях,Bo'g'im rentgenografiyasi 2 proyeksiyada,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография таза,Chanoq rentgenografiyasi,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография стопы,Oyoq panjasi rentgenografiyasi,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография стопы с нагрузкой (плоскостопие),Oyoq panjasi rentgenografiyasi yuklama bilan (yassi oyoq),100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентгенография стоп обеих ног,Ikkala oyoq panjasi rentgenografiyasi,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Выдача дубликата исследования (1 пленка),Tekshiruv dublikatini berish (1 plyonka),50000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий (клинический) анализ крови развернутый 19/23 параметров,Umumiy (klinik) qon tahlili kengaytirilgan 19/23 ko'rsatkich,48000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий анализ мочи,Umumiy siydik tahlili,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование мочи по Нечипоренко,Siydikni Nechiporenko bo'yicha tekshirish,18000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий анализ кала,Umumiy najas tahlili,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Время свертывания крови,Qon ivish vaqti,18000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Спермограмма,Spermogramma,70000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Коагулограмма 5 параметров,Koagulogramma 5 ko'rsatkich,85000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Коагулограмма развернутая 7 параметров,Koagulogramma kengaytirilgan 7 ko'rsatkich,150000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Определение протромбинового индекса,Protrombin indeksini aniqlash,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Определение общего белка в крови,Qonda umumiy oqsilni aniqlash,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня мочевины в крови,Qonda mochevina darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня креатинина,Kreatinin darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Ревмопроба (С-реактивный белок, ревматоидный фактор, альбумин, антистрептолизин-О)","Revmoproba (C-reaktiv oqsil, revmatoid omil, albumin, antistreptolizin-O)",85000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня альбумина в крови,Qonda albumin darajasini tekshirish,25000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование С-реактивного белка,C-reaktiv oqsilni tekshirish,35000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование ревматоидного фактора,Revmatoid omilni tekshirish,35000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование антистрептолизина-О,Antistreptolizin-O ni tekshirish,35000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня мочевой кислоты в крови,Qonda siydik kislotasi darajasini tekshirish,50000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня глюкозы в крови,Qonda glyukoza darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Тест на нагрузку с глюкозой 2 этапа,Glyukoza bilan yuklama testi 2 bosqich,37000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Тест на нагрузку с глюкозой 3 этапа,Glyukoza bilan yuklama testi 3 bosqich,45000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Определение гликогемоглобина HbA1,Glikogemoglobin HbA1 ni aniqlash,70000,0
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование активности амилазы в крови (диастаза),Qonda amilaza faolligini tekshirish (diastaza),42000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Определение альфа-амилазы в моче,Siydikda alfa-amilazani aniqlash,42000,0
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня щелочной фосфатазы в крови,Qonda ishqoriy fosfataza darajasini tekshirish,42000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня липидного спектра крови,Qon lipid spektri darajasini tekshirish,90000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня холестерина в крови,Qonda xolesterin darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня холестерина высокой плотности в крови,Qonda yuqori zichlikdagi xolesterin darajasini tekshirish,40000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня холестерина низкой плотности в крови,Qonda past zichlikdagi xolesterin darajasini tekshirish,48000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование активности гамма-ГТ в крови,Qonda gamma-GT faolligini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня триглицеридов в крови,Qonda triglitseridlar darajasini tekshirish,36000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Печеночные пробы (АЛТ, АСТ, билирубин, гамма-ГТ)","Jigar sinamalari (ALT, AST, bilirubin, gamma-GT)",67000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня АЛТ,ALT darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня АСТ,AST darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Исследование крови на гепатит ""А""","Qonni ""A"" gepatitiga tekshirish",70000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Исследование крови на гепатит ""В""","Qonni ""B"" gepatitiga tekshirish",55000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Исследование крови на гепатит ""С""","Qonni ""C"" gepatitiga tekshirish",55000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Исследование крови на гепатит ""Дельта""","Qonni ""Delta"" gepatitiga tekshirish",70000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня билирубина в крови,Qonda bilirubin darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня магния в крови,Qonda magniy darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня кальция в крови,Qonda kalsiy darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня фосфора в крови,Qonda fosfor darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня железа в сыворотке крови,Qon zardobida temir darajasini tekshirish,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня натрия в сыворотке крови,Qon zardobida natriy darajasini tekshirish,30000,0
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Исследование уровня калия в сыворотке крови,Qon zardobida kaliy darajasini tekshirish,30000,0
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Ионоселективный анализ (6 параметров: натрий, хлор, калий, общий кальций, ионизированный кальций, pH) в сыворотке крови","Ionoselektiv tahlil (6 ko'rsatkich: natriy, xlor, kaliy, umumiy kalsiy, ionlangan kalsiy, pH) qon zardobida",150000,0
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Микроскопическое исследование отделяемого женских половых органов,Ayol jinsiy a'zolari ajralmasini mikroskopik tekshirish,65000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,PAP-мазок отделяемого женских половых органов методом жидкостной цитологии,Ayol jinsiy a'zolari ajralmasidan PAP-surtma suyuqlik sitologiyasi usulida,240000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Микроскопическое исследование отделяемого из уретры,Uretra ajralmasini mikroskopik tekshirish,65000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Микроскопическое исследование осадка секрета простаты,Prostata sekreti cho'kmasini mikroskopik tekshirish,65000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Цитологическое исследование мокроты,Balg'amni sitologik tekshirish,65000,1
Исследования уровня гормонов в крови,Qonda gormonlar darajasini tekshirish,Определение беременности в крови (ХГ),Qonda homiladorlikni aniqlash (XG),70000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Цитомегаловирус (ЦМВ),Sitomegalovirus (SMV),50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Токсоплазмоз,Toksoplazmoz,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Вирус простого герпеса (ВПГ) 1/2 типа,Oddiy gerpes virusi (OGV) 1/2 tipi,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Хламидии,Xlamidiyalar,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Уреаплазма,Ureaplazma,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Микоплазма,Mikoplazma,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Краснуха,Qizilcha,50000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Краснуха,Qizilcha,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Токсоплазмоз,Toksoplazmoz,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Хламидии,Xlamidiyalar,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Цитомегаловирус (ЦМВ),Sitomegalovirus (SMV),55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Вирус простого герпеса (ВПГ) 1/2 типа,Oddiy gerpes virusi (OGV) 1/2 tipi,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Трихомонада вагиналис,Trixomonada vaginalis,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Уреаплазма,Ureaplazma,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Микоплазма,Mikoplazma,55000,1
Иммуноферментные исследования,Immunoferment tekshiruvlar,Определение Хеликобактер пилори Ig,Helikobakter pilori Ig ni aniqlash,72000,1
Иммуноферментные исследования,Immunoferment tekshiruvlar,Определение TOTAL (общий) IgE,TOTAL (umumiy) IgE ni aniqlash,72000,1
Онкомаркеры,Onkomarkerlar,Определение СА-125 Ag,CA-125 Ag ni aniqlash,75000,0
Онкомаркеры,Onkomarkerlar,Определение СА-15-3 Ag,CA-15-3 Ag ni aniqlash,75000,0
Онкомаркеры,Onkomarkerlar,Определение СА-19-9 Ag,CA-19-9 Ag ni aniqlash,75000,0
Онкомаркеры,Onkomarkerlar,Определение карциноэмбрионального антигена (СЕА),Karsinoembrional antigenni (CEA) aniqlash,75000,0
Паразитологические исследования,Parazitologik tekshiruvlar,"Определение суммарных антител лямблий в крови (IgA, IgM, IgG)","Qonda lyamblin summar antitelolarini aniqlash (IgA, IgM, IgG)",72000,1
Паразитологические исследования,Parazitologik tekshiruvlar,"ИФА выявление IgG к антигенам гельминтов (описторхисов, трихинелл, токсокар и эхинококков) в сыворотке и плазме крови","IFA usulida gelmintlar (opistorxis, trixinella, toksokara va exinokokk) antigenlariga IgG ni qon zardobi va plazmasida aniqlash",130000,1
Паразитологические исследования,Parazitologik tekshiruvlar,Определение специфических антител класса IgG к Ascaris lumbricoides,Ascaris lumbricoides ga IgG sinfidagi spetsifik antitelolarni aniqlash,70000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня витамина Д в крови,Qonda D vitamini darajasini tekshirish,240000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня инсулина в крови,Qonda insulin darajasini tekshirish,155000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня ферритина в крови,Qonda ferritin darajasini tekshirish,135000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня свободного тироксина Т4 третьего поколения,Uchinchi avlod erkin tiroksin T4 darajasini tekshirish,85000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня тиреотропного гормона ТТГ третьего поколения,Uchinchi avlod tireotrop gormon TTG darajasini tekshirish,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня гормона DHEA-S в сыворотке крови,Qon zardobida DHEA-S gormoni darajasini tekshirish,130000,0
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня витамина B-12 в крови,Qonda B-12 vitamini darajasini tekshirish,150000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня фолиевой кислоты в крови,Qonda foliy kislotasi darajasini tekshirish,170000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня свободного трийодтиронина Т3 третьего поколения,Uchinchi avlod erkin triyodtironin T3 darajasini tekshirish,85000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Определение аутоантител к тиреоидной пероксидазе в сыворотке крови,Qon zardobida tireoid peroksidazaga autoantitelolarni aniqlash,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Свободный тестостерон,Erkin testosteron,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Определение концентрации такролимуса в крови,Qonda takrolimus konsentratsiyasini aniqlash,250000,0
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Определение концентрации эстрадиола в крови,Qonda estradiol konsentratsiyasini aniqlash,120000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня лютеинизирующего гормона в сыворотке крови,Qon zardobida lyuteinlovchi gormon darajasini tekshirish,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня фолликулостимулирующего гормона в сыворотке крови,Qon zardobida follikulostimullovchi gormon darajasini tekshirish,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня прогестерона в сыворотке крови,Qon zardobida progesteron darajasini tekshirish,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня тестостерона в сыворотке крови,Qon zardobida testosteron darajasini tekshirish,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня кортизола в сыворотке крови,Qon zardobida kortizol darajasini tekshirish,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Исследование уровня пролактина в сыворотке крови,Qon zardobida prolaktin darajasini tekshirish,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Определение специфического антигена простаты (PSA),Prostata spetsifik antigenini (PSA) aniqlash,135000,1
Иммунофлюоресцентный метод,Immunoflyuoressent usul,Количественное определение высокочувствительного С-реактивного белка в сыворотке и плазме крови,Qon zardobi va plazmasida yuqori sezgir C-reaktiv oqsilni miqdoriy aniqlash,85000,1
Иммунофлюоресцентный метод,Immunoflyuoressent usul,Количественное определение высокочувствительного гликогемоглобина HbA1c в крови,Qonda yuqori sezgir glikogemoglobin HbA1c ni miqdoriy aniqlash,95000,1
Гематологическая станция CAL8000,CAL8000 gematologik stansiyasi,Общий (клинический) анализ крови развернутый 33 параметра,Umumiy (klinik) qon tahlili kengaytirilgan 33 ko'rsatkich,50000,0
Гематологическая станция CAL8000,CAL8000 gematologik stansiyasi,Общий (клинический) анализ крови развернутый и СОЭ (34 параметра),Umumiy (klinik) qon tahlili kengaytirilgan va ECHT (34 ko'rsatkich),70000,0
Гематологическая станция CAL8000,CAL8000 gematologik stansiyasi,"Общий (клинический) анализ крови развернутый, СОЭ, ретикулоциты (41 параметр)","Umumiy (klinik) qon tahlili kengaytirilgan, ECHT, retikulotsitlar (41 ko'rsatkich)",90000,0
Гематологическая станция CAL8000,CAL8000 gematologik stansiyasi,Определение СОЭ в крови (1 параметр),Qonda ECHT ni aniqlash (1 ko'rsatkich),20000,1
Гематологическая станция CAL8000,CAL8000 gematologik stansiyasi,Многопараметрическое исследование мочи в мочевом анализаторе URIT US-2000,URIT US-2000 siydik analizatorida siydikni ko'p ko'rsatkichli tekshirish,40000,0
Забор крови,Qon olish,Забор крови,Qon olish,10000,1
Забор крови,Qon olish,Забор крови для теста на нагрузку с глюкозой в 2 этапа,Glyukoza bilan yuklama testi uchun qon olish (2 bosqich),20000,1
Забор крови,Qon olish,Забор крови для теста на нагрузку с глюкозой в 3 этапа,Glyukoza bilan yuklama testi uchun qon olish (3 bosqich),30000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование мочи,Siydikni bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование выделений (гинекологических),Ajralmalarni bakteriologik tekshirish (ginekologik),125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование выделений (урологических),Ajralmalarni bakteriologik tekshirish (urologik),125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование гноя,Yiringni bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование спермы,Spermani bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование грудного молока,Ona sutini bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование из зева,Halqumdan bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование из носа,Burundan bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование из уха,Quloqdan bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование из глаза,Ko'zdan bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование из раны,Yaradan bakteriologik tekshirish,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Бактериологическое исследование мокроты,Balg'amni bakteriologik tekshirish,150000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Исследование микробиоценоза кишечника (дисбактериоз),Ichak mikrobiotsenozini tekshirish (disbakterioz),150000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) гастроэнтеролога,Gastroenterolog ko'rigi (konsultatsiyasi),120000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) невропатолога,Nevropatolog ko'rigi (konsultatsiyasi),120000,0
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) отоларинголога,Otolaringolog ko'rigi (konsultatsiyasi),120000,0
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) гинеколога,Ginekolog ko'rigi (konsultatsiyasi),130000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Кольпоскопия,Kolposkopiya,117000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Забор биоматериала для гинекологических исследований,Ginekologik tekshiruvlar uchun biomaterial olish,25000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Забор биоматериала для гинекологических исследований (без консультации гинеколога),Ginekologik tekshiruvlar uchun biomaterial olish (ginekolog konsultatsiyasisiz),40000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Забор биоматериала для гинекологических исследований (PAP-мазок),Ginekologik tekshiruvlar uchun biomaterial olish (PAP-surtma),40000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) уролога,Urolog ko'rigi (konsultatsiyasi),120000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Забор биоматериала из уретры (сок простаты),Uretradan biomaterial olish (prostata shirasi),25000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Забор биоматериала из уретры (сок простаты) (без посещения уролога),Uretradan biomaterial olish (prostata shirasi) (urolog qabulisiz),40000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) кардиолога,Kardiolog ko'rigi (konsultatsiyasi),120000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Осмотр (консультация) врача-терапевта,Terapevt shifokor ko'rigi (konsultatsiyasi),120000,0
`;
