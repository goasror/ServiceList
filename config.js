/* ==========================================================================
   TShTMDM DM — настройки интерфейса.
   Название клиники, дата «Обновлено», валюта, сноска и подписи на RU/UZ.
   Внутри — обычный JSON. Запятые и кавычки важны.
   ======================================================================== */

window.APP_CONFIG = {
  "clinicName": "TShTMDM DM",
  "updatedDate": "17.07.2026",
  "defaultLang": "ru",
  "languages": [
    {
      "code": "ru",
      "label": "RU"
    },
    {
      "code": "uz",
      "label": "UZ"
    }
  ],
  "i18n": {
    "ru": {
      "city": "Ташкент",
      "listTitle": "Прейскурант цен",
      "listSubtitle": "Выберите услуги для расчета",
      "updatedLabel": "Обновлено",
      "searchPlaceholder": "Поиск услуг",
      "allCategories": "Все",
      "selectedPrefix": "Выбрано:",
      "clear": "Очистить",
      "pdfButton": "PDF",
      "modalTitle": "Просмотр PDF",
      "close": "Закрыть",
      "sheetLabel": "Выбранные услуги",
      "totalLabel": "Итого",
      "keepEditing": "Продолжить",
      "download": "Скачать",
      "currency": "сум",
      "empty": "Ничего не найдено.",
      "loadError": "Не удалось загрузить данные",
      "footnote": "Цены указаны с НДС 12%. Данный расчет является предварительным и не является платежным документом."
    },
    "uz": {
      "city": "Toshkent",
      "listTitle": "Narxlar ro'yxati",
      "listSubtitle": "Hisob-kitob uchun xizmatlarni tanlang",
      "updatedLabel": "Yangilangan",
      "searchPlaceholder": "Xizmatlarni qidirish",
      "allCategories": "Barchasi",
      "selectedPrefix": "Tanlandi:",
      "clear": "Tozalash",
      "pdfButton": "PDF",
      "modalTitle": "PDF ko'rinishi",
      "close": "Yopish",
      "sheetLabel": "Tanlangan xizmatlar",
      "totalLabel": "Jami",
      "keepEditing": "Davom ettirish",
      "download": "Yuklab olish",
      "currency": "so'm",
      "empty": "Hech narsa topilmadi.",
      "loadError": "Ma'lumotni yuklab bo'lmadi",
      "footnote": "Narxlar 12% QQS bilan ko'rsatilgan. Ushbu hisob-kitob dastlabki bo'lib, to'lov hujjati hisoblanmaydi."
    }
  }
};
