<template>
  <div>  
    <care-team-list v-if="!isFetching" :members="data" />
    <div v-else-if="error">Error Fetching Data</div>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import CareTeamList from "./CareTeamList.vue";
import { useFetch } from "@vueuse/core";

export default defineComponent({
  components: { CareTeamList },
  name: "CareTeamBox",
  props: {
    url: {
      type: String,
      default: "https://jsonplaceholder.typicode.com/users",
    },
  },
  setup(props) {
    const { isFetching, error, data } = useFetch(props.url).get().json();
    return { isFetching, error, data };
  },
});
</script>
