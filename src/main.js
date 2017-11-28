// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
import Vue from "vue";
import VMapbox from "./components/VMapbox";
import VMapboxLayer from "./components/VMapboxLayer";
import VMapboxSlider from "./components/VMapboxSlider";
import VMapboxSource from "./components/VMapboxSource";
import VMapboxGeocoder from "./components/VMapboxGeocoder";
import VMapboxNavigationControl from "./components/VMapboxNavigationControl";
import Vuetify from "vuetify";

Vue.use(Vuetify);

import "normalize.css";
import "sanitize.css";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "./main.scss";
import mapboxgl from 'mapbox-gl';

var toonRuweInput = false;
var toonResultaat = false;

Vue.component('modal', {
  template: '#modal-template'
})

const vm = new Vue({
  el: "#app",
  data() {
    return {
      timeStep: '0',
      layers: [
        {
          "id": "ruwe_input-0",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input-0",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
/*
        {
          "id": "gapfilling-0",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-0",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
*/
        {
          "id": "resultaat-0",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat-0",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-1",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input-1",
            "avatar": "grid.png",
            "hidden": true
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw-1.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
/*
        {
          "id": "gapfilling-1",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL-1.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-1",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF-1.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
*/
        {
          "id": "resultaat-1",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat-1",
            "avatar": "grid.png",
            "hidden": true
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam-1.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-2",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input-2",
            "avatar": "grid.png",
            "hidden": true
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw-2.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
/*
        {
          "id": "gapfilling-2",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL-2.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-2",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF-2.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
*/
        {
          "id": "resultaat-2",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat-2",
            "avatar": "grid.png",
            "hidden": true
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam-2.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
/*
        {
          "id": "ruwe_input-3",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-3",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-3",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-3",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-4",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-4",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-4",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-4",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-5",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-5",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-5",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-5",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-6",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-6",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-6",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-6",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-7",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-7",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-7",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-7",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-8",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-8",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-8",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-8",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "ruwe_input-9",
          "active": false,
          "metadata": {
            "name": "ruwe input",
            "subtitle": "onbewerkte input",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_raw.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "gapfilling-9",
          "active": false,
          "metadata": {
            "name": "gapfilling",
            "subtitle": "gapfilling based on genetic algorithm",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_GAPFILL.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "DINEOF-9",
          "active": false,
          "metadata": {
            "name": "DINEOF",
            "subtitle": "DINEOF algorithm applied",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam_DINEOF.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        },
        {
          "id": "resultaat-9",
          "active": false,
          "metadata": {
            "name": "resultaat",
            "subtitle": "eindresultaat",
            "avatar": "grid.png"
          },
          "type": "raster",
          "source": {
            "url": "../static/images/schiedam.png",
            "type": "image",
 			"coordinates": [
                [4.82, 53.37],
                [5.42, 53.37],
                [5.42, 53.07],
                [4.82, 53.07]
            ]
          },
          "paint": {
            "raster-opacity": 1.0
          }
        }
*/      ],
      sources: []
    };
  },
components: {
  "v-mapbox": VMapbox,
  "v-mapbox-layer": VMapboxLayer,
  "v-mapbox-slider": VMapboxSlider,
  "v-mapbox-source": VMapboxSource,
  "v-mapbox-geocoder": VMapboxGeocoder,
  "v-mapbox-navigation-control": VMapboxNavigationControl,
},
  mounted() {
    this.$nextTick(() => {
      this.$refs.map.map.on(
        "load",
        () => {
//        this.syncLayerVisibility();
        document.getElementById('slider').addEventListener('input', function(e) {
                var t = parseInt(e.target.value, 10);
                document.getElementById('timestep').textContent = 'tijdstip: ' + t.toString();
                let filters = ['==', 'paint.fill-color.property', 'IM1' + t.toString()];
        });
      }
    )
    });
  },
  watch: {
    timeStep(newt, oldt) {
    }
  },
  methods: {
    setLayerImages() {
      var index = document.getElementById('slider').value;
//      console.log("in setlayerimages, index = " + index);
      _.each(this.layers, (layer) => {
//        console.log("layer wijzigen: " + layer.id + "   index = " + index)
        if (layer.id.endsWith(index)) {
//            console.log("yo: " + index);
            if ((layer.id.startsWith("ruwe_input") && toonRuweInput) ||
                (layer.id.startsWith("resultaat") && toonResultaat)){
                layer.active = true;
            }
            else {
                layer.active = false;
            }
            layer.metadata.hidden = false;
        }
        else {
            layer.active = false;
            layer.metadata.hidden = true;
        }
      });
      vm.syncLayerVisibility();
    },
    syncLayerVisibility() {
      var firstChange = true;
      _.each(this.layers, (layer) => {
      if (layer.metadata.hidden == false)
      {
        if (layer.active) {
          this.$refs.map.map.setLayoutProperty(layer.id, "visibility", "visible");
          if (layer.id.startsWith("ruwe_input") && firstChange && !toonRuweInput) {
//              console.log("ruweinput = true");
              toonRuweInput = true;
              firstChange = false;
          }
          if (layer.id.startsWith("resultaat") && firstChange && !toonResultaat) {
              toonResultaat = true;
              firstChange = false;
          }
        } else {
          this.$refs.map.map.setLayoutProperty(layer.id, "visibility", "none");
          if (layer.id.startsWith("ruwe_input") && firstChange && toonRuweInput) {
//              console.log("ruweinput = false");
              toonRuweInput = false;
              firstChange = false;
          }
          if (layer.id.startsWith("resultaat") && firstChange && toonResultaat) {
              toonResultaat = false;
              firstChange = false;
          }
        }
      }
      else {
          this.$refs.map.map.setLayoutProperty(layer.id, "visibility", "none");
      }
      });
    }
  }
});
// add watchers that are deep
vm.$watch(
  "layers",
  function() {
    vm.syncLayerVisibility();
  },
  {deep: true}
);
vm.$watch(
  "timeStep",
  function() {
    vm.setLayerImages();
  }
);
