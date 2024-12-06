<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <!-- <div class="d-flex align-items-center position-relative my-1">
          <KTIcon
            icon-name="magnifier"
            icon-class="fs-1 position-absolute ms-6"
          />
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Customers"
          />
        </div> -->
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
      </div>
      <!--end::Card toolbar-->
    </div>

    <div class="card-body pt-0">
      <!--begin::Row-->
  <div class="row g-6 mb-6 g-xl-9 mb-xl-9">
    <!--begin::Followers-->
      <Card3 v-for="des of descendant"
        :name="des.descendant_name"
        :online="true"
        :avatar="des.descendant_image_url"
        :connected="true"
      ></Card3>

      <!-- <Card3
        name="Olivia Larson"
        position="Art Director at Seal Inc."
        :online="false"
        :avatar="getAssetPath('media/avatars/300-6.jpg')"
        :connected="false"
        avg-earnings="$14,560"
        total-sales="$236,400"
      ></Card3> -->
      <!--end::Followers-->
    </div>
    <!--end::Row-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getDescendant, type IDescendant } from "@/core/data/tfd/descendant";
import { getAssetPath } from "@/core/helpers/assets";
import Card3 from "@/components/cards/Card3.vue";

export default defineComponent({
  name: "main-descendant",
  components: {
    Card3,
  },
  setup() {
    const descendant = ref<IDescendant[]>([]);
    onMounted(async () => {
      const res = await getDescendant();
      descendant.value.push(...res);
    });

    return {
      getAssetPath,
      descendant,
    };
  },
});
</script>
