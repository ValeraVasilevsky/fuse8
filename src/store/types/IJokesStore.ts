import { IJoke } from "@/store/types/IJoke";

export interface IJokesState {
  jokes: IJoke[];
  total: number;
}
