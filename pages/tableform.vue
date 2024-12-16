<template>
  <div>
    <div class="relative overflow-x-auto">
      <table
        class="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Product Image</th>
            <th scope="col" class="px-6 py-3">Product Name</th>
            <th scope="col" class="px-6 py-3">Amount</th>
            <th scope="col" class="px-6 py-3">Purchase rate</th>
            <th scope="col" class="px-6 py-3">Add to cart</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b dark:bg-gray-800 dark:border-gray-700 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-8 py-8 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5Le4VR_jK4OYMJLmSaIKMMButztf1_Uajg&s"
              />
            </th>
            <td class="px-6 py-4 text-lg font-bold text-black">Kurties</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">599.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">100+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">300+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="data:image/jpeg;base64,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"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Shirt</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">299.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">300+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">600+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_372x232_9._SY232_CB563558900_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Soft toy</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">lighting</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt._SY232_CB553870684_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Head phones</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_1._SY232_CB570220221_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Ear buds</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">
              Vases and more
            </td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQgNDQ0HDQ0HBw0HBwgHBw8IDQcNFREWFhURExMYHSggGBoxGxUVITEhJSk3Li4uFx8zODM4NygtLisBCgoKDg0OFRAQFSsZFRkrLS0rKysrKy0tKy0rNzc3KzcrKy03OC0rNy0tKys3Ny0tKzcrKysrKystLSsrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAf/xAAcEAEBAQEBAAMBAAAAAAAAAAAAARECEgPw8dH/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAfEQEBAQEAAwADAQEAAAAAAAAAAQIREiExA0FRcRP/2gAMAwEAAhEDEQA/APp/k41WOu3FHdO0s2i9M2qzIyNazaLQeRWZn7NoSPIGtyfEgj94hZaiE3Rk4UkFp8xEIvVCgVIW1LDhkDWi+UZw41ixz62ae2MJSd0rIMRQCoYpGo3U9VQgslTCCydISYEkhZJJgceu9/jOs2pXOJHR/h0akfjfEQh9QPdSSHrckQSYPpSTdGZSkanLUid2eTjMixvDjSp62xikb8nBv5JE/dZkakOFHW7TzLIrTNIrGUqmUi1LEzVqGM6dZOxpMkSWNJkwSVoVJiFJMHUQgB5EmueXVfTo6DI3OTid3/GjGLG8AS9a6ZwNVmqQkvQGsMgXSsE5akMjUidvWu5BI3ikawtsiV3aJDIhpLq1pk4qPQ0OHkIGjR4eZOipMb4MSWtweoUhmSSECWSJa1CyRSrRZLJ0oIA4kk3B7xz5+PG8bwUfK1us4Kr0xaaYtbyNrNotC0xwO9WmRSNyF1TwSGRqQpWj5CQoaW1pnrS1i9sXonLVs/jdL0zrOmGkP4w6dAHjcK1m9M6bjddNWsQj4p2nUBpbDRrTrB0vDNAaNGSg0gjcLbGoYyW4nWjrJgFsJihDpKkVjdKz13+ud6ZtGunP45C+6bWdRxT1DSDDImonqnnoyNMrU7AbGsXpm9l4fOLW7053pkyByOrOJEY1IcY1okKFo8JdG1m1GQSXTOLG8DE8uhaqDN1IaLQ8TynVrKbxNbI1DBGpDcS1tRpQ4S0oOHDhLoRI1Eg50t2YRovQ+JPda1m/JHO9M6HItn8P9BxF22ocSA0GK1nVoWGkb1m9DVidVzkGQyNSEtWl4zI1IZGsTtbyCpZodDvWbVEDylsJ1m1nTydJ4t+lrC1SYJqtC0I/iWUI41OW8Tf9GcanLUjWE1rgeVrOEpK00ikaghhLLWuuNRYNOt48TurUCK3TZ/H36zWa1Wa3XTnMnxmhrBjdUItGh2ced1akBGJGEmqeKRqQGI2qS04ZDIdS1Rnf0cFWrU+mkFZrVYtNIYUE4tmE1pijG8Fi+YlayipDkoMjUjUgXRBI1IilbaKxLWdDnR7whJvGN5E6E140nSdZKel85jWi1BKqxJIOiMWfcawh0PJ51UZy9K3jhgWNYiXR5AkU9aWzlSNayZEbpWY/p0xc8tYmNsgGnBjQBRhqVzGtBSVjn1UMaxYbpGfJkIHtoVJDW50vTo0LTTIdJZ1aFjNFnTpaaQoadTtUkKGrU6rkoaNTqsjSZjcBqZGmYdBOuU5RtYdvu+65pDaEsJrcnx0Y/H+6FI1OG5yldLdk+Mzl0kSJaS20rFotAvFWLSDw/wACSxSUlRWE3UdIUimidoo1UKSF91JDTtxUJC3EdCCmkOnWUnVpGtWs6NTsUmW9HpnVE6tnLWtRhqEo1qNMaLWmf6XnW7256gpLz4MzG/JxvFga3ahmSMzlqcpqJ0btYiLSNKzWb0uunO00isy36WsadHg8aWjVgwLCYCfiWiQRR0ma1WbTwsyzRaqFobxSSN0OJJCCCQVogkSqZqBCdXyjFhSqsqh0ErJDRotw2jQcNIL0XoBNyRxdajSSWmitc7UixfMYrNSPFYNMKM1ahSAlJCMlZ0lIQ4KzUlMhxmgpSMEkYlSSFOhJDQgSSVWyiknVYQklVcrRqTHBSNIxKS+YWv/Z')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">
              Cushion cover and Bedsheet
            </td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Decor_2x._SY232_CB540581077_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Watches</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Home Storage</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>

          <tr
            class="bg-white dark:bg-gray-800 bg-cover bg-[url('data:image/jpeg;base64,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')]"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                class="h-[150px] w-[150px]"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/Img24/SMB/GW/December/Desktop_QC_Glasses_2x._SY232_CB540581077_.jpg"
              />
            </th>

            <td class="px-6 py-4 text-lg font-bold text-black">Glass Ware</td>

            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/price-tag.svg" />
                <div class="text-lg font-medium text-black">399.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="h-[30px] w-[30px]" src="/purchase.svg" />
                <div class="text-lg font-medium text-black">500+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <img class="flex h-[30px] w-[30px]" src="/basket.svg" />
                <div class="flex text-lg font-medium text-black">800+.</div>
              </div>
            </td>
            <td class="px-6 py-4">
              <button
                class="bg-[pink] text-center rounded-lg px-6 py-3 hover:bg-[#e04b64] text-black"
              >
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
