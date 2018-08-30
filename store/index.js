export const state = () => ({
  locales: ['ko', 'en'],
  locale: 'ko'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}