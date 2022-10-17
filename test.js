
import fetch from 'node-fetch';

const fetchOpenStreetMapData = async function() {
    const api = await fetch('https://www.overpass-api.de/api/interpreter?', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:`
      [out:json]
      [bbox:45.38826377760308,-73.970947265625,45.42086519967432,-73.9281177520752];
      way["highway"="tertiary"]["name"~"saint", i];
      (._;>;);
      out body;
      `
    });
    const answer = await api.json();
    console.log(answer);
};

await fetchOpenStreetMapData();