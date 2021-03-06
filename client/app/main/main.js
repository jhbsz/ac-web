'use strict';

angular.module('avalancheCanadaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('ac.map', {
                url: '',
                templateUrl: 'app/main/map.html',
                controller: 'MapCtrl',
                resolve: {
                  obs: function (acObservation) {
                    return acObservation.byPeriod('7:days');
                  }
                }
            })
            .state('ac.login', {
                url: 'login',
                templateUrl: 'app/main/map.html',
                controller: 'MapCtrl',
                resolve: {
                   obs: function (acObservation) {
                    return acObservation.byPeriod('7:days');
                  }
                },
                data: {
                  isLogin: true
                }
            })
            .state('ac.share', {
                url: '^/share/:title/:obid',
                templateUrl: 'app/main/map.html',
                controller: 'MapCtrl',
                resolve: {
                  obs: function ($stateParams, $http) {
                    return $http.get('/api/min/observations/' + $stateParams.obid).then(function (res) {
                        return [res.data];
                    });
                  }
                },
                data: {
                  isShare: true
                }
            })
            .state('ac.sled', {
                url: '^/sled',
                templateUrl: 'app/main/more.html',
                controller: 'MoreCtrl',
                resolve:{
                  sledPage: [function(){
                      return true;
                  }]
                }
            })
            .state('ac.more', {
                url: '^/more',
                templateUrl: 'app/main/more.html',
                controller: 'MoreCtrl',
                resolve:{
                  sledPage: [function(){
                      return false;
                  }]
                }
            });
    });

