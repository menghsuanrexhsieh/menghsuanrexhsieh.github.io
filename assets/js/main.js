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

// Posts page: live search (title + content + tags) and tag filtering.
// All post text is embedded in data-* attributes, so this works offline
// with no network request.
(function () {
  var search = document.getElementById('post-search');
  var list = document.getElementById('post-list');
  if (!list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.post-item'));
  var empty = document.getElementById('post-empty');
  var tagFilter = document.getElementById('tag-filter');
  var activeTag = '*';

  function haystack(item) {
    return (
      item.getAttribute('data-title') + ' ' +
      item.getAttribute('data-tags') + ' ' +
      item.getAttribute('data-content')
    );
  }

  function apply() {
    var q = search ? search.value.trim().toLowerCase() : '';
    var visible = 0;

    items.forEach(function (item) {
      var matchesText = !q || haystack(item).indexOf(q) !== -1;
      var tags = (item.getAttribute('data-tags') || '').split(' ');
      var matchesTag = activeTag === '*' || tags.indexOf(activeTag) !== -1;
      var show = matchesText && matchesTag;
      item.hidden = !show;
      if (show) visible++;
    });

    if (empty) empty.hidden = visible !== 0;
  }

  if (search) search.addEventListener('input', apply);

  if (tagFilter) {
    tagFilter.addEventListener('click', function (e) {
      var btn = e.target.closest('.tag-chip');
      if (!btn) return;
      activeTag = btn.getAttribute('data-tag');
      tagFilter.querySelectorAll('.tag-chip').forEach(function (b) {
        b.classList.toggle('is-active', b === btn);
      });
      apply();
    });
  }
})();
