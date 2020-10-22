const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');
const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

function obCallback(payload) {
  // If 100% of terms' last <p> is visible, make button available
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
    // Now, stop observing
    ob.unobserve(terms.lastElementChild);
  }
}

// Observe the last element of terms, i.e. the final <p>
ob.observe(terms.lastElementChild);
