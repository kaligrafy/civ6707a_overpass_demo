import fs from 'fs';
import turfArea from '@turf/area';
import turfLength from '@turf/length';

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

const calculateLength = function(feature) {
    if (feature.geometry.type === 'LineString' || feature.geometry.type === 'MultiLineString') {
        const lengthM = turfLength(feature, { units: 'meters' });
        return lengthM;
    } else {
        return undefined;
    }
};

const geojson = readGeojsonFile('./test.geojson');


const areaAndLengthById = {};
geojson.features.forEach(function(feature) {
    const area = calculateArea(feature);
    const length = calculateLength(feature);
    areaAndLengthById[feature.properties.id] = {
        area: area,
        length: length
    };
});

const nums = [1,2,3,4,5,6,7,8,9,10];

nums.forEach(function(num) {
    console.log(num ** 2);
});
/*
const ids = geojson.features.map(function(feature) {
    return feature.properties.id;
});
const names = geojson.features.map(function(feature) {
    return feature.properties.nom;
});
const areas = geojson.features.map(function(feature) {
    return calculateArea(feature);
});
*/

console.log(areaById);