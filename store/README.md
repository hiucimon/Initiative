# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).



export default {
  computed: {
    ...mapGetters({
      getStr:'abilityscores/getStr',
      getDex:'abilityscores/getDex',
      getCon:'abilityscores/getCon',
      getInt:'abilityscores/getInt',
      getWis:'abilityscores/getWis',
      getCha:'abilityscores/getCha',
  }),
    str () {
      return this.$store.getters['abilityscores/getStr']
    },
    dex () {
      return this.$store.getters['abilityscores/getDex']
    },
    con () {
      return this.$store.getters['abilityscores/getCon']
    },
    int () {
      return this.$store.getters['abilityscores/getInt']
    },
    wis () {
      return this.$store.getters['abilityscores/getWis']
    },
    chr () {
      return this.$store.getters['abilityscores/getChr']
    },
  },
  methods: {
    // mutations
  },
  actions: {
    // actions
  },
  components: {
    Logo,
  },
}
