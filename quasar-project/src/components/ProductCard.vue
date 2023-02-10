  <template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img :src="image"/>

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />
      </q-card-actions>

      <q-slide-transition>
          <q-separator />
          54654
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script setup>
// import { useUserStore } from '../stores/user.js'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

// 商品加入購物車之後要储存在前台
// const user = useUserStore()
// const { editCart } = user
</script>

<style lang="scss">
.q-card{
  width: 350px;
  background: rgba(255, 255, 17, 0);
  .q-img__image{
    filter: drop-shadow(10px 10px 2px #dadada);
  }
}
</style>
