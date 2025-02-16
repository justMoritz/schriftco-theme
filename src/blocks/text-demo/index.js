import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import './editor.scss';
import './style.scss';


registerBlockType( 'schriftco/text-demo', {
  title: 'Text Demo Block',
  category: 'widgets',
  icon: 'editor-alignleft',
  attributes: {
    text: {
      type: 'string',
      default: 'Type your text here'
    },
    fontFamily: {
      type: 'string',
      default: 'Arial, sans-serif'
    }
  },

  edit( { attributes, setAttributes } ) {
    const { text, fontFamily } = attributes;

    const handleFontChange = ( event ) => {
      setAttributes( { fontFamily: event.target.value } );
    };

    return (
      <div style={ { fontFamily } }>
        <textarea
          value={ text }
          onChange={ ( e ) => setAttributes( { text: e.target.value } ) }
          placeholder="Type something to preview font..."
        />
      </div>
    );
  },

  save( { attributes } ) {
    const { text, fontFamily } = attributes;

    return (
      <div style={ { fontFamily } }>
        <textarea
          value={ text }
          onChange={ ( e ) => setAttributes( { text: e.target.value } ) }
          placeholder="Type something to preview font..."
        />
      </div>
    );
  }
} );
