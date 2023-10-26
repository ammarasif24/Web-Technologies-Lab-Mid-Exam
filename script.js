const faqContainer = document.querySelector(".faq-container");
const addButton = document.getElementById("add-btn");
const question = document.getElementById("quest");
const answer = document.getElementById("ans");

addButton.addEventListener("click", () => {
  const newFaqItem = document.createElement("div");
  newFaqItem.classList.add("faq");
  newFaqItem.innerHTML = `
    <h3 class="faq-title">${question.value}</h3>
    <p class="faq-text">${answer.value}</p>
    <button class="faq-toggle">
      <i class="fas fa-chevron-down"></i>
      <i class="fas fa-times"></i>
    </button>
  `;

  faqContainer.insertBefore(newFaqItem, faqContainer.firstChild);

  question.value = "";
  answer.value = "";

  attachEventListeners(newFaqItem);
});

const faqItems = document.querySelectorAll(".faq");
faqItems.forEach((item) => {
  attachEventListeners(item);
});

function attachEventListeners(item) {
  const dropButton = item.querySelector(".faq-toggle");
  const closeButton = dropButton.querySelector(".fa-times");

  dropButton.addEventListener("click", () => {
    item.classList.toggle("active");
  });

  closeButton.addEventListener("click", () => {
    item.remove();
  });
}
