// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
  .factory('Projects',function(){
    return {
      all:function(){
        var projectString = window.localStorage['project'];
        if(projectString){
          return angular.fromJson(projectString);

        }
        return [];
      },
      save:function(projects){
        window.localStorage['project']=angular.toJson(projects);
      },
      newProject:function(projectTitle){
        return {
          title:projectTitle,
          task:[]
        };
      },
      getLastActiveIndex:function(){
        return parseInt(window.localStorage['lastActiveProject']) || 0;
      },
      setLastActiveIndex:function(){
        window.localStorage['lastActiveProject'] = index;
      }
    }
  })
  .controller('TodoCtrl',function ($scope,$timeout,$ionicModal,Projects,$ionicSideMenuDelegate){
    var createProject = function(projectTitle){
      var newProject = Projects.newProject(projectTitle);
      $scope.projects.push(newProject);
      Projects.save($scope.projects);
      $scope.selectProject(newProject,$scope.project.length-1);
    }
    //load or initialize projects
    $scope.projects = Projects.all();
    //Grab the last active,or the first project
    $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];
    //Called or create a new project
    $scope.newProject = function(){
      var projectTitle = prompt('project name');
      if(projectTitle){
        createProject(projectTitle);
      }
    };
    //called to select the given project
    $scope.selectProject = function(project,index){
      $scope.activeProject = project;
      Projects.setLastActiveIndex(index);
      $ionicSideMenuDelegate.toggleLeft(false);

    };
    //create our modal
    $scope.tasks = [];
    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
      $scope.taskModal = modal;
    }, {
      scope: $scope,
      animation: 'slide-in-up'
    });


    $scope.tasks = [
      { title: 'Collect coins' },
      { title: 'Eat mushrooms' },
      { title: 'Get high enough to grab the flag' },
      { title: 'Find the Princess' }
    ]
    $scope.createTask = function(task) {
      $scope.tasks.push({
        title: task.title
      });
      $scope.taskModal.hide();
      task.title = "";
    };
    $scope.newTask = function(){
      $scope.taskModal.show();
    };
    // Close the new task modal
    $scope.closeNewTask = function() {
      $scope.taskModal.hide();
    };
    $scope.toggleProject = function(){
      $ionicSideMenuDelegate.toggleLeft();
    }

    // Try to create the first project, make sure to defer
    // this by using $timeout so everything is initialized
    // properly
    $timeout(function() {
      if($scope.projects.length == 0) {
        while(true) {
          var projectTitle = prompt('Your first project title:');
          if(projectTitle) {
            createProject(projectTitle);
            break;
          }
        }
      }
    }, 1000);
  });
