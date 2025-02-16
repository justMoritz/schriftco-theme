import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';
import './style.scss';

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
