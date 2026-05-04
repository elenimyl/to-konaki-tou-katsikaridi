function setLanguage(lang) {
    // Αποθήκευση της επιλογής στον browser
    localStorage.setItem('preferredLanguage', lang);
    
    // Εύρεση όλων των στοιχείων με data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        
        if (translations[lang][key]) {
            // Αν το στοιχείο περιέχει HTML (όπως τα <br> στο footer), χρησιμοποιούμε innerHTML, αλλιώς textContent
            if (elem.innerHTML.includes('<br>') || translations[lang][key].includes('<br>')) {
                elem.innerHTML = translations[lang][key];
            } else {
                elem.textContent = translations[lang][key];
            }
        }
    });

    // Προαιρετικά: Αλλαγή εμφάνισης των κουμπιών (έντονα γράμματα στην ενεργή γλώσσα)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.style.fontWeight = 'normal';
    });
    const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if(activeBtn) activeBtn.style.fontWeight = 'bold';
}

// Όταν φορτώνει η σελίδα, έλεγξε αν υπάρχει αποθηκευμένη γλώσσα, αλλιώς βάλε Ελληνικά ('gr')
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'gr';
    setLanguage(savedLang);
});