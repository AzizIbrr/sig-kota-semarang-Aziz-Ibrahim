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
    <img src="styles/legend/Kecamatan_1_0.png" /> Banyumanik<br />\
    <img src="styles/legend/Kecamatan_1_1.png" /> Candisari<br />\
    <img src="styles/legend/Kecamatan_1_2.png" /> Gajahmungkur<br />\
    <img src="styles/legend/Kecamatan_1_3.png" /> Gayamsari<br />\
    <img src="styles/legend/Kecamatan_1_4.png" /> Genuk<br />\
    <img src="styles/legend/Kecamatan_1_5.png" /> Gunungpati<br />\
    <img src="styles/legend/Kecamatan_1_6.png" /> Mijen<br />\
    <img src="styles/legend/Kecamatan_1_7.png" /> Ngaliyan<br />\
    <img src="styles/legend/Kecamatan_1_8.png" /> Pedurungan<br />\
    <img src="styles/legend/Kecamatan_1_9.png" /> Semarang Barat<br />\
    <img src="styles/legend/Kecamatan_1_10.png" /> Semarang Selatan<br />\
    <img src="styles/legend/Kecamatan_1_11.png" /> Semarang Tengah<br />\
    <img src="styles/legend/Kecamatan_1_12.png" /> Semarang Timur<br />\
    <img src="styles/legend/Kecamatan_1_13.png" /> Semarang Utara<br />\
    <img src="styles/legend/Kecamatan_1_14.png" /> Tembalang<br />\
    <img src="styles/legend/Kecamatan_1_15.png" /> Tugu<br />\
    <img src="styles/legend/Kecamatan_1_16.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kecamatan_1];
lyr_Kecamatan_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'jml_pdd': 'jml_pdd', 'pdd_miskin': 'pdd_miskin', 'Laki-laki': 'Laki-laki', 'Perempuan': 'Perempuan', });
lyr_Kecamatan_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'jml_pdd': 'TextEdit', 'pdd_miskin': 'TextEdit', 'Laki-laki': 'TextEdit', 'Perempuan': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'Kecamatan': 'inline label', 'jml_pdd': 'inline label', 'pdd_miskin': 'inline label', 'Laki-laki': 'inline label', 'Perempuan': 'inline label', });
lyr_Kecamatan_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});