import type { TLAsset, TLBinding, TLBoundsCorner, TLBoundsEdge, TLBoundsEventHandler, TLBoundsHandleEventHandler, TLCanvasEventHandler, TLHandle, TLKeyboardEventHandler, TLPage, TLPageState, TLPinchEventHandler, TLPointerEventHandler, TLShape, TLShapeBlurHandler, TLShapeCloneHandler, TLSnapLine, TLUser, TLWheelEventHandler } from '@tldraw/core';
import { TDLanguage } from './translations';
export declare class TDEventHandler {
    onPinchStart?: TLPinchEventHandler;
    onPinchEnd?: TLPinchEventHandler;
    onPinch?: TLPinchEventHandler;
    onKeyDown?: TLKeyboardEventHandler;
    onKeyUp?: TLKeyboardEventHandler;
    onPointerMove?: TLPointerEventHandler;
    onPointerUp?: TLPointerEventHandler;
    onPan?: TLWheelEventHandler;
    onZoom?: TLWheelEventHandler;
    onPointerDown?: TLPointerEventHandler;
    onPointCanvas?: TLCanvasEventHandler;
    onDoubleClickCanvas?: TLCanvasEventHandler;
    onRightPointCanvas?: TLCanvasEventHandler;
    onDragCanvas?: TLCanvasEventHandler;
    onReleaseCanvas?: TLCanvasEventHandler;
    onPointShape?: TLPointerEventHandler;
    onDoubleClickShape?: TLPointerEventHandler;
    onRightPointShape?: TLPointerEventHandler;
    onDragShape?: TLPointerEventHandler;
    onHoverShape?: TLPointerEventHandler;
    onUnhoverShape?: TLPointerEventHandler;
    onReleaseShape?: TLPointerEventHandler;
    onPointBounds?: TLBoundsEventHandler;
    onDoubleClickBounds?: TLBoundsEventHandler;
    onRightPointBounds?: TLBoundsEventHandler;
    onDragBounds?: TLBoundsEventHandler;
    onHoverBounds?: TLBoundsEventHandler;
    onUnhoverBounds?: TLBoundsEventHandler;
    onReleaseBounds?: TLBoundsEventHandler;
    onPointBoundsHandle?: TLBoundsHandleEventHandler;
    onDoubleClickBoundsHandle?: TLBoundsHandleEventHandler;
    onRightPointBoundsHandle?: TLBoundsHandleEventHandler;
    onDragBoundsHandle?: TLBoundsHandleEventHandler;
    onHoverBoundsHandle?: TLBoundsHandleEventHandler;
    onUnhoverBoundsHandle?: TLBoundsHandleEventHandler;
    onReleaseBoundsHandle?: TLBoundsHandleEventHandler;
    onPointHandle?: TLPointerEventHandler;
    onDoubleClickHandle?: TLPointerEventHandler;
    onRightPointHandle?: TLPointerEventHandler;
    onDragHandle?: TLPointerEventHandler;
    onHoverHandle?: TLPointerEventHandler;
    onUnhoverHandle?: TLPointerEventHandler;
    onReleaseHandle?: TLPointerEventHandler;
    onShapeBlur?: TLShapeBlurHandler;
    onShapeClone?: TLShapeCloneHandler;
}
export declare type TDDockPosition = 'bottom' | 'left' | 'right' | 'top';
export interface TDSnapshot {
    settings: {
        isCadSelectMode: boolean;
        isDarkMode: boolean;
        isDebugMode: boolean;
        isPenMode: boolean;
        isReadonlyMode: boolean;
        isZoomSnap: boolean;
        keepStyleMenuOpen: boolean;
        nudgeDistanceSmall: number;
        nudgeDistanceLarge: number;
        isFocusMode: boolean;
        isSnapping: boolean;
        showRotateHandles: boolean;
        showBindingHandles: boolean;
        showCloneHandles: boolean;
        showGrid: boolean;
        language: TDLanguage;
        dockPosition: TDDockPosition;
        exportBackground: TDExportBackground;
    };
    appState: {
        currentStyle: ShapeStyles;
        currentPageId: string;
        hoveredId?: string;
        activeTool: TDToolType;
        isToolLocked: boolean;
        isEmptyCanvas: boolean;
        isMenuOpen: boolean;
        status: string;
        snapLines: TLSnapLine[];
        eraseLine: number[][];
        isLoading: boolean;
        disableAssets: boolean;
        selectByContain?: boolean;
    };
    document: TDDocument;
    room?: {
        id: string;
        userId: string;
        users: Record<string, TDUser>;
    };
}
export declare type TldrawPatch = Patch<TDSnapshot>;
export declare type TldrawCommand = Command<TDSnapshot>;
export interface TDFile {
    name: string;
    fileHandle: FileSystemFileHandle | null;
    document: TDDocument;
}
export interface TDDocument {
    id: string;
    name: string;
    version: number;
    pages: Record<string, TDPage>;
    pageStates: Record<string, TLPageState>;
    assets: TDAssets;
}
export declare type TDPage = TLPage<TDShape, TDBinding>;
export declare type PagePartial = {
    shapes: Patch<TDPage['shapes']>;
    bindings: Patch<TDPage['bindings']>;
};
export interface TDMeta {
    isDarkMode: boolean;
}
export interface TransformInfo<T extends TLShape> {
    type: TLBoundsEdge | TLBoundsCorner;
    initialShape: T;
    scaleX: number;
    scaleY: number;
    transformOrigin: number[];
}
export declare enum TDUserStatus {
    Idle = "idle",
    Connecting = "connecting",
    Connected = "connected",
    Disconnected = "disconnected"
}
export interface TDUser extends TLUser {
    activeShapes: TDShape[];
    status: TDUserStatus;
    session?: boolean;
}
export declare type Theme = 'dark' | 'light';
export declare enum SessionType {
    Transform = "transform",
    Translate = "translate",
    TransformSingle = "transformSingle",
    Brush = "brush",
    Arrow = "arrow",
    Draw = "draw",
    Erase = "erase",
    Rotate = "rotate",
    Handle = "handle",
    Grid = "grid",
    Edit = "edit"
}
export declare enum TDStatus {
    Idle = "idle",
    PointingHandle = "pointingHandle",
    PointingBounds = "pointingBounds",
    PointingBoundsHandle = "pointingBoundsHandle",
    TranslatingLabel = "translatingLabel",
    TranslatingHandle = "translatingHandle",
    Translating = "translating",
    Transforming = "transforming",
    Rotating = "rotating",
    Pinching = "pinching",
    Brushing = "brushing",
    Creating = "creating",
    EditingText = "editing-text"
}
export declare type TDToolType = 'select' | 'erase' | TDShapeType.Text | TDShapeType.Draw | TDShapeType.Ellipse | TDShapeType.Rectangle | TDShapeType.Triangle | TDShapeType.Line | TDShapeType.Arrow | TDShapeType.Sticky;
export declare type Easing = 'linear' | 'easeInQuad' | 'easeOutQuad' | 'easeInOutQuad' | 'easeInCubic' | 'easeOutCubic' | 'easeInOutCubic' | 'easeInQuart' | 'easeOutQuart' | 'easeInOutQuart' | 'easeInQuint' | 'easeOutQuint' | 'easeInOutQuint' | 'easeInSine' | 'easeOutSine' | 'easeInOutSine' | 'easeInExpo' | 'easeOutExpo' | 'easeInOutExpo';
export declare enum MoveType {
    Backward = "backward",
    Forward = "forward",
    ToFront = "toFront",
    ToBack = "toBack"
}
export declare enum AlignType {
    Top = "top",
    CenterVertical = "centerVertical",
    Bottom = "bottom",
    Left = "left",
    CenterHorizontal = "centerHorizontal",
    Right = "right"
}
export declare enum StretchType {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum DistributeType {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum FlipType {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare enum TDShapeType {
    Sticky = "sticky",
    Ellipse = "ellipse",
    Rectangle = "rectangle",
    Triangle = "triangle",
    Draw = "draw",
    Arrow = "arrow",
    Line = "line",
    Text = "text",
    Group = "group",
    Image = "image",
    Video = "video"
}
export declare enum Decoration {
    Arrow = "arrow"
}
export interface TDBaseShape extends TLShape {
    style: ShapeStyles;
    type: TDShapeType;
    label?: string;
    handles?: Record<string, TDHandle>;
}
export interface DrawShape extends TDBaseShape {
    type: TDShapeType.Draw;
    points: number[][];
    isComplete: boolean;
}
export interface TDHandle extends TLHandle {
    canBind?: boolean;
    bindingId?: string;
}
export interface RectangleShape extends TDBaseShape {
    type: TDShapeType.Rectangle;
    size: number[];
    label?: string;
    labelPoint?: number[];
}
export interface EllipseShape extends TDBaseShape {
    type: TDShapeType.Ellipse;
    radius: number[];
    label?: string;
    labelPoint?: number[];
}
export interface TriangleShape extends TDBaseShape {
    type: TDShapeType.Triangle;
    size: number[];
    label?: string;
    labelPoint?: number[];
}
export interface ArrowShape extends TDBaseShape {
    type: TDShapeType.Arrow;
    bend: number;
    handles: {
        start: TDHandle;
        bend: TDHandle;
        end: TDHandle;
    };
    decorations?: {
        start?: Decoration;
        end?: Decoration;
        middle?: Decoration;
    };
    label?: string;
    labelPoint?: number[];
}
export interface ArrowBinding extends TLBinding {
    handleId: keyof ArrowShape['handles'];
    distance: number;
    point: number[];
}
export declare type TDBinding = ArrowBinding;
export interface ImageShape extends TDBaseShape {
    type: TDShapeType.Image;
    size: number[];
    assetId: string;
}
export interface VideoShape extends TDBaseShape {
    type: TDShapeType.Video;
    size: number[];
    assetId: string;
    isPlaying: boolean;
    currentTime: number;
}
export interface TextShape extends TDBaseShape {
    type: TDShapeType.Text;
    text: string;
}
export interface StickyShape extends TDBaseShape {
    type: TDShapeType.Sticky;
    size: number[];
    text: string;
}
export interface GroupShape extends TDBaseShape {
    type: TDShapeType.Group;
    size: number[];
    children: string[];
}
export declare type TDShape = RectangleShape | EllipseShape | TriangleShape | DrawShape | ArrowShape | TextShape | GroupShape | StickyShape | ImageShape | VideoShape;
export declare enum ColorStyle {
    White = "white",
    LightGray = "lightGray",
    Gray = "gray",
    Black = "black",
    Green = "green",
    Cyan = "cyan",
    Blue = "blue",
    Indigo = "indigo",
    Violet = "violet",
    Red = "red",
    Orange = "orange",
    Yellow = "yellow"
}
export declare enum SizeStyle {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum DashStyle {
    Draw = "draw",
    Solid = "solid",
    Dashed = "dashed",
    Dotted = "dotted"
}
export declare enum FontSize {
    Small = "small",
    Medium = "medium",
    Large = "large",
    ExtraLarge = "extraLarge"
}
export declare enum AlignStyle {
    Start = "start",
    Middle = "middle",
    End = "end",
    Justify = "justify"
}
export declare enum FontStyle {
    Script = "script",
    Sans = "sans",
    Serif = "serif",
    Mono = "mono"
}
export declare type ShapeStyles = {
    color: ColorStyle;
    size: SizeStyle;
    dash: DashStyle;
    font?: FontStyle;
    textAlign?: AlignStyle;
    isFilled?: boolean;
    scale?: number;
};
export declare enum TDAssetType {
    Image = "image",
    Video = "video"
}
export interface TDImageAsset extends TLAsset {
    type: TDAssetType.Image;
    fileName: string;
    src: string;
    size: number[];
}
export interface TDVideoAsset extends TLAsset {
    type: TDAssetType.Video;
    fileName: string;
    src: string;
    size: number[];
}
export declare type TDAsset = TDImageAsset | TDVideoAsset;
export declare type TDAssets = Record<string, TDAsset>;
export declare enum TDExportType {
    PNG = "png",
    JPG = "jpeg",
    WEBP = "webp",
    SVG = "svg",
    JSON = "json"
}
export interface TDExport {
    name: string;
    type: string;
    blob: Blob;
}
export declare enum TDExportBackground {
    Transparent = "transparent",
    Auto = "auto",
    Light = "light",
    Dark = "dark"
}
export declare type ParametersExceptFirst<F> = F extends (arg0: any, ...rest: infer R) => any ? R : never;
export declare type ExceptFirst<T extends unknown[]> = T extends [any, ...infer U] ? U : never;
export declare type ExceptFirstTwo<T extends unknown[]> = T extends [any, any, ...infer U] ? U : never;
export declare type PropsOfType<U> = {
    [K in keyof TDShape]: TDShape[K] extends any ? (TDShape[K] extends U ? K : never) : never;
}[keyof TDShape];
export declare type Difference<A, B, C = A> = A extends B ? never : C;
export declare type Intersection<A, B, C = A> = A extends B ? C : never;
export declare type FilteredKeys<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}[keyof T];
export declare type RequiredKeys<T> = {
    [K in keyof T]-?: Difference<Record<string, unknown>, Pick<T, K>, K>;
}[keyof T];
export declare type MembersWithRequiredKey<T, U> = {
    [P in keyof T]: Intersection<U, RequiredKeys<T[P]>, T[P]>;
}[keyof T];
export declare type MappedByType<U extends string, T extends {
    type: U;
}> = {
    [P in T['type']]: T extends any ? (P extends T['type'] ? T : never) : never;
};
export declare type ShapesWithProp<U> = MembersWithRequiredKey<MappedByType<TDShapeType, TDShape>, U>;
export declare type Patch<T> = Partial<{
    [P in keyof T]: Patch<T[P]>;
}>;
export interface Command<T extends {
    [key: string]: any;
}> {
    id?: string;
    before: Patch<T>;
    after: Patch<T>;
}
export interface FileWithHandle extends File {
    handle?: FileSystemFileHandle;
}
export interface FileWithDirectoryHandle extends File {
    directoryHandle?: FileSystemDirectoryHandle;
}
export interface FileSystemHandlePermissionDescriptor {
    mode?: 'read' | 'readwrite';
}
export interface FileSystemHandle {
    readonly kind: 'file' | 'directory';
    readonly name: string;
    isSameEntry: (other: FileSystemHandle) => Promise<boolean>;
    queryPermission: (descriptor?: FileSystemHandlePermissionDescriptor) => Promise<PermissionState>;
    requestPermission: (descriptor?: FileSystemHandlePermissionDescriptor) => Promise<PermissionState>;
}
//# sourceMappingURL=types.d.ts.map