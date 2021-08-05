<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list shaped>
      <v-list-item-group
        multiple
      >
        <template v-for="item in items">
          <v-divider
            v-if="!item"
            :key="`divider-${item.id}`"
          ></v-divider>

          <v-list-item
            v-else
            :key="`item-${item.id}`"
            :value="item"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ completed }">
              <v-list-item-action>
                <v-checkbox
                  :input-value="completed"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    // items: {
    //     type: Array,
    //     default(){
    //     }
    // },
  },
  data() {
    return {
      items: [
        {
          userId: 4,
          id: 64,
          title: "voluptas consequatur qui ut quia magnam nemo esse",
          completed: false,
        },
        {
          userId: 4,
          id: 65,
          title: "fugiat pariatur ratione ut asperiores necessitatibus magni",
          completed: false,
        },
        {
          userId: 4,
          id: 66,
          title: "rerum eum molestias autem voluptatum sit optio",
          completed: false,
        },
        {
          userId: 4,
          id: 67,
          title: "quia voluptatibus voluptatem quos similique maiores repellat",
          completed: false,
        },
        {
          userId: 4,
          id: 68,
          title: "aut id perspiciatis voluptatem iusto",
          completed: false,
        },
        {
          userId: 4,
          id: 69,
          title:
            "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
          completed: false,
        },
        {
          userId: 4,
          id: 70,
          title: "ut sequi accusantium et mollitia delectus sunt",
          completed: false,
        },
        {
          userId: 4,
          id: 71,
          title: "aut velit saepe ullam",
          completed: false,
        },
        {
          userId: 4,
          id: 72,
          title:
            "praesentium facilis facere quis harum voluptatibus voluptatem eum",
          completed: false,
        },
        {
          userId: 4,
          id: 73,
          title: "sint amet quia totam corporis qui exercitationem commodi",
          completed: true,
        },
        {
          userId: 4,
          id: 74,
          title: "expedita tempore nobis eveniet laborum maiores",
          completed: false,
        },
      ],
    };
  },
};
</script>
