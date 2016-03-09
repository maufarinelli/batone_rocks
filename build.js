(function(angular) {
    'use strict';

    angular.module('i18n', []);
})(window.angular);
(function(angular) {
    'use strict';

    angular.module('i18n')
        .factory('enText', function() {
            return {
                'title.site': 'Batone.rocks - Songs, texts and stories of Batone',

                'menu.albums': 'Albums',
                'menu.videos': 'Videos',
                'menu.eu': 'About me',
                'menu.contact': 'Contact',

                'eu.text.first': 'I am a eco-anarcho-humanist, born and grew up in southwestern Brazil.',
                'eu.text.second': 'I participated in several musical groups, always as singer / songwriter such as The Fantoches, The Hungry Indians Cave and Loboguara.',
                'eu.text.third': 'I lived in Rio de Janeiro between 2000 and 2009 when I became an art-educator. In 2007, I recorded the album Lixo Extraordinario and two years later the album Disquinho de Bolso (2009).',
                'eu.text.forth': 'Since 2009, I live in Montreal, Quebec, where I work with music creation workshops for organizations dedicated to people with mental health problems, such as the Foundation Les Impatients and Camee Centre. I also work with musical creation for  Douglas Hospital\'s psychiatric prisionnel sector and also with psychiatric inmates Philippe Pinel Institute of Montreal.',
                'eu.text.fifth': 'In late 2013, visiting Brazil, I recorded the album "Nao vai ter culpa!" Experience "flash-creation" with six songs written, arranged and recorded in just four days.',
                'eu.text.sixth': 'The musical production available on this site is discussed in detail on the menu ALBUMS. Once there, you will find for each song, a "story-song" where I remembered friends and passages connected to the creation and the record process.',
                'eu.text.seventh': 'All songs are available for download in copyleft.',
                'eu.text.eighth': 'Welcome,',
                'eu.text.ninth': 'BATONE',
                'eu.text.tenth': '',
            };
        });
})(window.angular);
(function(angular) {
    'use strict';

    angular.module('i18n')
        .factory('frText', function() {
            return {
                'title.site': 'Batone.rocks - Chansons, textes et histoires du Batone',

                'menu.albums': 'Albums',
                'menu.videos': 'Vidéos',
                'menu.eu': 'Moi',
                'menu.contact': 'Contact',

                'eu.text.first': 'Je suis un écoanarcho-humaniste né et grandi au sud-ouest du Brésil.',
                'eu.text.second': 'J’ai participé de plusieurs formations musicales, toujours comme chanteur/compositeur dont je souligne les groupes Fantoches, Hungry Indians Cave et Loboguara.',
                'eu.text.third': 'J\'ai vécu à Rio de Janeiro entre 2000 et 2009 où je suis devenu un art-éducateur. En 2007, j\'ai enregistré l\'album Lixo Extraordinário et deux ans plus tard, l\'album Disquinho de Bolso (2009).',
                'eu.text.forth': 'Depuis 2009, j\'habite à Montréal, au Québec, où je travaille avec des ateliers de création musicale pour des organismes dédiés aux personnes ayant des problèmes de santé mentale, tels que la Fondation Les Impatients et le Centre Camée. Je travaille aussi avec la création musicale aux secteur prisionnel psychiatrique de l\'Hôpital Douglas et aussi avec des détenus psychiatriques de l\'Institut Philippe-Pinel de Montréal.',
                'eu.text.fifth': 'À la fin de 2013, en visite au Brésil, j\'ai enregistré l\'album "Nao vai ter culpa!", une expérience de "création-éclair" avec six chansons écrites, arrangé et enregistré en seulement 4 jours.',
                'eu.text.sixth': 'L’œuvrage musical en entier disponible sur ce site est commenté en détail dans les onglets E-ALBUMS. Une fois là, vous trouverez pour chaque chanson, un "conte-chanson", où je rappelle des histoires, des amis et des passages reliés à la création et le processus d\'enregistrement des titres.',
                'eu.text.seventh': 'Toutes les chansons sont disponibles pour téléchargement en copyleft.',
                'eu.text.eighth': 'Bienvenu,',
                'eu.text.ninth': 'BATONE',
                'eu.text.tenth': '',
            };
        });
})(window.angular);
(function(angular) {
    'use strict';

    angular.module('i18n')
        .factory('ptText', function() {
            return {
                'title.site': 'Batone.rocks - Música e textos, contos e canções de Batone',
                
                'menu.albums': 'Albuns',
                'menu.videos': 'Videos',
                'menu.eu': 'Eu',
                'menu.contact': 'Contato',

                'eu.text.first': 'Sou um eco-anarco-humanista. Glauberiano com ascendente em escorpião.',
                'eu.text.second': 'Nasci e cresci em Marília, região do Alto Cafezal, interior de São Paulo e lá me formei em filosofia em meados dos anos 90.',
                'eu.text.third': 'Como cantor e compositor participei de várias formações musicais, dentre as quais a banda Fantoches, Hungry Indians Cave e Loboguará.',
                'eu.text.forth': 'Morei no Rio de Janeiro entre 2000 e 2009, me tornei arte-educador e gravei os e-albuns "Lixo Extraordinario" (2007) e "Disquinho de Bolso" (2009).',
                'eu.text.fifth': 'Desde 2009 moro em Montréal, Canadá e animo ateliers de criação musical para organismos que atendem pessoas com problemas de saúde mental, como a Fundação Les Impatients e o centro Camée. Trabalho também com criação musical dentro do setor prisional psiquiátrico do Douglas Hospital e com detentos psiquiátricos do Institut Philippe-Pinel de Montréal.',
                'eu.text.sixth': 'No final de 2013, em passagem pelo Brasil, gravei o e-álbum "Não vai ter culpa!", experiência de criação relâmpago com seis canções escritas, arranjadas e gravadas em 4 dias.',
                'eu.text.seventh': 'Todo o trabalho musical disponível nesse site está comentado no interior dos links da sessão E-ALBUMS. Uma vez lá, você encontrará para cada música um « conto-canção » que relembra histórias, amigos e passagens por trás da criação, do processo de arranjo e gravação das faixas.',
                'eu.text.eighth': 'Todas as canções estão disponíveis para download em copyleft.',
                'eu.text.ninth': 'Seja benvindo,',
                'eu.text.tenth': 'BATONE',
            };
        });
})(window.angular);
'use strict';

(function(angular) {
    angular.module('batoneApp', [
        'ngRoute',
        'ngAnimate',
        'pascalprecht.translate', 
        'i18n',
        'menu',
        'player',
        'videos',
        'downloads',
        'eu',
        'bg'
    ])
    .config(['$translateProvider', 'enTextProvider', 'frTextProvider', 'ptTextProvider', function($translateProvider, enTextProvider, frTextProvider, ptTextProvider) {
            $translateProvider.translations('en', enTextProvider.$get());
            $translateProvider.translations('fr', frTextProvider.$get());
            $translateProvider.translations('pt', ptTextProvider.$get());
            $translateProvider.preferredLanguage('en');
        }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'templates/player.html',
            controller: 'PlayerController'
        });
        $routeProvider.when('/videos', {
            templateUrl: 'templates/videos.html',
            controller: 'VideosController'
        });
        $routeProvider.when('/eu', {
            templateUrl: 'templates/eu.html',
            controller: 'EuController'
        });
        $routeProvider.when('/downloads', {
            templateUrl: 'templates/downloads.html',
            controller: 'DownloadsController'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }]);
})(angular);
'use strict';

(function(angular) {
    MenuController.$inject = ['$scope', '$translate', '$timeout', 'enText', 'frText', 'ptText'];
    function MenuController($scope, $translate, $timeout, enText, frText, ptText) {
        var _self = this,
            menu;

        var traslatedTexts = {
            en: enText, 
            fr: frText, 
            pt: ptText
        };
        $scope.traslatedText = traslatedTexts.en;

        $scope.$watch('currentLanguage', function(o, n) {
            $scope.menuItems = [
                {
                    url: '/#/home',
                    text: 'Batone',
                    id: 'home'
                },
                {
                    url: '/#/videos',
                    text: $scope.traslatedText['menu.videos'],
                    id: 'videos',
                },
                {
                    url: '/#/downloads',
                    text: 'Downloads',
                    id: 'downloads'
                },
                {
                    url: '/#/eu',
                    text: $scope.traslatedText['menu.eu'],
                    id: 'eu'
                }
            ];
        });

        $scope.isMenuToggleOpened = false;

        $scope.currentMenuItem = '/' + window.location.hash;
        $scope.currentLanguage = 'en';

        $scope.changeLanguage = function(key) {
            $translate.use(key);
            $scope.currentLanguage = key;
            $scope.traslatedText = traslatedTexts[key];
        };

        $scope.onMenuItemClick = function(menuItem) {
            $scope.currentMenuItem = menuItem.url;
            if(menuItem.id !== 'home') {
                $scope.onMenuToggle();
            }
        };

        $scope.isMenuItemActive = function(menuItem) {
            return $scope.currentMenuItem === menuItem.url;
        };

        $scope.onMenuToggle = function() {
            $scope.isMenuToggleOpened = !$scope.isMenuToggleOpened;
        }
    }

    angular.module('menu', [])
        .controller('MenuController', MenuController);
})(angular);
'use strict';

(function(angular) {
    angular.module('menu')
        .directive('mainMenu', ['$timeout', function($timeout) {
            return {
                restrict: 'E',
                templateUrl: 'templates/menu.html',
                link: function(scope, element) {
                    var menuMobileList = element[0].querySelector('.menu-mobile-list');

                    $timeout(function() {
                        angular.element(menuMobileList).removeClass('is-hidden');
                    });
                }
            }            
        }]);
})(angular);
'use strict';

(function(angular) {
    BgController.$inject = ['$scope', '$rootScope'];
    var _self;

    function BgController($scope, $rootScope) {
        var windowWidth = window.innerWidth,
            batonePhotoWidth = 1080;

        _self = this;
        this.toMove = windowWidth - 40 - ((windowWidth - batonePhotoWidth) / 2) - batonePhotoWidth/2;

        if(this.isHome()) {
            localStorage.removeItem('isHomePage');
        }
        $scope.isHomePage = localStorage.isHomePage ? false : true;
        
        // Animates if it is the homepage
        if($scope.isHomePage) { 
            this.animate();
        }
        else {
            this.posRight();
        }
    }

    BgController.prototype.animate = function() {
        setTimeout(this.posRight, 3500);
    };

    BgController.prototype.posRight = function() {
        document.getElementById('bg-photo').style.webkitTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.MozTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.msTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.OTransform = 'translateX('+ _self.toMove +'px)';
        document.getElementById('bg-photo').style.transform = 'translateX('+ _self.toMove +'px)';

        localStorage.isHomePage = false;
    };

    BgController.prototype.isHome = function() {
        return window.location.hash === '#/home' || window.location.hash === '' || window.location.hash === '/';
    };

    angular.module('bg', [])
        .controller('BgController', BgController);

})(angular);
'use strict'; 

(function(angular) {
    angular.module('common', [])
        .service('commonServices', function() {
            this.randomPos = function(length) {
                var randomList = [];
                while(randomList.length !== length) {
                    var n = Math.ceil(Math.random() * 10);

                    if(!_.contains(randomList, n)) {
                        randomList.push(n);
                    }
                }
                return randomList;
            };
        });
})(angular);
'use strict';

(function(angular) {

    PlayerController.$inject = ['$scope'];
    function PlayerController($scope) {
        $scope.isHomePage = localStorage.isHomePage ? false : true;
    }

    angular.module('player', [])
        .controller('PlayerController', PlayerController);

})(angular);
'use strict';

(function(angular, $){
	VideosController.$inject = ['$scope'];
	function VideosController($scope) {}

	angular.module('videos', ['common'])
		.controller('VideosController', VideosController);
})(angular, jQuery);
'use strict';

(function(angular, _){
	var videos = angular.module('videos');

	videos.directive('videosDirective', ['commonServices', function (commonServices) {
		return {
			restrict: 'E',
			templateUrl: 'templates/videos-container.html',
			link: function ($scope, element, attrs) {
				var videoList = element[0].querySelectorAll('.video'),
					linkVideo = element[0].querySelectorAll('.fancybox-media'),
					videoClass = 'video-',
					randomList = commonServices.randomPos(7);

				_.each(videoList, function(video, index) {
					video.setAttribute('class', 'video ' + videoClass + randomList[index]);
				});

				$(linkVideo).fancybox({
					openEffect  : 'none',
					closeEffect : 'none'
				});
			}
		};
	}]);
})(angular, _);
'use strict';

(function(angular, $){
    DownloadsController.$inject = ['$scope'];
    function DownloadsController($scope) {}

    angular.module('downloads', ['common'])
        .controller('DownloadsController', DownloadsController);
})(angular, jQuery);
'use strict';

(function(angular, _){
    var downloads = angular.module('downloads');

    downloads.directive('downloadsDirective', ['commonServices', function (commonServices) {
        return {
            restrict: 'E',
            templateUrl: 'templates/downloads-container.html',
            link: function ($scope, element, attrs) {
                var downloadList = element[0].querySelectorAll('.download'),
                    downloadClass = 'download-',
                    randomList = commonServices.randomPos(3);

                _.each(downloadList, function(download, index) {
                    download.setAttribute('class', 'download ' + downloadClass + randomList[index]);
                });
            }
        };
    }]);
})(angular, _);
'use strict';

(function(angular) {

    EuController.$inject = ['$scope'];
    function EuController($scope) {}

    angular.module('eu', [])
        .controller('EuController', EuController);

})(angular);