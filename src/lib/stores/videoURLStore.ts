import { readable } from 'svelte/store';

const data = [
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/AIPPMVideo-3b8varlHLBoBov40rpxqhlpL6eCAzC.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/AIPPMVideo-3b8varlHLBoBov40rpxqhlpL6eCAzC.mp4?download=1",
    pathname: "AIPPMVideo.mp4",
    size: 6719125,
    uploadedAt: "2024-10-18T09:01:04.000Z",
  },
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/CCCVideo-JhlIVkkbzAfgSitCqqsvOezd99hDXY.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/CCCVideo-JhlIVkkbzAfgSitCqqsvOezd99hDXY.mp4?download=1",
    pathname: "CCCVideo.mp4",
    size: 6673652,
    uploadedAt: "2024-10-18T09:02:41.000Z",
  },
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/DISECVideo-hpPUmazOmC1o7lZ8QjFVszbTzflOew.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/DISECVideo-hpPUmazOmC1o7lZ8QjFVszbTzflOew.mp4?download=1",
    pathname: "DISECVideo.mp4",
    size: 9919103,
    uploadedAt: "2024-10-18T09:02:53.000Z",
  },
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/HRCVideo-2P3Zx57zGzDsZZPXiGUk7xUYPslqLa.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/HRCVideo-2P3Zx57zGzDsZZPXiGUk7xUYPslqLa.mp4?download=1",
    pathname: "HRCVideo.mp4",
    size: 26874302,
    uploadedAt: "2024-10-18T09:03:08.000Z",
  },
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/UNODCVideo-nn1T1Owgbp0eXjlOAq8fkls0RW3w98.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/UNODCVideo-nn1T1Owgbp0eXjlOAq8fkls0RW3w98.mp4?download=1",
    pathname: "UNODCVideo.mp4",
    size: 3994580,
    uploadedAt: "2024-10-18T09:03:21.000Z",
  },
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/UNSCVideo-0Oq5GU7aPxNsluGuqoSt0yiG4JKYAw.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/UNSCVideo-0Oq5GU7aPxNsluGuqoSt0yiG4JKYAw.mp4?download=1",
    pathname: "UNSCVideo.mp4",
    size: 2188832,
    uploadedAt: "2024-10-18T09:03:31.000Z",
  },
  {
    url: "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/UPIVideo-2LJrlqoXGIP6dJxCQixv89YMm14erX.mp4",
    downloadUrl:
      "https://eodxpysfgtcynf4v.public.blob.vercel-storage.com/UPIVideo-2LJrlqoXGIP6dJxCQixv89YMm14erX.mp4?download=1",
    pathname: "UPIVideo.mp4",
    size: 4497185,
    uploadedAt: "2024-10-18T09:03:41.000Z",
  },
];

export const videoURLStore = readable(data);
