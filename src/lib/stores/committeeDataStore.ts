import { readable } from 'svelte/store';
import UNSCLogo from '$lib/logos/UNSC.svelte';
import HRCLogo from '$lib/logos/HRC.svelte';
import UPILogo from '$lib/logos/UPI.svelte';
import AIPPMLogo from '$lib/logos/AIPPM.svelte';

const data = [
  {
    logo: UNSCLogo,
    name: 'UNSC',
    link: "/committees/unsc"
  },
  {
    logo: HRCLogo,
    name: 'HRC',
    link: "/committees/hrc"
  },
  {
    logo: UPILogo,
    name: 'UPI',
    link: "/committees/upi"
  },
  {
    logo: UNSCLogo,
    name: 'DISEC',
    link: "/committees/disec"
  },
  {
    logo: UNSCLogo,
    name: 'CCC',
    link: "/committees/ccc"
  },
  {
    logo: AIPPMLogo,
    name: 'AIPPM',
    link: "/committees/aippm"
  },
  {
    logo: UNSCLogo,
    name: 'UNODC',
    link: "/committees/unodc"
  }
]

export const committeeDataStore = readable(data);