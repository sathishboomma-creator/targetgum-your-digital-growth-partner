<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>">
                <?php endif; ?>
                <p><?php esc_html_e('Driving business growth through data-driven digital marketing strategies since 2018.', 'targetgum'); ?></p>
                <div class="social-links">
                    <a href="#" aria-label="<?php esc_attr_e('LinkedIn', 'targetgum'); ?>">in</a>
                    <a href="#" aria-label="<?php esc_attr_e('Twitter', 'targetgum'); ?>">𝕏</a>
                    <a href="#" aria-label="<?php esc_attr_e('Instagram', 'targetgum'); ?>">📷</a>
                </div>
            </div>
            
            <div class="footer-links">
                <h4><?php esc_html_e('Services', 'targetgum'); ?></h4>
                <ul>
                    <li><a href="#services"><?php esc_html_e('Performance Marketing', 'targetgum'); ?></a></li>
                    <li><a href="#services"><?php esc_html_e('SEO & Content', 'targetgum'); ?></a></li>
                    <li><a href="#services"><?php esc_html_e('Social Media', 'targetgum'); ?></a></li>
                    <li><a href="#services"><?php esc_html_e('Analytics', 'targetgum'); ?></a></li>
                </ul>
            </div>
            
            <div class="footer-links">
                <h4><?php esc_html_e('Company', 'targetgum'); ?></h4>
                <ul>
                    <li><a href="#about"><?php esc_html_e('About Us', 'targetgum'); ?></a></li>
                    <li><a href="#team"><?php esc_html_e('Our Team', 'targetgum'); ?></a></li>
                    <li><a href="#portfolio"><?php esc_html_e('Case Studies', 'targetgum'); ?></a></li>
                    <li><a href="#contact"><?php esc_html_e('Contact', 'targetgum'); ?></a></li>
                </ul>
            </div>
            
            <div class="footer-links">
                <h4><?php esc_html_e('Contact', 'targetgum'); ?></h4>
                <ul>
                    <li><?php echo esc_html(get_theme_mod('contact_address', 'Hyderabad, Telangana, India')); ?></li>
                    <li><a href="mailto:<?php echo esc_attr(get_theme_mod('contact_email', 'hello@targetgum.com')); ?>"><?php echo esc_html(get_theme_mod('contact_email', 'hello@targetgum.com')); ?></a></li>
                    <li><a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', get_theme_mod('contact_phone', '+91 98765 43210'))); ?>"><?php echo esc_html(get_theme_mod('contact_phone', '+91 98765 43210')); ?></a></li>
                </ul>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('All rights reserved.', 'targetgum'); ?></p>
            <div class="footer-bottom-links">
                <a href="#"><?php esc_html_e('Privacy Policy', 'targetgum'); ?></a>
                <a href="#"><?php esc_html_e('Terms of Service', 'targetgum'); ?></a>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
