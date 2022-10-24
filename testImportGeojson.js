import fs from 'fs';
import turfArea from '@turf/area';

const readGeojsonFile = function(filePath) {

    const geojson = JSON.parse(fs.readFileSync(filePath));
    return geojson;

};

const calculateArea = function(feature) {
    if (feature.geometry.type === 'Polygon' || feature.geometry.type === 'MultiPolygon') {
        const areaM2 = turfArea(feature);
        return areaM2;
    } else {
        return undefined;
    }
};

const geojson = readGeojsonFile('./test.geojson');

const ids = geojson.features.map(function(feature) {
    return feature.properties.id;
});
const names = geojson.features.map(function(feature) {
    return feature.properties.nom;
});

const areas = geojson.features.map(function(feature) {
    return calculateArea(feature);
});

console.log(ids, names, areas);