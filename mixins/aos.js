import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      mirror: true,
      duration: 1000,
    })
  },
}
