<template>
  123
  <div id="tt" class="container">

<p id="role1">✦歡迎蒞臨綠善觀光農場✦</p>
<p id="role2">✦回歸自然，感受田園風光✦</p>
<p id="role3">✦讓心靈去旅行，體驗大自然的美好✦</p>
<p id="role4">✦放慢腳步，享受農場生活的悠閒✦</p>
<p id="role5">✦和家人共遊農場，共創美好回憶✦</p>
<p id="role6">✦種下快樂，收穫幸福，心靈美好印記✦</p>

  </div>

</template>

<style lang="scss">
#tt{

  padding-top: 250vh;
  width: 99vw;
// height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: #cf3939;
position: relative;

  p {
    text-align: center;
  font-size: 3.3rem;
  width: 90%;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  color: white;
  position: absolute;
  top: 30%;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;

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

export default {
  setup () {
    onMounted(() => {
      const tlText = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

      tlText.from('#role1', { opacity: 0, duration: 2 })
      tlText.to('#role1', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role2', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role2', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role3', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role3', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role4', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role4', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role5', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role5', { opacity: 0, duration: 2, delay: 2, stagger: 1 })

      tlText.from('#role6', { opacity: 0, duration: 2 }, '+=1')
      tlText.to('#role6', { opacity: 0, duration: 2, delay: 2, stagger: 1 })
    })
    return { triggers }
  }
}
</script>
