/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
// import TableEditing from '@ckeditor/ckeditor5-table/src/tableediting';
// import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Code,
	Strikethrough,
	Subscript,
	Superscript,
	Italic,
	Underline,
	BlockQuote,
	CKFinder,
	EasyImage,
	Image,
	ImageCaption,
	ImageStyle,
	ImageResize,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	MediaEmbed,
	Table,
	TableToolbar,
	FontSize,
	FontColor,
	FontBackgroundColor,
	HorizontalLine,
	TableCellProperties
];

const customColorPalette = [
    {
        color: 'hsl(4, 90%, 58%)',
        label: 'Red'
    },
    {
        color: 'hsl(340, 82%, 52%)',
        label: 'Pink'
    },
    {
        color: 'hsl(291, 64%, 42%)',
        label: 'Purple'
    },
    {
        color: 'hsl(262, 52%, 47%)',
        label: 'Deep Purple'
    },
    {
        color: 'hsl(231, 48%, 48%)',
        label: 'Indigo'
    },
    {
        color: 'hsl(207, 90%, 54%)',
        label: 'Blue'
    },

    // ...
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'fontsize',
			'fontcolor',
			'fontbackgroundcolor',
			'|',
			'bold',
			'italic',
			'underline',
			'|',
			'ckfinder',
			'link',
			'mediaEmbed',
			'insertTable',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'strikethrough',
			'subscript',
			'superscript',
			'|',
			'horizontalline',
			'blockQuote',
			'code',
			'|',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageResize',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
		],
		
		// Set the palettes for tables.
		tableProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		},

		// Set the palettes for table cells.
		tableCellProperties: {
			borderColors: customColorPalette,
			backgroundColors: customColorPalette
		}
	},
	fontSize: {
		options: [
			9,
			11,
			13,
			'default',
			17,
			19,
			21
		],
		supportAllValues: true
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
