var Yp = Object.create;
var ur = Object.defineProperty,
  Zp = Object.defineProperties,
  Xp = Object.getOwnPropertyDescriptor,
  qp = Object.getOwnPropertyDescriptors,
  Jp = Object.getOwnPropertyNames,
  Jr = Object.getOwnPropertySymbols,
  Qp = Object.getPrototypeOf,
  ii = Object.prototype.hasOwnProperty,
  Za = Object.prototype.propertyIsEnumerable;
var si = (r, e, t) =>
    e in r
      ? ur(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  S = (r, e) => {
    for (var t in e || (e = {})) ii.call(e, t) && si(r, t, e[t]);
    if (Jr) for (var t of Jr(e)) Za.call(e, t) && si(r, t, e[t]);
    return r;
  },
  w = (r, e) => Zp(r, qp(e)),
  Xa = (r) => ur(r, "__esModule", { value: !0 });
var ot = (r, e) => {
  var t = {};
  for (var n in r) ii.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && Jr)
    for (var n of Jr(r)) e.indexOf(n) < 0 && Za.call(r, n) && (t[n] = r[n]);
  return t;
};
var qa = (r, e) => {
    for (var t in e) ur(r, t, { get: e[t], enumerable: !0 });
  },
  Mo = (r, e, t, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of Jp(e))
        !ii.call(r, o) &&
          (t || o !== "default") &&
          ur(r, o, {
            get: () => e[o],
            enumerable: !(n = Xp(e, o)) || n.enumerable,
          });
    return r;
  },
  V = (r, e) =>
    Mo(
      Xa(
        ur(
          r != null ? Yp(Qp(r)) : {},
          "default",
          !e && r && r.__esModule
            ? { get: () => r.default, enumerable: !0 }
            : { value: r, enumerable: !0 }
        )
      ),
      r
    ),
  eu = (
    (r) => (e, t) =>
      (r && r.get(e)) || ((t = Mo(Xa({}), e, 1)), r && r.set(e, t), t)
  )(typeof WeakMap != "undefined" ? new WeakMap() : 0);
var l = (r, e, t) => (si(r, typeof e != "symbol" ? e + "" : e, t), t);
var ue = (r, e, t) =>
  new Promise((n, o) => {
    var s = (i) => {
        try {
          d(t.next(i));
        } catch (c) {
          o(c);
        }
      },
      a = (i) => {
        try {
          d(t.throw(i));
        } catch (c) {
          o(c);
        }
      },
      d = (i) => (i.done ? n(i.value) : Promise.resolve(i.value).then(s, a));
    d((t = t.apply(r, e)).next());
  });
var mce = {};
qa(mce, {
  AlignStyle: () => Gt,
  AlignType: () => hr,
  Arrow: () => Qo,
  ColorStyle: () => is,
  DashStyle: () => Sn,
  Decoration: () => fr,
  DistributeType: () => gr,
  Draw: () => Ns,
  Ellipse: () => $s,
  FlipType: () => ss,
  FontSize: () => ol,
  FontStyle: () => Ao,
  Group: () => Rc,
  Image: () => Ac,
  MoveType: () => rs,
  Rectangle: () => Gs,
  SessionType: () => Ne,
  SizeStyle: () => Sr,
  Sticky: () => Pr,
  StretchType: () => mr,
  TDAssetType: () => as,
  TDEventHandler: () => os,
  TDExportBackground: () => Lo,
  TDExportType: () => go,
  TDShapeType: () => De,
  TDStatus: () => Et,
  TDUserStatus: () => nl,
  TLDR: () => k,
  Text: () => Ec,
  Tldraw: () => lce,
  TldrawApp: () => zn,
  Triangle: () => Vs,
  Video: () => Lc,
  getShapeUtil: () => pa,
  shapeUtils: () => Rn,
  useFileSystem: () => tl,
});
var SMe = require("@fontsource/caveat-brush"),
  bMe = require("@fontsource/crimson-pro"),
  TMe = require("@fontsource/recursive"),
  yMe = require("@fontsource/source-code-pro"),
  xMe = require("@fontsource/source-sans-pro"),
  Gp = require("@tldraw/core"),
  be = V(require("react")),
  Vp = require("react-error-boundary"),
  $p = require("react-intl");
var Ge = V(require("@radix-ui/react-context-menu")),
  lt = require("@radix-ui/react-icons"),
  C = V(require("react")),
  Ye = require("react-intl");
var Qr = require("@stitches/react"),
  { styled: H, createTheme: tu } = (0, Qr.createStitches)({
    themeMap: S({}, Qr.defaultThemeMap),
    theme: {
      colors: {
        bounds: "rgba(65, 132, 244, 1.000)",
        boundsBg: "rgba(65, 132, 244, 0.05)",
        hover: "#ececec",
        overlay: "rgba(0, 0, 0, 0.15)",
        overlayContrast: "rgba(255, 255, 255, 0.15)",
        panel: "#fefefe",
        panelContrast: "#ffffff",
        selected: "rgba(66, 133, 244, 1.000)",
        selectedContrast: "#fefefe",
        text: "#333333",
        tooltip: "#1d1d1d",
        tooltipContrast: "#ffffff",
        warn: "rgba(255, 100, 100, 1)",
        canvas: "rgb(248, 249, 250)",
      },
      shadows: {
        2: "0px 1px 1px rgba(0, 0, 0, 0.14)",
        3: "0px 2px 3px rgba(0, 0, 0, 0.14)",
        4: "0px 4px 5px -1px rgba(0, 0, 0, 0.14)",
        8: "0px 12px 17px rgba(0, 0, 0, 0.14)",
        12: "0px 12px 17px rgba(0, 0, 0, 0.14)",
        24: "0px 24px 38px rgba(0, 0, 0, 0.14)",
        key: "1px 1px rgba(0,0,0,1)",
        panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -8px rgba(0, 0, 0, 0.05), 
        0px 0px 16px -12px rgba(0, 0, 0, 0.12),
        0px 0px 2px 0px rgba(0, 0, 0, 0.08)`,
      },
      space: {
        0: "2px",
        1: "3px",
        2: "4px",
        3: "8px",
        4: "12px",
        5: "16px",
        6: "32px",
        7: "48px",
      },
      fontSizes: { 0: "10px", 1: "12px", 2: "13px", 3: "16px", 4: "18px" },
      fonts: {
        ui: '"Recursive", system-ui, sans-serif',
        body: '"Recursive", system-ui, sans-serif',
        mono: '"Recursive Mono", monospace',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: { 0: "$1" },
      borderStyles: {},
      radii: { 0: "2px", 1: "4px", 2: "8px", 3: "12px", 4: "16px" },
      zIndices: {},
      transitions: {},
    },
    media: {
      micro: "(max-width: 370px)",
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
    },
    utils: {
      zStrokeWidth: () => (r) =>
        Array.isArray(r)
          ? { strokeWidth: `calc(${r[0]}px / var(--camera-zoom))` }
          : { strokeWidth: `calc(${r}px / var(--camera-zoom))` },
    },
  }),
  ai = tu({
    colors: {
      bounds: "rgba(38, 150, 255, 1.000)",
      boundsBg: "rgba(38, 150, 255, 0.05)",
      hover: "#444A50",
      overlay: "rgba(0, 0, 0, 0.15)",
      overlayContrast: "rgba(255, 255, 255, 0.15)",
      panel: "#363D44",
      panelContrast: "#49555f",
      selected: "rgba(38, 150, 255, 1.000)",
      selectedContrast: "#fefefe",
      text: "#f8f9fa",
      tooltip: "#1d1d1d",
      tooltipContrast: "#ffffff",
      canvas: "#212529",
    },
    shadows: {
      2: "0px 1px 1px rgba(0, 0, 0, 0.24)",
      3: "0px 2px 3px rgba(0, 0, 0, 0.24)",
      4: "0px 4px 5px -1px rgba(0, 0, 0, 0.24)",
      8: "0px 12px 17px rgba(0, 0, 0, 0.24)",
      12: "0px 12px 17px rgba(0, 0, 0, 0.24)",
      24: "0px 24px 38px rgba(0, 0, 0, 0.24)",
      panel: `0px 0px 16px -1px rgba(0, 0, 0, 0.05), 
      0px 0px 16px -8px rgba(0, 0, 0, 0.09), 
      0px 0px 16px -12px rgba(0, 0, 0, 0.2)`,
    },
  });
var Be = H("hr", {
  height: 0,
  paddingTop: 1,
  width: "calc(100%+8px)",
  backgroundColor: "$hover",
  border: "none",
  margin: "$2 -4px",
});
var jt = H("div", {
  position: "relative",
  overflow: "hidden",
  userSelect: "none",
  WebkitUserSelect: "none",
  display: "flex",
  flexDirection: "column",
  zIndex: 99997,
  minWidth: 180,
  pointerEvents: "all",
  backgroundColor: "$panel",
  border: "1px solid $panelContrast",
  boxShadow: "$panel",
  padding: "$2 $2",
  borderRadius: "$3",
  font: "$ui",
  maxHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  "&::webkit-scrollbar": { display: "none" },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  variants: {
    size: { small: { minWidth: 72 } },
    overflow: { true: { maxHeight: "60vh" } },
  },
});
var Qa = require("@radix-ui/react-dropdown-menu"),
  es = require("@radix-ui/react-icons"),
  en = V(require("react"));
var Ja = require("@tldraw/core"),
  li = V(require("react"));
var nu = () => (Ja.Utils.isDarwin() ? "\u2318" : "Ctrl");
function Bo({ variant: r, children: e }) {
  return li.createElement(
    ou,
    { variant: r },
    e
      .split("")
      .map((t, n) => li.createElement("span", { key: n }, t.replace("#", nu())))
  );
}
var ou = H("kbd", {
  marginLeft: "$3",
  textShadow: "$2",
  textAlign: "center",
  fontSize: "$0",
  fontFamily: "$ui",
  color: "$text",
  background: "none",
  fontWeight: 400,
  gap: "$1",
  display: "flex",
  alignItems: "center",
  "& > span": {
    padding: "$0",
    borderRadius: "$0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    variant: {
      tooltip: {
        "& > span": {
          color: "$tooltipContrast",
          background: "$overlayContrast",
          boxShadow: "$key",
          width: "20px",
          height: "20px",
        },
      },
      menu: {},
    },
  },
});
var bt = H("div", {
  height: "100%",
  borderRadius: "4px",
  marginRight: "1px",
  width: "fit-content",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  color: "currentColor",
  "& svg": { height: 16, width: 16, strokeWidth: 1 },
  "& > *": { gridRow: 1, gridColumn: 1 },
});
var rt = {
  "@initial": "mobile",
  "@micro": "micro",
  "@sm": "small",
  "@md": "medium",
  "@lg": "large",
};
var $e = en.forwardRef((p, u) => {
    var m = p,
      {
        onClick: r,
        isActive: e = !1,
        isWarning: t = !1,
        hasIndicator: n = !1,
        hasArrow: o = !1,
        disabled: s = !1,
        variant: a,
        kbd: d,
        children: i,
      } = m,
      c = ot(m, [
        "onClick",
        "isActive",
        "isWarning",
        "hasIndicator",
        "hasArrow",
        "disabled",
        "variant",
        "kbd",
        "children",
      ]);
    return en.createElement(
      ru,
      S(
        {
          ref: u,
          bp: rt,
          isWarning: t,
          isActive: e,
          disabled: s,
          onClick: r,
          variant: a,
        },
        c
      ),
      en.createElement(
        el,
        null,
        i,
        d ? en.createElement(Bo, { variant: "menu" }, d) : void 0,
        n &&
          en.createElement(
            Qa.ItemIndicator,
            { dir: "ltr" },
            en.createElement(bt, null, en.createElement(es.CheckIcon, null))
          ),
        o &&
          en.createElement(
            bt,
            null,
            en.createElement(es.ChevronRightIcon, null)
          )
      )
    );
  }),
  el = H("div", {
    height: "100%",
    width: "100%",
    backgroundColor: "$panel",
    borderRadius: "$2",
    display: "flex",
    gap: "$1",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 $3",
    justifyContent: "space-between",
    border: "1px solid transparent",
    "& svg": {
      position: "relative",
      stroke: "$overlay",
      strokeWidth: 1,
      zIndex: 1,
    },
    [`& > ${bt}`]: { paddingLeft: "$3" },
  }),
  ru = H("button", {
    position: "relative",
    width: "100%",
    background: "none",
    border: "none",
    cursor: "pointer",
    height: 32,
    minHeight: 32,
    outline: "none",
    color: "$text",
    fontFamily: "$ui",
    fontWeight: 400,
    fontSize: "$1",
    borderRadius: 4,
    userSelect: "none",
    WebkitUserSelect: "none",
    margin: 0,
    padding: "0 0",
    "&[data-disabled]": { opacity: 0.3 },
    "&:disabled": { opacity: 0.3 },
    [`&:focus:not(:disabled) ${el}`]: { backgroundColor: "$hover" },
    "& a": { textDecoration: "none", color: "$text" },
    variants: {
      bp: { mobile: {}, small: {} },
      variant: {
        styleMenu: { margin: "$1 0 $1 0" },
        wide: { gridColumn: "1 / span 4" },
      },
      size: { icon: { padding: "4px ", width: "auto" } },
      isWarning: { true: { color: "$warn" } },
      isActive: { true: { backgroundColor: "$hover" }, false: {} },
    },
  });
var nn = V(require("react"));
var fn = V(require("@radix-ui/react-tooltip")),
  On = V(require("react"));
function ze({ children: r, label: e, kbd: t, id: n, side: o = "top" }) {
  return On.createElement(
    "span",
    { id: n },
    On.createElement(
      fn.Provider,
      null,
      On.createElement(
        fn.Root,
        null,
        On.createElement(
          fn.Trigger,
          { dir: "ltr", asChild: !0 },
          On.createElement("span", null, r)
        ),
        On.createElement(
          su,
          { dir: "ltr", side: o, sideOffset: 8 },
          e,
          t ? On.createElement(Bo, { variant: "tooltip" }, t) : null,
          On.createElement(iu, null)
        )
      )
    )
  );
}
var su = H(fn.Content, {
    borderRadius: 3,
    padding: "$3 $3 $3 $3",
    fontSize: "$1",
    backgroundColor: "$tooltip",
    color: "$tooltipContrast",
    boxShadow: "$3",
    display: "flex",
    alignItems: "center",
    fontFamily: "$ui",
    userSelect: "none",
    WebkitUserSelect: "none",
  }),
  iu = H(fn.Arrow, { fill: "$tooltip", margin: "0 8px" });
var Eo = V(require("react"));
function tl() {
  let r = Eo.useCallback(
      (s, a) =>
        ue(this, null, function* () {
          a(
            s.fileSystemHandle ? "saveFirstTime" : "saveAgain",
            () =>
              ue(this, null, function* () {
                try {
                  yield s.saveProject(), s.newProject();
                } catch (d) {}
              }),
            () =>
              ue(this, null, function* () {
                s.newProject();
              }),
            () => ue(this, null, function* () {})
          );
        }),
      []
    ),
    e = Eo.useCallback(
      (s, a) =>
        ue(this, null, function* () {
          a(
            s.fileSystemHandle ? "saveFirstTime" : "saveAgain",
            () =>
              ue(this, null, function* () {
                try {
                  yield s.saveProject(), yield s.openProject();
                } catch (d) {}
              }),
            () =>
              ue(this, null, function* () {
                s.openProject();
              }),
            () => ue(this, null, function* () {})
          );
        }),
      []
    ),
    t = Eo.useCallback((s) => {
      s.saveProject();
    }, []),
    n = Eo.useCallback((s) => {
      s.saveProjectAs();
    }, []),
    o = Eo.useCallback(
      (s) =>
        ue(this, null, function* () {
          var a;
          (a = s.openAsset) == null || a.call(s);
        }),
      []
    );
  return {
    onNewProject: r,
    onSaveProject: t,
    onSaveProjectAs: n,
    onOpenProject: e,
    onOpenMedia: o,
  };
}
var Ro = V(require("react"));
function ts() {
  let r = ge(),
    { openDialog: e } = ns(),
    t = Ro.useCallback(
      (d) =>
        ue(this, null, function* () {
          var i, c;
          d && r.callbacks.onOpenProject && d.preventDefault(),
            (c = (i = r.callbacks).onNewProject) == null || c.call(i, r, e);
        }),
      [r, e]
    ),
    n = Ro.useCallback(
      (d) => {
        var i, c;
        d && r.callbacks.onOpenProject && d.preventDefault(),
          (c = (i = r.callbacks).onSaveProject) == null || c.call(i, r);
      },
      [r]
    ),
    o = Ro.useCallback(
      (d) => {
        var i, c;
        d && r.callbacks.onOpenProject && d.preventDefault(),
          (c = (i = r.callbacks).onSaveProjectAs) == null || c.call(i, r);
      },
      [r]
    ),
    s = Ro.useCallback(
      (d) =>
        ue(this, null, function* () {
          var i, c;
          d && r.callbacks.onOpenProject && d.preventDefault(),
            (c = (i = r.callbacks).onOpenProject) == null || c.call(i, r, e);
        }),
      [r, e]
    ),
    a = Ro.useCallback(
      (d) =>
        ue(this, null, function* () {
          var i, c;
          d && r.callbacks.onOpenMedia && d.preventDefault(),
            (c = (i = r.callbacks).onOpenMedia) == null || c.call(i, r);
        }),
      [r]
    );
  return {
    onNewProject: t,
    onSaveProject: n,
    onSaveProjectAs: o,
    onOpenProject: s,
    onOpenMedia: a,
  };
}
var rl = V(require("react")),
  he = require("react-hotkeys-hook");
var os = class {
    constructor() {
      l(this, "onPinchStart");
      l(this, "onPinchEnd");
      l(this, "onPinch");
      l(this, "onKeyDown");
      l(this, "onKeyUp");
      l(this, "onPointerMove");
      l(this, "onPointerUp");
      l(this, "onPan");
      l(this, "onZoom");
      l(this, "onPointerDown");
      l(this, "onPointCanvas");
      l(this, "onDoubleClickCanvas");
      l(this, "onRightPointCanvas");
      l(this, "onDragCanvas");
      l(this, "onReleaseCanvas");
      l(this, "onPointShape");
      l(this, "onDoubleClickShape");
      l(this, "onRightPointShape");
      l(this, "onDragShape");
      l(this, "onHoverShape");
      l(this, "onUnhoverShape");
      l(this, "onReleaseShape");
      l(this, "onPointBounds");
      l(this, "onDoubleClickBounds");
      l(this, "onRightPointBounds");
      l(this, "onDragBounds");
      l(this, "onHoverBounds");
      l(this, "onUnhoverBounds");
      l(this, "onReleaseBounds");
      l(this, "onPointBoundsHandle");
      l(this, "onDoubleClickBoundsHandle");
      l(this, "onRightPointBoundsHandle");
      l(this, "onDragBoundsHandle");
      l(this, "onHoverBoundsHandle");
      l(this, "onUnhoverBoundsHandle");
      l(this, "onReleaseBoundsHandle");
      l(this, "onPointHandle");
      l(this, "onDoubleClickHandle");
      l(this, "onRightPointHandle");
      l(this, "onDragHandle");
      l(this, "onHoverHandle");
      l(this, "onUnhoverHandle");
      l(this, "onReleaseHandle");
      l(this, "onShapeBlur");
      l(this, "onShapeClone");
    }
  },
  nl = ((o) => (
    (o.Idle = "idle"),
    (o.Connecting = "connecting"),
    (o.Connected = "connected"),
    (o.Disconnected = "disconnected"),
    o
  ))(nl || {}),
  Ne = ((p) => (
    (p.Transform = "transform"),
    (p.Translate = "translate"),
    (p.TransformSingle = "transformSingle"),
    (p.Brush = "brush"),
    (p.Arrow = "arrow"),
    (p.Draw = "draw"),
    (p.Erase = "erase"),
    (p.Rotate = "rotate"),
    (p.Handle = "handle"),
    (p.Grid = "grid"),
    (p.Edit = "edit"),
    p
  ))(Ne || {}),
  Et = ((h) => (
    (h.Idle = "idle"),
    (h.PointingHandle = "pointingHandle"),
    (h.PointingBounds = "pointingBounds"),
    (h.PointingBoundsHandle = "pointingBoundsHandle"),
    (h.TranslatingLabel = "translatingLabel"),
    (h.TranslatingHandle = "translatingHandle"),
    (h.Translating = "translating"),
    (h.Transforming = "transforming"),
    (h.Rotating = "rotating"),
    (h.Pinching = "pinching"),
    (h.Brushing = "brushing"),
    (h.Creating = "creating"),
    (h.EditingText = "editing-text"),
    h
  ))(Et || {}),
  rs = ((o) => (
    (o.Backward = "backward"),
    (o.Forward = "forward"),
    (o.ToFront = "toFront"),
    (o.ToBack = "toBack"),
    o
  ))(rs || {}),
  hr = ((a) => (
    (a.Top = "top"),
    (a.CenterVertical = "centerVertical"),
    (a.Bottom = "bottom"),
    (a.Left = "left"),
    (a.CenterHorizontal = "centerHorizontal"),
    (a.Right = "right"),
    a
  ))(hr || {}),
  mr = ((t) => ((t.Horizontal = "horizontal"), (t.Vertical = "vertical"), t))(
    mr || {}
  ),
  gr = ((t) => ((t.Horizontal = "horizontal"), (t.Vertical = "vertical"), t))(
    gr || {}
  ),
  ss = ((t) => ((t.Horizontal = "horizontal"), (t.Vertical = "vertical"), t))(
    ss || {}
  ),
  De = ((p) => (
    (p.Sticky = "sticky"),
    (p.Ellipse = "ellipse"),
    (p.Rectangle = "rectangle"),
    (p.Triangle = "triangle"),
    (p.Draw = "draw"),
    (p.Arrow = "arrow"),
    (p.Line = "line"),
    (p.Text = "text"),
    (p.Group = "group"),
    (p.Image = "image"),
    (p.Video = "video"),
    p
  ))(De || {}),
  fr = ((e) => ((e.Arrow = "arrow"), e))(fr || {}),
  is = ((m) => (
    (m.White = "white"),
    (m.LightGray = "lightGray"),
    (m.Gray = "gray"),
    (m.Black = "black"),
    (m.Green = "green"),
    (m.Cyan = "cyan"),
    (m.Blue = "blue"),
    (m.Indigo = "indigo"),
    (m.Violet = "violet"),
    (m.Red = "red"),
    (m.Orange = "orange"),
    (m.Yellow = "yellow"),
    m
  ))(is || {}),
  Sr = ((n) => (
    (n.Small = "small"), (n.Medium = "medium"), (n.Large = "large"), n
  ))(Sr || {}),
  Sn = ((o) => (
    (o.Draw = "draw"),
    (o.Solid = "solid"),
    (o.Dashed = "dashed"),
    (o.Dotted = "dotted"),
    o
  ))(Sn || {}),
  ol = ((o) => (
    (o.Small = "small"),
    (o.Medium = "medium"),
    (o.Large = "large"),
    (o.ExtraLarge = "extraLarge"),
    o
  ))(ol || {}),
  Gt = ((o) => (
    (o.Start = "start"),
    (o.Middle = "middle"),
    (o.End = "end"),
    (o.Justify = "justify"),
    o
  ))(Gt || {}),
  Ao = ((o) => (
    (o.Script = "script"),
    (o.Sans = "sans"),
    (o.Serif = "serif"),
    (o.Mono = "mono"),
    o
  ))(Ao || {}),
  as = ((t) => ((t.Image = "image"), (t.Video = "video"), t))(as || {}),
  go = ((s) => (
    (s.PNG = "png"),
    (s.JPG = "jpeg"),
    (s.WEBP = "webp"),
    (s.SVG = "svg"),
    (s.JSON = "json"),
    s
  ))(go || {}),
  Lo = ((o) => (
    (o.Transparent = "transparent"),
    (o.Auto = "auto"),
    (o.Light = "light"),
    (o.Dark = "dark"),
    o
  ))(Lo || {});
function sl(r) {
  let e = ge(),
    t = rl.useCallback(
      (i = !1) => {
        let c = r.current;
        return i && (e.isMenuOpen || e.settings.keepStyleMenuOpen)
          ? !0
          : (c == null || c.focus(),
            c &&
              (document.activeElement === c ||
                c.contains(document.activeElement)));
      },
      [r]
    );
  (0, he.useHotkeys)(
    "v,1",
    () => {
      !t(!0) || e.selectTool("select");
    },
    [e, r.current]
  ),
    (0, he.useHotkeys)(
      "d,p,2",
      () => {
        !t(!0) || e.selectTool("draw");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "e,3",
      () => {
        !t(!0) || e.selectTool("erase");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "r,4",
      () => {
        !t(!0) || e.selectTool("rectangle");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "o,5",
      () => {
        !t(!0) || e.selectTool("ellipse");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "g,6",
      () => {
        !t() || e.selectTool("triangle");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "l,7",
      () => {
        !t(!0) || e.selectTool("line");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "a,8",
      () => {
        !t(!0) || e.selectTool("arrow");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "t,9",
      () => {
        !t(!0) || e.selectTool("text");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "s,0",
      () => {
        !t(!0) || e.selectTool("sticky");
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+shift+d,\u2318+shift+d",
      (i) => {
        !t(!0) || (e.toggleDarkMode(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+.,\u2318+.",
      () => {
        !t(!0) || e.toggleFocusMode();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+shift+g,\u2318+shift+g",
      () => {
        !t(!0) || e.toggleGrid();
      },
      void 0,
      [e]
    );
  let {
    onNewProject: n,
    onOpenProject: o,
    onSaveProject: s,
    onSaveProjectAs: a,
    onOpenMedia: d,
  } = ts();
  (0, he.useHotkeys)(
    "ctrl+n,\u2318+n",
    (i) => {
      i.preventDefault(), !!t() && n(i);
    },
    void 0,
    [e]
  ),
    (0, he.useHotkeys)(
      "ctrl+s,\u2318+s",
      (i) => {
        !t() || s(i);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+shift+s,\u2318+shift+s",
      (i) => {
        !t() || a(i);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+alt+1,\u2318+alt+1",
      (i) => {
        !t() || e.exportImage("svg", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+alt+2,\u2318+alt+2",
      (i) => {
        !t() || e.exportImage("png", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+alt+3,\u2318+alt+3",
      (i) => {
        !t() || e.exportImage("jpeg", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+alt+4,\u2318+alt+4",
      (i) => {
        !t() || e.exportImage("webp", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+alt+5,\u2318+alt+5",
      (i) => {
        !t() || e.exportJson();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+o,\u2318+o",
      (i) => {
        !t() || o(i);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+u,\u2318+u",
      (i) => {
        !t() || d(i);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+z,ctrl+z",
      (i) => {
        i.preventDefault(),
          !!t(!0) && (e.session ? e.cancelSession() : e.undo());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+shift+z,\u2318+shift+z",
      () => {
        !t(!0) || (e.session ? e.cancelSession() : e.redo());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+u,ctrl+u",
      () => {
        !t() || e.undoSelect();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+shift-u,\u2318+shift+u",
      () => {
        !t() || e.redoSelect();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+=,\u2318+=,ctrl+num_add,\u2318+num_add",
      (i) => {
        !t(!0) || (e.zoomIn(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+-,\u2318+-,ctrl+num_subtract,\u2318+num_subtract",
      (i) => {
        !t(!0) || (e.zoomOut(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+0,ctrl+numpad_0,\u2318+numpad_0",
      () => {
        !t(!0) || e.resetZoom();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+1",
      () => {
        !t(!0) || e.zoomToFit();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+2",
      () => {
        !t(!0) || e.zoomToSelection();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+d,\u2318+d",
      (i) => {
        !t() || (e.duplicate(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+h",
      () => {
        !t(!0) || e.flipHorizontal();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+v",
      () => {
        !t(!0) || e.flipVertical();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "escape",
      () => {
        !t(!0) || e.cancel();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "backspace,del",
      () => {
        !t() || e.delete();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+a,ctrl+a",
      () => {
        !t(!0) || e.selectAll();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "up",
      () => {
        !t() || e.nudge([0, -1], !1);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "right",
      () => {
        !t() || e.nudge([1, 0], !1);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "down",
      () => {
        !t() || e.nudge([0, 1], !1);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "left",
      () => {
        !t() || e.nudge([-1, 0], !1);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+up",
      () => {
        !t() || e.nudge([0, -1], !0);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+right",
      () => {
        !t() || e.nudge([1, 0], !0);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+down",
      () => {
        !t() || e.nudge([0, 1], !0);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+left",
      () => {
        !t() || e.nudge([-1, 0], !0);
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+shift+l,ctrl+shift+l",
      () => {
        !t() || e.toggleLocked();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+shift+c,ctrl+shift+c",
      (i) => {
        !t() || (e.copySvg(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+g,ctrl+g",
      (i) => {
        !t() || (e.group(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "\u2318+shift+g,ctrl+shift+g",
      (i) => {
        !t() || (e.ungroup(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "[",
      () => {
        !t(!0) || e.moveBackward();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "]",
      () => {
        !t(!0) || e.moveForward();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+[",
      () => {
        !t(!0) || e.moveToBack();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "shift+]",
      () => {
        !t(!0) || e.moveToFront();
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "ctrl+shift+backspace,\u2318+shift+backspace",
      (i) => {
        !t() ||
          (e.settings.isDebugMode && e.resetDocument(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "alt+command+l,alt+ctrl+l",
      (i) => {
        !t(!0) || (e.style({ textAlign: "start" }), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "alt+command+t,alt+ctrl+t",
      (i) => {
        !t(!0) || (e.style({ textAlign: "middle" }), i.preventDefault());
      },
      void 0,
      [e]
    ),
    (0, he.useHotkeys)(
      "alt+command+r,alt+ctrl+r",
      (i) => {
        !t(!0) || (e.style({ textAlign: "end" }), i.preventDefault());
      },
      void 0,
      [e]
    );
}
var bn = V(require("react")),
  di = bn.createContext({}),
  au = () => {
    let [r, e] = bn.useState(0);
    bn.useEffect(() => e(1));
  };
function ge() {
  return bn.useContext(di);
}
var ci = bn.createContext({});
function Vt() {
  let r = bn.useContext(ci);
  return au(), r;
}
var zl = V(require("react"));
var lu = "\u0627\u0644\u0644\u0648\u0646",
  du = "\u064A\u0645\u0644\u0623",
  cu = "\u0645\u062A\u0642\u0637\u0639",
  pu = "\u062D\u062C\u0645",
  uu = "\u062A\u0628\u0642\u0649 \u0645\u0641\u062A\u0648\u062D\u0629",
  hu = "\u0627\u0644\u062E\u0637",
  mu = "\u0645\u062D\u0627\u0630\u0627\u0629",
  gu = "\u0627\u0644\u0623\u0646\u0645\u0627\u0637",
  fu = "\u062A\u0643\u0628\u064A\u0631",
  Su = "\u062A\u0635\u063A\u064A\u0631",
  bu = "\u0625\u0644\u0649",
  Tu = "\u0623\u062F\u0648\u0627\u062A",
  yu = "\u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A",
  xu = "\u0645\u0644\u0641",
  wu = "\u062A\u062D\u0631\u064A\u0631",
  ku = "\u0645\u0639\u0627\u064A\u0646\u0629",
  vu = "\u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A",
  Iu = "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
  Cu = "\u062E\u0631\u0648\u062C",
  Du = "\u0643\u0646 \u0631\u0627\u0639\u064A\u0627\u064B",
  Pu =
    "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
  Mu =
    "\u062A\u0643\u0628\u064A\u0631 \u0644\u0644\u062A\u062D\u062F\u064A\u062F",
  Bu = "\u062A\u0643\u0628\u064A\u0631 \u0644\u062A\u0646\u0627\u0633\u0628",
  Eu = "\u062A\u0643\u0628\u064A\u0631 \u0625\u0644\u0649",
  Ru = "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0643\u0646",
  Au = "\u0648\u0636\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632",
  Lu = "\u0648\u0636\u0639 \u0627\u0644\u062A\u0635\u062D\u064A\u062D",
  Hu = "\u0627\u0638\u0647\u0631 \u0627\u0644\u0634\u0628\u0643\u0629",
  zu =
    "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062F CAD",
  Ou =
    "\u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0645\u0637 \u0645\u0641\u062A\u0648\u062D\u0629",
  Fu =
    "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0642\u0637\u0627\u062A \u062F\u0627\u0626\u0645\u064B\u0627",
  ju =
    "\u062A\u062F\u0648\u064A\u0631 \u0627\u0644\u0645\u0642\u0627\u0628\u0636",
  Gu = "\u0645\u0642\u0627\u0628\u0636 \u0645\u0644\u0632\u0645\u0629",
  Vu =
    "\u0645\u0642\u0627\u0628\u0636 \u0627\u0633\u062A\u0646\u0633\u0627\u062E",
  $u = "\u0627\u0644\u063A\u0627\u0621",
  Nu = "\u0625\u0639\u0627\u062F\u0629",
  Wu = "\u0642\u0637\u0639",
  Uu = "\u0646\u0633\u062D",
  Ku = "\u0644\u0635\u0642",
  _u = "\u0646\u0633\u062E \u0627\u0644\u0649",
  Yu = "\u0635\u062F\u0631 \u0627\u0644\u0649",
  Zu = "\u0627\u062E\u062A\u0631 \u0627\u0644\u0643\u0644",
  Xu = "\u0644\u0627 \u062A\u062E\u062A\u0631 \u0634\u064A\u0621",
  qu = "\u062D\u0630\u0641",
  Ju = "\u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F",
  Qu = "\u0641\u062A\u062D",
  eh = "\u062D\u0641\u0638",
  th = "\u062D\u0641\u0638 \u0628\u0627\u0633\u0645",
  nh =
    "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0648\u0633\u0627\u0626\u0637",
  oh = "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u062D\u0629",
  rh = "\u0635\u0641\u062D\u0629 \u062C\u062F\u064A\u062F\u0629",
  sh = "\u0627\u0633\u0645 \u0627\u0644\u0635\u0641\u062D\u0629",
  ih = "\u0646\u0633\u062E",
  ah = "\u0627\u0644\u063A\u0627\u0621",
  lh =
    "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629",
  dh =
    "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u062F\u0639\u0648\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637",
  ch =
    "\u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646",
  ph =
    "\u0646\u0633\u062E \u0625\u0644\u0649 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646",
  uh = "\u0627\u062E\u062A\u0631",
  hh = "\u0645\u0645\u062D\u0627\u0629",
  mh = "\u0631\u0633\u0645",
  gh = "\u0633\u0647\u0645",
  fh = "\u0646\u0635",
  Sh = "\u0644\u0627\u0635\u0642",
  bh = "\u0645\u0631\u0628\u0639",
  Th = "\u0628\u064A\u0636\u0627\u0648\u064A",
  yh = "\u0645\u062B\u0644\u062B",
  xh = "\u062E\u0637",
  wh = "\u062F\u0648\u0651\u0631",
  kh =
    "\u0642\u0641\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0628\u0639\u0627\u062F",
  vh =
    "\u0641\u062A\u062D \u0642\u0641\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0628\u0639\u0627\u062F",
  Ih = "\u062C\u0645\u0651\u0639",
  Ch = "\u0641\u0643 \u0627\u0644\u062A\u062C\u0645\u0639",
  Dh =
    "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641",
  Ph = "\u062A\u062D\u0631\u064A\u0643 \u0644\u0644\u062E\u0644\u0641",
  Mh = "\u062A\u062D\u0631\u064A\u0643 \u0644\u0644\u0623\u0645\u0627\u0645",
  Bh = "\u062A\u062D\u0631\u0643 \u0644\u0644\u0623\u0645\u0627\u0645",
  Eh =
    "\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0632\u0627\u0648\u064A\u0629",
  Rh = "\u0642\u0641\u0644",
  Ah = "\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u0642\u0641\u0644",
  Lh =
    "\u0627\u0646\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629",
  Hh = "\u0627\u0646\u0639\u0643\u0627\u0633 \u0623\u0641\u0642\u064A",
  zh = "\u0627\u0646\u0639\u0643\u0627\u0633 \u0639\u0645\u0648\u062F\u064A",
  Oh = "\u062D\u0631\u0651\u0643",
  Fh = "\u0644\u0644\u0627\u0645\u0627\u0645",
  jh = "\u0644\u0644\u062E\u0644\u0641",
  Gh = "\u0644\u0644\u0648\u0631\u0627\u0621",
  Vh = "\u062E\u0644\u0641",
  $h = "\u0644\u063A\u0629",
  Nh = "\u0644\u0644\u0645\u0632\u064A\u062F",
  Wh = "\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u062F\u0648\u0627\u062A",
  Uh = "\u0627\u0633\u0641\u0644",
  Kh = "\u064A\u0633\u0627\u0631",
  _h = "\u064A\u0645\u064A\u0646",
  Yh = "\u0623\u0639\u0644\u0649",
  Zh = "\u0635\u0641\u062D\u0629",
  Xh =
    "\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D",
  qh = "\u0628\u062D\u062B",
  Jh = "{dots}\u062A\u062D\u0645\u064A\u0644 ",
  Qh =
    "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062E\u0644\u0641\u064A\u0629",
  em = "\u0634\u0640\u0641\u0627\u0641",
  tm = "\u0630\u0627\u062A\u064A",
  nm = "\u062E\u0641\u064A\u0641",
  om = "\u063A\u0627\u0645\u0642",
  rm =
    "\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
  sm =
    "\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
  im = "\u0625\u0644\u063A\u0627\u0621",
  am = "\u0644\u0627",
  lm = "\u0646\u0639\u0645",
  dm =
    "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641",
  cm = "\u0635\u0648\u0631\u0629",
  pm = "\u0635\u0641\u0651 \u0644\u0644\u064A\u0633\u0627\u0631",
  um =
    "\u0635\u0641\u0651 \u0627\u0644\u0645\u062D\u0648\u0631 \u0627\u0644\u0623\u0641\u0642\u064A \u0644\u0644\u0648\u0633\u0637",
  hm = "\u0635\u0641\u0651 \u0644\u0644\u064A\u0645\u064A\u0646",
  mm = "\u0635\u0641\u0651 \u0644\u0644\u0623\u0639\u0644\u0649",
  gm =
    "\u0635\u0641\u0651 \u0627\u0644\u0645\u062D\u0648\u0631 \u0627\u0644\u0639\u0645\u0648\u062F\u064A \u0644\u0644\u0648\u0633\u0637",
  fm = "\u0635\u0641\u0651 \u0644\u0644\u0623\u0633\u0641\u0644",
  Sm = "\u062A\u0648\u0632\u064A\u0639 \u0623\u0641\u0642\u064A",
  bm = "\u062A\u0648\u0632\u064A\u0639 \u0639\u0645\u0648\u062F\u064A",
  Tm = "\u062A\u0645\u062F\u064A\u062F \u0623\u0641\u0642\u064A",
  ym = "\u062A\u0645\u062F\u064A\u062F \u0639\u0645\u0648\u062F\u064A",
  il = {
    "style.menu.color": lu,
    "style.menu.fill": du,
    "style.menu.dash": cu,
    "style.menu.size": pu,
    "style.menu.keep.open": uu,
    "style.menu.font": hu,
    "style.menu.align": mu,
    styles: gu,
    "zoom.in": fu,
    "zoom.out": Su,
    to: bu,
    "menu.tools": Tu,
    "menu.transform": yu,
    "menu.file": xu,
    "menu.edit": wu,
    "menu.view": ku,
    "menu.preferences": vu,
    "menu.sign.in": Iu,
    "menu.sign.out": Cu,
    "become.a.sponsor": Du,
    "zoom.to.content": Pu,
    "zoom.to.selection": Mu,
    "zoom.to.fit": Bu,
    "zoom.to": Eu,
    "preferences.dark.mode": Ru,
    "preferences.focus.mode": Au,
    "preferences.debug.mode": Lu,
    "preferences.show.grid": Hu,
    "preferences.use.cad.selection": zu,
    "preferences.keep.stylemenu.open": Ou,
    "preferences.always.show.snaps": Fu,
    "preferences.rotate.handles": ju,
    "preferences.binding.handles": Gu,
    "preferences.clone.handles": Vu,
    undo: $u,
    redo: Nu,
    cut: Wu,
    copy: Uu,
    paste: Ku,
    "copy.as": _u,
    "export.as": Yu,
    "select.all": Zu,
    "select.none": Xu,
    delete: qu,
    "new.project": Ju,
    open: Qu,
    save: eh,
    "save.as": th,
    "upload.media": nh,
    "create.page": oh,
    "new.page": rh,
    "page.name": sh,
    duplicate: ih,
    cancel: ah,
    "copy.invite.link": lh,
    "copy.readonly.link": dh,
    "create.multiplayer.project": ch,
    "copy.multiplayer.project": ph,
    select: uh,
    eraser: hh,
    draw: mh,
    arrow: gh,
    text: fh,
    sticky: Sh,
    rectangle: bh,
    ellipse: Th,
    triangle: yh,
    line: xh,
    rotate: wh,
    "lock.aspect.ratio": kh,
    "unlock.aspect.ratio": vh,
    group: Ih,
    ungroup: Ch,
    "move.to.back": Dh,
    "move.backward": Ph,
    "move.forward": Mh,
    "move.to.front": Bh,
    "reset.angle": Eh,
    lock: Rh,
    unlock: Ah,
    "move.to.page": Lh,
    "flip.horizontal": Hh,
    "flip.vertical": zh,
    move: Oh,
    "to.front": Fh,
    forward: jh,
    backward: Gh,
    back: Vh,
    language: $h,
    "translation.link": Nh,
    "dock.position": Wh,
    bottom: Uh,
    left: Kh,
    right: _h,
    top: Yh,
    page: Zh,
    "keyboard.shortcuts": Xh,
    search: qh,
    loading: Jh,
    "export.background": Qh,
    transparent: em,
    auto: tm,
    light: nm,
    dark: om,
    "dialog.save.firsttime": rm,
    "dialog.save.again": sm,
    "dialog.cancel": im,
    "dialog.no": am,
    "dialog.yes": lm,
    "enter.file.name": dm,
    image: cm,
    "align.left": pm,
    "align.center.x": um,
    "align.right": hm,
    "align.top": mm,
    "align.center.y": gm,
    "align.bottom": fm,
    "distribute.x": Sm,
    "distribute.y": bm,
    "stretch.x": Tm,
    "stretch.y": ym,
  };
var xm = "Farve",
  wm = "Fyld",
  km = "Streg",
  vm = "St\xF8rrelse",
  Im = "Hold \xE5ben",
  Cm = "Skrifttype",
  Dm = "Juster",
  Pm = "Format",
  Mm = "Zoom ind",
  Bm = "Zoom ud",
  Em = "til",
  Rm = "V\xE6rkt\xF8jer",
  Am = "Transformer",
  Lm = "Fil",
  Hm = "Rediger",
  zm = "Vis",
  Om = "Indstillinger",
  Fm = "Log ind",
  jm = "Log ud",
  Gm = "Bliv sponsor",
  Vm = "Zoom til valgte",
  $m = "Zoom til l\xE6rred",
  Nm = "Zoom til",
  Wm = "Zoom til indhold",
  Um = "M\xF8rkt udseende",
  Km = "Fokus tilstand",
  _m = "Debug tilstand",
  Ym = "Vis net",
  Zm = "Brug CAD udv\xE6lgelse",
  Xm = "Hold formatmenuen \xE5ben",
  qm = "Vis altid snaps",
  Jm = "Roteringsh\xE5ndtag",
  Qm = "Bindingsh\xE5ndtag",
  eg = "Kloningsh\xE5ndtag",
  tg = "Fortryd",
  ng = "Gentag",
  og = "Klip",
  rg = "Kopier",
  sg = "Inds\xE6t",
  ig = "Kopier som",
  ag = "Eksporter som",
  lg = "V\xE6lg alt",
  dg = "Frav\xE6lg alt",
  cg = "Slet",
  pg = "Nyt projekt",
  ug = "\xC5ben",
  hg = "Gem",
  mg = "Gem som",
  gg = "Upload medie",
  fg = "Opret side",
  Sg = "Ny side",
  bg = "Sidenavn",
  Tg = "Dupliker",
  yg = "Fortryd",
  xg = "Kopier invitationslink",
  wg = "Opret multiplayer projekt",
  kg = "Kopier til multiplayer projekt",
  vg = "V\xE6lg",
  Ig = "Viskel\xE6der",
  Cg = "Tegn",
  Dg = "Pil",
  Pg = "Tekst",
  Mg = "Note",
  Bg = "Rektangel",
  Eg = "Ellipse",
  Rg = "Trekant",
  Ag = "Linje",
  Lg = "Roter",
  Hg = "L\xE5s billedformat",
  zg = "Frig\xF8r billedformat",
  Og = "Grupper",
  Fg = "Opdel gruppe",
  jg = "Placer bagerst",
  Gg = "Flyt tilbage",
  Vg = "Flyt frem",
  $g = "L\xE6g forrest",
  Ng = "Nulstil vinkel",
  Wg = "L\xE5s",
  Ug = "L\xE5s op",
  Kg = "Flyt til side",
  _g = "Vend vandret",
  Yg = "Vend lodret",
  Zg = "Flyt",
  Xg = "Forrest",
  qg = "Frem",
  Jg = "Tilbage",
  Qg = "Bagerst",
  ef = "Sprog",
  tf = "Justering nederst",
  nf = "Vandret justering centreret",
  of = "Lodret justering centreret",
  rf = "Juster / distribuer",
  sf = "Justering til venstre",
  af = "Justering til h\xF8jre",
  lf = "Justering \xF8verst",
  df = "Kopier skrivebeskyttet link",
  cf = "Vil du gemme \xE6ndringerne til dit projekt?",
  pf = "Vil du gemme dit projekt?",
  uf = "Ja",
  hf = "Nej",
  mf = "Fortryd",
  gf = "Skriv filnavn",
  ff = "Vandret distribuering",
  Sf = "Lodret distribuering",
  bf = "Placering af v\xE6rkt\xF8jslinje",
  Tf = "Nederst",
  yf = "Venstre",
  xf = "H\xF8jre",
  wf = "\xD8verst",
  kf = "Baggrund ved eksport",
  vf = "Automatisk",
  If = "Lys",
  Cf = "M\xF8rk",
  Df = "Billede",
  Pf = "Tastaturgenveje",
  Mf = "Indl\xE6ser",
  Bf = "Side",
  Ef = "S\xF8g",
  Rf = "Str\xE6k vandret",
  Af = "Str\xE6k lodret",
  Lf = "L\xE6r mere",
  Hf = "Gennemsigtig",
  al = {
    "style.menu.color": xm,
    "style.menu.fill": wm,
    "style.menu.dash": km,
    "style.menu.size": vm,
    "style.menu.keep.open": Im,
    "style.menu.font": Cm,
    "style.menu.align": Dm,
    styles: Pm,
    "zoom.in": Mm,
    "zoom.out": Bm,
    to: Em,
    "menu.tools": Rm,
    "menu.transform": Am,
    "menu.file": Lm,
    "menu.edit": Hm,
    "menu.view": zm,
    "menu.preferences": Om,
    "menu.sign.in": Fm,
    "menu.sign.out": jm,
    "become.a.sponsor": Gm,
    "zoom.to.selection": Vm,
    "zoom.to.fit": $m,
    "zoom.to": Nm,
    "zoom.to.content": Wm,
    "preferences.dark.mode": Um,
    "preferences.focus.mode": Km,
    "preferences.debug.mode": _m,
    "preferences.show.grid": Ym,
    "preferences.use.cad.selection": Zm,
    "preferences.keep.stylemenu.open": Xm,
    "preferences.always.show.snaps": qm,
    "preferences.rotate.handles": Jm,
    "preferences.binding.handles": Qm,
    "preferences.clone.handles": eg,
    undo: tg,
    redo: ng,
    cut: og,
    copy: rg,
    paste: sg,
    "copy.as": ig,
    "export.as": ag,
    "select.all": lg,
    "select.none": dg,
    delete: cg,
    "new.project": pg,
    open: ug,
    save: hg,
    "save.as": mg,
    "upload.media": gg,
    "create.page": fg,
    "new.page": Sg,
    "page.name": bg,
    duplicate: Tg,
    cancel: yg,
    "copy.invite.link": xg,
    "create.multiplayer.project": wg,
    "copy.multiplayer.project": kg,
    select: vg,
    eraser: Ig,
    draw: Cg,
    arrow: Dg,
    text: Pg,
    sticky: Mg,
    rectangle: Bg,
    ellipse: Eg,
    triangle: Rg,
    line: Ag,
    rotate: Lg,
    "lock.aspect.ratio": Hg,
    "unlock.aspect.ratio": zg,
    group: Og,
    ungroup: Fg,
    "move.to.back": jg,
    "move.backward": Gg,
    "move.forward": Vg,
    "move.to.front": $g,
    "reset.angle": Ng,
    lock: Wg,
    unlock: Ug,
    "move.to.page": Kg,
    "flip.horizontal": _g,
    "flip.vertical": Yg,
    move: Zg,
    "to.front": Xg,
    forward: qg,
    backward: Jg,
    back: Qg,
    language: ef,
    "align.bottom": tf,
    "align.center.x": nf,
    "align.center.y": of,
    "align.distribute": rf,
    "align.left": sf,
    "align.right": af,
    "align.top": lf,
    "copy.readonly.link": df,
    "dialog.save.again": cf,
    "dialog.save.firsttime": pf,
    "dialog.yes": uf,
    "dialog.no": hf,
    "dialog.cancel": mf,
    "enter.file.name": gf,
    "distribute.x": ff,
    "distribute.y": Sf,
    "dock.position": bf,
    bottom: Tf,
    left: yf,
    right: xf,
    top: wf,
    "export.background": kf,
    auto: vf,
    light: If,
    dark: Cf,
    image: Df,
    "keyboard.shortcuts": Pf,
    loading: Mf,
    page: Bf,
    search: Ef,
    "stretch.x": Rf,
    "stretch.y": Af,
    "translation.link": Lf,
    transparent: Hf,
  };
var zf = "Farbe",
  Of = "F\xFCllen",
  Ff = "Strich",
  jf = "Gr\xF6\xDFe",
  Gf = "Offen halten",
  Vf = "Schriftart",
  $f = "Ausrichten",
  Nf = "Stile",
  Wf = "Heranzoomen",
  Uf = "Herauszoomen",
  Kf = "zu",
  _f = "Werkzeuge",
  Yf = "Transformieren",
  Zf = "Datei",
  Xf = "Bearbeiten",
  qf = "Ansicht",
  Jf = "Pr\xE4ferenzen",
  Qf = "Einloggen",
  eS = "Ausloggen",
  tS = "Sponsor werden",
  nS = "Zur\xFCck zum Inhalt",
  oS = "Zur Auswahl zoomen",
  rS = "Zoom anpassen",
  sS = "Zoomen nach",
  iS = "Dunkler Modus",
  aS = "Fokus Modus",
  lS = "Debug Modus",
  dS = "Gitter anzeigen",
  cS = "CAD Auswahl verwenden",
  pS = "Stilmen\xFC offen halten",
  uS = "Hilfslinien immer anzeigen",
  hS = "Rotiergriffe",
  mS = "Bindegriffe",
  gS = "Klongriffe",
  fS = "R\xFCckg\xE4ngig machen",
  SS = "Wiederherstellen",
  bS = "Ausschneiden",
  TS = "Kopieren",
  yS = "Einf\xFCgen",
  xS = "Kopieren als",
  wS = "Exportieren als",
  kS = "Alles ausw\xE4hlen",
  vS = "Nichts ausw\xE4hlen",
  IS = "L\xF6schen",
  CS = "Neues Projekt",
  DS = "\xD6ffnen",
  PS = "Speichern",
  MS = "Speichern als",
  BS = "Medien hochladen",
  ES = "Seite erstellen",
  RS = "Neue Seite",
  AS = "Seitenname",
  LS = "Duplizieren",
  HS = "Form Optionen",
  zS = "Fromen",
  OS = "Abbrechen",
  FS = "Einladungslink kopieren",
  jS = "Schreibgesch\xFCtzten Link kopieren",
  GS = "Geteiltes Projekt erstellen",
  VS = "In ein Geteiltes Projekt kopieren",
  $S = "Ausw\xE4hlen",
  NS = "Radierer",
  WS = "Malen",
  US = "Pfeil",
  KS = "Text",
  _S = "Notiz",
  YS = "Rechteck",
  ZS = "Ellipse",
  XS = "Dreieck",
  qS = "Linie",
  JS = "Drehen",
  QS = "Seitenverh\xE4ltnis sperren",
  eb = "Seitenverh\xE4ltnis entsperren",
  tb = "Gruppieren",
  nb = "Gruppierung aufheben",
  ob = "Nach Hinten verschieben",
  rb = "R\xFCckw\xE4rts schieben",
  sb = "Vorw\xE4rts schieben",
  ib = "Nach Vorne verschieben",
  ab = "Winkel zur\xFCcksetzen",
  lb = "Sperren",
  db = "Entsperren",
  cb = "Ausrichten / Verteilen",
  pb = "Zu Seite verschieben",
  ub = "Horizontal spiegeln",
  hb = "Vertikal spiegeln",
  mb = "Verschieben",
  gb = "Nach Vorne",
  fb = "Vorw\xE4rts",
  Sb = "R\xFCckw\xE4rts",
  bb = "Hinten",
  Tb = "Sprache",
  yb = "Mehr erfahren",
  xb = "Dock Position",
  wb = "Unten",
  kb = "Links",
  vb = "Rechts",
  Ib = "Oben",
  Cb = "Seite",
  Db = "Tastaturkurzbefehle",
  Pb = "Suche",
  Mb = "Laden{dots}",
  Bb = "Hintergrund Exportieren",
  Eb = "Transparent",
  Rb = "Auto",
  Ab = "Hell",
  Lb = "Dunkel",
  Hb = "Github",
  zb = "Twitter",
  Ob = "Discord",
  Fb = "Bild",
  jb = "Links ausrichten",
  Gb = "Horizontal mittig ausrichten",
  Vb = "Rechts ausrichten",
  $b = "Oben ausrichten",
  Nb = "Vertikal mittig ausrichten",
  Wb = "Unten ausrichten",
  Ub = "Horizontal verteilen",
  Kb = "Vertikal verteilen",
  _b = "Horizontal strecken",
  Yb = "Vertikal strecken",
  Zb = "M\xF6chten Sie Ihr aktuelles Projekt speichern?",
  Xb = "M\xF6chten Sie die \xC4nderungen an Ihrem aktuellen Projekt speichern?",
  qb = "Abbrechen",
  Jb = "Nein",
  Qb = "Ja",
  eT = "Dateiname eingeben",
  tT = "Probieren Sie das neue tldraw",
  nT = "Wei\xDF",
  oT = "hellgrau",
  rT = "Frau",
  sT = "Schwarz",
  iT = "Gr\xFCn",
  aT = "Cyan",
  lT = "Blau",
  dT = "Indigo",
  cT = "Violett",
  pT = "Rot",
  uT = "Orange",
  hT = "Gelb",
  mT = "Durchgehend",
  gT = "Gestrichelt",
  fT = "Gepunktet",
  ST = "Klein",
  bT = "Mittel",
  TT = "Gro\xDF",
  ll = {
    "style.menu.color": zf,
    "style.menu.fill": Of,
    "style.menu.dash": Ff,
    "style.menu.size": jf,
    "style.menu.keep.open": Gf,
    "style.menu.font": Vf,
    "style.menu.align": $f,
    styles: Nf,
    "zoom.in": Wf,
    "zoom.out": Uf,
    to: Kf,
    "menu.tools": _f,
    "menu.transform": Yf,
    "menu.file": Zf,
    "menu.edit": Xf,
    "menu.view": qf,
    "menu.preferences": Jf,
    "menu.sign.in": Qf,
    "menu.sign.out": eS,
    "become.a.sponsor": tS,
    "zoom.to.content": nS,
    "zoom.to.selection": oS,
    "zoom.to.fit": rS,
    "zoom.to": sS,
    "preferences.dark.mode": iS,
    "preferences.focus.mode": aS,
    "preferences.debug.mode": lS,
    "preferences.show.grid": dS,
    "preferences.use.cad.selection": cS,
    "preferences.keep.stylemenu.open": pS,
    "preferences.always.show.snaps": uS,
    "preferences.rotate.handles": hS,
    "preferences.binding.handles": mS,
    "preferences.clone.handles": gS,
    undo: fS,
    redo: SS,
    cut: bS,
    copy: TS,
    paste: yS,
    "copy.as": xS,
    "export.as": wS,
    "select.all": kS,
    "select.none": vS,
    delete: IS,
    "new.project": CS,
    open: DS,
    save: PS,
    "save.as": MS,
    "upload.media": BS,
    "create.page": ES,
    "new.page": RS,
    "page.name": AS,
    duplicate: LS,
    "shape.options": HS,
    shapes: zS,
    cancel: OS,
    "copy.invite.link": FS,
    "copy.readonly.link": jS,
    "create.multiplayer.project": GS,
    "copy.multiplayer.project": VS,
    select: $S,
    eraser: NS,
    draw: WS,
    arrow: US,
    text: KS,
    sticky: _S,
    rectangle: YS,
    ellipse: ZS,
    triangle: XS,
    line: qS,
    rotate: JS,
    "lock.aspect.ratio": QS,
    "unlock.aspect.ratio": eb,
    group: tb,
    ungroup: nb,
    "move.to.back": ob,
    "move.backward": rb,
    "move.forward": sb,
    "move.to.front": ib,
    "reset.angle": ab,
    lock: lb,
    unlock: db,
    "align.distribute": cb,
    "move.to.page": pb,
    "flip.horizontal": ub,
    "flip.vertical": hb,
    move: mb,
    "to.front": gb,
    forward: fb,
    backward: Sb,
    back: bb,
    language: Tb,
    "translation.link": yb,
    "dock.position": xb,
    bottom: wb,
    left: kb,
    right: vb,
    top: Ib,
    page: Cb,
    "keyboard.shortcuts": Db,
    search: Pb,
    loading: Mb,
    "export.background": Bb,
    transparent: Eb,
    auto: Rb,
    light: Ab,
    dark: Lb,
    github: Hb,
    twitter: zb,
    discord: Ob,
    image: Fb,
    "align.left": jb,
    "align.center.x": Gb,
    "align.right": Vb,
    "align.top": $b,
    "align.center.y": Nb,
    "align.bottom": Wb,
    "distribute.x": Ub,
    "distribute.y": Kb,
    "stretch.x": _b,
    "stretch.y": Yb,
    "dialog.save.firsttime": Zb,
    "dialog.save.again": Xb,
    "dialog.cancel": qb,
    "dialog.no": Jb,
    "dialog.yes": Qb,
    "enter.file.name": eT,
    "tldraw-beta": tT,
    white: nT,
    lightGray: oT,
    gray: rT,
    black: sT,
    green: iT,
    cyan: aT,
    blue: lT,
    indigo: dT,
    violet: cT,
    red: pT,
    orange: uT,
    yellow: hT,
    solid: mT,
    dashed: gT,
    dotted: fT,
    small: ST,
    medium: bT,
    large: TT,
  };
var dl = {};
var xT = "Color",
  wT = "Relleno",
  kT = "L\xEDnea",
  vT = "Tama\xF1o",
  IT = "Mantener abierto",
  CT = "Fuente",
  DT = "Alineaci\xF3n",
  PT = "Estilos",
  MT = "Acercar",
  BT = "Alejar",
  ET = "A",
  RT = "Herramientas",
  AT = "Transformar",
  LT = "Archivo",
  HT = "Editar",
  zT = "Ver",
  OT = "Preferencias",
  FT = "Iniciar sesi\xF3n",
  jT = "Cerrar sesi\xF3n",
  GT = "Convi\xE9rtete en patrocinador",
  VT = "Acercar al contenido",
  $T = "Acercar a la selecci\xF3n",
  NT = "Ajustar a la ventana",
  WT = "Acercar a",
  UT = "Modo oscuro",
  KT = "Modo concentraci\xF3n",
  _T = "Modo depuraci\xF3n",
  YT = "Mostrar cuadr\xEDcula",
  ZT = "Usar selecci\xF3n CAD",
  XT = "Mantener men\xFA de estilos abierto",
  qT = "Mostrar puntos de ajuste",
  JT = "Control de rotaci\xF3n",
  QT = "Control de vinculaci\xF3n",
  ey = "Control de clonaci\xF3n",
  ty = "Deshacer",
  ny = "Rehacer",
  oy = "Cortar",
  ry = "Copiar",
  sy = "Pegar",
  iy = "Copiar como",
  ay = "Exportar como",
  ly = "Selecionar todo",
  dy = "Selecionar nada",
  cy = "Borrar",
  py = "Nuevo Proyecto",
  uy = "Abrir",
  hy = "Guardar",
  my = "Guardar como",
  gy = "Subir medios",
  fy = "Crear p\xE1gina",
  Sy = "Nueva p\xE1gina",
  by = "Nombre de p\xE1gina",
  Ty = "Duplicar",
  yy = "Opciones de formas",
  xy = "Formas",
  wy = "Cancelar",
  ky = "Copiar invitaci\xF3n",
  vy = "Copiar invitaci\xF3n (solo lectura)",
  Iy = "Crear proyecto multijugador",
  Cy = "Copiar proyecto multijugador",
  Dy = "Seleccionar",
  Py = "Borrador",
  My = "Dibujar",
  By = "Flecha",
  Ey = "Texto",
  Ry = "Pegatina",
  Ay = "Rect\xE1ngulo",
  Ly = "Elipse",
  Hy = "Tri\xE1ngulo",
  zy = "L\xEDnea",
  Oy = "Rotar",
  Fy = "Bloquear relaci\xF3n de aspecto",
  jy = "Desbloquear relaci\xF3n de aspecto",
  Gy = "Agrupar",
  Vy = "Desagrupar",
  $y = "Mover al fondo",
  Ny = "Mover atr\xE1s",
  Wy = "Mover adelante",
  Uy = "Mover al frente",
  Ky = "Restablecer \xE1ngulo",
  _y = "Bloquear",
  Yy = "Desbloquear",
  Zy = "Alinear / Distribuir",
  Xy = "Mover a p\xE1gina",
  qy = "Voltear horizontalmente",
  Jy = "Voltear verticalmente",
  Qy = "Mover",
  ex = "Al frente",
  tx = "Adelante",
  nx = "Atr\xE1s",
  ox = "Fondo",
  rx = "Idioma",
  sx = "Saber m\xE1s",
  ix = "Posici\xF3n del dock",
  ax = "Abajo",
  lx = "Izquierda",
  dx = "Derecha",
  cx = "Arriba",
  px = "P\xE1gina",
  ux = "Atajos de teclado",
  hx = "Buscar",
  mx = "Cargando{dots}",
  gx = "Exportar fondo",
  fx = "Transparente",
  Sx = "Auto",
  bx = "Claro",
  Tx = "Oscuro",
  yx = "Github",
  xx = "Twitter",
  wx = "Discord",
  kx = "Imagen",
  vx = "Alinear a la izquierda",
  Ix = "Alinear al centro horizontalmente",
  Cx = "Alinear a la derecha",
  Dx = "Alinear arriba",
  Px = "Alinear al centro verticalmente",
  Mx = "Alinear abajo",
  Bx = "Distribuir horizontalmente",
  Ex = "Distribuir verticalmente",
  Rx = "Estirar horizontalmente",
  Ax = "Estirar verticalmente",
  Lx = "\xBFQuieres guardar el proyecto actual?",
  Hx = "\xBFQuieres guardar los cambios en el proyecto actual?",
  zx = "Cancelar",
  Ox = "No",
  Fx = "S\xED",
  jx = "Introduce el nombre del arquivo",
  Gx = "Prueba el nuevo tldraw",
  Vx = "Blanco",
  $x = "Gris claro",
  Nx = "Gris",
  Wx = "Negro",
  Ux = "Verde",
  Kx = "Cian",
  _x = "Azul",
  Yx = "Indigo",
  Zx = "Violeta",
  Xx = "Rojo",
  qx = "Naranja",
  Jx = "Amarillo",
  Qx = "Cont\xEDnuo",
  ew = "Discont\xEDnuo",
  tw = "Punteado",
  nw = "Peque\xF1o",
  ow = "Mediano",
  rw = "Grande",
  cl = {
    "style.menu.color": xT,
    "style.menu.fill": wT,
    "style.menu.dash": kT,
    "style.menu.size": vT,
    "style.menu.keep.open": IT,
    "style.menu.font": CT,
    "style.menu.align": DT,
    styles: PT,
    "zoom.in": MT,
    "zoom.out": BT,
    to: ET,
    "menu.tools": RT,
    "menu.transform": AT,
    "menu.file": LT,
    "menu.edit": HT,
    "menu.view": zT,
    "menu.preferences": OT,
    "menu.sign.in": FT,
    "menu.sign.out": jT,
    "become.a.sponsor": GT,
    "zoom.to.content": VT,
    "zoom.to.selection": $T,
    "zoom.to.fit": NT,
    "zoom.to": WT,
    "preferences.dark.mode": UT,
    "preferences.focus.mode": KT,
    "preferences.debug.mode": _T,
    "preferences.show.grid": YT,
    "preferences.use.cad.selection": ZT,
    "preferences.keep.stylemenu.open": XT,
    "preferences.always.show.snaps": qT,
    "preferences.rotate.handles": JT,
    "preferences.binding.handles": QT,
    "preferences.clone.handles": ey,
    undo: ty,
    redo: ny,
    cut: oy,
    copy: ry,
    paste: sy,
    "copy.as": iy,
    "export.as": ay,
    "select.all": ly,
    "select.none": dy,
    delete: cy,
    "new.project": py,
    open: uy,
    save: hy,
    "save.as": my,
    "upload.media": gy,
    "create.page": fy,
    "new.page": Sy,
    "page.name": by,
    duplicate: Ty,
    "shape.options": yy,
    shapes: xy,
    cancel: wy,
    "copy.invite.link": ky,
    "copy.readonly.link": vy,
    "create.multiplayer.project": Iy,
    "copy.multiplayer.project": Cy,
    select: Dy,
    eraser: Py,
    draw: My,
    arrow: By,
    text: Ey,
    sticky: Ry,
    rectangle: Ay,
    ellipse: Ly,
    triangle: Hy,
    line: zy,
    rotate: Oy,
    "lock.aspect.ratio": Fy,
    "unlock.aspect.ratio": jy,
    group: Gy,
    ungroup: Vy,
    "move.to.back": $y,
    "move.backward": Ny,
    "move.forward": Wy,
    "move.to.front": Uy,
    "reset.angle": Ky,
    lock: _y,
    unlock: Yy,
    "align.distribute": Zy,
    "move.to.page": Xy,
    "flip.horizontal": qy,
    "flip.vertical": Jy,
    move: Qy,
    "to.front": ex,
    forward: tx,
    backward: nx,
    back: ox,
    language: rx,
    "translation.link": sx,
    "dock.position": ix,
    bottom: ax,
    left: lx,
    right: dx,
    top: cx,
    page: px,
    "keyboard.shortcuts": ux,
    search: hx,
    loading: mx,
    "export.background": gx,
    transparent: fx,
    auto: Sx,
    light: bx,
    dark: Tx,
    github: yx,
    twitter: xx,
    discord: wx,
    image: kx,
    "align.left": vx,
    "align.center.x": Ix,
    "align.right": Cx,
    "align.top": Dx,
    "align.center.y": Px,
    "align.bottom": Mx,
    "distribute.x": Bx,
    "distribute.y": Ex,
    "stretch.x": Rx,
    "stretch.y": Ax,
    "dialog.save.firsttime": Lx,
    "dialog.save.again": Hx,
    "dialog.cancel": zx,
    "dialog.no": Ox,
    "dialog.yes": Fx,
    "enter.file.name": jx,
    "tldraw-beta": Gx,
    white: Vx,
    lightGray: $x,
    gray: Nx,
    black: Wx,
    green: Ux,
    cyan: Kx,
    blue: _x,
    indigo: Yx,
    violet: Zx,
    red: Xx,
    orange: qx,
    yellow: Jx,
    solid: Qx,
    dashed: ew,
    dotted: tw,
    small: nw,
    medium: ow,
    large: rw,
  };
var sw = "\u0631\u0646\u06AF",
  iw = "\u062A\u0648\u067E\u064F\u0631",
  aw = "\u062E\u0637\u200C\u0686\u06CC\u0646",
  lw = "\u0627\u0646\u062F\u0627\u0632\u0647",
  dw =
    "\u0628\u0627\u0632 \u0646\u06AF\u0647\u200C\u062F\u0627\u0634\u062A\u0646",
  cw = "\u0642\u0644\u0645",
  pw = "\u062A\u0631\u0627\u0632",
  uw = "\u0633\u0628\u06A9\u200C\u0647\u0627",
  hw = "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC",
  mw = "\u06A9\u0648\u0686\u06A9\u200C\u0646\u0645\u0627\u06CC\u06CC",
  gw = "\u0628\u0647",
  fw = "\u0627\u0628\u0632\u0627\u0631\u0647\u0627",
  Sw = "\u062A\u063A\u06CC\u06CC\u0631 \u0634\u06A9\u0644",
  bw = "\u067E\u0631\u0648\u0646\u062F\u0647",
  Tw = "\u0648\u06CC\u0631\u0627\u06CC\u0634",
  yw = "\u0646\u0645\u0627\u06CC\u0634",
  xw = "\u062A\u0631\u062C\u06CC\u062D\u0627\u062A",
  ww = "\u0648\u0631\u0648\u062F",
  kw = "\u062E\u0631\u0648\u062C",
  vw =
    "\u062D\u0645\u0627\u06CC\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 \u0634\u0648\u06CC\u062F",
  Iw =
    "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u062D\u062A\u0648\u0627",
  Cw =
    "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0628\u0647 \u0646\u0627\u062D\u06CC\u0647 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0634\u062F\u0647",
  Dw =
    "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0645\u062A\u0646\u0627\u0633\u0628 \u0628\u0627 \u0635\u0641\u062D\u0647",
  Pw =
    "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0628\u0647",
  Mw = "\u062D\u0627\u0644\u062A \u062A\u0627\u0631\u06CC\u06A9",
  Bw = "\u062D\u0627\u0644\u062A \u062A\u0645\u0631\u06A9\u0632",
  Ew =
    "\u062D\u0627\u0644\u062A \u0639\u06CC\u0628\u200C\u06CC\u0627\u0628\u06CC",
  Rw =
    "\u0646\u0645\u0627\u06CC\u0634 \u062E\u0637\u0648\u0637 \u0631\u0627\u0647\u0646\u0645\u0627",
  Aw =
    "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062D\u0627\u0644\u062A \u0627\u0646\u062A\u062E\u0627\u0628 CAD",
  Lw =
    "\u0628\u0627\u0632 \u0646\u06AF\u0647\u200C\u062F\u0627\u0634\u062A\u0646 \u0645\u0646\u0648\u06CC \u0633\u0628\u06A9\u200C\u0647\u0627",
  Hw =
    "\u0647\u0645\u06CC\u0634\u0647 \u0646\u0642\u0627\u0637 \u0686\u0633\u0628\u0627\u0646 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0628\u062F\u0647",
  zw =
    "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u0686\u0631\u062E\u0634",
  Ow =
    "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u0627\u062A\u0635\u0627\u0644\u200C\u062F\u0647\u0646\u062F\u0647",
  Fw =
    "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u062A\u06A9\u062B\u06CC\u0631",
  jw = "\u0648\u0627\u06AF\u0631\u062F\u0627\u0646\u06CC",
  Gw = "\u0627\u0646\u062C\u0627\u0645 \u062F\u0648\u0628\u0627\u0631\u0647",
  Vw = "\u0628\u0631\u06CC\u062F\u0646",
  $w = "\u06A9\u067E\u06CC",
  Nw = "\u062C\u0627\u06CC\u200C\u06AF\u0630\u0627\u0631\u06CC",
  Ww = "\u06A9\u067E\u06CC \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  Uw =
    "\u062E\u0631\u0648\u062C\u06CC\u200C\u06AF\u0631\u0641\u062A\u0646 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  Kw = "\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647",
  _w =
    "\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u06CC\u0686\u200C\u06CC\u06A9",
  Yw = "\u062D\u0630\u0641",
  Zw = "\u067E\u0631\u0648\u0698\u0647 \u062C\u062F\u06CC\u062F",
  Xw = "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646",
  qw = "\u0630\u062E\u06CC\u0631\u0647",
  Jw =
    "\u0630\u062E\u06CC\u0631\u0647 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  Qw =
    "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0633\u0627\u0646\u0647",
  e0 = "\u0627\u06CC\u062C\u0627\u062F \u0628\u0631\u06AF\u0647",
  t0 = "\u0628\u0631\u06AF\u0647 \u062C\u062F\u06CC\u062F",
  n0 = "\u0646\u0627\u0645 \u0628\u0631\u06AF\u0647",
  o0 = "\u062A\u06A9\u062B\u06CC\u0631\u06A9\u0631\u062F\u0646",
  r0 =
    "\u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0634\u06A9\u0644",
  s0 = "\u0634\u06A9\u0644\u200C\u0647\u0627",
  i0 = "\u0644\u063A\u0648",
  a0 =
    "\u06A9\u067E\u06CC\u200C\u06A9\u0631\u062F\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0639\u0648\u062A",
  l0 =
    "\u06A9\u067E\u06CC\u200C\u06A9\u0631\u062F\u0646 \u067E\u06CC\u0648\u0646\u062F \u063A\u06CC\u0631\u0642\u0627\u0628\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634",
  d0 =
    "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u067E\u0631\u0648\u0698\u0647 \u0686\u0646\u062F\u0646\u0641\u0631\u0647",
  c0 =
    "\u06A9\u067E\u06CC \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 \u0686\u0646\u062F\u0646\u0641\u0631\u0647",
  p0 = "\u0627\u0646\u062A\u062E\u0627\u0628",
  u0 = "\u067E\u0627\u06A9\u200C\u06A9\u0646",
  h0 = "\u0631\u0633\u0645",
  m0 = "\u0641\u0650\u0644\u0650\u0634",
  g0 = "\u0645\u062A\u0646",
  f0 = "\u0628\u0631\u06AF\u0647 \u0686\u0633\u0628\u0627\u0646",
  S0 = "\u0686\u0647\u0627\u0631\u06AF\u0648\u0634",
  b0 = "\u06AF\u0631\u062F\u06CC",
  T0 = "\u0633\u0647\u200C\u06AF\u0648\u0634",
  y0 = "\u062E\u0637",
  x0 = "\u0686\u0631\u062E\u0627\u0646\u062F\u0646",
  w0 =
    "\u0642\u0641\u0644\u200C\u06A9\u0631\u062F\u0646 \u0646\u0633\u0628\u062A \u0627\u0628\u0639\u0627\u062F",
  k0 =
    "\u0627\u062C\u0627\u0632\u0647 \u062A\u063A\u06CC\u06CC\u0631 \u0646\u0633\u0628\u062A \u0627\u0628\u0639\u0627\u062F",
  v0 = "\u06AF\u0631\u0648\u0647\u200C\u0628\u0646\u062F\u06CC",
  I0 =
    "\u0644\u063A\u0648 \u06AF\u0631\u0648\u0647\u200C\u0628\u0646\u062F\u06CC",
  C0 = "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0639\u0642\u0628",
  D0 =
    "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0633\u0645\u062A \u0639\u0642\u0628",
  P0 =
    "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0633\u0645\u062A \u062C\u0644\u0648",
  M0 = "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u062C\u0644\u0648",
  B0 =
    "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0632\u0627\u0648\u06CC\u0647",
  E0 = "\u0642\u0641\u0644",
  R0 = "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u0642\u0641\u0644",
  A0 =
    "\u062A\u0631\u0627\u0632 / \u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646",
  L0 =
    "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0628\u0631\u06AF\u0647",
  H0 =
    "\u0648\u0627\u0631\u0648\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0627\u0641\u0642\u06CC",
  z0 =
    "\u0648\u0627\u0631\u0648\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0639\u0645\u0648\u062F\u06CC",
  O0 = "\u062D\u0631\u06A9\u062A\u200C\u062F\u0627\u062F\u0646",
  F0 = "\u0628\u0647 \u062C\u0644\u0648",
  j0 = "\u0628\u0647 \u0633\u0645\u062A \u062C\u0644\u0648",
  G0 = "\u0628\u0647 \u0633\u0645\u062A \u0639\u0642\u0628",
  V0 = "\u0628\u0647 \u0639\u0642\u0628",
  $0 = "\u0632\u0628\u0627\u0646",
  N0 =
    "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0628\u06CC\u0634\u062A\u0631",
  W0 =
    "\u0645\u0648\u0642\u0639\u06CC\u062A \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631",
  U0 = "\u067E\u0627\u06CC\u06CC\u0646",
  K0 = "\u0686\u067E",
  _0 = "\u0631\u0627\u0633\u062A",
  Y0 = "\u0628\u0627\u0644\u0627",
  Z0 = "\u0628\u0631\u06AF\u0647",
  X0 =
    "\u0645\u06CC\u0627\u0646\u200C\u0628\u0631\u0647\u0627\u06CC \u0635\u0641\u062D\u0647\u200C\u06A9\u0644\u06CC\u062F",
  q0 = "\u062C\u0633\u062A\u062C\u0648",
  J0 = "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC{dots}",
  Q0 =
    "\u062E\u0631\u0648\u062C\u06CC\u200C\u06AF\u0631\u0641\u062A\u0646 \u067E\u0633\u200C\u0632\u0645\u06CC\u0646\u0647",
  ek = "\u0634\u0641\u0627\u0641",
  tk = "\u062E\u0648\u062F\u06A9\u0627\u0631",
  nk = "\u0631\u0648\u0634\u0646",
  ok = "\u062A\u0627\u0631\u06CC\u06A9",
  rk = "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
  sk = "\u062A\u0648\u06CC\u06CC\u062A\u0631",
  ik = "\u062F\u06CC\u0633\u06A9\u0648\u0631\u062F",
  ak = "\u062A\u0635\u0648\u06CC\u0631",
  lk = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0686\u067E",
  dk =
    "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0645\u0631\u06A9\u0632 \u0627\u0641\u0642\u06CC",
  ck = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0631\u0627\u0633\u062A",
  pk = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0628\u0627\u0644\u0627",
  uk =
    "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0645\u0631\u06A9\u0632 \u0639\u0645\u0648\u062F\u06CC",
  hk = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u067E\u0627\u06CC\u06CC\u0646",
  mk =
    "\u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646 \u0627\u0641\u0642\u06CC",
  gk =
    "\u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646 \u0639\u0645\u0648\u062F\u06CC",
  fk =
    "\u06A9\u0634\u200C\u0622\u0648\u0631\u062F\u0646 \u0627\u0641\u0642\u06CC",
  Sk =
    "\u06A9\u0634\u200C\u0622\u0648\u0631\u062F\u0646 \u0639\u0645\u0648\u062F\u06CC",
  bk =
    "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u067E\u0631\u0648\u0698\u0647 \u0641\u0639\u0644\u06CC \u062E\u0648\u062F \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
  Tk =
    "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0631\u0627 \u062F\u0631 \u067E\u0631\u0648\u0698\u0647 \u0641\u0639\u0644\u06CC \u062E\u0648\u062F \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
  yk = "\u0644\u063A\u0648",
  xk = "\u062E\u06CC\u0631",
  wk = "\u0628\u0644\u0647",
  kk =
    "\u0646\u0627\u0645 \u067E\u0631\u0648\u0646\u062F\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
  vk =
    "\u0627\u0645\u062A\u062D\u0627\u0646\u200C\u06A9\u0631\u062F\u0646 tldraw \u062C\u062F\u06CC\u062F",
  Ik = "\u0633\u0641\u06CC\u062F",
  Ck = "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC \u0631\u0648\u0634\u0646",
  Dk = "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC",
  Pk = "\u0645\u0634\u06A9\u06CC",
  Mk = "\u0633\u0628\u0632",
  Bk = "\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC",
  Ek = "\u0622\u0628\u06CC",
  Rk = "\u0646\u06CC\u0644\u06CC",
  Ak = "\u0628\u0646\u0641\u0634",
  Lk = "\u0642\u0631\u0645\u0632",
  Hk = "\u0646\u0627\u0631\u0646\u062C\u06CC",
  zk = "\u0632\u0631\u062F",
  Ok = "\u062A\u0648\u067E\u064F\u0631",
  Fk = "\u062E\u0637\u200C\u0686\u06CC\u0646",
  jk = "\u0646\u0642\u0637\u0647\u200C\u0686\u06CC\u0646",
  Gk = "\u06A9\u0648\u0686\u06A9",
  Vk = "\u0645\u062A\u0648\u0633\u0637",
  $k = "\u0628\u0632\u0631\u06AF",
  pl = {
    "style.menu.color": sw,
    "style.menu.fill": iw,
    "style.menu.dash": aw,
    "style.menu.size": lw,
    "style.menu.keep.open": dw,
    "style.menu.font": cw,
    "style.menu.align": pw,
    styles: uw,
    "zoom.in": hw,
    "zoom.out": mw,
    to: gw,
    "menu.tools": fw,
    "menu.transform": Sw,
    "menu.file": bw,
    "menu.edit": Tw,
    "menu.view": yw,
    "menu.preferences": xw,
    "menu.sign.in": ww,
    "menu.sign.out": kw,
    "become.a.sponsor": vw,
    "zoom.to.content": Iw,
    "zoom.to.selection": Cw,
    "zoom.to.fit": Dw,
    "zoom.to": Pw,
    "preferences.dark.mode": Mw,
    "preferences.focus.mode": Bw,
    "preferences.debug.mode": Ew,
    "preferences.show.grid": Rw,
    "preferences.use.cad.selection": Aw,
    "preferences.keep.stylemenu.open": Lw,
    "preferences.always.show.snaps": Hw,
    "preferences.rotate.handles": zw,
    "preferences.binding.handles": Ow,
    "preferences.clone.handles": Fw,
    undo: jw,
    redo: Gw,
    cut: Vw,
    copy: $w,
    paste: Nw,
    "copy.as": Ww,
    "export.as": Uw,
    "select.all": Kw,
    "select.none": _w,
    delete: Yw,
    "new.project": Zw,
    open: Xw,
    save: qw,
    "save.as": Jw,
    "upload.media": Qw,
    "create.page": e0,
    "new.page": t0,
    "page.name": n0,
    duplicate: o0,
    "shape.options": r0,
    shapes: s0,
    cancel: i0,
    "copy.invite.link": a0,
    "copy.readonly.link": l0,
    "create.multiplayer.project": d0,
    "copy.multiplayer.project": c0,
    select: p0,
    eraser: u0,
    draw: h0,
    arrow: m0,
    text: g0,
    sticky: f0,
    rectangle: S0,
    ellipse: b0,
    triangle: T0,
    line: y0,
    rotate: x0,
    "lock.aspect.ratio": w0,
    "unlock.aspect.ratio": k0,
    group: v0,
    ungroup: I0,
    "move.to.back": C0,
    "move.backward": D0,
    "move.forward": P0,
    "move.to.front": M0,
    "reset.angle": B0,
    lock: E0,
    unlock: R0,
    "align.distribute": A0,
    "move.to.page": L0,
    "flip.horizontal": H0,
    "flip.vertical": z0,
    move: O0,
    "to.front": F0,
    forward: j0,
    backward: G0,
    back: V0,
    language: $0,
    "translation.link": N0,
    "dock.position": W0,
    bottom: U0,
    left: K0,
    right: _0,
    top: Y0,
    page: Z0,
    "keyboard.shortcuts": X0,
    search: q0,
    loading: J0,
    "export.background": Q0,
    transparent: ek,
    auto: tk,
    light: nk,
    dark: ok,
    github: rk,
    twitter: sk,
    discord: ik,
    image: ak,
    "align.left": lk,
    "align.center.x": dk,
    "align.right": ck,
    "align.top": pk,
    "align.center.y": uk,
    "align.bottom": hk,
    "distribute.x": mk,
    "distribute.y": gk,
    "stretch.x": fk,
    "stretch.y": Sk,
    "dialog.save.firsttime": bk,
    "dialog.save.again": Tk,
    "dialog.cancel": yk,
    "dialog.no": xk,
    "dialog.yes": wk,
    "enter.file.name": kk,
    "tldraw-beta": vk,
    white: Ik,
    lightGray: Ck,
    gray: Dk,
    black: Pk,
    green: Mk,
    cyan: Bk,
    blue: Ek,
    indigo: Rk,
    violet: Ak,
    red: Lk,
    orange: Hk,
    yellow: zk,
    solid: Ok,
    dashed: Fk,
    dotted: jk,
    small: Gk,
    medium: Vk,
    large: $k,
  };
var Nk = "Couleur",
  Wk = "Remplir",
  Uk = "Bordure",
  Kk = "Taille",
  _k = "Toujours afficher le menu",
  Yk = "Police",
  Zk = "Alignement",
  Xk = "Styles",
  qk = "Zoom avant",
  Jk = "Zoom arri\xE8re",
  Qk = "\xC0",
  e1 = "Outils",
  t1 = "Transformation",
  n1 = "Fichier",
  o1 = "\xC9dition",
  r1 = "Afficher",
  s1 = "Pr\xE9f\xE9rences",
  i1 = "S'authentifier",
  a1 = "Se d\xE9connecter",
  l1 = "Devenir un sponsor",
  d1 = "Retour au contenu",
  c1 = "Ajuster le zoom \xE0 la s\xE9lection",
  p1 = "Adapter le zoom au contenu",
  u1 = "R\xE9tablir le zoom \xE0",
  h1 = "Mode sombre",
  m1 = "Mode focus",
  g1 = "Afficher la barre d\xE9veloppeur",
  f1 = "Afficher la grille",
  S1 = "Utiliser la s\xE9lection CAD",
  b1 = "Toujours afficher le menu styles",
  T1 = "Afficher les rep\xE8res dynamiques",
  y1 = "Manier la rotation",
  x1 = "Manier les liaisons",
  w1 = "Manier le clonage",
  k1 = "Annuler",
  v1 = "R\xE9tablir",
  I1 = "Couper",
  C1 = "Copier",
  D1 = "Coller",
  P1 = "Copier au format",
  M1 = "Exporter au format",
  B1 = "Tout s\xE9lectionner",
  E1 = "Tout d\xE9s\xE9lectionner",
  R1 = "Supprimer",
  A1 = "Nouveau project",
  L1 = "Ouvrir",
  H1 = "Enregistrer",
  z1 = "Enregistrer sous",
  O1 = "Importer un m\xE9dia",
  F1 = "Cr\xE9er une page",
  j1 = "Nouvelle Page",
  G1 = "Nom de la page",
  V1 = "Dupliquer",
  $1 = "Annuler",
  N1 = "Copier le lien d'invitation",
  W1 = "Copier le lien en lecture seule d'invitation",
  U1 = "Cr\xE9er un project multi-joueurs",
  K1 = "Copier dans un projet multi-joueurs",
  _1 = "S\xE9lection",
  Y1 = "Gomme",
  Z1 = "Crayon",
  X1 = "Fl\xE8che",
  q1 = "Texte",
  J1 = "Note",
  Q1 = "Rectangle",
  ev = "Cercle",
  tv = "Triangle",
  nv = "Ligne",
  ov = "Rotation",
  rv = "Verrouiller les proportions",
  sv = "D\xE9verrouiller les proportions",
  iv = "Grouper",
  av = "D\xE9grouper",
  lv = "D\xE9placer \xE0 l'arri\xE8re-plan",
  dv = "Reculer d'un plan",
  cv = "Avancer d'un plan",
  pv = "Placer au premier plan",
  uv = "R\xE9initialiser la rotation",
  hv = "Verrouiller",
  mv = "D\xE9verrouiller",
  gv = "Alignement / R\xE9partion",
  fv = "D\xE9placer vers la page",
  Sv = "Retourner horizontalement",
  bv = "Retourner verticalement",
  Tv = "Disposition",
  yv = "Placer au premier plan",
  xv = "Avancer d'un plan",
  wv = "Reculer d'un plan",
  kv = "D\xE9placer \xE0 l'arri\xE8re-plan",
  vv = "Langage",
  Iv = "En savoir plus",
  Cv = "Position du dock",
  Dv = "En bas",
  Pv = "\xC0 gauche",
  Mv = "\xC0 droite",
  Bv = "En haut",
  Ev = "Page",
  Rv = "Raccourcis clavier",
  Av = "Rechercher",
  Lv = "Chargement{dots}",
  Hv = "Couleur d'arri\xE8re-plan de l'export",
  zv = "Transparent",
  Ov = "Automatique",
  Fv = "Clair",
  jv = "Sombre",
  ul = {
    "style.menu.color": Nk,
    "style.menu.fill": Wk,
    "style.menu.dash": Uk,
    "style.menu.size": Kk,
    "style.menu.keep.open": _k,
    "style.menu.font": Yk,
    "style.menu.align": Zk,
    styles: Xk,
    "zoom.in": qk,
    "zoom.out": Jk,
    to: Qk,
    "menu.tools": e1,
    "menu.transform": t1,
    "menu.file": n1,
    "menu.edit": o1,
    "menu.view": r1,
    "menu.preferences": s1,
    "menu.sign.in": i1,
    "menu.sign.out": a1,
    "become.a.sponsor": l1,
    "zoom.to.content": d1,
    "zoom.to.selection": c1,
    "zoom.to.fit": p1,
    "zoom.to": u1,
    "preferences.dark.mode": h1,
    "preferences.focus.mode": m1,
    "preferences.debug.mode": g1,
    "preferences.show.grid": f1,
    "preferences.use.cad.selection": S1,
    "preferences.keep.stylemenu.open": b1,
    "preferences.always.show.snaps": T1,
    "preferences.rotate.handles": y1,
    "preferences.binding.handles": x1,
    "preferences.clone.handles": w1,
    undo: k1,
    redo: v1,
    cut: I1,
    copy: C1,
    paste: D1,
    "copy.as": P1,
    "export.as": M1,
    "select.all": B1,
    "select.none": E1,
    delete: R1,
    "new.project": A1,
    open: L1,
    save: H1,
    "save.as": z1,
    "upload.media": O1,
    "create.page": F1,
    "new.page": j1,
    "page.name": G1,
    duplicate: V1,
    cancel: $1,
    "copy.invite.link": N1,
    "copy.readonly.link": W1,
    "create.multiplayer.project": U1,
    "copy.multiplayer.project": K1,
    select: _1,
    eraser: Y1,
    draw: Z1,
    arrow: X1,
    text: q1,
    sticky: J1,
    rectangle: Q1,
    ellipse: ev,
    triangle: tv,
    line: nv,
    rotate: ov,
    "lock.aspect.ratio": rv,
    "unlock.aspect.ratio": sv,
    group: iv,
    ungroup: av,
    "move.to.back": lv,
    "move.backward": dv,
    "move.forward": cv,
    "move.to.front": pv,
    "reset.angle": uv,
    lock: hv,
    unlock: mv,
    "align.distribute": gv,
    "move.to.page": fv,
    "flip.horizontal": Sv,
    "flip.vertical": bv,
    move: Tv,
    "to.front": yv,
    forward: xv,
    backward: wv,
    back: kv,
    language: vv,
    "translation.link": Iv,
    "dock.position": Cv,
    bottom: Dv,
    left: Pv,
    right: Mv,
    top: Bv,
    page: Ev,
    "keyboard.shortcuts": Rv,
    search: Av,
    loading: Lv,
    "export.background": Hv,
    transparent: zv,
    auto: Ov,
    light: Fv,
    dark: jv,
  };
var Gv = "Cor",
  Vv = "Recheo",
  $v = "Li\xF1a",
  Nv = "Tama\xF1o",
  Wv = "Manter aberto",
  Uv = "Fonte",
  Kv = "Ali\xF1amento",
  _v = "Estilos",
  Yv = "Achegar",
  Zv = "Afastar",
  Xv = "A",
  qv = "Ferramentas",
  Jv = "Transformar",
  Qv = "Arquivo",
  eI = "Editar",
  tI = "Ver",
  nI = "Preferencias",
  oI = "Iniciar sesi\xF3n",
  rI = "Pechar sesi\xF3n",
  sI = "Conv\xEDrtete en patrocinador",
  iI = "Achegar ao contido",
  aI = "Achegar \xE1 selecci\xF3n",
  lI = "Axustar \xE1 vent\xE1",
  dI = "Achegar a",
  cI = "Modo escuro",
  pI = "Modo concentraci\xF3n",
  uI = "Modo depuraci\xF3n",
  hI = "Amosar cuadr\xEDcula",
  mI = "Usar selecci\xF3n CAD",
  gI = "Manter men\xFA de estilos aberto",
  fI = "Amosar puntos de axuste",
  SI = "Control de rotaci\xF3n",
  bI = "Control de vinculaci\xF3n",
  TI = "Control de clonaci\xF3n",
  yI = "Desfacer",
  xI = "Refacer",
  wI = "Cortar",
  kI = "Copiar",
  vI = "Pegar",
  II = "Copiar como",
  CI = "Exportar como",
  DI = "Selecionar todo",
  PI = "Selecionar nada",
  MI = "Borrar",
  BI = "Novo Proxecto",
  EI = "Abrir",
  RI = "Gardar",
  AI = "Gardar como",
  LI = "Subir medios",
  HI = "Crear p\xE1xina",
  zI = "Nova p\xE1xina",
  OI = "Nome de p\xE1xina",
  FI = "Duplicar",
  jI = "Opci\xF3ns de formas",
  GI = "Formas",
  VI = "Cancelar",
  $I = "Copiar invitaci\xF3n",
  NI = "Copiar invitaci\xF3n (s\xF3 lectura)",
  WI = "Crear proxecto multixogador",
  UI = "Copiar proxecto multixogador",
  KI = "Seleccionar",
  _I = "Borrador",
  YI = "Debuxar",
  ZI = "Frecha",
  XI = "Texto",
  qI = "Pegatina",
  JI = "Rect\xE1ngulo",
  QI = "Elipse",
  eC = "Tri\xE1ngulo",
  tC = "Li\xF1a",
  nC = "Rotar",
  oC = "Bloquear relaci\xF3n de aspecto",
  rC = "Desbloquear relaci\xF3n de aspecto",
  sC = "Agrupar",
  iC = "Desagrupar",
  aC = "Mover ao fondo",
  lC = "Mover atr\xE1s",
  dC = "Mover adiante",
  cC = "Mover ao fronte",
  pC = "Restablecer \xE1ngulo",
  uC = "Bloquear",
  hC = "Desbloquear",
  mC = "Ali\xF1ar / Distribu\xEDr",
  gC = "Mover \xE1 p\xE1xina",
  fC = "Voltear horizontalmente",
  SC = "Voltear verticalmente",
  bC = "Mover",
  TC = "Ao fronte",
  yC = "Adilante",
  xC = "Atr\xE1s",
  wC = "Fondo",
  kC = "Idioma",
  vC = "Saber m\xE1is",
  IC = "Posici\xF3n do dock",
  CC = "Abaixo",
  DC = "Esquerda",
  PC = "Dereita",
  MC = "Arriba",
  BC = "P\xE1xina",
  EC = "Atallos de teclado",
  RC = "Buscar",
  AC = "Cargando{dots}",
  LC = "Exportar fondo",
  HC = "Transparente",
  zC = "Auto",
  OC = "Claro",
  FC = "Escuro",
  jC = "Github",
  GC = "Twitter",
  VC = "Discord",
  $C = "Imaxe",
  NC = "Ali\xF1ar \xE1 esquerda",
  WC = "Ali\xF1ar ao centro horizontalmente",
  UC = "Ali\xF1ar \xE1 dereita",
  KC = "Ali\xF1ar arriba",
  _C = "Ali\xF1ar ao centro verticalmente",
  YC = "Ali\xF1ar abaixo",
  ZC = "Distribu\xEDr horizontalmente",
  XC = "Distribu\xEDr verticalmente",
  qC = "Estirar horizontalmente",
  JC = "Estirar verticalmente",
  QC = "Queres gardar o proxecto actual?",
  eD = "Queres gardar os cambios ao proxecto actual?",
  tD = "Cancelar",
  nD = "No",
  oD = "S\xED",
  rD = "Introduce o nome do arquivo",
  sD = "Proba o novo tldraw",
  iD = "Branco",
  aD = "Gris claro",
  lD = "Gris",
  dD = "Negro",
  cD = "Verde",
  pD = "Cian",
  uD = "Azul",
  hD = "Indigo",
  mD = "Violeta",
  gD = "Vermello",
  fD = "Laranxa",
  SD = "Amarelo",
  bD = "Cont\xEDnuo",
  TD = "Discont\xEDnuo",
  yD = "Punteado",
  xD = "Pequeno",
  wD = "Mediano",
  kD = "Grande",
  hl = {
    "style.menu.color": Gv,
    "style.menu.fill": Vv,
    "style.menu.dash": $v,
    "style.menu.size": Nv,
    "style.menu.keep.open": Wv,
    "style.menu.font": Uv,
    "style.menu.align": Kv,
    styles: _v,
    "zoom.in": Yv,
    "zoom.out": Zv,
    to: Xv,
    "menu.tools": qv,
    "menu.transform": Jv,
    "menu.file": Qv,
    "menu.edit": eI,
    "menu.view": tI,
    "menu.preferences": nI,
    "menu.sign.in": oI,
    "menu.sign.out": rI,
    "become.a.sponsor": sI,
    "zoom.to.content": iI,
    "zoom.to.selection": aI,
    "zoom.to.fit": lI,
    "zoom.to": dI,
    "preferences.dark.mode": cI,
    "preferences.focus.mode": pI,
    "preferences.debug.mode": uI,
    "preferences.show.grid": hI,
    "preferences.use.cad.selection": mI,
    "preferences.keep.stylemenu.open": gI,
    "preferences.always.show.snaps": fI,
    "preferences.rotate.handles": SI,
    "preferences.binding.handles": bI,
    "preferences.clone.handles": TI,
    undo: yI,
    redo: xI,
    cut: wI,
    copy: kI,
    paste: vI,
    "copy.as": II,
    "export.as": CI,
    "select.all": DI,
    "select.none": PI,
    delete: MI,
    "new.project": BI,
    open: EI,
    save: RI,
    "save.as": AI,
    "upload.media": LI,
    "create.page": HI,
    "new.page": zI,
    "page.name": OI,
    duplicate: FI,
    "shape.options": jI,
    shapes: GI,
    cancel: VI,
    "copy.invite.link": $I,
    "copy.readonly.link": NI,
    "create.multiplayer.project": WI,
    "copy.multiplayer.project": UI,
    select: KI,
    eraser: _I,
    draw: YI,
    arrow: ZI,
    text: XI,
    sticky: qI,
    rectangle: JI,
    ellipse: QI,
    triangle: eC,
    line: tC,
    rotate: nC,
    "lock.aspect.ratio": oC,
    "unlock.aspect.ratio": rC,
    group: sC,
    ungroup: iC,
    "move.to.back": aC,
    "move.backward": lC,
    "move.forward": dC,
    "move.to.front": cC,
    "reset.angle": pC,
    lock: uC,
    unlock: hC,
    "align.distribute": mC,
    "move.to.page": gC,
    "flip.horizontal": fC,
    "flip.vertical": SC,
    move: bC,
    "to.front": TC,
    forward: yC,
    backward: xC,
    back: wC,
    language: kC,
    "translation.link": vC,
    "dock.position": IC,
    bottom: CC,
    left: DC,
    right: PC,
    top: MC,
    page: BC,
    "keyboard.shortcuts": EC,
    search: RC,
    loading: AC,
    "export.background": LC,
    transparent: HC,
    auto: zC,
    light: OC,
    dark: FC,
    github: jC,
    twitter: GC,
    discord: VC,
    image: $C,
    "align.left": NC,
    "align.center.x": WC,
    "align.right": UC,
    "align.top": KC,
    "align.center.y": _C,
    "align.bottom": YC,
    "distribute.x": ZC,
    "distribute.y": XC,
    "stretch.x": qC,
    "stretch.y": JC,
    "dialog.save.firsttime": QC,
    "dialog.save.again": eD,
    "dialog.cancel": tD,
    "dialog.no": nD,
    "dialog.yes": oD,
    "enter.file.name": rD,
    "tldraw-beta": sD,
    white: iD,
    lightGray: aD,
    gray: lD,
    black: dD,
    green: cD,
    cyan: pD,
    blue: uD,
    indigo: hD,
    violet: mD,
    red: gD,
    orange: fD,
    yellow: SD,
    solid: bD,
    dashed: TD,
    dotted: yD,
    small: xD,
    medium: wD,
    large: kD,
  };
var vD = "\u05E6\u05D1\u05E2",
  ID = "\u05DE\u05DC\u05D0",
  CD = "\u05D2\u05D1\u05D5\u05DC",
  DD = "\u05D2\u05D5\u05D3\u05DC",
  PD = "\u05D4\u05E9\u05D0\u05E8 \u05E4\u05EA\u05D5\u05D7",
  MD = "\u05D2\u05D5\u05E4\u05DF",
  BD = "\u05D9\u05D9\u05E9\u05D5\u05E8",
  ED = "\u05E2\u05D9\u05E6\u05D5\u05D1",
  RD = "\u05D4\u05D2\u05D3\u05DC \u05EA\u05E6\u05D5\u05D2\u05D4",
  AD = "\u05D4\u05E7\u05D8\u05DF \u05EA\u05E6\u05D5\u05D2\u05D4",
  LD = "\u05DC",
  HD = "\u05E7\u05D5\u05D1\u05E5",
  zD = "\u05E2\u05E8\u05D9\u05DB\u05D4",
  OD = "\u05EA\u05E6\u05D5\u05D2\u05D4",
  FD = "\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD",
  jD = "\u05D4\u05D9\u05E8\u05E9\u05DD",
  GD = "\u05D4\u05EA\u05E0\u05EA\u05E7",
  VD = "\u05DE\u05EA\u05DF \u05D7\u05E1\u05D5\u05EA",
  $D = "\u05D6\u05D5\u05DD \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4",
  ND = "\u05D6\u05D5\u05DD \u05DC\u05D4\u05EA\u05D0\u05DE\u05D4",
  WD = "\u05D6\u05D5\u05DD \u05DC",
  UD = "\u05DE\u05E6\u05D1 \u05D7\u05E9\u05D5\u05DA",
  KD = "\u05DE\u05E6\u05D1 \u05E4\u05D5\u05E7\u05D5\u05E1",
  _D = "\u05DE\u05E6\u05D1 \u05D3\u05D9\u05D1\u05D0\u05D2",
  YD =
    "(\u05D2\u05E8\u05D9\u05D3)\u05D4\u05E8\u05D0\u05D4 \u05E8\u05E9\u05EA \u05E2\u05D9\u05DE\u05D5\u05D3",
  ZD = "\u05E1\u05D9\u05DE\u05D5\u05DF CAD",
  XD =
    "\u05D4\u05E9\u05D0\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E4\u05EA\u05D5\u05D7",
  qD =
    "\u05D4\u05E8\u05D0\u05D4 \u05E7\u05D5\u05D5\u05D9 \u05DE\u05EA\u05D0\u05E8",
  JD =
    "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E1\u05D9\u05D1\u05D5\u05D1",
  QD =
    "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E7\u05E9\u05D9\u05E8\u05D4",
  eP =
    "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E9\u05D9\u05DB\u05E4\u05D5\u05DC",
  tP = "\u05D1\u05D8\u05DC",
  nP = "\u05E2\u05E9\u05D4 \u05DE\u05D7\u05D3\u05E9",
  oP = "\u05D2\u05D6\u05D5\u05E8",
  rP = "\u05D4\u05E2\u05EA\u05E7",
  sP = "\u05D4\u05D3\u05D1\u05E7",
  iP = "\u05D4\u05E2\u05EA\u05E7 \u05DB",
  aP = "\u05D9\u05D9\u05E6\u05D0 \u05DB",
  lP = "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC",
  dP = "\u05D1\u05D8\u05DC \u05D1\u05D7\u05D9\u05E8\u05D4",
  cP = "\u05DE\u05D7\u05E7",
  pP = "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E9",
  uP = "\u05E4\u05EA\u05D7",
  hP = "\u05E9\u05DE\u05D5\u05E8",
  mP = "\u05E9\u05DE\u05D5\u05E8 \u05DB",
  gP = "\u05D4\u05E2\u05DC\u05D0\u05EA \u05DE\u05D3\u05D9\u05D4",
  fP = "\u05E6\u05D5\u05E8 \u05D3\u05E3",
  SP = "\u05D3\u05E3 \u05D7\u05D3\u05E9",
  bP = "\u05E9\u05DD \u05D4\u05D3\u05E3",
  TP = "\u05E9\u05DB\u05E4\u05DC",
  yP = "\u05D1\u05D8\u05DC",
  xP =
    "\u05D4\u05E2\u05EA\u05E7 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4",
  wP =
    "\u05E6\u05D5\u05E8 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D1 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  kP =
    "\u05D4\u05E2\u05EA\u05E7 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D1 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  vP = "\u05E1\u05DE\u05DF",
  IP = "\u05DE\u05D7\u05E7",
  CP = "\u05E6\u05D9\u05D9\u05E8",
  DP = "\u05D7\u05E5",
  PP = "\u05D8\u05E7\u05E1\u05D8",
  MP = "\u05D3\u05D1\u05D9\u05E7\u05D9",
  BP = "\u05DE\u05E8\u05D5\u05D1\u05E2",
  EP = "\u05D0\u05DC\u05D9\u05E4\u05E1\u05D4",
  RP = "\u05DE\u05E9\u05D5\u05DC\u05E9",
  AP = "\u05E7\u05D5",
  LP = "\u05E1\u05D5\u05D1\u05D1",
  HP =
    "\u05E0\u05E2\u05DC \u05D9\u05D7\u05E1 \u05E8\u05D5\u05D7\u05D1-\u05D2\u05D5\u05D1\u05D4",
  zP =
    "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05EA \u05D9\u05D7\u05E1 \u05E8\u05D5\u05D7\u05D1-\u05D2\u05D5\u05D1\u05D4",
  OP = "\u05E7\u05D1\u05E5",
  FP = "\u05D1\u05D8\u05DC \u05E7\u05D9\u05D1\u05D5\u05E5",
  jP = "\u05D4\u05D1\u05D0 \u05DC\u05EA\u05D7\u05EA\u05D9\u05EA",
  GP = "\u05D4\u05D6\u05D6 \u05D0\u05D7\u05D5\u05E8\u05D4",
  VP = "\u05D4\u05D6\u05D6 \u05E7\u05D3\u05D9\u05DE\u05D4",
  $P = "\u05D4\u05D1\u05D0 \u05DC\u05D7\u05D6\u05D9\u05EA",
  NP = "\u05D0\u05E4\u05E1 \u05D6\u05D5\u05D5\u05D9\u05EA",
  WP = "\u05E0\u05E2\u05DC",
  UP = "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05D4",
  KP = "\u05D4\u05D6\u05D6 \u05DC\u05D3\u05E3",
  _P = "\u05D4\u05E4\u05D5\u05DA \u05D0\u05D5\u05E4\u05E7\u05D9\u05EA",
  YP = "\u05D4\u05E4\u05D5\u05DA \u05D0\u05E0\u05DB\u05D9\u05EA",
  ZP = "\u05D4\u05D6\u05D6",
  XP = "\u05D4\u05D1\u05D0 \u05DC\u05E7\u05D3\u05D9\u05DE\u05D4",
  qP = "\u05E7\u05D3\u05D9\u05DE\u05D4",
  JP = "\u05D0\u05D7\u05D5\u05E8\u05D4",
  QP = "\u05D1\u05D7\u05D6\u05E8\u05D4",
  eM = "\u05E9\u05E4\u05D4",
  ml = {
    "style.menu.color": vD,
    "style.menu.fill": ID,
    "style.menu.dash": CD,
    "style.menu.size": DD,
    "style.menu.keep.open": PD,
    "style.menu.font": MD,
    "style.menu.align": BD,
    styles: ED,
    "zoom.in": RD,
    "zoom.out": AD,
    to: LD,
    "menu.file": HD,
    "menu.edit": zD,
    "menu.view": OD,
    "menu.preferences": FD,
    "menu.sign.in": jD,
    "menu.sign.out": GD,
    "become.a.sponsor": VD,
    "zoom.to.selection": $D,
    "zoom.to.fit": ND,
    "zoom.to": WD,
    "preferences.dark.mode": UD,
    "preferences.focus.mode": KD,
    "preferences.debug.mode": _D,
    "preferences.show.grid": YD,
    "preferences.use.cad.selection": ZD,
    "preferences.keep.stylemenu.open": XD,
    "preferences.always.show.snaps": qD,
    "preferences.rotate.handles": JD,
    "preferences.binding.handles": QD,
    "preferences.clone.handles": eP,
    undo: tP,
    redo: nP,
    cut: oP,
    copy: rP,
    paste: sP,
    "copy.as": iP,
    "export.as": aP,
    "select.all": lP,
    "select.none": dP,
    delete: cP,
    "new.project": pP,
    open: uP,
    save: hP,
    "save.as": mP,
    "upload.media": gP,
    "create.page": fP,
    "new.page": SP,
    "page.name": bP,
    duplicate: TP,
    cancel: yP,
    "copy.invite.link": xP,
    "create.multiplayer.project": wP,
    "copy.multiplayer.project": kP,
    select: vP,
    eraser: IP,
    draw: CP,
    arrow: DP,
    text: PP,
    sticky: MP,
    rectangle: BP,
    ellipse: EP,
    triangle: RP,
    line: AP,
    rotate: LP,
    "lock.aspect.ratio": HP,
    "unlock.aspect.ratio": zP,
    group: OP,
    ungroup: FP,
    "move.to.back": jP,
    "move.backward": GP,
    "move.forward": VP,
    "move.to.front": $P,
    "reset.angle": NP,
    lock: WP,
    unlock: UP,
    "move.to.page": KP,
    "flip.horizontal": _P,
    "flip.vertical": YP,
    move: ZP,
    "to.front": XP,
    forward: qP,
    backward: JP,
    back: QP,
    language: eM,
  };
var tM = "Colore",
  nM = "Riempi",
  oM = "Tratteggo",
  rM = "Dimensione",
  sM = "Mantieni aperto",
  iM = "Font",
  aM = "Allineamento",
  lM = "Stile",
  dM = "Ingrandisci",
  cM = "Rimpicciolisci",
  pM = "Imposta",
  uM = "File",
  hM = "Modifica",
  mM = "Visualizzazione",
  gM = "Preferenze",
  fM = "Accedi",
  SM = "Esci",
  bM = "Sponsorizza",
  TM = "Adatta alla selezione",
  yM = "Adatta",
  xM = "Ingrandisci",
  wM = "Modalit\xE0 scura",
  kM = "Modalit\xE0 zen",
  vM = "Modalit\xE0 sviluppatore",
  IM = "Mostra griglia",
  CM = "Selezione CAD",
  DM = "Mantieni menu stile aperto",
  PM = "Mostra sempre le guide",
  MM = "Controlli d'inclinazione",
  BM = "Controlli d'associazione",
  EM = "Controlli di clonazione",
  RM = "Annulla",
  AM = "Ripristina",
  LM = "Taglia",
  HM = "Copia",
  zM = "Incolla",
  OM = "Copia come",
  FM = "Esporta come",
  jM = "Seleziona tutto",
  GM = "Deseleziona tutto",
  VM = "Elimina",
  $M = "Nuovo progetto",
  NM = "Apri",
  WM = "Salva",
  UM = "Salva come",
  KM = "Carica contenuti multimediali",
  _M = "Crea nuova pagina",
  YM = "Nuova pagina",
  ZM = "Nome pagina",
  XM = "Pagina",
  qM = "Duplica",
  JM = "Chiudi",
  QM = "Copia link invito",
  eB = "Crea progetto multiplayer",
  tB = "Trasforma in progetto multiplayer",
  nB = "Seleziona",
  oB = "Gomma",
  rB = "Matita",
  sB = "Freccia",
  iB = "Casella di testo",
  aB = "Post-it",
  lB = "Rettangolo",
  dB = "Ellisse",
  cB = "Triangolo",
  pB = "Linea",
  uB = "Ruota",
  hB = "Blocca rapporto lati",
  mB = "Sblocca rapporto lati",
  gB = "Raggruppa",
  fB = "Separa",
  SB = "Muovi in fondo",
  bB = "Sposta indietro",
  TB = "Sposta avanti",
  yB = "Muovi in fronte",
  xB = "Reimposta angolo",
  wB = "Blocca",
  kB = "Sblocca",
  vB = "Trasferisci a pagina",
  IB = "Ribalta orizzontalmente",
  CB = "Ribalta verticalmente",
  DB = "Sposta",
  PB = "In primo piano",
  MB = "Sposta avanti",
  BB = "Sposta indietro",
  EB = "In fondo",
  RB = "Lingua",
  AB = "Posizione dock",
  LB = "In basso",
  HB = "Sinistra",
  zB = "Destra",
  OB = "In Alto",
  gl = {
    "style.menu.color": tM,
    "style.menu.fill": nM,
    "style.menu.dash": oM,
    "style.menu.size": rM,
    "style.menu.keep.open": sM,
    "style.menu.font": iM,
    "style.menu.align": aM,
    styles: lM,
    "zoom.in": dM,
    "zoom.out": cM,
    to: pM,
    "menu.file": uM,
    "menu.edit": hM,
    "menu.view": mM,
    "menu.preferences": gM,
    "menu.sign.in": fM,
    "menu.sign.out": SM,
    "become.a.sponsor": bM,
    "zoom.to.selection": TM,
    "zoom.to.fit": yM,
    "zoom.to": xM,
    "preferences.dark.mode": wM,
    "preferences.focus.mode": kM,
    "preferences.debug.mode": vM,
    "preferences.show.grid": IM,
    "preferences.use.cad.selection": CM,
    "preferences.keep.stylemenu.open": DM,
    "preferences.always.show.snaps": PM,
    "preferences.rotate.handles": MM,
    "preferences.binding.handles": BM,
    "preferences.clone.handles": EM,
    undo: RM,
    redo: AM,
    cut: LM,
    copy: HM,
    paste: zM,
    "copy.as": OM,
    "export.as": FM,
    "select.all": jM,
    "select.none": GM,
    delete: VM,
    "new.project": $M,
    open: NM,
    save: WM,
    "save.as": UM,
    "upload.media": KM,
    "create.page": _M,
    "new.page": YM,
    "page.name": ZM,
    page: XM,
    duplicate: qM,
    cancel: JM,
    "copy.invite.link": QM,
    "create.multiplayer.project": eB,
    "copy.multiplayer.project": tB,
    select: nB,
    eraser: oB,
    draw: rB,
    arrow: sB,
    text: iB,
    sticky: aB,
    rectangle: lB,
    ellipse: dB,
    triangle: cB,
    line: pB,
    rotate: uB,
    "lock.aspect.ratio": hB,
    "unlock.aspect.ratio": mB,
    group: gB,
    ungroup: fB,
    "move.to.back": SB,
    "move.backward": bB,
    "move.forward": TB,
    "move.to.front": yB,
    "reset.angle": xB,
    lock: wB,
    unlock: kB,
    "move.to.page": vB,
    "flip.horizontal": IB,
    "flip.vertical": CB,
    move: DB,
    "to.front": PB,
    forward: MB,
    backward: BB,
    back: EB,
    language: RB,
    "dock.position": AB,
    bottom: LB,
    left: HB,
    right: zB,
    top: OB,
  };
var FB = "\u8272",
  jB = "\u5857\u308A\u3064\u3076\u3057",
  GB = "\u7DDA",
  VB = "\u592A\u3055/\u30B5\u30A4\u30BA",
  $B = "\u5E38\u306B\u8868\u793A",
  NB = "\u30D5\u30A9\u30F3\u30C8",
  WB = "\u914D\u7F6E",
  UB = "\u30B9\u30BF\u30A4\u30EB",
  KB = "\u62E1\u5927",
  _B = "\u7E2E\u5C0F",
  YB = " ",
  ZB = "\u30D5\u30A1\u30A4\u30EB",
  XB = "\u7DE8\u96C6",
  qB = "\u8868\u793A",
  JB = "\u8A2D\u5B9A",
  QB = "\u30B5\u30A4\u30F3\u30A4\u30F3",
  eE = "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
  tE = "\u652F\u63F4\u3059\u308B",
  nE =
    "\u9078\u629E\u3057\u305F\u30A2\u30A4\u30C6\u30E0\u306B\u5408\u308F\u305B\u3066\u62E1\u5927",
  oE = "\u62E1\u5927\u3057\u3066\u3059\u3079\u3066\u3092\u8868\u793A",
  rE = "\u62E1\u5927\u7387",
  sE = "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9",
  iE = "\u30D5\u30A9\u30FC\u30AB\u30B9\u30E2\u30FC\u30C9",
  aE = "\u30C7\u30D0\u30C3\u30B0\u30E2\u30FC\u30C9",
  lE = "\u30B0\u30EA\u30C3\u30C9\u3092\u8868\u793A",
  dE = "CAD\u306E\u9078\u629E\u6CD5\u3092\u4F7F\u7528",
  cE =
    "\u30B9\u30BF\u30A4\u30EB\u30E1\u30CB\u30E5\u30FC\u3092\u5E38\u306B\u8868\u793A",
  pE = "\u30B9\u30CA\u30C3\u30D7\u3092\u5E38\u306B\u8868\u793A",
  uE = "\u56DE\u8EE2\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  hE = "\u7D50\u5408\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  mE = "\u30AF\u30ED\u30FC\u30F3\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  gE = "\u5143\u306B\u623B\u3059",
  fE = "\u3084\u308A\u76F4\u3057",
  SE = "\u5207\u308A\u53D6\u308A",
  bE = "\u30B3\u30D4\u30FC",
  TE = "\u8CBC\u308A\u4ED8\u3051",
  yE = "\u5F62\u5F0F\u3092\u9078\u629E\u3057\u3066\u30B3\u30D4\u30FC",
  xE =
    "\u5F62\u5F0F\u3092\u9078\u629E\u3057\u3066\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  wE = "\u3059\u3079\u3066\u9078\u629E",
  kE = "\u9078\u629E\u3092\u89E3\u9664",
  vE = "\u524A\u9664",
  IE = "\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  CE = "\u958B\u304F",
  DE = "\u4FDD\u5B58",
  PE = "\u540D\u524D\u3092\u3064\u3051\u3066\u4FDD\u5B58",
  ME = "\u30E1\u30C7\u30A3\u30A2\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  BE = "\u30DA\u30FC\u30B8\u3092\u4F5C\u6210",
  EE = "\u65B0\u898F\u30DA\u30FC\u30B8",
  RE = "\u30DA\u30FC\u30B8\u540D",
  AE = "\u8907\u88FD",
  LE = "\u30AD\u30E3\u30F3\u30BB\u30EB",
  HE =
    "\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC",
  zE =
    "\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u30E4\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210",
  OE =
    "\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u30E4\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30B3\u30D4\u30FC",
  FE = "\u9078\u629E",
  jE = "\u6D88\u3057\u30B4\u30E0",
  GE = "\u63CF\u753B",
  VE = "\u77E2\u5370",
  $E = "\u30C6\u30AD\u30B9\u30C8",
  NE = "\u3075\u305B\u3093",
  WE = "\u9577\u65B9\u5F62",
  UE = "\u6955\u5186\u5F62",
  KE = "\u4E09\u89D2\u5F62",
  _E = "\u7DDA",
  YE = "\u56DE\u8EE2",
  ZE = "\u7E26\u6A2A\u6BD4\u3092\u56FA\u5B9A",
  XE = "\u7E26\u6A2A\u6BD4\u306E\u56FA\u5B9A\u3092\u89E3\u9664",
  qE = "\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0",
  JE = "\u30B0\u30EB\u30FC\u30D7\u89E3\u9664",
  QE = "\u6700\u80CC\u9762\u306B\u79FB\u52D5",
  e2 = "\u3072\u3068\u3064\u5F8C\u308D\u306B\u79FB\u52D5",
  t2 = "\u3072\u3068\u3064\u524D\u306B\u79FB\u52D5",
  n2 = "\u6700\u524D\u9762\u306B\u79FB\u52D5",
  o2 = "\u89D2\u5EA6\u3092\u521D\u671F\u5316",
  r2 = "\u30ED\u30C3\u30AF",
  s2 = "\u30A2\u30F3\u30ED\u30C3\u30AF",
  i2 = "\u30DA\u30FC\u30B8\u3078\u79FB\u52D5",
  a2 = "\u6C34\u5E73\u65B9\u5411\u306B\u53CD\u8EE2",
  l2 = "\u5782\u76F4\u65B9\u5411\u306B\u53CD\u8EE2",
  d2 = "\u79FB\u52D5",
  c2 = "\u6700\u524D\u9762\u3078",
  p2 = "\u3072\u3068\u3064\u524D\u3078",
  u2 = "\u3072\u3068\u3064\u5F8C\u308D\u3078",
  h2 = "\u6700\u80CC\u9762\u3078",
  m2 = "\u8A00\u8A9E",
  fl = {
    "style.menu.color": FB,
    "style.menu.fill": jB,
    "style.menu.dash": GB,
    "style.menu.size": VB,
    "style.menu.keep.open": $B,
    "style.menu.font": NB,
    "style.menu.align": WB,
    styles: UB,
    "zoom.in": KB,
    "zoom.out": _B,
    to: YB,
    "menu.file": ZB,
    "menu.edit": XB,
    "menu.view": qB,
    "menu.preferences": JB,
    "menu.sign.in": QB,
    "menu.sign.out": eE,
    "become.a.sponsor": tE,
    "zoom.to.selection": nE,
    "zoom.to.fit": oE,
    "zoom.to": rE,
    "preferences.dark.mode": sE,
    "preferences.focus.mode": iE,
    "preferences.debug.mode": aE,
    "preferences.show.grid": lE,
    "preferences.use.cad.selection": dE,
    "preferences.keep.stylemenu.open": cE,
    "preferences.always.show.snaps": pE,
    "preferences.rotate.handles": uE,
    "preferences.binding.handles": hE,
    "preferences.clone.handles": mE,
    undo: gE,
    redo: fE,
    cut: SE,
    copy: bE,
    paste: TE,
    "copy.as": yE,
    "export.as": xE,
    "select.all": wE,
    "select.none": kE,
    delete: vE,
    "new.project": IE,
    open: CE,
    save: DE,
    "save.as": PE,
    "upload.media": ME,
    "create.page": BE,
    "new.page": EE,
    "page.name": RE,
    duplicate: AE,
    cancel: LE,
    "copy.invite.link": HE,
    "create.multiplayer.project": zE,
    "copy.multiplayer.project": OE,
    select: FE,
    eraser: jE,
    draw: GE,
    arrow: VE,
    text: $E,
    sticky: NE,
    rectangle: WE,
    ellipse: UE,
    triangle: KE,
    line: _E,
    rotate: YE,
    "lock.aspect.ratio": ZE,
    "unlock.aspect.ratio": XE,
    group: qE,
    ungroup: JE,
    "move.to.back": QE,
    "move.backward": e2,
    "move.forward": t2,
    "move.to.front": n2,
    "reset.angle": o2,
    lock: r2,
    unlock: s2,
    "move.to.page": i2,
    "flip.horizontal": a2,
    "flip.vertical": l2,
    move: d2,
    "to.front": c2,
    forward: p2,
    backward: u2,
    back: h2,
    language: m2,
  };
var g2 = "\uC0C9\uAE54",
  f2 = "\uCC44\uC6B0\uAE30",
  S2 = "\uD14C\uB450\uB9AC",
  b2 = "\uD06C\uAE30",
  T2 = "\uD56D\uC0C1 \uC5F4\uAE30",
  y2 = "\uAE00\uAF34",
  x2 = "\uC815\uB82C",
  w2 = "\uC2A4\uD0C0\uC77C",
  k2 = "\uD655\uB300",
  v2 = "\uCD95\uC18C",
  I2 = "To",
  C2 = "\uB3C4\uAD6C",
  D2 = "\uBCC0\uD658",
  P2 = "\uD30C\uC77C",
  M2 = "\uD3B8\uC9D1",
  B2 = "\uBCF4\uAE30",
  E2 = "\uC124\uC815",
  R2 = "\uB85C\uADF8\uC778",
  A2 = "\uB85C\uADF8\uC544\uC6C3",
  L2 = "\uD6C4\uC6D0\uC790 \uB418\uAE30",
  H2 = "\uCEE8\uD150\uCE20\uB85C \uB3CC\uC544\uAC00\uAE30",
  z2 = "\uC120\uD0DD \uC694\uC18C\uC5D0 \uB9DE\uCD94\uAE30",
  O2 = "\uC804\uCCB4\uC5D0 \uB9DE\uCD94\uAE30",
  F2 = "\uB9DE\uCD94\uAE30",
  j2 = "\uB2E4\uD06C \uBAA8\uB4DC",
  G2 = "\uC9D1\uC911 \uBAA8\uB4DC",
  V2 = "\uB514\uBC84\uADF8 \uBAA8\uB4DC",
  $2 = "\uACA9\uC790 \uBCF4\uAE30",
  N2 = "CAD \uC120\uD0DD \uC0AC\uC6A9",
  W2 = "\uC2A4\uD0C0\uC77C \uBA54\uB274 \uD56D\uC0C1 \uC5F4\uAE30",
  U2 = "Snap \uD56D\uC0C1 \uC5F4\uAE30",
  K2 = "\uD68C\uC804 \uBCF4\uC774\uAE30",
  _2 = "\uBC14\uC778\uB529 \uBCF4\uC774\uAE30",
  Y2 = "\uBCF5\uC81C \uBCF4\uC774\uAE30",
  Z2 = "\uC2E4\uD589\uCDE8\uC18C",
  X2 = "\uC7AC\uC2E4\uD589",
  q2 = "\uC790\uB974\uAE30",
  J2 = "\uBCF5\uC0AC",
  Q2 = "\uBD99\uC5EC\uB123\uAE30",
  eR = "\uC774\uBBF8\uC9C0\uB85C \uBCF5\uC0AC",
  tR = "\uB0B4\uBCF4\uB0B4\uAE30",
  nR = "\uC804\uCCB4 \uC120\uD0DD",
  oR = "\uC120\uD0DD \uD574\uC81C",
  rR = "\uC0AD\uC81C",
  sR = "\uC0C8 \uD504\uB85C\uC81D\uD2B8",
  iR = "\uC5F4\uAE30",
  aR = "\uC800\uC7A5",
  lR = "\uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uC800\uC7A5",
  dR = "\uBBF8\uB514\uC5B4 \uC5C5\uB85C\uB4DC",
  cR = "\uC0C8 \uD398\uC774\uC9C0 \uC0DD\uC131",
  pR = "\uC0C8 \uD398\uC774\uC9C0",
  uR = "\uD398\uC774\uC9C0 \uC774\uB984",
  hR = "\uBCF5\uC81C",
  mR = "\uCDE8\uC18C",
  gR = "\uCD08\uB300 \uB9C1\uD06C \uBCF5\uC0AC",
  fR = "\uC77D\uAE30 \uC804\uC6A9 \uB9C1\uD06C \uBCF5\uC0AC",
  SR = "\uC2E4\uC2DC\uAC04 \uD611\uC5C5 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131",
  bR =
    "\uC2E4\uC2DC\uAC04 \uD611\uC5C5 \uD504\uB85C\uC81D\uD2B8\uB85C \uBCF5\uC81C",
  TR = "\uC120\uD0DD",
  yR = "\uC9C0\uC6B0\uAC1C",
  xR = "\uD39C",
  wR = "\uD654\uC0B4\uD45C",
  kR = "\uD14D\uC2A4\uD2B8",
  vR = "\uC2A4\uD2F0\uD0A4\uB178\uD2B8",
  IR = "\uC0AC\uAC01\uD615",
  CR = "\uC6D0",
  DR = "\uC0BC\uAC01\uD615",
  PR = "\uC120",
  MR = "\uD68C\uC804",
  BR = "\uBE44\uC728 \uC7A0\uAE08",
  ER = "\uBE44\uC728 \uC7A0\uAE08 \uD574\uC81C",
  RR = "\uADF8\uB8F9\uD654",
  AR = "\uADF8\uB8F9\uD654 \uD574\uC81C",
  LR = "\uB9E8 \uB4A4\uB85C \uBCF4\uB0B4\uAE30",
  HR = "\uB4A4\uB85C \uBCF4\uB0B4\uAE30",
  zR = "\uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  OR = "\uB9E8 \uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  FR = "\uD68C\uC804 \uCD08\uAE30\uD654",
  jR = "\uC7A0\uAE08",
  GR = "\uC7A0\uAE08 \uD574\uC81C",
  VR = "\uC815\uB82C / \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  $R = "\uD398\uC774\uC9C0\uB85C \uC774\uB3D9",
  NR = "\uC88C\uC6B0 \uB300\uCE6D",
  WR = "\uC0C1\uD558 \uB300\uCE6D",
  UR = "\uC21C\uC11C",
  KR = "\uB9E8 \uC55E\uC73C\uB85C",
  _R = "\uC55E\uC73C\uB85C",
  YR = "\uB4A4\uB85C",
  ZR = "\uB9E8 \uB4A4\uB85C",
  XR = "\uC5B8\uC5B4",
  qR = "\uB354 \uC54C\uC544\uBCF4\uAE30",
  JR = "\uB3C5 \uC704\uCE58",
  QR = "\uD558\uB2E8",
  eA = "\uC67C\uCABD",
  tA = "\uC624\uB978\uCABD",
  nA = "\uC0C1\uB2E8",
  oA = "\uD398\uC774\uC9C0",
  rA = "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4",
  sA = "\uAC80\uC0C9",
  iA = "\uB85C\uB529{dots}",
  aA = "\uBC30\uACBD \uB0B4\uBCF4\uB0B4\uAE30",
  lA = "\uD22C\uBA85",
  dA = "\uC790\uB3D9",
  cA = "\uB77C\uC774\uD2B8",
  pA = "\uB2E4\uD06C",
  uA = "Github",
  hA = "Twitter",
  mA = "Discord",
  gA = "\uC774\uBBF8\uC9C0",
  fA = "\uC67C\uCABD \uC815\uB82C",
  SA = "\uC218\uD3C9 \uC911\uC559 \uC815\uB82C",
  bA = "\uC624\uB978\uCABD \uC815\uB82C",
  TA = "\uC0C1\uB2E8 \uC815\uB82C",
  yA = "\uC218\uC9C1 \uC911\uC559 \uC815\uB82C",
  xA = "\uD558\uB2E8 \uC815\uB82C",
  wA = "\uAC00\uB85C \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  kA = "\uC138\uB85C \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  vA = "\uC218\uD3C9\uC73C\uB85C \uB298\uB9AC\uAE30",
  IA = "\uC218\uC9C1\uC73C\uB85C \uB298\uB9AC\uAE30",
  CA =
    "\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  DA =
    "\uBCC0\uACBD\uC0AC\uD56D\uC744 \uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  PA = "\uCDE8\uC18C",
  MA = "\uC544\uB2C8\uC624",
  BA = "\uB124",
  EA = "\uD30C\uC77C \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
  RA = "\uC0C8\uB85C\uC6B4 tldraw\uB97C \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694",
  Sl = {
    "style.menu.color": g2,
    "style.menu.fill": f2,
    "style.menu.dash": S2,
    "style.menu.size": b2,
    "style.menu.keep.open": T2,
    "style.menu.font": y2,
    "style.menu.align": x2,
    styles: w2,
    "zoom.in": k2,
    "zoom.out": v2,
    to: I2,
    "menu.tools": C2,
    "menu.transform": D2,
    "menu.file": P2,
    "menu.edit": M2,
    "menu.view": B2,
    "menu.preferences": E2,
    "menu.sign.in": R2,
    "menu.sign.out": A2,
    "become.a.sponsor": L2,
    "zoom.to.content": H2,
    "zoom.to.selection": z2,
    "zoom.to.fit": O2,
    "zoom.to": F2,
    "preferences.dark.mode": j2,
    "preferences.focus.mode": G2,
    "preferences.debug.mode": V2,
    "preferences.show.grid": $2,
    "preferences.use.cad.selection": N2,
    "preferences.keep.stylemenu.open": W2,
    "preferences.always.show.snaps": U2,
    "preferences.rotate.handles": K2,
    "preferences.binding.handles": _2,
    "preferences.clone.handles": Y2,
    undo: Z2,
    redo: X2,
    cut: q2,
    copy: J2,
    paste: Q2,
    "copy.as": eR,
    "export.as": tR,
    "select.all": nR,
    "select.none": oR,
    delete: rR,
    "new.project": sR,
    open: iR,
    save: aR,
    "save.as": lR,
    "upload.media": dR,
    "create.page": cR,
    "new.page": pR,
    "page.name": uR,
    duplicate: hR,
    cancel: mR,
    "copy.invite.link": gR,
    "copy.readonly.link": fR,
    "create.multiplayer.project": SR,
    "copy.multiplayer.project": bR,
    select: TR,
    eraser: yR,
    draw: xR,
    arrow: wR,
    text: kR,
    sticky: vR,
    rectangle: IR,
    ellipse: CR,
    triangle: DR,
    line: PR,
    rotate: MR,
    "lock.aspect.ratio": BR,
    "unlock.aspect.ratio": ER,
    group: RR,
    ungroup: AR,
    "move.to.back": LR,
    "move.backward": HR,
    "move.forward": zR,
    "move.to.front": OR,
    "reset.angle": FR,
    lock: jR,
    unlock: GR,
    "align.distribute": VR,
    "move.to.page": $R,
    "flip.horizontal": NR,
    "flip.vertical": WR,
    move: UR,
    "to.front": KR,
    forward: _R,
    backward: YR,
    back: ZR,
    language: XR,
    "translation.link": qR,
    "dock.position": JR,
    bottom: QR,
    left: eA,
    right: tA,
    top: nA,
    page: oA,
    "keyboard.shortcuts": rA,
    search: sA,
    loading: iA,
    "export.background": aA,
    transparent: lA,
    auto: dA,
    light: cA,
    dark: pA,
    github: uA,
    twitter: hA,
    discord: mA,
    image: gA,
    "align.left": fA,
    "align.center.x": SA,
    "align.right": bA,
    "align.top": TA,
    "align.center.y": yA,
    "align.bottom": xA,
    "distribute.x": wA,
    "distribute.y": kA,
    "stretch.x": vA,
    "stretch.y": IA,
    "dialog.save.firsttime": CA,
    "dialog.save.again": DA,
    "dialog.cancel": PA,
    "dialog.no": MA,
    "dialog.yes": BA,
    "enter.file.name": EA,
    "tldraw-beta": RA,
  };
var AA = "\u0631\u06D5\u0646\u06AF",
  LA = "\u067E\u0695\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  HA = "\u0644\u06D5\u062A \u0644\u06D5\u062A",
  zA = "\u0642\u06D5\u0628\u0627\u0631\u06D5",
  OA =
    "\u0628\u06D5 \u06A9\u0631\u0627\u0648\u06D5\u06CC\u06CC \u0628\u0645\u06CE\u0646\u06D5\u0631\u06D5\u0648\u06D5",
  FA = "\u0647\u06CE\u06B5",
  jA = "\u0695\u06CE\u06A9\u062E\u0633\u062A\u0646",
  GA = "\u0646\u06D5\u062E\u0634\u06D5\u06A9\u0627\u0646",
  VA =
    "\u0647\u06CE\u0646\u0627\u0646\u06D5 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  $A = "\u062F\u0648\u0648\u0631 \u062E\u0633\u062A\u0646\u06D5\u0648\u06D5",
  NA = "\u0628\u06C6",
  WA = "\u0626\u0627\u0645\u0631\u0627\u0632\u06D5\u06A9\u0627\u0646",
  UA = "\u06AF\u06C6\u0695\u06CC\u0646",
  KA = "\u0641\u0627\u06CC\u0644\u06CE\u06A9",
  _A = "\u062F\u06D5\u0633\u062A\u06A9\u0627\u0631\u06CC",
  YA = "\u062F\u06CC\u0645\u06D5\u0646",
  ZA = "\u062E\u0648\u0627\u0633\u062A",
  XA =
    "\u0686\u0648\u0648\u0646\u06D5 \u0698\u0648\u0648\u0631\u06D5\u0648\u06D5",
  qA = "\u062F\u06D5\u0631\u0686\u0648\u0648\u0646",
  JA = "\u0633\u067E\u06C6\u0646\u0633\u06D5\u0631 \u0628\u06D5",
  QA =
    "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0646\u0627\u0648\u06D5\u0695\u06C6\u06A9",
  eL =
    "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u0646",
  tL =
    "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0626\u06D5\u0648\u06D5\u06CC \u0644\u06D5\u06AF\u06D5\u06B5\u06CC\u062F\u0627 \u0628\u06AF\u0648\u0646\u062C\u06CE\u062A",
  nL = "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6",
  oL = "\u062F\u06C6\u062E\u06CC \u062A\u0627\u0631\u06CC\u06A9",
  rL = "\u062F\u06C6\u062E\u06CC \u0641\u06C6\u06A9\u06D5\u0633",
  sL =
    "\u0645\u06C6\u062F\u06CC \u0647\u06D5\u06B5\u06D5\u062F\u06C6\u0632\u06CC\u0646",
  iL =
    "\u062A\u06C6\u0695\u06CC \u067E\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5",
  aL =
    "\u0628\u06D5\u06A9\u0627\u0631\u0628\u0647\u06CE\u0646\u06D5 CAD \u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u0646\u06CC",
  lL =
    "\u0645\u06CE\u0646\u06C6\u06CC \u0633\u062A\u0627\u06CC\u0644 \u0628\u06D5 \u06A9\u0631\u0627\u0648\u06D5\u06CC\u06CC \u0628\u0647\u06CE\u06B5\u06D5\u0631\u06D5\u0648\u06D5",
  dL =
    "\u0647\u06D5\u0645\u06CC\u0634\u06D5 \u0648\u06CE\u0646\u06D5\u06CC \u062E\u06CE\u0631\u0627 \u067E\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5",
  cL =
    "\u0633\u0648\u0631\u0627\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  pL =
    "\u0628\u06D5\u0633\u062A\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  uL =
    "\u06A9\u0644\u06C6\u0646 \u06A9\u0631\u062F\u0646\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  hL = "\u067E\u0627\u0634\u06D5\u06A9\u0634\u06D5 \u0628\u06A9\u06D5",
  mL =
    "\u062F\u0648\u0648\u0628\u0627\u0631\u06D5 \u0628\u06CC\u06A9\u06D5\u0631\u06D5\u0648\u06D5",
  gL = "\u0628\u0695\u06CC\u0646",
  fL = "\u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  SL = "\u067E\u06D5\u06CC\u0633\u062A \u0628\u06A9\u06D5",
  bL = "\u06A9\u06C6\u067E\u06CC \u0648\u06D5\u06A9",
  TL =
    "\u0647\u06D5\u0646\u0627\u0631\u062F\u06D5\u06A9\u0631\u062F\u0646 \u0648\u06D5\u06A9",
  yL =
    "\u0647\u06D5\u0645\u0648\u0648\u06CC\u0627\u0646 \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u0647",
  xL =
    "\u0647\u06CC\u0686 \u0647\u0647\u200C\u06B5\u0645\u0647\u200C\u0628\u0698\u06CE\u0631\u0647\u200C",
  wL = "\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5",
  kL = "\u067E\u0695\u06C6\u0698\u06D5\u06CC \u0646\u0648\u06CE",
  vL = "\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  IL = "\u0647\u06D5\u06B5\u06AF\u0631\u062A\u0646",
  CL = "\u0647\u06D5\u06B5\u06AF\u0631\u062A\u0646 \u0648\u06D5\u06A9",
  DL =
    "\u062F\u0627\u06AF\u0631\u062A\u0646\u06CC \u0645\u06CC\u062F\u06CC\u0627",
  PL =
    "\u062F\u0631\u0648\u0633\u062A\u06A9\u0631\u062F\u0646\u06CC \u0644\u0627\u067E\u06D5\u0695\u06D5",
  ML = "\u0644\u0627\u067E\u06D5\u0695\u06D5\u06CC \u0646\u0648\u06CE",
  BL = "\u0646\u0627\u0648\u06CC \u0644\u0627\u067E\u06D5\u0695\u06D5",
  EL =
    "\u062F\u0648\u0648\u0628\u0627\u0631\u06D5\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  RL = "\u0695\u06D5\u062A\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  AL =
    "\u0644\u06CC\u0646\u06A9\u06CC \u0628\u0627\u0646\u06AF\u0647\u06CE\u0634\u062A\u06A9\u0631\u062F\u0646 \u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  LL =
    "\u0628\u06D5 \u0634\u06CE\u0648\u06D5\u06CC\u06D5\u06A9\u06CC \u0647\u06D5\u0695\u06D5\u0645\u06D5\u06A9\u06CC \u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  HL =
    "\u062F\u0631\u0648\u0633\u062A\u06A9\u0631\u062F\u0646\u06CC \u067E\u0631\u06C6\u0698\u06D5\u06CC \u0641\u0631\u06D5 \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631",
  zL =
    "\u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5 \u0628\u06C6 \u067E\u0695\u06C6\u0698\u06D5\u06CC\u06D5\u06A9\u06CC \u0641\u0631\u06D5 \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631",
  OL =
    "\u062F\u06D5\u0633\u0646\u06CC\u0627\u0634\u0646\u06A9\u0631\u062F\u0646",
  FL = "\u0633\u0695\u06D5\u0631\u06D5\u0648\u06D5",
  jL = "\u0648\u06CE\u0646\u06D5\u06A9\u06CE\u0634\u0627\u0646",
  GL = "\u062A\u06CC\u0631",
  VL = "\u062F\u06D5\u0642",
  $L = "\u0686\u06D5\u0633\u067E\u0627\u0648",
  NL = "\u0644\u0627\u06A9\u06CE\u0634\u06D5",
  WL = "\u0628\u06CC\u0628\u0644\u06CC",
  UL = "\u0633\u06CE\u06AF\u06C6\u0634\u06D5",
  KL = "\u0647\u06CE\u06B5",
  _L = "\u0633\u0648\u0695\u0627\u0646\u06D5\u0648\u06D5",
  YL =
    "\u0642\u0641\u06B5\u06A9\u0631\u062F\u0646\u06CC \u0695\u06CE\u0698\u06D5\u06CC \u0695\u0648\u0648\u0628\u06D5\u0631\u06CC",
  ZL =
    "\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5\u06CC \u0695\u06CE\u0698\u06D5\u06CC \u0695\u0648\u0648\u0628\u06D5\u0631\u06CC",
  XL = "\u06A9\u06C6\u0645\u06D5\u06B5\u06D5",
  qL =
    "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u06A9\u06C6\u0645\u06D5\u06B5\u06D5",
  JL = "\u0628\u0686\u06C6 \u0628\u06C6 \u067E\u0634\u062A\u06D5\u0648\u06D5",
  QL = "\u0628\u06D5\u0631\u06D5\u0648 \u062F\u0648\u0627\u0648\u06D5",
  e5 = "\u0628\u0695\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  t5 =
    "\u0628\u06AF\u0648\u0627\u0632\u0631\u06CE\u062A\u06D5\u0648\u06D5 \u0628\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  n5 =
    "\u06AF\u06C6\u0634\u06D5\u06CC \u067E\u0634\u0648\u0648\u062F\u0627\u0646",
  o5 = "\u0642\u0648\u0641\u06B5",
  r5 = "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0642\u0648\u0641\u06B5",
  s5 = "\u0628\u0686\u06C6 \u0628\u06C6 \u0644\u0627\u067E\u06D5\u0695\u06D5",
  i5 =
    "\u0626\u0627\u0633\u06C6\u06CC\u06CC \u0648\u06D5\u0631\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646",
  a5 =
    "\u0633\u062A\u0648\u0646\u06CC \u0648\u06D5\u0631\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646",
  l5 = "\u062C\u0648\u0648\u06B5\u06D5",
  d5 = "\u0628\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  c5 = "\u0628\u06C6\u067E\u0634\u062A\u06D5\u0648\u06D5",
  p5 = "\u0628\u06C6\u062F\u0648\u0627\u0648\u06D5",
  u5 = "\u06AF\u06D5\u0695\u0627\u0646\u06D5\u0648\u06D5",
  h5 = "\u0632\u0645\u0627\u0646",
  m5 =
    "\u0628\u06D5\u0633\u062A\u06D5\u0631\u06CC \u0648\u06D5\u0631\u06AF\u06CE\u0695\u0627\u0646",
  g5 = "\u0634\u0648\u06CE\u0646\u06CC \u062F\u06C6\u06A9",
  f5 = "\u062E\u0648\u0627\u0631\u06D5\u0648\u06D5",
  S5 = "\u0686\u06D5\u067E",
  b5 = "\u0695\u0627\u0633\u062A",
  T5 = "\u0633\u06D5\u0631\u0648\u0648",
  y5 = "\u0644\u0627\u067E\u06D5\u0695\u06D5",
  x5 =
    "\u06A9\u0648\u0631\u062A\u06A9\u0631\u0627\u0648\u06D5\u06A9\u0627\u0646\u06CC \u062A\u06D5\u062E\u062A\u06D5\u06A9\u0644\u06CC\u0644",
  w5 = "\u06AF\u06D5\u0695\u0627\u0646",
  k5 = "\u0628\u0627\u0631\u06A9\u0631\u062F\u0646",
  v5 =
    "\u067E\u0627\u0634\u062E\u0627\u0646\u06CC \u0647\u06D5\u0646\u0627\u0631\u062F\u06D5\u06A9\u0631\u062F\u0646",
  I5 = "\u0695\u0648\u0648\u0646",
  C5 = "\u0626\u06C6\u062A\u06C6\u0645\u0627\u062A\u06CC\u06A9\u06CC",
  D5 = "\u0631\u0648\u0648\u0646\u0627\u06A9",
  P5 = "\u062A\u0627\u0631\u06CC\u06A9",
  bl = {
    "style.menu.color": AA,
    "style.menu.fill": LA,
    "style.menu.dash": HA,
    "style.menu.size": zA,
    "style.menu.keep.open": OA,
    "style.menu.font": FA,
    "style.menu.align": jA,
    styles: GA,
    "zoom.in": VA,
    "zoom.out": $A,
    to: NA,
    "menu.tools": WA,
    "menu.transform": UA,
    "menu.file": KA,
    "menu.edit": _A,
    "menu.view": YA,
    "menu.preferences": ZA,
    "menu.sign.in": XA,
    "menu.sign.out": qA,
    "become.a.sponsor": JA,
    "zoom.to.content": QA,
    "zoom.to.selection": eL,
    "zoom.to.fit": tL,
    "zoom.to": nL,
    "preferences.dark.mode": oL,
    "preferences.focus.mode": rL,
    "preferences.debug.mode": sL,
    "preferences.show.grid": iL,
    "preferences.use.cad.selection": aL,
    "preferences.keep.stylemenu.open": lL,
    "preferences.always.show.snaps": dL,
    "preferences.rotate.handles": cL,
    "preferences.binding.handles": pL,
    "preferences.clone.handles": uL,
    undo: hL,
    redo: mL,
    cut: gL,
    copy: fL,
    paste: SL,
    "copy.as": bL,
    "export.as": TL,
    "select.all": yL,
    "select.none": xL,
    delete: wL,
    "new.project": kL,
    open: vL,
    save: IL,
    "save.as": CL,
    "upload.media": DL,
    "create.page": PL,
    "new.page": ML,
    "page.name": BL,
    duplicate: EL,
    cancel: RL,
    "copy.invite.link": AL,
    "copy.readonly.link": LL,
    "create.multiplayer.project": HL,
    "copy.multiplayer.project": zL,
    select: OL,
    eraser: FL,
    draw: jL,
    arrow: GL,
    text: VL,
    sticky: $L,
    rectangle: NL,
    ellipse: WL,
    triangle: UL,
    line: KL,
    rotate: _L,
    "lock.aspect.ratio": YL,
    "unlock.aspect.ratio": ZL,
    group: XL,
    ungroup: qL,
    "move.to.back": JL,
    "move.backward": QL,
    "move.forward": e5,
    "move.to.front": t5,
    "reset.angle": n5,
    lock: o5,
    unlock: r5,
    "move.to.page": s5,
    "flip.horizontal": i5,
    "flip.vertical": a5,
    move: l5,
    "to.front": d5,
    forward: c5,
    backward: p5,
    back: u5,
    language: h5,
    "translation.link": m5,
    "dock.position": g5,
    bottom: f5,
    left: S5,
    right: b5,
    top: T5,
    page: y5,
    "keyboard.shortcuts": x5,
    search: w5,
    loading: k5,
    "export.background": v5,
    transparent: I5,
    auto: C5,
    light: D5,
    dark: P5,
  };
var M5 = "Color",
  B5 = "Fill",
  E5 = "Dash",
  R5 = "Size",
  A5 = "Keep Open",
  L5 = "Font",
  H5 = "Align",
  z5 = "Styles",
  O5 = "Zoom In",
  F5 = "Zoom Out",
  j5 = "To",
  G5 = "Tools",
  V5 = "Transform",
  $5 = "File",
  N5 = "Edit",
  W5 = "View",
  U5 = "Preferences",
  K5 = "Sign In",
  _5 = "Sign Out",
  Y5 = "Become a Sponsor",
  Z5 = "Back to content",
  X5 = "Zoom to Selection",
  q5 = "Zoom to Fit",
  J5 = "Zoom to",
  Q5 = "Dark Mode",
  e3 = "Focus Mode",
  t3 = "Debug Mode",
  n3 = "Show Grid",
  o3 = "Use CAD Selection",
  r3 = "Keep Style Menu Open",
  s3 = "Always Show Snaps",
  i3 = "Rotate Handles",
  a3 = "Binding Handles",
  l3 = "Clone Handles",
  d3 = "Undo",
  c3 = "Redo",
  p3 = "Cut",
  u3 = "Copy",
  h3 = "Paste",
  m3 = "Copy As",
  g3 = "Export As",
  f3 = "Select All",
  S3 = "Select None",
  b3 = "Delete",
  T3 = "New Project",
  y3 = "Open",
  x3 = "Save",
  w3 = "Save As",
  k3 = "Upload Media",
  v3 = "Create Page",
  I3 = "New Page",
  C3 = "Page Name",
  D3 = "Duplicate",
  P3 = "Shape Options",
  M3 = "Shapes",
  B3 = "Cancel",
  E3 = "Copy Invite Link",
  R3 = "Copy ReadOnly Link",
  A3 = "Create a Multiplayer Project",
  L3 = "Copy to Multiplayer Project",
  H3 = "Select",
  z3 = "Eraser",
  O3 = "Draw",
  F3 = "Arrow",
  j3 = "Text",
  G3 = "Sticky",
  V3 = "Rectangle",
  $3 = "Ellipse",
  N3 = "Triangle",
  W3 = "Line",
  U3 = "Rotate",
  K3 = "Lock Aspect Ratio",
  _3 = "Unlock Aspect Ratio",
  Y3 = "Group",
  Z3 = "Ungroup",
  X3 = "Move to Back",
  q3 = "Move Backward",
  J3 = "Move Forward",
  Q3 = "Move to Front",
  e8 = "Reset Angle",
  t8 = "Lock",
  n8 = "Unlock",
  o8 = "Align / Distribute",
  r8 = "Move to Page",
  s8 = "Flip Horizontal",
  i8 = "Flip Vertical",
  a8 = "Move",
  l8 = "To Front",
  d8 = "Forward",
  c8 = "Backward",
  p8 = "To Back",
  u8 = "Language",
  h8 = "Learn More",
  m8 = "Dock Position",
  g8 = "Bottom",
  f8 = "Left",
  S8 = "Right",
  b8 = "Top",
  T8 = "Page",
  y8 = "Keyboard shortcuts",
  x8 = "Search",
  w8 = "Loading{dots}",
  k8 = "Export Background",
  v8 = "Transparent",
  I8 = "Auto",
  C8 = "Light",
  D8 = "Dark",
  P8 = "Github",
  M8 = "Twitter",
  B8 = "Discord",
  E8 = "Image",
  R8 = "Align Left",
  A8 = "Align Horizontal Center",
  L8 = "Align Right",
  H8 = "Align Top",
  z8 = "Align Vertical Center",
  O8 = "Align Bottom",
  F8 = "Distribute Horizontal",
  j8 = "Distribute Vertical",
  G8 = "Stretch Horizontal",
  V8 = "Stretch Vertical",
  $8 = "Do you want to save your current project?",
  N8 = "Do you want to save changes to your current project?",
  W8 = "Cancel",
  U8 = "No",
  K8 = "Yes",
  _8 = "Enter file name",
  Y8 = "Try the new tldraw",
  Z8 = "White",
  X8 = "Light gray",
  q8 = "Gray",
  J8 = "Black",
  Q8 = "Green",
  e6 = "Cyan",
  t6 = "Blue",
  n6 = "Indigo",
  o6 = "Violet",
  r6 = "Red",
  s6 = "Orange",
  i6 = "Yellow",
  a6 = "Solid",
  l6 = "Dashed",
  d6 = "Dotted",
  c6 = "Small",
  p6 = "Medium",
  u6 = "Large",
  Tl = {
    "style.menu.color": M5,
    "style.menu.fill": B5,
    "style.menu.dash": E5,
    "style.menu.size": R5,
    "style.menu.keep.open": A5,
    "style.menu.font": L5,
    "style.menu.align": H5,
    styles: z5,
    "zoom.in": O5,
    "zoom.out": F5,
    to: j5,
    "menu.tools": G5,
    "menu.transform": V5,
    "menu.file": $5,
    "menu.edit": N5,
    "menu.view": W5,
    "menu.preferences": U5,
    "menu.sign.in": K5,
    "menu.sign.out": _5,
    "become.a.sponsor": Y5,
    "zoom.to.content": Z5,
    "zoom.to.selection": X5,
    "zoom.to.fit": q5,
    "zoom.to": J5,
    "preferences.dark.mode": Q5,
    "preferences.focus.mode": e3,
    "preferences.debug.mode": t3,
    "preferences.show.grid": n3,
    "preferences.use.cad.selection": o3,
    "preferences.keep.stylemenu.open": r3,
    "preferences.always.show.snaps": s3,
    "preferences.rotate.handles": i3,
    "preferences.binding.handles": a3,
    "preferences.clone.handles": l3,
    undo: d3,
    redo: c3,
    cut: p3,
    copy: u3,
    paste: h3,
    "copy.as": m3,
    "export.as": g3,
    "select.all": f3,
    "select.none": S3,
    delete: b3,
    "new.project": T3,
    open: y3,
    save: x3,
    "save.as": w3,
    "upload.media": k3,
    "create.page": v3,
    "new.page": I3,
    "page.name": C3,
    duplicate: D3,
    "shape.options": P3,
    shapes: M3,
    cancel: B3,
    "copy.invite.link": E3,
    "copy.readonly.link": R3,
    "create.multiplayer.project": A3,
    "copy.multiplayer.project": L3,
    select: H3,
    eraser: z3,
    draw: O3,
    arrow: F3,
    text: j3,
    sticky: G3,
    rectangle: V3,
    ellipse: $3,
    triangle: N3,
    line: W3,
    rotate: U3,
    "lock.aspect.ratio": K3,
    "unlock.aspect.ratio": _3,
    group: Y3,
    ungroup: Z3,
    "move.to.back": X3,
    "move.backward": q3,
    "move.forward": J3,
    "move.to.front": Q3,
    "reset.angle": e8,
    lock: t8,
    unlock: n8,
    "align.distribute": o8,
    "move.to.page": r8,
    "flip.horizontal": s8,
    "flip.vertical": i8,
    move: a8,
    "to.front": l8,
    forward: d8,
    backward: c8,
    back: p8,
    language: u8,
    "translation.link": h8,
    "dock.position": m8,
    bottom: g8,
    left: f8,
    right: S8,
    top: b8,
    page: T8,
    "keyboard.shortcuts": y8,
    search: x8,
    loading: w8,
    "export.background": k8,
    transparent: v8,
    auto: I8,
    light: C8,
    dark: D8,
    github: P8,
    twitter: M8,
    discord: B8,
    image: E8,
    "align.left": R8,
    "align.center.x": A8,
    "align.right": L8,
    "align.top": H8,
    "align.center.y": z8,
    "align.bottom": O8,
    "distribute.x": F8,
    "distribute.y": j8,
    "stretch.x": G8,
    "stretch.y": V8,
    "dialog.save.firsttime": $8,
    "dialog.save.again": N8,
    "dialog.cancel": W8,
    "dialog.no": U8,
    "dialog.yes": K8,
    "enter.file.name": _8,
    "tldraw-beta": Y8,
    white: Z8,
    lightGray: X8,
    gray: q8,
    black: J8,
    green: Q8,
    cyan: e6,
    blue: t6,
    indigo: n6,
    violet: o6,
    red: r6,
    orange: s6,
    yellow: i6,
    solid: a6,
    dashed: l6,
    dotted: d6,
    small: c6,
    medium: p6,
    large: u6,
  };
var h6 = "\u1021\u101B\u1031\u102C\u1004\u103A",
  m6 =
    "\u1021\u101B\u1031\u102C\u1004\u103A \u1011\u100A\u103A\u1037\u1019\u100A\u103A",
  g6 = "\u1019\u103B\u1025\u103A\u1038\u1005\u1000\u103A",
  f6 = "\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038",
  S6 = "\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  b6 = "\u1005\u102C\u101E\u102C\u1038\u1016\u1031\u102C\u1004\u103A\u1037",
  T6 = "\u1021\u1011\u102C\u1038\u1021\u101E\u102D\u102F",
  y6 = "\u1005\u1010\u102D\u102F\u1004\u103A",
  x6 =
    "\u1021\u1000\u103C\u102E\u1038\u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  w6 =
    "\u1015\u103C\u1014\u103A\u1000\u103B\u1025\u103A\u1038\u1019\u100A\u103A",
  k6 = "\u101E\u102D\u102F\u1037",
  v6 = "\u1000\u102D\u101B\u102D\u101A\u102C\u1019\u103B\u102C\u1038",
  I6 =
    "\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u100A\u103A\u101B\u1014\u103A",
  C6 = "\u1016\u102D\u102F\u1004\u103A",
  D6 = "\u1015\u103C\u102F\u1015\u103C\u1004\u103A",
  P6 = "\u1021\u1019\u103C\u1004\u103A",
  M6 = "\u1006\u1000\u103A\u1010\u1004\u103A",
  B6 = "\u101D\u1004\u103A\u1019\u100A\u103A",
  E6 = "\u1011\u103D\u1000\u103A\u1019\u100A\u103A",
  R6 =
    "\u1004\u103D\u1031\u1000\u103C\u1031\u1038\u1011\u1031\u102C\u1000\u103A\u1015\u1036\u1019\u100A\u103A",
  A6 =
    "\u1015\u1004\u103A\u1019\u1014\u1031\u101B\u102C\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101E\u103D\u102C\u1038\u1019\u100A\u103A",
  L6 =
    "\u101B\u103D\u1031\u1038\u1011\u102C\u1038\u101E\u1031\u102C \u1014\u1031\u101B\u102C\u101E\u102D\u102F\u1037 \u1021\u102C\u101B\u102F\u1036\u1015\u103C\u102F\u1019\u100A\u103A",
  H6 =
    "\u1021\u1036\u1000\u102D\u102F\u1000\u103A\u1016\u103C\u1005\u103A\u1021\u1031\u102C\u1004\u103A \u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  z6 =
    "\u1015\u102F\u1036\u1019\u103E\u1014\u103A\u1006\u102D\u102F\u1012\u103A\u101E\u102D\u102F\u1037 \u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  O6 = "\u1021\u1019\u103E\u1031\u102C\u1004\u103A \u1019\u102F\u1012\u103A",
  F6 =
    "\u101B\u103E\u1004\u103A\u1038\u101B\u103E\u1004\u103A\u1038\u101C\u1004\u103A\u1038\u101C\u1004\u103A\u1038 \u1019\u102F\u1012\u103A",
  j6 = "\u1005\u1019\u103A\u1038\u101E\u1015\u103A \u1019\u102F\u1012\u103A",
  G6 =
    "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1007\u101A\u102C\u1038\u1000\u103D\u1000\u103A\u1015\u103C\u101B\u1014\u103A",
  V6 =
    "CAD \u1000\u1032\u1037\u101E\u102D\u102F\u1037 \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1019\u103E\u102F \u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1019\u100A\u103A",
  $6 =
    "\u1005\u1010\u102D\u102F\u1004\u103A\u101C\u103A \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1021\u1019\u103C\u1032\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  N6 = "Always Show Snaps",
  W6 = "Rotate Handles",
  U6 = "Binding Handles",
  K6 = "Clone Handles",
  _6 =
    "\u1014\u1002\u102D\u102F\u1019\u1030\u101C\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101C\u102F\u1015\u103A\u101B\u1014\u103A",
  Y6 = "\u1015\u103C\u1014\u103A\u101C\u102F\u1015\u103A\u101B\u1014\u103A",
  Z6 = "\u1016\u103C\u1010\u103A\u101A\u1030",
  X6 = "\u1000\u1030\u1038\u101A\u1030",
  q6 = "\u1000\u1030\u1038\u101E\u103D\u1004\u103A\u1038",
  J6 =
    "\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A\u1037 \u1015\u102F\u1036\u1005\u1036",
  Q6 =
    "\u1011\u102F\u1010\u103A\u1001\u103B\u1004\u103A\u101E\u100A\u103A\u1037 \u1015\u102F\u1036\u1005\u1036",
  eH =
    "\u1021\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u101B\u1014\u103A",
  tH =
    "\u1010\u1005\u103A\u1001\u102F\u1019\u103E \u1019\u101B\u103D\u1031\u1038\u1010\u1031\u102C\u1037\u1015\u102B",
  nH = "\u1016\u103B\u1000\u103A\u1019\u100A\u103A",
  oH =
    "\u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A \u1021\u101E\u1005\u103A",
  rH = "\u1016\u103D\u1004\u103A\u1037\u1019\u100A\u103A",
  sH = "\u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A",
  iH =
    "\u1021\u1001\u103C\u102C\u1038\u101E\u1031\u102C \u1015\u102F\u1036\u1005\u1036\u1016\u103C\u1004\u103A\u1037 \u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A",
  aH =
    "\u1019\u102E\u1012\u102E\u101A\u102C\u1016\u102D\u102F\u1004\u103A\u1019\u103B\u102C\u1038 \u1010\u1004\u103A\u1019\u100A\u103A",
  lH =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u101E\u1005\u103A\u1016\u103D\u1004\u103A\u1037\u1019\u100A\u103A",
  dH =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u101E\u1005\u103A",
  cH =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u1019\u100A\u103A",
  pH = "\u1015\u103D\u102C\u1038\u1019\u100A\u103A",
  uH = "\u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
  hH =
    "\u1016\u102D\u1010\u103A\u1000\u103C\u102C\u1038\u101B\u1014\u103A \u101C\u1004\u103A\u1037\u1001\u103A\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  mH =
    "\u1000\u103C\u100A\u103A\u1037\u101B\u1030\u101B\u1014\u103A\u1021\u1010\u103D\u1000\u103A\u101E\u102C \u101C\u1004\u103A\u1037\u1001\u103A\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  gH =
    "\u1021\u1019\u103B\u102C\u1038\u101E\u102F\u1036\u1038 \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1021\u1016\u103C\u1005\u103A \u1021\u101E\u1005\u103A\u1016\u1014\u103A\u1010\u102E\u1038\u1019\u100A\u103A",
  fH =
    "\u1021\u1019\u103B\u102C\u1038\u101E\u102F\u1036\u1038 \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1021\u1016\u103C\u1005\u103A\u101E\u102D\u102F\u1037 \u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  SH = "\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1019\u103E\u102F",
  bH = "\u1001\u1032\u1016\u103B\u1000\u103A",
  TH = "\u1001\u1032\u1010\u1036",
  yH = "\u1019\u103C\u103E\u102C\u1038",
  xH = "\u1005\u102C\u101E\u102C\u1038",
  wH =
    "\u1000\u1015\u103A\u1001\u103D\u102C\u1019\u103E\u1010\u103A\u1005\u102F",
  kH = "\u101C\u1031\u1011\u1031\u102C\u1004\u103A\u1037",
  vH = "\u1018\u1032\u1025",
  IH = "\u1010\u103C\u102D\u1002\u1036",
  CH = "\u1019\u103B\u1025\u103A\u1038",
  DH = "\u101C\u103E\u100A\u103A\u1037\u1019\u100A\u103A",
  PH =
    "\u1021\u1001\u103B\u102D\u102F\u1038\u1021\u1005\u102C\u1038 \u1011\u102D\u1014\u103A\u1038\u1011\u102C\u1038\u1019\u100A\u103A",
  MH =
    "\u1021\u1001\u103B\u102D\u102F\u1038\u1021\u1005\u102C\u1038 \u1019\u1011\u102D\u1014\u103A\u1038\u1010\u1031\u102C\u1037\u1015\u102B",
  BH = "\u1021\u102F\u1015\u103A\u1005\u102F\u1016\u103D\u1032\u1037",
  EH = "\u1021\u102F\u1015\u103A\u1005\u102F\u1001\u103D\u1032",
  RH =
    "\u1014\u1031\u102C\u1000\u103A\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037 \u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  AH =
    "\u1014\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037 \u1010\u1005\u103A\u1006\u1004\u103A\u1037\u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  LH =
    "\u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037 \u1010\u1005\u103A\u1006\u1004\u103A\u1037\u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  HH =
    "\u101B\u103E\u1031\u1037\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037 \u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  zH =
    "\u1014\u1002\u102D\u102F\u1019\u1030\u101C \u1011\u1031\u102C\u1004\u103A\u1037\u1001\u103B\u102D\u102F\u1038\u1005\u102C\u1038\u101E\u102D\u102F\u1037\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1019\u100A\u103A",
  OH = "\u1001\u1010\u103A\u1011\u102C\u1038\u1019\u100A\u103A",
  FH = "\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  jH =
    "\u1014\u1031\u101B\u102C \u1021\u1011\u102C\u1038\u1021\u101E\u102D\u102F/ \u1021\u1006\u1014\u103A\u1037\u1021\u1000\u103B\u102F\u1036\u1037",
  GH =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C\u1010\u1005\u103A\u1001\u102F\u101E\u102D\u102F\u1037 \u101B\u103D\u1031\u1038\u1019\u100A\u103A",
  VH =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u101C\u103E\u1014\u103A\u1019\u100A\u103A",
  $H =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u101C\u103E\u1014\u103A\u1019\u100A\u103A",
  NH = "\u101B\u103D\u1031\u1037\u1019\u100A\u103A",
  WH =
    "\u101B\u103E\u1031\u1037\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037",
  UH = "\u101B\u103E\u1031\u1037\u1010\u1005\u103A\u1006\u1004\u103A\u1037",
  KH =
    "\u1014\u1031\u102C\u1000\u103A\u1010\u1005\u103A\u1006\u1004\u103A\u1037",
  _H =
    "\u1014\u1031\u102C\u1000\u103A\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037",
  YH = "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
  ZH =
    "\u1015\u102D\u102F\u1019\u102D\u102F\u104D \u101C\u1031\u1037\u101C\u102C\u101B\u1014\u103A",
  XH =
    "\u1000\u102D\u101B\u102D\u101A\u102C \u1021\u1014\u1031\u1021\u1011\u102C\u1038",
  qH = "\u1021\u1031\u102C\u1000\u103A",
  JH = "\u1018\u101A\u103A",
  QH = "\u100A\u102C",
  e4 = "\u1011\u102D\u1015\u103A",
  t4 = "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C",
  n4 = "Keyboard shortcuts",
  o4 = "\u101B\u103E\u102C\u1016\u103D\u1031\u101B\u1014\u103A",
  r4 =
    "\u1001\u100F\u1005\u1031\u102C\u1004\u103A\u1037\u1015\u1031\u1038\u101B\u1014\u103A{dots}",
  s4 =
    "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1011\u102F\u1010\u103A\u101A\u1030\u1019\u100A\u103A",
  i4 =
    "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1021\u1000\u103C\u100A\u103A",
  a4 = "Auto",
  l4 = "\u1021\u101C\u1004\u103A\u1038",
  d4 = "\u1021\u1019\u103E\u1031\u102C\u1004\u103A",
  c4 = "Github",
  p4 = "Twitter",
  u4 = "Discord",
  h4 = "\u1013\u102C\u1010\u103A\u1015\u102F\u1036",
  m4 =
    "\u1018\u101A\u103A\u1016\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  g4 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1017\u101F\u102D\u102F\u1006\u102E\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  f4 =
    "\u100A\u102C\u1016\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  S4 =
    "\u1021\u1015\u1031\u102B\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  b4 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1017\u101F\u102D\u102F\u1006\u102E\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  T4 =
    "\u1021\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  y4 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1016\u103C\u1014\u103A\u1037\u101B\u1014\u103A",
  x4 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1016\u103C\u1014\u103A\u1037\u101B\u1014\u103A",
  w4 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1006\u103D\u1032\u1006\u1014\u103A\u1037\u101B\u1014\u103A",
  k4 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1006\u103D\u1032\u1006\u1014\u103A\u1037\u101B\u1014\u103A",
  v4 =
    "\u101A\u1001\u102F \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1000\u102D\u102F \u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u101C\u102D\u102F\u1015\u102B\u101E\u101C\u102C\u1038 ?",
  I4 =
    "\u101A\u1001\u102F \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1010\u103D\u1004\u103A \u1015\u103C\u1004\u103A\u1011\u102C\u1038\u101E\u1031\u102C \u1021\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u101C\u100A\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1010\u100A\u103A\u1015\u103C\u102F \u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u101C\u102D\u102F\u1015\u102B\u101E\u101C\u102C\u1038?",
  C4 =
    "\u1018\u102C\u1019\u103E \u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
  D4 = "\u1019\u101C\u102D\u102F\u1010\u1031\u102C\u1037\u1015\u102B",
  P4 = "\u101C\u102D\u102F\u1015\u102B\u101E\u100A\u103A",
  M4 =
    "\u1016\u102D\u102F\u1004\u103A\u1014\u102C\u1019\u100A\u103A \u1011\u100A\u103A\u1037\u101E\u103D\u1004\u103A\u1038\u101B\u1014\u103A",
  B4 =
    "tldraw \u1021\u101E\u1005\u103A\u1005\u1019\u103A\u1038\u101E\u102F\u1036\u1038\u1000\u103C\u100A\u103A\u1037\u101B\u1014\u103A",
  yl = {
    "style.menu.color": h6,
    "style.menu.fill": m6,
    "style.menu.dash": g6,
    "style.menu.size": f6,
    "style.menu.keep.open": S6,
    "style.menu.font": b6,
    "style.menu.align": T6,
    styles: y6,
    "zoom.in": x6,
    "zoom.out": w6,
    to: k6,
    "menu.tools": v6,
    "menu.transform": I6,
    "menu.file": C6,
    "menu.edit": D6,
    "menu.view": P6,
    "menu.preferences": M6,
    "menu.sign.in": B6,
    "menu.sign.out": E6,
    "become.a.sponsor": R6,
    "zoom.to.content": A6,
    "zoom.to.selection": L6,
    "zoom.to.fit": H6,
    "zoom.to": z6,
    "preferences.dark.mode": O6,
    "preferences.focus.mode": F6,
    "preferences.debug.mode": j6,
    "preferences.show.grid": G6,
    "preferences.use.cad.selection": V6,
    "preferences.keep.stylemenu.open": $6,
    "preferences.always.show.snaps": N6,
    "preferences.rotate.handles": W6,
    "preferences.binding.handles": U6,
    "preferences.clone.handles": K6,
    undo: _6,
    redo: Y6,
    cut: Z6,
    copy: X6,
    paste: q6,
    "copy.as": J6,
    "export.as": Q6,
    "select.all": eH,
    "select.none": tH,
    delete: nH,
    "new.project": oH,
    open: rH,
    save: sH,
    "save.as": iH,
    "upload.media": aH,
    "create.page": lH,
    "new.page": dH,
    "page.name": cH,
    duplicate: pH,
    cancel: uH,
    "copy.invite.link": hH,
    "copy.readonly.link": mH,
    "create.multiplayer.project": gH,
    "copy.multiplayer.project": fH,
    select: SH,
    eraser: bH,
    draw: TH,
    arrow: yH,
    text: xH,
    sticky: wH,
    rectangle: kH,
    ellipse: vH,
    triangle: IH,
    line: CH,
    rotate: DH,
    "lock.aspect.ratio": PH,
    "unlock.aspect.ratio": MH,
    group: BH,
    ungroup: EH,
    "move.to.back": RH,
    "move.backward": AH,
    "move.forward": LH,
    "move.to.front": HH,
    "reset.angle": zH,
    lock: OH,
    unlock: FH,
    "align.distribute": jH,
    "move.to.page": GH,
    "flip.horizontal": VH,
    "flip.vertical": $H,
    move: NH,
    "to.front": WH,
    forward: UH,
    backward: KH,
    back: _H,
    language: YH,
    "translation.link": ZH,
    "dock.position": XH,
    bottom: qH,
    left: JH,
    right: QH,
    top: e4,
    page: t4,
    "keyboard.shortcuts": n4,
    search: o4,
    loading: r4,
    "export.background": s4,
    transparent: i4,
    auto: a4,
    light: l4,
    dark: d4,
    github: c4,
    twitter: p4,
    discord: u4,
    image: h4,
    "align.left": m4,
    "align.center.x": g4,
    "align.right": f4,
    "align.top": S4,
    "align.center.y": b4,
    "align.bottom": T4,
    "distribute.x": y4,
    "distribute.y": x4,
    "stretch.x": w4,
    "stretch.y": k4,
    "dialog.save.firsttime": v4,
    "dialog.save.again": I4,
    "dialog.cancel": C4,
    "dialog.no": D4,
    "dialog.yes": P4,
    "enter.file.name": M4,
    "tldraw-beta": B4,
  };
var E4 = "Farge",
  R4 = "Fyll",
  A4 = "Linje",
  L4 = "St\xF8rrelse",
  H4 = "Hold \xE5pen",
  z4 = "Teksttype",
  O4 = "Juster",
  F4 = "Stiler",
  j4 = "Zoom inn",
  G4 = "Zoom ut",
  V4 = "til",
  $4 = "Fil",
  N4 = "Rediger",
  W4 = "Vis",
  U4 = "Preferanser",
  K4 = "Logg inn",
  _4 = "Logg ut",
  Y4 = "Bli en sponsor",
  Z4 = "Zoom til valg",
  X4 = "Zoom for \xE5 passe",
  q4 = "Zoom til",
  J4 = "M\xF8rk modus",
  Q4 = "Fokus modus",
  ez = "Debug modus",
  tz = "Vis rutenett",
  nz = "Bruk CAD seleksjon",
  oz = "Hold stilmeny \xE5pen",
  rz = "Vis alltid snaps",
  sz = "Vis roteringsh\xE5ndtak",
  iz = "Vis bindingsh\xE5ndtak",
  az = "Vis kloningsh\xE5ndtak",
  lz = "Angre",
  dz = "Gj\xF8r om",
  cz = "Klipp ut",
  pz = "Kopier",
  uz = "Lim inn",
  hz = "Kopier som",
  mz = "Eksporter som",
  gz = "Velg alle",
  fz = "Velg ingen",
  Sz = "Slett",
  bz = "Nytt prosjekt",
  Tz = "\xC5pne",
  yz = "Lagre",
  xz = "Lagre som",
  wz = "Last opp media",
  kz = "Opprett side",
  vz = "Ny side",
  Iz = "Sidenavn",
  Cz = "Dupliser",
  Dz = "Avbryt",
  Pz = "Kopier invitasjonslink",
  Mz = "Opprett et flerspiller prosjekt",
  Bz = "Kopier til flerspiller prosjekt",
  Ez = "Velg",
  Rz = "Viskel\xE6r",
  Az = "Tegn",
  Lz = "Pil",
  Hz = "Tekst",
  zz = "Lapp",
  Oz = "Rektangel",
  Fz = "Ellipse",
  jz = "Trekant",
  Gz = "Linje",
  Vz = "Roter",
  $z = "L\xE5s st\xF8rrelsesforhold",
  Nz = "L\xE5s opp st\xF8rrelsesforhold",
  Wz = "Grupper",
  Uz = "Avgrupper",
  Kz = "Flytt bakerst",
  _z = "Flytt bakover",
  Yz = "Flytt forover",
  Zz = "Flytt til front",
  Xz = "Tilbakestill vinkel",
  qz = "L\xE5s",
  Jz = "L\xE5s opp",
  Qz = "Flytt til side",
  e9 = "Snu horisontalt",
  t9 = "Snu vertikalt",
  n9 = "Flytt",
  o9 = "Foran",
  r9 = "Framover",
  s9 = "Bakover",
  i9 = "Bakerst",
  a9 = "Spr\xE5k",
  xl = {
    "style.menu.color": E4,
    "style.menu.fill": R4,
    "style.menu.dash": A4,
    "style.menu.size": L4,
    "style.menu.keep.open": H4,
    "style.menu.font": z4,
    "style.menu.align": O4,
    styles: F4,
    "zoom.in": j4,
    "zoom.out": G4,
    to: V4,
    "menu.file": $4,
    "menu.edit": N4,
    "menu.view": W4,
    "menu.preferences": U4,
    "menu.sign.in": K4,
    "menu.sign.out": _4,
    "become.a.sponsor": Y4,
    "zoom.to.selection": Z4,
    "zoom.to.fit": X4,
    "zoom.to": q4,
    "preferences.dark.mode": J4,
    "preferences.focus.mode": Q4,
    "preferences.debug.mode": ez,
    "preferences.show.grid": tz,
    "preferences.use.cad.selection": nz,
    "preferences.keep.stylemenu.open": oz,
    "preferences.always.show.snaps": rz,
    "preferences.rotate.handles": sz,
    "preferences.binding.handles": iz,
    "preferences.clone.handles": az,
    undo: lz,
    redo: dz,
    cut: cz,
    copy: pz,
    paste: uz,
    "copy.as": hz,
    "export.as": mz,
    "select.all": gz,
    "select.none": fz,
    delete: Sz,
    "new.project": bz,
    open: Tz,
    save: yz,
    "save.as": xz,
    "upload.media": wz,
    "create.page": kz,
    "new.page": vz,
    "page.name": Iz,
    duplicate: Cz,
    cancel: Dz,
    "copy.invite.link": Pz,
    "create.multiplayer.project": Mz,
    "copy.multiplayer.project": Bz,
    select: Ez,
    eraser: Rz,
    draw: Az,
    arrow: Lz,
    text: Hz,
    sticky: zz,
    rectangle: Oz,
    ellipse: Fz,
    triangle: jz,
    line: Gz,
    rotate: Vz,
    "lock.aspect.ratio": $z,
    "unlock.aspect.ratio": Nz,
    group: Wz,
    ungroup: Uz,
    "move.to.back": Kz,
    "move.backward": _z,
    "move.forward": Yz,
    "move.to.front": Zz,
    "reset.angle": Xz,
    lock: qz,
    unlock: Jz,
    "move.to.page": Qz,
    "flip.horizontal": e9,
    "flip.vertical": t9,
    move: n9,
    "to.front": o9,
    forward: r9,
    backward: s9,
    back: i9,
    language: a9,
  };
var l9 = "\u0930\u0902\u0917",
  d9 = "\u092D\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  c9 = "\u0927\u0930\u094D\u0915\u093E",
  p9 = "\u0906\u0915\u093E\u0930",
  u9 =
    "\u0916\u0941\u0932\u093E \u0930\u093E\u0916\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  h9 = "\u092B\u0928\u094D\u091F",
  m9 = "\u092A\u0919\u094D\u0915\u094D\u0924\u093F\u092C\u0926\u094D\u0927",
  g9 = "\u0936\u0948\u0932\u0940\u0939\u0930\u0942",
  f9 = "\u091C\u0941\u092E \u0907\u0928",
  S9 = "\u091C\u0941\u092E \u0906\u0909\u091F",
  b9 = "\u091F\u0941",
  T9 = "\u092B\u093E\u0907\u0932",
  y9 =
    "\u0938\u092E\u094D\u092A\u093E\u0926\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  x9 = "\u092D\u094D\u092F\u0942",
  w9 =
    "\u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E\u0939\u0930\u0942",
  k9 =
    "\u0938\u093E\u0907\u0928 \u0907\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  v9 =
    "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  I9 =
    "\u092A\u094D\u0930\u093E\u092F\u094B\u091C\u0915 \u092C\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  C9 =
    "\u091C\u0941\u092E \u091F\u0941 \u0938\u0947\u0932\u0947\u0915\u094D\u0938\u0928",
  D9 = "\u091C\u0941\u092E \u091F\u0941 \u092B\u093F\u091F",
  P9 = "\u091C\u0941\u092E \u091F\u0941",
  M9 = "\u0905\u0901\u0927\u094D\u092F\u093E\u0930\u094B \u092E\u094B\u0921",
  B9 = "\u092B\u094B\u0915\u0938 \u092E\u094B\u0921",
  E9 = "\u0921\u093F\u092C\u0917 \u092E\u094B\u0921",
  R9 =
    "\u0917\u094D\u0930\u093F\u0921 \u0926\u0947\u0916\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  A9 =
    "CAD \u0938\u0947\u0932\u0947\u0915\u094D\u0938\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  L9 =
    "\u0938\u094D\u091F\u093E\u0907\u0932 \u092E\u0947\u0928\u0941 \u0916\u0941\u0932\u093E \u0930\u093E\u0916\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  H9 =
    "\u0938\u0927\u0948\u0901 \u0938\u094D\u0928\u094D\u092F\u093E\u092A\u0939\u0930\u0942 \u0926\u0947\u0916\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  z9 =
    "\u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942 \u0918\u0941\u092E\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  O9 =
    "\u092C\u093E\u0907\u0928\u094D\u0921\u093F\u0919 \u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942",
  F9 =
    "\u0915\u094D\u0932\u094B\u0928 \u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942",
  j9 =
    "\u092A\u0942\u0930\u094D\u0935\u0935\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  G9 =
    "\u092A\u0941\u0928\u0903 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  V9 = "\u0915\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  $9 =
    "\u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  N9 =
    "\u092A\u0947\u0938\u094D\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  W9 = "\u0915\u092A\u093F \u090F\u091C",
  U9 = "\u090F\u0915\u094D\u0938\u092A\u094B\u0930\u094D\u091F \u090F\u091C",
  K9 =
    "\u0938\u092C\u0948 \u091B\u093E\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  _9 =
    "\u0915\u0947\u0939\u093F \u092A\u0928\u093F \u0938\u0947\u0932\u0947\u0915\u094D\u091F \u0928\u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Y9 = "\u092E\u0947\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  Z9 =
    "\u0928\u092F\u093E\u0901 \u092A\u0930\u093F\u092F\u094B\u091C\u0928\u093E",
  X9 = "\u0916\u094B\u0932\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  q9 =
    "\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  J9 = "\u0938\u0947\u092D \u090F\u091C",
  Q9 =
    "\u092E\u093F\u0921\u093F\u092F\u093E \u0905\u092A\u0932\u094B\u0921 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  eO =
    "\u092A\u0943\u0937\u094D\u0920 \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  tO =
    "\u0928\u092F\u093E\u0901 \u092A\u0943\u0937\u094D\u0920 \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  nO = "\u092A\u0943\u0937\u094D\u0920\u0915\u094B \u0928\u093E\u092E",
  oO =
    "\u0905\u0928\u0941\u0932\u093F\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  rO =
    "\u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  sO =
    "\u0928\u093F\u092E\u0928\u094D\u0924\u094D\u0930\u0923\u093E \u0932\u093F\u0919\u094D\u0915 \u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  iO =
    "\u092E\u0932\u094D\u091F\u093F\u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u0930\u093F\u092F\u094B\u091C\u0928\u093E \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  aO =
    "\u092E\u0932\u094D\u091F\u093F\u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u092E\u093E \u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  lO = "\u0938\u0947\u0932\u0947\u0915\u094D\u091F",
  dO = "\u0907\u0930\u0947\u091C\u0930",
  cO = "\u091A\u093F\u0924\u094D\u0930 \u092C\u0928\u093E\u0909\u0928\u0941",
  pO = "\u0924\u0940\u0930",
  uO = "\u0936\u092C\u094D\u0926",
  hO = "\u091F\u093E\u0901\u0938\u093F\u0928\u0947",
  mO = "\u0906\u092F\u0924",
  gO = "\u0926\u0940\u0930\u094D\u0918\u0935\u0943\u0924\u094D\u0924",
  fO = "\u0924\u094D\u0930\u093F\u092D\u0941\u091C",
  SO = "\u0930\u0947\u0916\u093E",
  bO = "\u0918\u0941\u092E\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  TO =
    "\u0906\u0915\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  yO =
    "\u0906\u0915\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0905\u0928\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  xO = "\u0938\u092E\u0942\u0939",
  wO =
    "\u0938\u092E\u0942\u0939 \u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  kO =
    "\u092A\u091B\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  vO =
    "\u0925\u092A \u092A\u091B\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  IO =
    "\u0905\u0917\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  CO =
    "\u0925\u092A \u0905\u0917\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  DO =
    "\u0915\u094B\u0923 \u0930\u093F\u0938\u0947\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  PO = "\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  MO =
    "\u0905\u0928\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  BO =
    "\u092A\u0943\u0937\u094D\u0920\u092E\u093E \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  EO =
    "\u0924\u0947\u0930\u094D\u0938\u094B \u092B\u094D\u0932\u093F\u092A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  RO =
    "\u0920\u093E\u0921\u094B \u092B\u094D\u0932\u093F\u092A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  AO = "\u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  LO = "\u0925\u092A \u0905\u0917\u093E\u0921\u093F",
  HO = "\u0905\u0917\u093E\u0921\u093F",
  zO = "\u092A\u091B\u093E\u0921\u093F",
  OO = "\u0925\u092A \u092A\u091B\u093E\u0921\u093F",
  FO = "\u092D\u093E\u0937\u093E",
  wl = {
    "style.menu.color": l9,
    "style.menu.fill": d9,
    "style.menu.dash": c9,
    "style.menu.size": p9,
    "style.menu.keep.open": u9,
    "style.menu.font": h9,
    "style.menu.align": m9,
    styles: g9,
    "zoom.in": f9,
    "zoom.out": S9,
    to: b9,
    "menu.file": T9,
    "menu.edit": y9,
    "menu.view": x9,
    "menu.preferences": w9,
    "menu.sign.in": k9,
    "menu.sign.out": v9,
    "become.a.sponsor": I9,
    "zoom.to.selection": C9,
    "zoom.to.fit": D9,
    "zoom.to": P9,
    "preferences.dark.mode": M9,
    "preferences.focus.mode": B9,
    "preferences.debug.mode": E9,
    "preferences.show.grid": R9,
    "preferences.use.cad.selection": A9,
    "preferences.keep.stylemenu.open": L9,
    "preferences.always.show.snaps": H9,
    "preferences.rotate.handles": z9,
    "preferences.binding.handles": O9,
    "preferences.clone.handles": F9,
    undo: j9,
    redo: G9,
    cut: V9,
    copy: $9,
    paste: N9,
    "copy.as": W9,
    "export.as": U9,
    "select.all": K9,
    "select.none": _9,
    delete: Y9,
    "new.project": Z9,
    open: X9,
    save: q9,
    "save.as": J9,
    "upload.media": Q9,
    "create.page": eO,
    "new.page": tO,
    "page.name": nO,
    duplicate: oO,
    cancel: rO,
    "copy.invite.link": sO,
    "create.multiplayer.project": iO,
    "copy.multiplayer.project": aO,
    select: lO,
    eraser: dO,
    draw: cO,
    arrow: pO,
    text: uO,
    sticky: hO,
    rectangle: mO,
    ellipse: gO,
    triangle: fO,
    line: SO,
    rotate: bO,
    "lock.aspect.ratio": TO,
    "unlock.aspect.ratio": yO,
    group: xO,
    ungroup: wO,
    "move.to.back": kO,
    "move.backward": vO,
    "move.forward": IO,
    "move.to.front": CO,
    "reset.angle": DO,
    lock: PO,
    unlock: MO,
    "move.to.page": BO,
    "flip.horizontal": EO,
    "flip.vertical": RO,
    move: AO,
    "to.front": LO,
    forward: HO,
    backward: zO,
    back: OO,
    language: FO,
  };
var jO = "Farge",
  GO = "Fyll",
  VO = "Line",
  $O = "Storleik",
  NO = "Hald open",
  WO = "Teksttype",
  UO = "Tilpass",
  KO = "Stilar",
  _O = "Zoom inn",
  YO = "Zoom ut",
  ZO = "til",
  XO = "Fil",
  qO = "Rediger",
  JO = "Vis",
  QO = "Innstillingar",
  e7 = "Logg inn",
  t7 = "Logg ut",
  n7 = "Vert sponsor",
  o7 = "Zoom til innhald",
  r7 = "Zoom til valte element",
  s7 = "Zoom for \xE5 passe",
  i7 = "Zoom til",
  a7 = "M\xF8rkmodus",
  l7 = "Fokusmodus",
  d7 = "Debugmodus",
  c7 = "Vis rutenett",
  p7 = "Bruk CAD-val",
  u7 = "Hald stilmeny open",
  h7 = "Vis alltid snaps",
  m7 = "Vis roteringshandtak",
  g7 = "Vis bindingshandtak",
  f7 = "Vis kloningshandtak",
  S7 = "Angre",
  b7 = "Gjer om",
  T7 = "Klipp ut",
  y7 = "Kopier",
  x7 = "Lim inn",
  w7 = "Kopier som",
  k7 = "Eksporter som",
  v7 = "Vel alle",
  I7 = "Vel ingen",
  C7 = "Slett",
  D7 = "Nytt prosjekt",
  P7 = "Opne",
  M7 = "Lagre",
  B7 = "Lagre som",
  E7 = "Last opp media",
  R7 = "Opprett side",
  A7 = "Ny side",
  L7 = "Sidenamn",
  H7 = "Dupliser",
  z7 = "Avbryt",
  O7 = "Kopier invitasjonslenke",
  F7 = "Kopier invitasjonslenke (skrivebeskytta)",
  j7 = "Lag samarbeidsprosjekt",
  G7 = "Kopier til samarbeidsprosjekt",
  V7 = "Vel",
  $7 = "Viskel\xEAr",
  N7 = "Teikn",
  W7 = "Pil",
  U7 = "Tekst",
  K7 = "Lapp",
  _7 = "Rektangel",
  Y7 = "Runding",
  Z7 = "Trekant",
  X7 = "Line",
  q7 = "Roter",
  J7 = "L\xE5s storleiksforhold",
  Q7 = "L\xE5s opp storleiksforhold",
  eF = "Grupper",
  tF = "Avgrupper",
  nF = "Flytt bakarst",
  oF = "Flytt bakover",
  rF = "Flytt framover",
  sF = "Flytt til front",
  iF = "Tilbakestill vinkel",
  aF = "L\xE5s",
  lF = "L\xE5s opp",
  dF = "Flytt til side",
  cF = "Snu horisontalt",
  pF = "Snu vertikalt",
  uF = "Flytt",
  hF = "Framme",
  mF = "Framover",
  gF = "Bakover",
  fF = "Bakarst",
  SF = "Spr\xE5k",
  bF = "Les meir",
  TF = "Dokkplassering",
  yF = "Nede",
  xF = "Venstre",
  wF = "H\xF8gre",
  kF = "Oppe",
  vF = "Side",
  IF = "Sn\xF8ggtastar",
  CF = "S\xF8k",
  DF = "Lastar{dots}",
  PF = "Eksporter bakgrunn",
  MF = "Gjennomsiktig",
  BF = "Auto",
  EF = "Lys",
  RF = "M\xF8rk",
  AF = "Github",
  LF = "Twitter",
  HF = "Discord",
  zF = "Bilete",
  OF = "Venstrestill",
  FF = "Midtstill horisontalt",
  jF = "H\xF8grestill",
  GF = "Still til toppen",
  VF = "Midtstill vertikalt",
  $F = "Still til botnen",
  NF = "Distribuer horisontalt",
  WF = "Distribuer vertikalt",
  UF = "Strekk horisontalt",
  KF = "Strekk vertikalt",
  _F = "Vil du lagre det noverande prosjektet ditt?",
  YF = "Vil du lagre endringane i det noverande prosjektet ditt?",
  ZF = "Avbryt",
  XF = "Nei",
  qF = "Ja",
  JF = "Fyll inn filnamn",
  QF = "Pr\xF8v den nye tldraw",
  ej = "Kvit",
  tj = "Lys gr\xE5",
  nj = "Gr\xE5",
  oj = "Svart",
  rj = "Gr\xF8n",
  sj = "Cyan",
  ij = "Bk\xE5",
  aj = "Indigo",
  lj = "Fiol",
  dj = "Raud",
  cj = "Oransj",
  pj = "Gul",
  uj = "Heil",
  hj = "Stipla",
  mj = "Prikka",
  gj = "Liten",
  fj = "Mellomstor",
  Sj = "Stor",
  kl = {
    "style.menu.color": jO,
    "style.menu.fill": GO,
    "style.menu.dash": VO,
    "style.menu.size": $O,
    "style.menu.keep.open": NO,
    "style.menu.font": WO,
    "style.menu.align": UO,
    styles: KO,
    "zoom.in": _O,
    "zoom.out": YO,
    to: ZO,
    "menu.file": XO,
    "menu.edit": qO,
    "menu.view": JO,
    "menu.preferences": QO,
    "menu.sign.in": e7,
    "menu.sign.out": t7,
    "become.a.sponsor": n7,
    "zoom.to.content": o7,
    "zoom.to.selection": r7,
    "zoom.to.fit": s7,
    "zoom.to": i7,
    "preferences.dark.mode": a7,
    "preferences.focus.mode": l7,
    "preferences.debug.mode": d7,
    "preferences.show.grid": c7,
    "preferences.use.cad.selection": p7,
    "preferences.keep.stylemenu.open": u7,
    "preferences.always.show.snaps": h7,
    "preferences.rotate.handles": m7,
    "preferences.binding.handles": g7,
    "preferences.clone.handles": f7,
    undo: S7,
    redo: b7,
    cut: T7,
    copy: y7,
    paste: x7,
    "copy.as": w7,
    "export.as": k7,
    "select.all": v7,
    "select.none": I7,
    delete: C7,
    "new.project": D7,
    open: P7,
    save: M7,
    "save.as": B7,
    "upload.media": E7,
    "create.page": R7,
    "new.page": A7,
    "page.name": L7,
    duplicate: H7,
    cancel: z7,
    "copy.invite.link": O7,
    "copy.readonly.link": F7,
    "create.multiplayer.project": j7,
    "copy.multiplayer.project": G7,
    select: V7,
    eraser: $7,
    draw: N7,
    arrow: W7,
    text: U7,
    sticky: K7,
    rectangle: _7,
    ellipse: Y7,
    triangle: Z7,
    line: X7,
    rotate: q7,
    "lock.aspect.ratio": J7,
    "unlock.aspect.ratio": Q7,
    group: eF,
    ungroup: tF,
    "move.to.back": nF,
    "move.backward": oF,
    "move.forward": rF,
    "move.to.front": sF,
    "reset.angle": iF,
    lock: aF,
    unlock: lF,
    "move.to.page": dF,
    "flip.horizontal": cF,
    "flip.vertical": pF,
    move: uF,
    "to.front": hF,
    forward: mF,
    backward: gF,
    back: fF,
    language: SF,
    "translation.link": bF,
    "dock.position": TF,
    bottom: yF,
    left: xF,
    right: wF,
    top: kF,
    page: vF,
    "keyboard.shortcuts": IF,
    search: CF,
    loading: DF,
    "export.background": PF,
    transparent: MF,
    auto: BF,
    light: EF,
    dark: RF,
    github: AF,
    twitter: LF,
    discord: HF,
    image: zF,
    "align.left": OF,
    "align.center.x": FF,
    "align.right": jF,
    "align.top": GF,
    "align.center.y": VF,
    "align.bottom": $F,
    "distribute.x": NF,
    "distribute.y": WF,
    "stretch.x": UF,
    "stretch.y": KF,
    "dialog.save.firsttime": _F,
    "dialog.save.again": YF,
    "dialog.cancel": ZF,
    "dialog.no": XF,
    "dialog.yes": qF,
    "enter.file.name": JF,
    "tldraw-beta": QF,
    white: ej,
    lightGray: tj,
    gray: nj,
    black: oj,
    green: rj,
    cyan: sj,
    blue: ij,
    indigo: aj,
    violet: lj,
    red: dj,
    orange: cj,
    yellow: pj,
    solid: uj,
    dashed: hj,
    dotted: mj,
    small: gj,
    medium: fj,
    large: Sj,
  };
var bj = "Kolor",
  Tj = "Wype\u0142nienie",
  yj = "Linia",
  xj = "Rozmiar",
  wj = "Zachowaj otwarte",
  kj = "Czcionka",
  vj = "Wyr\xF3wnanie",
  Ij = "Style",
  Cj = "Przybli\u017C",
  Dj = "Oddal",
  Pj = "do",
  Mj = "Plik",
  Bj = "Edycja",
  Ej = "Widok",
  Rj = "Preferencje",
  Aj = "Zaloguj",
  Lj = "Wyloguj",
  Hj = "Zosta\u0144 sponsorem",
  zj = "Przybli\u017C do zaznaczenia",
  Oj = "Wype\u0142nij ekran",
  Fj = "Przybli\u017C do",
  jj = "Tryb ciemny",
  Gj = "Tryb skupienia",
  Vj = "Tryb debugowania",
  $j = "Poka\u017C siatk\u0119",
  Nj = "U\u017Cyj zaznaczania CAD",
  Wj = "Zachowaj menu styli otwarte",
  Uj = "Przyci\u0105gaj obiekty",
  Kj = "Uchwyty obrotu",
  _j = "Uchwyty powi\u0105zania",
  Yj = "Uchwyty klonuj\u0105ce",
  Zj = "Cofnij",
  Xj = "Powt\xF3rz",
  qj = "Wytnij",
  Jj = "Kopiuj",
  Qj = "Wklej",
  eG = "Kopiuj jako",
  tG = "Eksportuj jako",
  nG = "Zaznacz wszystko",
  oG = "Odznacz wszystko",
  rG = "Usu\u0144",
  sG = "Nowy projekt",
  iG = "Otw\xF3rz",
  aG = "Zapisz",
  lG = "Zapisz jako",
  dG = "Za\u0142aduj multimedia",
  cG = "Utw\xF3rz stron\u0119",
  pG = "Nowa strona",
  uG = "Nazwa strony",
  hG = "Powiel",
  mG = "Anuluj",
  gG = "Kopiuj link zaproszenia",
  fG = "Stw\xF3rz projekt wieloosobowy",
  SG = "Kopiuj do projektu wieloosobowego",
  bG = "Zaznacz",
  TG = "Gumka",
  yG = "Rysuj",
  xG = "Strza\u0142ka",
  wG = "Tekst",
  kG = "Naklejka",
  vG = "Prostok\u0105t",
  IG = "Elipsa",
  CG = "Tr\xF3jk\u0105t",
  DG = "Linia",
  PG = "Obr\xF3\u0107",
  MG = "Zablokuj proporcje",
  BG = "Odblokuj proporcje",
  EG = "Grupuj",
  RG = "Rozgrupuj",
  AG = "Przenie\u015B na ty\u0142",
  LG = "Przesu\u0144 do ty\u0142u",
  HG = "Przesu\u0144 do przodu",
  zG = "Przenie\u015B na prz\xF3d",
  OG = "Resetuj k\u0105t",
  FG = "Zablokuj",
  jG = "Odblokuj",
  GG = "Przenie\u015B na stron\u0119",
  VG = "Odwr\xF3\u0107 w poziomie",
  $G = "Odwr\xF3\u0107 w pionie",
  NG = "Przenie\u015B",
  WG = "Na wierzch",
  UG = "Do przodu",
  KG = "Do ty\u0142u",
  _G = "Na sp\xF3d",
  YG = "J\u0119zyk",
  ZG = "Czytaj wi\u0119cej",
  XG = "Pozycja przybornika",
  qG = "D\xF3\u0142",
  JG = "Lewa",
  QG = "Prawa",
  eV = "G\xF3ra",
  tV = "Strona",
  nV = "Skr\xF3ty klawiszowe",
  oV = "Szukaj",
  rV = "\u0141adowanie{dots}",
  sV = "Eksportuj t\u0142o",
  iV = "Przezroczyste",
  aV = "Automatyczny",
  lV = "Jasny",
  dV = "Ciemny",
  cV = "Github",
  pV = "Twitter",
  uV = "Discord",
  hV = "Obraz",
  mV = "Wyr\xF3wnaj do lewej",
  gV = "Wycentruj poziomo",
  fV = "Wyr\xF3wnaj do prawej",
  SV = "Wyr\xF3wnaj do g\xF3ry",
  bV = "Wycentruj pionowo",
  TV = "Wyr\xF3wnaj do do\u0142u",
  yV = "Roz\u0142\xF3\u017C poziomo",
  xV = "Roz\u0142\xF3\u017C pionowo",
  wV = "Rozci\u0105gnij poziomo",
  kV = "Rozci\u0105gnij pionowo",
  vV = "Czy chcesz zapisa\u0107 bie\u017C\u0105cy projekt?",
  IV = "Czy chcesz zapisa\u0107 zmiany w bie\u017C\u0105cym projekcie?",
  CV = "Anuluj",
  DV = "Nie",
  PV = "Tak",
  MV = "Podaj nazw\u0119 pliku",
  BV = "Wypr\xF3buj nowy tldraw",
  vl = {
    "style.menu.color": bj,
    "style.menu.fill": Tj,
    "style.menu.dash": yj,
    "style.menu.size": xj,
    "style.menu.keep.open": wj,
    "style.menu.font": kj,
    "style.menu.align": vj,
    styles: Ij,
    "zoom.in": Cj,
    "zoom.out": Dj,
    to: Pj,
    "menu.file": Mj,
    "menu.edit": Bj,
    "menu.view": Ej,
    "menu.preferences": Rj,
    "menu.sign.in": Aj,
    "menu.sign.out": Lj,
    "become.a.sponsor": Hj,
    "zoom.to.selection": zj,
    "zoom.to.fit": Oj,
    "zoom.to": Fj,
    "preferences.dark.mode": jj,
    "preferences.focus.mode": Gj,
    "preferences.debug.mode": Vj,
    "preferences.show.grid": $j,
    "preferences.use.cad.selection": Nj,
    "preferences.keep.stylemenu.open": Wj,
    "preferences.always.show.snaps": Uj,
    "preferences.rotate.handles": Kj,
    "preferences.binding.handles": _j,
    "preferences.clone.handles": Yj,
    undo: Zj,
    redo: Xj,
    cut: qj,
    copy: Jj,
    paste: Qj,
    "copy.as": eG,
    "export.as": tG,
    "select.all": nG,
    "select.none": oG,
    delete: rG,
    "new.project": sG,
    open: iG,
    save: aG,
    "save.as": lG,
    "upload.media": dG,
    "create.page": cG,
    "new.page": pG,
    "page.name": uG,
    duplicate: hG,
    cancel: mG,
    "copy.invite.link": gG,
    "create.multiplayer.project": fG,
    "copy.multiplayer.project": SG,
    select: bG,
    eraser: TG,
    draw: yG,
    arrow: xG,
    text: wG,
    sticky: kG,
    rectangle: vG,
    ellipse: IG,
    triangle: CG,
    line: DG,
    rotate: PG,
    "lock.aspect.ratio": MG,
    "unlock.aspect.ratio": BG,
    group: EG,
    ungroup: RG,
    "move.to.back": AG,
    "move.backward": LG,
    "move.forward": HG,
    "move.to.front": zG,
    "reset.angle": OG,
    lock: FG,
    unlock: jG,
    "move.to.page": GG,
    "flip.horizontal": VG,
    "flip.vertical": $G,
    move: NG,
    "to.front": WG,
    forward: UG,
    backward: KG,
    back: _G,
    language: YG,
    "translation.link": ZG,
    "dock.position": XG,
    bottom: qG,
    left: JG,
    right: QG,
    top: eV,
    page: tV,
    "keyboard.shortcuts": nV,
    search: oV,
    loading: rV,
    "export.background": sV,
    transparent: iV,
    auto: aV,
    light: lV,
    dark: dV,
    github: cV,
    twitter: pV,
    discord: uV,
    image: hV,
    "align.left": mV,
    "align.center.x": gV,
    "align.right": fV,
    "align.top": SV,
    "align.center.y": bV,
    "align.bottom": TV,
    "distribute.x": yV,
    "distribute.y": xV,
    "stretch.x": wV,
    "stretch.y": kV,
    "dialog.save.firsttime": vV,
    "dialog.save.again": IV,
    "dialog.cancel": CV,
    "dialog.no": DV,
    "dialog.yes": PV,
    "enter.file.name": MV,
    "tldraw-beta": BV,
  };
var EV = "Cor",
  RV = "Preencher",
  AV = "Tra\xE7o",
  LV = "Tamanho",
  HV = "Manter aberto",
  zV = "Fonte",
  OV = "Alinhamento",
  FV = "Estilos",
  jV = "Aumentar zoom",
  GV = "Diminuir zoom",
  VV = "para",
  $V = "Arquivo",
  NV = "Editar",
  WV = "Visualizar",
  UV = "Prefer\xEAncias",
  KV = "Entrar",
  _V = "Sair",
  YV = "Torne-se um patrocinador",
  ZV = "Zoom para a sele\xE7\xE3o",
  XV = "Zoom para ajuste",
  qV = "Zoom para",
  JV = "Modo Escuro",
  QV = "Modo Foco",
  e$ = "Modo Debug",
  t$ = "Mostrar Grade",
  n$ = "Usar sele\xE7\xE3o CAD",
  o$ = "Manter Menu de Estilos Aberto",
  r$ = "Mostrar Pontos de Ajuste",
  s$ = "Controle de Rota\xE7\xE3o",
  i$ = "Controle de V\xEDnculos",
  a$ = "Controle de Clone",
  l$ = "Desfazer",
  d$ = "Refazer",
  c$ = "Cortar",
  p$ = "Copiar",
  u$ = "Colar",
  h$ = "Copiar como",
  m$ = "Exportar como",
  g$ = "Selecionar todos",
  f$ = "Selecionar nenhum",
  S$ = "Deletar",
  b$ = "Novo Projeto",
  T$ = "Abrir",
  y$ = "Salvar",
  x$ = "Salvar Como",
  w$ = "Carregar M\xEDdia",
  k$ = "P\xE1gina",
  v$ = "Procurar",
  I$ = "Carregando{dots}",
  C$ = "Exportar Fundo",
  D$ = "Transparente",
  P$ = "Autom\xE1tico",
  M$ = "Claro",
  B$ = "Escuro",
  E$ = "Ferramentas",
  R$ = "Transformar",
  A$ = "Voltar ao Conte\xFAdo",
  L$ = "Saiba Mais",
  H$ = "Copiar Link ReadOnly",
  z$ = "Alinhar / Distribuir",
  O$ = "Criar P\xE1gina",
  F$ = "Nova P\xE1gina",
  j$ = "Nome da P\xE1gina",
  G$ = "Duplicar",
  V$ = "Cancelar",
  $$ = "Copiar Link de Convite",
  N$ = "Criar um Projeto Multijogador",
  W$ = "Copiar para Projeto Multijogador",
  U$ = "Selecionar",
  K$ = "Borracha",
  _$ = "Desenhar",
  Y$ = "Seta",
  Z$ = "Texto",
  X$ = "Adesivo",
  q$ = "Ret\xE2ngulo",
  J$ = "Elipse",
  Q$ = "Tri\xE2ngulo",
  eN = "Linha",
  tN = "Rotacionar",
  nN = "Travar Propor\xE7\xE3o da Tela",
  oN = "Destravar Propor\xE7\xE3o da Tela",
  rN = "Agrupar",
  sN = "Desagrupar",
  iN = "Recuar",
  aN = "Enviar para Tr\xE1s",
  lN = "Avan\xE7ar",
  dN = "Trazer para Frente",
  cN = "Reiniciar \xC2ngulo",
  pN = "Travar",
  uN = "Destravar",
  hN = "Mover para P\xE1gina",
  mN = "Virar Horizontalmente",
  gN = "Virar Verticalmente",
  fN = "Mover",
  SN = "Para Frente",
  bN = "Avan\xE7ar",
  TN = "Recuar",
  yN = "Voltar",
  xN = "Idioma",
  wN = "Imagem",
  kN = "Atalhos de Teclado",
  vN = "Posi\xE7\xE3o de Ferramentas",
  IN = "Inferior",
  CN = "Superior",
  DN = "Direita",
  PN = "Esquerda",
  MN = "Alinhar \xE0 esquerda",
  BN = "Alinhar ao centro na horizontal",
  EN = "Alinhar \xE0 direita",
  RN = "Alinhas em cima",
  AN = "Alinhar ao centro na vertical",
  LN = "Alinhar embaixo",
  HN = "Distruibuir na horizontal",
  zN = "Distruibuir na vertical",
  ON = "Esticar na horizontal",
  FN = "Esticar na vertical",
  jN = "Voc\xEA deseja salvar seu projeto atual?",
  GN = "Voc\xEA deseja salvar as mudan\xE7as ao projeto atual?",
  VN = "Cancelar",
  $N = "N\xE3o",
  NN = "Sim",
  WN = "Insira o nome do arquivo",
  Il = {
    "style.menu.color": EV,
    "style.menu.fill": RV,
    "style.menu.dash": AV,
    "style.menu.size": LV,
    "style.menu.keep.open": HV,
    "style.menu.font": zV,
    "style.menu.align": OV,
    styles: FV,
    "zoom.in": jV,
    "zoom.out": GV,
    to: VV,
    "menu.file": $V,
    "menu.edit": NV,
    "menu.view": WV,
    "menu.preferences": UV,
    "menu.sign.in": KV,
    "menu.sign.out": _V,
    "become.a.sponsor": YV,
    "zoom.to.selection": ZV,
    "zoom.to.fit": XV,
    "zoom.to": qV,
    "preferences.dark.mode": JV,
    "preferences.focus.mode": QV,
    "preferences.debug.mode": e$,
    "preferences.show.grid": t$,
    "preferences.use.cad.selection": n$,
    "preferences.keep.stylemenu.open": o$,
    "preferences.always.show.snaps": r$,
    "preferences.rotate.handles": s$,
    "preferences.binding.handles": i$,
    "preferences.clone.handles": a$,
    undo: l$,
    redo: d$,
    cut: c$,
    copy: p$,
    paste: u$,
    "copy.as": h$,
    "export.as": m$,
    "select.all": g$,
    "select.none": f$,
    delete: S$,
    "new.project": b$,
    open: T$,
    save: y$,
    "save.as": x$,
    "upload.media": w$,
    page: k$,
    search: v$,
    loading: I$,
    "export.background": C$,
    transparent: D$,
    auto: P$,
    light: M$,
    dark: B$,
    "menu.tools": E$,
    "menu.transform": R$,
    "zoom.to.content": A$,
    "translation.link": L$,
    "copy.readonly.link": H$,
    "align.distribute": z$,
    "create.page": O$,
    "new.page": F$,
    "page.name": j$,
    duplicate: G$,
    cancel: V$,
    "copy.invite.link": $$,
    "create.multiplayer.project": N$,
    "copy.multiplayer.project": W$,
    select: U$,
    eraser: K$,
    draw: _$,
    arrow: Y$,
    text: Z$,
    sticky: X$,
    rectangle: q$,
    ellipse: J$,
    triangle: Q$,
    line: eN,
    rotate: tN,
    "lock.aspect.ratio": nN,
    "unlock.aspect.ratio": oN,
    group: rN,
    ungroup: sN,
    "move.to.back": iN,
    "move.backward": aN,
    "move.forward": lN,
    "move.to.front": dN,
    "reset.angle": cN,
    lock: pN,
    unlock: uN,
    "move.to.page": hN,
    "flip.horizontal": mN,
    "flip.vertical": gN,
    move: fN,
    "to.front": SN,
    forward: bN,
    backward: TN,
    back: yN,
    language: xN,
    image: wN,
    "keyboard.shortcuts": kN,
    "dock.position": vN,
    bottom: IN,
    top: CN,
    right: DN,
    left: PN,
    "align.left": MN,
    "align.center.x": BN,
    "align.right": EN,
    "align.top": RN,
    "align.center.y": AN,
    "align.bottom": LN,
    "distribute.x": HN,
    "distribute.y": zN,
    "stretch.x": ON,
    "stretch.y": FN,
    "dialog.save.firsttime": jN,
    "dialog.save.again": GN,
    "dialog.cancel": VN,
    "dialog.no": $N,
    "dialog.yes": NN,
    "enter.file.name": WN,
  };
var UN = "Cor",
  KN = "Preencher",
  _N = "Tra\xE7o",
  YN = "Tamanho",
  ZN = "Manter aberto",
  XN = "Fonte",
  qN = "Alinhamento",
  JN = "Estilos",
  QN = "Aumentar zoom",
  eW = "Diminuir zoom",
  tW = "para",
  nW = "Ficheiro",
  oW = "Editar",
  rW = "Visualizar",
  sW = "Prefer\xEAncias",
  iW = "Entrar",
  aW = "Sair",
  lW = "Torne-se um patrocinador",
  dW = "Zoom na sele\xE7\xE3o",
  cW = "Zoom para caber",
  pW = "Zoom para",
  uW = "Modo Escuro",
  hW = "Modo Foco",
  mW = "Modo Debug",
  gW = "Mostrar Grelha",
  fW = "Usar sele\xE7\xE3o CAD",
  SW = "Manter Menu de Estilos Aberto",
  bW = "Mostrar Pontos de Ajuste",
  TW = "Controlo de Rota\xE7\xE3o",
  yW = "Controlo de Binds",
  xW = "Controlo de Clone",
  wW = "Desfazer",
  kW = "Refazer",
  vW = "Cortar",
  IW = "Copiar",
  CW = "Colar",
  DW = "Copiar como",
  PW = "Exportar como",
  MW = "Selecionar todos",
  BW = "Selecionar nenhum",
  EW = "Apagar",
  RW = "Novo Projeto",
  AW = "Abrir",
  LW = "Salvar",
  HW = "Salvar Como",
  zW = "Upload M\xE9dia",
  OW = "Criar P\xE1gina",
  FW = "Nova P\xE1gina",
  jW = "Nome da P\xE1gina",
  GW = "Duplicar",
  VW = "Cancelar",
  $W = "Copiar Link de Convite",
  NW = "Criar um Projeto Multi-Utilizador",
  WW = "Copiar num Projeto Multi-Utilizador",
  UW = "Selecionar",
  KW = "Borracha",
  _W = "Desenhar",
  YW = "Seta",
  ZW = "Texto",
  XW = "Post-it",
  qW = "Ret\xE2ngulo",
  JW = "Elipse",
  QW = "Tri\xE2ngulo",
  eU = "Linha",
  tU = "Rodar",
  nU = "Trancar a Propor\xE7\xE3o",
  oU = "Destrancar a Propor\xE7\xE3o",
  rU = "Agrupar",
  sU = "Desagrupar",
  iU = "Colocar no Fundo",
  aU = "Mover abaixo",
  lU = "Mover acima",
  dU = "Colocar \xE0 Frente",
  cU = "Reiniciar \xC2ngulo",
  pU = "Trancar",
  uU = "Destrancar",
  hU = "Mover para P\xE1gina",
  mU = "Inverter Horizontalmente",
  gU = "Inverter Verticalmente",
  fU = "Mover",
  SU = "Para Frente",
  bU = "Avan\xE7ar",
  TU = "Recuar",
  yU = "Voltar",
  xU = "L\xEDngua",
  Cl = {
    "style.menu.color": UN,
    "style.menu.fill": KN,
    "style.menu.dash": _N,
    "style.menu.size": YN,
    "style.menu.keep.open": ZN,
    "style.menu.font": XN,
    "style.menu.align": qN,
    styles: JN,
    "zoom.in": QN,
    "zoom.out": eW,
    to: tW,
    "menu.file": nW,
    "menu.edit": oW,
    "menu.view": rW,
    "menu.preferences": sW,
    "menu.sign.in": iW,
    "menu.sign.out": aW,
    "become.a.sponsor": lW,
    "zoom.to.selection": dW,
    "zoom.to.fit": cW,
    "zoom.to": pW,
    "preferences.dark.mode": uW,
    "preferences.focus.mode": hW,
    "preferences.debug.mode": mW,
    "preferences.show.grid": gW,
    "preferences.use.cad.selection": fW,
    "preferences.keep.stylemenu.open": SW,
    "preferences.always.show.snaps": bW,
    "preferences.rotate.handles": TW,
    "preferences.binding.handles": yW,
    "preferences.clone.handles": xW,
    undo: wW,
    redo: kW,
    cut: vW,
    copy: IW,
    paste: CW,
    "copy.as": DW,
    "export.as": PW,
    "select.all": MW,
    "select.none": BW,
    delete: EW,
    "new.project": RW,
    open: AW,
    save: LW,
    "save.as": HW,
    "upload.media": zW,
    "create.page": OW,
    "new.page": FW,
    "page.name": jW,
    duplicate: GW,
    cancel: VW,
    "copy.invite.link": $W,
    "create.multiplayer.project": NW,
    "copy.multiplayer.project": WW,
    select: UW,
    eraser: KW,
    draw: _W,
    arrow: YW,
    text: ZW,
    sticky: XW,
    rectangle: qW,
    ellipse: JW,
    triangle: QW,
    line: eU,
    rotate: tU,
    "lock.aspect.ratio": nU,
    "unlock.aspect.ratio": oU,
    group: rU,
    ungroup: sU,
    "move.to.back": iU,
    "move.backward": aU,
    "move.forward": lU,
    "move.to.front": dU,
    "reset.angle": cU,
    lock: pU,
    unlock: uU,
    "move.to.page": hU,
    "flip.horizontal": mU,
    "flip.vertical": gU,
    move: fU,
    "to.front": SU,
    forward: bU,
    backward: TU,
    back: yU,
    language: xU,
  };
var wU = "\u0426\u0432\u0435\u0442",
  kU = "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C",
  vU = "\u0428\u0442\u0440\u0438\u0445",
  IU = "\u0420\u0430\u0437\u043C\u0435\u0440",
  CU =
    "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C",
  DU = "\u0428\u0440\u0438\u0444\u0442",
  PU =
    "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
  MU = "\u0421\u0442\u0438\u043B\u044C",
  BU = "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",
  EU = "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",
  RU = "\u043A",
  AU = "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
  LU = "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435",
  HU = "\u0424\u0430\u0439\u043B",
  zU =
    "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
  OU = "\u0412\u0438\u0434",
  FU = "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  jU = "\u0412\u043E\u0439\u0442\u0438",
  GU = "\u0412\u044B\u0439\u0442\u0438",
  VU =
    "\u0421\u0442\u0430\u0442\u044C \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C",
  $U =
    "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443",
  NU =
    "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044E",
  WU =
    "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u044D\u043A\u0440\u0430\u043D\u0430",
  UU =
    "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A",
  KU = "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
  _U =
    "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  YU =
    "\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043B\u0430\u0434\u043A\u0438",
  ZU =
    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0435\u0442\u043A\u0443",
  XU =
    "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C CAD \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  qU =
    "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0435\u043D\u044E \u0441\u0442\u0438\u043B\u0435\u0439 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C",
  JU =
    "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
  QU =
    "\u0420\u0443\u0447\u043A\u0438 \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F",
  eK =
    "\u0420\u0443\u0447\u043A\u0438 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
  tK =
    "\u0420\u0443\u0447\u043A\u0438 \u043A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
  nK = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  oK = "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  rK = "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C",
  sK = "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  iK = "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
  aK =
    "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A",
  lK =
    "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A",
  dK = "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0451",
  cK =
    "\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  pK = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  uK = "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  hK = "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
  mK = "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  gK =
    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A",
  fK =
    "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043B",
  SK =
    "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  bK =
    "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  TK =
    "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  yK = "\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  xK = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  wK =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F",
  kK =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F",
  vK =
    "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  IK =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  CK = "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C",
  DK = "\u041B\u0430\u0441\u0442\u0438\u043A",
  PK = "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C",
  MK = "\u0421\u0442\u0440\u0435\u043B\u043A\u0430",
  BK = "\u0422\u0435\u043A\u0441\u0442",
  EK = "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
  RK =
    "\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
  AK = "\u042D\u043B\u043B\u0438\u043F\u0441",
  LK = "\u0422\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
  HK = "\u041B\u0438\u043D\u0438\u044F",
  zK = "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
  OK =
    "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  FK =
    "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  jK =
    "\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  GK =
    "\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  VK =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430\u0437\u0430\u0434",
  $K =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  NK =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u043F\u0435\u0440\u0451\u0434",
  WK =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  UK =
    "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0433\u043E\u043B",
  KK = "\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  _K =
    "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  YK =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C / \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C",
  ZK =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  XK =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  qK =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  JK = "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C",
  QK =
    "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  e_ = "\u0412\u043F\u0435\u0440\u0435\u0434",
  t_ =
    "\u041D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  n_ = "\u041D\u0430\u0437\u0430\u0434",
  o_ = "\u042F\u0437\u044B\u043A",
  r_ = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
  s_ =
    "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
  i_ = "\u0421\u043D\u0438\u0437\u0443",
  a_ = "\u0421\u043B\u0435\u0432\u0430",
  l_ = "\u0421\u043F\u0440\u0430\u0432\u0430",
  d_ = "\u0421\u0432\u0435\u0440\u0445\u0443",
  c_ = "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  p_ =
    "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448",
  u_ = "\u041F\u043E\u0438\u0441\u043A",
  h_ = "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
  m_ = "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0444\u043E\u043D\u0430",
  g_ = "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439",
  f_ = "\u0410\u0432\u0442\u043E",
  S_ = "\u0421\u0432\u0435\u0442\u043B\u044B\u0439",
  b_ = "\u0422\u0451\u043C\u043D\u044B\u0439",
  T_ = "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  y_ =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  x_ =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  w_ =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  k_ =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
  v_ =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  I_ =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043D\u0438\u0436\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
  C_ =
    "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  D_ =
    "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  P_ =
    "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  M_ =
    "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  B_ = "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
  E_ =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  R_ =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442",
  A_ =
    "\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u0441\u0441\u044B\u043B\u043A\u0435. \u041D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0432\u0438\u0434\u0435\u043E!",
  L_ =
    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442?",
  H_ =
    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435?",
  z_ = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  O_ = "\u041D\u0435\u0442",
  F_ = "\u0414\u0430",
  j_ =
    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0444\u0430\u0439\u043B\u0430",
  Dl = {
    "style.menu.color": wU,
    "style.menu.fill": kU,
    "style.menu.dash": vU,
    "style.menu.size": IU,
    "style.menu.keep.open": CU,
    "style.menu.font": DU,
    "style.menu.align": PU,
    styles: MU,
    "zoom.in": BU,
    "zoom.out": EU,
    to: RU,
    "menu.tools": AU,
    "menu.transform": LU,
    "menu.file": HU,
    "menu.edit": zU,
    "menu.view": OU,
    "menu.preferences": FU,
    "menu.sign.in": jU,
    "menu.sign.out": GU,
    "become.a.sponsor": VU,
    "zoom.to.content": $U,
    "zoom.to.selection": NU,
    "zoom.to.fit": WU,
    "zoom.to": UU,
    "preferences.dark.mode": KU,
    "preferences.focus.mode": _U,
    "preferences.debug.mode": YU,
    "preferences.show.grid": ZU,
    "preferences.use.cad.selection": XU,
    "preferences.keep.stylemenu.open": qU,
    "preferences.always.show.snaps": JU,
    "preferences.rotate.handles": QU,
    "preferences.binding.handles": eK,
    "preferences.clone.handles": tK,
    undo: nK,
    redo: oK,
    cut: rK,
    copy: sK,
    paste: iK,
    "copy.as": aK,
    "export.as": lK,
    "select.all": dK,
    "select.none": cK,
    delete: pK,
    "new.project": uK,
    open: hK,
    save: mK,
    "save.as": gK,
    "upload.media": fK,
    "create.page": SK,
    "new.page": bK,
    "page.name": TK,
    duplicate: yK,
    cancel: xK,
    "copy.invite.link": wK,
    "copy.readonly.link": kK,
    "create.multiplayer.project": vK,
    "copy.multiplayer.project": IK,
    select: CK,
    eraser: DK,
    draw: PK,
    arrow: MK,
    text: BK,
    sticky: EK,
    rectangle: RK,
    ellipse: AK,
    triangle: LK,
    line: HK,
    rotate: zK,
    "lock.aspect.ratio": OK,
    "unlock.aspect.ratio": FK,
    group: jK,
    ungroup: GK,
    "move.to.back": VK,
    "move.backward": $K,
    "move.forward": NK,
    "move.to.front": WK,
    "reset.angle": UK,
    lock: KK,
    unlock: _K,
    "align.distribute": YK,
    "move.to.page": ZK,
    "flip.horizontal": XK,
    "flip.vertical": qK,
    move: JK,
    "to.front": QK,
    forward: e_,
    backward: t_,
    back: n_,
    language: o_,
    "translation.link": r_,
    "dock.position": s_,
    bottom: i_,
    left: a_,
    right: l_,
    top: d_,
    page: c_,
    "keyboard.shortcuts": p_,
    search: u_,
    loading: h_,
    "export.background": m_,
    transparent: g_,
    auto: f_,
    light: S_,
    dark: b_,
    image: T_,
    "align.left": y_,
    "align.center.x": x_,
    "align.right": w_,
    "align.top": k_,
    "align.center.y": v_,
    "align.bottom": I_,
    "distribute.x": C_,
    "distribute.y": D_,
    "stretch.x": P_,
    "stretch.y": M_,
    share: B_,
    "copy.current.page.link": E_,
    "copy.project.link": R_,
    "data.too.big.encoded": A_,
    "dialog.save.firsttime": L_,
    "dialog.save.again": H_,
    "dialog.cancel": z_,
    "dialog.no": O_,
    "dialog.yes": F_,
    "enter.file.name": j_,
  };
var G_ = "F\xE4rg",
  V_ = "Ifylld",
  $_ = "Streck",
  N_ = "Storlek",
  W_ = "H\xE5ll stilmenyn \xF6ppen",
  U_ = "Typsnitt",
  K_ = "Justera",
  __ = "Utseende",
  Y_ = "Zooma in",
  Z_ = "Zooma ut",
  X_ = "Till",
  q_ = "Verktyg",
  J_ = "Transform",
  Q_ = "Arkiv",
  eY = "Redigera",
  tY = "Inneh\xE5ll",
  nY = "Inst\xE4llningar",
  oY = "Logga in",
  rY = "Logga ut",
  sY = "Bli en sponsor",
  iY = "Anpassa zoom till inneh\xE5ll",
  aY = "Anpassa zoom till urval",
  lY = "Anpassa zoom till sk\xE4rm",
  dY = "Zooma till",
  cY = "M\xF6rkt l\xE4ge",
  pY = "Fokusl\xE4ge",
  uY = "Debugl\xE4ge",
  hY = "Visa rutn\xE4t",
  mY = "V\xE4lj som i CAD-mjukvara",
  gY = "H\xE5ll stilmenyn \xF6ppen",
  fY = "Visa alltid f\xE4stpunkter",
  SY = "Rotationshandtag",
  bY = "Bindningshandtag",
  TY = "Kloningshandtag",
  yY = "\xC5ngra",
  xY = "G\xF6r om",
  wY = "Klipp ut",
  kY = "Kopiera",
  vY = "Klistra in",
  IY = "Kopiera som",
  CY = "Exportera till",
  DY = "V\xE4lj alla",
  PY = "V\xE4lj ingen",
  MY = "Radera",
  BY = "Nytt projekt",
  EY = "\xD6ppna",
  RY = "Spara",
  AY = "Spara som",
  LY = "Ladda upp media",
  HY = "Skapa sida",
  zY = "Ny sida",
  OY = "Sidnamn",
  FY = "Duplicera",
  jY = "Avbryt",
  GY = "Kopiera l\xE4nk med redigeringsr\xE4ttigheter",
  VY = "Kopiera l\xE4nk med l\xE4sr\xE4ttigheter",
  $Y = "Skapa ett Multiplayer-projekt",
  NY = "Kopiera till Multiplayer-project",
  WY = "V\xE4lj",
  UY = "Radera",
  KY = "Rita",
  _Y = "Pil",
  YY = "Text",
  ZY = "Klisterlapp",
  XY = "Rektangel",
  qY = "Ellips",
  JY = "Triangel",
  QY = "Linje",
  eZ = "Rotera",
  tZ = "L\xE5s storleksf\xF6rh\xE5llande",
  nZ = "L\xE5s upp storleksf\xF6rh\xE5llande",
  oZ = "Gruppera",
  rZ = "Avgruppera",
  sZ = "Placera l\xE4ngst bak",
  iZ = "Flytta bak\xE5t",
  aZ = "Flytta fram\xE5t",
  lZ = "Placera l\xE4ngst fram",
  dZ = "\xC5terst\xE4ll vinkel",
  cZ = "L\xE5s",
  pZ = "L\xE5s upp",
  uZ = "Justera / Placera",
  hZ = "Flytta till sida",
  mZ = "V\xE4nd horisontellt",
  gZ = "V\xE4nd vertikalt",
  fZ = "Flytta",
  SZ = "Till l\xE4ngst fram",
  bZ = "Fram\xE5t",
  TZ = "Bak\xE5t",
  yZ = "Till l\xE4ngst bak",
  xZ = "Spr\xE5k",
  wZ = "Mer information",
  kZ = "Dockningsposition",
  vZ = "Botten",
  IZ = "V\xE4nster",
  CZ = "H\xF6ger",
  DZ = "Topp",
  PZ = "Sida",
  MZ = "Tangentbordsgenv\xE4gar",
  BZ = "S\xF6k",
  EZ = "Laddar{dots}",
  RZ = "Exportbakgrund",
  AZ = "Transparent",
  LZ = "Auto",
  HZ = "Ljus",
  zZ = "M\xF6rk",
  OZ = "Github",
  FZ = "Twitter",
  jZ = "Discord",
  GZ = "Bild",
  Pl = {
    "style.menu.color": G_,
    "style.menu.fill": V_,
    "style.menu.dash": $_,
    "style.menu.size": N_,
    "style.menu.keep.open": W_,
    "style.menu.font": U_,
    "style.menu.align": K_,
    styles: __,
    "zoom.in": Y_,
    "zoom.out": Z_,
    to: X_,
    "menu.tools": q_,
    "menu.transform": J_,
    "menu.file": Q_,
    "menu.edit": eY,
    "menu.view": tY,
    "menu.preferences": nY,
    "menu.sign.in": oY,
    "menu.sign.out": rY,
    "become.a.sponsor": sY,
    "zoom.to.content": iY,
    "zoom.to.selection": aY,
    "zoom.to.fit": lY,
    "zoom.to": dY,
    "preferences.dark.mode": cY,
    "preferences.focus.mode": pY,
    "preferences.debug.mode": uY,
    "preferences.show.grid": hY,
    "preferences.use.cad.selection": mY,
    "preferences.keep.stylemenu.open": gY,
    "preferences.always.show.snaps": fY,
    "preferences.rotate.handles": SY,
    "preferences.binding.handles": bY,
    "preferences.clone.handles": TY,
    undo: yY,
    redo: xY,
    cut: wY,
    copy: kY,
    paste: vY,
    "copy.as": IY,
    "export.as": CY,
    "select.all": DY,
    "select.none": PY,
    delete: MY,
    "new.project": BY,
    open: EY,
    save: RY,
    "save.as": AY,
    "upload.media": LY,
    "create.page": HY,
    "new.page": zY,
    "page.name": OY,
    duplicate: FY,
    cancel: jY,
    "copy.invite.link": GY,
    "copy.readonly.link": VY,
    "create.multiplayer.project": $Y,
    "copy.multiplayer.project": NY,
    select: WY,
    eraser: UY,
    draw: KY,
    arrow: _Y,
    text: YY,
    sticky: ZY,
    rectangle: XY,
    ellipse: qY,
    triangle: JY,
    line: QY,
    rotate: eZ,
    "lock.aspect.ratio": tZ,
    "unlock.aspect.ratio": nZ,
    group: oZ,
    ungroup: rZ,
    "move.to.back": sZ,
    "move.backward": iZ,
    "move.forward": aZ,
    "move.to.front": lZ,
    "reset.angle": dZ,
    lock: cZ,
    unlock: pZ,
    "align.distribute": uZ,
    "move.to.page": hZ,
    "flip.horizontal": mZ,
    "flip.vertical": gZ,
    move: fZ,
    "to.front": SZ,
    forward: bZ,
    backward: TZ,
    back: yZ,
    language: xZ,
    "translation.link": wZ,
    "dock.position": kZ,
    bottom: vZ,
    left: IZ,
    right: CZ,
    top: DZ,
    page: PZ,
    "keyboard.shortcuts": MZ,
    search: BZ,
    loading: EZ,
    "export.background": RZ,
    transparent: AZ,
    auto: LZ,
    light: HZ,
    dark: zZ,
    github: OZ,
    twitter: FZ,
    discord: jZ,
    image: GZ,
  };
var VZ = "\u0C30\u0C02\u0C17\u0C41",
  $Z = "\u0C28\u0C3F\u0C02\u0C2A\u0C41",
  NZ = "\u0C05\u0C21\u0C4D\u0C21 \u0C17\u0C40\u0C24",
  WZ = "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02",
  UZ = "\u0C24\u0C46\u0C30\u0C3F\u0C1A\u0C3F \u0C09\u0C02\u0C1A\u0C41",
  KZ = "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C15\u0C43\u0C24\u0C3F",
  _Z = "\u0C38\u0C30\u0C3F\u0C2A\u0C30\u0C1A\u0C41",
  YZ = "\u0C35\u0C3F\u0C27\u0C2E\u0C41\u0C32\u0C41",
  ZZ = "\u0C26\u0C17\u0C4D\u0C17\u0C30\u0C17\u0C3E \u0C1A\u0C42\u0C2A\u0C41",
  XZ = "\u0C26\u0C42\u0C30\u0C02\u0C17\u0C3E \u0C1A\u0C42\u0C2A\u0C41",
  qZ = "\u0C35\u0C26\u0C4D\u0C26\u0C15\u0C41",
  JZ = "\u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C3E\u0C32\u0C41",
  QZ = "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
  eX = "\u0C2B\u0C48\u0C32\u0C4D",
  tX = "\u0C2A\u0C30\u0C3F\u0C37\u0C4D\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C41",
  nX = "\u0C1A\u0C42\u0C2A\u0C41",
  oX = "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C35\u0C3F",
  rX = "\u0C2A\u0C4D\u0C30\u0C35\u0C47\u0C36\u0C3F\u0C02\u0C1A\u0C41",
  sX = "\u0C28\u0C3F\u0C37\u0C4D\u0C15\u0C4D\u0C30\u0C2E\u0C23",
  iX =
    "\u0C35\u0C3F\u0C30\u0C3E\u0C33\u0C26\u0C3E\u0C30\u0C41\u0C32\u0C41 \u0C05\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F",
  aX =
    "\u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C47 \u0C1A\u0C42\u0C2A\u0C41",
  lX =
    "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C47 \u0C1A\u0C42\u0C2A\u0C41",
  dX =
    "\u0C38\u0C30\u0C3F\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C3F \u0C1A\u0C42\u0C2A\u0C41",
  cX = "\u0C1A\u0C42\u0C2A\u0C41",
  pX = "\u0C1A\u0C40\u0C15\u0C1F\u0C48\u0C28 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  uX = "\u0C24\u0C40\u0C15\u0C4D\u0C37\u0C23 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  hX =
    "\u0C24\u0C2A\u0C4D\u0C2A\u0C41\u0C32\u0C47\u0C30\u0C41 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  mX = "\u0C1A\u0C1F\u0C4D\u0C30\u0C02 \u0C1A\u0C42\u0C2A\u0C41",
  gX = "CAD\u0C28\u0C3F \u0C35\u0C3E\u0C21\u0C41",
  fX =
    "\u0C35\u0C3F\u0C27\u0C2E\u0C41\u0C32 \u0C2A\u0C24\u0C4D\u0C24\u0C3F \u0C24\u0C46\u0C30\u0C3F\u0C1A\u0C3F\u0C35\u0C41\u0C02\u0C1A\u0C41",
  SX =
    "\u0C0E\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C42 \u0C26\u0C43\u0C36\u0C4D\u0C2F\u0C2D\u0C3E\u0C17\u0C02 \u0C1A\u0C42\u0C2A\u0C41",
  bX =
    "\u0C39\u0C4D\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C41",
  TX =
    "\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C15\u0C1F\u0C4D\u0C1F\u0C41",
  yX =
    "\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C28\u0C15\u0C32\u0C41",
  xX =
    "\u0C2E\u0C3E\u0C30\u0C4D\u0C2A\u0C41\u0C28\u0C3F \u0C24\u0C3F\u0C30\u0C41\u0C17\u0C17\u0C4A\u0C1F\u0C4D\u0C1F\u0C41",
  wX = "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
  kX = "\u0C15\u0C24\u0C4D\u0C24\u0C3F\u0C30\u0C3F\u0C02\u0C1A\u0C41",
  vX = "\u0C28\u0C15\u0C32\u0C41",
  IX = "\u0C05\u0C24\u0C3F\u0C15\u0C3F\u0C02\u0C1A\u0C41",
  CX =
    "\u0C28\u0C15\u0C32\u0C41\u0C2A\u0C4D\u0C30\u0C24\u0C3F\u0C17\u0C3E \u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C15\u0C3F",
  DX =
    "\u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F \u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C15\u0C3F",
  PX =
    "\u0C05\u0C28\u0C4D\u0C28\u0C40 \u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  MX =
    "\u0C0E\u0C26\u0C40 \u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41",
  BX = "\u0C24\u0C4A\u0C32\u0C17\u0C3F\u0C02\u0C1A\u0C41",
  EX =
    "\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41",
  RX = "\u0C24\u0C46\u0C30\u0C41\u0C35\u0C41",
  AX = "\u0C26\u0C3E\u0C2F\u0C3F",
  LX = "\u0C07\u0C32\u0C3E \u0C26\u0C3E\u0C2F\u0C3F",
  HX =
    "\u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F \u0C2E\u0C3E\u0C27\u0C4D\u0C2F\u0C02",
  zX = "\u0C2A\u0C41\u0C1F \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C41",
  OX = "\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C2A\u0C41\u0C1F",
  FX = "\u0C2A\u0C41\u0C1F \u0C2A\u0C47\u0C30\u0C41",
  jX = "\u0C2E\u0C3E\u0C30\u0C41\u0C2A\u0C4D\u0C30\u0C24\u0C3F",
  GX = "\u0C30\u0C26\u0C4D\u0C26\u0C41\u0C1A\u0C47\u0C2F\u0C3F",
  VX =
    "\u0C05\u0C39\u0C4D\u0C35\u0C3E\u0C28 \u0C32\u0C3F\u0C02\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  $X =
    "\u0C2E\u0C3E\u0C30\u0C28\u0C3F\u0C2A\u0C4D\u0C30\u0C24\u0C3F \u0C32\u0C3F\u0C02\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  NX =
    "\u0C2C\u0C39\u0C41\u0C15\u0C30\u0C4D\u0C24\u0C32 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41 \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C41",
  WX =
    "\u0C2C\u0C39\u0C41\u0C15\u0C30\u0C4D\u0C24\u0C32 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  UX = "\u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  KX = "Eraser",
  _X = "\u0C17\u0C40\u0C2F\u0C4D\u0C2F\u0C3F",
  YX = "\u0C2C\u0C3E\u0C23\u0C02",
  ZX = "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C2E\u0C41\u0C32\u0C41",
  XX = "\u0C05\u0C24\u0C41\u0C15\u0C4D\u0C15\u0C41\u0C28\u0C47",
  qX =
    "\u0C26\u0C40\u0C30\u0C4D\u0C18\u0C1A\u0C24\u0C41\u0C30\u0C38\u0C4D\u0C30\u0C02",
  JX = "\u0C26\u0C40\u0C30\u0C4D\u0C18\u0C35\u0C43\u0C24\u0C4D\u0C24\u0C02",
  QX = "\u0C24\u0C4D\u0C30\u0C3F\u0C2D\u0C41\u0C1C\u0C02",
  eq = "\u0C17\u0C40\u0C24",
  tq = "\u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C41",
  nq =
    "\u0C06\u0C38\u0C4D\u0C2A\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C28\u0C3F\u0C37\u0C4D\u0C2A\u0C24\u0C4D\u0C24\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C33\u0C02\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C41",
  oq =
    "\u0C06\u0C38\u0C4D\u0C2A\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C28\u0C3F\u0C37\u0C4D\u0C2A\u0C24\u0C4D\u0C24\u0C3F \u0C24\u0C3E\u0C33\u0C02\u0C24\u0C46\u0C30\u0C41\u0C35\u0C41",
  rq =
    "\u0C17\u0C41\u0C02\u0C2A\u0C41\u0C17\u0C3E \u0C0F\u0C30\u0C4D\u0C2A\u0C30\u0C1A\u0C41",
  sq =
    "\u0C17\u0C41\u0C02\u0C2A\u0C41\u0C28\u0C41 \u0C1A\u0C46\u0C26\u0C30\u0C17\u0C4A\u0C1F\u0C4D\u0C1F\u0C41",
  iq = "\u0C06\u0C16\u0C30\u0C3F\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  aq =
    "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41 \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  lq =
    "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  dq =
    "\u0C2E\u0C4A\u0C26\u0C1F\u0C3F\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  cq = "\u0C15\u0C4B\u0C23\u0C02 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D",
  pq = "\u0C24\u0C3E\u0C33\u0C02 \u0C35\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  uq = "\u0C24\u0C3E\u0C33\u0C02 \u0C24\u0C3F\u0C2F\u0C4D\u0C2F\u0C3F",
  hq =
    " \u0C38\u0C30\u0C3F\u0C2A\u0C30\u0C1A\u0C41/\u0C35\u0C46\u0C26\u0C1C\u0C32\u0C4D\u0C32\u0C41",
  mq =
    "\u0C2A\u0C41\u0C1F\u0C32\u0C4B\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  gq =
    "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2A\u0C32\u0C4D\u0C1F\u0C40",
  fq =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2A\u0C32\u0C4D\u0C1F\u0C40",
  Sq = "\u0C1C\u0C30\u0C41\u0C2A\u0C41",
  bq = "\u0C2E\u0C4A\u0C26\u0C1F\u0C3F\u0C15\u0C3F",
  Tq = "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C15\u0C41",
  yq = "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41",
  xq = "\u0C06\u0C16\u0C30\u0C3F\u0C15\u0C3F",
  wq = "\u0C2D\u0C3E\u0C37",
  kq =
    "\u0C2E\u0C30\u0C3F \u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C3F \u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C32\u0C41",
  vq = "\u0C2E\u0C02\u0C1A \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C02",
  Iq = "\u0C05\u0C21\u0C41\u0C17\u0C41\u0C28",
  Cq = "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41",
  Dq = "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41",
  Pq = "\u0C2A\u0C48\u0C28",
  Mq = "\u0C2A\u0C41\u0C24",
  Bq =
    "\u0C15\u0C40\u0C2C\u0C4B\u0C30\u0C4D\u0C21\u0C4D \u0C38\u0C24\u0C4D\u0C35\u0C30\u0C2E\u0C3E\u0C30\u0C4D\u0C17\u0C02",
  Eq = "\u0C35\u0C46\u0C24\u0C41\u0C15\u0C41",
  Rq = "Loading{dots}",
  Aq =
    "\u0C28\u0C47\u0C2A\u0C25\u0C4D\u0C2F\u0C02 \u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F",
  Lq =
    "\u0C15\u0C3E\u0C02\u0C24\u0C3F \u0C2D\u0C47\u0C26\u0C4D\u0C2F\u0C2E\u0C41",
  Hq = "\u0C38\u0C4D\u0C35\u0C2F\u0C02\u0C15\u0C43\u0C24\u0C02",
  zq = "\u0C35\u0C46\u0C32\u0C41\u0C24\u0C41\u0C30\u0C41",
  Oq = "\u0C1A\u0C40\u0C15\u0C1F\u0C3F",
  Fq = "Github",
  jq = "Twitter",
  Gq = "Discord",
  Vq = "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C02",
  $q =
    "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  Nq =
    "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  Wq =
    "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  Uq =
    "\u0C2A\u0C48\u0C15\u0C3F \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  Kq =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  _q =
    "\u0C05\u0C21\u0C41\u0C17\u0C41\u0C28 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  Yq = "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2A\u0C02\u0C1A\u0C41",
  Zq =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2A\u0C02\u0C1A\u0C41",
  Xq = "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C32\u0C3E\u0C17\u0C41",
  qq =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C32\u0C3E\u0C17\u0C41",
  Jq =
    "\u0C2E\u0C40\u0C30\u0C41 \u0C08 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C2A\u0C30\u0C1A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E?",
  Qq =
    "\u0C2E\u0C40\u0C30\u0C41 \u0C08 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C2A\u0C30\u0C1A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E?",
  eJ = "\u0C30\u0C26\u0C4D\u0C26\u0C41\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  tJ = "\u0C35\u0C26\u0C4D\u0C26\u0C41",
  nJ = "\u0C38\u0C30\u0C47",
  oJ =
    "\u0C2B\u0C48\u0C32\u0C4D \u0C2A\u0C46\u0C30\u0C41 \u0C1A\u0C46\u0C2A\u0C4D\u0C2A\u0C02\u0C21\u0C3F",
  Ml = {
    "style.menu.color": VZ,
    "style.menu.fill": $Z,
    "style.menu.dash": NZ,
    "style.menu.size": WZ,
    "style.menu.keep.open": UZ,
    "style.menu.font": KZ,
    "style.menu.align": _Z,
    styles: YZ,
    "zoom.in": ZZ,
    "zoom.out": XZ,
    to: qZ,
    "menu.tools": JZ,
    "menu.transform": QZ,
    "menu.file": eX,
    "menu.edit": tX,
    "menu.view": nX,
    "menu.preferences": oX,
    "menu.sign.in": rX,
    "menu.sign.out": sX,
    "become.a.sponsor": iX,
    "zoom.to.content": aX,
    "zoom.to.selection": lX,
    "zoom.to.fit": dX,
    "zoom.to": cX,
    "preferences.dark.mode": pX,
    "preferences.focus.mode": uX,
    "preferences.debug.mode": hX,
    "preferences.show.grid": mX,
    "preferences.use.cad.selection": gX,
    "preferences.keep.stylemenu.open": fX,
    "preferences.always.show.snaps": SX,
    "preferences.rotate.handles": bX,
    "preferences.binding.handles": TX,
    "preferences.clone.handles": yX,
    undo: xX,
    redo: wX,
    cut: kX,
    copy: vX,
    paste: IX,
    "copy.as": CX,
    "export.as": DX,
    "select.all": PX,
    "select.none": MX,
    delete: BX,
    "new.project": EX,
    open: RX,
    save: AX,
    "save.as": LX,
    "upload.media": HX,
    "create.page": zX,
    "new.page": OX,
    "page.name": FX,
    duplicate: jX,
    cancel: GX,
    "copy.invite.link": VX,
    "copy.readonly.link": $X,
    "create.multiplayer.project": NX,
    "copy.multiplayer.project": WX,
    select: UX,
    eraser: KX,
    draw: _X,
    arrow: YX,
    text: ZX,
    sticky: XX,
    rectangle: qX,
    ellipse: JX,
    triangle: QX,
    line: eq,
    rotate: tq,
    "lock.aspect.ratio": nq,
    "unlock.aspect.ratio": oq,
    group: rq,
    ungroup: sq,
    "move.to.back": iq,
    "move.backward": aq,
    "move.forward": lq,
    "move.to.front": dq,
    "reset.angle": cq,
    lock: pq,
    unlock: uq,
    "align.distribute": hq,
    "move.to.page": mq,
    "flip.horizontal": gq,
    "flip.vertical": fq,
    move: Sq,
    "to.front": bq,
    forward: Tq,
    backward: yq,
    back: xq,
    language: wq,
    "translation.link": kq,
    "dock.position": vq,
    bottom: Iq,
    left: Cq,
    right: Dq,
    top: Pq,
    page: Mq,
    "keyboard.shortcuts": Bq,
    search: Eq,
    loading: Rq,
    "export.background": Aq,
    transparent: Lq,
    auto: Hq,
    light: zq,
    dark: Oq,
    github: Fq,
    twitter: jq,
    discord: Gq,
    image: Vq,
    "align.left": $q,
    "align.center.x": Nq,
    "align.right": Wq,
    "align.top": Uq,
    "align.center.y": Kq,
    "align.bottom": _q,
    "distribute.x": Yq,
    "distribute.y": Zq,
    "stretch.x": Xq,
    "stretch.y": qq,
    "dialog.save.firsttime": Jq,
    "dialog.save.again": Qq,
    "dialog.cancel": eJ,
    "dialog.no": tJ,
    "dialog.yes": nJ,
    "enter.file.name": oJ,
  };
var rJ = "\u0E2A\u0E35",
  sJ = "\u0E40\u0E15\u0E34\u0E21",
  iJ = "\u0E01\u0E23\u0E2D\u0E1A",
  aJ = "\u0E02\u0E19\u0E32\u0E14",
  lJ = "\u0E40\u0E1B\u0E34\u0E14\u0E17\u0E34\u0E49\u0E07\u0E44\u0E27\u0E49",
  dJ = "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23",
  cJ = "\u0E08\u0E31\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07",
  pJ = "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A",
  uJ = "\u0E0B\u0E39\u0E21\u0E40\u0E02\u0E49\u0E32",
  hJ = "\u0E0B\u0E39\u0E21\u0E2D\u0E2D\u0E01",
  mJ = "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48",
  gJ = "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
  fJ = "\u0E41\u0E1B\u0E25\u0E07",
  SJ = "\u0E44\u0E1F\u0E25\u0E4C",
  bJ = "\u0E41\u0E01\u0E49\u0E44\u0E02",
  TJ = "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07",
  yJ = "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  xJ = "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
  wJ = "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
  kJ =
    "\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E1B\u0E2D\u0E19\u0E40\u0E0B\u0E2D\u0E23\u0E4C",
  vJ =
    "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
  IJ =
    "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  CJ =
    "\u0E0B\u0E39\u0E21\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21\u0E1E\u0E2D\u0E14\u0E35",
  DJ = "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48",
  PJ = "\u0E42\u0E2B\u0E21\u0E14\u0E21\u0E37\u0E14",
  MJ = "\u0E42\u0E2B\u0E21\u0E14\u0E42\u0E1F\u0E01\u0E31\u0E2A",
  BJ = "\u0E42\u0E2B\u0E21\u0E14\u0E14\u0E35\u0E1A\u0E31\u0E01",
  EJ = "\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07",
  RJ = "\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E1A CAD",
  AJ =
    "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E34\u0E49\u0E07\u0E44\u0E27\u0E49",
  LJ =
    "\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E41\u0E19\u0E1B\u0E15\u0E25\u0E2D\u0E14",
  HJ =
    "\u0E41\u0E2A\u0E14\u0E07\u0E08\u0E38\u0E14\u0E08\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E38\u0E19",
  zJ =
    "\u0E41\u0E2A\u0E14\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07",
  OJ = "\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E31\u0E27\u0E42\u0E04\u0E25\u0E19",
  FJ = "\u0E40\u0E25\u0E34\u0E01\u0E17\u0E33",
  jJ = "\u0E17\u0E33\u0E0B\u0E49\u0E33",
  GJ = "\u0E15\u0E31\u0E14",
  VJ = "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01",
  $J = "\u0E27\u0E32\u0E07",
  NJ = "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19",
  WJ = "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19",
  UJ =
    "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  KJ =
    "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  _J = "\u0E25\u0E1A",
  YJ =
    "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48",
  ZJ = "\u0E40\u0E1B\u0E34\u0E14",
  XJ = "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  qJ = "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E1B\u0E47\u0E19",
  JJ =
    "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22",
  QJ = "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
  eQ = "\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48",
  tQ = "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32",
  nQ = "\u0E2A\u0E33\u0E40\u0E19\u0E32",
  oQ = "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  rQ =
    "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E40\u0E0A\u0E34\u0E0D",
  sQ =
    "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E41\u0E1A\u0E1A\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27",
  iQ =
    "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E19",
  aQ =
    "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E19",
  lQ = "\u0E40\u0E25\u0E37\u0E2D\u0E01",
  dQ = "\u0E22\u0E32\u0E07\u0E25\u0E1A",
  cQ = "\u0E27\u0E32\u0E14",
  pQ = "\u0E25\u0E39\u0E01\u0E28\u0E23",
  uQ = "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  hQ = "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E42\u0E19\u0E4A\u0E15",
  mQ =
    "\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E1C\u0E37\u0E19\u0E1C\u0E49\u0E32",
  gQ = "\u0E27\u0E07\u0E23\u0E35",
  fQ = "\u0E2A\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21",
  SQ = "\u0E40\u0E2A\u0E49\u0E19",
  bQ = "\u0E2B\u0E21\u0E38\u0E19",
  TQ =
    "\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E20\u0E32\u0E1E",
  yQ =
    "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E20\u0E32\u0E1E",
  xQ = "\u0E01\u0E25\u0E38\u0E48\u0E21",
  wQ = "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E25\u0E38\u0E48\u0E21",
  kQ =
    "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
  vQ = "\u0E02\u0E22\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07",
  IQ = "\u0E02\u0E22\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32",
  CQ =
    "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
  DQ = "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E21\u0E38\u0E21",
  PQ = "\u0E25\u0E47\u0E2D\u0E04",
  MQ = "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E04",
  BQ =
    "\u0E08\u0E31\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 / \u0E01\u0E23\u0E30\u0E08\u0E32\u0E22",
  EQ =
    "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32",
  RQ = "\u0E1E\u0E25\u0E34\u0E01\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  AQ = "\u0E1E\u0E25\u0E34\u0E01\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  LQ = "\u0E22\u0E49\u0E32\u0E22",
  HQ =
    "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
  zQ = "\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
  OQ = "\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07",
  FQ =
    "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
  jQ = "\u0E20\u0E32\u0E29\u0E32",
  GQ =
    "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  VQ =
    "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E41\u0E16\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
  $Q = "\u0E02\u0E49\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07",
  NQ = "\u0E02\u0E49\u0E32\u0E07\u0E0B\u0E49\u0E32\u0E22",
  WQ = "\u0E02\u0E49\u0E32\u0E07\u0E02\u0E27\u0E32",
  UQ = "\u0E02\u0E49\u0E32\u0E07\u0E1A\u0E19",
  KQ = "\u0E2B\u0E19\u0E49\u0E32",
  _Q =
    "\u0E41\u0E1B\u0E49\u0E19\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E25\u0E31\u0E14",
  YQ = "\u0E04\u0E49\u0E19\u0E2B\u0E32",
  ZQ = "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14{dots}",
  XQ =
    "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07",
  qQ = "\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A",
  JQ = "\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
  QQ = "\u0E2A\u0E27\u0E48\u0E32\u0E07",
  eee = "\u0E21\u0E37\u0E14",
  tee = "Github",
  nee = "Twitter",
  oee = "Discord",
  ree = "\u0E20\u0E32\u0E1E",
  see =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E0A\u0E34\u0E14\u0E0B\u0E49\u0E32\u0E22",
  iee =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  aee =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E0A\u0E34\u0E14\u0E02\u0E27\u0E32",
  lee =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19",
  dee =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  cee =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
  pee =
    "\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  uee =
    "\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  hee = "\u0E22\u0E37\u0E14\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  mee = "\u0E22\u0E37\u0E14\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  gee =
    "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E47\u0E01\u0E15\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  fee =
    "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E43\u0E19\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E47\u0E01\u0E15\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  See = "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  bee = "\u0E44\u0E21\u0E48",
  Tee = "\u0E43\u0E0A\u0E48",
  yee =
    "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C",
  Bl = {
    "style.menu.color": rJ,
    "style.menu.fill": sJ,
    "style.menu.dash": iJ,
    "style.menu.size": aJ,
    "style.menu.keep.open": lJ,
    "style.menu.font": dJ,
    "style.menu.align": cJ,
    styles: pJ,
    "zoom.in": uJ,
    "zoom.out": hJ,
    to: mJ,
    "menu.tools": gJ,
    "menu.transform": fJ,
    "menu.file": SJ,
    "menu.edit": bJ,
    "menu.view": TJ,
    "menu.preferences": yJ,
    "menu.sign.in": xJ,
    "menu.sign.out": wJ,
    "become.a.sponsor": kJ,
    "zoom.to.content": vJ,
    "zoom.to.selection": IJ,
    "zoom.to.fit": CJ,
    "zoom.to": DJ,
    "preferences.dark.mode": PJ,
    "preferences.focus.mode": MJ,
    "preferences.debug.mode": BJ,
    "preferences.show.grid": EJ,
    "preferences.use.cad.selection": RJ,
    "preferences.keep.stylemenu.open": AJ,
    "preferences.always.show.snaps": LJ,
    "preferences.rotate.handles": HJ,
    "preferences.binding.handles": zJ,
    "preferences.clone.handles": OJ,
    undo: FJ,
    redo: jJ,
    cut: GJ,
    copy: VJ,
    paste: $J,
    "copy.as": NJ,
    "export.as": WJ,
    "select.all": UJ,
    "select.none": KJ,
    delete: _J,
    "new.project": YJ,
    open: ZJ,
    save: XJ,
    "save.as": qJ,
    "upload.media": JJ,
    "create.page": QJ,
    "new.page": eQ,
    "page.name": tQ,
    duplicate: nQ,
    cancel: oQ,
    "copy.invite.link": rQ,
    "copy.readonly.link": sQ,
    "create.multiplayer.project": iQ,
    "copy.multiplayer.project": aQ,
    select: lQ,
    eraser: dQ,
    draw: cQ,
    arrow: pQ,
    text: uQ,
    sticky: hQ,
    rectangle: mQ,
    ellipse: gQ,
    triangle: fQ,
    line: SQ,
    rotate: bQ,
    "lock.aspect.ratio": TQ,
    "unlock.aspect.ratio": yQ,
    group: xQ,
    ungroup: wQ,
    "move.to.back": kQ,
    "move.backward": vQ,
    "move.forward": IQ,
    "move.to.front": CQ,
    "reset.angle": DQ,
    lock: PQ,
    unlock: MQ,
    "align.distribute": BQ,
    "move.to.page": EQ,
    "flip.horizontal": RQ,
    "flip.vertical": AQ,
    move: LQ,
    "to.front": HQ,
    forward: zQ,
    backward: OQ,
    back: FQ,
    language: jQ,
    "translation.link": GQ,
    "dock.position": VQ,
    bottom: $Q,
    left: NQ,
    right: WQ,
    top: UQ,
    page: KQ,
    "keyboard.shortcuts": _Q,
    search: YQ,
    loading: ZQ,
    "export.background": XQ,
    transparent: qQ,
    auto: JQ,
    light: QQ,
    dark: eee,
    github: tee,
    twitter: nee,
    discord: oee,
    image: ree,
    "align.left": see,
    "align.center.x": iee,
    "align.right": aee,
    "align.top": lee,
    "align.center.y": dee,
    "align.bottom": cee,
    "distribute.x": pee,
    "distribute.y": uee,
    "stretch.x": hee,
    "stretch.y": mee,
    "dialog.save.firsttime": gee,
    "dialog.save.again": fee,
    "dialog.cancel": See,
    "dialog.no": bee,
    "dialog.yes": Tee,
    "enter.file.name": yee,
  };
var xee = "Renk",
  wee = "Doldur",
  kee = "\xC7izgi",
  vee = "Boyut",
  Iee = "A\xE7\u0131k Tut",
  Cee = "Yaz\u0131 Tipi",
  Dee = "Hizala",
  Pee = "Stiller",
  Mee = "Yak\u0131nla\u015Ft\u0131r",
  Bee = "Uzakla\u015Ft\u0131r",
  Eee = "",
  Ree = "Dosya",
  Aee = "D\xFCzenle",
  Lee = "G\xF6r\xFCnt\xFC",
  Hee = "Tercihler",
  zee = "Giri\u015F Yap",
  Oee = "Oturumu Kapat",
  Fee = "Sponsor Ol",
  jee = "Se\xE7ime Yak\u0131nla\u015Ft\u0131r",
  Gee = "S\u0131\u011Fd\u0131rmak i\xE7in Yak\u0131nla\u015Ft\u0131r",
  Vee = "Yak\u0131nla\u015Ft\u0131r",
  $ee = "Karanl\u0131k Mod",
  Nee = "Odak Modu",
  Wee = "Debug Modu",
  Uee = "Izgaray\u0131 G\xF6ster",
  Kee = "CAD Se\xE7imi Kullan",
  _ee = "Stil Men\xFCs\xFCn\xFC A\xE7\u0131k Tut",
  Yee = "Hiza \xC7izgilerini Hep G\xF6ster",
  Zee = "Rotasyon Kontrolc\xFCleri",
  Xee = "Ba\u011Flama Kontrolc\xFCleri",
  qee = "Klon Kontrolc\xFCleri",
  Jee = "Geri Al",
  Qee = "Yinele",
  ete = "Kes",
  tte = "Kopyala",
  nte = "Yap\u0131\u015Ft\u0131r",
  ote = "Olarak Kopyala",
  rte = "Olarak D\u0131\u015Far\u0131 Aktar",
  ste = "Hepsini Se\xE7",
  ite = "Hi\xE7birini Se\xE7me",
  ate = "Sil",
  lte = "Yeni Proje",
  dte = "A\xE7",
  cte = "Kaydet",
  pte = "Farkl\u0131 Kaydet",
  ute = "Medya Y\xFCkle",
  hte = "Sayfa Olu\u015Ftur",
  mte = "Yeni Sayfa",
  gte = "Sayfa \u0130smi",
  fte = "Kopya Olu\u015Ftur",
  Ste = "\u0130ptal",
  bte = "Davet Linkini Kopyala",
  Tte = "\xC7ok Oyunculu Proje Olu\u015Ftur",
  yte = "\xC7ok Oyunculu Projeye Kopyala",
  xte = "Se\xE7",
  wte = "Silgi",
  kte = "\xC7izim",
  vte = "Ok",
  Ite = "Yaz\u0131",
  Cte = "Yap\u0131\u015Fkan",
  Dte = "Dikd\xF6rtgen",
  Pte = "Elips",
  Mte = "\xDC\xE7gen",
  Bte = "\xC7izgi",
  Ete = "D\xF6nd\xFCr",
  Rte = "En Boy Oran\u0131n\u0131 Kilitle",
  Ate = "En Boy Oran\u0131 Kilidini A\xE7",
  Lte = "Grupla",
  Hte = "Gruplamay\u0131 Kald\u0131r",
  zte = "Arkaya Ta\u015F\u0131",
  Ote = "En Arkaya Ta\u015F\u0131",
  Fte = "En \xD6ne Ta\u015F\u0131",
  jte = "\xD6ne Ta\u015F\u0131",
  Gte = "A\xE7\u0131y\u0131 S\u0131f\u0131rla",
  Vte = "Kilitle",
  $te = "Kilidini A\xE7",
  Nte = "Sayfaya Ta\u015F\u0131",
  Wte = "Yatay \xC7evir",
  Ute = "Dikey \xC7evir",
  Kte = "Ta\u015F\u0131",
  _te = "\xD6ne",
  Yte = "En \xD6ne",
  Zte = "En Arkaya",
  Xte = "Arkaya",
  qte = "Dil",
  El = {
    "style.menu.color": xee,
    "style.menu.fill": wee,
    "style.menu.dash": kee,
    "style.menu.size": vee,
    "style.menu.keep.open": Iee,
    "style.menu.font": Cee,
    "style.menu.align": Dee,
    styles: Pee,
    "zoom.in": Mee,
    "zoom.out": Bee,
    to: Eee,
    "menu.file": Ree,
    "menu.edit": Aee,
    "menu.view": Lee,
    "menu.preferences": Hee,
    "menu.sign.in": zee,
    "menu.sign.out": Oee,
    "become.a.sponsor": Fee,
    "zoom.to.selection": jee,
    "zoom.to.fit": Gee,
    "zoom.to": Vee,
    "preferences.dark.mode": $ee,
    "preferences.focus.mode": Nee,
    "preferences.debug.mode": Wee,
    "preferences.show.grid": Uee,
    "preferences.use.cad.selection": Kee,
    "preferences.keep.stylemenu.open": _ee,
    "preferences.always.show.snaps": Yee,
    "preferences.rotate.handles": Zee,
    "preferences.binding.handles": Xee,
    "preferences.clone.handles": qee,
    undo: Jee,
    redo: Qee,
    cut: ete,
    copy: tte,
    paste: nte,
    "copy.as": ote,
    "export.as": rte,
    "select.all": ste,
    "select.none": ite,
    delete: ate,
    "new.project": lte,
    open: dte,
    save: cte,
    "save.as": pte,
    "upload.media": ute,
    "create.page": hte,
    "new.page": mte,
    "page.name": gte,
    duplicate: fte,
    cancel: Ste,
    "copy.invite.link": bte,
    "create.multiplayer.project": Tte,
    "copy.multiplayer.project": yte,
    select: xte,
    eraser: wte,
    draw: kte,
    arrow: vte,
    text: Ite,
    sticky: Cte,
    rectangle: Dte,
    ellipse: Pte,
    triangle: Mte,
    line: Bte,
    rotate: Ete,
    "lock.aspect.ratio": Rte,
    "unlock.aspect.ratio": Ate,
    group: Lte,
    ungroup: Hte,
    "move.to.back": zte,
    "move.backward": Ote,
    "move.forward": Fte,
    "move.to.front": jte,
    "reset.angle": Gte,
    lock: Vte,
    unlock: $te,
    "move.to.page": Nte,
    "flip.horizontal": Wte,
    "flip.vertical": Ute,
    move: Kte,
    "to.front": _te,
    forward: Yte,
    backward: Zte,
    back: Xte,
    language: qte,
  };
var Jte = "\u041A\u043E\u043B\u0456\u0440",
  Qte = "\u0417\u0430\u043F\u043E\u0432\u043D\u044E\u0432\u0430\u0442\u0438",
  ene = "\u0428\u0442\u0440\u0438\u0445",
  tne = "\u0420\u043E\u0437\u043C\u0456\u0440",
  nne =
    "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C",
  one = "\u0428\u0440\u0438\u0444\u0442",
  rne = "\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438",
  sne = "\u0421\u0442\u0438\u043B\u044C",
  ine = "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438",
  ane = "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438",
  lne = "\u0434\u043E",
  dne = "\u0424\u0430\u0439\u043B",
  cne = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F",
  pne = "\u0412\u0438\u0433\u043B\u044F\u0434",
  une =
    "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
  hne = "\u0423\u0432\u0456\u0439\u0442\u0438",
  mne = "\u0412\u0438\u0439\u0442\u0438",
  gne =
    "\u0421\u0442\u0430\u0442\u0438 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C",
  fne =
    "\u041D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438 \u0434\u043E \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  Sne =
    "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0437\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0435\u043A\u0440\u0430\u043D\u0443",
  bne = "\u041D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438 \u0434\u043E",
  Tne = "\u0422\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430",
  yne =
    "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
  xne =
    "\u0420\u0435\u0436\u0438\u043C \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
  wne =
    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0456\u0442\u043A\u0443",
  kne =
    "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 CAD \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  vne =
    "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u044E \u0441\u0442\u0438\u043B\u0456\u0432 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C",
  Ine =
    "\u0417\u0430\u0432\u0436\u0434\u0438 \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438",
  Cne =
    "\u0420\u0443\u0447\u043A\u0438 \u043E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F",
  Dne =
    "\u0420\u0443\u0447\u043A\u0438 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438",
  Pne =
    "\u0420\u0443\u0447\u043A\u0438 \u043A\u043B\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F",
  Mne = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  Bne = "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",
  Ene = "\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438",
  Rne = "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
  Ane = "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438",
  Lne =
    "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u044F\u043A",
  Hne =
    "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u044F\u043A",
  zne = "\u041E\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",
  One =
    "\u0417\u043D\u044F\u0442\u0438 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  Fne = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
  jne = "\u041D\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  Gne = "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",
  Vne = "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
  $ne = "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u044F\u043A",
  Nne =
    "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043C\u0435\u0434\u0456\u0430",
  Wne =
    "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
  Une =
    "\u041D\u043E\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
  Kne =
    "\u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
  _ne = "\u0414\u0443\u0431\u043B\u044E\u0432\u0430\u0442\u0438",
  Yne = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  Zne =
    "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F",
  Xne =
    "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  qne =
    "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0432 \u0431\u0430\u0433\u0430\u0442\u043E\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  Jne = "\u0412\u0438\u0431\u0438\u0440\u0430\u0442\u0438",
  Qne = "\u041B\u0430\u0441\u0442\u0438\u043A",
  eoe = "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438",
  toe = "\u0421\u0442\u0440\u0456\u043B\u043A\u0430",
  noe = "\u0422\u0435\u043A\u0441\u0442",
  ooe = "\u041D\u043E\u0442\u0430\u0442\u043A\u0430",
  roe = "\u041F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A",
  soe = "\u0415\u043B\u0456\u043F\u0441",
  ioe = "\u0422\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A",
  aoe = " \u041B\u0456\u043D\u0456\u044F",
  loe = "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438",
  doe =
    "\u0417\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D",
  coe =
    " \u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D",
  poe = "\u0417\u0433\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438",
  uoe =
    " \u0420\u043E\u0437\u0433\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438",
  hoe =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0434",
  moe =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  goe =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0432\u043F\u0435\u0440\u0435\u0434",
  foe =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  Soe =
    "\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043A\u0443\u0442\u0430",
  boe = "\u0411\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
  Toe =
    " \u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
  yoe =
    "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
  xoe =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  woe =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  koe = "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438",
  voe =
    "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  Ioe = " \u0412\u043F\u0435\u0440\u0435\u0434",
  Coe =
    "\u041D\u0430 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  Doe = "\u041D\u0430\u0437\u0430\u0434",
  Poe = "\u041C\u043E\u0432\u0430",
  Rl = {
    "style.menu.color": Jte,
    "style.menu.fill": Qte,
    "style.menu.dash": ene,
    "style.menu.size": tne,
    "style.menu.keep.open": nne,
    "style.menu.font": one,
    "style.menu.align": rne,
    styles: sne,
    "zoom.in": ine,
    "zoom.out": ane,
    to: lne,
    "menu.file": dne,
    "menu.edit": cne,
    "menu.view": pne,
    "menu.preferences": une,
    "menu.sign.in": hne,
    "menu.sign.out": mne,
    "become.a.sponsor": gne,
    "zoom.to.selection": fne,
    "zoom.to.fit": Sne,
    "zoom.to": bne,
    "preferences.dark.mode": Tne,
    "preferences.focus.mode": yne,
    "preferences.debug.mode": xne,
    "preferences.show.grid": wne,
    "preferences.use.cad.selection": kne,
    "preferences.keep.stylemenu.open": vne,
    "preferences.always.show.snaps": Ine,
    "preferences.rotate.handles": Cne,
    "preferences.binding.handles": Dne,
    "preferences.clone.handles": Pne,
    undo: Mne,
    redo: Bne,
    cut: Ene,
    copy: Rne,
    paste: Ane,
    "copy.as": Lne,
    "export.as": Hne,
    "select.all": zne,
    "select.none": One,
    delete: Fne,
    "new.project": jne,
    open: Gne,
    save: Vne,
    "save.as": $ne,
    "upload.media": Nne,
    "create.page": Wne,
    "new.page": Une,
    "page.name": Kne,
    duplicate: _ne,
    cancel: Yne,
    "copy.invite.link": Zne,
    "create.multiplayer.project": Xne,
    "copy.multiplayer.project": qne,
    select: Jne,
    eraser: Qne,
    draw: eoe,
    arrow: toe,
    text: noe,
    sticky: ooe,
    rectangle: roe,
    ellipse: soe,
    triangle: ioe,
    line: aoe,
    rotate: loe,
    "lock.aspect.ratio": doe,
    "unlock.aspect.ratio": coe,
    group: poe,
    ungroup: uoe,
    "move.to.back": hoe,
    "move.backward": moe,
    "move.forward": goe,
    "move.to.front": foe,
    "reset.angle": Soe,
    lock: boe,
    unlock: Toe,
    "move.to.page": yoe,
    "flip.horizontal": xoe,
    "flip.vertical": woe,
    move: koe,
    "to.front": voe,
    forward: Ioe,
    backward: Coe,
    back: Doe,
    language: Poe,
  };
var Moe = "\u989C\u8272",
  Boe = "\u586B\u5145",
  Eoe = "\u8FB9\u6846",
  Roe = "\u5C3A\u5BF8",
  Aoe = "\u4FDD\u6301\u5E38\u5F00",
  Loe = "\u5B57\u4F53",
  Hoe = "\u5BF9\u9F50",
  zoe = "\u6837\u5F0F",
  Ooe = "\u653E\u5927",
  Foe = "\u7F29\u5C0F",
  joe = "\u7F29\u653E\u81F3",
  Goe = "\u5DE5\u5177",
  Voe = "\u8F6C\u6362",
  $oe = "\u6587\u4EF6",
  Noe = "\u7F16\u8F91",
  Woe = "\u89C6\u56FE",
  Uoe = "\u504F\u597D",
  Koe = "\u767B\u5F55",
  _oe = "\u767B\u51FA",
  Yoe = "\u641C\u7D22",
  Zoe = "\u6210\u4E3A\u8D5E\u52A9\u8005",
  Xoe = "\u7F29\u653E\u9009\u4E2D",
  qoe = "\u81EA\u9002\u5E94\u7F29\u653E",
  Joe = "\u7F29\u653E\u81F3",
  Qoe = "\u7F29\u653E\u81F3\u5185\u5BB9",
  ere = "\u6697\u9ED1\u6A21\u5F0F",
  tre = "\u4E13\u6CE8\u6A21\u5F0F",
  nre = "\u8C03\u8BD5\u6A21\u5F0F",
  ore = "\u663E\u793A\u7F51\u683C",
  rre = "\u4F7F\u7528 CAD \u9009\u62E9",
  sre = "\u4FDD\u6301\u6837\u5F0F\u83DC\u5355\u5E38\u5F00",
  ire = "\u603B\u662F\u5C55\u793A\u5BF9\u9F50\u7EBF",
  are = "\u65CB\u8F6C\u624B\u67C4",
  lre = "\u6346\u7ED1\u624B\u67C4",
  dre = "\u514B\u9686\u624B\u67C4",
  cre = "\u64A4\u9500",
  pre = "\u91CD\u505A",
  ure = "\u526A\u5207",
  hre = "\u590D\u5236",
  mre = "\u7C98\u8D34",
  gre = "\u590D\u5236\u4E3A",
  fre = "\u5BFC\u51FA\u4E3A",
  Sre = "\u9009\u4E2D\u5168\u90E8",
  bre = "\u53D6\u6D88\u9009\u4E2D",
  Tre = "\u5220\u9664",
  yre = "\u65B0\u9879\u76EE",
  xre = "\u6253\u5F00",
  wre = "\u4FDD\u5B58",
  kre = "\u4FDD\u5B58\u4E3A",
  vre = "\u4E0A\u4F20\u5A92\u4F53\u6587\u4EF6",
  Ire = "\u521B\u5EFA\u9875\u9762",
  Cre = "\u65B0\u9875\u9762",
  Dre = "\u9875\u9762\u540D\u79F0",
  Pre = "\u590D\u5236",
  Mre = "\u53D6\u6D88",
  Bre = "\u590D\u5236\u9080\u8BF7\u94FE\u63A5",
  Ere = "\u521B\u5EFA\u591A\u4EBA\u9879\u76EE",
  Rre = "\u590D\u5236\u5230\u591A\u4EBA\u9879\u76EE",
  Are = "\u9009\u62E9",
  Lre = "\u6A61\u76AE",
  Hre = "\u753B\u7B14",
  zre = "\u7BAD\u5934",
  Ore = "\u6587\u672C",
  Fre = "\u4FBF\u5229\u8D34",
  jre = "\u77E9\u5F62",
  Gre = "\u692D\u5706\u5F62",
  Vre = "\u4E09\u89D2\u5F62",
  $re = "\u76F4\u7EBF",
  Nre = "\u65CB\u8F6C",
  Wre = "\u9501\u5B9A\u5BBD\u9AD8\u6BD4",
  Ure = "\u89E3\u9501\u5BBD\u9AD8\u6BD4",
  Kre = "\u5206\u7EC4",
  _re = "\u53D6\u6D88\u5206\u7EC4",
  Yre = "\u7F6E\u5E95",
  Zre = "\u4E0B\u79FB\u4E00\u5C42",
  Xre = "\u4E0A\u79FB\u4E00\u5C42",
  qre = "\u7F6E\u9876",
  Jre = "\u91CD\u7F6E\u65CB\u8F6C\u89D2\u5EA6",
  Qre = "\u9501\u5B9A",
  ese = "\u89E3\u9501",
  tse = "\u79FB\u52A8\u5230\u9875\u9762",
  nse = "\u6C34\u5E73\u7FFB\u8F6C",
  ose = "\u5782\u76F4\u7FFB\u8F6C",
  rse = "\u79FB\u52A8",
  sse = "\u7F6E\u9876",
  ise = "\u4E0A\u4E00\u5C42",
  ase = "\u4E0B\u4E00\u5C42",
  lse = "\u7F6E\u5E95",
  dse = "\u8BED\u8A00",
  cse = "\u952E\u76D8\u5FEB\u6377\u952E",
  pse = "\u4E86\u89E3\u66F4\u591A",
  use = "\u9875\u9762",
  hse = "\u951A\u70B9\u4F4D\u7F6E",
  mse = "\u4E0B\u9762",
  gse = "\u5DE6\u9762",
  fse = "\u53F3\u9762",
  Sse = "\u4E0A\u9762",
  bse = "\u5BFC\u51FA\u80CC\u666F\u8272",
  Tse = "\u900F\u660E",
  yse = "\u81EA\u52A8",
  xse = "\u660E\u4EAE",
  wse = "\u6697\u9ED1",
  kse = "\u590D\u5236\u53EA\u8BFB\u94FE\u63A5",
  vse = "\u56FE\u7247",
  Ise = "\u5BF9\u9F50 / \u5206\u6563",
  Cse =
    "\u60A8\u662F\u5426\u60F3\u4FDD\u5B58\u5F53\u524D\u7684\u9879\u76EE\uFF1F",
  Dse =
    "\u60A8\u662F\u5426\u60F3\u4FDD\u5B58\u5BF9\u5F53\u524D\u9879\u76EE\u7684\u66F4\u6539\uFF1F",
  Pse = "\u53D6\u6D88",
  Mse = "\u5426",
  Bse = "\u662F",
  Al = {
    "style.menu.color": Moe,
    "style.menu.fill": Boe,
    "style.menu.dash": Eoe,
    "style.menu.size": Roe,
    "style.menu.keep.open": Aoe,
    "style.menu.font": Loe,
    "style.menu.align": Hoe,
    styles: zoe,
    "zoom.in": Ooe,
    "zoom.out": Foe,
    to: joe,
    "menu.tools": Goe,
    "menu.transform": Voe,
    "menu.file": $oe,
    "menu.edit": Noe,
    "menu.view": Woe,
    "menu.preferences": Uoe,
    "menu.sign.in": Koe,
    "menu.sign.out": _oe,
    search: Yoe,
    "become.a.sponsor": Zoe,
    "zoom.to.selection": Xoe,
    "zoom.to.fit": qoe,
    "zoom.to": Joe,
    "zoom.to.content": Qoe,
    "preferences.dark.mode": ere,
    "preferences.focus.mode": tre,
    "preferences.debug.mode": nre,
    "preferences.show.grid": ore,
    "preferences.use.cad.selection": rre,
    "preferences.keep.stylemenu.open": sre,
    "preferences.always.show.snaps": ire,
    "preferences.rotate.handles": are,
    "preferences.binding.handles": lre,
    "preferences.clone.handles": dre,
    undo: cre,
    redo: pre,
    cut: ure,
    copy: hre,
    paste: mre,
    "copy.as": gre,
    "export.as": fre,
    "select.all": Sre,
    "select.none": bre,
    delete: Tre,
    "new.project": yre,
    open: xre,
    save: wre,
    "save.as": kre,
    "upload.media": vre,
    "create.page": Ire,
    "new.page": Cre,
    "page.name": Dre,
    duplicate: Pre,
    cancel: Mre,
    "copy.invite.link": Bre,
    "create.multiplayer.project": Ere,
    "copy.multiplayer.project": Rre,
    select: Are,
    eraser: Lre,
    draw: Hre,
    arrow: zre,
    text: Ore,
    sticky: Fre,
    rectangle: jre,
    ellipse: Gre,
    triangle: Vre,
    line: $re,
    rotate: Nre,
    "lock.aspect.ratio": Wre,
    "unlock.aspect.ratio": Ure,
    group: Kre,
    ungroup: _re,
    "move.to.back": Yre,
    "move.backward": Zre,
    "move.forward": Xre,
    "move.to.front": qre,
    "reset.angle": Jre,
    lock: Qre,
    unlock: ese,
    "move.to.page": tse,
    "flip.horizontal": nse,
    "flip.vertical": ose,
    move: rse,
    "to.front": sse,
    forward: ise,
    backward: ase,
    back: lse,
    language: dse,
    "keyboard.shortcuts": cse,
    "translation.link": pse,
    page: use,
    "dock.position": hse,
    bottom: mse,
    left: gse,
    right: fse,
    top: Sse,
    "export.background": bse,
    transparent: Tse,
    auto: yse,
    light: xse,
    dark: wse,
    "copy.readonly.link": kse,
    image: vse,
    "align.distribute": Ise,
    "dialog.save.firsttime": Cse,
    "dialog.save.again": Dse,
    "dialog.cancel": Pse,
    "dialog.no": Mse,
    "dialog.yes": Bse,
  };
var Ese = "\u984F\u8272",
  Rse = "\u586B\u5145",
  Ase = "\u865B\u7DDA",
  Lse = "\u5927\u5C0F",
  Hse = "\u4FDD\u6301\u958B\u555F",
  zse = "\u5B57\u578B",
  Ose = "\u5C0D\u9F4A",
  Fse = "\u6A23\u5F0F",
  jse = "\u653E\u5927",
  Gse = "\u7E2E\u5C0F",
  Vse = "\u81F3",
  $se = "\u6A94\u6848",
  Nse = "\u7DE8\u8F2F",
  Wse = "\u6AA2\u8996",
  Use = "\u9078\u9805",
  Kse = "\u767B\u5165",
  _se = "\u767B\u51FA",
  Yse = "\u6210\u70BA\u8D0A\u52A9\u8005",
  Zse = "\u7E2E\u653E\u81F3\u9078\u53D6\u7BC4\u570D",
  Xse = "\u7E2E\u653E\u81F3\u9069\u7576\u5927\u5C0F",
  qse = "\u7E2E\u653E\u81F3",
  Jse = "\u6DF1\u8272\u6A21\u5F0F",
  Qse = "\u5C08\u6CE8\u6A21\u5F0F",
  eie = "\u9664\u932F\u6A21\u5F0F",
  tie = "\u986F\u793A\u7DB2\u683C",
  nie = "\u4F7F\u7528 CAD \u9078\u53D6",
  oie = "\u6A23\u5F0F\u9078\u55AE\u4FDD\u6301\u958B\u555F",
  rie = "\u6C38\u9060\u986F\u793A\u5C0D\u9F4A\u7DDA",
  sie = "\u65CB\u8F49\u63A7\u9EDE",
  iie = "\u7D81\u5B9A\u63A7\u9EDE",
  aie = "\u8907\u88FD\u63A7\u9EDE",
  lie = "\u5FA9\u539F",
  die = "\u53D6\u6D88\u5FA9\u539F",
  cie = "\u526A\u4E0B",
  pie = "\u8907\u88FD",
  uie = "\u8CBC\u4E0A",
  hie = "\u8907\u88FD\u6210",
  mie = "\u532F\u51FA\u6210",
  gie = "\u5168\u9078",
  fie = "\u53D6\u6D88\u9078\u53D6",
  Sie = "\u522A\u9664",
  bie = "\u65B0\u5C08\u6848",
  Tie = "\u958B\u555F",
  yie = "\u5132\u5B58",
  xie = "\u53E6\u5B58\u70BA",
  wie = "\u4E0A\u50B3\u5A92\u9AD4",
  kie = "\u5EFA\u7ACB\u9801\u9762",
  vie = "\u65B0\u9801\u9762",
  Iie = "\u9801\u9762\u540D\u7A31",
  Cie = "\u8907\u88FD",
  Die = "\u53D6\u6D88",
  Pie = "\u8907\u88FD\u9080\u8ACB\u9023\u7D50",
  Mie = "\u8907\u88FD\u552F\u8B80\u9023\u7D50",
  Bie = "\u5EFA\u7ACB\u591A\u4EBA\u5C08\u6848",
  Eie = "\u8907\u88FD\u81F3\u591A\u4EBA\u5C08\u6848",
  Rie = "\u9078\u53D6",
  Aie = "\u6A61\u76AE\u64E6",
  Lie = "\u624B\u7E6A",
  Hie = "\u7BAD\u982D",
  zie = "\u6587\u5B57",
  Oie = "\u4FBF\u5229\u8CBC",
  Fie = "\u9577\u65B9\u5F62",
  jie = "\u6A62\u5713\u5F62",
  Gie = "\u4E09\u89D2\u5F62",
  Vie = "\u76F4\u7DDA",
  $ie = "\u65CB\u8F49",
  Nie = "\u9396\u5B9A\u9577\u5BEC\u6BD4",
  Wie = "\u89E3\u9396\u9577\u5BEC\u6BD4",
  Uie = "\u7D44\u6210\u7FA4\u7D44",
  Kie = "\u53D6\u6D88\u7FA4\u7D44",
  _ie = "\u79FB\u5230\u6700\u4E0B\u5C64",
  Yie = "\u4E0B\u79FB\u4E00\u5C64",
  Zie = "\u4E0A\u79FB\u4E00\u5C64",
  Xie = "\u79FB\u5230\u6700\u4E0A\u5C64",
  qie = "\u91CD\u8A2D\u89D2\u5EA6",
  Jie = "\u9396\u5B9A",
  Qie = "\u89E3\u9396",
  eae = "\u79FB\u81F3\u9801\u9762",
  tae = "\u6C34\u5E73\u7FFB\u8F49",
  nae = "\u5782\u76F4\u7FFB\u8F49",
  oae = "\u79FB\u52D5",
  rae = "\u5230\u6700\u4E0A\u5C64",
  sae = "\u5230\u4E0A\u4E00\u5C64",
  iae = "\u5230\u4E0B\u4E00\u5C64",
  aae = "\u5230\u6700\u4E0B\u5C64",
  lae = "\u8A9E\u8A00",
  dae = "\u4E86\u89E3\u8A73\u60C5",
  cae = "\u5DE5\u5177\u5217\u4F4D\u7F6E",
  pae = "\u4E0B\u65B9",
  uae = "\u5DE6\u5074",
  hae = "\u53F3\u5074",
  mae = "\u4E0A\u65B9",
  gae = "\u9801\u9762",
  Ll = {
    "style.menu.color": Ese,
    "style.menu.fill": Rse,
    "style.menu.dash": Ase,
    "style.menu.size": Lse,
    "style.menu.keep.open": Hse,
    "style.menu.font": zse,
    "style.menu.align": Ose,
    styles: Fse,
    "zoom.in": jse,
    "zoom.out": Gse,
    to: Vse,
    "menu.file": $se,
    "menu.edit": Nse,
    "menu.view": Wse,
    "menu.preferences": Use,
    "menu.sign.in": Kse,
    "menu.sign.out": _se,
    "become.a.sponsor": Yse,
    "zoom.to.selection": Zse,
    "zoom.to.fit": Xse,
    "zoom.to": qse,
    "preferences.dark.mode": Jse,
    "preferences.focus.mode": Qse,
    "preferences.debug.mode": eie,
    "preferences.show.grid": tie,
    "preferences.use.cad.selection": nie,
    "preferences.keep.stylemenu.open": oie,
    "preferences.always.show.snaps": rie,
    "preferences.rotate.handles": sie,
    "preferences.binding.handles": iie,
    "preferences.clone.handles": aie,
    undo: lie,
    redo: die,
    cut: cie,
    copy: pie,
    paste: uie,
    "copy.as": hie,
    "export.as": mie,
    "select.all": gie,
    "select.none": fie,
    delete: Sie,
    "new.project": bie,
    open: Tie,
    save: yie,
    "save.as": xie,
    "upload.media": wie,
    "create.page": kie,
    "new.page": vie,
    "page.name": Iie,
    duplicate: Cie,
    cancel: Die,
    "copy.invite.link": Pie,
    "copy.readonly.link": Mie,
    "create.multiplayer.project": Bie,
    "copy.multiplayer.project": Eie,
    select: Rie,
    eraser: Aie,
    draw: Lie,
    arrow: Hie,
    text: zie,
    sticky: Oie,
    rectangle: Fie,
    ellipse: jie,
    triangle: Gie,
    line: Vie,
    rotate: $ie,
    "lock.aspect.ratio": Nie,
    "unlock.aspect.ratio": Wie,
    group: Uie,
    ungroup: Kie,
    "move.to.back": _ie,
    "move.backward": Yie,
    "move.forward": Zie,
    "move.to.front": Xie,
    "reset.angle": qie,
    lock: Jie,
    unlock: Qie,
    "move.to.page": eae,
    "flip.horizontal": tae,
    "flip.vertical": nae,
    move: oae,
    "to.front": rae,
    forward: sae,
    backward: iae,
    back: aae,
    language: lae,
    "translation.link": dae,
    "dock.position": cae,
    bottom: pae,
    left: uae,
    right: hae,
    top: mae,
    page: gae,
  };
var ls = [
  { locale: "ar", label: "\u0639\u0631\u0628\u064A", messages: il },
  { locale: "da", label: "Danish", messages: al },
  { locale: "de", label: "Deutsch", messages: ll },
  { locale: "en", label: "English", messages: dl },
  { locale: "es", label: "Espa\xF1ol", messages: cl },
  { locale: "fa", label: "\u0641\u0627\u0631\u0633\u06CC", messages: pl },
  { locale: "fr", label: "Fran\xE7ais", messages: ul },
  { locale: "gl", label: "Galego", messages: hl },
  { locale: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA", messages: ml },
  { locale: "it", label: "Italiano", messages: gl },
  { locale: "ja", label: "\u65E5\u672C\u8A9E", messages: fl },
  { locale: "ko-kr", label: "\uD55C\uAD6D\uC5B4", messages: Sl },
  {
    locale: "my",
    label: "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C",
    messages: yl,
  },
  { locale: "nb-no", label: "Norwegian Bokm\xE5l", messages: xl },
  { locale: "ne", label: "\u0928\u0947\u092A\u093E\u0932\u0940", messages: wl },
  { locale: "nn-no", label: "Norwegian Nynorsk", messages: kl },
  { locale: "pl", label: "Polski", messages: vl },
  { locale: "pt", label: "Portugu\xEAs - Europeu", messages: Cl },
  { locale: "pt-br", label: "Portugu\xEAs - Brasil", messages: Il },
  { locale: "ru", label: "Russian", messages: Dl },
  { locale: "sv", label: "Svenska", messages: Pl },
  { locale: "te", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", messages: Ml },
  { locale: "tr", label: "T\xFCrk\xE7e", messages: El },
  { locale: "uk", label: "Ukrainian", messages: Rl },
  { locale: "zh-ch", label: "\u7B80\u4F53\u4E2D\u6587", messages: Al },
  {
    locale: "zh-tw",
    label: "\u7E41\u9AD4\u4E2D\u6587 (\u53F0\u7063)",
    messages: Ll,
  },
  {
    locale: "th",
    label: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
    messages: Bl,
  },
  { locale: "ku", label: "\u06A9\u0648\u0631\u062F\u06CC", messages: bl },
];
ls.sort((r, e) => (r.locale < e.locale ? -1 : 1));
function Hl(r) {
  var t;
  let e = ls.find((n) => n.locale === r);
  return {
    locale: r,
    label: (t = e == null ? void 0 : e.label) != null ? t : r,
    messages: S(S({}, Tl), e == null ? void 0 : e.messages),
  };
}
function Ol(r) {
  return zl.useMemo(
    () => Hl(r != null ? r : navigator.language.split(/[-_]/)[0]),
    [r]
  );
}
var ds = V(require("react")),
  pi = ds.createContext({}),
  ns = () => {
    let r = ds.useContext(pi);
    if (!r) throw new Error("useCtx must be inside a Provider with a value");
    return r;
  };
var Ie = nn.forwardRef((m, p) => {
  var h = m,
    {
      onSelect: r,
      onClick: e,
      onDoubleClick: t,
      variant: n,
      children: o,
      isToolLocked: s = !1,
      disabled: a = !1,
      isActive: d = !1,
      onKeyDown: i,
      id: c,
    } = h,
    u = ot(h, [
      "onSelect",
      "onClick",
      "onDoubleClick",
      "variant",
      "children",
      "isToolLocked",
      "disabled",
      "isActive",
      "onKeyDown",
      "id",
    ]);
  return nn.createElement(
    fae,
    S(
      {
        ref: p,
        isActive: d,
        variant: n,
        onClick: e,
        disabled: a,
        onPointerDown: r,
        onDoubleClick: t,
        onKeyDown: i,
        bp: rt,
        id: c,
      },
      u
    ),
    nn.createElement(tn, null, o),
    s && nn.createElement(Sae, null)
  );
});
function on(s) {
  var a = s,
    { label: r, kbd: e, variant: t, isLocked: n } = a,
    o = ot(a, ["label", "kbd", "variant", "isLocked"]);
  let d = ge(),
    i = nn.useCallback(() => {
      d.toggleToolLock();
    }, []),
    c = nn.useCallback((u) => {
      u.key === " " && d.isForcePanning && u.preventDefault();
    }, []);
  return nn.createElement(
    ze,
    { label: r[0].toUpperCase() + r.slice(1), kbd: e },
    nn.createElement(
      Ie,
      w(S({}, o), {
        variant: t,
        isToolLocked: n && o.isActive,
        onDoubleClick: i,
        onKeyDown: c,
        "aria-label": r[0].toUpperCase() + r.slice(1),
      })
    )
  );
}
var tn = H("div", {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: "$panel",
    borderRadius: "$2",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "$ui",
    color: "inherit",
    userSelect: "none",
    WebkitUserSelect: "none",
    boxSizing: "border-box",
    border: "1px solid transparent",
    "-webkit-tap-highlight-color": "transparent",
    "tap-highlight-color": "transparent",
  }),
  fae = H("button", {
    position: "relative",
    color: "$text",
    fontSize: "$0",
    background: "none",
    margin: "0",
    padding: "$2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    cursor: "pointer",
    pointerEvents: "all",
    height: "40px",
    width: "40px",
    border: "1px solid $panel",
    "-webkit-tap-highlight-color": "transparent",
    "tap-highlight-color": "transparent",
    [`&:disabled ${tn}`]: { opacity: 0.618 },
    variants: {
      variant: {
        primary: { marginTop: "0" },
        icon: {
          [`& ${tn}`]: {
            display: "grid",
            "& > *": { gridRow: 1, gridColumn: 1 },
          },
        },
        text: {
          width: "auto",
          [`& ${tn}`]: { fontSize: "$1", padding: "0 $3", gap: "$3" },
        },
        circle: {
          padding: 0,
          height: 32,
          width: 32,
          border: "none",
          [`& ${tn}`]: {
            border: "1px solid $panelContrast",
            borderRadius: "100%",
            boxShadow: "$panel",
          },
          [`& ${tn} > svg`]: { width: 14, height: 14 },
        },
      },
      isActive: { true: {}, false: {} },
      bp: { mobile: { padding: 0 }, small: {} },
    },
    compoundVariants: [
      {
        variant: "primary",
        bp: "mobile",
        css: {
          height: 40,
          width: 36,
          [`& ${tn} > svg`]: { width: 16, height: 16 },
        },
      },
      {
        variant: "primary",
        bp: "small",
        css: {
          height: "40px",
          width: "40px",
          [`& ${tn} > svg`]: { width: 20, height: 20 },
        },
      },
      {
        isActive: !0,
        css: {
          [`${tn}`]: {
            backgroundColor: "$selected",
            color: "$selectedContrast",
          },
        },
      },
      {
        isActive: !1,
        bp: "small",
        css: {
          [`&:hover:not(:disabled) ${tn}`]: { backgroundColor: "$hover" },
          [`&:focus:not(:disabled) ${tn}`]: { backgroundColor: "$hover" },
        },
      },
    ],
  }),
  Sae = H("div", {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "$selected",
    borderRadius: "100%",
    bottom: -2,
    border: "2px solid $panel",
    zIndex: 100,
  });
var bae = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.length,
  Tae = (r) => r.settings.isDebugMode,
  yae = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.some(
      (e) =>
        r.document.pages[r.appState.currentPageId].shapes[e].children !== void 0
    ),
  xae = (r) => r.stopPropagation(),
  wae = ({ onBlur: r, children: e }) => {
    let t = Vt();
    return C.createElement(
      Ge.Root,
      { dir: "ltr" },
      C.createElement(Ge.Trigger, { dir: "ltr" }, e),
      C.createElement(
        Ge.Portal,
        { container: t.current },
        C.createElement(
          Ge.Content,
          { onEscapeKeyDown: xae, tabIndex: -1, onBlur: r, asChild: !0 },
          C.createElement(
            jt,
            { id: "TD-ContextMenu" },
            C.createElement(kae, null)
          )
        )
      )
    );
  },
  kae = C.memo(function () {
    let e = ge(),
      t = (0, Ye.useIntl)(),
      n = e.useStore(bae),
      o = e.useStore(Tae),
      s = e.useStore(yae),
      a = C.useCallback(() => {
        e.flipHorizontal();
      }, [e]),
      d = C.useCallback(() => {
        e.flipVertical();
      }, [e]),
      i = C.useCallback(() => {
        e.duplicate();
      }, [e]),
      c = C.useCallback(() => {
        e.toggleLocked();
      }, [e]),
      u = C.useCallback(() => {
        e.group();
      }, [e]),
      p = C.useCallback(() => {
        e.moveToBack();
      }, [e]),
      m = C.useCallback(() => {
        e.moveBackward();
      }, [e]),
      h = C.useCallback(() => {
        e.moveForward();
      }, [e]),
      g = C.useCallback(() => {
        e.moveToFront();
      }, [e]),
      f = C.useCallback(() => {
        e.delete();
      }, [e]),
      T = C.useCallback(() => {
        e.cut();
      }, [e]),
      x = C.useCallback(() => {
        e.copy();
      }, [e]),
      b = C.useCallback(() => {
        e.paste();
      }, [e]),
      y = C.useCallback(() => {
        e.copyImage("svg", { scale: 1, quality: 1, transparentBackground: !1 });
      }, [e]),
      R = C.useCallback(() => {
        e.copyImage("png", { scale: 2, quality: 1, transparentBackground: !0 });
      }, [e]),
      K = C.useCallback(() => {
        e.undo();
      }, [e]),
      L = C.useCallback(() => {
        e.redo();
      }, [e]),
      v = C.useCallback(
        () =>
          ue(this, null, function* () {
            e.exportImage("png", { scale: 2, quality: 1 });
          }),
        [e]
      ),
      I = C.useCallback(
        () =>
          ue(this, null, function* () {
            e.exportImage("jpeg", { scale: 2, quality: 1 });
          }),
        [e]
      ),
      J = C.useCallback(
        () =>
          ue(this, null, function* () {
            e.exportImage("webp", { scale: 2, quality: 1 });
          }),
        [e]
      ),
      ce = C.useCallback(
        () =>
          ue(this, null, function* () {
            e.exportImage("svg", { scale: 1, quality: 1 });
          }),
        [e]
      ),
      de = C.useCallback(
        () =>
          ue(this, null, function* () {
            e.copyJson();
          }),
        [e]
      ),
      He = C.useCallback(
        () =>
          ue(this, null, function* () {
            e.exportJson();
          }),
        [e]
      ),
      Pe = n > 0,
      Me = n > 1,
      Ue = n > 2;
    return C.createElement(
      C.Fragment,
      null,
      Pe
        ? C.createElement(
            C.Fragment,
            null,
            C.createElement(
              Ae,
              { onClick: i, kbd: "#D", id: "TD-ContextMenu-Duplicate" },
              C.createElement(Ye.FormattedMessage, { id: "duplicate" })
            ),
            C.createElement(
              Ae,
              {
                onClick: a,
                kbd: "\u21E7H",
                id: "TD-ContextMenu-Flip_Horizontal",
              },
              C.createElement(Ye.FormattedMessage, { id: "flip.horizontal" })
            ),
            C.createElement(
              Ae,
              {
                onClick: d,
                kbd: "\u21E7V",
                id: "TD-ContextMenu-Flip_Vertical",
              },
              C.createElement(Ye.FormattedMessage, { id: "flip.vertical" })
            ),
            C.createElement(
              Ae,
              {
                onClick: c,
                kbd: "#\u21E7L",
                id: "TD-ContextMenu- Lock_Unlock",
              },
              C.createElement(Ye.FormattedMessage, { id: "lock" }),
              " / ",
              C.createElement(Ye.FormattedMessage, { id: "unlock" })
            ),
            (Me || s) && C.createElement(Be, null),
            Me &&
              C.createElement(
                Ae,
                { onClick: u, kbd: "#G", id: "TD-ContextMenu-Group" },
                C.createElement(Ye.FormattedMessage, { id: "group" })
              ),
            s &&
              C.createElement(
                Ae,
                { onClick: u, kbd: "#G", id: "TD-ContextMenu-Ungroup" },
                C.createElement(Ye.FormattedMessage, { id: "ungroup" })
              ),
            C.createElement(Be, null),
            C.createElement(
              cs,
              {
                label: t.formatMessage({ id: "move" }),
                id: "TD-ContextMenu-Move",
              },
              C.createElement(
                Ae,
                {
                  onClick: g,
                  kbd: "\u21E7]",
                  id: "TD-ContextMenu-Move-To_Front",
                },
                C.createElement(Ye.FormattedMessage, { id: "to.front" })
              ),
              C.createElement(
                Ae,
                { onClick: h, kbd: "]", id: "TD-ContextMenu-Move-Forward" },
                C.createElement(Ye.FormattedMessage, { id: "forward" })
              ),
              C.createElement(
                Ae,
                { onClick: m, kbd: "[", id: "TD-ContextMenu-Move-Backward" },
                C.createElement(Ye.FormattedMessage, { id: "backward" })
              ),
              C.createElement(
                Ae,
                {
                  onClick: p,
                  kbd: "\u21E7[",
                  id: "TD-ContextMenu-Move-To_Back",
                },
                C.createElement(Ye.FormattedMessage, { id: "back" })
              )
            ),
            C.createElement(Pae, null),
            Me &&
              C.createElement(vae, { hasTwoOrMore: Me, hasThreeOrMore: Ue }),
            C.createElement(Be, null),
            C.createElement(
              Ae,
              { onClick: T, kbd: "#X", id: "TD-ContextMenu-Cut" },
              C.createElement(Ye.FormattedMessage, { id: "cut" })
            ),
            C.createElement(
              Ae,
              { onClick: x, kbd: "#C", id: "TD-ContextMenu-Copy" },
              C.createElement(Ye.FormattedMessage, { id: "copy" })
            ),
            C.createElement(
              Ae,
              { onClick: b, kbd: "#V", id: "TD-ContextMenu-Paste" },
              C.createElement(Ye.FormattedMessage, { id: "paste" })
            ),
            C.createElement(Be, null),
            C.createElement(
              cs,
              {
                label: `${t.formatMessage({ id: "copy.as" })}...`,
                size: "small",
                id: "TD-ContextMenu-Copy-As",
              },
              C.createElement(
                Ae,
                { onClick: y, id: "TD-ContextMenu-Copy-as-SVG" },
                "SVG"
              ),
              C.createElement(
                Ae,
                { onClick: R, id: "TD-ContextMenu-Copy-As-PNG" },
                "PNG"
              ),
              o &&
                C.createElement(
                  Ae,
                  { onClick: de, id: "TD-ContextMenu-Copy_as_JSON" },
                  "JSON"
                )
            ),
            C.createElement(
              cs,
              {
                label: `${t.formatMessage({ id: "export.as" })}...`,
                size: "small",
                id: "TD-ContextMenu-Export",
              },
              C.createElement(
                Ae,
                { onClick: ce, id: "TD-ContextMenu-Export-SVG" },
                "SVG"
              ),
              C.createElement(
                Ae,
                { onClick: v, id: "TD-ContextMenu-Export-PNG" },
                "PNG"
              ),
              C.createElement(
                Ae,
                { onClick: I, id: "TD-ContextMenu-Export-JPG" },
                "JPG"
              ),
              C.createElement(
                Ae,
                { onClick: J, id: "TD-ContextMenu-Export-WEBP" },
                "WEBP"
              ),
              o &&
                C.createElement(
                  Ae,
                  { onClick: He, id: "TD-ContextMenu-Export-JSON" },
                  "JSON"
                )
            ),
            C.createElement(Be, null),
            C.createElement(
              Ae,
              { onClick: f, kbd: "\u232B", id: "TD-ContextMenu-Delete" },
              C.createElement(Ye.FormattedMessage, { id: "delete" })
            )
          )
        : C.createElement(
            C.Fragment,
            null,
            C.createElement(
              Ae,
              { onClick: b, kbd: "#V", id: "TD-ContextMenu-Paste" },
              C.createElement(Ye.FormattedMessage, { id: "paste" })
            ),
            C.createElement(
              Ae,
              { onClick: K, kbd: "#Z", id: "TD-ContextMenu-Undo" },
              C.createElement(Ye.FormattedMessage, { id: "undo" })
            ),
            C.createElement(
              Ae,
              { onClick: L, kbd: "#\u21E7Z", id: "TD-ContextMenu-Redo" },
              C.createElement(Ye.FormattedMessage, { id: "redo" })
            ),
            C.createElement(
              cs,
              {
                label: `${t.formatMessage({ id: "export.as" })}...`,
                size: "small",
                id: "TD-ContextMenu-Export",
              },
              C.createElement(
                Ae,
                { onClick: ce, id: "TD-ContextMenu-Export-SVG" },
                "SVG"
              ),
              C.createElement(
                Ae,
                { onClick: v, id: "TD-ContextMenu-Export-PNG" },
                "PNG"
              ),
              C.createElement(
                Ae,
                { onClick: I, id: "TD-ContextMenu-Export-JPG" },
                "JPG"
              ),
              C.createElement(
                Ae,
                { onClick: J, id: "TD-ContextMenu-Export-WEBP" },
                "WEBP"
              ),
              o &&
                C.createElement(
                  Ae,
                  { onClick: He, id: "TD-ContextMenu-Export-JSON" },
                  "JSON"
                )
            )
          )
    );
  });
function vae({ hasThreeOrMore: r }) {
  let e = ge(),
    t = C.useCallback(() => {
      e.align("top");
    }, [e]),
    n = C.useCallback(() => {
      e.align("centerVertical");
    }, [e]),
    o = C.useCallback(() => {
      e.align("bottom");
    }, [e]),
    s = C.useCallback(() => {
      e.stretch("vertical");
    }, [e]),
    a = C.useCallback(() => {
      e.distribute("vertical");
    }, [e]),
    d = C.useCallback(() => {
      e.align("left");
    }, [e]),
    i = C.useCallback(() => {
      e.align("centerHorizontal");
    }, [e]),
    c = C.useCallback(() => {
      e.align("right");
    }, [e]),
    u = C.useCallback(() => {
      e.stretch("horizontal");
    }, [e]),
    p = C.useCallback(() => {
      e.distribute("horizontal");
    }, [e]),
    m = Vt();
  return C.createElement(
    Ge.Sub,
    null,
    C.createElement(
      hi,
      { id: "TD-ContextMenu-Align-Distribute-Trigger" },
      C.createElement(Ye.FormattedMessage, { id: "align.distribute" })
    ),
    C.createElement(
      Ge.Portal,
      { container: m.current },
      C.createElement(
        Ge.SubContent,
        { asChild: !0, sideOffset: 4, alignOffset: -2 },
        C.createElement(
          Iae,
          { numberOfSelected: r ? "threeOrMore" : "twoOrMore" },
          C.createElement(
            Tn,
            { onClick: d, id: "TD-ContextMenu-Align_Distribute-AlignLeft" },
            C.createElement(lt.AlignLeftIcon, null)
          ),
          C.createElement(
            Tn,
            {
              onClick: i,
              id: "TD-ContextMenu-Align_Distribute-AlignCenterHorizontal",
            },
            C.createElement(lt.AlignCenterHorizontallyIcon, null)
          ),
          C.createElement(
            Tn,
            { onClick: c, id: "TD-ContextMenu-Align_Distribute-AlignRight" },
            C.createElement(lt.AlignRightIcon, null)
          ),
          C.createElement(
            Tn,
            {
              onClick: u,
              id: "TD-ContextMenu-Align_Distribute-StretchHorizontal",
            },
            C.createElement(lt.StretchHorizontallyIcon, null)
          ),
          r &&
            C.createElement(
              Tn,
              {
                onClick: p,
                id: "TD-ContextMenu-Align_Distribute-SpaceEvenlyHorizontal",
              },
              C.createElement(lt.SpaceEvenlyHorizontallyIcon, null)
            ),
          C.createElement(
            Tn,
            { onClick: t, id: "TD-ContextMenu-Align_Distribute-AlignTop" },
            C.createElement(lt.AlignTopIcon, null)
          ),
          C.createElement(
            Tn,
            {
              onClick: n,
              id: "TD-ContextMenu-Align_Distribute-AlignCenterVertical",
            },
            C.createElement(lt.AlignCenterVerticallyIcon, null)
          ),
          C.createElement(
            Tn,
            { onClick: o, id: "TD-ContextMenu-Align_Distribute-AlignBottom" },
            C.createElement(lt.AlignBottomIcon, null)
          ),
          C.createElement(
            Tn,
            {
              onClick: s,
              id: "TD-ContextMenu-Align_Distribute-StretchVertical",
            },
            C.createElement(lt.StretchVerticallyIcon, null)
          ),
          r &&
            C.createElement(
              Tn,
              {
                onClick: a,
                id: "TD-ContextMenu-Align_Distribute-SpaceEvenlyVertical",
              },
              C.createElement(lt.SpaceEvenlyVerticallyIcon, null)
            ),
          C.createElement(ui, { offset: 13 })
        )
      )
    )
  );
}
var Iae = H(jt, {
    display: "grid",
    variants: {
      numberOfSelected: {
        threeOrMore: { gridTemplateColumns: "repeat(5, auto)" },
        twoOrMore: { gridTemplateColumns: "repeat(4, auto)" },
      },
    },
  }),
  Cae = (r) => r.appState.currentPageId,
  Dae = (r) => r.document.pages;
function Pae() {
  let r = ge(),
    e = r.useStore(Cae),
    t = r.useStore(Dae),
    n = Object.values(t)
      .sort((s, a) => (s.childIndex || 0) - (a.childIndex || 0))
      .filter((s) => s.id !== e),
    o = Vt();
  return n.length === 0
    ? null
    : C.createElement(
        Ge.Sub,
        null,
        C.createElement(
          hi,
          null,
          C.createElement(Ye.FormattedMessage, { id: "move.to.page" })
        ),
        C.createElement(
          Ge.Portal,
          { container: o.current },
          C.createElement(
            Ge.SubContent,
            { sideOffset: 4, alignOffset: -2, asChild: !0 },
            C.createElement(
              jt,
              null,
              n.map(({ id: s, name: a }, d) =>
                C.createElement(
                  Ae,
                  { key: s, disabled: s === e, onClick: () => r.moveToPage(s) },
                  a || `Page ${d}`
                )
              ),
              C.createElement(ui, { offset: 13 })
            )
          )
        )
      );
}
function cs({ children: r, label: e, size: t, id: n }) {
  let o = Vt();
  return C.createElement(
    Ge.Sub,
    null,
    C.createElement(hi, null, e),
    C.createElement(
      Ge.Portal,
      { container: o.current },
      C.createElement(
        Ge.SubContent,
        { sideOffset: 4, alignOffset: -2, asChild: !0 },
        C.createElement(jt, { size: t }, r, C.createElement(ui, { offset: 13 }))
      )
    )
  );
}
var ui = H(Ge.ContextMenuArrow, { fill: "$panel" });
function Tn(t) {
  var n = t,
    { onSelect: r } = n,
    e = ot(n, ["onSelect"]);
  return C.createElement(
    Ge.ContextMenuItem,
    { dir: "ltr", onSelect: r, asChild: !0 },
    C.createElement(Ie, S({}, e))
  );
}
var Ae = (t) => {
    var n = t,
      { id: r } = n,
      e = ot(n, ["id"]);
    return C.createElement(
      Ge.ContextMenuItem,
      { asChild: !0, id: r },
      C.createElement($e, S({}, e))
    );
  },
  hi = (t) => {
    var n = t,
      { id: r } = n,
      e = ot(n, ["id"]);
    return C.createElement(
      Ge.SubTrigger,
      { asChild: !0, id: r },
      C.createElement($e, S({ hasArrow: !0 }, e))
    );
  },
  Fl = C.memo(wae);
var $t = V(require("react"));
function jl({ error: r, resetErrorBoundary: e }) {
  let t = ge(),
    n = () => {
      window.location.reload(), e();
    },
    o = () => {
      let d = document.createElement("textarea");
      (d.value = r.message),
        document.body.appendChild(d),
        d.select(),
        document.execCommand("copy"),
        d.remove();
    },
    s = () => {
      t.saveProjectAs();
    },
    a = () => {
      t.resetDocument(), e();
    };
  return $t.createElement(
    Mae,
    null,
    $t.createElement(
      Bae,
      null,
      $t.createElement("div", null, "We've encountered an error!"),
      $t.createElement("pre", null, $t.createElement("code", null, r.message)),
      $t.createElement(
        Eae,
        null,
        $t.createElement($e, { onClick: o }, "Copy Error"),
        $t.createElement($e, { onClick: n }, "Refresh Page")
      ),
      $t.createElement(Be, null),
      $t.createElement(
        "p",
        null,
        "Keep getting this error?",
        " ",
        $t.createElement(
          "a",
          { onClick: s, title: "Download your project" },
          "Download your project"
        ),
        " ",
        "as a backup and then",
        " ",
        $t.createElement(
          "a",
          { onClick: a, title: "Reset the document" },
          "reset the document"
        ),
        "."
      )
    )
  );
}
var Mae = H("div", {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$canvas",
  }),
  Bae = H("div", {
    backgroundColor: "$panel",
    border: "1px solid $panelContrast",
    padding: "$5",
    borderRadius: 8,
    boxShadow: "$panel",
    maxWidth: 320,
    color: "$text",
    fontFamily: "$ui",
    fontSize: "$2",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "$3",
    "& > pre": {
      marginTop: "$3",
      marginBottom: "$3",
      textAlign: "left",
      whiteSpace: "pre-wrap",
      backgroundColor: "$hover",
      padding: "$4",
      borderRadius: "$2",
      fontFamily: '"Menlo", "Monaco", monospace',
      fontWeight: 500,
    },
    "& p": { fontFamily: "$body", lineHeight: 1.7, padding: "$5", margin: 0 },
    "& a": { color: "$text", cursor: "pointer", textDecoration: "underline" },
    "& hr": { marginLeft: "-$5", marginRight: "-$5" },
  }),
  Eae = H("div", {
    display: "flex",
    "& > button > div": { justifyContent: "center", textAlign: "center" },
  });
var Gl = require("@radix-ui/react-icons"),
  ps = V(require("react"));
var Ho = H("button", {
  position: "relative",
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  fontSize: "$0",
  color: "$text",
  cursor: "pointer",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { gridRow: 1, gridColumn: 1 },
  "&:disabled": { opacity: "0.5" },
  "& > span": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  variants: {
    bp: {
      mobile: { backgroundColor: "transparent" },
      small: { "&:hover:not(:disabled)": { backgroundColor: "$hover" } },
    },
    size: {
      small: {
        height: 32,
        width: 32,
        "& svg:nth-of-type(1)": { height: "16px", width: "16px" },
      },
      medium: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": { height: "18px", width: "18px" },
      },
      large: {
        height: 44,
        width: 44,
        "& svg:nth-of-type(1)": { height: "20px", width: "20px" },
      },
    },
    isActive: { true: { color: "$selected" } },
  },
});
function Vl({ onSelect: r }) {
  return ps.createElement(
    Rae,
    null,
    ps.createElement(
      Ho,
      { onClick: r },
      ps.createElement(Gl.DotFilledIcon, null)
    )
  );
}
var Rae = H("div", {
  opacity: 1,
  zIndex: 100,
  backgroundColor: "transparent",
  "& svg": { color: "$text" },
  "&:hover svg": { color: "$text" },
});
var mi = V(require("react")),
  $l = require("react-intl");
var Aae = (r) => r.appState.isLoading;
function gi() {
  let e = ge().useStore(Aae);
  return mi.createElement(
    Lae,
    { hidden: !e },
    mi.createElement($l.FormattedMessage, {
      id: "loading",
      values: { dots: "..." },
    })
  );
}
var Lae = H("div", {
  position: "absolute",
  top: 0,
  left: "50%",
  transform: "translate(-50%, 0)",
  borderBottomLeftRadius: "12px",
  borderBottomRightRadius: "12px",
  padding: "8px 16px",
  fontFamily: "var(--fonts-ui)",
  fontSize: "var(--fontSizes-1)",
  boxShadow: "var(--shadows-panel)",
  backgroundColor: "white",
  zIndex: 200,
  pointerEvents: "none",
  "& > div > *": { pointerEvents: "all" },
  variants: {
    transform: {
      hidden: { transform: "translate(-50%, 100%)" },
      visible: { transform: "translate(-50%, 0%)" },
    },
  },
});
var Pt = V(require("@radix-ui/react-alert-dialog")),
  Tt = V(require("react")),
  zo = require("react-intl");
function Hae({ children: r, onClose: e, container: t }) {
  return Tt.createElement(
    Pt.Portal,
    { container: t },
    Tt.createElement(Vae, null),
    Tt.createElement(
      $ae,
      {
        onKeyDown: (o) => {
          switch (o.key) {
            case "Escape":
              e == null || e();
              break;
          }
        },
      },
      r
    )
  );
}
var zae = H(Pt.Description, {
    marginBottom: 20,
    color: "$text",
    fontSize: "$2",
    lineHeight: 1.5,
    textAlign: "center",
    maxWidth: "62%",
    minWidth: 0,
    alignSelf: "center",
  }),
  Oae = Pt.Root,
  Fae = Hae,
  jae = zae,
  Nl = Pt.Action,
  Gae = Pt.Cancel,
  Wl = ({ container: r }) => {
    let {
        setDialogState: e,
        dialogState: t,
        onCancel: n,
        onNo: o,
        onYes: s,
      } = ns(),
      a = (0, zo.useIntl)(),
      d = {
        saveFirstTime: a.formatMessage({ id: "dialog.save.firsttime" }),
        saveAgain: a.formatMessage({ id: "dialog.save.again" }),
      };
    return Tt.createElement(
      Oae,
      { open: t !== null },
      Tt.createElement(
        Fae,
        { onClose: () => e(null), container: r },
        t && Tt.createElement(jae, null, d[t]),
        Tt.createElement(
          "div",
          {
            style: {
              width: "100%",
              gap: "$6",
              display: "flex",
              justifyContent: "space-between",
            },
          },
          n &&
            Tt.createElement(
              Gae,
              { asChild: !0 },
              Tt.createElement(
                Oo,
                {
                  css: { color: "$text" },
                  onClick: () => {
                    n(), e(null);
                  },
                },
                Tt.createElement(zo.FormattedMessage, { id: "dialog.cancel" })
              )
            ),
          Tt.createElement(
            "div",
            { style: { flexShrink: 0 } },
            o &&
              Tt.createElement(
                Nl,
                { asChild: !0 },
                Tt.createElement(
                  Oo,
                  {
                    onClick: () => {
                      o(), e(null);
                    },
                  },
                  Tt.createElement(zo.FormattedMessage, { id: "dialog.no" })
                )
              ),
            s &&
              Tt.createElement(
                Nl,
                { asChild: !0 },
                Tt.createElement(
                  Oo,
                  {
                    css: { backgroundColor: "#2F80ED", color: "White" },
                    onClick: () => {
                      s(), e(null);
                    },
                  },
                  Tt.createElement(zo.FormattedMessage, { id: "dialog.yes" })
                )
              )
          )
        )
      )
    );
  },
  Vae = H(Pt.Overlay, {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, .15)",
    pointerEvents: "all",
  }),
  phe = H(Pt.Overlay, {
    backgroundColor: "rgba(0, 0, 0, .15)",
    position: "absolute",
    pointerEvents: "all",
    inset: 0,
  }),
  $ae = H(Pt.Content, {
    position: "fixed",
    font: "$ui",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "max-content",
    padding: "$3",
    pointerEvents: "all",
    backgroundColor: "$panel",
    borderRadius: "$3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "$ui",
    border: "1px solid $panelContrast",
    boxShadow: "$panel",
  }),
  Oo = H("button", {
    all: "unset",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "$2",
    padding: "0 15px",
    fontSize: "$1",
    lineHeight: 1,
    fontWeight: "normal",
    height: 36,
    color: "$text",
    cursor: "pointer",
    minWidth: 48,
  });
var rn = V(require("@radix-ui/react-alert-dialog")),
  Ul = require("@radix-ui/react-icons"),
  mt = V(require("react")),
  br = require("react-intl");
var Fo = V(require("react"));
var us = Fo.forwardRef((n, t) => {
    var o = n,
      { icon: r } = o,
      e = ot(o, ["icon"]);
    return Fo.createElement(
      Nae,
      null,
      Fo.createElement(Wae, w(S({}, e), { ref: t })),
      r ? Fo.createElement(Uae, null, r) : null
    );
  }),
  Nae = H("div", {
    position: "relative",
    width: "100%",
    height: "min-content",
  }),
  Wae = H("input", {
    color: "$text",
    border: "none",
    textAlign: "left",
    width: "100%",
    paddingLeft: "$3",
    paddingRight: "$6",
    backgroundColor: "$background",
    height: "32px",
    outline: "none",
    fontFamily: "$ui",
    fontSize: "$1",
    "&:focus": { backgroundColor: "$hover" },
    borderRadius: "$2",
  }),
  Uae = H(bt, {
    top: 0,
    right: 0,
    position: "absolute",
    paddingLeft: "$3",
    paddingRight: "$3",
    pointerEvents: "none",
    color: "$text",
  });
var Kl = ({ isOpen: r, onClose: e }) => {
    let t = ge(),
      n = Vt(),
      o = (0, br.useIntl)(),
      [s, a] = mt.useState(t.document.name),
      d = mt.useCallback((u) => {
        let p = u.target.value.trimStart();
        a(p);
      }, []);
    function i(u) {
      u.stopPropagation();
    }
    let c = mt.useCallback((u) => {
      switch (u.key) {
        case "Enter": {
          t.saveProjectAs(s), e();
          break;
        }
        case "Escape": {
          e();
          break;
        }
      }
    }, []);
    return mt.createElement(
      rn.Root,
      { open: r },
      mt.createElement(
        rn.Portal,
        { container: n.current },
        mt.createElement(_ae, { onPointerDown: e }),
        mt.createElement(
          Kae,
          { dir: "ltr", onKeyDown: i, onKeyUp: i },
          mt.createElement(Zae, {
            placeholder: o.formatMessage({ id: "enter.file.name" }),
            value: s,
            onChange: d,
            onKeyDown: c,
            icon: mt.createElement(Ul.Pencil1Icon, null),
          }),
          mt.createElement(
            Yae,
            null,
            mt.createElement(
              rn.Action,
              { asChild: !0 },
              mt.createElement(
                Oo,
                { onClick: e },
                mt.createElement(br.FormattedMessage, { id: "cancel" })
              )
            ),
            mt.createElement(
              rn.Action,
              { asChild: !0 },
              mt.createElement(
                Oo,
                {
                  css: { backgroundColor: "#2F80ED", color: "White" },
                  onClick: () => {
                    let u = s.trim().replace(/\.tldr$/, "");
                    t.saveProjectAs(u), e();
                  },
                },
                mt.createElement(br.FormattedMessage, { id: "save" })
              )
            )
          )
        )
      )
    );
  },
  Kae = H(rn.Content, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 300,
    maxWidth: "fit-content",
    maxHeight: "85vh",
    marginTop: "-5vh",
    pointerEvents: "all",
    backgroundColor: "$panel",
    padding: "$3",
    borderRadius: "$2",
    font: "$ui",
    zIndex: 999999,
    "&:focus": { outline: "none" },
  }),
  _ae = H(rn.Overlay, {
    backgroundColor: "rgba(0, 0, 0, .15)",
    position: "absolute",
    pointerEvents: "all",
    inset: 0,
    zIndex: 999998,
  }),
  Yae = H("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
    marginTop: 10,
  }),
  Zae = H(us, { background: "$hover" });
var vt = V(require("react"));
var Ss = V(require("@radix-ui/react-dropdown-menu")),
  ye = require("@radix-ui/react-icons"),
  q = V(require("react")),
  Jl = require("react-intl");
var _l = require("@radix-ui/react-dropdown-menu"),
  fi = V(require("react"));
function ke(n) {
  var o = n,
    { onSelect: r, id: e } = o,
    t = ot(o, ["onSelect", "id"]);
  return fi.createElement(
    _l.Item,
    { dir: "ltr", asChild: !0, onSelect: r, id: e },
    fi.createElement($e, S({}, t))
  );
}
var Yl = require("@radix-ui/react-dropdown-menu"),
  Si = V(require("react"));
var Oe = (r) => r.preventDefault();
function Rt({
  checked: r,
  disabled: e = !1,
  variant: t,
  onCheckedChange: n,
  kbd: o,
  id: s,
  ariaLabel: a,
  children: d,
}) {
  return Si.createElement(
    Yl.CheckboxItem,
    {
      dir: "ltr",
      onSelect: Oe,
      onCheckedChange: n,
      checked: r,
      disabled: e,
      asChild: !0,
      id: s,
      "aria-label": a,
    },
    Si.createElement($e, { kbd: o, variant: t, hasIndicator: !0 }, d)
  );
}
var ms = V(require("@radix-ui/react-dropdown-menu")),
  hs = V(require("react"));
var xt = (r) => r.stopPropagation();
function At({
  sideOffset: r = 4,
  alignOffset: e = 0,
  children: t,
  align: n,
  variant: o,
  id: s,
  overflow: a = !1,
  side: d = "bottom",
}) {
  let i = Vt();
  return hs.createElement(
    ms.Portal,
    { container: i.current, dir: "ltr" },
    hs.createElement(
      ms.Content,
      {
        align: n,
        alignOffset: e,
        sideOffset: r,
        onEscapeKeyDown: xt,
        asChild: !0,
        id: s,
        side: d,
      },
      hs.createElement(Xae, { variant: o, overflow: a }, t)
    )
  );
}
var Xae = H(jt, {
  width: "fit-content",
  height: "fit-content",
  minWidth: 0,
  maxHeight: "100vh",
  overflowY: "auto",
  overflowX: "hidden",
  "&::webkit-scrollbar": { display: "none" },
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  variants: {
    variant: { horizontal: { flexDirection: "row" }, menu: { minWidth: 128 } },
    overflow: { true: { maxHeight: "60vh" } },
  },
});
var Zl = require("@radix-ui/react-dropdown-menu");
var Vhe = H(Zl.Separator, {
  backgroundColor: "$hover",
  height: 1,
  marginTop: "$2",
  marginRight: "-$2",
  marginBottom: "$2",
  marginLeft: "-$2",
});
var Xl = require("@radix-ui/react-dropdown-menu");
var Tr = H(Xl.RadioItem, {
  height: "32px",
  width: "32px",
  backgroundColor: "$panel",
  borderRadius: "4px",
  padding: "0",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "none",
  border: "none",
  pointerEvents: "all",
  cursor: "pointer",
  variants: {
    isActive: {
      true: { backgroundColor: "$selected", color: "white" },
      false: {},
    },
    bp: { mobile: {}, small: {} },
  },
  compoundVariants: [
    {
      isActive: !1,
      bp: "small",
      css: {
        "&:focus": { backgroundColor: "$hover" },
        "&:hover:not(:disabled)": { backgroundColor: "$hover" },
      },
    },
  ],
});
var Zn = require("@radix-ui/react-dropdown-menu"),
  fo = V(require("react"));
function yn({
  children: r,
  size: e,
  overflow: t = !1,
  disabled: n = !1,
  label: o,
  id: s,
}) {
  return fo.createElement(
    Zn.Sub,
    { key: s },
    fo.createElement(
      Zn.SubTrigger,
      { dir: "ltr", asChild: !0 },
      fo.createElement($e, { disabled: n, hasArrow: !0 }, o)
    ),
    fo.createElement(
      Zn.SubContent,
      { asChild: !0, sideOffset: 4, alignOffset: -4 },
      fo.createElement(
        jt,
        { size: e, overflow: t },
        r,
        fo.createElement(Zn.Arrow, { offset: 13 })
      )
    )
  );
}
var ql = require("@radix-ui/react-dropdown-menu"),
  bi = V(require("react"));
function gs(n) {
  var o = n,
    { id: r, children: e } = o,
    t = ot(o, ["id", "children"]);
  return bi.createElement(
    ql.Trigger,
    { asChild: !0, id: r },
    bi.createElement(Ie, S({}, t), e)
  );
}
var qae = (r) => r.settings.dockPosition,
  Jae = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.length,
  Qae = (r) => {
    let e = r.document.pages[r.appState.currentPageId],
      { selectedIds: t } = r.document.pageStates[r.appState.currentPageId];
    return t.every((n) => e.shapes[n].isLocked);
  },
  ele = (r) => {
    let e = r.document.pages[r.appState.currentPageId],
      { selectedIds: t } = r.document.pageStates[r.appState.currentPageId];
    return t.every((n) => e.shapes[n].isAspectRatioLocked);
  },
  tle = (r) => {
    let e = r.document.pages[r.appState.currentPageId],
      t = r.document.pageStates[r.appState.currentPageId].selectedIds.map(
        (n) => e.shapes[n]
      );
    return t.every(
      (n) =>
        n.children !== void 0 ||
        (n.parentId === t[0].parentId &&
          t[0].parentId !== r.appState.currentPageId)
    );
  },
  nle = (r) => {
    let { selectedIds: e } = r.document.pageStates[r.appState.currentPageId];
    return e.length > 0;
  },
  ole = (r) => {
    let { selectedIds: e } = r.document.pageStates[r.appState.currentPageId];
    return e.length > 1;
  };
function Ql() {
  let r = ge(),
    e = (0, Jl.useIntl)(),
    t = r.useStore(Qae),
    n = r.useStore(ele),
    o = r.useStore(tle),
    s = r.useStore(nle),
    a = r.useStore(ole),
    d = r.useStore(Jae),
    i = r.useStore(qae),
    c = d > 1,
    u = d > 2,
    p = q.useCallback(() => {
      r.rotate();
    }, [r]),
    m = q.useCallback(() => {
      r.duplicate();
    }, [r]),
    h = q.useCallback(() => {
      r.toggleLocked();
    }, [r]),
    g = q.useCallback(() => {
      r.toggleAspectRatioLocked();
    }, [r]),
    f = q.useCallback(() => {
      r.group();
    }, [r]),
    T = q.useCallback(() => {
      r.moveToBack();
    }, [r]),
    x = q.useCallback(() => {
      r.moveBackward();
    }, [r]),
    b = q.useCallback(() => {
      r.moveForward();
    }, [r]),
    y = q.useCallback(() => {
      r.moveToFront();
    }, [r]),
    R = q.useCallback(() => {
      r.setShapeProps({ rotation: 0 });
    }, [r]),
    K = q.useCallback(() => {
      r.align("top");
    }, [r]),
    L = q.useCallback(() => {
      r.align("centerVertical");
    }, [r]),
    v = q.useCallback(() => {
      r.align("bottom");
    }, [r]),
    I = q.useCallback(() => {
      r.stretch("vertical");
    }, [r]),
    J = q.useCallback(() => {
      r.distribute("vertical");
    }, [r]),
    ce = q.useCallback(() => {
      r.align("left");
    }, [r]),
    de = q.useCallback(() => {
      r.align("centerHorizontal");
    }, [r]),
    He = q.useCallback(() => {
      r.align("right");
    }, [r]),
    Pe = q.useCallback(() => {
      r.stretch("horizontal");
    }, [r]),
    Me = q.useCallback(() => {
      r.distribute("horizontal");
    }, [r]),
    Ue = q.useCallback(
      (Kt) => {
        r.setMenuOpen(Kt);
      },
      [r]
    ),
    Ke = i === "bottom" || i === "top" ? "top" : i;
  return q.createElement(
    Ss.Root,
    { dir: "ltr", onOpenChange: Ue },
    q.createElement(
      Ss.Trigger,
      { dir: "ltr", asChild: !0, id: "TD-Tools-Dots" },
      q.createElement(
        Ie,
        {
          "aria-label": e.formatMessage({ id: "shape.options" }),
          variant: "circle",
        },
        q.createElement(ye.DotsHorizontalIcon, null)
      )
    ),
    q.createElement(
      At,
      { sideOffset: 16, side: Ke },
      q.createElement(
        q.Fragment,
        null,
        q.createElement(
          fs,
          null,
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "duplicate" }),
              kbd: "#D",
              id: "TD-Tools-Copy",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "duplicate" }),
                disabled: !s,
                onClick: m,
              },
              q.createElement(ye.CopyIcon, null)
            )
          ),
          q.createElement(
            ze,
            { label: e.formatMessage({ id: "rotate" }), id: "TD-Tools-Rotate" },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "rotate" }),
                disabled: !s,
                onClick: p,
              },
              q.createElement(ye.RotateCounterClockwiseIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: t ? "unlock" : "lock" }),
              kbd: "#L",
              id: "TD-Tools-Lock",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: t ? "unlock" : "lock" }),
                disabled: !s,
                onClick: h,
              },
              t
                ? q.createElement(ye.LockClosedIcon, null)
                : q.createElement(ye.LockOpen1Icon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({
                id: n ? "unlock.aspect.ratio" : "lock.aspect.ratio",
              }),
              id: "TD-Tools-AspectRatio",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({
                  id: n ? "unlock.aspect.ratio" : "lock.aspect.ratio",
                }),
                disabled: !s,
                onClick: g,
              },
              n
                ? q.createElement(ye.AspectRatioIcon, null)
                : q.createElement(ye.BoxIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "group" }),
              kbd: "#G",
              id: "TD-Tools-Group",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "group" }),
                disabled: !s || (!o && !a),
                onClick: f,
              },
              q.createElement(ye.GroupIcon, null)
            )
          )
        ),
        q.createElement(
          fs,
          null,
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "move.to.back" }),
              kbd: "#\u21E7[",
              id: "TD-Tools-PinBottom",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "move.to.back" }),
                disabled: !s,
                onClick: T,
              },
              q.createElement(ye.PinBottomIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "move.backward" }),
              kbd: "#[",
              id: "TD-Tools-ArrowDown",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "move.backward" }),
                disabled: !s,
                onClick: x,
              },
              q.createElement(ye.ArrowDownIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "move.forward" }),
              kbd: "#]",
              id: "TD-Tools-ArrowUp",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "move.forward" }),
                disabled: !s,
                onClick: b,
              },
              q.createElement(ye.ArrowUpIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "move.to.front" }),
              kbd: "#\u21E7]",
              id: "TD-Tools-PinTop",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "move.to.front" }),
                disabled: !s,
                onClick: y,
              },
              q.createElement(ye.PinTopIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "reset.angle" }),
              id: "TD-Tools-ResetAngle",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "reset.angle" }),
                disabled: !s,
                onClick: R,
              },
              q.createElement(ye.AngleIcon, null)
            )
          )
        ),
        q.createElement(Be, null),
        q.createElement(
          fs,
          null,
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "align.left" }),
              id: "TD-Tools-AlignLeft",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "align.left" }),
                disabled: !c,
                onClick: ce,
              },
              q.createElement(ye.AlignLeftIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "align.center.x" }),
              id: "TD-Tools-AlignCenterHorizontal",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "align.center.x" }),
                disabled: !c,
                onClick: de,
              },
              q.createElement(ye.AlignCenterHorizontallyIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "align.right" }),
              id: "TD-Tools-AlignRight",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "align.right" }),
                disabled: !c,
                onClick: He,
              },
              q.createElement(ye.AlignRightIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "stretch.x" }),
              id: "TD-Tools-StretchHorizontal",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "stretch.x" }),
                disabled: !c,
                onClick: Pe,
              },
              q.createElement(ye.StretchHorizontallyIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "distribute.x" }),
              id: "TD-Tools-SpaceEvenlyHorizontal",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "distribute.x" }),
                disabled: !u,
                onClick: Me,
              },
              q.createElement(ye.SpaceEvenlyHorizontallyIcon, null)
            )
          )
        ),
        q.createElement(
          fs,
          null,
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "align.top" }),
              id: "TD-Tools-AlignTop",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "align.top" }),
                disabled: !c,
                onClick: K,
              },
              q.createElement(ye.AlignTopIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "align.center.y" }),
              id: "TD-Tools-AlignCenterVertical",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "align.center.y" }),
                disabled: !c,
                onClick: L,
              },
              q.createElement(ye.AlignCenterVerticallyIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "align.bottom" }),
              id: "TD-Tools-AlignBottom",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "align.bottom" }),
                disabled: !c,
                onClick: v,
              },
              q.createElement(ye.AlignBottomIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "stretch.y" }),
              id: "TD-Tools-StretchVertical",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "stretch.y" }),
                disabled: !c,
                onClick: I,
              },
              q.createElement(ye.StretchVerticallyIcon, null)
            )
          ),
          q.createElement(
            ze,
            {
              label: e.formatMessage({ id: "distribute.y" }),
              id: "TD-Tools-SpaceEvenlyVertical",
            },
            q.createElement(
              Ie,
              {
                "aria-label": e.formatMessage({ id: "distribute.y" }),
                disabled: !u,
                onClick: J,
              },
              q.createElement(ye.SpaceEvenlyVerticallyIcon, null)
            )
          )
        )
      )
    )
  );
}
var fs = H("div", {
  position: "relative",
  display: "flex",
  width: "100%",
  background: "none",
  border: "none",
  cursor: "pointer",
  outline: "none",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
});
var jo = V(require("react")),
  ed = require("react-intl");
var rle = (r) =>
    r.appState.isEmptyCanvas &&
    Object.keys(r.document.pages[r.appState.currentPageId].shapes).length > 0,
  sle = (r) => r.settings.isDebugMode,
  ile = (r) => r.settings.dockPosition,
  td = jo.memo(function () {
    let e = ge(),
      t = e.useStore(rle),
      n = e.useStore(ile),
      o = e.useStore(sle),
      s = {
        bottom: n === "bottom" && o ? 120 : n === "bottom" ? 80 : o ? 60 : 20,
        left: "50%",
        transform: "translate(-50%,0)",
      };
    return t
      ? jo.createElement(
          ale,
          { id: "TD-Tools-Back_to_content", style: S({}, s) },
          jo.createElement(
            $e,
            { onClick: e.zoomToContent },
            jo.createElement(ed.FormattedMessage, { id: "zoom.to.content" })
          )
        )
      : null;
  }),
  ale = H(jt, {
    pointerEvents: "all",
    width: "fit-content",
    minWidth: 0,
    position: "fixed",
    bottom: 0,
  });
var Go = V(require("react")),
  hd = require("react-intl");
var lle = V(require("react"));
var Ti = V(require("react"));
function yi(r) {
  let n = r,
    { size: e = 16 } = n,
    t = ot(n, ["size"]);
  return Ti.createElement(
    "svg",
    S({ width: 24, height: 24 }, t),
    Ti.createElement("circle", { cx: 12, cy: 12, r: e / 2 })
  );
}
var xi = V(require("react"));
function nd() {
  return xi.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    xi.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeDasharray: 50.26548 * 0.1,
    })
  );
}
var wi = V(require("react")),
  dle = `${50.26548 * 0.025} ${50.26548 * 0.1}`;
function od() {
  return wi.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    wi.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeDasharray: dle,
    })
  );
}
var ki = V(require("react"));
function rd() {
  return ki.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "1 1.5 21 22",
      fill: "currentColor",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    ki.createElement("path", {
      d: "M10.0162 19.2768C10.0162 19.2768 9.90679 19.2517 9.6879 19.2017C9.46275 19.1454 9.12816 19.0422 8.68413 18.8921C8.23384 18.7358 7.81482 18.545 7.42707 18.3199C7.03307 18.101 6.62343 17.7883 6.19816 17.3818C5.77289 16.9753 5.33511 16.3718 4.88482 15.5713C4.43453 14.7645 4.1531 13.8545 4.04053 12.8414C3.92795 11.822 4.04991 10.8464 4.40639 9.91451C4.76286 8.98266 5.39452 8.10084 6.30135 7.26906C7.21444 6.44353 8.29325 5.83377 9.5378 5.43976C10.7823 5.05202 11.833 4.92068 12.6898 5.04576C13.5466 5.16459 14.3878 5.43664 15.2133 5.86191C16.0388 6.28718 16.7768 6.8688 17.4272 7.60678C18.0714 8.34475 18.5404 9.21406 18.8344 10.2147C19.1283 11.2153 19.1721 12.2598 18.9657 13.348C18.7593 14.4299 18.2872 15.4337 17.5492 16.3593C16.8112 17.2849 15.9263 18.0072 14.8944 18.5263C13.8624 19.0391 12.9056 19.3174 12.0238 19.3612C11.142 19.405 10.2101 19.2705 9.22823 18.9578C8.24635 18.6451 7.35828 18.151 6.56402 17.4756C5.77601 16.8002 6.08871 16.8658 7.50212 17.6726C8.90927 18.4731 10.1444 18.8484 11.2076 18.7983C12.2645 18.7545 13.2965 18.4825 14.3034 17.9822C15.3102 17.4819 16.1264 16.8221 16.7518 16.0028C17.3772 15.1835 17.7681 14.3111 17.9244 13.3855C18.0808 12.4599 18.0401 11.5781 17.8025 10.74C17.5586 9.902 17.1739 9.15464 16.6486 8.49797C16.1233 7.8413 15.2289 7.27844 13.9656 6.80939C12.7086 6.34034 11.4203 6.20901 10.1007 6.41539C8.78732 6.61552 7.69599 7.06893 6.82669 7.77564C5.96363 8.48859 5.34761 9.26409 4.97863 10.1021C4.60964 10.9402 4.45329 11.8376 4.50958 12.7945C4.56586 13.7513 4.79101 14.6238 5.18501 15.4118C5.57276 16.1998 5.96363 16.8002 6.35764 17.2129C6.75164 17.6257 7.13313 17.9509 7.50212 18.1886C7.87736 18.4325 8.28074 18.642 8.71227 18.8171C9.15005 18.9922 9.47839 19.111 9.69728 19.1736C9.91617 19.2361 10.0256 19.2705 10.0256 19.2768H10.0162Z",
      strokeWidth: "2",
    })
  );
}
var vi = V(require("react"));
function sd() {
  return vi.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    vi.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
    })
  );
}
var yr = V(require("react"));
function id(r) {
  return yr.createElement(
    "svg",
    S(
      {
        width: 18,
        height: 18,
        viewBox: "0 0 15 15",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
      },
      r
    ),
    yr.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 4.656a.5.5 0 01.5-.5h9.7a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z",
    }),
    yr.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.272 3a.578.578 0 00-.578.578v.578h3.311v-.578A.578.578 0 008.428 3H6.272zm3.733 1.156v-.578A1.578 1.578 0 008.428 2H6.272a1.578 1.578 0 00-1.578 1.578v.578H3.578a.5.5 0 00-.5.5V12.2a1.578 1.578 0 001.577 1.578h5.39a1.578 1.578 0 001.577-1.578V4.656a.5.5 0 00-.5-.5h-1.117zm-5.927 1V12.2a.578.578 0 00.577.578h5.39a.578.578 0 00.577-.578V5.156H4.078z",
    }),
    yr.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.272 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5zM8.428 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5z",
    })
  );
}
var Ii = V(require("react"));
function Ci(t) {
  var n = t,
    { flipHorizontal: r } = n,
    e = ot(n, ["flipHorizontal"]);
  return Ii.createElement(
    "svg",
    S(
      {
        width: 24,
        height: 24,
        viewBox: "0 0 15 15",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        style: { transform: r ? "scale(-1, 1)" : "scale(1, 1)" },
      },
      e
    ),
    Ii.createElement("path", {
      d: "M10.6707 8.5081C10.6707 10.1923 9.3004 11.5625 7.61631 11.5625H6.5351C6.35593 11.5625 6.21074 11.4173 6.21074 11.2382V11.13C6.21074 10.9508 6.35591 10.8057 6.5351 10.8057H7.61631C8.88313 10.8057 9.91387 9.77492 9.91387 8.5081C9.91387 7.24128 8.88313 6.21054 7.61631 6.21054H5.62155L6.99534 7.58433C7.14289 7.73183 7.14289 7.97195 6.99534 8.11944C6.85216 8.26251 6.60298 8.2623 6.46013 8.11944L4.44045 6.09971C4.36898 6.02824 4.32959 5.93321 4.32959 5.8321C4.32959 5.73106 4.36898 5.63598 4.44045 5.56454L6.46024 3.54472C6.60309 3.40176 6.85248 3.40176 6.99535 3.54472C7.14291 3.69218 7.14291 3.93234 6.99535 4.07979L5.62156 5.45368H7.61631C9.3004 5.45368 10.6707 6.82393 10.6707 8.5081Z",
    })
  );
}
var Di = V(require("react"));
function ad(r) {
  return Di.createElement(
    "svg",
    S(
      {
        width: 24,
        height: 24,
        viewBox: "-2 -2 28 28",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
      },
      r
    ),
    Di.createElement("path", {
      d: "M12.4239 4.62C13.3572 4.62 14.1572 4.73333 14.8239 4.96C15.4906 5.17333 15.9772 5.43333 16.2839 5.74C16.3639 5.82 16.4039 5.94 16.4039 6.1V8.86H14.0639C13.9172 8.86 13.8439 8.78666 13.8439 8.64V7.26C13.4306 7.12666 12.9572 7.06 12.4239 7.06C11.6506 7.06 11.0639 7.18 10.6639 7.42C10.2639 7.66 10.0639 8.04666 10.0639 8.58V9C10.0639 9.38666 10.1639 9.69333 10.3639 9.92C10.5772 10.1333 11.0306 10.3467 11.7239 10.56L13.6439 11.14C14.4706 11.38 15.1172 11.66 15.5839 11.98C16.0506 12.3 16.3772 12.68 16.5639 13.12C16.7639 13.5467 16.8639 14.0733 16.8639 14.7V15.62C16.8639 16.7933 16.4039 17.7133 15.4839 18.38C14.5639 19.0467 13.2839 19.38 11.6439 19.38C10.6706 19.38 9.79723 19.2867 9.0239 19.1C8.2639 18.9133 7.71056 18.6533 7.3639 18.32C7.3239 18.28 7.29056 18.24 7.2639 18.2C7.25056 18.1467 7.2439 18.06 7.2439 17.94V15.74H7.6239C8.2239 16.1533 8.85056 16.4533 9.5039 16.64C10.1572 16.8267 10.9306 16.92 11.8239 16.92C12.6506 16.92 13.2506 16.7867 13.6239 16.52C14.0106 16.2533 14.2039 15.9333 14.2039 15.56V14.88C14.2039 14.6667 14.1639 14.48 14.0839 14.32C14.0172 14.16 13.8706 14.0133 13.6439 13.88C13.4172 13.7467 13.0572 13.6067 12.5639 13.46L10.6639 12.88C9.7839 12.6133 9.11056 12.3 8.6439 11.94C8.17723 11.58 7.85056 11.18 7.6639 10.74C7.49056 10.3 7.4039 9.83333 7.4039 9.34V8.38C7.4039 7.64666 7.61056 7 8.0239 6.44C8.43723 5.88 9.01723 5.44 9.7639 5.12C10.5239 4.78666 11.4106 4.62 12.4239 4.62Z",
    })
  );
}
var Pi = V(require("react"));
function ld(r) {
  return Pi.createElement(
    "svg",
    S(
      {
        width: 24,
        height: 24,
        viewBox: "-2 -2 28 28",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
      },
      r
    ),
    Pi.createElement("path", {
      d: "M8.16191 19H5.68191C5.53525 19 5.46191 18.9267 5.46191 18.78V5H8.76191C8.88191 5 8.97525 5.03333 9.04191 5.1C9.10858 5.15333 9.17525 5.27333 9.24191 5.46C9.72191 6.59333 10.1686 7.7 10.5819 8.78C11.0086 9.84667 11.4352 10.98 11.8619 12.18H12.1619C12.6019 10.9667 13.0352 9.79333 13.4619 8.66C13.8886 7.52667 14.3552 6.30667 14.8619 5H18.3219C18.4686 5 18.5419 5.07333 18.5419 5.22V19H16.0619C15.9152 19 15.8419 18.9267 15.8419 18.78V16.26C15.8419 15.5267 15.8486 14.8133 15.8619 14.12C15.8886 13.4267 15.9286 12.6867 15.9819 11.9C16.0486 11.1 16.1419 10.1933 16.2619 9.18H15.9019C15.4352 10.3533 14.9486 11.5667 14.4419 12.82C13.9486 14.06 13.4819 15.2333 13.0419 16.34H11.1019C11.0619 16.34 11.0152 16.3333 10.9619 16.32C10.9219 16.2933 10.8886 16.2467 10.8619 16.18C10.4619 15.18 10.0086 14.06 9.50191 12.82C9.00858 11.58 8.53525 10.3667 8.08191 9.18H7.70191C7.83525 10.18 7.93525 11.0733 8.00191 11.86C8.06858 12.6467 8.10858 13.3933 8.12191 14.1C8.14858 14.8067 8.16191 15.5267 8.16191 16.26V19Z",
    })
  );
}
var Mi = V(require("react"));
function dd(r) {
  return Mi.createElement(
    "svg",
    S(
      {
        width: 24,
        height: 24,
        viewBox: "-2 -2 28 28",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
      },
      r
    ),
    Mi.createElement("path", {
      d: "M7.68191 19C7.53525 19 7.46191 18.9267 7.46191 18.78V5H10.1219C10.2686 5 10.3419 5.07333 10.3419 5.22V16.56H13.4419V15.02H15.7619C15.9086 15.02 15.9819 15.0933 15.9819 15.24V19H7.68191Z",
    })
  );
}
var xr = V(require("react"));
function cd() {
  return xr.createElement(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    xr.createElement("path", {
      d: "M1.72838 9.33987L8.84935 2.34732C9.23874 1.96494 9.86279 1.96539 10.2516 2.34831L13.5636 5.60975C13.9655 6.00555 13.9607 6.65526 13.553 7.04507L8.13212 12.2278C7.94604 12.4057 7.69851 12.505 7.44107 12.505L6.06722 12.505L3.83772 12.505C3.5673 12.505 3.30842 12.3954 3.12009 12.2014L1.7114 10.7498C1.32837 10.3551 1.33596 9.72521 1.72838 9.33987Z",
      stroke: "currentColor",
    }),
    xr.createElement("line", {
      x1: "6.01807",
      y1: "12.5",
      x2: "10.7959",
      y2: "12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
    }),
    xr.createElement("line", {
      x1: "5.50834",
      y1: "5.74606",
      x2: "10.1984",
      y2: "10.4361",
      stroke: "currentColor",
    })
  );
}
var Bi = V(require("react"));
function pd() {
  return Bi.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
    },
    Bi.createElement("path", {
      d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
    })
  );
}
var Ei = V(require("react"));
function ud() {
  return Ei.createElement(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Ei.createElement("path", {
      d: "M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645C12.0488 3.34171 12.0488 3.65829 11.8536 3.85355L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z",
    })
  );
}
function md() {
  let r = ge(),
    e = (0, hd.useIntl)(),
    t = Go.useCallback(() => {
      r.delete();
    }, [r]),
    n = r.useStore(
      (o) =>
        o.appState.status === "idle" &&
        o.document.pageStates[o.appState.currentPageId].selectedIds.length > 0
    );
  return Go.createElement(
    ze,
    {
      label: e.formatMessage({ id: "delete" }),
      kbd: "\u232B",
      id: "TD-Delete",
    },
    Go.createElement(
      Ie,
      {
        "aria-label": e.formatMessage({ id: "delete" }),
        variant: "circle",
        disabled: !n,
        onSelect: t,
      },
      Go.createElement(id, null)
    )
  );
}
var bs = V(require("@radix-ui/react-dropdown-menu")),
  xn = require("@radix-ui/react-icons"),
  Xn = V(require("@radix-ui/react-popover")),
  Fe = V(require("react")),
  Ai = require("react-intl");
var gd = require("@radix-ui/react-icons"),
  sn = V(require("react")),
  fd = require("react-intl");
var cle = (r) => r.settings.language,
  Sd = () => {
    let r = ge(),
      e = r.useStore(cle),
      t = sn.useCallback(
        (n) => {
          r.setSetting("language", n);
        },
        [r]
      );
    return sn.createElement(
      At,
      {
        variant: "menu",
        overflow: !0,
        id: "language-menu",
        side: "left",
        sideOffset: 8,
      },
      ls.map(({ locale: n, label: o }) =>
        sn.createElement(
          Rt,
          {
            key: n,
            checked: e === n,
            onCheckedChange: () => t(n),
            id: `TD-MenuItem-Language-${n}`,
          },
          o
        )
      ),
      sn.createElement(Be, null),
      sn.createElement(
        "a",
        {
          href: "https://github.com/tldraw/tldraw/blob/main/guides/translation.md",
          target: "_blank",
          rel: "nofollow",
        },
        sn.createElement(
          ke,
          { id: "TD-MenuItem-Translation-Link" },
          sn.createElement(fd.FormattedMessage, { id: "translation.link" }),
          sn.createElement(
            bt,
            null,
            sn.createElement(gd.ExternalLinkIcon, null)
          )
        )
      )
    );
  };
var Lt = V(require("@radix-ui/react-dialog")),
  bd = require("@radix-ui/react-icons"),
  dt = V(require("react")),
  Vo = require("react-intl");
function Td({ onOpenChange: r }) {
  let e = (0, Vo.useIntl)(),
    t = Vt(),
    n = {
      Tools: [
        { label: e.formatMessage({ id: "select" }), kbd: "1" },
        { label: e.formatMessage({ id: "draw" }), kbd: "2" },
        { label: e.formatMessage({ id: "eraser" }), kbd: "3" },
        { label: e.formatMessage({ id: "rectangle" }), kbd: "4" },
        { label: e.formatMessage({ id: "ellipse" }), kbd: "5" },
        { label: e.formatMessage({ id: "triangle" }), kbd: "6" },
        { label: e.formatMessage({ id: "line" }), kbd: "7" },
        { label: e.formatMessage({ id: "arrow" }), kbd: "8" },
        { label: e.formatMessage({ id: "text" }), kbd: "9" },
        { label: e.formatMessage({ id: "sticky" }), kbd: "0" },
      ],
      View: [
        { label: e.formatMessage({ id: "zoom.in" }), kbd: "#+" },
        { label: e.formatMessage({ id: "zoom.out" }), kbd: "#-" },
        {
          label: `${e.formatMessage({ id: "zoom.to" })} 100%`,
          kbd: "\u21E7+0",
        },
        { label: e.formatMessage({ id: "zoom.to.fit" }), kbd: "\u21E7+1" },
        {
          label: e.formatMessage({ id: "zoom.to.selection" }),
          kbd: "\u21E7+2",
        },
        {
          label: e.formatMessage({ id: "preferences.dark.mode" }),
          kbd: "#\u21E7D",
        },
        { label: e.formatMessage({ id: "preferences.focus.mode" }), kbd: "#." },
        {
          label: e.formatMessage({ id: "preferences.show.grid" }),
          kbd: "#\u21E7G",
        },
      ],
      Transform: [
        { label: e.formatMessage({ id: "flip.horizontal" }), kbd: "\u21E7H" },
        { label: e.formatMessage({ id: "flip.vertical" }), kbd: "\u21E7V" },
        {
          label: `${e.formatMessage({ id: "lock" })} / ${e.formatMessage({
            id: "unlock",
          })}`,
          kbd: "#\u21E7L",
        },
        {
          label: `${e.formatMessage({ id: "move" })} ${e.formatMessage({
            id: "to.front",
          })}`,
          kbd: "\u21E7]",
        },
        {
          label: `${e.formatMessage({ id: "move" })} ${e.formatMessage({
            id: "forward",
          })}`,
          kbd: "]",
        },
        {
          label: `${e.formatMessage({ id: "move" })} ${e.formatMessage({
            id: "backward",
          })}`,
          kbd: "[",
        },
        {
          label: `${e.formatMessage({ id: "move" })} ${e.formatMessage({
            id: "back",
          })}`,
          kbd: "\u21E7[",
        },
      ],
      File: [
        { label: e.formatMessage({ id: "new.project" }), kbd: "#N" },
        { label: e.formatMessage({ id: "open" }), kbd: "#O" },
        { label: e.formatMessage({ id: "save" }), kbd: "#S" },
        { label: e.formatMessage({ id: "save.as" }), kbd: "#\u21E7S" },
        { label: e.formatMessage({ id: "upload.media" }), kbd: "#U" },
      ],
      Edit: [
        { label: e.formatMessage({ id: "undo" }), kbd: "#Z" },
        { label: e.formatMessage({ id: "redo" }), kbd: "#\u21E7Z" },
        { label: e.formatMessage({ id: "cut" }), kbd: "#X" },
        { label: e.formatMessage({ id: "copy" }), kbd: "#C" },
        { label: e.formatMessage({ id: "paste" }), kbd: "#V" },
        { label: e.formatMessage({ id: "select.all" }), kbd: "#A" },
        { label: e.formatMessage({ id: "delete" }), kbd: "\u232B" },
        { label: e.formatMessage({ id: "duplicate" }), kbd: "#D" },
      ],
    };
  return dt.createElement(
    Lt.Root,
    { onOpenChange: r },
    dt.createElement(
      Lt.Trigger,
      { asChild: !0 },
      dt.createElement(
        $e,
        { id: "TD-HelpItem-Keyboard", variant: "wide" },
        dt.createElement(Vo.FormattedMessage, { id: "keyboard.shortcuts" })
      )
    ),
    dt.createElement(
      Lt.Portal,
      { container: t.current },
      dt.createElement(fle, null),
      dt.createElement(
        mle,
        null,
        dt.createElement(
          ble,
          null,
          dt.createElement(Vo.FormattedMessage, { id: "keyboard.shortcuts" }),
          dt.createElement(
            Lt.Close,
            { asChild: !0 },
            dt.createElement(Sle, null, dt.createElement(bd.Cross2Icon, null))
          )
        ),
        dt.createElement(
          gle,
          { bp: rt },
          Object.entries(n).map(([o, s]) =>
            dt.createElement(
              Ri,
              { key: o },
              dt.createElement(
                ple,
                null,
                dt.createElement(Vo.FormattedMessage, {
                  id: `menu.${o.toLocaleLowerCase()}`,
                })
              ),
              dt.createElement(
                ule,
                null,
                s.map((a) =>
                  dt.createElement(
                    hle,
                    { key: a.label },
                    a.label,
                    dt.createElement(Bo, { variant: "menu" }, a.kbd)
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
var ple = H("h3", {
    fontSize: "$2",
    color: "$text",
    fontFamily: "$ui",
    margin: 0,
    paddingBottom: "$5",
  }),
  Ri = H("div", { breakInside: "avoid", paddingBottom: 24 }),
  ule = H("ul", {
    listStyleType: "none",
    width: "100%",
    padding: 0,
    margin: 0,
  }),
  hle = H("li", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 32,
    minHeight: 32,
    width: "100%",
    outline: "none",
    color: "$text",
    fontFamily: "$ui",
    fontWeight: 400,
    fontSize: "$1",
    borderRadius: 4,
    userSelect: "none",
    WebkitUserSelect: "none",
    margin: 0,
    padding: "0 0",
  }),
  mle = H(Lt.Content, {
    borderRadius: 6,
    boxShadow:
      "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    maxWidth: "90vw",
    maxHeight: "74vh",
    overflowY: "auto",
    padding: 25,
    zIndex: 9999,
    pointerEvents: "all",
    background: "$panel",
    "&:focus": { outline: "none" },
  }),
  gle = H("div", {
    maxWidth: "100%",
    width: "fit-content",
    height: "fit-content",
    overflowY: "auto",
    columnGap: 64,
    variants: {
      bp: {
        mobile: { columns: 1, [`& ${Ri}`]: { minWidth: "0px" } },
        small: { columns: 2, [`& ${Ri}`]: { minWidth: "200px" } },
        medium: { columns: 3 },
        large: { columns: 3 },
      },
    },
  }),
  fle = H(Lt.Overlay, {
    backgroundColor: "$overlay",
    position: "fixed",
    inset: 0,
    zIndex: 9998,
  }),
  Sle = H(Ho, {
    fontFamily: "inherit",
    borderRadius: "100%",
    height: 25,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "$text",
    cursor: "pointer",
    "&:hover": { backgroundColor: "$hover" },
  }),
  ble = H(Lt.Title, {
    fontFamily: "$body",
    fontSize: "$3",
    color: "$text",
    paddingBottom: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  });
var Tle = (r) => r.settings.isDebugMode,
  yle = (r) => r.settings.dockPosition;
function yd() {
  let r = ge(),
    e = r.useStore(Tle),
    t = r.useStore(yle),
    [n, o] = Fe.useState(!1);
  return Fe.createElement(
    Xn.Root,
    null,
    Fe.createElement(
      Cle,
      { dir: "ltr", debug: e, side: t, bp: rt },
      Fe.createElement(
        Xn.Trigger,
        { dir: "ltr", asChild: !0 },
        Fe.createElement(vle, null, Fe.createElement(xn.QuestionMarkIcon, null))
      )
    ),
    Fe.createElement(
      Xn.Content,
      {
        dir: "ltr",
        align: "end",
        side: "top",
        alignOffset: 10,
        sideOffset: 8,
        asChild: !0,
      },
      Fe.createElement(
        Ile,
        { style: { visibility: n ? "hidden" : "visible" } },
        Fe.createElement(xle, null),
        Fe.createElement(Td, { onOpenChange: o }),
        Fe.createElement(Be, null),
        Fe.createElement(kle, null)
      )
    )
  );
}
var xle = () =>
    Fe.createElement(
      bs.Root,
      { dir: "ltr" },
      Fe.createElement(
        bs.Trigger,
        { asChild: !0 },
        Fe.createElement(
          $e,
          { variant: "wide", hasArrow: !0 },
          Fe.createElement(Ai.FormattedMessage, { id: "language" })
        )
      ),
      Fe.createElement(Sd, null)
    ),
  wle = [
    {
      id: "tldraw-beta",
      icon: xn.ExternalLinkIcon,
      url: "https://beta.tldraw.com",
    },
    {
      id: "github",
      icon: xn.GitHubLogoIcon,
      url: "https://github.com/tldraw/tldraw",
    },
    {
      id: "twitter",
      icon: xn.TwitterLogoIcon,
      url: "https://twitter.com/tldraw",
    },
    { id: "discord", icon: pd, url: "https://discord.gg/SBBEVCA4PG" },
    {
      id: "become.a.sponsor",
      icon: xn.HeartFilledIcon,
      url: "https://github.com/sponsors/steveruizok",
    },
  ],
  kle = () =>
    Fe.createElement(
      Fe.Fragment,
      null,
      wle.map((r) =>
        Fe.createElement(
          "a",
          { key: r.id, href: r.url, target: "_blank", rel: "nofollow" },
          Fe.createElement(
            $e,
            { id: `TD-Link-${r.id}`, variant: "wide" },
            Fe.createElement(Ai.FormattedMessage, { id: r.id }),
            Fe.createElement(bt, null, Fe.createElement(r.icon, null))
          )
        )
      )
    ),
  vle = H("button", {
    width: 32,
    height: 32,
    borderRadius: "100%",
    display: "flex",
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    backgroundColor: "$panel",
    cursor: "pointer",
    boxShadow: "$panel",
    border: "1px solid $panelContrast",
    color: "$text",
    "& svg": { height: 12, width: 12 },
  }),
  Ile = H(jt, {
    width: "fit-content",
    height: "fit-content",
    minWidth: 200,
    maxHeight: 380,
    overflowY: "auto",
    "& *": { boxSizing: "border-box" },
    "& a": { outline: "none" },
    variants: {
      variant: {
        horizontal: { flexDirection: "row" },
        menu: { minWidth: 128 },
      },
    },
  }),
  Cle = H(Xn.Anchor, {
    position: "absolute",
    zIndex: 999,
    right: 10,
    bottom: 10,
    width: 32,
    height: 32,
    variants: {
      debug: { true: {}, false: {} },
      bp: {
        mobile: { bottom: 64 },
        small: { bottom: 20 },
        medium: {},
        large: {},
      },
      side: { top: {}, left: {}, right: {}, bottom: {} },
    },
    compoundVariants: [
      { debug: !0, css: { bottom: 50 } },
      { bp: "mobile", side: "bottom", debug: !0, css: { bottom: 104 } },
      { bp: "small", side: "bottom", debug: !0, css: { bottom: 60 } },
      { bp: "small", side: "bottom", debug: !0, css: { bottom: 60 } },
    ],
  });
var _t = require("@radix-ui/react-icons"),
  je = V(require("react")),
  vd = require("react-intl");
var So = H("div", {
  backgroundColor: "$panel",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  boxShadow: "$panel",
  padding: "$2",
  border: "1px solid $panelContrast",
  gap: 0,
  overflow: "hidden",
  variants: {
    side: {
      center: { borderRadius: 9 },
      left: {
        padding: 0,
        borderTop: 0,
        borderLeft: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 9,
        borderBottomLeftRadius: 0,
      },
      right: {
        padding: 0,
        borderTop: 0,
        borderRight: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 0,
      },
    },
  },
  "& hr": { height: 10, width: "100%", backgroundColor: "red", border: "none" },
});
var qn = V(require("@radix-ui/react-dropdown-menu")),
  $o = require("@radix-ui/react-icons"),
  Ze = V(require("react")),
  wd = require("react-intl");
var Li = ["rectangle", "ellipse", "triangle", "line"],
  xd = {
    ["rectangle"]: Ze.createElement($o.SquareIcon, null),
    ["ellipse"]: Ze.createElement($o.CircleIcon, null),
    ["triangle"]: Ze.createElement($o.VercelLogoIcon, null),
    ["line"]: Ze.createElement(ud, null),
  },
  Dle = (r) => r.settings.dockPosition,
  kd = Ze.memo(function ({ activeTool: e, isToolLocked: t }) {
    let n = ge(),
      o = (0, wd.useIntl)(),
      s = n.useStore(Dle),
      [a, d] = Ze.useState("rectangle");
    Ze.useEffect(() => {
      Li.includes(e) && a !== e && d(e);
    }, [e]);
    let i = Ze.useCallback(() => {
        n.selectTool(a);
      }, [e, n]),
      c = Ze.useCallback(() => {
        n.toggleToolLock();
      }, [n]),
      u = Ze.useCallback((g) => {
        g.key === " " && n.shiftKey && g.preventDefault();
      }, []),
      p = Li.includes(e),
      m = s === "bottom" || s === "top" ? "top" : s,
      h = s === "bottom" || s === "top" ? "row" : "column";
    return Ze.createElement(
      qn.Root,
      { dir: "ltr", onOpenChange: i },
      Ze.createElement(
        qn.Trigger,
        { dir: "ltr", asChild: !0, id: "TD-PrimaryTools-Shapes" },
        Ze.createElement(
          Ie,
          {
            disabled: p && n.shiftKey,
            variant: "primary",
            onDoubleClick: c,
            isToolLocked: p && t,
            isActive: p,
            onKeyDown: u,
            "aria-label": o.formatMessage({ id: "shapes" }),
          },
          xd[a]
        )
      ),
      Ze.createElement(
        qn.Content,
        { asChild: !0, side: m, sideOffset: 12 },
        Ze.createElement(
          So,
          { side: "center", style: { flexDirection: h } },
          Li.map((g, f) =>
            Ze.createElement(
              ze,
              {
                key: g,
                label: o.formatMessage({ id: g }),
                kbd: (4 + f).toString(),
                id: `TD-PrimaryTools-Shapes-${g}`,
              },
              Ze.createElement(
                qn.Item,
                { asChild: !0 },
                Ze.createElement(
                  Ie,
                  {
                    "aria-label": o.formatMessage({ id: g }),
                    variant: "primary",
                    onClick: () => {
                      n.selectTool(g), d(g);
                    },
                  },
                  xd[g]
                )
              )
            )
          )
        )
      )
    );
  });
var Ple = (r) => r.appState.activeTool,
  Mle = (r) => r.appState.isToolLocked,
  Ble = (r) => r.settings.dockPosition,
  Id = je.memo(function () {
    let e = ge(),
      t = (0, vd.useIntl)(),
      n = e.useStore(Ple),
      o = e.useStore(Mle),
      s = e.useStore(Ble),
      a = je.useCallback(() => {
        e.selectTool("select");
      }, [e]),
      d = je.useCallback(() => {
        e.selectTool("erase");
      }, [e]),
      i = je.useCallback(() => {
        e.selectTool("draw");
      }, [e]),
      c = je.useCallback(() => {
        e.selectTool("arrow");
      }, [e]),
      u = je.useCallback(() => {
        e.selectTool("text");
      }, [e]),
      p = je.useCallback(() => {
        e.selectTool("sticky");
      }, [e]),
      m = je.useCallback(
        () =>
          ue(this, null, function* () {
            e.openAsset();
          }),
        [e]
      );
    return je.createElement(
      Ele,
      {
        side: "center",
        id: "TD-PrimaryTools",
        style: {
          flexDirection: s === "bottom" || s === "top" ? "row" : "column",
        },
        bp: rt,
      },
      je.createElement(
        on,
        {
          kbd: "1",
          label: t.formatMessage({ id: "select" }),
          onClick: a,
          isActive: n === "select",
          variant: "primary",
          id: "TD-PrimaryTools-CursorArrow",
        },
        je.createElement(_t.CursorArrowIcon, null)
      ),
      je.createElement(
        on,
        {
          kbd: "2",
          label: t.formatMessage({ id: "draw" }),
          onClick: i,
          isActive: n === "draw",
          variant: "primary",
          id: "TD-PrimaryTools-Pencil",
        },
        je.createElement(_t.Pencil1Icon, null)
      ),
      je.createElement(
        on,
        {
          kbd: "3",
          label: t.formatMessage({ id: "eraser" }),
          onClick: d,
          isActive: n === "erase",
          variant: "primary",
          id: "TD-PrimaryTools-Eraser",
        },
        je.createElement(cd, null)
      ),
      je.createElement(kd, { activeTool: n, isToolLocked: o }),
      je.createElement(
        on,
        {
          kbd: "8",
          label: t.formatMessage({ id: "arrow" }),
          onClick: c,
          isLocked: o,
          variant: "primary",
          isActive: n === "arrow",
          id: "TD-PrimaryTools-ArrowTopRight",
        },
        je.createElement(_t.ArrowTopRightIcon, null)
      ),
      je.createElement(
        on,
        {
          kbd: "9",
          label: t.formatMessage({ id: "text" }),
          onClick: u,
          isLocked: o,
          variant: "primary",
          isActive: n === "text",
          id: "TD-PrimaryTools-Text",
        },
        je.createElement(_t.TextIcon, null)
      ),
      je.createElement(
        on,
        {
          kbd: "0",
          label: t.formatMessage({ id: "sticky" }),
          onClick: p,
          isActive: n === "sticky",
          variant: "primary",
          id: "TD-PrimaryTools-Pencil2",
        },
        je.createElement(_t.Pencil2Icon, null)
      ),
      je.createElement(
        on,
        {
          label: t.formatMessage({ id: "image" }),
          onClick: m,
          id: "TD-PrimaryTools-Image",
          variant: "primary",
        },
        je.createElement(_t.ImageIcon, null)
      )
    );
  }),
  Ele = H(So, {
    variants: {
      bp: {
        mobile: { padding: "$0", borderRadius: "10px" },
        small: { padding: "$2" },
      },
    },
  });
var Hi = V(require("react"));
var Rle = (r) => r.appState.status,
  Ale = (r) => r.appState.activeTool;
function Cd() {
  let r = ge(),
    e = r.useStore(Rle),
    t = r.useStore(Ale);
  return Hi.createElement(
    Lle,
    { bp: rt, id: "TD-StatusBar" },
    Hi.createElement(Hle, null, t, " | ", e)
  );
}
var Lle = H("div", {
    height: 40,
    userSelect: "none",
    WebkitUserSelect: "none",
    borderTop: "1px solid $panelContrast",
    gridArea: "status",
    display: "flex",
    color: "$text",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "$panel",
    gap: 8,
    fontFamily: "$ui",
    fontSize: "$0",
    padding: "0 16px",
    variants: { bp: { small: { fontSize: "$1" } } },
  }),
  Hle = H("div", { whiteSpace: "nowrap", overflow: "hidden" });
var zle = (r) => r.settings.isDebugMode,
  Ole = (r) => r.settings.dockPosition,
  Dd = vt.memo(function ({ onBlur: e }) {
    let t = ge(),
      n = t.useStore(Ole),
      o = t.useStore(zle);
    return vt.createElement(
      vt.Fragment,
      null,
      vt.createElement(
        Fle,
        { side: n, onBlur: e, bp: rt, debug: o },
        vt.createElement(
          jle,
          { id: "TD-Tools" },
          vt.createElement(td, null),
          vt.createElement(
            Vle,
            {
              orientation:
                n === "bottom" || n === "top" ? "horizontal" : "vertical",
            },
            vt.createElement(Ql, null),
            vt.createElement(Id, null),
            vt.createElement(md, null)
          )
        )
      ),
      vt.createElement(yd, null),
      o && vt.createElement(Gle, null, vt.createElement(Cd, null))
    );
  }),
  Fle = H("div", {
    position: "absolute",
    width: "100%",
    minWidth: 0,
    maxWidth: "100%",
    height: 64,
    gap: "$4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 200,
    overflow: "hidden",
    pointerEvents: "none",
    "& > div > *": { pointerEvents: "all" },
    variants: {
      debug: { true: {}, false: {} },
      bp: { mobile: {}, small: {}, medium: {}, large: {} },
      side: {
        top: { width: "100%", height: 64, left: 0, right: 0, top: 45 },
        right: { width: 64, height: "100%", top: 0, right: 0 },
        bottom: { width: "100%", left: 0, right: 0, bottom: 4 },
        left: { width: 64, height: "100%", left: 0 },
      },
    },
    compoundVariants: [
      { side: "top", bp: "large", css: { top: 0 } },
      { side: "bottom", debug: !0, css: { bottom: 44 } },
    ],
  }),
  jle = H("div", {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "$4",
  }),
  Gle = H("div", {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",
    height: "40px",
    width: "100%",
    maxWidth: "100%",
  }),
  Vle = H("div", {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    gap: "$3",
    variants: {
      orientation: {
        horizontal: { flexDirection: "row" },
        vertical: { flexDirection: "column" },
      },
    },
  });
var ut = V(require("react")),
  Wc = require("react-intl");
var Bd = V(require("@radix-ui/react-dropdown-menu")),
  Ed = require("@radix-ui/react-icons"),
  Rd = require("browser-fs-access"),
  te = V(require("react")),
  st = require("react-intl");
var Ee = V(require("react")),
  an = require("react-intl");
var $le = (r) => r.settings,
  Nle = ["bottom", "left", "right", "top"];
function Md() {
  let r = ge(),
    e = (0, an.useIntl)(),
    t = r.useStore($le),
    n = Ee.useCallback(() => {
      r.setSetting("isDebugMode", (p) => !p);
    }, [r]),
    o = Ee.useCallback(() => {
      r.setSetting("isDarkMode", (p) => !p);
    }, [r]),
    s = Ee.useCallback(() => {
      r.setSetting("isFocusMode", (p) => !p);
    }, [r]),
    a = Ee.useCallback(() => {
      r.setSetting("showGrid", (p) => !p);
    }, [r]),
    d = Ee.useCallback(() => {
      r.setSetting("keepStyleMenuOpen", (p) => !p);
    }, [r]),
    i = Ee.useCallback(() => {
      r.setSetting("isCadSelectMode", (p) => !p);
    }, [r]),
    c = Ee.useCallback(
      (p) => {
        r.setSetting("dockPosition", p);
      },
      [r]
    ),
    u = Ee.useCallback(
      (p) => {
        r.setSetting("exportBackground", p);
      },
      [r]
    );
  return Ee.createElement(
    yn,
    {
      label: e.formatMessage({ id: "menu.preferences" }),
      id: "TD-MenuItem-Preferences",
    },
    Ee.createElement(
      Rt,
      {
        checked: t.isDarkMode,
        onCheckedChange: o,
        kbd: "#\u21E7D",
        id: "TD-MenuItem-Preferences-Dark_Mode",
        ariaLabel: e.formatMessage({ id: "preferences.dark.mode" }),
      },
      Ee.createElement(an.FormattedMessage, { id: "preferences.dark.mode" })
    ),
    Ee.createElement(
      Rt,
      {
        checked: t.isFocusMode,
        onCheckedChange: s,
        kbd: "#.",
        id: "TD-MenuItem-Preferences-Focus_Mode",
        ariaLabel: e.formatMessage({ id: "preferences.focus.mode" }),
      },
      Ee.createElement(an.FormattedMessage, { id: "preferences.focus.mode" })
    ),
    Ee.createElement(
      Rt,
      {
        checked: t.isDebugMode,
        onCheckedChange: n,
        id: "TD-MenuItem-Preferences-Debug_Mode",
        ariaLabel: e.formatMessage({ id: "preferences.debug.mode" }),
      },
      Ee.createElement(an.FormattedMessage, { id: "preferences.debug.mode" })
    ),
    Ee.createElement(Be, null),
    Ee.createElement(
      Rt,
      {
        checked: t.showGrid,
        onCheckedChange: a,
        kbd: "#\u21E7G",
        id: "TD-MenuItem-Preferences-Grid",
        ariaLabel: e.formatMessage({ id: "preferences.show.grid" }),
      },
      Ee.createElement(an.FormattedMessage, { id: "preferences.show.grid" })
    ),
    Ee.createElement(
      Rt,
      {
        checked: t.isCadSelectMode,
        onCheckedChange: i,
        id: "TD-MenuItem-Preferences-Cad_Selection",
        ariaLabel: e.formatMessage({ id: "preferences.use.cad.selection" }),
      },
      Ee.createElement(an.FormattedMessage, {
        id: "preferences.use.cad.selection",
      })
    ),
    Ee.createElement(
      Rt,
      {
        checked: t.keepStyleMenuOpen,
        onCheckedChange: d,
        id: "TD-MenuItem-Preferences-Style_menu",
        ariaLabel: e.formatMessage({ id: "preferences.keep.stylemenu.open" }),
      },
      Ee.createElement(an.FormattedMessage, {
        id: "preferences.keep.stylemenu.open",
      })
    ),
    Ee.createElement(
      yn,
      { label: e.formatMessage({ id: "dock.position" }) },
      Nle.map((p) =>
        Ee.createElement(
          Rt,
          {
            key: p,
            checked: t.dockPosition === p,
            onCheckedChange: () => c(p),
            id: `TD-MenuItem-DockPosition-${p}`,
            ariaLabel: `DockPosition-${p}`,
          },
          Ee.createElement(
            Pd,
            null,
            Ee.createElement(an.FormattedMessage, { id: p })
          )
        )
      )
    ),
    Ee.createElement(
      yn,
      { label: e.formatMessage({ id: "export.background" }) },
      Object.values(Lo).map((p) =>
        Ee.createElement(
          Rt,
          {
            key: p,
            checked: t.exportBackground === p,
            onCheckedChange: () => u(p),
            id: `TD-MenuItem-ExportBackground-${p}`,
            ariaLabel: `ExportBackground-${p}`,
          },
          Ee.createElement(
            Pd,
            null,
            Ee.createElement(an.FormattedMessage, { id: p })
          )
        )
      )
    )
  );
}
var Pd = H("span", { textTransform: "capitalize" });
var Wle = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.length,
  Ule = (r) => r.appState.disableAssets,
  Ad = te.memo(function ({ readOnly: e }) {
    let t = ge(),
      n = (0, st.useIntl)(),
      [o, s] = te.useState(!1),
      a = t.useStore(Wle),
      d = t.useStore(Ule),
      [i, c] = te.useState(0);
    te.useEffect(() => c(1), []);
    let {
        onNewProject: u,
        onOpenProject: p,
        onSaveProject: m,
        onSaveProjectAs: h,
      } = ts(),
      g = te.useCallback(() => {
        Rd.supported ? t.saveProjectAs() : s(!0);
      }, [t]),
      f = te.useCallback(() => {
        t.delete();
      }, [t]),
      T = te.useCallback(() => {
        t.copyImage("svg", { scale: 1, quality: 1, transparentBackground: !1 });
      }, [t]),
      x = te.useCallback(() => {
        t.copyImage("png", { scale: 2, quality: 1, transparentBackground: !0 });
      }, [t]),
      b = te.useCallback(
        () =>
          ue(this, null, function* () {
            t.exportImage("png", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      y = te.useCallback(
        () =>
          ue(this, null, function* () {
            t.exportImage("jpeg", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      R = te.useCallback(
        () =>
          ue(this, null, function* () {
            t.exportImage("webp", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      K = te.useCallback(
        () =>
          ue(this, null, function* () {
            t.exportImage("svg", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      L = te.useCallback(
        () =>
          ue(this, null, function* () {
            t.copyJson();
          }),
        [t]
      ),
      v = te.useCallback(
        () =>
          ue(this, null, function* () {
            t.exportJson();
          }),
        [t]
      ),
      I = te.useCallback(() => {
        t.cut();
      }, [t]),
      J = te.useCallback(() => {
        t.copy();
      }, [t]),
      ce = te.useCallback(() => {
        t.paste();
      }, [t]),
      de = te.useCallback(() => {
        t.selectAll();
      }, [t]),
      He = te.useCallback(() => {
        t.selectNone();
      }, [t]),
      Pe = te.useCallback(() => {
        t.openAsset();
      }, [t]),
      Me = te.useCallback(() => {
        t.zoomTo(1);
      }, [t]),
      Ue =
        t.callbacks.onNewProject ||
        t.callbacks.onOpenProject ||
        t.callbacks.onSaveProject ||
        t.callbacks.onSaveProjectAs ||
        t.callbacks.onExport,
      Ke = a > 0;
    return te.createElement(
      te.Fragment,
      null,
      te.createElement(
        Bd.Root,
        { dir: "ltr" },
        te.createElement(
          gs,
          { id: "TD-MenuIcon" },
          te.createElement(Ed.HamburgerMenuIcon, null)
        ),
        te.createElement(
          At,
          {
            variant: "menu",
            id: "TD-Menu",
            side: "bottom",
            align: "start",
            sideOffset: 4,
            alignOffset: 4,
          },
          Ue &&
            te.createElement(
              yn,
              {
                label: `${n.formatMessage({ id: "menu.file" })}...`,
                id: "TD-MenuItem-File",
              },
              t.callbacks.onNewProject &&
                te.createElement(
                  ke,
                  { onClick: u, kbd: "#N", id: "TD-MenuItem-File-New_Project" },
                  te.createElement(st.FormattedMessage, { id: "new.project" })
                ),
              t.callbacks.onOpenProject &&
                te.createElement(
                  ke,
                  { onClick: p, kbd: "#O", id: "TD-MenuItem-File-Open" },
                  te.createElement(st.FormattedMessage, { id: "open" }),
                  "..."
                ),
              t.callbacks.onSaveProject &&
                te.createElement(
                  ke,
                  { onClick: m, kbd: "#S", id: "TD-MenuItem-File-Save" },
                  te.createElement(st.FormattedMessage, { id: "save" })
                ),
              t.callbacks.onSaveProjectAs &&
                te.createElement(
                  ke,
                  {
                    onClick: g,
                    kbd: "#\u21E7S",
                    id: "TD-MenuItem-File-Save_As",
                  },
                  te.createElement(st.FormattedMessage, { id: "save.as" }),
                  "..."
                ),
              te.createElement(
                yn,
                {
                  label: `${n.formatMessage({ id: "export.as" })}...`,
                  size: "small",
                  id: "TD-MenuItem-Export",
                },
                te.createElement(
                  ke,
                  { onClick: K, id: "TD-MenuItem-Export-SVG" },
                  "SVG"
                ),
                te.createElement(
                  ke,
                  { onClick: b, id: "TD-MenuItem-Export-PNG" },
                  "PNG"
                ),
                te.createElement(
                  ke,
                  { onClick: y, id: "TD-MenuItem-Export-JPG" },
                  "JPG"
                ),
                te.createElement(
                  ke,
                  { onClick: R, id: "TD-MenuItem-Export-WEBP" },
                  "WEBP"
                ),
                te.createElement(
                  ke,
                  { onClick: v, id: "TD-MenuItem-Export-JSON" },
                  "JSON"
                )
              ),
              !d &&
                te.createElement(
                  te.Fragment,
                  null,
                  te.createElement(Be, null),
                  te.createElement(
                    ke,
                    {
                      onClick: Pe,
                      kbd: "#U",
                      id: "TD-MenuItem-File-Upload_Media",
                    },
                    te.createElement(st.FormattedMessage, {
                      id: "upload.media",
                    })
                  )
                )
            ),
          te.createElement(
            yn,
            {
              label: `${n.formatMessage({ id: "menu.edit" })}...`,
              id: "TD-MenuItem-Edit",
            },
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: t.undo,
                disabled: e,
                kbd: "#Z",
                id: "TD-MenuItem-Edit-Undo",
              },
              te.createElement(st.FormattedMessage, { id: "undo" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: t.redo,
                disabled: e,
                kbd: "#\u21E7Z",
                id: "TD-MenuItem-Edit-Redo",
              },
              te.createElement(st.FormattedMessage, { id: "redo" })
            ),
            te.createElement(Be, null),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                disabled: !Ke || e,
                onClick: I,
                kbd: "#X",
                id: "TD-MenuItem-Edit-Cut",
              },
              te.createElement(st.FormattedMessage, { id: "cut" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                disabled: !Ke,
                onClick: J,
                kbd: "#C",
                id: "TD-MenuItem-Edit-Copy",
              },
              te.createElement(st.FormattedMessage, { id: "copy" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: ce,
                kbd: "#V",
                id: "TD-MenuItem-Edit-Paste",
              },
              te.createElement(st.FormattedMessage, { id: "paste" })
            ),
            te.createElement(Be, null),
            te.createElement(
              yn,
              {
                label: `${n.formatMessage({ id: "copy.as" })}...`,
                size: "small",
                id: "TD-MenuItem-Copy-As",
              },
              te.createElement(
                ke,
                { onClick: T, id: "TD-MenuItem-Copy-as-SVG" },
                "SVG"
              ),
              te.createElement(
                ke,
                { onClick: x, id: "TD-MenuItem-Copy-As-PNG" },
                "PNG"
              ),
              te.createElement(
                ke,
                { onClick: L, id: "TD-MenuItem-Copy_as_JSON" },
                "JSON"
              )
            ),
            te.createElement(Be, null),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: de,
                kbd: "#A",
                id: "TD-MenuItem-Select_All",
              },
              te.createElement(st.FormattedMessage, { id: "select.all" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                disabled: !Ke,
                onClick: He,
                id: "TD-MenuItem-Select_None",
              },
              te.createElement(st.FormattedMessage, { id: "select.none" })
            ),
            te.createElement(Be, null),
            te.createElement(
              ke,
              {
                onSelect: f,
                disabled: !Ke,
                kbd: "\u232B",
                id: "TD-MenuItem-Delete",
              },
              te.createElement(st.FormattedMessage, { id: "delete" })
            )
          ),
          te.createElement(
            yn,
            {
              label: n.formatMessage({ id: "menu.view" }),
              id: "TD-MenuItem-Edit",
            },
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: t.zoomIn,
                kbd: "#+",
                id: "TD-MenuItem-View-ZoomIn",
              },
              te.createElement(st.FormattedMessage, { id: "zoom.in" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: t.zoomOut,
                kbd: "#-",
                id: "TD-MenuItem-View-ZoomOut",
              },
              te.createElement(st.FormattedMessage, { id: "zoom.out" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: Me,
                kbd: "\u21E7+0",
                id: "TD-MenuItem-View-ZoomTo100",
              },
              te.createElement(st.FormattedMessage, { id: "zoom.to" }),
              " 100%"
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: t.zoomToFit,
                kbd: "\u21E7+1",
                id: "TD-MenuItem-View-ZoomToFit",
              },
              te.createElement(st.FormattedMessage, { id: "zoom.to.fit" })
            ),
            te.createElement(
              ke,
              {
                onSelect: Oe,
                onClick: t.zoomToSelection,
                kbd: "\u21E7+2",
                id: "TD-MenuItem-View-ZoomToSelection",
              },
              te.createElement(st.FormattedMessage, { id: "zoom.to.selection" })
            )
          ),
          te.createElement(Be, null),
          te.createElement(Md, null)
        )
      ),
      te.createElement(Kl, { isOpen: o, onClose: () => s(!1) })
    );
  });
var zc = V(require("@radix-ui/react-dropdown-menu")),
  er = require("@radix-ui/react-icons"),
  Ws = require("@tldraw/core"),
  Le = V(require("react")),
  Mr = require("react-intl");
var zi = V(require("react"));
function Ld() {
  return zi.createElement(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
    },
    zi.createElement("path", {
      d: "M1.36482 4.71089C1.36482 3.21371 2.57853 2 4.07572 2C5.5729 2 6.78661 3.21371 6.78661 4.71089C6.78661 5.76842 6.18106 6.68452 5.29779 7.13136C5.80465 7.24611 6.26407 7.44186 6.66028 7.73182C7.18674 8.11711 7.57215 8.64722 7.81073 9.30983C7.81452 9.30606 7.81832 9.3023 7.82212 9.29855C8.30448 8.82317 8.91325 8.52463 9.60905 8.37275C8.68812 7.922 8.05394 6.97569 8.05394 5.88126C8.05394 4.35017 9.29513 3.10898 10.8262 3.10898C12.3573 3.10898 13.5985 4.35017 13.5985 5.88126C13.5985 6.97561 12.9644 7.92186 12.0436 8.37265C12.7396 8.52449 13.3486 8.82306 13.831 9.29854C14.5795 10.0361 14.9481 11.1249 14.9481 12.5176C14.9481 12.7799 14.7354 12.9926 14.473 12.9926C14.2107 12.9926 13.9981 12.7799 13.9981 12.5175C13.9981 11.2848 13.6738 10.4774 13.1642 9.97518C12.6532 9.4716 11.8802 9.20024 10.8266 9.20024C9.77294 9.20024 8.99993 9.4716 8.48896 9.97518C7.97939 10.4774 7.65513 11.2848 7.65513 12.5176C7.65513 12.7799 7.44247 12.9926 7.18013 12.9926C6.9178 12.9926 6.70513 12.7799 6.70513 12.5176C6.70513 11.6734 6.84053 10.941 7.11384 10.3307C7.0922 10.2895 7.0763 10.2444 7.06737 10.1962C6.91739 9.38749 6.57392 8.84586 6.09923 8.49845C5.61626 8.14499 4.94481 7.95427 4.07574 7.95427C3.05232 7.95427 2.30368 8.21784 1.80952 8.70485C1.31675 9.19047 1.00176 9.97257 1.00176 11.1702C1.00176 11.4326 0.789093 11.6452 0.526758 11.6452C0.264423 11.6452 0.0517578 11.4326 0.0517578 11.1702C0.0517578 9.81263 0.411052 8.74925 1.14268 8.02821C1.60624 7.57137 2.18892 7.28191 2.85378 7.13142C1.97043 6.68461 1.36482 5.76848 1.36482 4.71089ZM4.07572 2.95C3.1032 2.95 2.31482 3.73838 2.31482 4.71089C2.31482 5.68341 3.1032 6.47178 4.07572 6.47178C5.04823 6.47178 5.83661 5.68341 5.83661 4.71089C5.83661 3.73838 5.04823 2.95 4.07572 2.95ZM10.8262 4.05898C9.8198 4.05898 9.00394 4.87484 9.00394 5.88126C9.00394 6.88768 9.8198 7.70355 10.8262 7.70355C11.8326 7.70355 12.6485 6.88768 12.6485 5.88126C12.6485 4.87484 11.8326 4.05898 10.8262 4.05898Z",
    })
  );
}
var zt = require("@tldraw/core"),
  lo = require("@tldraw/intersect"),
  Se = require("@tldraw/vec");
var Yt = "-0.03em";
var No = [0.5, 0.5],
  Rfe = Math.PI * 2,
  Ts = ".tldr",
  bo = {
    linear: (r) => r,
    easeInQuad: (r) => r * r,
    easeOutQuad: (r) => r * (2 - r),
    easeInOutQuad: (r) => (r < 0.5 ? 2 * r * r : -1 + (4 - 2 * r) * r),
    easeInCubic: (r) => r * r * r,
    easeOutCubic: (r) => --r * r * r + 1,
    easeInOutCubic: (r) =>
      r < 0.5 ? 4 * r * r * r : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1,
    easeInQuart: (r) => r * r * r * r,
    easeOutQuart: (r) => 1 - --r * r * r * r,
    easeInOutQuart: (r) =>
      r < 0.5 ? 8 * r * r * r * r : 1 - 8 * --r * r * r * r,
    easeInQuint: (r) => r * r * r * r * r,
    easeOutQuint: (r) => 1 + --r * r * r * r * r,
    easeInOutQuint: (r) =>
      r < 0.5 ? 16 * r * r * r * r * r : 1 + 16 * --r * r * r * r * r,
    easeInSine: (r) => 1 - Math.cos((r * Math.PI) / 2),
    easeOutSine: (r) => Math.sin((r * Math.PI) / 2),
    easeInOutSine: (r) => -(Math.cos(Math.PI * r) - 1) / 2,
    easeInExpo: (r) => (r <= 0 ? 0 : Math.pow(2, 10 * r - 10)),
    easeOutExpo: (r) => (r >= 1 ? 1 : 1 - Math.pow(2, -10 * r)),
    easeInOutExpo: (r) =>
      r <= 0
        ? 0
        : r >= 1
        ? 1
        : r < 0.5
        ? Math.pow(2, 20 * r - 10) / 2
        : (2 - Math.pow(2, -20 * r + 10)) / 2,
  };
var Oi = [
    "#EC5E41",
    "#F2555A",
    "#F04F88",
    "#E34BA9",
    "#BD54C6",
    "#9D5BD2",
    "#7B66DC",
    "#02B1CC",
    "#11B3A3",
    "#39B178",
    "#55B467",
    "#FF802B",
  ],
  Kle =
    typeof Window == "undefined"
      ? !1
      : /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  Afe = typeof Window == "undefined" ? !1 : /linux/i.test(navigator.userAgent),
  ys = [".png", ".svg", ".jpg", ".jpeg", ".gif"],
  xs = Kle ? [] : [".mp4", ".webm"];
function wt(r) {
  if (r === null) return r;
  if (r instanceof Date) return new Date(r.getTime());
  if (typeof r == "object")
    if (typeof r[Symbol.iterator] == "function") {
      let e = [];
      if (r.length > 0) for (let t of r) e.push(wt(t));
      return e;
    } else {
      let e = Object.keys(r),
        t = {};
      if (e.length > 0) for (let n of e) t[n] = wt(r[n]);
      return t;
    }
  return r;
}
var Ht = require("@tldraw/core"),
  Xo = require("@tldraw/intersect"),
  fe = require("@tldraw/vec"),
  qe = V(require("react"));
var Xt = require("@tldraw/core"),
  Yo = require("@tldraw/intersect"),
  kn = require("@tldraw/vec"),
  Kd = V(require("react"));
var Fi = require("@tldraw/core");
function Zt(r, e) {
  let t = Fi.Utils.getFromCache(e, r, () => {
    let [n, o] = r.size;
    return { minX: 0, maxX: n, minY: 0, maxY: o, width: n, height: o };
  });
  return Fi.Utils.translateBounds(t, r.point);
}
var _le = {
  ["start"]: "left",
  ["middle"]: "center",
  ["end"]: "right",
  ["justify"]: "justify",
};
function Hd(r = "start") {
  return _le[r];
}
var Jn;
function Yle() {
  var e;
  (e = document.getElementById("__textLabelMeasure")) == null || e.remove();
  let r = document.createElement("pre");
  return (
    (r.id = "__textLabelMeasure"),
    Object.assign(r.style, {
      whiteSpace: "pre",
      width: "auto",
      border: "1px solid transparent",
      padding: "4px",
      margin: "0px",
      letterSpacing: Yt,
      opacity: "0",
      position: "absolute",
      top: "-500px",
      left: "0px",
      zIndex: "9999",
      pointerEvents: "none",
      userSelect: "none",
      "-webkit-user-select": "none",
      alignmentBaseline: "mathematical",
      dominantBaseline: "mathematical",
    }),
    (r.tabIndex = -1),
    document.body.appendChild(r),
    r
  );
}
typeof window != "undefined" && (Jn = Yle());
var Gi = "",
  zd = "",
  ji = [0, 0];
function Od() {
  Gi = "";
}
function Qn(r, e) {
  if (!r) return [16, 32];
  if (!Jn) return [10, 10];
  if ((Jn.parent || document.body.appendChild(Jn), r === Gi && e === zd))
    return ji;
  (Gi = r), (zd = e), (Jn.textContent = r), (Jn.style.font = e);
  let t = Jn.offsetWidth || 1,
    n = Jn.offsetHeight || 1;
  return (ji = [t, n]), ji;
}
var Zle = new RegExp(
  `${[32, 160, 4961, 65792, 65793, 4153, 4241]
    .map((r) => String.fromCodePoint(r))
    .join("|")}`
);
function eo(r, e, t, n, o, s = !1) {
  let a = "normal",
    i = Yt,
    c = Xle({
      text: r,
      wrap: s,
      width: o,
      fontSize: e,
      fontWeight: a,
      fontFamily: t,
      fontStyle: "normal",
      textAlign: "left",
      letterSpacing: Yt,
      lineHeight: 1,
    }),
    u = document.createElementNS("http://www.w3.org/2000/svg", "text");
  u.setAttribute("font-size", e + "px"),
    u.setAttribute("font-family", t),
    u.setAttribute("font-weight", a),
    u.setAttribute("line-height", 1 * e + "px"),
    u.setAttribute("letter-spacing", i),
    u.setAttribute("text-align", n != null ? n : "left"),
    u.setAttribute("dominant-baseline", "mathematical"),
    u.setAttribute("alignment-baseline", "mathematical");
  let p = c.map((m, h) => {
    let g = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    return (
      (g.textContent =
        m +
        `
`),
      g.setAttribute("y", 1 * e * (h + 0.5) + "px"),
      u.appendChild(g),
      g
    );
  });
  switch (n) {
    case "middle": {
      u.setAttribute("text-align", "center"),
        u.setAttribute("text-anchor", "middle"),
        p.forEach((m) => m.setAttribute("x", o / 2 + ""));
      break;
    }
    case "end": {
      u.setAttribute("text-align", "right"),
        u.setAttribute("text-anchor", "end"),
        p.forEach((m) => m.setAttribute("x", -4 + o + ""));
      break;
    }
    default:
      u.setAttribute("text-align", "left"),
        u.setAttribute("text-anchor", "start"),
        p.forEach((m) => m.setAttribute("x", 4 + ""));
  }
  return u;
}
function Xle(r) {
  let e = document.createElement("div");
  e.style.setProperty("position", "absolute"),
    e.style.setProperty("top", "-9999px"),
    e.style.setProperty("left", "-9999px"),
    e.style.setProperty("width", r.width + "px"),
    e.style.setProperty("height", "min-content"),
    e.style.setProperty("font-size", r.fontSize + "px"),
    e.style.setProperty("font-family", r.fontFamily),
    e.style.setProperty("font-weight", r.fontWeight),
    e.style.setProperty("line-height", r.lineHeight * r.fontSize + "px"),
    e.style.setProperty("letter-spacing", r.letterSpacing),
    e.style.setProperty("text-align", r.textAlign),
    document.body.appendChild(e);
  let t = r.text
    .split(Zle)
    .flatMap((a) =>
      a.replace(
        `
`,
        ` 
`
      )
    )
    .join(" ")
    .split(" ");
  e.innerText = t[0];
  let n = e.offsetHeight,
    o = [t[0]],
    s = [o];
  for (let a = 1; a < t.length; a++) {
    let d = t[a];
    e.innerText += " " + d;
    let i = e.offsetHeight;
    i > n && ((n = i), (o = []), s.push(o)), o.push(d);
  }
  return e.remove(), s.map((a) => a.join(" "));
}
var wr = V(require("react"));
function Fd({ id: r, bounds: e, labelSize: t, offset: n, scale: o = 1 }) {
  return wr.createElement(
    "defs",
    null,
    wr.createElement(
      "mask",
      { id: r + "_clip" },
      wr.createElement("rect", {
        x: -100,
        y: -100,
        width: e.width + 200,
        height: e.height + 200,
        fill: "white",
      }),
      wr.createElement("rect", {
        x: e.width / 2 - (t[0] / 2) * o + ((n == null ? void 0 : n[0]) || 0),
        y: e.height / 2 - (t[1] / 2) * o + ((n == null ? void 0 : n[1]) || 0),
        width: t[0] * o,
        height: t[1] * o,
        rx: 4 * o,
        ry: 4 * o,
        fill: "black",
        opacity: Math.max(o, 0.8),
      })
    )
  );
}
var Gd = require("@tldraw/intersect"),
  Wt = V(require("@tldraw/vec")),
  ws = Math.PI * 2,
  Nt = class {
    static inwardEdgeNormal(e) {
      let t = Wt.default.sub(e[1], e[0]),
        n = Wt.default.len2(t);
      return [-t[0] / n, t[1] / n];
    }
    static outwardEdgeNormal(e) {
      return Wt.default.neg(Nt.inwardEdgeNormal(e));
    }
    static isReflexVertex(e, t) {
      let n = e.length,
        o = e[(t + n - 1) % n],
        s = e[t],
        a = e[(t + 1) % n];
      return Nt.leftSide(o, a, s) < 0;
    }
    static getEdges(e) {
      return e.map((t, n) => [t, e[(n + 1) % e.length]]);
    }
    static edgesIntersection([e, t], [n, o]) {
      let s = (o[1] - n[1]) * (t[0] - e[0]) - (o[0] - n[0]) * (t[1] - e[1]);
      if (s == 0) return null;
      let a =
          ((o[0] - n[0]) * (e[1] - n[1]) - (o[1] - n[1]) * (e[0] - n[0])) / s,
        d = ((t[0] - e[0]) * (e[1] - n[1]) - (t[1] - e[1]) * (e[0] - n[0])) / s;
      return a < 0 || d < 0 || a > 1 || d > 1
        ? null
        : [e[0] + a * (t[0] - e[0]), e[1] + a * (t[1] - e[1])];
    }
    static appendArc(e, t, n, o, s, a = !1) {
      let d = [...e],
        i = Math.atan2(o[1] - t[1], o[0] - t[0]),
        c = Math.atan2(s[1] - t[1], s[0] - t[0]);
      i < 0 && (i += ws), c < 0 && (c += ws);
      let u = 5,
        p = i > c ? i - c : i + ws - c,
        m = (a ? -p : ws - p) / u;
      d.push(o);
      for (let h = 1; h < u; ++h) {
        let g = i + m * h;
        d.push([t[0] + Math.cos(g) * n, t[1] + Math.sin(g) * n]);
      }
      return d.push(s), d;
    }
    static createOffsetEdge(e, t) {
      return e.map((n) => Wt.default.add(n, t));
    }
    static getOffsetPolygon(e, t = 0) {
      let n = Nt.getEdges(e),
        o = n.map((a) =>
          Nt.createOffsetEdge(a, Wt.default.mul(Nt.outwardEdgeNormal(a), t))
        ),
        s = [];
      for (let a = 0; a < o.length; a++) {
        let d = o[a],
          i = o[(a + o.length - 1) % o.length],
          c = Nt.edgesIntersection(i, d);
        c ? s.push(c) : Nt.appendArc(s, n[a][0], t, i[1], d[0], !1);
      }
      return s;
    }
    static createPaddingPolygon(e, t = 0) {
      let n = e.map((s) => Nt.createOffsetEdge(s, Nt.inwardEdgeNormal(s))),
        o = [];
      for (let s = 0; s < n.length; s++) {
        let a = n[s],
          d = n[(s + n.length - 1) % n.length],
          i = Nt.edgesIntersection(d, a);
        i ? o.push(i) : Nt.appendArc(o, e[s][0], t, d[1], a[0], !0);
      }
      return o;
    }
  },
  jd = Nt;
l(jd, "leftSide", Wt.default.isLeft);
function Vd(r, e) {
  if (r.length < 3) throw Error("Polygon must have at least 3 points");
  let t = r.length;
  return r
    .map((n, o) => [n, r[(o + 1) % t]])
    .map(([n, o]) => {
      let s = Wt.default.mul(
        Wt.default.per(Wt.default.uni(Wt.default.sub(o, n))),
        e
      );
      return [Wt.default.add(n, s), Wt.default.add(o, s)];
    })
    .map((n, o, s) => {
      let a = (0, Gd.intersectLineLine)(n, s[(o + 1) % s.length]);
      if (a === void 0) throw Error("Expected an intersection");
      return a;
    });
}
var To = require("@tldraw/core");
var $d = "#fafafa",
  Vi = "#343d45",
  Wo = {
    ["white"]: "#f0f1f3",
    ["lightGray"]: "#c6cbd1",
    ["gray"]: "#788492",
    ["black"]: "#1d1d1d",
    ["green"]: "#36b24d",
    ["cyan"]: "#0e98ad",
    ["blue"]: "#1c7ed6",
    ["indigo"]: "#4263eb",
    ["violet"]: "#7746f1",
    ["red"]: "#ff2133",
    ["orange"]: "#ff9433",
    ["yellow"]: "#ffc936",
  },
  qle = {
    light: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(Wo).map(([r, e]) => [
            r,
            To.Utils.lerpColor(e, $d, 0.45),
          ])
        )
      ),
      { ["white"]: "#ffffff", ["black"]: "#3d3d3d" }
    ),
    dark: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(Wo).map(([r, e]) => [
            r,
            To.Utils.lerpColor(To.Utils.lerpColor(e, "#999999", 0.3), Vi, 0.4),
          ])
        )
      ),
      { ["white"]: "#1d1d1d", ["black"]: "#bbbbbb" }
    ),
  },
  Uo = {
    light: w(S({}, Wo), { ["white"]: "#1d1d1d" }),
    dark: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(Wo).map(([r, e]) => [
            r,
            To.Utils.lerpColor(e, Vi, 0.1),
          ])
        )
      ),
      { ["white"]: "#cecece", ["black"]: "#cecece" }
    ),
  },
  ks = {
    light: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(Wo).map(([r, e]) => [
            r,
            To.Utils.lerpColor(e, $d, 0.82),
          ])
        )
      ),
      { ["white"]: "#fefefe" }
    ),
    dark: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(Wo).map(([r, e]) => [
            r,
            To.Utils.lerpColor(e, Vi, 0.82),
          ])
        )
      ),
      { ["white"]: "rgb(30,33,37)", ["black"]: "#1e1e1f" }
    ),
  },
  Jle = { ["small"]: 2, ["medium"]: 3.5, ["large"]: 5 },
  Qle = { ["small"]: 28, ["medium"]: 48, ["large"]: 96, auto: "auto" },
  ede = {
    ["script"]: '"Caveat Brush"',
    ["sans"]: '"Source Sans Pro"',
    ["serif"]: '"Crimson Pro"',
    ["mono"]: '"Source Code Pro"',
  },
  tde = { ["script"]: 1, ["sans"]: 1, ["serif"]: 1, ["mono"]: 1 },
  nde = { ["small"]: 24, ["medium"]: 36, ["large"]: 48, auto: "auto" };
function ode(r) {
  return Jle[r];
}
function yo(r, e = "script") {
  return Qle[r] * tde[e];
}
function wn(r = "script") {
  return ede[r];
}
function $i(r) {
  return nde[r];
}
function Mt(r) {
  let e = yo(r.size, r.font),
    t = wn(r.font),
    { scale: n = 1 } = r;
  return `${e * n}px/1 ${t}`;
}
function Nd(r) {
  let e = $i(r.size),
    t = wn(r.font),
    { scale: n = 1 } = r;
  return `${e * n}px/1 ${t}`;
}
function Ni(r, e = !1) {
  let { color: t } = r,
    n = e ? "dark" : "light",
    o = t === "white" || t === "black" ? "yellow" : t;
  return {
    fill: qle[n][o],
    stroke: Uo[n][o],
    color: e ? "#1d1d1d" : "#0d0d0d",
  };
}
function Te(r, e) {
  let { color: t, size: n, isFilled: o } = r,
    s = ode(n),
    a = e ? "dark" : "light";
  return { stroke: Uo[a][t], fill: o ? ks[a][t] : "none", strokeWidth: s };
}
var gt = {
    color: "black",
    size: "small",
    isFilled: !1,
    dash: "draw",
    scale: 1,
  },
  Ko = w(S({}, gt), { font: "script", textAlign: "middle" });
var Wd = "  ",
  ct = class {
    static insertTextFirefox(e, t) {
      e.setRangeText(t, e.selectionStart || 0, e.selectionEnd || 0, "end"),
        e.dispatchEvent(
          new InputEvent("input", {
            data: t,
            inputType: "insertText",
            isComposing: !1,
          })
        );
    }
    static insert(e, t) {
      let n = e.ownerDocument,
        o = n.activeElement;
      o !== e && e.focus(),
        n.execCommand("insertText", !1, t) || ct.insertTextFirefox(e, t),
        o === n.body
          ? e.blur()
          : o instanceof HTMLElement && o !== e && o.focus();
    }
    static set(e, t) {
      e.select(), ct.insert(e, t);
    }
    static getSelection(e) {
      let { selectionStart: t, selectionEnd: n } = e;
      return e.value.slice(t || void 0, n || void 0);
    }
    static wrapSelection(e, t, n) {
      let { selectionStart: o, selectionEnd: s } = e,
        a = ct.getSelection(e);
      ct.insert(e, t + a + (n != null ? n : t)),
        (e.selectionStart = (o || 0) + t.length),
        (e.selectionEnd = (s || 0) + t.length);
    }
    static replace(e, t, n) {
      let o = 0;
      e.value.replace(t, (...s) => {
        let a = o + s[s.length - 2],
          d = s[0].length;
        (e.selectionStart = a), (e.selectionEnd = a + d);
        let i = typeof n == "string" ? n : n(...s);
        return ct.insert(e, i), (e.selectionStart = a), (o += i.length - d), i;
      });
    }
    static findLineEnd(e, t) {
      let n =
        e.lastIndexOf(
          `
`,
          t - 1
        ) + 1;
      return e.charAt(n) !== "	" ? t : n + 1;
    }
    static indent(e) {
      var d;
      let { selectionStart: t, selectionEnd: n, value: o } = e,
        s = o.slice(t, n),
        a = (d = /\n/g.exec(s)) == null ? void 0 : d.length;
      if (a && a > 0) {
        let i =
            o.lastIndexOf(
              `
`,
              t - 1
            ) + 1,
          c = e.value.slice(i, n - 1),
          u = c.replace(/^|\n/g, `$&${Wd}`),
          p = u.length - c.length;
        e.setSelectionRange(i, n - 1),
          ct.insert(e, u),
          e.setSelectionRange(t + 1, n + p);
      } else ct.insert(e, Wd);
    }
    static unindent(e) {
      let { selectionStart: t, selectionEnd: n, value: o } = e,
        s =
          o.lastIndexOf(
            `
`,
            t - 1
          ) + 1,
        a = ct.findLineEnd(o, n),
        d = e.value.slice(s, a),
        i = d.replace(/(^|\n)(\t| {1,2})/g, "$1"),
        c = d.length - i.length;
      e.setSelectionRange(s, a), ct.insert(e, i);
      let u = /\t| {1,2}/.exec(o.slice(s, t)),
        p = u ? u[0].length : 0,
        m = t - p;
      e.setSelectionRange(t - p, Math.max(m, n - c));
    }
  };
var it = V(require("react"));
var to = it.memo(function ({
    font: e,
    text: t,
    color: n,
    offsetX: o = 0,
    offsetY: s = 0,
    scale: a = 1,
    isEditing: d = !1,
    onBlur: i,
    onChange: c,
  }) {
    let u = it.useRef(null),
      p = it.useRef(!1),
      m = it.useCallback(
        (y) => {
          c(k.normalizeText(y.currentTarget.value));
        },
        [c]
      ),
      h = it.useCallback(
        (y) => {
          if (y.key === "Escape") {
            y.preventDefault(), y.stopPropagation(), i == null || i();
            return;
          }
          if (y.key === "Tab" && t.length === 0) {
            y.preventDefault();
            return;
          }
          if (!(y.key === "Meta" || y.metaKey)) y.stopPropagation();
          else if (y.key === "z" && y.metaKey) {
            y.shiftKey
              ? document.execCommand("redo", !1)
              : document.execCommand("undo", !1),
              y.stopPropagation(),
              y.preventDefault();
            return;
          }
          (y.metaKey || y.ctrlKey) && y.key === "=" && y.preventDefault(),
            y.key === "Tab" &&
              (y.preventDefault(),
              y.shiftKey
                ? ct.unindent(y.currentTarget)
                : ct.indent(y.currentTarget),
              c == null || c(k.normalizeText(y.currentTarget.value)));
        },
        [c]
      ),
      g = it.useCallback(
        (y) => {
          y.currentTarget.setSelectionRange(0, 0), i == null || i();
        },
        [i]
      ),
      f = it.useCallback(
        (y) => {
          !d ||
            !p.current ||
            (document.activeElement === y.currentTarget &&
              y.currentTarget.select());
        },
        [d]
      ),
      T = it.useCallback(
        (y) => {
          d && y.stopPropagation();
        },
        [d]
      ),
      x = it.useRef(d);
    it.useEffect(() => {
      d
        ? ((x.current = !0),
          requestAnimationFrame(() => {
            p.current = !0;
            let y = u.current;
            y && (y.focus(), y.select());
          }))
        : x.current && (i == null || i(), (x.current = !1));
    }, [d, i]);
    let b = it.useRef(null);
    return (
      it.useLayoutEffect(() => {
        let y = b.current;
        if (!y) return;
        let R = Qn(t, e);
        (y.style.transform = `scale(${a}, ${a}) translate(${o}px, ${s}px)`),
          (y.style.width = R[0] + 1 + "px"),
          (y.style.height = R[1] + 1 + "px");
      }, [t, e, s, o, a]),
      it.createElement(
        rde,
        null,
        it.createElement(
          sde,
          { ref: b, hasText: !!t, isEditing: d, style: { font: e, color: n } },
          d
            ? it.createElement(ide, {
                ref: u,
                style: { font: e, color: n },
                name: "text",
                tabIndex: -1,
                autoComplete: "false",
                autoCapitalize: "false",
                autoCorrect: "false",
                autoSave: "false",
                autoFocus: !0,
                placeholder: "",
                spellCheck: "true",
                wrap: "off",
                dir: "auto",
                datatype: "wysiwyg",
                defaultValue: t,
                color: n,
                onFocus: f,
                onChange: m,
                onKeyDown: h,
                onBlur: g,
                onPointerDown: T,
                onContextMenu: xt,
                onCopy: xt,
                onPaste: xt,
                onCut: xt,
              })
            : t,
          "\u200B"
        )
      )
    );
  }),
  rde = H("div", {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    userSelect: "none",
    variants: {
      isGhost: {
        false: { opacity: 1 },
        true: { transition: "opacity .2s", opacity: 0.3 },
      },
    },
  }),
  Ud = {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    letterSpacing: Yt,
  },
  sde = H(
    "div",
    S(
      {
        position: "absolute",
        padding: "4px",
        zIndex: 1,
        minHeight: 1,
        minWidth: 1,
        lineHeight: 1,
        outline: 0,
        fontWeight: "500",
        textAlign: "center",
        backfaceVisibility: "hidden",
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        variants: {
          hasText: {
            false: { pointerEvents: "none" },
            true: { pointerEvents: "all" },
          },
          isEditing: {
            false: { userSelect: "none" },
            true: {
              background: "$boundsBg",
              userSelect: "text",
              WebkitUserSelect: "text",
            },
          },
        },
      },
      Ud
    )
  ),
  ide = H(
    "textarea",
    w(
      S(
        {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
          border: "none",
          padding: "4px",
          resize: "none",
          textAlign: "inherit",
          minHeight: "inherit",
          minWidth: "inherit",
          lineHeight: "inherit",
          outline: 0,
          fontWeight: "inherit",
          overflow: "hidden",
          backfaceVisibility: "hidden",
          display: "inline-block",
          pointerEvents: "all",
          background: "$boundsBg",
          userSelect: "text",
          WebkitUserSelect: "text",
          fontSmooth: "always",
          WebkitFontSmoothing: "subpixel-antialiased",
          MozOsxFontSmoothing: "auto",
        },
        Ud
      ),
      { "&:focus": { outline: "none", border: "none" } }
    )
  );
var _o = V(require("@tldraw/vec"));
function no(
  r,
  e,
  { initialShape: t, transformOrigin: n, scaleX: o, scaleY: s }
) {
  if (r.rotation || t.isAspectRatioLocked) {
    let a = _o.default.toFixed(
        _o.default.mul(t.size, Math.min(Math.abs(o), Math.abs(s)))
      ),
      d = _o.default.toFixed([
        e.minX + (e.width - r.size[0]) * (o < 0 ? 1 - n[0] : n[0]),
        e.minY + (e.height - r.size[1]) * (s < 0 ? 1 - n[1] : n[1]),
      ]),
      i =
        (o < 0 && s >= 0) || (s < 0 && o >= 0)
          ? t.rotation
            ? -t.rotation
            : 0
          : t.rotation;
    return { size: a, point: d, rotation: i };
  } else
    return {
      point: _o.default.toFixed([e.minX, e.minY]),
      size: _o.default.toFixed([e.width, e.height]),
    };
}
var Wi = V(require("@tldraw/vec"));
function oo(r, e) {
  return {
    size: Wi.default.toFixed([e.width, e.height]),
    point: Wi.default.toFixed([e.minX, e.minY]),
  };
}
var xe = class extends Xt.TLShapeUtil {
  constructor() {
    super(...arguments);
    l(this, "canBind", !1);
    l(this, "canEdit", !1);
    l(this, "canClone", !1);
    l(this, "isAspectRatioLocked", !1);
    l(this, "hideResizeHandles", !1);
    l(this, "bindingDistance", 16);
    l(this, "hitTestPoint", (e, t) =>
      Xt.Utils.pointInBounds(t, this.getRotatedBounds(e))
    );
    l(this, "hitTestLineSegment", (e, t, n) => {
      let o = Xt.Utils.getBoundsFromPoints([t, n]),
        s = this.getBounds(e);
      return Xt.Utils.boundsContain(s, o) || e.rotation
        ? (0, Yo.intersectLineSegmentPolyline)(
            t,
            n,
            Xt.Utils.getRotatedCorners(this.getBounds(e))
          ).didIntersect
        : (0, Yo.intersectLineSegmentBounds)(t, n, this.getBounds(e)).length >
            0;
    });
    l(
      this,
      "create",
      (e) => (this.refMap.set(e.id, Kd.createRef()), this.getShape(e))
    );
    l(this, "getCenter", (e) => Xt.Utils.getBoundsCenter(this.getBounds(e)));
    l(this, "getExpandedBounds", (e) =>
      Xt.Utils.expandBounds(this.getBounds(e), this.bindingDistance)
    );
    l(this, "getBindingPoint", (e, t, n, o, s, a) => {
      let d = this.getBounds(e),
        i = this.getExpandedBounds(e);
      if (!Xt.Utils.pointInBounds(n, i)) return;
      let c = (0, Yo.intersectRayBounds)(o, s, i)
        .filter((T) => T.didIntersect)
        .map((T) => T.points[0]);
      if (!c.length) return;
      let u = this.getCenter(e),
        p = c.sort((T, x) => kn.Vec.dist(x, o) - kn.Vec.dist(T, o))[0],
        m = kn.Vec.med(n, p),
        h,
        g;
      a
        ? ((h = kn.Vec.dist(n, u) < 16 / 2 ? u : n), (g = 0))
        : (kn.Vec.distanceToLineSegment(n, m, u) < 16 / 2 ? (h = u) : (h = m),
          Xt.Utils.pointInBounds(n, d)
            ? (g = this.bindingDistance)
            : (g = Math.max(
                this.bindingDistance,
                Xt.Utils.getBoundsSides(d)
                  .map((T) => kn.Vec.distanceToLineSegment(T[1][0], T[1][1], n))
                  .sort((T, x) => T - x)[0]
              )));
      let f = kn.Vec.divV(kn.Vec.sub(h, [i.minX, i.minY]), [i.width, i.height]);
      return { point: kn.Vec.clampV(f, 0, 1), distance: g };
    });
    l(this, "mutate", (e, t) => t);
    l(this, "transform", (e, t, n) => w(S({}, e), { point: [t.minX, t.minY] }));
    l(this, "transformSingle", (e, t, n) => this.transform(e, t, n));
    l(this, "updateChildren");
    l(this, "onChildrenChange");
    l(this, "onHandleChange");
    l(this, "onRightPointHandle");
    l(this, "onDoubleClickHandle");
    l(this, "onDoubleClickBoundsHandle");
    l(this, "onSessionComplete");
    l(this, "getSvgElement", (e, t) => {
      var s, a, d, i, c;
      let n =
        (s = document.getElementById(e.id + "_svg")) == null
          ? void 0
          : s.cloneNode(!0);
      if (!n) return;
      if (
        (i =
          (d = (a = e.label) == null ? void 0 : a.trim()) == null
            ? void 0
            : d.length) != null
          ? i
          : 0 > 0
      ) {
        let u = e,
          p = document.createElementNS("http://www.w3.org/2000/svg", "g"),
          m = Mt(e.style),
          h = Qn(e.label, m),
          g =
            yo(e.style.size, e.style.font) *
            ((c = e.style.scale) != null ? c : 1),
          f = wn(e.style.font).slice(1, -1),
          T = eo(u.label, g, f, "middle", h[0], !1),
          x = this.getBounds(e);
        return (
          T.setAttribute(
            "transform",
            `translate(${x.width / 2 - h[0] / 2}, ${x.height / 2 - h[1] / 2})`
          ),
          T.setAttribute("fill", Te(e.style, t).stroke),
          T.setAttribute("transform-origin", "center center"),
          p.setAttribute("text-align", "center"),
          p.setAttribute("text-anchor", "middle"),
          p.appendChild(n),
          p.appendChild(T),
          p
        );
      }
      return n;
    });
  }
};
var Fn = require("@tldraw/core"),
  vs = require("@tldraw/intersect"),
  Re = V(require("@tldraw/vec")),
  Ui = V(require("perfect-freehand"));
function Zd(r, e, t, n) {
  return [
    "M",
    r[0],
    r[1],
    "A",
    t[2],
    t[2],
    0,
    0,
    n < 0 ? 0 : 1,
    e[0],
    e[1],
  ].join(" ");
}
function kr(r, e) {
  let { start: t, end: n } = r,
    o = Re.default.dist(t.point, n.point),
    s = Re.default.med(t.point, n.point),
    a = (o / 2) * e,
    d = Re.default.uni(Re.default.vec(t.point, n.point));
  return Re.default.toFixed(
    Math.abs(a) < 10
      ? s
      : Re.default.add(s, Re.default.mul(Re.default.per(d), a))
  );
}
function Xd(r, e, t, n, o, s) {
  let a = Fn.Utils.rng(r),
    d = Te(e).strokeWidth,
    i = o ? Re.default.nudge(t, n, d) : t,
    c = s ? Re.default.nudge(n, t, d) : n,
    u = (0, Ui.default)([i, c], {
      size: d,
      thinning: 0.618 + a() * 0.2,
      easing: bo.easeOutQuad,
      simulatePressure: !0,
      streamline: 0,
      last: !0,
    });
  return Fn.Utils.getSvgPathFromStroke(u);
}
function qd(r, e, t, n, o, s, a, d, i, c) {
  let u = Fn.Utils.rng(r),
    p = Te(e).strokeWidth,
    m = o ? Re.default.rotWith(t, a, p / i) : t,
    h = s ? Re.default.rotWith(n, a, -(p / i)) : n,
    g = Re.default.angle(a, m),
    f = Re.default.angle(a, h),
    T = [],
    x = 8 + Math.floor((Math.abs(i) / 20) * 1 + u() / 2);
  for (let y = 0; y < x; y++) {
    let R = c(y / x),
      K = Fn.Utils.lerpAngles(g, f, R);
    T.push(Re.default.toFixed(Re.default.nudgeAtAngle(a, K, d)));
  }
  let b = (0, Ui.default)([m, ...T, h], {
    size: 1 + p,
    thinning: 0.618 + u() * 0.2,
    easing: bo.easeOutQuad,
    simulatePressure: !1,
    streamline: 0,
    last: !0,
  });
  return Fn.Utils.getSvgPathFromStroke(b);
}
function jn(r, e, t) {
  return Fn.Utils.circleFromThreePoints(r, t, e);
}
function Is(r, e, t, n, o) {
  let s = (0, vs.intersectCircleCircle)(r, e * 0.618, t, n).points;
  if (!s)
    return (
      k.warn("Could not find an intersection for the arrow head."),
      { left: r, right: r }
    );
  let a = o ? s[0] : s[1],
    d = a
      ? Re.default.nudge(Re.default.rotWith(a, r, Math.PI / 6), r, e * -0.382)
      : r,
    i = a
      ? Re.default.nudge(Re.default.rotWith(a, r, -Math.PI / 6), r, e * -0.382)
      : r;
  return { left: d, right: i };
}
function Cs(r, e, t) {
  let n = (0, vs.intersectCircleLineSegment)(r, t, r, e).points;
  if (!n)
    return (
      k.warn("Could not find an intersection for the arrow head."),
      { left: r, right: r }
    );
  let o = n[0],
    s = o ? Re.default.rotWith(o, r, Math.PI / 6) : r,
    a = o ? Re.default.rotWith(o, r, -Math.PI / 6) : r;
  return { left: s, right: a };
}
function _d(r, e, t, n, o) {
  let { left: s, right: a } = Is(r, e, t, n, o);
  return `M ${s} L ${r} ${a}`;
}
function Yd(r, e, t) {
  let { left: n, right: o } = Cs(r, e, t);
  return `M ${n} L ${r} ${o}`;
}
function Jd(r, e, t, n, o, s) {
  let { strokeWidth: a } = Te(r, !1),
    d = Re.default.dist(e, n),
    i = Math.min(d / 3, a * 8),
    c = [];
  if (Re.default.dist(t, Re.default.toFixed(Re.default.med(e, n))) < 1)
    c.push(`M ${e} L ${n}`), o && c.push(Yd(e, n, i)), s && c.push(Yd(n, e, i));
  else {
    let p = jn(e, t, n),
      m = [p[0], p[1]],
      h = p[2],
      g = xo(m, h, e, n);
    c.push(`M ${e} A ${h} ${h} 0 0 ${g > 0 ? "1" : "0"} ${n}`),
      o && c.push(_d(e, i, m, h, g < 0)),
      s && c.push(_d(n, i, m, h, g >= 0));
  }
  return c.join(" ");
}
function vr(r, e, t) {
  if (Re.default.dist2(e, Re.default.med(r, t)) <= 4) return [r, t];
  let n = [],
    o = jn(r, e, t),
    s = [o[0], o[1]],
    a = o[2],
    d = Re.default.angle(s, r),
    i = Re.default.angle(s, t);
  for (let c = 0; c < 20; c++) {
    let u = c / 19,
      p = Fn.Utils.lerpAngles(d, i, u);
    n.push(Re.default.nudgeAtAngle(s, p, a));
  }
  return n;
}
function Qd(r, e, t) {
  if (t === r || t === e) return !0;
  let n = Math.PI * 2,
    o = (e - r + n) % n,
    s = (t - r + n) % n;
  return o <= Math.PI != s > o;
}
function xo(r, e, t, n) {
  let o = Fn.Utils.getSweep(r, t, n);
  return e * (2 * Math.PI) * (o / (2 * Math.PI));
}
var Ki = require("@tldraw/core"),
  ec = V(require("@tldraw/vec")),
  vn = V(require("react"));
var Ds = V(require("react"));
function Zo({ left: r, middle: e, right: t, stroke: n, strokeWidth: o }) {
  return Ds.createElement(
    "g",
    null,
    Ds.createElement("path", {
      className: "tl-stroke-hitarea",
      d: `M ${r} L ${e} ${t}`,
    }),
    Ds.createElement("path", {
      d: `M ${r} L ${e} ${t}`,
      fill: "none",
      stroke: n,
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      pointerEvents: "none",
    })
  );
}
var tc = vn.memo(function ({
  id: e,
  style: t,
  start: n,
  bend: o,
  end: s,
  arrowBend: a,
  decorationStart: d,
  decorationEnd: i,
  isDraw: c,
  isDarkMode: u,
}) {
  let p = ec.default.dist(n, s);
  if (p < 2) return null;
  let m = Te(t, u),
    { strokeWidth: h } = m,
    g = 1 + h * 1.618,
    f = jn(n, o, s),
    T = [f[0], f[1]],
    x = f[2],
    b = xo(T, x, n, s),
    y = Ki.Utils.rng(e),
    R = bo[y() > 0 ? "easeInOutSine" : "easeInOutCubic"],
    K = c ? qd(e, t, n, s, d, i, T, x, b, R) : Zd(n, s, f, a),
    { strokeDasharray: L, strokeDashoffset: v } = Ki.Utils.getPerfectDashProps(
      Math.abs(b),
      g,
      t.dash,
      2,
      !1
    ),
    I = Math.min(p / 3, h * 8),
    J = d ? Is(n, I, T, x, b < 0) : null,
    ce = i ? Is(s, I, T, x, b >= 0) : null;
  return vn.createElement(
    vn.Fragment,
    null,
    vn.createElement("path", { className: "tl-stroke-hitarea", d: K }),
    vn.createElement("path", {
      d: K,
      fill: c ? m.stroke : "none",
      stroke: m.stroke,
      strokeWidth: c ? 0 : g,
      strokeDasharray: L,
      strokeDashoffset: v,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      pointerEvents: "none",
    }),
    J &&
      vn.createElement(Zo, {
        left: J.left,
        middle: n,
        right: J.right,
        stroke: m.stroke,
        strokeWidth: g,
      }),
    ce &&
      vn.createElement(Zo, {
        left: ce.left,
        middle: s,
        right: ce.right,
        stroke: m.stroke,
        strokeWidth: g,
      })
  );
});
var nc = require("@tldraw/core"),
  Ps = V(require("@tldraw/vec")),
  In = V(require("react"));
var oc = In.memo(function ({
  id: e,
  style: t,
  start: n,
  end: o,
  decorationStart: s,
  decorationEnd: a,
  isDraw: d,
  isDarkMode: i,
}) {
  let c = Ps.default.dist(n, o);
  if (c < 2) return null;
  let u = Te(t, i),
    { strokeWidth: p } = u,
    m = 1 + p * 1.618,
    h = d
      ? Xd(e, t, n, o, s, a)
      : "M" + Ps.default.toFixed(n) + "L" + Ps.default.toFixed(o),
    { strokeDasharray: g, strokeDashoffset: f } = nc.Utils.getPerfectDashProps(
      c,
      p * 1.618,
      t.dash,
      2,
      !1
    ),
    T = Math.min(c / 3, p * 8),
    x = s ? Cs(n, o, T) : null,
    b = a ? Cs(o, n, T) : null;
  return In.createElement(
    In.Fragment,
    null,
    In.createElement("path", { className: "tl-stroke-hitarea", d: h }),
    In.createElement("path", {
      d: h,
      fill: u.stroke,
      stroke: u.stroke,
      strokeWidth: d ? m / 2 : m,
      strokeDasharray: g,
      strokeDashoffset: f,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      pointerEvents: "stroke",
    }),
    x &&
      In.createElement(Zo, {
        left: x.left,
        middle: n,
        right: x.right,
        stroke: u.stroke,
        strokeWidth: m,
      }),
    b &&
      In.createElement(Zo, {
        left: b.left,
        middle: o,
        right: b.right,
        stroke: u.stroke,
        strokeWidth: m,
      })
  );
});
var _i = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "arrow");
      l(this, "hideBounds", !0);
      l(this, "canEdit", !0);
      l(this, "pathCache", new WeakMap());
      l(this, "getShape", (e) => {
        var t, n, o, s;
        return S(
          {
            id: "id",
            type: "arrow",
            name: "Arrow",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            rotation: 0,
            bend: 0,
            handles: {
              start: S(
                { id: "start", index: 0, point: [0, 0], canBind: !0 },
                (t = e.handles) == null ? void 0 : t.start
              ),
              end: S(
                { id: "end", index: 1, point: [1, 1], canBind: !0 },
                (n = e.handles) == null ? void 0 : n.end
              ),
              bend: S(
                { id: "bend", index: 2, point: [0.5, 0.5] },
                (o = e.handles) == null ? void 0 : o.bend
              ),
            },
            decorations: (s = e.decorations) != null ? s : { end: "arrow" },
            style: S(w(S({}, gt), { isFilled: !1 }), e.style),
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        );
      });
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              isEditing: t,
              isGhost: n,
              meta: o,
              events: s,
              onShapeChange: a,
              onShapeBlur: d,
            },
            i
          ) => {
            var de, He;
            let {
                id: c,
                label: u = "",
                handles: { start: p, bend: m, end: h },
                decorations: g = {},
                style: f,
              } = e,
              T =
                (He =
                  (de = u == null ? void 0 : u.trim()) == null
                    ? void 0
                    : de.length) != null
                  ? He
                  : 0 > 0,
              x =
                fe.Vec.dist(
                  m.point,
                  fe.Vec.toFixed(fe.Vec.med(p.point, h.point))
                ) < 1,
              b = Mt(f),
              y = Te(f, o.isDarkMode),
              R = T || t ? Qn(u, b) : [0, 0],
              K = this.getBounds(e),
              L = qe.useMemo(() => {
                let { start: Pe, bend: Me, end: Ue } = e.handles;
                if (x) return fe.Vec.dist(Pe.point, Ue.point);
                let Ke = jn(Pe.point, Me.point, Ue.point),
                  Kt = Ke.slice(0, 2),
                  gn = Ke[2],
                  dr = xo(Kt, gn, Pe.point, Ue.point);
                return Math.abs(dr);
              }, [e.handles]),
              v = Math.max(
                0.5,
                Math.min(1, Math.max(L / (R[1] + 128), L / (R[0] + 128)))
              ),
              I = qe.useMemo(() => {
                let Pe = this.getBounds(e);
                return fe.Vec.sub(
                  e.handles.bend.point,
                  fe.Vec.toFixed([Pe.width / 2, Pe.height / 2])
                );
              }, [e, v]),
              J = qe.useCallback(
                (Pe) => {
                  a == null || a({ id: c, label: Pe });
                },
                [a]
              ),
              ce = x ? oc : tc;
            return qe.createElement(
              ade,
              S({ ref: i }, s),
              qe.createElement(to, {
                font: b,
                text: u,
                color: y.stroke,
                offsetX: I[0],
                offsetY: I[1],
                scale: v,
                isEditing: t,
                onChange: J,
                onBlur: d,
              }),
              qe.createElement(
                Ht.SVGContainer,
                { id: e.id + "_svg" },
                qe.createElement(
                  "defs",
                  null,
                  qe.createElement(
                    "mask",
                    { id: e.id + "_clip" },
                    qe.createElement("rect", {
                      x: -100,
                      y: -100,
                      width: K.width + 200,
                      height: K.height + 200,
                      fill: "white",
                    }),
                    qe.createElement("rect", {
                      x: K.width / 2 - (R[0] / 2) * v + I[0],
                      y: K.height / 2 - (R[1] / 2) * v + I[1],
                      width: R[0] * v,
                      height: R[1] * v,
                      rx: 4 * v,
                      ry: 4 * v,
                      fill: "black",
                      opacity: 1,
                    })
                  )
                ),
                qe.createElement(
                  "g",
                  {
                    pointerEvents: "none",
                    opacity: n ? 0.3 : 1,
                    mask: T || t ? `url(#${e.id}_clip)` : "",
                  },
                  qe.createElement(ce, {
                    id: c,
                    style: f,
                    start: p.point,
                    end: h.point,
                    bend: m.point,
                    arrowBend: e.bend,
                    decorationStart: g == null ? void 0 : g.start,
                    decorationEnd: g == null ? void 0 : g.end,
                    isDraw: f.dash === "draw",
                    isDarkMode: o.isDarkMode,
                  })
                )
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e, bounds: t }) => {
          var T, x;
          let {
              style: n,
              decorations: o,
              label: s,
              handles: { start: a, bend: d, end: i },
            } = e,
            c =
              (x =
                (T = s == null ? void 0 : s.trim()) == null
                  ? void 0
                  : T.length) != null
                ? x
                : 0 > 0,
            u = Mt(n),
            p = c ? Qn(s, u) : [0, 0],
            m =
              fe.Vec.dist(
                d.point,
                fe.Vec.toFixed(fe.Vec.med(a.point, i.point))
              ) < 1,
            h = qe.useMemo(() => {
              let { start: b, bend: y, end: R } = e.handles;
              if (m) return fe.Vec.dist(b.point, R.point);
              let K = jn(b.point, y.point, R.point),
                L = K.slice(0, 2),
                v = K[2],
                I = xo(L, v, b.point, R.point);
              return Math.abs(I);
            }, [e.handles]),
            g = Math.max(
              0.5,
              Math.min(1, Math.max(h / (p[1] + 128), h / (p[0] + 128)))
            ),
            f = qe.useMemo(() => {
              let b = this.getBounds(e);
              return fe.Vec.sub(e.handles.bend.point, [
                b.width / 2,
                b.height / 2,
              ]);
            }, [e, g]);
          return qe.createElement(
            qe.Fragment,
            null,
            c &&
              qe.createElement(Fd, {
                id: e.id,
                scale: g,
                offset: f,
                bounds: t,
                labelSize: p,
              }),
            qe.createElement("path", {
              d: Jd(
                n,
                a.point,
                d.point,
                i.point,
                o == null ? void 0 : o.start,
                o == null ? void 0 : o.end
              ),
              mask: c ? `url(#${e.id}_clip)` : "",
            }),
            c &&
              qe.createElement("rect", {
                x: t.width / 2 - (p[0] / 2) * g + f[0],
                y: t.height / 2 - (p[1] / 2) * g + f[1],
                width: p[0] * g,
                height: p[1] * g,
                rx: 4 * g,
                ry: 4 * g,
                fill: "transparent",
              })
          );
        })
      );
      l(this, "getBounds", (e) => {
        let t = Ht.Utils.getFromCache(this.boundsCache, e, () => {
          let {
            handles: { start: n, bend: o, end: s },
          } = e;
          return Ht.Utils.getBoundsFromPoints(vr(n.point, o.point, s.point));
        });
        return Ht.Utils.translateBounds(t, e.point);
      });
      l(this, "getRotatedBounds", (e) => {
        let {
            handles: { start: t, bend: n, end: o },
          } = e,
          s = vr(t.point, n.point, o.point),
          {
            minX: a,
            minY: d,
            maxX: i,
            maxY: c,
          } = Ht.Utils.getBoundsFromPoints(s);
        return (
          e.rotation !== 0 &&
            (s = s.map((u) =>
              fe.Vec.rotWith(u, [(a + i) / 2, (d + c) / 2], e.rotation || 0)
            )),
          Ht.Utils.translateBounds(Ht.Utils.getBoundsFromPoints(s), e.point)
        );
      });
      l(this, "getCenter", (e) => {
        let { start: t, end: n } = e.handles;
        return fe.Vec.add(e.point, fe.Vec.med(t.point, n.point));
      });
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.decorations !== e.decorations ||
          t.handles !== e.handles ||
          t.style !== e.style ||
          t.label !== e.label
      );
      l(this, "hitTestPoint", (e, t) => {
        let {
            handles: { start: n, bend: o, end: s },
          } = e,
          a = fe.Vec.sub(t, e.point),
          d = vr(n.point, o.point, s.point);
        for (let i = 1; i < d.length; i++)
          if (fe.Vec.distanceToLineSegment(d[i - 1], d[i], a) < 1) return !0;
        return !1;
      });
      l(this, "hitTestLineSegment", (e, t, n) => {
        let {
            handles: { start: o, bend: s, end: a },
          } = e,
          d = fe.Vec.sub(t, e.point),
          i = fe.Vec.sub(n, e.point),
          c = vr(o.point, s.point, a.point);
        for (let u = 1; u < c.length; u++)
          if (
            (0, Xo.intersectLineSegmentLineSegment)(c[u - 1], c[u], d, i)
              .didIntersect
          )
            return !0;
        return !1;
      });
      l(this, "hitTestBounds", (e, t) => {
        let { start: n, end: o, bend: s } = e.handles,
          a = fe.Vec.add(e.point, n.point),
          d = fe.Vec.add(e.point, o.point);
        if (Ht.Utils.pointInBounds(a, t) || Ht.Utils.pointInBounds(d, t))
          return !0;
        if (fe.Vec.isEqual(fe.Vec.med(n.point, o.point), s.point))
          return (0, Xo.intersectLineSegmentBounds)(a, d, t).length > 0;
        {
          let [i, c, u] = jn(n.point, s.point, o.point),
            p = fe.Vec.add(e.point, [i, c]);
          return (0, Xo.intersectArcBounds)(p, u, a, d, t).length > 0;
        }
      });
      l(
        this,
        "transform",
        (e, t, { initialShape: n, scaleX: o, scaleY: s }) => {
          let a = this.getBounds(n),
            d = ["start", "end"],
            i = S({}, n.handles);
          d.forEach((p) => {
            if (p === "bend") return;
            let [m, h] = i[p].point,
              g = m / a.width,
              f = h / a.height;
            i[p] = w(S({}, i[p]), {
              point: [
                t.width * (o < 0 ? 1 - g : g),
                t.height * (s < 0 ? 1 - f : f),
              ],
            });
          });
          let c = (o > 0 && s < 0) || (o < 0 && s > 0) ? -n.bend : n.bend,
            u = kr(i, c);
          return (
            (i.bend.point = u),
            { point: fe.Vec.toFixed([t.minX, t.minY]), handles: i, bend: c }
          );
        }
      );
      l(this, "onDoubleClickHandle", (e, t) => {
        var n, o;
        switch (t) {
          case "bend":
            return {
              bend: 0,
              handles: w(S({}, e.handles), {
                bend: w(S({}, e.handles.bend), {
                  point: kr(e.handles, e.bend),
                }),
              }),
            };
          case "start":
            return {
              decorations: w(S({}, e.decorations), {
                start: ((n = e.decorations) == null ? void 0 : n.start)
                  ? void 0
                  : "arrow",
              }),
            };
          case "end":
            return {
              decorations: w(S({}, e.decorations), {
                end: ((o = e.decorations) == null ? void 0 : o.end)
                  ? void 0
                  : "arrow",
              }),
            };
        }
        return this;
      });
      l(this, "onHandleChange", (e, t) => {
        let n = Ht.Utils.deepMerge(e.handles, t),
          o = e.bend;
        if (
          ((n = Ht.Utils.deepMerge(n, {
            start: { point: fe.Vec.toFixed(n.start.point) },
            end: { point: fe.Vec.toFixed(n.end.point) },
          })),
          fe.Vec.isEqual(n.start.point, n.end.point))
        )
          return;
        if ("bend" in t) {
          let { start: c, end: u, bend: p } = n,
            m = fe.Vec.dist(c.point, u.point),
            h = fe.Vec.med(c.point, u.point),
            g = fe.Vec.angle(c.point, u.point),
            f = fe.Vec.uni(fe.Vec.vec(c.point, u.point)),
            T = fe.Vec.add(h, fe.Vec.mul(fe.Vec.per(f), m)),
            x = fe.Vec.sub(h, fe.Vec.mul(fe.Vec.per(f), m)),
            b = fe.Vec.nearestPointOnLineSegment(T, x, p.point, !0),
            R = fe.Vec.dist(h, b) / (m / 2);
          o = Ht.Utils.clamp(R, -0.99, 0.99);
          let K = fe.Vec.angle(c.point, b);
          fe.Vec.isEqual(h, kr(n, o))
            ? (o = 0)
            : Qd(g, g + Math.PI, K) && (o *= -1);
        }
        let s = {
            point: e.point,
            bend: o,
            handles: w(S({}, n), {
              bend: w(S({}, n.bend), { point: kr(n, o) }),
            }),
          },
          a = e.point,
          d = this.getBounds(S({}, s)),
          i = fe.Vec.sub([d.minX, d.minY], a);
        return (
          fe.Vec.isEqual(i, [0, 0]) ||
            (Object.values(s.handles).forEach((c) => {
              c.point = fe.Vec.toFixed(fe.Vec.sub(c.point, i));
            }),
            (s.point = fe.Vec.toFixed(fe.Vec.add(s.point, i)))),
          s
        );
      });
      l(this, "getSvgElement", (e, t) => {
        var s, a, d, i, c;
        let n =
          (s = document.getElementById(e.id + "_svg")) == null
            ? void 0
            : s.cloneNode(!0);
        if (!n) return;
        if (
          (i =
            (d = (a = e.label) == null ? void 0 : a.trim()) == null
              ? void 0
              : d.length) != null
            ? i
            : 0 > 0
        ) {
          let u = e,
            p = document.createElementNS("http://www.w3.org/2000/svg", "g"),
            m = Mt(e.style),
            h = Qn(e.label, m),
            g =
              yo(e.style.size, e.style.font) *
              ((c = e.style.scale) != null ? c : 1),
            f = wn(e.style.font).slice(1, -1),
            T = eo(u.label, g, f, "start", h[0], !1),
            x,
            { start: b, bend: y, end: R } = e.handles;
          if (
            fe.Vec.dist(y.point, fe.Vec.toFixed(fe.Vec.med(b.point, R.point))) <
            1
          )
            x = fe.Vec.dist(b.point, R.point);
          else {
            let de = jn(b.point, y.point, R.point),
              He = de.slice(0, 2),
              Pe = de[2],
              Me = xo(He, Pe, b.point, R.point);
            x = Math.abs(Me);
          }
          let L = Math.max(
              0.5,
              Math.min(1, Math.max(x / (h[1] + 128), x / (h[0] + 128)))
            ),
            v = this.getBounds(e),
            I = fe.Vec.sub(e.handles.bend.point, [v.width / 2, v.height / 2]),
            J = v.width / 2 - (h[0] / 2) * L + I[0],
            ce = v.height / 2 - (h[1] / 2) * L + I[1];
          return (
            T.setAttribute("transform", `translate(${J}, ${ce})`),
            T.setAttribute("fill", Te(e.style, t).stroke),
            T.setAttribute("transform-origin", "center center"),
            p.setAttribute("text-align", "center"),
            p.setAttribute("text-anchor", "middle"),
            p.appendChild(n),
            p.appendChild(T),
            p
          );
        }
        return n;
      });
    }
  },
  ade = H("div", { width: "100%", height: "100%" });
var Qe = require("@tldraw/core"),
  Gn = require("@tldraw/intersect"),
  Cn = require("@tldraw/vec"),
  ft = V(require("react"));
var Ms = require("@tldraw/core"),
  rc = V(require("@tldraw/vec")),
  Ir = require("perfect-freehand");
var lde = { easing: (r) => Math.sin((r * Math.PI) / 2), simulatePressure: !0 },
  dde = { easing: (r) => r * r, simulatePressure: !1 };
function Yi(r) {
  let e = Te(r.style);
  return w(
    S(
      {
        size: 1 + e.strokeWidth * 1.5,
        thinning: 0.65,
        streamline: 0.65,
        smoothing: 0.65,
      },
      r.points[1][2] === 0.5 ? lde : dde
    ),
    { last: r.isComplete }
  );
}
function sc(r) {
  return r.points.length < 2
    ? ""
    : Ms.Utils.getSvgPathFromStroke(
        (0, Ir.getStrokePoints)(r.points, Yi(r)).map((e) => e.point)
      );
}
function ic(r, e) {
  return (0, Ir.getStrokePoints)(r.points, e);
}
function ac(r) {
  if (r.points.length < 2) return "";
  let e = Yi(r),
    t = ic(r, e);
  return Ms.Utils.getSvgPathFromStroke((0, Ir.getStrokeOutlinePoints)(t, e));
}
function Zi(r) {
  let { points: e } = r;
  if (e.length < 2) return "M 0 0 L 0 0";
  let t = Yi(r),
    n = ic(r, t),
    o = e[e.length - 1];
  return (
    rc.default.isEqual(n[0].point, o) || n.push({ point: o }),
    Ms.Utils.getSvgPathFromStrokePoints(n)
  );
}
var Xi = class extends xe {
  constructor() {
    super(...arguments);
    l(this, "type", "draw");
    l(this, "pointsBoundsCache", new WeakMap([]));
    l(this, "shapeBoundsCache", new Map());
    l(this, "rotatedCache", new WeakMap([]));
    l(this, "pointCache", {});
    l(this, "canClone", !0);
    l(this, "getShape", (e) =>
      Qe.Utils.deepMerge(
        {
          id: "id",
          type: "draw",
          name: "Draw",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          rotation: 0,
          style: gt,
          points: [],
          isComplete: !1,
        },
        e
      )
    );
    l(
      this,
      "Component",
      xe.Component(
        ({ shape: e, meta: t, isSelected: n, isGhost: o, events: s }, a) => {
          let { points: d, style: i, isComplete: c } = e,
            u = ft.useMemo(() => sc(e), [d, i.size]),
            p = ft.useMemo(
              () => (i.dash === "draw" ? ac(e) : Zi(e)),
              [d, i.size, i.dash, c]
            ),
            m = Te(i, t.isDarkMode),
            { stroke: h, fill: g, strokeWidth: f } = m,
            T = this.getBounds(e);
          if (T.width <= f / 2 && T.height <= f / 2) {
            let L = 1 + f;
            return ft.createElement(
              Qe.SVGContainer,
              S({ ref: a, id: e.id + "_svg" }, s),
              ft.createElement("circle", {
                r: L,
                fill: h,
                stroke: h,
                pointerEvents: "all",
                opacity: o ? 0.3 : 1,
              })
            );
          }
          let b =
            i.isFilled &&
            d.length > 3 &&
            Cn.Vec.dist(d[0], d[d.length - 1]) < f * 2;
          if (e.style.dash === "draw")
            return ft.createElement(
              Qe.SVGContainer,
              S({ ref: a, id: e.id + "_svg" }, s),
              ft.createElement(
                "g",
                { opacity: o ? 0.3 : 1 },
                ft.createElement("path", {
                  className: b || n ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                  d: p,
                }),
                b &&
                  ft.createElement("path", {
                    d: u,
                    stroke: "none",
                    fill: g,
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                    pointerEvents: "none",
                  }),
                ft.createElement("path", {
                  d: p,
                  fill: h,
                  stroke: h,
                  strokeWidth: f / 2,
                  strokeLinejoin: "round",
                  strokeLinecap: "round",
                  pointerEvents: "none",
                })
              )
            );
          let y = {
              ["draw"]: "none",
              ["solid"]: "none",
              ["dotted"]: `0.1 ${f * 4}`,
              ["dashed"]: `${f * 4} ${f * 4}`,
            }[i.dash],
            R = {
              ["draw"]: "none",
              ["solid"]: "none",
              ["dotted"]: "0",
              ["dashed"]: "0",
            }[i.dash],
            K = 1 + f * 1.5;
          return ft.createElement(
            Qe.SVGContainer,
            S({ ref: a, id: e.id + "_svg" }, s),
            ft.createElement(
              "g",
              { opacity: o ? 0.3 : 1 },
              ft.createElement("path", {
                className: b && n ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                d: p,
              }),
              ft.createElement("path", {
                d: p,
                fill: b ? g : "none",
                stroke: "none",
                strokeWidth: Math.min(4, f * 2),
                strokeLinejoin: "round",
                strokeLinecap: "round",
                pointerEvents: "none",
              }),
              ft.createElement("path", {
                d: p,
                fill: "none",
                stroke: h,
                strokeWidth: K,
                strokeDasharray: y,
                strokeDashoffset: R,
                strokeLinejoin: "round",
                strokeLinecap: "round",
                pointerEvents: "none",
              })
            )
          );
        }
      )
    );
    l(
      this,
      "Indicator",
      xe.Indicator(({ shape: e }) => {
        let { points: t } = e,
          n = ft.useMemo(() => Zi(e), [t]),
          o = this.getBounds(e);
        return o.width < 4 && o.height < 4
          ? ft.createElement("circle", {
              x: o.width / 2,
              y: o.height / 2,
              r: 1,
            })
          : ft.createElement("path", { d: n });
      })
    );
    l(this, "transform", (e, t, { initialShape: n, scaleX: o, scaleY: s }) => {
      let a = Qe.Utils.getFromCache(this.boundsCache, n, () =>
          Qe.Utils.getBoundsFromPoints(n.points)
        ),
        d = n.points.map(([u, p, m]) => [
          t.width * (o < 0 ? 1 - u / a.width : u / a.width),
          t.height * (s < 0 ? 1 - p / a.height : p / a.height),
          m,
        ]),
        i = Qe.Utils.getBoundsFromPoints(e.points),
        c = Cn.Vec.sub([t.minX, t.minY], [i.minX, i.minY]);
      return { points: d, point: c };
    });
    l(this, "getBounds", (e) => {
      let t = !this.pointsBoundsCache.has(e.points),
        n = this.pointCache[e.id] !== e.point;
      if (t) {
        let o = Qe.Utils.getBoundsFromPoints(e.points);
        this.pointsBoundsCache.set(e.points, o),
          this.shapeBoundsCache.set(e.id, Qe.Utils.translateBounds(o, e.point)),
          (this.pointCache[e.id] = e.point);
      } else
        n &&
          !t &&
          ((this.pointCache[e.id] = e.point),
          this.shapeBoundsCache.set(
            e.id,
            Qe.Utils.translateBounds(
              this.pointsBoundsCache.get(e.points),
              e.point
            )
          ));
      return this.shapeBoundsCache.get(e.id);
    });
    l(
      this,
      "shouldRender",
      (e, t) =>
        t.points !== e.points ||
        t.style !== e.style ||
        t.isComplete !== e.isComplete
    );
    l(this, "hitTestPoint", (e, t) => {
      let n = Cn.Vec.sub(t, e.point);
      return Qe.Utils.pointInPolyline(n, e.points);
    });
    l(this, "hitTestLineSegment", (e, t, n) => {
      let { points: o, point: s } = e,
        a = Cn.Vec.sub(t, s),
        d = Cn.Vec.sub(n, s),
        i = this.getBounds(e);
      if (i.width < 8 && i.height < 8)
        return (
          Cn.Vec.distanceToLineSegment(t, n, Qe.Utils.getBoundsCenter(i)) < 5
        );
      if ((0, Gn.intersectLineSegmentBounds)(a, d, i)) {
        for (let c = 1; c < o.length; c++)
          if (
            (0, Gn.intersectLineSegmentLineSegment)(o[c - 1], o[c], a, d)
              .didIntersect
          )
            return !0;
      }
      return !1;
    });
    l(this, "hitTestBounds", (e, t) => {
      if (!e.rotation) {
        let s = this.getBounds(e);
        return (
          Qe.Utils.boundsContain(t, s) ||
          ((Qe.Utils.boundsContain(s, t) ||
            (0, Gn.intersectBoundsBounds)(s, t).length > 0) &&
            (0, Gn.intersectBoundsPolyline)(
              Qe.Utils.translateBounds(t, Cn.Vec.neg(e.point)),
              e.points
            ).length > 0)
        );
      }
      let n = this.getRotatedBounds(e),
        o = Qe.Utils.getFromCache(this.rotatedCache, e, () => {
          let s = Qe.Utils.getBoundsCenter(
            Qe.Utils.getBoundsFromPoints(e.points)
          );
          return e.points.map((a) => Cn.Vec.rotWith(a, s, e.rotation || 0));
        });
      return (
        Qe.Utils.boundsContain(t, n) ||
        (0, Gn.intersectBoundsPolyline)(
          Qe.Utils.translateBounds(t, Cn.Vec.neg(e.point)),
          o
        ).length > 0
      );
    });
  }
};
var qt = require("@tldraw/core"),
  so = require("@tldraw/intersect"),
  It = require("@tldraw/vec"),
  Dn = V(require("react"));
var qi = require("@tldraw/core"),
  ro = V(require("react"));
var lc = ro.memo(function ({
  radius: e,
  style: t,
  isSelected: n,
  isDarkMode: o,
}) {
  let { stroke: s, strokeWidth: a, fill: d } = Te(t, o),
    i = 1 + a * 1.618,
    c = Math.max(0, e[0] - i / 2),
    u = Math.max(0, e[1] - i / 2),
    p = qi.Utils.perimeterOfEllipse(c, u),
    { strokeDasharray: m, strokeDashoffset: h } = qi.Utils.getPerfectDashProps(
      p < 64 ? p * 2 : p,
      a * 1.618,
      t.dash,
      4
    );
  return ro.createElement(
    ro.Fragment,
    null,
    ro.createElement("ellipse", {
      className: t.isFilled || n ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      cx: e[0],
      cy: e[1],
      rx: e[0],
      ry: e[1],
    }),
    ro.createElement("ellipse", {
      cx: e[0],
      cy: e[1],
      rx: c,
      ry: u,
      fill: d,
      stroke: s,
      strokeWidth: i,
      strokeDasharray: m,
      strokeDashoffset: h,
      pointerEvents: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
});
var Vn = V(require("react"));
var wo = require("@tldraw/core"),
  Bs = require("perfect-freehand");
function dc(r, e, t) {
  let { strokeWidth: n } = Te(t),
    o = wo.Utils.rng(r),
    s = e[0] + o() * n * 2,
    a = e[1] + o() * n * 2,
    d = wo.Utils.perimeterOfEllipse(s, a),
    i = [],
    c = Math.PI + Math.PI * o(),
    u = Math.abs(o()),
    p = Math.max(16, d / 10);
  for (let m = 0; m < p; m++) {
    let h = bo.easeInOutSine(m / (p + 1)),
      g = c * 2 + Math.PI * (2 + u) * h,
      f = Math.cos(g),
      T = Math.sin(g);
    i.push([s * f + e[0], a * T + e[1], h + 0.5 + o() / 2]);
  }
  return (0, Bs.getStrokePoints)(i, {
    size: 1 + n * 2,
    thinning: 0.618,
    end: { taper: d / 8 },
    start: { taper: d / 12 },
    streamline: 0,
    simulatePressure: !0,
  });
}
function cc(r, e, t) {
  let { strokeWidth: n } = Te(t),
    o = wo.Utils.rng(r),
    s = e[0] + o() * n * 2,
    a = e[1] + o() * n * 2,
    d = wo.Utils.perimeterOfEllipse(s, a);
  return wo.Utils.getSvgPathFromStroke(
    (0, Bs.getStrokeOutlinePoints)(dc(r, e, t), {
      size: 2 + n * 2,
      thinning: 0.618,
      end: { taper: d / 8 },
      start: { taper: d / 12 },
      streamline: 0,
      simulatePressure: !0,
    })
  );
}
function Es(r, e, t) {
  return wo.Utils.getSvgPathFromStrokePoints(dc(r, e, t));
}
var pc = Vn.memo(function ({
  id: e,
  radius: t,
  style: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = Te(n, s),
    c = cc(e, t, n);
  return Vn.createElement(
    Vn.Fragment,
    null,
    Vn.createElement("ellipse", {
      className: n.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      cx: t[0],
      cy: t[1],
      rx: t[0],
      ry: t[1],
    }),
    n.isFilled &&
      Vn.createElement("path", {
        d: Es(e, t, n),
        stroke: "none",
        fill: i,
        pointerEvents: "none",
      }),
    Vn.createElement("path", {
      d: c,
      fill: a,
      stroke: a,
      strokeWidth: d,
      pointerEvents: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    })
  );
});
var Ji = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "ellipse");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "canEdit", !0);
      l(this, "getShape", (e) =>
        qt.Utils.deepMerge(
          {
            id: "id",
            type: "ellipse",
            name: "Ellipse",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            radius: [1, 1],
            rotation: 0,
            style: gt,
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              isGhost: t,
              isSelected: n,
              isBinding: o,
              isEditing: s,
              meta: a,
              bounds: d,
              events: i,
              onShapeChange: c,
              onShapeBlur: u,
            },
            p
          ) => {
            let {
                id: m,
                radius: h,
                style: g,
                label: f = "",
                labelPoint: T = No,
              } = e,
              x = Mt(e.style),
              b = Te(g, a.isDarkMode),
              y = b.strokeWidth,
              R = 1 + y * 1.618,
              K = Math.max(0, h[0] - R / 2),
              L = Math.max(0, h[1] - R / 2),
              v = g.dash === "draw" ? pc : lc,
              I = Dn.useCallback(
                (J) => (c == null ? void 0 : c({ id: m, label: J })),
                [c]
              );
            return Dn.createElement(
              cde,
              S({ ref: p }, i),
              Dn.createElement(to, {
                isEditing: s,
                onChange: I,
                onBlur: u,
                font: x,
                text: f,
                color: b.stroke,
                offsetX: (T[0] - 0.5) * d.width,
                offsetY: (T[1] - 0.5) * d.height,
              }),
              Dn.createElement(
                qt.SVGContainer,
                { id: e.id + "_svg", opacity: t ? 0.3 : 1 },
                o &&
                  Dn.createElement("ellipse", {
                    className: "tl-binding-indicator",
                    cx: h[0],
                    cy: h[1],
                    rx: K,
                    ry: L,
                    strokeWidth: this.bindingDistance,
                  }),
                Dn.createElement(v, {
                  id: m,
                  radius: h,
                  style: g,
                  isSelected: n,
                  isDarkMode: a.isDarkMode,
                })
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let { id: t, radius: n, style: o } = e,
            a = Te(o).strokeWidth,
            d = 1 + a * 1.618,
            i = Math.max(0, n[0] - d / 2),
            c = Math.max(0, n[1] - d / 2);
          return o.dash === "draw"
            ? Dn.createElement("path", { d: Es(t, n, o) })
            : Dn.createElement("ellipse", { cx: n[0], cy: n[1], rx: i, ry: c });
        })
      );
      l(
        this,
        "hitTestPoint",
        (e, t) =>
          qt.Utils.pointInBounds(t, this.getRotatedBounds(e)) &&
          qt.Utils.pointInEllipse(
            t,
            this.getCenter(e),
            e.radius[0],
            e.radius[1],
            e.rotation || 0
          )
      );
      l(
        this,
        "hitTestLineSegment",
        (e, t, n) =>
          (0, so.intersectLineSegmentEllipse)(
            t,
            n,
            this.getCenter(e),
            e.radius[0],
            e.radius[1],
            e.rotation || 0
          ).didIntersect
      );
      l(this, "getBounds", (e) =>
        qt.Utils.getFromCache(this.boundsCache, e, () =>
          qt.Utils.getRotatedEllipseBounds(
            e.point[0],
            e.point[1],
            e.radius[0],
            e.radius[1],
            0
          )
        )
      );
      l(this, "getRotatedBounds", (e) =>
        qt.Utils.getRotatedEllipseBounds(
          e.point[0],
          e.point[1],
          e.radius[0],
          e.radius[1],
          e.rotation
        )
      );
      l(this, "hitTestBounds", (e, t) => {
        let n = this.getBounds(e);
        return (
          qt.Utils.boundsContained(n, t) ||
          (0, so.intersectEllipseBounds)(
            this.getCenter(e),
            e.radius[0],
            e.radius[1],
            e.rotation || 0,
            t
          ).length > 0
        );
      });
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.radius !== e.radius || t.style !== e.style || t.label !== e.label
      );
      l(this, "getCenter", (e) => It.Vec.add(e.point, e.radius));
      l(this, "getBindingPoint", (e, t, n, o, s, a) => {
        {
          let d = this.getExpandedBounds(e),
            i = this.getCenter(e),
            c,
            u;
          if (
            !qt.Utils.pointInEllipse(
              n,
              i,
              e.radius[0] + this.bindingDistance,
              e.radius[1] + this.bindingDistance
            )
          )
            return;
          if (a)
            It.Vec.dist(n, this.getCenter(e)) < 12
              ? (c = [0.5, 0.5])
              : (c = It.Vec.divV(It.Vec.sub(n, [d.minX, d.minY]), [
                  d.width,
                  d.height,
                ])),
              (u = 0);
          else {
            let p = (0, so.intersectRayEllipse)(
              o,
              s,
              i,
              e.radius[0],
              e.radius[1],
              e.rotation || 0
            ).points.sort((h, g) => It.Vec.dist(h, o) - It.Vec.dist(g, o))[0];
            if (
              (p ||
                (p = (0, so.intersectLineSegmentEllipse)(
                  n,
                  i,
                  i,
                  e.radius[0],
                  e.radius[1],
                  e.rotation || 0
                ).points.sort(
                  (h, g) => It.Vec.dist(h, n) - It.Vec.dist(g, n)
                )[0]),
              !p)
            )
              return;
            let m = It.Vec.med(n, p);
            if (
              (It.Vec.distanceToLineSegment(n, m, this.getCenter(e)) < 12
                ? (c = [0.5, 0.5])
                : (c = It.Vec.divV(It.Vec.sub(m, [d.minX, d.minY]), [
                    d.width,
                    d.height,
                  ])),
              qt.Utils.pointInEllipse(
                n,
                i,
                e.radius[0],
                e.radius[1],
                e.rotation || 0
              ))
            )
              u = this.bindingDistance / 2;
            else {
              let h = (0, so.intersectLineSegmentEllipse)(
                n,
                i,
                i,
                e.radius[0],
                e.radius[1],
                e.rotation || 0
              ).points[0];
              if (!h) return;
              u = Math.max(this.bindingDistance / 2, It.Vec.dist(n, h));
            }
          }
          return { point: c, distance: u };
        }
      });
      l(
        this,
        "transform",
        (e, t, { scaleX: n, scaleY: o, initialShape: s }) => {
          let { rotation: a = 0 } = s;
          return {
            point: [t.minX, t.minY],
            radius: [t.width / 2, t.height / 2],
            rotation:
              (n < 0 && o >= 0) || (o < 0 && n >= 0) ? -(a || 0) : a || 0,
          };
        }
      );
      l(this, "transformSingle", (e, t) => ({
        point: It.Vec.toFixed([t.minX, t.minY]),
        radius: It.Vec.div([t.width, t.height], 2),
      }));
    }
  },
  cde = H("div", { width: "100%", height: "100%" });
var Rs = require("@tldraw/core"),
  $n = V(require("react"));
var Qi = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "group");
      l(this, "canBind", !0);
      l(this, "getShape", (e) =>
        Rs.Utils.deepMerge(
          {
            id: "id",
            type: "group",
            name: "Group",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [100, 100],
            rotation: 0,
            children: [],
            style: gt,
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              isBinding: t,
              isGhost: n,
              isHovered: o,
              isSelected: s,
              events: a,
            },
            d
          ) => {
            let { id: i, size: c } = e,
              u = 2,
              p = Math.max(0, c[0] - u / 2),
              m = Math.max(0, c[1] - u / 2),
              g = [
                [[u / 2, u / 2], [p, u / 2], p - u / 2],
                [[p, u / 2], [p, m], m - u / 2],
                [[p, m], [u / 2, m], p - u / 2],
                [[u / 2, m], [u / 2, u / 2], m - u / 2],
              ].map(([f, T], x) =>
                $n.createElement("line", {
                  key: i + "_" + x,
                  x1: f[0],
                  y1: f[1],
                  x2: T[0],
                  y2: T[1],
                })
              );
            return $n.createElement(
              Rs.SVGContainer,
              S({ ref: d }, a),
              t &&
                $n.createElement("rect", {
                  className: "tl-binding-indicator",
                  strokeWidth: this.bindingDistance,
                }),
              $n.createElement(
                "g",
                { opacity: n ? 0.3 : 1 },
                $n.createElement("rect", {
                  x: 0,
                  y: 0,
                  width: c[0],
                  height: c[1],
                  fill: "transparent",
                  pointerEvents: "all",
                }),
                $n.createElement(
                  uc,
                  {
                    stroke: "black",
                    opacity: o || s ? 1 : 0,
                    strokeLinecap: "round",
                    pointerEvents: "stroke",
                  },
                  g
                )
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let { id: t, size: n } = e,
            o = 2,
            s = Math.max(0, n[0] - o / 2),
            a = Math.max(0, n[1] - o / 2),
            i = [
              [[o / 2, o / 2], [s, o / 2], s - o / 2],
              [[s, o / 2], [s, a], a - o / 2],
              [[s, a], [o / 2, a], s - o / 2],
              [[o / 2, a], [o / 2, o / 2], a - o / 2],
            ].map(([c, u], p) =>
              $n.createElement("line", {
                key: t + "_" + p,
                x1: c[0],
                y1: c[1],
                x2: u[0],
                y2: u[1],
              })
            );
          return $n.createElement(
            uc,
            { strokeLinecap: "round", pointerEvents: "stroke" },
            i
          );
        })
      );
      l(this, "getBounds", (e) => Zt(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) => t.size !== e.size || t.style !== e.style
      );
    }
  },
  uc = H("g", {
    strokeWidth: "calc(1.5px * var(--tl-scale))",
    strokeDasharray: "calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))",
  });
var ea = require("@stitches/react"),
  As = require("@tldraw/core"),
  ln = V(require("react"));
var ta = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "image");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "isAspectRatioLocked", !0);
      l(this, "showCloneHandles", !1);
      l(this, "getShape", (e) =>
        As.Utils.deepMerge(
          {
            id: "image",
            type: "image",
            name: "Image",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: w(S({}, gt), { isFilled: !0 }),
            assetId: "assetId",
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              asset: t = { src: "" },
              isBinding: n,
              isGhost: o,
              meta: s,
              events: a,
              onShapeChange: d,
            },
            i
          ) => {
            let { size: c, style: u } = e,
              { bindingDistance: p } = this,
              m = ln.useRef(null),
              h = ln.useRef(null);
            return (
              ln.useLayoutEffect(() => {
                let g = h.current;
                if (!g) return;
                let [f, T] = c;
                (g.style.width = `${f}px`), (g.style.height = `${T}px`);
              }, [c]),
              ln.createElement(
                As.HTMLContainer,
                S({ ref: i }, a),
                n &&
                  ln.createElement("div", {
                    className: "tl-binding-indicator",
                    style: {
                      position: "absolute",
                      top: `calc(${-p}px * var(--tl-zoom))`,
                      left: `calc(${-p}px * var(--tl-zoom))`,
                      width: `calc(100% + ${p * 2}px * var(--tl-zoom))`,
                      height: `calc(100% + ${p * 2}px * var(--tl-zoom))`,
                      backgroundColor: "var(--tl-selectFill)",
                    },
                  }),
                ln.createElement(
                  pde,
                  {
                    ref: h,
                    isDarkMode: s.isDarkMode,
                    isFilled: u.isFilled,
                    isGhost: o,
                  },
                  ln.createElement(ude, {
                    id: e.id + "_image",
                    ref: m,
                    src: t.src,
                    alt: "tl_image_asset",
                    draggable: !1,
                  })
                )
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let {
            size: [t, n],
          } = e;
          return ln.createElement("rect", {
            x: 0,
            y: 0,
            rx: 2,
            ry: 2,
            width: Math.max(1, t),
            height: Math.max(1, n),
          });
        })
      );
      l(this, "getBounds", (e) => Zt(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) => t.size !== e.size || t.style !== e.style
      );
      l(this, "transform", no);
      l(this, "transformSingle", oo);
      l(this, "getSvgElement", (e) => {
        let t = this.getBounds(e),
          n = document.createElementNS("http://www.w3.org/2000/svg", "image");
        return (
          n.setAttribute("width", `${t.width}`),
          n.setAttribute("height", `${t.height}`),
          n.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
          n
        );
      });
    }
  },
  pde = (0, ea.styled)("div", {
    pointerEvents: "all",
    position: "relative",
    fontFamily: "sans-serif",
    fontSize: "2em",
    height: "100%",
    width: "100%",
    borderRadius: "3px",
    perspective: "800px",
    overflow: "hidden",
    p: { userSelect: "none" },
    img: { userSelect: "none" },
    variants: {
      isGhost: {
        false: { opacity: 1 },
        true: { transition: "opacity .2s", opacity: 0.3 },
      },
      isFilled: { true: {}, false: {} },
      isDarkMode: { true: {}, false: {} },
    },
    compoundVariants: [
      {
        isFilled: !0,
        isDarkMode: !0,
        css: {
          boxShadow:
            "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)",
        },
      },
      {
        isFilled: !0,
        isDarkMode: !1,
        css: {
          boxShadow:
            "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)",
        },
      },
    ],
  }),
  ude = (0, ea.styled)("img", {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    pointerEvents: "none",
    objectFit: "cover",
    userSelect: "none",
    borderRadius: 2,
  });
var zs = require("@tldraw/core"),
  Mn = V(require("react"));
var hc = V(require("react"));
function mc({ strokeWidth: r, size: e }) {
  return hc.createElement("rect", {
    className: "tl-binding-indicator",
    x: r,
    y: r,
    width: Math.max(0, e[0] - r / 2),
    height: Math.max(0, e[1] - r / 2),
    strokeWidth: 16 * 2,
  });
}
var gc = require("@tldraw/core"),
  Pn = V(require("react"));
var fc = Pn.memo(function ({
  id: e,
  style: t,
  size: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = Te(t, s),
    c = 1 + d * 1.618,
    u = Math.max(0, n[0] - c / 2),
    p = Math.max(0, n[1] - c / 2),
    h = [
      [[c / 2, c / 2], [u, c / 2], u - c / 2],
      [[u, c / 2], [u, p], p - c / 2],
      [[u, p], [c / 2, p], u - c / 2],
      [[c / 2, p], [c / 2, c / 2], p - c / 2],
    ].map(([g, f, T], x) => {
      let { strokeDasharray: b, strokeDashoffset: y } =
        gc.Utils.getPerfectDashProps(T, d * 1.618, t.dash);
      return Pn.createElement("line", {
        key: e + "_" + x,
        x1: g[0],
        y1: g[1],
        x2: f[0],
        y2: f[1],
        strokeDasharray: b,
        strokeDashoffset: y,
      });
    });
  return Pn.createElement(
    Pn.Fragment,
    null,
    Pn.createElement("rect", {
      className: o || t.isFilled ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      x: c / 2,
      y: c / 2,
      width: u,
      height: p,
      strokeWidth: 16,
    }),
    t.isFilled &&
      Pn.createElement("rect", {
        x: c / 2,
        y: c / 2,
        width: u,
        height: p,
        fill: i,
        pointerEvents: "none",
      }),
    Pn.createElement(
      "g",
      {
        pointerEvents: "none",
        stroke: a,
        strokeWidth: c,
        strokeLinecap: "round",
      },
      h
    )
  );
});
var Nn = V(require("react"));
var Cr = require("@tldraw/core"),
  kt = V(require("@tldraw/vec")),
  Ls = V(require("perfect-freehand"));
function hde(r, e, t) {
  let n = Te(e),
    o = Cr.Utils.rng(r),
    s = n.strokeWidth,
    a = Math.max(0, t[0]),
    d = Math.max(0, t[1]),
    i = Array.from(Array(4)).map(() => [o() * s * 0.75, o() * s * 0.75]),
    c = kt.default.add([s / 2, s / 2], i[0]),
    u = kt.default.add([a - s / 2, s / 2], i[1]),
    p = kt.default.add([a - s / 2, d - s / 2], i[2]),
    m = kt.default.add([s / 2, d - s / 2], i[3]),
    h = Math.round(Math.abs(o() * 2 * 4)),
    g = Math.min(a / 4, s * 2),
    f = Math.min(d / 4, s * 2),
    T = Math.max(8, Math.floor(a / 16)),
    x = Math.max(8, Math.floor(d / 16)),
    b = Cr.Utils.rotateArray(
      [
        kt.default.pointsBetween(
          kt.default.add(c, [g, 0]),
          kt.default.sub(u, [g, 0]),
          T
        ),
        kt.default.pointsBetween(
          kt.default.add(u, [0, f]),
          kt.default.sub(p, [0, f]),
          x
        ),
        kt.default.pointsBetween(
          kt.default.sub(p, [g, 0]),
          kt.default.add(m, [g, 0]),
          T
        ),
        kt.default.pointsBetween(
          kt.default.sub(m, [0, f]),
          kt.default.add(c, [0, f]),
          x
        ),
      ],
      h
    );
  return {
    points: [...b.flat(), ...b[0]].slice(
      5,
      Math.floor((h % 2 === 0 ? T : x) / -2) + 3
    ),
  };
}
function Sc(r, e, t) {
  let { points: n } = hde(r, e, t),
    { strokeWidth: o } = Te(e);
  return {
    points: n,
    options: {
      size: o,
      thinning: 0.65,
      streamline: 0.3,
      smoothing: 1,
      simulatePressure: !1,
      last: !0,
    },
  };
}
function bc(r, e, t) {
  let { points: n, options: o } = Sc(r, e, t),
    s = (0, Ls.default)(n, o);
  return Cr.Utils.getSvgPathFromStroke(s);
}
function Hs(r, e, t) {
  let { points: n, options: o } = Sc(r, e, t);
  return Cr.Utils.getSvgPathFromStrokePoints((0, Ls.getStrokePoints)(n, o));
}
var Tc = Nn.memo(function ({
  id: e,
  style: t,
  size: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { isFilled: a } = t,
    { stroke: d, strokeWidth: i, fill: c } = Te(t, s),
    u = bc(e, t, n),
    p = Hs(e, t, n);
  return Nn.createElement(
    Nn.Fragment,
    null,
    Nn.createElement("path", {
      className: t.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      d: p,
    }),
    a && Nn.createElement("path", { d: p, fill: c, pointerEvents: "none" }),
    Nn.createElement("path", {
      d: u,
      fill: d,
      stroke: d,
      strokeWidth: i,
      pointerEvents: "none",
    })
  );
});
var na = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "rectangle");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "canEdit", !0);
      l(this, "getShape", (e) =>
        zs.Utils.deepMerge(
          {
            id: "id",
            type: "rectangle",
            name: "Rectangle",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: gt,
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              isEditing: t,
              isBinding: n,
              isSelected: o,
              isGhost: s,
              meta: a,
              bounds: d,
              events: i,
              onShapeBlur: c,
              onShapeChange: u,
            },
            p
          ) => {
            let {
                id: m,
                size: h,
                style: g,
                label: f = "",
                labelPoint: T = No,
              } = e,
              x = Mt(g),
              b = Te(g, a.isDarkMode),
              y = g.dash === "draw" ? Tc : fc,
              R = Mn.useCallback(
                (K) => (u == null ? void 0 : u({ id: m, label: K })),
                [u]
              );
            return Mn.createElement(
              mde,
              S({ ref: p }, i),
              Mn.createElement(to, {
                isEditing: t,
                onChange: R,
                onBlur: c,
                font: x,
                text: f,
                color: b.stroke,
                offsetX: (T[0] - 0.5) * d.width,
                offsetY: (T[1] - 0.5) * d.height,
              }),
              Mn.createElement(
                zs.SVGContainer,
                { id: e.id + "_svg", opacity: s ? 0.3 : 1 },
                n &&
                  Mn.createElement(mc, { strokeWidth: b.strokeWidth, size: h }),
                Mn.createElement(y, {
                  id: m,
                  style: g,
                  size: h,
                  isSelected: o,
                  isDarkMode: a.isDarkMode,
                })
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let { id: t, style: n, size: o } = e,
            a = Te(n, !1).strokeWidth;
          return n.dash === "draw"
            ? Mn.createElement("path", { d: Hs(t, n, o) })
            : Mn.createElement("rect", {
                x: a,
                y: a,
                rx: 1,
                ry: 1,
                width: Math.max(1, o[0] - a * 2),
                height: Math.max(1, o[1] - a * 2),
              });
        })
      );
      l(this, "getBounds", (e) => Zt(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.size !== e.size || t.style !== e.style || t.label !== e.label
      );
      l(this, "transform", no);
      l(this, "transformSingle", oo);
    }
  },
  mde = H("div", { width: "100%", height: "100%" });
var Os = require("@tldraw/core"),
  yc = require("@tldraw/vec"),
  et = V(require("react"));
var ra = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "sticky");
      l(this, "canBind", !0);
      l(this, "canEdit", !0);
      l(this, "canClone", !0);
      l(this, "hideResizeHandles", !0);
      l(this, "showCloneHandles", !0);
      l(this, "getShape", (e) =>
        Os.Utils.deepMerge(
          {
            id: "id",
            type: "sticky",
            name: "Sticky",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [200, 200],
            text: "",
            rotation: 0,
            style: Ko,
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              meta: t,
              events: n,
              isGhost: o,
              isBinding: s,
              isEditing: a,
              onShapeBlur: d,
              onShapeChange: i,
            },
            c
          ) => {
            let u = Nd(e.style),
              { color: p, fill: m } = Ni(e.style, t.isDarkMode),
              h = et.useRef(null),
              g = et.useRef(null),
              f = et.useRef(null),
              T = et.useRef(!1),
              x = et.useCallback((I) => {
                I.stopPropagation();
              }, []),
              b = et.useCallback(
                (I) => {
                  i == null ||
                    i({ id: e.id, type: e.type, text: k.normalizeText(I) });
                },
                [e.id]
              ),
              y = et.useCallback(
                (I) => {
                  b(I.currentTarget.value);
                },
                [i, b]
              ),
              R = et.useCallback(
                (I) => {
                  if (I.key === "Escape") {
                    I.preventDefault(), I.stopPropagation(), d == null || d();
                    return;
                  }
                  if (I.key === "Tab" && e.text.length === 0) {
                    I.preventDefault();
                    return;
                  }
                  if (!(I.key === "Meta" || I.metaKey)) I.stopPropagation();
                  else if (I.key === "z" && I.metaKey) {
                    I.shiftKey
                      ? document.execCommand("redo", !1)
                      : document.execCommand("undo", !1),
                      I.stopPropagation(),
                      I.preventDefault();
                    return;
                  }
                  (I.metaKey || I.ctrlKey) &&
                    I.key === "=" &&
                    I.preventDefault(),
                    I.key === "Tab" &&
                      (I.preventDefault(),
                      I.shiftKey
                        ? ct.unindent(I.currentTarget)
                        : ct.indent(I.currentTarget),
                      i == null ||
                        i(
                          w(S({}, e), {
                            text: k.normalizeText(I.currentTarget.value),
                          })
                        ));
                },
                [e, i]
              ),
              K = et.useCallback((I) => {
                I.currentTarget.setSelectionRange(0, 0), d == null || d();
              }, []),
              L = et.useCallback(
                (I) => {
                  !a || !T.current || I.currentTarget.select();
                },
                [a]
              );
            et.useEffect(() => {
              if (a) {
                T.current = !0;
                let I = g.current;
                I.focus(), I.select();
              }
            }, [a]),
              et.useEffect(() => {
                let I = f.current,
                  { size: J } = e,
                  { offsetHeight: ce } = I,
                  de = oa - Bn * 2,
                  He = J[1] - Bn * 2;
                if (ce === He) return;
                if (ce > de) {
                  i == null || i({ id: e.id, size: [J[0], ce + Bn * 2] });
                  return;
                }
                if (ce < de && J[1] > oa) {
                  i == null || i({ id: e.id, size: [J[0], oa] });
                  return;
                }
                let Pe = g.current;
                Pe == null || Pe.focus();
              }, [e.text, e.size[1], e.style]);
            let v = {
              font: u,
              color: p,
              textShadow: t.isDarkMode
                ? "0.5px 0.5px 2px rgba(255, 255, 255,.25)"
                : "0.5px 0.5px 2px rgba(255, 255, 255,.5)",
            };
            return et.createElement(
              Os.HTMLContainer,
              S({ ref: c }, n),
              et.createElement(
                gde,
                {
                  ref: h,
                  isDarkMode: t.isDarkMode,
                  isGhost: o,
                  style: S({ backgroundColor: m }, v),
                },
                s &&
                  et.createElement("div", {
                    className: "tl-binding-indicator",
                    style: {
                      position: "absolute",
                      top: -this.bindingDistance,
                      left: -this.bindingDistance,
                      width: `calc(100% + ${this.bindingDistance * 2}px)`,
                      height: `calc(100% + ${this.bindingDistance * 2}px)`,
                      backgroundColor: "var(--tl-selectFill)",
                    },
                  }),
                et.createElement(
                  fde,
                  { ref: f, isEditing: a, alignment: e.style.textAlign },
                  e.text,
                  "\u200B"
                ),
                a &&
                  et.createElement(Sde, {
                    ref: g,
                    onPointerDown: x,
                    value: e.text,
                    onChange: y,
                    onKeyDown: R,
                    onFocus: L,
                    onBlur: K,
                    tabIndex: -1,
                    autoComplete: "false",
                    autoCapitalize: "false",
                    autoCorrect: "false",
                    autoSave: "false",
                    autoFocus: !0,
                    spellCheck: !0,
                    alignment: e.style.textAlign,
                    onContextMenu: xt,
                    onCopy: xt,
                    onPaste: xt,
                    onCut: xt,
                  })
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let {
            size: [t, n],
          } = e;
          return et.createElement("rect", {
            x: 0,
            y: 0,
            rx: 3,
            ry: 3,
            width: Math.max(1, t),
            height: Math.max(1, n),
          });
        })
      );
      l(this, "getBounds", (e) => Zt(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) => t.size !== e.size || t.style !== e.style || t.text !== e.text
      );
      l(
        this,
        "transform",
        (e, t, { scaleX: n, scaleY: o, transformOrigin: s }) => ({
          point: yc.Vec.toFixed([
            t.minX + (t.width - e.size[0]) * (n < 0 ? 1 - s[0] : s[0]),
            t.minY + (t.height - e.size[1]) * (o < 0 ? 1 - s[1] : s[1]),
          ]),
        })
      );
      l(this, "transformSingle", (e) => e);
      l(this, "getSvgElement", (e, t) => {
        var p, m;
        let n = this.getBounds(e),
          o = Ni(e.style, t),
          s = $i(e.style.size) * ((p = e.style.scale) != null ? p : 1),
          a = wn(e.style.font).slice(1, -1),
          d = (m = e.style.textAlign) != null ? m : "start",
          i = eo(e.text, s, a, d, n.width - Bn * 2, !0);
        i.setAttribute("fill", o.color),
          i.setAttribute("transform", `translate(${Bn}, ${Bn})`);
        let c = document.createElementNS("http://www.w3.org/2000/svg", "g"),
          u = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        return (
          u.setAttribute("width", n.width + ""),
          u.setAttribute("height", n.height + ""),
          u.setAttribute("fill", o.fill),
          u.setAttribute("rx", "3"),
          u.setAttribute("ry", "3"),
          c.appendChild(u),
          c.appendChild(i),
          c
        );
      });
    }
  },
  Bn = 16,
  oa = 200,
  gde = H("div", {
    pointerEvents: "all",
    position: "relative",
    backgroundColor: "rgba(255, 220, 100)",
    fontFamily: "sans-serif",
    height: "100%",
    width: "100%",
    padding: Bn + "px",
    borderRadius: "3px",
    perspective: "800px",
    variants: {
      isGhost: {
        false: { opacity: 1 },
        true: { transition: "opacity .2s", opacity: 0.3 },
      },
      isDarkMode: {
        true: {
          boxShadow:
            "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)",
        },
        false: {
          boxShadow:
            "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)",
        },
      },
    },
  }),
  xc = {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    letterSpacing: Yt,
  },
  fde = H(
    "div",
    S(
      {
        position: "absolute",
        top: Bn,
        left: Bn,
        width: `calc(100% - ${Bn * 2}px)`,
        height: "fit-content",
        font: "inherit",
        pointerEvents: "none",
        userSelect: "none",
        variants: {
          isEditing: { true: { opacity: 1 }, false: { opacity: 1 } },
          alignment: {
            ["start"]: { textAlign: "left" },
            ["middle"]: { textAlign: "center" },
            ["end"]: { textAlign: "right" },
            ["justify"]: { textAlign: "justify" },
          },
        },
      },
      xc
    )
  ),
  Sde = H(
    "textarea",
    w(
      S(
        {
          width: "100%",
          height: "100%",
          border: "none",
          overflow: "hidden",
          background: "none",
          outline: "none",
          textAlign: "left",
          font: "inherit",
          padding: 0,
          color: "transparent",
          verticalAlign: "top",
          resize: "none",
          caretColor: "black",
        },
        xc
      ),
      {
        variants: {
          alignment: {
            ["start"]: { textAlign: "left" },
            ["middle"]: { textAlign: "center" },
            ["end"]: { textAlign: "right" },
            ["justify"]: { textAlign: "justify" },
          },
        },
        "&:focus": { outline: "none", border: "none" },
      }
    )
  );
var qo = require("@tldraw/core"),
  Wn = require("@tldraw/vec"),
  tt = V(require("react"));
var sa = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "text");
      l(this, "isAspectRatioLocked", !0);
      l(this, "canEdit", !0);
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "bindingDistance", 16 / 2);
      l(this, "getShape", (e) =>
        qo.Utils.deepMerge(
          {
            id: "id",
            type: "text",
            name: "Text",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            rotation: 0,
            text: " ",
            style: Ko,
          },
          e
        )
      );
      l(this, "texts", new Map());
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              isBinding: t,
              isGhost: n,
              isEditing: o,
              onShapeBlur: s,
              onShapeChange: a,
              meta: d,
              events: i,
            },
            c
          ) => {
            let { text: u, style: p } = e,
              m = Te(p, d.isDarkMode),
              h = Mt(e.style),
              g = tt.useRef(null),
              f = tt.useRef(!1),
              T = tt.useRef(u);
            tt.useLayoutEffect(() => {
              if (u !== T.current) {
                let v = [0, 0];
                this.texts.set(e.id, u);
                let I = this.getBounds(e),
                  J = this.getBounds(e);
                switch (e.style.textAlign) {
                  case "start":
                    break;
                  case "middle": {
                    v = Wn.Vec.div([J.width - I.width, 0], 2);
                    break;
                  }
                  case "end": {
                    v = [J.width - I.width, 0];
                    break;
                  }
                }
                (T.current = u),
                  a == null ||
                    a(
                      w(S({}, e), {
                        id: e.id,
                        point: Wn.Vec.sub(e.point, v),
                        text: u,
                      })
                    );
              }
            }, [u]);
            let x = tt.useCallback(
                (v) => {
                  let I = [0, 0],
                    J = k.normalizeText(v.currentTarget.value),
                    ce = this.getBounds(e);
                  this.texts.set(e.id, J);
                  let de = this.getBounds(w(S({}, e), { text: J }));
                  switch (e.style.textAlign) {
                    case "start":
                      break;
                    case "middle": {
                      I = Wn.Vec.div([de.width - ce.width, 0], 2);
                      break;
                    }
                    case "end": {
                      I = [de.width - ce.width, 0];
                      break;
                    }
                  }
                  (T.current = J),
                    a == null ||
                      a(
                        w(S({}, e), {
                          id: e.id,
                          point: Wn.Vec.sub(e.point, I),
                          text: J,
                        })
                      );
                },
                [e.id, e.point]
              ),
              b = tt.useCallback(
                (v) => {
                  if (v.key === "Escape") {
                    v.preventDefault(), v.stopPropagation(), s == null || s();
                    return;
                  }
                  if (v.key === "Tab" && e.text.length === 0) {
                    v.preventDefault();
                    return;
                  }
                  if (v.key === "Enter" && (v.metaKey || v.ctrlKey)) {
                    v.preventDefault(), v.stopPropagation(), g.current.blur();
                    return;
                  }
                  if (!(v.key === "Meta" || v.metaKey)) v.stopPropagation();
                  else if (v.key === "z" && v.metaKey) {
                    v.shiftKey
                      ? document.execCommand("redo", !1)
                      : document.execCommand("undo", !1),
                      v.stopPropagation(),
                      v.preventDefault();
                    return;
                  }
                  (v.metaKey || v.ctrlKey) &&
                    v.key === "=" &&
                    v.preventDefault(),
                    v.key === "Tab" &&
                      (v.preventDefault(),
                      v.shiftKey
                        ? ct.unindent(v.currentTarget)
                        : ct.indent(v.currentTarget),
                      a == null ||
                        a(
                          w(S({}, e), {
                            text: k.normalizeText(v.currentTarget.value),
                          })
                        ));
                },
                [e, a]
              ),
              y = tt.useCallback((v) => {
                v.currentTarget.setSelectionRange(0, 0), s == null || s();
              }, []),
              R = tt.useCallback(
                (v) => {
                  !o ||
                    !f.current ||
                    (document.activeElement === v.currentTarget &&
                      v.currentTarget.select());
                },
                [o]
              ),
              K = tt.useCallback(
                (v) => {
                  o && v.stopPropagation();
                },
                [o]
              ),
              L = tt.useRef(o);
            return (
              tt.useEffect(() => {
                o
                  ? ((L.current = !0),
                    this.texts.set(e.id, u),
                    requestAnimationFrame(() => {
                      f.current = !0;
                      let v = g.current;
                      v && (v.focus(), v.select());
                    }))
                  : L.current && ((L.current = !1), s == null || s());
              }, [o]),
              tt.createElement(
                qo.HTMLContainer,
                S({ ref: c }, i),
                tt.createElement(
                  Tde,
                  { isGhost: n, isEditing: o, onPointerDown: K },
                  tt.createElement(
                    yde,
                    {
                      style: {
                        font: h,
                        color: m.stroke,
                        textAlign: Hd(p.textAlign),
                      },
                    },
                    t &&
                      tt.createElement("div", {
                        className: "tl-binding-indicator",
                        style: {
                          position: "absolute",
                          top: -this.bindingDistance,
                          left: -this.bindingDistance,
                          width: `calc(100% + ${this.bindingDistance * 2}px)`,
                          height: `calc(100% + ${this.bindingDistance * 2}px)`,
                          backgroundColor: "var(--tl-selectFill)",
                        },
                      }),
                    o
                      ? tt.createElement(xde, {
                          ref: g,
                          style: { font: h, color: m.stroke },
                          name: "text",
                          tabIndex: -1,
                          autoComplete: "false",
                          autoCapitalize: "false",
                          autoCorrect: "false",
                          autoSave: "false",
                          autoFocus: !0,
                          placeholder: "",
                          spellCheck: "true",
                          wrap: "off",
                          dir: "auto",
                          datatype: "wysiwyg",
                          defaultValue: u,
                          color: m.stroke,
                          onFocus: R,
                          onChange: x,
                          onKeyDown: b,
                          onBlur: y,
                          onPointerDown: K,
                          onContextMenu: xt,
                          onCopy: xt,
                          onPaste: xt,
                          onCut: xt,
                        })
                      : u,
                    "\u200B"
                  )
                )
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let { width: t, height: n } = this.getBounds(e);
          return tt.createElement("rect", { x: 0, y: 0, width: t, height: n });
        })
      );
      l(this, "getBounds", (e) => {
        let t = qo.Utils.getFromCache(this.boundsCache, e, () => {
          var s;
          if (!io)
            return {
              minX: 0,
              minY: 0,
              maxX: 10,
              maxY: 10,
              width: 10,
              height: 10,
            };
          io.parentNode || document.body.appendChild(io),
            (io.style.font = Mt(e.style)),
            (io.textContent = (s = this.texts.get(e.id)) != null ? s : e.text);
          let n = io.offsetWidth || 1,
            o = io.offsetHeight || 1;
          return { minX: 0, maxX: n, minY: 0, maxY: o, width: n, height: o };
        });
        return qo.Utils.translateBounds(t, e.point);
      });
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.text !== e.text ||
          t.style.scale !== e.style.scale ||
          t.style !== e.style
      );
      l(
        this,
        "transform",
        (e, t, { initialShape: n, scaleX: o, scaleY: s }) => {
          let {
              rotation: a = 0,
              style: { scale: d = 1 },
            } = n,
            i = d * Math.abs(Math.min(o, s));
          return {
            point: [t.minX, t.minY],
            rotation: (o < 0 && s >= 0) || (s < 0 && o >= 0) ? -(a || 0) : a,
            style: w(S({}, n.style), { scale: i }),
          };
        }
      );
      l(
        this,
        "transformSingle",
        (e, t, { initialShape: n, scaleX: o, scaleY: s }) => {
          let {
            style: { scale: a = 1 },
          } = n;
          return {
            point: Wn.Vec.toFixed([t.minX, t.minY]),
            style: w(S({}, n.style), {
              scale: a * Math.max(Math.abs(s), Math.abs(o)),
            }),
          };
        }
      );
      l(this, "onDoubleClickBoundsHandle", (e) => {
        let t = this.getCenter(e),
          n = this.getCenter(
            w(S({}, e), { style: w(S({}, e.style), { scale: 1 }) })
          );
        return {
          style: w(S({}, e.style), { scale: 1 }),
          point: Wn.Vec.toFixed(Wn.Vec.add(e.point, Wn.Vec.sub(t, n))),
        };
      });
      l(this, "getSvgElement", (e, t) => {
        var c, u;
        let n = this.getBounds(e),
          o = Te(e.style, t),
          s =
            yo(e.style.size, e.style.font) *
            ((c = e.style.scale) != null ? c : 1),
          a = wn(e.style.font).slice(1, -1),
          d = (u = e.style.textAlign) != null ? u : "middle",
          i = eo(e.text, s, a, d, n.width, !1);
        return i.setAttribute("fill", o.stroke), i;
      });
    }
  },
  io;
function bde() {
  var e;
  (e = document.getElementById("__textMeasure")) == null || e.remove();
  let r = document.createElement("pre");
  return (
    (r.id = "__textMeasure"),
    Object.assign(r.style, {
      whiteSpace: "pre",
      width: "auto",
      border: "1px solid transparent",
      padding: "4px",
      margin: "0px",
      letterSpacing: Yt,
      opacity: "0",
      position: "absolute",
      top: "-500px",
      left: "0px",
      zIndex: "9999",
      pointerEvents: "none",
      userSelect: "none",
      alignmentBaseline: "mathematical",
      dominantBaseline: "mathematical",
    }),
    (r.tabIndex = -1),
    document.body.appendChild(r),
    r
  );
}
typeof window != "undefined" && (io = bde());
var Tde = H("div", {
    width: "100%",
    height: "100%",
    variants: {
      isGhost: {
        false: { opacity: 1 },
        true: { transition: "opacity .2s", opacity: 0.3 },
      },
      isEditing: {
        false: { pointerEvents: "all", userSelect: "all" },
        true: { pointerEvents: "none", userSelect: "none" },
      },
    },
  }),
  wc = { whiteSpace: "pre-wrap", overflowWrap: "break-word" },
  yde = H(
    "div",
    S(
      {
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: "4px",
        zIndex: 1,
        minHeight: 1,
        minWidth: 1,
        lineHeight: 1,
        letterSpacing: Yt,
        outline: 0,
        fontWeight: "500",
        backfaceVisibility: "hidden",
        userSelect: "none",
        pointerEvents: "none",
        WebkitUserSelect: "none",
        WebkitTouchCallout: "none",
        isEditing: {
          false: {},
          true: {
            pointerEvents: "all",
            background: "$boundsBg",
            userSelect: "text",
            WebkitUserSelect: "text",
          },
        },
      },
      wc
    )
  ),
  xde = H(
    "textarea",
    w(
      S(
        {
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
          width: "100%",
          height: "100%",
          border: "none",
          padding: "4px",
          resize: "none",
          textAlign: "inherit",
          minHeight: "inherit",
          minWidth: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
          outline: 0,
          fontWeight: "inherit",
          overflow: "hidden",
          backfaceVisibility: "hidden",
          display: "inline-block",
          pointerEvents: "all",
          background: "$boundsBg",
          userSelect: "text",
          WebkitUserSelect: "text",
        },
        wc
      ),
      { "&:focus": { outline: "none", border: "none" } }
    )
  );
var cn = require("@tldraw/core"),
  Jo = require("@tldraw/intersect"),
  Ct = V(require("@tldraw/vec")),
  pn = V(require("react"));
var aa = require("@tldraw/core"),
  Cc = V(require("@tldraw/vec")),
  En = V(require("react"));
var Dr = require("@tldraw/core"),
  ao = V(require("@tldraw/vec")),
  Fs = V(require("perfect-freehand"));
function dn(r, e = 0, t = 0) {
  let [n, o] = r,
    s = [
      [n / 2, 0],
      [n, o],
      [0, o],
    ];
  return (
    e && (s = Vd(s, e)),
    t && (s = s.map((a) => ao.default.rotWith(a, [n / 2, o / 2], t))),
    s
  );
}
function ia(r) {
  let [e, t] = r,
    n = [
      [e / 2, 0],
      [e, t],
      [0, t],
    ];
  return [(n[0][0] + n[1][0] + n[2][0]) / 3, (n[0][1] + n[1][1] + n[2][1]) / 3];
}
function wde(r, e, t) {
  let [n, o] = e,
    s = Dr.Utils.rng(r),
    a = Array.from(Array(3)).map(() => [s() * t * 0.75, s() * t * 0.75]),
    d = [
      ao.default.add([n / 2, 0], a[0]),
      ao.default.add([n, o], a[1]),
      ao.default.add([0, o], a[2]),
    ],
    i = Math.round(Math.abs(s() * 2 * 3)),
    c = Dr.Utils.rotateArray(
      [
        ao.default.pointsBetween(d[0], d[1], 32),
        ao.default.pointsBetween(d[1], d[2], 32),
        ao.default.pointsBetween(d[2], d[0], 32),
      ],
      i
    );
  return { points: [...c.flat(), ...c[0]] };
}
function kc(r, e, t) {
  let { strokeWidth: n } = Te(t),
    { points: o } = wde(r, e, n);
  return {
    points: o,
    options: {
      size: n,
      thinning: 0.65,
      streamline: 0.3,
      smoothing: 1,
      simulatePressure: !1,
      last: !0,
    },
  };
}
function vc(r, e, t) {
  let { points: n, options: o } = kc(r, e, t),
    s = (0, Fs.default)(n, o);
  return Dr.Utils.getSvgPathFromStroke(s);
}
function Ic(r, e, t) {
  let { points: n, options: o } = kc(r, e, t);
  return Dr.Utils.getSvgPathFromStrokePoints((0, Fs.getStrokePoints)(n, o));
}
var Dc = En.memo(function ({
  id: e,
  size: t,
  style: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = Te(n, s),
    c = 1 + d * 1.618,
    u = dn(t),
    m = aa.Utils.pointsToLineSegments(u, !0).map(([g, f], T) => {
      let { strokeDasharray: x, strokeDashoffset: b } =
        aa.Utils.getPerfectDashProps(Cc.default.dist(g, f), d * 1.618, n.dash);
      return En.createElement("line", {
        key: e + "_" + T,
        x1: g[0],
        y1: g[1],
        x2: f[0],
        y2: f[1],
        stroke: a,
        strokeWidth: c,
        strokeLinecap: "round",
        strokeDasharray: x,
        strokeDashoffset: b,
      });
    }),
    h = u.join();
  return En.createElement(
    En.Fragment,
    null,
    En.createElement("polygon", {
      className: n.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      points: h,
    }),
    n.isFilled &&
      En.createElement("polygon", {
        fill: i,
        points: h,
        pointerEvents: "none",
      }),
    En.createElement("g", { pointerEvents: "stroke" }, m)
  );
});
var Un = V(require("react"));
var Pc = Un.memo(function ({
  id: e,
  size: t,
  style: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = Te(n, s),
    c = vc(e, t, n),
    u = Ic(e, t, n);
  return Un.createElement(
    Un.Fragment,
    null,
    Un.createElement("path", {
      className: n.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      d: u,
    }),
    n.isFilled &&
      Un.createElement("path", { d: u, fill: i, pointerEvents: "none" }),
    Un.createElement("path", {
      d: c,
      fill: a,
      stroke: a,
      strokeWidth: d,
      pointerEvents: "none",
    })
  );
});
var Mc = V(require("react"));
function Bc({ size: r }) {
  let e = dn(r).join();
  return Mc.createElement("polygon", {
    className: "tl-binding-indicator",
    points: e,
    strokeWidth: 16 * 2,
  });
}
var la = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "triangle");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "canEdit", !0);
      l(this, "getShape", (e) =>
        cn.Utils.deepMerge(
          {
            id: "id",
            type: "triangle",
            name: "Triangle",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: gt,
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              bounds: t,
              isBinding: n,
              isEditing: o,
              isSelected: s,
              isGhost: a,
              meta: d,
              events: i,
              onShapeChange: c,
              onShapeBlur: u,
            },
            p
          ) => {
            let {
                id: m,
                label: h = "",
                size: g,
                style: f,
                labelPoint: T = No,
              } = e,
              x = Mt(f),
              b = Te(f, d.isDarkMode),
              y = f.dash === "draw" ? Pc : Dc,
              R = pn.useCallback(
                (L) => (c == null ? void 0 : c({ id: m, label: L })),
                [c]
              ),
              K = pn.useMemo(() => {
                let L = Ct.default.div(g, 2);
                return (ia(g)[1] - L[1]) * 0.72;
              }, [g]);
            return pn.createElement(
              kde,
              S({ ref: p }, i),
              pn.createElement(to, {
                font: x,
                text: h,
                color: b.stroke,
                offsetX: (T[0] - 0.5) * t.width,
                offsetY: K + (T[1] - 0.5) * t.height,
                isEditing: o,
                onChange: R,
                onBlur: u,
              }),
              pn.createElement(
                cn.SVGContainer,
                { id: e.id + "_svg", opacity: a ? 0.3 : 1 },
                n && pn.createElement(Bc, { size: g }),
                pn.createElement(y, {
                  id: m,
                  style: f,
                  size: g,
                  isSelected: s,
                  isDarkMode: d.isDarkMode,
                })
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let { size: t } = e;
          return pn.createElement("polygon", { points: dn(t).join() });
        })
      );
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.size !== e.size || t.style !== e.style || t.label !== e.label
      );
      l(this, "getBounds", (e) => Zt(e, this.boundsCache));
      l(this, "getExpandedBounds", (e) =>
        cn.Utils.getBoundsFromPoints(
          dn(e.size, this.bindingDistance).map((t) =>
            Ct.default.add(t, e.point)
          )
        )
      );
      l(
        this,
        "hitTestLineSegment",
        (e, t, n) =>
          (0, Jo.intersectLineSegmentPolyline)(t, n, this.getPoints(e))
            .didIntersect
      );
      l(
        this,
        "hitTestBounds",
        (e, t) =>
          cn.Utils.boundsContained(this.getBounds(e), t) ||
          (0, Jo.intersectBoundsPolygon)(t, this.getPoints(e)).length > 0
      );
      l(this, "getBindingPoint", (e, t, n, o, s, a) => {
        let d = this.getExpandedBounds(e);
        if (!cn.Utils.pointInBounds(n, d)) return;
        let i = dn(e.size).map((b) => Ct.default.add(b, e.point)),
          c = dn(e.size, this.bindingDistance).map((b) =>
            Ct.default.add(b, e.point)
          ),
          u = cn.Utils.pointsToLineSegments(i, !0)
            .map(([b, y]) => Ct.default.distanceToLineSegment(b, y, n))
            .sort((b, y) => b - y)[0];
        if (!(cn.Utils.pointInPolygon(n, c) || u < this.bindingDistance))
          return;
        let p = cn.Utils.pointsToLineSegments(c.concat([c[0]]))
          .map((b) => (0, Jo.intersectRayLineSegment)(o, s, b[0], b[1]))
          .filter((b) => b.didIntersect)
          .flatMap((b) => b.points);
        if (!p.length) return;
        let m = Ct.default.add(ia(e.size), e.point),
          h = p.sort(
            (b, y) => Ct.default.dist(y, o) - Ct.default.dist(b, o)
          )[0],
          g = Ct.default.med(n, h),
          f,
          T;
        a
          ? ((f = Ct.default.dist(n, m) < 16 / 2 ? m : n), (T = 0))
          : (Ct.default.distanceToLineSegment(n, g, m) < 16 / 2
              ? (f = m)
              : (f = g),
            cn.Utils.pointInPolygon(n, i)
              ? (T = this.bindingDistance)
              : (T = Math.max(this.bindingDistance, u)));
        let x = Ct.default.divV(Ct.default.sub(f, [d.minX, d.minY]), [
          d.width,
          d.height,
        ]);
        return { point: Ct.default.clampV(x, 0, 1), distance: T };
      });
      l(this, "transform", no);
      l(this, "transformSingle", oo);
    }
    getPoints(e) {
      let {
        rotation: t = 0,
        point: [n, o],
        size: [s, a],
      } = e;
      return [
        [n + s / 2, o],
        [n, o + a],
        [n + s, o + a],
      ].map((d) => Ct.default.rotWith(d, this.getCenter(e), t));
    }
  },
  kde = H("div", { width: "100%", height: "100%" });
var da = require("@stitches/react"),
  js = require("@tldraw/core"),
  yt = V(require("react"));
var ca = class extends xe {
    constructor() {
      super(...arguments);
      l(this, "type", "video");
      l(this, "canBind", !0);
      l(this, "canEdit", !0);
      l(this, "canClone", !0);
      l(this, "isAspectRatioLocked", !0);
      l(this, "showCloneHandles", !1);
      l(this, "isStateful", !0);
      l(this, "getShape", (e) =>
        js.Utils.deepMerge(
          {
            id: "video",
            type: "video",
            name: "Video",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: gt,
            assetId: "assetId",
            isPlaying: !0,
            currentTime: 0,
          },
          e
        )
      );
      l(
        this,
        "Component",
        xe.Component(
          (
            {
              shape: e,
              asset: t = { src: "" },
              isBinding: n,
              isEditing: o,
              isGhost: s,
              meta: a,
              events: d,
              onShapeChange: i,
            },
            c
          ) => {
            let u = yt.useRef(null),
              p = yt.useRef(null),
              { currentTime: m = 0, size: h, isPlaying: g, style: f } = e;
            yt.useLayoutEffect(() => {
              let y = p.current;
              if (!y) return;
              let [R, K] = h;
              (y.style.width = `${R}px`), (y.style.height = `${K}px`);
            }, [h]),
              yt.useLayoutEffect(() => {
                let y = u.current;
                !y || (g ? y.play() : y.pause());
              }, [g]),
              yt.useLayoutEffect(() => {
                let y = u.current;
                !y || (m !== y.currentTime && (y.currentTime = m));
              }, [m]);
            let T = yt.useCallback(() => {
                i == null || i({ id: e.id, isPlaying: !0 });
              }, []),
              x = yt.useCallback(() => {
                i == null || i({ id: e.id, isPlaying: !1 });
              }, []),
              b = yt.useCallback(() => {
                let y = u.current;
                !y ||
                  !o ||
                  i == null ||
                  i({ id: e.id, currentTime: y.currentTime });
              }, [o]);
            return yt.createElement(
              js.HTMLContainer,
              S({ ref: c }, d),
              n &&
                yt.createElement("div", {
                  className: "tl-binding-indicator",
                  style: {
                    position: "absolute",
                    top: -this.bindingDistance,
                    left: -this.bindingDistance,
                    width: `calc(100% + ${this.bindingDistance * 2}px)`,
                    height: `calc(100% + ${this.bindingDistance * 2}px)`,
                    backgroundColor: "var(--tl-selectFill)",
                  },
                }),
              yt.createElement(
                vde,
                {
                  ref: p,
                  isDarkMode: a.isDarkMode,
                  isGhost: s,
                  isFilled: f.isFilled,
                },
                yt.createElement(
                  Ide,
                  {
                    ref: u,
                    id: e.id + "_video",
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    disableRemotePlayback: !0,
                    disablePictureInPicture: !0,
                    controls: o,
                    autoPlay: g,
                    onPlay: T,
                    onPause: x,
                    onTimeUpdate: b,
                  },
                  yt.createElement("source", { src: t.src })
                )
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        xe.Indicator(({ shape: e }) => {
          let {
            size: [t, n],
          } = e;
          return yt.createElement("rect", {
            x: 0,
            y: 0,
            rx: 2,
            ry: 2,
            width: Math.max(1, t),
            height: Math.max(1, n),
          });
        })
      );
      l(this, "getBounds", (e) => Zt(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.size !== e.size ||
          t.style !== e.style ||
          t.isPlaying !== e.isPlaying
      );
      l(this, "getSvgElement", (e) => {
        let t = this.getBounds(e),
          n = document.createElementNS("http://www.w3.org/2000/svg", "image");
        return (
          n.setAttribute("width", `${t.width}`),
          n.setAttribute("height", `${t.height}`),
          n.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
          n
        );
      });
      l(this, "transform", no);
      l(this, "transformSingle", oo);
    }
  },
  vde = (0, da.styled)("div", {
    pointerEvents: "all",
    position: "relative",
    fontFamily: "sans-serif",
    fontSize: "2em",
    height: "100%",
    width: "100%",
    borderRadius: "3px",
    perspective: "800px",
    overflow: "hidden",
    p: { userSelect: "none" },
    img: { userSelect: "none" },
    variants: {
      isGhost: {
        false: { opacity: 1 },
        true: { transition: "opacity .2s", opacity: 0.3 },
      },
      isFilled: { true: {}, false: {} },
      isDarkMode: { true: {}, false: {} },
    },
    compoundVariants: [
      {
        isFilled: !0,
        isDarkMode: !0,
        css: {
          boxShadow:
            "2px 3px 12px -2px rgba(0,0,0,.3), 1px 1px 4px rgba(0,0,0,.3), 1px 1px 2px rgba(0,0,0,.3)",
        },
      },
      {
        isFilled: !0,
        isDarkMode: !1,
        css: {
          boxShadow:
            "2px 3px 12px -2px rgba(0,0,0,.2), 1px 1px 4px rgba(0,0,0,.16),  1px 1px 2px rgba(0,0,0,.16)",
        },
      },
    ],
  }),
  Ide = (0, da.styled)("video", {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    minWidth: "100%",
    pointerEvents: "none",
    objectFit: "cover",
    userSelect: "none",
    borderRadius: 2,
  });
var Gs = new na(),
  Vs = new la(),
  $s = new Ji(),
  Ns = new Xi(),
  Qo = new _i(),
  Ec = new sa(),
  Rc = new Qi(),
  Pr = new ra(),
  Ac = new ta(),
  Lc = new ca(),
  Rn = {
    ["rectangle"]: Gs,
    ["triangle"]: Vs,
    ["ellipse"]: $s,
    ["draw"]: Ns,
    ["arrow"]: Qo,
    ["text"]: Ec,
    ["group"]: Rc,
    ["sticky"]: Pr,
    ["image"]: Ac,
    ["video"]: Lc,
  },
  pa = (r) => (typeof r == "string" ? Rn[r] : Rn[r.type]);
var Hc = !1,
  me = class {
    static getShapeUtil(e) {
      return pa(e);
    }
    static getSelectedShapes(e, t) {
      let n = me.getPage(e, t);
      return me.getSelectedIds(e, t).map((s) => n.shapes[s]);
    }
    static screenToWorld(e, t) {
      let n = me.getPageState(e, e.appState.currentPageId).camera;
      return Se.Vec.sub(Se.Vec.div(t, n.zoom), n.point);
    }
    static getCameraZoom(e) {
      return zt.Utils.clamp(e, 0.1, 5);
    }
    static getPage(e, t) {
      return e.document.pages[t];
    }
    static getPageState(e, t) {
      return e.document.pageStates[t];
    }
    static getSelectedIds(e, t) {
      return me.getPageState(e, t).selectedIds;
    }
    static getShapes(e, t) {
      return Object.values(me.getPage(e, t).shapes);
    }
    static getCamera(e, t) {
      return me.getPageState(e, t).camera;
    }
    static getShape(e, t, n) {
      return me.getPage(e, n).shapes[t];
    }
    static getCenter(e) {
      return me.getShapeUtil(e).getCenter(e);
    }
    static getBounds(e) {
      return me.getShapeUtil(e).getBounds(e);
    }
    static getRotatedBounds(e) {
      return me.getShapeUtil(e).getRotatedBounds(e);
    }
    static getSelectedBounds(e) {
      return zt.Utils.getCommonBounds(
        me
          .getSelectedShapes(e, e.appState.currentPageId)
          .map((t) => me.getShapeUtil(t).getBounds(t))
      );
    }
    static getParentId(e, t, n) {
      return me.getShape(e, t, n).parentId;
    }
    static getDocumentBranch(e, t, n) {
      let o = me.getShape(e, t, n);
      return o.children === void 0
        ? [t]
        : [t, ...o.children.flatMap((s) => me.getDocumentBranch(e, s, n))];
    }
    static getSelectedBranchSnapshot(e, t, n) {
      let o = me.getPage(e, t),
        s = me
          .getSelectedIds(e, t)
          .flatMap((a) => me.getDocumentBranch(e, a, t).map((d) => o.shapes[d]))
          .filter((a) => !a.isLocked)
          .map(zt.Utils.deepClone);
      return n !== void 0 ? s.map((a) => S({ id: a.id }, n(a))) : s;
    }
    static getSelectedShapeSnapshot(e, t, n) {
      let o = me
        .getSelectedShapes(e, t)
        .filter((s) => !s.isLocked)
        .map(zt.Utils.deepClone);
      return n !== void 0 ? o.map((s) => S({ id: s.id }, n(s))) : o;
    }
    static getAllEffectedShapeIds(e, t, n) {
      let o = me.getPage(e, n),
        s = new Set(t);
      return (
        t.forEach((a) => {
          let d = o.shapes[a];
          function i(u) {
            u.children !== void 0 &&
              u.children
                .filter((p) => !s.has(p))
                .forEach((p) => {
                  s.add(p), i(o.shapes[p]);
                });
          }
          i(d);
          function c(u) {
            let p = u.parentId;
            p !== o.id && (s.has(p) || (s.add(p), c(o.shapes[p])));
          }
          c(d),
            s.forEach((u) => {
              Object.values(o.bindings)
                .filter((p) => p.fromId === u || p.toId === u)
                .forEach((p) => s.add(p.fromId === u ? p.toId : p.fromId));
            });
        }),
        Array.from(s.values())
      );
    }
    static getLinkedShapeIds(e, t, n, o = !0) {
      let s = me.getSelectedIds(e, t),
        a = me.getPage(e, t),
        d = new Set(s),
        i = new Set(),
        c = [...s],
        u = new Set(
          Object.values(a.shapes).filter((p) => {
            var m;
            return (
              p.type === "arrow" &&
              (p.handles.start.bindingId ||
                ((m = p.handles) == null ? void 0 : m.end.bindingId))
            );
          })
        );
      for (; c.length; ) {
        let p = c.pop();
        if (!(p && u.size)) break;
        i.has(p) ||
          (i.add(p),
          u.forEach((m) => {
            var b, y;
            let {
                handles: {
                  start: { bindingId: h },
                  end: { bindingId: g },
                },
              } = m,
              f = h ? a.bindings[h] : null,
              T = g ? a.bindings[g] : null,
              x = !1;
            f && f.toId === p
              ? (n === "center"
                  ? (x = !0)
                  : ((b = m.decorations) == null ? void 0 : b.start) && T
                  ? (x = n === "left")
                  : (x = n === "right"),
                x &&
                  (o && d.add(m.id),
                  d.add(p),
                  T && (d.add(T.toId), c.push(T.toId))))
              : T &&
                T.toId === p &&
                (n === "center"
                  ? (x = !0)
                  : ((y = m.decorations) == null ? void 0 : y.end) && f
                  ? (x = n === "left")
                  : (x = n === "right"),
                x &&
                  (o && d.add(m.id),
                  d.add(p),
                  f && (d.add(f.toId), c.push(f.toId)))),
              (!f || d.has(f.toId)) && (!T || d.has(T.toId)) && u.delete(m);
          }));
      }
      return Array.from(d.values());
    }
    static getChildIndexAbove(e, t, n) {
      let o = e.document.pages[n],
        s = o.shapes[t],
        a;
      if (s.parentId === o.id)
        a = Object.values(o.shapes)
          .filter((c) => c.parentId === o.id)
          .sort((c, u) => c.childIndex - u.childIndex);
      else {
        let c = o.shapes[s.parentId];
        if (!c.children) throw Error("No children in parent!");
        a = c.children
          .map((u) => o.shapes[u])
          .sort((u, p) => u.childIndex - p.childIndex);
      }
      let d = a.indexOf(s),
        i = a[d + 1];
      return i ? i.childIndex : s.childIndex + 1;
    }
    static getBeforeShape(e, t) {
      return Object.fromEntries(Object.keys(t).map((n) => [n, e[n]]));
    }
    static mutateShapes(e, t, n, o, s = !1) {
      let a = {},
        d = {};
      t.forEach((c, u) => {
        let p = me.getShape(e, c, o);
        if (p.isLocked) return;
        (p == null ? void 0 : p.type) === "group" &&
          (t.length === 1 || s) &&
          p.children.forEach((h, g) => {
            let f = me.getShape(e, h, o);
            if (f.isLocked) return;
            let T = n(f, g);
            T && ((a[h] = me.getBeforeShape(f, T)), (d[h] = T));
          });
        let m = n(p, u);
        m && ((a[c] = me.getBeforeShape(p, m)), (d[c] = m));
      });
      let i = zt.Utils.deepMerge(e, {
        document: { pages: { [e.appState.currentPageId]: { shapes: d } } },
      });
      return { before: a, after: d, data: i };
    }
    static createShapes(e, t, n) {
      let o = {
          document: {
            pages: {
              [n]: {
                shapes: S(
                  {},
                  Object.fromEntries(
                    t.flatMap((a) => {
                      let d = [[a.id, void 0]];
                      if (a.parentId !== n) {
                        let i = me.getShape(e, a.parentId, n);
                        if (!i.children) throw Error("No children in parent!");
                        d.push([i.id, { children: i.children }]);
                      }
                      return d;
                    })
                  )
                ),
              },
            },
          },
        },
        s = {
          document: {
            pages: {
              [n]: {
                shapes: {
                  shapes: S(
                    {},
                    Object.fromEntries(
                      t.flatMap((a) => {
                        let d = [[a.id, a]];
                        if (a.parentId !== n) {
                          let i = me.getShape(e, a.parentId, n);
                          if (!i.children)
                            throw Error("No children in parent!");
                          d.push([i.id, { children: [...i.children, a.id] }]);
                        }
                        return d;
                      })
                    )
                  ),
                },
              },
            },
          },
        };
      return { before: o, after: s };
    }
    static deleteShapes(e, t, n) {
      n = n || e.appState.currentPageId;
      let o = me.getPage(e, n),
        s = typeof t[0] == "string" ? t : t.map((i) => i.id),
        a = {
          document: {
            pages: {
              [n]: {
                shapes: S(
                  {},
                  Object.fromEntries(
                    s.flatMap((i) => {
                      let c = o.shapes[i],
                        u = [[c.id, c]];
                      if (c.parentId !== n) {
                        let p = o.shapes[c.parentId];
                        if (!p.children) throw Error("No children in parent!");
                        u.push([p.id, { children: p.children }]);
                      }
                      return u;
                    })
                  )
                ),
                bindings: S(
                  {},
                  Object.fromEntries(
                    Object.values(o.bindings)
                      .filter((i) => s.includes(i.fromId) || s.includes(i.toId))
                      .map((i) => [i.id, i])
                  )
                ),
              },
            },
          },
        },
        d = {
          document: {
            pages: {
              [n]: {
                shapes: S(
                  {},
                  Object.fromEntries(
                    s.flatMap((i) => {
                      let c = o.shapes[i],
                        u = [[c.id, void 0]];
                      if (c.parentId !== o.id) {
                        let p = o.shapes[c.parentId];
                        if (!p.children) throw Error("No children in parent!");
                        u.push([
                          p.id,
                          { children: p.children.filter((m) => m !== c.id) },
                        ]);
                      }
                      return u;
                    })
                  )
                ),
              },
            },
          },
        };
      return { before: a, after: d };
    }
    static onSessionComplete(e) {
      var n, o;
      let t =
        (o = (n = me.getShapeUtil(e)).onSessionComplete) == null
          ? void 0
          : o.call(n, e);
      return t ? S(S({}, e), t) : e;
    }
    static onChildrenChange(e, t, n) {
      var s, a;
      if (!t.children) return;
      let o =
        (a = (s = me.getShapeUtil(t)).onChildrenChange) == null
          ? void 0
          : a.call(
              s,
              t,
              t.children.map((d) => me.getShape(e, d, n))
            );
      return o ? S(S({}, t), o) : t;
    }
    static updateArrowBindings(e, t) {
      var a, d, i, c, u, p;
      let n = { start: wt(t.handles.start), end: wt(t.handles.end) },
        o = {
          isBound: !1,
          handle: t.handles.start,
          point: Se.Vec.add(t.handles.start.point, t.point),
        },
        s = {
          isBound: !1,
          handle: t.handles.end,
          point: Se.Vec.add(t.handles.end.point, t.point),
        };
      if (t.handles.start.bindingId) {
        let m = ((a = t.decorations) == null ? void 0 : a.start) !== void 0,
          h = t.handles.start,
          g = e.bindings[t.handles.start.bindingId];
        if (!g)
          throw Error(
            "Could not find a binding to match the start handle's bindingId: " +
              t.handles.start.bindingId
          );
        let f = e.shapes[g.toId],
          T = me.getShapeUtil(f),
          x = T.getBounds(f),
          b = T.getExpandedBounds(f),
          y = m ? zt.Utils.expandBounds(x, g.distance) : x,
          { minX: R, minY: K, width: L, height: v } = b,
          I = Se.Vec.add(
            [R, K],
            Se.Vec.mulV(
              [L, v],
              Se.Vec.rotWith(g.point, [0.5, 0.5], f.rotation || 0)
            )
          );
        o = {
          isBound: !0,
          hasDecoration: m,
          binding: g,
          handle: h,
          point: I,
          util: T,
          target: f,
          bounds: x,
          expandedBounds: b,
          intersectBounds: y,
          center: T.getCenter(f),
        };
      }
      if (t.handles.end.bindingId) {
        let m = ((d = t.decorations) == null ? void 0 : d.end) !== void 0,
          h = t.handles.end,
          g = e.bindings[t.handles.end.bindingId];
        if (!g)
          throw Error(
            "Could not find a binding to match the end handle's bindingId"
          );
        let f = e.shapes[g.toId],
          T = me.getShapeUtil(f),
          x = T.getBounds(f),
          b = T.getExpandedBounds(f),
          y = m ? zt.Utils.expandBounds(x, g.distance) : x,
          { minX: R, minY: K, width: L, height: v } = b,
          I = Se.Vec.add(
            [R, K],
            Se.Vec.mulV(
              [L, v],
              Se.Vec.rotWith(g.point, [0.5, 0.5], f.rotation || 0)
            )
          );
        s = {
          isBound: !0,
          hasDecoration: m,
          binding: g,
          handle: h,
          point: I,
          util: T,
          target: f,
          bounds: x,
          expandedBounds: b,
          intersectBounds: y,
          center: T.getCenter(f),
        };
      }
      for (let m of ["end", "start"]) {
        let h = m === "start" ? o : s,
          g = m === "start" ? s : o;
        if (h.isBound)
          if (!h.binding.distance) n[m].point = Se.Vec.sub(h.point, t.point);
          else {
            let f = Se.Vec.uni(Se.Vec.sub(h.point, g.point));
            switch (h.target.type) {
              case "ellipse": {
                let T = (0, lo.intersectRayEllipse)(
                  g.point,
                  f,
                  h.center,
                  h.target.radius[0] +
                    (h.hasDecoration ? h.binding.distance : 0),
                  h.target.radius[1] +
                    (h.hasDecoration ? h.binding.distance : 0),
                  h.target.rotation || 0
                ).points.sort(
                  (x, b) => Se.Vec.dist(x, g.point) - Se.Vec.dist(b, g.point)
                );
                T[0] !== void 0 &&
                  (n[m].point = Se.Vec.toFixed(Se.Vec.sub(T[0], t.point)));
                break;
              }
              case "triangle": {
                let T = h.target.point,
                  x = dn(
                    h.target.size,
                    h.hasDecoration ? 16 : 0,
                    h.target.rotation
                  ).map((y) => Se.Vec.add(y, T)),
                  b = zt.Utils.pointsToLineSegments(x, !0)
                    .map(([y, R]) =>
                      (0, lo.intersectRayLineSegment)(g.point, f, y, R)
                    )
                    .filter((y) => y.didIntersect)
                    .flatMap((y) => y.points)
                    .sort(
                      (y, R) =>
                        Se.Vec.dist(y, g.point) - Se.Vec.dist(R, g.point)
                    );
                b[0] !== void 0 &&
                  (n[m].point = Se.Vec.toFixed(Se.Vec.sub(b[0], t.point)));
                break;
              }
              default: {
                let T = (0, lo.intersectRayBounds)(
                  g.point,
                  f,
                  h.intersectBounds,
                  h.target.rotation
                )
                  .filter((b) => b.didIntersect)
                  .map((b) => b.points[0])
                  .sort(
                    (b, y) => Se.Vec.dist(b, g.point) - Se.Vec.dist(y, g.point)
                  );
                if (!T[0]) continue;
                let x;
                if (
                  (g.isBound &&
                    (x = (0, lo.intersectRayBounds)(
                      g.point,
                      f,
                      g.intersectBounds,
                      g.target.rotation
                    )
                      .filter((y) => y.didIntersect)
                      .map((y) => y.points[0])
                      .sort(
                        (y, R) =>
                          Se.Vec.dist(y, g.point) - Se.Vec.dist(R, g.point)
                      )[0]),
                  g.isBound &&
                    (T.length < 2 ||
                      (x &&
                        T[0] &&
                        Math.ceil(Se.Vec.dist(T[0], x)) < 16 * 2.5) ||
                      zt.Utils.boundsContain(
                        h.expandedBounds,
                        g.expandedBounds
                      ) ||
                      zt.Utils.boundsCollide(
                        h.expandedBounds,
                        g.expandedBounds
                      )))
                ) {
                  let b = Se.Vec.uni(Se.Vec.sub(g.point, h.point)),
                    y = (0, lo.intersectRayBounds)(
                      h.point,
                      b,
                      h.bounds,
                      h.target.rotation
                    )
                      .filter((R) => R.didIntersect)
                      .map((R) => R.points[0]);
                  if (!y[0]) continue;
                  (n[m].point = Se.Vec.toFixed(Se.Vec.sub(y[0], t.point))),
                    (n[m === "start" ? "end" : "start"].point = Se.Vec.toFixed(
                      Se.Vec.add(
                        Se.Vec.sub(y[0], t.point),
                        Se.Vec.mul(
                          b,
                          Math.min(
                            Se.Vec.dist(y[0], g.point),
                            16 *
                              2.5 *
                              (zt.Utils.boundsContain(
                                g.bounds,
                                h.intersectBounds
                              )
                                ? -1
                                : 1)
                          )
                        )
                      )
                    ));
                } else if (
                  !g.isBound &&
                  ((T[0] && Se.Vec.dist(T[0], g.point) < 16 * 2.5) ||
                    zt.Utils.pointInBounds(g.point, h.intersectBounds))
                ) {
                  let b = Se.Vec.uni(Se.Vec.sub(h.center, g.point));
                  return (c = (i = me.getShapeUtil(t)).onHandleChange) == null
                    ? void 0
                    : c.call(i, t, {
                        [m]: w(S({}, t.handles[m]), {
                          point: Se.Vec.toFixed(
                            Se.Vec.add(
                              Se.Vec.sub(g.point, t.point),
                              Se.Vec.mul(b, 16 * 2.5)
                            )
                          ),
                        }),
                      });
                } else
                  T[0] &&
                    (n[m].point = Se.Vec.toFixed(Se.Vec.sub(T[0], t.point)));
              }
            }
          }
      }
      return (p = (u = me.getShapeUtil(t)).onHandleChange) == null
        ? void 0
        : p.call(u, t, n);
    }
    static transform(e, t, n) {
      let o = me.getShapeUtil(e).transform(e, t, n);
      return o ? S(S({}, e), o) : e;
    }
    static transformSingle(e, t, n) {
      let o = me.getShapeUtil(e).transformSingle(e, t, n);
      return o ? S(S({}, e), o) : e;
    }
    static getRotatedShapeMutation(e, t, n, o) {
      var c, u;
      let s = Se.Vec.sub(t, e.point),
        a = Se.Vec.rotWith(t, n, o),
        d = Se.Vec.toFixed(Se.Vec.sub(a, s));
      if (e.handles !== void 0)
        return (u = (c = this.getShapeUtil(e)).onHandleChange) == null
          ? void 0
          : u.call(
              c,
              w(S({}, e), { point: d }),
              Object.fromEntries(
                Object.entries(e.handles).map(([m, h]) => {
                  let g = Se.Vec.toFixed(Se.Vec.rotWith(h.point, s, o));
                  return [m, w(S({}, h), { point: g })];
                })
              )
            );
      let i = zt.Utils.clampRadians((e.rotation || 0) + o);
      return { point: d, rotation: i };
    }
    static updateParents(e, t, n) {
      let o = me.getPage(e, t);
      if (n.length === 0) return;
      let { shapes: s } = me.getPage(e, t),
        a = Array.from(new Set(n.map((d) => s[d].parentId).values())).filter(
          (d) => d !== o.id
        );
      for (let d of a) {
        let i = s[d];
        if (!i.children)
          throw Error(
            "A shape is parented to a shape without a children array."
          );
        me.onChildrenChange(e, i, t);
      }
      me.updateParents(e, t, a);
    }
    static getBinding(e, t, n) {
      return me.getPage(e, n).bindings[t];
    }
    static getBindings(e, t) {
      let n = me.getPage(e, t);
      return Object.values(n.bindings);
    }
    static getBindableShapeIds(e) {
      return me
        .getShapes(e, e.appState.currentPageId)
        .filter((t) => me.getShapeUtil(t).canBind)
        .sort((t, n) => n.childIndex - t.childIndex)
        .map((t) => t.id);
    }
    static getBindingsWithShapeIds(e, t, n) {
      return Array.from(
        new Set(
          me
            .getBindings(e, n)
            .filter((o) => t.includes(o.toId) || t.includes(o.fromId))
        ).values()
      );
    }
    static getRelatedBindings(e, t, n) {
      let o = new Set(t),
        s = me.getPage(e, n),
        a = Object.values(s.bindings),
        d = new Set(a.filter((u) => o.has(u.toId) || o.has(u.fromId))),
        i = d.size,
        c = -1;
      for (; c !== 0; )
        d.forEach((u) => {
          let p = u.fromId;
          for (let m of a) m.fromId === p && d.add(m), m.toId === p && d.add(m);
        }),
          (c = d.size - i),
          (i = d.size);
      return Array.from(d.values());
    }
    static normalizeText(e) {
      return e
        .replace(
          me.fixNewLines,
          `
`
        )
        .split(
          `
`
        )
        .map((t) => t || " ").join(`
`);
    }
    static assertShapeHasProperty(e, t) {
      if (e[t] === void 0) throw new Error();
    }
    static warn(e) {
      Hc && console.warn(e);
    }
    static error(e) {
      Hc && console.error(e);
    }
    static getSvgString(e, t = 1) {
      let n = e.cloneNode(!0);
      return (
        e.setAttribute("width", +e.getAttribute("width") * t + ""),
        e.setAttribute("height", +e.getAttribute("height") * t + ""),
        new XMLSerializer()
          .serializeToString(n)
          .replaceAll("&#10;      ", "")
          .replaceAll(/((\s|")[0-9]*\.[0-9]{2})([0-9]*)(\b|"|\))/g, "$1")
      );
    }
    static getSvgAsDataUrl(e, t = 1) {
      let n = me.getSvgString(e, t);
      return `data:image/svg+xml;base64,${window.btoa(unescape(n))}`;
    }
    static getImageForSvg(o) {
      return ue(this, arguments, function* (e, t = "png", n = {}) {
        let { scale: s = 2, quality: a = 1 } = n,
          d = me.getSvgString(e, s);
        if (!d) return;
        let i = yield new Promise((u) => {
          let p = new Image();
          p.crossOrigin = "anonymous";
          let h = `data:image/svg+xml;base64,${window.btoa(
            unescape(encodeURIComponent(d))
          )}`;
          (p.onload = () => {
            let g = document.createElement("canvas"),
              f = g.getContext("2d"),
              T = p.width,
              x = p.height;
            (g.width = T),
              (g.height = x),
              f.drawImage(p, 0, 0, T, x),
              URL.revokeObjectURL(h),
              u(g);
          }),
            (p.onerror = () => {
              console.warn("Could not convert that SVG to an image.");
            }),
            (p.src = h);
        });
        return yield new Promise((u) => i.toBlob((p) => u(p), "image/" + t, a));
      });
    }
  },
  k = me;
l(k, "copyStringToClipboard", (e) => {
  try {
    navigator.clipboard &&
      navigator.clipboard.write([
        new ClipboardItem({
          "text/plain": new Blob([e], { type: "text/plain" }),
        }),
      ]);
  } catch (t) {
    let n = document.createElement("textarea");
    n.setAttribute("position", "fixed"),
      n.setAttribute("top", "0"),
      n.setAttribute("readonly", "true"),
      n.setAttribute("contenteditable", "true"),
      (n.style.position = "fixed"),
      (n.value = e),
      document.body.appendChild(n),
      n.focus(),
      n.select();
    try {
      let o = document.createRange();
      o.selectNodeContents(n);
      let s = window.getSelection();
      s &&
        (s.removeAllRanges(),
        s.addRange(o),
        n.setSelectionRange(0, n.value.length)),
        document.execCommand("copy");
    } catch (o) {
    } finally {
      document.body.removeChild(n);
    }
  }
}),
  l(k, "flattenShape", (e, t) => {
    var n;
    return [
      t,
      ...((n = t.children) != null ? n : [])
        .map((o) => me.getShape(e, o, e.appState.currentPageId))
        .sort((o, s) => o.childIndex - s.childIndex)
        .flatMap((o) => me.flattenShape(e, o)),
    ];
  }),
  l(k, "flattenPage", (e, t) =>
    Object.values(e.document.pages[t].shapes)
      .sort((n, o) => n.childIndex - o.childIndex)
      .reduce((n, o) => [...n, ...me.flattenShape(e, o)], [])
  ),
  l(k, "getTopChildIndex", (e, t) => {
    let n = me.getShapes(e, t);
    return n.length === 0
      ? 1
      : n
          .filter((o) => o.parentId === t)
          .sort((o, s) => s.childIndex - o.childIndex)[0].childIndex + 1;
  }),
  l(k, "fixNewLines", /\r?\n|\r/g);
var Cde = (r) => r.room,
  Oc = function () {
    let e = ge(),
      t = e.useStore(Cde),
      [n, o] = Le.useState(!1),
      s = Le.useRef(0),
      a = Le.useCallback(() => {
        o(!0),
          k.copyStringToClipboard(window.location.href),
          clearTimeout(s.current),
          (s.current = setTimeout(() => o(!1), 1200));
      }, []),
      d = Le.useCallback(() => {
        o(!0);
        let u = window.location.href.split("/");
        (u[u.length - 2] = "v"),
          (u[u.length - 1] = Ws.Utils.lns(u[u.length - 1])),
          k.copyStringToClipboard(u.join("/")),
          clearTimeout(s.current),
          (s.current = setTimeout(() => o(!1), 1200));
      }, []),
      i = Le.useCallback(
        () =>
          ue(this, null, function* () {
            e.isDirty
              ? e.fileSystemHandle
                ? window.confirm(
                    "Do you want to save changes to your current project?"
                  ) && (yield e.saveProject())
                : window.confirm("Do you want to save your current project?") &&
                  (yield e.saveProject())
              : e.fileSystemHandle ||
                (window.confirm("Do you want to save your current project?") &&
                  (yield e.saveProject()));
          }),
        []
      ),
      c = Le.useCallback(
        () =>
          ue(this, null, function* () {
            var p;
            let u = Ws.Utils.deepClone(e.document);
            e.setIsLoading(!0);
            try {
              if (e.callbacks.onAssetUpload)
                for (let h in u.assets) {
                  let g = u.assets[h];
                  if (g.src.includes("base64")) {
                    let f = Dde(
                        g.src,
                        ((p = g.fileName) != null ? p : g.type === "video")
                          ? "image.png"
                          : "image.mp4"
                      ),
                      T = yield e.callbacks.onAssetUpload(e, f, h);
                    T ? (g.src = T) : (g.src = "");
                  }
                }
              let m = yield fetch("/api/create", {
                method: "POST",
                mode: "no-cors",
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  roomId: Ws.Utils.uniqueId(),
                  pageId: e.currentPageId,
                  document: u,
                }),
              }).then((h) => h.json());
              (m == null ? void 0 : m.url)
                ? (window.location.href = m.url)
                : k.warn(m == null ? void 0 : m.message);
            } catch (m) {
              k.warn(m.message);
            }
            e.setIsLoading(!1);
          }),
        []
      );
    return Le.createElement(
      zc.Root,
      { dir: "ltr" },
      Le.createElement(
        gs,
        { id: "TD-MultiplayerMenuIcon", isActive: !!t },
        Le.createElement(Ld, null)
      ),
      Le.createElement(
        At,
        {
          variant: "menu",
          id: "TD-MultiplayerMenu",
          side: "bottom",
          align: "start",
          sideOffset: 4,
        },
        Le.createElement(
          ke,
          { id: "TD-Multiplayer-CopyInviteLink", onClick: a, disabled: !t },
          Le.createElement(Mr.FormattedMessage, { id: "copy.invite.link" }),
          Le.createElement(
            bt,
            null,
            n
              ? Le.createElement(er.CheckIcon, null)
              : Le.createElement(er.ClipboardIcon, null)
          )
        ),
        Le.createElement(
          ke,
          { id: "TD-Multiplayer-CopyReadOnlyLink", onClick: d, disabled: !t },
          Le.createElement(Mr.FormattedMessage, { id: "copy.readonly.link" }),
          Le.createElement(
            bt,
            null,
            n
              ? Le.createElement(er.CheckIcon, null)
              : Le.createElement(er.ClipboardIcon, null)
          )
        ),
        Le.createElement(Be, null),
        Le.createElement(
          ke,
          { id: "TD-Multiplayer-CreateMultiplayerProject", onClick: i },
          Le.createElement(
            "a",
            { href: `${window.location.origin}/r` },
            Le.createElement(Mr.FormattedMessage, {
              id: "create.multiplayer.project",
            })
          )
        ),
        Le.createElement(
          ke,
          { id: "TD-Multiplayer-CopyToMultiplayerProject", onClick: c },
          Le.createElement(Mr.FormattedMessage, {
            id: "copy.multiplayer.project",
          })
        )
      )
    );
  };
function Dde(r, e) {
  var d, i;
  let t = r.split(","),
    n =
      (i = (d = t[0]) == null ? void 0 : d.match(/:(.*?);/)) == null
        ? void 0
        : i[1],
    o = window.atob(t[1]),
    s = o.length,
    a = new Uint8Array(s);
  for (; s--; ) a[s] = o.charCodeAt(s);
  return new File([a], e, { type: n });
}
var Jt = V(require("@radix-ui/react-dropdown-menu")),
  Ks = require("@radix-ui/react-icons"),
  we = V(require("react")),
  Br = require("react-intl");
var Ot = V(require("@radix-ui/react-alert-dialog")),
  Us = require("@radix-ui/react-icons"),
  Ce = V(require("react")),
  tr = require("react-intl");
var Pde = (r) => Object.keys(r.document.pages).length > 1;
function jc({ page: r, onOpen: e, onClose: t }) {
  let n = ge(),
    o = (0, tr.useIntl)(),
    [s, a] = Ce.useState(!1),
    [d, i] = Ce.useState(r.name || "Page"),
    c = n.useStore(Pde),
    u = Ce.useRef(null),
    p = Ce.useCallback(() => {
      a(!1);
    }, []),
    m = Ce.useCallback(() => {
      n.duplicatePage(r.id);
    }, [n]),
    h = Ce.useCallback(() => {
      window.confirm("Are you sure you want to delete this page?") &&
        n.deletePage(r.id);
    }, [n]),
    g = Ce.useCallback(
      (L) => {
        if ((a(L), L)) {
          e == null || e();
          return;
        }
      },
      [n]
    );
  function f(L) {
    L.stopPropagation();
  }
  let T = Ce.useRef(r.name || "Page"),
    x = Ce.useRef(T.current),
    b = Ce.useCallback((L) => {
      let v = L.target.value.trimStart();
      (x.current = v), i(v);
    }, []),
    y = Ce.useCallback((L) => {
      switch (L.key) {
        case "Enter": {
          x.current === T.current ||
            ((T.current = x.current), n.renamePage(r.id, x.current.trim())),
            a(!1);
          break;
        }
        case "Escape": {
          if (x.current === T.current) {
            a(!1);
            return;
          }
          (x.current = T.current),
            i(T.current),
            requestAnimationFrame(() => {
              let v = u.current;
              v && (v.focus(), v.setSelectionRange(0, v.value.length));
            });
          break;
        }
      }
    }, []),
    R = Ce.useRef(!1);
  Ce.useEffect(
    () => (
      s
        ? ((R.current = !0),
          (T.current = r.name || "Page"),
          (x.current = T.current),
          requestAnimationFrame(() => {
            let L = u.current;
            L && (L.focus(), L.setSelectionRange(0, L.value.length));
          }))
        : R.current && (t == null || t()),
      () => {
        x.current !== T.current &&
          ((T.current = x.current), n.renamePage(r.id, x.current));
      }
    ),
    [s]
  );
  let K = Vt();
  return Ce.createElement(
    Ot.Root,
    { open: s, onOpenChange: g },
    Ce.createElement(
      Ot.Trigger,
      { asChild: !0, "data-shy": "true" },
      Ce.createElement(
        Ho,
        { bp: rt },
        Ce.createElement(bt, null, Ce.createElement(Us.MixerVerticalIcon, null))
      )
    ),
    Ce.createElement(
      Ot.Portal,
      { container: K.current },
      Ce.createElement(Bde, { onPointerDown: p }),
      Ce.createElement(
        Mde,
        { dir: "ltr", onKeyDown: f, onKeyUp: f },
        Ce.createElement(us, {
          ref: u,
          placeholder: o.formatMessage({ id: "page.name" }),
          value: d,
          onChange: b,
          onKeyDown: y,
          icon: Ce.createElement(Us.Pencil1Icon, null),
        }),
        Ce.createElement(Be, null),
        Ce.createElement(
          Fc,
          { onSelect: m },
          Ce.createElement(tr.FormattedMessage, { id: "duplicate" })
        ),
        Ce.createElement(
          Fc,
          { disabled: !c, onSelect: h },
          Ce.createElement(tr.FormattedMessage, { id: "delete" })
        ),
        Ce.createElement(Be, null),
        Ce.createElement(
          Ot.Cancel,
          { asChild: !0 },
          Ce.createElement(
            $e,
            null,
            Ce.createElement(tr.FormattedMessage, { id: "cancel" })
          )
        )
      )
    )
  );
}
var Mde = H(Ot.Content, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 240,
    maxWidth: "fit-content",
    maxHeight: "85vh",
    marginTop: "-5vh",
    pointerEvents: "all",
    backgroundColor: "$panel",
    padding: "$1",
    borderRadius: "$2",
    font: "$ui",
    zIndex: 999999,
    "&:focus": { outline: "none" },
  }),
  Bde = H(Ot.Overlay, {
    backgroundColor: "rgba(0, 0, 0, .15)",
    position: "absolute",
    pointerEvents: "all",
    inset: 0,
    zIndex: 999998,
  });
function Fc(t) {
  var n = t,
    { onSelect: r } = n,
    e = ot(n, ["onSelect"]);
  return Ce.createElement(
    Ot.Action,
    { asChild: !0, onClick: r, onSelect: r },
    Ce.createElement($e, S({}, e))
  );
}
var Ede = (r) =>
    Object.values(r.document.pages).sort(
      (e, t) => (e.childIndex || 0) - (t.childIndex || 0)
    ),
  Rde = (r) => r.document.pages[r.appState.currentPageId].name,
  Ade = (r) => r.document.pages[r.appState.currentPageId].id;
function Gc() {
  let r = ge(),
    e = (0, Br.useIntl)(),
    t = we.useRef(!1),
    [n, o] = we.useState(!1);
  we.useEffect(() => {
    t.current !== n && (t.current = n);
  }, [n]);
  let s = we.useCallback(() => {
      o(!1);
    }, [o]),
    a = we.useCallback(
      (i) => {
        t.current !== i && o(i);
      },
      [o]
    ),
    d = r.useStore(Rde);
  return we.createElement(
    Jt.Root,
    { dir: "ltr", open: n, onOpenChange: a },
    we.createElement(
      Jt.Trigger,
      { dir: "ltr", asChild: !0, id: "TD-Page" },
      we.createElement(
        Ie,
        { variant: "text" },
        d || e.formatMessage({ id: "page" })
      )
    ),
    we.createElement(
      At,
      { variant: "menu", align: "start", sideOffset: 4 },
      n && we.createElement(Lde, { onClose: s })
    )
  );
}
function Lde({ onClose: r }) {
  let e = ge(),
    t = (0, Br.useIntl)(),
    n = e.useStore(Ede),
    o = e.useStore(Ade),
    s = t.formatMessage({ id: "page" }),
    a = we.useCallback(() => {
      let f = s + " " + (Object.keys(e.document.pages).length + 1);
      e.createPage(void 0, f);
    }, [e]),
    d = we.useCallback(
      (f) => {
        r(), e.changePage(f);
      },
      [e]
    ),
    [i, c] = we.useState(null),
    [u, p] = we.useState(null),
    m = we.useCallback((f) => {
      c(f.currentTarget.id),
        p(n.findIndex((T) => T.id === f.currentTarget.id)),
        (f.dataTransfer.effectAllowed = "move");
    }, []),
    h = we.useCallback(
      (f) => {
        f.preventDefault();
        let T = n.findIndex((y) => y.id === f.currentTarget.id),
          x = f.currentTarget.getBoundingClientRect();
        (T = (f.clientY - x.top) / x.height < 0.5 ? T : T + 1), p(T);
      },
      [i, n]
    ),
    g = we.useCallback(() => {
      i !== null && u !== null && e.movePage(i, u), c(null), p(null);
    }, [i, u]);
  return we.createElement(
    we.Fragment,
    null,
    we.createElement(
      Jt.RadioGroup,
      { dir: "ltr", value: o, onValueChange: d },
      n.map((f, T) =>
        we.createElement(
          Hde,
          {
            key: f.id,
            isDropAbove: T === u && T === 0,
            isDropBelow: u !== null && T === u - 1,
          },
          we.createElement(
            Jt.RadioItem,
            {
              title: f.name || s,
              value: f.id,
              key: f.id,
              id: f.id,
              asChild: !0,
              onDragOver: h,
              onDragStart: m,
              onDrop: g,
              draggable: !0,
            },
            we.createElement(
              zde,
              null,
              we.createElement("span", { id: f.id }, f.name || s),
              we.createElement(
                Jt.ItemIndicator,
                null,
                we.createElement(bt, null, we.createElement(Ks.CheckIcon, null))
              )
            )
          ),
          we.createElement(jc, { page: f, onClose: r })
        )
      )
    ),
    we.createElement(Be, null),
    we.createElement(
      Jt.Item,
      { onSelect: a, asChild: !0 },
      we.createElement(
        $e,
        null,
        we.createElement(
          "span",
          null,
          we.createElement(Br.FormattedMessage, { id: "create.page" })
        ),
        we.createElement(bt, null, we.createElement(Ks.PlusIcon, null))
      )
    )
  );
}
var Hde = H("div", {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridAutoFlow: "column",
    margin: 0,
    '& > *[data-shy="true"]': { opacity: 0 },
    '&:hover > *[data-shy="true"]': { opacity: 1 },
    variants: {
      isDropAbove: {
        true: {
          "&::after": {
            content: "",
            display: "block",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "1px",
            backgroundColor: "$selected",
            zIndex: 999,
            pointerEvents: "none",
          },
        },
      },
      isDropBelow: {
        true: {
          "&::after": {
            content: "",
            display: "block",
            position: "absolute",
            width: "100%",
            height: "1px",
            top: "100%",
            backgroundColor: "$selected",
            zIndex: 999,
            pointerEvents: "none",
          },
        },
      },
    },
  }),
  zde = H($e, { minWidth: 128 });
var co = V(require("@radix-ui/react-dropdown-menu")),
  po = require("@radix-ui/react-icons"),
  pe = V(require("react")),
  un = require("react-intl");
var Ode = (r) => r.appState.currentStyle,
  Fde = (r) => r.document.pageStates[r.appState.currentPageId].selectedIds,
  jde = Object.keys(Ko),
  Vc = {
    ["draw"]: pe.createElement(rd, null),
    ["solid"]: pe.createElement(sd, null),
    ["dashed"]: pe.createElement(nd, null),
    ["dotted"]: pe.createElement(od, null),
  },
  Gde = {
    ["small"]: pe.createElement(ad, null),
    ["medium"]: pe.createElement(ld, null),
    ["large"]: pe.createElement(dd, null),
  },
  Vde = {
    ["start"]: pe.createElement(po.TextAlignLeftIcon, null),
    ["middle"]: pe.createElement(po.TextAlignCenterIcon, null),
    ["end"]: pe.createElement(po.TextAlignRightIcon, null),
    ["justify"]: pe.createElement(po.TextAlignJustifyIcon, null),
  },
  $de = (r) => (r.settings.isDarkMode ? "dark" : "light"),
  Nde = (r) => r.settings.keepStyleMenuOpen,
  Wde = (r) => {
    let { activeTool: e, currentPageId: t } = r.appState;
    switch (e) {
      case "select": {
        let n = r.document.pages[t],
          o = !1,
          s = !1;
        for (let a of r.document.pageStates[t].selectedIds)
          "text" in n.shapes[a] && (o = !0), "label" in n.shapes[a] && (s = !0);
        return o ? "text" : s ? "label" : "";
      }
      case "text":
        return "text";
      case "rectangle":
        return "label";
      case "ellipse":
        return "label";
      case "triangle":
        return "label";
      case "arrow":
        return "label";
      case "line":
        return "label";
    }
    return !1;
  },
  $c = pe.memo(function () {
    let e = ge(),
      t = (0, un.useIntl)(),
      n = e.useStore($de),
      o = e.useStore(Nde),
      s = e.useStore(Wde),
      a = e.useStore(Ode),
      d = e.useStore(Fde),
      [i, c] = pe.useState(a),
      u = pe.useRef(a);
    pe.useEffect(() => {
      let {
          appState: { currentStyle: b },
          page: y,
          selectedIds: R,
        } = e,
        K = {};
      if (R.length <= 0) K = b;
      else {
        let L = new Set([]);
        e.selectedIds
          .map((v) => y.shapes[v])
          .forEach((v) => {
            jde.forEach((I) => {
              if (!L.has(I))
                if (K[I] === void 0) K[I] = v.style[I];
                else {
                  if (K[I] === v.style[I]) return;
                  (K[I] = v.style[I]), L.add(I);
                }
            });
          });
      }
      JSON.stringify(K) !== JSON.stringify(u.current) &&
        ((u.current = K), c(K));
    }, [a, d]);
    let p = pe.useCallback((b) => {
        e.setSetting("keepStyleMenuOpen", b);
      }, []),
      m = pe.useCallback((b) => {
        e.style({ isFilled: b });
      }, []),
      h = pe.useCallback((b) => {
        e.style({ dash: b });
      }, []),
      g = pe.useCallback((b) => {
        e.style({ size: b });
      }, []),
      f = pe.useCallback((b) => {
        e.style({ font: b });
      }, []),
      T = pe.useCallback((b) => {
        e.style({ textAlign: b });
      }, []),
      x = pe.useCallback(
        (b) => {
          e.setMenuOpen(b);
        },
        [e]
      );
    return pe.createElement(
      co.Root,
      { dir: "ltr", onOpenChange: x, open: o ? !0 : void 0 },
      pe.createElement(
        co.Trigger,
        { asChild: !0, id: "TD-Styles" },
        pe.createElement(
          Ie,
          { "aria-label": t.formatMessage({ id: "styles" }), variant: "text" },
          pe.createElement(un.FormattedMessage, { id: "styles" }),
          pe.createElement(
            Kde,
            { style: { color: Uo[n][i.color] } },
            i.isFilled &&
              pe.createElement(yi, {
                size: 16,
                stroke: "none",
                fill: ks[n][i.color],
              }),
            Vc[i.dash]
          )
        )
      ),
      pe.createElement(
        At,
        {
          id: "TD-StylesMenu",
          side: "bottom",
          align: "end",
          sideOffset: 4,
          alignOffset: 4,
        },
        pe.createElement(
          Er,
          { variant: "tall", id: "TD-Styles-Color-Container" },
          pe.createElement(
            "span",
            null,
            pe.createElement(un.FormattedMessage, { id: "style.menu.color" })
          ),
          pe.createElement(
            Ude,
            null,
            Object.keys(Uo.light).map((b) =>
              pe.createElement(
                co.Item,
                {
                  key: b,
                  onSelect: Oe,
                  asChild: !0,
                  id: `TD-Styles-Color-Swatch-${b}`,
                },
                pe.createElement(
                  Ie,
                  {
                    variant: "icon",
                    isActive: i.color === b,
                    onClick: () => e.style({ color: b }),
                    "aria-label": t.formatMessage({ id: b }),
                  },
                  pe.createElement(yi, {
                    size: 18,
                    strokeWidth: 2.5,
                    fill: i.isFilled ? ks[n][b] : "transparent",
                    stroke: Uo.light[b],
                  })
                )
              )
            )
          )
        ),
        pe.createElement(
          Rt,
          {
            variant: "styleMenu",
            checked: !!i.isFilled,
            onCheckedChange: m,
            id: "TD-Styles-Fill",
          },
          pe.createElement(un.FormattedMessage, { id: "style.menu.fill" })
        ),
        pe.createElement(
          Er,
          { id: "TD-Styles-Dash-Container" },
          pe.createElement(un.FormattedMessage, { id: "style.menu.dash" }),
          pe.createElement(
            _s,
            { dir: "ltr", value: i.dash, onValueChange: h },
            Object.values(Sn).map((b) =>
              pe.createElement(
                Tr,
                {
                  key: b,
                  isActive: b === i.dash,
                  value: b,
                  onSelect: Oe,
                  bp: rt,
                  id: `TD-Styles-Dash-${b}`,
                  "aria-label": t.formatMessage({ id: b }),
                },
                Vc[b]
              )
            )
          )
        ),
        pe.createElement(
          Er,
          { id: "TD-Styles-Size-Container" },
          pe.createElement(un.FormattedMessage, { id: "style.menu.size" }),
          pe.createElement(
            _s,
            { dir: "ltr", value: i.size, onValueChange: g },
            Object.values(Sr).map((b) =>
              pe.createElement(
                Tr,
                {
                  key: b,
                  isActive: b === i.size,
                  value: b,
                  onSelect: Oe,
                  bp: rt,
                  id: `TD-Styles-Dash-${b}`,
                  "aria-label": t.formatMessage({ id: b }),
                },
                Gde[b]
              )
            )
          )
        ),
        (s === "text" || s === "label") &&
          pe.createElement(
            pe.Fragment,
            null,
            pe.createElement(Be, null),
            pe.createElement(
              Er,
              { id: "TD-Styles-Font-Container" },
              pe.createElement(un.FormattedMessage, { id: "style.menu.font" }),
              pe.createElement(
                _s,
                { dir: "ltr", value: i.font, onValueChange: f },
                Object.values(Ao).map((b) =>
                  pe.createElement(
                    Tr,
                    {
                      key: b,
                      isActive: b === i.font,
                      value: b,
                      onSelect: Oe,
                      bp: rt,
                      id: `TD-Styles-Font-${b}`,
                    },
                    pe.createElement(_de, { fontStyle: b }, "Aa")
                  )
                )
              )
            ),
            s === "text" &&
              pe.createElement(
                Er,
                { id: "TD-Styles-Align-Container" },
                pe.createElement(un.FormattedMessage, {
                  id: "style.menu.align",
                }),
                pe.createElement(
                  _s,
                  { dir: "ltr", value: i.textAlign, onValueChange: T },
                  Object.values(Gt).map((b) =>
                    pe.createElement(
                      Tr,
                      {
                        key: b,
                        isActive: b === i.textAlign,
                        value: b,
                        onSelect: Oe,
                        bp: rt,
                        id: `TD-Styles-Align-${b}`,
                      },
                      Vde[b]
                    )
                  )
                )
              )
          ),
        pe.createElement(Be, null),
        pe.createElement(
          Rt,
          {
            variant: "styleMenu",
            checked: o,
            onCheckedChange: p,
            id: "TD-Styles-Keep-Open",
          },
          pe.createElement(un.FormattedMessage, { id: "style.menu.keep.open" })
        )
      )
    );
  }),
  Ude = H("div", {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: 0,
  }),
  Er = H("div", {
    position: "relative",
    width: "100%",
    background: "none",
    border: "none",
    cursor: "pointer",
    minHeight: "32px",
    outline: "none",
    color: "$text",
    fontFamily: "$ui",
    fontWeight: 400,
    fontSize: "$1",
    padding: "$2 0 $2 $3",
    borderRadius: 4,
    userSelect: "none",
    WebkitUserSelect: "none",
    margin: 0,
    display: "flex",
    gap: "$3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    variants: {
      variant: {
        tall: {
          alignItems: "flex-start",
          padding: "0 0 0 $3",
          "& > span": { paddingTop: "$4" },
        },
      },
    },
  }),
  _s = H(co.DropdownMenuRadioGroup, {
    display: "flex",
    flexDirection: "row",
    gap: "$1",
  }),
  Kde = H("div", { display: "grid", "& > *": { gridColumn: 1, gridRow: 1 } }),
  _de = H("div", {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "$3",
    variants: {
      fontStyle: {
        ["script"]: { fontFamily: "Caveat Brush" },
        ["sans"]: { fontFamily: "Recursive" },
        ["serif"]: { fontFamily: "Georgia" },
        ["mono"]: { fontFamily: "Recursive Mono" },
      },
    },
  });
var Ys = V(require("@radix-ui/react-dropdown-menu")),
  Bt = V(require("react")),
  nr = require("react-intl");
var Yde = (r) => r.document.pageStates[r.appState.currentPageId].camera.zoom,
  Nc = function () {
    let e = ge(),
      t = e.useStore(Yde);
    return Bt.createElement(
      Ys.Root,
      { dir: "ltr" },
      Bt.createElement(
        Ys.Trigger,
        { dir: "ltr", asChild: !0, id: "TD-Zoom" },
        Bt.createElement(
          Zde,
          { onDoubleClick: e.resetZoom, variant: "text" },
          Math.round(t * 100),
          "%"
        )
      ),
      Bt.createElement(
        At,
        { align: "end" },
        Bt.createElement(
          ke,
          { onSelect: Oe, onClick: e.zoomIn, kbd: "#+", id: "TD-Zoom-Zoom_In" },
          Bt.createElement(nr.FormattedMessage, { id: "zoom.in" })
        ),
        Bt.createElement(
          ke,
          {
            onSelect: Oe,
            onClick: e.zoomOut,
            kbd: "#\u2212",
            id: "TD-Zoom-Zoom_Out",
          },
          Bt.createElement(nr.FormattedMessage, { id: "zoom.out" })
        ),
        Bt.createElement(
          ke,
          {
            onSelect: Oe,
            onClick: e.resetZoom,
            kbd: "\u21E70",
            id: "TD-Zoom-Zoom_To_100%",
          },
          Bt.createElement(nr.FormattedMessage, { id: "zoom.to" }),
          " 100%"
        ),
        Bt.createElement(
          ke,
          {
            onSelect: Oe,
            onClick: e.zoomToFit,
            kbd: "\u21E71",
            id: "TD-Zoom-To_Fit",
          },
          Bt.createElement(nr.FormattedMessage, { id: "zoom.to.fit" })
        ),
        Bt.createElement(
          ke,
          {
            onSelect: Oe,
            onClick: e.zoomToSelection,
            kbd: "\u21E72",
            id: "TD-Zoom-To_Selection",
          },
          Bt.createElement(nr.FormattedMessage, { id: "zoom.to.selection" })
        )
      )
    );
  },
  Zde = H(Ie, { minWidth: 56 });
function Xde({
  readOnly: r,
  showPages: e,
  showMenu: t,
  showStyles: n,
  showZoom: o,
  showMultiplayerMenu: s,
}) {
  let a = ge(),
    d = (0, Wc.useIntl)();
  return ut.createElement(
    qde,
    null,
    (t || e) &&
      ut.createElement(
        So,
        { side: "left", id: "TD-MenuPanel" },
        t && ut.createElement(Ad, { readOnly: r }),
        s && ut.createElement(Oc, null),
        e && ut.createElement(Gc, null)
      ),
    ut.createElement(Jde, null),
    (n || o) &&
      ut.createElement(
        So,
        { side: "right" },
        a.readOnly
          ? ut.createElement(Qde, null, "Read Only")
          : ut.createElement(
              ut.Fragment,
              null,
              ut.createElement(
                on,
                {
                  kbd: "#Z",
                  label: d.formatMessage({ id: "undo" }),
                  onClick: a.undo,
                  id: "TD-TopPanel-Undo",
                  "aria-label": d.formatMessage({ id: "undo" }),
                },
                ut.createElement(Ci, null)
              ),
              ut.createElement(
                on,
                {
                  kbd: "#\u21E7Z",
                  label: d.formatMessage({ id: "redo" }),
                  onClick: a.redo,
                  id: "TD-TopPanel-Redo",
                  "aria-label": d.formatMessage({ id: "redo" }),
                },
                ut.createElement(Ci, { flipHorizontal: !0 })
              )
            ),
        o && ut.createElement(Nc, null),
        n && !r && ut.createElement($c, null)
      )
  );
}
var qde = H("div", {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    pointerEvents: "none",
    "& > *": { pointerEvents: "all" },
  }),
  Jde = H("div", { flexGrow: 2, pointerEvents: "none" }),
  Qde = H("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "$ui",
    fontSize: "$1",
    paddingLeft: "$4",
    paddingRight: "$1",
    userSelect: "none",
    WebkitUserSelect: "none",
  }),
  Uc = ut.memo(Xde);
var Kc = V(require("react"));
function _c(r) {
  Kc.default.useEffect(() => {
    let e = !1,
      t = !1,
      n = r.current;
    if (!n) return;
    let o = (i) => {
        i.key === " " &&
          !t &&
          ((t = !0),
          e
            ? n.setAttribute("style", "cursor: grabbing !important")
            : n.setAttribute("style", "cursor: grab !important"));
      },
      s = (i) => {
        i.key === " " && ((t = !1), n.setAttribute("style", "cursor: initial"));
      },
      a = (i) => {
        (e = !0),
          i.button === 1 &&
            n.setAttribute("style", "cursor: grabbing !important"),
          i.button === 0 &&
            t &&
            n.setAttribute("style", "cursor: grabbing !important");
      },
      d = () => {
        (e = !1),
          t
            ? n.setAttribute("style", "cursor: grab !important")
            : n.setAttribute("style", "cursor: initial");
      };
    return (
      n.addEventListener("keydown", o),
      n.addEventListener("keyup", s),
      n.addEventListener("pointerdown", a),
      n.addEventListener("pointerup", d),
      () => {
        n.removeEventListener("keydown", o),
          n.removeEventListener("keyup", s),
          n.removeEventListener("pointerdown", a),
          n.removeEventListener("pointerup", d);
      }
    );
  }, [r.current]);
}
var Dt = require("@tldraw/core"),
  ve = require("@tldraw/vec");
var Rr = require("idb-keyval"),
  Yc = "tldraw_clipboard";
function Zc() {
  return ue(this, null, function* () {
    return (0, Rr.get)(Yc);
  });
}
function Xc(r) {
  return ue(this, null, function* () {
    return (0, Rr.set)(Yc, r);
  });
}
var qc = require("@tldraw/core"),
  ko = V(require("idb-keyval")),
  Jc = V(require("zustand")),
  Qc = V(require("zustand/vanilla"));
var ua = class {
  constructor(e, t, n, o) {
    l(this, "_idbId");
    l(this, "initialState");
    l(this, "store");
    l(this, "pointer", -1);
    l(this, "_state");
    l(this, "_status", "loading");
    l(this, "stack", []);
    l(this, "_snapshot");
    l(this, "useStore");
    l(this, "ready");
    l(this, "isPaused", !1);
    l(this, "persist", (e, t) => {
      if (
        this._status === "ready" &&
        (this.onPersist && this.onPersist(this._state, e, t), this._idbId)
      )
        return ko.set(this._idbId, this._state).catch((n) => console.error(n));
    });
    l(this, "applyPatch", (e, t) => {
      let n = this._state,
        o = qc.Utils.deepMerge(this._state, e),
        s = this.cleanup(o, n, e, t);
      return (
        this.onStateWillChange && this.onStateWillChange(s, t),
        (this._state = s),
        this.store.setState(this._state, !0),
        this.onStateDidChange && this.onStateDidChange(this._state, t),
        this
      );
    });
    l(this, "migrate", (e) => e);
    l(this, "cleanup", (e, t, n, o) => e);
    l(this, "onStateWillChange");
    l(this, "onStateDidChange");
    l(
      this,
      "patchState",
      (e, t) => (
        this.applyPatch(e, t),
        this.onPatch && this.onPatch(this._state, e, t),
        this
      )
    );
    l(this, "replaceState", (e, t) => {
      let n = this.cleanup(e, this._state, e, t);
      return (
        this.onStateWillChange && this.onStateWillChange(n, "replace"),
        (this._state = n),
        this.store.setState(this._state, !0),
        this.onStateDidChange && this.onStateDidChange(this._state, "replace"),
        this
      );
    });
    l(
      this,
      "setState",
      (e, t = e.id) => (
        this.pointer < this.stack.length - 1 &&
          (this.stack = this.stack.slice(0, this.pointer + 1)),
        this.stack.push(w(S({}, e), { id: t })),
        (this.pointer = this.stack.length - 1),
        this.applyPatch(e.after, t),
        this.onCommand && this.onCommand(this._state, e, t),
        this.persist(e.after, t),
        this
      )
    );
    l(this, "onReady");
    l(this, "onPatch");
    l(this, "onCommand");
    l(this, "onPersist");
    l(this, "onReplace");
    l(this, "onReset");
    l(this, "onResetHistory");
    l(this, "onUndo");
    l(this, "onRedo");
    l(
      this,
      "reset",
      () => (
        this.onStateWillChange &&
          this.onStateWillChange(this.initialState, "reset"),
        (this._state = this.initialState),
        this.store.setState(this._state, !0),
        this.resetHistory(),
        this.persist({}, "reset"),
        this.onStateDidChange && this.onStateDidChange(this._state, "reset"),
        this.onReset && this.onReset(this._state),
        this
      )
    );
    l(
      this,
      "replaceHistory",
      (e, t = e.length - 1) => (
        (this.stack = e),
        (this.pointer = t),
        this.onReplace && this.onReplace(this._state),
        this
      )
    );
    l(
      this,
      "resetHistory",
      () => (
        (this.stack = []),
        (this.pointer = -1),
        this.onResetHistory && this.onResetHistory(this._state),
        this
      )
    );
    l(this, "undo", () => {
      if (!this.isPaused) {
        if (!this.canUndo) return this;
        let e = this.stack[this.pointer];
        this.pointer--,
          this.applyPatch(e.before, "undo"),
          this.persist(e.before, "undo");
      }
      return this.onUndo && this.onUndo(this._state), this;
    });
    l(this, "redo", () => {
      if (!this.isPaused) {
        if (!this.canRedo) return this;
        this.pointer++;
        let e = this.stack[this.pointer];
        this.applyPatch(e.after, "redo"), this.persist(e.after, "undo");
      }
      return this.onRedo && this.onRedo(this._state), this;
    });
    l(this, "setSnapshot", () => ((this._snapshot = S({}, this._state)), this));
    l(this, "forceUpdate", () => {
      this.store.setState(this._state, !0);
    });
    (this._idbId = t),
      (this._state = wt(e)),
      (this._snapshot = wt(e)),
      (this.initialState = wt(e)),
      (this.store = (0, Qc.default)(() => this._state)),
      (this.useStore = (0, Jc.default)(this.store)),
      (this.ready = new Promise((s) => {
        let a = "none";
        this._idbId
          ? ((a = "restored"),
            ko
              .get(this._idbId)
              .then((d) =>
                ue(this, null, function* () {
                  if (d) {
                    let i = d;
                    if (n) {
                      let u = yield ko.get(t + "_version");
                      u &&
                        u < n &&
                        ((i = o ? o(d, e, u) : e), (a = "migrated"));
                    }
                    yield ko.set(t + "_version", n || -1);
                    let c = this._state.appState.isEmptyCanvas;
                    (i = this.migrate(i)),
                      (this._state = wt(i)),
                      (this._snapshot = wt(i)),
                      (this._state.appState.isEmptyCanvas = c),
                      this.store.setState(this._state, !0);
                  } else yield ko.set(t + "_version", n || -1);
                  (this._status = "ready"), s(a);
                })
              )
              .catch((d) => console.error(d)))
          : ((this._status = "ready"), s(a));
      }).then((s) => (this.onReady && this.onReady(s), s)));
  }
  pause() {
    this.isPaused = !0;
  }
  resume() {
    this.isPaused = !1;
  }
  get canUndo() {
    return this.pointer > -1;
  }
  get canRedo() {
    return this.pointer < this.stack.length - 1;
  }
  get state() {
    return this._state;
  }
  get status() {
    return this._status;
  }
  get snapshot() {
    return this._snapshot;
  }
};
var ep = require("@tldraw/core"),
  ha = require("@tldraw/vec");
function tp(r, e, t) {
  let { currentPageId: n } = r,
    o = e.map((m) => r.getShape(m)),
    s = o.map((m) => ({
      id: m.id,
      point: [...m.point],
      bounds: k.getBounds(m),
    })),
    a = ep.Utils.getCommonBounds(s.map(({ bounds: m }) => m)),
    d = a.minX + a.width / 2,
    i = a.minY + a.height / 2,
    c = Object.fromEntries(
      s.map(({ id: m, point: h, bounds: g }) => [
        m,
        {
          prev: h,
          next: {
            ["top"]: [h[0], a.minY],
            ["centerVertical"]: [h[0], i - g.height / 2],
            ["bottom"]: [h[0], a.maxY - g.height],
            ["left"]: [a.minX, h[1]],
            ["centerHorizontal"]: [d - g.width / 2, h[1]],
            ["right"]: [a.maxX - g.width, h[1]],
          }[t],
        },
      ])
    ),
    { before: u, after: p } = k.mutateShapes(
      r.state,
      e,
      (m) => (c[m.id] ? { point: c[m.id].next } : m),
      n,
      !1
    );
  return (
    o.forEach((m) => {
      if (m.type === "group") {
        let h = ha.Vec.sub(p[m.id].point, u[m.id].point);
        m.children.forEach((g) => {
          let f = r.getShape(g);
          (u[f.id] = { point: f.point }),
            (p[f.id] = { point: ha.Vec.add(f.point, h) });
        }),
          delete u[m.id],
          delete p[m.id];
      }
    }),
    {
      id: "align",
      before: {
        document: {
          pages: { [n]: { shapes: u } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: p } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
function np(r, e) {
  return {
    id: "change_page",
    before: { appState: { currentPageId: r.currentPageId } },
    after: { appState: { currentPageId: e } },
  };
}
var sp = require("@tldraw/core");
function op(r, e) {
  var o;
  let t = r,
    n = new Set(e);
  for (; n.has(t); )
    t = ((o = /^.*(\d+)$/.exec(t)) == null ? void 0 : o[1])
      ? t.replace(/(\d+)(?=\D?)$/, (s) => (+s + 1).toString())
      : `${t} 1`;
  return t;
}
function rp(r, e, t) {
  let n = { shapes: {}, bindings: {} },
    o = { shapes: {}, bindings: {} },
    s = [],
    a = new Set(),
    d = new Set();
  e
    .filter((c) => !k.getShape(r, c, t).isLocked)
    .forEach((c) => {
      a.add(c);
      let u = k.getShape(r, c, t);
      (n.shapes[c] = u),
        (o.shapes[c] = void 0),
        u.children !== void 0 &&
          u.children.forEach((p) => {
            a.add(p);
            let m = k.getShape(r, p, t);
            (n.shapes[p] = m), (o.shapes[p] = void 0);
          }),
        u.parentId !== t && s.push(k.getShape(r, u.parentId, t)),
        u.assetId && d.add(u.assetId);
    }),
    s.forEach((c) => {
      var u;
      e.includes(c.id) ||
        (a.add(c.id),
        (n.shapes[c.id] = { children: c.children }),
        (o.shapes[c.id] = {
          children: c.children.filter((p) => !e.includes(p)),
        }),
        ((u = o.shapes[c.id]) == null ? void 0 : u.children.length) === 0 &&
          ((o.shapes[c.id] = void 0),
          (n.shapes[c.id] = k.getShape(r, c.id, t))));
    });
  let i = k.getPage(r, t);
  return (
    Object.values(i.bindings)
      .filter((c) => a.has(c.fromId) || a.has(c.toId))
      .forEach((c) => {
        for (let u of [c.toId, c.fromId])
          if (o.shapes[u] === void 0) {
            (n.bindings[c.id] = c), (o.bindings[c.id] = void 0);
            let p = i.shapes[u];
            p &&
              p.handles &&
              Object.values(p.handles)
                .filter((m) => m.bindingId === c.id)
                .forEach((m) => {
                  var h, g, f, T, x, b;
                  (n.shapes[u] = w(S({}, n.shapes[u]), {
                    handles: w(
                      S({}, (h = n.shapes[u]) == null ? void 0 : h.handles),
                      {
                        [m.id]: w(
                          S(
                            {},
                            (f =
                              (g = n.shapes[u]) == null ? void 0 : g.handles) ==
                              null
                              ? void 0
                              : f[m.id]
                          ),
                          { bindingId: c.id }
                        ),
                      }
                    ),
                  })),
                    a.has(u) ||
                      (o.shapes[u] = w(S({}, o.shapes[u]), {
                        handles: w(
                          S({}, (T = o.shapes[u]) == null ? void 0 : T.handles),
                          {
                            [m.id]: w(
                              S(
                                {},
                                (b =
                                  (x = o.shapes[u]) == null
                                    ? void 0
                                    : x.handles) == null
                                  ? void 0
                                  : b[m.id]
                              ),
                              { bindingId: void 0 }
                            ),
                          }
                        ),
                      }));
                });
          }
      }),
    Object.values(r.document.pages)
      .flatMap((c) => Object.values(c.shapes))
      .forEach((c) => {
        "assetId" in c && c.assetId && !a.has(c.id) && d.delete(c.assetId);
      }),
    { before: n, after: o, assetsToRemove: Array.from(d) }
  );
}
function ip(r, e, t = sp.Utils.uniqueId(), n = "Page") {
  let { currentPageId: o } = r,
    s = Object.values(r.state.document.pages).sort((u, p) => {
      var m, h;
      return (
        ((m = u.childIndex) != null ? m : 0) -
        ((h = p.childIndex) != null ? h : 0)
      );
    }),
    a = s[s.length - 1],
    d = (a == null ? void 0 : a.childIndex)
      ? (a == null ? void 0 : a.childIndex) + 1
      : 1,
    i = {
      id: t,
      name: op(
        n,
        s.map((u) => {
          var p;
          return (p = u.name) != null ? p : "";
        })
      ),
      childIndex: d,
      shapes: {},
      bindings: {},
    },
    c = {
      id: t,
      selectedIds: [],
      camera: { point: e, zoom: 1 },
      editingId: void 0,
      bindingId: void 0,
      hoveredId: void 0,
      pointedId: void 0,
    };
  return {
    id: "create_page",
    before: {
      appState: { currentPageId: o },
      document: { pages: { [t]: void 0 }, pageStates: { [t]: void 0 } },
    },
    after: {
      appState: { currentPageId: i.id },
      document: { pages: { [t]: i }, pageStates: { [t]: c } },
    },
  };
}
function ma(r, e, t = []) {
  let { currentPageId: n } = r,
    o = {},
    s = {};
  e.forEach((i) => {
    (o[i.id] = void 0), (s[i.id] = i);
  });
  let a = {},
    d = {};
  return (
    t.forEach((i) => {
      (a[i.id] = void 0), (d[i.id] = i);
    }),
    {
      id: "create",
      before: {
        document: {
          pages: { [n]: { shapes: o, bindings: a } },
          pageStates: { [n]: { selectedIds: [...r.selectedIds] } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: s, bindings: d } },
          pageStates: { [n]: { selectedIds: e.map((i) => i.id) } },
        },
      },
    }
  );
}
function ap(r, e) {
  let {
      currentPageId: t,
      document: { pages: n, pageStates: o },
    } = r,
    s = Object.values(n).sort(
      (i, c) => (i.childIndex || 0) - (c.childIndex || 0)
    ),
    a = s.findIndex((i) => i.id === e),
    d;
  return (
    e === t
      ? a === s.length - 1
        ? (d = s[s.length - 2].id)
        : (d = s[a + 1].id)
      : (d = t),
    {
      id: "delete_page",
      before: {
        appState: { currentPageId: e },
        document: {
          pages: { [e]: S({}, n[e]) },
          pageStates: { [e]: S({}, o[e]) },
        },
      },
      after: {
        appState: { currentPageId: d },
        document: { pages: { [e]: void 0 }, pageStates: { [e]: void 0 } },
      },
    }
  );
}
var ece = (r, e) => {
  let t = S({}, r);
  return e.forEach((n) => (t[n] = void 0)), t;
};
function ga(r, e, t = r.currentPageId) {
  let {
      pageState: n,
      selectedIds: o,
      document: { assets: s },
    } = r,
    { before: a, after: d, assetsToRemove: i } = rp(r.state, e, t),
    c = ece(s, i);
  return {
    id: "delete",
    before: {
      document: {
        assets: s,
        pages: { [t]: a },
        pageStates: { [t]: { selectedIds: [...r.selectedIds] } },
      },
    },
    after: {
      document: {
        assets: c,
        pages: { [t]: d },
        pageStates: {
          [t]: {
            selectedIds: o.filter((u) => !e.includes(u)),
            hoveredId:
              n.hoveredId && e.includes(n.hoveredId) ? void 0 : n.hoveredId,
          },
        },
      },
    },
  };
}
var lp = require("@tldraw/core"),
  fa = V(require("@tldraw/vec"));
function dp(r, e, t) {
  let { currentPageId: n } = r,
    o = e.map((i) => r.getShape(i)),
    s = Object.fromEntries(tce(o, t).map((i) => [i.id, i])),
    { before: a, after: d } = k.mutateShapes(
      r.state,
      e.filter((i) => s[i] !== void 0),
      (i) => {
        var c;
        return { point: (c = s[i.id]) == null ? void 0 : c.next };
      },
      n
    );
  return (
    o.forEach((i) => {
      if (i.type === "group") {
        let c = fa.default.sub(d[i.id].point, a[i.id].point);
        i.children.forEach((u) => {
          let p = r.getShape(u);
          (a[p.id] = { point: p.point }),
            (d[p.id] = { point: fa.default.add(p.point, c) });
        }),
          delete a[i.id],
          delete d[i.id];
      }
    }),
    {
      id: "distribute",
      before: {
        document: {
          pages: { [n]: { shapes: a } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: d } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
function tce(r, e) {
  let t = r.map((a) => {
      let d = k.getShapeUtil(a);
      return {
        id: a.id,
        point: [...a.point],
        bounds: d.getBounds(a),
        center: d.getCenter(a),
      };
    }),
    n = t.length,
    o = lp.Utils.getCommonBounds(t.map(({ bounds: a }) => a)),
    s = [];
  switch (e) {
    case "horizontal": {
      let a = t.reduce((d, i) => d + i.bounds.width, 0);
      if (a > o.width) {
        let d = t.sort((m, h) => m.bounds.minX - h.bounds.minX)[0],
          i = t.sort((m, h) => h.bounds.maxX - m.bounds.maxX)[0],
          c = t
            .filter((m) => m !== d && m !== i)
            .sort((m, h) => m.center[0] - h.center[0]),
          u = (i.center[0] - d.center[0]) / (n - 1),
          p = d.center[0] + u;
        c.forEach(({ id: m, point: h, bounds: g }, f) => {
          s.push({ id: m, prev: h, next: [p + u * f - g.width / 2, g.minY] });
        });
      } else {
        let d = t.sort((u, p) => u.center[0] - p.center[0]),
          i = o.minX,
          c = (o.width - a) / (n - 1);
        d.forEach(({ id: u, point: p, bounds: m }) => {
          s.push({ id: u, prev: p, next: [i, m.minY] }), (i += m.width + c);
        });
      }
      break;
    }
    case "vertical": {
      let a = t.reduce((d, i) => d + i.bounds.height, 0);
      if (a > o.height) {
        let d = t.sort((m, h) => m.bounds.minY - h.bounds.minY)[0],
          i = t.sort((m, h) => h.bounds.maxY - m.bounds.maxY)[0],
          c = t
            .filter((m) => m !== d && m !== i)
            .sort((m, h) => m.center[1] - h.center[1]),
          u = (i.center[1] - d.center[1]) / (n - 1),
          p = d.center[1] + u;
        c.forEach(({ id: m, point: h, bounds: g }, f) => {
          s.push({ id: m, prev: h, next: [g.minX, p + u * f - g.height / 2] });
        });
      } else {
        let d = t.sort((u, p) => u.center[1] - p.center[1]),
          i = o.minY,
          c = (o.height - a) / (n - 1);
        d.forEach(({ id: u, point: p, bounds: m }) => {
          s.push({ id: u, prev: p, next: [m.minX, i] }), (i += m.height + c);
        });
      }
      break;
    }
  }
  return s;
}
var or = require("@tldraw/core");
function cp(r, e) {
  let {
      currentPageId: t,
      pageState: { camera: n },
    } = r,
    o = r.document.pages[e],
    s = or.Utils.uniqueId(),
    a = Object.fromEntries([
      [o.id, s],
      ...Object.keys(o.shapes).map((u) => [u, or.Utils.uniqueId()]),
      ...Object.keys(o.bindings).map((u) => [u, or.Utils.uniqueId()]),
    ]),
    d = Object.fromEntries(
      Object.entries(o.shapes).map(([u, p]) => [
        a[u],
        w(S({}, or.Utils.deepClone(p)), { id: a[u], parentId: a[p.parentId] }),
      ])
    ),
    i = Object.fromEntries(
      Object.entries(o.bindings).map(([u, p]) => [
        a[u],
        w(S({}, or.Utils.deepClone(p)), {
          id: a[p.id],
          fromId: a[p.fromId],
          toId: a[p.toId],
        }),
      ])
    );
  Object.values(o.bindings).forEach((u) => {
    let p = a[u.fromId],
      m = d[p].handles;
    m &&
      Object.values(m).forEach((f) => {
        f.bindingId === u.id && (f.bindingId = a[u.id]);
      });
    let h = a[u.toId],
      g = d[h].handles;
    g &&
      Object.values(g).forEach((f) => {
        f.bindingId === u.id && (f.bindingId = a[u.id]);
      });
  });
  let c = w(S({}, o), {
    id: a[o.id],
    name: o.name + " Copy",
    shapes: d,
    bindings: i,
  });
  return {
    id: "duplicate_page",
    before: {
      appState: { currentPageId: t },
      document: { pages: { [s]: void 0 }, pageStates: { [s]: void 0 } },
    },
    after: {
      appState: { currentPageId: s },
      document: {
        pages: { [s]: c },
        pageStates: {
          [s]: w(S({}, o), {
            id: s,
            selectedIds: [],
            camera: S({}, n),
            editingId: void 0,
            bindingId: void 0,
            hoveredId: void 0,
            pointedId: void 0,
          }),
        },
      },
    },
  };
}
var Kn = require("@tldraw/core"),
  Zs = require("@tldraw/vec");
function pp(r, e, t) {
  let { selectedIds: n, currentPageId: o, page: s, shapes: a } = r,
    d = { shapes: {}, bindings: {} },
    i = { shapes: {}, bindings: {} },
    c = {},
    u = e.map((h) => r.getShape(h)).filter((h) => !e.includes(h.parentId));
  u.forEach((h) => {
    let g = Kn.Utils.uniqueId();
    if (
      ((d.shapes[g] = void 0),
      (i.shapes[g] = w(S({}, Kn.Utils.deepClone(h)), {
        id: g,
        childIndex: k.getChildIndexAbove(r.state, h.id, o),
      })),
      h.children && (i.shapes[g].children = []),
      h.parentId !== o)
    ) {
      let f = r.getShape(h.parentId);
      (d.shapes[f.id] = w(S({}, d.shapes[f.id]), { children: f.children })),
        (i.shapes[f.id] = w(S({}, i.shapes[f.id]), {
          children: [...(i.shapes[f.id] || f).children, g],
        }));
    }
    c[h.id] = g;
  }),
    u.forEach((h) => {
      h.children &&
        h.children.forEach((g) => {
          var b, y;
          let f = r.getShape(g),
            T = Kn.Utils.uniqueId(),
            x = c[h.id];
          (d.shapes[T] = void 0),
            (i.shapes[T] = w(S({}, Kn.Utils.deepClone(f)), {
              id: T,
              parentId: x,
              childIndex: k.getChildIndexAbove(r.state, f.id, o),
            })),
            (c[g] = T),
            (y = (b = i.shapes[c[h.id]]) == null ? void 0 : b.children) ==
              null || y.push(T);
        });
    });
  let p = new Set(Object.keys(c));
  Object.values(s.bindings)
    .filter((h) => p.has(h.fromId) || p.has(h.toId))
    .forEach((h) => {
      if (p.has(h.fromId))
        if (p.has(h.toId)) {
          let g = Kn.Utils.uniqueId(),
            f = w(S({}, Kn.Utils.deepClone(h)), {
              id: g,
              fromId: c[h.fromId],
              toId: c[h.toId],
            });
          (d.bindings[g] = void 0), (i.bindings[g] = f);
          let T = i.shapes[f.fromId];
          Object.values(T.handles).forEach((x) => {
            x.bindingId === h.id && (x.bindingId = g);
          });
        } else {
          let g = i.shapes[c[h.fromId]];
          Object.values(g.handles).forEach((f) => {
            f.bindingId === h.id && (f.bindingId = void 0);
          });
        }
    });
  let m = Object.values(i.shapes);
  if (t) {
    let h = Kn.Utils.getCommonBounds(m.map((f) => k.getBounds(f))),
      g = Kn.Utils.getBoundsCenter(h);
    m.forEach((f) => {
      !f.point || (f.point = Zs.Vec.sub(t, Zs.Vec.sub(g, f.point)));
    });
  } else {
    let h = [16, 16];
    m.forEach((g) => {
      !g.point || (g.point = Zs.Vec.add(g.point, h));
    });
  }
  return (
    m.forEach((h) => {
      h.isLocked && (h.isLocked = !1);
    }),
    {
      id: "duplicate",
      before: {
        document: {
          pages: { [o]: d },
          pageStates: { [o]: { selectedIds: n } },
        },
      },
      after: {
        document: {
          pages: { [o]: i },
          pageStates: {
            [o]: { selectedIds: Array.from(p.values()).map((h) => c[h]) },
          },
        },
      },
    }
  );
}
var hn = require("@tldraw/core");
function Sa(r, e, t) {
  let {
      selectedIds: n,
      currentPageId: o,
      page: { shapes: s },
    } = r,
    a = e.map((p) => k.getBounds(s[p])),
    d = e.length === 1 && s[e[0]].type === "group",
    i = hn.Utils.getCommonBounds(a),
    { before: c, after: u } = k.mutateShapes(
      r.state,
      e,
      (p) => {
        let m = k.getBounds(p),
          h = p.parentId !== o;
        switch (t) {
          case "horizontal": {
            if (h && !d) {
              let f = k.getBounds(s[p.parentId]),
                x =
                  hn.Utils.getRelativeTransformedBoundingBox(i, i, f, !0, !1)
                    .minX - f.minX;
              return k
                .getShapeUtil(p)
                .transform(
                  p,
                  w(S({}, m), { minX: m.minX + x, maxX: m.maxX + x }),
                  {
                    type: hn.TLBoundsCorner.TopLeft,
                    scaleX: 1,
                    scaleY: 1,
                    initialShape: p,
                    transformOrigin: [0.5, 0.5],
                  }
                );
            }
            let g = hn.Utils.getRelativeTransformedBoundingBox(i, i, m, !0, !1);
            return k
              .getShapeUtil(p)
              .transform(p, g, {
                type: hn.TLBoundsCorner.TopLeft,
                scaleX: -1,
                scaleY: 1,
                initialShape: p,
                transformOrigin: [0.5, 0.5],
              });
          }
          case "vertical": {
            if (h && !d) {
              let f = k.getBounds(s[p.parentId]),
                x =
                  hn.Utils.getRelativeTransformedBoundingBox(i, i, f, !1, !0)
                    .minY - f.minY;
              return k
                .getShapeUtil(p)
                .transform(
                  p,
                  w(S({}, m), { minY: m.minY + x, maxY: m.maxY + x }),
                  {
                    type: hn.TLBoundsCorner.TopLeft,
                    scaleX: 1,
                    scaleY: 1,
                    initialShape: p,
                    transformOrigin: [0.5, 0.5],
                  }
                );
            }
            let g = hn.Utils.getRelativeTransformedBoundingBox(i, i, m, !1, !0);
            return k
              .getShapeUtil(p)
              .transform(p, g, {
                type: hn.TLBoundsCorner.TopLeft,
                scaleX: 1,
                scaleY: -1,
                initialShape: p,
                transformOrigin: [0.5, 0.5],
              });
          }
        }
      },
      o,
      !0
    );
  return {
    id: "flip",
    before: {
      document: {
        pages: { [o]: { shapes: c } },
        pageStates: { [o]: { selectedIds: n } },
      },
    },
    after: {
      document: {
        pages: { [o]: { shapes: u } },
        pageStates: { [o]: { selectedIds: e } },
      },
    },
  };
}
var up = require("@tldraw/core");
function hp(r, e, t, n) {
  var R, K;
  if (e.length < 2) return;
  let o = {},
    s = {},
    a = {},
    d = {},
    i = [...e],
    c = [],
    u = [],
    p = [];
  for (let L of e) {
    let v = r.getShape(L);
    if (!v.isLocked)
      if (v.children === void 0) c.push(v);
      else {
        let I = v.children.filter((J) => !r.getShape(J).isLocked);
        p.push(v),
          i.push(...I),
          c.push(...I.map((J) => r.getShape(J)).filter(Boolean));
      }
  }
  if (
    c.every((L) => L.parentId === c[0].parentId) &&
    c[0].parentId !== n &&
    ((R = r.getShape(c[0].parentId).children) == null ? void 0 : R.length) ===
      i.length
  )
    return;
  let m = k.flattenPage(r.state, n),
    h = Object.fromEntries(c.map((L) => [L.id, m.indexOf(L)])),
    g = c.sort((L, v) => h[L.id] - h[v.id]),
    f = n,
    T = (g.filter((L) => L.parentId === n)[0] || g[0]).childIndex,
    x = up.Utils.getCommonBounds(c.map((L) => k.getBounds(L)));
  for (
    o[t] = void 0,
      s[t] = k
        .getShapeUtil("group")
        .create({
          id: t,
          childIndex: T,
          parentId: f,
          point: [x.minX, x.minY],
          size: [x.width, x.height],
          children: g.map((L) => L.id),
        }),
      g.forEach((L, v) => {
        if (L.parentId !== n) {
          let I = r.getShape(L.parentId);
          p.push(I);
        }
        (o[L.id] = w(S({}, o[L.id]), {
          parentId: L.parentId,
          childIndex: L.childIndex,
        })),
          (s[L.id] = w(S({}, s[L.id]), { parentId: t, childIndex: v + 1 }));
      });
    p.length > 0;

  ) {
    let L = p.pop();
    if (!L) break;
    let v = (
      ((K = o[L.id]) == null ? void 0 : K.children) || L.children
    ).filter((I) => I && !(i.includes(I) || u.includes(I)));
    v.length === 0
      ? ((o[L.id] = L),
        (s[L.id] = void 0),
        L.parentId !== n && (u.push(L.id), p.push(r.getShape(L.parentId))))
      : ((o[L.id] = w(S({}, o[L.id]), { children: L.children })),
        (s[L.id] = w(S({}, s[L.id]), { children: v })));
  }
  let { bindings: b } = r,
    y = new Set(u);
  return (
    b.forEach((L) => {
      for (let v of [L.toId, L.fromId])
        if (y.has(v)) {
          (a[L.id] = L), (d[L.id] = void 0);
          let I = r.getShape(v);
          I.handles &&
            Object.values(I.handles)
              .filter((J) => J.bindingId === L.id)
              .forEach((J) => {
                var ce, de;
                (o[v] = w(S({}, o[v]), {
                  handles: w(S({}, (ce = o[v]) == null ? void 0 : ce.handles), {
                    [J.id]: { bindingId: L.id },
                  }),
                })),
                  u.includes(v) ||
                    (s[v] = w(S({}, s[v]), {
                      handles: w(
                        S({}, (de = s[v]) == null ? void 0 : de.handles),
                        { [J.id]: { bindingId: void 0 } }
                      ),
                    }));
              });
        }
    }),
    {
      id: "group",
      before: {
        document: {
          pages: { [n]: { shapes: o, bindings: a } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: s, bindings: a } },
          pageStates: { [n]: { selectedIds: [t] } },
        },
      },
    }
  );
}
var mp = require("@tldraw/core"),
  ba = require("@tldraw/vec");
function gp(r, e, t, n, o) {
  let { page: s } = r,
    a = {
      before: { shapes: {}, bindings: {} },
      after: { shapes: {}, bindings: {} },
    },
    d = {
      before: { shapes: {}, bindings: {} },
      after: { shapes: {}, bindings: {} },
    },
    i = new Set(),
    c = new Set();
  e.map((b) => r.getShape(b, n))
    .filter((b) => !b.isLocked)
    .forEach((b) => {
      i.add(b.id),
        c.add(b),
        b.children !== void 0 &&
          b.children.forEach((y) => {
            i.add(y), c.add(r.getShape(y, n));
          });
    });
  let u = k.getTopChildIndex(r.state, o),
    p = Array.from(c.values());
  p.forEach((b, y) => {
    if (
      ((a.before.shapes[b.id] = b),
      (a.after.shapes[b.id] = void 0),
      (d.before.shapes[b.id] = void 0),
      (d.after.shapes[b.id] = b),
      !i.has(b.parentId) &&
        ((d.after.shapes[b.id] = w(S({}, b), {
          parentId: o,
          childIndex: u + y,
        })),
        b.parentId !== n))
    ) {
      let R = r.getShape(b.parentId, n);
      (a.before.shapes[R.id] = { children: R.children }),
        (a.after.shapes[R.id] = {
          children: R.children.filter((K) => K !== b.id),
        });
    }
  }),
    Object.values(s.bindings)
      .filter((b) => i.has(b.fromId) || i.has(b.toId))
      .forEach((b) => {
        (a.before.bindings[b.id] = b), (a.after.bindings[b.id] = void 0);
        let y = r.getShape(b.fromId, n);
        if (i.has(b.fromId) && i.has(b.toId))
          (d.before.bindings[b.id] = void 0), (d.after.bindings[b.id] = b);
        else if (i.has(b.fromId)) {
          let K = r.getShape(b.fromId, n),
            v = Object.values(y.handles).find((J) => J.bindingId === b.id).id,
            I = d.after.shapes[K.id];
          I.handles = w(S({}, I.handles), {
            [v]: w(S({}, I.handles[v]), { bindingId: void 0 }),
          });
        } else {
          let K = r.getShape(b.fromId, n),
            L = Object.values(y.handles).find((v) => v.bindingId === b.id);
          (a.before.shapes[K.id] = {
            handles: { [L.id]: { bindingId: b.id } },
          }),
            (a.after.shapes[K.id] = {
              handles: { [L.id]: { bindingId: void 0 } },
            });
        }
      });
  let m = r.state.document.pageStates[o],
    h = mp.Utils.getCommonBounds(p.map((b) => k.getBounds(b))),
    g = k.getCameraZoom(
      t.width < t.height
        ? (t.width - 128) / h.width
        : (t.height - 128) / h.height
    ),
    f = (t.width - h.width * g) / 2 / g,
    T = (t.height - h.height * g) / 2 / g,
    x = ba.Vec.toFixed(ba.Vec.add([-h.minX, -h.minY], [f, T]));
  return {
    id: "move_to_page",
    before: {
      appState: { currentPageId: n },
      document: {
        pages: { [n]: a.before, [o]: d.before },
        pageStates: {
          [n]: { selectedIds: e },
          [o]: { selectedIds: m.selectedIds, camera: m.camera },
        },
      },
    },
    after: {
      appState: { currentPageId: o },
      document: {
        pages: { [n]: a.after, [o]: d.after },
        pageStates: {
          [n]: { selectedIds: [] },
          [o]: { selectedIds: e, camera: { zoom: g, point: x } },
        },
      },
    },
  };
}
function fp(r, e, t) {
  let { pages: n } = r.document,
    o = n[e],
    s = Object.values(n).sort((i, c) => {
      var u, p;
      return (
        ((u = i.childIndex) != null ? u : 0) -
        ((p = c.childIndex) != null ? p : 0)
      );
    }),
    a = s.indexOf(o),
    d = [...s];
  return (
    d.splice(a, 1),
    d.splice(t > a ? t - 1 : t, 0, o),
    {
      id: "move_page",
      before: {
        document: {
          pages: Object.fromEntries(
            s.map((i) => [i.id, { childIndex: i.childIndex }])
          ),
        },
      },
      after: {
        document: {
          pages: Object.fromEntries(d.map((i, c) => [i.id, { childIndex: c }])),
        },
      },
    }
  );
}
function Ar(r, e, t) {
  let { currentPageId: n, page: o } = r,
    s = new Set(e.map((u) => r.getShape(u).parentId)),
    a = { before: {}, after: {} },
    d,
    i,
    c;
  return (
    Array.from(s.values()).forEach((u) => {
      let p = [];
      if (u === o.id)
        p = Object.values(o.shapes).sort((g, f) => g.childIndex - f.childIndex);
      else {
        let g = r.getShape(u);
        if (!g.children) throw Error("No children in parent!");
        p = g.children
          .map((f) => r.getShape(f))
          .sort((f, T) => f.childIndex - T.childIndex);
      }
      let m = p.map((g) => g.id),
        h = e
          .filter((g) => m.includes(g))
          .map((g) => m.indexOf(g))
          .sort((g, f) => g - f);
      if (h.length !== m.length)
        switch (t) {
          case "toBack": {
            for (let g = 0; g < m.length; g++)
              if (!h.includes(g)) {
                d = g;
                break;
              }
            (i = p[d].childIndex),
              (c = i / (h.length + 1)),
              (a = k.mutateShapes(
                r.state,
                h.map((g) => p[g].id).reverse(),
                (g, f) => ({ childIndex: i - (f + 1) * c }),
                n
              ));
            break;
          }
          case "toFront": {
            for (let g = m.length - 1; g >= 0; g--)
              if (!h.includes(g)) {
                d = g;
                break;
              }
            (i = p[d].childIndex),
              (c = 1),
              (a = k.mutateShapes(
                r.state,
                h.map((g) => p[g].id),
                (g, f) => ({ childIndex: i + (f + 1) }),
                n
              ));
            break;
          }
          case "backward": {
            let g = {};
            for (let f = m.length - 1; f >= 0; f--)
              if (h.includes(f)) {
                for (let T = f; T >= 0; T--)
                  if (!h.includes(T)) {
                    let x = p[T].childIndex,
                      b,
                      y;
                    T === 0
                      ? ((b = x / 2), (y = x / 2 / (f - T + 1)))
                      : ((b = p[T - 1].childIndex),
                        (y = (x - b) / (f - T + 1)),
                        (b += y));
                    for (let R = 0; R < f - T; R++)
                      g[p[T + R + 1].id] = b + y * R;
                    break;
                  }
              }
            Object.values(g).length > 0 &&
              (a = k.mutateShapes(
                r.state,
                h.map((f) => p[f].id),
                (f) => ({ childIndex: g[f.id] }),
                n
              ));
            break;
          }
          case "forward": {
            let g = {};
            for (let f = 0; f < m.length; f++)
              if (h.includes(f)) {
                for (let T = f; T < m.length; T++)
                  if (!h.includes(T)) {
                    i = p[T].childIndex;
                    let x =
                      T === m.length - 1
                        ? 1
                        : (p[T + 1].childIndex - i) / (T - f + 1);
                    for (let b = 0; b < T - f; b++)
                      g[p[f + b].id] = i + x * (b + 1);
                    break;
                  }
              }
            Object.values(g).length > 0 &&
              (a = k.mutateShapes(
                r.state,
                h.map((f) => p[f].id),
                (f) => ({ childIndex: g[f.id] }),
                n
              ));
            break;
          }
        }
    }),
    {
      id: "move",
      before: {
        document: {
          pages: { [n]: { shapes: a.before } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: a.after } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
function Sp(r, e, t) {
  let { page: n } = r;
  return {
    id: "rename_page",
    before: { document: { pages: { [e]: { name: n.name } } } },
    after: { document: { pages: { [e]: { name: t } } } },
  };
}
function Ta(r, e, t) {
  let { currentPageId: n } = r,
    { before: o, after: s } = k.mutateShapes(
      r.state,
      e,
      (a) => {
        var d, i;
        return (i = (d = r.getShapeUtil(a)).onDoubleClickBoundsHandle) == null
          ? void 0
          : i.call(d, a);
      },
      t
    );
  return {
    id: "reset_bounds",
    before: {
      document: {
        pages: { [n]: { shapes: o } },
        pageStates: { [n]: { selectedIds: e } },
      },
    },
    after: {
      document: {
        pages: { [n]: { shapes: s } },
        pageStates: { [n]: { selectedIds: e } },
      },
    },
  };
}
var ya = require("@tldraw/core");
var nce = Math.PI * 2;
function bp(r, e, t = -nce / 4) {
  let { currentPageId: n } = r,
    o = {},
    s = {},
    a = e
      .flatMap((i) => {
        let c = r.getShape(i);
        return c.children ? c.children.map((u) => r.getShape(u)) : c;
      })
      .filter((i) => !i.isLocked),
    d = ya.Utils.getBoundsCenter(
      ya.Utils.getCommonBounds(a.map((i) => k.getBounds(i)))
    );
  return (
    a.forEach((i) => {
      let c = k.getRotatedShapeMutation(i, k.getCenter(i), d, t);
      !c || ((o[i.id] = k.getBeforeShape(i, c)), (s[i.id] = c));
    }),
    {
      id: "rotate",
      before: {
        document: {
          pages: { [n]: { shapes: o } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: s } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
var Lr = require("@tldraw/core");
function Tp(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r,
    s = e.map((p) => r.getShape(p)),
    a = s.map((p) => k.getBounds(p)),
    d = Lr.Utils.getCommonBounds(a),
    i = e
      .flatMap((p) => {
        let m = r.getShape(p);
        return m.children ? m.children : m.id;
      })
      .filter((p) => !r.getShape(p).isLocked),
    { before: c, after: u } = k.mutateShapes(
      r.state,
      i,
      (p) => {
        let m = k.getBounds(p);
        switch (t) {
          case "horizontal": {
            let h = w(S({}, m), { minX: d.minX, maxX: d.maxX, width: d.width });
            return k
              .getShapeUtil(p)
              .transformSingle(p, h, {
                type: Lr.TLBoundsCorner.TopLeft,
                scaleX: h.width / m.width,
                scaleY: 1,
                initialShape: p,
                transformOrigin: [0.5, 0.5],
              });
          }
          case "vertical": {
            let h = w(S({}, m), {
              minY: d.minY,
              maxY: d.maxY,
              height: d.height,
            });
            return k
              .getShapeUtil(p)
              .transformSingle(p, h, {
                type: Lr.TLBoundsCorner.TopLeft,
                scaleX: 1,
                scaleY: h.height / m.height,
                initialShape: p,
                transformOrigin: [0.5, 0.5],
              });
          }
        }
      },
      n
    );
  return (
    s.forEach((p) => {
      p.type === "group" && (delete c[p.id], delete u[p.id]);
    }),
    {
      id: "stretch",
      before: {
        document: {
          pages: { [n]: { shapes: c } },
          pageStates: { [n]: { selectedIds: o } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: u } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
var Xs = require("@tldraw/vec");
function yp(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r,
    s = e
      .flatMap((i) => k.getDocumentBranch(r.state, i, n))
      .filter((i) => !r.getShape(i).isLocked),
    a = {},
    d = {};
  return (
    s
      .map((i) => r.getShape(i))
      .filter((i) => !i.isLocked)
      .forEach((i) => {
        (a[i.id] = {
          style: S(
            {},
            Object.fromEntries(Object.keys(t).map((c) => [c, i.style[c]]))
          ),
        }),
          (d[i.id] = { style: t }),
          i.type === "text" &&
            ((a[i.id].point = i.point),
            (d[i.id].point = Xs.Vec.toFixed(
              Xs.Vec.add(
                i.point,
                Xs.Vec.sub(
                  r.getShapeUtil(i).getCenter(i),
                  r
                    .getShapeUtil(i)
                    .getCenter(w(S({}, i), { style: S(S({}, i.style), t) }))
                )
              )
            )));
      }),
    {
      id: "style",
      before: {
        document: {
          pages: { [n]: { shapes: a } },
          pageStates: { [n]: { selectedIds: o } },
        },
        appState: { currentStyle: S({}, r.appState.currentStyle) },
      },
      after: {
        document: {
          pages: { [n]: { shapes: d } },
          pageStates: { [n]: { selectedIds: e } },
        },
        appState: { currentStyle: t },
      },
    }
  );
}
function xp(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r,
    s = Object.fromEntries(
      e.map((d) => {
        var i;
        return [
          d,
          {
            decorations: {
              [t]: (i = r.getShape(d).decorations) == null ? void 0 : i[t],
            },
          },
        ];
      })
    ),
    a = Object.fromEntries(
      e
        .filter((d) => !r.getShape(d).isLocked)
        .map((d) => {
          var i;
          return [
            d,
            {
              decorations: {
                [t]: ((i = r.getShape(d).decorations) == null ? void 0 : i[t])
                  ? void 0
                  : "arrow",
              },
            },
          ];
        })
    );
  return {
    id: "toggle_decorations",
    before: {
      document: {
        pages: { [n]: { shapes: s } },
        pageStates: { [n]: { selectedIds: o } },
      },
    },
    after: {
      document: {
        pages: { [n]: { shapes: a } },
        pageStates: { [n]: { selectedIds: e } },
      },
    },
  };
}
function qs(r, e, t) {
  let { currentPageId: n } = r,
    o = e
      .map((i) => r.getShape(i))
      .filter((i) => (t === "isLocked" ? !0 : !i.isLocked)),
    s = o.every((i) => i[t]),
    a = {},
    d = {};
  return (
    o.forEach((i) => {
      (a[i.id] = { [t]: i[t] }), (d[i.id] = { [t]: !s });
    }),
    {
      id: "toggle",
      before: {
        document: {
          pages: { [n]: { shapes: a } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: d } },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
var xa = require("@tldraw/vec");
function wp(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r;
  r.rotationInfo.selectedIds = [...o];
  let s = { shapes: {}, bindings: {} },
    a = { shapes: {}, bindings: {} },
    d = e
      .flatMap((u) => {
        let p = r.getShape(u);
        return p.children ? p.children : p.id;
      })
      .filter((u) => !r.getShape(u).isLocked),
    i = k.mutateShapes(
      r.state,
      d,
      (u) => ({ point: xa.Vec.toFixed(xa.Vec.add(u.point, t)) }),
      n
    );
  return (
    (s.shapes = i.before),
    (a.shapes = i.after),
    k
      .getBindings(r.state, n)
      .filter((u) => e.includes(u.fromId) && !e.includes(u.toId))
      .forEach((u) => {
        (s.bindings[u.id] = u), (a.bindings[u.id] = void 0);
        for (let p of [u.toId, u.fromId]) {
          let m = r.getShape(p);
          !m.handles ||
            Object.values(m.handles)
              .filter((h) => h.bindingId === u.id)
              .forEach((h) => {
                var g, f;
                (s.shapes[p] = w(S({}, s.shapes[p]), {
                  handles: w(
                    S({}, (g = s.shapes[p]) == null ? void 0 : g.handles),
                    { [h.id]: { bindingId: u.id } }
                  ),
                })),
                  (a.shapes[p] = w(S({}, a.shapes[p]), {
                    handles: w(
                      S({}, (f = a.shapes[p]) == null ? void 0 : f.handles),
                      { [h.id]: { bindingId: void 0 } }
                    ),
                  }));
              });
        }
      }),
    {
      id: "translate",
      before: {
        document: {
          pages: { [n]: s },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
      after: {
        document: {
          pages: { [n]: a },
          pageStates: { [n]: { selectedIds: e } },
        },
      },
    }
  );
}
function kp(r, e, t, n) {
  let { bindings: o } = r,
    s = {},
    a = {},
    d = {},
    i = {},
    c = e,
    u = e.filter((p) => !t.find((m) => m.id === p));
  return (
    t
      .filter((p) => !p.isLocked)
      .forEach((p) => {
        let m = [],
          h = [];
        (s[p.id] = p),
          (a[p.id] = void 0),
          p.children.forEach((b) => {
            u.push(b);
            let y = r.getShape(b, n);
            m.push(y);
          });
        let g = p.childIndex,
          T = (k.getChildIndexAbove(r.state, p.id, n) - g) / m.length;
        m
          .sort((b, y) => b.childIndex - y.childIndex)
          .forEach((b, y) => {
            (s[b.id] = { parentId: b.parentId, childIndex: b.childIndex }),
              (a[b.id] = { parentId: n, childIndex: g + T * y });
          }),
          o
            .filter((b) => b.toId === p.id || b.fromId === p.id)
            .forEach((b) => {
              for (let y of [b.toId, b.fromId])
                if (a[y] === void 0) {
                  (d[b.id] = b), (i[b.id] = void 0);
                  let R = r.getShape(y, n);
                  R.handles &&
                    Object.values(R.handles)
                      .filter((K) => K.bindingId === b.id)
                      .forEach((K) => {
                        var L, v;
                        (s[y] = w(S({}, s[y]), {
                          handles: w(
                            S({}, (L = s[y]) == null ? void 0 : L.handles),
                            { [K.id]: { bindingId: b.id } }
                          ),
                        })),
                          h.includes(y) ||
                            (a[y] = w(S({}, a[y]), {
                              handles: w(
                                S({}, (v = a[y]) == null ? void 0 : v.handles),
                                { [K.id]: { bindingId: void 0 } }
                              ),
                            }));
                      });
                }
            });
      }),
    {
      id: "ungroup",
      before: {
        document: {
          pages: { [n]: { shapes: s, bindings: d } },
          pageStates: { [n]: { selectedIds: c } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: a, bindings: d } },
          pageStates: { [n]: { selectedIds: u } },
        },
      },
    }
  );
}
function wa(r, e, t) {
  let n = e.map((s) => s.id),
    o = k.mutateShapes(
      r.state,
      n.filter((s) => !r.getShape(s, t).isLocked),
      (s, a) => e[a],
      t
    );
  return {
    id: "update",
    before: { document: { pages: { [t]: { shapes: o.before } } } },
    after: { document: { pages: { [t]: { shapes: o.after } } } },
  };
}
function vp(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r,
    s = e
      .map((c) => r.getShape(c))
      .filter((c) => (t.isLocked ? !0 : !c.isLocked)),
    a = {},
    d = {},
    i = Object.keys(t);
  return (
    s.forEach((c) => {
      (a[c.id] = Object.fromEntries(i.map((u) => [u, c[u]]))), (d[c.id] = t);
    }),
    {
      id: "set_props",
      before: {
        document: {
          pages: { [n]: { shapes: a } },
          pageStates: { [n]: { selectedIds: o } },
        },
      },
      after: {
        document: {
          pages: { [n]: { shapes: d } },
          pageStates: { [n]: { selectedIds: o } },
        },
      },
    }
  );
}
var Ut = require("@tldraw/core"),
  vo = require("@tldraw/vec");
function Ip(r, e, t = {}) {
  let { currentPageId: n } = r,
    { point: o, select: s, overwrite: a } = t,
    d = r.document.pages[n],
    i = { shapes: {}, bindings: {} },
    c = {},
    u = { shapes: {}, bindings: {} };
  if (a) {
    for (let m of e.shapes)
      (i.shapes[m.id] = d.shapes[m.id]), (u.shapes[m.id] = m);
    if (e.bindings)
      for (let m of e.bindings)
        (i.bindings[m.id] = d.bindings[m.id]), (u.bindings[m.id] = m);
    if (e.assets) for (let m of e.assets) c[m.id] = m;
  } else {
    let m = {},
      h = k.getTopChildIndex(r.state, n),
      g = e.shapes
        .sort((x, b) => x.childIndex - b.childIndex)
        .map((x) => {
          let b = Ut.Utils.uniqueId();
          return (m[x.id] = b), w(S({}, Ut.Utils.deepClone(x)), { id: b });
        }),
      f = new Set();
    for (; g.length > 0; ) {
      let x = g.shift();
      if (!x) break;
      if ((f.add(x.id), x.parentId === "currentPageId"))
        (x.parentId = n), (x.childIndex = h++);
      else {
        x.parentId = m[x.parentId];
        let b = u.shapes[x.parentId];
        if (!b) {
          f.has(x.id) && (x.parentId = "currentPageId"), g.push(x);
          continue;
        }
        b.children.push(x.id);
      }
      x.children && (x.children = []),
        (i.shapes[x.id] = void 0),
        (u.shapes[x.id] = x);
    }
    Object.values(u.shapes).forEach((x) => {
      x.children &&
        x.children.length === 0 &&
        (delete i.shapes[x.id], delete u.shapes[x.id]);
    }),
      e.bindings &&
        e.bindings.forEach((x) => {
          let b = Ut.Utils.uniqueId();
          m[x.id] = b;
          let y = m[x.toId],
            R = m[x.fromId];
          if (!y || !R) {
            if (R) {
              let I = u.shapes[R].handles;
              I &&
                Object.values(I).forEach((J) => {
                  J.bindingId === x.id && (J.bindingId = void 0);
                });
            }
            if (y) {
              let I = u.shapes[y].handles;
              I &&
                Object.values(I).forEach((J) => {
                  J.bindingId === x.id && (J.bindingId = void 0);
                });
            }
            return;
          }
          let K = u.shapes[R].handles;
          K &&
            Object.values(K).forEach((I) => {
              I.bindingId === x.id && (I.bindingId = b);
            }),
            u.shapes[y].handles &&
              Object.values(u.shapes[y].handles).forEach((I) => {
                I.bindingId === x.id && (I.bindingId = b);
              });
          let v = w(S({}, Ut.Utils.deepClone(x)), {
            id: b,
            toId: y,
            fromId: R,
          });
          (i.bindings[v.id] = void 0), (u.bindings[v.id] = v);
        });
    let T = Object.values(u.shapes);
    if (T.length > 0)
      if (o) {
        let x = Ut.Utils.getCommonBounds(T.map((y) => k.getBounds(y))),
          b = Ut.Utils.getBoundsCenter(x);
        T.forEach((y) => {
          !y.point || (y.point = vo.Vec.sub(o, vo.Vec.sub(b, y.point)));
        });
      } else {
        let x = Ut.Utils.getCommonBounds(T.map(k.getBounds));
        if (
          !(
            Ut.Utils.boundsContain(r.viewport, x) ||
            Ut.Utils.boundsCollide(r.viewport, x)
          )
        ) {
          let b = vo.Vec.toFixed(r.getPagePoint(r.centerPoint)),
            y = Ut.Utils.centerBounds(x, b),
            R = vo.Vec.sub(
              Ut.Utils.getBoundsCenter(y),
              Ut.Utils.getBoundsCenter(x)
            );
          T.forEach((K) => {
            K.point = vo.Vec.toFixed(vo.Vec.add(K.point, R));
          });
        }
      }
    if (e.assets) for (let x of e.assets) c[x.id] = x;
  }
  let p = document.createElement("textarea");
  return (
    Object.values(u.shapes).forEach((m) => {
      "text" in m && ((p.innerHTML = m.text), (m.text = p.value)),
        "label" in m && ((p.innerHTML = m.label), (m.label = p.value));
    }),
    p.remove(),
    {
      id: "insert",
      before: {
        document: {
          pages: { [n]: i },
          pageStates: { [n]: { selectedIds: [...r.selectedIds] } },
        },
      },
      after: {
        document: {
          pages: { [n]: u },
          assets: c,
          pageStates: {
            [n]: {
              selectedIds: s ? Object.keys(u.shapes) : [...r.selectedIds],
            },
          },
        },
      },
    }
  );
}
var rr = {};
qa(rr, {
  fileToBase64: () => Da,
  fileToText: () => Pa,
  getImageSizeFromSrc: () => Ma,
  getVideoSizeFromSrc: () => Ba,
  loadFileHandle: () => ka,
  migrate: () => An,
  openAssetsFromFileSystem: () => Ca,
  openFromFileSystem: () => Ia,
  saveFileHandle: () => va,
  saveToFileSystem: () => Qs,
});
function An(r, e) {
  let { document: t, settings: n } = r,
    { version: o = 0 } = t;
  "assets" in t || (t.assets = {});
  let s = new Set();
  return (
    Object.values(t.pages).forEach((a) =>
      Object.values(a.shapes).forEach((d) => {
        let { parentId: i, children: c, assetId: u } = d;
        u && s.add(u),
          i !== a.id &&
            !a.shapes[i] &&
            (console.warn("Encountered a shape with a missing parent!"),
            (d.parentId = a.id)),
          d.type === "group" &&
            c &&
            c.forEach((p) => {
              a.shapes[p] ||
                (console.warn(
                  "Encountered a parent with a missing child!",
                  d.id,
                  p
                ),
                c == null || c.splice(c.indexOf(p), 1));
            });
      })
    ),
    Object.keys(t.assets).forEach((a) => {
      s.has(a) || delete t.assets[a];
    }),
    o !== e &&
      (o < 14 &&
        Object.values(t.pages).forEach((a) => {
          Object.values(a.shapes)
            .filter((d) => d.type === "text")
            .forEach((d) => d.style.font === "script");
        }),
      o <= 13 &&
        Object.values(t.pages).forEach((a) => {
          Object.values(a.bindings).forEach((d) => {
            Object.assign(d, d.meta);
          }),
            Object.values(a.shapes).forEach((d) => {
              Object.entries(d.style).forEach(([i, c]) => {
                typeof c == "string" && (d.style[i] = c.toLowerCase());
              }),
                d.type === "arrow" &&
                  d.decorations &&
                  Object.entries(d.decorations).forEach(([i, c]) => {
                    c === "Arrow" &&
                      (d.decorations = w(S({}, d.decorations), {
                        [i]: "arrow",
                      }));
                  });
            });
        }),
      o <= 13.1 && (t.name = "New Document"),
      o < 15 && (t.assets = {}),
      Object.values(t.pages).forEach((a) => {
        Object.values(a.shapes).forEach((d) => {
          o < 15.2 &&
            (d.type === "image" || d.type === "video") &&
            (d.style.isFilled = !0),
            o < 15.3 &&
              (d.type === "rectangle" ||
                d.type === "triangle" ||
                d.type === "ellipse" ||
                d.type === "arrow") &&
              ((d.label = d.text || ""), (d.labelPoint = [0.5, 0.5]));
        });
      }),
      o < 15.4 && (n.dockPosition = "bottom"),
      o < 15.5 && (n.exportBackground = "transparent")),
    Object.values(t.pageStates).forEach((a) => {
      (a.selectedIds = a.selectedIds.filter(
        (d) => t.pages[a.id].shapes[d] !== void 0
      )),
        (a.bindingId = void 0),
        (a.editingId = void 0),
        (a.hoveredId = void 0),
        (a.pointedId = void 0);
    }),
    (t.version = e),
    r
  );
}
var Io = require("browser-fs-access"),
  Js = require("idb-keyval");
var Cp = { mode: "readwrite" },
  rce = (r) =>
    ue(void 0, null, function* () {
      return (
        (yield r.queryPermission(Cp)) === "granted" ||
        (yield r.requestPermission(Cp)) === "granted"
      );
    });
function ka() {
  return ue(this, null, function* () {
    if (typeof Window == "undefined" || !("_location" in Window)) return;
    let r = yield (0, Js.get)(`Tldraw_file_handle_${window.location.origin}`);
    return r || null;
  });
}
function va(r) {
  return ue(this, null, function* () {
    return (0, Js.set)(`Tldraw_file_handle_${window.location.origin}`, r);
  });
}
function Qs(r, e, t) {
  return ue(this, null, function* () {
    let n = {
        name: r.name || "New Document",
        fileHandle: e != null ? e : null,
        document: r,
        assets: {},
      },
      o = JSON.stringify(n),
      s = new Blob([o], { type: "application/vnd.Tldraw+json" });
    if (e && !(yield rce(e))) return null;
    let a = !Io.supported && (t == null ? void 0 : t.length) ? t : `${n.name}`,
      d = yield (0, Io.fileSave)(
        s,
        {
          fileName: `${a}${Ts}`,
          description: "Tldraw File",
          extensions: [`${Ts}`],
        },
        e
      );
    return yield va(d), d;
  });
}
function Ia() {
  return ue(this, null, function* () {
    var o;
    let r = yield (0, Io.fileOpen)({
      description: "Tldraw File",
      extensions: [`${Ts}`],
      multiple: !1,
    });
    if (!r) return null;
    let e = yield new Promise((s) => {
        let a = new FileReader();
        (a.onloadend = () => {
          a.readyState === FileReader.DONE && s(a.result);
        }),
          a.readAsText(r, "utf8");
      }),
      t = JSON.parse(e),
      n = (o = r.handle) != null ? o : null;
    return yield va(n), { fileHandle: n, document: t.document };
  });
}
function Ca() {
  return ue(this, null, function* () {
    return (0,
    Io.fileOpen)({ description: "Image or Video", extensions: [...ys, ...xs], multiple: !0 });
  });
}
function Da(r) {
  return new Promise((e, t) => {
    if (r) {
      let n = new FileReader();
      n.readAsDataURL(r),
        (n.onload = () => e(n.result)),
        (n.onerror = (o) => t(o)),
        (n.onabort = (o) => t(o));
    }
  });
}
function Pa(r) {
  return new Promise((e, t) => {
    if (r) {
      let n = new FileReader();
      n.readAsText(r),
        (n.onload = () => e(n.result)),
        (n.onerror = (o) => t(o)),
        (n.onabort = (o) => t(o));
    }
  });
}
function Ma(r) {
  return new Promise((e, t) => {
    let n = new Image();
    (n.onload = () => e([n.width, n.height])),
      (n.onerror = () => t(new Error("Could not get image size"))),
      (n.src = r);
  });
}
function Ba(r) {
  return new Promise((e, t) => {
    let n = document.createElement("video");
    (n.onloadedmetadata = () => e([n.videoWidth, n.videoHeight])),
      (n.onerror = () => t(new Error("Could not get video size"))),
      (n.src = r);
  });
}
Mo(rr, require("browser-fs-access"));
var Ln = require("@tldraw/core"),
  Ve = require("@tldraw/vec");
var Je = class {
  constructor(e) {
    this.app = e;
  }
};
var Ea = class extends Je {
  constructor(e, t, n, o = !1) {
    super(e);
    l(this, "type", "arrow");
    l(this, "performanceMode");
    l(this, "status", "translatingHandle");
    l(this, "newStartBindingId", Ln.Utils.uniqueId());
    l(this, "draggedBindingId", Ln.Utils.uniqueId());
    l(this, "didBind", !1);
    l(this, "initialShape");
    l(this, "handleId");
    l(this, "bindableShapeIds");
    l(this, "initialBinding");
    l(this, "startBindingShapeId");
    l(this, "isCreate");
    l(this, "start", () => {});
    l(this, "update", () => {
      var K, L, v;
      let { initialShape: e } = this,
        {
          currentPoint: t,
          shiftKey: n,
          altKey: o,
          metaKey: s,
          currentGrid: a,
          settings: { showGrid: d },
        } = this.app,
        i = this.app.getShape(e.id);
      if (i.isLocked) return;
      let { handles: c } = e,
        u = this.handleId;
      if (!c[u].canBind) return;
      let p = Ve.Vec.sub(t, Ve.Vec.add(c[u].point, e.point));
      if (n) {
        let I = o
            ? Ve.Vec.med(c.start.point, c.end.point)
            : c[u === "start" ? "end" : "start"].point,
          J = c[u].point,
          ce = Ve.Vec.add(J, p),
          de = Ve.Vec.angle(I, ce),
          He = Ve.Vec.rotWith(ce, I, Ln.Utils.snapAngleToSegments(de, 24) - de);
        p = Ve.Vec.add(p, Ve.Vec.sub(He, ce));
      }
      let m = Ve.Vec.add(c[u].point, p),
        h = {
          [u]: w(S({}, c[u]), {
            point: d ? Ve.Vec.snap(m, a) : Ve.Vec.toFixed(m),
            bindingId: void 0,
          }),
        },
        g = Rn["arrow"],
        f = (K = g.onHandleChange) == null ? void 0 : K.call(g, e, h);
      if (!f) return;
      let T = { shape: Ln.Utils.deepMerge(i, f), bindings: {} },
        x,
        b = T.shape.handles[this.handleId],
        y = T.shape.handles[this.handleId === "start" ? "end" : "start"];
      if (this.startBindingShapeId) {
        let I,
          J = this.app.page.shapes[this.startBindingShapeId],
          ce = k.getShapeUtil(J),
          de = ce.getCenter(J),
          He = T.shape.handles.start,
          Pe = T.shape.handles.end,
          Me = Ve.Vec.add(He.point, T.shape.point);
        Ve.Vec.isEqual(Me, de) && Me[1]++;
        let Ue = de,
          Ke = ce.hitTestPoint(J, t),
          Kt = Ve.Vec.uni(Ve.Vec.sub(Me, Ue)),
          gn = this.app.getBinding(this.newStartBindingId) !== void 0;
        !s &&
          !ce.hitTestPoint(J, Ve.Vec.add(T.shape.point, Pe.point)) &&
          (I = this.findBindingPoint(
            i,
            J,
            "start",
            this.newStartBindingId,
            de,
            Ue,
            Kt,
            Ke
          )),
          I && !gn
            ? ((this.didBind = !0),
              (T.bindings[this.newStartBindingId] = I),
              (T.shape = Ln.Utils.deepMerge(T.shape, {
                handles: { start: { bindingId: I.id } },
              })))
            : !I &&
              gn &&
              ((this.didBind = !1),
              (T.bindings[this.newStartBindingId] = void 0),
              (T.shape = Ln.Utils.deepMerge(e, {
                handles: { start: { bindingId: void 0 } },
              })));
      }
      if (!s) {
        let I = Ve.Vec.add(y.point, T.shape.point),
          J = Ve.Vec.add(b.point, T.shape.point),
          ce = Ve.Vec.uni(Ve.Vec.sub(J, I)),
          de = Ve.Vec.add(T.shape.point, T.shape.handles.start.point),
          He = Ve.Vec.add(T.shape.point, T.shape.handles.end.point),
          Pe = this.bindableShapeIds
            .map((Me) => this.app.page.shapes[Me])
            .sort((Me, Ue) => Ue.childIndex - Me.childIndex)
            .filter((Me) => {
              if (Me.isLocked) return !1;
              let Ue = k.getShapeUtil(Me);
              return ![de, He].every((Ke) => Ue.hitTestPoint(Me, Ke));
            });
        for (let Me of Pe)
          if (
            ((x = this.findBindingPoint(
              i,
              Me,
              this.handleId,
              this.draggedBindingId,
              J,
              I,
              ce,
              o
            )),
            x)
          )
            break;
      }
      if (x)
        (this.didBind = !0),
          (T.bindings[this.draggedBindingId] = x),
          (T.shape = Ln.Utils.deepMerge(T.shape, {
            handles: { [this.handleId]: { bindingId: this.draggedBindingId } },
          }));
      else {
        this.didBind = this.didBind || !1;
        let I = i.handles[this.handleId].bindingId;
        I !== void 0 &&
          ((T.bindings[I] = void 0),
          (T.shape = Ln.Utils.deepMerge(T.shape, {
            handles: { [this.handleId]: { bindingId: void 0 } },
          })));
      }
      let R =
        (v = (L = k.getShapeUtil(T.shape)).onHandleChange) == null
          ? void 0
          : v.call(L, T.shape, T.shape.handles);
      return {
        document: {
          pages: {
            [this.app.currentPageId]: {
              shapes: { [i.id]: S(S({}, T.shape), R != null ? R : {}) },
              bindings: T.bindings,
            },
          },
          pageStates: {
            [this.app.currentPageId]: {
              bindingId: T.shape.handles[u].bindingId,
            },
          },
        },
      };
    });
    l(this, "cancel", () => {
      let {
          initialShape: e,
          initialBinding: t,
          newStartBindingId: n,
          draggedBindingId: o,
        } = this,
        s = k.onSessionComplete(this.app.page.shapes[e.id]),
        a =
          this.isCreate ||
          Ve.Vec.dist(s.handles.start.point, s.handles.end.point) < 4,
        d = {};
      return (
        (d[o] = void 0),
        t && (d[t.id] = a ? void 0 : t),
        n && (d[n] = void 0),
        {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: { [e.id]: a ? void 0 : e },
                bindings: d,
              },
            },
            pageStates: {
              [this.app.currentPageId]: {
                selectedIds: a ? [] : [e.id],
                bindingId: void 0,
                hoveredId: void 0,
                editingId: void 0,
              },
            },
          },
        }
      );
    });
    l(this, "complete", () => {
      let {
          initialShape: e,
          initialBinding: t,
          newStartBindingId: n,
          startBindingShapeId: o,
          handleId: s,
        } = this,
        a = k.onSessionComplete(this.app.page.shapes[e.id]),
        d = a.handles[s].bindingId,
        i = Ve.Vec.dist(a.handles.start.point, a.handles.end.point);
      if (!(d || t) && i < 4) return this.cancel();
      let c = {},
        u = {};
      return (
        t && ((c[t.id] = this.isCreate ? void 0 : t), (u[t.id] = void 0)),
        d && ((c[d] = void 0), (u[d] = this.app.page.bindings[d])),
        o && ((c[n] = void 0), (u[n] = this.app.page.bindings[n])),
        {
          id: "arrow",
          before: {
            document: {
              pages: {
                [this.app.currentPageId]: {
                  shapes: { [e.id]: this.isCreate ? void 0 : e },
                  bindings: c,
                },
              },
              pageStates: {
                [this.app.currentPageId]: {
                  selectedIds: this.isCreate ? [] : [e.id],
                  bindingId: void 0,
                  hoveredId: void 0,
                  editingId: void 0,
                },
              },
            },
          },
          after: {
            document: {
              pages: {
                [this.app.currentPageId]: {
                  shapes: { [e.id]: a },
                  bindings: u,
                },
              },
              pageStates: {
                [this.app.currentPageId]: {
                  selectedIds: [e.id],
                  bindingId: void 0,
                  hoveredId: void 0,
                  editingId: void 0,
                },
              },
            },
          },
        }
      );
    });
    l(this, "findBindingPoint", (e, t, n, o, s, a, d, i) => {
      let u = k.getShapeUtil(t.type).getBindingPoint(t, e, s, a, d, i);
      if (!!u)
        return {
          id: o,
          type: "arrow",
          fromId: e.id,
          toId: t.id,
          handleId: n,
          point: Ve.Vec.toFixed(u.point),
          distance: u.distance,
        };
    });
    var c, u, p;
    this.isCreate = o;
    let { currentPageId: s } = e.state.appState,
      a = e.state.document.pages[s];
    (this.handleId = n),
      (this.initialShape = wt(a.shapes[t])),
      (this.bindableShapeIds = k
        .getBindableShapeIds(e.state)
        .filter(
          (m) =>
            !(m === this.initialShape.id || m === this.initialShape.parentId)
        ));
    let d =
      (c = this.initialShape.handles[n === "start" ? "end" : "start"]) == null
        ? void 0
        : c.bindingId;
    if (d) {
      let m = (u = a.bindings[d]) == null ? void 0 : u.toId;
      m &&
        (this.bindableShapeIds = this.bindableShapeIds.filter((h) => h !== m));
    }
    let { originPoint: i } = this.app;
    if (this.isCreate)
      (this.startBindingShapeId =
        (p = this.bindableShapeIds
          .map((m) => a.shapes[m])
          .filter(
            (m) =>
              !m.isLocked &&
              Ln.Utils.pointInBounds(i, k.getShapeUtil(m).getBounds(m))
          )
          .sort((m, h) => h.childIndex - m.childIndex)[0]) == null
          ? void 0
          : p.id),
        this.startBindingShapeId &&
          this.bindableShapeIds.splice(
            this.bindableShapeIds.indexOf(this.startBindingShapeId),
            1
          );
    else {
      let m = this.initialShape.handles[this.handleId].bindingId;
      m
        ? (this.initialBinding = a.bindings[m])
        : (this.initialShape.handles[this.handleId].bindingId = void 0);
    }
  }
};
var Ra = require("@tldraw/core");
var Aa = class extends Je {
  constructor(e) {
    super(e);
    l(this, "type", "brush");
    l(this, "performanceMode");
    l(this, "status", "brushing");
    l(this, "initialSelectedIds");
    l(this, "shapesToTest");
    l(this, "start", () => {});
    l(this, "update", () => {
      let {
          initialSelectedIds: e,
          shapesToTest: t,
          app: { metaKey: n, settings: o, originPoint: s, currentPoint: a },
        } = this,
        d = Ra.Utils.getBoundsFromPoints([s, a]),
        i = o.isCadSelectMode ? !n && s[0] < a[0] : n,
        c = new Set(),
        u = new Set(e);
      t.forEach(({ id: g, selectId: f }) => {
        let T = this.app.getShape(g);
        if (!c.has(f)) {
          let x = this.app.getShapeUtil(T);
          (
            i
              ? Ra.Utils.boundsContain(d, x.getBounds(T))
              : x.hitTestBounds(T, d)
          )
            ? (c.add(f), u.has(f) || u.add(f))
            : u.has(f) && u.delete(f);
        }
      });
      let p = this.app.selectedIds,
        m = u.size !== p.length || p.some((g) => !u.has(g)),
        h = m ? Array.from(u.values()) : p;
      return m
        ? {
            appState: { selectByContain: i },
            document: {
              pageStates: {
                [this.app.currentPageId]: { brush: d, selectedIds: h },
              },
            },
          }
        : {
            appState: { selectByContain: i },
            document: {
              pageStates: { [this.app.currentPageId]: { brush: d } },
            },
          };
    });
    l(this, "cancel", () => ({
      appState: { selectByContain: !1 },
      document: {
        pageStates: {
          [this.app.currentPageId]: {
            brush: null,
            selectedIds: Array.from(this.initialSelectedIds.values()),
          },
        },
      },
    }));
    l(this, "complete", () => ({
      appState: { selectByContain: !1 },
      document: {
        pageStates: {
          [this.app.currentPageId]: {
            brush: null,
            selectedIds: [...this.app.selectedIds],
          },
        },
      },
    }));
    let { currentPageId: t } = e;
    (this.initialSelectedIds = new Set(this.app.selectedIds)),
      (this.shapesToTest = this.app.shapes
        .filter(
          (n) =>
            !(
              n.isLocked ||
              n.isHidden ||
              n.parentId !== t ||
              this.initialSelectedIds.has(n.id) ||
              this.initialSelectedIds.has(n.parentId)
            )
        )
        .map((n) => ({
          id: n.id,
          bounds: this.app.getShapeUtil(n).getBounds(n),
          selectId: n.id,
        }))),
      this.update();
  }
};
var nt = require("@tldraw/vec");
var La = class extends Je {
  constructor(e, t) {
    super(e);
    l(this, "type", "draw");
    l(this, "performanceMode");
    l(this, "status", "creating");
    l(this, "topLeft");
    l(this, "points");
    l(this, "initialShape");
    l(this, "lastAdjustedPoint");
    l(this, "shiftedPoints", []);
    l(this, "shapeId");
    l(this, "isLocked");
    l(this, "isExtending");
    l(this, "lockedDirection");
    l(this, "start", () => {
      var s;
      let e = this.app.originPoint,
        t = [0, 0, (s = e[2]) != null ? s : 0.5];
      this.points.push(t);
      let n = [
          Math.min(this.topLeft[0], e[0]),
          Math.min(this.topLeft[1], e[1]),
        ],
        o = nt.Vec.sub(n, e);
      return (
        (this.topLeft = n),
        (this.shiftedPoints = this.points.map((a) =>
          nt.Vec.toFixed(nt.Vec.sub(a, o)).concat(a[2])
        )),
        {
          document: {
            pages: {
              [this.app.currentPageId]: {
                shapes: {
                  [this.shapeId]: {
                    point: this.topLeft,
                    points: this.shiftedPoints,
                  },
                },
              },
            },
            pageStates: {
              [this.app.currentPageId]: { selectedIds: [this.shapeId] },
            },
          },
        }
      );
    });
    l(this, "update", () => {
      let { shapeId: e } = this,
        { currentPoint: t, originPoint: n, shiftKey: o, zoom: s } = this.app;
      if (!this.lockedDirection && this.points.length > 1) {
        let d = nt.Vec.sub(t, n);
        nt.Vec.len(d) > 3 / s &&
          (this.lockedDirection =
            Math.abs(d[0]) > Math.abs(d[1]) ? "horizontal" : "vertical");
      }
      if (o) {
        if (!this.isLocked && this.points.length > 2) {
          if (!this.lockedDirection) {
            let i = nt.Vec.sub(t, n);
            nt.Vec.len(i) > 3 / s &&
              (this.lockedDirection =
                Math.abs(i[0]) > Math.abs(i[1]) ? "horizontal" : "vertical");
          }
          this.isLocked = !0;
          let d = [...this.lastAdjustedPoint];
          this.lockedDirection === "vertical" ? (d[0] = 0) : (d[1] = 0),
            this.points.push(d.concat(t[2]));
        }
      } else this.isLocked && (this.isLocked = !1);
      this.isLocked &&
        (this.lockedDirection === "vertical" ? (t[0] = n[0]) : (t[1] = n[1]));
      let a = this.addPoint(t);
      if (!!a)
        return {
          document: {
            pages: { [this.app.currentPageId]: { shapes: { [e]: a } } },
            pageStates: { [this.app.currentPageId]: { selectedIds: [e] } },
          },
        };
    });
    l(this, "cancel", () => {
      let { shapeId: e } = this,
        t = this.app.currentPageId;
      return {
        document: {
          pages: {
            [t]: {
              shapes: { [e]: this.isExtending ? this.initialShape : void 0 },
            },
          },
          pageStates: { [t]: { selectedIds: [] } },
        },
      };
    });
    l(this, "complete", () => {
      let { shapeId: e } = this,
        t = this.app.currentPageId,
        n = this.app.getShape(e);
      return {
        id: "create_draw",
        before: {
          document: {
            pages: {
              [t]: {
                shapes: { [e]: this.isExtending ? this.initialShape : void 0 },
              },
            },
            pageStates: { [t]: { selectedIds: [] } },
          },
        },
        after: {
          document: {
            pages: {
              [t]: {
                shapes: {
                  [e]: w(S({}, n), {
                    point: nt.Vec.toFixed(n.point),
                    points: n.points.map((o) => nt.Vec.toFixed(o)),
                    isComplete: !0,
                  }),
                },
              },
            },
            pageStates: { [this.app.currentPageId]: { selectedIds: [] } },
          },
        },
      };
    });
    l(this, "addPoint", (e) => {
      let { originPoint: t } = this.app,
        n = nt.Vec.toFixed(nt.Vec.sub(e, t)).concat(e[2]);
      if (nt.Vec.isEqual(this.lastAdjustedPoint, n)) return;
      this.points.push(n), (this.lastAdjustedPoint = n);
      let o = [...this.topLeft],
        s = [Math.min(this.topLeft[0], e[0]), Math.min(this.topLeft[1], e[1])],
        a = nt.Vec.sub(s, t),
        d;
      return (
        o[0] !== s[0] || o[1] !== s[1]
          ? ((this.topLeft = s),
            (d = this.points.map((i) =>
              nt.Vec.toFixed(nt.Vec.sub(i, a)).concat(i[2])
            )))
          : (d = [...this.shiftedPoints, nt.Vec.sub(n, a).concat(n[2])]),
        (this.shiftedPoints = d),
        { point: this.topLeft, points: d }
      );
    });
    var i;
    let { originPoint: n } = this.app;
    (this.shapeId = t),
      (this.initialShape = this.app.getShape(t)),
      (this.topLeft = [...this.initialShape.point]);
    let o = [0, 0, (i = n[2]) != null ? i : 0.5],
      s = nt.Vec.sub(n, this.topLeft),
      a = this.initialShape.points.map((c) => nt.Vec.sub(c, s).concat(c[2]));
    this.isExtending = a.length > 0;
    let d = [];
    if (this.isExtending) {
      let c = a[a.length - 1];
      if (c) {
        d.push(c, c);
        let u = Math.floor(nt.Vec.dist(c, o) / 16);
        if (u > 1)
          for (let p = 0; p < u; p++) {
            let m = p / (u - 1);
            d.push(nt.Vec.lrp(c, o, m).concat(c[2]));
          }
        else d.push(o, o);
      }
    } else d.push(o);
    (this.points = [...a, ...d]),
      (this.shiftedPoints = this.points.map((c) =>
        nt.Vec.add(c, s).concat(c[2])
      )),
      (this.lastAdjustedPoint = this.points[this.points.length - 1]);
  }
};
var Ha = class extends Je {
  constructor(e, t, n) {
    super(e);
    l(this, "type", "edit");
    l(this, "performanceMode");
    l(this, "initialShape");
    l(this, "initialSelectedIds");
    l(this, "currentPageId");
    l(this, "isCreating");
    l(this, "start", () => {});
    l(this, "update", () => {});
    l(this, "cancel", () => ({
      document: {
        pages: {
          [this.currentPageId]: {
            shapes: {
              [this.initialShape.id]: this.isCreating
                ? void 0
                : this.initialShape,
            },
          },
        },
        pageStates: {
          [this.currentPageId]: {
            selectedIds: this.isCreating ? [] : this.initialSelectedIds,
            editingId: void 0,
          },
        },
      },
    }));
    l(this, "complete", () => {
      let e = this.app.getShape(this.initialShape.id);
      return {
        id: "edit",
        before: {
          document: {
            pages: {
              [this.currentPageId]: {
                shapes: {
                  [this.initialShape.id]: this.isCreating
                    ? void 0
                    : this.initialShape,
                },
              },
            },
            pageStates: {
              [this.currentPageId]: {
                selectedIds: this.isCreating ? [] : this.initialSelectedIds,
                editingId: void 0,
              },
            },
          },
        },
        after: {
          document: {
            pages: {
              [this.currentPageId]: { shapes: { [this.initialShape.id]: e } },
            },
            pageStates: {
              [this.currentPageId]: { selectedIds: [e.id], editingId: void 0 },
            },
          },
        },
      };
    });
    (this.initialShape = e.getShape(t, e.currentPageId)),
      (this.currentPageId = e.currentPageId),
      (this.isCreating = n),
      (this.initialSelectedIds = [...e.selectedIds]);
  }
};
var Co = require("@tldraw/vec");
var za = class extends Je {
  constructor(e) {
    super(e);
    l(this, "type", "draw");
    l(this, "performanceMode");
    l(this, "status", "creating");
    l(this, "isLocked");
    l(this, "lockedDirection");
    l(this, "erasedShapes", new Set());
    l(this, "erasedBindings", new Set());
    l(this, "initialSelectedShapes");
    l(this, "erasableShapes");
    l(this, "prevPoint");
    l(this, "prevEraseShapesSize", 0);
    l(this, "interval");
    l(this, "timestamp1", 0);
    l(this, "timestamp2", 0);
    l(this, "prevErasePoint", []);
    l(this, "loop", () => {
      let e = Date.now(),
        t = e - this.timestamp1,
        n = e - this.timestamp2,
        { eraseLine: o } = this.app.appState,
        s = [...o],
        a = !1;
      t > 16 &&
        this.prevErasePoint !== this.prevPoint &&
        ((a = !0),
        (s = [...o, this.prevPoint]),
        (this.prevErasePoint = this.prevPoint)),
        n > 32 &&
          s.length > 1 &&
          ((a = !0),
          s.splice(0, Math.ceil(s.length * 0.1)),
          (this.timestamp2 = e)),
        a && this.app.patchState({ appState: { eraseLine: s } }, "eraseline"),
        (this.interval = requestAnimationFrame(this.loop));
    });
    l(this, "start", () => {});
    l(this, "update", () => {
      let {
        page: e,
        shiftKey: t,
        originPoint: n,
        currentPoint: o,
        zoom: s,
      } = this.app;
      if (t) {
        let c = Co.Vec.sub(o, n);
        if (!this.isLocked && Co.Vec.len(c) > 3 / s) {
          if (!this.lockedDirection) {
            let u = Co.Vec.sub(o, n);
            this.lockedDirection =
              Math.abs(u[0]) > Math.abs(u[1]) ? "horizontal" : "vertical";
          }
          this.isLocked = !0;
        }
      } else this.isLocked && (this.isLocked = !1);
      this.isLocked &&
        (this.lockedDirection === "vertical" ? (o[0] = n[0]) : (o[1] = n[1]));
      let a = Co.Vec.toFixed(Co.Vec.add(n, Co.Vec.sub(o, n))),
        d = new Set([]);
      this.erasableShapes.forEach((c) => {
        if (
          !this.erasedShapes.has(c) &&
          this.app.getShapeUtil(c).hitTestLineSegment(c, this.prevPoint, a) &&
          (this.erasedShapes.add(c), d.add(c.id), c.children !== void 0)
        )
          for (let u of c.children)
            this.erasedShapes.add(this.app.getShape(u)), d.add(u);
      }),
        Object.values(e.bindings).forEach((c) => {
          for (let u of [c.toId, c.fromId])
            d.has(u) && this.erasedBindings.add(c);
        }),
        this.erasedShapes.forEach((c) => {
          this.app.getShape(c.id) ||
            (this.erasedShapes.delete(c),
            this.erasableShapes.delete(c),
            d.delete(c.id));
        });
      let i = Array.from(this.erasedShapes.values());
      if (((this.prevPoint = a), i.length !== this.prevEraseShapesSize))
        return (
          (this.prevEraseShapesSize = i.length),
          {
            document: {
              pages: {
                [e.id]: {
                  shapes: Object.fromEntries(
                    i.map((c) => [c.id, { isGhost: !0 }])
                  ),
                },
              },
            },
          }
        );
    });
    l(this, "cancel", () => {
      let { page: e } = this.app;
      cancelAnimationFrame(this.interval),
        this.erasedShapes.forEach((n) => {
          this.app.getShape(n.id) ||
            (this.erasedShapes.delete(n), this.erasableShapes.delete(n));
        });
      let t = Array.from(this.erasedShapes.values());
      return {
        document: {
          pages: {
            [e.id]: {
              shapes: Object.fromEntries(t.map((n) => [n.id, { isGhost: !1 }])),
            },
          },
          pageStates: {
            [e.id]: {
              selectedIds: this.initialSelectedShapes.map((n) => n.id),
            },
          },
        },
        appState: { eraseLine: [] },
      };
    });
    l(this, "complete", () => {
      let { page: e } = this.app;
      cancelAnimationFrame(this.interval),
        this.erasedShapes.forEach((i) => {
          this.app.getShape(i.id) ||
            (this.erasedShapes.delete(i), this.erasableShapes.delete(i));
        }),
        this.erasedBindings.forEach((i) => {
          this.app.getBinding(i.id) || this.erasedBindings.delete(i);
        });
      let t = Array.from(this.erasedShapes.values()),
        n = Array.from(this.erasedBindings.values()),
        o = t.map((i) => i.id),
        s = n.map((i) => i.id),
        a = {
          shapes: Object.fromEntries(t.map((i) => [i.id, i])),
          bindings: Object.fromEntries(n.map((i) => [i.id, i])),
        },
        d = {
          shapes: Object.fromEntries(t.map((i) => [i.id, void 0])),
          bindings: Object.fromEntries(n.map((i) => [i.id, void 0])),
        };
      return (
        this.app.shapes.forEach((i) => {
          i.handles &&
            !d.shapes[i.id] &&
            Object.values(i.handles).forEach((c) => {
              var u, p;
              c.bindingId &&
                s.includes(c.bindingId) &&
                ((a.shapes[i.id] = w(S({}, a.shapes[i.id]), {
                  handles: w(
                    S({}, (u = a.shapes[i.id]) == null ? void 0 : u.handles),
                    { [c.id]: c }
                  ),
                })),
                o.includes(i.id) ||
                  (d.shapes[i.id] = w(S({}, d.shapes[i.id]), {
                    handles: w(
                      S({}, (p = d.shapes[i.id]) == null ? void 0 : p.handles),
                      { [c.id]: w(S({}, c), { bindingId: void 0 }) }
                    ),
                  })));
            });
        }),
        {
          id: "erase",
          before: {
            document: {
              pages: { [e.id]: a },
              pageStates: {
                [e.id]: {
                  selectedIds: this.initialSelectedShapes
                    .filter((i) => !!this.app.getShape(i.id))
                    .map((i) => i.id),
                },
              },
            },
            appState: { eraseLine: [] },
          },
          after: {
            document: {
              pages: { [e.id]: d },
              pageStates: {
                [e.id]: {
                  selectedIds: this.initialSelectedShapes
                    .filter((i) => !!this.app.getShape(i.id))
                    .filter((i) => !o.includes(i.id))
                    .map((i) => i.id),
                },
              },
            },
            appState: { eraseLine: [] },
          },
        }
      );
    });
    (this.prevPoint = [...e.originPoint]),
      (this.initialSelectedShapes = this.app.selectedIds.map((t) =>
        this.app.getShape(t)
      )),
      (this.erasableShapes = new Set(
        this.app.shapes.filter((t) => !t.isLocked)
      )),
      (this.interval = this.loop());
  }
};
var Oa = require("@tldraw/core"),
  Fa = require("@tldraw/vec");
var ja = class extends Je {
  constructor(e, t) {
    super(e);
    l(this, "type", "grid");
    l(this, "performanceMode");
    l(this, "status", "translating");
    l(this, "shape");
    l(this, "bounds");
    l(this, "initialSelectedIds");
    l(this, "initialSiblings");
    l(this, "grid", {});
    l(this, "columns", 1);
    l(this, "rows", 1);
    l(this, "isCopying", !1);
    l(this, "start", () => {});
    l(this, "update", () => {
      let {
          currentPageId: e,
          altKey: t,
          shiftKey: n,
          currentPoint: o,
        } = this.app,
        s = {},
        a = {},
        d = Oa.Utils.getBoundsCenter(this.bounds),
        i = Fa.Vec.sub(o, d);
      n && (Math.abs(i[0]) < Math.abs(i[1]) ? (i[0] = 0) : (i[1] = 0));
      let c = this.bounds.width + 32,
        u = this.bounds.height + 32,
        p = Math.ceil(i[0] / c),
        m = Math.ceil(i[1] / u),
        h = Math.min(p, 0),
        g = Math.min(m, 0),
        f = Math.max(p, 1),
        T = Math.max(m, 1),
        x = new Set(),
        b = t;
      b !== this.isCopying &&
        (Object.values(this.grid)
          .filter((y) => y !== this.shape.id)
          .forEach((y) => (s[y] = void 0)),
        (this.grid = { "0_0": this.shape.id }),
        (this.isCopying = b));
      for (let y = h; y < f; y++)
        for (let R = g; R < T; R++) {
          let K = `${y}_${R}`;
          if ((x.add(K), this.grid[K] || (y === 0 && R === 0))) continue;
          let L = this.getClone(
            Fa.Vec.add(this.shape.point, [y * c, R * u]),
            b
          );
          (s[L.id] = L), (this.grid[K] = L.id);
        }
      if (
        (Object.entries(this.grid).forEach(([y, R]) => {
          x.has(y) || ((s[R] = void 0), delete this.grid[y]);
        }),
        Object.values(s).length !== 0)
      )
        return (
          this.initialSiblings &&
            (s[this.shape.parentId] = {
              children: [...this.initialSiblings, ...Object.values(this.grid)],
            }),
          {
            document: { pages: { [e]: { shapes: s } }, pageStates: { [e]: a } },
          }
        );
    });
    l(this, "cancel", () => {
      let { currentPageId: e } = this.app,
        t = {};
      return (
        Object.values(this.grid).forEach((n) => {
          t[n] = void 0;
        }),
        (t[this.shape.id] = w(S({}, t[this.shape.id]), {
          point: this.shape.point,
        })),
        this.initialSiblings &&
          (t[this.shape.parentId] = {
            children: [...this.initialSiblings, this.shape.id],
          }),
        {
          document: {
            pages: { [e]: { shapes: t } },
            pageStates: { [e]: { selectedIds: [this.shape.id] } },
          },
        }
      );
    });
    l(this, "complete", () => {
      let { currentPageId: e } = this.app,
        t = {},
        n = {},
        o = [];
      if (
        (Object.values(this.grid).forEach((s) => {
          (t[s] = void 0), (n[s] = this.app.getShape(s)), o.push(s);
        }),
        (t[this.shape.id] = this.shape),
        this.initialSiblings &&
          ((t[this.shape.parentId] = {
            children: [...this.initialSiblings, this.shape.id],
          }),
          (n[this.shape.parentId] = {
            children: [...this.initialSiblings, ...Object.values(this.grid)],
          })),
        o.length !== 1)
      )
        return {
          id: "grid",
          before: {
            document: {
              pages: { [e]: { shapes: t } },
              pageStates: { [e]: { selectedIds: [], hoveredId: void 0 } },
            },
          },
          after: {
            document: {
              pages: { [e]: { shapes: n } },
              pageStates: { [e]: { selectedIds: o, hoveredId: void 0 } },
            },
          },
        };
    });
    l(this, "getClone", (e, t) => {
      let n = w(S({}, this.shape), { id: Oa.Utils.uniqueId(), point: e });
      return t || (n.type === "sticky" && (n.text = "")), n;
    });
    var n;
    (this.shape = this.app.getShape(t)),
      (this.grid["0_0"] = this.shape.id),
      (this.bounds = this.app.getShapeBounds(t)),
      (this.initialSelectedIds = [...this.app.selectedIds]),
      this.shape.parentId !== this.app.currentPageId &&
        (this.initialSiblings =
          (n = this.app.getShape(this.shape.parentId).children) == null
            ? void 0
            : n.filter((o) => o !== this.shape.id));
  }
};
var ei = require("@tldraw/vec");
var Ga = class extends Je {
  constructor(e, t, n, o = "move_handle") {
    super(e);
    l(this, "type", "handle");
    l(this, "performanceMode");
    l(this, "status", "translatingHandle");
    l(this, "commandId");
    l(this, "topLeft");
    l(this, "shiftKey", !1);
    l(this, "initialShape");
    l(this, "handleId");
    l(this, "start", () => {});
    l(this, "update", () => {
      var u, p;
      let {
          initialShape: e,
          app: { currentPageId: t, currentPoint: n },
        } = this,
        o = this.app.getShape(e.id);
      if (o.isLocked) return;
      let s = o.handles,
        a = this.handleId,
        d = ei.Vec.sub(n, s[a].point),
        i = {
          [a]: w(S({}, s[a]), {
            point: ei.Vec.sub(ei.Vec.add(s[a].point, d), o.point),
          }),
        },
        c =
          (p = (u = k.getShapeUtil(o)).onHandleChange) == null
            ? void 0
            : p.call(u, o, i);
      if (!!c)
        return { document: { pages: { [t]: { shapes: { [o.id]: c } } } } };
    });
    l(this, "cancel", () => {
      let {
        initialShape: e,
        app: { currentPageId: t },
      } = this;
      return { document: { pages: { [t]: { shapes: { [e.id]: e } } } } };
    });
    l(this, "complete", () => {
      let {
        initialShape: e,
        app: { currentPageId: t },
      } = this;
      return {
        id: this.commandId,
        before: { document: { pages: { [t]: { shapes: { [e.id]: e } } } } },
        after: {
          document: {
            pages: {
              [t]: {
                shapes: {
                  [e.id]: k.onSessionComplete(
                    this.app.getShape(this.initialShape.id)
                  ),
                },
              },
            },
          },
        },
      };
    });
    let { originPoint: s } = e;
    (this.topLeft = [...s]),
      (this.handleId = n),
      (this.initialShape = this.app.getShape(t)),
      (this.commandId = o);
  }
};
var Hr = require("@tldraw/core"),
  Va = require("@tldraw/vec");
var $a = class extends Je {
  constructor(e) {
    super(e);
    l(this, "type", "rotate");
    l(this, "status", "transforming");
    l(this, "performanceMode");
    l(this, "delta", [0, 0]);
    l(this, "commonBoundsCenter");
    l(this, "initialAngle");
    l(this, "initialShapes");
    l(this, "changes", {});
    l(this, "start", () => {});
    l(this, "update", () => {
      let {
          commonBoundsCenter: e,
          initialShapes: t,
          app: { currentPageId: n, currentPoint: o, shiftKey: s },
        } = this,
        a = {},
        d = Va.Vec.angle(e, o) - this.initialAngle;
      return (
        s && (d = Hr.Utils.snapAngleToSegments(d, 24)),
        t.forEach(({ center: i, shape: c }) => {
          let { rotation: u = 0 } = c,
            p = 0;
          s && (p = Hr.Utils.snapAngleToSegments(u, 24) - u);
          let m = k.getRotatedShapeMutation(c, i, e, s ? d + p : d);
          m && (a[c.id] = m);
        }),
        (this.changes = a),
        { document: { pages: { [n]: { shapes: a } } } }
      );
    });
    l(this, "cancel", () => {
      let {
          initialShapes: e,
          app: { currentPageId: t },
        } = this,
        n = {};
      return (
        e.forEach(({ shape: o }) => (n[o.id] = o)),
        { document: { pages: { [t]: { shapes: n } } } }
      );
    });
    l(this, "complete", () => {
      let {
          initialShapes: e,
          app: { currentPageId: t },
        } = this,
        n = {},
        o = this.changes;
      return (
        e.forEach(({ shape: { id: s, point: a, rotation: d, handles: i } }) => {
          n[s] = { point: a, rotation: d, handles: i };
        }),
        {
          id: "rotate",
          before: { document: { pages: { [t]: { shapes: n } } } },
          after: { document: { pages: { [t]: { shapes: o } } } },
        }
      );
    });
    let {
        app: { currentPageId: t, pageState: n, originPoint: o },
      } = this,
      s = k.getSelectedBranchSnapshot(e.state, t).filter((a) => !a.isLocked);
    if (s.length === 0) throw Error("No selected shapes!");
    if (e.rotationInfo.selectedIds === n.selectedIds) {
      if (e.rotationInfo.center === void 0)
        throw Error("We should have a center for rotation!");
      this.commonBoundsCenter = e.rotationInfo.center;
    } else
      (this.commonBoundsCenter = Hr.Utils.getBoundsCenter(
        Hr.Utils.getCommonBounds(s.map(k.getBounds))
      )),
        (e.rotationInfo.selectedIds = n.selectedIds),
        (e.rotationInfo.center = this.commonBoundsCenter);
    (this.initialShapes = s
      .filter((a) => a.children === void 0)
      .map((a) => ({
        shape: a,
        center: this.app.getShapeUtil(a).getCenter(a),
      }))),
      (this.initialAngle = Va.Vec.angle(this.commonBoundsCenter, o));
  }
};
var St = require("@tldraw/core"),
  Do = require("@tldraw/vec");
var Na = class extends Je {
  constructor(e, t = St.TLBoundsCorner.BottomRight, n = !1) {
    super(e);
    this.transformType = t;
    this.isCreate = n;
    l(this, "type", "transform");
    l(this, "performanceMode");
    l(this, "status", "transforming");
    l(this, "scaleX", 1);
    l(this, "scaleY", 1);
    l(this, "initialShapes");
    l(this, "initialShapeIds");
    l(this, "initialSelectedIds");
    l(this, "shapeBounds");
    l(this, "hasUnlockedShapes");
    l(this, "isAllAspectRatioLocked");
    l(this, "initialCommonBounds");
    l(this, "snapInfo", { state: "empty" });
    l(this, "prevPoint", [0, 0]);
    l(this, "speed", 1);
    l(this, "start", () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes
          .filter((e) => !this.initialShapeIds.includes(e.id))
          .map((e) => St.Utils.getBoundsWithCenter(k.getRotatedBounds(e))),
      };
    });
    l(this, "update", () => {
      let {
          transformType: e,
          shapeBounds: t,
          initialCommonBounds: n,
          isAllAspectRatioLocked: o,
          app: {
            currentPageId: s,
            pageState: { camera: a },
            viewport: d,
            currentPoint: i,
            previousPoint: c,
            originPoint: u,
            shiftKey: p,
            altKey: m,
            metaKey: h,
            currentGrid: g,
            settings: { isSnapping: f, showGrid: T },
          },
        } = this,
        x = {},
        b = m ? Do.Vec.mul(Do.Vec.sub(i, u), 2) : Do.Vec.sub(i, u),
        y = St.Utils.getTransformedBoundingBox(n, e, b, 0, p || o);
      m &&
        (y = S(
          S({}, y),
          St.Utils.centerBounds(y, St.Utils.getBoundsCenter(n))
        )),
        T && (y = S(S({}, y), St.Utils.snapBoundsToGrid(y, g)));
      let K = Do.Vec.dist(i, c) - this.speed;
      this.speed = this.speed + K * (K > 1 ? 0.5 : 0.15);
      let L = [];
      if (
        ((f && !h) || (!f && h)) &&
        this.speed * a.zoom < 10 &&
        this.snapInfo.state === "ready"
      ) {
        let v = St.Utils.getSnapPoints(
          St.Utils.getBoundsWithCenter(y),
          this.snapInfo.bounds.filter(
            (I) => St.Utils.boundsContain(d, I) || St.Utils.boundsCollide(d, I)
          ),
          5 / a.zoom
        );
        v &&
          ((L = v.snapLines),
          (y = St.Utils.getTransformedBoundingBox(
            n,
            e,
            Do.Vec.sub(b, v.offset),
            0,
            p || o
          )));
      }
      return (
        (this.scaleX = y.scaleX),
        (this.scaleY = y.scaleY),
        t.forEach(
          ({ initialShape: v, initialShapeBounds: I, transformOrigin: J }) => {
            let ce = St.Utils.getRelativeTransformedBoundingBox(
              y,
              n,
              I,
              this.scaleX < 0,
              this.scaleY < 0
            );
            T && (ce = St.Utils.snapBoundsToGrid(ce, g));
            let de = k.transform(this.app.getShape(v.id), ce, {
              type: this.transformType,
              initialShape: v,
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              transformOrigin: J,
            });
            x[v.id] = de;
          }
        ),
        {
          appState: { snapLines: L },
          document: { pages: { [s]: { shapes: x } } },
        }
      );
    });
    l(this, "cancel", () => {
      let {
          shapeBounds: e,
          app: { currentPageId: t },
        } = this,
        n = {};
      return (
        this.isCreate
          ? e.forEach((o) => (n[o.initialShape.id] = void 0))
          : e.forEach((o) => (n[o.initialShape.id] = o.initialShape)),
        {
          appState: { snapLines: [] },
          document: {
            pages: { [t]: { shapes: n } },
            pageStates: {
              [t]: {
                selectedIds: this.isCreate
                  ? []
                  : e.map((o) => o.initialShape.id),
              },
            },
          },
        }
      );
    });
    l(this, "complete", () => {
      let {
        isCreate: e,
        shapeBounds: t,
        hasUnlockedShapes: n,
        app: { currentPageId: o },
      } = this;
      if (!n) return;
      if (
        this.isCreate &&
        Do.Vec.dist(this.app.originPoint, this.app.currentPoint) < 2
      )
        return this.cancel();
      let s = {},
        a = {},
        d,
        i;
      return (
        e
          ? ((d = []),
            (i = []),
            t.forEach(({ initialShape: c }) => {
              (s[c.id] = void 0), (a[c.id] = this.app.getShape(c.id));
            }))
          : ((d = this.initialSelectedIds),
            (i = this.initialSelectedIds),
            t.forEach(({ initialShape: c }) => {
              (s[c.id] = c), (a[c.id] = this.app.getShape(c.id));
            })),
        {
          id: "transform",
          before: {
            appState: { snapLines: [] },
            document: {
              pages: { [o]: { shapes: s } },
              pageStates: {
                [o]: { selectedIds: d, hoveredId: void 0, editingId: void 0 },
              },
            },
          },
          after: {
            appState: { snapLines: [] },
            document: {
              pages: { [o]: { shapes: a } },
              pageStates: {
                [o]: { selectedIds: i, hoveredId: void 0, editingId: void 0 },
              },
            },
          },
        }
      );
    });
    (this.initialSelectedIds = [...this.app.selectedIds]),
      (this.app.rotationInfo.selectedIds = [...this.initialSelectedIds]),
      (this.initialShapes = k
        .getSelectedBranchSnapshot(this.app.state, this.app.currentPageId)
        .filter((d) => !d.isLocked)),
      (this.initialShapeIds = this.initialShapes.map((d) => d.id)),
      (this.hasUnlockedShapes = this.initialShapes.length > 0),
      (this.isAllAspectRatioLocked = this.initialShapes.every(
        (d) => d.isAspectRatioLocked || k.getShapeUtil(d).isAspectRatioLocked
      ));
    let o = Object.fromEntries(
        this.initialShapes.map((d) => [d.id, k.getBounds(d)])
      ),
      s = Object.values(o);
    this.initialCommonBounds = St.Utils.getCommonBounds(s);
    let a = St.Utils.getBoundsFromPoints(s.map(St.Utils.getBoundsCenter));
    this.shapeBounds = this.initialShapes.map((d) => {
      let i = o[d.id],
        c = St.Utils.getBoundsCenter(i),
        u = (c[0] - a.minX) / a.width,
        p = (c[1] - a.minY) / a.height;
      return {
        initialShape: d,
        initialShapeBounds: i,
        transformOrigin: [u, p],
      };
    });
  }
};
var mn = require("@tldraw/core"),
  uo = require("@tldraw/vec");
var Wa = class extends Je {
  constructor(e, t, n, o = !1) {
    super(e);
    l(this, "type", "transformSingle");
    l(this, "status", "transforming");
    l(this, "performanceMode");
    l(this, "transformType");
    l(this, "scaleX", 1);
    l(this, "scaleY", 1);
    l(this, "isCreate");
    l(this, "initialShape");
    l(this, "initialShapeBounds");
    l(this, "initialCommonBounds");
    l(this, "snapInfo", { state: "empty" });
    l(this, "prevPoint", [0, 0]);
    l(this, "speed", 1);
    l(this, "start", () => {
      this.snapInfo = {
        state: "ready",
        bounds: this.app.shapes
          .filter((e) => e.id !== this.initialShape.id)
          .map((e) => mn.Utils.getBoundsWithCenter(k.getRotatedBounds(e))),
      };
    });
    l(this, "update", () => {
      let {
        transformType: e,
        initialShape: t,
        initialShapeBounds: n,
        app: {
          settings: { isSnapping: o, showGrid: s },
          currentPageId: a,
          pageState: { camera: d },
          viewport: i,
          currentPoint: c,
          previousPoint: u,
          originPoint: p,
          currentGrid: m,
          shiftKey: h,
          altKey: g,
          metaKey: f,
        },
      } = this;
      if (t.isLocked) return;
      let T = {},
        x = g ? uo.Vec.mul(uo.Vec.sub(c, p), 2) : uo.Vec.sub(c, p),
        b = this.app.getShape(t.id),
        y = k.getShapeUtil(b),
        R = mn.Utils.getTransformedBoundingBox(
          n,
          e,
          x,
          b.rotation,
          h || b.isAspectRatioLocked || y.isAspectRatioLocked
        );
      g &&
        (R = S(
          S({}, R),
          mn.Utils.centerBounds(R, mn.Utils.getBoundsCenter(n))
        )),
        s && (R = S(S({}, R), mn.Utils.snapBoundsToGrid(R, m)));
      let L = uo.Vec.dist(c, u) - this.speed;
      this.speed = this.speed + L * (L > 1 ? 0.5 : 0.15);
      let v = [];
      if (
        ((o && !f) || (!o && f)) &&
        !t.rotation &&
        this.speed * d.zoom < 10 &&
        this.snapInfo.state === "ready"
      ) {
        let J = mn.Utils.getSnapPoints(
          mn.Utils.getBoundsWithCenter(R),
          this.snapInfo.bounds.filter(
            (ce) =>
              mn.Utils.boundsContain(i, ce) || mn.Utils.boundsCollide(i, ce)
          ),
          5 / d.zoom
        );
        J &&
          ((v = J.snapLines),
          (R = mn.Utils.getTransformedBoundingBox(
            n,
            e,
            uo.Vec.sub(x, J.offset),
            b.rotation,
            h || b.isAspectRatioLocked || y.isAspectRatioLocked
          )));
      }
      let I = k
        .getShapeUtil(b)
        .transformSingle(b, R, {
          initialShape: t,
          type: this.transformType,
          scaleX: R.scaleX,
          scaleY: R.scaleY,
          transformOrigin: [0.5, 0.5],
        });
      return (
        I && (T[b.id] = I),
        s && I && I.point && (I.point = uo.Vec.snap(I.point, m)),
        {
          appState: { snapLines: v },
          document: { pages: { [a]: { shapes: T } } },
        }
      );
    });
    l(this, "cancel", () => {
      let {
          initialShape: e,
          app: { currentPageId: t },
        } = this,
        n = {};
      return (
        this.isCreate ? (n[e.id] = void 0) : (n[e.id] = e),
        {
          appState: { snapLines: [] },
          document: {
            pages: { [t]: { shapes: n } },
            pageStates: { [t]: { selectedIds: this.isCreate ? [] : [e.id] } },
          },
        }
      );
    });
    l(this, "complete", () => {
      let {
        initialShape: e,
        app: { currentPageId: t },
      } = this;
      if (e.isLocked) return;
      if (
        this.isCreate &&
        uo.Vec.dist(this.app.originPoint, this.app.currentPoint) < 2
      )
        return this.cancel();
      let n = {},
        o = {};
      return (
        (n[e.id] = this.isCreate ? void 0 : e),
        (o[e.id] = k.onSessionComplete(this.app.getShape(e.id))),
        {
          id: "transform_single",
          before: {
            appState: { snapLines: [] },
            document: {
              pages: { [t]: { shapes: n } },
              pageStates: {
                [t]: {
                  selectedIds: this.isCreate ? [] : [e.id],
                  editingId: void 0,
                  hoveredId: void 0,
                },
              },
            },
          },
          after: {
            appState: { snapLines: [] },
            document: {
              pages: { [t]: { shapes: o } },
              pageStates: {
                [t]: {
                  selectedIds: [e.id],
                  editingId: void 0,
                  hoveredId: void 0,
                },
              },
            },
          },
        }
      );
    });
    (this.isCreate = o), (this.transformType = n);
    let s = this.app.getShape(t);
    (this.initialShape = s),
      (this.initialShapeBounds = k.getBounds(s)),
      (this.initialCommonBounds = k.getRotatedBounds(s)),
      (this.app.rotationInfo.selectedIds = [s.id]);
  }
};
var Ft = require("@tldraw/core"),
  We = require("@tldraw/vec");
var Ua = class extends Je {
  constructor(e, t = !1, n = !1) {
    super(e);
    l(this, "performanceMode");
    l(this, "type", "translate");
    l(this, "status", "translating");
    l(this, "delta", [0, 0]);
    l(this, "prev", [0, 0]);
    l(this, "prevPoint", [0, 0]);
    l(this, "speed", 1);
    l(this, "cloneInfo", { state: "empty" });
    l(this, "snapInfo", { state: "empty" });
    l(this, "snapLines", []);
    l(this, "isCloning", !1);
    l(this, "isCreate");
    l(this, "link");
    l(this, "initialIds");
    l(this, "hasUnlockedShapes");
    l(this, "initialSelectedIds");
    l(this, "initialCommonBounds");
    l(this, "initialShapes");
    l(this, "initialParentChildren");
    l(this, "bindingsToDelete");
    l(this, "start", () => {
      let {
          bindingsToDelete: e,
          initialIds: t,
          app: { currentPageId: n, page: o },
        } = this,
        s = [],
        a = [];
      if (
        (Object.values(o.shapes).forEach((c) => {
          let u = Ft.Utils.getBoundsWithCenter(k.getRotatedBounds(c));
          s.push(u), t.has(c.id) || a.push(u);
        }),
        (this.snapInfo = { state: "ready", bounds: s, others: a }),
        e.length === 0)
      )
        return;
      let d = {},
        i = {};
      return (
        e.forEach((c) => {
          d[c.id] = void 0;
          let u = this.app.getShape(c.fromId);
          i[c.fromId] = {
            handles: w(S({}, u.handles), {
              [c.handleId]: w(S({}, u.handles[c.handleId]), {
                bindingId: void 0,
              }),
            }),
          };
        }),
        { document: { pages: { [n]: { bindings: d, shapes: i } } } }
      );
    });
    l(this, "update", () => {
      let {
          initialParentChildren: e,
          initialShapes: t,
          initialCommonBounds: n,
          bindingsToDelete: o,
          app: {
            pageState: { camera: s },
            settings: { isSnapping: a, showGrid: d },
            currentPageId: i,
            viewport: c,
            selectedIds: u,
            currentPoint: p,
            previousPoint: m,
            originPoint: h,
            altKey: g,
            shiftKey: f,
            metaKey: T,
            currentGrid: x,
          },
        } = this,
        b = {},
        y = {},
        R = {},
        K = We.Vec.sub(p, h),
        L = !1;
      this.isCreate ||
        (g && !this.isCloning
          ? ((this.isCloning = !0), (L = !0))
          : !g && this.isCloning && ((this.isCloning = !1), (L = !0))),
        f && (Math.abs(K[0]) < Math.abs(K[1]) ? (K[0] = 0) : (K[1] = 0));
      let I = We.Vec.dist(p, m) - this.speed;
      if (
        ((this.speed = this.speed + I * (I > 1 ? 0.5 : 0.15)),
        (this.snapLines = []),
        ((a && !T) || (!a && T)) &&
          this.speed * s.zoom < 10 &&
          this.snapInfo.state === "ready")
      ) {
        let J = Ft.Utils.getSnapPoints(
          Ft.Utils.getBoundsWithCenter(
            d
              ? Ft.Utils.snapBoundsToGrid(Ft.Utils.translateBounds(n, K), x)
              : Ft.Utils.translateBounds(n, K)
          ),
          (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter(
            (ce) =>
              Ft.Utils.boundsContain(c, ce) || Ft.Utils.boundsCollide(c, ce)
          ),
          5 / s.zoom
        );
        J && ((this.snapLines = J.snapLines), (K = We.Vec.sub(K, J.offset)));
      }
      if (((this.prev = K), this.isCloning))
        if (L) {
          if (
            (this.cloneInfo.state === "empty" && this.createCloneInfo(),
            this.cloneInfo.state === "empty")
          )
            throw Error;
          let { clones: J, clonedBindings: ce } = this.cloneInfo;
          (this.isCloning = !0),
            o.forEach((de) => (b[de.id] = de)),
            t.forEach((de) => (y[de.id] = { point: de.point })),
            J.forEach((de) => {
              var He;
              if (
                ((y[de.id] = S({}, de)),
                de.parentId !== i && !u.includes(de.parentId))
              ) {
                let Pe =
                  ((He = y[de.parentId]) == null ? void 0 : He.children) ||
                  e[de.parentId];
                Pe.includes(de.id) ||
                  (y[de.parentId] = w(S({}, y[de.parentId]), {
                    children: [...Pe, de.id],
                  }));
              }
            });
          for (let de of ce) b[de.id] = de;
          (R.selectedIds = J.map((de) => de.id)),
            J.forEach((de) => {
              y[de.id] = w(S({}, de), {
                point: d
                  ? We.Vec.snap(We.Vec.toFixed(We.Vec.add(de.point, K)), x)
                  : We.Vec.toFixed(We.Vec.add(de.point, K)),
              });
            });
        } else {
          if (this.cloneInfo.state === "empty") throw Error;
          let { clones: J } = this.cloneInfo;
          J.forEach((ce) => {
            y[ce.id] = {
              point: d
                ? We.Vec.snap(We.Vec.toFixed(We.Vec.add(ce.point, K)), x)
                : We.Vec.toFixed(We.Vec.add(ce.point, K)),
            };
          });
        }
      else if (L) {
        if (this.cloneInfo.state === "empty") throw Error;
        let { clones: J, clonedBindings: ce } = this.cloneInfo;
        (this.isCloning = !1),
          o.forEach((de) => (b[de.id] = void 0)),
          J.forEach((de) => {
            de.parentId !== i &&
              (y[de.parentId] = w(S({}, y[de.parentId]), {
                children: e[de.parentId],
              }));
          }),
          J.forEach((de) => (y[de.id] = void 0)),
          t.forEach((de) => {
            y[de.id] = {
              point: d
                ? We.Vec.snap(We.Vec.toFixed(We.Vec.add(de.point, K)), x)
                : We.Vec.toFixed(We.Vec.add(de.point, K)),
            };
          });
        for (let de of ce) b[de.id] = void 0;
        R.selectedIds = t.map((de) => de.id);
      } else
        t.forEach((J) => {
          y[J.id] = {
            point: d
              ? We.Vec.snap(We.Vec.toFixed(We.Vec.add(J.point, K)), x)
              : We.Vec.toFixed(We.Vec.add(J.point, K)),
          };
        });
      return {
        appState: { snapLines: this.snapLines },
        document: {
          pages: { [i]: { shapes: y, bindings: b } },
          pageStates: { [i]: R },
        },
      };
    });
    l(this, "cancel", () => {
      let {
          initialShapes: e,
          initialSelectedIds: t,
          bindingsToDelete: n,
          app: { currentPageId: o },
        } = this,
        s = {},
        a = {},
        d = { editingId: void 0, hoveredId: void 0 };
      if (
        (this.isCreate
          ? (e.forEach(({ id: i }) => (a[i] = void 0)), (d.selectedIds = []))
          : (e.forEach(
              ({ id: i, point: c, handles: u }) =>
                (a[i] = u
                  ? w(S({}, a[i]), { point: c, handles: u })
                  : w(S({}, a[i]), { point: c }))
            ),
            (d.selectedIds = t),
            n.forEach((i) => {
              s[i.id] = i;
            })),
        this.cloneInfo.state === "ready")
      ) {
        let { clones: i, clonedBindings: c } = this.cloneInfo;
        i.forEach((u) => (a[u.id] = void 0)),
          c.forEach((u) => (s[u.id] = void 0));
      }
      return {
        appState: { snapLines: [] },
        document: {
          pages: { [o]: { shapes: a, bindings: s } },
          pageStates: { [o]: d },
        },
      };
    });
    l(this, "complete", () => {
      let {
          initialShapes: e,
          initialParentChildren: t,
          bindingsToDelete: n,
          app: { currentPageId: o },
        } = this,
        s = {},
        a = {},
        d = {},
        i = {};
      if (this.isCloning) {
        if (
          (this.cloneInfo.state === "empty" && this.createCloneInfo(),
          this.cloneInfo.state !== "ready")
        )
          throw Error;
        let { clones: c, clonedBindings: u } = this.cloneInfo;
        c.forEach((p) => {
          (a[p.id] = void 0),
            (i[p.id] = this.app.getShape(p.id)),
            p.parentId !== o &&
              ((a[p.parentId] = w(S({}, a[p.parentId]), {
                children: t[p.parentId],
              })),
              (i[p.parentId] = w(S({}, i[p.parentId]), {
                children: this.app.getShape(p.parentId).children,
              })));
        }),
          u.forEach((p) => {
            (s[p.id] = void 0), (d[p.id] = this.app.getBinding(p.id));
          });
      } else
        e.forEach((c) => {
          (a[c.id] = this.isCreate
            ? void 0
            : w(S({}, a[c.id]), { point: c.point })),
            (i[c.id] = S(
              S({}, i[c.id]),
              this.isCreate
                ? this.app.getShape(c.id)
                : { point: this.app.getShape(c.id).point }
            ));
        });
      return (
        n.forEach((c) => {
          var u, p, m, h, g;
          (s[c.id] = c),
            (a[c.fromId] = w(S({}, a[c.fromId]), {
              id: c.fromId,
              handles: w(
                S({}, (u = a[c.fromId]) == null ? void 0 : u.handles),
                {
                  [c.handleId]: w(
                    S(
                      {},
                      (m = (p = a[c.fromId]) == null ? void 0 : p.handles) ==
                        null
                        ? void 0
                        : m[c.handleId]
                    ),
                    { bindingId: c.id }
                  ),
                }
              ),
            })),
            (i[c.fromId] = w(S({}, i[c.fromId]), {
              id: c.fromId,
              handles: w(S({}, i[c.fromId].handles), {
                [c.handleId]: w(
                  S(
                    {},
                    (g = (h = i[c.fromId]) == null ? void 0 : h.handles) == null
                      ? void 0
                      : g[c.handleId]
                  ),
                  { bindingId: void 0 }
                ),
              }),
            }));
        }),
        n.forEach((c) => (d[c.id] = void 0)),
        {
          id: "translate",
          before: {
            appState: { snapLines: [] },
            document: {
              pages: { [o]: { shapes: a, bindings: s } },
              pageStates: {
                [o]: {
                  selectedIds: this.isCreate
                    ? []
                    : [...this.initialSelectedIds],
                },
              },
            },
          },
          after: {
            appState: { snapLines: [] },
            document: {
              pages: { [o]: { shapes: i, bindings: d } },
              pageStates: { [o]: { selectedIds: [...this.app.selectedIds] } },
            },
          },
        }
      );
    });
    l(this, "createCloneInfo", () => {
      let {
          initialShapes: e,
          initialParentChildren: t,
          app: { selectedIds: n, currentPageId: o, page: s },
        } = this,
        a = {},
        d = {},
        i = [],
        c = [];
      e.forEach((p) => {
        let m = Ft.Utils.uniqueId();
        (t[m] = t[p.id]), (a[p.id] = m);
        let h = w(S({}, Ft.Utils.deepClone(p)), {
          id: m,
          parentId: p.parentId,
          childIndex: k.getChildIndexAbove(this.app.state, p.id, o),
        });
        if (h.type === "video") {
          let g = document.getElementById(p.id + "_video");
          g && (h.currentTime = (g.currentTime + 16) % g.duration);
        }
        c.push(h);
      }),
        c.forEach((p) => {
          p.children !== void 0 && (p.children = p.children.map((m) => a[m]));
        }),
        c.forEach((p) => {
          n.includes(p.parentId) && (p.parentId = a[p.parentId]);
        });
      let u = new Set(Object.keys(a));
      Object.values(s.bindings)
        .filter((p) => u.has(p.fromId) || u.has(p.toId))
        .forEach((p) => {
          if (u.has(p.fromId) && u.has(p.toId)) {
            let m = Ft.Utils.uniqueId(),
              h = w(S({}, Ft.Utils.deepClone(p)), {
                id: m,
                fromId: a[p.fromId] || p.fromId,
                toId: a[p.toId] || p.toId,
              });
            (d[p.id] = m), i.push(h);
          }
        }),
        c.forEach((p) => {
          if (p.handles && p.handles)
            for (let m in p.handles) {
              let h = p.handles[m];
              h.bindingId = h.bindingId ? d[h.bindingId] : void 0;
            }
        }),
        c.forEach((p) => {
          if (s.shapes[p.id]) throw Error("uh oh, we didn't clone correctly");
        }),
        (this.cloneInfo = {
          state: "ready",
          clones: c,
          cloneMap: a,
          clonedBindings: i,
        });
    });
    (this.isCreate = t), (this.link = n);
    let { currentPageId: o, selectedIds: s, page: a } = this.app;
    this.initialSelectedIds = [...s];
    let d = (n ? k.getLinkedShapeIds(this.app.state, o, n, !1) : s)
        .map((c) => this.app.getShape(c))
        .filter((c) => !c.isLocked),
      i = new Set(d.map((c) => c.id));
    (this.hasUnlockedShapes = d.length > 0),
      (this.initialShapes = Array.from(
        new Set(
          d
            .filter((c) => !i.has(c.parentId))
            .flatMap((c) =>
              c.children
                ? [c, ...c.children.map((u) => this.app.getShape(u))]
                : [c]
            )
        ).values()
      )),
      (this.initialIds = new Set(this.initialShapes.map((c) => c.id))),
      (this.bindingsToDelete = []),
      Object.values(a.bindings)
        .filter(
          (c) => this.initialIds.has(c.fromId) || this.initialIds.has(c.toId)
        )
        .forEach((c) => {
          this.initialIds.has(c.fromId) &&
            (this.initialIds.has(c.toId) || this.bindingsToDelete.push(c));
        }),
      (this.initialParentChildren = {}),
      this.initialShapes
        .map((c) => c.parentId)
        .filter((c) => c !== a.id)
        .forEach((c) => {
          this.initialParentChildren[c] = this.app.getShape(c).children;
        }),
      (this.initialCommonBounds = Ft.Utils.getCommonBounds(
        this.initialShapes.map(k.getRotatedBounds)
      )),
      (this.app.rotationInfo.selectedIds = [...this.app.selectedIds]);
  }
};
var sce = {
    ["arrow"]: Ea,
    ["brush"]: Aa,
    ["draw"]: La,
    ["erase"]: za,
    ["handle"]: Ga,
    ["rotate"]: $a,
    ["transform"]: Na,
    ["transformSingle"]: Wa,
    ["translate"]: Ua,
    ["grid"]: ja,
    ["edit"]: Ha,
  },
  Dp = (r) => sce[r];
var Mp = require("@tldraw/core"),
  Bp = V(require("@tldraw/vec"));
var Pp = require("@tldraw/core");
var at = class extends os {
  constructor(e) {
    super();
    this.app = e;
    l(this, "type", "select");
    l(this, "previous");
    l(this, "status", "idle");
    l(this, "setStatus", (e) => {
      (this.status = e), this.app.setStatus(this.status);
    });
    l(this, "onEnter", () => {
      this.setStatus("idle");
    });
    l(this, "onExit", () => {
      this.setStatus("idle");
    });
    l(this, "onCancel", () => {
      this.status === "idle"
        ? this.app.selectTool("select")
        : this.setStatus("idle"),
        this.app.cancelSession();
    });
    l(this, "getNextChildIndex", () => {
      let {
        shapes: e,
        appState: { currentPageId: t },
      } = this.app;
      return e.length === 0
        ? 1
        : e
            .filter((n) => n.parentId === t)
            .sort((n, o) => o.childIndex - n.childIndex)[0].childIndex + 1;
    });
    l(this, "onPinchStart", () => {
      this.app.cancelSession(), this.setStatus("pinching");
    });
    l(this, "onPinchEnd", () => {
      Pp.Utils.isMobileSafari() && this.app.undoSelect(),
        this.setStatus("idle");
    });
    l(this, "onPinch", (e, t) => {
      var n;
      this.status === "pinching" &&
        (isNaN(e.delta[0]) ||
          isNaN(e.delta[1]) ||
          (this.app.pinchZoom(e.point, e.delta, e.delta[2]),
          (n = this.onPointerMove) == null || n.call(this, e, t)));
    });
    l(this, "onKeyDown", (e) => {
      if (e === "Escape") {
        this.onCancel();
        return;
      }
      if (e === "Meta" || e === "Control" || e === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    l(this, "onKeyUp", (e) => {
      if (e === "Meta" || e === "Control" || e === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    l(this, "onPointerMove", () => {
      this.status === "creating" && this.app.updateSession();
    });
    l(this, "onPointerUp", () => {
      if (this.status === "creating") {
        this.app.completeSession();
        let { isToolLocked: e } = this.app.appState;
        e || this.app.selectTool("select");
      }
      this.setStatus("idle");
    });
  }
};
var Fr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "arrow");
    l(this, "onPointerDown", () => {
      if (this.status !== "idle") return;
      let {
          currentPoint: e,
          currentGrid: t,
          settings: { showGrid: n },
          appState: { currentPageId: o, currentStyle: s },
        } = this.app,
        a = this.getNextChildIndex(),
        d = Mp.Utils.uniqueId(),
        i = Qo.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? Bp.default.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("arrow", i.id, "end", !0),
        this.setStatus("creating");
    });
  }
};
var Ep = require("@tldraw/core");
var jr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "draw");
    l(this, "lastShapeId");
    l(this, "onEnter", () => {
      this.lastShapeId = void 0;
    });
    l(this, "onCancel", () => {
      switch (this.status) {
        case "idle": {
          this.app.selectTool("select");
          break;
        }
        default: {
          this.setStatus("idle");
          break;
        }
      }
      this.app.cancelSession();
    });
    l(this, "onPointerDown", (e) => {
      if (this.status !== "idle" || this.app.readOnly) return;
      let {
          currentPoint: t,
          appState: { currentPageId: n, currentStyle: o },
        } = this.app,
        s = this.lastShapeId && this.app.getShape(this.lastShapeId);
      if (e.shiftKey && s)
        this.app.startSession("draw", s.id), this.setStatus("extending");
      else {
        let a = this.getNextChildIndex(),
          d = Ep.Utils.uniqueId(),
          i = Ns.create({
            id: d,
            parentId: n,
            childIndex: a,
            point: t,
            style: S({}, o),
          });
        (this.lastShapeId = d),
          this.app.patchCreate([i]),
          this.app.startSession("draw", d),
          this.setStatus("creating");
      }
    });
    l(this, "onPointerMove", () => {
      if (!this.app.readOnly)
        switch (this.status) {
          case "extending":
          case "creating":
            this.app.updateSession();
        }
    });
    l(this, "onPointerUp", () => {
      this.app.completeSession(), this.setStatus("idle");
    });
  }
};
var ti = require("@tldraw/core"),
  Rp = V(require("@tldraw/vec"));
var Gr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "ellipse");
    l(this, "onPointerDown", () => {
      if (this.app.readOnly || this.status !== "idle") return;
      let {
          currentPoint: e,
          currentGrid: t,
          settings: { showGrid: n },
          appState: { currentPageId: o, currentStyle: s },
        } = this.app,
        a = this.getNextChildIndex(),
        d = ti.Utils.uniqueId(),
        i = $s.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? Rp.default.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession(
          "transformSingle",
          i.id,
          ti.TLBoundsCorner.BottomRight,
          !0
        ),
        this.setStatus("creating");
    });
  }
};
var Ap = V(require("@tldraw/vec"));
var Vr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "erase");
    l(this, "status", "idle");
    l(this, "onPointerDown", () => {
      this.app.readOnly ||
        (this.status === "idle" && this.setStatus("pointing"));
    });
    l(this, "onPointerMove", (e) => {
      if (!this.app.readOnly)
        switch (this.status) {
          case "pointing": {
            Ap.default.dist(e.origin, e.point) > 3 &&
              (this.app.startSession("erase"),
              this.app.updateSession(),
              this.setStatus("erasing"));
            break;
          }
          case "erasing":
            this.app.updateSession();
        }
    });
    l(this, "onPointerUp", () => {
      if (!this.app.readOnly) {
        switch (this.status) {
          case "pointing": {
            let e = this.app.shapes
              .filter((t) => !t.isLocked)
              .filter((t) =>
                this.app.getShapeUtil(t).hitTestPoint(t, this.app.currentPoint)
              )
              .flatMap((t) => (t.children ? [t.id, ...t.children] : t.id));
            this.app.delete(e);
            break;
          }
          case "erasing":
            this.app.completeSession();
        }
        this.setStatus("idle");
      }
    });
    l(this, "onCancel", () => {
      this.status === "idle"
        ? this.previous
          ? this.app.selectTool(this.previous)
          : this.app.selectTool("select")
        : this.setStatus("idle"),
        this.app.cancelSession();
    });
  }
};
var Lp = require("@tldraw/core"),
  Hp = V(require("@tldraw/vec"));
var $r = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "line");
    l(this, "onPointerDown", () => {
      if (this.app.readOnly || this.status !== "idle") return;
      let {
          currentPoint: e,
          currentGrid: t,
          settings: { showGrid: n },
          appState: { currentPageId: o, currentStyle: s },
        } = this.app,
        a = this.getNextChildIndex(),
        d = Lp.Utils.uniqueId(),
        i = Qo.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? Hp.default.snap(e, t) : e,
          decorations: { start: void 0, end: void 0 },
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("arrow", i.id, "end", !0),
        this.setStatus("creating");
    });
  }
};
var ni = require("@tldraw/core"),
  zp = V(require("@tldraw/vec"));
var Nr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "rectangle");
    l(this, "onPointerDown", () => {
      if (this.app.readOnly || this.status !== "idle") return;
      let {
          currentPoint: e,
          currentGrid: t,
          settings: { showGrid: n },
          appState: { currentPageId: o, currentStyle: s },
        } = this.app,
        a = this.getNextChildIndex(),
        d = ni.Utils.uniqueId(),
        i = Gs.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? zp.default.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession(
          "transformSingle",
          i.id,
          ni.TLBoundsCorner.BottomRight,
          !0
        ),
        this.setStatus("creating");
    });
  }
};
var ir = require("@tldraw/core"),
  Hn = V(require("@tldraw/vec"));
var Wr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "select");
    l(this, "pointedId");
    l(this, "selectedGroupId");
    l(this, "pointedHandleId");
    l(this, "pointedBoundsHandle");
    l(this, "pointedLinkHandleId");
    l(this, "onEnter", () => {
      this.setStatus("idle");
    });
    l(this, "onExit", () => {
      this.setStatus("idle");
    });
    l(this, "clonePaint", (e) => {
      if (this.app.selectedIds.length === 0) return;
      let t = this.app.selectedIds.map((c) => this.app.getShape(c)),
        n = ir.Utils.expandBounds(
          ir.Utils.getCommonBounds(t.map(k.getBounds)),
          16
        ),
        o = ir.Utils.getBoundsCenter(n),
        s = [n.width, n.height],
        a = [
          o[0] + s[0] * Math.floor((e[0] + s[0] / 2 - o[0]) / s[0]),
          o[1] + s[1] * Math.floor((e[1] + s[1] / 2 - o[1]) / s[1]),
        ],
        d = ir.Utils.centerBounds(n, a);
      this.app.shapes.some((c) => k.getShapeUtil(c).hitTestBounds(c, d)) ||
        this.app.duplicate(this.app.selectedIds, a);
    });
    l(this, "getShapeClone", (e, t) => {
      let n = this.app.getShape(e),
        o = k.getShapeUtil(n);
      if (o.canClone) {
        let s = o.getBounds(n),
          a = o.getCenter(n),
          d = {
            top: [s.minX, s.minY - (s.height + 32)],
            right: [s.maxX + 32, s.minY],
            bottom: [s.minX, s.maxY + 32],
            left: [s.minX - (s.width + 32), s.minY],
            topLeft: [s.minX - (s.width + 32), s.minY - (s.height + 32)],
            topRight: [s.maxX + 32, s.minY - (s.height + 32)],
            bottomLeft: [s.minX - (s.width + 32), s.maxY + 32],
            bottomRight: [s.maxX + 32, s.maxY + 32],
          }[t];
        if (n.rotation !== 0) {
          let u = Hn.default.add(d, [s.width / 2, s.height / 2]),
            p = Hn.default.rotWith(u, a, n.rotation || 0);
          d = Hn.default.sub(p, [s.width / 2, s.height / 2]);
        }
        let i = ir.Utils.uniqueId(),
          c = w(S({}, n), { id: i, point: d });
        return c.type === "sticky" && (c.text = ""), c;
      }
    });
    l(this, "onCancel", () => {
      this.app.session ? this.app.cancelSession() : this.selectNone(),
        this.setStatus("idle");
    });
    l(this, "onKeyDown", (e, t, n) => {
      switch (e) {
        case "Escape": {
          this.onCancel();
          break;
        }
        case "Tab": {
          if (this.app.readOnly) return;
          if (
            !this.app.pageState.editingId &&
            this.status === "idle" &&
            this.app.selectedIds.length === 1
          ) {
            let [o] = this.app.selectedIds,
              s = this.getShapeClone(o, "right");
            s &&
              (this.app.createShapes(s),
              this.setStatus("idle"),
              s.type === "sticky" &&
                (this.app.select(s.id), this.app.setEditingId(s.id)));
          }
          break;
        }
        case "Meta":
        case "Control":
        case "Alt": {
          this.app.updateSession();
          break;
        }
        case "Enter": {
          if (this.app.readOnly) return;
          let { pageState: o } = this.app;
          o.selectedIds.length === 1 &&
            !o.editingId &&
            (this.app.setEditingId(o.selectedIds[0]), n.preventDefault());
        }
      }
    });
    l(this, "onKeyUp", (e, t) => {
      if (this.status === "clonePainting" && !(t.altKey && t.shiftKey)) {
        this.setStatus("idle");
        return;
      }
      if (e === "Meta" || e === "Control" || e === "Alt") {
        this.app.updateSession();
        return;
      }
    });
    l(this, "onPointerMove", () => {
      let { originPoint: e, currentPoint: t } = this.app;
      if (this.app.readOnly && this.app.isPointing) {
        this.app.session
          ? this.app.updateSession()
          : Hn.default.dist(e, t) > 3 &&
            (this.app.startSession("brush"), this.setStatus("brushing"));
        return;
      }
      switch (this.status) {
        case "pointingBoundsHandle": {
          if (!this.pointedBoundsHandle)
            throw Error("No pointed bounds handle");
          if (Hn.default.dist(e, t) > 3) {
            if (this.pointedBoundsHandle === "rotate")
              this.setStatus("rotating"), this.app.startSession("rotate");
            else if (
              this.pointedBoundsHandle === "center" ||
              this.pointedBoundsHandle === "left" ||
              this.pointedBoundsHandle === "right"
            )
              this.setStatus("translating"),
                this.app.startSession(
                  "translate",
                  !1,
                  this.pointedBoundsHandle
                );
            else {
              this.setStatus("transforming");
              let n = this.app.selectedIds.flatMap((o) =>
                k.getDocumentBranch(this.app.state, o, this.app.currentPageId)
              );
              n.length === 1
                ? this.app.startSession(
                    "transformSingle",
                    n[0],
                    this.pointedBoundsHandle
                  )
                : this.app.startSession("transform", this.pointedBoundsHandle);
            }
            this.app.updateSession();
          }
          break;
        }
        case "pointingCanvas": {
          Hn.default.dist(e, t) > 3 &&
            (this.app.startSession("brush"), this.setStatus("brushing"));
          break;
        }
        case "pointingClone": {
          Hn.default.dist(e, t) > 3 &&
            (this.setStatus("translatingClone"),
            this.app.startSession("translate"),
            this.app.updateSession());
          break;
        }
        case "pointingBounds": {
          Hn.default.dist(e, t) > 3 &&
            (this.setStatus("translating"),
            this.app.startSession("translate"),
            this.app.updateSession());
          break;
        }
        case "pointingHandle": {
          if (!this.pointedHandleId) throw Error("No pointed handle");
          if (Hn.default.dist(e, t) > 3) {
            this.setStatus("translatingHandle");
            let n = this.app.getShape(this.app.selectedIds[0]);
            n &&
              (this.pointedHandleId === "bend"
                ? (this.app.startSession("handle", n.id, this.pointedHandleId),
                  this.app.updateSession())
                : (this.app.startSession(
                    "arrow",
                    n.id,
                    this.pointedHandleId,
                    !1
                  ),
                  this.app.updateSession()));
          }
          break;
        }
        case "clonePainting": {
          this.clonePaint(t);
          break;
        }
        default:
          if (this.app.session) {
            this.app.updateSession();
            break;
          }
      }
    });
    l(this, "onPointerDown", (e, t) => {
      if (e.target === "canvas" && this.status === "idle") {
        let { currentPoint: n } = this.app;
        if (e.spaceKey && t.buttons === 1) return;
        if (this.status === "idle" && e.altKey && e.shiftKey) {
          this.setStatus("clonePainting"), this.clonePaint(n);
          return;
        }
        if (!e.shiftKey) {
          if (
            (this.app.onShapeBlur(),
            e.altKey && this.app.selectedIds.length > 0)
          ) {
            this.app.duplicate(this.app.selectedIds, n);
            return;
          }
          this.selectNone();
        }
        this.setStatus("pointingCanvas");
      }
    });
    l(this, "onPointerUp", (e) => {
      var t;
      if (
        this.status === "translatingClone" ||
        this.status === "pointingClone"
      ) {
        this.pointedId &&
          (this.app.completeSession(), this.app.setEditingId(this.pointedId)),
          this.setStatus("idle"),
          (this.pointedId = void 0);
        return;
      }
      if (this.status === "pointingBounds") {
        if (e.target === "bounds") this.selectNone();
        else if (this.app.isSelected(e.target))
          e.shiftKey
            ? this.pointedId !== e.target && this.deselect(e.target)
            : this.pointedId !== e.target &&
              this.app.selectedIds.length > 1 &&
              this.select(e.target);
        else if (this.pointedId === e.target) {
          if (this.app.getShape(e.target).isLocked) return;
          e.shiftKey ? this.pushSelect(e.target) : this.select(e.target);
        }
      }
      this.setStatus("idle"),
        (this.pointedBoundsHandle = void 0),
        (this.pointedHandleId = void 0),
        (this.pointedId = void 0),
        ((t = this.app.session) == null ? void 0 : t.type) !== "edit" &&
          this.app.completeSession();
    });
    l(this, "onDoubleClickCanvas", () => {
      !this.app.readOnly;
    });
    l(this, "onPointShape", (e, t) => {
      if (
        (e.spaceKey && t.buttons === 1) ||
        this.app.getShape(e.target).isLocked
      )
        return;
      let { editingId: n, hoveredId: o } = this.app.pageState;
      if (
        (n && e.target !== n && this.app.onShapeBlur(),
        (this.status === "idle" || this.status === "pointingBounds") &&
          e.metaKey &&
          e.shiftKey &&
          o)
      ) {
        (this.pointedId = o),
          this.app.isSelected(o)
            ? this.deselect(o)
            : (this.pushSelect(o), this.setStatus("pointingBounds"));
        return;
      }
      if (this.status === "pointingBounds") {
        let { parentId: s } = this.app.getShape(e.target);
        this.pointedId = s === this.app.currentPageId ? e.target : s;
        return;
      }
      if (this.status === "idle") {
        if ((this.setStatus("pointingBounds"), e.metaKey)) {
          e.shiftKey || this.selectNone(),
            this.app.startSession("brush"),
            this.setStatus("brushing");
          return;
        }
        let s,
          { parentId: a } = this.app.getShape(e.target);
        a === this.app.currentPageId
          ? ((s = e.target), (this.selectedGroupId = void 0))
          : a === this.selectedGroupId
          ? (s = e.target)
          : ((s = a), (this.selectedGroupId = void 0)),
          this.app.isSelected(s) ||
            ((this.pointedId = s),
            e.shiftKey ? this.pushSelect(s) : this.select(s));
      }
    });
    l(this, "onDoubleClickShape", (e) => {
      if (this.app.readOnly) return;
      let t = this.app.getShape(e.target);
      if (t.isLocked) {
        this.app.select(e.target);
        return;
      }
      k.getShapeUtil(t.type).canEdit &&
        (t.parentId === this.app.currentPageId ||
          t.parentId === this.selectedGroupId) &&
        this.app.setEditingId(e.target),
        t.parentId !== this.app.currentPageId &&
          (this.selectedGroupId = t.parentId),
        this.app.select(e.target);
    });
    l(this, "onRightPointShape", (e) => {
      this.app.isSelected(e.target) || this.app.select(e.target);
    });
    l(this, "onHoverShape", (e) => {
      this.app.setHoveredId(e.target);
    });
    l(this, "onUnhoverShape", (e) => {
      let { currentPageId: t } = this.app;
      requestAnimationFrame(() => {
        t === this.app.currentPageId &&
          this.app.pageState.hoveredId === e.target &&
          this.app.setHoveredId(void 0);
      });
    });
    l(this, "onPointBounds", (e) => {
      if (e.metaKey) {
        e.shiftKey || this.selectNone(),
          this.app.startSession("brush"),
          this.setStatus("brushing");
        return;
      }
      this.setStatus("pointingBounds");
    });
    l(this, "onRightPointBounds", (e, t) => {
      t.stopPropagation();
    });
    l(this, "onReleaseBounds", () => {
      (this.status === "translating" || this.status === "brushing") &&
        this.app.completeSession(),
        this.setStatus("idle");
    });
    l(this, "onPointBoundsHandle", (e) => {
      (this.pointedBoundsHandle = e.target),
        this.setStatus("pointingBoundsHandle");
    });
    l(this, "onDoubleClickBoundsHandle", (e) => {
      switch (e.target) {
        case "center":
        case "left":
        case "right": {
          this.app.select(
            ...k.getLinkedShapeIds(
              this.app.state,
              this.app.currentPageId,
              e.target,
              e.shiftKey
            )
          );
          break;
        }
        default:
          if (this.app.selectedIds.length === 1) {
            this.app.resetBounds(this.app.selectedIds);
            let t = this.app.getShape(this.app.selectedIds[0]);
            "label" in t && this.app.setEditingId(t.id);
          }
      }
    });
    l(this, "onReleaseBoundsHandle", () => {
      this.setStatus("idle");
    });
    l(this, "onPointHandle", (e) => {
      (this.pointedHandleId = e.target), this.setStatus("pointingHandle");
    });
    l(this, "onDoubleClickHandle", (e) => {
      if (e.target === "bend") {
        let { selectedIds: t } = this.app;
        if (t.length !== 1) return;
        let n = this.app.getShape(t[0]);
        k.getShapeUtil(n.type).canEdit &&
          (n.parentId === this.app.currentPageId ||
            n.parentId === this.selectedGroupId) &&
          this.app.setEditingId(n.id);
        return;
      }
      this.app.toggleDecoration(e.target);
    });
    l(this, "onReleaseHandle", () => {
      this.setStatus("idle");
    });
    l(this, "onShapeClone", (e) => {
      let t = this.app.selectedIds[0],
        n = this.getShapeClone(t, e.target);
      e.target === "left" ||
      e.target === "right" ||
      e.target === "top" ||
      e.target === "bottom"
        ? n &&
          (this.app.createShapes(n),
          (this.pointedId = n.id),
          this.setStatus("pointingClone"))
        : (this.setStatus("gridCloning"), this.app.startSession("grid", t));
    });
  }
  deselect(e) {
    this.app.select(...this.app.selectedIds.filter((t) => t !== e));
  }
  select(e) {
    this.app.select(e);
  }
  pushSelect(e) {
    let t = this.app.getShape(e);
    this.app.select(...this.app.selectedIds.filter((n) => n !== t.parentId), e);
  }
  selectNone() {
    this.app.selectNone();
  }
};
var Op = require("@tldraw/core"),
  Ka = V(require("@tldraw/vec"));
var Ur = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "sticky");
    l(this, "shapeId");
    l(this, "onPointerDown", () => {
      if (!this.app.readOnly) {
        if (this.status === "creating") {
          this.setStatus("idle"),
            this.app.appState.isToolLocked || this.app.selectTool("select");
          return;
        }
        if (this.status === "idle") {
          let {
              currentPoint: e,
              currentGrid: t,
              settings: { showGrid: n },
              appState: { currentPageId: o, currentStyle: s },
            } = this.app,
            a = this.getNextChildIndex(),
            d = Op.Utils.uniqueId();
          this.shapeId = d;
          let i = Pr.create({
              id: d,
              parentId: o,
              childIndex: a,
              point: n ? Ka.default.snap(e, t) : e,
              style: S({}, s),
            }),
            c = Pr.getBounds(i);
          (i.point = Ka.default.sub(i.point, [c.width / 2, c.height / 2])),
            this.app.patchCreate([i]),
            this.app.startSession("translate"),
            this.setStatus("creating");
        }
      }
    });
    l(this, "onPointerUp", () => {
      this.app.readOnly ||
        (this.status === "creating" &&
          (this.setStatus("idle"),
          this.app.completeSession(),
          this.app.selectTool("select"),
          this.app.setEditingId(this.shapeId)));
    });
  }
};
var Fp = V(require("@tldraw/vec"));
var Kr = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "text");
    l(this, "stopEditingShape", () => {
      this.setStatus("idle"),
        this.app.appState.isToolLocked || this.app.selectTool("select");
    });
    l(this, "onKeyUp", () => {});
    l(this, "onKeyDown", () => {});
    l(this, "onPointerDown", () => {
      if (this.status === "creating") {
        this.stopEditingShape();
        return;
      }
      if (this.status === "idle") {
        let {
          currentPoint: e,
          currentGrid: t,
          settings: { showGrid: n },
        } = this.app;
        this.app.createTextShapeAtPoint(
          n ? Fp.default.snap(e, t) : e,
          void 0,
          !0
        ),
          this.setStatus("creating");
        return;
      }
    });
    l(this, "onPointerUp", () => {});
    l(this, "onPointShape", (e) => {
      if (this.app.readOnly) return;
      let t = this.app.getShape(e.target);
      t.type === "text" &&
        (this.setStatus("idle"), this.app.setEditingId(t.id));
    });
    l(this, "onShapeBlur", () => {
      this.app.readOnly || this.stopEditingShape();
    });
  }
};
var oi = require("@tldraw/core"),
  jp = V(require("@tldraw/vec"));
var _r = class extends at {
  constructor() {
    super(...arguments);
    l(this, "type", "triangle");
    l(this, "onPointerDown", () => {
      if (this.app.readOnly || this.status !== "idle") return;
      let {
          currentPoint: e,
          currentGrid: t,
          settings: { showGrid: n },
          appState: { currentPageId: o, currentStyle: s },
        } = this.app,
        a = this.getNextChildIndex(),
        d = oi.Utils.uniqueId(),
        i = Vs.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? jp.default.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession(
          "transformSingle",
          i.id,
          oi.TLBoundsCorner.BottomRight,
          !0
        ),
        this.setStatus("creating");
    });
  }
};
var _a = Dt.Utils.uniqueId(),
  ht = class extends ua {
    constructor(e, t = {}) {
      super(ht.defaultState, e, ht.version, (n, o, s) =>
        An(
          w(S({}, o), {
            document: w(S(S({}, o.document), n.document), { version: s }),
          }),
          ht.version
        )
      );
      l(this, "callbacks", {});
      l(this, "tools", {
        select: new Wr(this),
        erase: new Vr(this),
        ["text"]: new Kr(this),
        ["draw"]: new jr(this),
        ["ellipse"]: new Gr(this),
        ["rectangle"]: new Nr(this),
        ["triangle"]: new _r(this),
        ["line"]: new $r(this),
        ["arrow"]: new Fr(this),
        ["sticky"]: new Ur(this),
      });
      l(this, "currentTool", this.tools.select);
      l(this, "session");
      l(this, "readOnly", !1);
      l(this, "isDirty", !1);
      l(this, "isCreating", !1);
      l(this, "originPoint", [0, 0]);
      l(this, "currentPoint", [0, 0]);
      l(this, "previousPoint", [0, 0]);
      l(this, "shiftKey", !1);
      l(this, "altKey", !1);
      l(this, "metaKey", !1);
      l(this, "ctrlKey", !1);
      l(this, "spaceKey", !1);
      l(this, "isPointing", !1);
      l(this, "isForcePanning", !1);
      l(this, "isErasingWithPen", !1);
      l(this, "isPastePrevented", !1);
      l(this, "editingStartTime", -1);
      l(this, "fileSystemHandle", null);
      l(
        this,
        "viewport",
        Dt.Utils.getBoundsFromPoints([
          [0, 0],
          [100, 100],
        ])
      );
      l(
        this,
        "rendererBounds",
        Dt.Utils.getBoundsFromPoints([
          [0, 0],
          [100, 100],
        ])
      );
      l(this, "selectHistory", { stack: [[]], pointer: 0 });
      l(this, "clipboard");
      l(this, "rotationInfo", { selectedIds: [], center: [0, 0] });
      l(this, "migrate", (e) => An(e, ht.version));
      l(this, "onReady", () => {
        var e, t;
        this.loadDocument(this.document),
          ka().then((n) => {
            this.fileSystemHandle = n;
          });
        try {
          this.patchState(
            w(S({}, An(this.state, ht.version)), {
              appState: { status: "idle" },
            })
          );
        } catch (n) {
          console.error("The data appears to be corrupted. Resetting!", n),
            localStorage.setItem(
              this.document.id + "_corrupted",
              JSON.stringify(this.document)
            ),
            this.patchState(
              w(S({}, ht.defaultState), {
                appState: w(S({}, ht.defaultState.appState), {
                  status: "idle",
                }),
              })
            );
        }
        (t = (e = this.callbacks).onMount) == null || t.call(e, this);
      });
      l(this, "cleanup", (e, t) => {
        var a;
        let n = S({}, e);
        n.document !== t.document &&
          Object.entries(n.document.pages).forEach(([d, i]) => {
            if (i === void 0) {
              delete n.document.pages[d], delete n.document.pageStates[d];
              return;
            }
            let c = t.document.pages[d],
              u = {};
            if (!c || i.shapes !== c.shapes || i.bindings !== c.bindings) {
              (i.shapes = S({}, i.shapes)), (i.bindings = S({}, i.bindings));
              let m = new Set();
              Object.entries(i.shapes).forEach(([f, T]) => {
                var b;
                let x;
                T
                  ? (x = T.parentId)
                  : ((x =
                      (b = c == null ? void 0 : c.shapes[f]) == null
                        ? void 0
                        : b.parentId),
                    delete i.shapes[f]),
                  i.id === n.appState.currentPageId &&
                    (c == null ? void 0 : c.shapes[f]) !== T &&
                    (u[f] = T),
                  x && x !== d && i.shapes[x] !== void 0 && m.add(i.shapes[x]);
              }),
                Object.keys(i.bindings).forEach((f) => {
                  i.bindings[f] || delete i.bindings[f];
                }),
                (n.document.pages[d] = i);
              let h = k.getRelatedBindings(n, Object.keys(u), d),
                g = new Set();
              h.forEach((f) => {
                if (!i.bindings[f.id]) return;
                let T = i.shapes[f.toId],
                  x = i.shapes[f.fromId];
                if (!(T && x)) {
                  delete n.document.pages[d].bindings[f.id];
                  return;
                }
                if (g.has(x)) return;
                let b = k.updateArrowBindings(i, x);
                if ((g.add(x), b)) {
                  let y = S(S({}, x), b);
                  i.shapes[x.id] = y;
                }
              }),
                m.forEach((f) => {
                  if (!f) throw Error("no group!");
                  let T = f.children.filter((b) => i.shapes[b] !== void 0),
                    x = Dt.Utils.getCommonBounds(
                      T.map((b) => i.shapes[b])
                        .filter(Boolean)
                        .map((b) => k.getRotatedBounds(b))
                    );
                  i.shapes[f.id] = w(S({}, f), {
                    point: [x.minX, x.minY],
                    size: [x.width, x.height],
                    children: T,
                  });
                });
            }
            let p = S({}, n.document.pageStates[d]);
            p.brush || delete p.brush,
              p.hoveredId && !i.shapes[p.hoveredId] && delete p.hoveredId,
              p.bindingId &&
                !i.bindings[p.bindingId] &&
                (k.warn(`Could not find the binding of ${d}`),
                delete p.bindingId),
              p.editingId &&
                !i.shapes[p.editingId] &&
                (k.warn("Could not find the editing shape!"),
                delete p.editingId),
              (n.document.pageStates[d] = p);
          }),
          Object.keys((a = n.document.assets) != null ? a : {}).forEach((d) => {
            var i, c;
            ((i = n.document.assets) == null ? void 0 : i[d]) ||
              (c = n.document.assets) == null ||
              delete c[d];
          });
        let o = n.appState.currentPageId,
          s = n.document.pageStates[o];
        if (n.room && n.room !== t.room) {
          let d = w(S({}, n.room), { users: S({}, n.room.users) });
          t.room &&
            Object.values(t.room.users)
              .filter(Boolean)
              .forEach((i) => {
                d.users[i.id] === void 0 && delete d.users[i.id];
              }),
            (n.room = d);
        }
        return (
          n.room &&
            (n.room.users[n.room.userId] = w(
              S({}, n.room.users[n.room.userId]),
              { point: this.currentPoint, selectedIds: s.selectedIds }
            )),
          this.readOnly && (n.document.pages = t.document.pages),
          n
        );
      });
      l(this, "broadcastPatch", (e, t) => {
        var c, u, p, m, h, g, f, T, x;
        let n = {},
          o = {},
          s = {},
          a =
            (p =
              (u =
                (c = e == null ? void 0 : e.document) == null
                  ? void 0
                  : c.pages) == null
                ? void 0
                : u[this.currentPageId]) == null
              ? void 0
              : p.shapes,
          d =
            (g =
              (h =
                (m = e == null ? void 0 : e.document) == null
                  ? void 0
                  : m.pages) == null
                ? void 0
                : h[this.currentPageId]) == null
              ? void 0
              : g.bindings,
          i = (f = e == null ? void 0 : e.document) == null ? void 0 : f.assets;
        a &&
          Object.keys(a).forEach((b) => {
            n[b] = this.getShape(b, this.currentPageId);
          }),
          d &&
            Object.keys(d).forEach((b) => {
              o[b] = this.getBinding(b, this.currentPageId);
            }),
          i &&
            Object.keys(i).forEach((b) => {
              s[b] = this.document.assets[b];
            }),
          (x = (T = this.callbacks).onChangePage) == null ||
            x.call(T, this, n, o, s, t);
      });
      l(this, "onPatch", (e, t, n) => {
        var o, s, a, d, i, c;
        ((this.callbacks.onChangePage &&
          ((s =
            (o = t == null ? void 0 : t.document) == null ? void 0 : o.pages) ==
          null
            ? void 0
            : s[this.currentPageId])) ||
          ((a = t == null ? void 0 : t.document) == null
            ? void 0
            : a.assets)) &&
          (((d = t == null ? void 0 : t.document) == null
            ? void 0
            : d.assets) ||
            (this.session &&
              this.session.type !== "brush" &&
              this.session.type !== "erase" &&
              this.session.type !== "draw")) &&
          this.broadcastPatch(t, !1),
          (c = (i = this.callbacks).onPatch) == null || c.call(i, this, t, n);
      });
      l(this, "onCommand", (e, t, n) => {
        var o, s;
        this.clearSelectHistory(),
          (this.isDirty = !0),
          (s = (o = this.callbacks).onCommand) == null || s.call(o, this, t, n);
      });
      l(this, "onReplace", () => {
        this.clearSelectHistory(), (this.isDirty = !1);
      });
      l(this, "onUndo", () => {
        var e, t;
        (this.rotationInfo.selectedIds = [...this.selectedIds]),
          (t = (e = this.callbacks).onUndo) == null || t.call(e, this);
      });
      l(this, "onRedo", () => {
        var e, t;
        (this.rotationInfo.selectedIds = [...this.selectedIds]),
          (t = (e = this.callbacks).onRedo) == null || t.call(e, this);
      });
      l(this, "onPersist", (e, t) => {
        var n, o;
        (o = (n = this.callbacks).onPersist) == null || o.call(n, this),
          this.broadcastPatch(t, !0);
      });
      l(this, "prevSelectedIds", this.selectedIds);
      l(this, "onStateDidChange", (e, t) => {
        var n, o, s, a;
        (o = (n = this.callbacks).onChange) == null || o.call(n, this, t),
          this.room &&
            this.selectedIds !== this.prevSelectedIds &&
            ((a = (s = this.callbacks).onChangePresence) == null ||
              a.call(
                s,
                this,
                w(S({}, this.room.users[this.room.userId]), {
                  selectedIds: this.selectedIds,
                  session: !!this.session,
                })
              ),
            (this.prevSelectedIds = this.selectedIds));
      });
      l(this, "preventPaste", () => {
        if (this.isPastePrevented) return;
        let e = (n) => n.stopImmediatePropagation(),
          t = () => {
            setTimeout(() => {
              document.removeEventListener("paste", e, { capture: !0 }),
                (this.isPastePrevented = !1);
            }, 50);
          };
        document.addEventListener("paste", e, { capture: !0 }),
          window.addEventListener("pointerup", t, { once: !0 }),
          (this.isPastePrevented = !0);
      });
      l(this, "justSent", !1);
      l(this, "getReservedContent", (e, t = this.currentPageId) => {
        let { bindings: n } = this.document.pages[t],
          o = {},
          s = {},
          a = Object.values(n),
          d = new Map(a.map((h) => [h.toId, h])),
          i = new Map(a.map((h) => [h.fromId, h])),
          c = [d, i],
          u = [];
        this.session && e.forEach((h) => u.push(h)),
          this.pageState.editingId && u.push(this.pageState.editingId);
        let p = new Set(u),
          m = new Set();
        for (; u.length > 0; ) {
          let h = u.pop();
          if (!h) break;
          if (m.has(h)) continue;
          m.add(h);
          let g = this.getShape(h);
          (o[h] = g),
            g.parentId !== t && u.push(g.parentId),
            g.children && u.push(...g.children),
            c
              .map((f) => f.get(g.id))
              .filter(Boolean)
              .forEach((f) => {
                (s[f.id] = f), u.push(f.toId, f.fromId);
              });
        }
        return {
          reservedShapes: o,
          reservedBindings: s,
          strongReservedShapeIds: p,
        };
      });
      l(this, "replacePageContent", (e, t, n, o = this.currentPageId) => {
        if (this.justSent) return (this.justSent = !1), this;
        let s = this.document.pages[this.currentPageId];
        return (
          Object.values(e).forEach((a) => {
            a.parentId !== o &&
              !(s.shapes[a.parentId] || e[a.parentId]) &&
              (console.warn("Added a shape without a parent on the page"),
              (a.parentId = o));
          }),
          this.useStore.setState((a) => {
            let {
                hoveredId: d,
                editingId: i,
                bindingId: c,
                selectedIds: u,
              } = a.document.pageStates[o],
              p = [...u],
              m = i && a.document.pages[this.currentPageId].shapes[i];
            m && p.push(m.id);
            let {
              reservedShapes: h,
              reservedBindings: g,
              strongReservedShapeIds: f,
            } = this.getReservedContent(p, this.currentPageId);
            Object.values(h)
              .filter((v) => !("text" in v))
              .forEach((v) => {
                let I = e[v.id];
                if (!!I) {
                  if (!(v.type === "arrow" || f.has(v.id))) {
                    e[v.id] = I;
                    return;
                  }
                  "decorations" in I &&
                    "decorations" in v &&
                    (e[v.id] = w(S({}, v), { decorations: I.decorations })),
                    (v.style = I.style);
                }
              });
            let T = S(S({}, e), h);
            m && (T[m.id] = m);
            let x = S(S({}, t), g),
              b = S({}, n),
              y = w(S({}, a), {
                document: w(S({}, a.document), {
                  pages: {
                    [o]: w(S({}, a.document.pages[o]), {
                      shapes: T,
                      bindings: x,
                    }),
                  },
                  assets: b,
                  pageStates: w(S({}, a.document.pageStates), {
                    [o]: w(S({}, a.document.pageStates[o]), {
                      selectedIds: u.filter((v) => T[v] !== void 0),
                      hoveredId: d ? (T[d] === void 0 ? void 0 : d) : void 0,
                      editingId: i,
                      bindingId: c ? (x[c] === void 0 ? void 0 : c) : void 0,
                    }),
                  }),
                }),
              }),
              R = y.document.pages[o],
              K = k.getRelatedBindings(y, Object.keys(T), o),
              L = new Set();
            return (
              K.forEach((v) => {
                if (!R.bindings[v.id]) return;
                let I = R.shapes[v.fromId];
                if (L.has(I)) return;
                let J = k.updateArrowBindings(R, I);
                if ((L.add(I), J)) {
                  let ce = S(S({}, I), J);
                  R.shapes[I.id] = ce;
                }
              }),
              Object.values(T).forEach((v) => {
                if (v.type !== "group") return;
                let I = v.children.filter((ce) => R.shapes[ce] !== void 0),
                  J = Dt.Utils.getCommonBounds(
                    I.map((ce) => R.shapes[ce])
                      .filter(Boolean)
                      .map((ce) => k.getRotatedBounds(ce))
                  );
                R.shapes[v.id] = w(S({}, v), {
                  point: [J.minX, J.minY],
                  size: [J.width, J.height],
                  children: I,
                });
              }),
              (this.state.document = y.document),
              y
            );
          }, !0),
          this
        );
      });
      l(this, "updateBounds", (e) => {
        this.rendererBounds = e;
        let { point: t, zoom: n } = this.camera;
        this.updateViewport(t, n),
          !this.readOnly && this.session && this.session.update();
      });
      l(this, "updateViewport", (e, t) => {
        let { width: n, height: o } = this.rendererBounds,
          [s, a] = ve.Vec.sub(ve.Vec.div([0, 0], t), e),
          [d, i] = ve.Vec.sub(ve.Vec.div([n, o], t), e);
        this.viewport = {
          minX: s,
          minY: a,
          maxX: d,
          maxY: i,
          width: d - s,
          height: i - a,
        };
      });
      l(this, "setEditingId", (e, t = !1) => {
        if (!this.readOnly) {
          if (e) this.startSession("edit", e, t);
          else {
            if (!this.pageState.editingId) return;
            this.completeSession();
          }
          (this.editingStartTime = performance.now()),
            this.patchState(
              {
                document: {
                  pageStates: { [this.currentPageId]: { editingId: e } },
                },
              },
              "set_editing_id"
            );
        }
      });
      l(this, "setHoveredId", (e) => {
        this.patchState(
          {
            document: {
              pageStates: { [this.currentPageId]: { hoveredId: e } },
            },
          },
          "set_hovered_id"
        );
      });
      l(this, "setSetting", (e, t) => {
        if (this.session) return this;
        let n = {
          settings: { [e]: typeof t == "function" ? t(this.settings[e]) : t },
        };
        return this.patchState(n, `settings:${e}`), this.persist(n), this;
      });
      l(this, "toggleFocusMode", () => {
        if (this.session) return this;
        let e = { settings: { isFocusMode: !this.settings.isFocusMode } };
        return (
          this.patchState(e, "settings:toggled_focus_mode"),
          this.persist(e),
          this
        );
      });
      l(this, "togglePenMode", () => {
        if (this.session) return this;
        let e = { settings: { isPenMode: !this.settings.isPenMode } };
        return (
          this.patchState(e, "settings:toggled_pen_mode"), this.persist(e), this
        );
      });
      l(this, "toggleDarkMode", () => {
        if (this.session) return this;
        let e = { settings: { isDarkMode: !this.settings.isDarkMode } };
        return (
          this.patchState(e, "settings:toggled_dark_mode"),
          this.persist(e),
          this
        );
      });
      l(this, "toggleZoomSnap", () => {
        if (this.session) return this;
        let e = { settings: { isZoomSnap: !this.settings.isZoomSnap } };
        return (
          this.patchState(e, "settings:toggled_zoom_snap"),
          this.persist(e),
          this
        );
      });
      l(this, "toggleDebugMode", () => {
        if (this.session) return this;
        let e = { settings: { isDebugMode: !this.settings.isDebugMode } };
        return (
          this.patchState(e, "settings:toggled_debug"), this.persist(e), this
        );
      });
      l(this, "setMenuOpen", (e) => {
        let t = { appState: { isMenuOpen: e } };
        return (
          this.patchState(t, "ui:toggled_menu_opened"), this.persist(t), this
        );
      });
      l(this, "setIsLoading", (e) => {
        let t = { appState: { isLoading: e } };
        return (
          this.patchState(t, "ui:toggled_is_loading"), this.persist(t), this
        );
      });
      l(
        this,
        "setDisableAssets",
        (e) => (
          this.patchState(
            { appState: { disableAssets: e } },
            "ui:toggled_disable_images"
          ),
          this
        )
      );
      l(this, "toggleGrid", () => {
        if (this.session) return this;
        let e = { settings: { showGrid: !this.settings.showGrid } };
        return (
          this.patchState(e, "settings:toggled_grid"), this.persist(e), this
        );
      });
      l(this, "selectTool", (e) => {
        if (this.readOnly || this.session) return this;
        this.isPointing = !1;
        let t = this.tools[e];
        return t === this.currentTool
          ? (this.patchState({ appState: { isToolLocked: !1 } }), this)
          : (this.currentTool.onExit(),
            (t.previous = this.currentTool.type),
            (this.currentTool = t),
            this.currentTool.onEnter(),
            this.patchState(
              { appState: { activeTool: e, isToolLocked: !1 } },
              `selected_tool:${e}`
            ));
      });
      l(this, "toggleToolLock", () =>
        this.session
          ? this
          : this.patchState(
              { appState: { isToolLocked: !this.appState.isToolLocked } },
              "toggled_tool_lock"
            )
      );
      l(this, "resetDocument", () => {
        if (this.session) return this;
        (this.session = void 0), (this.currentTool = this.tools.select);
        let e = ht.defaultDocument;
        return (
          (e.pages.page.name = "Page 1"),
          this.resetHistory()
            .clearSelectHistory()
            .loadDocument(ht.defaultDocument)
            .persist({}),
          this
        );
      });
      l(this, "updateUsers", (e, t = !1) => {
        this.patchState(
          { room: { users: Object.fromEntries(e.map((n) => [n.id, n])) } },
          t ? "room:self:update" : "room:user:update"
        );
      });
      l(this, "removeUser", (e) => {
        this.patchState({ room: { users: { [e]: void 0 } } });
      });
      l(this, "mergeDocument", (e) => {
        if (this.document.id !== e.id)
          return (
            this.replaceState(
              w(S({}, An(w(S({}, this.state), { document: e }), ht.version)), {
                appState: w(S({}, this.appState), {
                  currentPageId: Object.keys(e.pages)[0],
                }),
              })
            ),
            this
          );
        let t = S({}, this.document.pageStates),
          n = w(S({}, this.appState), {
            currentPageId: e.pages[this.currentPageId]
              ? this.currentPageId
              : Object.keys(e.pages)[0],
            pages: Object.values(e.pages).map((s, a) => ({
              id: s.id,
              name: s.name,
              childIndex: s.childIndex || a,
            })),
          });
        this.resetHistory(),
          Object.keys(this.document.pages).forEach((s) => {
            e.pages[s] ||
              (s === this.appState.currentPageId &&
                (this.cancelSession(), this.selectNone()),
              (t[s] = void 0));
          }),
          this.session &&
            this.selectedIds
              .filter((s) => !e.pages[this.currentPageId].shapes[s])
              .forEach(
                (s) =>
                  (e.pages[this.currentPageId].shapes[s] = this.page.shapes[s])
              ),
          Object.entries(t).forEach(([s, a]) => {
            a.selectedIds = a.selectedIds.filter((d) => !!e.pages[s].shapes[d]);
          });
        let { editingId: o } = this.pageState;
        return (
          o &&
            ((e.pages[this.currentPageId].shapes[o] = this.page.shapes[o]),
            (t[this.currentPageId].selectedIds = [o])),
          this.replaceState(
            w(
              S(
                {},
                An(
                  w(S({}, this.state), {
                    document: w(S({}, e), { pageStates: t }),
                  }),
                  ht.version
                )
              ),
              { appState: n }
            ),
            "merge"
          )
        );
      });
      l(this, "updateDocument", (e, t = "updated_document") => {
        let n = this.state,
          o = w(S({}, n), {
            document: w(S({}, n.document), { assets: e.assets }),
          });
        e.pages[this.currentPageId] ||
          (o.appState = w(S({}, n.appState), {
            currentPageId: Object.keys(e.pages)[0],
          }));
        let s = 1;
        for (let a of Object.values(e.pages))
          a !== n.document.pages[a.id] &&
            ((o.document.pages[a.id] = a),
            a.name || ((o.document.pages[a.id].name = `Page ${s + 1}`), s++));
        for (let a of Object.values(e.pageStates))
          if (a !== n.document.pageStates[a.id]) {
            o.document.pageStates[a.id] = a;
            let d = e.pages[a.id],
              i = ["bindingId", "editingId", "hoveredId", "pointedId"];
            for (let c of i) d.shapes[c] || (a[c] = void 0);
            a.selectedIds = a.selectedIds.filter(
              (c) => !!e.pages[d.id].shapes[c]
            );
          }
        return this.replaceState(
          An(o, o.document.version || 0),
          `${t}:${e.id}`
        );
      });
      l(
        this,
        "loadRoom",
        (e) => (
          this.patchState({
            room: {
              id: e,
              userId: _a,
              users: {
                [_a]: {
                  id: _a,
                  color: Oi[Math.floor(Math.random() * Oi.length)],
                  point: [100, 100],
                  selectedIds: [],
                  activeShapes: [],
                },
              },
            },
          }),
          this
        )
      );
      l(this, "loadDocument", (e) => {
        this.setIsLoading(!0),
          this.selectNone(),
          this.resetHistory(),
          this.clearSelectHistory(),
          (this.session = void 0);
        let t = w(S({}, ht.defaultState), {
          settings: S({}, this.state.settings),
          document: e,
          appState: w(S(S({}, ht.defaultState.appState), this.state.appState), {
            currentPageId: Object.keys(e.pages)[0],
            disableAssets: this.disableAssets,
          }),
        });
        this.replaceState(An(t, ht.version), "loaded_document");
        let { point: n, zoom: o } = this.camera;
        return this.updateViewport(n, o), this.setIsLoading(!1), this;
      });
      l(this, "loadPageFromURL", (e, t) => {
        let n = e.id,
          o = w(S({}, this.state.document), {
            pageStates: w(S({}, this.state.document.pageStates), { [n]: t }),
            pages: w(S({}, this.document.pages), { [n]: e }),
          });
        this.loadDocument(o), this.persist({});
      });
      l(this, "newProject", () => {
        !this.isLocal || ((this.fileSystemHandle = null), this.resetDocument());
      });
      l(this, "saveProject", () =>
        ue(this, null, function* () {
          if (this.readOnly) return;
          let e = yield Qs(
            An(this.state, ht.version).document,
            this.fileSystemHandle
          );
          return (
            (this.fileSystemHandle = e),
            this.persist({}),
            (this.isDirty = !1),
            this
          );
        })
      );
      l(this, "saveProjectAs", (e) =>
        ue(this, null, function* () {
          try {
            let t = yield Qs(this.document, null, e);
            (this.fileSystemHandle = t), this.persist({}), (this.isDirty = !1);
          } catch (t) {
            console.error(t.message);
          }
          return this;
        })
      );
      l(this, "openProject", () =>
        ue(this, null, function* () {
          if (!!this.isLocal)
            try {
              let e = yield Ia();
              if (!e) throw Error();
              let { fileHandle: t, document: n } = e;
              this.loadDocument(n),
                (this.fileSystemHandle = t),
                this.zoomToFit(),
                this.persist({});
            } catch (e) {
              console.error(e);
            } finally {
              this.persist({});
            }
        })
      );
      l(this, "openAsset", () =>
        ue(this, null, function* () {
          if (!this.disableAssets)
            try {
              let e = yield Ca();
              if (Array.isArray(e)) this.addMediaFromFiles(e, this.centerPoint);
              else {
                if (!e) return;
                this.addMediaFromFiles([e]);
              }
            } catch (e) {
              console.error(e);
            } finally {
              this.persist({});
            }
        })
      );
      l(this, "signOut", () => {});
      l(this, "getAppState", () => this.appState);
      l(this, "getPage", (e = this.currentPageId) =>
        k.getPage(this.state, e || this.currentPageId)
      );
      l(this, "getShapes", (e = this.currentPageId) =>
        k.getShapes(this.state, e || this.currentPageId)
      );
      l(this, "getBindings", (e = this.currentPageId) =>
        k.getBindings(this.state, e || this.currentPageId)
      );
      l(this, "getShape", (e, t = this.currentPageId) =>
        k.getShape(this.state, e, t)
      );
      l(this, "getShapeBounds", (e, t = this.currentPageId) =>
        k.getBounds(this.getShape(e, t))
      );
      l(this, "getBinding", (e, t = this.currentPageId) =>
        k.getBinding(this.state, e, t)
      );
      l(this, "getPageState", (e = this.currentPageId) =>
        k.getPageState(this.state, e || this.currentPageId)
      );
      l(this, "getPagePoint", (e, t = this.currentPageId) => {
        let { camera: n } = this.getPageState(t);
        return ve.Vec.sub(ve.Vec.div(e, n.zoom), n.point);
      });
      l(this, "createPage", (e, t) => {
        if (this.readOnly) return this;
        let { width: n, height: o } = this.rendererBounds;
        return this.setState(ip(this, [-n / 2, -o / 2], e, t));
      });
      l(this, "changePage", (e) => this.setState(np(this, e)));
      l(this, "movePage", (e, t) =>
        this.readOnly ? this : this.setState(fp(this, e, t))
      );
      l(this, "renamePage", (e, t) =>
        this.readOnly ? this : this.setState(Sp(this, e, t))
      );
      l(this, "duplicatePage", (e) =>
        this.readOnly ? this : this.setState(cp(this, e))
      );
      l(this, "deletePage", (e) =>
        this.readOnly
          ? this
          : Object.values(this.document.pages).length <= 1
          ? this
          : this.setState(ap(this, e || this.currentPageId))
      );
      l(
        this,
        "cut",
        (e = this.selectedIds, t) => (
          t == null || t.preventDefault(),
          this.copy(e, t),
          this.readOnly || this.delete(e),
          this
        )
      );
      l(this, "copy", (e = this.selectedIds, t) => {
        var s;
        t == null || t.preventDefault(), (this.clipboard = this.getContent(e));
        let o = `<tldraw>${JSON.stringify(
          S(
            { type: "tldr/clipboard", shapes: [], assets: [], bindings: [] },
            this.clipboard
          )
        )}</tldraw>`;
        return (
          Xc(o),
          t && ((s = t.clipboardData) == null || s.setData("text/html", o)),
          navigator.clipboard &&
            window.ClipboardItem &&
            navigator.clipboard.write([
              new ClipboardItem({
                "text/html": new Blob([o], { type: "text/html" }),
              }),
            ]),
          this
        );
      });
      l(this, "paste", (e, t) =>
        ue(this, null, function* () {
          var c, u;
          if (this.readOnly) return;
          let n = [],
            o = [],
            s,
            a = (p) =>
              ue(this, null, function* () {
                let m = document.createElement("div");
                m.innerHTML = p;
                let h = m.firstChild;
                h.style.setProperty("background-color", "transparent");
                let g = yield k.getImageForSvg(h, "svg", {
                  scale: 1,
                  quality: 1,
                });
                if (g) {
                  let f = new File([g], "image.svg");
                  n.push(f);
                } else d(p);
              }),
            d = (p) => {
              let m = this.getPagePoint(
                  e != null ? e : this.centerPoint,
                  this.currentPageId
                ),
                h = p.includes(`
`);
              o.push(
                k
                  .getShapeUtil("text")
                  .getShape({
                    id: Dt.Utils.uniqueId(),
                    type: "text",
                    parentId: this.appState.currentPageId,
                    text: k.normalizeText(p.trim()),
                    point: m,
                    style: w(S({}, this.appState.currentStyle), {
                      textAlign: h
                        ? "start"
                        : this.appState.currentStyle.textAlign,
                    }),
                  })
              );
            },
            i = (p) => {
              var m;
              try {
                let h =
                  (m = p.match(/<tldraw>(.*)<\/tldraw>/)) == null
                    ? void 0
                    : m[1];
                if (!h) return;
                let g = JSON.parse(h);
                if (g.type === "tldr/clipboard") {
                  s = g;
                  return;
                } else throw Error("Not tldraw data!");
              } catch (h) {
                d(p);
              }
            };
          if (t !== void 0) {
            let p = Array.from(
              (u = (c = t.clipboardData) == null ? void 0 : c.items) != null
                ? u
                : []
            );
            yield Promise.all(
              p.map((m) =>
                ue(this, null, function* () {
                  var f;
                  let { type: h, kind: g } = m;
                  switch (g) {
                    case "string": {
                      let T = yield new Promise((x) => m.getAsString(x));
                      switch (h) {
                        case "text/html": {
                          if (
                            (f = T.match(/<tldraw>(.*)<\/tldraw>/)) == null
                              ? void 0
                              : f[1]
                          ) {
                            i(T);
                            return;
                          }
                          break;
                        }
                        case "text/plain": {
                          T.startsWith("<svg") ? yield a(T) : d(T);
                          break;
                        }
                      }
                      break;
                    }
                    case "file": {
                      let T = m.getAsFile();
                      T && n.push(T);
                      break;
                    }
                  }
                })
              )
            );
          }
          if (s) return this.insertContent(s, { point: e, select: !0 }), this;
          if (n.length) return this.addMediaFromFiles(n, e), this;
          if (o.length) {
            let p = this.getPagePoint(
                e != null ? e : this.centerPoint,
                this.currentPageId
              ),
              m = ve.Vec.add(p, [0, 0]);
            return (
              o.forEach((h, g) => {
                let f = k.getBounds(h);
                g === 0 && ((m[0] -= f.width / 2), (m[1] -= f.height / 2)),
                  (h.point = [...m]),
                  (m[0] += f.width);
              }),
              this.createShapes(...o),
              this
            );
          }
          return (
            this.clipboard
              ? this.insertContent(this.clipboard)
              : Zc().then((p) => {
                  p && i(p);
                }),
            this
          );
        })
      );
      l(this, "getSvg", (...n) =>
        ue(
          this,
          [...n],
          function* (
            e = this.selectedIds.length
              ? this.selectedIds
              : Object.keys(this.page.shapes),
            t = {}
          ) {
            if (e.length === 0) return;
            let o = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "svg"
              ),
              s = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "defs"
              ),
              a = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "style"
              );
            if (
              (typeof window != "undefined" && window.focus(), t.includeFonts)
            )
              try {
                let { fonts: h } = yield fetch(ht.assetSrc, {
                  mode: "no-cors",
                }).then((g) => g.json());
                a.textContent = `
          @font-face {
            font-family: 'Caveat Brush';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${h.caveat}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Code Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${h.source_code_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Source Sans Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${h.source_sans_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          @font-face {
            font-family: 'Crimson Pro';
            src: url(data:application/x-font-woff;charset=utf-8;base64,${h.crimson_pro}) format('woff');
            font-weight: 500;
            font-style: normal;
          }
          `;
              } catch (h) {
                k.warn("Could not find tldraw-assets.json file.");
              }
            else
              a.textContent =
                "@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');";
            s.append(a), o.append(s);
            let d = e
                .map((h) => this.getShape(h, this.currentPageId))
                .sort((h, g) => h.childIndex - g.childIndex),
              i = Dt.Utils.getCommonBounds(d.map(k.getRotatedBounds)),
              c = (h) => {
                let g = k.getShapeUtil(h),
                  f = g.getBounds(h),
                  T = g.getSvgElement(h, this.settings.isDarkMode);
                if (!!T)
                  return (
                    h.type === "image"
                      ? T.setAttribute(
                          "xlink:href",
                          this.document.assets[h.assetId].src
                        )
                      : h.type === "video" &&
                        T.setAttribute("xlink:href", this.serializeVideo(h.id)),
                    T.setAttribute(
                      "transform",
                      `translate(${(16 + h.point[0] - i.minX).toFixed(2)}, ${(
                        16 +
                        h.point[1] -
                        i.minY
                      ).toFixed(2)}) rotate(${(
                        ((h.rotation || 0) * 180) /
                        Math.PI
                      ).toFixed(2)}, ${(f.width / 2).toFixed(2)}, ${(
                        f.height / 2
                      ).toFixed(2)})`
                    ),
                    T
                  );
              };
            d.forEach((h) => {
              var f;
              if ((f = h.children) == null ? void 0 : f.length) {
                let T = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                );
                h.children.forEach((x) => {
                  let b = this.getShape(x, this.currentPageId),
                    y = c(b);
                  y && T.append(y);
                }),
                  o.append(T);
                return;
              }
              let g = c(h);
              g && o.append(g);
            }),
              o.setAttribute(
                "viewBox",
                [0, 0, i.width + 16 * 2, i.height + 16 * 2].join(" ")
              ),
              o.setAttribute("width", (i.width + 16 * 2).toString()),
              o.setAttribute("height", (i.height + 16 * 2).toString());
            let u = this.settings.exportBackground,
              p = "#212529",
              m = "rgb(248, 249, 250)";
            switch (u) {
              case "auto": {
                o.style.setProperty(
                  "background-color",
                  this.settings.isDarkMode ? p : m
                );
                break;
              }
              case "dark": {
                o.style.setProperty("background-color", p);
                break;
              }
              case "light": {
                o.style.setProperty("background-color", m);
                break;
              }
              case "transparent":
              default: {
                o.style.setProperty("background-color", "transparent");
                break;
              }
            }
            return (
              o
                .querySelectorAll(
                  ".tl-fill-hitarea, .tl-stroke-hitarea, .tl-binding-indicator"
                )
                .forEach((h) => h.remove()),
              o
            );
          }
        )
      );
      l(this, "copySvg", (...t) =>
        ue(
          this,
          [...t],
          function* (
            e = this.selectedIds.length
              ? this.selectedIds
              : Object.keys(this.page.shapes)
          ) {
            if (e.length === 0) return;
            let n = yield this.getSvg(e);
            if (!n) return;
            let o = k.getSvgString(n, 1);
            this.clipboard = this.getContent(e);
            let s = JSON.stringify(
              S(
                {
                  type: "tldr/clipboard",
                  shapes: [],
                  assets: [],
                  bindings: [],
                },
                this.clipboard
              )
            );
            return (
              navigator.clipboard &&
                window.ClipboardItem &&
                navigator.clipboard.write([
                  new ClipboardItem({
                    "text/html": new Blob([s], { type: "text/html" }),
                    "text/plain": new Blob([o], { type: "text/plain" }),
                  }),
                ]),
              o
            );
          }
        )
      );
      l(this, "getContent", (e) => {
        let t = this.getPage(this.currentPageId);
        if (
          (e && e.length === 0) ||
          (e || (e = this.selectedIds),
          e.length === 0 && (e = Object.keys(t.shapes)),
          e.length === 0)
        )
          return;
        let n = e
            .map((d) => t.shapes[d])
            .flatMap((d) => {
              var i;
              return [
                d,
                ...((i = d.children) != null ? i : []).map((c) => t.shapes[c]),
              ];
            })
            .map(wt),
          o = new Set(n.map((d) => d.id));
        n.forEach((d) => {
          d.parentId === this.currentPageId && (d.parentId = "currentPageId");
        });
        let s = Object.values(t.bindings)
            .filter((d) => {
              if (o.has(d.fromId) || o.has(d.toId)) return !0;
              if (o.has(d.fromId)) {
                let c = n.find((u) => u.id === d.fromId).handles;
                c &&
                  Object.values(c).forEach((u) => {
                    u.bindingId === d.id && (u.bindingId = void 0);
                  });
              }
              if (o.has(d.toId)) {
                let c = n.find((u) => u.id === d.toId).handles;
                c &&
                  Object.values(c).forEach((u) => {
                    u.bindingId === d.id && (u.bindingId = void 0);
                  });
              }
              return !1;
            })
            .map(wt),
          a = [
            ...new Set(
              n
                .map((d) => {
                  if (!!d.assetId) return this.document.assets[d.assetId];
                })
                .filter(Boolean)
                .map(wt)
            ),
          ];
        return { shapes: n, bindings: s, assets: a };
      });
      l(this, "copyJson", (e = this.selectedIds) => {
        let t = this.getContent(e);
        return t && k.copyStringToClipboard(JSON.stringify(t)), this;
      });
      l(this, "exportJson", (e = this.selectedIds) => {
        let t = this.getContent(e);
        if (t) {
          let n = new Blob([JSON.stringify(t)], { type: "application/json" }),
            o = URL.createObjectURL(n),
            s = document.createElement("a");
          (s.href = o), (s.download = "export.json"), s.click();
        }
        return this;
      });
      l(this, "insertContent", (e, t = {}) =>
        this.setState(Ip(this, e, t), "insert_content")
      );
      l(this, "getImage", (...n) =>
        ue(this, [...n], function* (e = "png", t = {}) {
          let {
              ids: o = this.selectedIds.length
                ? this.selectedIds
                : Object.keys(this.page.shapes),
            } = t,
            s = yield this.getSvg(o, { includeFonts: e !== "svg" });
          if (!s) return;
          if (e === "svg") {
            let d = k.getSvgString(s, 1);
            return new Blob([d], { type: "image/svg+xml" });
          }
          let a = yield k.getImageForSvg(s, e, t);
          if (!!a) return a;
        })
      );
      l(this, "copyImage", (...n) =>
        ue(this, [...n], function* (e = "png", t = {}) {
          if (e === "svg") {
            this.copySvg(t.ids);
            return;
          }
          if (!(navigator.clipboard && window.ClipboardItem)) {
            console.warn(
              "Sorry, your browser does not support copying images."
            );
            return;
          }
          let o = yield this.getImage(e, t);
          !o || navigator.clipboard.write([new ClipboardItem({ [o.type]: o })]);
        })
      );
      l(this, "exportImage", (...n) =>
        ue(this, [...n], function* (e = "png", t = {}) {
          var d;
          let { pageId: o = this.currentPageId } = t,
            s = yield this.getImage(e, t);
          if (!s) return;
          let a = (d = this.document.pages[o].name) != null ? d : "export";
          if (this.callbacks.onExport)
            this.callbacks.onExport(this, { name: a, type: e, blob: s });
          else {
            let i = URL.createObjectURL(s),
              c = document.createElement("a");
            (c.href = i), (c.download = `${a}.${e}`), c.click();
          }
        })
      );
      l(
        this,
        "setCamera",
        (e, t, n) => (
          this.updateViewport(e, t),
          this.patchState(
            {
              document: {
                pageStates: {
                  [this.currentPageId]: { camera: { point: e, zoom: t } },
                },
              },
            },
            n
          ),
          this
        )
      );
      l(this, "resetCamera", () =>
        this.setCamera(this.centerPoint, 1, "reset_camera")
      );
      l(this, "pan", (e) => {
        let { camera: t } = this.pageState;
        return this.setCamera(
          ve.Vec.toFixed(ve.Vec.sub(t.point, e)),
          t.zoom,
          "panned"
        );
      });
      l(this, "pinchZoom", (e, t, n) => {
        let { camera: o } = this.pageState,
          s = ve.Vec.sub(o.point, ve.Vec.div(t, o.zoom)),
          a = n,
          d = ve.Vec.sub(ve.Vec.div(e, o.zoom), s),
          i = ve.Vec.sub(ve.Vec.div(e, a), s);
        return this.setCamera(
          ve.Vec.toFixed(ve.Vec.add(s, ve.Vec.sub(i, d))),
          a,
          "pinch_zoomed"
        );
      });
      l(this, "zoomTo", (e, t = this.centerPoint) => {
        let { zoom: n, point: o } = this.camera,
          s = ve.Vec.sub(ve.Vec.div(t, n), o),
          a = ve.Vec.sub(ve.Vec.div(t, e), o);
        return this.setCamera(
          ve.Vec.toFixed(ve.Vec.add(o, ve.Vec.sub(a, s))),
          e,
          "zoomed_camera"
        );
      });
      l(this, "zoomIn", () => {
        let e = Math.round((this.camera.zoom * 100) / 25),
          t = k.getCameraZoom((e + 1) * 0.25);
        return this.zoomTo(t);
      });
      l(this, "zoomOut", () => {
        let e = Math.round((this.camera.zoom * 100) / 25),
          t = k.getCameraZoom((e - 1) * 0.25);
        return this.zoomTo(t);
      });
      l(this, "zoomToFit", () => {
        let {
          shapes: e,
          pageState: { camera: t },
        } = this;
        if (e.length === 0) return this;
        let { rendererBounds: n } = this,
          o = Dt.Utils.getCommonBounds(e.map(k.getBounds)),
          s = k.getCameraZoom(
            Math.min((n.width - 128) / o.width, (n.height - 128) / o.height)
          );
        s = t.zoom === s || t.zoom < 1 ? Math.min(1, s) : s;
        let a = (n.width - o.width * s) / 2 / s,
          d = (n.height - o.height * s) / 2 / s;
        return this.setCamera(
          ve.Vec.toFixed(ve.Vec.sub([a, d], [o.minX, o.minY])),
          s,
          "zoomed_to_fit"
        );
      });
      l(this, "zoomToSelection", () => {
        if (this.selectedIds.length === 0) return this;
        let { rendererBounds: e } = this,
          t = k.getSelectedBounds(this.state),
          n = k.getCameraZoom(
            Math.min((e.width - 128) / t.width, (e.height - 128) / t.height)
          );
        n = this.camera.zoom === n || this.camera.zoom < 1 ? Math.min(1, n) : n;
        let o = (e.width - t.width * n) / 2 / n,
          s = (e.height - t.height * n) / 2 / n;
        return this.setCamera(
          ve.Vec.toFixed(ve.Vec.sub([o, s], [t.minX, t.minY])),
          n,
          "zoomed_to_selection"
        );
      });
      l(this, "zoomToContent", () => {
        let e = this.shapes,
          t = this.pageState;
        if (e.length === 0) return this;
        let { rendererBounds: n } = this,
          { zoom: o } = t.camera,
          s = Dt.Utils.getCommonBounds(e.map(k.getBounds)),
          a = (n.width - s.width * o) / 2 / o,
          d = (n.height - s.height * o) / 2 / o;
        return this.setCamera(
          ve.Vec.toFixed(ve.Vec.sub([a, d], [s.minX, s.minY])),
          this.camera.zoom,
          "zoomed_to_content"
        );
      });
      l(this, "resetZoom", () => this.zoomTo(1));
      l(
        this,
        "zoomBy",
        Dt.Utils.throttle((e, t) => {
          let { zoom: n } = this.camera,
            o = k.getCameraZoom(n - e * n);
          return this.zoomTo(o, t);
        }, 16)
      );
      l(
        this,
        "clearSelectHistory",
        () => (
          (this.selectHistory.pointer = 0),
          (this.selectHistory.stack = [this.selectedIds]),
          this
        )
      );
      l(
        this,
        "addToSelectHistory",
        (e) => (
          this.selectHistory.pointer < this.selectHistory.stack.length &&
            (this.selectHistory.stack = this.selectHistory.stack.slice(
              0,
              this.selectHistory.pointer + 1
            )),
          this.selectHistory.pointer++,
          this.selectHistory.stack.push(e),
          this
        )
      );
      l(this, "setSelectedIds", (e, t = !1) => {
        let n = t ? [...this.pageState.selectedIds, ...e] : [...e];
        return this.patchState(
          {
            appState: { activeTool: "select" },
            document: {
              pageStates: { [this.currentPageId]: { selectedIds: n } },
            },
          },
          "selected"
        );
      });
      l(
        this,
        "undoSelect",
        () => (
          this.selectHistory.pointer > 0 &&
            (this.selectHistory.pointer--,
            this.setSelectedIds(
              this.selectHistory.stack[this.selectHistory.pointer]
            )),
          this
        )
      );
      l(
        this,
        "redoSelect",
        () => (
          this.selectHistory.pointer < this.selectHistory.stack.length - 1 &&
            (this.selectHistory.pointer++,
            this.setSelectedIds(
              this.selectHistory.stack[this.selectHistory.pointer]
            )),
          this
        )
      );
      l(
        this,
        "select",
        (...e) => (
          e.forEach((t) => {
            if (!this.page.shapes[t])
              throw Error(
                `That shape does not exist on page ${this.currentPageId}`
              );
          }),
          this.setSelectedIds(e),
          this.addToSelectHistory(e),
          this
        )
      );
      l(this, "selectAll", (e = this.currentPageId) =>
        this.session
          ? this
          : (this.setSelectedIds(
              Object.values(this.document.pages[e].shapes)
                .filter((t) => t.parentId === e)
                .map((t) => t.id)
            ),
            this.addToSelectHistory(this.selectedIds),
            this.selectTool("select"),
            this)
      );
      l(
        this,
        "selectNone",
        () => (
          this.setSelectedIds([]),
          this.addToSelectHistory(this.selectedIds),
          this
        )
      );
      l(this, "startSession", (e, ...t) => {
        var s, a;
        if (this.readOnly && e !== "brush") return this;
        this.session &&
          (k.warn(`Already in a session! (${this.session.constructor.name})`),
          this.cancelSession());
        let n = Dp(e);
        this.session = new n(this, ...t);
        let o = this.session.start();
        return (
          o &&
            this.patchState(
              o,
              `session:start_${this.session.constructor.name}`
            ),
          (a = (s = this.callbacks).onSessionStart) == null ||
            a.call(s, this, this.session.constructor.name),
          this
        );
      });
      l(this, "updateSession", () => {
        let { session: e } = this;
        if (!e) return this;
        let t = e.update();
        return t
          ? this.patchState(
              t,
              `session:${e == null ? void 0 : e.constructor.name}`
            )
          : this;
      });
      l(this, "cancelSession", () => {
        var n, o;
        let { session: e } = this;
        if (!e) return this;
        this.session = void 0;
        let t = e.cancel();
        return (
          t && this.patchState(t, `session:cancel:${e.constructor.name}`),
          this.setEditingId(),
          (o = (n = this.callbacks).onSessionEnd) == null ||
            o.call(n, this, e.constructor.name),
          this
        );
      });
      l(this, "completeSession", () => {
        var n, o, s, a, d, i, c, u, p;
        let { session: e } = this;
        if (!e) return this;
        this.session = void 0;
        let t = e.complete();
        if (t === void 0)
          (this.isCreating = !1),
            this.patchState(
              {
                appState: { status: "idle" },
                document: {
                  pageStates: {
                    [this.currentPageId]: {
                      editingId: void 0,
                      bindingId: void 0,
                      hoveredId: void 0,
                    },
                  },
                },
              },
              `session:complete:${e.constructor.name}`
            );
        else if ("after" in t) {
          if (this.isCreating) {
            if (
              ((t.before = {
                appState: w(S({}, t.before.appState), { status: "idle" }),
                document: {
                  pages: {
                    [this.currentPageId]: {
                      shapes: Object.fromEntries(
                        this.selectedIds.map((m) => [m, void 0])
                      ),
                    },
                  },
                  pageStates: {
                    [this.currentPageId]: {
                      selectedIds: [],
                      editingId: null,
                      bindingId: null,
                      hoveredId: null,
                    },
                  },
                },
              }),
              this.appState.isToolLocked)
            ) {
              let m =
                ((s =
                  (o = (n = t.after) == null ? void 0 : n.document) == null
                    ? void 0
                    : o.pageStates) == null
                  ? void 0
                  : s[this.currentPageId]) || {};
              m.selectedIds = [];
            }
            this.isCreating = !1;
          }
          (t.after.appState = w(S({}, t.after.appState), { status: "idle" })),
            (t.after.document = w(S({}, t.after.document), {
              pageStates: w(
                S({}, (a = t.after.document) == null ? void 0 : a.pageStates),
                {
                  [this.currentPageId]: w(
                    S(
                      {},
                      (((d = t.after.document) == null
                        ? void 0
                        : d.pageStates) || {})[this.currentPageId]
                    ),
                    { editingId: null }
                  ),
                }
              ),
            })),
            this.setState(t, `session:complete:${e.constructor.name}`);
        } else
          this.patchState(
            w(S({}, t), {
              appState: w(S({}, t.appState), { status: "idle" }),
              document: w(S({}, t.document), {
                pageStates: {
                  [this.currentPageId]: w(
                    S(
                      {},
                      (c = (i = t.document) == null ? void 0 : i.pageStates) ==
                        null
                        ? void 0
                        : c[this.currentPageId]
                    ),
                    { editingId: null }
                  ),
                },
              }),
            }),
            `session:complete:${e.constructor.name}`
          );
        return (
          (p = (u = this.callbacks).onSessionEnd) == null ||
            p.call(u, this, e.constructor.name),
          this
        );
      });
      l(this, "createShapes", (...e) =>
        e.length === 0
          ? this
          : this.create(
              e.map((t) =>
                k
                  .getShapeUtil(t.type)
                  .create(S({ parentId: this.currentPageId }, t))
              )
            )
      );
      l(this, "updateShapes", (...e) => {
        let t = this.document.pages[this.currentPageId].shapes,
          n = e.filter((o) => t[o.id]);
        return n.length === 0
          ? this
          : this.setState(wa(this, n, this.currentPageId), "updated_shapes");
      });
      l(this, "create", (e = [], t = []) =>
        e.length === 0 ? this : this.setState(ma(this, e, t))
      );
      l(this, "patchCreate", (e = [], t = []) =>
        e.length === 0 ? this : this.patchState(ma(this, e, t).after)
      );
      l(this, "delete", (e = this.selectedIds) => {
        var n, o;
        if (e.length === 0) return this;
        if (this.session) return this;
        let t = ga(this, e);
        if (
          this.callbacks.onAssetDelete &&
          ((n = t.before.document) == null ? void 0 : n.assets) &&
          ((o = t.after.document) == null ? void 0 : o.assets)
        ) {
          let s = Object.keys(t.before.document.assets).filter(
              (i) => !!t.before.document.assets[i]
            ),
            a = Object.keys(t.after.document.assets).filter(
              (i) => !!t.after.document.assets[i]
            );
          s.filter((i) => !a.includes(i)).forEach((i) =>
            this.callbacks.onAssetDelete(this, i)
          );
        }
        return this.setState(t);
      });
      l(this, "deleteAll", () => (this.selectAll(), this.delete(), this));
      l(this, "style", (e, t = this.selectedIds) =>
        this.setState(yp(this, t, e))
      );
      l(this, "align", (e, t = this.selectedIds) =>
        t.length < 2 ? this : this.setState(tp(this, t, e))
      );
      l(this, "distribute", (e, t = this.selectedIds) =>
        t.length < 3 ? this : this.setState(dp(this, t, e))
      );
      l(this, "stretch", (e, t = this.selectedIds) =>
        t.length < 2 ? this : this.setState(Tp(this, t, e))
      );
      l(this, "flipHorizontal", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Sa(this, e, "horizontal"))
      );
      l(this, "flipVertical", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Sa(this, e, "vertical"))
      );
      l(
        this,
        "moveToPage",
        (e, t = this.currentPageId, n = this.selectedIds) => {
          if (n.length === 0) return this;
          let { rendererBounds: o } = this;
          return this.setState(gp(this, n, o, t, e)), this;
        }
      );
      l(this, "moveToBack", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Ar(this, e, "toBack"))
      );
      l(this, "moveBackward", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Ar(this, e, "backward"))
      );
      l(this, "moveForward", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Ar(this, e, "forward"))
      );
      l(this, "moveToFront", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Ar(this, e, "toFront"))
      );
      l(this, "nudge", (e, t = !1, n = this.selectedIds) => {
        if (n.length === 0) return this;
        let o = t
          ? this.settings.showGrid
            ? this.currentGrid * 4
            : 10
          : this.settings.showGrid
          ? this.currentGrid
          : 1;
        return this.setState(wp(this, n, ve.Vec.mul(e, o)));
      });
      l(this, "duplicate", (e = this.selectedIds, t) =>
        this.readOnly
          ? this
          : e.length === 0
          ? this
          : this.setState(pp(this, e, t))
      );
      l(this, "resetBounds", (e = this.selectedIds) => {
        let t = Ta(this, e, this.currentPageId);
        return this.setState(Ta(this, e, this.currentPageId), t.id);
      });
      l(this, "toggleHidden", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(qs(this, e, "isHidden"))
      );
      l(this, "toggleLocked", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(qs(this, e, "isLocked"))
      );
      l(this, "toggleAspectRatioLocked", (e = this.selectedIds) =>
        e.length === 0
          ? this
          : this.setState(qs(this, e, "isAspectRatioLocked"))
      );
      l(this, "toggleDecoration", (e, t = this.selectedIds) =>
        t.length === 0 || !(e === "start" || e === "end")
          ? this
          : this.setState(xp(this, t, e))
      );
      l(this, "setShapeProps", (e, t = this.selectedIds) =>
        this.setState(vp(this, t, e))
      );
      l(this, "rotate", (e = Math.PI * -0.5, t = this.selectedIds) => {
        if (t.length === 0) return this;
        let n = bp(this, t, e);
        return n ? this.setState(n) : this;
      });
      l(
        this,
        "group",
        (
          e = this.selectedIds,
          t = Dt.Utils.uniqueId(),
          n = this.currentPageId
        ) => {
          if (this.readOnly) return this;
          if (e.length === 1 && this.getShape(e[0], n).type === "group")
            return this.ungroup(e, n);
          if (e.length < 2) return this;
          let o = hp(this, e, t, n);
          return o ? this.setState(o) : this;
        }
      );
      l(this, "ungroup", (e = this.selectedIds, t = this.currentPageId) => {
        if (this.readOnly) return this;
        let n = e
          .map((s) => this.getShape(s, t))
          .filter((s) => s.type === "group");
        if (n.length === 0) return this;
        let o = kp(this, e, n, t);
        return o ? this.setState(o) : this;
      });
      l(this, "cancel", () => {
        var e, t;
        return (t = (e = this.currentTool).onCancel) == null || t.call(e), this;
      });
      l(this, "addMediaFromFiles", (n, ...o) =>
        ue(this, [n, ...o], function* (e, t = this.centerPoint) {
          this.setIsLoading(!0);
          let s = [],
            a = this.getPagePoint(t);
          for (let d of e) {
            let i = Dt.Utils.uniqueId(),
              c = d.name.match(/\.[0-9a-z]+$/i);
            if (!c) throw Error("No extension");
            let u = ys.includes(c[0].toLowerCase()),
              p = xs.includes(c[0].toLowerCase());
            if (!(u || p)) throw Error("Wrong extension");
            let m = u ? "image" : "video",
              h = u ? "image" : "video",
              g;
            try {
              if (this.callbacks.onAssetCreate) {
                let f = yield this.callbacks.onAssetCreate(this, d, i);
                if (!f) throw Error("Asset creation callback returned false");
                g = f;
              } else g = yield Da(d);
              if (typeof g == "string") {
                let f = [0, 0];
                if (u) {
                  if (c[0] == ".svg") {
                    let b,
                      y = yield Pa(d),
                      R = this.getViewboxFromSVG(y);
                    R &&
                      ((b = R.split(" ")),
                      (f[0] = parseFloat(b[2])),
                      (f[1] = parseFloat(b[3])));
                  }
                  ve.Vec.isEqual(f, [0, 0]) && (f = yield Ma(g));
                } else f = yield Ba(g);
                let T = Object.values(this.document.assets).find(
                    (b) => b.type === h && b.src === g
                  ),
                  x;
                if (T) x = T.id;
                else {
                  x = i;
                  let b = { id: x, type: h, name: d.name, src: g, size: f };
                  this.patchState({ document: { assets: { [x]: b } } });
                }
                s.push(this.getImageOrVideoShapeAtPoint(i, m, t, f, x));
              }
            } catch (f) {
              console.warn(f);
            }
          }
          if (s.length) {
            let d = ve.Vec.add(a, [0, 0]);
            s.forEach((c, u) => {
              let p = k.getBounds(c);
              u === 0 && ((d[0] -= p.width / 2), (d[1] -= p.height / 2)),
                (c.point = [...d]),
                (d[0] += p.width);
            });
            let i = Dt.Utils.getCommonBounds(s.map(k.getBounds));
            this.createShapes(...s),
              Dt.Utils.boundsContain(this.viewport, i) ||
                (this.zoomToSelection(), this.zoom > 1 && this.resetZoom());
          }
          return this.setIsLoading(!1), this;
        })
      );
      l(this, "getViewboxFromSVG", (e) => {
        let t =
          /.*?viewBox=["'](-?[\d.]+[, ]+-?[\d.]+[, ][\d.]+[, ][\d.]+)["']/;
        if (typeof e == "string") {
          let n = e.match(t);
          return n && n.length >= 2 ? n[1] : null;
        }
        return this.setIsLoading(!1), null;
      });
      l(this, "onKeyDown", (e, t, n) => {
        var o, s;
        switch (n.key) {
          case "/": {
            if (this.status === "idle" && !this.pageState.editingId) {
              let {
                shiftKey: a,
                metaKey: d,
                altKey: i,
                ctrlKey: c,
                spaceKey: u,
              } = this;
              this.onPointerDown(
                {
                  target: "canvas",
                  pointerId: 0,
                  origin: t.point,
                  point: t.point,
                  delta: [0, 0],
                  pressure: 0.5,
                  shiftKey: a,
                  ctrlKey: c,
                  metaKey: d,
                  altKey: i,
                  spaceKey: u,
                },
                {
                  shiftKey: a,
                  altKey: i,
                  ctrlKey: c,
                  pointerId: 0,
                  clientX: t.point[0],
                  clientY: t.point[1],
                }
              );
            }
            break;
          }
          case "Escape": {
            this.cancel();
            break;
          }
          case "Meta": {
            this.metaKey = !0;
            break;
          }
          case "Alt": {
            this.altKey = !0;
            break;
          }
          case "Control": {
            this.ctrlKey = !0;
            break;
          }
          case " ": {
            (this.isForcePanning = !0), (this.spaceKey = !0);
            break;
          }
        }
        return (
          (s = (o = this.currentTool).onKeyDown) == null || s.call(o, e, t, n),
          this
        );
      });
      l(this, "onKeyUp", (e, t, n) => {
        var o, s;
        if (!!t) {
          switch (n.key) {
            case "/": {
              let {
                currentPoint: a,
                shiftKey: d,
                metaKey: i,
                altKey: c,
                ctrlKey: u,
                spaceKey: p,
              } = this;
              this.onPointerUp(
                {
                  target: "canvas",
                  pointerId: 0,
                  origin: a,
                  point: a,
                  delta: [0, 0],
                  pressure: 0.5,
                  shiftKey: d,
                  ctrlKey: u,
                  metaKey: i,
                  altKey: c,
                  spaceKey: p,
                },
                {
                  shiftKey: d,
                  altKey: c,
                  ctrlKey: u,
                  pointerId: 0,
                  clientX: a[0],
                  clientY: a[1],
                }
              );
              break;
            }
            case "Meta": {
              this.metaKey = !1;
              break;
            }
            case "Alt": {
              this.altKey = !1;
              break;
            }
            case "Control": {
              this.ctrlKey = !1;
              break;
            }
            case " ": {
              (this.isForcePanning = !1), (this.spaceKey = !1);
              break;
            }
          }
          (s = (o = this.currentTool).onKeyUp) == null || s.call(o, e, t, n);
        }
      });
      l(this, "refreshBoundingBoxes", () => {
        let e = this.shapes.map((n) => [
            n.id,
            S({ point: [...n.point] }, "label" in n && { label: "" }),
          ]),
          t = this.shapes.map((n) => [
            n.id,
            S({ point: [...n.point] }, "label" in n && { label: n.label }),
          ]);
        Od(),
          this.patchState({
            document: {
              pages: {
                [this.currentPageId]: { shapes: Object.fromEntries(e) },
              },
            },
          }),
          this.patchState({
            document: {
              pages: {
                [this.currentPageId]: { shapes: Object.fromEntries(t) },
              },
            },
          });
      });
      l(this, "onDragOver", (e) => {
        e.preventDefault();
      });
      l(this, "onDrop", (e) =>
        ue(this, null, function* () {
          var t;
          return (
            e.preventDefault(),
            this.disableAssets
              ? this
              : (((t = e.dataTransfer.files) == null ? void 0 : t.length) &&
                  this.addMediaFromFiles(Object.values(e.dataTransfer.files), [
                    e.clientX,
                    e.clientY,
                  ]),
                this)
          );
        })
      );
      l(this, "onPinchStart", (e, t) => {
        var n, o;
        (o = (n = this.currentTool).onPinchStart) == null || o.call(n, e, t);
      });
      l(this, "onPinchEnd", (e, t) => {
        var n, o;
        return (o = (n = this.currentTool).onPinchEnd) == null
          ? void 0
          : o.call(n, e, t);
      });
      l(this, "onPinch", (e, t) => {
        var n, o;
        return (o = (n = this.currentTool).onPinch) == null
          ? void 0
          : o.call(n, e, t);
      });
      l(this, "onPan", (e, t) => {});
      l(this, "onZoom", (e, t) => {
        if (this.state.appState.status !== "idle") return;
        let n = e.delta[2] / 50;
        this.zoomBy(n, e.point), this.onPointerMove(e, t);
      });
      l(this, "updateInputs", (e) => {
        (this.currentPoint = this.getPagePoint(e.point).concat(e.pressure)),
          (this.shiftKey = e.shiftKey),
          (this.altKey = e.altKey),
          (this.ctrlKey = e.ctrlKey),
          (this.metaKey = e.metaKey);
      });
      l(this, "onPointerMove", (e, t) => {
        var n, o, s, a, d;
        if (
          ((this.previousPoint = this.currentPoint),
          this.updateInputs(e, t),
          this.isForcePanning && this.isPointing)
        ) {
          (n = this.onPan) == null ||
            n.call(this, w(S({}, e), { delta: ve.Vec.neg(e.delta) }), t);
          return;
        }
        if (
          ((s = (o = this.currentTool).onPointerMove) == null ||
            s.call(o, e, t),
          this.state.room)
        ) {
          let { users: i, userId: c } = this.state.room;
          (d = (a = this.callbacks).onChangePresence) == null ||
            d.call(
              a,
              this,
              w(S({}, i[c]), {
                point: this.getPagePoint(e.point),
                session: !!this.session,
              })
            );
        }
      });
      l(this, "onPointerDown", (e, t) => {
        var n, o;
        if (t.buttons === 4) this.isForcePanning = !0;
        else if (this.isPointing) return;
        (this.isPointing = !0),
          (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          !this.isForcePanning &&
            (this.currentTool.type === "draw" &&
              t.pointerType === "pen" &&
              t.button === 5 &&
              (this.selectTool("erase"), (this.isErasingWithPen = !0)),
            (o = (n = this.currentTool).onPointerDown) == null ||
              o.call(n, e, t));
      });
      l(this, "onPointerUp", (e, t) => {
        var n, o;
        (this.isPointing = !1),
          this.shiftKey || (this.isForcePanning = !1),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onPointerUp) == null || o.call(n, e, t),
          this.isErasingWithPen &&
            t.pointerType === "pen" &&
            t.button === 5 &&
            (this.selectTool("draw"), (this.isErasingWithPen = !1));
      });
      l(this, "onPointCanvas", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onPointCanvas) == null || o.call(n, e, t);
      });
      l(this, "onDoubleClickCanvas", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onDoubleClickCanvas) == null ||
            o.call(n, e, t);
      });
      l(this, "onRightPointCanvas", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onRightPointCanvas) == null ||
            o.call(n, e, t);
      });
      l(this, "onDragCanvas", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onDragCanvas) == null || o.call(n, e, t);
      });
      l(this, "onReleaseCanvas", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onReleaseCanvas) == null ||
            o.call(n, e, t);
      });
      l(this, "onPointShape", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onPointShape) == null || o.call(n, e, t);
      });
      l(this, "onReleaseShape", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onReleaseShape) == null ||
            o.call(n, e, t);
      });
      l(this, "onDoubleClickShape", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onDoubleClickShape) == null ||
            o.call(n, e, t);
      });
      l(this, "onRightPointShape", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onRightPointShape) == null ||
            o.call(n, e, t);
      });
      l(this, "onDragShape", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onDragShape) == null || o.call(n, e, t);
      });
      l(this, "onHoverShape", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onHoverShape) == null || o.call(n, e, t);
      });
      l(this, "onUnhoverShape", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onUnhoverShape) == null ||
            o.call(n, e, t);
      });
      l(this, "onPointBounds", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onPointBounds) == null || o.call(n, e, t);
      });
      l(this, "onDoubleClickBounds", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onDoubleClickBounds) == null ||
            o.call(n, e, t);
      });
      l(this, "onRightPointBounds", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onRightPointBounds) == null ||
            o.call(n, e, t);
      });
      l(this, "onDragBounds", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onDragBounds) == null || o.call(n, e, t);
      });
      l(this, "onHoverBounds", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onHoverBounds) == null || o.call(n, e, t);
      });
      l(this, "onUnhoverBounds", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onUnhoverBounds) == null ||
            o.call(n, e, t);
      });
      l(this, "onReleaseBounds", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onReleaseBounds) == null ||
            o.call(n, e, t);
      });
      l(this, "onPointBoundsHandle", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onPointBoundsHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onDoubleClickBoundsHandle", (e, t) => {
        var o, s;
        if (
          ((this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (s = (o = this.currentTool).onDoubleClickBoundsHandle) == null ||
            s.call(o, e, t),
          this.selectedIds.length !== 1)
        )
          return;
        let n = this.getShape(this.selectedIds[0]);
        if (n.type === "image" || n.type === "video") {
          let a = this.document.assets[n.assetId],
            d = k.getShapeUtil(n),
            i = d.getCenter(n),
            c = d.getCenter(w(S({}, n), { size: a.size })),
            u = ve.Vec.sub(c, i);
          this.updateShapes({
            id: n.id,
            point: ve.Vec.sub(n.point, u),
            size: a.size,
          });
        }
      });
      l(this, "onRightPointBoundsHandle", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onRightPointBoundsHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onDragBoundsHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onDragBoundsHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onHoverBoundsHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onHoverBoundsHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onUnhoverBoundsHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onUnhoverBoundsHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onReleaseBoundsHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onReleaseBoundsHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onPointHandle", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onPointHandle) == null || o.call(n, e, t);
      });
      l(this, "onDoubleClickHandle", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onDoubleClickHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onRightPointHandle", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onRightPointHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onDragHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onDragHandle) == null || o.call(n, e, t);
      });
      l(this, "onHoverHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onHoverHandle) == null || o.call(n, e, t);
      });
      l(this, "onUnhoverHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onUnhoverHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onReleaseHandle", (e, t) => {
        var n, o;
        this.updateInputs(e, t),
          (o = (n = this.currentTool).onReleaseHandle) == null ||
            o.call(n, e, t);
      });
      l(this, "onShapeChange", (e) => {
        let t = this.document.pages[this.currentPageId].shapes,
          n = S(S({}, t[e.id]), e),
          o = wa(this, [n], this.currentPageId).after;
        return this.patchState(o, "patched_shapes");
      });
      l(this, "onShapeBlur", () => {
        var n, o;
        if (performance.now() - this.editingStartTime < 50) return;
        let { editingId: e } = this.pageState,
          { isToolLocked: t } = this.getAppState();
        if (e) {
          let s = this.getShape(e);
          this.setEditingId(),
            s.type === "text" &&
              (s.text.trim().length <= 0
                ? this.patchState(ga(this, [e]).after, "delete_empty_text")
                : t || this.select(e));
        }
        (o = (n = this.currentTool).onShapeBlur) == null || o.call(n);
      });
      l(this, "onShapeClone", (e, t) => {
        var n, o;
        (this.originPoint = this.getPagePoint(e.point).concat(e.pressure)),
          this.updateInputs(e, t),
          (o = (n = this.currentTool).onShapeClone) == null || o.call(n, e, t);
      });
      l(this, "onRenderCountChange", (e) => {
        let t = this.getAppState();
        t.isEmptyCanvas && e.length > 0
          ? this.patchState(
              { appState: { isEmptyCanvas: !1 } },
              "empty_canvas:false"
            )
          : !t.isEmptyCanvas &&
            e.length <= 0 &&
            this.patchState(
              { appState: { isEmptyCanvas: !0 } },
              "empty_canvas:true"
            );
      });
      l(this, "onError", () => {});
      l(this, "getShapeUtil", k.getShapeUtil);
      this.callbacks = t;
    }
    setStatus(e) {
      return this.patchState({ appState: { status: e } }, `set_status:${e}`);
    }
    get isMenuOpen() {
      return this.appState.isMenuOpen;
    }
    get isLoading() {
      return this.appState.isLoading;
    }
    get disableAssets() {
      return this.appState.disableAssets;
    }
    get history() {
      return this.stack.slice(0, this.pointer + 1);
    }
    set history(e) {
      this.replaceHistory(e);
    }
    get document() {
      return this.state.document;
    }
    get settings() {
      return this.state.settings;
    }
    get appState() {
      return this.state.appState;
    }
    get currentPageId() {
      return this.state.appState.currentPageId;
    }
    get page() {
      return this.state.document.pages[this.currentPageId];
    }
    get shapes() {
      return Object.values(this.page.shapes);
    }
    get bindings() {
      return Object.values(this.page.bindings);
    }
    get assets() {
      return Object.values(this.document.assets);
    }
    get pageState() {
      return this.state.document.pageStates[this.currentPageId];
    }
    get camera() {
      return this.pageState.camera;
    }
    get zoom() {
      return this.pageState.camera.zoom;
    }
    get selectedIds() {
      return this.pageState.selectedIds;
    }
    createTextShapeAtPoint(e, t, n) {
      let {
          shapes: o,
          appState: { currentPageId: s, currentStyle: a },
        } = this,
        d =
          o.length === 0
            ? 1
            : o
                .filter((p) => p.parentId === s)
                .sort((p, m) => m.childIndex - p.childIndex)[0].childIndex + 1,
        i = Rn["text"],
        c = i.create({
          id: t || Dt.Utils.uniqueId(),
          parentId: s,
          childIndex: d,
          point: e,
          style: S({}, a),
        }),
        u = i.getBounds(c);
      return (
        (c.point = ve.Vec.sub(c.point, [u.width / 2, u.height / 2])),
        n
          ? this.patchCreate([k.getShapeUtil(c.type).create(c)])
          : this.createShapes(c),
        this.setEditingId(c.id, !0),
        this
      );
    }
    getImageOrVideoShapeAtPoint(e, t, n, o, s) {
      let {
          shapes: a,
          appState: { currentPageId: d, currentStyle: i },
        } = this,
        c =
          a.length === 0
            ? 1
            : a
                .filter((m) => m.parentId === d)
                .sort((m, h) => h.childIndex - m.childIndex)[0].childIndex + 1,
        u = Rn[t];
      if (o[0] > this.viewport.width) {
        let m = o[1] / o[0];
        (o[0] = this.viewport.width - (128 / this.camera.zoom) * 2),
          (o[1] = o[0] * m),
          (o[1] < 32 || o[1] < 32) && ((o[1] = 32), (o[0] = o[1] / m));
      } else if (o[1] > this.viewport.height) {
        let m = o[0] / o[1];
        (o[1] = this.viewport.height - (128 / this.camera.zoom) * 2),
          (o[0] = o[1] * m),
          (o[1] < 32 || o[1] < 32) && ((o[0] = 32), (o[1] = o[0] / m));
      }
      return u.create({
        id: e,
        parentId: d,
        childIndex: c,
        point: n,
        size: o,
        style: S({}, i),
        assetId: s,
      });
    }
    isSelected(e) {
      return this.selectedIds.includes(e);
    }
    serializeVideo(e) {
      let t = document.getElementById(e + "_video");
      if (t) {
        let n = document.createElement("canvas");
        return (
          (n.width = t.videoWidth),
          (n.height = t.videoHeight),
          n.getContext("2d").drawImage(t, 0, 0),
          n.toDataURL("image/png")
        );
      } else throw new Error("Video with id " + e + " not found");
    }
    serializeImage(e) {
      let t = document.getElementById(e + "_image");
      if (t) {
        let n = document.createElement("canvas");
        return (
          (n.width = t.width),
          (n.height = t.height),
          n.getContext("2d").drawImage(t, 0, 0),
          n.toDataURL("image/png")
        );
      } else throw new Error("Image with id " + e + " not found");
    }
    patchAssets(e) {
      this.document.assets = S(S({}, this.document.assets), e);
    }
    get room() {
      return this.state.room;
    }
    get isLocal() {
      return this.state.room === void 0 || this.state.room.id === "local";
    }
    get status() {
      return this.appState.status;
    }
    get currentUser() {
      if (!!this.state.room)
        return this.state.room.users[this.state.room.userId];
    }
    get centerPoint() {
      let { width: e, height: t } = this.rendererBounds;
      return ve.Vec.toFixed([e / 2, t / 2]);
    }
    get currentGrid() {
      let { zoom: e } = this.camera;
      return e < 0.15 ? 8 * 16 : e < 1 ? 8 * 4 : 8 * 1;
    }
  },
  zn = ht;
l(zn, "version", 15.5),
  l(zn, "defaultDocument", {
    id: "doc",
    name: "New Document",
    version: ht.version,
    pages: {
      page: {
        id: "page",
        name: "Page 1",
        childIndex: 1,
        shapes: {},
        bindings: {},
      },
    },
    pageStates: {
      page: { id: "page", selectedIds: [], camera: { point: [0, 0], zoom: 1 } },
    },
    assets: {},
  }),
  l(zn, "defaultState", {
    settings: {
      isCadSelectMode: !1,
      isPenMode: !1,
      isDarkMode: !1,
      isZoomSnap: !1,
      isFocusMode: !1,
      isSnapping: !1,
      isDebugMode: !1,
      isReadonlyMode: !1,
      keepStyleMenuOpen: !1,
      nudgeDistanceLarge: 16,
      nudgeDistanceSmall: 1,
      showRotateHandles: !0,
      showBindingHandles: !0,
      showCloneHandles: !1,
      showGrid: !1,
      language: "en",
      dockPosition: "bottom",
      exportBackground: "transparent",
    },
    appState: {
      status: "idle",
      activeTool: "select",
      hoveredId: void 0,
      currentPageId: "page",
      currentStyle: gt,
      isToolLocked: !1,
      isMenuOpen: !1,
      isEmptyCanvas: !1,
      eraseLine: [],
      snapLines: [],
      isLoading: !1,
      disableAssets: !1,
    },
    document: ht.defaultDocument,
  }),
  l(zn, "assetSrc", "tldraw-assets.json");
var aMe = {
  select: Wr,
  erase: Vr,
  ["text"]: Kr,
  ["draw"]: jr,
  ["ellipse"]: Gr,
  ["rectangle"]: Nr,
  ["triangle"]: _r,
  ["line"]: $r,
  ["arrow"]: Fr,
  ["sticky"]: Ur,
};
var ice = Vp.ErrorBoundary,
  ace = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : !1;
function lce({
  id: r,
  document: e,
  currentPageId: t,
  autofocus: n = !0,
  showMenu: o = !0,
  showMultiplayerMenu: s = !0,
  showPages: a = !0,
  showTools: d = !0,
  showZoom: i = !0,
  showStyles: c = !0,
  showUI: u = !0,
  readOnly: p = !1,
  disableAssets: m = !1,
  darkMode: h = ace,
  components: g,
  onMount: f,
  onChange: T,
  onChangePresence: x,
  onNewProject: b,
  onSaveProject: y,
  onSaveProjectAs: R,
  onOpenProject: K,
  onOpenMedia: L,
  onUndo: v,
  onRedo: I,
  onPersist: J,
  onPatch: ce,
  onCommand: de,
  onChangePage: He,
  onAssetCreate: Pe,
  onAssetDelete: Me,
  onAssetUpload: Ue,
  onSessionStart: Ke,
  onSessionEnd: Kt,
  onExport: gn,
  hideCursors: dr,
}) {
  let [Po, Zr] = be.useState(r),
    [_e, Xr] = be.useState(
      () =>
        new zn(r, {
          onMount: f,
          onChange: T,
          onChangePresence: x,
          onNewProject: b,
          onSaveProject: y,
          onSaveProjectAs: R,
          onOpenProject: K,
          onOpenMedia: L,
          onUndo: v,
          onRedo: I,
          onPersist: J,
          onPatch: ce,
          onCommand: de,
          onChangePage: He,
          onAssetDelete: Me,
          onAssetCreate: Pe,
          onAssetUpload: Ue,
          onSessionStart: Ke,
          onSessionEnd: Kt,
        })
    ),
    [_n, ri] = be.useState(null),
    [Yn, cr] = be.useState(null),
    [pr, Np] = be.useState(null),
    [Wp, Ya] = be.useState(null),
    Up = be.useCallback((mo, qr, Kp, _p) => {
      Ya(() => mo), ri(() => _p), cr(() => qr), Np(() => Kp);
    }, []);
  return (
    be.useLayoutEffect(() => {
      if (r === Po) return;
      let mo = new zn(r, {
        onMount: f,
        onChange: T,
        onChangePresence: x,
        onNewProject: b,
        onSaveProject: y,
        onSaveProjectAs: R,
        onOpenProject: K,
        onOpenMedia: L,
        onUndo: v,
        onRedo: I,
        onPersist: J,
        onPatch: ce,
        onCommand: de,
        onChangePage: He,
        onAssetDelete: Me,
        onAssetCreate: Pe,
        onAssetUpload: Ue,
        onExport: gn,
        onSessionStart: Ke,
        onSessionEnd: Kt,
      });
      Zr(r), Xr(mo);
    }, [Po, r]),
    be.useEffect(() => {
      !e ||
        (e.id === _e.document.id ? _e.updateDocument(e) : _e.loadDocument(e));
    }, [e, _e]),
    be.useEffect(() => {
      _e.setDisableAssets(m);
    }, [_e, m]),
    be.useEffect(() => {
      !t || _e.changePage(t);
    }, [t, _e]),
    be.useEffect(() => {
      (_e.readOnly = p),
        p || (_e.selectNone(), _e.cancelSession(), _e.setEditingId());
    }, [_e, p]),
    be.useEffect(() => {
      h !== _e.settings.isDarkMode && _e.toggleDarkMode();
    }, [_e, h]),
    be.useEffect(() => {
      _e.callbacks = {
        onMount: f,
        onChange: T,
        onChangePresence: x,
        onNewProject: b,
        onSaveProject: y,
        onSaveProjectAs: R,
        onOpenProject: K,
        onOpenMedia: L,
        onUndo: v,
        onRedo: I,
        onPersist: J,
        onPatch: ce,
        onCommand: de,
        onChangePage: He,
        onAssetDelete: Me,
        onAssetCreate: Pe,
        onAssetUpload: Ue,
        onExport: gn,
        onSessionStart: Ke,
        onSessionEnd: Kt,
      };
    }, [f, T, x, b, y, R, K, L, v, I, J, ce, de, He, Me, Pe, Ue, gn, Ke, Kt]),
    be.useLayoutEffect(() => {
      var qr;
      if (
        typeof window == "undefined" ||
        !((qr = window.document) == null ? void 0 : qr.fonts)
      )
        return;
      function mo() {
        _e.refreshBoundingBoxes();
      }
      return (
        window.document.fonts.addEventListener("loadingdone", mo),
        () => {
          window.document.fonts.removeEventListener("loadingdone", mo);
        }
      );
    }, [_e]),
    be.createElement(
      di.Provider,
      { value: _e },
      be.createElement(
        pi.Provider,
        {
          value: {
            onYes: Yn,
            onCancel: _n,
            onNo: pr,
            dialogState: Wp,
            setDialogState: Ya,
            openDialog: Up,
          },
        },
        be.createElement(dce, {
          key: Po || "Tldraw",
          id: Po,
          autofocus: n,
          showPages: a,
          showMenu: o,
          showMultiplayerMenu: s,
          showStyles: c,
          showZoom: i,
          showTools: d,
          showUI: u,
          readOnly: p,
          components: g,
          hideCursors: dr,
        })
      )
    )
  );
}
var dce = be.memo(function ({
    id: e,
    autofocus: t,
    showPages: n,
    showMenu: o,
    showMultiplayerMenu: s,
    showZoom: a,
    showStyles: d,
    showTools: i,
    readOnly: c,
    showUI: u,
    components: p,
    hideCursors: m,
  }) {
    var _e, Xr;
    let h = ge(),
      [g, f] = be.useState(null),
      T = be.useRef(null),
      x = h.useStore(),
      { document: b, settings: y, appState: R, room: K } = x,
      L = x.appState.activeTool === "select",
      v = b.pages[R.currentPageId],
      I = b.pageStates[v.id],
      J = b.assets,
      { selectedIds: ce } = I,
      de =
        ce.length === 1 &&
        v.shapes[ce[0]] &&
        k.getShapeUtil(v.shapes[ce[0]].type).hideBounds,
      He =
        ce.length === 1 &&
        v.shapes[ce[0]] &&
        k.getShapeUtil(v.shapes[ce[0]].type).hideResizeHandles,
      Pe = be.useMemo(() => ({ isDarkMode: y.isDarkMode }), [y.isDarkMode]),
      Me = y.isCadSelectMode ? !R.selectByContain : R.selectByContain,
      Ue = be.useMemo(() => {
        let { selectByContain: _n } = R,
          { isDarkMode: ri, isCadSelectMode: Yn } = y;
        if (ri) {
          let pr = Yn
            ? _n
              ? "69, 155, 255"
              : "105, 209, 73"
            : "180, 180, 180";
          return {
            brushFill: `rgba(${pr}, ${Yn ? 0.08 : 0.05})`,
            brushStroke: `rgba(${pr}, ${Yn ? 0.5 : 0.25})`,
            brushDashStroke: `rgba(${pr}, .6)`,
            selected: "rgba(38, 150, 255, 1.000)",
            selectFill: "rgba(38, 150, 255, 0.05)",
            background: "#212529",
            foreground: "#49555f",
          };
        }
        let cr = Yn ? (_n ? "0, 89, 242" : "51, 163, 23") : "0,0,0";
        return {
          brushFill: `rgba(${cr}, ${Yn ? 0.08 : 0.05})`,
          brushStroke: `rgba(${cr}, ${Yn ? 0.4 : 0.25})`,
          brushDashStroke: `rgba(${cr}, .6)`,
        };
      }, [y.isDarkMode, y.isCadSelectMode, R.selectByContain]),
      Ke = h.session !== void 0,
      Kt =
        (Ke &&
          ((_e = h.session) == null ? void 0 : _e.constructor.name) !==
            "BrushSession") ||
        !L ||
        de ||
        !!I.editingId,
      gn = Ke || !L,
      dr = (Ke && x.appState.status !== "brushing") || !L,
      Po = Ke || !L || I.camera.zoom < 0.2,
      Zr = Ol(y.language);
    return (
      be.useLayoutEffect(() => {
        let _n = T.current;
        !_n || (y.isDarkMode ? _n.classList.add(ai) : _n.classList.remove(ai));
      }, [y.isDarkMode]),
      _c(T),
      be.createElement(
        ci.Provider,
        { value: T },
        be.createElement(
          $p.IntlProvider,
          { locale: Zr.locale, messages: Zr.messages },
          be.createElement(Wl, { container: g }),
          be.createElement(
            pce,
            { ref: T, tabIndex: -0 },
            be.createElement(gi, null),
            be.createElement(cce, { focusableRef: T, autofocus: t }),
            be.createElement(
              Fl,
              null,
              be.createElement(
                ice,
                { FallbackComponent: jl },
                be.createElement(Gp.Renderer, {
                  id: e,
                  containerRef: T,
                  shapeUtils: Rn,
                  page: v,
                  pageState: I,
                  assets: J,
                  snapLines: R.snapLines,
                  eraseLine: R.eraseLine,
                  grid: 8,
                  users: K == null ? void 0 : K.users,
                  userId: K == null ? void 0 : K.userId,
                  theme: Ue,
                  meta: Pe,
                  components: p,
                  hideCursors: m,
                  hideBounds: Kt,
                  hideHandles: gn,
                  hideResizeHandles: He,
                  hideIndicators: dr,
                  hideBindingHandles: !y.showBindingHandles,
                  hideCloneHandles: Po,
                  hideRotateHandles: !y.showRotateHandles,
                  hideGrid: !y.showGrid,
                  showDashedBrush: Me,
                  performanceMode:
                    (Xr = h.session) == null ? void 0 : Xr.performanceMode,
                  onPinchStart: h.onPinchStart,
                  onPinchEnd: h.onPinchEnd,
                  onPinch: h.onPinch,
                  onPan: h.onPan,
                  onZoom: h.onZoom,
                  onPointerDown: h.onPointerDown,
                  onPointerMove: h.onPointerMove,
                  onPointerUp: h.onPointerUp,
                  onPointCanvas: h.onPointCanvas,
                  onDoubleClickCanvas: h.onDoubleClickCanvas,
                  onRightPointCanvas: h.onRightPointCanvas,
                  onDragCanvas: h.onDragCanvas,
                  onReleaseCanvas: h.onReleaseCanvas,
                  onPointShape: h.onPointShape,
                  onDoubleClickShape: h.onDoubleClickShape,
                  onRightPointShape: h.onRightPointShape,
                  onDragShape: h.onDragShape,
                  onHoverShape: h.onHoverShape,
                  onUnhoverShape: h.onUnhoverShape,
                  onReleaseShape: h.onReleaseShape,
                  onPointBounds: h.onPointBounds,
                  onDoubleClickBounds: h.onDoubleClickBounds,
                  onRightPointBounds: h.onRightPointBounds,
                  onDragBounds: h.onDragBounds,
                  onHoverBounds: h.onHoverBounds,
                  onUnhoverBounds: h.onUnhoverBounds,
                  onReleaseBounds: h.onReleaseBounds,
                  onPointBoundsHandle: h.onPointBoundsHandle,
                  onDoubleClickBoundsHandle: h.onDoubleClickBoundsHandle,
                  onRightPointBoundsHandle: h.onRightPointBoundsHandle,
                  onDragBoundsHandle: h.onDragBoundsHandle,
                  onHoverBoundsHandle: h.onHoverBoundsHandle,
                  onUnhoverBoundsHandle: h.onUnhoverBoundsHandle,
                  onReleaseBoundsHandle: h.onReleaseBoundsHandle,
                  onPointHandle: h.onPointHandle,
                  onDoubleClickHandle: h.onDoubleClickHandle,
                  onRightPointHandle: h.onRightPointHandle,
                  onDragHandle: h.onDragHandle,
                  onHoverHandle: h.onHoverHandle,
                  onUnhoverHandle: h.onUnhoverHandle,
                  onReleaseHandle: h.onReleaseHandle,
                  onError: h.onError,
                  onRenderCountChange: h.onRenderCountChange,
                  onShapeChange: h.onShapeChange,
                  onShapeBlur: h.onShapeBlur,
                  onShapeClone: h.onShapeClone,
                  onBoundsChange: h.updateBounds,
                  onKeyDown: h.onKeyDown,
                  onKeyUp: h.onKeyUp,
                  onDragOver: h.onDragOver,
                  onDrop: h.onDrop,
                })
              )
            ),
            u &&
              be.createElement(
                uce,
                { ref: f },
                y.isFocusMode
                  ? be.createElement(Vl, { onSelect: h.toggleFocusMode })
                  : be.createElement(
                      be.Fragment,
                      null,
                      be.createElement(Uc, {
                        readOnly: c,
                        showPages: n,
                        showMenu: o,
                        showMultiplayerMenu: s,
                        showStyles: d,
                        showZoom: a,
                      }),
                      be.createElement(hce, null),
                      i && !c && be.createElement(Dd, null)
                    )
              )
          )
        )
      )
    );
  }),
  cce = be.memo(function ({ focusableRef: e, autofocus: t }) {
    return (
      sl(e),
      be.useEffect(() => {
        var n;
        t && ((n = e.current) == null || n.focus());
      }, [t]),
      null
    );
  }),
  pce = H("div", {
    position: "absolute",
    height: "100%",
    width: "100%",
    minHeight: 0,
    minWidth: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    outline: "none",
    userSelect: "none",
    WebkitUserSelect: "none",
    "& .tl-container": {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: 1,
    },
    "& input, textarea, button, select, label, button": {
      webkitTouchCallout: "none",
      webkitUserSelect: "none",
      "-webkit-tap-highlight-color": "transparent",
      "tap-highlight-color": "transparent",
    },
  }),
  uce = H("div", {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    padding: "8px 8px 0 8px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    pointerEvents: "none",
    zIndex: 2,
    "& > *": { pointerEvents: "all" },
  }),
  hce = H("div", { flexGrow: 2 });
module.exports = eu(mce);
//# sourceMappingURL=index.js.map
