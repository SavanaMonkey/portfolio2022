setTimeout(() => {
  const img = $("#title_1");

  $(document).ready(function () {
    pick(img);
  });
  function pick() {
    const colorThief = new ColorThief();
    const color = colorThief.getColor($("#title_1")[0]);
    if (color) {
      console.log(color);
    } else {
      console.log(1);
    }
    $("#title_2").css("background", `rgb(${color})`);
  }
}, 5000);
