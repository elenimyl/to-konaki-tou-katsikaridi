function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        
        if (translations[lang][key]) {
            if (elem.innerHTML.includes('<br>') || translations[lang][key].includes('<br>')) {
                elem.innerHTML = translations[lang][key];
            } else {
                elem.textContent = translations[lang][key];
            }
        }
    });

    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.style.fontWeight = 'normal';
    });
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if(activeBtn) activeBtn.style.fontWeight = 'bold';
}


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'gr';
    setLanguage(savedLang);
});