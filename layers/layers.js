var wms_layers = [];
var lyr_Sentinel2_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://localhost:8080/geoserver/ESA/wms?version%3D1.1.0",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                              params: {
                                "LAYERS": "Sentinel2",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Sentinel2",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Sentinel2_0, 0]);var format_StrukturGeologi_1 = new ol.format.GeoJSON();
var features_StrukturGeologi_1 = format_StrukturGeologi_1.readFeatures(json_StrukturGeologi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrukturGeologi_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_StrukturGeologi_1.addFeatures(features_StrukturGeologi_1);var lyr_StrukturGeologi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StrukturGeologi_1, 
                style: style_StrukturGeologi_1,
    title: 'Struktur Geologi<br />\
    <img src="styles/legend/StrukturGeologi_1_0.png" /> Batuan B sedimen dasar<br />\
    <img src="styles/legend/StrukturGeologi_1_1.png" /> Batuan Sedimentasi Breksi V<br />\
    <img src="styles/legend/StrukturGeologi_1_2.png" /> Batuan Vulkanik<br />\
    <img src="styles/legend/StrukturGeologi_1_3.png" /> Endapan Permukaan Alluvium<br />\
    <img src="styles/legend/StrukturGeologi_1_4.png" /> Endapan V Gunung Ungaran<br />\
    <img src="styles/legend/StrukturGeologi_1_5.png" /> Endapan V Lahar Gunung<br />\
    <img src="styles/legend/StrukturGeologi_1_6.png" /> Lapisan Marin<br />'
        });var format_Industri_2 = new ol.format.GeoJSON();
var features_Industri_2 = format_Industri_2.readFeatures(json_Industri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industri_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Industri_2.addFeatures(features_Industri_2);var lyr_Industri_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Industri_2, 
                style: style_Industri_2,
    title: 'Industri<br />\
    <img src="styles/legend/Industri_2_0.png" /> Sangat Sesuai<br />\
    <img src="styles/legend/Industri_2_1.png" /> Sesuai<br />\
    <img src="styles/legend/Industri_2_2.png" /> Cukup Sesuai<br />\
    <img src="styles/legend/Industri_2_3.png" /> Kurang Sesuai<br />\
    <img src="styles/legend/Industri_2_4.png" /> Tidak Sesuai<br />'
        });var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });var format_BatasAdministrasi_5 = new ol.format.GeoJSON();
var features_BatasAdministrasi_5 = format_BatasAdministrasi_5.readFeatures(json_BatasAdministrasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BatasAdministrasi_5.addFeatures(features_BatasAdministrasi_5);var lyr_BatasAdministrasi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasAdministrasi_5, 
                style: style_BatasAdministrasi_5,
                title: '<img src="styles/legend/BatasAdministrasi_5.png" /> Batas Administrasi'
            });

lyr_Sentinel2_0.setVisible(true);lyr_StrukturGeologi_1.setVisible(true);lyr_Industri_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_BatasAdministrasi_5.setVisible(true);
var layersList = [lyr_Sentinel2_0,lyr_StrukturGeologi_1,lyr_Industri_2,lyr_Sungai_3,lyr_Jalan_4,lyr_BatasAdministrasi_5];
lyr_StrukturGeologi_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GEO_': 'GEO_', 'GEO_ID': 'GEO_ID', 'KETERANGAN': 'KETERANGAN', });
lyr_Industri_2.set('fieldAliases', {'FID_1_Buff': 'FID_1_Buff', 'distance': 'distance', 'Class': 'Class', 'Bobot': 'Bobot', 'FID_1_Diss': 'FID_1_Diss', 'TGL': 'TGL', 'Class_1': 'Class_1', 'Bobot_1': 'Bobot_1', 'FID_5_Kele': 'FID_5_Kele', 'Class_12': 'Class_12', 'Bobot_12': 'Bobot_12', 'FID_2_Buff': 'FID_2_Buff', 'distance_1': 'distance_1', 'Class_1_13': 'Class_1_13', 'Bobot_1_13': 'Bobot_1_13', 'Total': 'Total', 'Kesesuaian': 'Kesesuaian', 'Luas': 'Luas', });
lyr_Sungai_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BatasAdministrasi_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_StrukturGeologi_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GEO_': 'TextEdit', 'GEO_ID': 'TextEdit', 'KETERANGAN': 'TextEdit', });
lyr_Industri_2.set('fieldImages', {'FID_1_Buff': 'TextEdit', 'distance': 'TextEdit', 'Class': 'TextEdit', 'Bobot': 'TextEdit', 'FID_1_Diss': 'TextEdit', 'TGL': 'TextEdit', 'Class_1': 'TextEdit', 'Bobot_1': 'TextEdit', 'FID_5_Kele': 'TextEdit', 'Class_12': 'TextEdit', 'Bobot_12': 'TextEdit', 'FID_2_Buff': 'TextEdit', 'distance_1': 'TextEdit', 'Class_1_13': 'TextEdit', 'Bobot_1_13': 'TextEdit', 'Total': 'TextEdit', 'Kesesuaian': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_BatasAdministrasi_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_StrukturGeologi_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'GEO_': 'no label', 'GEO_ID': 'no label', 'KETERANGAN': 'no label', });
lyr_Industri_2.set('fieldLabels', {'FID_1_Buff': 'no label', 'distance': 'no label', 'Class': 'no label', 'Bobot': 'no label', 'FID_1_Diss': 'no label', 'TGL': 'no label', 'Class_1': 'no label', 'Bobot_1': 'no label', 'FID_5_Kele': 'no label', 'Class_12': 'no label', 'Bobot_12': 'no label', 'FID_2_Buff': 'no label', 'distance_1': 'no label', 'Class_1_13': 'no label', 'Bobot_1_13': 'no label', 'Total': 'no label', 'Kesesuaian': 'no label', 'Luas': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BatasAdministrasi_5.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasAdministrasi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});