export function isIntoView(el) {
  if (!el) return false;
  const {top, height} = el.getBoundingClientRect();
  const topPos = top + window.scrollY;
  const botPos = topPos + height;
  return (
    (topPos >= window.pageYOffset && topPos <= window.pageYOffset + window.innerHeight) ||
    (botPos >= window.pageYOffset && botPos <= window.pageYOffset + window.innerHeight)
  );
}
