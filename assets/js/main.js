// Theme toggle: flips between light/dark and remembers the choice.
// The initial theme is set in <head> (before paint) to avoid a flash.
(function () {
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Follow the OS theme until the user makes an explicit choice.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    }
  });
})();

// Ordinary inline math uses its natural baseline. Only formulas wider than
// their paragraph need a separate scrolling row, especially on phones.
(function () {
  var article = document.querySelector('.post-body');
  if (!article) return;
  var pending = false;
  function fitMath() {
    pending = false;
    var formulas = article.querySelectorAll('.math.inline');
    formulas.forEach(function (formula) {
      formula.classList.remove('math-inline-scroll');
      var rendered = formula.querySelector('mjx-container');
      if (!rendered) return;
      var paragraph = formula.closest('p, li, td, th') || article;
      var width = paragraph.clientWidth;
      var style = getComputedStyle(paragraph);
      width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
      if (rendered.getBoundingClientRect().width > width + 1) {
        formula.classList.add('math-inline-scroll');
      }
    });
  }
  function afterTypeset() {
    if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
      MathJax.startup.promise.then(fitMath);
    }
  }
  var script = document.getElementById('MathJax-script');
  if (script) script.addEventListener('load', afterTypeset);
  afterTypeset();
  window.addEventListener('resize', function () {
    if (!pending) { pending = true; window.requestAnimationFrame(fitMath); }
  });
})();

// Search and tag filtering operate on the full collection before pagination.
(function () {
  var search = document.getElementById('post-search');
  var list = document.getElementById('post-list');
  if (!list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.post-item'));
  var empty = document.getElementById('post-empty');
  var status = document.getElementById('post-results');
  var pager = document.getElementById('posts-pagination');
  var tagFilter = document.getElementById('tag-filter');
  var chips = tagFilter ? Array.prototype.slice.call(tagFilter.querySelectorAll('.tag-chip')) : [];
  var pageSize = Number(list.getAttribute('data-page-size')) || 20;
  var activeTag = '*';
  var page = 1;
  var entries = items.map(function (item) {
    var tags = JSON.parse(item.getAttribute('data-tags') || '[]').map(function (tag) {
      return tag.trim().toLowerCase();
    });
    return {
      item: item,
      tags: tags,
      text: [item.getAttribute('data-title'), tags.join(' '), item.getAttribute('data-content')].join(' ').toLowerCase()
    };
  });

  function readLocation() {
    var params = new URLSearchParams(window.location.search);
    activeTag = params.get('tag') || '*';
    activeTag = ({geometry: 'differential geometry', probability: 'probability theory'})[activeTag] || activeTag;
    if (!chips.some(function (chip) { return chip.getAttribute('data-tag') === activeTag; })) activeTag = '*';
    if (search) search.value = params.get('q') || '';
    page = Math.max(1, Math.floor(Number(params.get('page')) || 1));
  }

  function saveLocation(replace) {
    var url = new URL(window.location.href);
    var q = search ? search.value.trim() : '';
    if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
    if (activeTag !== '*') url.searchParams.set('tag', activeTag); else url.searchParams.delete('tag');
    if (page > 1) url.searchParams.set('page', page); else url.searchParams.delete('page');
    if (url.href !== window.location.href) {
      window.history[replace ? 'replaceState' : 'pushState']({}, '', url);
    }
  }

  function pageButton(label, target, disabled, current) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'page-button';
    button.textContent = label;
    button.disabled = disabled;
    button.setAttribute('data-page', target);
    button.setAttribute('aria-label', /^\d+$/.test(label) ? 'Page ' + label : label + ' page');
    if (current) button.setAttribute('aria-current', 'page');
    pager.appendChild(button);
  }

  function apply() {
    var q = search ? search.value.trim().toLowerCase() : '';
    var textMatches = entries.filter(function (entry) { return !q || entry.text.indexOf(q) !== -1; });
    var matches = textMatches.filter(function (entry) { return activeTag === '*' || entry.tags.indexOf(activeTag) !== -1; });
    var pages = Math.ceil(matches.length / pageSize);
    page = Math.min(page, Math.max(1, pages));
    var first = (page - 1) * pageSize;
    entries.forEach(function (entry) { entry.item.hidden = true; });
    matches.slice(first, first + pageSize).forEach(function (entry) { entry.item.hidden = false; });

    chips.forEach(function (chip) {
      var tag = chip.getAttribute('data-tag');
      var count = tag === '*' ? textMatches.length : textMatches.filter(function (entry) { return entry.tags.indexOf(tag) !== -1; }).length;
      var selected = tag === activeTag;
      chip.classList.toggle('is-active', selected);
      chip.setAttribute('aria-pressed', String(selected));
      // Keep the active filter available even when the search has no matches.
      chip.hidden = count === 0 && !selected && tag !== '*';
      chip.disabled = count === 0 && !selected && tag !== '*';
    });
    if (empty) empty.hidden = matches.length !== 0;
    if (status) status.textContent = matches.length ? (first + 1) + '–' + Math.min(first + pageSize, matches.length) + ' of ' + matches.length + (matches.length === 1 ? ' post' : ' posts') : '0 posts';
    if (pager) {
      pager.replaceChildren();
      pager.hidden = pages <= 1;
      if (pages > 1) {
        pageButton('Previous', page - 1, page === 1, false);
        var lastShown = 0;
        for (var n = 1; n <= pages; n++) {
          if (n !== 1 && n !== pages && Math.abs(n - page) > 2) continue;
          if (lastShown && n - lastShown > 1) {
            var gap = document.createElement('span');
            gap.className = 'page-gap'; gap.textContent = '…'; pager.appendChild(gap);
          }
          pageButton(String(n), n, false, n === page);
          lastShown = n;
        }
        pageButton('Next', page + 1, page === pages, false);
      }
    }
  }

  if (search) search.addEventListener('input', function () {
    page = 1; apply(); saveLocation(true);
  });
  if (tagFilter) tagFilter.addEventListener('click', function (e) {
    var button = e.target.closest('.tag-chip');
    if (!button || button.disabled) return;
    activeTag = button.getAttribute('data-tag');
    page = 1; apply(); saveLocation(false);
  });
  if (pager) pager.addEventListener('click', function (e) {
    var button = e.target.closest('[data-page]');
    if (!button || button.disabled) return;
    page = Number(button.getAttribute('data-page'));
    apply(); saveLocation(false);
    if (status) { status.focus({preventScroll: true}); status.scrollIntoView({block: 'start'}); }
  });
  window.addEventListener('popstate', function () { readLocation(); apply(); });
  readLocation(); apply(); saveLocation(true);
})();

// Research page: Synopsis / Abstract panels. At most one panel per paper is
// open at a time, and clicking an already-open button collapses it. Panels
// ship with `hidden` set; a <noscript> rule in the head reveals them when
// JavaScript is unavailable.
(function () {
  var rows = document.querySelectorAll('.pub__toggles');
  if (!rows.length) return;

  Array.prototype.forEach.call(rows, function (row) {
    var buttons = Array.prototype.slice.call(row.querySelectorAll('.synopsis__btn'));

    function panelFor(btn) {
      return document.getElementById(btn.getAttribute('aria-controls'));
    }

    function collapse(btn) {
      btn.setAttribute('aria-expanded', 'false');
      var panel = panelFor(btn);
      if (panel) panel.hidden = true;
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var wasOpen = btn.getAttribute('aria-expanded') === 'true';

        buttons.forEach(collapse);

        if (!wasOpen) {
          btn.setAttribute('aria-expanded', 'true');
          var panel = panelFor(btn);
          if (panel) panel.hidden = false;
        }
      });
    });
  });
})();
