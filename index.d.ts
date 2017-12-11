import { Transformer } from 'gulp-html-transform';
export interface Options {
    mimeTypes?: string[];
}
export declare const minifyInlineJson: (options?: Options) => Transformer;
