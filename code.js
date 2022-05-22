var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating the game object
  var Sofia = createSprite(20,25,18,18);
  Sofia.shapeColor = "orange";
  var papelao1 = createSprite(10,70,100,20);
    papelao1.shapeColor = "brown";
  var papelao2 = createSprite(158,73,20,130);
    papelao2.shapeColor = "brown"; 
  var papelao3 = createSprite(397,180,700,20);
    papelao3.shapeColor = "brown"; 
  var papelao4 = createSprite(260,110,20,130);
    papelao4.shapeColor = "brown";
  var papelao5 = createSprite(131,270,20,190) ;
    papelao5.shapeColor = "brown";
  var papelao6 =createSprite(10,280,100,20);
    papelao6.shapeColor = "brown";
  var papelao7 = createSprite(200,397,20,300);
    papelao7.shapeColor = "brown";
  var papelao8 = createSprite(305,230,20,100);
    papelao8.shapeColor = "brown";
  var papelao9 = createSprite(300,270,120,20);  
    papelao9.shapeColor = "brown"
  var papelao10 = createSprite(270,45,100,20);
    papelao10.shapeColor = "brown";
  var papelao11 = createSprite(290,395,20,130);  
    papelao11.shapeColor = "brown";
  var papelao12 = createSprite(300,329,100,20);
    papelao12.shapeColor = "brown";
  var Taca = createSprite(385,394,18,18);
   Taca.shapeColor = "yellow"
    
function draw (){
 background("white")


  if (keyDown("up")){
  Sofia.y=Sofia.y-5;
 }
 if (keyDown("down")){
  
  Sofia.y=Sofia.y+5;

 }
   if (keyDown("RIGHT")){
  
  Sofia.x=Sofia.x+5;

 }
 
   if (keyDown("LEFT")){
  
  Sofia.x=Sofia.x-5;

 }
 
 

 
 createEdgeSprites();
 Sofia.bounceOff(topEdge);
 Sofia.bounceOff(bottomEdge);
 
  Sofia.bounceOff(leftEdge);
  Sofia.bounceOff(rightEdge);
  
 Sofia.bounceOff(papelao1);
 Sofia.bounceOff(papelao2);
 Sofia.bounceOff(papelao3);
 Sofia.bounceOff(papelao4);
 Sofia.bounceOff(papelao5);
 Sofia.bounceOff(papelao6);
 Sofia.bounceOff(papelao7);
 Sofia.bounceOff(papelao8);
 Sofia.bounceOff(papelao9);
 Sofia.bounceOff(papelao10);
 Sofia.bounceOff(papelao11);
 Sofia.bounceOff(papelao12);
 Sofia.bounceOff(Taca);
 
  if (Sofia.isTouching(Taca)){
    text("Você venceu!");
    textSize(24);
  }
 drawSprites()
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
