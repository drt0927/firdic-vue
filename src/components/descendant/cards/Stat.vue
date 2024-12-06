<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bold">스탯 정보 Lv.{{ level }}</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <div class="mb-10">
        <el-slider :min="1" :max="40" v-model="level" show-input />
      </div>
      <div class="row">
        <template v-for="sd of levelStat?.stat_detail">
          <div class="col-md-3">
            {{ sd.stat_type }}
          </div>
          <div class="col-md-3" style="text-align: right">
            <b>{{ sd.stat_value.toLocaleString() }}</b>
          </div>
        </template>
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { computed, defineComponent, ref, type PropType } from "vue";
import { type IDescendantStat } from '@/core/data/tfd/descendant';

export default defineComponent({
  name: "descendant-stat",
  props: {
    cardClasses: String,
    stat: Array as PropType<IDescendantStat[]>
  },
  components: {},
  setup(props) {
    const level = ref<number>(40);
    const levelStat = computed<IDescendantStat | undefined>(() => {
      return props.stat?.find((x) => x.level === Number(level.value));
    });
    return {
      level,
      levelStat,
      getAssetPath,
    };
  },
});
</script>
