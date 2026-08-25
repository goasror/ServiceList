/* ============================================================================
   Генерация PDF расчёта. Требует jspdf.min.js и pdf-fonts.js (подключены до
   этого файла в index.html).

   window.buildQuotePDF(data) -> скачивает готовый PDF.

   data = {
     clinic, city, date, sheetLabel, totalLabel, currency, footnote,
     pageLabel(cur, total) -> string,
     items: [{ name, price }],   // price уже отформатирован: "120 000"
     total                        // отформатирован
   }
   ========================================================================== */
(function () {
  'use strict';

  // --- геометрия страницы, мм ---
  var PAGE_W = 210, PAGE_H = 297;
  var M_X = 18, M_TOP = 20, M_BOT = 20;
  var W = PAGE_W - M_X * 2;
  var COL_N = 8;            // ширина колонки с номером
  var COL_PRICE = 30;       // ширина колонки с ценой
  var GAP = 5;
  var NAME_W = W - COL_N - COL_PRICE - GAP;

  var INK = [10, 10, 10], GREY = [110, 110, 110], HAIR = [222, 222, 222];

  function reg(doc) {
    var F = window.PDF_FONTS;
    doc.addFileToVFS('dv.ttf', F.sans);
    doc.addFont('dv.ttf', 'dv', 'normal');
    doc.addFileToVFS('dvb.ttf', F.sansBold);
    doc.addFont('dvb.ttf', 'dv', 'bold');
    doc.addFileToVFS('dvm.ttf', F.mono);
    doc.addFont('dvm.ttf', 'dvm', 'normal');
  }

  function rule(doc, y, thick) {
    doc.setDrawColor(thick ? INK[0] : HAIR[0], thick ? INK[1] : HAIR[1], thick ? INK[2] : HAIR[2]);
    doc.setLineWidth(thick ? 0.7 : 0.2);
    doc.line(M_X, y, M_X + W, y);
  }

  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  window.buildQuotePDF = function (d) {
    var jsPDFCtor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!jsPDFCtor) throw new Error('jsPDF не загружен');

    var doc = new jsPDFCtor({ unit: 'mm', format: 'a4', compress: true });
    reg(doc);

    var y = M_TOP;
    var pageBottom = PAGE_H - M_BOT - 8;   // запас под номер страницы

    // ---------- шапка ----------
    doc.setFont('dv', 'bold'); doc.setFontSize(17);
    doc.setTextColor(INK[0], INK[1], INK[2]);
    doc.text(d.clinic, M_X, y + 6);

    doc.setFont('dvm', 'normal'); doc.setFontSize(9);
    doc.setTextColor(GREY[0], GREY[1], GREY[2]);
    doc.text(d.date, M_X + W, y + 5, { align: 'right' });

    doc.setFont('dv', 'normal'); doc.setFontSize(9.5);
    doc.text(d.city, M_X, y + 11.5);

    y += 20;
    rule(doc, y, true);
    y += 7;

    doc.setFont('dv', 'bold'); doc.setFontSize(7.5);
    doc.setTextColor(GREY[0], GREY[1], GREY[2]);
    doc.text(d.sheetLabel.toUpperCase(), M_X, y, { charSpace: 0.5 });
    y += 5;

    // ---------- позиции ----------
    var i, lines, rowH;
    for (i = 0; i < d.items.length; i++) {
      doc.setFont('dv', 'normal'); doc.setFontSize(10);
      lines = doc.splitTextToSize(d.items[i].name, NAME_W);
      rowH = Math.max(lines.length * 4.6, 6) + 3.4;

      if (y + rowH > pageBottom) { doc.addPage(); y = M_TOP; }

      doc.setFont('dvm', 'normal'); doc.setFontSize(8);
      doc.setTextColor(GREY[0], GREY[1], GREY[2]);
      doc.text(pad2(i + 1), M_X, y + 4);

      doc.setFont('dv', 'normal'); doc.setFontSize(10);
      doc.setTextColor(INK[0], INK[1], INK[2]);
      doc.text(lines, M_X + COL_N, y + 4);

      doc.setFont('dvm', 'normal'); doc.setFontSize(9.5);
      doc.text(d.items[i].price, M_X + W, y + 4, { align: 'right' });

      y += rowH;
      rule(doc, y - 1.6, false);
    }

    // ---------- итог ----------
    var totalBlockH = 26;
    if (y + totalBlockH > pageBottom) { doc.addPage(); y = M_TOP; }

    y += 2;
    rule(doc, y, true);
    y += 9;

    doc.setFont('dv', 'bold'); doc.setFontSize(8);
    doc.setTextColor(INK[0], INK[1], INK[2]);
    doc.text(d.totalLabel.toUpperCase(), M_X, y, { charSpace: 0.5 });

    // валюта — обычным шрифтом (в моно-шрифте только цифры),
    // сумма — моноширинным, вплотную слева от неё
    doc.setFont('dv', 'normal'); doc.setFontSize(10.5);
    doc.setTextColor(GREY[0], GREY[1], GREY[2]);
    doc.text(d.currency, M_X + W, y + 1.5, { align: 'right' });
    var curW = doc.getTextWidth(d.currency);

    doc.setFont('dvm', 'normal'); doc.setFontSize(16);
    doc.setTextColor(INK[0], INK[1], INK[2]);
    doc.text(d.total, M_X + W - curW - 2.5, y + 1.5, { align: 'right' });

    y += 12;
    doc.setFont('dv', 'normal'); doc.setFontSize(7.5);
    doc.setTextColor(GREY[0], GREY[1], GREY[2]);
    doc.text(doc.splitTextToSize(d.footnote, W), M_X, y);

    // ---------- номера страниц ----------
    var pages = doc.getNumberOfPages();
    if (pages > 1) {
      for (i = 1; i <= pages; i++) {
        doc.setPage(i);
        // обычный шрифт: в моно только цифры, буквы бы пропали
        doc.setFont('dv', 'normal'); doc.setFontSize(7.5);
        doc.setTextColor(GREY[0], GREY[1], GREY[2]);
        doc.text(d.pageLabel(i, pages), M_X + W, PAGE_H - M_BOT + 6, { align: 'right' });
      }
    }

    doc.save(d.filename);
  };
})();
