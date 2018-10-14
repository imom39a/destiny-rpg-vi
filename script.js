// note: key library was modified to enable capture in addEventListener

(function() {

  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  /*
  172,182 - Venus
  */
  function getRandomLocaltionId(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


    key('o', function(ev) {
      console.log("go to orbit");
        $('#navigation > section > ul > li:nth-child(1) > a > span').click();
    });

    key('a', function(ev) {
            $('a[data-subregionid=' + getRandomLocaltionId(172,182) + ']').trigger('click');
            $('#enemyList > table > tbody > tr:nth-child(1)').click();
            $('#activeBattleInfo').click();
            $('#content > div > div.col-md-8 > div.box.box-solid.patrollink').click();
            $('#patrolList > div.btn-group-vertical > a.btn.btn-block.btn-lg.bg-green').click();
            $('#enemyList > div > button').click();
            if($('#content > div > div.col-md-8 > div.box.box-solid.hreflink').length){
              $('#content > div > div.col-md-8 > div.box.box-solid.hreflink').click();
              $('#content > div > div.col-md-8 > div.box.box-solid.hreflink').remove();
            }
            if($('#patrolList > div.btn-group-vertical > button').length){
                $('#patrolList > div.btn-group-vertical > button').click();
                $('#patrolList > div.btn-group-vertical > button').remove();
            }
            ev.stopPropagation();
            ev.stopImmediatePropagation();
    });

    key('f', function(ev) {
      console.log("find and kill");
      if($("#enemyList > table td:contains(Spawn Ogre)").length){
        console.log("contains my enemy");
        $.each($("#enemyList > table td:contains(Spawn Ogre)"),function(idx, value){
          console.log("looping through each enemy");
            $(value).click();
            while(!$('#content > div > div.col-md-8 > div.box.box-solid.patrollink').length){
              console.log("attacking enemy");
              if($('#activeBattleInfo').length){
                console.log("attacked enemy");
                $('#activeBattleInfo').click();
              }
            }
            console.log("back to patrol");
            $('#content > div > div.col-md-8 > div.box.box-solid.patrollink').click();
        });
      } else {
        $("#enemyList > div > button").click();
      }
    });
})();
