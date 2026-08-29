lucide.createIcons();

const saveButton = document.querySelector('.save-button');
const saveLabel = saveButton?.getAttribute('aria-label') ?? 'Save story';

saveButton?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const saved = button.classList.toggle('saved');
  button.setAttribute('aria-label', saved ? 'Remove saved story' : saveLabel);
  button.innerHTML = `<i data-lucide="${saved ? 'bookmark-check' : 'bookmark'}"></i>`;
  lucide.createIcons({ nodes: [button] });
});

document.querySelector('.subscribe-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.nextElementSibling;
  const endpoint = form.getAttribute('action');

  if (!endpoint) {
    message.textContent = 'Thank you. I will write soon.';
    form.reset();
    return;
  }

  message.textContent = 'One moment...';
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });
    if (!response.ok) throw new Error(String(response.status));
    message.textContent = 'Thank you. I will write soon.';
    form.reset();
  } catch {
    message.textContent = 'That did not go through. Please try again in a minute.';
  }
});

document.querySelector('.menu-button')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const navigation = document.querySelector('.main-nav');
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('menu-open', !isOpen);
});