// public/scripts/math-typeset.js
export async function typesetMath(root = document.body) {
  if (window.MathJax && window.MathJax.typesetPromise) {
    try {
      await window.MathJax.typesetPromise([root]);
    } catch (err) {
      console.error('MathJax typeset failed:', err);
    }
  } else {
    // wait for MathJax to load then typeset
    const wait = () => new Promise((res) => {
      const check = () => (window.MathJax && window.MathJax.typesetPromise) ? res() : setTimeout(check, 50);
      check();
    });
    await wait();
    try { await window.MathJax.typesetPromise([root]); } catch (e) { console.error(e); }
  }
}

// expose globally for convenience
if (typeof window !== 'undefined') window.typesetMath = typesetMath;