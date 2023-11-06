import { writable } from "svelte/store";

export interface Breadcrumb {
  href: string;
  label: string;
}

const home: Breadcrumb = {
  href: "/",
  label: "Home",
};

export const breadcrumbs = writable<Breadcrumb[]>([home]);

export function trail(...trail: Breadcrumb[]): void {
  breadcrumbs.set([home, ...trail]);
}
