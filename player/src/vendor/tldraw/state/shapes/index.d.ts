import type { TDShapeUtil } from "./TDShapeUtil";
import { TDShape } from "../../types";
import { ArrowUtil } from "./ArrowUtil";
import { DrawUtil } from "./DrawUtil";
import { EllipseUtil } from "./EllipseUtil";
import { GroupUtil } from "./GroupUtil";
import { ImageUtil } from "./ImageUtil";
import { RectangleUtil } from "./RectangleUtil";
import { StickyUtil } from "./StickyUtil";
import { TextUtil } from "./TextUtil";
import { TriangleUtil } from "./TriangleUtil";
import { VideoUtil } from "./VideoUtil";
export declare const Rectangle: RectangleUtil;
export declare const Triangle: TriangleUtil;
export declare const Ellipse: EllipseUtil;
export declare const Draw: DrawUtil;
export declare const Arrow: ArrowUtil;
export declare const Text: TextUtil;
export declare const Group: GroupUtil;
export declare const Sticky: StickyUtil;
export declare const Image: ImageUtil;
export declare const Video: VideoUtil;
export declare const shapeUtils: {
  rectangle: RectangleUtil;
  triangle: TriangleUtil;
  ellipse: EllipseUtil;
  draw: DrawUtil;
  arrow: ArrowUtil;
  text: TextUtil;
  group: GroupUtil;
  sticky: StickyUtil;
  image: ImageUtil;
  video: VideoUtil;
};
export declare const getShapeUtil: <T extends TDShape>(
  shape: T | T["type"]
) => TDShapeUtil<T, any>;
//# sourceMappingURL=index.d.ts.map
