import { defineStore } from "pinia";

import { IJokesState } from "@/store/types/IJokesStore";

import { http } from "@/api/http";

export const useJokesStore = defineStore("jokes", {
  state: () =>
    ({
      jokes: [],
      total: 0,
    } as IJokesState),

  actions: {
    async findJoke(searchValue: string): Promise<void> {
      try {
        const {
          data: { result, total },
        } = await http.get<{ result: []; total: number }>(
          `jokes/search?query=${searchValue}`
        );

        this.total = total;

        // Странно, что у этого API я не нашел параметр page и limit
        // Так бы Observer создал
        this.jokes = result.slice(0, 8);
      } catch (e) {
        return Promise.reject(e);
      }
    },
  },
});
