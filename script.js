// 대부분의 텍스트와 이미지 경로는 이 객체만 수정하면 바꿀 수 있습니다.
const siteContent = {
  brand: "COREWORKSLAB",
  fullName: "똑딱이",
  role: "새로운 경험과 기술을 연결하는 사람",
  hero: {
    eyebrow: "Personal Promotion Website",
    title: "안녕하세요,\n저는 똑딱이입니다.",
    description:
      "나를 소개하고, 내가 만든 것들과 좋아하는 것들을 담은 공간입니다.",
  },
  about: {
    intro:
      "안녕하세요. 저는 새로운 경험을 좋아하고, 제가 해온 일과 새로운 기술을 연결하여 작업하는 일에 관심사를 가지고 성장하는 사람입니다.",
    profileImage: "assets/profile.jpg",
  },
  timelineItems: [
    {
      year: "2024",
      text: "주요 활동 또는 경력 입력",
    },
    {
      year: "2025",
      text: "주요 활동 또는 경력 입력",
    },
    {
      year: "2026",
      text: "주요 활동 또는 경력 입력",
    },
  ],
  portfolioItems: [
    {
      title: "포트폴리오 1",
      description: "프로젝트 설명을 입력하세요.",
      role: "역할 또는 사용 기술",
      image: "assets/portfolio1.jpg",
      fallbackLabel: "WORK 01",
      link: "",
    },
    {
      title: "포트폴리오 2",
      description: "프로젝트 설명을 입력하세요.",
      role: "역할 또는 사용 기술",
      image: "assets/portfolio2.jpg",
      fallbackLabel: "WORK 02",
      link: "",
    },
    {
      title: "포트폴리오 3",
      description: "프로젝트 설명을 입력하세요.",
      role: "역할 또는 사용 기술",
      image: "assets/portfolio3.jpg",
      fallbackLabel: "WORK 03",
      link: "",
    },
    {
      title: "포트폴리오 4",
      description: "프로젝트 설명을 입력하세요.",
      role: "역할 또는 사용 기술",
      image: "assets/portfolio4.jpg",
      fallbackLabel: "WORK 04",
      link: "",
    },
  ],
  hobbyItems: [
    {
      title: "취미 1",
      description: "취미 설명을 입력하세요.",
      image: "assets/hobby1.jpg",
      fallbackLabel: "HOBBY 01",
    },
    {
      title: "취미 2",
      description: "취미 설명을 입력하세요.",
      image: "assets/hobby2.jpg",
      fallbackLabel: "HOBBY 02",
    },
    {
      title: "취미 3",
      description: "취미 설명을 입력하세요.",
      image: "assets/hobby3.jpg",
      fallbackLabel: "HOBBY 03",
    },
  ],
};

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function createImageShell({ src, alt, fallbackLabel, fallbackSubLabel }) {
  const shell = document.createElement("div");
  shell.className = "image-shell";

  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.loading = "lazy";

  const fallback = document.createElement("div");
  fallback.className = "image-fallback";
  fallback.innerHTML = `
    <div>
      <strong>${fallbackLabel}</strong>
      <span>${fallbackSubLabel}</span>
    </div>
  `;

  image.addEventListener("load", () => {
    shell.classList.add("is-loaded");
  });

  shell.append(image, fallback);
  return shell;
}

function renderTimeline() {
  const timelineList = document.querySelector("#timeline-list");
  if (!timelineList) return;

  timelineList.innerHTML = "";

  siteContent.timelineItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "timeline-item reveal";
    li.innerHTML = `
      <span class="timeline-year">${item.year}</span>
      <span class="timeline-text">${item.text}</span>
    `;
    timelineList.appendChild(li);
  });
}

function renderPortfolio() {
  const portfolioGrid = document.querySelector("#portfolio-grid");
  if (!portfolioGrid) return;

  portfolioGrid.innerHTML = "";

  siteContent.portfolioItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "portfolio-card reveal";

    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.appendChild(
      createImageShell({
        src: item.image,
        alt: item.title,
        fallbackLabel: item.fallbackLabel,
        fallbackSubLabel: "Project Image",
      }),
    );

    const copy = document.createElement("div");
    copy.className = "card-copy";

    const buttonHref = item.link || "#";
    const disabledState = item.link ? "false" : "true";

    copy.innerHTML = `
      <h3 class="card-title">${item.title}</h3>
      <p class="card-description">${item.description}</p>
      <p class="card-meta">${item.role}</p>
      <a class="card-button" href="${buttonHref}" aria-disabled="${disabledState}">
        자세히 보기
      </a>
    `;

    article.append(visual, copy);
    portfolioGrid.appendChild(article);
  });
}

function renderHobbies() {
  const hobbyGrid = document.querySelector("#hobby-grid");
  if (!hobbyGrid) return;

  hobbyGrid.innerHTML = "";

  siteContent.hobbyItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "hobby-card reveal";

    const visual = document.createElement("div");
    visual.className = "card-visual";
    visual.appendChild(
      createImageShell({
        src: item.image,
        alt: item.title,
        fallbackLabel: item.fallbackLabel,
        fallbackSubLabel: "Daily Inspiration",
      }),
    );

    const copy = document.createElement("div");
    copy.className = "card-copy";
    copy.innerHTML = `
      <h3 class="card-title">${item.title}</h3>
      <p class="card-description">${item.description}</p>
    `;

    article.append(visual, copy);
    hobbyGrid.appendChild(article);
  });
}

function renderProfile() {
  const profileVisual = document.querySelector("#profile-visual");
  if (!profileVisual) return;

  profileVisual.innerHTML = "";
  profileVisual.appendChild(
    createImageShell({
      src: siteContent.about.profileImage,
      alt: `${siteContent.fullName} 프로필 사진`,
      fallbackLabel: siteContent.fullName,
      fallbackSubLabel: "Portrait",
    }),
  );
}

function initCopy() {
  setText("#brand-name", siteContent.brand);
  setText("#hero-eyebrow", siteContent.hero.eyebrow);
  setText("#hero-title", siteContent.hero.title);
  setText("#hero-description", siteContent.hero.description);
  setText("#about-role", siteContent.role);
  setText("#about-name", siteContent.fullName);
  setText("#about-intro", siteContent.about.intro);
  setText(
    "#footer-copy",
    `${new Date().getFullYear()} ${siteContent.fullName}. 모든 텍스트와 이미지는 쉽게 교체할 수 있도록 구성했습니다.`,
  );
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initNav() {
  const nav = document.querySelector("#site-nav");
  const toggle = document.querySelector("#nav-toggle");
  const navLinks = document.querySelectorAll("#site-nav a");

  if (!nav || !toggle) return;

  function closeMenu() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

function disablePlaceholderLinks() {
  const disabledLinks = document.querySelectorAll('.card-button[aria-disabled="true"]');
  disabledLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
}

function init() {
  initCopy();
  renderProfile();
  renderTimeline();
  renderPortfolio();
  renderHobbies();
  initNav();
  disablePlaceholderLinks();
  initReveal();
}

document.addEventListener("DOMContentLoaded", init);
