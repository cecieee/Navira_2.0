// Classname utility compatible with clsx/shadcn object & array syntax.
// Supports:
// - Strings: "p-4 text-sm"
// - Arrays: ["p-4", condition && "text-sm"] (nested OK)
// - Objects: { "animate-spin": isSpinning, "text-sm": size === 'sm' }
// If you later add clsx/tailwind-merge, you can swap this with twMerge(clsx(...)).

export function cn(...inputs) {
  const out = [];

  const push = (val) => {
    if (!val) return;
    if (typeof val === "string" || typeof val === "number") {
      const s = String(val).trim();
      if (s) out.push(s);
      return;
    }
    if (Array.isArray(val)) {
      for (const item of val) push(item);
      return;
    }
    if (typeof val === "object") {
      for (const key in val) {
        if (!Object.prototype.hasOwnProperty.call(val, key)) continue;
        if (val[key]) push(key);
      }
    }
  };

  for (const input of inputs) push(input);

  return out.join(" ");
}
