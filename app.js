/* TShTMDM DM — прейскурант / narxlar ro'yxati.
   Источник данных / Ma'lumot manbai: services.csv */
(function () {
  'use strict';

  var CFG = {};
  var SERVICES = [];          // {id, cat:{ru,uz}, name:{ru,uz}, price}
  var selected = new Set();
  var lang = 'ru';
  var activeCat = '*';        // stores the RU category key
  var query = '';
  var SEL_KEY = 'tshtmdm.selection.v1';
  var LANG_KEY = 'tshtmdm.lang.v1';

  var $ = function (id) { return document.getElementById(id); };
  var t = function (key) { return (CFG.i18n && CFG.i18n[lang] && CFG.i18n[lang][key]) || ''; };

  /* ---------- CSV ---------- */
  function parseCSV(text) {
    var rows = [], row = [], field = '', inQuotes = false, i;
    text = text.replace(/^﻿/, '').replace(/\r\n?/g, '\n');
    for (i = 0; i < text.length; i++) {
      var c = text[i];
      if (inQuotes) {
        if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else inQuotes = false; }
        else field += c;
      } else if (c === '"') inQuotes = true;
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else field += c;
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }
    return rows.filter(function (r) { return r.some(function (v) { return v.trim() !== ''; }); });
  }

  function loadServices(rows) {
    var head = rows[0].map(function (h) { return h.trim().toLowerCase(); });
    var need = ['category_ru', 'category_uz', 'name_ru', 'name_uz', 'price'];
    var ix = {};
    need.forEach(function (k) {
      ix[k] = head.indexOf(k);
      if (ix[k] < 0) throw new Error('services.csv: нет колонки "' + k + '"');
    });
    var ai = head.indexOf('active');

    var out = [], seen = Object.create(null);
    for (var r = 1; r < rows.length; r++) {
      var row = rows[r];
      if (ai >= 0) {
        var a = (row[ai] || '').trim().toLowerCase();
        if (a === '0' || a === 'no' || a === 'false' || a === 'нет') continue;
      }
      var catRu = (row[ix.category_ru] || '').trim();
      var nameRu = (row[ix.name_ru] || '').trim();
      if (!catRu || !nameRu) continue;
      var price = parseInt((row[ix.price] || '').replace(/[\s ]/g, ''), 10);
      if (isNaN(price)) { console.warn('services.csv, строка ' + (r + 1) + ': неверная цена', row[ix.price]); continue; }
      var id = slug(catRu) + '__' + slug(nameRu);
      if (seen[id]) { console.warn('services.csv: дубликат', nameRu); continue; }
      seen[id] = 1;
      out.push({
        id: id,
        cat: { ru: catRu, uz: (row[ix.category_uz] || '').trim() || catRu },
        name: { ru: nameRu, uz: (row[ix.name_uz] || '').trim() || nameRu },
        price: price
      });
    }
    return out;
  }

  function slug(s) {
    return s.toLowerCase().replace(/['’`"]/g, '')
      .replace(/[^a-z0-9Ѐ-ӿ]+/g, '-').replace(/^-|-$/g, '');
  }

  /* ---------- helpers ---------- */
  function money(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }
  function norm(s) { return s.toLowerCase().replace(/['’`]/g, '').replace(/ё/g, 'е'); }
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function catName(s) { return s.cat[lang] || s.cat.ru; }
  function svcName(s) { return s.name[lang] || s.name.ru; }

  function categories() {
    var keys = [], out = [];
    SERVICES.forEach(function (s) {
      var i = keys.indexOf(s.cat.ru);
      if (i < 0) { keys.push(s.cat.ru); out.push({ key: s.cat.ru, label: catName(s), n: 1 }); }
      else out[i].n++;
    });
    return out;
  }

  function visible() {
    var q = norm(query.trim());
    return SERVICES.filter(function (s) {
      if (activeCat !== '*' && s.cat.ru !== activeCat) return false;
      if (!q) return true;
      // search across both languages so either script finds the row
      return norm(s.name.ru).indexOf(q) >= 0 || norm(s.name.uz).indexOf(q) >= 0 ||
             norm(s.cat.ru).indexOf(q) >= 0 || norm(s.cat.uz).indexOf(q) >= 0;
    });
  }

  function chosen() { return SERVICES.filter(function (s) { return selected.has(s.id); }); }
  function total() { return chosen().reduce(function (a, s) { return a + s.price; }, 0); }

  /* ---------- session storage ---------- */
  function save() {
    try {
      sessionStorage.setItem(SEL_KEY, JSON.stringify(Array.from(selected)));
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }
  function restore() {
    try {
      var raw = sessionStorage.getItem(SEL_KEY);
      if (raw) {
        var valid = Object.create(null);
        SERVICES.forEach(function (s) { valid[s.id] = 1; });
        JSON.parse(raw).forEach(function (id) { if (valid[id]) selected.add(id); });
      }
    } catch (e) {}
  }
  function restoreLang() {
    var saved = null;
    try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
    if (saved && CFG.i18n[saved]) lang = saved;
    else lang = CFG.defaultLang && CFG.i18n[CFG.defaultLang] ? CFG.defaultLang : 'ru';
  }

  /* ---------- render ---------- */
  var CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12.5l5.5 5.5L20 7"/></svg>';

  function renderLangs() {
    $('langs').innerHTML = (CFG.languages || []).map(function (l) {
      return '<button type="button" class="langbtn" data-lang="' + l.code + '" aria-pressed="' +
        (lang === l.code) + '">' + esc(l.label) + '</button>';
    }).join('');
  }

  function renderCats() {
    var cats = categories();
    var opt = function (key, label, n) {
      return '<button type="button" class="catopt" data-cat="' + esc(key) + '" aria-pressed="' +
        (activeCat === key) + '"><span class="catopt-name">' + esc(label) +
        '</span><span class="catopt-num">' + n + '</span></button>';
    };
    var html = opt('*', t('allCategories'), SERVICES.length);
    cats.forEach(function (c) { html += opt(c.key, c.label, c.n); });
    $('catPanel').innerHTML = html;

    var cur = null;
    if (activeCat !== '*') {
      for (var i = 0; i < cats.length; i++) if (cats[i].key === activeCat) { cur = cats[i]; break; }
    }
    $('catBtnLabel').textContent = cur ? cur.label : t('allCategories');
    $('catBtnCount').textContent = cur ? cur.n : SERVICES.length;
  }

  function closeCats() {
    $('catPanel').hidden = true;
    $('catBtn').setAttribute('aria-expanded', 'false');
  }
  function toggleCats() {
    var open = $('catPanel').hidden;
    $('catPanel').hidden = !open;
    $('catBtn').setAttribute('aria-expanded', String(open));
  }

  function renderList() {
    var items = visible(), html = '', current = null;
    items.forEach(function (s) {
      if (s.cat.ru !== current) {
        current = s.cat.ru;
        var n = items.filter(function (x) { return x.cat.ru === current; }).length;
        html += '<div class="group-head"><span class="label">' + esc(catName(s)) +
          '</span><span class="count">' + n + '</span></div>';
      }
      var sel = selected.has(s.id);
      html += '<label class="row' + (sel ? ' is-sel' : '') + '" data-id="' + s.id + '">' +
        '<input type="checkbox" ' + (sel ? 'checked' : '') + '>' +
        '<span class="box" aria-hidden="true">' + CHECK + '</span>' +
        '<span class="name">' + esc(svcName(s)) + '</span>' +
        '<span class="price">' + money(s.price) + '</span></label>';
    });
    $('list').innerHTML = html;
    $('empty').hidden = items.length > 0;
  }

  function renderBar() {
    var c = chosen();
    $('bar').hidden = c.length === 0;
    $('countNum').textContent = pad2(c.length);
    $('totalNum').textContent = money(total());
  }

  function renderSheet() {
    $('sheetList').innerHTML = chosen().map(function (s, i) {
      return '<li><span class="n">' + pad2(i + 1) + '</span><span class="nm">' + esc(svcName(s)) +
        '</span><span class="pr">' + money(s.price) + '</span></li>';
    }).join('');
    $('sheetTotal').textContent = money(total());
    var d = new Date();
    $('sheetDate').textContent = pad2(d.getDate()) + '.' + pad2(d.getMonth() + 1) + '.' + d.getFullYear();
  }

  function applyStrings() {
    document.documentElement.lang = lang;
    document.title = CFG.clinicName + ' — ' + t('listTitle');
    $('clinicName').textContent = CFG.clinicName;
    $('listTitle').textContent = t('listTitle');
    $('listSubtitle').textContent = t('listSubtitle');
    $('updatedLabel').textContent = t('updatedLabel');
    $('updatedDate').textContent = CFG.updatedDate;
    $('search').placeholder = t('searchPlaceholder');
    $('search').setAttribute('aria-label', t('searchPlaceholder'));
    $('countLabel').textContent = t('selectedPrefix');
    $('clear').textContent = t('clear');
    $('curLabel').textContent = t('currency');
    $('pdfBtnLabel').textContent = t('pdfButton');
    $('modalTitle').textContent = t('modalTitle');
    $('closePdf').textContent = t('close');
    $('sheetClinic').textContent = CFG.clinicName;
    $('sheetCity').textContent = t('city');
    $('sheetLabel').textContent = t('sheetLabel');
    $('sheetTotalLabel').textContent = t('totalLabel');
    $('sheetCur').textContent = t('currency');
    $('sheetNote').textContent = t('footnote');
    $('keepEditing').textContent = t('keepEditing');
    $('download').textContent = t('download');
    $('printBtn').textContent = t('print');
    $('empty').textContent = t('empty');
  }

  function renderAll() { applyStrings(); renderLangs(); renderCats(); renderList(); renderBar(); }

  /* ---------- events ---------- */
  function toggle(id) {
    if (selected.has(id)) selected.delete(id); else selected.add(id);
    save();
    var row = $('list').querySelector('[data-id="' + id + '"]');
    if (row) {
      var on = selected.has(id);
      row.classList.toggle('is-sel', on);
      row.querySelector('input').checked = on;
    }
    renderBar();
  }

  function downloadPDF() {
    var d = new Date();
    var stamp = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
    window.buildQuotePDF({
      clinic: CFG.clinicName,
      city: t('city'),
      date: pad2(d.getDate()) + '.' + pad2(d.getMonth() + 1) + '.' + d.getFullYear(),
      sheetLabel: t('sheetLabel'),
      totalLabel: t('totalLabel'),
      currency: t('currency'),
      footnote: t('footnote'),
      pageLabel: function (cur, all) { return t('pageOf') + ' ' + cur + '/' + all; },
      items: chosen().map(function (s) { return { name: svcName(s), price: money(s.price) }; }),
      total: money(total()),
      filename: 'TShTMDM-DM_' + stamp + '.pdf'
    });
  }

  function openModal() {
    renderSheet();
    $('overlay').hidden = false;
    document.body.style.overflow = 'hidden';
    $('closePdf').focus();
  }
  function closeModal() {
    $('overlay').hidden = true;
    document.body.style.overflow = '';
    $('openPdf').focus();
  }

  function wire() {
    $('list').addEventListener('click', function (e) {
      var row = e.target.closest('.row');
      if (!row) return;
      e.preventDefault();
      toggle(row.dataset.id);
    });

    $('catBtn').addEventListener('click', function (e) { e.stopPropagation(); toggleCats(); });

    $('catPanel').addEventListener('click', function (e) {
      var o = e.target.closest('.catopt');
      if (!o) return;
      activeCat = o.dataset.cat;
      closeCats();
      renderCats(); renderList();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.addEventListener('click', function (e) {
      if (!$('catPanel').hidden && !e.target.closest('.catpick')) closeCats();
    });

    $('langs').addEventListener('click', function (e) {
      var b = e.target.closest('.langbtn');
      if (!b || b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      save();
      renderAll();
    });

    var timer;
    $('search').addEventListener('input', function (e) {
      query = e.target.value;
      clearTimeout(timer);
      timer = setTimeout(renderList, 120);
    });

    $('clear').addEventListener('click', function () {
      selected.clear(); save(); renderList(); renderBar();
    });

    $('openPdf').addEventListener('click', openModal);
    $('closePdf').addEventListener('click', closeModal);
    $('keepEditing').addEventListener('click', closeModal);
    $('printBtn').addEventListener('click', function () { window.print(); });

    $('download').addEventListener('click', function () {
      try {
        downloadPDF();
      } catch (err) {
        console.error(err);
        alert(t('pdfError') + ': ' + err.message);
      }
    });
    $('overlay').addEventListener('click', function (e) { if (e.target === $('overlay')) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('overlay').hidden) closeModal();
      else if (!$('catPanel').hidden) closeCats();
    });
  }

  function fail(msg) {
    $('app').innerHTML = '<div style="padding:28px"><p style="font-weight:700;margin:0 0 8px">' +
      esc(t('loadError') || 'Ошибка') + '</p><p style="color:#666;margin:0;font-size:14px">' +
      esc(msg) + '</p></div>';
  }

  function boot() {
    if (typeof window.APP_CONFIG === 'undefined') throw new Error('config.js не загружен');
    if (typeof window.SERVICES_CSV === 'undefined') throw new Error('services.js не загружен');
    CFG = window.APP_CONFIG;
    restoreLang();
    SERVICES = loadServices(parseCSV(window.SERVICES_CSV));
    if (!SERVICES.length) throw new Error('список услуг пуст');
    restore();
    renderAll();
    wire();
  }

  try {
    boot();
  } catch (err) {
    console.error(err);
    fail(err.message);
  }
})();
