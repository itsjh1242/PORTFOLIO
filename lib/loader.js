export default function myImageLoader({ src, width, quality }) {
  return `https://itsjh1242.github.io/portfolio/${src}?w=${width}&q=${quality || 75}`;
}
