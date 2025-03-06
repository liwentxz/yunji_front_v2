export function $queryList(data) {
  return this.$http.post("//", data);
}

export default {
  methods: {
    $queryList,
  },
};
