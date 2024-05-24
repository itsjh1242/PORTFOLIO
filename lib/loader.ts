export default function myImageLoader({ src, width, quality }: { src: string; width: string; quality: any }) {
  return `https://itsjh1242.github.io/portfolio/${src}?w=${width}&q=${quality || 75}`;
}
