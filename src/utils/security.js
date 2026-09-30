/**
 * Security Utility Module for SMART KARA DESIGN
 * Provides input sanitization, safe link navigation, XSS protection, and validation.
 */

/**
 * Sanitizes input string to prevent XSS and script injections.
 * @param {string} str - Raw user input.
 * @param {number} [maxLength=500] - Optional maximum string length.
 * @returns {string} Sanitized clean string.
 */
export function sanitizeInput(str, maxLength = 500) {
  if (typeof str !== 'string') return '';
  const trimmed = str.slice(0, maxLength);
  return trimmed
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

/**
 * Validates whether a phone string contains a valid phone structure.
 * @param {string} phone - Input phone string.
 * @returns {boolean} True if valid phone pattern.
 */
export function validatePhone(phone) {
  if (typeof phone !== 'string') return false;
  // Accepts optional +, digits, spaces, hyphens, parentheses (length 8-20)
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]{6,16}$/;
  return phoneRegex.test(phone.trim());
}

/**
 * Safely opens external URLs in a new tab without window.opener vulnerability (reverse tabnabbing).
 * Protects against javascript: or data: URI schemes.
 * @param {string} url - Target URL.
 */
export function safeOpenWindow(url) {
  if (!url || typeof url !== 'string') return;
  const cleanUrl = url.trim();
  // Ensure protocol is valid HTTPS or WhatsApp API or tel/mailto
  if (/^(https:\/\/wa\.me\/|https:\/\/|mailto:|tel:)/i.test(cleanUrl)) {
    window.open(cleanUrl, '_blank', 'noopener,noreferrer');
  }
}

