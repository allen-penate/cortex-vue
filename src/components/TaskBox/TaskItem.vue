<template>
  <fieldset>
    <legend class="tw-text-lg tw-font-medium tw-text-gray-900">Members</legend>
    <div class="tw-mt-4 tw-border-t tw-border-b tw-border-gray-200 tw-divide-y tw-divide-gray-200">
      <div v-for="(person, personIdx) in people" :key="personIdx" class="tw-relative tw-flex tw-items-start tw-py-4">
        <div class="tw-l-3 tw-flex tw-items-center tw-h-5">
          <input :id="`person-${person.id}`" :name="`person-${person.id}`" type="checkbox" class="tw-ring-indigo-500 tw-h-4 tw-w-4 tw-text-indigo-600 tw-border-gray-300 tw-rounded" />
        </div>
        <div class="tw-min-w-0 tw-flex-1 tw-text-sm">
          <label :for="`person-${person.id}`" class="tw-font-medium tw-text-gray-700 tw-select-none">{{ person.name }}</label>
        </div>

      </div>
    </div>
  </fieldset>    
</template>

<script>
export default {
    name: "TaskItem",
    data(){
        return{
        people:[ { id: 1, name: 'Annette Black' },
                { id: 2, name: 'Cody Fisher' },
                { id: 3, name: 'Courtney Henry' },
                { id: 4, name: 'Kathryn Murphy' },
                { id: 5, name: 'Theresa Webb' }
                ]
        }
    }
}
</script>
