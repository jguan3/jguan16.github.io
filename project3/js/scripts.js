function initMap() {
  const center = { lat: 36.1699, lng: -115.1398 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
    mapTypeId: "hybrid"
  });

  const locations = [
    { pos: { lat: 36.1699, lng: -115.1398 }, title: "Las Vegas" },
    { pos: { lat: 36.1147, lng: -115.1728 }, title: "The Strip" },
    { pos: { lat: 36.1215, lng: -115.1739 }, title: "Fremont Street" }
  ];

  locations.forEach(loc => {
    const marker = new google.maps.Marker({
      position: loc.pos,
      map: map,
      title: loc.title
    });
    const infoWindow = new google.maps.InfoWindow({
      content: `<h3>${loc.title}</h3><p>My favorite spot!</p>`
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  });

  const draggableMarker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Drag me!",
    draggable: true,
    animation: google.maps.Animation.DROP
  });

  draggableMarker.addListener("dragend", function() {
    alert("Marker dropped at: " + draggableMarker.getPosition().toString());
  });

  const button = document.getElementById("questionButton");
  button.addEventListener("click", function() {
    alert("If you have questions, contact me at:\njguan3@cps.edu");
  });
}
