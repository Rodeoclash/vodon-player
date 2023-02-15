export function getRatioDimensions(
  width: number,
  height: number,
  element: HTMLElement
): [number, number] {
  const ratioWidthHeight = width / height;
  const ratioHeightWidth = height / width;

  const containerWidth = element.offsetWidth;
  const containerHeight = element.offsetHeight;

  if (containerHeight * ratioWidthHeight <= containerWidth) {
    return [containerHeight * ratioWidthHeight, containerHeight];
  }

  return [containerWidth, containerWidth * ratioHeightWidth];
}
