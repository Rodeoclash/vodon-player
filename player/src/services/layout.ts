export function getRatioDimensions(
  width: number,
  height: number,
  element: HTMLElement
): [number, number, number] {
  const ratioWidthHeight = width / height;
  const ratioHeightWidth = height / width;

  const containerWidth = element.offsetWidth;
  const containerHeight = element.offsetHeight;
  const scaledHeight = containerHeight * ratioWidthHeight;

  if (scaledHeight <= containerWidth) {
    const scale = scaledHeight / width;
    return [scaledHeight, containerHeight, scale];
  }

  const scale = containerWidth / width;
  return [containerWidth, containerWidth * ratioHeightWidth, scale];
}
