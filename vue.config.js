import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin';
import { VuetifyProgressiveModule } from 'vuetify-loader';

export function chainWebpack(config) {
  config.resolve.alias.set('vuetify/lib', 'vuetify/es5/components');
  config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
  config.module
    .rule('vue')
    .use('vue-loader')
    .loader('vue-loader')
    .tap((options) => {
      options.compilerOptions.modules = [VuetifyProgressiveModule];
      return options;
    });
  const imagesRule = config.module.rule('images');
  imagesRule.uses.clear();
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
    .oneOf('progressiveImages')
    .test(/\.(png|jpe?g|gif)$/)
    .resourceQuery(/vuetify-preload/)
    .use('progressiveLoader')
    .loader('vuetify-loader/progressive-loader')
    .end()
    .use('notProgressive')
    .loader('url-loader')
    .options({ limit: 8000 })
    .end();
  config.module
    .rule('images')
    .oneOf('imagesOther')
    .merge({ loader: 'url-loader', options: { limit: 8000 } });
}
