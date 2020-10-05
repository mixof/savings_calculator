/** 
 * Polyfills
 **/
if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function(target, firstSource) {
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }
      
      var to = Object(target);
      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) {
          continue;
        }
        
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
      return to;
    }
  });
}


//ios checker (may be deleted i think)
(function(a) {
  (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);

document.addEventListener("DOMContentLoaded", function(e) {
  
});
//RUN SCRIPTS
$(document).ready(function() {
  
  //Smooth scrolling on SALA page
  $('.inner-nav-item-link').click(function(e) {
    var anchor = $(this).attr('href');
    e.preventDefault();
    scrollToAnchor(anchor);
  })

  $('.scroll-slow').click(function(e) {
    var anchor = $(this).attr('href');
    e.preventDefault();
    //scrollToAnchor(anchor);
    $('html,body').animate({
      scrollTop: $(anchor).offset().top + 5
    }, 'slow');
  })
  
  $('.faq-button').click(function(e) {
    var anchor = $(this).attr('href');
    e.preventDefault()
    $('html,body').animate({
      scrollTop: $(anchor).offset().top - 20
    }, 'slow');
  })

    
  $('.subsala-button').click(function(e) {
    var anchor = $(this).attr('href');
    e.preventDefault()
    $('html,body').animate({
      scrollTop: $(anchor).offset().top - 20
    }, 'slow');
  })
  
  //BxSlider on SALA page
  addBxSlider('#sala-slider', '.sala-item', 3, true, true);
  addBxSlider('#subsala-slider', '.sala-item', 3, true, false);
  addBxSlider('#subsala-slider-less3items', '.sala-item', 3, true, false, false);
  addBxSlider('#sala-insights-slider', '.sala-item', 3, true, false);
  addBxSlider('#subsala-insights-slider', '.sala-item', 3, true, false);
  
  /*
  $('.down-nav>a').click(function(e){
  	e.preventDefault();
  	$('.down-nav').toggleClass('active');
  });
  */
  $('#vao').click(function(e) {
    e.preventDefault();
    $('#hb').show(300);
    $(this).hide();
  });
  
  //Check if the page is running under ios. If so, handle mouse move instead just a click 
  //(read more about hover effect before click execution under mobile )
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
     $('#search').on("mousedown ", handleSearchBtnClick);
  } else {
    $('#search').click(handleSearchBtnClick);
  }
  
  //Truncate  on resize ( truncation starts only when you stop to resize a screen)
  var truncateId;
  
  $(window).resize(function() {
    if (truncateId) {
      clearTimeout(truncateId);
    }
    truncateId = setTimeout(function() {
      $('.notification-result-item-body').truncateText();
      $('.recommended-list .infoblock-list-item .infoblock-list-item-title').truncateText();
      truncateId = undefined;
    }, 500);
  });
  
  updateBellAreaMenuItem();
  //Truncate items at first time
  $('.recommended-list .infoblock-list-item .infoblock-list-item-title').truncateText();
  
  addThreePicSlider();
  addThreePicSliderTypeDependingOnWidth();
  
  $('.nav-block').click(function() {
    $('.nav-block').toggle(false);
    //for search menu btn
    $('#form-search').toggle(false);
    $('#form-search .search-query-placeholder').trigger('focus');
    var tmpStr = $('#form-search .search-query-placeholder').val();
    $('#form-search .search-query-placeholder').val('');
    $('#form-search .search-query-placeholder').val(tmpStr);
    $("#search").removeClass('active');
    //for notification menu btn
    $(".notification-menu-item").removeClass('active');
  });
  
  $(document).on('mouseover', '.help-icon', function(event) {
    $('.help-tooltip').stop().fadeIn();
  });
  $(document).on('mouseout', '.help-tooltip', function(event) {
    window.eventTarget = false;
    $(document).on('mouseover', '.help-tooltip', function(event) {
      window.eventTarget = true;
      $('.help-tooltip').stop().fadeIn('fast');
    });
    $(document).on('mouseout', '.help-tooltip,.help-icon', function(event) {
      $('.help-tooltip').stop().fadeOut('fast');
    });
    $('.help-tooltip').stop().fadeOut('fast');
  });
  
  $(document).on('mouseover', '.pass-hint-help-icon', function(event) {
    $('.pass-hint-help-tooltip').stop().fadeIn();
    $('.pass-hint-help-tooltip .open').show();
    $('.pass-hint-help-tooltip .closed').hide();
    
    processHint();
  });
  
  $(document).on('mouseout', '.pass-hint-help-tooltip', function(event) {
    window.eventTarget = false;
    /*
    $(document).on('mouseover','.pass-hint-help-tooltip',function(event) {
    	window.eventTarget = true;
    	$('.pass-hint-help-tooltip').stop().fadeIn('fast');
    	$('.pass-hint-help-tooltip .open').show();
    	$('.pass-hint-help-tooltip .closed').hide();
    });
    */
    $(document).on('mouseout', 'pass-hint-.help-tooltip,.pass-hint-help-icon', function(event) {
      $('.pass-hint-help-tooltip').stop().fadeOut('fast');
      $('.pass-hint-help-tooltip .open').hide();
      $('.pass-hint-help-tooltip .closed').show();
    });
    $('.pass-hint-help-tooltip').stop().fadeOut('fast');
    $('.pass-hint-help-tooltip .open').hide();
    $('.pass-hint-help-tooltip .closed').show();
  });
  
  $('.close-popup').click(function() {
    $('.popup').fadeOut();
    $('#white-shadow').hide();
  });
  $('#white-shadow').click(function() {
    $('.popup').fadeOut();
    $('#white-shadow').hide();
  });
  $('.popup11').click(function() {
    if (window.innerWidth < 1000) {
      $('#black-shadow').trigger('click');
    }
    $('.popup1').fadeIn();
    $('#white-shadow').show();
  });
  $('.popup22').click(function() {
    $('.popup').fadeOut();
    $('.popup2').fadeIn();
    $('#white-shadow').show();
  });
  $('.popup33').click(function() {
    if (window.innerWidth < 1000) {
      $('#black-shadow').trigger('click');
    }
    $('.popup3').fadeIn();
    $('#white-shadow').show();
  });
  
  $('.question-answer-area').attr('maxlength', "500");
  questionFormBlockFiveHundred()
});

//FUNCTION DEFINITIONS
function scrollMinimal(elem, smooth) {
  var cTop = elem.offset().top;
  var cHeight = elem.outerHeight(true);
  var windowTop = $(window).scrollTop();
  var visibleHeight = $(window).height();
  
  //  console.log("cTop: " + cTop + "| cHeight: " + cHeight + "| windowTop: " + windowTop + "| visibleHeight: " + visibleHeight);
  if (cTop < windowTop) {
    if (cTop - 10 > 0) {
      if (smooth) {
        $('body').animate({
          'scrollTop': cTop - 10
        }, 'slow', 'swing');
      } else {
        $(window).scrollTop(cTop - 10);
      }
    } else {
      if (smooth) {
        $('body').animate({
          'scrollTop': cTop
        }, 'slow', 'swing');
      } else {
        $(window).scrollTop(cTop);
      }
    }
  } else if (cHeight + cTop > visibleHeight) {
    if (cTop - 10 > 0) {
      if (smooth) {
        $('body').animate({
          'scrollTop': cTop - 10
        }, 'slow', 'swing');
      } else {
        $(window).scrollTop(cTop - 10);
      }
    } else {
      if (smooth) {
        $('body').animate({
          'scrollTop': cTop
        }, 'slow', 'swing');
      } else {
        $(window).scrollTop(cTop);
      }
    }
  }
};

//if showSliderOnWiderScreen = true and number of items > maxItemsNumber, then show slider on wider screens 
function addBxSlider(parentSelector, itemSelector, maxItemsNumber, showSliderOnWiderScreen, isAutoPlaying, isInfiniteLoop) {
  
  if ($(parentSelector).length > 0) {
    var childItemSelector = parentSelector + ' ' + itemSelector,
      itemsNumber = $(childItemSelector).length,
      isSliderable = itemsNumber > maxItemsNumber,
      //configs
      initialConfig = {
        auto: isAutoPlaying,
        speed: 2000,
        pause: 5000,
        mode: 'horizontal',
        captions: false,
        controls: true,
        pager: true,
        touchEnabled: true,
        maxSlides: 3,
        slideMargin: 1,
        moveSlides: 1,
        responsive: true,
        adaptiveHeight: true,
        infiniteLoop:isInfiniteLoop,
      },
      ifScroderableOnWiderScreensConfig = {
        controls: isSliderable,
        pager: isSliderable,
        touchEnabled: isSliderable,
      },
      ifShowSliderOnWiderScreenConfig = {
        controls: isSliderable && showSliderOnWiderScreen,
        pager: isSliderable && showSliderOnWiderScreen,
        touchEnabled: isSliderable && showSliderOnWiderScreen,
      };
    
    // first init. render one or three slides depending on width
    if (window.innerWidth <= 1000) {
      var bx = $(parentSelector).bxSlider(Object.assign({}, initialConfig, {
        maxSlides: 1,
      }));
    } else {
      var bx = $(parentSelector).bxSlider(Object.assign({}, initialConfig, {
        maxSlides: 3,
      }, ifShowSliderOnWiderScreenConfig));
    }
    // redraw on resize. render one or three slides depending on width
    $(window).resize(function() {
      if (bx) {
        if (window.innerWidth <= 1000) {
          bx.reloadSlider(Object.assign({}, initialConfig, {
            maxSlides: 1,
          }));
        }
        if (window.innerWidth > 1000) {
          bx.reloadSlider(Object.assign({}, initialConfig, {
            maxSlides: 3,
          }, ifShowSliderOnWiderScreenConfig));
        }
      }
    })
  }
};


function scrollToAnchor(id) {
  var tag = $(id);
  $('html,body').animate({
    scrollTop: tag.offset().top
  }, 'slow');
};


function addThreePicSlider() {
  $('.three-pic-gallery .navs img, .three-pic-gallery .dots button').click(function() {
    var i = $(this).index();
    $('.three-pic-gallery .main-img img').removeClass('active');
    $('.three-pic-gallery .dots button').removeClass('active');
    $('.three-pic-gallery .main-img img').eq(i).addClass('active');
    $('.three-pic-gallery .dots button').eq(i).addClass('active');
  });
};


function addThreePicSliderTypeDependingOnWidth() {
  var w_body = $('body').width();
  if (w_body <= 700) {
    $('.gallery').addClass('mobile');
  } else {
    $('.gallery').removeClass('mobile');
  }
}

function completeLogin(source) {
  if ($('body').hasClass('mobile-open-menu')) {
    $('#black-shadow').toggle();
    $('body').toggleClass('mobile-open-menu');
  }

  addBxSlider('#subsala-slider', '.sala-item', 3, true, false);  
  
  addThreePicSlider();
  addThreePicSliderTypeDependingOnWidth();
  
  setTimeout(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $(document).scrollTop(0);
    $('body').scrollTop(0);
    $('html').scrollTop(0);
    $('window').scrollTop(0);
    window && window.scroll(0, 0);
    window.scrollTo(0, 0);
  }, 10);
  
  $('body').addClass('user-authorized');
  initMenu();
  toLogo();
  initNewTags();
  showUpdatePopup();
  updateBellAreaMenuItem();
  
  // It has been written due to the issue: 
  //"In IE after login you can't click on the bell button until you click somwhere else"
  // So programmable clicks were used to fix the issue somehow
  if ((!(window.ActiveXObject) && "ActiveXObject" in window)) {
    // console.log("Under IE after login ");
    $(window).trigger('resize');
    // $(".notification-main-menu-btn").click();
    // $(".notification-main-menu-btn").click();
  }
  
  
  switch (source) {
    case 'change-password':
    case 'new-password':
    case 'login':
      ga('send', 'event', 'Login and Signup', 'Login Success', 'onsite');
      break;
    case 'register':
      ga('send', 'event', 'Login and Signup', 'Signup Success', 'onsite');
      break;
    case 'set-pass-signin':
      ga('send', 'event', 'Login and Signup', 'Create Password Success', 'onsite');
      break;
      //SSO events will be track on server-side
      /*
      case 'sso-register':
        ga('send', 'event', 'Login and Signup', 'Signup Success', 'sso');
        break;
      case 'sso-confirm-password':
        ga('send', 'event', 'Login and Signup', 'Create Password Success', 'sso');
        break;
      */
  }
  $('.link-for-half-hidden').on('click',toggleHalfHiddedLink);
  

  $('.question-answer-area').attr('maxlength', "500");
  questionFormBlockFiveHundred()
};

function questionFormBlockFiveHundred(){
	var txts = document.getElementsByTagName('TEXTAREA'); 
	
	for(var i = 0, l = txts.length; i < l; i++) {
	  if(/^[0-9]+$/.test(txts[i].getAttribute("maxlength"))) { 
	    var func = function() { 
	  	  countRemaining(this);
	    }
	
	    txts[i].onkeyup = func;
	    countRemaining(txts[i]);
	  } 
	};
}

function countRemaining(elem) { 
    var len = parseInt(elem.getAttribute("maxlength"), 10); 
	var dif = len - elem.value.length;
	$(".answer-note .left-characters").text(dif);
	
	if (dif == 500)
		$(".answer-note .remaining").hide();
	else
		$(".answer-note .remaining").show();
}

function initMenu() {
  $('#black-shadow,.mobile-menu-icon,.close').unbind('click').click(function(e) {
    $('#black-shadow').toggle();
    $('#menu').toggle();
    $('body').toggleClass('mobile-open-menu');
    e.preventDefault();
  });
};

function initSubmenu() {
  $('ul.top-menu > li > .with-submenu').on('click', function() {
    if ($(window).width() <= 1000) {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
      } else {
        $(this).parent().addClass('active');
      }
      //$(this).next().toggle();
      return false;
    }
  });
};

function showWaiter() {
  if ($("#waiter-overlay").length == 0) {
    $("body").append('<div id="waiter-overlay" class="overlay" style="display: none;"><img src="#{request.contextPath}/img/wait.gif" style="position: fixed; left: 50%; top: 50%;"/></div>');
  }
  $("#waiter-overlay").show();
};

function hideWaiter() {
  $("#waiter-overlay").hide();
};

function processHint() {
  $('.pass-hint-help-tooltip .waiter').show();
  $('.pass-hint-help-tooltip .message').hide();
  
  var email = $('input.email-for-pass-hint').val();
  if (email == null || $.trim(email).length == 0) {
    $('.pass-hint-help-tooltip .waiter').hide();
    $('.pass-hint-help-tooltip .empty-email').show();
    return;
  }
  
  var patt = new RegExp("^[ ]*[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])[ ]*?$");
  var result = patt.test(email);
  if (!result) {
    $('.pass-hint-help-tooltip .waiter').hide();
    $('.pass-hint-help-tooltip .invalid-email').show();
    return;
  }
  
  $('input.update-pass-hint').click();
};

function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
    c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1) {
    c_value = null;
  } else {
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
      c_end = c_value.length;
    }
    c_value = c_value.substring(c_start, c_end);
  }
  return c_value;
};

function saveToCookie(c_name, dates, expire_days) {
  var newCookie = '';
  for (var i = 0; i < dates.length; i++) {
    if (i != 0) newCookie += '.';
    newCookie += dates[i];
  }
  var exdate = new Date();
  if (!isNaN(parseInt(expire_days))) {
    exdate.setDate(exdate.getDate() + expire_days);
    document.cookie = 'uvtms=' + newCookie + ';path=/;expires=' + exdate.toUTCString();
  } else {
    document.cookie = 'uvtms=' + newCookie + ';path=/';
  }
};

function mobileCheck() {
  var check = false;
  (function(a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

function updateBellAreaMenuItem() {
  //Handle click on dismiss button in popup
  $('.bell-alert-popup-dismiss').click(handlePopupDismissClick);
  
  //Handle clicks on bells (popup's or top menu's)
  //on ios
  if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
     $(".notification-main-menu-btn").on("mousedown", handleBellButtonClick);
     if ($(".bell-alert-popup-bell-icon").length)
        $(".bell-alert-popup-bell-icon").on("mousedown", handlePopupBellClick);
  }
  //on everything else
  else {
    $(".notification-main-menu-btn").click(handleBellButtonClick);
    if ($(".bell-alert-popup-bell-icon").length)
      $(".bell-alert-popup-bell-icon").click(handlePopupBellClick);
  }
};

function handlePopupDismissClick(e) {
  e.preventDefault();
  $('#bellAlertPopup').hide();
  $('#bellAlertPopup').remove();
  $('#top-menu\\:bell-area-form\\:bellArea1\\:setBellNotificationPopupDateButton').click();
}

function handlePopupBellClick(e) {
  e.preventDefault();
  handleBellButtonClick.call($(".notification-main-menu-btn").get(), e);
}

function handleSearchBtnClick(e) {
  e.preventDefault();
  $('.nav-block').toggle();
  $('#form-search').toggle();
  $('#form-search .search-query-placeholder').trigger('focus');
  var tmpStr = $('#form-search .search-query-placeholder').val();
  $('#form-search .search-query-placeholder').val('');
  $('#form-search .search-query-placeholder').val(tmpStr);
  $(this).toggleClass('active');
};

function handleBellButtonClick(e) {
  	console.log('handleBellButtonClick' + e);
  e.preventDefault();
 /* if (!$(this).closest(".notification-menu-item").hasClass('active')) {
    setTimeout(function() {
      $('.notification-result-list .notification-result-item-body').truncateText();
    }, 0);
  }*/
  $('.nav-block').toggle();
  
  $(".notification-btn-dismiss").click(function(e) {
    e.preventDefault();
  })
  
  $(this).closest(".notification-menu-item").toggleClass('active');
  
  if ($('#bellAlertPopup').length > 0) {
    $('#bellAlertPopup').hide();
    $('#bellAlertPopup').remove();
    $('#top-menu\\:bell-area-form\\:bellArea1\\:setBellNotificationPopupDateButton').click();
  }
  
  if ($('#top-menu\\:bell-area-form\\:bellArea1\\:setBellAreaOpen'))
    $('#top-menu\\:bell-area-form\\:bellArea1\\:setBellAreaOpen').click();
};

function showPageLoader() {
  if ($("#loader-overlay").length == 0) {
    $("body").append('<div id="loader-overlay" class="loader-overlay" style="display: none;"></div>');
    // $("body").append('<div id="loader-popup" class="popup"><div class="loader-frame"><div class="throbber-loader popup-loader"></div></div></div>');
  }
  $("#loader-overlay").show();
  // $("#loader-popup").show();
};

function hidePageLoader() {
  // $("#loader-popup").hide();
  $("#loader-overlay").hide();
};