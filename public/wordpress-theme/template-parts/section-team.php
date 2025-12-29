<?php
/**
 * Team Section Template
 *
 * @package TargetGum
 */
?>

<section id="team" class="team">
    <div class="container">
        <div class="section-header">
            <h2><?php esc_html_e('Meet Our', 'targetgum'); ?> <span class="text-gradient"><?php esc_html_e('Leadership', 'targetgum'); ?></span></h2>
            <p><?php esc_html_e('The visionary minds behind TargetGum\'s success.', 'targetgum'); ?></p>
        </div>
        <div class="team-grid">
            <div class="team-card">
                <div class="team-image">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/founder-murali.jpg" alt="<?php esc_attr_e('Murali Nancharla - Founder', 'targetgum'); ?>">
                </div>
                <div class="team-info">
                    <h3>Murali Nancharla</h3>
                    <span class="team-role"><?php esc_html_e('Founder', 'targetgum'); ?></span>
                    <p><?php esc_html_e('Visionary entrepreneur with 15+ years of experience in digital marketing and business development.', 'targetgum'); ?></p>
                    <div class="team-social">
                        <a href="#" aria-label="<?php esc_attr_e('LinkedIn', 'targetgum'); ?>">in</a>
                        <a href="#" aria-label="<?php esc_attr_e('Twitter', 'targetgum'); ?>">𝕏</a>
                    </div>
                </div>
            </div>
            <div class="team-card">
                <div class="team-image">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/ceo-sai.jpg" alt="<?php esc_attr_e('Sai Nancharla - CEO', 'targetgum'); ?>">
                </div>
                <div class="team-info">
                    <h3>Sai Nancharla</h3>
                    <span class="team-role"><?php esc_html_e('CEO', 'targetgum'); ?></span>
                    <p><?php esc_html_e('Strategic leader driving innovation and growth, with expertise in performance marketing and analytics.', 'targetgum'); ?></p>
                    <div class="team-social">
                        <a href="#" aria-label="<?php esc_attr_e('LinkedIn', 'targetgum'); ?>">in</a>
                        <a href="#" aria-label="<?php esc_attr_e('Twitter', 'targetgum'); ?>">𝕏</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
