<template>
  <div class="tw-relative tw-inline-block tw-text-left">
    <div>
      <!-- <button
        class="
          tw-inline-flex
          tw-justify-center
          tw-w-full
          tw-rounded-md
          tw-border
          tw-border-gray-300
          tw-shadow-sm
          tw-px-4
          tw-py-2
          tw-bg-white
          tw-text-sm
          tw-font-medium
          tw-text-gray-700
          hover:tw-bg-gray-50
          focus:tw-outline-none
          focus:tw-ring-2
          focus:tw-ring-offset-2
          focus:tw-ring-offset-gray-100
          focus:tw-ring-indigo-500
        "
        @click.prevent="toggle"
      >
        Options
      </button> -->

      <button
        type="button"
        @click.prevent="toggle"
        class="
          tw-bg-gray-100
          tw-rounded-full
          tw-flex
          tw-items-center
          tw-text-gray-400
          hover:tw-text-gray-600
          focus:tw-outline-none focus:tw-ring-2
          focus:ring-offset-2
          focus:tw-ring-offset-gray-100 focus:tw-ring-indigo-500
        "
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <span class="tw-sr-only">Care Team</span>
        <!-- Heroicon name: solid/dots-vertical -->

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="tw-h-5 tw-w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="tw-transition tw-ease-out tw-duration-100"
      enter-from-class="tw-transform tw-opacity-0 tw-scale-95"
      enter-to-class="tw-transform tw-opacity-100 tw-scale-100"
      leave-active-class="tw-transition tw-ease-in tw-duration-75"
      leave-from-class="tw-transform tw-opacity-100 tw-scale-100"
      leave-to-class="tw-transform tw-opacity-0 tw-scale-95"
    >
      <div
        class="
          tw-origin-top-right
          tw-absolute
          tw-right-0
          tw-mt-2
          tw-w-56
          tw-rounded-md
          tw-shadow-lg
          tw-bg-white
          tw-ring-1
          tw-ring-black
          tw-ring-opacity-5
          focus:tw-outline-none
        "
        v-if="isOpen"
      >
        <div class="tw-px-4 tw-py-3" role="none">
          <p class="tw-text-sm" role="none">Care Team</p>
        </div>
        <div class="tw-py-1">
          <div v-for="(member, index) in members" :key="index">
              <care-team-item :active="index % 2 === 0" :member= "member"></care-team-item>
          </div>
          <form method="POST" action="#">
            <div>
              <button
                type="submit"
                :class="[
                  'tw-text-gray-700',
                  'tw-block tw-w-full tw-text-left tw-px-4 tw-py-2 tw-text-sm',
                ]"
              >
                Sign out
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import CareTeamItem from "./CareTeamItem.vue";

export default {
  name: "CareTeamList",
  props: {
    members: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
              street: "Kulas Light",
              suite: "Apt. 556",
              city: "Gwenborough",
              zipcode: "92998-3874",
              geo: {
                lat: "-37.3159",
                lng: "81.1496",
              },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
          },
        ];
      },
    },
  },
  components:{
      CareTeamItem
  },
  setup() {
    const isOpen = ref(false);
    const toggle = function () {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen,
      toggle,
    };
  },
};
</script>
