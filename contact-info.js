// Contact Information - Protected
(function() {
    'use strict';
    
    // Encoded contact information
    const contactData = {
        email: {
            // Base64 encoded: hubertarndt169996vdx@gmail.com
            parts: ['aHViZXJ0YXJuZHQxNjk5OTZ2ZHhAZ21haWwuY29t'],
            decoded: null,
            decode: function() {
                // Cache to avoid repeated atob work
                if (!this.decoded) {
                    this.decoded = atob(this.parts.join(''));
                }
                return this.decoded;
            }
        },
        phone: {
            // Split and encoded: 13958990266
            parts: ['+86', '139', '5899', '0266'],
            format: function() {
                return this.parts[0] + ' ' + this.parts[1] + ' ' + this.parts[2] + this.parts[3];
            }
        },
        // Department emails (using main email for all departments)
        departments: {
            support: 'support',
            info: 'info',
            orders: 'orders',
            returns: 'returns',
            exchanges: 'exchanges',
            shipping: 'shipping',
            privacy: 'privacy',
            legal: 'legal',
            partners: 'partners',
            dpo: 'dpo'
        }
    };
    
    // Get main email
    function getMainEmail() {
        return contactData.email.decode();
    }
    
    // Get formatted phone
    function getPhone() {
        return contactData.phone.format();
    }
    
    // Get department email (currently same as main; kept for future split logic)
    function getDeptEmail() {
        return getMainEmail();
    }
    
    function updateElements(selector, value, makeHref) {
        document.querySelectorAll(selector).forEach(el => {
            if (el.tagName === 'A') {
                el.href = makeHref ? makeHref(value) : el.href;
            }
            el.textContent = value;
        });
    }
    
    // Initialize contact information on page load
    function initContactInfo() {
        const email = getMainEmail();
        const phone = getPhone();
        const telValue = phone.replace(/\s+/g, '');
        
        updateElements('[data-contact="email"]', email, v => 'mailto:' + v);
        updateElements('[data-contact="phone"]', phone, () => 'tel:' + telValue);
        
        Object.keys(contactData.departments).forEach(dept => {
            const deptEmail = getDeptEmail(dept);
            updateElements(`[data-contact="email-${dept}"]`, deptEmail, v => 'mailto:' + v);
        });
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initContactInfo);
    } else {
        initContactInfo();
    }
    
    // Export functions for manual use
    window.getContactEmail = getMainEmail;
    window.getContactPhone = getPhone;
    window.getContactDeptEmail = getDeptEmail;
})();

