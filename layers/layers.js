var wms_layers = [];


        var lyr_EsriGraylight_0 = new ol.layer.Tile({
            'title': 'Esri Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Alternaterouteconsiderations_1 = new ol.format.GeoJSON();
var features_Alternaterouteconsiderations_1 = format_Alternaterouteconsiderations_1.readFeatures(json_Alternaterouteconsiderations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alternaterouteconsiderations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alternaterouteconsiderations_1.addFeatures(features_Alternaterouteconsiderations_1);
var lyr_Alternaterouteconsiderations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alternaterouteconsiderations_1, 
                style: style_Alternaterouteconsiderations_1,
                popuplayertitle: 'Alternate route considerations',
                interactive: true,
                title: '<img src="styles/legend/Alternaterouteconsiderations_1.png" /> Alternate route considerations'
            });
var format_OuterMajorBikewaysConnections_2 = new ol.format.GeoJSON();
var features_OuterMajorBikewaysConnections_2 = format_OuterMajorBikewaysConnections_2.readFeatures(json_OuterMajorBikewaysConnections_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OuterMajorBikewaysConnections_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OuterMajorBikewaysConnections_2.addFeatures(features_OuterMajorBikewaysConnections_2);
var lyr_OuterMajorBikewaysConnections_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OuterMajorBikewaysConnections_2, 
                style: style_OuterMajorBikewaysConnections_2,
                popuplayertitle: 'Outer Major Bikeways Connections',
                interactive: true,
                title: '<img src="styles/legend/OuterMajorBikewaysConnections_2.png" /> Outer Major Bikeways Connections'
            });
var format_2025SaferRouteDetours_3 = new ol.format.GeoJSON();
var features_2025SaferRouteDetours_3 = format_2025SaferRouteDetours_3.readFeatures(json_2025SaferRouteDetours_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2025SaferRouteDetours_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025SaferRouteDetours_3.addFeatures(features_2025SaferRouteDetours_3);
var lyr_2025SaferRouteDetours_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025SaferRouteDetours_3, 
                style: style_2025SaferRouteDetours_3,
                popuplayertitle: '2025 Safer Route Detours',
                interactive: false,
                title: '<img src="styles/legend/2025SaferRouteDetours_3.png" /> 2025 Safer Route Detours'
            });
var format_2029Quickbuildgapdetours_4 = new ol.format.GeoJSON();
var features_2029Quickbuildgapdetours_4 = format_2029Quickbuildgapdetours_4.readFeatures(json_2029Quickbuildgapdetours_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2029Quickbuildgapdetours_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2029Quickbuildgapdetours_4.addFeatures(features_2029Quickbuildgapdetours_4);
var lyr_2029Quickbuildgapdetours_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2029Quickbuildgapdetours_4, 
                style: style_2029Quickbuildgapdetours_4,
                popuplayertitle: '2029 Quickbuild gap detours',
                interactive: true,
                title: '<img src="styles/legend/2029Quickbuildgapdetours_4.png" /> 2029 Quickbuild gap detours'
            });
var format_QuickbuildSegments_5 = new ol.format.GeoJSON();
var features_QuickbuildSegments_5 = format_QuickbuildSegments_5.readFeatures(json_QuickbuildSegments_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuickbuildSegments_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuickbuildSegments_5.addFeatures(features_QuickbuildSegments_5);
var lyr_QuickbuildSegments_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuickbuildSegments_5, 
                style: style_QuickbuildSegments_5,
                popuplayertitle: 'Quickbuild Segments',
                interactive: true,
    title: 'Quickbuild Segments<br />\
    <img src="styles/legend/QuickbuildSegments_5_0.png" /> Already Committed<br />\
    <img src="styles/legend/QuickbuildSegments_5_1.png" /> Calm Street<br />\
    <img src="styles/legend/QuickbuildSegments_5_2.png" /> Paint<br />\
    <img src="styles/legend/QuickbuildSegments_5_3.png" /> Quick Build<br />' });
var format_Routessortedbycost_6 = new ol.format.GeoJSON();
var features_Routessortedbycost_6 = format_Routessortedbycost_6.readFeatures(json_Routessortedbycost_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Routessortedbycost_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Routessortedbycost_6.addFeatures(features_Routessortedbycost_6);
var lyr_Routessortedbycost_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Routessortedbycost_6, 
                style: style_Routessortedbycost_6,
                popuplayertitle: 'Routes sorted by cost',
                interactive: true,
    title: 'Routes sorted by cost<br />\
    <img src="styles/legend/Routessortedbycost_6_0.png" /> MUP/Raised<br />\
    <img src="styles/legend/Routessortedbycost_6_1.png" /> Slow Build On-Street<br />\
    <img src="styles/legend/Routessortedbycost_6_2.png" /> Greenway<br />\
    <img src="styles/legend/Routessortedbycost_6_3.png" /> Calm Street<br />\
    <img src="styles/legend/Routessortedbycost_6_4.png" /> Quick Build<br />\
    <img src="styles/legend/Routessortedbycost_6_5.png" /> Paint<br />\
    <img src="styles/legend/Routessortedbycost_6_6.png" /> Already Committed<br />' });
var format_SubwayStyleMapwithroutenumbers_7 = new ol.format.GeoJSON();
var features_SubwayStyleMapwithroutenumbers_7 = format_SubwayStyleMapwithroutenumbers_7.readFeatures(json_SubwayStyleMapwithroutenumbers_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStyleMapwithroutenumbers_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubwayStyleMapwithroutenumbers_7.addFeatures(features_SubwayStyleMapwithroutenumbers_7);
var lyr_SubwayStyleMapwithroutenumbers_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubwayStyleMapwithroutenumbers_7, 
                style: style_SubwayStyleMapwithroutenumbers_7,
                popuplayertitle: 'Subway Style Map with route numbers',
                interactive: true,
                title: 'Subway Style Map with route numbers'
            });
var format_SubwayStyleMapwoutLabels_8 = new ol.format.GeoJSON();
var features_SubwayStyleMapwoutLabels_8 = format_SubwayStyleMapwoutLabels_8.readFeatures(json_SubwayStyleMapwoutLabels_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStyleMapwoutLabels_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubwayStyleMapwoutLabels_8.addFeatures(features_SubwayStyleMapwoutLabels_8);
var lyr_SubwayStyleMapwoutLabels_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SubwayStyleMapwoutLabels_8, 
                style: style_SubwayStyleMapwoutLabels_8,
                popuplayertitle: 'Subway Style Map w/out Labels',
                interactive: true,
                title: 'Subway Style Map w/out Labels'
            });

lyr_EsriGraylight_0.setVisible(true);lyr_Alternaterouteconsiderations_1.setVisible(false);lyr_OuterMajorBikewaysConnections_2.setVisible(false);lyr_2025SaferRouteDetours_3.setVisible(false);lyr_2029Quickbuildgapdetours_4.setVisible(false);lyr_QuickbuildSegments_5.setVisible(false);lyr_Routessortedbycost_6.setVisible(false);lyr_SubwayStyleMapwithroutenumbers_7.setVisible(false);lyr_SubwayStyleMapwoutLabels_8.setVisible(true);
var layersList = [lyr_EsriGraylight_0,lyr_Alternaterouteconsiderations_1,lyr_OuterMajorBikewaysConnections_2,lyr_2025SaferRouteDetours_3,lyr_2029Quickbuildgapdetours_4,lyr_QuickbuildSegments_5,lyr_Routessortedbycost_6,lyr_SubwayStyleMapwithroutenumbers_7,lyr_SubwayStyleMapwoutLabels_8];
lyr_Alternaterouteconsiderations_1.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Notes': 'Notes', 'Label': 'Label', 'Type': 'Type', 'Committed': 'Committed', });
lyr_OuterMajorBikewaysConnections_2.set('fieldAliases', {'id': 'id', 'Label': 'Label', 'Street': 'Street', });
lyr_2025SaferRouteDetours_3.set('fieldAliases', {'id': 'id', });
lyr_2029Quickbuildgapdetours_4.set('fieldAliases', {'id': 'id', 'Notes': 'Notes', 'length': 'length', });
lyr_QuickbuildSegments_5.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_Routessortedbycost_6.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_SubwayStyleMapwithroutenumbers_7.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_SubwayStyleMapwoutLabels_8.set('fieldAliases', {'id': 'id', 'LineNumber': 'LineNumber', 'Line Name': 'Line Name', 'Notes': 'Notes', 'Label': 'Label', 'Committed': 'Committed', 'Length_mi': 'Length_mi', 'Type': 'Type', 'Road Diet': 'Road Diet', 'Cost': 'Cost', 'Status': 'Status', 'Commit_mi': 'Commit_mi', 'Total_mi': 'Total_mi', });
lyr_Alternaterouteconsiderations_1.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Type': 'TextEdit', 'Committed': '', });
lyr_OuterMajorBikewaysConnections_2.set('fieldImages', {'id': '', 'Label': '', 'Street': '', });
lyr_2025SaferRouteDetours_3.set('fieldImages', {'id': 'TextEdit', });
lyr_2029Quickbuildgapdetours_4.set('fieldImages', {'id': 'TextEdit', 'Notes': 'TextEdit', 'length': 'TextEdit', });
lyr_QuickbuildSegments_5.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'TextEdit', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'UniqueValues', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_Routessortedbycost_6.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'TextEdit', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'UniqueValues', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_SubwayStyleMapwithroutenumbers_7.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'TextEdit', 'Length_mi': 'TextEdit', 'Type': 'TextEdit', 'Road Diet': 'TextEdit', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_SubwayStyleMapwoutLabels_8.set('fieldImages', {'id': 'TextEdit', 'LineNumber': 'TextEdit', 'Line Name': 'TextEdit', 'Notes': 'TextEdit', 'Label': 'TextEdit', 'Committed': 'UniqueValues', 'Length_mi': 'TextEdit', 'Type': 'UniqueValues', 'Road Diet': 'TextEdit', 'Cost': 'UniqueValues', 'Status': 'UniqueValues', 'Commit_mi': 'TextEdit', 'Total_mi': 'TextEdit', });
lyr_Alternaterouteconsiderations_1.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'inline label - always visible', 'Type': 'inline label - always visible', 'Committed': 'inline label - always visible', });
lyr_OuterMajorBikewaysConnections_2.set('fieldLabels', {'id': 'no label', 'Label': 'no label', 'Street': 'no label', });
lyr_2025SaferRouteDetours_3.set('fieldLabels', {'id': 'hidden field', });
lyr_2029Quickbuildgapdetours_4.set('fieldLabels', {'id': 'hidden field', 'Notes': 'inline label - always visible', 'length': 'no label', });
lyr_QuickbuildSegments_5.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'no label', 'Notes': 'inline label - visible with data', 'Label': 'hidden field', 'Committed': 'inline label - visible with data', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'hidden field', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'hidden field', 'Total_mi': 'hidden field', });
lyr_Routessortedbycost_6.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'hidden field', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - visible with data', 'Road Diet': 'no label', 'Cost': 'inline label - always visible', 'Status': 'inline label - visible with data', 'Commit_mi': 'hidden field', 'Total_mi': 'hidden field', });
lyr_SubwayStyleMapwithroutenumbers_7.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'hidden field', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'inline label - always visible', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'inline label - always visible', 'Total_mi': 'inline label - always visible', });
lyr_SubwayStyleMapwoutLabels_8.set('fieldLabels', {'id': 'hidden field', 'LineNumber': 'inline label - always visible', 'Line Name': 'inline label - always visible', 'Notes': 'inline label - always visible', 'Label': 'hidden field', 'Committed': 'inline label - always visible', 'Length_mi': 'inline label - always visible', 'Type': 'inline label - always visible', 'Road Diet': 'inline label - always visible', 'Cost': 'inline label - always visible', 'Status': 'inline label - always visible', 'Commit_mi': 'inline label - always visible', 'Total_mi': 'inline label - always visible', });
lyr_SubwayStyleMapwoutLabels_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});