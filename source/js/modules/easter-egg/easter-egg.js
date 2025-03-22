const socialList = document.querySelector('.footer__social-list');
const [, , reddit] = socialList.querySelectorAll('.social__link');

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
];

let buttonsKeyDown = [];

const createGitHubIcon = `
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
      >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.39 0-.19-.01-.84-.01-1.54-2.01.44-2.43-.49-2.57-.94-.08-.2-.43-.94-.73-1.13-.25-.16-.61-.55-.01-.56.57-.01 1 .53 1.14.76.66 1.12 1.73.8 2.15.61.07-.48.26-.8.47-.98-1.74-.2-3.57-.87-3.57-3.87 0-.85.3-1.55.79-2.1-.08-.2-.34-1.02.07-2.12 0 0 .66-.21 2.15.79A7.36 7.36 0 0 1 8 3.2c.66.003 1.32.09 1.95.26 1.49-1 2.15-.79 2.15-.79.41 1.1.15 1.92.07 2.12.49.55.79 1.25.79 2.1 0 3-1.83 3.67-3.57 3.87.27.23.5.68.5 1.37 0 .99-.01 1.79-.01 2.03 0 .22.15.47.55.39C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
  `;

const activateEasterEgg = () => {
  reddit.innerHTML = '';
  reddit.innerHTML = createGitHubIcon;
  reddit.setAttribute('href', 'https://github.com/RodionYanushkevich/accelerator-project-1');
};

const checkKonamiCode = () => {
  if (JSON.stringify(buttonsKeyDown) === JSON.stringify(KONAMI_CODE)) {
    activateEasterEgg();
    buttonsKeyDown = [];
  }
};

const codeKeydown = (evt) => {
  if (evt.key !== 'Tab') {
    buttonsKeyDown.push(evt.key);
    if (buttonsKeyDown.length === KONAMI_CODE.length) {
      checkKonamiCode();
    }
  }
};

socialList.addEventListener('focusin', () => {
  document.addEventListener('keydown', codeKeydown);
});

socialList.addEventListener('focusout', () => {
  document.removeEventListener('keydown', codeKeydown);
});
