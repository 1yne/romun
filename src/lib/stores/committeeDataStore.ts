import { readable } from 'svelte/store';
import UNSCLogo from '$lib/logos/UNSC.svelte';
import HRCLogo from '$lib/logos/HRC.svelte';
import UPILogo from '$lib/logos/UPI.svelte';
import AIPPMLogo from '$lib/logos/AIPPM.svelte';

const data = [
  {
    logo: UNSCLogo,
    name: 'UNSC',
    link: "/committees/unsc",
    fullName: "United Nations Security Council",
    agenda: ""
  },
  {
    logo: HRCLogo,
    name: 'HRC',
    link: "/committees/hrc",
    fullName: "Human Rights Council",
    agenda: ""
  },
  {
    logo: UPILogo,
    name: 'UPI',
    link: "/committees/upi",
    fullName: "United Press International",
    agenda: ""
  },
  {
    logo: UNSCLogo,
    name: 'DISEC',
    link: "/committees/disec",
    fullName: "Disarmament and International Security Committee",
    agenda: ""
  },
  {
    logo: UNSCLogo,
    name: 'CCC',
    link: "/committees/ccc",
    fullName: "Continuous Crisis Committee",
    agenda: ""
  },
  {
    logo: AIPPMLogo,
    name: 'AIPPM',
    link: "/committees/aippm",
    fullName: "All India Political Party Meeting",
    agenda: ""
  },
  {
    logo: UNSCLogo,
    name: 'UNODC',
    link: "/committees/unodc",
    fullName: "United Nations Office on Drugs and Crime",
    agenda: ""
  }
]

export const committeeDataStore = readable(data);