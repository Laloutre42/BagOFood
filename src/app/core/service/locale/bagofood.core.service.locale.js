(function () {
  'use strict';

  angular.module('bagofood.core.service.locale', [])
    .service('LocaleService', ['$log', '$translate', 'LOCALES', '$rootScope', 'tmhDynamicLocale',
      function ($log, $translate, LOCALES, $rootScope, tmhDynamicLocale) {

        // PREPARING LOCALES INFO
        var localesObj = LOCALES.locales;

        // locales and locales display names
        var _LOCALES = Object.keys(localesObj);
        if (!_LOCALES || _LOCALES.length === 0) {
          $log.error('There are no _LOCALES provided');
        }
        var _LOCALES_DISPLAY_NAMES = [];
        _LOCALES.forEach(function (locale) {
          _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
        });

        // STORING CURRENT LOCALE
        var currentLocale = $translate.proposedLanguage();// because of async loading

        // METHODS
        var checkLocaleIsValid = function (locale) {
          return _LOCALES.indexOf(locale) !== -1;
        };

        var setLocale = function (locale) {

          if (!checkLocaleIsValid(locale)) {
            $log.error('Locale name "' + locale + '" is invalid');
            return;
          }

          startLoadingAnimation();
          currentLocale = locale;// updating current locale

          // asking angular-translate to load and apply proper translations
          $translate.use(locale);
        };

        /**
         * Stop application loading animation when translations are loaded
         */
        var $html = angular.element('html');
        var LOADING_CLASS = 'app-loading';

        function startLoadingAnimation() {
          $html.addClass(LOADING_CLASS);
        }

        function stopLoadingAnimation() {
          $html.removeClass(LOADING_CLASS);
        }

        // EVENTS
        // on successful applying translations by angular-translate
        $rootScope.$on('$translateChangeSuccess', function (event, data) {
          document.documentElement.setAttribute('lang', data.language);// sets "lang" attribute to html

          // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
          tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
        });

        $rootScope.$on('$localeChangeSuccess', function () {
          stopLoadingAnimation();
        });

        return {
          getLocaleDisplayName: function () {
            return localesObj[currentLocale];
          },
          setLocaleByDisplayName: function (localeDisplayName) {
            setLocale(
              _LOCALES[
                _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName)// get locale index
                ]
            );
          },
          getLocalesDisplayNames: function () {
            return _LOCALES_DISPLAY_NAMES;
          }
        };

      }]);

})();
