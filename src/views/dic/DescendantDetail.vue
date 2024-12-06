<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img :src="descendant?.descendant_image_url" alt="image" :class="descendant?.detail.tier" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1"
            >
              {{ descendant?.descendant_name }}
            </a>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semibold text-muted mb-6">{{ descendant?.detail.eng_name }}</div>
            <!--end::Position-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              기본정보
              <span class="ms-2 rotate-180">
                <KTIcon icon-name="down" icon-class="fs-3" />
              </span>
            </div>

            <!-- <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              <a
                href="#"
                class="btn btn-sm btn-light-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_customer"
              >
                Edit
              </a>
            </span> -->
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6" style="padding-top: 0px !important;">
              <!--begin::Details item-->
              <div class="fw-bold mt-5">계승자 속성</div>
              <div class="text-gray-600">
                <img v-if="descendant?.detail.attribute === 'none'" :src="getAssetPath('media/tfd/ico_char_attribute--none.png')" alt="image" width="25px" />
                <img v-if="descendant?.detail.attribute === 'ice'" :src="getAssetPath('media/tfd/ico_char_attribute--chill.png')" alt="image" width="25px" />
                <img v-if="descendant?.detail.attribute === 'electric'" :src="getAssetPath('media/tfd/ico_char_attribute--electric.png')" alt="image" width="25px" />
                <img v-if="descendant?.detail.attribute === 'fire'" :src="getAssetPath('media/tfd/ico_char_attribute--fire.png')" alt="image" width="25px" />
                <img v-if="descendant?.detail.attribute === 'poison'" :src="getAssetPath('media/tfd/ico_char_attribute--toxic.png')" alt="image" width="25px" />
                &nbsp;
                <span v-if="descendant?.detail.attribute === 'none'">무속성</span>
                <span v-if="descendant?.detail.attribute === 'ice'">냉기</span>
                <span v-if="descendant?.detail.attribute === 'electric'">전기</span>
                <span v-if="descendant?.detail.attribute === 'fire'">화염</span>
                <span v-if="descendant?.detail.attribute === 'poison'">독성</span>
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">역할</div>
              <div class="text-gray-600">
                <!-- <a href="#" class="text-gray-600 text-hover-primary">info@keenthemes.com</a> -->
                 {{ descendant?.detail.role }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">전용 장비</div>
              <div class="text-gray-600">{{ descendant?.detail.only_weapon }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">특징</div>
              <div class="text-gray-600" v-html="descendant?.detail.point.replace(/\n/ig, '<br/>')">
              </div>
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >스탯 & 스킬</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_events_and_logs_tab"
            >스토리</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_statements"
            >전용 장비와 능력</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            class="btn btn-primary ps-7"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            Actions
            <KTIcon icon-name="down" icon-class="fs-2 me-0" />
          </a>
          <Dropdown3></Dropdown3>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <Stat card-classes="mb-6 mb-xl-9" :stat="descendant?.descendant_stat"></Stat>
          <Skill card-classes="mb-6 mb-xl-9" :skill="descendant?.descendant_skill"></Skill>

          <!-- <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

          <PaymentMethods card-classes="mb-6 mb-xl-9"></PaymentMethods>

          <CreditBalance card-classes="mb-6 mb-xl-9"></CreditBalance>

          <Invoices card-classes="mb-6 mb-xl-9"></Invoices> -->
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_statements"
          role="tabpanel"
        >
          <Earnings card-classes="mb-6 mb-xl-9"></Earnings>
          <Statement card-classes="mb-6 mb-xl-9"></Statement>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, type Ref, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";
import { useRoute } from "vue-router";
import { getDescendant, type IDescendant } from "@/core/data/tfd/descendant";

import Stat from "@/components/descendant/cards/Stat.vue";
import Skill from "@/components/descendant/cards/Skill.vue";

export default defineComponent({
  name: "customer-details",
  components: {
    PaymentRecords,
    PaymentMethods,
    CreditBalance,
    Invoices,
    Events,
    Logs,
    Earnings,
    Statement,
    Dropdown3,
    NewCardModal,
    Stat,
    Skill
  },
  setup() {
    const id = useRoute().params.id;
    const descendant = ref<IDescendant>();
    onMounted(async () => {
      const res = await getDescendant();
      descendant.value = res.find((x) => x.descendant_id === id);
      console.log(descendant.value);
    });
    
    return {
      getAssetPath,
      descendant
    };
  },
});
</script>

<style lang="scss" scoped>
.normal {
  box-shadow: 0 0 20px #016ed8;
  background: linear-gradient(45deg, black, #016ed8);
}
.ult {
  box-shadow: 0 0 20px #c19140;
  background: linear-gradient(45deg, black, #c19140);
}
</style>
