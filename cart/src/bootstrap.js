import faker from "faker";

const text = `<div>You have ${faker.random.number()} items</div>`;

const mount = (el) => {
    el.innerHTML = text;
}

if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-cart");
    if (el) {
      mount(el);
    }
  }

export  {mount}