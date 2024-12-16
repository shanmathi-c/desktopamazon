<template>
  <div class="h-full w-full">
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
    <NuxtLink to="/result">
      <div class="flex items-start text-xl text-black pt-3 px-5">
        <img class="flex h-[20px] w-[20px] pt-1" src="/left-arrow1.svg" />
        <p>Back to Results</p>
      </div>
    </NuxtLink>

    <div class="flex items-center gap-[100px] pt-5 px-8 text-black">
      <img
        src="https://m.media-amazon.com/images/I/510+velDs5L._AC_UY327_FMwebp_QL65_.jpg"
        alt="Product Image"
      />
      <div>
        <div class="text-black font-medium text-4xl">
          THE DECOR COMPANY Metal <br />Wall Clock - Floral Design with<br />
          Silent Sweep Machine - Ideal<br />
          Home Decor Items and Wall<br />
          Decoration Items for Living<br />
          Room/Bedroom/Dining<br />
          Hall/Office/Cafes/Hotels
        </div>
        <div class="text-lg text-green-900">Brand: THE DECOR COMPANY</div>
        <div class="flex gap-3">
          <p class="text-black text-3xl pt-1">3.6</p>
          <img
            class="h-[50px] w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXyDzuc-uBSr_GkwSo7Lo_bNeg-8IhgiqA&s"
            alt="Image Description"
          />
          <img src="/downfullarrow.svg" />
          <div class="text-green-900 text-xl pt-4">446 ratings</div>
        </div>
        <div class="text-lg">1K+ bought in past month</div>
        <div class="text-4xl"><span class="text-red-900">-80%</span> ₹989</div>
        <div class="text-sm pt-2">M.R.P.: ₹4,999</div>
        <div class="text-lg">
          Inclusive of all taxes <span class="font-bold">EMI</span> starts at
          ₹343 per month.
          <span class="text-green-900"
            >EMI options <br />Save up to 7% with business pricing. Sign up for
            a<br />
            free Amazon Business account</span
          >
        </div>
      </div>

      <div
        class="flex items-center justify-center border border-b-gray-950 p-12"
      >
        <div class="flex flex-row gap-5">
          <div class="flex flex-col">
            <div class="text-5xl">₹989.00</div>
            <div class="text-green-900 text-xl pt-6 gap-9">
              FREE delivery
              <SPAN class="text-black font-bold gap-5">Friday,20</SPAN>
              <div class="text-lg">
                <span class="font-bold text-black">December</span>.<span
                  class="text-green-900"
                  >Details</span
                >
              </div>
            </div>
            <div class="flex gap-3 pt-5">
              <img class="h-[30px] w-[30px]" src="/location-pin.svg" />
              <div class="text-green-900 text-lg">
                Delivering to Chennai 600099 -<br />
                Update location
              </div>
            </div>
            <div class="text-green-900 text-2xl pt-5">In stock</div>
            <div>
              <div class="flex gap-6 text-lg">
                <div class="flex">payment</div>
                <div class="text-green-900 px-8">Secure transaction</div>
              </div>

              <div>
                <div class="flex gap-6 text-lg">
                  <div class="flex">Deliversd by</div>
                  <div class="text-green-900">Amazon</div>
                </div>

                <div>
                  <div class="flex gap-6 text-lg">
                    <div class="flex">Sold by</div>
                    <div class="text-green-900 px-8">THE DECOR COMPANYA</div>
                  </div>
                  <div class="flex justify-between pt-8 gap-[100px]">
                    <button
                      class="bg-slate-400 flex text-center w-[300px] text-white rounded-lg px-6 py-3 hover:bg-slate-600"
                    >
                      Quantity :1
                    </button>
                  </div>
                  <div class="flex justify-between pt-4 gap-[100px]">
                    <button
                      class="bg-yellow-300 flex text-center w-[300px] text-black rounded-2xl px-6 py-3 hover:bg-yellow-600"
                    >
                      Add to cart
                    </button>
                  </div>
                  <NuxtLink to="/purchase">
                    <div class="flex justify-between pt-4 gap-[100px]">
                      <button
                        class="bg-amber-500 flex text-center w-[300px] text-black rounded-2xl px-6 py-3 hover:bg-yellow-700"
                      >
                        Buy now
                      </button>
                    </div>
                  </NuxtLink>

                  <div class="flex justify-between pt-4 gap-[100px]">
                    <button
                      class="bg-slate-200 flex text-center w-[300px] text-black rounded-2xl px-6 py-3 hover:bg-slate-400"
                    >
                      Add to wish list
                    </button>
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
