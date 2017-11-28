export default {
  name: 'v-mapbox-slider',
  data () {
    return {
      timestep: 0
    };
  },
  props: {
    options: {
      default: () => {
        return {};
      },
      type: Object
    }
  },
  mounted () {
  },
  methods: {
    times() {
      var time = linspace(0, 365, 1);
      console.log(time)
    },
  }
};
