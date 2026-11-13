/* Fade the Field Services tile in when it scrolls into view, like the other service tiles. */
(function () {
  var els = document.querySelectorAll('.fs-blurb');
  if (!els.length || !('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.remove('fs-prehide'); io.unobserve(e.target); }
    });
  }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
  els.forEach(function (el) {
    el.style.transition = 'none';
    el.classList.add('fs-prehide');
    void el.offsetWidth;
    el.style.transition = '';
    io.observe(el);
  });
})();
