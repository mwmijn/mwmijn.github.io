// Initialize the map centered on Tucson Convention Center
var map = L.map('map').setView([32.2184, -110.9724], 17);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);




// Define current buildings as polygons with solid colors
var currentBuildings = [
{
    name: "Tucson Convention Center",
    coordinates: [
      [32.21825565272654, -110.97537762084877],
      [32.21790310494755, -110.97538264146132],
      [32.21776718254718, -110.97569894005055],
      [32.217223490913725, -110.97566379576305],
      [32.217231986119884, -110.97537762084877],
      [32.21717676726175, -110.97537762084877],
      [32.217185262472924, -110.97371579810155],
      [32.217690726107335, -110.97371077748899],
      [32.21769922127049, -110.97338443767467],
      [32.217567546153276, -110.97336937583702],
      [32.21754630821279, -110.97357020033832],
      [32.21719800528855, -110.97354007666301],
      [32.21720225289292, -110.97283719090888],
      [32.2173764045137, -110.97284723213397],
      [32.21738489970622, -110.97315348949846],
      [32.21769922127049, -110.973158510111],
      [32.217839391347724, -110.9731183452106],
      [32.217860629219075, -110.97320369562358],
      [32.219216041721666, -110.97316641149416],
      [32.219216041721666, -110.97423931436109],
      [32.21829153664734, -110.97421944578939],
      [32.21825565272654, -110.97537762084877]
    ]
  }
];

// Add polygons for current buildings with solid colors
currentBuildings.forEach(function(building) {
  L.polygon(building.coordinates, {
    color: '#f39c12', // bright orange
    fillColor: '#f39c12', // same color for fill
    fillOpacity: 0.6 // slightly transparent
  }).addTo(map).bindPopup(building.name);
});

// Define historic buildings as polygons with solid colors
var historicBuildings = [
  {
    name: "Ying On Building",
    coordinates: [
      [32.22021849322772, -110.97427717959991],
        [32.21981546899475, -110.97424894943266],
        [32.21983636659138, -110.97382902569663],
        [32.22024834680414, -110.9738643134057],
        [32.22021849322772, -110.97427717959991]
    ],
    description: "A historic chinese cultural center in the former chinese block.",
    imageUrl: "https://dcb.arizona.edu/static/media/c-2889_scan.5de55ad7e46990f0997e.png"
  },
  {
    name: "Santa Rita Hotel",
coordinates: [
        [32.21940571518225, -110.97460922804233],
        [32.21896335954209, -110.97462990651384],
        [32.21896086035137, -110.97390911407369],
        [32.219425708606735, -110.97391206814083],
        [32.21933573816257, -110.97421042894618],
        [32.21933573816257, -110.97449106534714],
        [32.219425708606735, -110.97448515721238],
        [32.21940571518225, -110.97460922804233]
      ],
    description: "Opened in 1904, it was a luxurious hotel that hosted many notable guests before its demolition in 1972.",
    imageUrl: "https://placehold.co/600x400?text=Santa+Rita+Hotel"
  },
  {
    name: "Pueblo Center Shops",
    coordinates: [
      [32.21875842570924, -110.97361666117048],
      [32.218610973018826, -110.97362847744006],
      [32.218610973018826, -110.97349849847578],
      [32.21846352008848, -110.9735044066101],
      [32.218451024066994, -110.97326808122021],
      [32.21875592651287, -110.97326808122021],
      [32.21875842570924, -110.97361666117048]
    ],
    description: "A collection of small businesses that were part of the vibrant downtown scene before urban renewal.",
    imageUrl: "https://placehold.co/600x400?text=Pueblo+Center+Shops"
  }
];

// Add polygons for historic buildings with solid colors
historicBuildings.forEach(function(building) {
  L.polygon(building.coordinates, {
    color: '#3498db', // bright blue
    fillColor: '#3498db', // same color for fill
    fillOpacity: 0.6 // slightly transparent
  }).addTo(map).bindPopup(`
    <h3>${building.name}</h3>
    <img src="${building.imageUrl}" alt="${building.name}" style="width:100%;max-width:300px;">
    <p>${building.description}</p>
    <a href="${building.imageUrl}" target="_blank">View full-size image</a>
  `);
});

// Add a legend to the map with updated colors
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<h4>Legend</h4>' +
                    '<i style="background:#3498db"></i> Pre-1967 Buildings<br>' +
                    '<i style="background:#f39c12"></i> Contemporary Buildings<br>' +
                    '<i style="background:#FF5733"></i> Urban Renewal Area';
    return div;
};

legend.addTo(map);

// Add CSS for the legend with a modern touch
var style = document.createElement('style');
style.innerHTML = `
    .legend {
        background: white;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }
    .legend h4 {
        margin: 0;
        font-size: 16px;
        text-align: center;
        color: #333;
    }
    .legend i {
        width: 18px;
        height: 18px;
        float: left;
        margin-right: 8px;
        opacity: 1; /* Fully opaque */
    }
`;
document.head.appendChild(style);
