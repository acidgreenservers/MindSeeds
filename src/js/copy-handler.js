/**
 * Copy Handler Module
 * Uses event delegation for efficient click handling on seed pills.
 */

const CONFIG = {
    selector: '.seed-pill',
    containerSelector: '.families',
    copiedClass: 'copied',
    feedbackDuration: 500,
    toastClass: 'copy-toast',
    toastText: 'Copied'
};

/**
 * Creates and displays a temporary toast above the clicked element.
 * @param {HTMLElement} pill
 */
const showToast = (pill) => {
    const rect = pill.getBoundingClientRect();
    const toast = document.createElement('div');

    toast.className = CONFIG.toastClass;
    toast.innerText = CONFIG.toastText;

    // Position toast centered above the pill
    toast.style.left = `${rect.left + rect.width / 2}px`;
    toast.style.top = `${rect.top}px`;

    document.body.appendChild(toast);

    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, 1000);
};

/**
 * Strips leading and trailing quotation marks from a string.
 * @param {string} text
 * @returns {string}
 */
const sanitizeText = (text) => text.replace(/^"|"$/g, '');

/**
 * Copies text to clipboard with a fallback for non-secure contexts.
 * @param {string} text
 * @returns {Promise<void>}
 */
const copyToClipboard = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback copy failed', err);
        }
        document.body.removeChild(textArea);
    }
};

/**
 * Handles the click event via delegation.
 * @param {MouseEvent} event
 */
const handleSeedClick = async (event) => {
    const pill = event.target.closest(CONFIG.selector);

    // Ensure the pill is inside a .seed-preview (the 3 family cards)
    if (!pill || !pill.closest('.seed-preview')) return;

    const text = sanitizeText(pill.innerText);

    try {
        await copyToClipboard(text);

        // Visual Feedback
        pill.classList.add(CONFIG.copiedClass);
        showToast(pill);

        setTimeout(() => {
            pill.classList.remove(CONFIG.copiedClass);
        }, CONFIG.feedbackDuration);

    } catch (err) {
        console.error('Failed to copy seed:', err);
    }
};

/**
 * Initializes the copy handler.
 */
const init = () => {
    const container = document.querySelector(CONFIG.containerSelector);
    if (container) {
        container.addEventListener('click', handleSeedClick);
    } else {
        console.warn('Copy handler: Container not found', CONFIG.containerSelector);
    }
};

// Self-initialize if running in a browser environment
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

export default { init };
