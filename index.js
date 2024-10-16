let map;

async function initmap() {
    
    const position = { lat: 38.45, lng: -98.65 };

    const { Map } = await google.maps.importLibrary("maps");


    map = new Map(document.getElementById("map"), {
        center: { lat: 38.45, lng: -98.65  },
        zoom: 8,
        mapId: "3d0983788f10bc36"
    });

    const marker = new google.maps.marker.AdvancedMarkerElement({
        postition: myLatlng,
        map,
        title: "Click to zoom",
    });

    map.addListener("center_changed", () => {

        window.setTimeout(() => {
            map.panTo(marker.position);
        }, 30000);
        });
}



initmap();