import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.css';
import './style.css';

registerBlockType('schriftco/wrapper', {
    edit: () => {
        return (
            <div { ...useBlockProps() }>
                <InnerBlocks />
            </div>
        );
    },
    save: () => {
        return (
            <div { ...useBlockProps.save() }>
                <InnerBlocks.Content />
            </div>
        );
    }
});
