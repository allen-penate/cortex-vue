<template>
            <a
              href="#"
              :class="itemCss"
              >
              <!-- <div class="tw-md:tw-flex">
  <div class="tw-mb-4 tw-flex-shrink-0 tw-md:tw-mb-0 tw-md:tw-mr-4">
    <svg class="tw-h-16 tw-w-16 tw-border tw-border-gray-300 tw-bg-white tw-text-gray-300" preserveAspectRatio="none" stroke="currentColor" fill="none" viewBox="0 0 200 200" aria-hidden="true">
      <path vector-effect="non-scaling-stroke" stroke-width="1" d="M0 0l200 200M0 200L200 0" />
    </svg>
  </div>
  <div>
    <h4 class="tw-text-lg tw-font-bold">{{member.name}}</h4>
    <p class="tw-mt-1">
      Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
    </p>
  </div>
</div> -->
<div class="tw-px-4 tw-py-5 tw-border-b tw-border-gray-200 tw-sm:tw-px-6">
  <div class="tw--ml-4 tw--mt-4 tw-flex tw-justify-between tw-items-center tw-flex-wrap">
    <div class="tw-ml-4 tw-mt-4">
      <div class="tw-flex tw-items-center">
        <div class="tw-flex-shrink-0">
          <img class="tw-h-12 tw-w-12 tw-rounded-full" :src="avatarUrl" alt="">
        </div>
        <div class="tw-ml-4">
          <h3 class="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
            {{member.name}}
          </h3>
          <p class="tw-text-sm tw-text-gray-500">
            <a href="#">
              {{member.username}}
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="tw-mt-4 tw-flex-shrink-0 tw-flex">
      <button type="button" class="tw-relative tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-shadow-sm tw-text-sm tw-font-medium tw-rounded-md tw-text-gray-700 tw-bg-white hover:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500">
        <!-- Heroicon name: solid/phone -->
        <svg class="tw--ml-1 tw-mr-2 tw-h-5 tw-w-5 tw-text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <span>
          Phone
        </span>
      </button>
      <button type="button" class="tw-ml-3 tw-relative tw-inline-flex tw-items-center tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-shadow-sm tw-text-sm tw-font-medium tw-rounded-md tw-text-gray-700 tw-bg-white hover:tw-bg-gray-50 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500">
        <!-- Heroicon name: solid/mail -->
        <svg class="tw--ml-1 tw-mr-2 tw-h-5 tw-w-5 tw-text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <span>
          Email
        </span>
      </button>
    </div>
  </div>
</div>
              </a
            >
</template>
<script>
import { defineComponent,ref, computed } from '@vue/composition-api'

export default defineComponent({
    name: "CareTeamItem",
    props: {
        active: {
            type: Boolean,
            default: false,
        },
        member: {
            type: Object,
            default(){
                return {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    address: {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                        }
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    }
        }
        }
    },
    setup(props) {
        const active = ref(props.active);
        const member = ref(props.member);
        const itemCss = computed(()=>{ return [active.value ? 'tw-bg-gray-100 tw-text-gray-900' : 'tw-text-gray-700','tw-block tw-px-4 tw-py-2 tw-text-sm'] })
        const avatarUrl = computed(()=>(`https://robohash.org/${member.value.email}`));
        return { itemCss, avatarUrl }
    },
})
</script>
