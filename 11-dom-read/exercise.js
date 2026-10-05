export function pageHeading() {
  return document.querySelector("h1").textContent;
}

export function productCount() {
  return document.querySelectorAll(".card").length;
}

export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map(
    (card) => card.textContent
  );
}

export function priceOf(name) {
  const cards = document.querySelectorAll(".card");

  for (const card of cards) {
    const heading = card.querySelector("h3");

    if (heading && heading.textContent === name) {
      const price = card.querySelector(".price");

      if (price) {
        return price.textContent;
      }
    }
  }

  return null;
}

export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out h3")).map(
    (card) => card.textContent
  );
}
