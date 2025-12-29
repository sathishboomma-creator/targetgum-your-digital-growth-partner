<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navigation -->
<header class="navbar">
    <nav class="container nav-container">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <img src="<?php echo esc_url(get_template_directory_uri()); ?>/images/logo.png" alt="<?php bloginfo('name'); ?>" height="48">
            <?php endif; ?>
        </a>
        
        <?php if (has_nav_menu('primary')) : ?>
            <ul class="nav-links">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'items_wrap'     => '%3$s',
                    'walker'         => new TargetGum_Walker_Nav_Menu(),
                ));
                ?>
            </ul>
        <?php else : ?>
            <ul class="nav-links">
                <li><a href="#services"><?php esc_html_e('Services', 'targetgum'); ?></a></li>
                <li><a href="#portfolio"><?php esc_html_e('Portfolio', 'targetgum'); ?></a></li>
                <li><a href="#about"><?php esc_html_e('About', 'targetgum'); ?></a></li>
                <li><a href="#team"><?php esc_html_e('Team', 'targetgum'); ?></a></li>
                <li><a href="#contact"><?php esc_html_e('Contact', 'targetgum'); ?></a></li>
            </ul>
        <?php endif; ?>
        
        <a href="#contact" class="btn btn-primary"><?php esc_html_e('Get Started', 'targetgum'); ?></a>
        
        <button class="mobile-menu-btn" aria-label="<?php esc_attr_e('Toggle menu', 'targetgum'); ?>">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
</header>
