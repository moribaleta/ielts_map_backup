/**
 * Created by Millie Lin on 08/07/2016.
 */

/**
 * Topo Json source for Canada Map:
 * https://gist.github.com/tnightingale/4687146?short_path=b3cfd1e#file-prov_4326_simple-topo-json
 *
 */

// Map for Canada
var canadaMap;
function openMap() {
    var stateNameParser = document.getElementById('state-name-parser');
    // Load the Canada map
   canadaMap = new Datamap({
        element: document.getElementById('canada-map-container'),
        scope: 'provinces',
        setProjection: function (element, options) {
            var projection = d3.geo.mercator()
            .center([-95, 71])
            .scale(420)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

            var path = d3.geo.path()
            .projection(projection);

            return {path: path, projection: projection};
        },
        responsive: true,
        geographyConfig: {
            dataUrl: '/maps/canada.topo.json',
            highlightFillColor: 'rgb(227, 24, 55)',
            popupTemplate: function (geography, data) {
                var value = geography.properties.name;
                var output = 0;
                for(var i=0; i<states.length;i++){
                    var elem = states[i];
                    elem = elem.split(",");
                    if(elem[0]==value){

                        output = elem[1];
                    }
                }if(output>0)            
                return '<div class="hoverinfo">' + geography.properties.name +
                ', Number of Universities: ' + output + ' '
            }
        },
        // Define the color for states on the map base on the universities numbers
        fills: {
            "c0": 'rgba(225,225, 225, 1)', // Grey: 0
            "c1": '#8DD15A', //green: 1-20
            "c2": '#AD70D1', //purple: 21-50
            "c3": '#FC9651', //orange: 51-75
            "c4": '#8AB3E0', //blue: 76-100
            "c5": '#FF001E', //red: 101-150
            "c6": '#248699', //turquoise: 151-200
            "c7": '#FFCBFD', //pink: over 200
            defaultFill: 'rgba(225,225, 225, 1)'
        },
        data: {
            // TODO: update universities data and fillKey for each states
            "Nunavut":{
                "fillKey": "c0",
                "state":"Nunavut",
                "numberOfUniversities": 0
            },
            "Quebec":{
                "fillKey": "c0",
                "state":"Quebec",
                "numberOfUniversities": 9
            },
            "Northwest Territories":{
                "fillKey": "c0",
                "state":"Northwest Territories",
                "numberOfUniversities": 0
            },
            "Ontario":{
                "fillKey": "c0",
                "state":"Ontario",
                "numberOfUniversities": 0
            },
            "Alberta":{
                "fillKey": "c0",
                "state":"Alberta",
                "numberOfUniversities": 0
            },
            "British Columbia":{
                "fillKey": "c0",
                "state":"British Columbia",
                "numberOfUniversities": 0
            },
            "Manitoba":{
                "fillKey": "c0",
                "state":"Manitoba",
                "numberOfUniversities": 0
            },
            "Yukon":{
                "fillKey": "c0",
                "state":"Yukon",
                "numberOfUniversities": 0
            },
            "Newfoundland and Labrador":{
                "fillKey": "c0",
                "state":"Newfoundland and Labrador",
                "numberOfUniversities": 0
            },
            "New Brunswick": {
                "fillKey": "c0",
                "state":"New Brunswick",
                "numberOfUniversities": 0
            },
            "Nova Scotia": {
                "fillKey": "c0",
                "state":"Nova Scotia",
                "numberOfUniversities": 0
            },
            "Prince Edward Island": {
                "fillKey": "c0",
                "state": "Prince Edward Island",
                "numberOfUniversities": 0
            },
            "Saskatchewan": {
                "fillKey": "c0",
                "state": "Saskatchewan",               
                "numberOfUniversities": 0
            }
        },


        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties['name'];
                }
                console.log(stateNameParser.value + ": " + geography.properties['name']);
            });
            datamap.svg.selectAll('.datamaps-subunit').on('touchstart', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties['name'];
                }
            });
            console.log("Object o", this.data);
        }
    });

    // Responsive Map
        window.addEventListener('resize', function () {
            canadaMap.resize();
        });
    }
    openMap();
/*    
(function () {
    var stateNameParser = document.getElementById('state-name-parser');
    // Load the Canada map
   canadaMap = new Datamap({
        element: document.getElementById('canada-map-container'),
        scope: 'provinces',
        setProjection: function (element, options) {
            var projection = d3.geo.mercator()
            .center([-95, 71])
            .scale(420)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

            var path = d3.geo.path()
            .projection(projection);

            return {path: path, projection: projection};
        },
        responsive: true,
        geographyConfig: {
            dataUrl: '/maps/canada.topo.json',
            highlightFillColor: 'rgb(227, 24, 55)',
            popupTemplate: function (geography, data) {
                var value = geography.properties.name;
                var output = 0;
                for(var i=0; i<states.length;i++){
                    var elem = states[i];
                    elem = elem.split(",");
                    if(elem[0]==value){

                        output = elem[1];
                    }
                }if(output>0)            
                return '<div class="hoverinfo">' + geography.properties.name +
                ', Number of Universities: ' + output + ' '
            }
        },
        // Define the color for states on the map base on the universities numbers
        fills: {
            "c0": 'rgba(225,225, 225, 1)', // Grey: 0
            "c1": '#8DD15A', //green: 1-20
            "c2": '#AD70D1', //purple: 21-50
            "c3": '#FC9651', //orange: 51-75
            "c4": '#8AB3E0', //blue: 76-100
            "c5": '#FF001E', //red: 101-150
            "c6": '#248699', //turquoise: 151-200
            "c7": '#FFCBFD', //pink: over 200
            defaultFill: 'rgba(225,225, 225, 1)'
        },
        data: {
            // TODO: update universities data and fillKey for each states
            "Nunavut":{
                "fillKey": "c0",
                "state":"Nunavut",
                "numberOfUniversities": 0
            },
            "Quebec":{
                "fillKey": "c0",
                "state":"Quebec",
                "numberOfUniversities": 9
            },
            "Northwest Territories":{
                "fillKey": "c0",
                "state":"Northwest Territories",
                "numberOfUniversities": 0
            },
            "Ontario":{
                "fillKey": "c0",
                "state":"Ontario",
                "numberOfUniversities": 0
            },
            "Alberta":{
                "fillKey": "c0",
                "state":"Alberta",
                "numberOfUniversities": 0
            },
            "British Columbia":{
                "fillKey": "c0",
                "state":"British Columbia",
                "numberOfUniversities": 0
            },
            "Manitoba":{
                "fillKey": "c0",
                "state":"Manitoba",
                "numberOfUniversities": 0
            },
            "Yukon":{
                "fillKey": "c0",
                "state":"Yukon",
                "numberOfUniversities": 0
            },
            "Newfoundland and Labrador":{
                "fillKey": "c0",
                "state":"Newfoundland and Labrador",
                "numberOfUniversities": 0
            },
            "New Brunswick": {
                "fillKey": "c0",
                "state":"New Brunswick",
                "numberOfUniversities": 0
            },
            "Nova Scotia": {
                "fillKey": "c0",
                "state":"Nova Scotia",
                "numberOfUniversities": 0
            },
            "Prince Edward Island": {
                "fillKey": "c0",
                "state": "Prince Edward Island",
                "numberOfUniversities": 0
            },
            "Saskatchewan": {
                "fillKey": "c0",
                "state": "Saskatchewan",               
                "numberOfUniversities": 0
            }
        },


        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties['name'];
                }
                console.log(stateNameParser.value + ": " + geography.properties['name']);
            });
            datamap.svg.selectAll('.datamaps-subunit').on('touchstart', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties['name'];
                }
            });
            console.log("Object o", this.data);
        }
    });

    // Responsive Map
    window.addEventListener('resize', function () {
        canadaMap.resize();
    });

    /*window.addEventListener('load',function(){
        updateDatamapColor();
        console.log("finished loading");
    });

    function updateDatamapColor(){
        var stateUnits = document.getElementsByClassName('datamaps-subunit');
        for(var i = 0; i<stateUnits.length; i++){
            var data_info = stateUnits[i].getAttribute("data-info");
            console.log('datamap: '+data_info);
            data_info = data_info.split(",");
            var stateName = data_info[1].split(":");
            stateUnits[i].style.fill = getColorState(stateName[1]);
        }
    }

    function getColorState(stateName){
        stateName = stateName.slice(1,stateName.length-1);
        for(var i = 0; i<states.length; i++){
            var data = states[i].split(",");
            //console.log("changing "+stateName+" to "+data[0]);
            if(stateName == data[0]){
                var color = getColor(data[1]);
                console.log("changing "+stateName+" to "+color+" by "+data[1]);
                return color;
            }
        }
    }

    function getColor(size){
        if(size==0){
            return "rgba(225,225, 225, 1)";
        }else if(size>=1&&size<=20){
            return "#8DD15A";
        }else if(size>=21&&size<=50){
            return "#AD70D1";
        }else if(size>=51&&size<=75){
            return "#FC9651";
        }else if(size>=76&&size<=100){
            return "#8AB3E0";
        }else if(size>=101&&size<=150){
            return "#FF001E";
        }else if(size>=151&&size<=200){
            return "#248699";
        }else{
            return "#FFCBFD";
        }

    }*/

//})();

/*
document.onreadystatechange = function () {
    updateDatamapColor();
    console.log("ready");
};*/    