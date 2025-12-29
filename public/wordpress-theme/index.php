<?php
/**
 * Main Template File
 *
 * @package TargetGum
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-container">
        <div class="hero-content">
            <h1><?php echo wp_kses_post(str_replace('Marketing Machine', '<span class="text-gradient">Marketing Machine</span>', get_theme_mod('hero_title', 'The Growth-Driven Marketing Machine'))); ?></h1>
            <p class="hero-subtitle"><?php echo esc_html(get_theme_mod('hero_subtitle', 'Since 2018, we at TargetGum have helped hundreds of businesses scale their revenue with precision-targeted digital marketing strategies.')); ?></p>
            <div class="hero-buttons">
                <a href="#contact" class="btn btn-primary btn-lg"><?php esc_html_e('Start Your Campaign →', 'targetgum'); ?></a>
                <a href="#portfolio" class="btn btn-outline btn-lg"><?php esc_html_e('View Our Work', 'targetgum'); ?></a>
            </div>
            <div class="hero-stats">
                <div class="stat">
                    <span class="stat-value"><?php echo esc_html(get_theme_mod('stat_projects', '500+')); ?></span>
                    <span class="stat-label"><?php esc_html_e('Projects Delivered', 'targetgum'); ?></span>
                </div>
                <div class="stat">
                    <span class="stat-value"><?php echo esc_html(get_theme_mod('stat_revenue', '150M+')); ?></span>
                    <span class="stat-label"><?php esc_html_e('Revenue Generated', 'targetgum'); ?></span>
                </div>
                <div class="stat">
                    <span class="stat-value"><?php echo esc_html(get_theme_mod('stat_clients', '200+')); ?></span>
                    <span class="stat-label"><?php esc_html_e('Happy Clients', 'targetgum'); ?></span>
                </div>
            </div>
        </div>
        <div class="hero-dashboard">
            <div class="dashboard-card">
                <div class="dashboard-header">
                    <div class="dashboard-dots">
                        <span class="dot red"></span>
                        <span class="dot yellow"></span>
                        <span class="dot green"></span>
                    </div>
                </div>
                <div class="dashboard-metrics">
                    <div class="metric">
                        <span class="metric-icon">📈</span>
                        <span class="metric-value">+340%</span>
                        <span class="metric-label"><?php esc_html_e('ROI Growth', 'targetgum'); ?></span>
                    </div>
                    <div class="metric">
                        <span class="metric-icon">👥</span>
                        <span class="metric-value">12.5K</span>
                        <span class="metric-label"><?php esc_html_e('New Leads', 'targetgum'); ?></span>
                    </div>
                    <div class="metric">
                        <span class="metric-icon">🎯</span>
                        <span class="metric-value">89%</span>
                        <span class="metric-label"><?php esc_html_e('Conversion', 'targetgum'); ?></span>
                    </div>
                </div>
                <div class="dashboard-chart">
                    <div class="chart-bars">
                        <div class="bar" style="height: 30%"></div>
                        <div class="bar" style="height: 45%"></div>
                        <div class="bar bar-primary" style="height: 60%"></div>
                        <div class="bar" style="height: 40%"></div>
                        <div class="bar bar-primary" style="height: 75%"></div>
                        <div class="bar bar-primary" style="height: 90%"></div>
                        <div class="bar bar-primary" style="height: 100%"></div>
                    </div>
                    <div class="chart-labels">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_template_part('template-parts/section', 'services'); ?>
<?php get_template_part('template-parts/section', 'portfolio'); ?>
<?php get_template_part('template-parts/section', 'about'); ?>
<?php get_template_part('template-parts/section', 'team'); ?>
<?php get_template_part('template-parts/section', 'contact'); ?>

<?php
get_footer();
