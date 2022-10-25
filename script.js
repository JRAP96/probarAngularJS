// Componente principal del App y componente para las rutas ngRoute
let scotchApp = angular.module('scotchApp', ['ngRoute']);


// Configuracion del modulo para las rutas
scotchApp.config(function($routeProvider) {
    $routeProvider
        // ruta home
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController2'
        })

        // ruta form
        .when('/form', {
            templateUrl : 'pages/form.html',
            controller  : 'formController'
        })

        // ruta about
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // ruta contact
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

// controlador componente principal app
scotchApp.controller('mainController', function($scope) {
    $scope.message = 'Hola a todos, esto se debe ver en el main de SPA';
    $scope.Dato1 = 'Roberto';
    $scope.Dato2 = 'Anaya';
    $scope.mensajeDatos = function() {
        return $scope.Dato1+' '+$scope.Dato2
    };
});

// Controladores del componente rutas
scotchApp.controller('mainController2', function($scope) {
    $scope.message = 'mensaje del controlador del componente de las rutas pagina FORM';
    $scope.nombre = '';
    $scope.apellido = '';
    $scope.solicitud = '';
    $scope.rol = '';
    console.log($scope.rol);
});

scotchApp.controller('formController', function($scope) {
    let arr = [];
    $scope.array = arr;
    $scope.message = 'Ejemplo de un sencillo FORM - ANGULAR JS';
    $scope.message2 = 'Vimos validaciones de datos y usa AngularJS los eventos';
    $scope.reset = function() {
        $scope.firstName = " ";
        $scope.lastName = " ";
        $scope.email = "example@example.com";
    };
    $scope.submit = function() {
        arr.push($scope.firstName);
    };
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'mensaje del controlador del componente de las rutas pagina ABOUT';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'mensaje del controlador del componente de las rutas paginas CONTACT';
});
