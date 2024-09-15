<script setup lang="ts">
import { computed, ref, type PropType, onMounted, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import OptionTemplate from '@/components/options/OptionTemplate.vue';
import OptionAnswerSlot from '@/components/options/OptionAnswerSlot.vue';
import SecondaryButton from '@/components/common/buttons/SecondaryButton.vue';
import IconReplay from '@/components/common/icons/IconReplay.vue';

const props = defineProps({
  options: {
    type: Array as PropType<RankingQuestionOption[]>,
    required: true,
  },
  answersLimit: {
    type: Number,
    default: undefined,
  },
});

const model = defineModel({
  type: Array as PropType<RankingQuestionOption[]>,
  required: true,
});

const rankingQuestionContainer = ref<HTMLElement | null>(null);
const errorMessage = ref<string | null>(null);
const errorMessageTimeoutId = ref<number | null>(null);
const draggingNewOption = ref<boolean>(false);
const availableOptions = ref<RankingQuestionOption[]>(props.options);

watch(props.options, (newValue) => (availableOptions.value = newValue));

const slotsLimit = computed(() => props.answersLimit || props.options.length);
const currentVisibleSlots = computed(() => slotsLimit.value - model.value.length);

onMounted(() => {
  if (!rankingQuestionContainer.value) {
    return;
  }

  const element = rankingQuestionContainer.value;
  element.style.minHeight = element.offsetHeight + 'px';
});

const canSelectMoreItems = computed(() => model.value.length < slotsLimit.value);

const showErrorMessage = (message: string, timeout: number = 3000) => {
  if (errorMessageTimeoutId.value) {
    clearTimeout(errorMessageTimeoutId.value);
  }

  errorMessage.value = message;
  errorMessageTimeoutId.value = setTimeout(() => {
    errorMessage.value = null;
    errorMessageTimeoutId.value = null;
  }, timeout);
};

const onAvailableOptionClick = (option: RankingQuestionOption) => {
  if (!canSelectMoreItems.value) {
    showErrorMessage('Maximum number of elements selected');
    return;
  }

  model.value.push(option);
  availableOptions.value = availableOptions.value.filter((availableOption) => {
    return availableOption.key !== option.key;
  });
};

const onSelectedOptionClick = (option: RankingQuestionOption) => {
  availableOptions.value.push(option);
  model.value = model.value.filter((availableOption) => {
    return availableOption.key !== option.key;
  });
};

const changeNewDraggingOption = (value: boolean) => {
  draggingNewOption.value = value;
};

const onOptionDrag = (event: DragEvent) => {
  if (!canSelectMoreItems.value && draggingNewOption.value) {
    event.preventDefault();
    event.stopImmediatePropagation();
    showErrorMessage('Maximum number of elements selected');
  }
};

const onResetClick = () => {
  model.value = [];
  availableOptions.value = props.options;
  errorMessage.value = null;
};
</script>

<template>
  <div ref="rankingQuestionContainer" class="ranking-question">
    <VueDraggable
      v-model="availableOptions"
      class="ranking-question__available-options"
      tag="ol"
      :sort="false"
      group="ranking-question"
      :animation="150"
    >
      <OptionTemplate
        v-for="item in availableOptions"
        :key="item.key"
        class="ranking-question__available-option"
        tag="li"
        :label="item.label"
        role="button"
        @dragstart="changeNewDraggingOption(true)"
        @dragend="changeNewDraggingOption(false)"
        @click="onAvailableOptionClick(item)"
      />
    </VueDraggable>

    <VueDraggable
      v-model="model"
      class="ranking-question__selected-answers"
      ghost-class="ranking-question__selected-ghost-option"
      tag="ol"
      filter=".ranking-question__answer-slot"
      group="ranking-question"
      :animation="150"
      @dragover="onOptionDrag"
      @dragenter="onOptionDrag"
    >
      <OptionTemplate
        v-for="item in model"
        :key="item.key"
        class="ranking-question__selected-option"
        tag="li"
        :label="item.label"
        role="button"
        @click="onSelectedOptionClick(item)"
      />
      <OptionAnswerSlot
        v-for="slot in currentVisibleSlots"
        class="ranking-question__answer-slot"
        :key="slot"
        tag="li"
        aria-hidden="true"
        tabindex="-1"
      />
      <div class="ranking-question__reset-container">
        <SecondaryButton @click="onResetClick">
          <template #prepend><IconReplay /></template>
          Reset
        </SecondaryButton>
      </div>
    </VueDraggable>

    <div v-if="errorMessage" class="ranking-question__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.ranking-question {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5.5rem;

  &__available-option ~ .ranking-question__answer-slot:last-of-type {
    display: none;
  }

  &__available-options,
  &__selected-answers {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    height: 100%;

    list-style: none;
    padding: 0;
  }

  &__available-option,
  &__selected-option {
    cursor: move;
  }

  &__selected-answers {
    position: relative;
    counter-reset: slots-counter;

    & li {
      position: relative;
      counter-increment: slots-counter;

      &::before {
        color: var(--color-accent);
        position: absolute;
        left: -1.5rem;
        top: 50%;
        transform: translate(0, -50%);
        content: counter(slots-counter);
        font-size: 1.25rem;
      }
    }
  }

  &__reset-container {
    display: flex;
    justify-content: flex-end;
    margin-top: var(--space-3);
  }

  &__error-message {
    color: var(--color-text-error);
    margin-top: var(--space-3);
  }
}
</style>
