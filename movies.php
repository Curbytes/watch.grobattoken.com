<?php
/*
 * @ PHP 5.6
 * @ Decoder version : 1.0.0.1
 */

include "includes/header.php";
if ($checkLicense["status"] != "Active") {
    echo "<script>window.location.href = 'oops.php';</script>";
    exit;
}
$FinalCategoriesArray = array();
$GetCateGories = webtvpanel_CallApiRequest($hostURL . $bar . "player_api.php?username=" . $username . "&password=" . $password . "&action=get_vod_categories");
if (!empty($GetCateGories)) {
    $FinalCategoriesArray = $GetCateGories;
}
include "includes/sideNav.php";
echo "<input type='hidden' id='wallet_address'>";
echo "\r\n<p class=\"SerchResult hideOnLoad\">\r\n    Search Result of <span id=\"searchOf\">American</span>\r\n    <span class=\"clearSearch\">Clear Search</span>\r\n</p>\r\n<h1 id=\"NoResultFound\" class=\"hideOnLoad\">No Result Found!!</h1>\r\n\r\n<div id=\"posts\">\r\n\r\n    <center id=\"fullLoader\"><img src=\"images/roundloader.gif\"  alt=\"tv image\"> \r\n      <p class=\"text-center\">LOADING DATA</p></center>\r\n    <ul class=\"free-wall grid effect-3 videoSection hideOnLoad\" id=\"MoviesContainer\">\r\n      \r\n    </ul>\r\n  </div>\r\n</div>\r\n<!--- Body Content End---> \r\n<!-- MODAL CODE -->\r\n\r\n<div class=\"modal fade movie-popup\" id=\"menuModal\"  tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-custom\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\" style=\"border:0;\"> <span class=\"p-close\" data-dismiss=\"modal\" aria-hidden=\"true\">x</span> </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"popup-content\">\r\n          <div class=\"col-sm-5 col-lg-3 col-md-4 col-xs-7\">\r\n            <div class=\"poster\">\r\n              <div class=\"poster-img\"><img src=\"img/poster.jpg\" alt=\"\" class=\"img-responsive\"></div>\r\n              <div class=\"ratting-bar row\">\r\n                <p class=\"pull-left\">Overall rate:</p>\r\n                <div class=\"stars pull-right\"> <span class=\"fa fa-star\"></span> <span class=\"fa fa-star\"></span> <span class=\"fa fa-star\"></span> <span class=\"fa fa-star\"></span> <span class=\"fa fa-star-o\"></span> </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-7 col-lg-9 col-md-8 col-xs-12\">\r\n            <div class=\"poster-details\">\r\n              <h2>SAN ANDREAS</h2>\r\n              <ul>\r\n                <li class=\"i-year\">2016</li>\r\n                <li class=\"i-duration\">114 min</li>\r\n                <li class=\"i-movie\">Action</li>\r\n                <li class=\"i-trailer\"><a href=\"#\">Watch trailer</a></li>\r\n              </ul>\r\n              <p>In the aftermath of a massive earthquake in California, a rescue-chopper pilot <br>\r\n                makes a dangerous journey across the state in order to rescue his estranged <br>\r\n                daughter.</p>\r\n              <div class=\"fav row\">\r\n                <div class=\"res-list\">\r\n                  <select>\r\n                    <option>480p</option>\r\n                    <option selected>720p</option>\r\n                    <option>1080p</option>\r\n                  </select>\r\n                </div>\r\n                <button class=\"gd\">3D</button>\r\n                <button class=\"add-fav\"></button>\r\n              </div>\r\n              <div class=\"watch-now row\">\r\n                <button class=\"rippler rippler-default\">watch it now</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content --> \r\n  </div>\r\n  <!-- /.modal-dialog --> \r\n<script src='https://content.jwplatform.com/libraries/fgbTqCCh.js'></script>\r\n<!-- <script src='js/ajPlayer.js'></script> -->\r\n<script src='js/flowplayer/flowplayer.js'></script>\r\n\r\n<script src='js/mediaPlayers.js'></script>\r\n<link rel=\"stylesheet\" href=\"js/flowplayer/skin/skin.css\" media=\"screen\">\r\n  <script type=\"text/javascript\">\r\n\r\n    \$(document).ready(function(){\r\n      if(\$(document).find('.onloadCallCategory').length != 0)\r\n      {\r\n        var omLoadCategoryID = \$(document).find('.onloadCallCategory').data('categoryid');\r\n        var parentControlData = \$(document).find('.onloadCallCategory').data('pcon');\r\n        if(parentControlData == 1)\r\n        {\r\n            getData(omLoadCategoryID);\r\n        }\r\n        else\r\n        {\r\n          getData(omLoadCategoryID);\r\n        }\r\n        \r\n        \$(document).find(\".rippler\").rippler({\r\n    effectClass      :  'rippler-effect'\r\n    ,effectSize      :  0      // Default size (width & height)\r\n    ,addElement      :  'div'   // e.g. 'svg'(feature)\r\n    ,duration        :  400\r\n  });\r\n      }\r\n      \$( document ).on(\"click\", \".Playclick\", function(){\r\n        var StreamId = \$(this).find('.streamId').val();\r\n        var StreamType = \$(this).find('.streamId').data('streamtype');\r\n        \$('.Playclick').removeClass('playingChanel');\r\n        \$(this).addClass('playingChanel');\r\n        getVideoLinkAjax(StreamId,StreamType);  \r\n        \r\n      });   \r\n\r\n      \$('#SearchData').keypress(function (e) {\r\n          var key = e.which;\r\n          if(key == 13)  // the enter key code\r\n          {\r\n            callSearchFun(); \r\n          }\r\n      });\r\n\r\n       \$( document ).on(\"click\", \"#SearchBtn\", function(){\r\n            callSearchFun();   \r\n        });\r\n        \$( document ).on(\"click\", \".clearSearch\", function(){\r\n            removeSearchSec();\r\n        });\r\n\r\n\r\n        \$( document ).on(\"click\", \".LoadMoreBtn\", function(){\r\n            \$('.LoadingMoreFa').removeClass('hideOnload');\r\n            var categoryid =\$(this).data('categoryid'); \r\n            var dataoffset =\$(this).data('dataoffset');\r\n            datalimit = Number(28)+Number(dataoffset);\r\n            dataoffset = Number(dataoffset)+Number(1); \r\n            jQuery.ajax({\r\n              type:\"POST\",\r\n              url:\"includes/ajax-control.php\",\r\n              dataType:\"text\",\r\n              data:{\r\n              action:'getMoviesDataFromCategoryId',\r\n              categoryID:categoryid,\r\n              dataoffset:dataoffset,\r\n              datalimit:datalimit,\r\n              hostURL: \"";
echo $XCStreamHostUrl . $bar;
echo "\"\r\n              },  \r\n                success:function(response2){ \r\n                  \$('.LoadingMoreFa').addClass('hideOnload');\r\n                  \$('.LoadMoreBtn').remove();\r\n                  var MoviesContainer = \$('#MoviesContainer');\r\n                  MoviesContainer.append(response2);\r\n                  setformatOfListsByClass('.thumb-b');\r\n                   \$('html, body').animate({\r\n                      scrollTop: Number(\$('.un-'+dataoffset).offset().top)-Number(140)\r\n                    }, 1500);\r\n                   \$(document).find(\".rippler\").rippler({\r\n    effectClass      :  'rippler-effect'\r\n    ,effectSize      :  0      // Default size (width & height)\r\n    ,addElement      :  'div'   // e.g. 'svg'(feature)\r\n    ,duration        :  400\r\n  });\r\n                }\r\n              });   \r\n          });   \r\n\r\n  });\r\n\r\n  function callSearchFun()\r\n  {\r\n      \$('.LoadMoreBtn').addClass('hideOnLoad');\r\n      var SearchData = \$(\"#SearchData\").val();   \r\n       \$('.visible-sec').removeClass('visible-sec');\r\n       \$('.SerchResult').addClass('hideOnLoad');\r\n       \$('#NoResultFound').addClass('hideOnLoad');\r\n       if(SearchData != \"\")\r\n       {\r\n          \$('.streamList').addClass('hideOnLoad');\r\n          var moive_namesearch = \$('.serch_key');\r\n          filter = SearchData.toUpperCase();\r\n          CustomIndex = 0;\r\n          moive_namesearch.each(function( index ) {\r\n            if (\$( this ).val().toUpperCase().indexOf(filter) > -1) {\r\n              \$(\".\"+\$(this).data('parentliclass')).removeClass('hideOnLoad');\r\n              \$(\".\"+\$(this).data('parentliclass')).addClass('visible-sec');\r\n              CustomIndex = 1;\r\n            }\r\n          });  \r\n          if(CustomIndex == 0)\r\n          {\r\n              \$('#NoResultFound').removeClass('hideOnLoad');\r\n          }\r\n          \$('#search').removeClass('open');\r\n          \$('#searchOf').text(filter);\r\n          \$('.SerchResult').removeClass('hideOnLoad');\r\n          setformatOfListsByClass('.visible-sec');\r\n\r\n       }\r\n       else\r\n       {\r\n          swal('Enter keyword for search.',{button: false});\r\n          setTimeout(function(){swal.close();},2000);\r\n       }\r\n  }\r\n\r\n  function removeSearchSec()\r\n  {\r\n      \$('.LoadMoreBtn').removeClass('hideOnLoad');\r\n     \$('.SerchResult').addClass('hideOnLoad'); \r\n     \$('#SearchData').val(''); \r\n     \$('#NoResultFound').addClass('hideOnLoad');\r\n     \$('.streamList').removeClass('hideOnLoad'); \r\n      setformatOfListsByClass('.thumb-b');\r\n  }\r\n\r\n  function confirmparent(\$categoryID = '', \$dataoffset = '0' ,\$datalimit = '28')\r\n  {\r\n      getData(\$categoryID);\r\n  }  \r\n\r\n\r\n  function getData(\$categoryID = '', \$dataoffset = '0' ,\$datalimit = '28')\r\n  {\r\n    \$(\"#NoResultFound\").addClass(\"hideOnLoad\");\r\n    removeSearchSec();\r\n   //\$('li .active').removeClass('active');\r\n    \$(this).addClass('active'); \r\n    var MoviesContainer = \$('#MoviesContainer');\r\n    \$('#fullLoader').removeClass('hideOnLoad');\r\n    MoviesContainer.html('');\r\n    MoviesContainer.addClass('hideOnLoad');\r\n   jQuery.ajax({\r\n            type:\"POST\",\r\n            url:\"includes/ajax-control.php\",\r\n            dataType:\"text\",\r\n            data:{\r\n            action:'getMoviesDataFromCategoryId',\r\n            categoryID:\$categoryID,\r\n            dataoffset:\$dataoffset,\r\n            datalimit:\$datalimit,\r\n            hostURL: \"";
echo $XCStreamHostUrl . $bar;
echo "\"\r\n            },  \r\n              success:function(response2){ \r\n                \$('#fullLoader').addClass('hideOnLoad');\r\n                if(response2 != \"0\")\r\n                {\r\n                    MoviesContainer.html('');\r\n                    MoviesContainer.html(response2);\r\n                    MoviesContainer.removeClass('hideOnLoad');\r\n                    setformatOfListsByClass('.thumb-b');\r\n                   \$(document).find(\".rippler\").rippler({\r\n    effectClass      :  'rippler-effect'\r\n    ,effectSize      :  0      // Default size (width & height)\r\n    ,addElement      :  'div'   // e.g. 'svg'(feature)\r\n    ,duration        :  400\r\n  });\r\n                }\r\n                else\r\n                {\r\n                    \$(\"#NoResultFound\").removeClass(\"hideOnLoad\");\r\n                }\r\n                /*\$getStreamsfromCategory = response2;\r\n                \$('.chanels').html(\$getStreamsfromCategory);\r\n                var StreamId = \$('.Playclick').first().find('.streamId').val();\r\n                var StreamType = \$('.Playclick').first().find('.streamId').data('streamtype');\r\n                \$('.Playclick').first().addClass('playingChanel');\r\n                getVideoLinkAjax(StreamId,StreamType);\r\n                getEPGdata(StreamId);*/\r\n              }\r\n            });\r\n  }\r\n\r\n  function setformatOfListsByClass(ClassName = \"\")\r\n  {\r\n      \$(\".free-wall\").each(function() {\r\n      var wall = new Freewall(this);\r\n      wall.reset({\r\n        selector: ClassName,\r\n        animate: true,\r\n        cellW: 185,\r\n        cellH: 278,\r\n        fixSize: 0,\r\n        gutterY: 0,\r\n        gutterX: -15,\r\n        onResize: function() {\r\n          wall.fitWidth();\r\n        }\r\n      })\r\n      wall.fitWidth();\r\n      /* \$(this).find('.iconImage').parent().parent().addClass('checkingcontrol');\r\n        console.log(\$(this).find('.iconImage').parent().parent().attr('data-width')+\"px\");*/\r\n        \$(this).find('.iconImage').css('width',\$(this).find('.iconImage').parent().parent().attr('data-width')+\"px\");\r\n        \$(this).find('.iconImage').css('height',\$(this).find('.iconImage').parent().parent().attr('data-height')+\"px\");\r\n    });\r\n    \$(window).trigger(\"resize\");\r\n  }\r\n\r\n  function showInfo(\$streamID = '')\r\n  {\r\n    var fullDataVal = \$(\"#fullData-\"+\$streamID).val();\r\n    /*\$('#fullLoader').removeClass('hideOnLoad');*/\r\n    \$('.sectionNo'+\$streamID+'').addClass('InfoLoading');\r\n    jQuery.ajax({\r\n            type:\"POST\",\r\n            url:\"includes/ajax-control.php\",\r\n            dataType:\"text\",\r\n            data:{\r\n            action:'getMovieInfo',\r\n            movieID:\$streamID,\r\n            fullDataVal:fullDataVal,\r\n            hostURL: \"";
echo $XCStreamHostUrl . $bar;
echo "\"\r\n            },  \r\n              success:function(response2){\r\n               \r\n                \$('.sectionNo'+\$streamID+'').removeClass('InfoLoading');\r\n                \$(document).find('.modal-dialog-custom').html(response2);\r\n                \$('#menuModal').modal('show');\r\n                \$(document).find(\".rippler\").rippler({\r\n    effectClass      :  'rippler-effect'\r\n    ,effectSize      :  0      // Default size (width & height)\r\n    ,addElement      :  'div'   // e.g. 'svg'(feature)\r\n    ,duration        :  400\r\n  });\r\n              }\r\n            })\r\n\r\n  }\r\n\r\n\r\n  function watchMovie(\$movie)\r\n  {\r\n    \$('#player-holder').removeClass('hideOnLoad');\r\n    \$('.poster-details').addClass('hideOnLoad');\r\n    \$('.backToInfo').removeClass('hideOnLoad');\r\n    ";
$resp = webtvpanel_checkPlayer();
if ($resp) {
    $livePlayer = $resp->{$username}->live_player;
    $moviesPlayer = $resp->{$username}->movie_player;
    $seriesPlayer = $resp->{$username}->series_player;
    if ($moviesPlayer == "JW Player") {
        echo "        \$movieVideoLink = \"";
        echo $XCStreamHostUrl . $bar;
        echo "movie/";
        echo $username . "/" . $password;
        echo "/\"+\$movie;\r\n        set_jwplayer(\$movieVideoLink);\r\n        ";
    } else {
        if ($moviesPlayer == "Flow player") {
            echo "        \$movieVideoLink = \"";
            echo $XCStreamHostUrl . $bar;
            echo "movie/";
            echo $username . "/" . $password;
            echo "/\"+\$movie;\r\n        set_flowplayer(\$movieVideoLink);\r\n        ";
        } else {
            if ($moviesPlayer == "AJ player") {
                echo "        \$movieVideoLink = \"";
                echo $XCStreamHostUrl . $bar;
                echo "movie/";
                echo $username . "/" . $password;
                echo "/\"+\$movie;\r\n        set_ajplayer(\$movieVideoLink);\r\n        ";
            } else {
                echo "        \$movieVideoLink = \"";
                echo $XCStreamHostUrl . $bar;
                echo "movie/";
                echo $username . "/" . $password;
                echo "/\"+\$movie;\r\n        set_jwplayer(\$movieVideoLink);\r\n        ";
            }
        }
    }
} else {
    echo "        \$movieVideoLink = \"";
    echo $XCStreamHostUrl . $bar;
    echo "movie/";
    echo $username . "/" . $password;
    echo "/\"+\$movie;\r\n        set_jwplayer(\$movieVideoLink);\r\n        ";
}
echo "  }\r\n  </script>\r\n  \r\n        ";
include "includes/footer.php";

?>