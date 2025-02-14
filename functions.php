<?php

/**
 * 
 * Theme Enqueue
 */
function schriftco_enqueue_styles() {
    $version = wp_get_theme()->get('Version'); 

    wp_enqueue_style(
        'twenty-twenty-five-style', 
        get_template_directory_uri() . '/style.css',
        [],
        $version // Use theme version
    );

    wp_enqueue_style(
        'altame-fonts',
        'https://cdn.schrift.co/fonts/neue/altame-serif/stylesheet.css',
        [],
        null
    );
    
    // Enqueue the child theme's style
    wp_enqueue_style(
        'twenty-twenty-five-child-style', 
        get_stylesheet_uri(), 
        ['twenty-twenty-five-style'], 
        $version // Use theme version
    );
}

add_action('wp_enqueue_scripts', 'schriftco_enqueue_styles');



/**
 * 
 * Fonts in Block editor
 */
function schriftco_enqueue_block_editor_assets() {
    $version = wp_get_theme()->get('Version'); 
    wp_enqueue_style(
        'altame-fonts-editor', 
        'https://cdn.schrift.co/fonts/neue/altame-serif/stylesheet.css', 
        [], 
        $version
    );
}
add_action('enqueue_block_editor_assets', 'schriftco_enqueue_block_editor_assets');


/**
 * Custom Blocks Enqueue
 */
function schriftco_register_blocks() {
    $block_path = get_theme_file_path( 'build/blocks/wrapper' );
    register_block_type( $block_path );
}
add_action( 'init', 'schriftco_register_blocks' );