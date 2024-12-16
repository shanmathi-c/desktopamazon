<template>
  <div class="h-full w-full bg-slate-400">
    <div class="flex bg-black w-full gap-[30px]">
      <div class="flex items-center justify-evenly text-white gap-[40px]">
        <div class="flex items-center justify-center gap-3">
          <img class="w-[120px] h-[120px] px-3" src="/amazon.svg" />
          <img class="w-[40px] h-[40px]" src="/location-04.svg" />
          <div class="font-medium text-white text-[20px]">
            Delivering to Chennai 600009<br /><span
              class="font-bold text-white text-[20px]"
              >Update Location</span
            >
          </div>
        </div>
        <div class="bg-white rounded-lg text-black relative flex items-center">
          <div
            class="top-0 sticky p-5 bottom-0 left-0 text-center gap-3 flex justify-center items-center bg-slate-200 hover:bg-slate-400 h-full w-[100px] rounded-s-lg"
          >
            All
            <img class="w-[20px] h-[20px]" src="/downfullarrow.svg" />
          </div>
          <input
            type="text"
            class="text-center text-black text-[20px] p-4 w-full"
            placeholder="Search Amazon"
          />
          <div
            class="top-0 sticky p-5 bottom-0 right-0 text-center flex justify-center items-center bg-[#f5d36d] hover:bg-[#ffc400de] h-full w-[100px] rounded-e-lg"
          >
            <img class="w-[30px] h-[30px]" src="/search.svg" />
          </div>
        </div>
        <div class="flex items-center justify-center text-white gap-[40px]">
          <div class="flex items-center">
            <div class="text-white font-bold text-[30px]">EN</div>
            <img class="w-[100px] h-[100px]" src="/flag.svg" />
          </div>
          <NuxtLink to="/signin">
            <div class="text-[20px] font-medium">
              Hello,sign in<br /><span class="font-extrabold text-white"
                >Accounts & Lists</span
              >
            </div></NuxtLink
          >

          <div class="text-[20px] font-medium">
            Returns &<br /><span class="font-extrabold text-white">Orders</span>
          </div>

          <div class="flex items-center gap-2">
            <img class="w-[50px] h-[50px]" src="/cart.svg" />
            <div class="text-white font-bold text-[20px]">Cart</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-sky-950 text-center">
      <div
        class="flex items-center py-3 h-full text-white font-medium text-center gap-6"
      >
        <div class="flex gap-2">
          <img class="w-[30px] h-[30px] px-1" src="/menu.svg" />
          <div class="text-white font-bold text-[20px]">All</div>
        </div>
        <div class="font-medium text-white text-[20px] text-center">Fresh</div>
        <div class="font-medium text-white text-[20px]">MX Player</div>
        <div class="font-medium text-white text-[20px]">Sell</div>
        <div class="font-medium text-white text-[20px]">Best Sellers</div>
        <div class="font-medium text-white text-[20px]">Today's Deals</div>
        <div class="font-medium text-white text-[20px]">Mobiles</div>
        <div class="font-medium text-white text-[20px]">Customer Service</div>
        <div class="font-medium text-white text-[20px]">Electronics</div>
        <div class="font-medium text-white text-[20px]">home & Kitchen</div>
        <div class="font-medium text-white text-[20px]">Prime</div>
        <div class="font-medium text-white text-[20px]">Amazon Pay</div>
        <div class="font-medium text-white text-[20px]">New Releases</div>
        <div class="font-medium text-white text-[20px]">Fashion</div>
      </div>
    </div>
    <div class="h-[400px] relative w-full">
      <div class="relative w-full overflow-hidden">
        <!-- <div
          class="flex transition-transform duration-500"
          id="carousel w-full"
        >
          <div class="w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToLBxS4ynC8uCOCO3iGOXuHCOVz4P-n9zXaQ&s"
              alt="Slide 1"
              class="w-full"
            />
          </div>
        </div> -->

        <!-- Navigation Buttons -->
        <button
          class="absolute left-2 top-[0px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          id="prev"
        >
          &larr;
        </button>
        <button
          class="absolute right-2 top-[0px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          id="next"
        >
          &rarr;
        </button>
      </div>
      <div class="h-[800px] slideshow-container bg-slate-600">
        <!-- Slides -->

        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="fade"
          v-show="currentSlide === index + 1"
        >
          <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
          <img :src="slide.image" style="width: 100%; height: 800px" />
          <div class="text">{{ slide.caption }}</div>
        </div>

        <!-- Navigation Buttons -->
        <a class="prev" @click="changeSlide(-1)">❮</a>
        <a class="next pt-[100px]" @click="changeSlide(1)">❯</a>

        <!-- Dots -->
        <div style="text-align: center">
          <span
            v-for="(slide, index) in slides"
            :key="index"
            class="dot"
            :class="{ active: currentSlide === index + 1 }"
            @click="setSlide(index + 1)"
          ></span>
        </div>
      </div>
      <div class="absolute top-[300px]">
        <div class="grid grid-cols-4 gap-4">
          <div class="bg-white h-[460px] w-[400px] top-[300px] opacity-90 px-8">
            <div class="flex flex-row">
              <div class="flex flex-col">
                <div class="text-black font-bold text-[20px] pt-5">
                  Min.40% off |Toys for<br />your little ones|Amaz...
                </div>
                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_372x232_9._SY232_CB563558900_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Min 40% off|soft toy
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_372x232_14._SY232_CB541414575_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Min 40% off|Indoor games
                    </div>
                  </div>
                </div>

                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_372x232_11._SY232_CB541414575_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Min 40% off|Ride ons
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_372x232_16._SY232_CB541411275_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Min 40% off|Outdoor games
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white h-[460px] w-[400px] top-[300px] opacity-90 px-8">
            <div class="flex flex-row">
              <div class="flex flex-col">
                <div class="text-black font-bold text-[20px] pt-5">
                  Explore more from small Business...
                </div>
                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Clothing_2x._SY232_CB540581077_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Ethnic ,dresses and more
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <NuxtLink to="/result">
                      <img
                        class="h-[100px] w-[200px]"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Decor_2x._SY232_CB540581077_.jpg"
                      />
                      <div class="text-[15px] font-medium text-black pt-6">
                        Decor
                      </div>
                    </NuxtLink>
                  </div>
                </div>

                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Fashion_Accessories_2x._SY232_CB540581077_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Fashion Accessories
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Glasses_2x._SY232_CB540581077_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Glassware & Drinkware
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white h-[460px] w-[400px] top-[300px] opacity-90 px-8">
            <div class="flex flex-row">
              <div class="flex flex-col">
                <div class="text-black font-bold text-[20px] pt-5">
                  Revamp your home with style
                </div>
                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Cushion covers bedsheet & more
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Figurines,vases & more
                    </div>
                  </div>
                </div>

                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Home storage
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Lighting solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white h-[460px] w-[400px] top-[300px] opacity-90 px-8">
            <div class="flex flex-row">
              <div class="flex flex-col">
                <div class="text-black font-bold text-[20px] pt-5">
                  Startaing @149 |Headphones
                </div>
                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt._SY232_CB553870684_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Starting @249|boat
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult._SY232_CB553870684_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Starting @349|boult
                    </div>
                  </div>
                </div>

                <div class="flex flex-row gap-7 pt-5">
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise._SY232_CB553870684_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Starting @649|Noise
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <img
                      class="h-[100px] w-[200px]"
                      src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_1._SY232_CB570220221_.jpg"
                    />
                    <div class="text-[15px] font-medium text-black pt-6">
                      Starting @149|Zebronics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slideshow",
  data() {
    return {
      // Slides data
      slides: [
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
          caption: "Caption Text",
          class: "h-[600px] w-full",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
          caption: "Caption Two",
          class: "h-[600px] w-full",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/5299-HI---Bau-home-improvement-hero_3000x1200_unrec_dec24._CB539016691_.jpg",
          caption: "Caption Three",
          class: "h-[600px] w-full",
        },
      ],
      // Current slide index
      currentSlide: 1,
    };
  },
  methods: {
    // Function to change slides
    changeSlide(n) {
      this.currentSlide += n;
      if (this.currentSlide > this.slides.length) this.currentSlide = 1;
      if (this.currentSlide < 1) this.currentSlide = this.slides.length;
    },

    // Function to set the slide directly
    setSlide(n) {
      this.currentSlide = n;
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}
.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

.slideshow-container {
  max-width: 2000px;
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: auto;
  padding: 16px;
  margin-top: 100px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>
