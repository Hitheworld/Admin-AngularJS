var app = angular.module('routerApp',[
					'ui.router',
					'ngGrid',
					'routerApp.loginModule',
					'routerApp.FeeListModule',
					'routerApp.navService',
					'routerApp.directives',
					'routerApp.navModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
app.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
    	//登录与注册
    	.state('login', {
            url: '/login',
            views: {
            	'': {
                    templateUrl: 'tpls/pages/index.html'
                },
                'main@login': {
                    templateUrl: 'tpls/login.html'
                },
                'foot@login': {
                    templateUrl: 'tpls/public/sb-foot.html'
                }
            }
        })
    	//系统主页
        .state('index', {
            url: '/index',
            views: {  //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
                '': {
                    templateUrl: 'tpls/home.html'
                },
                'top@index': {
                    templateUrl: 'tpls/public/top.html'
                },
                'main@index': {
                    templateUrl: 'tpls/public/main.html'
                },
                'contentBox@index': {
                    templateUrl: 'tpls/fee/fee_list.html'   //默认页面
                },
                'foot@index': {
                    templateUrl: 'tpls/public/foot.html'
                }
            }
        })
        // 资费管理
        .state('index.fee', {
            url: '/fee',
            views: {
                'main@index': {
                    templateUrl: 'tpls/pages/mains.html'
                }
            }
        })
        .state('index.fee.list', {
            url: '/list',
            templateUrl: 'tpls/fee/fee_list.html' 
        })
        .state('index.fee.add', {
            url: '/add',
            templateUrl: 'tpls/fee/fee_add.html' 
        })
        .state('index.fee.detail', {
            url: '/detail/:feeId',
            templateUrl: 'tpls/fee/fee_detail.html' 
        })
        .state('index.fee.modi', {
            url: '/modi/:feeId',
            templateUrl: 'tpls/fee/fee_modi.html' 
        })
        // 帐务管理
        .state('index.accounts', {
            url: '/accounts',
            views: {
                'main@index': {
                    templateUrl: 'tpls/pages/mains.html'
                }
            }
        })
        .state('index.accounts.list', {
            url: '/list',
            templateUrl: 'tpls/account/account_list.html' 
        })
        .state('index.accounts.add', {
            url: '/add',
            templateUrl: 'tpls/account/account_add.html' 
        })
        .state('index.accounts.detail:accountId', {
            url: '/detail',
            templateUrl: 'tpls/account/account_detail.html' 
        })
        .state('index.accounts.modi', {
            url: '/modi/:accountId',
            templateUrl: 'tpls/account/account_modi.html' 
        })
        // 业务管理
        .state('index.service', {
            url: '/service',
            views: {
                'main@index': {
                    templateUrl: 'tpls/pages/mains.html'
                }
            }
        })
        .state('index.service.list', {
            url: '/list',
            templateUrl: 'tpls/service/service_list.html' 
        })
        .state('index.service.add', {
            url: '/add',
            templateUrl: 'tpls/service/service_add.html' 
        })
        .state('index.service.detail', {
            url: '/detail/:serviceId',
            templateUrl: 'tpls/service/service_detail.html' 
        })
        .state('index.service.modi', {
            url: '/modi/:serviceId',
            templateUrl: 'tpls/service/service_modi.html' 
        })
        // 帐单管理
        .state('index.bill', {
            url: '/bill',
            views: {
                'main@index': {
                    templateUrl: 'tpls/pages/mains.html'
                }
            }
        })
        .state('index.bill.list', {
            url: '/list',
            templateUrl: 'tpls/bill/bill_list.html' 
        })
        .state('index.bill.detail', {
            url: '/detail/:billId',
            templateUrl: 'tpls/bill/bill_detail.html' 
        })
        // 报表管理
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    templateUrl: 'tpls/pages/mains.html'
                }
            }
        })
        .state('index.report.list', {
            url: '/list',
            templateUrl: 'tpls/report/report_list.html' 
        })
        // 权限管理
        .state('index.powers', {
            url: '/powers',
            views: {
                'main@index': {
                    templateUrl: 'tpls/pages/mains.html'
                }
            }
        })
        .state('index.powers.list', {
            url: '/list',
            templateUrl: 'tpls/powers/powers_list.html' 
        })
        
        
});
