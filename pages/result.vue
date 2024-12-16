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
    <div class="flex items-start px-6">
      <div class="text-black text-2xl">
        <span class="font-bold">Results</span><br />
        Check each product page for other buying options. Price and other
        details may vary based on product size and colour
      </div>
    </div>
    <div class="flex text-black gap-4 pt-2 px-6">
      <img
        src="https://m.media-amazon.com/images/I/510+velDs5L._AC_UY327_FMwebp_QL65_.jpg"
        alt="Product Image"
      />

      <div class="flex flex-row">
        <div class="flex flex-col">
          <NuxtLink to="/order">
            <div
              class="text-black font-medium text-[20px] hover:text-[rgb(255,136,0)]"
            >
              Amazon Brand - Umi Tempered Glass Silent Stylish Decorative
              <br />Home Decor Pendulum Wall Clock with Wall Art Painting for
            </div>
          </NuxtLink>
          <img
            class="h-[100px] w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXyDzuc-uBSr_GkwSo7Lo_bNeg-8IhgiqA&s"
            alt="Image Description"
          />
          <div
            class="h-9 w-[150px] bg-red-700 text-white text-center font-normal rounded-md"
          >
            Limited time deal
          </div>

          <div class="flex text-4xl text-black pt-2 gap-2">₹1,999</div>
          <div class="flex text-xl pt-2">M.R.P: ₹3,999 (50% off)</div>
          <div>
            <div class="text-lg top-[-100px]">
              FREE delivery <span class="font-bold">Wed, 18 Dec</span>
            </div>
            <div class="h-[15px] w-[100px]">
              <button
                class="bg-yellow-400 text-center text-black rounded-3xl px-2 py-2 w-full hover:bg-yellow-500"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex text-black gap-4 pt-8 px-4">
      <img
        src="https://m.media-amazon.com/images/I/71cy6veN3IL._AC_UY327_FMwebp_QL65_.jpg"
        alt="Product Image"
      />

      <div class="flex flex-row">
        <div class="flex flex-col">
          <div
            class="text-black font-medium text-[20px] hover:text-[rgb(255,136,0)]"
          >
            A.K.Handicrafts Analog Metal Wall Clock And Wall Art Living Room |
            <br />Room | Metal Wall Hanging Wall Clock Wall | Floral Metal Wall
            Art
          </div>
          <img
            class="h-[100px] w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXyDzuc-uBSr_GkwSo7Lo_bNeg-8IhgiqA&s"
            alt="Image Description"
          />
          <div
            class="h-9 w-[150px] bg-red-700 text-white text-center font-normal rounded-md"
          >
            Limited time deal
          </div>

          <div class="flex text-4xl text-black pt-2 gap-2">₹2,399</div>
          <div class="flex text-xl pt-2">M.R.P: ₹3,999 (50% off)</div>
          <div>
            <div class="text-lg top-[-100px]">
              FREE delivery <span class="font-bold">Wed, 12 Jan</span>
            </div>
            <div class="h-[15px] w-[100px]">
              <button
                class="bg-yellow-400 text-center text-black rounded-3xl px-2 py-2 w-full hover:bg-yellow-500"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex text-black gap-4 pt-8 px-4">
      <img
        src="https://m.media-amazon.com/images/I/81TFqstpOLL._AC_UY327_FMwebp_QL65_.jpg"
        alt="Product Image"
      />

      <div class="flex flex-row">
        <div class="flex flex-col">
          <div
            class="text-black font-medium text-[20px] hover:text-[rgb(255,136,0)]"
          >
            Frame with Crystals Silent Stylish Decorative Home Decor Wall
            <br />Home Decor Pendulum Wall Clock with Wall Art Painting for
          </div>
          <img
            class="h-[100px] w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXyDzuc-uBSr_GkwSo7Lo_bNeg-8IhgiqA&s"
            alt="Image Description"
          />
          <div
            class="h-9 w-[150px] bg-red-700 text-white text-center font-normal rounded-md"
          >
            Limited time deal
          </div>

          <div class="flex text-4xl text-black pt-2 gap-2">₹1,999</div>
          <div class="flex text-xl pt-2">M.R.P: ₹5,999 (50% off)</div>
          <div>
            <div class="text-lg top-[-100px]">
              FREE delivery <span class="font-bold">Wed, 6 Dec</span>
            </div>
            <div class="h-[15px] w-[100px]">
              <button
                class="bg-yellow-400 text-center text-black rounded-3xl px-2 py-2 w-full hover:bg-yellow-500"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex text-black gap-4 pt-8 px-4">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/I/71jIXi+7x1L._AC_UL330_SR330,330_.jpg"
        alt="Product Image"
      />

      <div class="flex flex-row">
        <div class="flex flex-col">
          <div
            class="text-black font-medium text-[20px] hover:text-[rgb(255,136,0)]"
          >
            Ingo creation Antique Geometric Wood Wall Clock 12 x 12 Inch
            <br />Handmade Clock (Black and Walnut Frame)
          </div>
          <img
            class="h-[100px] w-[150px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNFXyDzuc-uBSr_GkwSo7Lo_bNeg-8IhgiqA&s"
            alt="Image Description"
          />
          <div
            class="h-9 w-[150px] bg-red-700 text-white text-center font-normal rounded-md"
          >
            Limited time deal
          </div>

          <div class="flex text-4xl text-black pt-2 gap-2">₹1,999</div>
          <div class="flex text-xl pt-2">M.R.P: ₹3,999 (50% off)</div>
          <div>
            <div class="text-lg top-[-100px]">
              FREE delivery <span class="font-bold">Wed, 18 Dec</span>
            </div>
            <div class="h-[15px] w-[100px]">
              <button
                class="bg-yellow-400 text-center text-black rounded-3xl px-2 py-2 w-full hover:bg-yellow-500"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
