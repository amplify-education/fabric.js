(function() {

  // eslint-disable-next-line
  var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
  // eslint-disable-next-line
  var playIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23FFFFFF;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:green;' width='165.545' height='362.18'/%3E%3Crect x='366.988' y='408.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:blue;' width='165.544' height='362.179'/%3E%3C/g%3E%3C/svg%3E";
  // eslint-disable-next-line
  var pauseIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23FF5555;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:orange;' width='165.545' height='362.18'/%3E%3Crect x='366.988' y='408.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:black;' width='165.544' height='362.179'/%3E%3C/g%3E%3C/svg%3E";

  var deleteIconX = -0.5;
  var deleteIconY = -0.5;
  var deleteIconOffsetX = -25;
  var deleteIconOffsetY = 100;
  var deleteimg = document.createElement('img');

  deleteimg.src = deleteIcon;

  var playIconX = -0.5;
  var playIconY = -0.5;
  var playIconOffsetX = -25;
  var playIconOffsetY = 20;
  var playImg = document.createElement('img');
  playImg.src = playIcon;
  var pauseImg = document.createElement('img');
  pauseImg.src = pauseIcon;


  if (fabric.Audio_token) {

    var audioTokenControls = fabric.Audio_token.prototype.controls = { };
    // create custom textbox control for delete icon
    audioTokenControls.deleteControl = new fabric.Control({
      // delete icon x position relative to audio_token
      x: deleteIconX,

      // delete icon y position relative to audio_token
      y: deleteIconY,

      // delete icon x offset position
      // relative to audio_token to display outside
      // of the audio_token
      offsetX: deleteIconOffsetX,

      // delete icon Y offset position
      // relative to audio_token to display outside
      // of the audio_token
      offsetY: deleteIconOffsetY,

      cursorStyle: 'pointer',
      mouseUpHandler: function (eventData, target) {
        var canvas = target.canvas;

        canvas.remove(target);
        canvas.requestRenderAll();
        //sendTextboxEvent(WORKSHEET_EVENT.DELETED_TEXTBOX, target.width, target.height)
      },
      render: function (ctx, left, top, styleOverride, fabricObject) {
        var scale = 1;
        var size = this.cornerSize * scale;

        fabricObject.controls.deleteControl.y = deleteIconY;
        fabricObject.controls.deleteControl.offsetX = deleteIconOffsetX * scale;
        fabricObject.controls.deleteControl.offsetY = deleteIconOffsetY * scale;

        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(deleteimg, -size / 2, -size / 2, size, size);
        ctx.restore();
      },
      cornerSize: 32
    });

    audioTokenControls.playControl = new fabric.Control({
      // delete icon x position relative to audio_token
      x: playIconX,

      // play icon y position relative to audio_token
      y: playIconY,

      // play icon x offset position
      // relative to audio_token to display outside
      // of the audio_token
      offsetX: playIconOffsetX,

      // play icon Y offset position
      // relative to audio_token to display outside
      // of the audio_token
      offsetY: playIconOffsetY,

      cursorStyle: 'pointer',
      mouseUpHandler: function (eventData, target) {
        var canvas = target.canvas;

        target.playControlPressed && target.playControlPressed(eventData);
        canvas.requestRenderAll();
        //sendTextboxEvent(WORKSHEET_EVENT.playD_TEXTBOX, target.width, target.height)
      },
      render: function (ctx, left, top, styleOverride, fabricObject) {
        var scale = 1;
        var size = this.cornerSize * scale;
        var controlImg = fabricObject.isPlaying ? pauseImg : playImg;

        fabricObject.controls.playControl.y = playIconY;
        fabricObject.controls.playControl.offsetX = playIconOffsetX * scale;
        fabricObject.controls.playControl.offsetY = playIconOffsetY * scale;

        ctx.save();
        ctx.translate(left, top);
        ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
        ctx.drawImage(controlImg, -size / 2, -size / 2, size, size);
        ctx.restore();
      },
      cornerSize: 32
    });
  }
})();
