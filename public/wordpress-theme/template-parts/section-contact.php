<?php
/**
 * Contact Section Template
 *
 * @package TargetGum
 */
?>

<section id="contact" class="contact">
    <div class="container">
        <div class="contact-grid">
            <div class="contact-info">
                <h2><?php esc_html_e("Let's", 'targetgum'); ?> <span class="text-gradient"><?php esc_html_e('Connect', 'targetgum'); ?></span></h2>
                <p><?php esc_html_e('Ready to accelerate your growth? Get in touch and let\'s discuss how we can help transform your digital presence.', 'targetgum'); ?></p>
                <div class="contact-details">
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div>
                            <strong><?php esc_html_e('Office Address', 'targetgum'); ?></strong>
                            <p><?php echo nl2br(esc_html(get_theme_mod('contact_address', "Hyderabad, Telangana\nIndia"))); ?></p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">✉️</div>
                        <div>
                            <strong><?php esc_html_e('Email Us', 'targetgum'); ?></strong>
                            <a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'hello@targetgum.com')); ?>"><?php echo esc_html(get_theme_mod('contact_email', 'hello@targetgum.com')); ?></a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div>
                            <strong><?php esc_html_e('Call Us', 'targetgum'); ?></strong>
                            <a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', get_theme_mod('contact_phone', '+91 98765 43210'))); ?>"><?php echo esc_html(get_theme_mod('contact_phone', '+91 98765 43210')); ?></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-form-wrapper">
                <h3><?php esc_html_e('Send Us a Message', 'targetgum'); ?></h3>
                <form class="contact-form" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post">
                    <input type="hidden" name="action" value="targetgum_contact">
                    <?php wp_nonce_field('targetgum_contact_nonce', 'contact_nonce'); ?>
                    
                    <div class="form-group">
                        <label for="name"><?php esc_html_e('Your Name', 'targetgum'); ?></label>
                        <input type="text" id="name" name="name" placeholder="<?php esc_attr_e('John Doe', 'targetgum'); ?>" required>
                    </div>
                    <div class="form-group">
                        <label for="email"><?php esc_html_e('Email Address', 'targetgum'); ?></label>
                        <input type="email" id="email" name="email" placeholder="<?php esc_attr_e('john@example.com', 'targetgum'); ?>" required>
                    </div>
                    <div class="form-group">
                        <label for="phone"><?php esc_html_e('Phone Number', 'targetgum'); ?></label>
                        <input type="tel" id="phone" name="phone" placeholder="<?php esc_attr_e('+91 98765 43210', 'targetgum'); ?>">
                    </div>
                    <div class="form-group">
                        <label for="message"><?php esc_html_e('Your Message', 'targetgum'); ?></label>
                        <textarea id="message" name="message" placeholder="<?php esc_attr_e('Tell us about your project...', 'targetgum'); ?>" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-full"><?php esc_html_e('Send Message', 'targetgum'); ?></button>
                </form>
            </div>
        </div>
    </div>
</section>
