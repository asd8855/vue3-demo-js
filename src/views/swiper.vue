<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <!-------------slide1----------------->
      <div class="swiper-slide">
        <img src="upload/s1-t2.png" class="ani resize" style="width:100px;height:110px;left:70px;top:185px;z-index:3;"
          data-swiper-animation="animate__fadeIn" data-duration=".5s" data-delay="1.5s">
        <img src="upload/s1-t1.png" class="ani resize" style="width:60px;height:110px;left:220px;top:185px;z-index:3;"
          data-swiper-animation="animate__bounceIn" data-duration="0.5s" data-delay="1s">
        <img src="upload/flower.png" class="ani resize" style="width:180px;height:220px;left:0;top:0;z-index:2;"
          data-swiper-animation="animate__fadeInLeft" data-duration="0.5s" data-delay="0s">
        <img src="upload/s1.png" class="ani resize" style="width:320px;height:200px;left:0px;top:140px;z-index:1;"
          data-swiper-animation="animate__fadeIn" data-duration="0.5s" data-delay="0.5s">
      </div>
      <!---------------slide2-------------->
      <div class="swiper-slide">
        <img src="upload/s2-i5.png" class="ani resize"
          style="width:263px;height:177px;left:31px;top:262px;z-index:5; border-radius:20px;"
          data-swiper-animation="animate__fadeInLeft" data-duration="0.5s" data-delay="2s">
        <img src="upload/s2-i4.png" class="ani resize" style="width:195px;height:163px;left:31px;top:48px;z-index:4;"
          data-swiper-animation="animate__fadeInRight" data-duration="0.5s" data-delay="1.3s">
        <img src="upload/s2-i3.png" class="ani resize" style="width:212px;height:186px;left:24px;top:36px;z-index:3;"
          data-swiper-animation="animate__fadeInLeft" data-duration="0.5s" data-delay="1s">
        <img src="upload/s2-i2.png" class="ani resize" style="width:64px;height:221px;left:237px;top:20px;z-index:2;"
          data-swiper-animation="animate__fadeInUp" data-duration="0.5s" data-delay="0.3s">
        <img src="upload/s2-i1.png" class="ani resize" style="width:42px;height:192px;left:248px;top:27px;z-index:1;"
          data-swiper-animation="animate__fadeInDown" data-duration="0.5s" data-delay="0s">

      </div>
      <!----------------slide3-------------->
      <div class="swiper-slide">
        <img src="upload/s3-i5.png" class="ani resize"
          style="width:263px;height:177px;left:31px;top:262px;z-index:5; border-radius:20px;"
          data-swiper-animation="animate__fadeInLeft" data-duration="0.5s" data-delay="2s">
        <img src="upload/s3-i4.png" class="ani resize" style="width:195px;height:163px;left:31px;top:48px;z-index:4;"
          data-swiper-animation="animate__fadeInRight" data-duration="0.5s" data-delay="1.3s">
        <img src="upload/s2-i3.png" class="ani resize" style="width:212px;height:186px;left:24px;top:36px;z-index:3;"
          data-swiper-animation="animate__fadeInLeft" data-duration="0.5s" data-delay="1s">
        <img src="upload/s3-i2.png" class="ani resize" style="width:64px;height:221px;left:237px;top:20px;z-index:2;"
          data-swiper-animation="animate__fadeInUp" data-duration="0.5s" data-delay="0.3s">
        <img src="upload/s2-i1.png" class="ani resize" style="width:42px;height:192px;left:248px;top:27px;z-index:1;"
          data-swiper-animation="animate__fadeInDown" data-duration="0.5s" data-delay="0s">

      </div>
      <!-------------slide4----------------->
      <div class="swiper-slide">
        <div class="ani resize" style="width:120px;height:110px;left:110px;top:184px;z-index:3;"
          data-swiper-animation="fanimate__adeInLeft" data-duration="0.5s" data-delay="1s">
          <div class="txt">
            <p style="width:15px;color:#b60927; display:inline-block; font-size:90%; line-height:1; margin-right:10px;">
              愿您羊年运旺福旺</p>
            <p style="width:15px;color:#b60927; display:inline-block; font-size:90%; line-height:1; margin-right:10px;">
              条条祝福给您送上</p>
            <p style="width:15px;color:#b60927; display:inline-block; font-size:90%; line-height:1; margin-right:10px;">
              美丽花灯传递吉祥</p>
            <p style="width:15px;color:#b60927; display:inline-block; font-size:90%; line-height:1; margin-right:10px;">
              圆圆汤圆味道芬芳</p>
          </div>
        </div>
        <div class="ani resize"
          style="width:60px;height:110px;left:260px;top:185px;z-index:3;color:#b60927; font-size:160%; font-weight:bold;"
          data-swiper-animation="animate__fadeInRight" data-duration="1s" data-delay="1s">
          <div class="txt">
            元<br>宵<br>节</div>
        </div>
        <img src="upload/flower.png" class="ani resize" style="width:180px;height:220px;left:0;top:0;z-index:2;"
          data-swiper-animation="animate__fadeInLeft" data-duration="0.5s" data-delay="0s">
        <img src="upload/s1.png" class="ani resize" style="width:320px;height:200px;left:0px;top:140px;z-index:1;"
          data-swiper-animation="animate__fadeIn" data-duration="0.5s" data-delay="0.5s">
      </div>
    </div>

    <!-- <img src="images/web-swipe-tip.png" style="width:20px;height:15px; top:460px; left:150px;" id="array" class="resize"> -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script setup>
import { nextTick, onMounted } from 'vue'
import Swiper, { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import "swiper/css/bundle";
import "swiper/css/autoplay"
import "swiper/css/pagination"
import SwiperAnimation from '@cycjimmy/swiper-animation';
const init = () => {

  let scaleW = window.innerWidth / 320;
  let scaleH = window.innerHeight / 480;
  var resizes = document.querySelectorAll('.resize');

  for (var j = 0; j < resizes.length; j++) {
    resizes[j].style.width = parseInt(resizes[j].style.width) * scaleW + 'px';
    resizes[j].style.height = parseInt(resizes[j].style.height) * scaleH + 'px';
    resizes[j].style.top = parseInt(resizes[j].style.top) * scaleH + 'px';
    resizes[j].style.left = parseInt(resizes[j].style.left) * scaleW + 'px';
  }
  var scales = document.querySelectorAll('.txt');
  for (var i = 0; i < scales.length; i++) {
    let ss = scales[i].style;
    ss.webkitTransform = ss.MsTransform = ss.msTransform = ss.MozTransform = ss.OTransform = ss.transform =
      'translateX(' + scales[i].offsetWidth * (scaleW - 1) / 2 + 'px) translateY(' + scales[i].offsetHeight *
      (
        scaleH - 1) / 2 + 'px)scaleX(' + scaleW + ') scaleY(' + scaleH + ') ';
  }
}


onMounted(() => {
  nextTick(() => {
    init()
    const swiperAnimation = new SwiperAnimation();
    new Swiper('.swiper', {
      direction: 'vertical',
      modules: [Pagination, Autoplay],
      // autoplay: true,
      // loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      on: {
        init: function () {
          swiperAnimation.init(this).animate();
        },
        slideChange: function () {
          swiperAnimation.init(this).animate();
        }
      }

    })
  })
})


</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  font-family: "microsoft yahei";
}

.swiper {
  /*  width: 320px;
    height: 480px;*/
  width: 100%;
  height: 100vh;
  background: #fff;
}


.swiper-slide {
  width: 100%;
  height: 100%;
  background: url(upload/bg.jpg) no-repeat left top;
  background-size: 100% 100%;
}

img {
  display: block;
}



.swiper-pagination-bullet {
  /* width: 12px;
  height: 12px; */
  background: #fff;
  /* opacity: .4; */
}

.swiper-pagination-bullet-active {
  opacity: 1;
}

@-webkit-keyframes tipmove {
  0% {
    bottom: 10px;
    opacity: 0
  }

  50% {
    bottom: 15px;
    opacity: 1
  }

  100% {
    bottom: 20px;
    opacity: 0
  }
}

.ani {
  position: absolute;
}

.txt {
  position: absolute;
}

.resize {
  width: 100vw;
}

#array {
  position: absolute;
  z-index: 999;
  -webkit-animation: tipmove 1.5s infinite ease-in-out;
}
</style>