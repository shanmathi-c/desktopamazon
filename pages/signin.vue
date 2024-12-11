<template>
  <div class="h-full w-full items-center justify-center bg-black">
    <div class="w-[600px] bg-slate-950 rounded-lg pt-6 px-[600px]">
      <div class="flex flex-row gap-[20px]">
        <div class="flex flex-col gap-[20px]">
          <div class="text-white font-semibold text-[29px]">
            <h1 class="flex flex-row items-center justify-center">
              SIGN IN PAGE
            </h1>
          </div>
          <div class="gap-[20px]">
            <div class="flex flex-row gap-[20px]">
              <div class="fleflexx-col pt-4">
                <div
                  class="grid items-start text-[30px] font-medium text-white"
                >
                  Name *

                  <input
                    type="text"
                    class="w-[480px] flex p-[30px] rounded-lg bg-slate-900 pt-7 text-[20px] px-6 pt"
                    placeholder="Enter your name"
                    v-model="desktopamazonUser.name"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-[20px]">
              <div class="fleflexx-col pt-4">
                <div
                  class="grid items-start text-[30px] font-medium text-white"
                >
                  Number *
                  <input
                    type="text"
                    class="flex w-[480px] p-[30px] rounded-lg bg-slate-900 pt-7 text-[20px] px-6 pt"
                    placeholder=" Enter mobile number"
                    v-model="desktopamazonUser.number"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-[20px]">
              <div class="fleflexx-col pt-4">
                <div
                  class="grid items-start text-[30px] font-medium text-white"
                >
                  Email Address *
                  <input
                    type="text"
                    class="flex w-[480px] p-[30px] rounded-lg bg-slate-900 pt-7 text-[20px] px-6 pt"
                    placeholder=" Enter your email"
                    v-model="desktopamazonUser.Emailid"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-[20px]">
              <div class="fleflexx-col pt-4">
                <div
                  class="grid items-start text-[30px] font-medium text-white"
                >
                  User Name *
                  <input
                    type="text"
                    class="flex w-[480px] p-[30px] rounded-lg bg-slate-900 pt-7 text-[20px] px-6 pt"
                    placeholder=" Enter the User Name"
                    v-model="desktopamazonUser.username"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-[20px]">
              <div class="fleflexx-col pt-4">
                <div
                  class="grid items-start text-[30px] font-medium text-white"
                >
                  Password *
                  <input
                    type="text"
                    class="flex w-[480px] p-[50px] rounded-lg bg-slate-900 pt-4 text-[20px] px-6 pt"
                    placeholder="Enter the Password "
                    v-model="desktopamazonUser.password"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-[20px]">
              <div class="fleflexx-col pt-4">
                <div
                  class="grid items-start text-[30px] font-medium text-white"
                >
                  Conform Password *
                  <input
                    type="text"
                    class="flex w-[480px] p-[50px] rounded-lg bg-slate-900 pt-4 text-[20px] px-6 pt"
                    placeholder="Enter the conform password "
                    v-model="desktopamazonUser.conformpassword"
                  />
                </div>
              </div>
            </div>
            <div class="pt-10">
              <button
                @click="getCreate()"
                class="w-[480px] p-5 rounded-lg bg-[#f22749] text-center text-white text-[16px] font-semibold"
              >
                Submit
              </button>
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
      desktopamazonUser: {
        name: "",
        number: "",
        Emailid: "",
        username: "",
        password: "",
        conformpassword: "",
      },
    };
  },
  methods: {
    async desktopamazon() {
      const res = this.$http.$get("http://localhost:5001/desktopamazon");
    },
    getCreate() {
      console.log("ghjyhr", this.desktopamazonUser);
      const res = this.$http.$post(
        "http://localhost:5001/desktopamazon/create",
        {
          body: this.desktopamazonUser,
        }
      );
    },
  },
};
</script>
