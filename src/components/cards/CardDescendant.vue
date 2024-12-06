<template>
  <!--begin::Col-->
  <div class="col-md-6 col-xxl-4">
    <!--begin::Card-->
    <a :href="`#/dic/descendant/${descendantId}`" class="card" :class="cardClasses">
      <!--begin::Card body-->
      <div class="card-body d-flex flex-center flex-column p-9">
        <!--begin::Avatar-->
        <div v-if="avatar" class="symbol symbol-65px symbol-circle mb-5">
          <img :src="avatar" :class="tier" alt="image" />
          <div class="bg-light position-absolute rounded-circle translate-middle start-100 top-100 border border-2 border-black h-30px w-30px ms-n3 mt-n3">
            <img v-if="attribute === 'none'" :src="getAssetPath('media/tfd/ico_char_attribute--none.png')" alt="image" width="100%" />
            <img v-if="attribute === 'ice'" :src="getAssetPath('media/tfd/ico_char_attribute--chill.png')" alt="image" width="100%" />
            <img v-if="attribute === 'electric'" :src="getAssetPath('media/tfd/ico_char_attribute--electric.png')" alt="image" width="100%" />
            <img v-if="attribute === 'fire'" :src="getAssetPath('media/tfd/ico_char_attribute--fire.png')" alt="image" width="100%" />
            <img v-if="attribute === 'poison'" :src="getAssetPath('media/tfd/ico_char_attribute--toxic.png')" alt="image" width="100%" />
          </div>
        </div>
        <!-- <div v-else class="symbol symbol-65px symbol-circle mb-5">
          <span
            :class="`text-${color} bg-light-${color}`"
            class="symbol-label fs-2x fw-semibold"
            >{{ initials }}</span
          >
          <div
            v-if="online"
            class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"
          ></div>
        </div> -->
        <!--end::Avatar-->

        <!--begin::Name-->
        <a
          href="#"
          class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
          >{{ name }}</a
        >
        <!--end::Name-->

        <!--begin::Position-->
        <div class="fw-semobold text-gray-500 mb-6">{{ nameEng }}</div>
        <!--end::Position-->

        <!--begin::Info-->
        <div class="d-flex flex-center flex-wrap mb-5">
          <!--begin::Stats-->
          <div
            class="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bold text-gray-700">{{ role }}</div>
            <div class="fw-semibold text-gray-500">역할</div>
          </div>
          <!--end::Stats-->

          <!--begin::Stats-->
          <div
            class="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bold text-gray-700">{{ passive }}</div>
            <div class="fw-semibold text-gray-500">패시브 스킬</div>
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->

        <!--begin::Follow-->
        <!-- <a href="#" class="btn btn-sm btn-light-primary">
          <KTIcon icon-name="check" icon-class="fs-3" />
          Connected
        </a>
        <a v-else href="#" class="btn btn-sm btn-light">
          <KTIcon icon-name="plus" icon-class="fs-3" />
          Connect
        </a> -->
        <!--end::Follow-->
      </div>
      <!--begin::Card body-->
    </a>
    <!--begin::Card-->
  </div>
  <!--end::Col-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "card-descendant",
  components: {},
  props: {
    cardClasses: String,
    avatar: String,
    color: String,
    name: String,
    nameEng: String,
    attribute: String,
    role: String,
    tier: String,
    passive: String,
    descendantId: String
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

<style lang="scss" scoped>
.card.pointer {
  cursor: pointer;
}

.normal {
  box-shadow: 0 0 20px #016ed8;
  background: linear-gradient(45deg, black, #016ed8);
}
.ult {
  box-shadow: 0 0 20px #c19140;
  background: linear-gradient(45deg, black, #c19140);
}
</style>
