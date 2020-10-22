const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // Now, stop observing
    ob.unobserve(terms.lastElementChild);
  }
}

ob.observe(terms.lastElementChild);
