// Language Translation Dictionary (Matching index.html shared translations)
const translations = {
    en: {
        logoText: "Kshetriva Farms",
        navHome: "Home",
        navAbout: "About Us",
        navHow: "How It Works",
        navProducts: "Products",
        navFarmers: "Our Farmers",
        navGallery: "Gallery",
        navReviews: "Reviews",
        footerDesc: "From Farm to Home — Directly. Empowering farmers and bringing health to families.",
        footerLinks: "Quick Links",
        footerContact: "Contact Us",
        footerFollow: "Follow Us",
        footerCopyright: "© 2026 Kshetriva Farms. All rights reserved.",
        emailCopied: "Email copied to clipboard!"
    },
    te: {
        logoText: "క్షేత్రీవ ఫార్మ్స్",
        navHome: "హోమ్",
        navAbout: "మా గురించి",
        navHow: "ఇది ఎలా పనిచేస్తుంది",
        navProducts: "ఉత్పత్తులు",
        navFarmers: "మా రైతులు",
        navGallery: "గ్యాలరీ",
        navReviews: "సమీక్షలు",
        footerDesc: "పొలం నుండి నేరుగా ఇంటికి. రైతుల సబలీకరణ మరియు కుటుంబాల ఆరోగ్యం.",
        footerLinks: "త్వరిత లింకులు",
        footerContact: "మమ్మల్ని సంప్రదించండి",
        footerFollow: "మమ్మల్ని అనుసరించండి",
        footerCopyright: "© 2026 క్షేత్రీవ ఫార్మ్స్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
        emailCopied: "ఈమెయిల్ క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది!"
    }
};

// Retrieve language selection from localStorage or fallback to English
let currentLang = localStorage.getItem('kshetriva_lang') || 'en';

// Apply translations dynamically to common header/footer layouts
function applyLanguage() {
    const dict = translations[currentLang];

    // 1. Update Lang Selector sliding toggle states
    const langToggle = document.getElementById('langToggle');
    const langOptEn = document.getElementById('langOptEn');
    const langOptTe = document.getElementById('langOptTe');
    if (langToggle && langOptEn && langOptTe) {
        if (currentLang === 'te') {
            langToggle.classList.add('te-active');
            langOptTe.classList.add('active');
            langOptEn.classList.remove('active');
        } else {
            langToggle.classList.remove('te-active');
            langOptTe.classList.remove('active');
            langOptEn.classList.add('active');
        }
    }

    // 2. Translate Logo
    document.querySelectorAll('.logo span').forEach(el => el.textContent = dict.logoText);

    // 3. Translate Header Navigation Links
    const homeLink = document.querySelector('.nav-links a[href="index.html#home"]');
    if (homeLink) homeLink.textContent = dict.navHome;
    const aboutLink = document.querySelector('.nav-links a[href="index.html#about"]');
    if (aboutLink) aboutLink.textContent = dict.navAbout;
    const howLink = document.querySelector('.nav-links a[href="index.html#how-it-works"]');
    if (howLink) howLink.textContent = dict.navHow;
    const productsLink = document.querySelector('.nav-links a[href="index.html#products"]');
    if (productsLink) productsLink.textContent = dict.navProducts;
    const farmersLink = document.querySelector('.nav-links a[href="index.html#farmers"]');
    if (farmersLink) farmersLink.textContent = dict.navFarmers;
    const galleryLink = document.querySelector('.nav-links a[href="index.html#gallery"]');
    if (galleryLink) galleryLink.textContent = dict.navGallery;
    const reviewsLink = document.querySelector('.nav-links a[href="index.html#reviews"]');
    if (reviewsLink) reviewsLink.textContent = dict.navReviews;

    // 4. Translate Footer Slogan & Column Titles
    const footerDesc = document.querySelector('footer .footer-col:nth-child(1) p');
    if (footerDesc) footerDesc.textContent = dict.footerDesc;

    const footerHeaders = document.querySelectorAll('footer .footer-col h4');
    if (footerHeaders.length >= 3) {
        footerHeaders[0].textContent = dict.footerLinks;
        footerHeaders[1].textContent = dict.footerContact;
        footerHeaders[2].textContent = dict.footerFollow;
    }

    // 5. Translate Footer Copyright Label
    const footerCopyright = document.getElementById('copyrightText');
    if (footerCopyright) footerCopyright.textContent = dict.footerCopyright;
}

// Mobile Navigation Toggle Bindings
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobileBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu automatically on item click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

// Navbar Box-shadow state on scroll
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
            } else {
                navbar.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
            }
        });
    }
}

// Clipboard copy action and elegant Toast helper for Email addresses
function setupClipboardCopy(btnId) {
    const btn = document.getElementById(btnId);
    const toast = document.getElementById('toastNotification');
    if (btn && toast) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText('farm@kshetrivafarms.com').then(() => {
                const dict = translations[currentLang];
                toast.innerHTML = `<i class="fa-solid fa-check-circle"></i> ${dict.emailCopied}`;
                toast.style.transform = "translateX(-50%) translateY(0)";
                setTimeout(() => {
                    toast.style.transform = "translateX(-50%) translateY(100px)";
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy email address: ', err);
            });
        });
    }
}

// Blog Post Switcher logic
function initBlogTabs() {
    const tab1 = document.getElementById('tabBlog1');
    const tab2 = document.getElementById('tabBlog2');
    const post1 = document.getElementById('blogPost1');
    const post2 = document.getElementById('blogPost2');
    const heroTitle = document.getElementById('blogHeroTitle');
    const heroMeta = document.getElementById('blogHeroMeta');
    
    // Sidebar related post links
    const sidebarLink1 = document.getElementById('sidebarLink1');
    const sidebarLink2 = document.getElementById('sidebarLink2');

    if (!tab1 || !tab2 || !post1 || !post2) return;

    const blogData = {
        post1: {
            title: "Why Farm-Fresh Vegetables Last Longer",
            meta: `
                <span><i class="fa-solid fa-calendar"></i> May 30, 2026</span>
                <span><i class="fa-solid fa-user"></i> By Kshetriva Farms</span>
                <span><i class="fa-solid fa-clock"></i> 4 Min Read</span>
                <span><i class="fa-solid fa-leaf"></i> Freshness & Quality</span>
            `,
            pageTitle: "Why Farm-Fresh Vegetables Last Longer | Kshetriva Farms Blog"
        },
        post2: {
            title: "How Much Pesticide Usage Is Safe in Vegetables?",
            meta: `
                <span><i class="fa-solid fa-calendar"></i> June 12, 2026</span>
                <span><i class="fa-solid fa-user"></i> By Kshetriva Farms</span>
                <span><i class="fa-solid fa-clock"></i> 5 Min Read</span>
                <span><i class="fa-solid fa-leaf"></i> Pesticide Safety</span>
            `,
            pageTitle: "How Much Pesticide Usage Is Safe in Vegetables? | Kshetriva Farms Blog"
        }
    };

    function switchBlog(postId, scroll = true) {
        if (postId === 'post1') {
            tab1.classList.add('active');
            tab2.classList.remove('active');
            post1.style.display = 'block';
            post2.style.display = 'none';
            if (heroTitle) heroTitle.textContent = blogData.post1.title;
            if (heroMeta) heroMeta.innerHTML = blogData.post1.meta;
            document.title = blogData.post1.pageTitle;
            
            if (sidebarLink1) sidebarLink1.classList.add('active-sidebar-link');
            if (sidebarLink2) sidebarLink2.classList.remove('active-sidebar-link');
            
            if (scroll) {
                const offset = document.querySelector('.blog-tabs-container').offsetTop - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        } else {
            tab1.classList.remove('active');
            tab2.classList.add('active');
            post1.style.display = 'none';
            post2.style.display = 'block';
            if (heroTitle) heroTitle.textContent = blogData.post2.title;
            if (heroMeta) heroMeta.innerHTML = blogData.post2.meta;
            document.title = blogData.post2.pageTitle;
            
            if (sidebarLink1) sidebarLink1.classList.remove('active-sidebar-link');
            if (sidebarLink2) sidebarLink2.classList.add('active-sidebar-link');

            if (scroll) {
                const offset = document.querySelector('.blog-tabs-container').offsetTop - 100;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        }
    }

    tab1.addEventListener('click', () => {
        window.location.hash = 'freshness';
    });
    tab2.addEventListener('click', () => {
        window.location.hash = 'pesticides';
    });
    
    if (sidebarLink1) {
        sidebarLink1.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = 'freshness';
        });
    }
    if (sidebarLink2) {
        sidebarLink2.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = 'pesticides';
        });
    }

    // Hash Navigation Check
    function checkHash() {
        const hash = window.location.hash;
        if (hash === '#pesticides') {
            switchBlog('post2', false);
        } else if (hash === '#freshness') {
            switchBlog('post1', false);
        }
    }

    window.addEventListener('hashchange', checkHash);
    
    // Check hash on page load
    checkHash();
}

// Initialize Page Modules on Dom Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle listener
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'te' : 'en';
            localStorage.setItem('kshetriva_lang', currentLang);
            applyLanguage();
        });
    }

    // Apply active translations dictionary on load
    applyLanguage();

    // 2. Initialize Scroll effect & Mobile Toggle
    initNavbarScroll();
    initMobileMenu();

    // 3. Setup Clipboard Copies
    setupClipboardCopy('emailContactBtn');
    setupClipboardCopy('footerEmailBtn');

    // 4. Initialize Blog Tabs Switcher
    initBlogTabs();
});
