import { toolCategories, createSlug } from './tools-data.js';

const toolsRoot = document.getElementById('tools-root');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const themeToggle = document.querySelector('[data-theme-toggle]');

const iconMap = {
  merge: '🧩',
  split: '✂️',
  remove: '🗑️',
  extract: '📤',
  organize: '🗂️',
  scan: '📠',
  compress: '🗜️',
  repair: '🛠️',
  ocr: '🔍',
  jpg: '🖼️',
  word: '📝',
  powerpoint: '📊',
  excel: '📈',
  html: '🌐',
  rotate: '🔄',
  page: '🔢',
  watermark: '💧',
  crop: '📐',
  edit: '✍️',
  unlock: '🔓',
  protect: '🔒',
  sign: '✒️',
  redact: '🕶️',
  compare: '⚖️',
  translate: '🌍',
};

const getIcon = (toolName) => {
  const key = Object.keys(iconMap).find((entry) => toolName.toLowerCase().includes(entry));
  return iconMap[key] || '📄';
};

const renderTools = () => {
  const html = toolCategories
    .map(
      (category) => `
      <article class="category-card">
        <header>
          <h3>${category.title}</h3>
        </header>
        <div class="tools-grid">
          ${category.tools
            .map(([name, description]) => {
              const slug = createSlug(name);
              return `
                <a class="tool-card" href="tool.html?tool=${slug}" aria-label="Open ${name} tool">
                  <span class="tool-icon" aria-hidden="true">${getIcon(name)}</span>
                  <h4>${name}</h4>
                  <p>${description}</p>
                </a>
              `;
            })
            .join('')}
        </div>
      </article>
      `,
    )
    .join('');

  toolsRoot.innerHTML = html;
};

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('pdfmaster-theme', theme);
  themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
};

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('pdfmaster-theme');
if (savedTheme) setTheme(savedTheme);

renderTools();
