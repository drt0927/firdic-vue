<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2 class="fw-bold">스킬</h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <!-- <div class="mb-10">
        <el-slider :min="1" :max="40" v-model="level" show-input />
      </div> -->
      <div class="row">
        <template v-for="s of skill">
          <div class="col-md-12 mb-5">
            <!--begin::Details-->
            <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
              <!--begin: Pic-->
              <div class="me-7 skill-image">
                <div class="symbol symbol-100px symbol-lg-100px symbol-fixed position-relative">
                  <img :src="s.skill_image_url" alt="image" />
                </div>
              </div>
              <!--end::Pic-->

              <!--begin::Info-->
              <div class="flex-grow-1">
                <!--begin::Title-->
                <div
                  class="d-flex justify-content-between align-items-start flex-wrap mb-2"
                >
                  <!--begin::User-->
                  <div class="d-flex flex-column">
                    <!--begin::Name-->
                    <div class="d-flex align-items-center mb-2">
                      <span class="text-gray-800 fs-2 fw-bold me-1">{{ s.skill_name }}</span>
                    </div>
                    <!--end::Name-->
                    <!--begin::Info-->
                    <div class="d-flex flex-wrap fw-semibold fs-6 pe-2">
                      <span class="d-flex align-items-center text-gray-500 me-5 mb-2">
                        <span :class="`badge badge-${s.skill_type.startsWith('액티브') ? 'success' : 'primary'}`">{{ s.skill_type }}</span>
                      </span>
                      <span class="d-flex align-items-center text-gray-500 me-5 mb-2">
                        <!-- <KTIcon icon-name="profile-circle" icon-class="fs-4 me-1" /> -->
                        <img v-if="s.arche_type === '공학'" :src="getAssetPath('media/tfd/ico_archetype--tech.png')" width="25px">
                        <img v-if="s.arche_type === '차원'" :src="getAssetPath('media/tfd/ico_archetype--dimension.png')" width="25px">
                        <img v-if="s.arche_type === '융합'" :src="getAssetPath('media/tfd/ico_archetype--fusion.png')" width="25px">
                        <img v-if="s.arche_type === '특이'" :src="getAssetPath('media/tfd/ico_archetype--singular.png')" width="25px">
                        &nbsp;{{ s.arche_type }}
                      </span>
                      <span class="d-flex align-items-center text-gray-500 mb-2">
                        <!-- <KTIcon icon-name="geolocation" icon-class="fs-4 me-1" /> -->
                        <img v-if="s.element_type === '무속성'" :src="getAssetPath('media/tfd/ico_char_attribute--none.png')" alt="image"  width="25px" />
                        <img v-if="s.element_type === '냉기'" :src="getAssetPath('media/tfd/ico_char_attribute--chill.png')" alt="image"  width="25px" />
                        <img v-if="s.element_type === '전기'" :src="getAssetPath('media/tfd/ico_char_attribute--electric.png')" alt="image"  width="25px" />
                        <img v-if="s.element_type === '화염'" :src="getAssetPath('media/tfd/ico_char_attribute--fire.png')" alt="image"  width="25px" />
                        <img v-if="s.element_type === '독성'" :src="getAssetPath('media/tfd/ico_char_attribute--toxic.png')" alt="image"  width="25px" />
                        &nbsp;{{ s.element_type }}
                      </span>
                    </div>
                    <!--end::Info-->
                  </div>
                  <!--end::User-->
                </div>
                <!--end::Title-->
                <div class="d-flex flex-wrap flex-stack">
                  <span v-html="s.skill_description.replace(/\n/gi, '<br/>')"></span>
                </div>
              </div>
              <!--end::Info-->
            </div>
            <!--end::Details-->
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
import type { IDescendantSkill } from '@/core/data/tfd/descendant';

export default defineComponent({
  name: "descendant-skill",
  props: {
    cardClasses: String,
    skill: Array as PropType<IDescendantSkill[]>
  },
  components: {},
  setup(props) {
    return {
      getAssetPath,
    };
  },
});
</script>

<style lang="scss" scoped>
.skill-image {
  display: flex;
  justify-items: center;
  align-items: center;
}
</style>