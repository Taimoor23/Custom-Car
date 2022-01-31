AFRAME.registerComponent("moving_car", {
  schema: {
    moveY: {
      type: "number",
      default: 0,
    },
  },

  tick: function () {
    window.addEventListener("click", (e) => {
      this.data.moveY = this.data.moveY - 0.01;
    });

    var pos = this.el.getAttribute("rotation");
    pos.x = this.data.moveX;
    pos.y = this.data.moveY;
    pos.z = this.data.moveZ;
    this.el.setAttribute("rotation", {x: pos.x,y: pos.y,z: pos.z,});
  },
});
