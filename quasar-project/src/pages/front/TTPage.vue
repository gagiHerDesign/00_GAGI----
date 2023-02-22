<!-- <template>
  123
  <div id="tt" class="container">

    <svg>
  <g>
    <line id="line" x1="0" x2="100%" />
    <polyline id="wave" />
  </g>
</svg>
</div>

</template>

<style lang="scss">
#tt{

  height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

svg {
  width: 800px;
  height: 100%;
  padding: 50px;
}

line {
  stroke-width: 1;
  stroke: #3c3c3c;
}

#wave {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #56acf4;
}
}
</style>

<script>
import { onMounted } from 'vue'
// import $ from 'jquery'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const triggers = ScrollTrigger.getAll()
const TweenLite.defaultEase = Sine.easeInOut

export default {
  setup () {
    onMounted(() => {

      TweenLite.set('g', { y: window.innerHeight / 2 })

      const svg = document.querySelector('svg')
      const wave = document.querySelector('#wave')
      const width = 800

      const amplitude = 200
      const frequency = 2
      const segments = 200
      const interval = width / segments

      for (let i = 0; i < segments; i++) {
        const norm = i / (segments - 1)
        const point = wave.points.appendItem(svg.createSVGPoint())

        point.x = i * interval
        point.y = amplitude / 2

        TweenMax.to(point, 2, { y: -point.y, repeat: -1, yoyo: true }).progress(norm * frequency)
      }
    })
    return { triggers, TweenLite, TweenMax }
  }
}
</script> -->
