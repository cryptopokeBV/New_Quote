function initMap() {
    const input = document.getElementById("c_address");
    const autocomplete = new google.maps.places.Autocomplete(input);
    
    autocomplete.addListener("place_changed", () => {
      
      const place = autocomplete.getPlace();

        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          //window.alert("No details available for input: '" + place.name + "'");
          swal("Please fill all the *Required fields","Click okay to continue", "warning");
          return;
      }
    });
}
