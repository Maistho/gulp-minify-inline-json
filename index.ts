import { Transformer } from 'gulp-html-transform'

const mimeTypes = [
  'application/json',
  'application/ld+json'
]

export interface Options {
  mimeTypes?: string[];
}

export const minifyInlineJson = (options: Options = {}): Transformer => {
  if (!options.mimeTypes) {
    options.mimeTypes = mimeTypes
  }
  return async ($: CheerioStatic) => {

    $(options.mimeTypes!.map((type) => `script[type="${type}"]`).join(',')).each(function (this: any) {
      const script = $(this)
      const scriptText = script.contents().text().trim()

      if (scriptText.length) {
        try {
          script.text(JSON.stringify(JSON.parse(scriptText)))
        } catch (e) {
          console.warn('Could not minify script')
        }
      }
    })
  }
}
