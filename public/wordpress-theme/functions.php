<?php
/**
 * TargetGum Theme Functions
 *
 * @package TargetGum
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function targetgum_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 48,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'targetgum'),
        'footer'  => __('Footer Menu', 'targetgum'),
    ));
}
add_action('after_setup_theme', 'targetgum_setup');

/**
 * Enqueue scripts and styles
 */
function targetgum_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'targetgum-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'targetgum-style',
        get_stylesheet_uri(),
        array(),
        '1.0.0'
    );

    // Main script
    wp_enqueue_script(
        'targetgum-script',
        get_template_directory_uri() . '/js/main.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'targetgum_scripts');

/**
 * Custom Walker for Navigation Menu
 */
class TargetGum_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<ul class="sub-menu">';
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $output .= '<li>';
        $output .= '<a href="' . esc_url($item->url) . '">' . esc_html($item->title) . '</a>';
    }

    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= '</li>';
    }
}

/**
 * Theme Customizer Settings
 */
function targetgum_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('targetgum_hero', array(
        'title'    => __('Hero Section', 'targetgum'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default'           => 'The Growth-Driven Marketing Machine',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label'   => __('Hero Title', 'targetgum'),
        'section' => 'targetgum_hero',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'Since 2018, we at TargetGum have helped hundreds of businesses scale their revenue with precision-targeted digital marketing strategies.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_subtitle', array(
        'label'   => __('Hero Subtitle', 'targetgum'),
        'section' => 'targetgum_hero',
        'type'    => 'textarea',
    ));

    // Stats
    $wp_customize->add_setting('stat_projects', array(
        'default'           => '500+',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('stat_projects', array(
        'label'   => __('Projects Stat', 'targetgum'),
        'section' => 'targetgum_hero',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stat_revenue', array(
        'default'           => '150M+',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('stat_revenue', array(
        'label'   => __('Revenue Stat', 'targetgum'),
        'section' => 'targetgum_hero',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('stat_clients', array(
        'default'           => '200+',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('stat_clients', array(
        'label'   => __('Clients Stat', 'targetgum'),
        'section' => 'targetgum_hero',
        'type'    => 'text',
    ));

    // Contact Section
    $wp_customize->add_section('targetgum_contact', array(
        'title'    => __('Contact Info', 'targetgum'),
        'priority' => 40,
    ));

    $wp_customize->add_setting('contact_email', array(
        'default'           => 'hello@targetgum.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label'   => __('Email', 'targetgum'),
        'section' => 'targetgum_contact',
        'type'    => 'email',
    ));

    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+91 98765 43210',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label'   => __('Phone', 'targetgum'),
        'section' => 'targetgum_contact',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('contact_address', array(
        'default'           => 'Hyderabad, Telangana, India',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('contact_address', array(
        'label'   => __('Address', 'targetgum'),
        'section' => 'targetgum_contact',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'targetgum_customize_register');

/**
 * Get theme mod with default
 */
function targetgum_get_option($key, $default = '') {
    return get_theme_mod($key, $default);
}
