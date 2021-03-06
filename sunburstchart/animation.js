var animation_DataSource = [
		{ Continent: "North America", Country: "Canada",        State: "Ontario",                Population: 13210600 },
        { Continent: "North America", Country: "United States", State: "New York",               Population: 19378102 },
        { Continent: "North America", Country: "United States", State: "Pennsylvania",           Population: 12702379 },
        { Continent: "North America", Country: "United States", State: "Ohio",                   Population: 11536504 },
                                                                                          
		{ Continent: "South America", Country: "Argentina",      State: "Buenos Aires",           Population: 15594428 },
		{ Continent: "South America", Country: "Brazil",         State: "Minas Gerais",           Population: 20593366 },
		{ Continent: "South America", Country: "Brazil",         State: "Rio de Janeiro",         Population: 16369178 },
		{ Continent: "South America", Country: "Brazil",         State: "Bahia",                  Population: 15044127 },
		{ Continent: "South America", Country: "Brazil",         State: "Rio Grande do Sul",      Population: 11164050 },
		{ Continent: "South America", Country: "Brazil",         State: "Parana",                 Population: 10997462 },
																								
		{ Continent: "Asia",          Country: "Bangladesh",     State: "Chittagong",             Population: 28079000 },
		{ Continent: "Asia",          Country: "Bangladesh",     State: "Rajshahi",               Population: 18329000 },
		{ Continent: "Asia",          Country: "Bangladesh",     State: "Khulna",                 Population: 15563000 },
		{ Continent: "Asia",          Country: "China",          State: "Liaoning",               Population: 43746323 },
		{ Continent: "Asia",          Country: "China",          State: "Shaanxi",                Population: 37327378 },
		{ Continent: "Asia",          Country: "China",          State: "Fujian",                 Population: 36894216 },
		{ Continent: "Asia",          Country: "China",          State: "Shanxi",                 Population: 35712111 },
		{ Continent: "Asia",          Country: "India",          State: "Kerala",                 Population: 33387677 },
		{ Continent: "Asia",          Country: "India",          State: "Punjab",                 Population: 27704236 },
		{ Continent: "Asia",          Country: "India",          State: "Haryana",                Population: 25353081 },
		{ Continent: "Asia",          Country: "India",          State: "Delhi",                  Population: 16753235 },
		{ Continent: "Asia",          Country: "India",          State: "Jammu",                  Population: 12548926 },
		{ Continent: "Asia",          Country: "Indonesia",      State: "West Java",              Population: 43021826 },
		{ Continent: "Asia",          Country: "Indonesia",      State: "East Java",              Population: 37476011 },
		{ Continent: "Asia",          Country: "Indonesia",      State: "Banten",                 Population: 10644030 },
		{ Continent: "Asia",          Country: "Indonesia",      State: "Jakarta",                Population: 10187595 },
																								
																								
		{ Continent: "Africa",        Country: "Ethiopia",       State: "Tianjin",                Population: 24000200 },
		{ Continent: "Africa",        Country: "Ethiopia",       State: "Tianjin",                Population: 15042531 },
		{ Continent: "Africa",        Country: "Kenya",          State: "Rift Valley",            Population: 10006805 },
		{ Continent: "Africa",        Country: "Nigeria",        State: "Lagos",                  Population: 10006805 },
		{ Continent: "Africa",        Country: "Nigeria",        State: "Kano",                   Population: 10006805 },
		{ Continent: "Africa",        Country: "South Africa",   State: "Gauteng",                Population: 12728400 },
		{ Continent: "Africa",        Country: "South Africa",   State: "KwaZulu-Natal",          Population: 10456900 },
									
									
		{ Continent: "Europe",        Country: "France",         State: "Ile-de- France",         Population: 11694000 },
		{ Continent: "Europe",        Country: "Germany",        State: "North Rhine-Westphalia", Population: 17872863 },
		{ Continent: "Europe",        Country: "Germany",        State: "Bavaria",                Population: 12510331 },
		{ Continent: "Europe",        Country: "Germany",        State: "NBaden-Wurttemberg",     Population: 10747479 },
		{ Continent: "Europe",        Country: "United Kingdom", State: "England",                Population: 51446600 }
];

syncApp.controller('animationCtrl', function ($scope) {
    $scope.ndatasource = animation_DataSource; 
	$scope.levels = [
						{groupMemberPath:"Continent"},
						{groupMemberPath:"Country"},
						{groupMemberPath:"State"}
	];	
	$('#animationtype').change(function () {
        var type = $("#animationtype option:selected").text();
        var sunburst = $("#animation").ejSunburstChart("instance");
        switch (type) {
			  case 'Rotation':
			    sunburst.model.animationType = 'rotation';
                break;
            case 'FadeIn':
                sunburst.model.animationType = 'fadeIn';
                break;
        }	
		sunburst.redraw();		
    });	
});
   
function visible()
	{
	 var sunburst = $("#animation").ejSunburstChart("instance");
	 if ($("#enable").is(":checked"))
            sunburst.model.enableAnimation = true;
        else {
            sunburst.model.enableAnimation = false;
        }	 
	 sunburst.redraw();
	}
	
	    
