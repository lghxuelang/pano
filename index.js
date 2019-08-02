window.onload = function() {
  document.getElementById("pano").addEventListener("change", upload, false);
};

// Load a panorama stored on the user's computer
function upload() {
  // Retrieve the chosen file and create the FileReader object
  var file = document.getElementById("pano").files[0];
  var reader = new FileReader();

  reader.onload = function() {
    var div = document.getElementById("your-pano");

    var PSV = new PhotoSphereViewer({
      // Panorama, given in base 64
      panorama: reader.result,

      // Container
      container: div,

      // Deactivate the animation
      time_anim: true,

      // Display the navigation bar
      navbar: true,

      // Resize the panorama
      size: {
        width: "100%",
        height: "700px"
      },

      // No XMP data
      usexmpdata: false,
      loading_msg: "全景加载中..."
    });
    window.pano = PSV;
  };

  reader.readAsDataURL(file);
}
