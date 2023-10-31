import { writable } from "svelte/store";

export interface Breadcrumb {
  href: string;
  title: string;
}

const home: Breadcrumb = {
  href: "/",
  title: "Home",
};

export const breadcrumbs = writable<Breadcrumb[]>([home]);

export function trail(...trail: Breadcrumb[]): void {
  breadcrumbs.set([home, ...trail]);
}
