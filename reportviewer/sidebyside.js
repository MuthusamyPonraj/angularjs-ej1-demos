syncApp.controller('SidebySideCrtl', function ($scope, $interval) {
    $scope.reportServiceUrl = window.baseurl + 'api/ReportViewer';
    $scope.remoteMode = ej.ReportViewer.ProcessingMode.Remote;
    $scope.rdlReportPath = 'Side_By_SideMainReport.rdl';

    $scope.success = function (args) {
        $compile(args.content)($scope);
    };
});