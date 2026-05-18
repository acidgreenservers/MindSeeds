import { useState, useCallback } from 'react';

export const useClipboard = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback(async (text: string, id: string) => {
    const sanitizeText = (t: string) => t.replace(/^"|"$/g, '');
    const cleanText = sanitizeText(text);

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(cleanText);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = cleanText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 800);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

  return { copy, copiedId };
};
