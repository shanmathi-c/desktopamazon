<template>
  <div class="h-screen w-full flex items-center justify-center bg-slate-800">
    <div class="h-full w-full rounded-r-md shadow-md p-3 bg-white">
      <div class="h-full w-full bg-slate-400 relative overflow-auto">
        <div
          class="h-full w-full bg-cover bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQgNDQ0HDQ0HBw0HBwgHBw8IDQcNFREWFhURExMYHSggGBoxGxUVITEhJSk3Li4uFx8zODM4NygtLisBCgoKDg0OFRAQFSsZFRkrLS0rKysrKy0tKy0rNzc3KzcrKy03OC0rNy0tKys3Ny0tKzcrKysrKystLSsrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAAcEAEBAQEBAAMBAAAAAAAAAAAAARECEgPw8dH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAfEQEBAQEAAwADAQEAAAAAAAAAAQIREiExA0FRcRP/2gAMAwEAAhEDEQA/APp/k41WOu3FHdO0s2i9M2qzIyNazaLQeRWZn7NoSPIGtyfEgj94hZaiE3Rk4UkFp8xEIvVCgVIW1LDhkDWi+UZw41ixz62ae2MJSd0rIMRQCoYpGo3U9VQgslTCCydISYEkhZJJgceu9/jOs2pXOJHR/h0akfjfEQh9QPdSSHrckQSYPpSTdGZSkanLUid2eTjMixvDjSp62xikb8nBv5JE/dZkakOFHW7TzLIrTNIrGUqmUi1LEzVqGM6dZOxpMkSWNJkwSVoVJiFJMHUQgB5EmueXVfTo6DI3OTid3/GjGLG8AS9a6ZwNVmqQkvQGsMgXSsE5akMjUidvWu5BI3ikawtsiV3aJDIhpLq1pk4qPQ0OHkIGjR4eZOipMb4MSWtweoUhmSSECWSJa1CyRSrRZLJ0oIA4kk3B7xz5+PG8bwUfK1us4Kr0xaaYtbyNrNotC0xwO9WmRSNyF1TwSGRqQpWj5CQoaW1pnrS1i9sXonLVs/jdL0zrOmGkP4w6dAHjcK1m9M6bjddNWsQj4p2nUBpbDRrTrB0vDNAaNGSg0gjcLbGoYyW4nWjrJgFsJihDpKkVjdKz13+ud6ZtGunP45C+6bWdRxT1DSDDImonqnnoyNMrU7AbGsXpm9l4fOLW7053pkyByOrOJEY1IcY1okKFo8JdG1m1GQSXTOLG8DE8uhaqDN1IaLQ8TynVrKbxNbI1DBGpDcS1tRpQ4S0oOHDhLoRI1Eg50t2YRovQ+JPda1m/JHO9M6HItn8P9BxF22ocSA0GK1nVoWGkb1m9DVidVzkGQyNSEtWl4zI1IZGsTtbyCpZodDvWbVEDylsJ1m1nTydJ4t+lrC1SYJqtC0I/iWUI41OW8Tf9GcanLUjWE1rgeVrOEpK00ikaghhLLWuuNRYNOt48TurUCK3TZ/H36zWa1Wa3XTnMnxmhrBjdUItGh2ced1akBGJGEmqeKRqQGI2qS04ZDIdS1Rnf0cFWrU+mkFZrVYtNIYUE4tmE1pijG8Fi+YlayipDkoMjUjUgXRBI1IilbaKxLWdDnR7whJvGN5E6E140nSdZKel85jWi1BKqxJIOiMWfcawh0PJ51UZy9K3jhgWNYiXR5AkU9aWzlSNayZEbpWY/p0xc8tYmNsgGnBjQBRhqVzGtBSVjn1UMaxYbpGfJkIHtoVJDW50vTo0LTTIdJZ1aFjNFnTpaaQoadTtUkKGrU6rkoaNTqsjSZjcBqZGmYdBOuU5RtYdvu+65pDaEsJrcnx0Y/H+6FI1OG5yldLdk+Mzl0kSJaS20rFotAvFWLSDw/wACSxSUlRWE3UdIUimidoo1UKSF91JDTtxUJC3EdCCmkOnWUnVpGtWs6NTsUmW9HpnVE6tnLWtRhqEo1qNMaLWmf6XnW7256gpLz4MzG/JxvFga3ahmSMzlqcpqJ0btYiLSNKzWb0uunO00isy36WsadHg8aWjVgwLCYCfiWiQRR0ma1WbTwsyzRaqFobxSSN0OJJCCCQVogkSqZqBCdXyjFhSqsqh0ErJDRotw2jQcNIL0XoBNyRxdajSSWmitc7UixfMYrNSPFYNMKM1ahSAlJCMlZ0lIQ4KzUlMhxmgpSMEkYlSSFOhJDQgSSVWyiknVYQklVcrRqTHBSNIxKS+YWv/Z')]"
        >
          <div class="sticky top-0 left-0 right-0">
            <div class="flex h-2 w-full p-10 bg-slate-400 opacity-65">
              <div class="flex items-center justify-between w-full">
                <div class="text-2xl font-extrabold text-black pt-4">
                  Admin Page
                </div>
                <img
                  class="h-[100px] w-[100px] justify-center pt-4"
                  src="/amazon.svg"
                />
                <NuxtLink to="/add">
                  <button
                    class="bg-[pink] text-center text-black rounded-sm px-6 py-3 hover:bg-[#ca435a]"
                  >
                    Add
                  </button>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div>
            <div class="relative overflow-x-auto">
              <table
                class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 w-full"
                >
                  <tr>
                    <div>
                      <th scope="col" class="px-6 py-3">Product Image</th>
                      <th scope="col" class="px-6 py-3">Product Name</th>
                      <th scope="col" class="px-6 py-3">Amount</th>
                      <th scope="col" class="px-6 py-3">Purchase rate</th>
                      <th scope="col" class="px-6 py-3">Add to cart</th>
                      <th scope="col" class="px-6 py-3"></th>
                    </div>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b dark:bg-gray-800 dark:border-gray-700 bg-cover bg-[url('data:image/jpeg;base64,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')]"
                  >
                    <div v-for="(item, index) in product" :key="index">
                      <th
                        scope="row"
                        class="px-8 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          class="h-[150px] w-[full]"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Le4VR_jK4OYMJLmSaIKMMButztf1_Uajg&s"
                        />
                        <img :src="image" />
                      </th>
                      <td
                        class="px-6 py-4 text-lg font-bold text-black w-[200px]"
                      >
                        {{ item.productName }}
                      </td>

                      <td class="px-6 py-4 w-[200px]">
                        <div class="flex gap-2">
                          <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                          <div class="text-lg font-medium text-black">
                            {{ item.price }}
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 w-[200px]">
                        <div class="flex gap-2">
                          <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                          <div class="text-lg font-medium text-black">
                            {{ item.purchaseRate }}
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 w-[200px]">
                        <div class="flex gap-2">
                          <img
                            class="flex h-[30px] w-[30px]"
                            src="/basket.svg"
                          />
                          <div class="flex text-lg font-medium text-black">
                            {{ item.cartRate }}
                          </div>
                        </div>
                      </td>
                      <td>
                        <NuxtLink :to="`/edit?adminId=${item.adminId}`">
                          <td class="px-6 py-4">
                            <button
                              class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
                            >
                              Edit
                            </button>
                          </td>
                        </NuxtLink>
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      adminUser: {
        productName: "",
        price: "",
        purchaseRate: "",
        cartRate: "",
      },

      product: [],
    };
  },
  mounted() {
    this.getAdmin();
  },
  methods: {
    async getAdmin() {
      const res = await this.$http.$get("http://localhost:5001/admin/get");
      if (res.success) {
        this.product = res.book;
        console.log("hjfdkkd", this.product);
      }
    },

    // async getIndiAdmin() {
    //   const res = await this.$http.$get("http://localhost:5001/admin/get/indi");
    //   if (res.success) {
    //     this.product = res.book;
    //     console.log("hjfdkkd", this.product);
    //   }
    // },
  },
};
</script>
