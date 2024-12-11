<template>
  <!-- <div class="flex w-full h-full items-center justify-center">
      <div
        class="w-[380px] h-[700px] shadow-lg p-2 outline-1 bg-black rounded-3xl"
      >
        <div class="bg-[white] w-full h-full relative rounded-3xl">
          <div
            class="h-[150px] flex justify-between w-full bg-[darkblue] relative"
          >
            <div class="flex gap-3">
              <img srcset="/menu.svg" />
              <img src="/amazon.svg" />
            </div>
            <div class="flex justify-between gap-2">
              <div class="text-sm font-bold text-white">Sign up</div>
              <img src="/cart.svg" />
            </div>
            <div
              class="flex p-4 gap-2 divide-y bg-[white] top-[60px] left-[27px] right-[13px] bottom-[16px] border radius-[15px]"
            >
              <input
                type="text"
                class="border p-[10px] rounded-xl"
                placeholder="Search Amazon"
              />
              <img src="/search.svg" />
            </div>
            <div class="flex flex-row gap-2">
              <div class="flex flex-col items-center">
                <div class="text-sm font-bold">
                  <div>Best sellers</div>
                  <div>Prime Video</div>
                  <div>Deals</div>
                  <div>New Release</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="flex h-[60px] w-full bg-slate-500">
            <div class="flex items-center justify-center gap-3">
              <img src="/location-pin.svg" />
              <div class="text-sm font-bold text-white">
                Select a location to see a product availability
              </div>
            </div>
          </div>
          <div class="h-[300px] w-full bg-[#29a7d8] relative gap-6">
            <div
              class="sticky flex items-center justify-center text-lg font-extrabold"
            >
              Active noise cancellation plus Alexa
            </div>
            <div class="flex items-center justify-center text-sm font-bold">
              All new
            </div>
            <div class="flex items-center justify-center text-2xl font-bold">
              echo buds <br />$99
              <img src="/earbud.svg"/>
            </div>
            <div class="sticky flex flex-row gap-2">
              <div class="flex flex-col">
                  <div class="h-[200px] w-[020px] bg-[white]">
                      <div class="text-xl font-extrabold text-black">Welcome</div>
                      <div class="text-sm font-bold">sign in for the best <br> experience</div>
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div> -->
  <div class="flex w-full h-full items-center justify-center">
    <div
      class="w-[380px] h-[700px] shadow-lg p-2 outline-1 rounded-3xl bg-[gray]"
    >
      <div class="p-[6px] grid gap-1 pb-[12px] bg-slate-700 w-full">
        <div class="flex justify-between item-center">
          <div class="flex items-center gap-2">
            <img src="/menu.svg" />
            <img src="/amazon.svg" />
          </div>
          <div class="flex items-center gap-2">
            <div class="text-xl font-bold text-white">sign up</div>
            <img src="/cart.svg" />
          </div>
        </div>
        <div class="flex items-center relative w-full">
          <input
            type="text"
            class="border p-[10px] w-full rounded-xl pr-[40px]"
            placeholder="Search Amazon "
          />
          <div class="absolute transform -translate-y-1/2 right-3 top-1/2">
            <img src="/search.svg" />
          </div>
        </div>
        <div class="flex items center justify-center gap-2 text-white">
          <div>Best Sellers</div>
          <div>Prime Video</div>
          <div>Deals</div>
          <div>New Releases</div>
        </div>
      </div>
      <div class="flex h-[40px] w-full bg-slate-400">
        <div class="flex items-center justify-center gap-3">
          <img src="/location-pin.svg" />
          <div class="text-sm font-bold text-white">
            Select a location to see a prduct availability
          </div>
        </div>
      </div>
      <div class="h-[200px] w-full bg-[skyblue] relative">
        <div
          class="sticky flex items-center justify-center text-lg font-extrabold"
        >
          Active noise cancellation plus Alexa
        </div>
        <div
          class="flex items-center justify-center text-sm font-bold text-black"
        >
          All New
        </div>
        <div
          class="flex items-center justify-center text-xl font-medium text-black"
        >
          echo buds
        </div>
        <div
          class="flex items-center justify-center text-xl font-medium text-black"
        >
          $99
        </div>
        <div class="flex items-center justify-center">
          <img src="/earbud.svg" />
        </div>
      </div>
      <div class="flex flex-row gap-2 bg-[gray] w-full">
        <div class="flex flex-col bg-white w-[60%]">
          <div class="flex text-start text-xl font-extrabold text-black">
            Welcome
          </div>
          <div class="flex text-start text-lg font-bold text-black">
            Sign in for the best
          </div>

          <div class="flex text-start text-lg font-bold text-black">
            experience
          </div>
          <div class="px-4 pt-6">
            <NuxtLink to="/signin"
              ><button
                class="bg-yellow-400 text-center text-black rounded-md px-2 py-2 w-full"
              >
                Sign in >
              </button></NuxtLink
            >
          </div>
          <div class="flex items-center text-lg font-bold text-[skyblue] p-3">
            Create an account
          </div>
        </div>
        <div class="flex bg-white w-[40%]">
          <div class="flex flex-col">
            <div class="px-[4px] pt-5">
              <img
                src="https://www.flomattress.com/cdn/shop/products/DarkMirage-Side.jpg?v=1675170687&width=1400"
                class="w-40 h-20"
              />
            </div>
            <div class="text-start text-sm font-bold text-black pt-3">
              CGK Unlimited
            </div>
            <div class="text-start text-sm font-bold">Queen Size bed...</div>
            <div class="text-start text-sm font-bold">$22.43</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
