/* jshint node: true */
module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'we-admin-blog',
    environment,
    rootURL: '/admin/',
    locationType: 'hash',
    API_HOST: '',
    imageHost: '',
    i18n: {
      defaultLocale: 'en-us'
      // defaultLocale: 'pt-br'
    },

    settingsMenu: {
      links: [
      {
        icon: '<i class="fa fa-briefcase" aria-hidden="true"></i>',
        text: 'Dados do site',
        linkTo: 'settings.project'
      },
      {
        icon: '<i class="fa fa-wrench" aria-hidden="true"></i>',
        text: 'Dados do sistema',
        linkTo: 'settings.index'
      },
      {
        icon: '<i class="fa fa-tachometer" aria-hidden="true"></i>',
        text: 'Visual e tema',
        linkTo: 'settings.theme'
      },
      {
        icon: '<i class="fa fa-mixcloud" aria-hidden="true"></i>',
        text: 'Integrações',
        linkTo: 'settings.integrations'
      },
      // {
      //   icon: '<i class="fa fa-envelope-o" aria-hidden="true"></i>',
      //   text: 'Contato e email',
      //   linkTo: 'settings.email'
      // }
      ]
    },

    menuLinkSelectorComponents: [
      {
        name: 'content',
        title: 'Páginas',
        componentName: 'menu-page-selector'
      },
      {
        name: 'custom',
        title: 'Links personalizados',
        componentName: 'menu-custom-link-form'
      },
      {
        name: 'category',
        title: 'Categorias',
        componentName: 'menu-category-selector'
      },
      {
        name: 'tags',
        title: 'Tags',
        componentName: 'menu-tag-selector'
      },
      {
        name: 'user',
        title: 'Usuário',
        componentName: 'menu-user-links-selector'
      }
    ],

    adminMenu: [
      {
        icon: '<i class="fa fa-bar-chart"></i>',
        text: 'Dashboard',
        linkTo: 'index',
        permission: true
      },
      {
        icon: '<i class="fa fa-file-text"></i>',
        text: 'Páginas',
        linkTo: 'contents.index',
        plugin: 'we-plugin-page',
        permission: 'create_content'
      },
      {
        icon: '<i class="fa fa-bullhorn" aria-hidden="true"></i>',
        text: 'Notícias',
        linkTo: 'news.index',
        plugin: 'we-plugin-news',
        permission: 'create_news'
      },
      {
        icon: '<i class="fa fa-file-text"></i>',
        text: 'Artigos / posts',
        linkTo: 'articles.index',
        permission: 'create_article'
      },
      {
        icon: '<i class="fa fa-product-hunt" aria-hidden="true"></i>',
        text: 'Portifólio',
        linkTo: 'portfolio.index',
        plugin: 'we-plugin-portfolio',
        permission: 'create_portfolio'
      },
      {
        icon: '<i class="fa fa-slideshare"></i>',
        text: 'Slideshow',
        linkTo: 'slides.index',
        plugin: 'we-plugin-slideshow',
        permission: 'create_slide'
      },
      {
        icon: '<i class="fa fa-envelope-o" aria-hidden="true"></i>',
        text: 'Mensagens de contato',
        linkTo: 'site-contacts.index',
        permission: 'update_site-contact'
      },
      {
        icon: '<i class="fa fa-briefcase" aria-hidden="true"></i>',
        text: 'Dados do site',
        linkTo: 'settings.project',
        permission: 'system_settings_update'
      },
      {
        icon: '<i class="fa fa-bars"></i>',
        text: 'Menus e links',
        linkTo: 'menus.index',
        roles: ['editor']
      },
      {
        icon: '<i class="fa fa-tags"></i>',
        text: 'Categorias e Tags',
        linkTo: 'vocabulary',
        roles: ['editor']
      },
      {
        icon: '<i class="fa fa-users"></i>',
        text: 'Usuários',
        linkTo: 'users.index',
        permission: 'find_user'
      },
      {
        icon: '<i class="fa fa-envelope" aria-hidden="true"></i>',
        text: 'Templates de email',
        linkTo: 'email-templates.index',
        permission: 'create_email-template'
      },
      {
        icon: '<i class="fa fa-wrench"></i>',
        text: 'Configurações',
        linkTo: 'settings.index',
        permission: 'system_settings_update'
      },
      {
        icon: '<i class="fa fa-globe" aria-hidden="true"></i>',
        text: 'Tradução',
        linkTo: 't.index',
        permission: 'create_t'
      }
    ],

    EmberENV: {
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    'ember-cli-notifications': {
      icons: 'bootstrap'
    },
    pace: {
      // addon-specific options to configure theme
      theme: 'flash',
      color: 'green',
      // pace-specific options
      // learn more on http://github.hubspot.com/pace/#configuration
      //           and https://github.com/HubSpot/pace/blob/master/pace.coffee#L1-L72
      catchupTime: 50,
      initialRate: 0.01,
      minTime: 100,
      ghostTime: 50,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: true,
      restartOnPushState: true,
      restartOnRequestAfter: 500,
      target: 'body',
      elements: {
        checkInterval: 100,
        selectors: ['body', '.ember-view']
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PATCH', 'PUT'],
        // trackWebSockets: true,
        // ignoreURLs: []
      }
    },
    tinyMCE:{
      version: 4
    }
  };

  ENV['ember-simple-auth'] = {
    identificationField: 'email',
    passwordField: 'password',
    authenticationRoute: 'login',
    routeAfterAuthentication: 'index',
    routeIfAlreadyAuthenticated: 'index',
    serverTokenEndpoint: '/auth/grant-password/authenticate',


    authorizer: 'authorizer:custom',
    store: 'simple-auth-session-store:cookie', // optional
    crossOriginWhitelist: [( process.env.API_HOST || 'http://localhost:4000' )]
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    if (!ENV.APP) {
      ENV.APP = {};
    }
    ENV.APP.usingCors = false;
    ENV.APP.corsWithCreds = false;
    ENV.APP.apiURL = null;

    ENV.API_HOST = ( process.env.API_HOST || 'http://localhost:4000' );
    ENV.imageHost = ( process.env.imageHost || process.env.API_HOST || 'http://localhost:4000' );
    ENV.GLOBAL_HOST = 'http://localhost:5102';
    ENV['ember-simple-auth'].serverTokenEndpoint = ENV['API_HOST'] + ENV['ember-simple-auth'].serverTokenEndpoint;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/admin';
    ENV.imageHost = '';
    ENV.API_HOST = '';
    ENV.GLOBAL_HOST = 'https://shop.linkysystems.com';
    ENV['ember-simple-auth'].serverTokenEndpoint = ENV['API_HOST'] + ENV['ember-simple-auth'].serverTokenEndpoint;
  }

  return ENV;
};
