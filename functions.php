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
        $version
    );

    wp_enqueue_style(
        'altame-fonts',
        'https://cdn.schrift.co/fonts/neue/altame-serif/stylesheet.css',
        [],
        $version
    );
    
    // Enqueue the child theme's style
    wp_enqueue_style(
        'twenty-twenty-five-child-style', 
        get_stylesheet_uri(), 
        ['twenty-twenty-five-style'], 
        $version 
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

    register_block_type( get_theme_file_path( 'build/blocks/wrapper' ) );
    register_block_type( get_theme_file_path( 'build/blocks/text-demo' ) );
}
add_action( 'init', 'schriftco_register_blocks' );


function schriftco_enqueue_custom_styles() {
    $version = wp_get_theme()->get('Version'); 
    wp_enqueue_style(
        'new-blocks-styles', 
        get_stylesheet_directory_uri() . '/build/styles.css', 
        array(),
        $version,
        'all' 
    );
}
add_action('wp_enqueue_scripts', 'schriftco_enqueue_custom_styles');

// Enqueue styles for the block editor (only when in the block editor)
function schriftco_enqueue_block_editor_custom_styles() {
    $version = wp_get_theme()->get('Version'); 
    wp_enqueue_style(
        'new-blocks-editor-styles', 
        get_stylesheet_directory_uri() . '/build/editor.css', 
        array(), 
        $version,
        'all' 
    );
}
add_action('enqueue_block_assets', 'schriftco_enqueue_block_editor_custom_styles');
