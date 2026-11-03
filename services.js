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
Функциональные исследования,Funksional tekshiruvlar,ЭКГ с расшифровкой,EKG talqini bilan,70000,1
Функциональные исследования,Funksional tekshiruvlar,Эхо-ЭГ (эхоэнцефалография),Exo-EG (exoensefalografiya),60000,1
Функциональные исследования,Funksional tekshiruvlar,ЭЭГ (электроэнцефалография),EEG (elektroensefalografiya),90000,1
Функциональные исследования,Funksional tekshiruvlar,Функция внешнего дыхания (ФВД),Tashqi nafas funksiyasi (TNF),80000,1
Функциональные исследования,Funksional tekshiruvlar,Эхо-КГ (УЗИ сердца),Exo-KG (yurak UTT),130000,1
Функциональные исследования,Funksional tekshiruvlar,Дуплексное сканирование сосудов шеи,Bo'yin tomirlarini dupleks skanerlash,130000,1
Функциональные исследования,Funksional tekshiruvlar,Дубликат результата,Natija dublikati,20000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ брюшной полости (комплекс),Qorin bo'shlig'i UTT (kompleks),120000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ печени и желчного пузыря,Jigar va o't pufagi UTT,75000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ печени + допплер,Jigar UTT + dopler,90000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ поджелудочной железы,Oshqozon osti bezi UTT,50000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ селезенки,Taloq UTT,50000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ селезенки + допплер,Taloq UTT + dopler,60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ лимфоузлов (1 зона),Limfa tugunlari UTT (1 soha),60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ молочных желез,Sut bezlari UTT,100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ матки и придатков,Bachadon va ortiqlari UTT,80000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ матки и придатков + допплер,Bachadon va ortiqlari UTT + dopler,100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ почек и надпочечников,Buyrak va buyrak usti bezlari UTT,80000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ почек + допплер,Buyraklar UTT + dopler,120000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ щитовидной железы + допплер,Qalqonsimon bez UTT + dopler,80000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ урологическое комплексное (муж.),Urologik kompleks UTT (erkaklar),120000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ урологическое комплексное (жен.),Urologik kompleks UTT (ayollar),100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ простаты,Prostata UTT,60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ мочевого пузыря с остаточной мочой,Siydik pufagi UTT (qoldiq siydik bilan),60000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ мошонки,Yorg'oq UTT,90000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ мошонки + допплер,Yorg'oq UTT + dopler,110000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,Трансвагинальное УЗИ,Transvaginal UTT,100000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ плода (I триместр),Homila UTT (I trimestr),90000,1
Ультразвуковая диагностика,Ultratovush diagnostikasi,УЗИ плода (II–III триместр),Homila UTT (II–III trimestr),110000,1
Эндоскопические исследования,Endoskopik tekshiruvlar,ФГДС (гастроскопия),FGDS (gastroskopiya),200000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген легких (1 проекция),O'pka rentgeni (1 proyeksiya),100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген легких (2 проекции),O'pka rentgeni (2 proyeksiya),120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген пазух носа,Burun bo'shliqlari rentgeni,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген позвоночника (1 проекция),Umurtqa pog'onasi rentgeni (1 proyeksiya),100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген позвоночника (2 проекции),Umurtqa pog'onasi rentgeni (2 proyeksiya),120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген сустава (1 проекция),Bo'g'im rentgeni (1 proyeksiya),100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген сустава (2 проекции),Bo'g'im rentgeni (2 proyeksiya),120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген таза,Chanoq rentgeni,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген стопы,Oyoq panjasi rentgeni,100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген стопы с нагрузкой (плоскостопие),Oyoq panjasi rentgeni yuklama bilan (yassi oyoq),100000,1
Рентгендиагностика,Rentgen diagnostikasi,Рентген обеих стоп,Ikkala oyoq panjasi rentgeni,120000,1
Рентгендиагностика,Rentgen diagnostikasi,Дубликат снимка (1 пленка),Rentgen dublikati (1 plyonka),50000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий анализ крови (развернутый),Umumiy qon tahlili (kengaytirilgan),48000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий анализ мочи,Umumiy siydik tahlili,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Анализ мочи по Нечипоренко,Nechiporenko bo'yicha siydik tahlili,18000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий анализ кала,Umumiy najas tahlili,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Время свертывания крови,Qon ivish vaqti,18000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Спермограмма,Spermogramma,70000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Коагулограмма (5 показателей),Koagulogramma (5 ko'rsatkich),85000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Коагулограмма расширенная (7 показателей),Koagulogramma kengaytirilgan (7 ko'rsatkich),150000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Протромбиновый индекс (ПТИ),Protrombin indeksi (PTI),30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Общий белок,Umumiy oqsil,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Мочевина,Mochevina,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Креатинин,Kreatinin,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Ревмопробы (СРБ, РФ, АСЛО, альбумин)","Revmoproba (CRP, RF, ASLO, albumin)",85000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Альбумин,Albumin,25000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,С-реактивный белок (СРБ),C-reaktiv oqsil (CRP),35000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Ревматоидный фактор (РФ),Revmatoid omil (RF),35000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Антистрептолизин-О (АСЛО),Antistreptolizin-O (ASLO),35000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Мочевая кислота,Siydik kislotasi,50000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Глюкоза,Glyukoza,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Глюкозотолерантный тест (2 этапа),Glyukozaga tolerantlik testi (2 bosqich),37000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Глюкозотолерантный тест (3 этапа),Glyukozaga tolerantlik testi (3 bosqich),45000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Амилаза (диастаза),Amilaza (diastaza),42000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Щелочная фосфатаза,Ishqoriy fosfataza,42000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Липидный спектр,Lipid spektri,90000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Холестерин общий,Umumiy xolesterin,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Холестерин ЛПВП (высокой плотности),Yuqori zichlikdagi xolesterin (LPVP),40000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Холестерин ЛПНП (низкой плотности),Past zichlikdagi xolesterin (LPNP),48000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Гамма-ГТ,Gamma-GT,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Триглицериды,Triglitseridlar,36000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,"Печеночные пробы (АЛТ, АСТ, билирубин, ГГТ)","Jigar sinamalari (ALT, AST, bilirubin, GGT)",67000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,АЛТ,ALT,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,АСТ,AST,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Гепатит B,Gepatit B,55000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Гепатит C,Gepatit C,55000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Билирубин,Bilirubin,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Магний,Magniy,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Кальций,Kalsiy,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Фосфор,Fosfor,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Сывороточное железо,Zardob temiri,30000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Гинекологический мазок (микроскопия),Ginekologik surtma (mikroskopiya),65000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,PAP-тест (жидкостная цитология),PAP-test (suyuqlik sitologiyasi),240000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Мазок из уретры (микроскопия),Uretra surtmasi (mikroskopiya),65000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Секрет простаты (микроскопия),Prostata sekreti (mikroskopiya),65000,1
Клинико-диагностическая лаборатория,Klinik-diagnostik laboratoriya,Цитология мокроты,Balg'am sitologiyasi,65000,1
Исследования уровня гормонов в крови,Qonda gormonlar darajasini tekshirish,ХГЧ (тест на беременность),XGCh (homiladorlik testi),70000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Цитомегаловирус (ЦМВ),Sitomegalovirus (SMV),50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Токсоплазмоз,Toksoplazmoz,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Герпес (ВПГ 1/2),Gerpes (OGV 1/2),50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Хламидии,Xlamidiyalar,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Уреаплазма,Ureaplazma,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Микоплазма,Mikoplazma,50000,1
TORCH инфекции класса G,TORCH infeksiyalari G sinfi,Краснуха,Qizilcha,50000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Краснуха,Qizilcha,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Токсоплазмоз,Toksoplazmoz,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Хламидии,Xlamidiyalar,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Цитомегаловирус (ЦМВ),Sitomegalovirus (SMV),55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Герпес (ВПГ 1/2),Gerpes (OGV 1/2),55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Уреаплазма,Ureaplazma,55000,1
TORCH инфекции класса M,TORCH infeksiyalari M sinfi,Микоплазма,Mikoplazma,55000,1
Иммуноферментные исследования,Immunoferment tekshiruvlar,Хеликобактер пилори (Ig),Helikobakter pilori (Ig),72000,1
Иммуноферментные исследования,Immunoferment tekshiruvlar,IgE общий,Umumiy IgE,72000,1
Паразитологические исследования,Parazitologik tekshiruvlar,Лямблии (антитела в крови),Lyambliyalar (qonda antitelolar),72000,1
Паразитологические исследования,Parazitologik tekshiruvlar,Аскариды (антитела IgG),Askaridalar (IgG antitelolar),70000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Витамин D,D vitamini,240000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Инсулин,Insulin,155000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Ферритин,Ferritin,135000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Т4 свободный,Erkin T4,85000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),ТТГ (тиреотропный гормон),TTG (tireotrop gormon),95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Витамин B12,B12 vitamini,150000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Фолиевая кислота,Foliy kislotasi,170000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Т3 свободный,Erkin T3,85000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Антитела к ТПО,TPO ga antitelolar,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Тестостерон свободный,Erkin testosteron,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Эстрадиол,Estradiol,120000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),ЛГ (лютеинизирующий гормон),LG (lyuteinlovchi gormon),100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),ФСГ (фолликулостимулирующий гормон),FSG (follikulostimullovchi gormon),100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Прогестерон,Progesteron,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Тестостерон общий,Umumiy testosteron,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Кортизол,Kortizol,100000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),Пролактин,Prolaktin,95000,1
Анализатор COBAS E 411 / MAGLUMI X3 (ИХЛА),COBAS E 411 / MAGLUMI X3 analizatori (IHLA),ПСА (простатспецифический антиген),PSA (prostata spetsifik antigeni),135000,1
Иммунофлюоресцентный метод,Immunoflyuoressent usul,СРБ высокочувствительный,Yuqori sezgir C-reaktiv oqsil,85000,1
Иммунофлюоресцентный метод,Immunoflyuoressent usul,Гликированный гемоглобин (HbA1c),Glikogemoglobin (HbA1c),95000,1
Забор крови,Qon olish,Забор крови,Qon olish,10000,1
Забор крови,Qon olish,Забор крови для глюкозотолерантного теста (2 этапа),Glyukoza testi uchun qon olish (2 bosqich),20000,1
Забор крови,Qon olish,Забор крови для глюкозотолерантного теста (3 этапа),Glyukoza testi uchun qon olish (3 bosqich),30000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев мочи,Siydik ekmasi,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев гинекологических выделений,Ginekologik ajralma ekmasi,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев урологических выделений,Urologik ajralma ekmasi,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев гноя,Yiring ekmasi,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев спермы,Sperma ekmasi,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев грудного молока,Ona suti ekmasi,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев из зева,Halqumdan ekma,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев из носа,Burundan ekma,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев из уха,Quloqdan ekma,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев из глаза,Ko'zdan ekma,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев из раны,Yaradan ekma,125000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Посев мокроты,Balg'am ekmasi,150000,1
Бактериологические исследования,Bakteriologik tekshiruvlar,Кал на дисбактериоз,Disbakterioz tahlili,150000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Консультация гастроэнтеролога,Gastroenterolog konsultatsiyasi,120000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Консультация гинеколога,Ginekolog konsultatsiyasi,130000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Кольпоскопия,Kolposkopiya,117000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Взятие гинекологического мазка,Ginekologik surtma olish,25000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Взятие гинекологического мазка (без консультации),Ginekologik surtma olish (konsultatsiyasiz),40000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Взятие PAP-мазка,PAP-surtma olish,40000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Консультация уролога,Urolog konsultatsiyasi,120000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Взятие сока простаты,Prostata shirasini olish,25000,1
Консультация специалистов,Mutaxassislar konsultatsiyasi,Взятие сока простаты (без консультации),Prostata shirasini olish (konsultatsiyasiz),40000,1
`;
