class I18n {
    constructor() {
        this.translations = {};
        this.currentLang = localStorage.getItem('preferred-language') || 'ja';
    }

    async loadTranslations() {
        try {
            const response = await fetch(`/locales/${this.currentLang}.yml`);
            const yamlText = await response.text();
            this.translations = jsyaml.load(yamlText);
            this.updateContent();
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    get(key) {
        return key.split('.').reduce((obj, k) => obj && obj[k], this.translations);
    }

    updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.get(key);
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.innerHTML = translation;
                }
            }
        });
    }

    switchLanguage(lang) {
        if (this.currentLang !== lang) {
            this.currentLang = lang;
            localStorage.setItem('preferred-language', lang);
            document.body.setAttribute('data-lang', lang);
            this.loadTranslations();
        }
    }
}

// Khởi tạo và sử dụng
const i18n = new I18n();
document.addEventListener('DOMContentLoaded', () => {
    i18n.loadTranslations();
}); 