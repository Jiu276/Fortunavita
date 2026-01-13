// Contact Information - Protected
(function() {
    'use strict';
    
    // Encoded contact information
    const contactData = {
        email: {
            // Base64 encoded: hubertarndt169996vdx@gmail.com
            parts: ['aHViZXJ0YXJuZHQxNjk5OTZ2ZHhAZ21haWwuY29t'],
            decode: function() {
                return atob(this.parts[0]);
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
    
    // Get department email
    function getDeptEmail(dept) {
        const mainEmail = getMainEmail();
        const localPart = mainEmail.split('@')[0];
        const domain = mainEmail.split('@')[1];
        // Use main email for all departments
        return mainEmail;
    }
    
    // Initialize contact information on page load
    function initContactInfo() {
        const email = getMainEmail();
        const phone = getPhone();
        
        // Replace email placeholders
        document.querySelectorAll('[data-contact="email"]').forEach(el => {
            if (el.tagName === 'A') {
                el.href = 'mailto:' + email;
                el.textContent = email;
            } else {
                el.textContent = email;
            }
        });
        
        // Replace phone placeholders
        document.querySelectorAll('[data-contact="phone"]').forEach(el => {
            if (el.tagName === 'A') {
                el.href = 'tel:' + phone.replace(/\s+/g, '');
                el.textContent = phone;
            } else {
                el.textContent = phone;
            }
        });
        
        // Replace department emails
        Object.keys(contactData.departments).forEach(dept => {
            document.querySelectorAll('[data-contact="email-' + dept + '"]').forEach(el => {
                const deptEmail = getDeptEmail(dept);
                if (el.tagName === 'A') {
                    el.href = 'mailto:' + deptEmail;
                    el.textContent = deptEmail;
                } else {
                    el.textContent = deptEmail;
                }
            });
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

