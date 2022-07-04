var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_1_0.png" />  4422.0000 - 9329.6000 <br />\
    <img src="styles/legend/Kecamatan_1_1.png" />  9329.6000 - 14237.2000 <br />\
    <img src="styles/legend/Kecamatan_1_2.png" />  14237.2000 - 19144.8000 <br />\
    <img src="styles/legend/Kecamatan_1_3.png" />  19144.8000 - 24052.4000 <br />\
    <img src="styles/legend/Kecamatan_1_4.png" />  24052.4000 - 28960.0000 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kecamatan_1];
lyr_Kecamatan_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'jml_pdd': 'jml_pdd', 'pdd_miskin': 'pdd_miskin', 'Laki-laki': 'Laki-laki', 'Perempuan': 'Perempuan', });
lyr_Kecamatan_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'jml_pdd': 'TextEdit', 'pdd_miskin': 'TextEdit', 'Laki-laki': 'TextEdit', 'Perempuan': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'Kecamatan': 'inline label', 'jml_pdd': 'inline label', 'pdd_miskin': 'inline label', 'Laki-laki': 'inline label', 'Perempuan': 'inline label', });
lyr_Kecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});