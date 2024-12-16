<template>
  <div class="h-full w-full bg-black flex items-center justify-center">
    <div
      class="h-[1200px] w-[500px] rounded-lg bg-cover bg-[url('data:image/jpeg;base64,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')]"
    >
      <form>
        <h2
          class="text-2xl font-extrabold text-center text-gray-800 mb-6 pt-[50px]"
        >
          Edit Page
        </h2>

        <div class="px-[100px]">
          <label for="adminid" class="block text-2xl font-medium text-gray-700"
            >Admin Id</label
          >
          <input
            type="text"
            id="adminid"
            name="adminid"
            placeholder="Enter the adminid"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div class="px-[100px]">
          <label
            for="productid"
            class="block text-2xl font-medium text-gray-700"
            >Product Id</label
          >
          <input
            type="text"
            id="productid"
            name="productid"
            placeholder="Enter the productid"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div class="px-[100px]">
          <label
            for="productname"
            class="block text-2xl font-medium text-gray-700"
            >Product Name</label
          >
          <input
            type="text"
            id="productname"
            name="productname"
            placeholder="Enter the product name"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="px-[100px]">
          <label for="category" class="block text-2xl font-medium text-gray-700"
            >Category</label
          >
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter the category"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="px-[100px]">
          <label for="price" class="block text-2xl font-medium text-gray-700"
            >Price</label
          >
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter the price"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div class="px-[100px]">
          <label for="discount" class="block text-2xl font-medium text-gray-700"
            >Discount
          </label>
          <input
            type="text"
            id="discount"
            name="discount"
            placeholder="Enter the discount"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="px-[100px]">
          <label for="brand" class="block text-2xl font-medium text-gray-700"
            >Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Enter the brand"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="px-[100px]">
          <label for="add" class="block text-2xl font-medium text-gray-700"
            >Add on Date
          </label>
          <input
            type="text"
            id="add"
            name="add"
            placeholder="Enter add on date"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div class="px-[100px]">
          <label for="edit" class="block text-2xl font-medium text-gray-700"
            >Edit on Date
          </label>
          <input
            type="text"
            id="edit"
            name="edit"
            placeholder="Enter edit date"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="px-[100px]">
          <label for="purchase" class="block text-2xl font-medium text-gray-700"
            >purchase rate
          </label>
          <input
            type="number"
            id="purchase"
            name="purchase"
            placeholder="Enter purchase"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="px-[100px]">
          <label for="cart" class="block text-2xl font-medium text-gray-700"
            >cart rate
          </label>
          <input
            type=" number"
            id="cart"
            name="cart"
            placeholder="Enter cart rate"
            class="mt-1 pt-5 block w-[300px] rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        <div class="flex items-center justify-center gap-2 pt-6">
          <button
            class="border text-center text-white rounded-sm px-6 py-3 bg-slate-400 hover:bg-slate-600"
          >
            Save Changes
          </button>
          <button
            class="bg-slate-400 text-center text-white rounded-sm px-6 py-3 hover:bg-slate-600"
          >
            Delete product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
