const styleEl = document.getElementById("jit-style");
const sheet = styleEl.sheet;

function addRule(selector, rule) {
  sheet.insertRule(`${selector} { ${rule} }`, sheet.cssRules.length);
}

// List rule sederhana
function parseClass(cls) {
  // text-[color]
  if (cls.startsWith("text-[")) {
    const value = cls.match(/text-\[(.+)\]/)[1];
    return [`.${cssEscape(cls)}`, `color: ${value};`];
  }

  // bg-[color]
  if (cls.startsWith("bg-[")) {
    const value = cls.match(/bg-\[(.+)\]/)[1];
    return [`.${cssEscape(cls)}`, `background-color: ${value};`];
  }

  // w-[value]
  if (cls.startsWith("w-[")) {
    const value = cls.match(/w-\[(.+)\]/)[1];
    return [`.${cssEscape(cls)}`, `width: ${value};`];
  }

  // h-[value]
  if (cls.startsWith("h-[")) {
    const value = cls.match(/h-\[(.+)\]/)[1];
    return [`.${cssEscape(cls)}`, `height: ${value};`];
  }

  return null;
}

// Escape class name seperti Tailwind
function cssEscape(cls) {
  return cls.replace(/([\[\]#])/g, "\\$1");
}

// Scan DOM
document.querySelectorAll("*").forEach(el => {
  el.classList.forEach(cls => {
    const res = parseClass(cls);
    if (res) {
      const [selector, rule] = res;
      addRule(selector, rule);
    }
  });
});
