<template>
  123
  <div id="tt" class="container">

    <svg id="linesvg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 869 3002" xml:space="preserve">
        <path id="motionPath" class="st0" d="M155.395,383.31 C152.773,390.548 92.401,646.162 250.215,727.041 453.479,831.213 835.629,715.412 832.33,924.268 830.006,1071.385 20.339,1040.965 22.58,1206.204 24.517,1348.994 835.125,1320.378 832.275,1445.504 827.175,1669.362 57.235,1623.348 56.673,1760.63 55.674,2004.272 837.157,1936.609 837.205,2053.845 837.283,2246.807 137.92199,2252.96102 137.92199,2252.96102 " />
        <g id="motionSVG" data-name="圖層 2">
<g id="tractor" data-name="圖層 1">
<path class="cls-1" d="M23.88,3c1.63,3,3.57,4.81,7.5,5,7.77.42,13.07,6,13.59,12.85.21,2.75-.82,3.68-3.52,3.49A15.47,15.47,0,0,1,27.27,12.53a8.1,8.1,0,0,0-3-4.92Z"/><path class="cls-1" d="M23.18,5a34.65,34.65,0,0,0-3.28,6.35C17.38,18.53,9.07,23.17,1.71,21.55-.1,21.15-.41,20.21.49,18.78,4.5,12.42,9.31,7.17,17.6,7.13A2.94,2.94,0,0,0,20.81,4.6c.34-1.47.54-3,.85-4.45Z"/><path class="cls-1" d="M20.27,1.53c-.59-.2.18-1.36,1-1.51s1.12.52,1.47,1.05a21.3,21.3,0,0,1,1.16,2,7.5,7.5,0,0,1,.41,4.59c.53,3.9,1.22,7.4,1.13,11a5.37,5.37,0,0,0,1,3.34c3.16,4.47,2.86,9.13.59,13.82a30.28,30.28,0,0,1-5,7.17c-1.4,1.54-2.61,1.62-3.24-.55C16.57,34.62,15.61,27,22.12,20.59a3.89,3.89,0,0,0,1.1-2.93A42.51,42.51,0,0,0,21.8,6.34S21.87,2.08,20.27,1.53Z"/></g></g>
    </svg>
</div>

</template>

<style lang="scss">
#tt{
width: 100%;
.cls-1{
  fill:#6fb400;
}
}
</style>
<style type="text/css">
            .st0{fill:none;stroke:rgba(255, 0, 0, 0);stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        </style>

<script setup>
/* eslint-disable */
import { onMounted, onUnmounted } from 'vue'
import $  from 'jquery'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref } from 'vue'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
// 轉成陣列
// const triggers = ScrollTrigger.getAll();
  onMounted(() => {
    gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
gsap.set("#tractor", {transformOrigin: "50% 50%"});
let rotateTo = gsap.quickTo("#tractor", "rotation"),
    prevDirection = 0;

gsap.to("#motionSVG", {
  scrollTrigger: {
    trigger: "#motionPath",
    start: "top center",
    end: () => "+=" + document.querySelector("#motionPath").getBoundingClientRect().height,
    scrub: 0.5,
    markers: true,
    onUpdate: self => {
      if (prevDirection !== self.direction) { // only run this when we're changing direction
        rotateTo(self.direction === 1 ? 0 : -180);
        prevDirection = self.direction;
      }
    }
  },
  ease: pathEase("#motionPath"), // a custom ease that helps keep the tractor centered
  immediateRender: true,
  motionPath: {
    path: "#motionPath",
    align: "#motionPath",
    alignOrigin: [0.5, 0.5],
    autoRotate: 90,
  }
});




// helper function that returns and ease that bends time to ensure the tractor stays relatively centered. Requires MotionPathPlugin of course
function pathEase(path, axis="y", precision=1) {
		let rawPath = MotionPathPlugin.cacheRawPathMeasurements(MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), Math.round(precision * 12)),
			useX = axis === "x",
			start = rawPath[0][useX ? 0 : 1],
			end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)],
			range = end - start,
			l = Math.round(precision * 200),
			inc = 1 / l,
			positions = [0],
			a = [],
			minIndex = 0,
			getClosest = p => {
				while (positions[minIndex] <= p && minIndex++ < l) { }
				a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
			},
			i = 1,
			p, v;
		for (; i < l; i++) {
			p = i / l;
			v = MotionPathPlugin.getPositionOnPath(rawPath, p)[axis];
			positions[i] = (v - start) / range;
		}
		positions[l] = 1;
		for (i = 0; i < l; i++) {
			getClosest(i / l);
		}
		a.push(1);
		return p => {
			let i = p * l,
				s = a[i | 0];
			return s + (a[Math.ceil(i)] - s) * (i % 1);
		}
	}
    });
    // onUnmounted(() => {
    //   triggers.forEach((trigger) => {
    //   // 把 ScrollTrigger 綁定的動畫消除
    //     trigger.kill();
    //   });
    //   // 消除綁定 MatchMedia();
    //   ScrollTrigger.clearMatchMedia();
    // });

</script>
