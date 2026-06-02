const contentRoot = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-btn[href^="?page="]');
const validPageName = /^[a-z0-9-]+$/;

function getCurrentPage() {
  const params = new URLSearchParams(window.location.search);
  return params.get('page') || 'home';
}

function setActiveLink(page) {
  navLinks.forEach((link) => {
    const linkPage = new URLSearchParams(link.search).get('page');
    link.classList.toggle('active', linkPage === page);
  });
}

function renderNotFound(page) {
  contentRoot.innerHTML = `
    <div class="box">
      <div class="box-title dark">404 - Page Not Found</div>
      <div class="box-inner">
        <div class="welcome-text">
          The page <b>${page}</b> does not exist in the archive.
          <br><br>
          Try another section from the navigation menu.
        </div>
      </div>
    </div>
  `;
}

async function loadPage(page = getCurrentPage(), options = {}) {
  const shouldUpdateHistory = options.updateHistory === true;
  const safePage = validPageName.test(page) ? page : '404';

  setActiveLink(safePage);

  if (shouldUpdateHistory) {
    const url = new URL(window.location.href);
    url.searchParams.set('page', safePage);
    window.history.pushState({ page: safePage }, '', url);
  }

  try {
    const response = await fetch(`pages/${safePage}.html`);

    if (!response.ok) {
      renderNotFound(safePage);
      return;
    }

    contentRoot.innerHTML = await response.text();
    document.dispatchEvent(new CustomEvent('vlog:page-loaded', {
      detail: { page: safePage }
    }));
  } catch (error) {
    renderNotFound(safePage);
  }
}

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const page = new URLSearchParams(link.search).get('page') || 'home';
    loadPage(page, { updateHistory: true });
  });
});

window.addEventListener('popstate', () => {
  loadPage();
});

loadPage();
