<template>
    <div>
      <UserEn v-if="isUserEn" />
      <UserAr v-else-if="isUserAr" />
      <AdminEn v-else-if="isAdminEn" />
      <router-view v-else />
    </div>
  </template>
  
  <script>
  import UserEn from "./en/user.vue";
  import UserAr from "./ar/user.vue"; // Assuming you have an ar version
  import AdminEn from "./en/admin.vue";
  
  export default {
    components: { UserEn, UserAr, AdminEn },
    data: () => ({
      isUserEn: false,
      isUserAr: false,
      isAdminEn: false,
    }),
    mounted() {
      this.checkRoute();
    },
    methods: {
      checkRoute() {
        const url = window.location.href;
        const parts = url.split("/");
        const filteredParts = parts.filter((part) => part !== "");
        const segment = filteredParts[2];
  
        if (filteredParts.length >= 3) {
          if (segment === "en") {
            this.isUserEn = true;
            this.isUserAr = false;
            this.isAdminEn = false;
          } else if (segment === "ar") {
            this.isUserAr = true;
            this.isUserEn = false;
            this.isAdminEn = false;
          } else if (segment === "admin") {
            this.isAdminEn = true;
            this.isUserEn = false;
            this.isUserAr = false;
          } else {
            this.isUserEn = true;
            this.isUserAr = false;
            this.isAdminEn = false;
          }
        } else {
          this.isUserEn = true;
          this.isUserAr = false;
          this.isAdminEn = false;
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  