var os = Object.defineProperty,
  gc = Object.defineProperties,
  fc = Object.getOwnPropertyDescriptor,
  Sc = Object.getOwnPropertyDescriptors,
  bc = Object.getOwnPropertyNames,
  gr = Object.getOwnPropertySymbols;
var rs = Object.prototype.hasOwnProperty,
  Zi = Object.prototype.propertyIsEnumerable;
var ns = (r, e, t) =>
    e in r
      ? os(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  S = (r, e) => {
    for (var t in e || (e = {})) rs.call(e, t) && ns(r, t, e[t]);
    if (gr) for (var t of gr(e)) Zi.call(e, t) && ns(r, t, e[t]);
    return r;
  },
  w = (r, e) => gc(r, Sc(e));
var Je = (r, e) => {
  var t = {};
  for (var n in r) rs.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && gr)
    for (var n of gr(r)) e.indexOf(n) < 0 && Zi.call(r, n) && (t[n] = r[n]);
  return t;
};
var Tc = (r, e) => {
    for (var t in e) os(r, t, { get: e[t], enumerable: !0 });
  },
  fr = (r, e, t, n) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let o of bc(e))
        !rs.call(r, o) &&
          (t || o !== "default") &&
          os(r, o, {
            get: () => e[o],
            enumerable: !(n = fc(e, o)) || n.enumerable,
          });
    return r;
  };
var l = (r, e, t) => (ns(r, typeof e != "symbol" ? e + "" : e, t), t);
var pe = (r, e, t) =>
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
import "@fontsource/caveat-brush";
import "@fontsource/crimson-pro";
import "@fontsource/recursive";
import "@fontsource/source-code-pro";
import "@fontsource/source-sans-pro";
import { Renderer as Upe } from "@tldraw/core";
import * as Se from "react";
import { ErrorBoundary as Kpe } from "react-error-boundary";
import { IntlProvider as _pe } from "react-intl";
import * as Fe from "@radix-ui/react-context-menu";
import {
  AlignBottomIcon as Kse,
  AlignCenterHorizontallyIcon as _se,
  AlignCenterVerticallyIcon as Yse,
  AlignLeftIcon as Zse,
  AlignRightIcon as Xse,
  AlignTopIcon as qse,
  SpaceEvenlyHorizontallyIcon as Jse,
  SpaceEvenlyVerticallyIcon as Qse,
  StretchHorizontallyIcon as eie,
  StretchVerticallyIcon as tie,
} from "@radix-ui/react-icons";
import * as C from "react";
import { FormattedMessage as ot, useIntl as nie } from "react-intl";
import { createStitches as yc, defaultThemeMap as xc } from "@stitches/react";
var { styled: H, createTheme: wc } = yc({
    themeMap: S({}, xc),
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
  ss = wc({
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
var Pe = H("hr", {
  height: 0,
  paddingTop: 1,
  width: "calc(100%+8px)",
  backgroundColor: "$hover",
  border: "none",
  margin: "$2 -4px",
});
var Rt = H("div", {
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
import { ItemIndicator as Cc } from "@radix-ui/react-dropdown-menu";
import { CheckIcon as Dc, ChevronRightIcon as Pc } from "@radix-ui/react-icons";
import * as _t from "react";
import { Utils as kc } from "@tldraw/core";
import * as is from "react";
var vc = () => (kc.isDarwin() ? "\u2318" : "Ctrl");
function po({ variant: r, children: e }) {
  return is.createElement(
    Ic,
    { variant: r },
    e
      .split("")
      .map((t, n) => is.createElement("span", { key: n }, t.replace("#", vc())))
  );
}
var Ic = H("kbd", {
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
var ut = H("div", {
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
var Qe = {
  "@initial": "mobile",
  "@micro": "micro",
  "@sm": "small",
  "@md": "medium",
  "@lg": "large",
};
var je = _t.forwardRef((p, u) => {
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
      c = Je(m, [
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
    return _t.createElement(
      Mc,
      S(
        {
          ref: u,
          bp: Qe,
          isWarning: t,
          isActive: e,
          disabled: s,
          onClick: r,
          variant: a,
        },
        c
      ),
      _t.createElement(
        Xi,
        null,
        i,
        d ? _t.createElement(po, { variant: "menu" }, d) : void 0,
        n &&
          _t.createElement(
            Cc,
            { dir: "ltr" },
            _t.createElement(ut, null, _t.createElement(Dc, null))
          ),
        o && _t.createElement(ut, null, _t.createElement(Pc, null))
      )
    );
  }),
  Xi = H("div", {
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
    [`& > ${ut}`]: { paddingLeft: "$3" },
  }),
  Mc = H("button", {
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
    [`&:focus:not(:disabled) ${Xi}`]: { backgroundColor: "$hover" },
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
import * as Zt from "react";
import * as rn from "@radix-ui/react-tooltip";
import * as Tn from "react";
function Le({ children: r, label: e, kbd: t, id: n, side: o = "top" }) {
  return Tn.createElement(
    "span",
    { id: n },
    Tn.createElement(
      rn.Provider,
      null,
      Tn.createElement(
        rn.Root,
        null,
        Tn.createElement(
          rn.Trigger,
          { dir: "ltr", asChild: !0 },
          Tn.createElement("span", null, r)
        ),
        Tn.createElement(
          Bc,
          { dir: "ltr", side: o, sideOffset: 8 },
          e,
          t ? Tn.createElement(po, { variant: "tooltip" }, t) : null,
          Tn.createElement(Ec, null)
        )
      )
    )
  );
}
var Bc = H(rn.Content, {
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
  Ec = H(rn.Arrow, { fill: "$tooltip", margin: "0 8px" });
import * as uo from "react";
function Rc() {
  let r = uo.useCallback(
      (s, a) =>
        pe(this, null, function* () {
          a(
            s.fileSystemHandle ? "saveFirstTime" : "saveAgain",
            () =>
              pe(this, null, function* () {
                try {
                  yield s.saveProject(), s.newProject();
                } catch (d) {}
              }),
            () =>
              pe(this, null, function* () {
                s.newProject();
              }),
            () => pe(this, null, function* () {})
          );
        }),
      []
    ),
    e = uo.useCallback(
      (s, a) =>
        pe(this, null, function* () {
          a(
            s.fileSystemHandle ? "saveFirstTime" : "saveAgain",
            () =>
              pe(this, null, function* () {
                try {
                  yield s.saveProject(), yield s.openProject();
                } catch (d) {}
              }),
            () =>
              pe(this, null, function* () {
                s.openProject();
              }),
            () => pe(this, null, function* () {})
          );
        }),
      []
    ),
    t = uo.useCallback((s) => {
      s.saveProject();
    }, []),
    n = uo.useCallback((s) => {
      s.saveProjectAs();
    }, []),
    o = uo.useCallback(
      (s) =>
        pe(this, null, function* () {
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
import * as ho from "react";
function Sr() {
  let r = me(),
    { openDialog: e } = br(),
    t = ho.useCallback(
      (d) =>
        pe(this, null, function* () {
          var i, c;
          d && r.callbacks.onOpenProject && d.preventDefault(),
            (c = (i = r.callbacks).onNewProject) == null || c.call(i, r, e);
        }),
      [r, e]
    ),
    n = ho.useCallback(
      (d) => {
        var i, c;
        d && r.callbacks.onOpenProject && d.preventDefault(),
          (c = (i = r.callbacks).onSaveProject) == null || c.call(i, r);
      },
      [r]
    ),
    o = ho.useCallback(
      (d) => {
        var i, c;
        d && r.callbacks.onOpenProject && d.preventDefault(),
          (c = (i = r.callbacks).onSaveProjectAs) == null || c.call(i, r);
      },
      [r]
    ),
    s = ho.useCallback(
      (d) =>
        pe(this, null, function* () {
          var i, c;
          d && r.callbacks.onOpenProject && d.preventDefault(),
            (c = (i = r.callbacks).onOpenProject) == null || c.call(i, r, e);
        }),
      [r, e]
    ),
    a = ho.useCallback(
      (d) =>
        pe(this, null, function* () {
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
import * as qi from "react";
import { useHotkeys as ue } from "react-hotkeys-hook";
var as = class {
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
  Ac = ((o) => (
    (o.Idle = "idle"),
    (o.Connecting = "connecting"),
    (o.Connected = "connected"),
    (o.Disconnected = "disconnected"),
    o
  ))(Ac || {}),
  We = ((p) => (
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
  ))(We || {}),
  At = ((h) => (
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
  ))(At || {}),
  ls = ((o) => (
    (o.Backward = "backward"),
    (o.Forward = "forward"),
    (o.ToFront = "toFront"),
    (o.ToBack = "toBack"),
    o
  ))(ls || {}),
  Tr = ((a) => (
    (a.Top = "top"),
    (a.CenterVertical = "centerVertical"),
    (a.Bottom = "bottom"),
    (a.Left = "left"),
    (a.CenterHorizontal = "centerHorizontal"),
    (a.Right = "right"),
    a
  ))(Tr || {}),
  yr = ((t) => ((t.Horizontal = "horizontal"), (t.Vertical = "vertical"), t))(
    yr || {}
  ),
  xr = ((t) => ((t.Horizontal = "horizontal"), (t.Vertical = "vertical"), t))(
    xr || {}
  ),
  ds = ((t) => ((t.Horizontal = "horizontal"), (t.Vertical = "vertical"), t))(
    ds || {}
  ),
  Ie = ((p) => (
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
  ))(Ie || {}),
  wr = ((e) => ((e.Arrow = "arrow"), e))(wr || {}),
  cs = ((m) => (
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
  ))(cs || {}),
  kr = ((n) => (
    (n.Small = "small"), (n.Medium = "medium"), (n.Large = "large"), n
  ))(kr || {}),
  yn = ((o) => (
    (o.Draw = "draw"),
    (o.Solid = "solid"),
    (o.Dashed = "dashed"),
    (o.Dotted = "dotted"),
    o
  ))(yn || {}),
  Lc = ((o) => (
    (o.Small = "small"),
    (o.Medium = "medium"),
    (o.Large = "large"),
    (o.ExtraLarge = "extraLarge"),
    o
  ))(Lc || {}),
  Gt = ((o) => (
    (o.Start = "start"),
    (o.Middle = "middle"),
    (o.End = "end"),
    (o.Justify = "justify"),
    o
  ))(Gt || {}),
  Oo = ((o) => (
    (o.Script = "script"),
    (o.Sans = "sans"),
    (o.Serif = "serif"),
    (o.Mono = "mono"),
    o
  ))(Oo || {}),
  ps = ((t) => ((t.Image = "image"), (t.Video = "video"), t))(ps || {}),
  mo = ((s) => (
    (s.PNG = "png"),
    (s.JPG = "jpeg"),
    (s.WEBP = "webp"),
    (s.SVG = "svg"),
    (s.JSON = "json"),
    s
  ))(mo || {}),
  Fo = ((o) => (
    (o.Transparent = "transparent"),
    (o.Auto = "auto"),
    (o.Light = "light"),
    (o.Dark = "dark"),
    o
  ))(Fo || {});
function Ji(r) {
  let e = me(),
    t = qi.useCallback(
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
  ue(
    "v,1",
    () => {
      !t(!0) || e.selectTool("select");
    },
    [e, r.current]
  ),
    ue(
      "d,p,2",
      () => {
        !t(!0) || e.selectTool("draw");
      },
      void 0,
      [e]
    ),
    ue(
      "e,3",
      () => {
        !t(!0) || e.selectTool("erase");
      },
      void 0,
      [e]
    ),
    ue(
      "r,4",
      () => {
        !t(!0) || e.selectTool("rectangle");
      },
      void 0,
      [e]
    ),
    ue(
      "o,5",
      () => {
        !t(!0) || e.selectTool("ellipse");
      },
      void 0,
      [e]
    ),
    ue(
      "g,6",
      () => {
        !t() || e.selectTool("triangle");
      },
      void 0,
      [e]
    ),
    ue(
      "l,7",
      () => {
        !t(!0) || e.selectTool("line");
      },
      void 0,
      [e]
    ),
    ue(
      "a,8",
      () => {
        !t(!0) || e.selectTool("arrow");
      },
      void 0,
      [e]
    ),
    ue(
      "t,9",
      () => {
        !t(!0) || e.selectTool("text");
      },
      void 0,
      [e]
    ),
    ue(
      "s,0",
      () => {
        !t(!0) || e.selectTool("sticky");
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+shift+d,\u2318+shift+d",
      (i) => {
        !t(!0) || (e.toggleDarkMode(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+.,\u2318+.",
      () => {
        !t(!0) || e.toggleFocusMode();
      },
      void 0,
      [e]
    ),
    ue(
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
  } = Sr();
  ue(
    "ctrl+n,\u2318+n",
    (i) => {
      i.preventDefault(), !!t() && n(i);
    },
    void 0,
    [e]
  ),
    ue(
      "ctrl+s,\u2318+s",
      (i) => {
        !t() || s(i);
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+shift+s,\u2318+shift+s",
      (i) => {
        !t() || a(i);
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+alt+1,\u2318+alt+1",
      (i) => {
        !t() || e.exportImage("svg", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+alt+2,\u2318+alt+2",
      (i) => {
        !t() || e.exportImage("png", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+alt+3,\u2318+alt+3",
      (i) => {
        !t() || e.exportImage("jpeg", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+alt+4,\u2318+alt+4",
      (i) => {
        !t() || e.exportImage("webp", { scale: 2, quality: 1 });
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+alt+5,\u2318+alt+5",
      (i) => {
        !t() || e.exportJson();
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+o,\u2318+o",
      (i) => {
        !t() || o(i);
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+u,\u2318+u",
      (i) => {
        !t() || d(i);
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+z,ctrl+z",
      (i) => {
        i.preventDefault(),
          !!t(!0) && (e.session ? e.cancelSession() : e.undo());
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+shift+z,\u2318+shift+z",
      () => {
        !t(!0) || (e.session ? e.cancelSession() : e.redo());
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+u,ctrl+u",
      () => {
        !t() || e.undoSelect();
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+shift-u,\u2318+shift+u",
      () => {
        !t() || e.redoSelect();
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+=,\u2318+=,ctrl+num_add,\u2318+num_add",
      (i) => {
        !t(!0) || (e.zoomIn(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+-,\u2318+-,ctrl+num_subtract,\u2318+num_subtract",
      (i) => {
        !t(!0) || (e.zoomOut(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "shift+0,ctrl+numpad_0,\u2318+numpad_0",
      () => {
        !t(!0) || e.resetZoom();
      },
      void 0,
      [e]
    ),
    ue(
      "shift+1",
      () => {
        !t(!0) || e.zoomToFit();
      },
      void 0,
      [e]
    ),
    ue(
      "shift+2",
      () => {
        !t(!0) || e.zoomToSelection();
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+d,\u2318+d",
      (i) => {
        !t() || (e.duplicate(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "shift+h",
      () => {
        !t(!0) || e.flipHorizontal();
      },
      void 0,
      [e]
    ),
    ue(
      "shift+v",
      () => {
        !t(!0) || e.flipVertical();
      },
      void 0,
      [e]
    ),
    ue(
      "escape",
      () => {
        !t(!0) || e.cancel();
      },
      void 0,
      [e]
    ),
    ue(
      "backspace,del",
      () => {
        !t() || e.delete();
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+a,ctrl+a",
      () => {
        !t(!0) || e.selectAll();
      },
      void 0,
      [e]
    ),
    ue(
      "up",
      () => {
        !t() || e.nudge([0, -1], !1);
      },
      void 0,
      [e]
    ),
    ue(
      "right",
      () => {
        !t() || e.nudge([1, 0], !1);
      },
      void 0,
      [e]
    ),
    ue(
      "down",
      () => {
        !t() || e.nudge([0, 1], !1);
      },
      void 0,
      [e]
    ),
    ue(
      "left",
      () => {
        !t() || e.nudge([-1, 0], !1);
      },
      void 0,
      [e]
    ),
    ue(
      "shift+up",
      () => {
        !t() || e.nudge([0, -1], !0);
      },
      void 0,
      [e]
    ),
    ue(
      "shift+right",
      () => {
        !t() || e.nudge([1, 0], !0);
      },
      void 0,
      [e]
    ),
    ue(
      "shift+down",
      () => {
        !t() || e.nudge([0, 1], !0);
      },
      void 0,
      [e]
    ),
    ue(
      "shift+left",
      () => {
        !t() || e.nudge([-1, 0], !0);
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+shift+l,ctrl+shift+l",
      () => {
        !t() || e.toggleLocked();
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+shift+c,ctrl+shift+c",
      (i) => {
        !t() || (e.copySvg(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+g,ctrl+g",
      (i) => {
        !t() || (e.group(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "\u2318+shift+g,ctrl+shift+g",
      (i) => {
        !t() || (e.ungroup(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "[",
      () => {
        !t(!0) || e.moveBackward();
      },
      void 0,
      [e]
    ),
    ue(
      "]",
      () => {
        !t(!0) || e.moveForward();
      },
      void 0,
      [e]
    ),
    ue(
      "shift+[",
      () => {
        !t(!0) || e.moveToBack();
      },
      void 0,
      [e]
    ),
    ue(
      "shift+]",
      () => {
        !t(!0) || e.moveToFront();
      },
      void 0,
      [e]
    ),
    ue(
      "ctrl+shift+backspace,\u2318+shift+backspace",
      (i) => {
        !t() ||
          (e.settings.isDebugMode && e.resetDocument(), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "alt+command+l,alt+ctrl+l",
      (i) => {
        !t(!0) || (e.style({ textAlign: "start" }), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "alt+command+t,alt+ctrl+t",
      (i) => {
        !t(!0) || (e.style({ textAlign: "middle" }), i.preventDefault());
      },
      void 0,
      [e]
    ),
    ue(
      "alt+command+r,alt+ctrl+r",
      (i) => {
        !t(!0) || (e.style({ textAlign: "end" }), i.preventDefault());
      },
      void 0,
      [e]
    );
}
import * as sn from "react";
var us = sn.createContext({}),
  Hc = () => {
    let [r, e] = sn.useState(0);
    sn.useEffect(() => e(1));
  };
function me() {
  return sn.useContext(us);
}
var hs = sn.createContext({});
function Lt() {
  let r = sn.useContext(hs);
  return Hc(), r;
}
import * as Ma from "react";
var zc = "\u0627\u0644\u0644\u0648\u0646",
  Oc = "\u064A\u0645\u0644\u0623",
  Fc = "\u0645\u062A\u0642\u0637\u0639",
  jc = "\u062D\u062C\u0645",
  Gc = "\u062A\u0628\u0642\u0649 \u0645\u0641\u062A\u0648\u062D\u0629",
  Vc = "\u0627\u0644\u062E\u0637",
  $c = "\u0645\u062D\u0627\u0630\u0627\u0629",
  Nc = "\u0627\u0644\u0623\u0646\u0645\u0627\u0637",
  Wc = "\u062A\u0643\u0628\u064A\u0631",
  Uc = "\u062A\u0635\u063A\u064A\u0631",
  Kc = "\u0625\u0644\u0649",
  _c = "\u0623\u062F\u0648\u0627\u062A",
  Yc = "\u0627\u0644\u062A\u062D\u0648\u064A\u0644\u0627\u062A",
  Zc = "\u0645\u0644\u0641",
  Xc = "\u062A\u062D\u0631\u064A\u0631",
  qc = "\u0645\u0639\u0627\u064A\u0646\u0629",
  Jc = "\u0627\u0644\u062A\u0641\u0636\u064A\u0644\u0627\u062A",
  Qc = "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644",
  ep = "\u062E\u0631\u0648\u062C",
  tp = "\u0643\u0646 \u0631\u0627\u0639\u064A\u0627\u064B",
  np =
    "\u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062D\u062A\u0648\u0649",
  op =
    "\u062A\u0643\u0628\u064A\u0631 \u0644\u0644\u062A\u062D\u062F\u064A\u062F",
  rp = "\u062A\u0643\u0628\u064A\u0631 \u0644\u062A\u0646\u0627\u0633\u0628",
  sp = "\u062A\u0643\u0628\u064A\u0631 \u0625\u0644\u0649",
  ip = "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0643\u0646",
  ap = "\u0648\u0636\u0639 \u0627\u0644\u062A\u0631\u0643\u064A\u0632",
  lp = "\u0648\u0636\u0639 \u0627\u0644\u062A\u0635\u062D\u064A\u062D",
  dp = "\u0627\u0638\u0647\u0631 \u0627\u0644\u0634\u0628\u0643\u0629",
  cp =
    "\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u062A\u062D\u062F\u064A\u062F CAD",
  pp =
    "\u0627\u0644\u0627\u062D\u062A\u0641\u0627\u0638 \u0628\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0646\u0645\u0637 \u0645\u0641\u062A\u0648\u062D\u0629",
  up =
    "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0644\u0642\u0637\u0627\u062A \u062F\u0627\u0626\u0645\u064B\u0627",
  hp =
    "\u062A\u062F\u0648\u064A\u0631 \u0627\u0644\u0645\u0642\u0627\u0628\u0636",
  mp = "\u0645\u0642\u0627\u0628\u0636 \u0645\u0644\u0632\u0645\u0629",
  gp =
    "\u0645\u0642\u0627\u0628\u0636 \u0627\u0633\u062A\u0646\u0633\u0627\u062E",
  fp = "\u0627\u0644\u063A\u0627\u0621",
  Sp = "\u0625\u0639\u0627\u062F\u0629",
  bp = "\u0642\u0637\u0639",
  Tp = "\u0646\u0633\u062D",
  yp = "\u0644\u0635\u0642",
  xp = "\u0646\u0633\u062E \u0627\u0644\u0649",
  wp = "\u0635\u062F\u0631 \u0627\u0644\u0649",
  kp = "\u0627\u062E\u062A\u0631 \u0627\u0644\u0643\u0644",
  vp = "\u0644\u0627 \u062A\u062E\u062A\u0631 \u0634\u064A\u0621",
  Ip = "\u062D\u0630\u0641",
  Cp = "\u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F",
  Dp = "\u0641\u062A\u062D",
  Pp = "\u062D\u0641\u0638",
  Mp = "\u062D\u0641\u0638 \u0628\u0627\u0633\u0645",
  Bp =
    "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0648\u0633\u0627\u0626\u0637",
  Ep = "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u062D\u0629",
  Rp = "\u0635\u0641\u062D\u0629 \u062C\u062F\u064A\u062F\u0629",
  Ap = "\u0627\u0633\u0645 \u0627\u0644\u0635\u0641\u062D\u0629",
  Lp = "\u0646\u0633\u062E",
  Hp = "\u0627\u0644\u063A\u0627\u0621",
  zp =
    "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0639\u0648\u0629",
  Op =
    "\u0646\u0633\u062E \u0631\u0627\u0628\u0637 \u062F\u0639\u0648\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u0642\u0637",
  Fp =
    "\u0642\u0645 \u0628\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646",
  jp =
    "\u0646\u0633\u062E \u0625\u0644\u0649 \u0645\u0634\u0631\u0648\u0639 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0644\u0627\u0639\u0628\u064A\u0646",
  Gp = "\u0627\u062E\u062A\u0631",
  Vp = "\u0645\u0645\u062D\u0627\u0629",
  $p = "\u0631\u0633\u0645",
  Np = "\u0633\u0647\u0645",
  Wp = "\u0646\u0635",
  Up = "\u0644\u0627\u0635\u0642",
  Kp = "\u0645\u0631\u0628\u0639",
  _p = "\u0628\u064A\u0636\u0627\u0648\u064A",
  Yp = "\u0645\u062B\u0644\u062B",
  Zp = "\u062E\u0637",
  Xp = "\u062F\u0648\u0651\u0631",
  qp =
    "\u0642\u0641\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0628\u0639\u0627\u062F",
  Jp =
    "\u0641\u062A\u062D \u0642\u0641\u0644 \u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0628\u0639\u0627\u062F",
  Qp = "\u062C\u0645\u0651\u0639",
  eu = "\u0641\u0643 \u0627\u0644\u062A\u062C\u0645\u0639",
  tu =
    "\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u062E\u0644\u0641",
  nu = "\u062A\u062D\u0631\u064A\u0643 \u0644\u0644\u062E\u0644\u0641",
  ou = "\u062A\u062D\u0631\u064A\u0643 \u0644\u0644\u0623\u0645\u0627\u0645",
  ru = "\u062A\u062D\u0631\u0643 \u0644\u0644\u0623\u0645\u0627\u0645",
  su =
    "\u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637 \u0627\u0644\u0632\u0627\u0648\u064A\u0629",
  iu = "\u0642\u0641\u0644",
  au = "\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u0642\u0641\u0644",
  lu =
    "\u0627\u0646\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u062D\u0629",
  du = "\u0627\u0646\u0639\u0643\u0627\u0633 \u0623\u0641\u0642\u064A",
  cu = "\u0627\u0646\u0639\u0643\u0627\u0633 \u0639\u0645\u0648\u062F\u064A",
  pu = "\u062D\u0631\u0651\u0643",
  uu = "\u0644\u0644\u0627\u0645\u0627\u0645",
  hu = "\u0644\u0644\u062E\u0644\u0641",
  mu = "\u0644\u0644\u0648\u0631\u0627\u0621",
  gu = "\u062E\u0644\u0641",
  fu = "\u0644\u063A\u0629",
  Su = "\u0644\u0644\u0645\u0632\u064A\u062F",
  bu = "\u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u062F\u0648\u0627\u062A",
  Tu = "\u0627\u0633\u0641\u0644",
  yu = "\u064A\u0633\u0627\u0631",
  xu = "\u064A\u0645\u064A\u0646",
  wu = "\u0623\u0639\u0644\u0649",
  ku = "\u0635\u0641\u062D\u0629",
  vu =
    "\u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0641\u0627\u062A\u064A\u062D",
  Iu = "\u0628\u062D\u062B",
  Cu = "{dots}\u062A\u062D\u0645\u064A\u0644 ",
  Du =
    "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u062E\u0644\u0641\u064A\u0629",
  Pu = "\u0634\u0640\u0641\u0627\u0641",
  Mu = "\u0630\u0627\u062A\u064A",
  Bu = "\u062E\u0641\u064A\u0641",
  Eu = "\u063A\u0627\u0645\u0642",
  Ru =
    "\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
  Au =
    "\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0634\u0631\u0648\u0639\u061F",
  Lu = "\u0625\u0644\u063A\u0627\u0621",
  Hu = "\u0644\u0627",
  zu = "\u0646\u0639\u0645",
  Ou =
    "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641",
  Fu = "\u0635\u0648\u0631\u0629",
  ju = "\u0635\u0641\u0651 \u0644\u0644\u064A\u0633\u0627\u0631",
  Gu =
    "\u0635\u0641\u0651 \u0627\u0644\u0645\u062D\u0648\u0631 \u0627\u0644\u0623\u0641\u0642\u064A \u0644\u0644\u0648\u0633\u0637",
  Vu = "\u0635\u0641\u0651 \u0644\u0644\u064A\u0645\u064A\u0646",
  $u = "\u0635\u0641\u0651 \u0644\u0644\u0623\u0639\u0644\u0649",
  Nu =
    "\u0635\u0641\u0651 \u0627\u0644\u0645\u062D\u0648\u0631 \u0627\u0644\u0639\u0645\u0648\u062F\u064A \u0644\u0644\u0648\u0633\u0637",
  Wu = "\u0635\u0641\u0651 \u0644\u0644\u0623\u0633\u0641\u0644",
  Uu = "\u062A\u0648\u0632\u064A\u0639 \u0623\u0641\u0642\u064A",
  Ku = "\u062A\u0648\u0632\u064A\u0639 \u0639\u0645\u0648\u062F\u064A",
  _u = "\u062A\u0645\u062F\u064A\u062F \u0623\u0641\u0642\u064A",
  Yu = "\u062A\u0645\u062F\u064A\u062F \u0639\u0645\u0648\u062F\u064A",
  Qi = {
    "style.menu.color": zc,
    "style.menu.fill": Oc,
    "style.menu.dash": Fc,
    "style.menu.size": jc,
    "style.menu.keep.open": Gc,
    "style.menu.font": Vc,
    "style.menu.align": $c,
    styles: Nc,
    "zoom.in": Wc,
    "zoom.out": Uc,
    to: Kc,
    "menu.tools": _c,
    "menu.transform": Yc,
    "menu.file": Zc,
    "menu.edit": Xc,
    "menu.view": qc,
    "menu.preferences": Jc,
    "menu.sign.in": Qc,
    "menu.sign.out": ep,
    "become.a.sponsor": tp,
    "zoom.to.content": np,
    "zoom.to.selection": op,
    "zoom.to.fit": rp,
    "zoom.to": sp,
    "preferences.dark.mode": ip,
    "preferences.focus.mode": ap,
    "preferences.debug.mode": lp,
    "preferences.show.grid": dp,
    "preferences.use.cad.selection": cp,
    "preferences.keep.stylemenu.open": pp,
    "preferences.always.show.snaps": up,
    "preferences.rotate.handles": hp,
    "preferences.binding.handles": mp,
    "preferences.clone.handles": gp,
    undo: fp,
    redo: Sp,
    cut: bp,
    copy: Tp,
    paste: yp,
    "copy.as": xp,
    "export.as": wp,
    "select.all": kp,
    "select.none": vp,
    delete: Ip,
    "new.project": Cp,
    open: Dp,
    save: Pp,
    "save.as": Mp,
    "upload.media": Bp,
    "create.page": Ep,
    "new.page": Rp,
    "page.name": Ap,
    duplicate: Lp,
    cancel: Hp,
    "copy.invite.link": zp,
    "copy.readonly.link": Op,
    "create.multiplayer.project": Fp,
    "copy.multiplayer.project": jp,
    select: Gp,
    eraser: Vp,
    draw: $p,
    arrow: Np,
    text: Wp,
    sticky: Up,
    rectangle: Kp,
    ellipse: _p,
    triangle: Yp,
    line: Zp,
    rotate: Xp,
    "lock.aspect.ratio": qp,
    "unlock.aspect.ratio": Jp,
    group: Qp,
    ungroup: eu,
    "move.to.back": tu,
    "move.backward": nu,
    "move.forward": ou,
    "move.to.front": ru,
    "reset.angle": su,
    lock: iu,
    unlock: au,
    "move.to.page": lu,
    "flip.horizontal": du,
    "flip.vertical": cu,
    move: pu,
    "to.front": uu,
    forward: hu,
    backward: mu,
    back: gu,
    language: fu,
    "translation.link": Su,
    "dock.position": bu,
    bottom: Tu,
    left: yu,
    right: xu,
    top: wu,
    page: ku,
    "keyboard.shortcuts": vu,
    search: Iu,
    loading: Cu,
    "export.background": Du,
    transparent: Pu,
    auto: Mu,
    light: Bu,
    dark: Eu,
    "dialog.save.firsttime": Ru,
    "dialog.save.again": Au,
    "dialog.cancel": Lu,
    "dialog.no": Hu,
    "dialog.yes": zu,
    "enter.file.name": Ou,
    image: Fu,
    "align.left": ju,
    "align.center.x": Gu,
    "align.right": Vu,
    "align.top": $u,
    "align.center.y": Nu,
    "align.bottom": Wu,
    "distribute.x": Uu,
    "distribute.y": Ku,
    "stretch.x": _u,
    "stretch.y": Yu,
  };
var Zu = "Farve",
  Xu = "Fyld",
  qu = "Streg",
  Ju = "St\xF8rrelse",
  Qu = "Hold \xE5ben",
  eh = "Skrifttype",
  th = "Juster",
  nh = "Format",
  oh = "Zoom ind",
  rh = "Zoom ud",
  sh = "til",
  ih = "V\xE6rkt\xF8jer",
  ah = "Transformer",
  lh = "Fil",
  dh = "Rediger",
  ch = "Vis",
  ph = "Indstillinger",
  uh = "Log ind",
  hh = "Log ud",
  mh = "Bliv sponsor",
  gh = "Zoom til valgte",
  fh = "Zoom til l\xE6rred",
  Sh = "Zoom til",
  bh = "Zoom til indhold",
  Th = "M\xF8rkt udseende",
  yh = "Fokus tilstand",
  xh = "Debug tilstand",
  wh = "Vis net",
  kh = "Brug CAD udv\xE6lgelse",
  vh = "Hold formatmenuen \xE5ben",
  Ih = "Vis altid snaps",
  Ch = "Roteringsh\xE5ndtag",
  Dh = "Bindingsh\xE5ndtag",
  Ph = "Kloningsh\xE5ndtag",
  Mh = "Fortryd",
  Bh = "Gentag",
  Eh = "Klip",
  Rh = "Kopier",
  Ah = "Inds\xE6t",
  Lh = "Kopier som",
  Hh = "Eksporter som",
  zh = "V\xE6lg alt",
  Oh = "Frav\xE6lg alt",
  Fh = "Slet",
  jh = "Nyt projekt",
  Gh = "\xC5ben",
  Vh = "Gem",
  $h = "Gem som",
  Nh = "Upload medie",
  Wh = "Opret side",
  Uh = "Ny side",
  Kh = "Sidenavn",
  _h = "Dupliker",
  Yh = "Fortryd",
  Zh = "Kopier invitationslink",
  Xh = "Opret multiplayer projekt",
  qh = "Kopier til multiplayer projekt",
  Jh = "V\xE6lg",
  Qh = "Viskel\xE6der",
  em = "Tegn",
  tm = "Pil",
  nm = "Tekst",
  om = "Note",
  rm = "Rektangel",
  sm = "Ellipse",
  im = "Trekant",
  am = "Linje",
  lm = "Roter",
  dm = "L\xE5s billedformat",
  cm = "Frig\xF8r billedformat",
  pm = "Grupper",
  um = "Opdel gruppe",
  hm = "Placer bagerst",
  mm = "Flyt tilbage",
  gm = "Flyt frem",
  fm = "L\xE6g forrest",
  Sm = "Nulstil vinkel",
  bm = "L\xE5s",
  Tm = "L\xE5s op",
  ym = "Flyt til side",
  xm = "Vend vandret",
  wm = "Vend lodret",
  km = "Flyt",
  vm = "Forrest",
  Im = "Frem",
  Cm = "Tilbage",
  Dm = "Bagerst",
  Pm = "Sprog",
  Mm = "Justering nederst",
  Bm = "Vandret justering centreret",
  Em = "Lodret justering centreret",
  Rm = "Juster / distribuer",
  Am = "Justering til venstre",
  Lm = "Justering til h\xF8jre",
  Hm = "Justering \xF8verst",
  zm = "Kopier skrivebeskyttet link",
  Om = "Vil du gemme \xE6ndringerne til dit projekt?",
  Fm = "Vil du gemme dit projekt?",
  jm = "Ja",
  Gm = "Nej",
  Vm = "Fortryd",
  $m = "Skriv filnavn",
  Nm = "Vandret distribuering",
  Wm = "Lodret distribuering",
  Um = "Placering af v\xE6rkt\xF8jslinje",
  Km = "Nederst",
  _m = "Venstre",
  Ym = "H\xF8jre",
  Zm = "\xD8verst",
  Xm = "Baggrund ved eksport",
  qm = "Automatisk",
  Jm = "Lys",
  Qm = "M\xF8rk",
  eg = "Billede",
  tg = "Tastaturgenveje",
  ng = "Indl\xE6ser",
  og = "Side",
  rg = "S\xF8g",
  sg = "Str\xE6k vandret",
  ig = "Str\xE6k lodret",
  ag = "L\xE6r mere",
  lg = "Gennemsigtig",
  ea = {
    "style.menu.color": Zu,
    "style.menu.fill": Xu,
    "style.menu.dash": qu,
    "style.menu.size": Ju,
    "style.menu.keep.open": Qu,
    "style.menu.font": eh,
    "style.menu.align": th,
    styles: nh,
    "zoom.in": oh,
    "zoom.out": rh,
    to: sh,
    "menu.tools": ih,
    "menu.transform": ah,
    "menu.file": lh,
    "menu.edit": dh,
    "menu.view": ch,
    "menu.preferences": ph,
    "menu.sign.in": uh,
    "menu.sign.out": hh,
    "become.a.sponsor": mh,
    "zoom.to.selection": gh,
    "zoom.to.fit": fh,
    "zoom.to": Sh,
    "zoom.to.content": bh,
    "preferences.dark.mode": Th,
    "preferences.focus.mode": yh,
    "preferences.debug.mode": xh,
    "preferences.show.grid": wh,
    "preferences.use.cad.selection": kh,
    "preferences.keep.stylemenu.open": vh,
    "preferences.always.show.snaps": Ih,
    "preferences.rotate.handles": Ch,
    "preferences.binding.handles": Dh,
    "preferences.clone.handles": Ph,
    undo: Mh,
    redo: Bh,
    cut: Eh,
    copy: Rh,
    paste: Ah,
    "copy.as": Lh,
    "export.as": Hh,
    "select.all": zh,
    "select.none": Oh,
    delete: Fh,
    "new.project": jh,
    open: Gh,
    save: Vh,
    "save.as": $h,
    "upload.media": Nh,
    "create.page": Wh,
    "new.page": Uh,
    "page.name": Kh,
    duplicate: _h,
    cancel: Yh,
    "copy.invite.link": Zh,
    "create.multiplayer.project": Xh,
    "copy.multiplayer.project": qh,
    select: Jh,
    eraser: Qh,
    draw: em,
    arrow: tm,
    text: nm,
    sticky: om,
    rectangle: rm,
    ellipse: sm,
    triangle: im,
    line: am,
    rotate: lm,
    "lock.aspect.ratio": dm,
    "unlock.aspect.ratio": cm,
    group: pm,
    ungroup: um,
    "move.to.back": hm,
    "move.backward": mm,
    "move.forward": gm,
    "move.to.front": fm,
    "reset.angle": Sm,
    lock: bm,
    unlock: Tm,
    "move.to.page": ym,
    "flip.horizontal": xm,
    "flip.vertical": wm,
    move: km,
    "to.front": vm,
    forward: Im,
    backward: Cm,
    back: Dm,
    language: Pm,
    "align.bottom": Mm,
    "align.center.x": Bm,
    "align.center.y": Em,
    "align.distribute": Rm,
    "align.left": Am,
    "align.right": Lm,
    "align.top": Hm,
    "copy.readonly.link": zm,
    "dialog.save.again": Om,
    "dialog.save.firsttime": Fm,
    "dialog.yes": jm,
    "dialog.no": Gm,
    "dialog.cancel": Vm,
    "enter.file.name": $m,
    "distribute.x": Nm,
    "distribute.y": Wm,
    "dock.position": Um,
    bottom: Km,
    left: _m,
    right: Ym,
    top: Zm,
    "export.background": Xm,
    auto: qm,
    light: Jm,
    dark: Qm,
    image: eg,
    "keyboard.shortcuts": tg,
    loading: ng,
    page: og,
    search: rg,
    "stretch.x": sg,
    "stretch.y": ig,
    "translation.link": ag,
    transparent: lg,
  };
var dg = "Farbe",
  cg = "F\xFCllen",
  pg = "Strich",
  ug = "Gr\xF6\xDFe",
  hg = "Offen halten",
  mg = "Schriftart",
  gg = "Ausrichten",
  fg = "Stile",
  Sg = "Heranzoomen",
  bg = "Herauszoomen",
  Tg = "zu",
  yg = "Werkzeuge",
  xg = "Transformieren",
  wg = "Datei",
  kg = "Bearbeiten",
  vg = "Ansicht",
  Ig = "Pr\xE4ferenzen",
  Cg = "Einloggen",
  Dg = "Ausloggen",
  Pg = "Sponsor werden",
  Mg = "Zur\xFCck zum Inhalt",
  Bg = "Zur Auswahl zoomen",
  Eg = "Zoom anpassen",
  Rg = "Zoomen nach",
  Ag = "Dunkler Modus",
  Lg = "Fokus Modus",
  Hg = "Debug Modus",
  zg = "Gitter anzeigen",
  Og = "CAD Auswahl verwenden",
  Fg = "Stilmen\xFC offen halten",
  jg = "Hilfslinien immer anzeigen",
  Gg = "Rotiergriffe",
  Vg = "Bindegriffe",
  $g = "Klongriffe",
  Ng = "R\xFCckg\xE4ngig machen",
  Wg = "Wiederherstellen",
  Ug = "Ausschneiden",
  Kg = "Kopieren",
  _g = "Einf\xFCgen",
  Yg = "Kopieren als",
  Zg = "Exportieren als",
  Xg = "Alles ausw\xE4hlen",
  qg = "Nichts ausw\xE4hlen",
  Jg = "L\xF6schen",
  Qg = "Neues Projekt",
  ef = "\xD6ffnen",
  tf = "Speichern",
  nf = "Speichern als",
  of = "Medien hochladen",
  rf = "Seite erstellen",
  sf = "Neue Seite",
  af = "Seitenname",
  lf = "Duplizieren",
  df = "Form Optionen",
  cf = "Fromen",
  pf = "Abbrechen",
  uf = "Einladungslink kopieren",
  hf = "Schreibgesch\xFCtzten Link kopieren",
  mf = "Geteiltes Projekt erstellen",
  gf = "In ein Geteiltes Projekt kopieren",
  ff = "Ausw\xE4hlen",
  Sf = "Radierer",
  bf = "Malen",
  Tf = "Pfeil",
  yf = "Text",
  xf = "Notiz",
  wf = "Rechteck",
  kf = "Ellipse",
  vf = "Dreieck",
  If = "Linie",
  Cf = "Drehen",
  Df = "Seitenverh\xE4ltnis sperren",
  Pf = "Seitenverh\xE4ltnis entsperren",
  Mf = "Gruppieren",
  Bf = "Gruppierung aufheben",
  Ef = "Nach Hinten verschieben",
  Rf = "R\xFCckw\xE4rts schieben",
  Af = "Vorw\xE4rts schieben",
  Lf = "Nach Vorne verschieben",
  Hf = "Winkel zur\xFCcksetzen",
  zf = "Sperren",
  Of = "Entsperren",
  Ff = "Ausrichten / Verteilen",
  jf = "Zu Seite verschieben",
  Gf = "Horizontal spiegeln",
  Vf = "Vertikal spiegeln",
  $f = "Verschieben",
  Nf = "Nach Vorne",
  Wf = "Vorw\xE4rts",
  Uf = "R\xFCckw\xE4rts",
  Kf = "Hinten",
  _f = "Sprache",
  Yf = "Mehr erfahren",
  Zf = "Dock Position",
  Xf = "Unten",
  qf = "Links",
  Jf = "Rechts",
  Qf = "Oben",
  eS = "Seite",
  tS = "Tastaturkurzbefehle",
  nS = "Suche",
  oS = "Laden{dots}",
  rS = "Hintergrund Exportieren",
  sS = "Transparent",
  iS = "Auto",
  aS = "Hell",
  lS = "Dunkel",
  dS = "Github",
  cS = "Twitter",
  pS = "Discord",
  uS = "Bild",
  hS = "Links ausrichten",
  mS = "Horizontal mittig ausrichten",
  gS = "Rechts ausrichten",
  fS = "Oben ausrichten",
  SS = "Vertikal mittig ausrichten",
  bS = "Unten ausrichten",
  TS = "Horizontal verteilen",
  yS = "Vertikal verteilen",
  xS = "Horizontal strecken",
  wS = "Vertikal strecken",
  kS = "M\xF6chten Sie Ihr aktuelles Projekt speichern?",
  vS = "M\xF6chten Sie die \xC4nderungen an Ihrem aktuellen Projekt speichern?",
  IS = "Abbrechen",
  CS = "Nein",
  DS = "Ja",
  PS = "Dateiname eingeben",
  MS = "Probieren Sie das neue tldraw",
  BS = "Wei\xDF",
  ES = "hellgrau",
  RS = "Frau",
  AS = "Schwarz",
  LS = "Gr\xFCn",
  HS = "Cyan",
  zS = "Blau",
  OS = "Indigo",
  FS = "Violett",
  jS = "Rot",
  GS = "Orange",
  VS = "Gelb",
  $S = "Durchgehend",
  NS = "Gestrichelt",
  WS = "Gepunktet",
  US = "Klein",
  KS = "Mittel",
  _S = "Gro\xDF",
  ta = {
    "style.menu.color": dg,
    "style.menu.fill": cg,
    "style.menu.dash": pg,
    "style.menu.size": ug,
    "style.menu.keep.open": hg,
    "style.menu.font": mg,
    "style.menu.align": gg,
    styles: fg,
    "zoom.in": Sg,
    "zoom.out": bg,
    to: Tg,
    "menu.tools": yg,
    "menu.transform": xg,
    "menu.file": wg,
    "menu.edit": kg,
    "menu.view": vg,
    "menu.preferences": Ig,
    "menu.sign.in": Cg,
    "menu.sign.out": Dg,
    "become.a.sponsor": Pg,
    "zoom.to.content": Mg,
    "zoom.to.selection": Bg,
    "zoom.to.fit": Eg,
    "zoom.to": Rg,
    "preferences.dark.mode": Ag,
    "preferences.focus.mode": Lg,
    "preferences.debug.mode": Hg,
    "preferences.show.grid": zg,
    "preferences.use.cad.selection": Og,
    "preferences.keep.stylemenu.open": Fg,
    "preferences.always.show.snaps": jg,
    "preferences.rotate.handles": Gg,
    "preferences.binding.handles": Vg,
    "preferences.clone.handles": $g,
    undo: Ng,
    redo: Wg,
    cut: Ug,
    copy: Kg,
    paste: _g,
    "copy.as": Yg,
    "export.as": Zg,
    "select.all": Xg,
    "select.none": qg,
    delete: Jg,
    "new.project": Qg,
    open: ef,
    save: tf,
    "save.as": nf,
    "upload.media": of,
    "create.page": rf,
    "new.page": sf,
    "page.name": af,
    duplicate: lf,
    "shape.options": df,
    shapes: cf,
    cancel: pf,
    "copy.invite.link": uf,
    "copy.readonly.link": hf,
    "create.multiplayer.project": mf,
    "copy.multiplayer.project": gf,
    select: ff,
    eraser: Sf,
    draw: bf,
    arrow: Tf,
    text: yf,
    sticky: xf,
    rectangle: wf,
    ellipse: kf,
    triangle: vf,
    line: If,
    rotate: Cf,
    "lock.aspect.ratio": Df,
    "unlock.aspect.ratio": Pf,
    group: Mf,
    ungroup: Bf,
    "move.to.back": Ef,
    "move.backward": Rf,
    "move.forward": Af,
    "move.to.front": Lf,
    "reset.angle": Hf,
    lock: zf,
    unlock: Of,
    "align.distribute": Ff,
    "move.to.page": jf,
    "flip.horizontal": Gf,
    "flip.vertical": Vf,
    move: $f,
    "to.front": Nf,
    forward: Wf,
    backward: Uf,
    back: Kf,
    language: _f,
    "translation.link": Yf,
    "dock.position": Zf,
    bottom: Xf,
    left: qf,
    right: Jf,
    top: Qf,
    page: eS,
    "keyboard.shortcuts": tS,
    search: nS,
    loading: oS,
    "export.background": rS,
    transparent: sS,
    auto: iS,
    light: aS,
    dark: lS,
    github: dS,
    twitter: cS,
    discord: pS,
    image: uS,
    "align.left": hS,
    "align.center.x": mS,
    "align.right": gS,
    "align.top": fS,
    "align.center.y": SS,
    "align.bottom": bS,
    "distribute.x": TS,
    "distribute.y": yS,
    "stretch.x": xS,
    "stretch.y": wS,
    "dialog.save.firsttime": kS,
    "dialog.save.again": vS,
    "dialog.cancel": IS,
    "dialog.no": CS,
    "dialog.yes": DS,
    "enter.file.name": PS,
    "tldraw-beta": MS,
    white: BS,
    lightGray: ES,
    gray: RS,
    black: AS,
    green: LS,
    cyan: HS,
    blue: zS,
    indigo: OS,
    violet: FS,
    red: jS,
    orange: GS,
    yellow: VS,
    solid: $S,
    dashed: NS,
    dotted: WS,
    small: US,
    medium: KS,
    large: _S,
  };
var na = {};
var ZS = "Color",
  XS = "Relleno",
  qS = "L\xEDnea",
  JS = "Tama\xF1o",
  QS = "Mantener abierto",
  eb = "Fuente",
  tb = "Alineaci\xF3n",
  nb = "Estilos",
  ob = "Acercar",
  rb = "Alejar",
  sb = "A",
  ib = "Herramientas",
  ab = "Transformar",
  lb = "Archivo",
  db = "Editar",
  cb = "Ver",
  pb = "Preferencias",
  ub = "Iniciar sesi\xF3n",
  hb = "Cerrar sesi\xF3n",
  mb = "Convi\xE9rtete en patrocinador",
  gb = "Acercar al contenido",
  fb = "Acercar a la selecci\xF3n",
  Sb = "Ajustar a la ventana",
  bb = "Acercar a",
  Tb = "Modo oscuro",
  yb = "Modo concentraci\xF3n",
  xb = "Modo depuraci\xF3n",
  wb = "Mostrar cuadr\xEDcula",
  kb = "Usar selecci\xF3n CAD",
  vb = "Mantener men\xFA de estilos abierto",
  Ib = "Mostrar puntos de ajuste",
  Cb = "Control de rotaci\xF3n",
  Db = "Control de vinculaci\xF3n",
  Pb = "Control de clonaci\xF3n",
  Mb = "Deshacer",
  Bb = "Rehacer",
  Eb = "Cortar",
  Rb = "Copiar",
  Ab = "Pegar",
  Lb = "Copiar como",
  Hb = "Exportar como",
  zb = "Selecionar todo",
  Ob = "Selecionar nada",
  Fb = "Borrar",
  jb = "Nuevo Proyecto",
  Gb = "Abrir",
  Vb = "Guardar",
  $b = "Guardar como",
  Nb = "Subir medios",
  Wb = "Crear p\xE1gina",
  Ub = "Nueva p\xE1gina",
  Kb = "Nombre de p\xE1gina",
  _b = "Duplicar",
  Yb = "Opciones de formas",
  Zb = "Formas",
  Xb = "Cancelar",
  qb = "Copiar invitaci\xF3n",
  Jb = "Copiar invitaci\xF3n (solo lectura)",
  Qb = "Crear proyecto multijugador",
  eT = "Copiar proyecto multijugador",
  tT = "Seleccionar",
  nT = "Borrador",
  oT = "Dibujar",
  rT = "Flecha",
  sT = "Texto",
  iT = "Pegatina",
  aT = "Rect\xE1ngulo",
  lT = "Elipse",
  dT = "Tri\xE1ngulo",
  cT = "L\xEDnea",
  pT = "Rotar",
  uT = "Bloquear relaci\xF3n de aspecto",
  hT = "Desbloquear relaci\xF3n de aspecto",
  mT = "Agrupar",
  gT = "Desagrupar",
  fT = "Mover al fondo",
  ST = "Mover atr\xE1s",
  bT = "Mover adelante",
  TT = "Mover al frente",
  yT = "Restablecer \xE1ngulo",
  xT = "Bloquear",
  wT = "Desbloquear",
  kT = "Alinear / Distribuir",
  vT = "Mover a p\xE1gina",
  IT = "Voltear horizontalmente",
  CT = "Voltear verticalmente",
  DT = "Mover",
  PT = "Al frente",
  MT = "Adelante",
  BT = "Atr\xE1s",
  ET = "Fondo",
  RT = "Idioma",
  AT = "Saber m\xE1s",
  LT = "Posici\xF3n del dock",
  HT = "Abajo",
  zT = "Izquierda",
  OT = "Derecha",
  FT = "Arriba",
  jT = "P\xE1gina",
  GT = "Atajos de teclado",
  VT = "Buscar",
  $T = "Cargando{dots}",
  NT = "Exportar fondo",
  WT = "Transparente",
  UT = "Auto",
  KT = "Claro",
  _T = "Oscuro",
  YT = "Github",
  ZT = "Twitter",
  XT = "Discord",
  qT = "Imagen",
  JT = "Alinear a la izquierda",
  QT = "Alinear al centro horizontalmente",
  ey = "Alinear a la derecha",
  ty = "Alinear arriba",
  ny = "Alinear al centro verticalmente",
  oy = "Alinear abajo",
  ry = "Distribuir horizontalmente",
  sy = "Distribuir verticalmente",
  iy = "Estirar horizontalmente",
  ay = "Estirar verticalmente",
  ly = "\xBFQuieres guardar el proyecto actual?",
  dy = "\xBFQuieres guardar los cambios en el proyecto actual?",
  cy = "Cancelar",
  py = "No",
  uy = "S\xED",
  hy = "Introduce el nombre del arquivo",
  my = "Prueba el nuevo tldraw",
  gy = "Blanco",
  fy = "Gris claro",
  Sy = "Gris",
  by = "Negro",
  Ty = "Verde",
  yy = "Cian",
  xy = "Azul",
  wy = "Indigo",
  ky = "Violeta",
  vy = "Rojo",
  Iy = "Naranja",
  Cy = "Amarillo",
  Dy = "Cont\xEDnuo",
  Py = "Discont\xEDnuo",
  My = "Punteado",
  By = "Peque\xF1o",
  Ey = "Mediano",
  Ry = "Grande",
  oa = {
    "style.menu.color": ZS,
    "style.menu.fill": XS,
    "style.menu.dash": qS,
    "style.menu.size": JS,
    "style.menu.keep.open": QS,
    "style.menu.font": eb,
    "style.menu.align": tb,
    styles: nb,
    "zoom.in": ob,
    "zoom.out": rb,
    to: sb,
    "menu.tools": ib,
    "menu.transform": ab,
    "menu.file": lb,
    "menu.edit": db,
    "menu.view": cb,
    "menu.preferences": pb,
    "menu.sign.in": ub,
    "menu.sign.out": hb,
    "become.a.sponsor": mb,
    "zoom.to.content": gb,
    "zoom.to.selection": fb,
    "zoom.to.fit": Sb,
    "zoom.to": bb,
    "preferences.dark.mode": Tb,
    "preferences.focus.mode": yb,
    "preferences.debug.mode": xb,
    "preferences.show.grid": wb,
    "preferences.use.cad.selection": kb,
    "preferences.keep.stylemenu.open": vb,
    "preferences.always.show.snaps": Ib,
    "preferences.rotate.handles": Cb,
    "preferences.binding.handles": Db,
    "preferences.clone.handles": Pb,
    undo: Mb,
    redo: Bb,
    cut: Eb,
    copy: Rb,
    paste: Ab,
    "copy.as": Lb,
    "export.as": Hb,
    "select.all": zb,
    "select.none": Ob,
    delete: Fb,
    "new.project": jb,
    open: Gb,
    save: Vb,
    "save.as": $b,
    "upload.media": Nb,
    "create.page": Wb,
    "new.page": Ub,
    "page.name": Kb,
    duplicate: _b,
    "shape.options": Yb,
    shapes: Zb,
    cancel: Xb,
    "copy.invite.link": qb,
    "copy.readonly.link": Jb,
    "create.multiplayer.project": Qb,
    "copy.multiplayer.project": eT,
    select: tT,
    eraser: nT,
    draw: oT,
    arrow: rT,
    text: sT,
    sticky: iT,
    rectangle: aT,
    ellipse: lT,
    triangle: dT,
    line: cT,
    rotate: pT,
    "lock.aspect.ratio": uT,
    "unlock.aspect.ratio": hT,
    group: mT,
    ungroup: gT,
    "move.to.back": fT,
    "move.backward": ST,
    "move.forward": bT,
    "move.to.front": TT,
    "reset.angle": yT,
    lock: xT,
    unlock: wT,
    "align.distribute": kT,
    "move.to.page": vT,
    "flip.horizontal": IT,
    "flip.vertical": CT,
    move: DT,
    "to.front": PT,
    forward: MT,
    backward: BT,
    back: ET,
    language: RT,
    "translation.link": AT,
    "dock.position": LT,
    bottom: HT,
    left: zT,
    right: OT,
    top: FT,
    page: jT,
    "keyboard.shortcuts": GT,
    search: VT,
    loading: $T,
    "export.background": NT,
    transparent: WT,
    auto: UT,
    light: KT,
    dark: _T,
    github: YT,
    twitter: ZT,
    discord: XT,
    image: qT,
    "align.left": JT,
    "align.center.x": QT,
    "align.right": ey,
    "align.top": ty,
    "align.center.y": ny,
    "align.bottom": oy,
    "distribute.x": ry,
    "distribute.y": sy,
    "stretch.x": iy,
    "stretch.y": ay,
    "dialog.save.firsttime": ly,
    "dialog.save.again": dy,
    "dialog.cancel": cy,
    "dialog.no": py,
    "dialog.yes": uy,
    "enter.file.name": hy,
    "tldraw-beta": my,
    white: gy,
    lightGray: fy,
    gray: Sy,
    black: by,
    green: Ty,
    cyan: yy,
    blue: xy,
    indigo: wy,
    violet: ky,
    red: vy,
    orange: Iy,
    yellow: Cy,
    solid: Dy,
    dashed: Py,
    dotted: My,
    small: By,
    medium: Ey,
    large: Ry,
  };
var Ay = "\u0631\u0646\u06AF",
  Ly = "\u062A\u0648\u067E\u064F\u0631",
  Hy = "\u062E\u0637\u200C\u0686\u06CC\u0646",
  zy = "\u0627\u0646\u062F\u0627\u0632\u0647",
  Oy =
    "\u0628\u0627\u0632 \u0646\u06AF\u0647\u200C\u062F\u0627\u0634\u062A\u0646",
  Fy = "\u0642\u0644\u0645",
  jy = "\u062A\u0631\u0627\u0632",
  Gy = "\u0633\u0628\u06A9\u200C\u0647\u0627",
  Vy = "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC",
  $y = "\u06A9\u0648\u0686\u06A9\u200C\u0646\u0645\u0627\u06CC\u06CC",
  Ny = "\u0628\u0647",
  Wy = "\u0627\u0628\u0632\u0627\u0631\u0647\u0627",
  Uy = "\u062A\u063A\u06CC\u06CC\u0631 \u0634\u06A9\u0644",
  Ky = "\u067E\u0631\u0648\u0646\u062F\u0647",
  _y = "\u0648\u06CC\u0631\u0627\u06CC\u0634",
  Yy = "\u0646\u0645\u0627\u06CC\u0634",
  Zy = "\u062A\u0631\u062C\u06CC\u062D\u0627\u062A",
  Xy = "\u0648\u0631\u0648\u062F",
  qy = "\u062E\u0631\u0648\u062C",
  Jy =
    "\u062D\u0645\u0627\u06CC\u062A\u200C\u06A9\u0646\u0646\u062F\u0647 \u0634\u0648\u06CC\u062F",
  Qy =
    "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0645\u062D\u062A\u0648\u0627",
  ex =
    "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0628\u0647 \u0646\u0627\u062D\u06CC\u0647 \u0627\u0646\u062A\u062E\u0627\u0628\u200C\u0634\u062F\u0647",
  tx =
    "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0645\u062A\u0646\u0627\u0633\u0628 \u0628\u0627 \u0635\u0641\u062D\u0647",
  nx =
    "\u0628\u0632\u0631\u06AF\u200C\u0646\u0645\u0627\u06CC\u06CC \u0628\u0647",
  ox = "\u062D\u0627\u0644\u062A \u062A\u0627\u0631\u06CC\u06A9",
  rx = "\u062D\u0627\u0644\u062A \u062A\u0645\u0631\u06A9\u0632",
  sx =
    "\u062D\u0627\u0644\u062A \u0639\u06CC\u0628\u200C\u06CC\u0627\u0628\u06CC",
  ix =
    "\u0646\u0645\u0627\u06CC\u0634 \u062E\u0637\u0648\u0637 \u0631\u0627\u0647\u0646\u0645\u0627",
  ax =
    "\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062D\u0627\u0644\u062A \u0627\u0646\u062A\u062E\u0627\u0628 CAD",
  lx =
    "\u0628\u0627\u0632 \u0646\u06AF\u0647\u200C\u062F\u0627\u0634\u062A\u0646 \u0645\u0646\u0648\u06CC \u0633\u0628\u06A9\u200C\u0647\u0627",
  dx =
    "\u0647\u0645\u06CC\u0634\u0647 \u0646\u0642\u0627\u0637 \u0686\u0633\u0628\u0627\u0646 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0628\u062F\u0647",
  cx =
    "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u0686\u0631\u062E\u0634",
  px =
    "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u0627\u062A\u0635\u0627\u0644\u200C\u062F\u0647\u0646\u062F\u0647",
  ux =
    "\u062F\u0633\u062A\u06AF\u06CC\u0631\u0647\u200C\u0647\u0627\u06CC \u062A\u06A9\u062B\u06CC\u0631",
  hx = "\u0648\u0627\u06AF\u0631\u062F\u0627\u0646\u06CC",
  mx = "\u0627\u0646\u062C\u0627\u0645 \u062F\u0648\u0628\u0627\u0631\u0647",
  gx = "\u0628\u0631\u06CC\u062F\u0646",
  fx = "\u06A9\u067E\u06CC",
  Sx = "\u062C\u0627\u06CC\u200C\u06AF\u0630\u0627\u0631\u06CC",
  bx = "\u06A9\u067E\u06CC \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  Tx =
    "\u062E\u0631\u0648\u062C\u06CC\u200C\u06AF\u0631\u0641\u062A\u0646 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  yx = "\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u0645\u0647",
  xx =
    "\u0627\u0646\u062A\u062E\u0627\u0628 \u0647\u06CC\u0686\u200C\u06CC\u06A9",
  wx = "\u062D\u0630\u0641",
  kx = "\u067E\u0631\u0648\u0698\u0647 \u062C\u062F\u06CC\u062F",
  vx = "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646",
  Ix = "\u0630\u062E\u06CC\u0631\u0647",
  Cx =
    "\u0630\u062E\u06CC\u0631\u0647 \u0628\u0647\u200C\u0639\u0646\u0648\u0627\u0646",
  Dx =
    "\u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC \u0631\u0633\u0627\u0646\u0647",
  Px = "\u0627\u06CC\u062C\u0627\u062F \u0628\u0631\u06AF\u0647",
  Mx = "\u0628\u0631\u06AF\u0647 \u062C\u062F\u06CC\u062F",
  Bx = "\u0646\u0627\u0645 \u0628\u0631\u06AF\u0647",
  Ex = "\u062A\u06A9\u062B\u06CC\u0631\u06A9\u0631\u062F\u0646",
  Rx =
    "\u06AF\u0632\u06CC\u0646\u0647\u200C\u0647\u0627\u06CC \u0634\u06A9\u0644",
  Ax = "\u0634\u06A9\u0644\u200C\u0647\u0627",
  Lx = "\u0644\u063A\u0648",
  Hx =
    "\u06A9\u067E\u06CC\u200C\u06A9\u0631\u062F\u0646 \u067E\u06CC\u0648\u0646\u062F \u062F\u0639\u0648\u062A",
  zx =
    "\u06A9\u067E\u06CC\u200C\u06A9\u0631\u062F\u0646 \u067E\u06CC\u0648\u0646\u062F \u063A\u06CC\u0631\u0642\u0627\u0628\u0644 \u0648\u06CC\u0631\u0627\u06CC\u0634",
  Ox =
    "\u0627\u06CC\u062C\u0627\u062F \u06CC\u06A9 \u067E\u0631\u0648\u0698\u0647 \u0686\u0646\u062F\u0646\u0641\u0631\u0647",
  Fx =
    "\u06A9\u067E\u06CC \u0628\u0647 \u067E\u0631\u0648\u0698\u0647 \u0686\u0646\u062F\u0646\u0641\u0631\u0647",
  jx = "\u0627\u0646\u062A\u062E\u0627\u0628",
  Gx = "\u067E\u0627\u06A9\u200C\u06A9\u0646",
  Vx = "\u0631\u0633\u0645",
  $x = "\u0641\u0650\u0644\u0650\u0634",
  Nx = "\u0645\u062A\u0646",
  Wx = "\u0628\u0631\u06AF\u0647 \u0686\u0633\u0628\u0627\u0646",
  Ux = "\u0686\u0647\u0627\u0631\u06AF\u0648\u0634",
  Kx = "\u06AF\u0631\u062F\u06CC",
  _x = "\u0633\u0647\u200C\u06AF\u0648\u0634",
  Yx = "\u062E\u0637",
  Zx = "\u0686\u0631\u062E\u0627\u0646\u062F\u0646",
  Xx =
    "\u0642\u0641\u0644\u200C\u06A9\u0631\u062F\u0646 \u0646\u0633\u0628\u062A \u0627\u0628\u0639\u0627\u062F",
  qx =
    "\u0627\u062C\u0627\u0632\u0647 \u062A\u063A\u06CC\u06CC\u0631 \u0646\u0633\u0628\u062A \u0627\u0628\u0639\u0627\u062F",
  Jx = "\u06AF\u0631\u0648\u0647\u200C\u0628\u0646\u062F\u06CC",
  Qx =
    "\u0644\u063A\u0648 \u06AF\u0631\u0648\u0647\u200C\u0628\u0646\u062F\u06CC",
  ew = "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0639\u0642\u0628",
  tw =
    "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0633\u0645\u062A \u0639\u0642\u0628",
  nw =
    "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0633\u0645\u062A \u062C\u0644\u0648",
  ow = "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u062C\u0644\u0648",
  rw =
    "\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC \u0632\u0627\u0648\u06CC\u0647",
  sw = "\u0642\u0641\u0644",
  iw = "\u0628\u0627\u0632\u06A9\u0631\u062F\u0646 \u0642\u0641\u0644",
  aw =
    "\u062A\u0631\u0627\u0632 / \u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646",
  lw =
    "\u0627\u0646\u062A\u0642\u0627\u0644 \u0628\u0647 \u0628\u0631\u06AF\u0647",
  dw =
    "\u0648\u0627\u0631\u0648\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0627\u0641\u0642\u06CC",
  cw =
    "\u0648\u0627\u0631\u0648\u0646\u0647\u200C\u0633\u0627\u0632\u06CC \u0639\u0645\u0648\u062F\u06CC",
  pw = "\u062D\u0631\u06A9\u062A\u200C\u062F\u0627\u062F\u0646",
  uw = "\u0628\u0647 \u062C\u0644\u0648",
  hw = "\u0628\u0647 \u0633\u0645\u062A \u062C\u0644\u0648",
  mw = "\u0628\u0647 \u0633\u0645\u062A \u0639\u0642\u0628",
  gw = "\u0628\u0647 \u0639\u0642\u0628",
  fw = "\u0632\u0628\u0627\u0646",
  Sw =
    "\u06CC\u0627\u062F\u06AF\u06CC\u0631\u06CC \u0628\u06CC\u0634\u062A\u0631",
  bw =
    "\u0645\u0648\u0642\u0639\u06CC\u062A \u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631",
  Tw = "\u067E\u0627\u06CC\u06CC\u0646",
  yw = "\u0686\u067E",
  xw = "\u0631\u0627\u0633\u062A",
  ww = "\u0628\u0627\u0644\u0627",
  kw = "\u0628\u0631\u06AF\u0647",
  vw =
    "\u0645\u06CC\u0627\u0646\u200C\u0628\u0631\u0647\u0627\u06CC \u0635\u0641\u062D\u0647\u200C\u06A9\u0644\u06CC\u062F",
  Iw = "\u062C\u0633\u062A\u062C\u0648",
  Cw = "\u0628\u0627\u0631\u06AF\u06CC\u0631\u06CC{dots}",
  Dw =
    "\u062E\u0631\u0648\u062C\u06CC\u200C\u06AF\u0631\u0641\u062A\u0646 \u067E\u0633\u200C\u0632\u0645\u06CC\u0646\u0647",
  Pw = "\u0634\u0641\u0627\u0641",
  Mw = "\u062E\u0648\u062F\u06A9\u0627\u0631",
  Bw = "\u0631\u0648\u0634\u0646",
  Ew = "\u062A\u0627\u0631\u06CC\u06A9",
  Rw = "\u06AF\u06CC\u062A\u200C\u0647\u0627\u0628",
  Aw = "\u062A\u0648\u06CC\u06CC\u062A\u0631",
  Lw = "\u062F\u06CC\u0633\u06A9\u0648\u0631\u062F",
  Hw = "\u062A\u0635\u0648\u06CC\u0631",
  zw = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0686\u067E",
  Ow =
    "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0645\u0631\u06A9\u0632 \u0627\u0641\u0642\u06CC",
  Fw = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0631\u0627\u0633\u062A",
  jw = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0628\u0627\u0644\u0627",
  Gw =
    "\u062A\u0631\u0627\u0632 \u0628\u0647 \u0645\u0631\u06A9\u0632 \u0639\u0645\u0648\u062F\u06CC",
  Vw = "\u062A\u0631\u0627\u0632 \u0628\u0647 \u067E\u0627\u06CC\u06CC\u0646",
  $w =
    "\u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646 \u0627\u0641\u0642\u06CC",
  Nw =
    "\u067E\u062E\u0634\u200C\u06A9\u0631\u062F\u0646 \u0639\u0645\u0648\u062F\u06CC",
  Ww =
    "\u06A9\u0634\u200C\u0622\u0648\u0631\u062F\u0646 \u0627\u0641\u0642\u06CC",
  Uw =
    "\u06A9\u0634\u200C\u0622\u0648\u0631\u062F\u0646 \u0639\u0645\u0648\u062F\u06CC",
  Kw =
    "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u067E\u0631\u0648\u0698\u0647 \u0641\u0639\u0644\u06CC \u062E\u0648\u062F \u0631\u0627 \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
  _w =
    "\u0622\u06CC\u0627 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u06A9\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u0631\u0627 \u062F\u0631 \u067E\u0631\u0648\u0698\u0647 \u0641\u0639\u0644\u06CC \u062E\u0648\u062F \u0630\u062E\u06CC\u0631\u0647 \u06A9\u0646\u06CC\u062F\u061F",
  Yw = "\u0644\u063A\u0648",
  Zw = "\u062E\u06CC\u0631",
  Xw = "\u0628\u0644\u0647",
  qw =
    "\u0646\u0627\u0645 \u067E\u0631\u0648\u0646\u062F\u0647 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F",
  Jw =
    "\u0627\u0645\u062A\u062D\u0627\u0646\u200C\u06A9\u0631\u062F\u0646 tldraw \u062C\u062F\u06CC\u062F",
  Qw = "\u0633\u0641\u06CC\u062F",
  e0 = "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC \u0631\u0648\u0634\u0646",
  t0 = "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC",
  n0 = "\u0645\u0634\u06A9\u06CC",
  o0 = "\u0633\u0628\u0632",
  r0 = "\u0641\u06CC\u0631\u0648\u0632\u0647\u200C\u0627\u06CC",
  s0 = "\u0622\u0628\u06CC",
  i0 = "\u0646\u06CC\u0644\u06CC",
  a0 = "\u0628\u0646\u0641\u0634",
  l0 = "\u0642\u0631\u0645\u0632",
  d0 = "\u0646\u0627\u0631\u0646\u062C\u06CC",
  c0 = "\u0632\u0631\u062F",
  p0 = "\u062A\u0648\u067E\u064F\u0631",
  u0 = "\u062E\u0637\u200C\u0686\u06CC\u0646",
  h0 = "\u0646\u0642\u0637\u0647\u200C\u0686\u06CC\u0646",
  m0 = "\u06A9\u0648\u0686\u06A9",
  g0 = "\u0645\u062A\u0648\u0633\u0637",
  f0 = "\u0628\u0632\u0631\u06AF",
  ra = {
    "style.menu.color": Ay,
    "style.menu.fill": Ly,
    "style.menu.dash": Hy,
    "style.menu.size": zy,
    "style.menu.keep.open": Oy,
    "style.menu.font": Fy,
    "style.menu.align": jy,
    styles: Gy,
    "zoom.in": Vy,
    "zoom.out": $y,
    to: Ny,
    "menu.tools": Wy,
    "menu.transform": Uy,
    "menu.file": Ky,
    "menu.edit": _y,
    "menu.view": Yy,
    "menu.preferences": Zy,
    "menu.sign.in": Xy,
    "menu.sign.out": qy,
    "become.a.sponsor": Jy,
    "zoom.to.content": Qy,
    "zoom.to.selection": ex,
    "zoom.to.fit": tx,
    "zoom.to": nx,
    "preferences.dark.mode": ox,
    "preferences.focus.mode": rx,
    "preferences.debug.mode": sx,
    "preferences.show.grid": ix,
    "preferences.use.cad.selection": ax,
    "preferences.keep.stylemenu.open": lx,
    "preferences.always.show.snaps": dx,
    "preferences.rotate.handles": cx,
    "preferences.binding.handles": px,
    "preferences.clone.handles": ux,
    undo: hx,
    redo: mx,
    cut: gx,
    copy: fx,
    paste: Sx,
    "copy.as": bx,
    "export.as": Tx,
    "select.all": yx,
    "select.none": xx,
    delete: wx,
    "new.project": kx,
    open: vx,
    save: Ix,
    "save.as": Cx,
    "upload.media": Dx,
    "create.page": Px,
    "new.page": Mx,
    "page.name": Bx,
    duplicate: Ex,
    "shape.options": Rx,
    shapes: Ax,
    cancel: Lx,
    "copy.invite.link": Hx,
    "copy.readonly.link": zx,
    "create.multiplayer.project": Ox,
    "copy.multiplayer.project": Fx,
    select: jx,
    eraser: Gx,
    draw: Vx,
    arrow: $x,
    text: Nx,
    sticky: Wx,
    rectangle: Ux,
    ellipse: Kx,
    triangle: _x,
    line: Yx,
    rotate: Zx,
    "lock.aspect.ratio": Xx,
    "unlock.aspect.ratio": qx,
    group: Jx,
    ungroup: Qx,
    "move.to.back": ew,
    "move.backward": tw,
    "move.forward": nw,
    "move.to.front": ow,
    "reset.angle": rw,
    lock: sw,
    unlock: iw,
    "align.distribute": aw,
    "move.to.page": lw,
    "flip.horizontal": dw,
    "flip.vertical": cw,
    move: pw,
    "to.front": uw,
    forward: hw,
    backward: mw,
    back: gw,
    language: fw,
    "translation.link": Sw,
    "dock.position": bw,
    bottom: Tw,
    left: yw,
    right: xw,
    top: ww,
    page: kw,
    "keyboard.shortcuts": vw,
    search: Iw,
    loading: Cw,
    "export.background": Dw,
    transparent: Pw,
    auto: Mw,
    light: Bw,
    dark: Ew,
    github: Rw,
    twitter: Aw,
    discord: Lw,
    image: Hw,
    "align.left": zw,
    "align.center.x": Ow,
    "align.right": Fw,
    "align.top": jw,
    "align.center.y": Gw,
    "align.bottom": Vw,
    "distribute.x": $w,
    "distribute.y": Nw,
    "stretch.x": Ww,
    "stretch.y": Uw,
    "dialog.save.firsttime": Kw,
    "dialog.save.again": _w,
    "dialog.cancel": Yw,
    "dialog.no": Zw,
    "dialog.yes": Xw,
    "enter.file.name": qw,
    "tldraw-beta": Jw,
    white: Qw,
    lightGray: e0,
    gray: t0,
    black: n0,
    green: o0,
    cyan: r0,
    blue: s0,
    indigo: i0,
    violet: a0,
    red: l0,
    orange: d0,
    yellow: c0,
    solid: p0,
    dashed: u0,
    dotted: h0,
    small: m0,
    medium: g0,
    large: f0,
  };
var S0 = "Couleur",
  b0 = "Remplir",
  T0 = "Bordure",
  y0 = "Taille",
  x0 = "Toujours afficher le menu",
  w0 = "Police",
  k0 = "Alignement",
  v0 = "Styles",
  I0 = "Zoom avant",
  C0 = "Zoom arri\xE8re",
  D0 = "\xC0",
  P0 = "Outils",
  M0 = "Transformation",
  B0 = "Fichier",
  E0 = "\xC9dition",
  R0 = "Afficher",
  A0 = "Pr\xE9f\xE9rences",
  L0 = "S'authentifier",
  H0 = "Se d\xE9connecter",
  z0 = "Devenir un sponsor",
  O0 = "Retour au contenu",
  F0 = "Ajuster le zoom \xE0 la s\xE9lection",
  j0 = "Adapter le zoom au contenu",
  G0 = "R\xE9tablir le zoom \xE0",
  V0 = "Mode sombre",
  $0 = "Mode focus",
  N0 = "Afficher la barre d\xE9veloppeur",
  W0 = "Afficher la grille",
  U0 = "Utiliser la s\xE9lection CAD",
  K0 = "Toujours afficher le menu styles",
  _0 = "Afficher les rep\xE8res dynamiques",
  Y0 = "Manier la rotation",
  Z0 = "Manier les liaisons",
  X0 = "Manier le clonage",
  q0 = "Annuler",
  J0 = "R\xE9tablir",
  Q0 = "Couper",
  ek = "Copier",
  tk = "Coller",
  nk = "Copier au format",
  ok = "Exporter au format",
  rk = "Tout s\xE9lectionner",
  sk = "Tout d\xE9s\xE9lectionner",
  ik = "Supprimer",
  ak = "Nouveau project",
  lk = "Ouvrir",
  dk = "Enregistrer",
  ck = "Enregistrer sous",
  pk = "Importer un m\xE9dia",
  uk = "Cr\xE9er une page",
  hk = "Nouvelle Page",
  mk = "Nom de la page",
  gk = "Dupliquer",
  fk = "Annuler",
  Sk = "Copier le lien d'invitation",
  bk = "Copier le lien en lecture seule d'invitation",
  Tk = "Cr\xE9er un project multi-joueurs",
  yk = "Copier dans un projet multi-joueurs",
  xk = "S\xE9lection",
  wk = "Gomme",
  kk = "Crayon",
  vk = "Fl\xE8che",
  Ik = "Texte",
  Ck = "Note",
  Dk = "Rectangle",
  Pk = "Cercle",
  Mk = "Triangle",
  Bk = "Ligne",
  Ek = "Rotation",
  Rk = "Verrouiller les proportions",
  Ak = "D\xE9verrouiller les proportions",
  Lk = "Grouper",
  Hk = "D\xE9grouper",
  zk = "D\xE9placer \xE0 l'arri\xE8re-plan",
  Ok = "Reculer d'un plan",
  Fk = "Avancer d'un plan",
  jk = "Placer au premier plan",
  Gk = "R\xE9initialiser la rotation",
  Vk = "Verrouiller",
  $k = "D\xE9verrouiller",
  Nk = "Alignement / R\xE9partion",
  Wk = "D\xE9placer vers la page",
  Uk = "Retourner horizontalement",
  Kk = "Retourner verticalement",
  _k = "Disposition",
  Yk = "Placer au premier plan",
  Zk = "Avancer d'un plan",
  Xk = "Reculer d'un plan",
  qk = "D\xE9placer \xE0 l'arri\xE8re-plan",
  Jk = "Langage",
  Qk = "En savoir plus",
  e1 = "Position du dock",
  t1 = "En bas",
  n1 = "\xC0 gauche",
  o1 = "\xC0 droite",
  r1 = "En haut",
  s1 = "Page",
  i1 = "Raccourcis clavier",
  a1 = "Rechercher",
  l1 = "Chargement{dots}",
  d1 = "Couleur d'arri\xE8re-plan de l'export",
  c1 = "Transparent",
  p1 = "Automatique",
  u1 = "Clair",
  h1 = "Sombre",
  sa = {
    "style.menu.color": S0,
    "style.menu.fill": b0,
    "style.menu.dash": T0,
    "style.menu.size": y0,
    "style.menu.keep.open": x0,
    "style.menu.font": w0,
    "style.menu.align": k0,
    styles: v0,
    "zoom.in": I0,
    "zoom.out": C0,
    to: D0,
    "menu.tools": P0,
    "menu.transform": M0,
    "menu.file": B0,
    "menu.edit": E0,
    "menu.view": R0,
    "menu.preferences": A0,
    "menu.sign.in": L0,
    "menu.sign.out": H0,
    "become.a.sponsor": z0,
    "zoom.to.content": O0,
    "zoom.to.selection": F0,
    "zoom.to.fit": j0,
    "zoom.to": G0,
    "preferences.dark.mode": V0,
    "preferences.focus.mode": $0,
    "preferences.debug.mode": N0,
    "preferences.show.grid": W0,
    "preferences.use.cad.selection": U0,
    "preferences.keep.stylemenu.open": K0,
    "preferences.always.show.snaps": _0,
    "preferences.rotate.handles": Y0,
    "preferences.binding.handles": Z0,
    "preferences.clone.handles": X0,
    undo: q0,
    redo: J0,
    cut: Q0,
    copy: ek,
    paste: tk,
    "copy.as": nk,
    "export.as": ok,
    "select.all": rk,
    "select.none": sk,
    delete: ik,
    "new.project": ak,
    open: lk,
    save: dk,
    "save.as": ck,
    "upload.media": pk,
    "create.page": uk,
    "new.page": hk,
    "page.name": mk,
    duplicate: gk,
    cancel: fk,
    "copy.invite.link": Sk,
    "copy.readonly.link": bk,
    "create.multiplayer.project": Tk,
    "copy.multiplayer.project": yk,
    select: xk,
    eraser: wk,
    draw: kk,
    arrow: vk,
    text: Ik,
    sticky: Ck,
    rectangle: Dk,
    ellipse: Pk,
    triangle: Mk,
    line: Bk,
    rotate: Ek,
    "lock.aspect.ratio": Rk,
    "unlock.aspect.ratio": Ak,
    group: Lk,
    ungroup: Hk,
    "move.to.back": zk,
    "move.backward": Ok,
    "move.forward": Fk,
    "move.to.front": jk,
    "reset.angle": Gk,
    lock: Vk,
    unlock: $k,
    "align.distribute": Nk,
    "move.to.page": Wk,
    "flip.horizontal": Uk,
    "flip.vertical": Kk,
    move: _k,
    "to.front": Yk,
    forward: Zk,
    backward: Xk,
    back: qk,
    language: Jk,
    "translation.link": Qk,
    "dock.position": e1,
    bottom: t1,
    left: n1,
    right: o1,
    top: r1,
    page: s1,
    "keyboard.shortcuts": i1,
    search: a1,
    loading: l1,
    "export.background": d1,
    transparent: c1,
    auto: p1,
    light: u1,
    dark: h1,
  };
var m1 = "Cor",
  g1 = "Recheo",
  f1 = "Li\xF1a",
  S1 = "Tama\xF1o",
  b1 = "Manter aberto",
  T1 = "Fonte",
  y1 = "Ali\xF1amento",
  x1 = "Estilos",
  w1 = "Achegar",
  k1 = "Afastar",
  v1 = "A",
  I1 = "Ferramentas",
  C1 = "Transformar",
  D1 = "Arquivo",
  P1 = "Editar",
  M1 = "Ver",
  B1 = "Preferencias",
  E1 = "Iniciar sesi\xF3n",
  R1 = "Pechar sesi\xF3n",
  A1 = "Conv\xEDrtete en patrocinador",
  L1 = "Achegar ao contido",
  H1 = "Achegar \xE1 selecci\xF3n",
  z1 = "Axustar \xE1 vent\xE1",
  O1 = "Achegar a",
  F1 = "Modo escuro",
  j1 = "Modo concentraci\xF3n",
  G1 = "Modo depuraci\xF3n",
  V1 = "Amosar cuadr\xEDcula",
  $1 = "Usar selecci\xF3n CAD",
  N1 = "Manter men\xFA de estilos aberto",
  W1 = "Amosar puntos de axuste",
  U1 = "Control de rotaci\xF3n",
  K1 = "Control de vinculaci\xF3n",
  _1 = "Control de clonaci\xF3n",
  Y1 = "Desfacer",
  Z1 = "Refacer",
  X1 = "Cortar",
  q1 = "Copiar",
  J1 = "Pegar",
  Q1 = "Copiar como",
  ev = "Exportar como",
  tv = "Selecionar todo",
  nv = "Selecionar nada",
  ov = "Borrar",
  rv = "Novo Proxecto",
  sv = "Abrir",
  iv = "Gardar",
  av = "Gardar como",
  lv = "Subir medios",
  dv = "Crear p\xE1xina",
  cv = "Nova p\xE1xina",
  pv = "Nome de p\xE1xina",
  uv = "Duplicar",
  hv = "Opci\xF3ns de formas",
  mv = "Formas",
  gv = "Cancelar",
  fv = "Copiar invitaci\xF3n",
  Sv = "Copiar invitaci\xF3n (s\xF3 lectura)",
  bv = "Crear proxecto multixogador",
  Tv = "Copiar proxecto multixogador",
  yv = "Seleccionar",
  xv = "Borrador",
  wv = "Debuxar",
  kv = "Frecha",
  vv = "Texto",
  Iv = "Pegatina",
  Cv = "Rect\xE1ngulo",
  Dv = "Elipse",
  Pv = "Tri\xE1ngulo",
  Mv = "Li\xF1a",
  Bv = "Rotar",
  Ev = "Bloquear relaci\xF3n de aspecto",
  Rv = "Desbloquear relaci\xF3n de aspecto",
  Av = "Agrupar",
  Lv = "Desagrupar",
  Hv = "Mover ao fondo",
  zv = "Mover atr\xE1s",
  Ov = "Mover adiante",
  Fv = "Mover ao fronte",
  jv = "Restablecer \xE1ngulo",
  Gv = "Bloquear",
  Vv = "Desbloquear",
  $v = "Ali\xF1ar / Distribu\xEDr",
  Nv = "Mover \xE1 p\xE1xina",
  Wv = "Voltear horizontalmente",
  Uv = "Voltear verticalmente",
  Kv = "Mover",
  _v = "Ao fronte",
  Yv = "Adilante",
  Zv = "Atr\xE1s",
  Xv = "Fondo",
  qv = "Idioma",
  Jv = "Saber m\xE1is",
  Qv = "Posici\xF3n do dock",
  eI = "Abaixo",
  tI = "Esquerda",
  nI = "Dereita",
  oI = "Arriba",
  rI = "P\xE1xina",
  sI = "Atallos de teclado",
  iI = "Buscar",
  aI = "Cargando{dots}",
  lI = "Exportar fondo",
  dI = "Transparente",
  cI = "Auto",
  pI = "Claro",
  uI = "Escuro",
  hI = "Github",
  mI = "Twitter",
  gI = "Discord",
  fI = "Imaxe",
  SI = "Ali\xF1ar \xE1 esquerda",
  bI = "Ali\xF1ar ao centro horizontalmente",
  TI = "Ali\xF1ar \xE1 dereita",
  yI = "Ali\xF1ar arriba",
  xI = "Ali\xF1ar ao centro verticalmente",
  wI = "Ali\xF1ar abaixo",
  kI = "Distribu\xEDr horizontalmente",
  vI = "Distribu\xEDr verticalmente",
  II = "Estirar horizontalmente",
  CI = "Estirar verticalmente",
  DI = "Queres gardar o proxecto actual?",
  PI = "Queres gardar os cambios ao proxecto actual?",
  MI = "Cancelar",
  BI = "No",
  EI = "S\xED",
  RI = "Introduce o nome do arquivo",
  AI = "Proba o novo tldraw",
  LI = "Branco",
  HI = "Gris claro",
  zI = "Gris",
  OI = "Negro",
  FI = "Verde",
  jI = "Cian",
  GI = "Azul",
  VI = "Indigo",
  $I = "Violeta",
  NI = "Vermello",
  WI = "Laranxa",
  UI = "Amarelo",
  KI = "Cont\xEDnuo",
  _I = "Discont\xEDnuo",
  YI = "Punteado",
  ZI = "Pequeno",
  XI = "Mediano",
  qI = "Grande",
  ia = {
    "style.menu.color": m1,
    "style.menu.fill": g1,
    "style.menu.dash": f1,
    "style.menu.size": S1,
    "style.menu.keep.open": b1,
    "style.menu.font": T1,
    "style.menu.align": y1,
    styles: x1,
    "zoom.in": w1,
    "zoom.out": k1,
    to: v1,
    "menu.tools": I1,
    "menu.transform": C1,
    "menu.file": D1,
    "menu.edit": P1,
    "menu.view": M1,
    "menu.preferences": B1,
    "menu.sign.in": E1,
    "menu.sign.out": R1,
    "become.a.sponsor": A1,
    "zoom.to.content": L1,
    "zoom.to.selection": H1,
    "zoom.to.fit": z1,
    "zoom.to": O1,
    "preferences.dark.mode": F1,
    "preferences.focus.mode": j1,
    "preferences.debug.mode": G1,
    "preferences.show.grid": V1,
    "preferences.use.cad.selection": $1,
    "preferences.keep.stylemenu.open": N1,
    "preferences.always.show.snaps": W1,
    "preferences.rotate.handles": U1,
    "preferences.binding.handles": K1,
    "preferences.clone.handles": _1,
    undo: Y1,
    redo: Z1,
    cut: X1,
    copy: q1,
    paste: J1,
    "copy.as": Q1,
    "export.as": ev,
    "select.all": tv,
    "select.none": nv,
    delete: ov,
    "new.project": rv,
    open: sv,
    save: iv,
    "save.as": av,
    "upload.media": lv,
    "create.page": dv,
    "new.page": cv,
    "page.name": pv,
    duplicate: uv,
    "shape.options": hv,
    shapes: mv,
    cancel: gv,
    "copy.invite.link": fv,
    "copy.readonly.link": Sv,
    "create.multiplayer.project": bv,
    "copy.multiplayer.project": Tv,
    select: yv,
    eraser: xv,
    draw: wv,
    arrow: kv,
    text: vv,
    sticky: Iv,
    rectangle: Cv,
    ellipse: Dv,
    triangle: Pv,
    line: Mv,
    rotate: Bv,
    "lock.aspect.ratio": Ev,
    "unlock.aspect.ratio": Rv,
    group: Av,
    ungroup: Lv,
    "move.to.back": Hv,
    "move.backward": zv,
    "move.forward": Ov,
    "move.to.front": Fv,
    "reset.angle": jv,
    lock: Gv,
    unlock: Vv,
    "align.distribute": $v,
    "move.to.page": Nv,
    "flip.horizontal": Wv,
    "flip.vertical": Uv,
    move: Kv,
    "to.front": _v,
    forward: Yv,
    backward: Zv,
    back: Xv,
    language: qv,
    "translation.link": Jv,
    "dock.position": Qv,
    bottom: eI,
    left: tI,
    right: nI,
    top: oI,
    page: rI,
    "keyboard.shortcuts": sI,
    search: iI,
    loading: aI,
    "export.background": lI,
    transparent: dI,
    auto: cI,
    light: pI,
    dark: uI,
    github: hI,
    twitter: mI,
    discord: gI,
    image: fI,
    "align.left": SI,
    "align.center.x": bI,
    "align.right": TI,
    "align.top": yI,
    "align.center.y": xI,
    "align.bottom": wI,
    "distribute.x": kI,
    "distribute.y": vI,
    "stretch.x": II,
    "stretch.y": CI,
    "dialog.save.firsttime": DI,
    "dialog.save.again": PI,
    "dialog.cancel": MI,
    "dialog.no": BI,
    "dialog.yes": EI,
    "enter.file.name": RI,
    "tldraw-beta": AI,
    white: LI,
    lightGray: HI,
    gray: zI,
    black: OI,
    green: FI,
    cyan: jI,
    blue: GI,
    indigo: VI,
    violet: $I,
    red: NI,
    orange: WI,
    yellow: UI,
    solid: KI,
    dashed: _I,
    dotted: YI,
    small: ZI,
    medium: XI,
    large: qI,
  };
var JI = "\u05E6\u05D1\u05E2",
  QI = "\u05DE\u05DC\u05D0",
  eC = "\u05D2\u05D1\u05D5\u05DC",
  tC = "\u05D2\u05D5\u05D3\u05DC",
  nC = "\u05D4\u05E9\u05D0\u05E8 \u05E4\u05EA\u05D5\u05D7",
  oC = "\u05D2\u05D5\u05E4\u05DF",
  rC = "\u05D9\u05D9\u05E9\u05D5\u05E8",
  sC = "\u05E2\u05D9\u05E6\u05D5\u05D1",
  iC = "\u05D4\u05D2\u05D3\u05DC \u05EA\u05E6\u05D5\u05D2\u05D4",
  aC = "\u05D4\u05E7\u05D8\u05DF \u05EA\u05E6\u05D5\u05D2\u05D4",
  lC = "\u05DC",
  dC = "\u05E7\u05D5\u05D1\u05E5",
  cC = "\u05E2\u05E8\u05D9\u05DB\u05D4",
  pC = "\u05EA\u05E6\u05D5\u05D2\u05D4",
  uC = "\u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD",
  hC = "\u05D4\u05D9\u05E8\u05E9\u05DD",
  mC = "\u05D4\u05EA\u05E0\u05EA\u05E7",
  gC = "\u05DE\u05EA\u05DF \u05D7\u05E1\u05D5\u05EA",
  fC = "\u05D6\u05D5\u05DD \u05DC\u05D1\u05D7\u05D9\u05E8\u05D4",
  SC = "\u05D6\u05D5\u05DD \u05DC\u05D4\u05EA\u05D0\u05DE\u05D4",
  bC = "\u05D6\u05D5\u05DD \u05DC",
  TC = "\u05DE\u05E6\u05D1 \u05D7\u05E9\u05D5\u05DA",
  yC = "\u05DE\u05E6\u05D1 \u05E4\u05D5\u05E7\u05D5\u05E1",
  xC = "\u05DE\u05E6\u05D1 \u05D3\u05D9\u05D1\u05D0\u05D2",
  wC =
    "(\u05D2\u05E8\u05D9\u05D3)\u05D4\u05E8\u05D0\u05D4 \u05E8\u05E9\u05EA \u05E2\u05D9\u05DE\u05D5\u05D3",
  kC = "\u05E1\u05D9\u05DE\u05D5\u05DF CAD",
  vC =
    "\u05D4\u05E9\u05D0\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E4\u05EA\u05D5\u05D7",
  IC =
    "\u05D4\u05E8\u05D0\u05D4 \u05E7\u05D5\u05D5\u05D9 \u05DE\u05EA\u05D0\u05E8",
  CC =
    "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E1\u05D9\u05D1\u05D5\u05D1",
  DC =
    "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E7\u05E9\u05D9\u05E8\u05D4",
  PC =
    "\u05D4\u05E8\u05D0\u05D4 \u05D9\u05D3\u05D9\u05D5\u05EA \u05E9\u05D9\u05DB\u05E4\u05D5\u05DC",
  MC = "\u05D1\u05D8\u05DC",
  BC = "\u05E2\u05E9\u05D4 \u05DE\u05D7\u05D3\u05E9",
  EC = "\u05D2\u05D6\u05D5\u05E8",
  RC = "\u05D4\u05E2\u05EA\u05E7",
  AC = "\u05D4\u05D3\u05D1\u05E7",
  LC = "\u05D4\u05E2\u05EA\u05E7 \u05DB",
  HC = "\u05D9\u05D9\u05E6\u05D0 \u05DB",
  zC = "\u05D1\u05D7\u05E8 \u05D4\u05DB\u05DC",
  OC = "\u05D1\u05D8\u05DC \u05D1\u05D7\u05D9\u05E8\u05D4",
  FC = "\u05DE\u05D7\u05E7",
  jC = "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D7\u05D3\u05E9",
  GC = "\u05E4\u05EA\u05D7",
  VC = "\u05E9\u05DE\u05D5\u05E8",
  $C = "\u05E9\u05DE\u05D5\u05E8 \u05DB",
  NC = "\u05D4\u05E2\u05DC\u05D0\u05EA \u05DE\u05D3\u05D9\u05D4",
  WC = "\u05E6\u05D5\u05E8 \u05D3\u05E3",
  UC = "\u05D3\u05E3 \u05D7\u05D3\u05E9",
  KC = "\u05E9\u05DD \u05D4\u05D3\u05E3",
  _C = "\u05E9\u05DB\u05E4\u05DC",
  YC = "\u05D1\u05D8\u05DC",
  ZC =
    "\u05D4\u05E2\u05EA\u05E7 \u05E7\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4",
  XC =
    "\u05E6\u05D5\u05E8 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D1 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  qC =
    "\u05D4\u05E2\u05EA\u05E7 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D1 \u05DE\u05E9\u05EA\u05EA\u05E4\u05D9\u05DD",
  JC = "\u05E1\u05DE\u05DF",
  QC = "\u05DE\u05D7\u05E7",
  eD = "\u05E6\u05D9\u05D9\u05E8",
  tD = "\u05D7\u05E5",
  nD = "\u05D8\u05E7\u05E1\u05D8",
  oD = "\u05D3\u05D1\u05D9\u05E7\u05D9",
  rD = "\u05DE\u05E8\u05D5\u05D1\u05E2",
  sD = "\u05D0\u05DC\u05D9\u05E4\u05E1\u05D4",
  iD = "\u05DE\u05E9\u05D5\u05DC\u05E9",
  aD = "\u05E7\u05D5",
  lD = "\u05E1\u05D5\u05D1\u05D1",
  dD =
    "\u05E0\u05E2\u05DC \u05D9\u05D7\u05E1 \u05E8\u05D5\u05D7\u05D1-\u05D2\u05D5\u05D1\u05D4",
  cD =
    "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05EA \u05D9\u05D7\u05E1 \u05E8\u05D5\u05D7\u05D1-\u05D2\u05D5\u05D1\u05D4",
  pD = "\u05E7\u05D1\u05E5",
  uD = "\u05D1\u05D8\u05DC \u05E7\u05D9\u05D1\u05D5\u05E5",
  hD = "\u05D4\u05D1\u05D0 \u05DC\u05EA\u05D7\u05EA\u05D9\u05EA",
  mD = "\u05D4\u05D6\u05D6 \u05D0\u05D7\u05D5\u05E8\u05D4",
  gD = "\u05D4\u05D6\u05D6 \u05E7\u05D3\u05D9\u05DE\u05D4",
  fD = "\u05D4\u05D1\u05D0 \u05DC\u05D7\u05D6\u05D9\u05EA",
  SD = "\u05D0\u05E4\u05E1 \u05D6\u05D5\u05D5\u05D9\u05EA",
  bD = "\u05E0\u05E2\u05DC",
  TD = "\u05E9\u05D7\u05E8\u05E8 \u05E0\u05E2\u05D9\u05DC\u05D4",
  yD = "\u05D4\u05D6\u05D6 \u05DC\u05D3\u05E3",
  xD = "\u05D4\u05E4\u05D5\u05DA \u05D0\u05D5\u05E4\u05E7\u05D9\u05EA",
  wD = "\u05D4\u05E4\u05D5\u05DA \u05D0\u05E0\u05DB\u05D9\u05EA",
  kD = "\u05D4\u05D6\u05D6",
  vD = "\u05D4\u05D1\u05D0 \u05DC\u05E7\u05D3\u05D9\u05DE\u05D4",
  ID = "\u05E7\u05D3\u05D9\u05DE\u05D4",
  CD = "\u05D0\u05D7\u05D5\u05E8\u05D4",
  DD = "\u05D1\u05D7\u05D6\u05E8\u05D4",
  PD = "\u05E9\u05E4\u05D4",
  aa = {
    "style.menu.color": JI,
    "style.menu.fill": QI,
    "style.menu.dash": eC,
    "style.menu.size": tC,
    "style.menu.keep.open": nC,
    "style.menu.font": oC,
    "style.menu.align": rC,
    styles: sC,
    "zoom.in": iC,
    "zoom.out": aC,
    to: lC,
    "menu.file": dC,
    "menu.edit": cC,
    "menu.view": pC,
    "menu.preferences": uC,
    "menu.sign.in": hC,
    "menu.sign.out": mC,
    "become.a.sponsor": gC,
    "zoom.to.selection": fC,
    "zoom.to.fit": SC,
    "zoom.to": bC,
    "preferences.dark.mode": TC,
    "preferences.focus.mode": yC,
    "preferences.debug.mode": xC,
    "preferences.show.grid": wC,
    "preferences.use.cad.selection": kC,
    "preferences.keep.stylemenu.open": vC,
    "preferences.always.show.snaps": IC,
    "preferences.rotate.handles": CC,
    "preferences.binding.handles": DC,
    "preferences.clone.handles": PC,
    undo: MC,
    redo: BC,
    cut: EC,
    copy: RC,
    paste: AC,
    "copy.as": LC,
    "export.as": HC,
    "select.all": zC,
    "select.none": OC,
    delete: FC,
    "new.project": jC,
    open: GC,
    save: VC,
    "save.as": $C,
    "upload.media": NC,
    "create.page": WC,
    "new.page": UC,
    "page.name": KC,
    duplicate: _C,
    cancel: YC,
    "copy.invite.link": ZC,
    "create.multiplayer.project": XC,
    "copy.multiplayer.project": qC,
    select: JC,
    eraser: QC,
    draw: eD,
    arrow: tD,
    text: nD,
    sticky: oD,
    rectangle: rD,
    ellipse: sD,
    triangle: iD,
    line: aD,
    rotate: lD,
    "lock.aspect.ratio": dD,
    "unlock.aspect.ratio": cD,
    group: pD,
    ungroup: uD,
    "move.to.back": hD,
    "move.backward": mD,
    "move.forward": gD,
    "move.to.front": fD,
    "reset.angle": SD,
    lock: bD,
    unlock: TD,
    "move.to.page": yD,
    "flip.horizontal": xD,
    "flip.vertical": wD,
    move: kD,
    "to.front": vD,
    forward: ID,
    backward: CD,
    back: DD,
    language: PD,
  };
var MD = "Colore",
  BD = "Riempi",
  ED = "Tratteggo",
  RD = "Dimensione",
  AD = "Mantieni aperto",
  LD = "Font",
  HD = "Allineamento",
  zD = "Stile",
  OD = "Ingrandisci",
  FD = "Rimpicciolisci",
  jD = "Imposta",
  GD = "File",
  VD = "Modifica",
  $D = "Visualizzazione",
  ND = "Preferenze",
  WD = "Accedi",
  UD = "Esci",
  KD = "Sponsorizza",
  _D = "Adatta alla selezione",
  YD = "Adatta",
  ZD = "Ingrandisci",
  XD = "Modalit\xE0 scura",
  qD = "Modalit\xE0 zen",
  JD = "Modalit\xE0 sviluppatore",
  QD = "Mostra griglia",
  eP = "Selezione CAD",
  tP = "Mantieni menu stile aperto",
  nP = "Mostra sempre le guide",
  oP = "Controlli d'inclinazione",
  rP = "Controlli d'associazione",
  sP = "Controlli di clonazione",
  iP = "Annulla",
  aP = "Ripristina",
  lP = "Taglia",
  dP = "Copia",
  cP = "Incolla",
  pP = "Copia come",
  uP = "Esporta come",
  hP = "Seleziona tutto",
  mP = "Deseleziona tutto",
  gP = "Elimina",
  fP = "Nuovo progetto",
  SP = "Apri",
  bP = "Salva",
  TP = "Salva come",
  yP = "Carica contenuti multimediali",
  xP = "Crea nuova pagina",
  wP = "Nuova pagina",
  kP = "Nome pagina",
  vP = "Pagina",
  IP = "Duplica",
  CP = "Chiudi",
  DP = "Copia link invito",
  PP = "Crea progetto multiplayer",
  MP = "Trasforma in progetto multiplayer",
  BP = "Seleziona",
  EP = "Gomma",
  RP = "Matita",
  AP = "Freccia",
  LP = "Casella di testo",
  HP = "Post-it",
  zP = "Rettangolo",
  OP = "Ellisse",
  FP = "Triangolo",
  jP = "Linea",
  GP = "Ruota",
  VP = "Blocca rapporto lati",
  $P = "Sblocca rapporto lati",
  NP = "Raggruppa",
  WP = "Separa",
  UP = "Muovi in fondo",
  KP = "Sposta indietro",
  _P = "Sposta avanti",
  YP = "Muovi in fronte",
  ZP = "Reimposta angolo",
  XP = "Blocca",
  qP = "Sblocca",
  JP = "Trasferisci a pagina",
  QP = "Ribalta orizzontalmente",
  eM = "Ribalta verticalmente",
  tM = "Sposta",
  nM = "In primo piano",
  oM = "Sposta avanti",
  rM = "Sposta indietro",
  sM = "In fondo",
  iM = "Lingua",
  aM = "Posizione dock",
  lM = "In basso",
  dM = "Sinistra",
  cM = "Destra",
  pM = "In Alto",
  la = {
    "style.menu.color": MD,
    "style.menu.fill": BD,
    "style.menu.dash": ED,
    "style.menu.size": RD,
    "style.menu.keep.open": AD,
    "style.menu.font": LD,
    "style.menu.align": HD,
    styles: zD,
    "zoom.in": OD,
    "zoom.out": FD,
    to: jD,
    "menu.file": GD,
    "menu.edit": VD,
    "menu.view": $D,
    "menu.preferences": ND,
    "menu.sign.in": WD,
    "menu.sign.out": UD,
    "become.a.sponsor": KD,
    "zoom.to.selection": _D,
    "zoom.to.fit": YD,
    "zoom.to": ZD,
    "preferences.dark.mode": XD,
    "preferences.focus.mode": qD,
    "preferences.debug.mode": JD,
    "preferences.show.grid": QD,
    "preferences.use.cad.selection": eP,
    "preferences.keep.stylemenu.open": tP,
    "preferences.always.show.snaps": nP,
    "preferences.rotate.handles": oP,
    "preferences.binding.handles": rP,
    "preferences.clone.handles": sP,
    undo: iP,
    redo: aP,
    cut: lP,
    copy: dP,
    paste: cP,
    "copy.as": pP,
    "export.as": uP,
    "select.all": hP,
    "select.none": mP,
    delete: gP,
    "new.project": fP,
    open: SP,
    save: bP,
    "save.as": TP,
    "upload.media": yP,
    "create.page": xP,
    "new.page": wP,
    "page.name": kP,
    page: vP,
    duplicate: IP,
    cancel: CP,
    "copy.invite.link": DP,
    "create.multiplayer.project": PP,
    "copy.multiplayer.project": MP,
    select: BP,
    eraser: EP,
    draw: RP,
    arrow: AP,
    text: LP,
    sticky: HP,
    rectangle: zP,
    ellipse: OP,
    triangle: FP,
    line: jP,
    rotate: GP,
    "lock.aspect.ratio": VP,
    "unlock.aspect.ratio": $P,
    group: NP,
    ungroup: WP,
    "move.to.back": UP,
    "move.backward": KP,
    "move.forward": _P,
    "move.to.front": YP,
    "reset.angle": ZP,
    lock: XP,
    unlock: qP,
    "move.to.page": JP,
    "flip.horizontal": QP,
    "flip.vertical": eM,
    move: tM,
    "to.front": nM,
    forward: oM,
    backward: rM,
    back: sM,
    language: iM,
    "dock.position": aM,
    bottom: lM,
    left: dM,
    right: cM,
    top: pM,
  };
var uM = "\u8272",
  hM = "\u5857\u308A\u3064\u3076\u3057",
  mM = "\u7DDA",
  gM = "\u592A\u3055/\u30B5\u30A4\u30BA",
  fM = "\u5E38\u306B\u8868\u793A",
  SM = "\u30D5\u30A9\u30F3\u30C8",
  bM = "\u914D\u7F6E",
  TM = "\u30B9\u30BF\u30A4\u30EB",
  yM = "\u62E1\u5927",
  xM = "\u7E2E\u5C0F",
  wM = " ",
  kM = "\u30D5\u30A1\u30A4\u30EB",
  vM = "\u7DE8\u96C6",
  IM = "\u8868\u793A",
  CM = "\u8A2D\u5B9A",
  DM = "\u30B5\u30A4\u30F3\u30A4\u30F3",
  PM = "\u30B5\u30A4\u30F3\u30A2\u30A6\u30C8",
  MM = "\u652F\u63F4\u3059\u308B",
  BM =
    "\u9078\u629E\u3057\u305F\u30A2\u30A4\u30C6\u30E0\u306B\u5408\u308F\u305B\u3066\u62E1\u5927",
  EM = "\u62E1\u5927\u3057\u3066\u3059\u3079\u3066\u3092\u8868\u793A",
  RM = "\u62E1\u5927\u7387",
  AM = "\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9",
  LM = "\u30D5\u30A9\u30FC\u30AB\u30B9\u30E2\u30FC\u30C9",
  HM = "\u30C7\u30D0\u30C3\u30B0\u30E2\u30FC\u30C9",
  zM = "\u30B0\u30EA\u30C3\u30C9\u3092\u8868\u793A",
  OM = "CAD\u306E\u9078\u629E\u6CD5\u3092\u4F7F\u7528",
  FM =
    "\u30B9\u30BF\u30A4\u30EB\u30E1\u30CB\u30E5\u30FC\u3092\u5E38\u306B\u8868\u793A",
  jM = "\u30B9\u30CA\u30C3\u30D7\u3092\u5E38\u306B\u8868\u793A",
  GM = "\u56DE\u8EE2\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  VM = "\u7D50\u5408\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  $M = "\u30AF\u30ED\u30FC\u30F3\u30CF\u30F3\u30C9\u30EB\u3092\u8868\u793A",
  NM = "\u5143\u306B\u623B\u3059",
  WM = "\u3084\u308A\u76F4\u3057",
  UM = "\u5207\u308A\u53D6\u308A",
  KM = "\u30B3\u30D4\u30FC",
  _M = "\u8CBC\u308A\u4ED8\u3051",
  YM = "\u5F62\u5F0F\u3092\u9078\u629E\u3057\u3066\u30B3\u30D4\u30FC",
  ZM =
    "\u5F62\u5F0F\u3092\u9078\u629E\u3057\u3066\u30A8\u30AF\u30B9\u30DD\u30FC\u30C8",
  XM = "\u3059\u3079\u3066\u9078\u629E",
  qM = "\u9078\u629E\u3092\u89E3\u9664",
  JM = "\u524A\u9664",
  QM = "\u65B0\u3057\u3044\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
  eB = "\u958B\u304F",
  tB = "\u4FDD\u5B58",
  nB = "\u540D\u524D\u3092\u3064\u3051\u3066\u4FDD\u5B58",
  oB = "\u30E1\u30C7\u30A3\u30A2\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",
  rB = "\u30DA\u30FC\u30B8\u3092\u4F5C\u6210",
  sB = "\u65B0\u898F\u30DA\u30FC\u30B8",
  iB = "\u30DA\u30FC\u30B8\u540D",
  aB = "\u8907\u88FD",
  lB = "\u30AD\u30E3\u30F3\u30BB\u30EB",
  dB =
    "\u5171\u6709\u30EA\u30F3\u30AF\u3092\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC",
  cB =
    "\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u30E4\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210",
  pB =
    "\u30DE\u30EB\u30C1\u30D7\u30EC\u30A4\u30E4\u30FC\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u30B3\u30D4\u30FC",
  uB = "\u9078\u629E",
  hB = "\u6D88\u3057\u30B4\u30E0",
  mB = "\u63CF\u753B",
  gB = "\u77E2\u5370",
  fB = "\u30C6\u30AD\u30B9\u30C8",
  SB = "\u3075\u305B\u3093",
  bB = "\u9577\u65B9\u5F62",
  TB = "\u6955\u5186\u5F62",
  yB = "\u4E09\u89D2\u5F62",
  xB = "\u7DDA",
  wB = "\u56DE\u8EE2",
  kB = "\u7E26\u6A2A\u6BD4\u3092\u56FA\u5B9A",
  vB = "\u7E26\u6A2A\u6BD4\u306E\u56FA\u5B9A\u3092\u89E3\u9664",
  IB = "\u30B0\u30EB\u30FC\u30D4\u30F3\u30B0",
  CB = "\u30B0\u30EB\u30FC\u30D7\u89E3\u9664",
  DB = "\u6700\u80CC\u9762\u306B\u79FB\u52D5",
  PB = "\u3072\u3068\u3064\u5F8C\u308D\u306B\u79FB\u52D5",
  MB = "\u3072\u3068\u3064\u524D\u306B\u79FB\u52D5",
  BB = "\u6700\u524D\u9762\u306B\u79FB\u52D5",
  EB = "\u89D2\u5EA6\u3092\u521D\u671F\u5316",
  RB = "\u30ED\u30C3\u30AF",
  AB = "\u30A2\u30F3\u30ED\u30C3\u30AF",
  LB = "\u30DA\u30FC\u30B8\u3078\u79FB\u52D5",
  HB = "\u6C34\u5E73\u65B9\u5411\u306B\u53CD\u8EE2",
  zB = "\u5782\u76F4\u65B9\u5411\u306B\u53CD\u8EE2",
  OB = "\u79FB\u52D5",
  FB = "\u6700\u524D\u9762\u3078",
  jB = "\u3072\u3068\u3064\u524D\u3078",
  GB = "\u3072\u3068\u3064\u5F8C\u308D\u3078",
  VB = "\u6700\u80CC\u9762\u3078",
  $B = "\u8A00\u8A9E",
  da = {
    "style.menu.color": uM,
    "style.menu.fill": hM,
    "style.menu.dash": mM,
    "style.menu.size": gM,
    "style.menu.keep.open": fM,
    "style.menu.font": SM,
    "style.menu.align": bM,
    styles: TM,
    "zoom.in": yM,
    "zoom.out": xM,
    to: wM,
    "menu.file": kM,
    "menu.edit": vM,
    "menu.view": IM,
    "menu.preferences": CM,
    "menu.sign.in": DM,
    "menu.sign.out": PM,
    "become.a.sponsor": MM,
    "zoom.to.selection": BM,
    "zoom.to.fit": EM,
    "zoom.to": RM,
    "preferences.dark.mode": AM,
    "preferences.focus.mode": LM,
    "preferences.debug.mode": HM,
    "preferences.show.grid": zM,
    "preferences.use.cad.selection": OM,
    "preferences.keep.stylemenu.open": FM,
    "preferences.always.show.snaps": jM,
    "preferences.rotate.handles": GM,
    "preferences.binding.handles": VM,
    "preferences.clone.handles": $M,
    undo: NM,
    redo: WM,
    cut: UM,
    copy: KM,
    paste: _M,
    "copy.as": YM,
    "export.as": ZM,
    "select.all": XM,
    "select.none": qM,
    delete: JM,
    "new.project": QM,
    open: eB,
    save: tB,
    "save.as": nB,
    "upload.media": oB,
    "create.page": rB,
    "new.page": sB,
    "page.name": iB,
    duplicate: aB,
    cancel: lB,
    "copy.invite.link": dB,
    "create.multiplayer.project": cB,
    "copy.multiplayer.project": pB,
    select: uB,
    eraser: hB,
    draw: mB,
    arrow: gB,
    text: fB,
    sticky: SB,
    rectangle: bB,
    ellipse: TB,
    triangle: yB,
    line: xB,
    rotate: wB,
    "lock.aspect.ratio": kB,
    "unlock.aspect.ratio": vB,
    group: IB,
    ungroup: CB,
    "move.to.back": DB,
    "move.backward": PB,
    "move.forward": MB,
    "move.to.front": BB,
    "reset.angle": EB,
    lock: RB,
    unlock: AB,
    "move.to.page": LB,
    "flip.horizontal": HB,
    "flip.vertical": zB,
    move: OB,
    "to.front": FB,
    forward: jB,
    backward: GB,
    back: VB,
    language: $B,
  };
var NB = "\uC0C9\uAE54",
  WB = "\uCC44\uC6B0\uAE30",
  UB = "\uD14C\uB450\uB9AC",
  KB = "\uD06C\uAE30",
  _B = "\uD56D\uC0C1 \uC5F4\uAE30",
  YB = "\uAE00\uAF34",
  ZB = "\uC815\uB82C",
  XB = "\uC2A4\uD0C0\uC77C",
  qB = "\uD655\uB300",
  JB = "\uCD95\uC18C",
  QB = "To",
  eE = "\uB3C4\uAD6C",
  tE = "\uBCC0\uD658",
  nE = "\uD30C\uC77C",
  oE = "\uD3B8\uC9D1",
  rE = "\uBCF4\uAE30",
  sE = "\uC124\uC815",
  iE = "\uB85C\uADF8\uC778",
  aE = "\uB85C\uADF8\uC544\uC6C3",
  lE = "\uD6C4\uC6D0\uC790 \uB418\uAE30",
  dE = "\uCEE8\uD150\uCE20\uB85C \uB3CC\uC544\uAC00\uAE30",
  cE = "\uC120\uD0DD \uC694\uC18C\uC5D0 \uB9DE\uCD94\uAE30",
  pE = "\uC804\uCCB4\uC5D0 \uB9DE\uCD94\uAE30",
  uE = "\uB9DE\uCD94\uAE30",
  hE = "\uB2E4\uD06C \uBAA8\uB4DC",
  mE = "\uC9D1\uC911 \uBAA8\uB4DC",
  gE = "\uB514\uBC84\uADF8 \uBAA8\uB4DC",
  fE = "\uACA9\uC790 \uBCF4\uAE30",
  SE = "CAD \uC120\uD0DD \uC0AC\uC6A9",
  bE = "\uC2A4\uD0C0\uC77C \uBA54\uB274 \uD56D\uC0C1 \uC5F4\uAE30",
  TE = "Snap \uD56D\uC0C1 \uC5F4\uAE30",
  yE = "\uD68C\uC804 \uBCF4\uC774\uAE30",
  xE = "\uBC14\uC778\uB529 \uBCF4\uC774\uAE30",
  wE = "\uBCF5\uC81C \uBCF4\uC774\uAE30",
  kE = "\uC2E4\uD589\uCDE8\uC18C",
  vE = "\uC7AC\uC2E4\uD589",
  IE = "\uC790\uB974\uAE30",
  CE = "\uBCF5\uC0AC",
  DE = "\uBD99\uC5EC\uB123\uAE30",
  PE = "\uC774\uBBF8\uC9C0\uB85C \uBCF5\uC0AC",
  ME = "\uB0B4\uBCF4\uB0B4\uAE30",
  BE = "\uC804\uCCB4 \uC120\uD0DD",
  EE = "\uC120\uD0DD \uD574\uC81C",
  RE = "\uC0AD\uC81C",
  AE = "\uC0C8 \uD504\uB85C\uC81D\uD2B8",
  LE = "\uC5F4\uAE30",
  HE = "\uC800\uC7A5",
  zE = "\uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uC800\uC7A5",
  OE = "\uBBF8\uB514\uC5B4 \uC5C5\uB85C\uB4DC",
  FE = "\uC0C8 \uD398\uC774\uC9C0 \uC0DD\uC131",
  jE = "\uC0C8 \uD398\uC774\uC9C0",
  GE = "\uD398\uC774\uC9C0 \uC774\uB984",
  VE = "\uBCF5\uC81C",
  $E = "\uCDE8\uC18C",
  NE = "\uCD08\uB300 \uB9C1\uD06C \uBCF5\uC0AC",
  WE = "\uC77D\uAE30 \uC804\uC6A9 \uB9C1\uD06C \uBCF5\uC0AC",
  UE = "\uC2E4\uC2DC\uAC04 \uD611\uC5C5 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131",
  KE =
    "\uC2E4\uC2DC\uAC04 \uD611\uC5C5 \uD504\uB85C\uC81D\uD2B8\uB85C \uBCF5\uC81C",
  _E = "\uC120\uD0DD",
  YE = "\uC9C0\uC6B0\uAC1C",
  ZE = "\uD39C",
  XE = "\uD654\uC0B4\uD45C",
  qE = "\uD14D\uC2A4\uD2B8",
  JE = "\uC2A4\uD2F0\uD0A4\uB178\uD2B8",
  QE = "\uC0AC\uAC01\uD615",
  e2 = "\uC6D0",
  t2 = "\uC0BC\uAC01\uD615",
  n2 = "\uC120",
  o2 = "\uD68C\uC804",
  r2 = "\uBE44\uC728 \uC7A0\uAE08",
  s2 = "\uBE44\uC728 \uC7A0\uAE08 \uD574\uC81C",
  i2 = "\uADF8\uB8F9\uD654",
  a2 = "\uADF8\uB8F9\uD654 \uD574\uC81C",
  l2 = "\uB9E8 \uB4A4\uB85C \uBCF4\uB0B4\uAE30",
  d2 = "\uB4A4\uB85C \uBCF4\uB0B4\uAE30",
  c2 = "\uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  p2 = "\uB9E8 \uC55E\uC73C\uB85C \uAC00\uC838\uC624\uAE30",
  u2 = "\uD68C\uC804 \uCD08\uAE30\uD654",
  h2 = "\uC7A0\uAE08",
  m2 = "\uC7A0\uAE08 \uD574\uC81C",
  g2 = "\uC815\uB82C / \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  f2 = "\uD398\uC774\uC9C0\uB85C \uC774\uB3D9",
  S2 = "\uC88C\uC6B0 \uB300\uCE6D",
  b2 = "\uC0C1\uD558 \uB300\uCE6D",
  T2 = "\uC21C\uC11C",
  y2 = "\uB9E8 \uC55E\uC73C\uB85C",
  x2 = "\uC55E\uC73C\uB85C",
  w2 = "\uB4A4\uB85C",
  k2 = "\uB9E8 \uB4A4\uB85C",
  v2 = "\uC5B8\uC5B4",
  I2 = "\uB354 \uC54C\uC544\uBCF4\uAE30",
  C2 = "\uB3C5 \uC704\uCE58",
  D2 = "\uD558\uB2E8",
  P2 = "\uC67C\uCABD",
  M2 = "\uC624\uB978\uCABD",
  B2 = "\uC0C1\uB2E8",
  E2 = "\uD398\uC774\uC9C0",
  R2 = "\uD0A4\uBCF4\uB4DC \uB2E8\uCD95\uD0A4",
  A2 = "\uAC80\uC0C9",
  L2 = "\uB85C\uB529{dots}",
  H2 = "\uBC30\uACBD \uB0B4\uBCF4\uB0B4\uAE30",
  z2 = "\uD22C\uBA85",
  O2 = "\uC790\uB3D9",
  F2 = "\uB77C\uC774\uD2B8",
  j2 = "\uB2E4\uD06C",
  G2 = "Github",
  V2 = "Twitter",
  $2 = "Discord",
  N2 = "\uC774\uBBF8\uC9C0",
  W2 = "\uC67C\uCABD \uC815\uB82C",
  U2 = "\uC218\uD3C9 \uC911\uC559 \uC815\uB82C",
  K2 = "\uC624\uB978\uCABD \uC815\uB82C",
  _2 = "\uC0C1\uB2E8 \uC815\uB82C",
  Y2 = "\uC218\uC9C1 \uC911\uC559 \uC815\uB82C",
  Z2 = "\uD558\uB2E8 \uC815\uB82C",
  X2 = "\uAC00\uB85C \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  q2 = "\uC138\uB85C \uAC04\uACA9 \uB9DE\uCD94\uAE30",
  J2 = "\uC218\uD3C9\uC73C\uB85C \uB298\uB9AC\uAE30",
  Q2 = "\uC218\uC9C1\uC73C\uB85C \uB298\uB9AC\uAE30",
  eR =
    "\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uB97C \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  tR =
    "\uBCC0\uACBD\uC0AC\uD56D\uC744 \uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC5D0 \uC800\uC7A5\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?",
  nR = "\uCDE8\uC18C",
  oR = "\uC544\uB2C8\uC624",
  rR = "\uB124",
  sR = "\uD30C\uC77C \uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694",
  iR = "\uC0C8\uB85C\uC6B4 tldraw\uB97C \uC0AC\uC6A9\uD574\uBCF4\uC138\uC694",
  ca = {
    "style.menu.color": NB,
    "style.menu.fill": WB,
    "style.menu.dash": UB,
    "style.menu.size": KB,
    "style.menu.keep.open": _B,
    "style.menu.font": YB,
    "style.menu.align": ZB,
    styles: XB,
    "zoom.in": qB,
    "zoom.out": JB,
    to: QB,
    "menu.tools": eE,
    "menu.transform": tE,
    "menu.file": nE,
    "menu.edit": oE,
    "menu.view": rE,
    "menu.preferences": sE,
    "menu.sign.in": iE,
    "menu.sign.out": aE,
    "become.a.sponsor": lE,
    "zoom.to.content": dE,
    "zoom.to.selection": cE,
    "zoom.to.fit": pE,
    "zoom.to": uE,
    "preferences.dark.mode": hE,
    "preferences.focus.mode": mE,
    "preferences.debug.mode": gE,
    "preferences.show.grid": fE,
    "preferences.use.cad.selection": SE,
    "preferences.keep.stylemenu.open": bE,
    "preferences.always.show.snaps": TE,
    "preferences.rotate.handles": yE,
    "preferences.binding.handles": xE,
    "preferences.clone.handles": wE,
    undo: kE,
    redo: vE,
    cut: IE,
    copy: CE,
    paste: DE,
    "copy.as": PE,
    "export.as": ME,
    "select.all": BE,
    "select.none": EE,
    delete: RE,
    "new.project": AE,
    open: LE,
    save: HE,
    "save.as": zE,
    "upload.media": OE,
    "create.page": FE,
    "new.page": jE,
    "page.name": GE,
    duplicate: VE,
    cancel: $E,
    "copy.invite.link": NE,
    "copy.readonly.link": WE,
    "create.multiplayer.project": UE,
    "copy.multiplayer.project": KE,
    select: _E,
    eraser: YE,
    draw: ZE,
    arrow: XE,
    text: qE,
    sticky: JE,
    rectangle: QE,
    ellipse: e2,
    triangle: t2,
    line: n2,
    rotate: o2,
    "lock.aspect.ratio": r2,
    "unlock.aspect.ratio": s2,
    group: i2,
    ungroup: a2,
    "move.to.back": l2,
    "move.backward": d2,
    "move.forward": c2,
    "move.to.front": p2,
    "reset.angle": u2,
    lock: h2,
    unlock: m2,
    "align.distribute": g2,
    "move.to.page": f2,
    "flip.horizontal": S2,
    "flip.vertical": b2,
    move: T2,
    "to.front": y2,
    forward: x2,
    backward: w2,
    back: k2,
    language: v2,
    "translation.link": I2,
    "dock.position": C2,
    bottom: D2,
    left: P2,
    right: M2,
    top: B2,
    page: E2,
    "keyboard.shortcuts": R2,
    search: A2,
    loading: L2,
    "export.background": H2,
    transparent: z2,
    auto: O2,
    light: F2,
    dark: j2,
    github: G2,
    twitter: V2,
    discord: $2,
    image: N2,
    "align.left": W2,
    "align.center.x": U2,
    "align.right": K2,
    "align.top": _2,
    "align.center.y": Y2,
    "align.bottom": Z2,
    "distribute.x": X2,
    "distribute.y": q2,
    "stretch.x": J2,
    "stretch.y": Q2,
    "dialog.save.firsttime": eR,
    "dialog.save.again": tR,
    "dialog.cancel": nR,
    "dialog.no": oR,
    "dialog.yes": rR,
    "enter.file.name": sR,
    "tldraw-beta": iR,
  };
var aR = "\u0631\u06D5\u0646\u06AF",
  lR = "\u067E\u0695\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  dR = "\u0644\u06D5\u062A \u0644\u06D5\u062A",
  cR = "\u0642\u06D5\u0628\u0627\u0631\u06D5",
  pR =
    "\u0628\u06D5 \u06A9\u0631\u0627\u0648\u06D5\u06CC\u06CC \u0628\u0645\u06CE\u0646\u06D5\u0631\u06D5\u0648\u06D5",
  uR = "\u0647\u06CE\u06B5",
  hR = "\u0695\u06CE\u06A9\u062E\u0633\u062A\u0646",
  mR = "\u0646\u06D5\u062E\u0634\u06D5\u06A9\u0627\u0646",
  gR =
    "\u0647\u06CE\u0646\u0627\u0646\u06D5 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  fR = "\u062F\u0648\u0648\u0631 \u062E\u0633\u062A\u0646\u06D5\u0648\u06D5",
  SR = "\u0628\u06C6",
  bR = "\u0626\u0627\u0645\u0631\u0627\u0632\u06D5\u06A9\u0627\u0646",
  TR = "\u06AF\u06C6\u0695\u06CC\u0646",
  yR = "\u0641\u0627\u06CC\u0644\u06CE\u06A9",
  xR = "\u062F\u06D5\u0633\u062A\u06A9\u0627\u0631\u06CC",
  wR = "\u062F\u06CC\u0645\u06D5\u0646",
  kR = "\u062E\u0648\u0627\u0633\u062A",
  vR =
    "\u0686\u0648\u0648\u0646\u06D5 \u0698\u0648\u0648\u0631\u06D5\u0648\u06D5",
  IR = "\u062F\u06D5\u0631\u0686\u0648\u0648\u0646",
  CR = "\u0633\u067E\u06C6\u0646\u0633\u06D5\u0631 \u0628\u06D5",
  DR =
    "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0646\u0627\u0648\u06D5\u0695\u06C6\u06A9",
  PR =
    "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u0646",
  MR =
    "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6 \u0626\u06D5\u0648\u06D5\u06CC \u0644\u06D5\u06AF\u06D5\u06B5\u06CC\u062F\u0627 \u0628\u06AF\u0648\u0646\u062C\u06CE\u062A",
  BR = "\u0632\u0648\u0648\u0645 \u0628\u06A9\u06D5 \u0628\u06C6",
  ER = "\u062F\u06C6\u062E\u06CC \u062A\u0627\u0631\u06CC\u06A9",
  RR = "\u062F\u06C6\u062E\u06CC \u0641\u06C6\u06A9\u06D5\u0633",
  AR =
    "\u0645\u06C6\u062F\u06CC \u0647\u06D5\u06B5\u06D5\u062F\u06C6\u0632\u06CC\u0646",
  LR =
    "\u062A\u06C6\u0695\u06CC \u067E\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5",
  HR =
    "\u0628\u06D5\u06A9\u0627\u0631\u0628\u0647\u06CE\u0646\u06D5 CAD \u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u0646\u06CC",
  zR =
    "\u0645\u06CE\u0646\u06C6\u06CC \u0633\u062A\u0627\u06CC\u0644 \u0628\u06D5 \u06A9\u0631\u0627\u0648\u06D5\u06CC\u06CC \u0628\u0647\u06CE\u06B5\u06D5\u0631\u06D5\u0648\u06D5",
  OR =
    "\u0647\u06D5\u0645\u06CC\u0634\u06D5 \u0648\u06CE\u0646\u06D5\u06CC \u062E\u06CE\u0631\u0627 \u067E\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5",
  FR =
    "\u0633\u0648\u0631\u0627\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  jR =
    "\u0628\u06D5\u0633\u062A\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  GR =
    "\u06A9\u0644\u06C6\u0646 \u06A9\u0631\u062F\u0646\u06CC \u062F\u06D5\u0633\u062A\u06D5\u06A9\u0627\u0646",
  VR = "\u067E\u0627\u0634\u06D5\u06A9\u0634\u06D5 \u0628\u06A9\u06D5",
  $R =
    "\u062F\u0648\u0648\u0628\u0627\u0631\u06D5 \u0628\u06CC\u06A9\u06D5\u0631\u06D5\u0648\u06D5",
  NR = "\u0628\u0695\u06CC\u0646",
  WR = "\u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  UR = "\u067E\u06D5\u06CC\u0633\u062A \u0628\u06A9\u06D5",
  KR = "\u06A9\u06C6\u067E\u06CC \u0648\u06D5\u06A9",
  _R =
    "\u0647\u06D5\u0646\u0627\u0631\u062F\u06D5\u06A9\u0631\u062F\u0646 \u0648\u06D5\u06A9",
  YR =
    "\u0647\u06D5\u0645\u0648\u0648\u06CC\u0627\u0646 \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u0647",
  ZR =
    "\u0647\u06CC\u0686 \u0647\u0647\u200C\u06B5\u0645\u0647\u200C\u0628\u0698\u06CE\u0631\u0647\u200C",
  XR = "\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5",
  qR = "\u067E\u0695\u06C6\u0698\u06D5\u06CC \u0646\u0648\u06CE",
  JR = "\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  QR = "\u0647\u06D5\u06B5\u06AF\u0631\u062A\u0646",
  eA = "\u0647\u06D5\u06B5\u06AF\u0631\u062A\u0646 \u0648\u06D5\u06A9",
  tA =
    "\u062F\u0627\u06AF\u0631\u062A\u0646\u06CC \u0645\u06CC\u062F\u06CC\u0627",
  nA =
    "\u062F\u0631\u0648\u0633\u062A\u06A9\u0631\u062F\u0646\u06CC \u0644\u0627\u067E\u06D5\u0695\u06D5",
  oA = "\u0644\u0627\u067E\u06D5\u0695\u06D5\u06CC \u0646\u0648\u06CE",
  rA = "\u0646\u0627\u0648\u06CC \u0644\u0627\u067E\u06D5\u0695\u06D5",
  sA =
    "\u062F\u0648\u0648\u0628\u0627\u0631\u06D5\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  iA = "\u0695\u06D5\u062A\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  aA =
    "\u0644\u06CC\u0646\u06A9\u06CC \u0628\u0627\u0646\u06AF\u0647\u06CE\u0634\u062A\u06A9\u0631\u062F\u0646 \u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  lA =
    "\u0628\u06D5 \u0634\u06CE\u0648\u06D5\u06CC\u06D5\u06A9\u06CC \u0647\u06D5\u0695\u06D5\u0645\u06D5\u06A9\u06CC \u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5",
  dA =
    "\u062F\u0631\u0648\u0633\u062A\u06A9\u0631\u062F\u0646\u06CC \u067E\u0631\u06C6\u0698\u06D5\u06CC \u0641\u0631\u06D5 \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631",
  cA =
    "\u06A9\u06C6\u067E\u06CC \u0628\u06A9\u06D5 \u0628\u06C6 \u067E\u0695\u06C6\u0698\u06D5\u06CC\u06D5\u06A9\u06CC \u0641\u0631\u06D5 \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631",
  pA =
    "\u062F\u06D5\u0633\u0646\u06CC\u0627\u0634\u0646\u06A9\u0631\u062F\u0646",
  uA = "\u0633\u0695\u06D5\u0631\u06D5\u0648\u06D5",
  hA = "\u0648\u06CE\u0646\u06D5\u06A9\u06CE\u0634\u0627\u0646",
  mA = "\u062A\u06CC\u0631",
  gA = "\u062F\u06D5\u0642",
  fA = "\u0686\u06D5\u0633\u067E\u0627\u0648",
  SA = "\u0644\u0627\u06A9\u06CE\u0634\u06D5",
  bA = "\u0628\u06CC\u0628\u0644\u06CC",
  TA = "\u0633\u06CE\u06AF\u06C6\u0634\u06D5",
  yA = "\u0647\u06CE\u06B5",
  xA = "\u0633\u0648\u0695\u0627\u0646\u06D5\u0648\u06D5",
  wA =
    "\u0642\u0641\u06B5\u06A9\u0631\u062F\u0646\u06CC \u0695\u06CE\u0698\u06D5\u06CC \u0695\u0648\u0648\u0628\u06D5\u0631\u06CC",
  kA =
    "\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5\u06CC \u0695\u06CE\u0698\u06D5\u06CC \u0695\u0648\u0648\u0628\u06D5\u0631\u06CC",
  vA = "\u06A9\u06C6\u0645\u06D5\u06B5\u06D5",
  IA =
    "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u06A9\u06C6\u0645\u06D5\u06B5\u06D5",
  CA = "\u0628\u0686\u06C6 \u0628\u06C6 \u067E\u0634\u062A\u06D5\u0648\u06D5",
  DA = "\u0628\u06D5\u0631\u06D5\u0648 \u062F\u0648\u0627\u0648\u06D5",
  PA = "\u0628\u0695\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  MA =
    "\u0628\u06AF\u0648\u0627\u0632\u0631\u06CE\u062A\u06D5\u0648\u06D5 \u0628\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  BA =
    "\u06AF\u06C6\u0634\u06D5\u06CC \u067E\u0634\u0648\u0648\u062F\u0627\u0646",
  EA = "\u0642\u0648\u0641\u06B5",
  RA = "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0642\u0648\u0641\u06B5",
  AA = "\u0628\u0686\u06C6 \u0628\u06C6 \u0644\u0627\u067E\u06D5\u0695\u06D5",
  LA =
    "\u0626\u0627\u0633\u06C6\u06CC\u06CC \u0648\u06D5\u0631\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646",
  HA =
    "\u0633\u062A\u0648\u0646\u06CC \u0648\u06D5\u0631\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646",
  zA = "\u062C\u0648\u0648\u06B5\u06D5",
  OA = "\u0628\u06C6 \u067E\u06CE\u0634\u06D5\u0648\u06D5",
  FA = "\u0628\u06C6\u067E\u0634\u062A\u06D5\u0648\u06D5",
  jA = "\u0628\u06C6\u062F\u0648\u0627\u0648\u06D5",
  GA = "\u06AF\u06D5\u0695\u0627\u0646\u06D5\u0648\u06D5",
  VA = "\u0632\u0645\u0627\u0646",
  $A =
    "\u0628\u06D5\u0633\u062A\u06D5\u0631\u06CC \u0648\u06D5\u0631\u06AF\u06CE\u0695\u0627\u0646",
  NA = "\u0634\u0648\u06CE\u0646\u06CC \u062F\u06C6\u06A9",
  WA = "\u062E\u0648\u0627\u0631\u06D5\u0648\u06D5",
  UA = "\u0686\u06D5\u067E",
  KA = "\u0695\u0627\u0633\u062A",
  _A = "\u0633\u06D5\u0631\u0648\u0648",
  YA = "\u0644\u0627\u067E\u06D5\u0695\u06D5",
  ZA =
    "\u06A9\u0648\u0631\u062A\u06A9\u0631\u0627\u0648\u06D5\u06A9\u0627\u0646\u06CC \u062A\u06D5\u062E\u062A\u06D5\u06A9\u0644\u06CC\u0644",
  XA = "\u06AF\u06D5\u0695\u0627\u0646",
  qA = "\u0628\u0627\u0631\u06A9\u0631\u062F\u0646",
  JA =
    "\u067E\u0627\u0634\u062E\u0627\u0646\u06CC \u0647\u06D5\u0646\u0627\u0631\u062F\u06D5\u06A9\u0631\u062F\u0646",
  QA = "\u0695\u0648\u0648\u0646",
  eL = "\u0626\u06C6\u062A\u06C6\u0645\u0627\u062A\u06CC\u06A9\u06CC",
  tL = "\u0631\u0648\u0648\u0646\u0627\u06A9",
  nL = "\u062A\u0627\u0631\u06CC\u06A9",
  pa = {
    "style.menu.color": aR,
    "style.menu.fill": lR,
    "style.menu.dash": dR,
    "style.menu.size": cR,
    "style.menu.keep.open": pR,
    "style.menu.font": uR,
    "style.menu.align": hR,
    styles: mR,
    "zoom.in": gR,
    "zoom.out": fR,
    to: SR,
    "menu.tools": bR,
    "menu.transform": TR,
    "menu.file": yR,
    "menu.edit": xR,
    "menu.view": wR,
    "menu.preferences": kR,
    "menu.sign.in": vR,
    "menu.sign.out": IR,
    "become.a.sponsor": CR,
    "zoom.to.content": DR,
    "zoom.to.selection": PR,
    "zoom.to.fit": MR,
    "zoom.to": BR,
    "preferences.dark.mode": ER,
    "preferences.focus.mode": RR,
    "preferences.debug.mode": AR,
    "preferences.show.grid": LR,
    "preferences.use.cad.selection": HR,
    "preferences.keep.stylemenu.open": zR,
    "preferences.always.show.snaps": OR,
    "preferences.rotate.handles": FR,
    "preferences.binding.handles": jR,
    "preferences.clone.handles": GR,
    undo: VR,
    redo: $R,
    cut: NR,
    copy: WR,
    paste: UR,
    "copy.as": KR,
    "export.as": _R,
    "select.all": YR,
    "select.none": ZR,
    delete: XR,
    "new.project": qR,
    open: JR,
    save: QR,
    "save.as": eA,
    "upload.media": tA,
    "create.page": nA,
    "new.page": oA,
    "page.name": rA,
    duplicate: sA,
    cancel: iA,
    "copy.invite.link": aA,
    "copy.readonly.link": lA,
    "create.multiplayer.project": dA,
    "copy.multiplayer.project": cA,
    select: pA,
    eraser: uA,
    draw: hA,
    arrow: mA,
    text: gA,
    sticky: fA,
    rectangle: SA,
    ellipse: bA,
    triangle: TA,
    line: yA,
    rotate: xA,
    "lock.aspect.ratio": wA,
    "unlock.aspect.ratio": kA,
    group: vA,
    ungroup: IA,
    "move.to.back": CA,
    "move.backward": DA,
    "move.forward": PA,
    "move.to.front": MA,
    "reset.angle": BA,
    lock: EA,
    unlock: RA,
    "move.to.page": AA,
    "flip.horizontal": LA,
    "flip.vertical": HA,
    move: zA,
    "to.front": OA,
    forward: FA,
    backward: jA,
    back: GA,
    language: VA,
    "translation.link": $A,
    "dock.position": NA,
    bottom: WA,
    left: UA,
    right: KA,
    top: _A,
    page: YA,
    "keyboard.shortcuts": ZA,
    search: XA,
    loading: qA,
    "export.background": JA,
    transparent: QA,
    auto: eL,
    light: tL,
    dark: nL,
  };
var oL = "Color",
  rL = "Fill",
  sL = "Dash",
  iL = "Size",
  aL = "Keep Open",
  lL = "Font",
  dL = "Align",
  cL = "Styles",
  pL = "Zoom In",
  uL = "Zoom Out",
  hL = "To",
  mL = "Tools",
  gL = "Transform",
  fL = "File",
  SL = "Edit",
  bL = "View",
  TL = "Preferences",
  yL = "Sign In",
  xL = "Sign Out",
  wL = "Become a Sponsor",
  kL = "Back to content",
  vL = "Zoom to Selection",
  IL = "Zoom to Fit",
  CL = "Zoom to",
  DL = "Dark Mode",
  PL = "Focus Mode",
  ML = "Debug Mode",
  BL = "Show Grid",
  EL = "Use CAD Selection",
  RL = "Keep Style Menu Open",
  AL = "Always Show Snaps",
  LL = "Rotate Handles",
  HL = "Binding Handles",
  zL = "Clone Handles",
  OL = "Undo",
  FL = "Redo",
  jL = "Cut",
  GL = "Copy",
  VL = "Paste",
  $L = "Copy As",
  NL = "Export As",
  WL = "Select All",
  UL = "Select None",
  KL = "Delete",
  _L = "New Project",
  YL = "Open",
  ZL = "Save",
  XL = "Save As",
  qL = "Upload Media",
  JL = "Create Page",
  QL = "New Page",
  e5 = "Page Name",
  t5 = "Duplicate",
  n5 = "Shape Options",
  o5 = "Shapes",
  r5 = "Cancel",
  s5 = "Copy Invite Link",
  i5 = "Copy ReadOnly Link",
  a5 = "Create a Multiplayer Project",
  l5 = "Copy to Multiplayer Project",
  d5 = "Select",
  c5 = "Eraser",
  p5 = "Draw",
  u5 = "Arrow",
  h5 = "Text",
  m5 = "Sticky",
  g5 = "Rectangle",
  f5 = "Ellipse",
  S5 = "Triangle",
  b5 = "Line",
  T5 = "Rotate",
  y5 = "Lock Aspect Ratio",
  x5 = "Unlock Aspect Ratio",
  w5 = "Group",
  k5 = "Ungroup",
  v5 = "Move to Back",
  I5 = "Move Backward",
  C5 = "Move Forward",
  D5 = "Move to Front",
  P5 = "Reset Angle",
  M5 = "Lock",
  B5 = "Unlock",
  E5 = "Align / Distribute",
  R5 = "Move to Page",
  A5 = "Flip Horizontal",
  L5 = "Flip Vertical",
  H5 = "Move",
  z5 = "To Front",
  O5 = "Forward",
  F5 = "Backward",
  j5 = "To Back",
  G5 = "Language",
  V5 = "Learn More",
  $5 = "Dock Position",
  N5 = "Bottom",
  W5 = "Left",
  U5 = "Right",
  K5 = "Top",
  _5 = "Page",
  Y5 = "Keyboard shortcuts",
  Z5 = "Search",
  X5 = "Loading{dots}",
  q5 = "Export Background",
  J5 = "Transparent",
  Q5 = "Auto",
  e3 = "Light",
  t3 = "Dark",
  n3 = "Github",
  o3 = "Twitter",
  r3 = "Discord",
  s3 = "Image",
  i3 = "Align Left",
  a3 = "Align Horizontal Center",
  l3 = "Align Right",
  d3 = "Align Top",
  c3 = "Align Vertical Center",
  p3 = "Align Bottom",
  u3 = "Distribute Horizontal",
  h3 = "Distribute Vertical",
  m3 = "Stretch Horizontal",
  g3 = "Stretch Vertical",
  f3 = "Do you want to save your current project?",
  S3 = "Do you want to save changes to your current project?",
  b3 = "Cancel",
  T3 = "No",
  y3 = "Yes",
  x3 = "Enter file name",
  w3 = "Try the new tldraw",
  k3 = "White",
  v3 = "Light gray",
  I3 = "Gray",
  C3 = "Black",
  D3 = "Green",
  P3 = "Cyan",
  M3 = "Blue",
  B3 = "Indigo",
  E3 = "Violet",
  R3 = "Red",
  A3 = "Orange",
  L3 = "Yellow",
  H3 = "Solid",
  z3 = "Dashed",
  O3 = "Dotted",
  F3 = "Small",
  j3 = "Medium",
  G3 = "Large",
  ua = {
    "style.menu.color": oL,
    "style.menu.fill": rL,
    "style.menu.dash": sL,
    "style.menu.size": iL,
    "style.menu.keep.open": aL,
    "style.menu.font": lL,
    "style.menu.align": dL,
    styles: cL,
    "zoom.in": pL,
    "zoom.out": uL,
    to: hL,
    "menu.tools": mL,
    "menu.transform": gL,
    "menu.file": fL,
    "menu.edit": SL,
    "menu.view": bL,
    "menu.preferences": TL,
    "menu.sign.in": yL,
    "menu.sign.out": xL,
    "become.a.sponsor": wL,
    "zoom.to.content": kL,
    "zoom.to.selection": vL,
    "zoom.to.fit": IL,
    "zoom.to": CL,
    "preferences.dark.mode": DL,
    "preferences.focus.mode": PL,
    "preferences.debug.mode": ML,
    "preferences.show.grid": BL,
    "preferences.use.cad.selection": EL,
    "preferences.keep.stylemenu.open": RL,
    "preferences.always.show.snaps": AL,
    "preferences.rotate.handles": LL,
    "preferences.binding.handles": HL,
    "preferences.clone.handles": zL,
    undo: OL,
    redo: FL,
    cut: jL,
    copy: GL,
    paste: VL,
    "copy.as": $L,
    "export.as": NL,
    "select.all": WL,
    "select.none": UL,
    delete: KL,
    "new.project": _L,
    open: YL,
    save: ZL,
    "save.as": XL,
    "upload.media": qL,
    "create.page": JL,
    "new.page": QL,
    "page.name": e5,
    duplicate: t5,
    "shape.options": n5,
    shapes: o5,
    cancel: r5,
    "copy.invite.link": s5,
    "copy.readonly.link": i5,
    "create.multiplayer.project": a5,
    "copy.multiplayer.project": l5,
    select: d5,
    eraser: c5,
    draw: p5,
    arrow: u5,
    text: h5,
    sticky: m5,
    rectangle: g5,
    ellipse: f5,
    triangle: S5,
    line: b5,
    rotate: T5,
    "lock.aspect.ratio": y5,
    "unlock.aspect.ratio": x5,
    group: w5,
    ungroup: k5,
    "move.to.back": v5,
    "move.backward": I5,
    "move.forward": C5,
    "move.to.front": D5,
    "reset.angle": P5,
    lock: M5,
    unlock: B5,
    "align.distribute": E5,
    "move.to.page": R5,
    "flip.horizontal": A5,
    "flip.vertical": L5,
    move: H5,
    "to.front": z5,
    forward: O5,
    backward: F5,
    back: j5,
    language: G5,
    "translation.link": V5,
    "dock.position": $5,
    bottom: N5,
    left: W5,
    right: U5,
    top: K5,
    page: _5,
    "keyboard.shortcuts": Y5,
    search: Z5,
    loading: X5,
    "export.background": q5,
    transparent: J5,
    auto: Q5,
    light: e3,
    dark: t3,
    github: n3,
    twitter: o3,
    discord: r3,
    image: s3,
    "align.left": i3,
    "align.center.x": a3,
    "align.right": l3,
    "align.top": d3,
    "align.center.y": c3,
    "align.bottom": p3,
    "distribute.x": u3,
    "distribute.y": h3,
    "stretch.x": m3,
    "stretch.y": g3,
    "dialog.save.firsttime": f3,
    "dialog.save.again": S3,
    "dialog.cancel": b3,
    "dialog.no": T3,
    "dialog.yes": y3,
    "enter.file.name": x3,
    "tldraw-beta": w3,
    white: k3,
    lightGray: v3,
    gray: I3,
    black: C3,
    green: D3,
    cyan: P3,
    blue: M3,
    indigo: B3,
    violet: E3,
    red: R3,
    orange: A3,
    yellow: L3,
    solid: H3,
    dashed: z3,
    dotted: O3,
    small: F3,
    medium: j3,
    large: G3,
  };
var V3 = "\u1021\u101B\u1031\u102C\u1004\u103A",
  $3 =
    "\u1021\u101B\u1031\u102C\u1004\u103A \u1011\u100A\u103A\u1037\u1019\u100A\u103A",
  N3 = "\u1019\u103B\u1025\u103A\u1038\u1005\u1000\u103A",
  W3 = "\u1021\u101B\u103D\u101A\u103A\u1021\u1005\u102C\u1038",
  U3 = "\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  K3 = "\u1005\u102C\u101E\u102C\u1038\u1016\u1031\u102C\u1004\u103A\u1037",
  _3 = "\u1021\u1011\u102C\u1038\u1021\u101E\u102D\u102F",
  Y3 = "\u1005\u1010\u102D\u102F\u1004\u103A",
  Z3 =
    "\u1021\u1000\u103C\u102E\u1038\u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  X3 =
    "\u1015\u103C\u1014\u103A\u1000\u103B\u1025\u103A\u1038\u1019\u100A\u103A",
  q3 = "\u101E\u102D\u102F\u1037",
  J3 = "\u1000\u102D\u101B\u102D\u101A\u102C\u1019\u103B\u102C\u1038",
  Q3 =
    "\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u100A\u103A\u101B\u1014\u103A",
  e8 = "\u1016\u102D\u102F\u1004\u103A",
  t8 = "\u1015\u103C\u102F\u1015\u103C\u1004\u103A",
  n8 = "\u1021\u1019\u103C\u1004\u103A",
  o8 = "\u1006\u1000\u103A\u1010\u1004\u103A",
  r8 = "\u101D\u1004\u103A\u1019\u100A\u103A",
  s8 = "\u1011\u103D\u1000\u103A\u1019\u100A\u103A",
  i8 =
    "\u1004\u103D\u1031\u1000\u103C\u1031\u1038\u1011\u1031\u102C\u1000\u103A\u1015\u1036\u1019\u100A\u103A",
  a8 =
    "\u1015\u1004\u103A\u1019\u1014\u1031\u101B\u102C\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101E\u103D\u102C\u1038\u1019\u100A\u103A",
  l8 =
    "\u101B\u103D\u1031\u1038\u1011\u102C\u1038\u101E\u1031\u102C \u1014\u1031\u101B\u102C\u101E\u102D\u102F\u1037 \u1021\u102C\u101B\u102F\u1036\u1015\u103C\u102F\u1019\u100A\u103A",
  d8 =
    "\u1021\u1036\u1000\u102D\u102F\u1000\u103A\u1016\u103C\u1005\u103A\u1021\u1031\u102C\u1004\u103A \u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  c8 =
    "\u1015\u102F\u1036\u1019\u103E\u1014\u103A\u1006\u102D\u102F\u1012\u103A\u101E\u102D\u102F\u1037 \u1001\u103B\u1032\u1037\u1019\u100A\u103A",
  p8 = "\u1021\u1019\u103E\u1031\u102C\u1004\u103A \u1019\u102F\u1012\u103A",
  u8 =
    "\u101B\u103E\u1004\u103A\u1038\u101B\u103E\u1004\u103A\u1038\u101C\u1004\u103A\u1038\u101C\u1004\u103A\u1038 \u1019\u102F\u1012\u103A",
  h8 = "\u1005\u1019\u103A\u1038\u101E\u1015\u103A \u1019\u102F\u1012\u103A",
  m8 =
    "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1007\u101A\u102C\u1038\u1000\u103D\u1000\u103A\u1015\u103C\u101B\u1014\u103A",
  g8 =
    "CAD \u1000\u1032\u1037\u101E\u102D\u102F\u1037 \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1019\u103E\u102F \u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1019\u100A\u103A",
  f8 =
    "\u1005\u1010\u102D\u102F\u1004\u103A\u101C\u103A \u1019\u102E\u1014\u1030\u1038\u1000\u102D\u102F \u1021\u1019\u103C\u1032\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  S8 = "Always Show Snaps",
  b8 = "Rotate Handles",
  T8 = "Binding Handles",
  y8 = "Clone Handles",
  x8 =
    "\u1014\u1002\u102D\u102F\u1019\u1030\u101C\u101E\u102D\u102F\u1037 \u1015\u103C\u1014\u103A\u101C\u102F\u1015\u103A\u101B\u1014\u103A",
  w8 = "\u1015\u103C\u1014\u103A\u101C\u102F\u1015\u103A\u101B\u1014\u103A",
  k8 = "\u1016\u103C\u1010\u103A\u101A\u1030",
  v8 = "\u1000\u1030\u1038\u101A\u1030",
  I8 = "\u1000\u1030\u1038\u101E\u103D\u1004\u103A\u1038",
  C8 =
    "\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A\u1037 \u1015\u102F\u1036\u1005\u1036",
  D8 =
    "\u1011\u102F\u1010\u103A\u1001\u103B\u1004\u103A\u101E\u100A\u103A\u1037 \u1015\u102F\u1036\u1005\u1036",
  P8 =
    "\u1021\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u101B\u1014\u103A",
  M8 =
    "\u1010\u1005\u103A\u1001\u102F\u1019\u103E \u1019\u101B\u103D\u1031\u1038\u1010\u1031\u102C\u1037\u1015\u102B",
  B8 = "\u1016\u103B\u1000\u103A\u1019\u100A\u103A",
  E8 =
    "\u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A \u1021\u101E\u1005\u103A",
  R8 = "\u1016\u103D\u1004\u103A\u1037\u1019\u100A\u103A",
  A8 = "\u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A",
  L8 =
    "\u1021\u1001\u103C\u102C\u1038\u101E\u1031\u102C \u1015\u102F\u1036\u1005\u1036\u1016\u103C\u1004\u103A\u1037 \u101E\u102D\u1019\u103A\u1038\u1019\u100A\u103A",
  H8 =
    "\u1019\u102E\u1012\u102E\u101A\u102C\u1016\u102D\u102F\u1004\u103A\u1019\u103B\u102C\u1038 \u1010\u1004\u103A\u1019\u100A\u103A",
  z8 =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u101E\u1005\u103A\u1016\u103D\u1004\u103A\u1037\u1019\u100A\u103A",
  O8 =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u101E\u1005\u103A",
  F8 =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C \u1021\u1019\u100A\u103A",
  j8 = "\u1015\u103D\u102C\u1038\u1019\u100A\u103A",
  G8 = "\u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
  V8 =
    "\u1016\u102D\u1010\u103A\u1000\u103C\u102C\u1038\u101B\u1014\u103A \u101C\u1004\u103A\u1037\u1001\u103A\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  $8 =
    "\u1000\u103C\u100A\u103A\u1037\u101B\u1030\u101B\u1014\u103A\u1021\u1010\u103D\u1000\u103A\u101E\u102C \u101C\u1004\u103A\u1037\u1001\u103A\u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  N8 =
    "\u1021\u1019\u103B\u102C\u1038\u101E\u102F\u1036\u1038 \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1021\u1016\u103C\u1005\u103A \u1021\u101E\u1005\u103A\u1016\u1014\u103A\u1010\u102E\u1038\u1019\u100A\u103A",
  W8 =
    "\u1021\u1019\u103B\u102C\u1038\u101E\u102F\u1036\u1038 \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1021\u1016\u103C\u1005\u103A\u101E\u102D\u102F\u1037 \u1000\u1030\u1038\u101A\u1030\u1019\u100A\u103A",
  U8 = "\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1019\u103E\u102F",
  K8 = "\u1001\u1032\u1016\u103B\u1000\u103A",
  _8 = "\u1001\u1032\u1010\u1036",
  Y8 = "\u1019\u103C\u103E\u102C\u1038",
  Z8 = "\u1005\u102C\u101E\u102C\u1038",
  X8 =
    "\u1000\u1015\u103A\u1001\u103D\u102C\u1019\u103E\u1010\u103A\u1005\u102F",
  q8 = "\u101C\u1031\u1011\u1031\u102C\u1004\u103A\u1037",
  J8 = "\u1018\u1032\u1025",
  Q8 = "\u1010\u103C\u102D\u1002\u1036",
  e6 = "\u1019\u103B\u1025\u103A\u1038",
  t6 = "\u101C\u103E\u100A\u103A\u1037\u1019\u100A\u103A",
  n6 =
    "\u1021\u1001\u103B\u102D\u102F\u1038\u1021\u1005\u102C\u1038 \u1011\u102D\u1014\u103A\u1038\u1011\u102C\u1038\u1019\u100A\u103A",
  o6 =
    "\u1021\u1001\u103B\u102D\u102F\u1038\u1021\u1005\u102C\u1038 \u1019\u1011\u102D\u1014\u103A\u1038\u1010\u1031\u102C\u1037\u1015\u102B",
  r6 = "\u1021\u102F\u1015\u103A\u1005\u102F\u1016\u103D\u1032\u1037",
  s6 = "\u1021\u102F\u1015\u103A\u1005\u102F\u1001\u103D\u1032",
  i6 =
    "\u1014\u1031\u102C\u1000\u103A\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037 \u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  a6 =
    "\u1014\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037 \u1010\u1005\u103A\u1006\u1004\u103A\u1037\u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  l6 =
    "\u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037 \u1010\u1005\u103A\u1006\u1004\u103A\u1037\u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  d6 =
    "\u101B\u103E\u1031\u1037\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037 \u1015\u102D\u102F\u1037\u1019\u100A\u103A",
  c6 =
    "\u1014\u1002\u102D\u102F\u1019\u1030\u101C \u1011\u1031\u102C\u1004\u103A\u1037\u1001\u103B\u102D\u102F\u1038\u1005\u102C\u1038\u101E\u102D\u102F\u1037\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1019\u100A\u103A",
  p6 = "\u1001\u1010\u103A\u1011\u102C\u1038\u1019\u100A\u103A",
  u6 = "\u1016\u103D\u1004\u103A\u1037\u1011\u102C\u1038\u1019\u100A\u103A",
  h6 =
    "\u1014\u1031\u101B\u102C \u1021\u1011\u102C\u1038\u1021\u101E\u102D\u102F/ \u1021\u1006\u1014\u103A\u1037\u1021\u1000\u103B\u102F\u1036\u1037",
  m6 =
    "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C\u1010\u1005\u103A\u1001\u102F\u101E\u102D\u102F\u1037 \u101B\u103D\u1031\u1038\u1019\u100A\u103A",
  g6 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u101C\u103E\u1014\u103A\u1019\u100A\u103A",
  f6 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u101C\u103E\u1014\u103A\u1019\u100A\u103A",
  S6 = "\u101B\u103D\u1031\u1037\u1019\u100A\u103A",
  b6 =
    "\u101B\u103E\u1031\u1037\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037",
  T6 = "\u101B\u103E\u1031\u1037\u1010\u1005\u103A\u1006\u1004\u103A\u1037",
  y6 =
    "\u1014\u1031\u102C\u1000\u103A\u1010\u1005\u103A\u1006\u1004\u103A\u1037",
  x6 =
    "\u1014\u1031\u102C\u1000\u103A\u1006\u102F\u1036\u1038\u101E\u102D\u102F\u1037",
  w6 = "\u1018\u102C\u101E\u102C\u1005\u1000\u102C\u1038",
  k6 =
    "\u1015\u102D\u102F\u1019\u102D\u102F\u104D \u101C\u1031\u1037\u101C\u102C\u101B\u1014\u103A",
  v6 =
    "\u1000\u102D\u101B\u102D\u101A\u102C \u1021\u1014\u1031\u1021\u1011\u102C\u1038",
  I6 = "\u1021\u1031\u102C\u1000\u103A",
  C6 = "\u1018\u101A\u103A",
  D6 = "\u100A\u102C",
  P6 = "\u1011\u102D\u1015\u103A",
  M6 = "\u1005\u102C\u1019\u103B\u1000\u103A\u1014\u103E\u102C",
  B6 = "Keyboard shortcuts",
  E6 = "\u101B\u103E\u102C\u1016\u103D\u1031\u101B\u1014\u103A",
  R6 =
    "\u1001\u100F\u1005\u1031\u102C\u1004\u103A\u1037\u1015\u1031\u1038\u101B\u1014\u103A{dots}",
  A6 =
    "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1011\u102F\u1010\u103A\u101A\u1030\u1019\u100A\u103A",
  L6 =
    "\u1014\u1031\u102C\u1000\u103A\u1001\u1036 \u1021\u1000\u103C\u100A\u103A",
  H6 = "Auto",
  z6 = "\u1021\u101C\u1004\u103A\u1038",
  O6 = "\u1021\u1019\u103E\u1031\u102C\u1004\u103A",
  F6 = "Github",
  j6 = "Twitter",
  G6 = "Discord",
  V6 = "\u1013\u102C\u1010\u103A\u1015\u102F\u1036",
  $6 =
    "\u1018\u101A\u103A\u1016\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  N6 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1017\u101F\u102D\u102F\u1006\u102E\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  W6 =
    "\u100A\u102C\u1016\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  U6 =
    "\u1021\u1015\u1031\u102B\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  K6 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1017\u101F\u102D\u102F\u1006\u102E\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  _6 =
    "\u1021\u1031\u102C\u1000\u103A\u101E\u102D\u102F\u1037 \u100A\u103E\u102D\u101B\u1014\u103A",
  Y6 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1016\u103C\u1014\u103A\u1037\u101B\u1014\u103A",
  Z6 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1016\u103C\u1014\u103A\u1037\u101B\u1014\u103A",
  X6 =
    "\u1021\u101C\u103B\u102C\u1038\u101C\u102D\u102F\u1000\u103A \u1006\u103D\u1032\u1006\u1014\u103A\u1037\u101B\u1014\u103A",
  q6 =
    "\u1012\u1031\u102B\u1004\u103A\u101C\u102D\u102F\u1000\u103A \u1006\u103D\u1032\u1006\u1014\u103A\u1037\u101B\u1014\u103A",
  J6 =
    "\u101A\u1001\u102F \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1000\u102D\u102F \u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u101C\u102D\u102F\u1015\u102B\u101E\u101C\u102C\u1038 ?",
  Q6 =
    "\u101A\u1001\u102F \u1015\u101B\u1031\u102C\u1002\u103B\u1000\u103A\u1010\u103D\u1004\u103A \u1015\u103C\u1004\u103A\u1011\u102C\u1038\u101E\u1031\u102C \u1021\u1015\u103C\u1031\u102C\u1004\u103A\u1038\u1021\u101C\u100A\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F \u1021\u1010\u100A\u103A\u1015\u103C\u102F \u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u101C\u102D\u102F\u1015\u102B\u101E\u101C\u102C\u1038?",
  eH =
    "\u1018\u102C\u1019\u103E \u1019\u101C\u102F\u1015\u103A\u1010\u1031\u102C\u1037\u1015\u102B",
  tH = "\u1019\u101C\u102D\u102F\u1010\u1031\u102C\u1037\u1015\u102B",
  nH = "\u101C\u102D\u102F\u1015\u102B\u101E\u100A\u103A",
  oH =
    "\u1016\u102D\u102F\u1004\u103A\u1014\u102C\u1019\u100A\u103A \u1011\u100A\u103A\u1037\u101E\u103D\u1004\u103A\u1038\u101B\u1014\u103A",
  rH =
    "tldraw \u1021\u101E\u1005\u103A\u1005\u1019\u103A\u1038\u101E\u102F\u1036\u1038\u1000\u103C\u100A\u103A\u1037\u101B\u1014\u103A",
  ha = {
    "style.menu.color": V3,
    "style.menu.fill": $3,
    "style.menu.dash": N3,
    "style.menu.size": W3,
    "style.menu.keep.open": U3,
    "style.menu.font": K3,
    "style.menu.align": _3,
    styles: Y3,
    "zoom.in": Z3,
    "zoom.out": X3,
    to: q3,
    "menu.tools": J3,
    "menu.transform": Q3,
    "menu.file": e8,
    "menu.edit": t8,
    "menu.view": n8,
    "menu.preferences": o8,
    "menu.sign.in": r8,
    "menu.sign.out": s8,
    "become.a.sponsor": i8,
    "zoom.to.content": a8,
    "zoom.to.selection": l8,
    "zoom.to.fit": d8,
    "zoom.to": c8,
    "preferences.dark.mode": p8,
    "preferences.focus.mode": u8,
    "preferences.debug.mode": h8,
    "preferences.show.grid": m8,
    "preferences.use.cad.selection": g8,
    "preferences.keep.stylemenu.open": f8,
    "preferences.always.show.snaps": S8,
    "preferences.rotate.handles": b8,
    "preferences.binding.handles": T8,
    "preferences.clone.handles": y8,
    undo: x8,
    redo: w8,
    cut: k8,
    copy: v8,
    paste: I8,
    "copy.as": C8,
    "export.as": D8,
    "select.all": P8,
    "select.none": M8,
    delete: B8,
    "new.project": E8,
    open: R8,
    save: A8,
    "save.as": L8,
    "upload.media": H8,
    "create.page": z8,
    "new.page": O8,
    "page.name": F8,
    duplicate: j8,
    cancel: G8,
    "copy.invite.link": V8,
    "copy.readonly.link": $8,
    "create.multiplayer.project": N8,
    "copy.multiplayer.project": W8,
    select: U8,
    eraser: K8,
    draw: _8,
    arrow: Y8,
    text: Z8,
    sticky: X8,
    rectangle: q8,
    ellipse: J8,
    triangle: Q8,
    line: e6,
    rotate: t6,
    "lock.aspect.ratio": n6,
    "unlock.aspect.ratio": o6,
    group: r6,
    ungroup: s6,
    "move.to.back": i6,
    "move.backward": a6,
    "move.forward": l6,
    "move.to.front": d6,
    "reset.angle": c6,
    lock: p6,
    unlock: u6,
    "align.distribute": h6,
    "move.to.page": m6,
    "flip.horizontal": g6,
    "flip.vertical": f6,
    move: S6,
    "to.front": b6,
    forward: T6,
    backward: y6,
    back: x6,
    language: w6,
    "translation.link": k6,
    "dock.position": v6,
    bottom: I6,
    left: C6,
    right: D6,
    top: P6,
    page: M6,
    "keyboard.shortcuts": B6,
    search: E6,
    loading: R6,
    "export.background": A6,
    transparent: L6,
    auto: H6,
    light: z6,
    dark: O6,
    github: F6,
    twitter: j6,
    discord: G6,
    image: V6,
    "align.left": $6,
    "align.center.x": N6,
    "align.right": W6,
    "align.top": U6,
    "align.center.y": K6,
    "align.bottom": _6,
    "distribute.x": Y6,
    "distribute.y": Z6,
    "stretch.x": X6,
    "stretch.y": q6,
    "dialog.save.firsttime": J6,
    "dialog.save.again": Q6,
    "dialog.cancel": eH,
    "dialog.no": tH,
    "dialog.yes": nH,
    "enter.file.name": oH,
    "tldraw-beta": rH,
  };
var sH = "Farge",
  iH = "Fyll",
  aH = "Linje",
  lH = "St\xF8rrelse",
  dH = "Hold \xE5pen",
  cH = "Teksttype",
  pH = "Juster",
  uH = "Stiler",
  hH = "Zoom inn",
  mH = "Zoom ut",
  gH = "til",
  fH = "Fil",
  SH = "Rediger",
  bH = "Vis",
  TH = "Preferanser",
  yH = "Logg inn",
  xH = "Logg ut",
  wH = "Bli en sponsor",
  kH = "Zoom til valg",
  vH = "Zoom for \xE5 passe",
  IH = "Zoom til",
  CH = "M\xF8rk modus",
  DH = "Fokus modus",
  PH = "Debug modus",
  MH = "Vis rutenett",
  BH = "Bruk CAD seleksjon",
  EH = "Hold stilmeny \xE5pen",
  RH = "Vis alltid snaps",
  AH = "Vis roteringsh\xE5ndtak",
  LH = "Vis bindingsh\xE5ndtak",
  HH = "Vis kloningsh\xE5ndtak",
  zH = "Angre",
  OH = "Gj\xF8r om",
  FH = "Klipp ut",
  jH = "Kopier",
  GH = "Lim inn",
  VH = "Kopier som",
  $H = "Eksporter som",
  NH = "Velg alle",
  WH = "Velg ingen",
  UH = "Slett",
  KH = "Nytt prosjekt",
  _H = "\xC5pne",
  YH = "Lagre",
  ZH = "Lagre som",
  XH = "Last opp media",
  qH = "Opprett side",
  JH = "Ny side",
  QH = "Sidenavn",
  e4 = "Dupliser",
  t4 = "Avbryt",
  n4 = "Kopier invitasjonslink",
  o4 = "Opprett et flerspiller prosjekt",
  r4 = "Kopier til flerspiller prosjekt",
  s4 = "Velg",
  i4 = "Viskel\xE6r",
  a4 = "Tegn",
  l4 = "Pil",
  d4 = "Tekst",
  c4 = "Lapp",
  p4 = "Rektangel",
  u4 = "Ellipse",
  h4 = "Trekant",
  m4 = "Linje",
  g4 = "Roter",
  f4 = "L\xE5s st\xF8rrelsesforhold",
  S4 = "L\xE5s opp st\xF8rrelsesforhold",
  b4 = "Grupper",
  T4 = "Avgrupper",
  y4 = "Flytt bakerst",
  x4 = "Flytt bakover",
  w4 = "Flytt forover",
  k4 = "Flytt til front",
  v4 = "Tilbakestill vinkel",
  I4 = "L\xE5s",
  C4 = "L\xE5s opp",
  D4 = "Flytt til side",
  P4 = "Snu horisontalt",
  M4 = "Snu vertikalt",
  B4 = "Flytt",
  E4 = "Foran",
  R4 = "Framover",
  A4 = "Bakover",
  L4 = "Bakerst",
  H4 = "Spr\xE5k",
  ma = {
    "style.menu.color": sH,
    "style.menu.fill": iH,
    "style.menu.dash": aH,
    "style.menu.size": lH,
    "style.menu.keep.open": dH,
    "style.menu.font": cH,
    "style.menu.align": pH,
    styles: uH,
    "zoom.in": hH,
    "zoom.out": mH,
    to: gH,
    "menu.file": fH,
    "menu.edit": SH,
    "menu.view": bH,
    "menu.preferences": TH,
    "menu.sign.in": yH,
    "menu.sign.out": xH,
    "become.a.sponsor": wH,
    "zoom.to.selection": kH,
    "zoom.to.fit": vH,
    "zoom.to": IH,
    "preferences.dark.mode": CH,
    "preferences.focus.mode": DH,
    "preferences.debug.mode": PH,
    "preferences.show.grid": MH,
    "preferences.use.cad.selection": BH,
    "preferences.keep.stylemenu.open": EH,
    "preferences.always.show.snaps": RH,
    "preferences.rotate.handles": AH,
    "preferences.binding.handles": LH,
    "preferences.clone.handles": HH,
    undo: zH,
    redo: OH,
    cut: FH,
    copy: jH,
    paste: GH,
    "copy.as": VH,
    "export.as": $H,
    "select.all": NH,
    "select.none": WH,
    delete: UH,
    "new.project": KH,
    open: _H,
    save: YH,
    "save.as": ZH,
    "upload.media": XH,
    "create.page": qH,
    "new.page": JH,
    "page.name": QH,
    duplicate: e4,
    cancel: t4,
    "copy.invite.link": n4,
    "create.multiplayer.project": o4,
    "copy.multiplayer.project": r4,
    select: s4,
    eraser: i4,
    draw: a4,
    arrow: l4,
    text: d4,
    sticky: c4,
    rectangle: p4,
    ellipse: u4,
    triangle: h4,
    line: m4,
    rotate: g4,
    "lock.aspect.ratio": f4,
    "unlock.aspect.ratio": S4,
    group: b4,
    ungroup: T4,
    "move.to.back": y4,
    "move.backward": x4,
    "move.forward": w4,
    "move.to.front": k4,
    "reset.angle": v4,
    lock: I4,
    unlock: C4,
    "move.to.page": D4,
    "flip.horizontal": P4,
    "flip.vertical": M4,
    move: B4,
    "to.front": E4,
    forward: R4,
    backward: A4,
    back: L4,
    language: H4,
  };
var z4 = "\u0930\u0902\u0917",
  O4 = "\u092D\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  F4 = "\u0927\u0930\u094D\u0915\u093E",
  j4 = "\u0906\u0915\u093E\u0930",
  G4 =
    "\u0916\u0941\u0932\u093E \u0930\u093E\u0916\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  V4 = "\u092B\u0928\u094D\u091F",
  $4 = "\u092A\u0919\u094D\u0915\u094D\u0924\u093F\u092C\u0926\u094D\u0927",
  N4 = "\u0936\u0948\u0932\u0940\u0939\u0930\u0942",
  W4 = "\u091C\u0941\u092E \u0907\u0928",
  U4 = "\u091C\u0941\u092E \u0906\u0909\u091F",
  K4 = "\u091F\u0941",
  _4 = "\u092B\u093E\u0907\u0932",
  Y4 =
    "\u0938\u092E\u094D\u092A\u093E\u0926\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Z4 = "\u092D\u094D\u092F\u0942",
  X4 =
    "\u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E\u0939\u0930\u0942",
  q4 =
    "\u0938\u093E\u0907\u0928 \u0907\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  J4 =
    "\u0938\u093E\u0907\u0928 \u0906\u0909\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Q4 =
    "\u092A\u094D\u0930\u093E\u092F\u094B\u091C\u0915 \u092C\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  ez =
    "\u091C\u0941\u092E \u091F\u0941 \u0938\u0947\u0932\u0947\u0915\u094D\u0938\u0928",
  tz = "\u091C\u0941\u092E \u091F\u0941 \u092B\u093F\u091F",
  nz = "\u091C\u0941\u092E \u091F\u0941",
  oz = "\u0905\u0901\u0927\u094D\u092F\u093E\u0930\u094B \u092E\u094B\u0921",
  rz = "\u092B\u094B\u0915\u0938 \u092E\u094B\u0921",
  sz = "\u0921\u093F\u092C\u0917 \u092E\u094B\u0921",
  iz =
    "\u0917\u094D\u0930\u093F\u0921 \u0926\u0947\u0916\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  az =
    "CAD \u0938\u0947\u0932\u0947\u0915\u094D\u0938\u0928 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  lz =
    "\u0938\u094D\u091F\u093E\u0907\u0932 \u092E\u0947\u0928\u0941 \u0916\u0941\u0932\u093E \u0930\u093E\u0916\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  dz =
    "\u0938\u0927\u0948\u0901 \u0938\u094D\u0928\u094D\u092F\u093E\u092A\u0939\u0930\u0942 \u0926\u0947\u0916\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  cz =
    "\u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942 \u0918\u0941\u092E\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  pz =
    "\u092C\u093E\u0907\u0928\u094D\u0921\u093F\u0919 \u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942",
  uz =
    "\u0915\u094D\u0932\u094B\u0928 \u0939\u094D\u092F\u093E\u0928\u094D\u0921\u0932\u0939\u0930\u0942",
  hz =
    "\u092A\u0942\u0930\u094D\u0935\u0935\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  mz =
    "\u092A\u0941\u0928\u0903 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  gz = "\u0915\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  fz =
    "\u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Sz =
    "\u092A\u0947\u0938\u094D\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  bz = "\u0915\u092A\u093F \u090F\u091C",
  Tz = "\u090F\u0915\u094D\u0938\u092A\u094B\u0930\u094D\u091F \u090F\u091C",
  yz =
    "\u0938\u092C\u0948 \u091B\u093E\u0928\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  xz =
    "\u0915\u0947\u0939\u093F \u092A\u0928\u093F \u0938\u0947\u0932\u0947\u0915\u094D\u091F \u0928\u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  wz = "\u092E\u0947\u091F\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  kz =
    "\u0928\u092F\u093E\u0901 \u092A\u0930\u093F\u092F\u094B\u091C\u0928\u093E",
  vz = "\u0916\u094B\u0932\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Iz =
    "\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Cz = "\u0938\u0947\u092D \u090F\u091C",
  Dz =
    "\u092E\u093F\u0921\u093F\u092F\u093E \u0905\u092A\u0932\u094B\u0921 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Pz =
    "\u092A\u0943\u0937\u094D\u0920 \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Mz =
    "\u0928\u092F\u093E\u0901 \u092A\u0943\u0937\u094D\u0920 \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Bz = "\u092A\u0943\u0937\u094D\u0920\u0915\u094B \u0928\u093E\u092E",
  Ez =
    "\u0905\u0928\u0941\u0932\u093F\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Rz =
    "\u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Az =
    "\u0928\u093F\u092E\u0928\u094D\u0924\u094D\u0930\u0923\u093E \u0932\u093F\u0919\u094D\u0915 \u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Lz =
    "\u092E\u0932\u094D\u091F\u093F\u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u0930\u093F\u092F\u094B\u091C\u0928\u093E \u0938\u093F\u0930\u094D\u091C\u0928\u093E \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Hz =
    "\u092E\u0932\u094D\u091F\u093F\u092A\u094D\u0932\u0947\u092F\u0930 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u092E\u093E \u0915\u092A\u093F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  zz = "\u0938\u0947\u0932\u0947\u0915\u094D\u091F",
  Oz = "\u0907\u0930\u0947\u091C\u0930",
  Fz = "\u091A\u093F\u0924\u094D\u0930 \u092C\u0928\u093E\u0909\u0928\u0941",
  jz = "\u0924\u0940\u0930",
  Gz = "\u0936\u092C\u094D\u0926",
  Vz = "\u091F\u093E\u0901\u0938\u093F\u0928\u0947",
  $z = "\u0906\u092F\u0924",
  Nz = "\u0926\u0940\u0930\u094D\u0918\u0935\u0943\u0924\u094D\u0924",
  Wz = "\u0924\u094D\u0930\u093F\u092D\u0941\u091C",
  Uz = "\u0930\u0947\u0916\u093E",
  Kz = "\u0918\u0941\u092E\u093E\u0909\u0928\u0941\u0939\u094B\u0938\u094D",
  _z =
    "\u0906\u0915\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Yz =
    "\u0906\u0915\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0905\u0928\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Zz = "\u0938\u092E\u0942\u0939",
  Xz =
    "\u0938\u092E\u0942\u0939 \u0930\u0926\u094D\u0926 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  qz =
    "\u092A\u091B\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Jz =
    "\u0925\u092A \u092A\u091B\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  Qz =
    "\u0905\u0917\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  e9 =
    "\u0925\u092A \u0905\u0917\u093E\u0921\u093F \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  t9 =
    "\u0915\u094B\u0923 \u0930\u093F\u0938\u0947\u091F \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  n9 = "\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  o9 =
    "\u0905\u0928\u0932\u0915 \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  r9 =
    "\u092A\u0943\u0937\u094D\u0920\u092E\u093E \u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  s9 =
    "\u0924\u0947\u0930\u094D\u0938\u094B \u092B\u094D\u0932\u093F\u092A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  i9 =
    "\u0920\u093E\u0921\u094B \u092B\u094D\u0932\u093F\u092A \u0917\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  a9 = "\u0938\u093E\u0930\u094D\u0928\u0941\u0939\u094B\u0938\u094D",
  l9 = "\u0925\u092A \u0905\u0917\u093E\u0921\u093F",
  d9 = "\u0905\u0917\u093E\u0921\u093F",
  c9 = "\u092A\u091B\u093E\u0921\u093F",
  p9 = "\u0925\u092A \u092A\u091B\u093E\u0921\u093F",
  u9 = "\u092D\u093E\u0937\u093E",
  ga = {
    "style.menu.color": z4,
    "style.menu.fill": O4,
    "style.menu.dash": F4,
    "style.menu.size": j4,
    "style.menu.keep.open": G4,
    "style.menu.font": V4,
    "style.menu.align": $4,
    styles: N4,
    "zoom.in": W4,
    "zoom.out": U4,
    to: K4,
    "menu.file": _4,
    "menu.edit": Y4,
    "menu.view": Z4,
    "menu.preferences": X4,
    "menu.sign.in": q4,
    "menu.sign.out": J4,
    "become.a.sponsor": Q4,
    "zoom.to.selection": ez,
    "zoom.to.fit": tz,
    "zoom.to": nz,
    "preferences.dark.mode": oz,
    "preferences.focus.mode": rz,
    "preferences.debug.mode": sz,
    "preferences.show.grid": iz,
    "preferences.use.cad.selection": az,
    "preferences.keep.stylemenu.open": lz,
    "preferences.always.show.snaps": dz,
    "preferences.rotate.handles": cz,
    "preferences.binding.handles": pz,
    "preferences.clone.handles": uz,
    undo: hz,
    redo: mz,
    cut: gz,
    copy: fz,
    paste: Sz,
    "copy.as": bz,
    "export.as": Tz,
    "select.all": yz,
    "select.none": xz,
    delete: wz,
    "new.project": kz,
    open: vz,
    save: Iz,
    "save.as": Cz,
    "upload.media": Dz,
    "create.page": Pz,
    "new.page": Mz,
    "page.name": Bz,
    duplicate: Ez,
    cancel: Rz,
    "copy.invite.link": Az,
    "create.multiplayer.project": Lz,
    "copy.multiplayer.project": Hz,
    select: zz,
    eraser: Oz,
    draw: Fz,
    arrow: jz,
    text: Gz,
    sticky: Vz,
    rectangle: $z,
    ellipse: Nz,
    triangle: Wz,
    line: Uz,
    rotate: Kz,
    "lock.aspect.ratio": _z,
    "unlock.aspect.ratio": Yz,
    group: Zz,
    ungroup: Xz,
    "move.to.back": qz,
    "move.backward": Jz,
    "move.forward": Qz,
    "move.to.front": e9,
    "reset.angle": t9,
    lock: n9,
    unlock: o9,
    "move.to.page": r9,
    "flip.horizontal": s9,
    "flip.vertical": i9,
    move: a9,
    "to.front": l9,
    forward: d9,
    backward: c9,
    back: p9,
    language: u9,
  };
var h9 = "Farge",
  m9 = "Fyll",
  g9 = "Line",
  f9 = "Storleik",
  S9 = "Hald open",
  b9 = "Teksttype",
  T9 = "Tilpass",
  y9 = "Stilar",
  x9 = "Zoom inn",
  w9 = "Zoom ut",
  k9 = "til",
  v9 = "Fil",
  I9 = "Rediger",
  C9 = "Vis",
  D9 = "Innstillingar",
  P9 = "Logg inn",
  M9 = "Logg ut",
  B9 = "Vert sponsor",
  E9 = "Zoom til innhald",
  R9 = "Zoom til valte element",
  A9 = "Zoom for \xE5 passe",
  L9 = "Zoom til",
  H9 = "M\xF8rkmodus",
  z9 = "Fokusmodus",
  O9 = "Debugmodus",
  F9 = "Vis rutenett",
  j9 = "Bruk CAD-val",
  G9 = "Hald stilmeny open",
  V9 = "Vis alltid snaps",
  $9 = "Vis roteringshandtak",
  N9 = "Vis bindingshandtak",
  W9 = "Vis kloningshandtak",
  U9 = "Angre",
  K9 = "Gjer om",
  _9 = "Klipp ut",
  Y9 = "Kopier",
  Z9 = "Lim inn",
  X9 = "Kopier som",
  q9 = "Eksporter som",
  J9 = "Vel alle",
  Q9 = "Vel ingen",
  eO = "Slett",
  tO = "Nytt prosjekt",
  nO = "Opne",
  oO = "Lagre",
  rO = "Lagre som",
  sO = "Last opp media",
  iO = "Opprett side",
  aO = "Ny side",
  lO = "Sidenamn",
  dO = "Dupliser",
  cO = "Avbryt",
  pO = "Kopier invitasjonslenke",
  uO = "Kopier invitasjonslenke (skrivebeskytta)",
  hO = "Lag samarbeidsprosjekt",
  mO = "Kopier til samarbeidsprosjekt",
  gO = "Vel",
  fO = "Viskel\xEAr",
  SO = "Teikn",
  bO = "Pil",
  TO = "Tekst",
  yO = "Lapp",
  xO = "Rektangel",
  wO = "Runding",
  kO = "Trekant",
  vO = "Line",
  IO = "Roter",
  CO = "L\xE5s storleiksforhold",
  DO = "L\xE5s opp storleiksforhold",
  PO = "Grupper",
  MO = "Avgrupper",
  BO = "Flytt bakarst",
  EO = "Flytt bakover",
  RO = "Flytt framover",
  AO = "Flytt til front",
  LO = "Tilbakestill vinkel",
  HO = "L\xE5s",
  zO = "L\xE5s opp",
  OO = "Flytt til side",
  FO = "Snu horisontalt",
  jO = "Snu vertikalt",
  GO = "Flytt",
  VO = "Framme",
  $O = "Framover",
  NO = "Bakover",
  WO = "Bakarst",
  UO = "Spr\xE5k",
  KO = "Les meir",
  _O = "Dokkplassering",
  YO = "Nede",
  ZO = "Venstre",
  XO = "H\xF8gre",
  qO = "Oppe",
  JO = "Side",
  QO = "Sn\xF8ggtastar",
  e7 = "S\xF8k",
  t7 = "Lastar{dots}",
  n7 = "Eksporter bakgrunn",
  o7 = "Gjennomsiktig",
  r7 = "Auto",
  s7 = "Lys",
  i7 = "M\xF8rk",
  a7 = "Github",
  l7 = "Twitter",
  d7 = "Discord",
  c7 = "Bilete",
  p7 = "Venstrestill",
  u7 = "Midtstill horisontalt",
  h7 = "H\xF8grestill",
  m7 = "Still til toppen",
  g7 = "Midtstill vertikalt",
  f7 = "Still til botnen",
  S7 = "Distribuer horisontalt",
  b7 = "Distribuer vertikalt",
  T7 = "Strekk horisontalt",
  y7 = "Strekk vertikalt",
  x7 = "Vil du lagre det noverande prosjektet ditt?",
  w7 = "Vil du lagre endringane i det noverande prosjektet ditt?",
  k7 = "Avbryt",
  v7 = "Nei",
  I7 = "Ja",
  C7 = "Fyll inn filnamn",
  D7 = "Pr\xF8v den nye tldraw",
  P7 = "Kvit",
  M7 = "Lys gr\xE5",
  B7 = "Gr\xE5",
  E7 = "Svart",
  R7 = "Gr\xF8n",
  A7 = "Cyan",
  L7 = "Bk\xE5",
  H7 = "Indigo",
  z7 = "Fiol",
  O7 = "Raud",
  F7 = "Oransj",
  j7 = "Gul",
  G7 = "Heil",
  V7 = "Stipla",
  $7 = "Prikka",
  N7 = "Liten",
  W7 = "Mellomstor",
  U7 = "Stor",
  fa = {
    "style.menu.color": h9,
    "style.menu.fill": m9,
    "style.menu.dash": g9,
    "style.menu.size": f9,
    "style.menu.keep.open": S9,
    "style.menu.font": b9,
    "style.menu.align": T9,
    styles: y9,
    "zoom.in": x9,
    "zoom.out": w9,
    to: k9,
    "menu.file": v9,
    "menu.edit": I9,
    "menu.view": C9,
    "menu.preferences": D9,
    "menu.sign.in": P9,
    "menu.sign.out": M9,
    "become.a.sponsor": B9,
    "zoom.to.content": E9,
    "zoom.to.selection": R9,
    "zoom.to.fit": A9,
    "zoom.to": L9,
    "preferences.dark.mode": H9,
    "preferences.focus.mode": z9,
    "preferences.debug.mode": O9,
    "preferences.show.grid": F9,
    "preferences.use.cad.selection": j9,
    "preferences.keep.stylemenu.open": G9,
    "preferences.always.show.snaps": V9,
    "preferences.rotate.handles": $9,
    "preferences.binding.handles": N9,
    "preferences.clone.handles": W9,
    undo: U9,
    redo: K9,
    cut: _9,
    copy: Y9,
    paste: Z9,
    "copy.as": X9,
    "export.as": q9,
    "select.all": J9,
    "select.none": Q9,
    delete: eO,
    "new.project": tO,
    open: nO,
    save: oO,
    "save.as": rO,
    "upload.media": sO,
    "create.page": iO,
    "new.page": aO,
    "page.name": lO,
    duplicate: dO,
    cancel: cO,
    "copy.invite.link": pO,
    "copy.readonly.link": uO,
    "create.multiplayer.project": hO,
    "copy.multiplayer.project": mO,
    select: gO,
    eraser: fO,
    draw: SO,
    arrow: bO,
    text: TO,
    sticky: yO,
    rectangle: xO,
    ellipse: wO,
    triangle: kO,
    line: vO,
    rotate: IO,
    "lock.aspect.ratio": CO,
    "unlock.aspect.ratio": DO,
    group: PO,
    ungroup: MO,
    "move.to.back": BO,
    "move.backward": EO,
    "move.forward": RO,
    "move.to.front": AO,
    "reset.angle": LO,
    lock: HO,
    unlock: zO,
    "move.to.page": OO,
    "flip.horizontal": FO,
    "flip.vertical": jO,
    move: GO,
    "to.front": VO,
    forward: $O,
    backward: NO,
    back: WO,
    language: UO,
    "translation.link": KO,
    "dock.position": _O,
    bottom: YO,
    left: ZO,
    right: XO,
    top: qO,
    page: JO,
    "keyboard.shortcuts": QO,
    search: e7,
    loading: t7,
    "export.background": n7,
    transparent: o7,
    auto: r7,
    light: s7,
    dark: i7,
    github: a7,
    twitter: l7,
    discord: d7,
    image: c7,
    "align.left": p7,
    "align.center.x": u7,
    "align.right": h7,
    "align.top": m7,
    "align.center.y": g7,
    "align.bottom": f7,
    "distribute.x": S7,
    "distribute.y": b7,
    "stretch.x": T7,
    "stretch.y": y7,
    "dialog.save.firsttime": x7,
    "dialog.save.again": w7,
    "dialog.cancel": k7,
    "dialog.no": v7,
    "dialog.yes": I7,
    "enter.file.name": C7,
    "tldraw-beta": D7,
    white: P7,
    lightGray: M7,
    gray: B7,
    black: E7,
    green: R7,
    cyan: A7,
    blue: L7,
    indigo: H7,
    violet: z7,
    red: O7,
    orange: F7,
    yellow: j7,
    solid: G7,
    dashed: V7,
    dotted: $7,
    small: N7,
    medium: W7,
    large: U7,
  };
var K7 = "Kolor",
  _7 = "Wype\u0142nienie",
  Y7 = "Linia",
  Z7 = "Rozmiar",
  X7 = "Zachowaj otwarte",
  q7 = "Czcionka",
  J7 = "Wyr\xF3wnanie",
  Q7 = "Style",
  eF = "Przybli\u017C",
  tF = "Oddal",
  nF = "do",
  oF = "Plik",
  rF = "Edycja",
  sF = "Widok",
  iF = "Preferencje",
  aF = "Zaloguj",
  lF = "Wyloguj",
  dF = "Zosta\u0144 sponsorem",
  cF = "Przybli\u017C do zaznaczenia",
  pF = "Wype\u0142nij ekran",
  uF = "Przybli\u017C do",
  hF = "Tryb ciemny",
  mF = "Tryb skupienia",
  gF = "Tryb debugowania",
  fF = "Poka\u017C siatk\u0119",
  SF = "U\u017Cyj zaznaczania CAD",
  bF = "Zachowaj menu styli otwarte",
  TF = "Przyci\u0105gaj obiekty",
  yF = "Uchwyty obrotu",
  xF = "Uchwyty powi\u0105zania",
  wF = "Uchwyty klonuj\u0105ce",
  kF = "Cofnij",
  vF = "Powt\xF3rz",
  IF = "Wytnij",
  CF = "Kopiuj",
  DF = "Wklej",
  PF = "Kopiuj jako",
  MF = "Eksportuj jako",
  BF = "Zaznacz wszystko",
  EF = "Odznacz wszystko",
  RF = "Usu\u0144",
  AF = "Nowy projekt",
  LF = "Otw\xF3rz",
  HF = "Zapisz",
  zF = "Zapisz jako",
  OF = "Za\u0142aduj multimedia",
  FF = "Utw\xF3rz stron\u0119",
  jF = "Nowa strona",
  GF = "Nazwa strony",
  VF = "Powiel",
  $F = "Anuluj",
  NF = "Kopiuj link zaproszenia",
  WF = "Stw\xF3rz projekt wieloosobowy",
  UF = "Kopiuj do projektu wieloosobowego",
  KF = "Zaznacz",
  _F = "Gumka",
  YF = "Rysuj",
  ZF = "Strza\u0142ka",
  XF = "Tekst",
  qF = "Naklejka",
  JF = "Prostok\u0105t",
  QF = "Elipsa",
  ej = "Tr\xF3jk\u0105t",
  tj = "Linia",
  nj = "Obr\xF3\u0107",
  oj = "Zablokuj proporcje",
  rj = "Odblokuj proporcje",
  sj = "Grupuj",
  ij = "Rozgrupuj",
  aj = "Przenie\u015B na ty\u0142",
  lj = "Przesu\u0144 do ty\u0142u",
  dj = "Przesu\u0144 do przodu",
  cj = "Przenie\u015B na prz\xF3d",
  pj = "Resetuj k\u0105t",
  uj = "Zablokuj",
  hj = "Odblokuj",
  mj = "Przenie\u015B na stron\u0119",
  gj = "Odwr\xF3\u0107 w poziomie",
  fj = "Odwr\xF3\u0107 w pionie",
  Sj = "Przenie\u015B",
  bj = "Na wierzch",
  Tj = "Do przodu",
  yj = "Do ty\u0142u",
  xj = "Na sp\xF3d",
  wj = "J\u0119zyk",
  kj = "Czytaj wi\u0119cej",
  vj = "Pozycja przybornika",
  Ij = "D\xF3\u0142",
  Cj = "Lewa",
  Dj = "Prawa",
  Pj = "G\xF3ra",
  Mj = "Strona",
  Bj = "Skr\xF3ty klawiszowe",
  Ej = "Szukaj",
  Rj = "\u0141adowanie{dots}",
  Aj = "Eksportuj t\u0142o",
  Lj = "Przezroczyste",
  Hj = "Automatyczny",
  zj = "Jasny",
  Oj = "Ciemny",
  Fj = "Github",
  jj = "Twitter",
  Gj = "Discord",
  Vj = "Obraz",
  $j = "Wyr\xF3wnaj do lewej",
  Nj = "Wycentruj poziomo",
  Wj = "Wyr\xF3wnaj do prawej",
  Uj = "Wyr\xF3wnaj do g\xF3ry",
  Kj = "Wycentruj pionowo",
  _j = "Wyr\xF3wnaj do do\u0142u",
  Yj = "Roz\u0142\xF3\u017C poziomo",
  Zj = "Roz\u0142\xF3\u017C pionowo",
  Xj = "Rozci\u0105gnij poziomo",
  qj = "Rozci\u0105gnij pionowo",
  Jj = "Czy chcesz zapisa\u0107 bie\u017C\u0105cy projekt?",
  Qj = "Czy chcesz zapisa\u0107 zmiany w bie\u017C\u0105cym projekcie?",
  eG = "Anuluj",
  tG = "Nie",
  nG = "Tak",
  oG = "Podaj nazw\u0119 pliku",
  rG = "Wypr\xF3buj nowy tldraw",
  Sa = {
    "style.menu.color": K7,
    "style.menu.fill": _7,
    "style.menu.dash": Y7,
    "style.menu.size": Z7,
    "style.menu.keep.open": X7,
    "style.menu.font": q7,
    "style.menu.align": J7,
    styles: Q7,
    "zoom.in": eF,
    "zoom.out": tF,
    to: nF,
    "menu.file": oF,
    "menu.edit": rF,
    "menu.view": sF,
    "menu.preferences": iF,
    "menu.sign.in": aF,
    "menu.sign.out": lF,
    "become.a.sponsor": dF,
    "zoom.to.selection": cF,
    "zoom.to.fit": pF,
    "zoom.to": uF,
    "preferences.dark.mode": hF,
    "preferences.focus.mode": mF,
    "preferences.debug.mode": gF,
    "preferences.show.grid": fF,
    "preferences.use.cad.selection": SF,
    "preferences.keep.stylemenu.open": bF,
    "preferences.always.show.snaps": TF,
    "preferences.rotate.handles": yF,
    "preferences.binding.handles": xF,
    "preferences.clone.handles": wF,
    undo: kF,
    redo: vF,
    cut: IF,
    copy: CF,
    paste: DF,
    "copy.as": PF,
    "export.as": MF,
    "select.all": BF,
    "select.none": EF,
    delete: RF,
    "new.project": AF,
    open: LF,
    save: HF,
    "save.as": zF,
    "upload.media": OF,
    "create.page": FF,
    "new.page": jF,
    "page.name": GF,
    duplicate: VF,
    cancel: $F,
    "copy.invite.link": NF,
    "create.multiplayer.project": WF,
    "copy.multiplayer.project": UF,
    select: KF,
    eraser: _F,
    draw: YF,
    arrow: ZF,
    text: XF,
    sticky: qF,
    rectangle: JF,
    ellipse: QF,
    triangle: ej,
    line: tj,
    rotate: nj,
    "lock.aspect.ratio": oj,
    "unlock.aspect.ratio": rj,
    group: sj,
    ungroup: ij,
    "move.to.back": aj,
    "move.backward": lj,
    "move.forward": dj,
    "move.to.front": cj,
    "reset.angle": pj,
    lock: uj,
    unlock: hj,
    "move.to.page": mj,
    "flip.horizontal": gj,
    "flip.vertical": fj,
    move: Sj,
    "to.front": bj,
    forward: Tj,
    backward: yj,
    back: xj,
    language: wj,
    "translation.link": kj,
    "dock.position": vj,
    bottom: Ij,
    left: Cj,
    right: Dj,
    top: Pj,
    page: Mj,
    "keyboard.shortcuts": Bj,
    search: Ej,
    loading: Rj,
    "export.background": Aj,
    transparent: Lj,
    auto: Hj,
    light: zj,
    dark: Oj,
    github: Fj,
    twitter: jj,
    discord: Gj,
    image: Vj,
    "align.left": $j,
    "align.center.x": Nj,
    "align.right": Wj,
    "align.top": Uj,
    "align.center.y": Kj,
    "align.bottom": _j,
    "distribute.x": Yj,
    "distribute.y": Zj,
    "stretch.x": Xj,
    "stretch.y": qj,
    "dialog.save.firsttime": Jj,
    "dialog.save.again": Qj,
    "dialog.cancel": eG,
    "dialog.no": tG,
    "dialog.yes": nG,
    "enter.file.name": oG,
    "tldraw-beta": rG,
  };
var sG = "Cor",
  iG = "Preencher",
  aG = "Tra\xE7o",
  lG = "Tamanho",
  dG = "Manter aberto",
  cG = "Fonte",
  pG = "Alinhamento",
  uG = "Estilos",
  hG = "Aumentar zoom",
  mG = "Diminuir zoom",
  gG = "para",
  fG = "Arquivo",
  SG = "Editar",
  bG = "Visualizar",
  TG = "Prefer\xEAncias",
  yG = "Entrar",
  xG = "Sair",
  wG = "Torne-se um patrocinador",
  kG = "Zoom para a sele\xE7\xE3o",
  vG = "Zoom para ajuste",
  IG = "Zoom para",
  CG = "Modo Escuro",
  DG = "Modo Foco",
  PG = "Modo Debug",
  MG = "Mostrar Grade",
  BG = "Usar sele\xE7\xE3o CAD",
  EG = "Manter Menu de Estilos Aberto",
  RG = "Mostrar Pontos de Ajuste",
  AG = "Controle de Rota\xE7\xE3o",
  LG = "Controle de V\xEDnculos",
  HG = "Controle de Clone",
  zG = "Desfazer",
  OG = "Refazer",
  FG = "Cortar",
  jG = "Copiar",
  GG = "Colar",
  VG = "Copiar como",
  $G = "Exportar como",
  NG = "Selecionar todos",
  WG = "Selecionar nenhum",
  UG = "Deletar",
  KG = "Novo Projeto",
  _G = "Abrir",
  YG = "Salvar",
  ZG = "Salvar Como",
  XG = "Carregar M\xEDdia",
  qG = "P\xE1gina",
  JG = "Procurar",
  QG = "Carregando{dots}",
  eV = "Exportar Fundo",
  tV = "Transparente",
  nV = "Autom\xE1tico",
  oV = "Claro",
  rV = "Escuro",
  sV = "Ferramentas",
  iV = "Transformar",
  aV = "Voltar ao Conte\xFAdo",
  lV = "Saiba Mais",
  dV = "Copiar Link ReadOnly",
  cV = "Alinhar / Distribuir",
  pV = "Criar P\xE1gina",
  uV = "Nova P\xE1gina",
  hV = "Nome da P\xE1gina",
  mV = "Duplicar",
  gV = "Cancelar",
  fV = "Copiar Link de Convite",
  SV = "Criar um Projeto Multijogador",
  bV = "Copiar para Projeto Multijogador",
  TV = "Selecionar",
  yV = "Borracha",
  xV = "Desenhar",
  wV = "Seta",
  kV = "Texto",
  vV = "Adesivo",
  IV = "Ret\xE2ngulo",
  CV = "Elipse",
  DV = "Tri\xE2ngulo",
  PV = "Linha",
  MV = "Rotacionar",
  BV = "Travar Propor\xE7\xE3o da Tela",
  EV = "Destravar Propor\xE7\xE3o da Tela",
  RV = "Agrupar",
  AV = "Desagrupar",
  LV = "Recuar",
  HV = "Enviar para Tr\xE1s",
  zV = "Avan\xE7ar",
  OV = "Trazer para Frente",
  FV = "Reiniciar \xC2ngulo",
  jV = "Travar",
  GV = "Destravar",
  VV = "Mover para P\xE1gina",
  $V = "Virar Horizontalmente",
  NV = "Virar Verticalmente",
  WV = "Mover",
  UV = "Para Frente",
  KV = "Avan\xE7ar",
  _V = "Recuar",
  YV = "Voltar",
  ZV = "Idioma",
  XV = "Imagem",
  qV = "Atalhos de Teclado",
  JV = "Posi\xE7\xE3o de Ferramentas",
  QV = "Inferior",
  e$ = "Superior",
  t$ = "Direita",
  n$ = "Esquerda",
  o$ = "Alinhar \xE0 esquerda",
  r$ = "Alinhar ao centro na horizontal",
  s$ = "Alinhar \xE0 direita",
  i$ = "Alinhas em cima",
  a$ = "Alinhar ao centro na vertical",
  l$ = "Alinhar embaixo",
  d$ = "Distruibuir na horizontal",
  c$ = "Distruibuir na vertical",
  p$ = "Esticar na horizontal",
  u$ = "Esticar na vertical",
  h$ = "Voc\xEA deseja salvar seu projeto atual?",
  m$ = "Voc\xEA deseja salvar as mudan\xE7as ao projeto atual?",
  g$ = "Cancelar",
  f$ = "N\xE3o",
  S$ = "Sim",
  b$ = "Insira o nome do arquivo",
  ba = {
    "style.menu.color": sG,
    "style.menu.fill": iG,
    "style.menu.dash": aG,
    "style.menu.size": lG,
    "style.menu.keep.open": dG,
    "style.menu.font": cG,
    "style.menu.align": pG,
    styles: uG,
    "zoom.in": hG,
    "zoom.out": mG,
    to: gG,
    "menu.file": fG,
    "menu.edit": SG,
    "menu.view": bG,
    "menu.preferences": TG,
    "menu.sign.in": yG,
    "menu.sign.out": xG,
    "become.a.sponsor": wG,
    "zoom.to.selection": kG,
    "zoom.to.fit": vG,
    "zoom.to": IG,
    "preferences.dark.mode": CG,
    "preferences.focus.mode": DG,
    "preferences.debug.mode": PG,
    "preferences.show.grid": MG,
    "preferences.use.cad.selection": BG,
    "preferences.keep.stylemenu.open": EG,
    "preferences.always.show.snaps": RG,
    "preferences.rotate.handles": AG,
    "preferences.binding.handles": LG,
    "preferences.clone.handles": HG,
    undo: zG,
    redo: OG,
    cut: FG,
    copy: jG,
    paste: GG,
    "copy.as": VG,
    "export.as": $G,
    "select.all": NG,
    "select.none": WG,
    delete: UG,
    "new.project": KG,
    open: _G,
    save: YG,
    "save.as": ZG,
    "upload.media": XG,
    page: qG,
    search: JG,
    loading: QG,
    "export.background": eV,
    transparent: tV,
    auto: nV,
    light: oV,
    dark: rV,
    "menu.tools": sV,
    "menu.transform": iV,
    "zoom.to.content": aV,
    "translation.link": lV,
    "copy.readonly.link": dV,
    "align.distribute": cV,
    "create.page": pV,
    "new.page": uV,
    "page.name": hV,
    duplicate: mV,
    cancel: gV,
    "copy.invite.link": fV,
    "create.multiplayer.project": SV,
    "copy.multiplayer.project": bV,
    select: TV,
    eraser: yV,
    draw: xV,
    arrow: wV,
    text: kV,
    sticky: vV,
    rectangle: IV,
    ellipse: CV,
    triangle: DV,
    line: PV,
    rotate: MV,
    "lock.aspect.ratio": BV,
    "unlock.aspect.ratio": EV,
    group: RV,
    ungroup: AV,
    "move.to.back": LV,
    "move.backward": HV,
    "move.forward": zV,
    "move.to.front": OV,
    "reset.angle": FV,
    lock: jV,
    unlock: GV,
    "move.to.page": VV,
    "flip.horizontal": $V,
    "flip.vertical": NV,
    move: WV,
    "to.front": UV,
    forward: KV,
    backward: _V,
    back: YV,
    language: ZV,
    image: XV,
    "keyboard.shortcuts": qV,
    "dock.position": JV,
    bottom: QV,
    top: e$,
    right: t$,
    left: n$,
    "align.left": o$,
    "align.center.x": r$,
    "align.right": s$,
    "align.top": i$,
    "align.center.y": a$,
    "align.bottom": l$,
    "distribute.x": d$,
    "distribute.y": c$,
    "stretch.x": p$,
    "stretch.y": u$,
    "dialog.save.firsttime": h$,
    "dialog.save.again": m$,
    "dialog.cancel": g$,
    "dialog.no": f$,
    "dialog.yes": S$,
    "enter.file.name": b$,
  };
var T$ = "Cor",
  y$ = "Preencher",
  x$ = "Tra\xE7o",
  w$ = "Tamanho",
  k$ = "Manter aberto",
  v$ = "Fonte",
  I$ = "Alinhamento",
  C$ = "Estilos",
  D$ = "Aumentar zoom",
  P$ = "Diminuir zoom",
  M$ = "para",
  B$ = "Ficheiro",
  E$ = "Editar",
  R$ = "Visualizar",
  A$ = "Prefer\xEAncias",
  L$ = "Entrar",
  H$ = "Sair",
  z$ = "Torne-se um patrocinador",
  O$ = "Zoom na sele\xE7\xE3o",
  F$ = "Zoom para caber",
  j$ = "Zoom para",
  G$ = "Modo Escuro",
  V$ = "Modo Foco",
  $$ = "Modo Debug",
  N$ = "Mostrar Grelha",
  W$ = "Usar sele\xE7\xE3o CAD",
  U$ = "Manter Menu de Estilos Aberto",
  K$ = "Mostrar Pontos de Ajuste",
  _$ = "Controlo de Rota\xE7\xE3o",
  Y$ = "Controlo de Binds",
  Z$ = "Controlo de Clone",
  X$ = "Desfazer",
  q$ = "Refazer",
  J$ = "Cortar",
  Q$ = "Copiar",
  eN = "Colar",
  tN = "Copiar como",
  nN = "Exportar como",
  oN = "Selecionar todos",
  rN = "Selecionar nenhum",
  sN = "Apagar",
  iN = "Novo Projeto",
  aN = "Abrir",
  lN = "Salvar",
  dN = "Salvar Como",
  cN = "Upload M\xE9dia",
  pN = "Criar P\xE1gina",
  uN = "Nova P\xE1gina",
  hN = "Nome da P\xE1gina",
  mN = "Duplicar",
  gN = "Cancelar",
  fN = "Copiar Link de Convite",
  SN = "Criar um Projeto Multi-Utilizador",
  bN = "Copiar num Projeto Multi-Utilizador",
  TN = "Selecionar",
  yN = "Borracha",
  xN = "Desenhar",
  wN = "Seta",
  kN = "Texto",
  vN = "Post-it",
  IN = "Ret\xE2ngulo",
  CN = "Elipse",
  DN = "Tri\xE2ngulo",
  PN = "Linha",
  MN = "Rodar",
  BN = "Trancar a Propor\xE7\xE3o",
  EN = "Destrancar a Propor\xE7\xE3o",
  RN = "Agrupar",
  AN = "Desagrupar",
  LN = "Colocar no Fundo",
  HN = "Mover abaixo",
  zN = "Mover acima",
  ON = "Colocar \xE0 Frente",
  FN = "Reiniciar \xC2ngulo",
  jN = "Trancar",
  GN = "Destrancar",
  VN = "Mover para P\xE1gina",
  $N = "Inverter Horizontalmente",
  NN = "Inverter Verticalmente",
  WN = "Mover",
  UN = "Para Frente",
  KN = "Avan\xE7ar",
  _N = "Recuar",
  YN = "Voltar",
  ZN = "L\xEDngua",
  Ta = {
    "style.menu.color": T$,
    "style.menu.fill": y$,
    "style.menu.dash": x$,
    "style.menu.size": w$,
    "style.menu.keep.open": k$,
    "style.menu.font": v$,
    "style.menu.align": I$,
    styles: C$,
    "zoom.in": D$,
    "zoom.out": P$,
    to: M$,
    "menu.file": B$,
    "menu.edit": E$,
    "menu.view": R$,
    "menu.preferences": A$,
    "menu.sign.in": L$,
    "menu.sign.out": H$,
    "become.a.sponsor": z$,
    "zoom.to.selection": O$,
    "zoom.to.fit": F$,
    "zoom.to": j$,
    "preferences.dark.mode": G$,
    "preferences.focus.mode": V$,
    "preferences.debug.mode": $$,
    "preferences.show.grid": N$,
    "preferences.use.cad.selection": W$,
    "preferences.keep.stylemenu.open": U$,
    "preferences.always.show.snaps": K$,
    "preferences.rotate.handles": _$,
    "preferences.binding.handles": Y$,
    "preferences.clone.handles": Z$,
    undo: X$,
    redo: q$,
    cut: J$,
    copy: Q$,
    paste: eN,
    "copy.as": tN,
    "export.as": nN,
    "select.all": oN,
    "select.none": rN,
    delete: sN,
    "new.project": iN,
    open: aN,
    save: lN,
    "save.as": dN,
    "upload.media": cN,
    "create.page": pN,
    "new.page": uN,
    "page.name": hN,
    duplicate: mN,
    cancel: gN,
    "copy.invite.link": fN,
    "create.multiplayer.project": SN,
    "copy.multiplayer.project": bN,
    select: TN,
    eraser: yN,
    draw: xN,
    arrow: wN,
    text: kN,
    sticky: vN,
    rectangle: IN,
    ellipse: CN,
    triangle: DN,
    line: PN,
    rotate: MN,
    "lock.aspect.ratio": BN,
    "unlock.aspect.ratio": EN,
    group: RN,
    ungroup: AN,
    "move.to.back": LN,
    "move.backward": HN,
    "move.forward": zN,
    "move.to.front": ON,
    "reset.angle": FN,
    lock: jN,
    unlock: GN,
    "move.to.page": VN,
    "flip.horizontal": $N,
    "flip.vertical": NN,
    move: WN,
    "to.front": UN,
    forward: KN,
    backward: _N,
    back: YN,
    language: ZN,
  };
var XN = "\u0426\u0432\u0435\u0442",
  qN = "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C",
  JN = "\u0428\u0442\u0440\u0438\u0445",
  QN = "\u0420\u0430\u0437\u043C\u0435\u0440",
  eW =
    "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C",
  tW = "\u0428\u0440\u0438\u0444\u0442",
  nW =
    "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
  oW = "\u0421\u0442\u0438\u043B\u044C",
  rW = "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C",
  sW = "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C",
  iW = "\u043A",
  aW = "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
  lW = "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435",
  dW = "\u0424\u0430\u0439\u043B",
  cW =
    "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
  pW = "\u0412\u0438\u0434",
  uW = "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
  hW = "\u0412\u043E\u0439\u0442\u0438",
  mW = "\u0412\u044B\u0439\u0442\u0438",
  gW =
    "\u0421\u0442\u0430\u0442\u044C \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C",
  fW =
    "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443",
  SW =
    "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044E",
  bW =
    "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u044D\u043A\u0440\u0430\u043D\u0430",
  TW =
    "\u041C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A",
  yW = "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
  xW =
    "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C",
  wW =
    "\u0420\u0435\u0436\u0438\u043C \u043E\u0442\u043B\u0430\u0434\u043A\u0438",
  kW =
    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0435\u0442\u043A\u0443",
  vW =
    "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C CAD \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  IW =
    "\u0414\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0435\u043D\u044E \u0441\u0442\u0438\u043B\u0435\u0439 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C",
  CW =
    "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
  DW =
    "\u0420\u0443\u0447\u043A\u0438 \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u044F",
  PW =
    "\u0420\u0443\u0447\u043A\u0438 \u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0438",
  MW =
    "\u0420\u0443\u0447\u043A\u0438 \u043A\u043B\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
  BW = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  EW = "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",
  RW = "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C",
  AW = "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  LW = "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C",
  HW =
    "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A",
  zW =
    "\u042D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A",
  OW = "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0451",
  FW =
    "\u0421\u043D\u044F\u0442\u044C \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u0435",
  jW = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
  GW = "\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  VW = "\u041E\u0442\u043A\u0440\u044B\u0442\u044C",
  $W = "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
  NW =
    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A",
  WW =
    "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043C\u0435\u0434\u0438\u0430\u0444\u0430\u0439\u043B",
  UW =
    "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  KW =
    "\u041D\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  _W =
    "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
  YW = "\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  ZW = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  XW =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F",
  qW =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0447\u0442\u0435\u043D\u0438\u044F",
  JW =
    "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  QW =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u043D\u043E\u0433\u043E\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  eU = "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C",
  tU = "\u041B\u0430\u0441\u0442\u0438\u043A",
  nU = "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C",
  oU = "\u0421\u0442\u0440\u0435\u043B\u043A\u0430",
  rU = "\u0422\u0435\u043A\u0441\u0442",
  sU = "\u0417\u0430\u043C\u0435\u0442\u043A\u0430",
  iU =
    "\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
  aU = "\u042D\u043B\u043B\u0438\u043F\u0441",
  lU = "\u0422\u0440\u0435\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
  dU = "\u041B\u0438\u043D\u0438\u044F",
  cU = "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
  pU =
    "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  uU =
    "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u0440\u043E\u043D",
  hU =
    "\u0421\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  mU =
    "\u0420\u0430\u0437\u0433\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  gU =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430\u0437\u0430\u0434",
  fU =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  SU =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432\u043F\u0435\u0440\u0451\u0434",
  bU =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  TU =
    "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0443\u0433\u043E\u043B",
  yU = "\u0411\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  xU =
    "\u0420\u0430\u0437\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
  wU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C / \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C",
  kU =
    "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  vU =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  IU =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  CU = "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C",
  DU =
    "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  PU = "\u0412\u043F\u0435\u0440\u0435\u0434",
  MU =
    "\u041D\u0430 \u0437\u0430\u0434\u043D\u0438\u0439 \u043F\u043B\u0430\u043D",
  BU = "\u041D\u0430\u0437\u0430\u0434",
  EU = "\u042F\u0437\u044B\u043A",
  RU = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",
  AU =
    "\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0430\u043D\u0435\u043B\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
  LU = "\u0421\u043D\u0438\u0437\u0443",
  HU = "\u0421\u043B\u0435\u0432\u0430",
  zU = "\u0421\u043F\u0440\u0430\u0432\u0430",
  OU = "\u0421\u0432\u0435\u0440\u0445\u0443",
  FU = "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430",
  jU =
    "\u0421\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u044F \u043A\u043B\u0430\u0432\u0438\u0448",
  GU = "\u041F\u043E\u0438\u0441\u043A",
  VU = "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
  $U = "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0444\u043E\u043D\u0430",
  NU = "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439",
  WU = "\u0410\u0432\u0442\u043E",
  UU = "\u0421\u0432\u0435\u0442\u043B\u044B\u0439",
  KU = "\u0422\u0451\u043C\u043D\u044B\u0439",
  _U = "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
  YU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  ZU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  XU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
  qU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
  JU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  QU =
    "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043D\u0438\u0436\u043D\u0435\u043C\u0443 \u043A\u0440\u0430\u044E",
  eK =
    "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  tK =
    "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  nK =
    "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  oK =
    "\u0420\u0430\u0441\u0442\u044F\u043D\u0443\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  rK = "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F",
  sK =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",
  iK =
    "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043F\u0440\u043E\u0435\u043A\u0442",
  aK =
    "\u0414\u0430\u043D\u043D\u044B\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u0445 \u0432 \u0441\u0441\u044B\u043B\u043A\u0435. \u041D\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u0439\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u0432\u0438\u0434\u0435\u043E!",
  lK =
    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442?",
  dK =
    "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u043A\u0443\u0449\u0435\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0435?",
  cK = "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
  pK = "\u041D\u0435\u0442",
  uK = "\u0414\u0430",
  hK =
    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0444\u0430\u0439\u043B\u0430",
  ya = {
    "style.menu.color": XN,
    "style.menu.fill": qN,
    "style.menu.dash": JN,
    "style.menu.size": QN,
    "style.menu.keep.open": eW,
    "style.menu.font": tW,
    "style.menu.align": nW,
    styles: oW,
    "zoom.in": rW,
    "zoom.out": sW,
    to: iW,
    "menu.tools": aW,
    "menu.transform": lW,
    "menu.file": dW,
    "menu.edit": cW,
    "menu.view": pW,
    "menu.preferences": uW,
    "menu.sign.in": hW,
    "menu.sign.out": mW,
    "become.a.sponsor": gW,
    "zoom.to.content": fW,
    "zoom.to.selection": SW,
    "zoom.to.fit": bW,
    "zoom.to": TW,
    "preferences.dark.mode": yW,
    "preferences.focus.mode": xW,
    "preferences.debug.mode": wW,
    "preferences.show.grid": kW,
    "preferences.use.cad.selection": vW,
    "preferences.keep.stylemenu.open": IW,
    "preferences.always.show.snaps": CW,
    "preferences.rotate.handles": DW,
    "preferences.binding.handles": PW,
    "preferences.clone.handles": MW,
    undo: BW,
    redo: EW,
    cut: RW,
    copy: AW,
    paste: LW,
    "copy.as": HW,
    "export.as": zW,
    "select.all": OW,
    "select.none": FW,
    delete: jW,
    "new.project": GW,
    open: VW,
    save: $W,
    "save.as": NW,
    "upload.media": WW,
    "create.page": UW,
    "new.page": KW,
    "page.name": _W,
    duplicate: YW,
    cancel: ZW,
    "copy.invite.link": XW,
    "copy.readonly.link": qW,
    "create.multiplayer.project": JW,
    "copy.multiplayer.project": QW,
    select: eU,
    eraser: tU,
    draw: nU,
    arrow: oU,
    text: rU,
    sticky: sU,
    rectangle: iU,
    ellipse: aU,
    triangle: lU,
    line: dU,
    rotate: cU,
    "lock.aspect.ratio": pU,
    "unlock.aspect.ratio": uU,
    group: hU,
    ungroup: mU,
    "move.to.back": gU,
    "move.backward": fU,
    "move.forward": SU,
    "move.to.front": bU,
    "reset.angle": TU,
    lock: yU,
    unlock: xU,
    "align.distribute": wU,
    "move.to.page": kU,
    "flip.horizontal": vU,
    "flip.vertical": IU,
    move: CU,
    "to.front": DU,
    forward: PU,
    backward: MU,
    back: BU,
    language: EU,
    "translation.link": RU,
    "dock.position": AU,
    bottom: LU,
    left: HU,
    right: zU,
    top: OU,
    page: FU,
    "keyboard.shortcuts": jU,
    search: GU,
    loading: VU,
    "export.background": $U,
    transparent: NU,
    auto: WU,
    light: UU,
    dark: KU,
    image: _U,
    "align.left": YU,
    "align.center.x": ZU,
    "align.right": XU,
    "align.top": qU,
    "align.center.y": JU,
    "align.bottom": QU,
    "distribute.x": eK,
    "distribute.y": tK,
    "stretch.x": nK,
    "stretch.y": oK,
    share: rK,
    "copy.current.page.link": sK,
    "copy.project.link": iK,
    "data.too.big.encoded": aK,
    "dialog.save.firsttime": lK,
    "dialog.save.again": dK,
    "dialog.cancel": cK,
    "dialog.no": pK,
    "dialog.yes": uK,
    "enter.file.name": hK,
  };
var mK = "F\xE4rg",
  gK = "Ifylld",
  fK = "Streck",
  SK = "Storlek",
  bK = "H\xE5ll stilmenyn \xF6ppen",
  TK = "Typsnitt",
  yK = "Justera",
  xK = "Utseende",
  wK = "Zooma in",
  kK = "Zooma ut",
  vK = "Till",
  IK = "Verktyg",
  CK = "Transform",
  DK = "Arkiv",
  PK = "Redigera",
  MK = "Inneh\xE5ll",
  BK = "Inst\xE4llningar",
  EK = "Logga in",
  RK = "Logga ut",
  AK = "Bli en sponsor",
  LK = "Anpassa zoom till inneh\xE5ll",
  HK = "Anpassa zoom till urval",
  zK = "Anpassa zoom till sk\xE4rm",
  OK = "Zooma till",
  FK = "M\xF6rkt l\xE4ge",
  jK = "Fokusl\xE4ge",
  GK = "Debugl\xE4ge",
  VK = "Visa rutn\xE4t",
  $K = "V\xE4lj som i CAD-mjukvara",
  NK = "H\xE5ll stilmenyn \xF6ppen",
  WK = "Visa alltid f\xE4stpunkter",
  UK = "Rotationshandtag",
  KK = "Bindningshandtag",
  _K = "Kloningshandtag",
  YK = "\xC5ngra",
  ZK = "G\xF6r om",
  XK = "Klipp ut",
  qK = "Kopiera",
  JK = "Klistra in",
  QK = "Kopiera som",
  e_ = "Exportera till",
  t_ = "V\xE4lj alla",
  n_ = "V\xE4lj ingen",
  o_ = "Radera",
  r_ = "Nytt projekt",
  s_ = "\xD6ppna",
  i_ = "Spara",
  a_ = "Spara som",
  l_ = "Ladda upp media",
  d_ = "Skapa sida",
  c_ = "Ny sida",
  p_ = "Sidnamn",
  u_ = "Duplicera",
  h_ = "Avbryt",
  m_ = "Kopiera l\xE4nk med redigeringsr\xE4ttigheter",
  g_ = "Kopiera l\xE4nk med l\xE4sr\xE4ttigheter",
  f_ = "Skapa ett Multiplayer-projekt",
  S_ = "Kopiera till Multiplayer-project",
  b_ = "V\xE4lj",
  T_ = "Radera",
  y_ = "Rita",
  x_ = "Pil",
  w_ = "Text",
  k_ = "Klisterlapp",
  v_ = "Rektangel",
  I_ = "Ellips",
  C_ = "Triangel",
  D_ = "Linje",
  P_ = "Rotera",
  M_ = "L\xE5s storleksf\xF6rh\xE5llande",
  B_ = "L\xE5s upp storleksf\xF6rh\xE5llande",
  E_ = "Gruppera",
  R_ = "Avgruppera",
  A_ = "Placera l\xE4ngst bak",
  L_ = "Flytta bak\xE5t",
  H_ = "Flytta fram\xE5t",
  z_ = "Placera l\xE4ngst fram",
  O_ = "\xC5terst\xE4ll vinkel",
  F_ = "L\xE5s",
  j_ = "L\xE5s upp",
  G_ = "Justera / Placera",
  V_ = "Flytta till sida",
  $_ = "V\xE4nd horisontellt",
  N_ = "V\xE4nd vertikalt",
  W_ = "Flytta",
  U_ = "Till l\xE4ngst fram",
  K_ = "Fram\xE5t",
  __ = "Bak\xE5t",
  Y_ = "Till l\xE4ngst bak",
  Z_ = "Spr\xE5k",
  X_ = "Mer information",
  q_ = "Dockningsposition",
  J_ = "Botten",
  Q_ = "V\xE4nster",
  eY = "H\xF6ger",
  tY = "Topp",
  nY = "Sida",
  oY = "Tangentbordsgenv\xE4gar",
  rY = "S\xF6k",
  sY = "Laddar{dots}",
  iY = "Exportbakgrund",
  aY = "Transparent",
  lY = "Auto",
  dY = "Ljus",
  cY = "M\xF6rk",
  pY = "Github",
  uY = "Twitter",
  hY = "Discord",
  mY = "Bild",
  xa = {
    "style.menu.color": mK,
    "style.menu.fill": gK,
    "style.menu.dash": fK,
    "style.menu.size": SK,
    "style.menu.keep.open": bK,
    "style.menu.font": TK,
    "style.menu.align": yK,
    styles: xK,
    "zoom.in": wK,
    "zoom.out": kK,
    to: vK,
    "menu.tools": IK,
    "menu.transform": CK,
    "menu.file": DK,
    "menu.edit": PK,
    "menu.view": MK,
    "menu.preferences": BK,
    "menu.sign.in": EK,
    "menu.sign.out": RK,
    "become.a.sponsor": AK,
    "zoom.to.content": LK,
    "zoom.to.selection": HK,
    "zoom.to.fit": zK,
    "zoom.to": OK,
    "preferences.dark.mode": FK,
    "preferences.focus.mode": jK,
    "preferences.debug.mode": GK,
    "preferences.show.grid": VK,
    "preferences.use.cad.selection": $K,
    "preferences.keep.stylemenu.open": NK,
    "preferences.always.show.snaps": WK,
    "preferences.rotate.handles": UK,
    "preferences.binding.handles": KK,
    "preferences.clone.handles": _K,
    undo: YK,
    redo: ZK,
    cut: XK,
    copy: qK,
    paste: JK,
    "copy.as": QK,
    "export.as": e_,
    "select.all": t_,
    "select.none": n_,
    delete: o_,
    "new.project": r_,
    open: s_,
    save: i_,
    "save.as": a_,
    "upload.media": l_,
    "create.page": d_,
    "new.page": c_,
    "page.name": p_,
    duplicate: u_,
    cancel: h_,
    "copy.invite.link": m_,
    "copy.readonly.link": g_,
    "create.multiplayer.project": f_,
    "copy.multiplayer.project": S_,
    select: b_,
    eraser: T_,
    draw: y_,
    arrow: x_,
    text: w_,
    sticky: k_,
    rectangle: v_,
    ellipse: I_,
    triangle: C_,
    line: D_,
    rotate: P_,
    "lock.aspect.ratio": M_,
    "unlock.aspect.ratio": B_,
    group: E_,
    ungroup: R_,
    "move.to.back": A_,
    "move.backward": L_,
    "move.forward": H_,
    "move.to.front": z_,
    "reset.angle": O_,
    lock: F_,
    unlock: j_,
    "align.distribute": G_,
    "move.to.page": V_,
    "flip.horizontal": $_,
    "flip.vertical": N_,
    move: W_,
    "to.front": U_,
    forward: K_,
    backward: __,
    back: Y_,
    language: Z_,
    "translation.link": X_,
    "dock.position": q_,
    bottom: J_,
    left: Q_,
    right: eY,
    top: tY,
    page: nY,
    "keyboard.shortcuts": oY,
    search: rY,
    loading: sY,
    "export.background": iY,
    transparent: aY,
    auto: lY,
    light: dY,
    dark: cY,
    github: pY,
    twitter: uY,
    discord: hY,
    image: mY,
  };
var gY = "\u0C30\u0C02\u0C17\u0C41",
  fY = "\u0C28\u0C3F\u0C02\u0C2A\u0C41",
  SY = "\u0C05\u0C21\u0C4D\u0C21 \u0C17\u0C40\u0C24",
  bY = "\u0C2A\u0C30\u0C3F\u0C2E\u0C3E\u0C23\u0C02",
  TY = "\u0C24\u0C46\u0C30\u0C3F\u0C1A\u0C3F \u0C09\u0C02\u0C1A\u0C41",
  yY = "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C3E\u0C15\u0C43\u0C24\u0C3F",
  xY = "\u0C38\u0C30\u0C3F\u0C2A\u0C30\u0C1A\u0C41",
  wY = "\u0C35\u0C3F\u0C27\u0C2E\u0C41\u0C32\u0C41",
  kY = "\u0C26\u0C17\u0C4D\u0C17\u0C30\u0C17\u0C3E \u0C1A\u0C42\u0C2A\u0C41",
  vY = "\u0C26\u0C42\u0C30\u0C02\u0C17\u0C3E \u0C1A\u0C42\u0C2A\u0C41",
  IY = "\u0C35\u0C26\u0C4D\u0C26\u0C15\u0C41",
  CY = "\u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C3E\u0C32\u0C41",
  DY = "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
  PY = "\u0C2B\u0C48\u0C32\u0C4D",
  MY = "\u0C2A\u0C30\u0C3F\u0C37\u0C4D\u0C15\u0C30\u0C3F\u0C02\u0C1A\u0C41",
  BY = "\u0C1A\u0C42\u0C2A\u0C41",
  EY = "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C35\u0C3F",
  RY = "\u0C2A\u0C4D\u0C30\u0C35\u0C47\u0C36\u0C3F\u0C02\u0C1A\u0C41",
  AY = "\u0C28\u0C3F\u0C37\u0C4D\u0C15\u0C4D\u0C30\u0C2E\u0C23",
  LY =
    "\u0C35\u0C3F\u0C30\u0C3E\u0C33\u0C26\u0C3E\u0C30\u0C41\u0C32\u0C41 \u0C05\u0C35\u0C4D\u0C35\u0C02\u0C21\u0C3F",
  HY =
    "\u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C47 \u0C1A\u0C42\u0C2A\u0C41",
  zY =
    "\u0C0E\u0C02\u0C1A\u0C41\u0C15\u0C41\u0C28\u0C4D\u0C28 \u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C28\u0C4D\u0C28\u0C47 \u0C1A\u0C42\u0C2A\u0C41",
  OY =
    "\u0C38\u0C30\u0C3F\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C3F \u0C1A\u0C42\u0C2A\u0C41",
  FY = "\u0C1A\u0C42\u0C2A\u0C41",
  jY = "\u0C1A\u0C40\u0C15\u0C1F\u0C48\u0C28 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  GY = "\u0C24\u0C40\u0C15\u0C4D\u0C37\u0C23 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  VY =
    "\u0C24\u0C2A\u0C4D\u0C2A\u0C41\u0C32\u0C47\u0C30\u0C41 \u0C15\u0C4D\u0C30\u0C2E\u0C02",
  $Y = "\u0C1A\u0C1F\u0C4D\u0C30\u0C02 \u0C1A\u0C42\u0C2A\u0C41",
  NY = "CAD\u0C28\u0C3F \u0C35\u0C3E\u0C21\u0C41",
  WY =
    "\u0C35\u0C3F\u0C27\u0C2E\u0C41\u0C32 \u0C2A\u0C24\u0C4D\u0C24\u0C3F \u0C24\u0C46\u0C30\u0C3F\u0C1A\u0C3F\u0C35\u0C41\u0C02\u0C1A\u0C41",
  UY =
    "\u0C0E\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C42 \u0C26\u0C43\u0C36\u0C4D\u0C2F\u0C2D\u0C3E\u0C17\u0C02 \u0C1A\u0C42\u0C2A\u0C41",
  KY =
    "\u0C39\u0C4D\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C41",
  _Y =
    "\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C15\u0C1F\u0C4D\u0C1F\u0C41",
  YY =
    "\u0C2F\u0C3E\u0C02\u0C21\u0C3F\u0C32\u0C4D\u0C38\u0C4D \u0C28\u0C15\u0C32\u0C41",
  ZY =
    "\u0C2E\u0C3E\u0C30\u0C4D\u0C2A\u0C41\u0C28\u0C3F \u0C24\u0C3F\u0C30\u0C41\u0C17\u0C17\u0C4A\u0C1F\u0C4D\u0C1F\u0C41",
  XY = "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C41",
  qY = "\u0C15\u0C24\u0C4D\u0C24\u0C3F\u0C30\u0C3F\u0C02\u0C1A\u0C41",
  JY = "\u0C28\u0C15\u0C32\u0C41",
  QY = "\u0C05\u0C24\u0C3F\u0C15\u0C3F\u0C02\u0C1A\u0C41",
  eZ =
    "\u0C28\u0C15\u0C32\u0C41\u0C2A\u0C4D\u0C30\u0C24\u0C3F\u0C17\u0C3E \u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C15\u0C3F",
  tZ =
    "\u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F \u0C07\u0C15\u0C4D\u0C15\u0C21\u0C3F\u0C15\u0C3F",
  nZ =
    "\u0C05\u0C28\u0C4D\u0C28\u0C40 \u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  oZ =
    "\u0C0E\u0C26\u0C40 \u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41",
  rZ = "\u0C24\u0C4A\u0C32\u0C17\u0C3F\u0C02\u0C1A\u0C41",
  sZ =
    "\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41",
  iZ = "\u0C24\u0C46\u0C30\u0C41\u0C35\u0C41",
  aZ = "\u0C26\u0C3E\u0C2F\u0C3F",
  lZ = "\u0C07\u0C32\u0C3E \u0C26\u0C3E\u0C2F\u0C3F",
  dZ =
    "\u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F \u0C2E\u0C3E\u0C27\u0C4D\u0C2F\u0C02",
  cZ = "\u0C2A\u0C41\u0C1F \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C41",
  pZ = "\u0C15\u0C4A\u0C24\u0C4D\u0C24 \u0C2A\u0C41\u0C1F",
  uZ = "\u0C2A\u0C41\u0C1F \u0C2A\u0C47\u0C30\u0C41",
  hZ = "\u0C2E\u0C3E\u0C30\u0C41\u0C2A\u0C4D\u0C30\u0C24\u0C3F",
  mZ = "\u0C30\u0C26\u0C4D\u0C26\u0C41\u0C1A\u0C47\u0C2F\u0C3F",
  gZ =
    "\u0C05\u0C39\u0C4D\u0C35\u0C3E\u0C28 \u0C32\u0C3F\u0C02\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  fZ =
    "\u0C2E\u0C3E\u0C30\u0C28\u0C3F\u0C2A\u0C4D\u0C30\u0C24\u0C3F \u0C32\u0C3F\u0C02\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  SZ =
    "\u0C2C\u0C39\u0C41\u0C15\u0C30\u0C4D\u0C24\u0C32 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41 \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C02\u0C1A\u0C41",
  bZ =
    "\u0C2C\u0C39\u0C41\u0C15\u0C30\u0C4D\u0C24\u0C32 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C41\u0C15\u0C41 \u0C30\u0C3E\u0C2F\u0C3F",
  TZ = "\u0C0E\u0C02\u0C2A\u0C3F\u0C15\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  yZ = "Eraser",
  xZ = "\u0C17\u0C40\u0C2F\u0C4D\u0C2F\u0C3F",
  wZ = "\u0C2C\u0C3E\u0C23\u0C02",
  kZ = "\u0C05\u0C15\u0C4D\u0C37\u0C30\u0C2E\u0C41\u0C32\u0C41",
  vZ = "\u0C05\u0C24\u0C41\u0C15\u0C4D\u0C15\u0C41\u0C28\u0C47",
  IZ =
    "\u0C26\u0C40\u0C30\u0C4D\u0C18\u0C1A\u0C24\u0C41\u0C30\u0C38\u0C4D\u0C30\u0C02",
  CZ = "\u0C26\u0C40\u0C30\u0C4D\u0C18\u0C35\u0C43\u0C24\u0C4D\u0C24\u0C02",
  DZ = "\u0C24\u0C4D\u0C30\u0C3F\u0C2D\u0C41\u0C1C\u0C02",
  PZ = "\u0C17\u0C40\u0C24",
  MZ = "\u0C24\u0C3F\u0C2A\u0C4D\u0C2A\u0C41",
  BZ =
    "\u0C06\u0C38\u0C4D\u0C2A\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C28\u0C3F\u0C37\u0C4D\u0C2A\u0C24\u0C4D\u0C24\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C33\u0C02\u0C2A\u0C46\u0C1F\u0C4D\u0C1F\u0C41",
  EZ =
    "\u0C06\u0C38\u0C4D\u0C2A\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C28\u0C3F\u0C37\u0C4D\u0C2A\u0C24\u0C4D\u0C24\u0C3F \u0C24\u0C3E\u0C33\u0C02\u0C24\u0C46\u0C30\u0C41\u0C35\u0C41",
  RZ =
    "\u0C17\u0C41\u0C02\u0C2A\u0C41\u0C17\u0C3E \u0C0F\u0C30\u0C4D\u0C2A\u0C30\u0C1A\u0C41",
  AZ =
    "\u0C17\u0C41\u0C02\u0C2A\u0C41\u0C28\u0C41 \u0C1A\u0C46\u0C26\u0C30\u0C17\u0C4A\u0C1F\u0C4D\u0C1F\u0C41",
  LZ = "\u0C06\u0C16\u0C30\u0C3F\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  HZ =
    "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41 \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  zZ =
    "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C15\u0C41 \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  OZ =
    "\u0C2E\u0C4A\u0C26\u0C1F\u0C3F\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  FZ = "\u0C15\u0C4B\u0C23\u0C02 \u0C30\u0C40\u0C38\u0C46\u0C1F\u0C4D",
  jZ = "\u0C24\u0C3E\u0C33\u0C02 \u0C35\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  GZ = "\u0C24\u0C3E\u0C33\u0C02 \u0C24\u0C3F\u0C2F\u0C4D\u0C2F\u0C3F",
  VZ =
    " \u0C38\u0C30\u0C3F\u0C2A\u0C30\u0C1A\u0C41/\u0C35\u0C46\u0C26\u0C1C\u0C32\u0C4D\u0C32\u0C41",
  $Z =
    "\u0C2A\u0C41\u0C1F\u0C32\u0C4B\u0C15\u0C3F \u0C1C\u0C30\u0C41\u0C2A\u0C41",
  NZ =
    "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2A\u0C32\u0C4D\u0C1F\u0C40",
  WZ =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2A\u0C32\u0C4D\u0C1F\u0C40",
  UZ = "\u0C1C\u0C30\u0C41\u0C2A\u0C41",
  KZ = "\u0C2E\u0C4A\u0C26\u0C1F\u0C3F\u0C15\u0C3F",
  _Z = "\u0C2E\u0C41\u0C02\u0C26\u0C41\u0C15\u0C41",
  YZ = "\u0C35\u0C46\u0C28\u0C41\u0C15\u0C15\u0C41",
  ZZ = "\u0C06\u0C16\u0C30\u0C3F\u0C15\u0C3F",
  XZ = "\u0C2D\u0C3E\u0C37",
  qZ =
    "\u0C2E\u0C30\u0C3F \u0C15\u0C4A\u0C28\u0C4D\u0C28\u0C3F \u0C35\u0C3F\u0C37\u0C2F\u0C3E\u0C32\u0C41",
  JZ = "\u0C2E\u0C02\u0C1A \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C02",
  QZ = "\u0C05\u0C21\u0C41\u0C17\u0C41\u0C28",
  eX = "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41",
  tX = "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41",
  nX = "\u0C2A\u0C48\u0C28",
  oX = "\u0C2A\u0C41\u0C24",
  rX =
    "\u0C15\u0C40\u0C2C\u0C4B\u0C30\u0C4D\u0C21\u0C4D \u0C38\u0C24\u0C4D\u0C35\u0C30\u0C2E\u0C3E\u0C30\u0C4D\u0C17\u0C02",
  sX = "\u0C35\u0C46\u0C24\u0C41\u0C15\u0C41",
  iX = "Loading{dots}",
  aX =
    "\u0C28\u0C47\u0C2A\u0C25\u0C4D\u0C2F\u0C02 \u0C0E\u0C17\u0C41\u0C2E\u0C24\u0C3F",
  lX =
    "\u0C15\u0C3E\u0C02\u0C24\u0C3F \u0C2D\u0C47\u0C26\u0C4D\u0C2F\u0C2E\u0C41",
  dX = "\u0C38\u0C4D\u0C35\u0C2F\u0C02\u0C15\u0C43\u0C24\u0C02",
  cX = "\u0C35\u0C46\u0C32\u0C41\u0C24\u0C41\u0C30\u0C41",
  pX = "\u0C1A\u0C40\u0C15\u0C1F\u0C3F",
  uX = "Github",
  hX = "Twitter",
  mX = "Discord",
  gX = "\u0C1A\u0C3F\u0C24\u0C4D\u0C30\u0C02",
  fX =
    "\u0C0E\u0C21\u0C2E\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  SX =
    "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  bX =
    "\u0C15\u0C41\u0C21\u0C3F\u0C35\u0C48\u0C2A\u0C41\u0C15\u0C41 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  TX =
    "\u0C2A\u0C48\u0C15\u0C3F \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  yX =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2E\u0C27\u0C4D\u0C2F\u0C32\u0C4B \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  xX =
    "\u0C05\u0C21\u0C41\u0C17\u0C41\u0C28 \u0C15\u0C41\u0C26\u0C41\u0C30\u0C4D\u0C1A\u0C41",
  wX = "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C2A\u0C02\u0C1A\u0C41",
  kX =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C2A\u0C02\u0C1A\u0C41",
  vX = "\u0C05\u0C21\u0C4D\u0C21\u0C02\u0C17\u0C3E \u0C32\u0C3E\u0C17\u0C41",
  IX =
    "\u0C28\u0C3F\u0C32\u0C41\u0C35\u0C41\u0C17\u0C3E \u0C32\u0C3E\u0C17\u0C41",
  CX =
    "\u0C2E\u0C40\u0C30\u0C41 \u0C08 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C2A\u0C30\u0C1A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E?",
  DX =
    "\u0C2E\u0C40\u0C30\u0C41 \u0C08 \u0C2A\u0C4D\u0C30\u0C3E\u0C1C\u0C46\u0C15\u0C4D\u0C1F\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C2A\u0C30\u0C1A\u0C41\u0C15\u0C4B\u0C35\u0C3E\u0C32\u0C28\u0C3F \u0C05\u0C28\u0C41\u0C15\u0C41\u0C02\u0C1F\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C3E?",
  PX = "\u0C30\u0C26\u0C4D\u0C26\u0C41\u0C1A\u0C46\u0C2F\u0C4D\u0C2F\u0C3F",
  MX = "\u0C35\u0C26\u0C4D\u0C26\u0C41",
  BX = "\u0C38\u0C30\u0C47",
  EX =
    "\u0C2B\u0C48\u0C32\u0C4D \u0C2A\u0C46\u0C30\u0C41 \u0C1A\u0C46\u0C2A\u0C4D\u0C2A\u0C02\u0C21\u0C3F",
  wa = {
    "style.menu.color": gY,
    "style.menu.fill": fY,
    "style.menu.dash": SY,
    "style.menu.size": bY,
    "style.menu.keep.open": TY,
    "style.menu.font": yY,
    "style.menu.align": xY,
    styles: wY,
    "zoom.in": kY,
    "zoom.out": vY,
    to: IY,
    "menu.tools": CY,
    "menu.transform": DY,
    "menu.file": PY,
    "menu.edit": MY,
    "menu.view": BY,
    "menu.preferences": EY,
    "menu.sign.in": RY,
    "menu.sign.out": AY,
    "become.a.sponsor": LY,
    "zoom.to.content": HY,
    "zoom.to.selection": zY,
    "zoom.to.fit": OY,
    "zoom.to": FY,
    "preferences.dark.mode": jY,
    "preferences.focus.mode": GY,
    "preferences.debug.mode": VY,
    "preferences.show.grid": $Y,
    "preferences.use.cad.selection": NY,
    "preferences.keep.stylemenu.open": WY,
    "preferences.always.show.snaps": UY,
    "preferences.rotate.handles": KY,
    "preferences.binding.handles": _Y,
    "preferences.clone.handles": YY,
    undo: ZY,
    redo: XY,
    cut: qY,
    copy: JY,
    paste: QY,
    "copy.as": eZ,
    "export.as": tZ,
    "select.all": nZ,
    "select.none": oZ,
    delete: rZ,
    "new.project": sZ,
    open: iZ,
    save: aZ,
    "save.as": lZ,
    "upload.media": dZ,
    "create.page": cZ,
    "new.page": pZ,
    "page.name": uZ,
    duplicate: hZ,
    cancel: mZ,
    "copy.invite.link": gZ,
    "copy.readonly.link": fZ,
    "create.multiplayer.project": SZ,
    "copy.multiplayer.project": bZ,
    select: TZ,
    eraser: yZ,
    draw: xZ,
    arrow: wZ,
    text: kZ,
    sticky: vZ,
    rectangle: IZ,
    ellipse: CZ,
    triangle: DZ,
    line: PZ,
    rotate: MZ,
    "lock.aspect.ratio": BZ,
    "unlock.aspect.ratio": EZ,
    group: RZ,
    ungroup: AZ,
    "move.to.back": LZ,
    "move.backward": HZ,
    "move.forward": zZ,
    "move.to.front": OZ,
    "reset.angle": FZ,
    lock: jZ,
    unlock: GZ,
    "align.distribute": VZ,
    "move.to.page": $Z,
    "flip.horizontal": NZ,
    "flip.vertical": WZ,
    move: UZ,
    "to.front": KZ,
    forward: _Z,
    backward: YZ,
    back: ZZ,
    language: XZ,
    "translation.link": qZ,
    "dock.position": JZ,
    bottom: QZ,
    left: eX,
    right: tX,
    top: nX,
    page: oX,
    "keyboard.shortcuts": rX,
    search: sX,
    loading: iX,
    "export.background": aX,
    transparent: lX,
    auto: dX,
    light: cX,
    dark: pX,
    github: uX,
    twitter: hX,
    discord: mX,
    image: gX,
    "align.left": fX,
    "align.center.x": SX,
    "align.right": bX,
    "align.top": TX,
    "align.center.y": yX,
    "align.bottom": xX,
    "distribute.x": wX,
    "distribute.y": kX,
    "stretch.x": vX,
    "stretch.y": IX,
    "dialog.save.firsttime": CX,
    "dialog.save.again": DX,
    "dialog.cancel": PX,
    "dialog.no": MX,
    "dialog.yes": BX,
    "enter.file.name": EX,
  };
var RX = "\u0E2A\u0E35",
  AX = "\u0E40\u0E15\u0E34\u0E21",
  LX = "\u0E01\u0E23\u0E2D\u0E1A",
  HX = "\u0E02\u0E19\u0E32\u0E14",
  zX = "\u0E40\u0E1B\u0E34\u0E14\u0E17\u0E34\u0E49\u0E07\u0E44\u0E27\u0E49",
  OX = "\u0E41\u0E1A\u0E1A\u0E2D\u0E31\u0E01\u0E29\u0E23",
  FX = "\u0E08\u0E31\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07",
  jX = "\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A",
  GX = "\u0E0B\u0E39\u0E21\u0E40\u0E02\u0E49\u0E32",
  VX = "\u0E0B\u0E39\u0E21\u0E2D\u0E2D\u0E01",
  $X = "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48",
  NX = "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
  WX = "\u0E41\u0E1B\u0E25\u0E07",
  UX = "\u0E44\u0E1F\u0E25\u0E4C",
  KX = "\u0E41\u0E01\u0E49\u0E44\u0E02",
  _X = "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07",
  YX = "\u0E01\u0E32\u0E23\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32",
  ZX = "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A",
  XX = "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A",
  qX =
    "\u0E23\u0E48\u0E27\u0E21\u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E1B\u0E2D\u0E19\u0E40\u0E0B\u0E2D\u0E23\u0E4C",
  JX =
    "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32",
  QX =
    "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2A\u0E48\u0E27\u0E19\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  eq =
    "\u0E0B\u0E39\u0E21\u0E43\u0E2B\u0E49\u0E40\u0E15\u0E47\u0E21\u0E1E\u0E2D\u0E14\u0E35",
  tq = "\u0E0B\u0E39\u0E21\u0E44\u0E1B\u0E17\u0E35\u0E48",
  nq = "\u0E42\u0E2B\u0E21\u0E14\u0E21\u0E37\u0E14",
  oq = "\u0E42\u0E2B\u0E21\u0E14\u0E42\u0E1F\u0E01\u0E31\u0E2A",
  rq = "\u0E42\u0E2B\u0E21\u0E14\u0E14\u0E35\u0E1A\u0E31\u0E01",
  sq = "\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E32\u0E23\u0E32\u0E07",
  iq = "\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E1A CAD",
  aq =
    "\u0E40\u0E1B\u0E34\u0E14\u0E40\u0E21\u0E19\u0E39\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E34\u0E49\u0E07\u0E44\u0E27\u0E49",
  lq =
    "\u0E41\u0E2A\u0E14\u0E07\u0E2A\u0E41\u0E19\u0E1B\u0E15\u0E25\u0E2D\u0E14",
  dq =
    "\u0E41\u0E2A\u0E14\u0E07\u0E08\u0E38\u0E14\u0E08\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E2B\u0E21\u0E38\u0E19",
  cq =
    "\u0E41\u0E2A\u0E14\u0E07\u0E2B\u0E21\u0E32\u0E22\u0E40\u0E25\u0E02\u0E2D\u0E49\u0E32\u0E07\u0E2D\u0E34\u0E07",
  pq = "\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E31\u0E27\u0E42\u0E04\u0E25\u0E19",
  uq = "\u0E40\u0E25\u0E34\u0E01\u0E17\u0E33",
  hq = "\u0E17\u0E33\u0E0B\u0E49\u0E33",
  mq = "\u0E15\u0E31\u0E14",
  gq = "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01",
  fq = "\u0E27\u0E32\u0E07",
  Sq = "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19",
  bq = "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E40\u0E1B\u0E47\u0E19",
  Tq =
    "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",
  yq =
    "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01",
  xq = "\u0E25\u0E1A",
  wq =
    "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E43\u0E2B\u0E21\u0E48",
  kq = "\u0E40\u0E1B\u0E34\u0E14",
  vq = "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01",
  Iq = "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E40\u0E1B\u0E47\u0E19",
  Cq =
    "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22",
  Dq = "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
  Pq = "\u0E2B\u0E19\u0E49\u0E32\u0E43\u0E2B\u0E21\u0E48",
  Mq = "\u0E0A\u0E37\u0E48\u0E2D\u0E2B\u0E19\u0E49\u0E32",
  Bq = "\u0E2A\u0E33\u0E40\u0E19\u0E32",
  Eq = "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  Rq =
    "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E40\u0E0A\u0E34\u0E0D",
  Aq =
    "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E41\u0E1A\u0E1A\u0E43\u0E2B\u0E49\u0E2D\u0E48\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E14\u0E35\u0E22\u0E27",
  Lq =
    "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E19",
  Hq =
    "\u0E04\u0E31\u0E14\u0E25\u0E2D\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2B\u0E25\u0E32\u0E22\u0E04\u0E19",
  zq = "\u0E40\u0E25\u0E37\u0E2D\u0E01",
  Oq = "\u0E22\u0E32\u0E07\u0E25\u0E1A",
  Fq = "\u0E27\u0E32\u0E14",
  jq = "\u0E25\u0E39\u0E01\u0E28\u0E23",
  Gq = "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21",
  Vq = "\u0E01\u0E23\u0E30\u0E14\u0E32\u0E29\u0E42\u0E19\u0E4A\u0E15",
  $q =
    "\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21\u0E1C\u0E37\u0E19\u0E1C\u0E49\u0E32",
  Nq = "\u0E27\u0E07\u0E23\u0E35",
  Wq = "\u0E2A\u0E32\u0E21\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E21",
  Uq = "\u0E40\u0E2A\u0E49\u0E19",
  Kq = "\u0E2B\u0E21\u0E38\u0E19",
  _q =
    "\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E20\u0E32\u0E1E",
  Yq =
    "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E01\u0E2D\u0E31\u0E15\u0E23\u0E32\u0E2A\u0E48\u0E27\u0E19\u0E20\u0E32\u0E1E",
  Zq = "\u0E01\u0E25\u0E38\u0E48\u0E21",
  Xq = "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E25\u0E38\u0E48\u0E21",
  qq =
    "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
  Jq = "\u0E02\u0E22\u0E31\u0E1A\u0E16\u0E2D\u0E22\u0E2B\u0E25\u0E31\u0E07",
  Qq = "\u0E02\u0E22\u0E31\u0E1A\u0E44\u0E1B\u0E2B\u0E19\u0E49\u0E32",
  eJ =
    "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
  tJ = "\u0E23\u0E35\u0E40\u0E0B\u0E47\u0E15\u0E21\u0E38\u0E21",
  nJ = "\u0E25\u0E47\u0E2D\u0E04",
  oJ = "\u0E1B\u0E25\u0E14\u0E25\u0E47\u0E2D\u0E04",
  rJ =
    "\u0E08\u0E31\u0E14\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07 / \u0E01\u0E23\u0E30\u0E08\u0E32\u0E22",
  sJ =
    "\u0E22\u0E49\u0E32\u0E22\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32",
  iJ = "\u0E1E\u0E25\u0E34\u0E01\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  aJ = "\u0E1E\u0E25\u0E34\u0E01\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  lJ = "\u0E22\u0E49\u0E32\u0E22",
  dJ =
    "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32",
  cJ = "\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32",
  pJ = "\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E25\u0E31\u0E07",
  uJ =
    "\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07",
  hJ = "\u0E20\u0E32\u0E29\u0E32",
  mJ =
    "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21",
  gJ =
    "\u0E15\u0E33\u0E41\u0E2B\u0E19\u0E48\u0E07\u0E41\u0E16\u0E1A\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
  fJ = "\u0E02\u0E49\u0E32\u0E07\u0E25\u0E48\u0E32\u0E07",
  SJ = "\u0E02\u0E49\u0E32\u0E07\u0E0B\u0E49\u0E32\u0E22",
  bJ = "\u0E02\u0E49\u0E32\u0E07\u0E02\u0E27\u0E32",
  TJ = "\u0E02\u0E49\u0E32\u0E07\u0E1A\u0E19",
  yJ = "\u0E2B\u0E19\u0E49\u0E32",
  xJ =
    "\u0E41\u0E1B\u0E49\u0E19\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E25\u0E31\u0E14",
  wJ = "\u0E04\u0E49\u0E19\u0E2B\u0E32",
  kJ = "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14{dots}",
  vJ =
    "\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E1E\u0E37\u0E49\u0E19\u0E2B\u0E25\u0E31\u0E07",
  IJ = "\u0E42\u0E1B\u0E23\u0E48\u0E07\u0E43\u0E2A",
  CJ = "\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34",
  DJ = "\u0E2A\u0E27\u0E48\u0E32\u0E07",
  PJ = "\u0E21\u0E37\u0E14",
  MJ = "Github",
  BJ = "Twitter",
  EJ = "Discord",
  RJ = "\u0E20\u0E32\u0E1E",
  AJ =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E0A\u0E34\u0E14\u0E0B\u0E49\u0E32\u0E22",
  LJ =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  HJ =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E0A\u0E34\u0E14\u0E02\u0E27\u0E32",
  zJ =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19",
  OJ =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E01\u0E36\u0E48\u0E07\u0E01\u0E25\u0E32\u0E07\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  FJ =
    "\u0E08\u0E31\u0E14\u0E43\u0E2B\u0E49\u0E2D\u0E22\u0E39\u0E48\u0E14\u0E49\u0E32\u0E19\u0E25\u0E48\u0E32\u0E07",
  jJ =
    "\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  GJ =
    "\u0E01\u0E23\u0E30\u0E08\u0E32\u0E22\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  VJ = "\u0E22\u0E37\u0E14\u0E41\u0E19\u0E27\u0E19\u0E2D\u0E19",
  $J = "\u0E22\u0E37\u0E14\u0E41\u0E19\u0E27\u0E15\u0E31\u0E49\u0E07",
  NJ =
    "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E47\u0E01\u0E15\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  WJ =
    "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E43\u0E19\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E47\u0E01\u0E15\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",
  UJ = "\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01",
  KJ = "\u0E44\u0E21\u0E48",
  _J = "\u0E43\u0E0A\u0E48",
  YJ =
    "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C",
  ka = {
    "style.menu.color": RX,
    "style.menu.fill": AX,
    "style.menu.dash": LX,
    "style.menu.size": HX,
    "style.menu.keep.open": zX,
    "style.menu.font": OX,
    "style.menu.align": FX,
    styles: jX,
    "zoom.in": GX,
    "zoom.out": VX,
    to: $X,
    "menu.tools": NX,
    "menu.transform": WX,
    "menu.file": UX,
    "menu.edit": KX,
    "menu.view": _X,
    "menu.preferences": YX,
    "menu.sign.in": ZX,
    "menu.sign.out": XX,
    "become.a.sponsor": qX,
    "zoom.to.content": JX,
    "zoom.to.selection": QX,
    "zoom.to.fit": eq,
    "zoom.to": tq,
    "preferences.dark.mode": nq,
    "preferences.focus.mode": oq,
    "preferences.debug.mode": rq,
    "preferences.show.grid": sq,
    "preferences.use.cad.selection": iq,
    "preferences.keep.stylemenu.open": aq,
    "preferences.always.show.snaps": lq,
    "preferences.rotate.handles": dq,
    "preferences.binding.handles": cq,
    "preferences.clone.handles": pq,
    undo: uq,
    redo: hq,
    cut: mq,
    copy: gq,
    paste: fq,
    "copy.as": Sq,
    "export.as": bq,
    "select.all": Tq,
    "select.none": yq,
    delete: xq,
    "new.project": wq,
    open: kq,
    save: vq,
    "save.as": Iq,
    "upload.media": Cq,
    "create.page": Dq,
    "new.page": Pq,
    "page.name": Mq,
    duplicate: Bq,
    cancel: Eq,
    "copy.invite.link": Rq,
    "copy.readonly.link": Aq,
    "create.multiplayer.project": Lq,
    "copy.multiplayer.project": Hq,
    select: zq,
    eraser: Oq,
    draw: Fq,
    arrow: jq,
    text: Gq,
    sticky: Vq,
    rectangle: $q,
    ellipse: Nq,
    triangle: Wq,
    line: Uq,
    rotate: Kq,
    "lock.aspect.ratio": _q,
    "unlock.aspect.ratio": Yq,
    group: Zq,
    ungroup: Xq,
    "move.to.back": qq,
    "move.backward": Jq,
    "move.forward": Qq,
    "move.to.front": eJ,
    "reset.angle": tJ,
    lock: nJ,
    unlock: oJ,
    "align.distribute": rJ,
    "move.to.page": sJ,
    "flip.horizontal": iJ,
    "flip.vertical": aJ,
    move: lJ,
    "to.front": dJ,
    forward: cJ,
    backward: pJ,
    back: uJ,
    language: hJ,
    "translation.link": mJ,
    "dock.position": gJ,
    bottom: fJ,
    left: SJ,
    right: bJ,
    top: TJ,
    page: yJ,
    "keyboard.shortcuts": xJ,
    search: wJ,
    loading: kJ,
    "export.background": vJ,
    transparent: IJ,
    auto: CJ,
    light: DJ,
    dark: PJ,
    github: MJ,
    twitter: BJ,
    discord: EJ,
    image: RJ,
    "align.left": AJ,
    "align.center.x": LJ,
    "align.right": HJ,
    "align.top": zJ,
    "align.center.y": OJ,
    "align.bottom": FJ,
    "distribute.x": jJ,
    "distribute.y": GJ,
    "stretch.x": VJ,
    "stretch.y": $J,
    "dialog.save.firsttime": NJ,
    "dialog.save.again": WJ,
    "dialog.cancel": UJ,
    "dialog.no": KJ,
    "dialog.yes": _J,
    "enter.file.name": YJ,
  };
var ZJ = "Renk",
  XJ = "Doldur",
  qJ = "\xC7izgi",
  JJ = "Boyut",
  QJ = "A\xE7\u0131k Tut",
  eQ = "Yaz\u0131 Tipi",
  tQ = "Hizala",
  nQ = "Stiller",
  oQ = "Yak\u0131nla\u015Ft\u0131r",
  rQ = "Uzakla\u015Ft\u0131r",
  sQ = "",
  iQ = "Dosya",
  aQ = "D\xFCzenle",
  lQ = "G\xF6r\xFCnt\xFC",
  dQ = "Tercihler",
  cQ = "Giri\u015F Yap",
  pQ = "Oturumu Kapat",
  uQ = "Sponsor Ol",
  hQ = "Se\xE7ime Yak\u0131nla\u015Ft\u0131r",
  mQ = "S\u0131\u011Fd\u0131rmak i\xE7in Yak\u0131nla\u015Ft\u0131r",
  gQ = "Yak\u0131nla\u015Ft\u0131r",
  fQ = "Karanl\u0131k Mod",
  SQ = "Odak Modu",
  bQ = "Debug Modu",
  TQ = "Izgaray\u0131 G\xF6ster",
  yQ = "CAD Se\xE7imi Kullan",
  xQ = "Stil Men\xFCs\xFCn\xFC A\xE7\u0131k Tut",
  wQ = "Hiza \xC7izgilerini Hep G\xF6ster",
  kQ = "Rotasyon Kontrolc\xFCleri",
  vQ = "Ba\u011Flama Kontrolc\xFCleri",
  IQ = "Klon Kontrolc\xFCleri",
  CQ = "Geri Al",
  DQ = "Yinele",
  PQ = "Kes",
  MQ = "Kopyala",
  BQ = "Yap\u0131\u015Ft\u0131r",
  EQ = "Olarak Kopyala",
  RQ = "Olarak D\u0131\u015Far\u0131 Aktar",
  AQ = "Hepsini Se\xE7",
  LQ = "Hi\xE7birini Se\xE7me",
  HQ = "Sil",
  zQ = "Yeni Proje",
  OQ = "A\xE7",
  FQ = "Kaydet",
  jQ = "Farkl\u0131 Kaydet",
  GQ = "Medya Y\xFCkle",
  VQ = "Sayfa Olu\u015Ftur",
  $Q = "Yeni Sayfa",
  NQ = "Sayfa \u0130smi",
  WQ = "Kopya Olu\u015Ftur",
  UQ = "\u0130ptal",
  KQ = "Davet Linkini Kopyala",
  _Q = "\xC7ok Oyunculu Proje Olu\u015Ftur",
  YQ = "\xC7ok Oyunculu Projeye Kopyala",
  ZQ = "Se\xE7",
  XQ = "Silgi",
  qQ = "\xC7izim",
  JQ = "Ok",
  QQ = "Yaz\u0131",
  eee = "Yap\u0131\u015Fkan",
  tee = "Dikd\xF6rtgen",
  nee = "Elips",
  oee = "\xDC\xE7gen",
  ree = "\xC7izgi",
  see = "D\xF6nd\xFCr",
  iee = "En Boy Oran\u0131n\u0131 Kilitle",
  aee = "En Boy Oran\u0131 Kilidini A\xE7",
  lee = "Grupla",
  dee = "Gruplamay\u0131 Kald\u0131r",
  cee = "Arkaya Ta\u015F\u0131",
  pee = "En Arkaya Ta\u015F\u0131",
  uee = "En \xD6ne Ta\u015F\u0131",
  hee = "\xD6ne Ta\u015F\u0131",
  mee = "A\xE7\u0131y\u0131 S\u0131f\u0131rla",
  gee = "Kilitle",
  fee = "Kilidini A\xE7",
  See = "Sayfaya Ta\u015F\u0131",
  bee = "Yatay \xC7evir",
  Tee = "Dikey \xC7evir",
  yee = "Ta\u015F\u0131",
  xee = "\xD6ne",
  wee = "En \xD6ne",
  kee = "En Arkaya",
  vee = "Arkaya",
  Iee = "Dil",
  va = {
    "style.menu.color": ZJ,
    "style.menu.fill": XJ,
    "style.menu.dash": qJ,
    "style.menu.size": JJ,
    "style.menu.keep.open": QJ,
    "style.menu.font": eQ,
    "style.menu.align": tQ,
    styles: nQ,
    "zoom.in": oQ,
    "zoom.out": rQ,
    to: sQ,
    "menu.file": iQ,
    "menu.edit": aQ,
    "menu.view": lQ,
    "menu.preferences": dQ,
    "menu.sign.in": cQ,
    "menu.sign.out": pQ,
    "become.a.sponsor": uQ,
    "zoom.to.selection": hQ,
    "zoom.to.fit": mQ,
    "zoom.to": gQ,
    "preferences.dark.mode": fQ,
    "preferences.focus.mode": SQ,
    "preferences.debug.mode": bQ,
    "preferences.show.grid": TQ,
    "preferences.use.cad.selection": yQ,
    "preferences.keep.stylemenu.open": xQ,
    "preferences.always.show.snaps": wQ,
    "preferences.rotate.handles": kQ,
    "preferences.binding.handles": vQ,
    "preferences.clone.handles": IQ,
    undo: CQ,
    redo: DQ,
    cut: PQ,
    copy: MQ,
    paste: BQ,
    "copy.as": EQ,
    "export.as": RQ,
    "select.all": AQ,
    "select.none": LQ,
    delete: HQ,
    "new.project": zQ,
    open: OQ,
    save: FQ,
    "save.as": jQ,
    "upload.media": GQ,
    "create.page": VQ,
    "new.page": $Q,
    "page.name": NQ,
    duplicate: WQ,
    cancel: UQ,
    "copy.invite.link": KQ,
    "create.multiplayer.project": _Q,
    "copy.multiplayer.project": YQ,
    select: ZQ,
    eraser: XQ,
    draw: qQ,
    arrow: JQ,
    text: QQ,
    sticky: eee,
    rectangle: tee,
    ellipse: nee,
    triangle: oee,
    line: ree,
    rotate: see,
    "lock.aspect.ratio": iee,
    "unlock.aspect.ratio": aee,
    group: lee,
    ungroup: dee,
    "move.to.back": cee,
    "move.backward": pee,
    "move.forward": uee,
    "move.to.front": hee,
    "reset.angle": mee,
    lock: gee,
    unlock: fee,
    "move.to.page": See,
    "flip.horizontal": bee,
    "flip.vertical": Tee,
    move: yee,
    "to.front": xee,
    forward: wee,
    backward: kee,
    back: vee,
    language: Iee,
  };
var Cee = "\u041A\u043E\u043B\u0456\u0440",
  Dee = "\u0417\u0430\u043F\u043E\u0432\u043D\u044E\u0432\u0430\u0442\u0438",
  Pee = "\u0428\u0442\u0440\u0438\u0445",
  Mee = "\u0420\u043E\u0437\u043C\u0456\u0440",
  Bee =
    "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C",
  Eee = "\u0428\u0440\u0438\u0444\u0442",
  Ree = "\u0412\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438",
  Aee = "\u0421\u0442\u0438\u043B\u044C",
  Lee = "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438",
  Hee = "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438",
  zee = "\u0434\u043E",
  Oee = "\u0424\u0430\u0439\u043B",
  Fee = "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F",
  jee = "\u0412\u0438\u0433\u043B\u044F\u0434",
  Gee =
    "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
  Vee = "\u0423\u0432\u0456\u0439\u0442\u0438",
  $ee = "\u0412\u0438\u0439\u0442\u0438",
  Nee =
    "\u0421\u0442\u0430\u0442\u0438 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u043E\u043C",
  Wee =
    "\u041D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438 \u0434\u043E \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  Uee =
    "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0437\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0435\u043A\u0440\u0430\u043D\u0443",
  Kee = "\u041D\u0430\u0431\u043B\u0438\u0437\u0438\u0442\u0438 \u0434\u043E",
  _ee = "\u0422\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430",
  Yee =
    "\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u0456\u0441\u0442\u0438\u0447\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
  Zee =
    "\u0420\u0435\u0436\u0438\u043C \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F",
  Xee =
    "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0456\u0442\u043A\u0443",
  qee =
    "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 CAD \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  Jee =
    "\u0422\u0440\u0438\u043C\u0430\u0442\u0438 \u043C\u0435\u043D\u044E \u0441\u0442\u0438\u043B\u0456\u0432 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C",
  Qee =
    "\u0417\u0430\u0432\u0436\u0434\u0438 \u043F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438",
  ete =
    "\u0420\u0443\u0447\u043A\u0438 \u043E\u0431\u0435\u0440\u0442\u0430\u043D\u043D\u044F",
  tte =
    "\u0420\u0443\u0447\u043A\u0438 \u043F\u0440\u0438\u0432'\u044F\u0437\u043A\u0438",
  nte =
    "\u0420\u0443\u0447\u043A\u0438 \u043A\u043B\u043E\u043D\u0443\u0432\u0430\u043D\u043D\u044F",
  ote = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  rte = "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",
  ste = "\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438",
  ite = "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438",
  ate = "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438",
  lte =
    "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u044F\u043A",
  dte =
    "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u044F\u043A",
  cte = "\u041E\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",
  pte =
    "\u0417\u043D\u044F\u0442\u0438 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
  ute = "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
  hte = "\u041D\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  mte = "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438",
  gte = "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
  fte = "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u044F\u043A",
  Ste =
    "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043C\u0435\u0434\u0456\u0430",
  bte =
    "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
  Tte =
    "\u041D\u043E\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0430",
  yte =
    "\u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
  xte = "\u0414\u0443\u0431\u043B\u044E\u0432\u0430\u0442\u0438",
  wte = "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
  kte =
    "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F",
  vte =
    "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0431\u0430\u0433\u0430\u0442\u043E\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  Ite =
    "\u0421\u043A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0432 \u0431\u0430\u0433\u0430\u0442\u043E\u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044C\u043A\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
  Cte = "\u0412\u0438\u0431\u0438\u0440\u0430\u0442\u0438",
  Dte = "\u041B\u0430\u0441\u0442\u0438\u043A",
  Pte = "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438",
  Mte = "\u0421\u0442\u0440\u0456\u043B\u043A\u0430",
  Bte = "\u0422\u0435\u043A\u0441\u0442",
  Ete = "\u041D\u043E\u0442\u0430\u0442\u043A\u0430",
  Rte = "\u041F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A",
  Ate = "\u0415\u043B\u0456\u043F\u0441",
  Lte = "\u0422\u0440\u0438\u043A\u0443\u0442\u043D\u0438\u043A",
  Hte = " \u041B\u0456\u043D\u0456\u044F",
  zte = "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438",
  Ote =
    "\u0417\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D",
  Fte =
    " \u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u0441\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D",
  jte = "\u0417\u0433\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438",
  Gte =
    " \u0420\u043E\u0437\u0433\u0440\u0443\u043F\u0443\u0432\u0430\u0442\u0438",
  Vte =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430\u0437\u0430\u0434",
  $te =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  Nte =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u0432\u043F\u0435\u0440\u0435\u0434",
  Wte =
    "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  Ute =
    "\u0421\u043A\u0438\u0434\u0430\u043D\u043D\u044F \u043A\u0443\u0442\u0430",
  Kte = "\u0411\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
  _te =
    " \u0420\u043E\u0437\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u043D\u043D\u044F",
  Yte =
    "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443",
  Zte =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
  Xte =
    "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
  qte = "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0438\u0442\u0438",
  Jte =
    "\u041D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  Qte = " \u0412\u043F\u0435\u0440\u0435\u0434",
  ene =
    "\u041D\u0430 \u0437\u0430\u0434\u043D\u0456\u0439 \u043F\u043B\u0430\u043D",
  tne = "\u041D\u0430\u0437\u0430\u0434",
  nne = "\u041C\u043E\u0432\u0430",
  Ia = {
    "style.menu.color": Cee,
    "style.menu.fill": Dee,
    "style.menu.dash": Pee,
    "style.menu.size": Mee,
    "style.menu.keep.open": Bee,
    "style.menu.font": Eee,
    "style.menu.align": Ree,
    styles: Aee,
    "zoom.in": Lee,
    "zoom.out": Hee,
    to: zee,
    "menu.file": Oee,
    "menu.edit": Fee,
    "menu.view": jee,
    "menu.preferences": Gee,
    "menu.sign.in": Vee,
    "menu.sign.out": $ee,
    "become.a.sponsor": Nee,
    "zoom.to.selection": Wee,
    "zoom.to.fit": Uee,
    "zoom.to": Kee,
    "preferences.dark.mode": _ee,
    "preferences.focus.mode": Yee,
    "preferences.debug.mode": Zee,
    "preferences.show.grid": Xee,
    "preferences.use.cad.selection": qee,
    "preferences.keep.stylemenu.open": Jee,
    "preferences.always.show.snaps": Qee,
    "preferences.rotate.handles": ete,
    "preferences.binding.handles": tte,
    "preferences.clone.handles": nte,
    undo: ote,
    redo: rte,
    cut: ste,
    copy: ite,
    paste: ate,
    "copy.as": lte,
    "export.as": dte,
    "select.all": cte,
    "select.none": pte,
    delete: ute,
    "new.project": hte,
    open: mte,
    save: gte,
    "save.as": fte,
    "upload.media": Ste,
    "create.page": bte,
    "new.page": Tte,
    "page.name": yte,
    duplicate: xte,
    cancel: wte,
    "copy.invite.link": kte,
    "create.multiplayer.project": vte,
    "copy.multiplayer.project": Ite,
    select: Cte,
    eraser: Dte,
    draw: Pte,
    arrow: Mte,
    text: Bte,
    sticky: Ete,
    rectangle: Rte,
    ellipse: Ate,
    triangle: Lte,
    line: Hte,
    rotate: zte,
    "lock.aspect.ratio": Ote,
    "unlock.aspect.ratio": Fte,
    group: jte,
    ungroup: Gte,
    "move.to.back": Vte,
    "move.backward": $te,
    "move.forward": Nte,
    "move.to.front": Wte,
    "reset.angle": Ute,
    lock: Kte,
    unlock: _te,
    "move.to.page": Yte,
    "flip.horizontal": Zte,
    "flip.vertical": Xte,
    move: qte,
    "to.front": Jte,
    forward: Qte,
    backward: ene,
    back: tne,
    language: nne,
  };
var one = "\u989C\u8272",
  rne = "\u586B\u5145",
  sne = "\u8FB9\u6846",
  ine = "\u5C3A\u5BF8",
  ane = "\u4FDD\u6301\u5E38\u5F00",
  lne = "\u5B57\u4F53",
  dne = "\u5BF9\u9F50",
  cne = "\u6837\u5F0F",
  pne = "\u653E\u5927",
  une = "\u7F29\u5C0F",
  hne = "\u7F29\u653E\u81F3",
  mne = "\u5DE5\u5177",
  gne = "\u8F6C\u6362",
  fne = "\u6587\u4EF6",
  Sne = "\u7F16\u8F91",
  bne = "\u89C6\u56FE",
  Tne = "\u504F\u597D",
  yne = "\u767B\u5F55",
  xne = "\u767B\u51FA",
  wne = "\u641C\u7D22",
  kne = "\u6210\u4E3A\u8D5E\u52A9\u8005",
  vne = "\u7F29\u653E\u9009\u4E2D",
  Ine = "\u81EA\u9002\u5E94\u7F29\u653E",
  Cne = "\u7F29\u653E\u81F3",
  Dne = "\u7F29\u653E\u81F3\u5185\u5BB9",
  Pne = "\u6697\u9ED1\u6A21\u5F0F",
  Mne = "\u4E13\u6CE8\u6A21\u5F0F",
  Bne = "\u8C03\u8BD5\u6A21\u5F0F",
  Ene = "\u663E\u793A\u7F51\u683C",
  Rne = "\u4F7F\u7528 CAD \u9009\u62E9",
  Ane = "\u4FDD\u6301\u6837\u5F0F\u83DC\u5355\u5E38\u5F00",
  Lne = "\u603B\u662F\u5C55\u793A\u5BF9\u9F50\u7EBF",
  Hne = "\u65CB\u8F6C\u624B\u67C4",
  zne = "\u6346\u7ED1\u624B\u67C4",
  One = "\u514B\u9686\u624B\u67C4",
  Fne = "\u64A4\u9500",
  jne = "\u91CD\u505A",
  Gne = "\u526A\u5207",
  Vne = "\u590D\u5236",
  $ne = "\u7C98\u8D34",
  Nne = "\u590D\u5236\u4E3A",
  Wne = "\u5BFC\u51FA\u4E3A",
  Une = "\u9009\u4E2D\u5168\u90E8",
  Kne = "\u53D6\u6D88\u9009\u4E2D",
  _ne = "\u5220\u9664",
  Yne = "\u65B0\u9879\u76EE",
  Zne = "\u6253\u5F00",
  Xne = "\u4FDD\u5B58",
  qne = "\u4FDD\u5B58\u4E3A",
  Jne = "\u4E0A\u4F20\u5A92\u4F53\u6587\u4EF6",
  Qne = "\u521B\u5EFA\u9875\u9762",
  eoe = "\u65B0\u9875\u9762",
  toe = "\u9875\u9762\u540D\u79F0",
  noe = "\u590D\u5236",
  ooe = "\u53D6\u6D88",
  roe = "\u590D\u5236\u9080\u8BF7\u94FE\u63A5",
  soe = "\u521B\u5EFA\u591A\u4EBA\u9879\u76EE",
  ioe = "\u590D\u5236\u5230\u591A\u4EBA\u9879\u76EE",
  aoe = "\u9009\u62E9",
  loe = "\u6A61\u76AE",
  doe = "\u753B\u7B14",
  coe = "\u7BAD\u5934",
  poe = "\u6587\u672C",
  uoe = "\u4FBF\u5229\u8D34",
  hoe = "\u77E9\u5F62",
  moe = "\u692D\u5706\u5F62",
  goe = "\u4E09\u89D2\u5F62",
  foe = "\u76F4\u7EBF",
  Soe = "\u65CB\u8F6C",
  boe = "\u9501\u5B9A\u5BBD\u9AD8\u6BD4",
  Toe = "\u89E3\u9501\u5BBD\u9AD8\u6BD4",
  yoe = "\u5206\u7EC4",
  xoe = "\u53D6\u6D88\u5206\u7EC4",
  woe = "\u7F6E\u5E95",
  koe = "\u4E0B\u79FB\u4E00\u5C42",
  voe = "\u4E0A\u79FB\u4E00\u5C42",
  Ioe = "\u7F6E\u9876",
  Coe = "\u91CD\u7F6E\u65CB\u8F6C\u89D2\u5EA6",
  Doe = "\u9501\u5B9A",
  Poe = "\u89E3\u9501",
  Moe = "\u79FB\u52A8\u5230\u9875\u9762",
  Boe = "\u6C34\u5E73\u7FFB\u8F6C",
  Eoe = "\u5782\u76F4\u7FFB\u8F6C",
  Roe = "\u79FB\u52A8",
  Aoe = "\u7F6E\u9876",
  Loe = "\u4E0A\u4E00\u5C42",
  Hoe = "\u4E0B\u4E00\u5C42",
  zoe = "\u7F6E\u5E95",
  Ooe = "\u8BED\u8A00",
  Foe = "\u952E\u76D8\u5FEB\u6377\u952E",
  joe = "\u4E86\u89E3\u66F4\u591A",
  Goe = "\u9875\u9762",
  Voe = "\u951A\u70B9\u4F4D\u7F6E",
  $oe = "\u4E0B\u9762",
  Noe = "\u5DE6\u9762",
  Woe = "\u53F3\u9762",
  Uoe = "\u4E0A\u9762",
  Koe = "\u5BFC\u51FA\u80CC\u666F\u8272",
  _oe = "\u900F\u660E",
  Yoe = "\u81EA\u52A8",
  Zoe = "\u660E\u4EAE",
  Xoe = "\u6697\u9ED1",
  qoe = "\u590D\u5236\u53EA\u8BFB\u94FE\u63A5",
  Joe = "\u56FE\u7247",
  Qoe = "\u5BF9\u9F50 / \u5206\u6563",
  ere =
    "\u60A8\u662F\u5426\u60F3\u4FDD\u5B58\u5F53\u524D\u7684\u9879\u76EE\uFF1F",
  tre =
    "\u60A8\u662F\u5426\u60F3\u4FDD\u5B58\u5BF9\u5F53\u524D\u9879\u76EE\u7684\u66F4\u6539\uFF1F",
  nre = "\u53D6\u6D88",
  ore = "\u5426",
  rre = "\u662F",
  Ca = {
    "style.menu.color": one,
    "style.menu.fill": rne,
    "style.menu.dash": sne,
    "style.menu.size": ine,
    "style.menu.keep.open": ane,
    "style.menu.font": lne,
    "style.menu.align": dne,
    styles: cne,
    "zoom.in": pne,
    "zoom.out": une,
    to: hne,
    "menu.tools": mne,
    "menu.transform": gne,
    "menu.file": fne,
    "menu.edit": Sne,
    "menu.view": bne,
    "menu.preferences": Tne,
    "menu.sign.in": yne,
    "menu.sign.out": xne,
    search: wne,
    "become.a.sponsor": kne,
    "zoom.to.selection": vne,
    "zoom.to.fit": Ine,
    "zoom.to": Cne,
    "zoom.to.content": Dne,
    "preferences.dark.mode": Pne,
    "preferences.focus.mode": Mne,
    "preferences.debug.mode": Bne,
    "preferences.show.grid": Ene,
    "preferences.use.cad.selection": Rne,
    "preferences.keep.stylemenu.open": Ane,
    "preferences.always.show.snaps": Lne,
    "preferences.rotate.handles": Hne,
    "preferences.binding.handles": zne,
    "preferences.clone.handles": One,
    undo: Fne,
    redo: jne,
    cut: Gne,
    copy: Vne,
    paste: $ne,
    "copy.as": Nne,
    "export.as": Wne,
    "select.all": Une,
    "select.none": Kne,
    delete: _ne,
    "new.project": Yne,
    open: Zne,
    save: Xne,
    "save.as": qne,
    "upload.media": Jne,
    "create.page": Qne,
    "new.page": eoe,
    "page.name": toe,
    duplicate: noe,
    cancel: ooe,
    "copy.invite.link": roe,
    "create.multiplayer.project": soe,
    "copy.multiplayer.project": ioe,
    select: aoe,
    eraser: loe,
    draw: doe,
    arrow: coe,
    text: poe,
    sticky: uoe,
    rectangle: hoe,
    ellipse: moe,
    triangle: goe,
    line: foe,
    rotate: Soe,
    "lock.aspect.ratio": boe,
    "unlock.aspect.ratio": Toe,
    group: yoe,
    ungroup: xoe,
    "move.to.back": woe,
    "move.backward": koe,
    "move.forward": voe,
    "move.to.front": Ioe,
    "reset.angle": Coe,
    lock: Doe,
    unlock: Poe,
    "move.to.page": Moe,
    "flip.horizontal": Boe,
    "flip.vertical": Eoe,
    move: Roe,
    "to.front": Aoe,
    forward: Loe,
    backward: Hoe,
    back: zoe,
    language: Ooe,
    "keyboard.shortcuts": Foe,
    "translation.link": joe,
    page: Goe,
    "dock.position": Voe,
    bottom: $oe,
    left: Noe,
    right: Woe,
    top: Uoe,
    "export.background": Koe,
    transparent: _oe,
    auto: Yoe,
    light: Zoe,
    dark: Xoe,
    "copy.readonly.link": qoe,
    image: Joe,
    "align.distribute": Qoe,
    "dialog.save.firsttime": ere,
    "dialog.save.again": tre,
    "dialog.cancel": nre,
    "dialog.no": ore,
    "dialog.yes": rre,
  };
var sre = "\u984F\u8272",
  ire = "\u586B\u5145",
  are = "\u865B\u7DDA",
  lre = "\u5927\u5C0F",
  dre = "\u4FDD\u6301\u958B\u555F",
  cre = "\u5B57\u578B",
  pre = "\u5C0D\u9F4A",
  ure = "\u6A23\u5F0F",
  hre = "\u653E\u5927",
  mre = "\u7E2E\u5C0F",
  gre = "\u81F3",
  fre = "\u6A94\u6848",
  Sre = "\u7DE8\u8F2F",
  bre = "\u6AA2\u8996",
  Tre = "\u9078\u9805",
  yre = "\u767B\u5165",
  xre = "\u767B\u51FA",
  wre = "\u6210\u70BA\u8D0A\u52A9\u8005",
  kre = "\u7E2E\u653E\u81F3\u9078\u53D6\u7BC4\u570D",
  vre = "\u7E2E\u653E\u81F3\u9069\u7576\u5927\u5C0F",
  Ire = "\u7E2E\u653E\u81F3",
  Cre = "\u6DF1\u8272\u6A21\u5F0F",
  Dre = "\u5C08\u6CE8\u6A21\u5F0F",
  Pre = "\u9664\u932F\u6A21\u5F0F",
  Mre = "\u986F\u793A\u7DB2\u683C",
  Bre = "\u4F7F\u7528 CAD \u9078\u53D6",
  Ere = "\u6A23\u5F0F\u9078\u55AE\u4FDD\u6301\u958B\u555F",
  Rre = "\u6C38\u9060\u986F\u793A\u5C0D\u9F4A\u7DDA",
  Are = "\u65CB\u8F49\u63A7\u9EDE",
  Lre = "\u7D81\u5B9A\u63A7\u9EDE",
  Hre = "\u8907\u88FD\u63A7\u9EDE",
  zre = "\u5FA9\u539F",
  Ore = "\u53D6\u6D88\u5FA9\u539F",
  Fre = "\u526A\u4E0B",
  jre = "\u8907\u88FD",
  Gre = "\u8CBC\u4E0A",
  Vre = "\u8907\u88FD\u6210",
  $re = "\u532F\u51FA\u6210",
  Nre = "\u5168\u9078",
  Wre = "\u53D6\u6D88\u9078\u53D6",
  Ure = "\u522A\u9664",
  Kre = "\u65B0\u5C08\u6848",
  _re = "\u958B\u555F",
  Yre = "\u5132\u5B58",
  Zre = "\u53E6\u5B58\u70BA",
  Xre = "\u4E0A\u50B3\u5A92\u9AD4",
  qre = "\u5EFA\u7ACB\u9801\u9762",
  Jre = "\u65B0\u9801\u9762",
  Qre = "\u9801\u9762\u540D\u7A31",
  ese = "\u8907\u88FD",
  tse = "\u53D6\u6D88",
  nse = "\u8907\u88FD\u9080\u8ACB\u9023\u7D50",
  ose = "\u8907\u88FD\u552F\u8B80\u9023\u7D50",
  rse = "\u5EFA\u7ACB\u591A\u4EBA\u5C08\u6848",
  sse = "\u8907\u88FD\u81F3\u591A\u4EBA\u5C08\u6848",
  ise = "\u9078\u53D6",
  ase = "\u6A61\u76AE\u64E6",
  lse = "\u624B\u7E6A",
  dse = "\u7BAD\u982D",
  cse = "\u6587\u5B57",
  pse = "\u4FBF\u5229\u8CBC",
  use = "\u9577\u65B9\u5F62",
  hse = "\u6A62\u5713\u5F62",
  mse = "\u4E09\u89D2\u5F62",
  gse = "\u76F4\u7DDA",
  fse = "\u65CB\u8F49",
  Sse = "\u9396\u5B9A\u9577\u5BEC\u6BD4",
  bse = "\u89E3\u9396\u9577\u5BEC\u6BD4",
  Tse = "\u7D44\u6210\u7FA4\u7D44",
  yse = "\u53D6\u6D88\u7FA4\u7D44",
  xse = "\u79FB\u5230\u6700\u4E0B\u5C64",
  wse = "\u4E0B\u79FB\u4E00\u5C64",
  kse = "\u4E0A\u79FB\u4E00\u5C64",
  vse = "\u79FB\u5230\u6700\u4E0A\u5C64",
  Ise = "\u91CD\u8A2D\u89D2\u5EA6",
  Cse = "\u9396\u5B9A",
  Dse = "\u89E3\u9396",
  Pse = "\u79FB\u81F3\u9801\u9762",
  Mse = "\u6C34\u5E73\u7FFB\u8F49",
  Bse = "\u5782\u76F4\u7FFB\u8F49",
  Ese = "\u79FB\u52D5",
  Rse = "\u5230\u6700\u4E0A\u5C64",
  Ase = "\u5230\u4E0A\u4E00\u5C64",
  Lse = "\u5230\u4E0B\u4E00\u5C64",
  Hse = "\u5230\u6700\u4E0B\u5C64",
  zse = "\u8A9E\u8A00",
  Ose = "\u4E86\u89E3\u8A73\u60C5",
  Fse = "\u5DE5\u5177\u5217\u4F4D\u7F6E",
  jse = "\u4E0B\u65B9",
  Gse = "\u5DE6\u5074",
  Vse = "\u53F3\u5074",
  $se = "\u4E0A\u65B9",
  Nse = "\u9801\u9762",
  Da = {
    "style.menu.color": sre,
    "style.menu.fill": ire,
    "style.menu.dash": are,
    "style.menu.size": lre,
    "style.menu.keep.open": dre,
    "style.menu.font": cre,
    "style.menu.align": pre,
    styles: ure,
    "zoom.in": hre,
    "zoom.out": mre,
    to: gre,
    "menu.file": fre,
    "menu.edit": Sre,
    "menu.view": bre,
    "menu.preferences": Tre,
    "menu.sign.in": yre,
    "menu.sign.out": xre,
    "become.a.sponsor": wre,
    "zoom.to.selection": kre,
    "zoom.to.fit": vre,
    "zoom.to": Ire,
    "preferences.dark.mode": Cre,
    "preferences.focus.mode": Dre,
    "preferences.debug.mode": Pre,
    "preferences.show.grid": Mre,
    "preferences.use.cad.selection": Bre,
    "preferences.keep.stylemenu.open": Ere,
    "preferences.always.show.snaps": Rre,
    "preferences.rotate.handles": Are,
    "preferences.binding.handles": Lre,
    "preferences.clone.handles": Hre,
    undo: zre,
    redo: Ore,
    cut: Fre,
    copy: jre,
    paste: Gre,
    "copy.as": Vre,
    "export.as": $re,
    "select.all": Nre,
    "select.none": Wre,
    delete: Ure,
    "new.project": Kre,
    open: _re,
    save: Yre,
    "save.as": Zre,
    "upload.media": Xre,
    "create.page": qre,
    "new.page": Jre,
    "page.name": Qre,
    duplicate: ese,
    cancel: tse,
    "copy.invite.link": nse,
    "copy.readonly.link": ose,
    "create.multiplayer.project": rse,
    "copy.multiplayer.project": sse,
    select: ise,
    eraser: ase,
    draw: lse,
    arrow: dse,
    text: cse,
    sticky: pse,
    rectangle: use,
    ellipse: hse,
    triangle: mse,
    line: gse,
    rotate: fse,
    "lock.aspect.ratio": Sse,
    "unlock.aspect.ratio": bse,
    group: Tse,
    ungroup: yse,
    "move.to.back": xse,
    "move.backward": wse,
    "move.forward": kse,
    "move.to.front": vse,
    "reset.angle": Ise,
    lock: Cse,
    unlock: Dse,
    "move.to.page": Pse,
    "flip.horizontal": Mse,
    "flip.vertical": Bse,
    move: Ese,
    "to.front": Rse,
    forward: Ase,
    backward: Lse,
    back: Hse,
    language: zse,
    "translation.link": Ose,
    "dock.position": Fse,
    bottom: jse,
    left: Gse,
    right: Vse,
    top: $se,
    page: Nse,
  };
var vr = [
  { locale: "ar", label: "\u0639\u0631\u0628\u064A", messages: Qi },
  { locale: "da", label: "Danish", messages: ea },
  { locale: "de", label: "Deutsch", messages: ta },
  { locale: "en", label: "English", messages: na },
  { locale: "es", label: "Espa\xF1ol", messages: oa },
  { locale: "fa", label: "\u0641\u0627\u0631\u0633\u06CC", messages: ra },
  { locale: "fr", label: "Fran\xE7ais", messages: sa },
  { locale: "gl", label: "Galego", messages: ia },
  { locale: "he", label: "\u05E2\u05D1\u05E8\u05D9\u05EA", messages: aa },
  { locale: "it", label: "Italiano", messages: la },
  { locale: "ja", label: "\u65E5\u672C\u8A9E", messages: da },
  { locale: "ko-kr", label: "\uD55C\uAD6D\uC5B4", messages: ca },
  {
    locale: "my",
    label: "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C",
    messages: ha,
  },
  { locale: "nb-no", label: "Norwegian Bokm\xE5l", messages: ma },
  { locale: "ne", label: "\u0928\u0947\u092A\u093E\u0932\u0940", messages: ga },
  { locale: "nn-no", label: "Norwegian Nynorsk", messages: fa },
  { locale: "pl", label: "Polski", messages: Sa },
  { locale: "pt", label: "Portugu\xEAs - Europeu", messages: Ta },
  { locale: "pt-br", label: "Portugu\xEAs - Brasil", messages: ba },
  { locale: "ru", label: "Russian", messages: ya },
  { locale: "sv", label: "Svenska", messages: xa },
  { locale: "te", label: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", messages: wa },
  { locale: "tr", label: "T\xFCrk\xE7e", messages: va },
  { locale: "uk", label: "Ukrainian", messages: Ia },
  { locale: "zh-ch", label: "\u7B80\u4F53\u4E2D\u6587", messages: Ca },
  {
    locale: "zh-tw",
    label: "\u7E41\u9AD4\u4E2D\u6587 (\u53F0\u7063)",
    messages: Da,
  },
  {
    locale: "th",
    label: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",
    messages: ka,
  },
  { locale: "ku", label: "\u06A9\u0648\u0631\u062F\u06CC", messages: pa },
];
vr.sort((r, e) => (r.locale < e.locale ? -1 : 1));
function Pa(r) {
  var t;
  let e = vr.find((n) => n.locale === r);
  return {
    locale: r,
    label: (t = e == null ? void 0 : e.label) != null ? t : r,
    messages: S(S({}, ua), e == null ? void 0 : e.messages),
  };
}
function Ba(r) {
  return Ma.useMemo(
    () => Pa(r != null ? r : navigator.language.split(/[-_]/)[0]),
    [r]
  );
}
import * as Ir from "react";
var ms = Ir.createContext({}),
  br = () => {
    let r = Ir.useContext(ms);
    if (!r) throw new Error("useCtx must be inside a Provider with a value");
    return r;
  };
var we = Zt.forwardRef((m, p) => {
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
    u = Je(h, [
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
  return Zt.createElement(
    Wse,
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
        bp: Qe,
        id: c,
      },
      u
    ),
    Zt.createElement(Yt, null, o),
    s && Zt.createElement(Use, null)
  );
});
function Xt(s) {
  var a = s,
    { label: r, kbd: e, variant: t, isLocked: n } = a,
    o = Je(a, ["label", "kbd", "variant", "isLocked"]);
  let d = me(),
    i = Zt.useCallback(() => {
      d.toggleToolLock();
    }, []),
    c = Zt.useCallback((u) => {
      u.key === " " && d.isForcePanning && u.preventDefault();
    }, []);
  return Zt.createElement(
    Le,
    { label: r[0].toUpperCase() + r.slice(1), kbd: e },
    Zt.createElement(
      we,
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
var Yt = H("div", {
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
  Wse = H("button", {
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
    [`&:disabled ${Yt}`]: { opacity: 0.618 },
    variants: {
      variant: {
        primary: { marginTop: "0" },
        icon: {
          [`& ${Yt}`]: {
            display: "grid",
            "& > *": { gridRow: 1, gridColumn: 1 },
          },
        },
        text: {
          width: "auto",
          [`& ${Yt}`]: { fontSize: "$1", padding: "0 $3", gap: "$3" },
        },
        circle: {
          padding: 0,
          height: 32,
          width: 32,
          border: "none",
          [`& ${Yt}`]: {
            border: "1px solid $panelContrast",
            borderRadius: "100%",
            boxShadow: "$panel",
          },
          [`& ${Yt} > svg`]: { width: 14, height: 14 },
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
          [`& ${Yt} > svg`]: { width: 16, height: 16 },
        },
      },
      {
        variant: "primary",
        bp: "small",
        css: {
          height: "40px",
          width: "40px",
          [`& ${Yt} > svg`]: { width: 20, height: 20 },
        },
      },
      {
        isActive: !0,
        css: {
          [`${Yt}`]: {
            backgroundColor: "$selected",
            color: "$selectedContrast",
          },
        },
      },
      {
        isActive: !1,
        bp: "small",
        css: {
          [`&:hover:not(:disabled) ${Yt}`]: { backgroundColor: "$hover" },
          [`&:focus:not(:disabled) ${Yt}`]: { backgroundColor: "$hover" },
        },
      },
    ],
  }),
  Use = H("div", {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "$selected",
    borderRadius: "100%",
    bottom: -2,
    border: "2px solid $panel",
    zIndex: 100,
  });
var oie = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.length,
  rie = (r) => r.settings.isDebugMode,
  sie = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.some(
      (e) =>
        r.document.pages[r.appState.currentPageId].shapes[e].children !== void 0
    ),
  iie = (r) => r.stopPropagation(),
  aie = ({ onBlur: r, children: e }) => {
    let t = Lt();
    return C.createElement(
      Fe.Root,
      { dir: "ltr" },
      C.createElement(Fe.Trigger, { dir: "ltr" }, e),
      C.createElement(
        Fe.Portal,
        { container: t.current },
        C.createElement(
          Fe.Content,
          { onEscapeKeyDown: iie, tabIndex: -1, onBlur: r, asChild: !0 },
          C.createElement(
            Rt,
            { id: "TD-ContextMenu" },
            C.createElement(lie, null)
          )
        )
      )
    );
  },
  lie = C.memo(function () {
    let e = me(),
      t = nie(),
      n = e.useStore(oie),
      o = e.useStore(rie),
      s = e.useStore(sie),
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
      U = C.useCallback(() => {
        e.undo();
      }, [e]),
      L = C.useCallback(() => {
        e.redo();
      }, [e]),
      k = C.useCallback(
        () =>
          pe(this, null, function* () {
            e.exportImage("png", { scale: 2, quality: 1 });
          }),
        [e]
      ),
      I = C.useCallback(
        () =>
          pe(this, null, function* () {
            e.exportImage("jpeg", { scale: 2, quality: 1 });
          }),
        [e]
      ),
      q = C.useCallback(
        () =>
          pe(this, null, function* () {
            e.exportImage("webp", { scale: 2, quality: 1 });
          }),
        [e]
      ),
      de = C.useCallback(
        () =>
          pe(this, null, function* () {
            e.exportImage("svg", { scale: 1, quality: 1 });
          }),
        [e]
      ),
      le = C.useCallback(
        () =>
          pe(this, null, function* () {
            e.copyJson();
          }),
        [e]
      ),
      Ae = C.useCallback(
        () =>
          pe(this, null, function* () {
            e.exportJson();
          }),
        [e]
      ),
      Ce = n > 0,
      De = n > 1,
      Ve = n > 2;
    return C.createElement(
      C.Fragment,
      null,
      Ce
        ? C.createElement(
            C.Fragment,
            null,
            C.createElement(
              Be,
              { onClick: i, kbd: "#D", id: "TD-ContextMenu-Duplicate" },
              C.createElement(ot, { id: "duplicate" })
            ),
            C.createElement(
              Be,
              {
                onClick: a,
                kbd: "\u21E7H",
                id: "TD-ContextMenu-Flip_Horizontal",
              },
              C.createElement(ot, { id: "flip.horizontal" })
            ),
            C.createElement(
              Be,
              {
                onClick: d,
                kbd: "\u21E7V",
                id: "TD-ContextMenu-Flip_Vertical",
              },
              C.createElement(ot, { id: "flip.vertical" })
            ),
            C.createElement(
              Be,
              {
                onClick: c,
                kbd: "#\u21E7L",
                id: "TD-ContextMenu- Lock_Unlock",
              },
              C.createElement(ot, { id: "lock" }),
              " / ",
              C.createElement(ot, { id: "unlock" })
            ),
            (De || s) && C.createElement(Pe, null),
            De &&
              C.createElement(
                Be,
                { onClick: u, kbd: "#G", id: "TD-ContextMenu-Group" },
                C.createElement(ot, { id: "group" })
              ),
            s &&
              C.createElement(
                Be,
                { onClick: u, kbd: "#G", id: "TD-ContextMenu-Ungroup" },
                C.createElement(ot, { id: "ungroup" })
              ),
            C.createElement(Pe, null),
            C.createElement(
              Cr,
              {
                label: t.formatMessage({ id: "move" }),
                id: "TD-ContextMenu-Move",
              },
              C.createElement(
                Be,
                {
                  onClick: g,
                  kbd: "\u21E7]",
                  id: "TD-ContextMenu-Move-To_Front",
                },
                C.createElement(ot, { id: "to.front" })
              ),
              C.createElement(
                Be,
                { onClick: h, kbd: "]", id: "TD-ContextMenu-Move-Forward" },
                C.createElement(ot, { id: "forward" })
              ),
              C.createElement(
                Be,
                { onClick: m, kbd: "[", id: "TD-ContextMenu-Move-Backward" },
                C.createElement(ot, { id: "backward" })
              ),
              C.createElement(
                Be,
                {
                  onClick: p,
                  kbd: "\u21E7[",
                  id: "TD-ContextMenu-Move-To_Back",
                },
                C.createElement(ot, { id: "back" })
              )
            ),
            C.createElement(hie, null),
            De &&
              C.createElement(die, { hasTwoOrMore: De, hasThreeOrMore: Ve }),
            C.createElement(Pe, null),
            C.createElement(
              Be,
              { onClick: T, kbd: "#X", id: "TD-ContextMenu-Cut" },
              C.createElement(ot, { id: "cut" })
            ),
            C.createElement(
              Be,
              { onClick: x, kbd: "#C", id: "TD-ContextMenu-Copy" },
              C.createElement(ot, { id: "copy" })
            ),
            C.createElement(
              Be,
              { onClick: b, kbd: "#V", id: "TD-ContextMenu-Paste" },
              C.createElement(ot, { id: "paste" })
            ),
            C.createElement(Pe, null),
            C.createElement(
              Cr,
              {
                label: `${t.formatMessage({ id: "copy.as" })}...`,
                size: "small",
                id: "TD-ContextMenu-Copy-As",
              },
              C.createElement(
                Be,
                { onClick: y, id: "TD-ContextMenu-Copy-as-SVG" },
                "SVG"
              ),
              C.createElement(
                Be,
                { onClick: R, id: "TD-ContextMenu-Copy-As-PNG" },
                "PNG"
              ),
              o &&
                C.createElement(
                  Be,
                  { onClick: le, id: "TD-ContextMenu-Copy_as_JSON" },
                  "JSON"
                )
            ),
            C.createElement(
              Cr,
              {
                label: `${t.formatMessage({ id: "export.as" })}...`,
                size: "small",
                id: "TD-ContextMenu-Export",
              },
              C.createElement(
                Be,
                { onClick: de, id: "TD-ContextMenu-Export-SVG" },
                "SVG"
              ),
              C.createElement(
                Be,
                { onClick: k, id: "TD-ContextMenu-Export-PNG" },
                "PNG"
              ),
              C.createElement(
                Be,
                { onClick: I, id: "TD-ContextMenu-Export-JPG" },
                "JPG"
              ),
              C.createElement(
                Be,
                { onClick: q, id: "TD-ContextMenu-Export-WEBP" },
                "WEBP"
              ),
              o &&
                C.createElement(
                  Be,
                  { onClick: Ae, id: "TD-ContextMenu-Export-JSON" },
                  "JSON"
                )
            ),
            C.createElement(Pe, null),
            C.createElement(
              Be,
              { onClick: f, kbd: "\u232B", id: "TD-ContextMenu-Delete" },
              C.createElement(ot, { id: "delete" })
            )
          )
        : C.createElement(
            C.Fragment,
            null,
            C.createElement(
              Be,
              { onClick: b, kbd: "#V", id: "TD-ContextMenu-Paste" },
              C.createElement(ot, { id: "paste" })
            ),
            C.createElement(
              Be,
              { onClick: U, kbd: "#Z", id: "TD-ContextMenu-Undo" },
              C.createElement(ot, { id: "undo" })
            ),
            C.createElement(
              Be,
              { onClick: L, kbd: "#\u21E7Z", id: "TD-ContextMenu-Redo" },
              C.createElement(ot, { id: "redo" })
            ),
            C.createElement(
              Cr,
              {
                label: `${t.formatMessage({ id: "export.as" })}...`,
                size: "small",
                id: "TD-ContextMenu-Export",
              },
              C.createElement(
                Be,
                { onClick: de, id: "TD-ContextMenu-Export-SVG" },
                "SVG"
              ),
              C.createElement(
                Be,
                { onClick: k, id: "TD-ContextMenu-Export-PNG" },
                "PNG"
              ),
              C.createElement(
                Be,
                { onClick: I, id: "TD-ContextMenu-Export-JPG" },
                "JPG"
              ),
              C.createElement(
                Be,
                { onClick: q, id: "TD-ContextMenu-Export-WEBP" },
                "WEBP"
              ),
              o &&
                C.createElement(
                  Be,
                  { onClick: Ae, id: "TD-ContextMenu-Export-JSON" },
                  "JSON"
                )
            )
          )
    );
  });
function die({ hasThreeOrMore: r }) {
  let e = me(),
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
    m = Lt();
  return C.createElement(
    Fe.Sub,
    null,
    C.createElement(
      fs,
      { id: "TD-ContextMenu-Align-Distribute-Trigger" },
      C.createElement(ot, { id: "align.distribute" })
    ),
    C.createElement(
      Fe.Portal,
      { container: m.current },
      C.createElement(
        Fe.SubContent,
        { asChild: !0, sideOffset: 4, alignOffset: -2 },
        C.createElement(
          cie,
          { numberOfSelected: r ? "threeOrMore" : "twoOrMore" },
          C.createElement(
            an,
            { onClick: d, id: "TD-ContextMenu-Align_Distribute-AlignLeft" },
            C.createElement(Zse, null)
          ),
          C.createElement(
            an,
            {
              onClick: i,
              id: "TD-ContextMenu-Align_Distribute-AlignCenterHorizontal",
            },
            C.createElement(_se, null)
          ),
          C.createElement(
            an,
            { onClick: c, id: "TD-ContextMenu-Align_Distribute-AlignRight" },
            C.createElement(Xse, null)
          ),
          C.createElement(
            an,
            {
              onClick: u,
              id: "TD-ContextMenu-Align_Distribute-StretchHorizontal",
            },
            C.createElement(eie, null)
          ),
          r &&
            C.createElement(
              an,
              {
                onClick: p,
                id: "TD-ContextMenu-Align_Distribute-SpaceEvenlyHorizontal",
              },
              C.createElement(Jse, null)
            ),
          C.createElement(
            an,
            { onClick: t, id: "TD-ContextMenu-Align_Distribute-AlignTop" },
            C.createElement(qse, null)
          ),
          C.createElement(
            an,
            {
              onClick: n,
              id: "TD-ContextMenu-Align_Distribute-AlignCenterVertical",
            },
            C.createElement(Yse, null)
          ),
          C.createElement(
            an,
            { onClick: o, id: "TD-ContextMenu-Align_Distribute-AlignBottom" },
            C.createElement(Kse, null)
          ),
          C.createElement(
            an,
            {
              onClick: s,
              id: "TD-ContextMenu-Align_Distribute-StretchVertical",
            },
            C.createElement(tie, null)
          ),
          r &&
            C.createElement(
              an,
              {
                onClick: a,
                id: "TD-ContextMenu-Align_Distribute-SpaceEvenlyVertical",
              },
              C.createElement(Qse, null)
            ),
          C.createElement(gs, { offset: 13 })
        )
      )
    )
  );
}
var cie = H(Rt, {
    display: "grid",
    variants: {
      numberOfSelected: {
        threeOrMore: { gridTemplateColumns: "repeat(5, auto)" },
        twoOrMore: { gridTemplateColumns: "repeat(4, auto)" },
      },
    },
  }),
  pie = (r) => r.appState.currentPageId,
  uie = (r) => r.document.pages;
function hie() {
  let r = me(),
    e = r.useStore(pie),
    t = r.useStore(uie),
    n = Object.values(t)
      .sort((s, a) => (s.childIndex || 0) - (a.childIndex || 0))
      .filter((s) => s.id !== e),
    o = Lt();
  return n.length === 0
    ? null
    : C.createElement(
        Fe.Sub,
        null,
        C.createElement(fs, null, C.createElement(ot, { id: "move.to.page" })),
        C.createElement(
          Fe.Portal,
          { container: o.current },
          C.createElement(
            Fe.SubContent,
            { sideOffset: 4, alignOffset: -2, asChild: !0 },
            C.createElement(
              Rt,
              null,
              n.map(({ id: s, name: a }, d) =>
                C.createElement(
                  Be,
                  { key: s, disabled: s === e, onClick: () => r.moveToPage(s) },
                  a || `Page ${d}`
                )
              ),
              C.createElement(gs, { offset: 13 })
            )
          )
        )
      );
}
function Cr({ children: r, label: e, size: t, id: n }) {
  let o = Lt();
  return C.createElement(
    Fe.Sub,
    null,
    C.createElement(fs, null, e),
    C.createElement(
      Fe.Portal,
      { container: o.current },
      C.createElement(
        Fe.SubContent,
        { sideOffset: 4, alignOffset: -2, asChild: !0 },
        C.createElement(Rt, { size: t }, r, C.createElement(gs, { offset: 13 }))
      )
    )
  );
}
var gs = H(Fe.ContextMenuArrow, { fill: "$panel" });
function an(t) {
  var n = t,
    { onSelect: r } = n,
    e = Je(n, ["onSelect"]);
  return C.createElement(
    Fe.ContextMenuItem,
    { dir: "ltr", onSelect: r, asChild: !0 },
    C.createElement(we, S({}, e))
  );
}
var Be = (t) => {
    var n = t,
      { id: r } = n,
      e = Je(n, ["id"]);
    return C.createElement(
      Fe.ContextMenuItem,
      { asChild: !0, id: r },
      C.createElement(je, S({}, e))
    );
  },
  fs = (t) => {
    var n = t,
      { id: r } = n,
      e = Je(n, ["id"]);
    return C.createElement(
      Fe.SubTrigger,
      { asChild: !0, id: r },
      C.createElement(je, S({ hasArrow: !0 }, e))
    );
  },
  Ea = C.memo(aie);
import * as Ht from "react";
function Ra({ error: r, resetErrorBoundary: e }) {
  let t = me(),
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
  return Ht.createElement(
    mie,
    null,
    Ht.createElement(
      gie,
      null,
      Ht.createElement("div", null, "We've encountered an error!"),
      Ht.createElement("pre", null, Ht.createElement("code", null, r.message)),
      Ht.createElement(
        fie,
        null,
        Ht.createElement(je, { onClick: o }, "Copy Error"),
        Ht.createElement(je, { onClick: n }, "Refresh Page")
      ),
      Ht.createElement(Pe, null),
      Ht.createElement(
        "p",
        null,
        "Keep getting this error?",
        " ",
        Ht.createElement(
          "a",
          { onClick: s, title: "Download your project" },
          "Download your project"
        ),
        " ",
        "as a backup and then",
        " ",
        Ht.createElement(
          "a",
          { onClick: a, title: "Reset the document" },
          "reset the document"
        ),
        "."
      )
    )
  );
}
var mie = H("div", {
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
  gie = H("div", {
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
  fie = H("div", {
    display: "flex",
    "& > button > div": { justifyContent: "center", textAlign: "center" },
  });
import { DotFilledIcon as Sie } from "@radix-ui/react-icons";
import * as Dr from "react";
var go = H("button", {
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
function Aa({ onSelect: r }) {
  return Dr.createElement(
    bie,
    null,
    Dr.createElement(go, { onClick: r }, Dr.createElement(Sie, null))
  );
}
var bie = H("div", {
  opacity: 1,
  zIndex: 100,
  backgroundColor: "transparent",
  "& svg": { color: "$text" },
  "&:hover svg": { color: "$text" },
});
import * as Ss from "react";
import { FormattedMessage as Tie } from "react-intl";
var yie = (r) => r.appState.isLoading;
function bs() {
  let e = me().useStore(yie);
  return Ss.createElement(
    xie,
    { hidden: !e },
    Ss.createElement(Tie, { id: "loading", values: { dots: "..." } })
  );
}
var xie = H("div", {
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
import * as wt from "@radix-ui/react-alert-dialog";
import * as ht from "react";
import { FormattedMessage as Ts, useIntl as wie } from "react-intl";
function kie({ children: r, onClose: e, container: t }) {
  return ht.createElement(
    wt.Portal,
    { container: t },
    ht.createElement(Mie, null),
    ht.createElement(
      Bie,
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
var vie = H(wt.Description, {
    marginBottom: 20,
    color: "$text",
    fontSize: "$2",
    lineHeight: 1.5,
    textAlign: "center",
    maxWidth: "62%",
    minWidth: 0,
    alignSelf: "center",
  }),
  Iie = wt.Root,
  Cie = kie,
  Die = vie,
  La = wt.Action,
  Pie = wt.Cancel,
  Ha = ({ container: r }) => {
    let {
        setDialogState: e,
        dialogState: t,
        onCancel: n,
        onNo: o,
        onYes: s,
      } = br(),
      a = wie(),
      d = {
        saveFirstTime: a.formatMessage({ id: "dialog.save.firsttime" }),
        saveAgain: a.formatMessage({ id: "dialog.save.again" }),
      };
    return ht.createElement(
      Iie,
      { open: t !== null },
      ht.createElement(
        Cie,
        { onClose: () => e(null), container: r },
        t && ht.createElement(Die, null, d[t]),
        ht.createElement(
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
            ht.createElement(
              Pie,
              { asChild: !0 },
              ht.createElement(
                fo,
                {
                  css: { color: "$text" },
                  onClick: () => {
                    n(), e(null);
                  },
                },
                ht.createElement(Ts, { id: "dialog.cancel" })
              )
            ),
          ht.createElement(
            "div",
            { style: { flexShrink: 0 } },
            o &&
              ht.createElement(
                La,
                { asChild: !0 },
                ht.createElement(
                  fo,
                  {
                    onClick: () => {
                      o(), e(null);
                    },
                  },
                  ht.createElement(Ts, { id: "dialog.no" })
                )
              ),
            s &&
              ht.createElement(
                La,
                { asChild: !0 },
                ht.createElement(
                  fo,
                  {
                    css: { backgroundColor: "#2F80ED", color: "White" },
                    onClick: () => {
                      s(), e(null);
                    },
                  },
                  ht.createElement(Ts, { id: "dialog.yes" })
                )
              )
          )
        )
      )
    );
  },
  Mie = H(wt.Overlay, {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, .15)",
    pointerEvents: "all",
  }),
  age = H(wt.Overlay, {
    backgroundColor: "rgba(0, 0, 0, .15)",
    position: "absolute",
    pointerEvents: "all",
    inset: 0,
  }),
  Bie = H(wt.Content, {
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
  fo = H("button", {
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
import * as qt from "@radix-ui/react-alert-dialog";
import { Pencil1Icon as Lie } from "@radix-ui/react-icons";
import * as dt from "react";
import { FormattedMessage as za, useIntl as Hie } from "react-intl";
import * as So from "react";
var Pr = So.forwardRef((n, t) => {
    var o = n,
      { icon: r } = o,
      e = Je(o, ["icon"]);
    return So.createElement(
      Eie,
      null,
      So.createElement(Rie, w(S({}, e), { ref: t })),
      r ? So.createElement(Aie, null, r) : null
    );
  }),
  Eie = H("div", {
    position: "relative",
    width: "100%",
    height: "min-content",
  }),
  Rie = H("input", {
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
  Aie = H(ut, {
    top: 0,
    right: 0,
    position: "absolute",
    paddingLeft: "$3",
    paddingRight: "$3",
    pointerEvents: "none",
    color: "$text",
  });
var Oa = ({ isOpen: r, onClose: e }) => {
    let t = me(),
      n = Lt(),
      o = Hie(),
      [s, a] = dt.useState(t.document.name),
      d = dt.useCallback((u) => {
        let p = u.target.value.trimStart();
        a(p);
      }, []);
    function i(u) {
      u.stopPropagation();
    }
    let c = dt.useCallback((u) => {
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
    return dt.createElement(
      qt.Root,
      { open: r },
      dt.createElement(
        qt.Portal,
        { container: n.current },
        dt.createElement(Oie, { onPointerDown: e }),
        dt.createElement(
          zie,
          { dir: "ltr", onKeyDown: i, onKeyUp: i },
          dt.createElement(jie, {
            placeholder: o.formatMessage({ id: "enter.file.name" }),
            value: s,
            onChange: d,
            onKeyDown: c,
            icon: dt.createElement(Lie, null),
          }),
          dt.createElement(
            Fie,
            null,
            dt.createElement(
              qt.Action,
              { asChild: !0 },
              dt.createElement(
                fo,
                { onClick: e },
                dt.createElement(za, { id: "cancel" })
              )
            ),
            dt.createElement(
              qt.Action,
              { asChild: !0 },
              dt.createElement(
                fo,
                {
                  css: { backgroundColor: "#2F80ED", color: "White" },
                  onClick: () => {
                    let u = s.trim().replace(/\.tldr$/, "");
                    t.saveProjectAs(u), e();
                  },
                },
                dt.createElement(za, { id: "save" })
              )
            )
          )
        )
      )
    );
  },
  zie = H(qt.Content, {
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
  Oie = H(qt.Overlay, {
    backgroundColor: "rgba(0, 0, 0, .15)",
    position: "absolute",
    pointerEvents: "all",
    inset: 0,
    zIndex: 999998,
  }),
  Fie = H("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
    marginTop: 10,
  }),
  jie = H(Pr, { background: "$hover" });
import * as Tt from "react";
import * as Ar from "@radix-ui/react-dropdown-menu";
import {
  AlignBottomIcon as Xie,
  AlignCenterHorizontallyIcon as qie,
  AlignCenterVerticallyIcon as Jie,
  AlignLeftIcon as Qie,
  AlignRightIcon as eae,
  AlignTopIcon as tae,
  AngleIcon as nae,
  ArrowDownIcon as oae,
  ArrowUpIcon as rae,
  AspectRatioIcon as sae,
  BoxIcon as iae,
  CopyIcon as aae,
  DotsHorizontalIcon as lae,
  GroupIcon as dae,
  LockClosedIcon as cae,
  LockOpen1Icon as pae,
  PinBottomIcon as uae,
  PinTopIcon as hae,
  RotateCounterClockwiseIcon as mae,
  SpaceEvenlyHorizontallyIcon as gae,
  SpaceEvenlyVerticallyIcon as fae,
  StretchHorizontallyIcon as Sae,
  StretchVerticallyIcon as bae,
} from "@radix-ui/react-icons";
import * as X from "react";
import { useIntl as Tae } from "react-intl";
import { Item as Gie } from "@radix-ui/react-dropdown-menu";
import * as ys from "react";
function xe(n) {
  var o = n,
    { onSelect: r, id: e } = o,
    t = Je(o, ["onSelect", "id"]);
  return ys.createElement(
    Gie,
    { dir: "ltr", asChild: !0, onSelect: r, id: e },
    ys.createElement(je, S({}, t))
  );
}
import { CheckboxItem as Vie } from "@radix-ui/react-dropdown-menu";
import * as xs from "react";
var He = (r) => r.preventDefault();
function Pt({
  checked: r,
  disabled: e = !1,
  variant: t,
  onCheckedChange: n,
  kbd: o,
  id: s,
  ariaLabel: a,
  children: d,
}) {
  return xs.createElement(
    Vie,
    {
      dir: "ltr",
      onSelect: He,
      onCheckedChange: n,
      checked: r,
      disabled: e,
      asChild: !0,
      id: s,
      "aria-label": a,
    },
    xs.createElement(je, { kbd: o, variant: t, hasIndicator: !0 }, d)
  );
}
import * as Br from "@radix-ui/react-dropdown-menu";
import * as Mr from "react";
var ft = (r) => r.stopPropagation();
function Mt({
  sideOffset: r = 4,
  alignOffset: e = 0,
  children: t,
  align: n,
  variant: o,
  id: s,
  overflow: a = !1,
  side: d = "bottom",
}) {
  let i = Lt();
  return Mr.createElement(
    Br.Portal,
    { container: i.current, dir: "ltr" },
    Mr.createElement(
      Br.Content,
      {
        align: n,
        alignOffset: e,
        sideOffset: r,
        onEscapeKeyDown: ft,
        asChild: !0,
        id: s,
        side: d,
      },
      Mr.createElement($ie, { variant: o, overflow: a }, t)
    )
  );
}
var $ie = H(Rt, {
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
import { Separator as Nie } from "@radix-ui/react-dropdown-menu";
var $ge = H(Nie, {
  backgroundColor: "$hover",
  height: 1,
  marginTop: "$2",
  marginRight: "-$2",
  marginBottom: "$2",
  marginLeft: "-$2",
});
import { RadioItem as Wie } from "@radix-ui/react-dropdown-menu";
var jo = H(Wie, {
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
import {
  Arrow as Uie,
  Sub as Kie,
  SubContent as _ie,
  SubTrigger as Yie,
} from "@radix-ui/react-dropdown-menu";
import * as to from "react";
function ln({
  children: r,
  size: e,
  overflow: t = !1,
  disabled: n = !1,
  label: o,
  id: s,
}) {
  return to.createElement(
    Kie,
    { key: s },
    to.createElement(
      Yie,
      { dir: "ltr", asChild: !0 },
      to.createElement(je, { disabled: n, hasArrow: !0 }, o)
    ),
    to.createElement(
      _ie,
      { asChild: !0, sideOffset: 4, alignOffset: -4 },
      to.createElement(
        Rt,
        { size: e, overflow: t },
        r,
        to.createElement(Uie, { offset: 13 })
      )
    )
  );
}
import { Trigger as Zie } from "@radix-ui/react-dropdown-menu";
import * as ws from "react";
function Er(n) {
  var o = n,
    { id: r, children: e } = o,
    t = Je(o, ["id", "children"]);
  return ws.createElement(
    Zie,
    { asChild: !0, id: r },
    ws.createElement(we, S({}, t), e)
  );
}
var yae = (r) => r.settings.dockPosition,
  xae = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.length,
  wae = (r) => {
    let e = r.document.pages[r.appState.currentPageId],
      { selectedIds: t } = r.document.pageStates[r.appState.currentPageId];
    return t.every((n) => e.shapes[n].isLocked);
  },
  kae = (r) => {
    let e = r.document.pages[r.appState.currentPageId],
      { selectedIds: t } = r.document.pageStates[r.appState.currentPageId];
    return t.every((n) => e.shapes[n].isAspectRatioLocked);
  },
  vae = (r) => {
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
  Iae = (r) => {
    let { selectedIds: e } = r.document.pageStates[r.appState.currentPageId];
    return e.length > 0;
  },
  Cae = (r) => {
    let { selectedIds: e } = r.document.pageStates[r.appState.currentPageId];
    return e.length > 1;
  };
function Fa() {
  let r = me(),
    e = Tae(),
    t = r.useStore(wae),
    n = r.useStore(kae),
    o = r.useStore(vae),
    s = r.useStore(Iae),
    a = r.useStore(Cae),
    d = r.useStore(xae),
    i = r.useStore(yae),
    c = d > 1,
    u = d > 2,
    p = X.useCallback(() => {
      r.rotate();
    }, [r]),
    m = X.useCallback(() => {
      r.duplicate();
    }, [r]),
    h = X.useCallback(() => {
      r.toggleLocked();
    }, [r]),
    g = X.useCallback(() => {
      r.toggleAspectRatioLocked();
    }, [r]),
    f = X.useCallback(() => {
      r.group();
    }, [r]),
    T = X.useCallback(() => {
      r.moveToBack();
    }, [r]),
    x = X.useCallback(() => {
      r.moveBackward();
    }, [r]),
    b = X.useCallback(() => {
      r.moveForward();
    }, [r]),
    y = X.useCallback(() => {
      r.moveToFront();
    }, [r]),
    R = X.useCallback(() => {
      r.setShapeProps({ rotation: 0 });
    }, [r]),
    U = X.useCallback(() => {
      r.align("top");
    }, [r]),
    L = X.useCallback(() => {
      r.align("centerVertical");
    }, [r]),
    k = X.useCallback(() => {
      r.align("bottom");
    }, [r]),
    I = X.useCallback(() => {
      r.stretch("vertical");
    }, [r]),
    q = X.useCallback(() => {
      r.distribute("vertical");
    }, [r]),
    de = X.useCallback(() => {
      r.align("left");
    }, [r]),
    le = X.useCallback(() => {
      r.align("centerHorizontal");
    }, [r]),
    Ae = X.useCallback(() => {
      r.align("right");
    }, [r]),
    Ce = X.useCallback(() => {
      r.stretch("horizontal");
    }, [r]),
    De = X.useCallback(() => {
      r.distribute("horizontal");
    }, [r]),
    Ve = X.useCallback(
      (jt) => {
        r.setMenuOpen(jt);
      },
      [r]
    ),
    $e = i === "bottom" || i === "top" ? "top" : i;
  return X.createElement(
    Ar.Root,
    { dir: "ltr", onOpenChange: Ve },
    X.createElement(
      Ar.Trigger,
      { dir: "ltr", asChild: !0, id: "TD-Tools-Dots" },
      X.createElement(
        we,
        {
          "aria-label": e.formatMessage({ id: "shape.options" }),
          variant: "circle",
        },
        X.createElement(lae, null)
      )
    ),
    X.createElement(
      Mt,
      { sideOffset: 16, side: $e },
      X.createElement(
        X.Fragment,
        null,
        X.createElement(
          Rr,
          null,
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "duplicate" }),
              kbd: "#D",
              id: "TD-Tools-Copy",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "duplicate" }),
                disabled: !s,
                onClick: m,
              },
              X.createElement(aae, null)
            )
          ),
          X.createElement(
            Le,
            { label: e.formatMessage({ id: "rotate" }), id: "TD-Tools-Rotate" },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "rotate" }),
                disabled: !s,
                onClick: p,
              },
              X.createElement(mae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: t ? "unlock" : "lock" }),
              kbd: "#L",
              id: "TD-Tools-Lock",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: t ? "unlock" : "lock" }),
                disabled: !s,
                onClick: h,
              },
              t ? X.createElement(cae, null) : X.createElement(pae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({
                id: n ? "unlock.aspect.ratio" : "lock.aspect.ratio",
              }),
              id: "TD-Tools-AspectRatio",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({
                  id: n ? "unlock.aspect.ratio" : "lock.aspect.ratio",
                }),
                disabled: !s,
                onClick: g,
              },
              n ? X.createElement(sae, null) : X.createElement(iae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "group" }),
              kbd: "#G",
              id: "TD-Tools-Group",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "group" }),
                disabled: !s || (!o && !a),
                onClick: f,
              },
              X.createElement(dae, null)
            )
          )
        ),
        X.createElement(
          Rr,
          null,
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "move.to.back" }),
              kbd: "#\u21E7[",
              id: "TD-Tools-PinBottom",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "move.to.back" }),
                disabled: !s,
                onClick: T,
              },
              X.createElement(uae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "move.backward" }),
              kbd: "#[",
              id: "TD-Tools-ArrowDown",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "move.backward" }),
                disabled: !s,
                onClick: x,
              },
              X.createElement(oae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "move.forward" }),
              kbd: "#]",
              id: "TD-Tools-ArrowUp",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "move.forward" }),
                disabled: !s,
                onClick: b,
              },
              X.createElement(rae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "move.to.front" }),
              kbd: "#\u21E7]",
              id: "TD-Tools-PinTop",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "move.to.front" }),
                disabled: !s,
                onClick: y,
              },
              X.createElement(hae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "reset.angle" }),
              id: "TD-Tools-ResetAngle",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "reset.angle" }),
                disabled: !s,
                onClick: R,
              },
              X.createElement(nae, null)
            )
          )
        ),
        X.createElement(Pe, null),
        X.createElement(
          Rr,
          null,
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "align.left" }),
              id: "TD-Tools-AlignLeft",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "align.left" }),
                disabled: !c,
                onClick: de,
              },
              X.createElement(Qie, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "align.center.x" }),
              id: "TD-Tools-AlignCenterHorizontal",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "align.center.x" }),
                disabled: !c,
                onClick: le,
              },
              X.createElement(qie, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "align.right" }),
              id: "TD-Tools-AlignRight",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "align.right" }),
                disabled: !c,
                onClick: Ae,
              },
              X.createElement(eae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "stretch.x" }),
              id: "TD-Tools-StretchHorizontal",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "stretch.x" }),
                disabled: !c,
                onClick: Ce,
              },
              X.createElement(Sae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "distribute.x" }),
              id: "TD-Tools-SpaceEvenlyHorizontal",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "distribute.x" }),
                disabled: !u,
                onClick: De,
              },
              X.createElement(gae, null)
            )
          )
        ),
        X.createElement(
          Rr,
          null,
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "align.top" }),
              id: "TD-Tools-AlignTop",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "align.top" }),
                disabled: !c,
                onClick: U,
              },
              X.createElement(tae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "align.center.y" }),
              id: "TD-Tools-AlignCenterVertical",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "align.center.y" }),
                disabled: !c,
                onClick: L,
              },
              X.createElement(Jie, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "align.bottom" }),
              id: "TD-Tools-AlignBottom",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "align.bottom" }),
                disabled: !c,
                onClick: k,
              },
              X.createElement(Xie, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "stretch.y" }),
              id: "TD-Tools-StretchVertical",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "stretch.y" }),
                disabled: !c,
                onClick: I,
              },
              X.createElement(bae, null)
            )
          ),
          X.createElement(
            Le,
            {
              label: e.formatMessage({ id: "distribute.y" }),
              id: "TD-Tools-SpaceEvenlyVertical",
            },
            X.createElement(
              we,
              {
                "aria-label": e.formatMessage({ id: "distribute.y" }),
                disabled: !u,
                onClick: q,
              },
              X.createElement(fae, null)
            )
          )
        )
      )
    )
  );
}
var Rr = H("div", {
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
import * as bo from "react";
import { FormattedMessage as Dae } from "react-intl";
var Pae = (r) =>
    r.appState.isEmptyCanvas &&
    Object.keys(r.document.pages[r.appState.currentPageId].shapes).length > 0,
  Mae = (r) => r.settings.isDebugMode,
  Bae = (r) => r.settings.dockPosition,
  ja = bo.memo(function () {
    let e = me(),
      t = e.useStore(Pae),
      n = e.useStore(Bae),
      o = e.useStore(Mae),
      s = {
        bottom: n === "bottom" && o ? 120 : n === "bottom" ? 80 : o ? 60 : 20,
        left: "50%",
        transform: "translate(-50%,0)",
      };
    return t
      ? bo.createElement(
          Eae,
          { id: "TD-Tools-Back_to_content", style: S({}, s) },
          bo.createElement(
            je,
            { onClick: e.zoomToContent },
            bo.createElement(Dae, { id: "zoom.to.content" })
          )
        )
      : null;
  }),
  Eae = H(Rt, {
    pointerEvents: "all",
    width: "fit-content",
    minWidth: 0,
    position: "fixed",
    bottom: 0,
  });
import * as To from "react";
import { useIntl as Lae } from "react-intl";
import * as Rae from "react";
import * as ks from "react";
function vs(r) {
  let n = r,
    { size: e = 16 } = n,
    t = Je(n, ["size"]);
  return ks.createElement(
    "svg",
    S({ width: 24, height: 24 }, t),
    ks.createElement("circle", { cx: 12, cy: 12, r: e / 2 })
  );
}
import * as Is from "react";
function Ga() {
  return Is.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Is.createElement("circle", {
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
import * as Cs from "react";
var Aae = `${50.26548 * 0.025} ${50.26548 * 0.1}`;
function Va() {
  return Cs.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Cs.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeDasharray: Aae,
    })
  );
}
import * as Ds from "react";
function $a() {
  return Ds.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "1 1.5 21 22",
      fill: "currentColor",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Ds.createElement("path", {
      d: "M10.0162 19.2768C10.0162 19.2768 9.90679 19.2517 9.6879 19.2017C9.46275 19.1454 9.12816 19.0422 8.68413 18.8921C8.23384 18.7358 7.81482 18.545 7.42707 18.3199C7.03307 18.101 6.62343 17.7883 6.19816 17.3818C5.77289 16.9753 5.33511 16.3718 4.88482 15.5713C4.43453 14.7645 4.1531 13.8545 4.04053 12.8414C3.92795 11.822 4.04991 10.8464 4.40639 9.91451C4.76286 8.98266 5.39452 8.10084 6.30135 7.26906C7.21444 6.44353 8.29325 5.83377 9.5378 5.43976C10.7823 5.05202 11.833 4.92068 12.6898 5.04576C13.5466 5.16459 14.3878 5.43664 15.2133 5.86191C16.0388 6.28718 16.7768 6.8688 17.4272 7.60678C18.0714 8.34475 18.5404 9.21406 18.8344 10.2147C19.1283 11.2153 19.1721 12.2598 18.9657 13.348C18.7593 14.4299 18.2872 15.4337 17.5492 16.3593C16.8112 17.2849 15.9263 18.0072 14.8944 18.5263C13.8624 19.0391 12.9056 19.3174 12.0238 19.3612C11.142 19.405 10.2101 19.2705 9.22823 18.9578C8.24635 18.6451 7.35828 18.151 6.56402 17.4756C5.77601 16.8002 6.08871 16.8658 7.50212 17.6726C8.90927 18.4731 10.1444 18.8484 11.2076 18.7983C12.2645 18.7545 13.2965 18.4825 14.3034 17.9822C15.3102 17.4819 16.1264 16.8221 16.7518 16.0028C17.3772 15.1835 17.7681 14.3111 17.9244 13.3855C18.0808 12.4599 18.0401 11.5781 17.8025 10.74C17.5586 9.902 17.1739 9.15464 16.6486 8.49797C16.1233 7.8413 15.2289 7.27844 13.9656 6.80939C12.7086 6.34034 11.4203 6.20901 10.1007 6.41539C8.78732 6.61552 7.69599 7.06893 6.82669 7.77564C5.96363 8.48859 5.34761 9.26409 4.97863 10.1021C4.60964 10.9402 4.45329 11.8376 4.50958 12.7945C4.56586 13.7513 4.79101 14.6238 5.18501 15.4118C5.57276 16.1998 5.96363 16.8002 6.35764 17.2129C6.75164 17.6257 7.13313 17.9509 7.50212 18.1886C7.87736 18.4325 8.28074 18.642 8.71227 18.8171C9.15005 18.9922 9.47839 19.111 9.69728 19.1736C9.91617 19.2361 10.0256 19.2705 10.0256 19.2768H10.0162Z",
      strokeWidth: "2",
    })
  );
}
import * as Ps from "react";
function Na() {
  return Ps.createElement(
    "svg",
    {
      width: "24",
      height: "24",
      stroke: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Ps.createElement("circle", {
      cx: 12,
      cy: 12,
      r: 8,
      fill: "none",
      strokeWidth: 2,
      strokeLinecap: "round",
    })
  );
}
import * as Go from "react";
function Wa(r) {
  return Go.createElement(
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
    Go.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 4.656a.5.5 0 01.5-.5h9.7a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5z",
    }),
    Go.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.272 3a.578.578 0 00-.578.578v.578h3.311v-.578A.578.578 0 008.428 3H6.272zm3.733 1.156v-.578A1.578 1.578 0 008.428 2H6.272a1.578 1.578 0 00-1.578 1.578v.578H3.578a.5.5 0 00-.5.5V12.2a1.578 1.578 0 001.577 1.578h5.39a1.578 1.578 0 001.577-1.578V4.656a.5.5 0 00-.5-.5h-1.117zm-5.927 1V12.2a.578.578 0 00.577.578h5.39a.578.578 0 00.577-.578V5.156H4.078z",
    }),
    Go.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.272 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5zM8.428 6.85a.5.5 0 01.5.5v3.233a.5.5 0 11-1 0V7.35a.5.5 0 01.5-.5z",
    })
  );
}
import * as Ms from "react";
function Bs(t) {
  var n = t,
    { flipHorizontal: r } = n,
    e = Je(n, ["flipHorizontal"]);
  return Ms.createElement(
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
    Ms.createElement("path", {
      d: "M10.6707 8.5081C10.6707 10.1923 9.3004 11.5625 7.61631 11.5625H6.5351C6.35593 11.5625 6.21074 11.4173 6.21074 11.2382V11.13C6.21074 10.9508 6.35591 10.8057 6.5351 10.8057H7.61631C8.88313 10.8057 9.91387 9.77492 9.91387 8.5081C9.91387 7.24128 8.88313 6.21054 7.61631 6.21054H5.62155L6.99534 7.58433C7.14289 7.73183 7.14289 7.97195 6.99534 8.11944C6.85216 8.26251 6.60298 8.2623 6.46013 8.11944L4.44045 6.09971C4.36898 6.02824 4.32959 5.93321 4.32959 5.8321C4.32959 5.73106 4.36898 5.63598 4.44045 5.56454L6.46024 3.54472C6.60309 3.40176 6.85248 3.40176 6.99535 3.54472C7.14291 3.69218 7.14291 3.93234 6.99535 4.07979L5.62156 5.45368H7.61631C9.3004 5.45368 10.6707 6.82393 10.6707 8.5081Z",
    })
  );
}
import * as Es from "react";
function Ua(r) {
  return Es.createElement(
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
    Es.createElement("path", {
      d: "M12.4239 4.62C13.3572 4.62 14.1572 4.73333 14.8239 4.96C15.4906 5.17333 15.9772 5.43333 16.2839 5.74C16.3639 5.82 16.4039 5.94 16.4039 6.1V8.86H14.0639C13.9172 8.86 13.8439 8.78666 13.8439 8.64V7.26C13.4306 7.12666 12.9572 7.06 12.4239 7.06C11.6506 7.06 11.0639 7.18 10.6639 7.42C10.2639 7.66 10.0639 8.04666 10.0639 8.58V9C10.0639 9.38666 10.1639 9.69333 10.3639 9.92C10.5772 10.1333 11.0306 10.3467 11.7239 10.56L13.6439 11.14C14.4706 11.38 15.1172 11.66 15.5839 11.98C16.0506 12.3 16.3772 12.68 16.5639 13.12C16.7639 13.5467 16.8639 14.0733 16.8639 14.7V15.62C16.8639 16.7933 16.4039 17.7133 15.4839 18.38C14.5639 19.0467 13.2839 19.38 11.6439 19.38C10.6706 19.38 9.79723 19.2867 9.0239 19.1C8.2639 18.9133 7.71056 18.6533 7.3639 18.32C7.3239 18.28 7.29056 18.24 7.2639 18.2C7.25056 18.1467 7.2439 18.06 7.2439 17.94V15.74H7.6239C8.2239 16.1533 8.85056 16.4533 9.5039 16.64C10.1572 16.8267 10.9306 16.92 11.8239 16.92C12.6506 16.92 13.2506 16.7867 13.6239 16.52C14.0106 16.2533 14.2039 15.9333 14.2039 15.56V14.88C14.2039 14.6667 14.1639 14.48 14.0839 14.32C14.0172 14.16 13.8706 14.0133 13.6439 13.88C13.4172 13.7467 13.0572 13.6067 12.5639 13.46L10.6639 12.88C9.7839 12.6133 9.11056 12.3 8.6439 11.94C8.17723 11.58 7.85056 11.18 7.6639 10.74C7.49056 10.3 7.4039 9.83333 7.4039 9.34V8.38C7.4039 7.64666 7.61056 7 8.0239 6.44C8.43723 5.88 9.01723 5.44 9.7639 5.12C10.5239 4.78666 11.4106 4.62 12.4239 4.62Z",
    })
  );
}
import * as Rs from "react";
function Ka(r) {
  return Rs.createElement(
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
    Rs.createElement("path", {
      d: "M8.16191 19H5.68191C5.53525 19 5.46191 18.9267 5.46191 18.78V5H8.76191C8.88191 5 8.97525 5.03333 9.04191 5.1C9.10858 5.15333 9.17525 5.27333 9.24191 5.46C9.72191 6.59333 10.1686 7.7 10.5819 8.78C11.0086 9.84667 11.4352 10.98 11.8619 12.18H12.1619C12.6019 10.9667 13.0352 9.79333 13.4619 8.66C13.8886 7.52667 14.3552 6.30667 14.8619 5H18.3219C18.4686 5 18.5419 5.07333 18.5419 5.22V19H16.0619C15.9152 19 15.8419 18.9267 15.8419 18.78V16.26C15.8419 15.5267 15.8486 14.8133 15.8619 14.12C15.8886 13.4267 15.9286 12.6867 15.9819 11.9C16.0486 11.1 16.1419 10.1933 16.2619 9.18H15.9019C15.4352 10.3533 14.9486 11.5667 14.4419 12.82C13.9486 14.06 13.4819 15.2333 13.0419 16.34H11.1019C11.0619 16.34 11.0152 16.3333 10.9619 16.32C10.9219 16.2933 10.8886 16.2467 10.8619 16.18C10.4619 15.18 10.0086 14.06 9.50191 12.82C9.00858 11.58 8.53525 10.3667 8.08191 9.18H7.70191C7.83525 10.18 7.93525 11.0733 8.00191 11.86C8.06858 12.6467 8.10858 13.3933 8.12191 14.1C8.14858 14.8067 8.16191 15.5267 8.16191 16.26V19Z",
    })
  );
}
import * as As from "react";
function _a(r) {
  return As.createElement(
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
    As.createElement("path", {
      d: "M7.68191 19C7.53525 19 7.46191 18.9267 7.46191 18.78V5H10.1219C10.2686 5 10.3419 5.07333 10.3419 5.22V16.56H13.4419V15.02H15.7619C15.9086 15.02 15.9819 15.0933 15.9819 15.24V19H7.68191Z",
    })
  );
}
import * as Vo from "react";
function Ya() {
  return Vo.createElement(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Vo.createElement("path", {
      d: "M1.72838 9.33987L8.84935 2.34732C9.23874 1.96494 9.86279 1.96539 10.2516 2.34831L13.5636 5.60975C13.9655 6.00555 13.9607 6.65526 13.553 7.04507L8.13212 12.2278C7.94604 12.4057 7.69851 12.505 7.44107 12.505L6.06722 12.505L3.83772 12.505C3.5673 12.505 3.30842 12.3954 3.12009 12.2014L1.7114 10.7498C1.32837 10.3551 1.33596 9.72521 1.72838 9.33987Z",
      stroke: "currentColor",
    }),
    Vo.createElement("line", {
      x1: "6.01807",
      y1: "12.5",
      x2: "10.7959",
      y2: "12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
    }),
    Vo.createElement("line", {
      x1: "5.50834",
      y1: "5.74606",
      x2: "10.1984",
      y2: "10.4361",
      stroke: "currentColor",
    })
  );
}
import * as Ls from "react";
function Za() {
  return Ls.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      viewBox: "0 0 16 16",
    },
    Ls.createElement("path", {
      d: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z",
    })
  );
}
import * as Hs from "react";
function Xa() {
  return Hs.createElement(
    "svg",
    {
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
    },
    Hs.createElement("path", {
      d: "M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645C12.0488 3.34171 12.0488 3.65829 11.8536 3.85355L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z",
    })
  );
}
function qa() {
  let r = me(),
    e = Lae(),
    t = To.useCallback(() => {
      r.delete();
    }, [r]),
    n = r.useStore(
      (o) =>
        o.appState.status === "idle" &&
        o.document.pageStates[o.appState.currentPageId].selectedIds.length > 0
    );
  return To.createElement(
    Le,
    {
      label: e.formatMessage({ id: "delete" }),
      kbd: "\u232B",
      id: "TD-Delete",
    },
    To.createElement(
      we,
      {
        "aria-label": e.formatMessage({ id: "delete" }),
        variant: "circle",
        disabled: !n,
        onSelect: t,
      },
      To.createElement(Wa, null)
    )
  );
}
import * as Lr from "@radix-ui/react-dropdown-menu";
import {
  ExternalLinkIcon as Yae,
  GitHubLogoIcon as Zae,
  HeartFilledIcon as Xae,
  QuestionMarkIcon as qae,
  TwitterLogoIcon as Jae,
} from "@radix-ui/react-icons";
import * as zn from "@radix-ui/react-popover";
import * as ze from "react";
import { FormattedMessage as el } from "react-intl";
import { ExternalLinkIcon as Hae } from "@radix-ui/react-icons";
import * as Jt from "react";
import { FormattedMessage as zae } from "react-intl";
var Oae = (r) => r.settings.language,
  Ja = () => {
    let r = me(),
      e = r.useStore(Oae),
      t = Jt.useCallback(
        (n) => {
          r.setSetting("language", n);
        },
        [r]
      );
    return Jt.createElement(
      Mt,
      {
        variant: "menu",
        overflow: !0,
        id: "language-menu",
        side: "left",
        sideOffset: 8,
      },
      vr.map(({ locale: n, label: o }) =>
        Jt.createElement(
          Pt,
          {
            key: n,
            checked: e === n,
            onCheckedChange: () => t(n),
            id: `TD-MenuItem-Language-${n}`,
          },
          o
        )
      ),
      Jt.createElement(Pe, null),
      Jt.createElement(
        "a",
        {
          href: "https://github.com/tldraw/tldraw/blob/main/guides/translation.md",
          target: "_blank",
          rel: "nofollow",
        },
        Jt.createElement(
          xe,
          { id: "TD-MenuItem-Translation-Link" },
          Jt.createElement(zae, { id: "translation.link" }),
          Jt.createElement(ut, null, Jt.createElement(Hae, null))
        )
      )
    );
  };
import * as Bt from "@radix-ui/react-dialog";
import { Cross2Icon as Fae } from "@radix-ui/react-icons";
import * as rt from "react";
import { FormattedMessage as zs, useIntl as jae } from "react-intl";
function Qa({ onOpenChange: r }) {
  let e = jae(),
    t = Lt(),
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
  return rt.createElement(
    Bt.Root,
    { onOpenChange: r },
    rt.createElement(
      Bt.Trigger,
      { asChild: !0 },
      rt.createElement(
        je,
        { id: "TD-HelpItem-Keyboard", variant: "wide" },
        rt.createElement(zs, { id: "keyboard.shortcuts" })
      )
    ),
    rt.createElement(
      Bt.Portal,
      { container: t.current },
      rt.createElement(Uae, null),
      rt.createElement(
        Nae,
        null,
        rt.createElement(
          _ae,
          null,
          rt.createElement(zs, { id: "keyboard.shortcuts" }),
          rt.createElement(
            Bt.Close,
            { asChild: !0 },
            rt.createElement(Kae, null, rt.createElement(Fae, null))
          )
        ),
        rt.createElement(
          Wae,
          { bp: Qe },
          Object.entries(n).map(([o, s]) =>
            rt.createElement(
              Os,
              { key: o },
              rt.createElement(
                Gae,
                null,
                rt.createElement(zs, { id: `menu.${o.toLocaleLowerCase()}` })
              ),
              rt.createElement(
                Vae,
                null,
                s.map((a) =>
                  rt.createElement(
                    $ae,
                    { key: a.label },
                    a.label,
                    rt.createElement(po, { variant: "menu" }, a.kbd)
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
var Gae = H("h3", {
    fontSize: "$2",
    color: "$text",
    fontFamily: "$ui",
    margin: 0,
    paddingBottom: "$5",
  }),
  Os = H("div", { breakInside: "avoid", paddingBottom: 24 }),
  Vae = H("ul", {
    listStyleType: "none",
    width: "100%",
    padding: 0,
    margin: 0,
  }),
  $ae = H("li", {
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
  Nae = H(Bt.Content, {
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
  Wae = H("div", {
    maxWidth: "100%",
    width: "fit-content",
    height: "fit-content",
    overflowY: "auto",
    columnGap: 64,
    variants: {
      bp: {
        mobile: { columns: 1, [`& ${Os}`]: { minWidth: "0px" } },
        small: { columns: 2, [`& ${Os}`]: { minWidth: "200px" } },
        medium: { columns: 3 },
        large: { columns: 3 },
      },
    },
  }),
  Uae = H(Bt.Overlay, {
    backgroundColor: "$overlay",
    position: "fixed",
    inset: 0,
    zIndex: 9998,
  }),
  Kae = H(go, {
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
  _ae = H(Bt.Title, {
    fontFamily: "$body",
    fontSize: "$3",
    color: "$text",
    paddingBottom: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
  });
var Qae = (r) => r.settings.isDebugMode,
  ele = (r) => r.settings.dockPosition;
function tl() {
  let r = me(),
    e = r.useStore(Qae),
    t = r.useStore(ele),
    [n, o] = ze.useState(!1);
  return ze.createElement(
    zn.Root,
    null,
    ze.createElement(
      ile,
      { dir: "ltr", debug: e, side: t, bp: Qe },
      ze.createElement(
        zn.Trigger,
        { dir: "ltr", asChild: !0 },
        ze.createElement(rle, null, ze.createElement(qae, null))
      )
    ),
    ze.createElement(
      zn.Content,
      {
        dir: "ltr",
        align: "end",
        side: "top",
        alignOffset: 10,
        sideOffset: 8,
        asChild: !0,
      },
      ze.createElement(
        sle,
        { style: { visibility: n ? "hidden" : "visible" } },
        ze.createElement(tle, null),
        ze.createElement(Qa, { onOpenChange: o }),
        ze.createElement(Pe, null),
        ze.createElement(ole, null)
      )
    )
  );
}
var tle = () =>
    ze.createElement(
      Lr.Root,
      { dir: "ltr" },
      ze.createElement(
        Lr.Trigger,
        { asChild: !0 },
        ze.createElement(
          je,
          { variant: "wide", hasArrow: !0 },
          ze.createElement(el, { id: "language" })
        )
      ),
      ze.createElement(Ja, null)
    ),
  nle = [
    { id: "tldraw-beta", icon: Yae, url: "https://beta.tldraw.com" },
    { id: "github", icon: Zae, url: "https://github.com/tldraw/tldraw" },
    { id: "twitter", icon: Jae, url: "https://twitter.com/tldraw" },
    { id: "discord", icon: Za, url: "https://discord.gg/SBBEVCA4PG" },
    {
      id: "become.a.sponsor",
      icon: Xae,
      url: "https://github.com/sponsors/steveruizok",
    },
  ],
  ole = () =>
    ze.createElement(
      ze.Fragment,
      null,
      nle.map((r) =>
        ze.createElement(
          "a",
          { key: r.id, href: r.url, target: "_blank", rel: "nofollow" },
          ze.createElement(
            je,
            { id: `TD-Link-${r.id}`, variant: "wide" },
            ze.createElement(el, { id: r.id }),
            ze.createElement(ut, null, ze.createElement(r.icon, null))
          )
        )
      )
    ),
  rle = H("button", {
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
  sle = H(Rt, {
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
  ile = H(zn.Anchor, {
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
import {
  ArrowTopRightIcon as ule,
  CursorArrowIcon as hle,
  ImageIcon as mle,
  Pencil1Icon as gle,
  Pencil2Icon as fle,
  TextIcon as Sle,
} from "@radix-ui/react-icons";
import * as Oe from "react";
import { useIntl as ble } from "react-intl";
var no = H("div", {
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
import * as On from "@radix-ui/react-dropdown-menu";
import {
  CircleIcon as ale,
  SquareIcon as lle,
  VercelLogoIcon as dle,
} from "@radix-ui/react-icons";
import * as Ue from "react";
import { useIntl as cle } from "react-intl";
var Fs = ["rectangle", "ellipse", "triangle", "line"],
  nl = {
    ["rectangle"]: Ue.createElement(lle, null),
    ["ellipse"]: Ue.createElement(ale, null),
    ["triangle"]: Ue.createElement(dle, null),
    ["line"]: Ue.createElement(Xa, null),
  },
  ple = (r) => r.settings.dockPosition,
  ol = Ue.memo(function ({ activeTool: e, isToolLocked: t }) {
    let n = me(),
      o = cle(),
      s = n.useStore(ple),
      [a, d] = Ue.useState("rectangle");
    Ue.useEffect(() => {
      Fs.includes(e) && a !== e && d(e);
    }, [e]);
    let i = Ue.useCallback(() => {
        n.selectTool(a);
      }, [e, n]),
      c = Ue.useCallback(() => {
        n.toggleToolLock();
      }, [n]),
      u = Ue.useCallback((g) => {
        g.key === " " && n.shiftKey && g.preventDefault();
      }, []),
      p = Fs.includes(e),
      m = s === "bottom" || s === "top" ? "top" : s,
      h = s === "bottom" || s === "top" ? "row" : "column";
    return Ue.createElement(
      On.Root,
      { dir: "ltr", onOpenChange: i },
      Ue.createElement(
        On.Trigger,
        { dir: "ltr", asChild: !0, id: "TD-PrimaryTools-Shapes" },
        Ue.createElement(
          we,
          {
            disabled: p && n.shiftKey,
            variant: "primary",
            onDoubleClick: c,
            isToolLocked: p && t,
            isActive: p,
            onKeyDown: u,
            "aria-label": o.formatMessage({ id: "shapes" }),
          },
          nl[a]
        )
      ),
      Ue.createElement(
        On.Content,
        { asChild: !0, side: m, sideOffset: 12 },
        Ue.createElement(
          no,
          { side: "center", style: { flexDirection: h } },
          Fs.map((g, f) =>
            Ue.createElement(
              Le,
              {
                key: g,
                label: o.formatMessage({ id: g }),
                kbd: (4 + f).toString(),
                id: `TD-PrimaryTools-Shapes-${g}`,
              },
              Ue.createElement(
                On.Item,
                { asChild: !0 },
                Ue.createElement(
                  we,
                  {
                    "aria-label": o.formatMessage({ id: g }),
                    variant: "primary",
                    onClick: () => {
                      n.selectTool(g), d(g);
                    },
                  },
                  nl[g]
                )
              )
            )
          )
        )
      )
    );
  });
var Tle = (r) => r.appState.activeTool,
  yle = (r) => r.appState.isToolLocked,
  xle = (r) => r.settings.dockPosition,
  rl = Oe.memo(function () {
    let e = me(),
      t = ble(),
      n = e.useStore(Tle),
      o = e.useStore(yle),
      s = e.useStore(xle),
      a = Oe.useCallback(() => {
        e.selectTool("select");
      }, [e]),
      d = Oe.useCallback(() => {
        e.selectTool("erase");
      }, [e]),
      i = Oe.useCallback(() => {
        e.selectTool("draw");
      }, [e]),
      c = Oe.useCallback(() => {
        e.selectTool("arrow");
      }, [e]),
      u = Oe.useCallback(() => {
        e.selectTool("text");
      }, [e]),
      p = Oe.useCallback(() => {
        e.selectTool("sticky");
      }, [e]),
      m = Oe.useCallback(
        () =>
          pe(this, null, function* () {
            e.openAsset();
          }),
        [e]
      );
    return Oe.createElement(
      wle,
      {
        side: "center",
        id: "TD-PrimaryTools",
        style: {
          flexDirection: s === "bottom" || s === "top" ? "row" : "column",
        },
        bp: Qe,
      },
      Oe.createElement(
        Xt,
        {
          kbd: "1",
          label: t.formatMessage({ id: "select" }),
          onClick: a,
          isActive: n === "select",
          variant: "primary",
          id: "TD-PrimaryTools-CursorArrow",
        },
        Oe.createElement(hle, null)
      ),
      Oe.createElement(
        Xt,
        {
          kbd: "2",
          label: t.formatMessage({ id: "draw" }),
          onClick: i,
          isActive: n === "draw",
          variant: "primary",
          id: "TD-PrimaryTools-Pencil",
        },
        Oe.createElement(gle, null)
      ),
      Oe.createElement(
        Xt,
        {
          kbd: "3",
          label: t.formatMessage({ id: "eraser" }),
          onClick: d,
          isActive: n === "erase",
          variant: "primary",
          id: "TD-PrimaryTools-Eraser",
        },
        Oe.createElement(Ya, null)
      ),
      Oe.createElement(ol, { activeTool: n, isToolLocked: o }),
      Oe.createElement(
        Xt,
        {
          kbd: "8",
          label: t.formatMessage({ id: "arrow" }),
          onClick: c,
          isLocked: o,
          variant: "primary",
          isActive: n === "arrow",
          id: "TD-PrimaryTools-ArrowTopRight",
        },
        Oe.createElement(ule, null)
      ),
      Oe.createElement(
        Xt,
        {
          kbd: "9",
          label: t.formatMessage({ id: "text" }),
          onClick: u,
          isLocked: o,
          variant: "primary",
          isActive: n === "text",
          id: "TD-PrimaryTools-Text",
        },
        Oe.createElement(Sle, null)
      ),
      Oe.createElement(
        Xt,
        {
          kbd: "0",
          label: t.formatMessage({ id: "sticky" }),
          onClick: p,
          isActive: n === "sticky",
          variant: "primary",
          id: "TD-PrimaryTools-Pencil2",
        },
        Oe.createElement(fle, null)
      ),
      Oe.createElement(
        Xt,
        {
          label: t.formatMessage({ id: "image" }),
          onClick: m,
          id: "TD-PrimaryTools-Image",
          variant: "primary",
        },
        Oe.createElement(mle, null)
      )
    );
  }),
  wle = H(no, {
    variants: {
      bp: {
        mobile: { padding: "$0", borderRadius: "10px" },
        small: { padding: "$2" },
      },
    },
  });
import * as js from "react";
var kle = (r) => r.appState.status,
  vle = (r) => r.appState.activeTool;
function sl() {
  let r = me(),
    e = r.useStore(kle),
    t = r.useStore(vle);
  return js.createElement(
    Ile,
    { bp: Qe, id: "TD-StatusBar" },
    js.createElement(Cle, null, t, " | ", e)
  );
}
var Ile = H("div", {
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
  Cle = H("div", { whiteSpace: "nowrap", overflow: "hidden" });
var Dle = (r) => r.settings.isDebugMode,
  Ple = (r) => r.settings.dockPosition,
  il = Tt.memo(function ({ onBlur: e }) {
    let t = me(),
      n = t.useStore(Ple),
      o = t.useStore(Dle);
    return Tt.createElement(
      Tt.Fragment,
      null,
      Tt.createElement(
        Mle,
        { side: n, onBlur: e, bp: Qe, debug: o },
        Tt.createElement(
          Ble,
          { id: "TD-Tools" },
          Tt.createElement(ja, null),
          Tt.createElement(
            Rle,
            {
              orientation:
                n === "bottom" || n === "top" ? "horizontal" : "vertical",
            },
            Tt.createElement(Fa, null),
            Tt.createElement(rl, null),
            Tt.createElement(qa, null)
          )
        )
      ),
      Tt.createElement(tl, null),
      o && Tt.createElement(Ele, null, Tt.createElement(sl, null))
    );
  }),
  Mle = H("div", {
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
  Ble = H("div", {
    display: "flex",
    width: "fit-content",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "$4",
  }),
  Ele = H("div", {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",
    height: "40px",
    width: "100%",
    maxWidth: "100%",
  }),
  Rle = H("div", {
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
import * as at from "react";
import { useIntl as Qce } from "react-intl";
import * as dl from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon as zle } from "@radix-ui/react-icons";
import { supported as Ole } from "browser-fs-access";
import * as ee from "react";
import { FormattedMessage as mt, useIntl as Fle } from "react-intl";
import * as Me from "react";
import { FormattedMessage as Fn, useIntl as Ale } from "react-intl";
var Lle = (r) => r.settings,
  Hle = ["bottom", "left", "right", "top"];
function ll() {
  let r = me(),
    e = Ale(),
    t = r.useStore(Lle),
    n = Me.useCallback(() => {
      r.setSetting("isDebugMode", (p) => !p);
    }, [r]),
    o = Me.useCallback(() => {
      r.setSetting("isDarkMode", (p) => !p);
    }, [r]),
    s = Me.useCallback(() => {
      r.setSetting("isFocusMode", (p) => !p);
    }, [r]),
    a = Me.useCallback(() => {
      r.setSetting("showGrid", (p) => !p);
    }, [r]),
    d = Me.useCallback(() => {
      r.setSetting("keepStyleMenuOpen", (p) => !p);
    }, [r]),
    i = Me.useCallback(() => {
      r.setSetting("isCadSelectMode", (p) => !p);
    }, [r]),
    c = Me.useCallback(
      (p) => {
        r.setSetting("dockPosition", p);
      },
      [r]
    ),
    u = Me.useCallback(
      (p) => {
        r.setSetting("exportBackground", p);
      },
      [r]
    );
  return Me.createElement(
    ln,
    {
      label: e.formatMessage({ id: "menu.preferences" }),
      id: "TD-MenuItem-Preferences",
    },
    Me.createElement(
      Pt,
      {
        checked: t.isDarkMode,
        onCheckedChange: o,
        kbd: "#\u21E7D",
        id: "TD-MenuItem-Preferences-Dark_Mode",
        ariaLabel: e.formatMessage({ id: "preferences.dark.mode" }),
      },
      Me.createElement(Fn, { id: "preferences.dark.mode" })
    ),
    Me.createElement(
      Pt,
      {
        checked: t.isFocusMode,
        onCheckedChange: s,
        kbd: "#.",
        id: "TD-MenuItem-Preferences-Focus_Mode",
        ariaLabel: e.formatMessage({ id: "preferences.focus.mode" }),
      },
      Me.createElement(Fn, { id: "preferences.focus.mode" })
    ),
    Me.createElement(
      Pt,
      {
        checked: t.isDebugMode,
        onCheckedChange: n,
        id: "TD-MenuItem-Preferences-Debug_Mode",
        ariaLabel: e.formatMessage({ id: "preferences.debug.mode" }),
      },
      Me.createElement(Fn, { id: "preferences.debug.mode" })
    ),
    Me.createElement(Pe, null),
    Me.createElement(
      Pt,
      {
        checked: t.showGrid,
        onCheckedChange: a,
        kbd: "#\u21E7G",
        id: "TD-MenuItem-Preferences-Grid",
        ariaLabel: e.formatMessage({ id: "preferences.show.grid" }),
      },
      Me.createElement(Fn, { id: "preferences.show.grid" })
    ),
    Me.createElement(
      Pt,
      {
        checked: t.isCadSelectMode,
        onCheckedChange: i,
        id: "TD-MenuItem-Preferences-Cad_Selection",
        ariaLabel: e.formatMessage({ id: "preferences.use.cad.selection" }),
      },
      Me.createElement(Fn, { id: "preferences.use.cad.selection" })
    ),
    Me.createElement(
      Pt,
      {
        checked: t.keepStyleMenuOpen,
        onCheckedChange: d,
        id: "TD-MenuItem-Preferences-Style_menu",
        ariaLabel: e.formatMessage({ id: "preferences.keep.stylemenu.open" }),
      },
      Me.createElement(Fn, { id: "preferences.keep.stylemenu.open" })
    ),
    Me.createElement(
      ln,
      { label: e.formatMessage({ id: "dock.position" }) },
      Hle.map((p) =>
        Me.createElement(
          Pt,
          {
            key: p,
            checked: t.dockPosition === p,
            onCheckedChange: () => c(p),
            id: `TD-MenuItem-DockPosition-${p}`,
            ariaLabel: `DockPosition-${p}`,
          },
          Me.createElement(al, null, Me.createElement(Fn, { id: p }))
        )
      )
    ),
    Me.createElement(
      ln,
      { label: e.formatMessage({ id: "export.background" }) },
      Object.values(Fo).map((p) =>
        Me.createElement(
          Pt,
          {
            key: p,
            checked: t.exportBackground === p,
            onCheckedChange: () => u(p),
            id: `TD-MenuItem-ExportBackground-${p}`,
            ariaLabel: `ExportBackground-${p}`,
          },
          Me.createElement(al, null, Me.createElement(Fn, { id: p }))
        )
      )
    )
  );
}
var al = H("span", { textTransform: "capitalize" });
var jle = (r) =>
    r.document.pageStates[r.appState.currentPageId].selectedIds.length,
  Gle = (r) => r.appState.disableAssets,
  cl = ee.memo(function ({ readOnly: e }) {
    let t = me(),
      n = Fle(),
      [o, s] = ee.useState(!1),
      a = t.useStore(jle),
      d = t.useStore(Gle),
      [i, c] = ee.useState(0);
    ee.useEffect(() => c(1), []);
    let {
        onNewProject: u,
        onOpenProject: p,
        onSaveProject: m,
        onSaveProjectAs: h,
      } = Sr(),
      g = ee.useCallback(() => {
        Ole ? t.saveProjectAs() : s(!0);
      }, [t]),
      f = ee.useCallback(() => {
        t.delete();
      }, [t]),
      T = ee.useCallback(() => {
        t.copyImage("svg", { scale: 1, quality: 1, transparentBackground: !1 });
      }, [t]),
      x = ee.useCallback(() => {
        t.copyImage("png", { scale: 2, quality: 1, transparentBackground: !0 });
      }, [t]),
      b = ee.useCallback(
        () =>
          pe(this, null, function* () {
            t.exportImage("png", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      y = ee.useCallback(
        () =>
          pe(this, null, function* () {
            t.exportImage("jpeg", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      R = ee.useCallback(
        () =>
          pe(this, null, function* () {
            t.exportImage("webp", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      U = ee.useCallback(
        () =>
          pe(this, null, function* () {
            t.exportImage("svg", { scale: 2, quality: 1 });
          }),
        [t]
      ),
      L = ee.useCallback(
        () =>
          pe(this, null, function* () {
            t.copyJson();
          }),
        [t]
      ),
      k = ee.useCallback(
        () =>
          pe(this, null, function* () {
            t.exportJson();
          }),
        [t]
      ),
      I = ee.useCallback(() => {
        t.cut();
      }, [t]),
      q = ee.useCallback(() => {
        t.copy();
      }, [t]),
      de = ee.useCallback(() => {
        t.paste();
      }, [t]),
      le = ee.useCallback(() => {
        t.selectAll();
      }, [t]),
      Ae = ee.useCallback(() => {
        t.selectNone();
      }, [t]),
      Ce = ee.useCallback(() => {
        t.openAsset();
      }, [t]),
      De = ee.useCallback(() => {
        t.zoomTo(1);
      }, [t]),
      Ve =
        t.callbacks.onNewProject ||
        t.callbacks.onOpenProject ||
        t.callbacks.onSaveProject ||
        t.callbacks.onSaveProjectAs ||
        t.callbacks.onExport,
      $e = a > 0;
    return ee.createElement(
      ee.Fragment,
      null,
      ee.createElement(
        dl.Root,
        { dir: "ltr" },
        ee.createElement(
          Er,
          { id: "TD-MenuIcon" },
          ee.createElement(zle, null)
        ),
        ee.createElement(
          Mt,
          {
            variant: "menu",
            id: "TD-Menu",
            side: "bottom",
            align: "start",
            sideOffset: 4,
            alignOffset: 4,
          },
          Ve &&
            ee.createElement(
              ln,
              {
                label: `${n.formatMessage({ id: "menu.file" })}...`,
                id: "TD-MenuItem-File",
              },
              t.callbacks.onNewProject &&
                ee.createElement(
                  xe,
                  { onClick: u, kbd: "#N", id: "TD-MenuItem-File-New_Project" },
                  ee.createElement(mt, { id: "new.project" })
                ),
              t.callbacks.onOpenProject &&
                ee.createElement(
                  xe,
                  { onClick: p, kbd: "#O", id: "TD-MenuItem-File-Open" },
                  ee.createElement(mt, { id: "open" }),
                  "..."
                ),
              t.callbacks.onSaveProject &&
                ee.createElement(
                  xe,
                  { onClick: m, kbd: "#S", id: "TD-MenuItem-File-Save" },
                  ee.createElement(mt, { id: "save" })
                ),
              t.callbacks.onSaveProjectAs &&
                ee.createElement(
                  xe,
                  {
                    onClick: g,
                    kbd: "#\u21E7S",
                    id: "TD-MenuItem-File-Save_As",
                  },
                  ee.createElement(mt, { id: "save.as" }),
                  "..."
                ),
              ee.createElement(
                ln,
                {
                  label: `${n.formatMessage({ id: "export.as" })}...`,
                  size: "small",
                  id: "TD-MenuItem-Export",
                },
                ee.createElement(
                  xe,
                  { onClick: U, id: "TD-MenuItem-Export-SVG" },
                  "SVG"
                ),
                ee.createElement(
                  xe,
                  { onClick: b, id: "TD-MenuItem-Export-PNG" },
                  "PNG"
                ),
                ee.createElement(
                  xe,
                  { onClick: y, id: "TD-MenuItem-Export-JPG" },
                  "JPG"
                ),
                ee.createElement(
                  xe,
                  { onClick: R, id: "TD-MenuItem-Export-WEBP" },
                  "WEBP"
                ),
                ee.createElement(
                  xe,
                  { onClick: k, id: "TD-MenuItem-Export-JSON" },
                  "JSON"
                )
              ),
              !d &&
                ee.createElement(
                  ee.Fragment,
                  null,
                  ee.createElement(Pe, null),
                  ee.createElement(
                    xe,
                    {
                      onClick: Ce,
                      kbd: "#U",
                      id: "TD-MenuItem-File-Upload_Media",
                    },
                    ee.createElement(mt, { id: "upload.media" })
                  )
                )
            ),
          ee.createElement(
            ln,
            {
              label: `${n.formatMessage({ id: "menu.edit" })}...`,
              id: "TD-MenuItem-Edit",
            },
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: t.undo,
                disabled: e,
                kbd: "#Z",
                id: "TD-MenuItem-Edit-Undo",
              },
              ee.createElement(mt, { id: "undo" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: t.redo,
                disabled: e,
                kbd: "#\u21E7Z",
                id: "TD-MenuItem-Edit-Redo",
              },
              ee.createElement(mt, { id: "redo" })
            ),
            ee.createElement(Pe, null),
            ee.createElement(
              xe,
              {
                onSelect: He,
                disabled: !$e || e,
                onClick: I,
                kbd: "#X",
                id: "TD-MenuItem-Edit-Cut",
              },
              ee.createElement(mt, { id: "cut" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                disabled: !$e,
                onClick: q,
                kbd: "#C",
                id: "TD-MenuItem-Edit-Copy",
              },
              ee.createElement(mt, { id: "copy" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: de,
                kbd: "#V",
                id: "TD-MenuItem-Edit-Paste",
              },
              ee.createElement(mt, { id: "paste" })
            ),
            ee.createElement(Pe, null),
            ee.createElement(
              ln,
              {
                label: `${n.formatMessage({ id: "copy.as" })}...`,
                size: "small",
                id: "TD-MenuItem-Copy-As",
              },
              ee.createElement(
                xe,
                { onClick: T, id: "TD-MenuItem-Copy-as-SVG" },
                "SVG"
              ),
              ee.createElement(
                xe,
                { onClick: x, id: "TD-MenuItem-Copy-As-PNG" },
                "PNG"
              ),
              ee.createElement(
                xe,
                { onClick: L, id: "TD-MenuItem-Copy_as_JSON" },
                "JSON"
              )
            ),
            ee.createElement(Pe, null),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: le,
                kbd: "#A",
                id: "TD-MenuItem-Select_All",
              },
              ee.createElement(mt, { id: "select.all" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                disabled: !$e,
                onClick: Ae,
                id: "TD-MenuItem-Select_None",
              },
              ee.createElement(mt, { id: "select.none" })
            ),
            ee.createElement(Pe, null),
            ee.createElement(
              xe,
              {
                onSelect: f,
                disabled: !$e,
                kbd: "\u232B",
                id: "TD-MenuItem-Delete",
              },
              ee.createElement(mt, { id: "delete" })
            )
          ),
          ee.createElement(
            ln,
            {
              label: n.formatMessage({ id: "menu.view" }),
              id: "TD-MenuItem-Edit",
            },
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: t.zoomIn,
                kbd: "#+",
                id: "TD-MenuItem-View-ZoomIn",
              },
              ee.createElement(mt, { id: "zoom.in" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: t.zoomOut,
                kbd: "#-",
                id: "TD-MenuItem-View-ZoomOut",
              },
              ee.createElement(mt, { id: "zoom.out" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: De,
                kbd: "\u21E7+0",
                id: "TD-MenuItem-View-ZoomTo100",
              },
              ee.createElement(mt, { id: "zoom.to" }),
              " 100%"
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: t.zoomToFit,
                kbd: "\u21E7+1",
                id: "TD-MenuItem-View-ZoomToFit",
              },
              ee.createElement(mt, { id: "zoom.to.fit" })
            ),
            ee.createElement(
              xe,
              {
                onSelect: He,
                onClick: t.zoomToSelection,
                kbd: "\u21E7+2",
                id: "TD-MenuItem-View-ZoomToSelection",
              },
              ee.createElement(mt, { id: "zoom.to.selection" })
            )
          ),
          ee.createElement(Pe, null),
          ee.createElement(ll, null)
        )
      ),
      ee.createElement(Oa, { isOpen: o, onClose: () => s(!1) })
    );
  });
import * as gd from "@radix-ui/react-dropdown-menu";
import { CheckIcon as hd, ClipboardIcon as md } from "@radix-ui/react-icons";
import { Utils as Si } from "@tldraw/core";
import * as Re from "react";
import { FormattedMessage as Yr } from "react-intl";
import * as Gs from "react";
function pl() {
  return Gs.createElement(
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
    Gs.createElement("path", {
      d: "M1.36482 4.71089C1.36482 3.21371 2.57853 2 4.07572 2C5.5729 2 6.78661 3.21371 6.78661 4.71089C6.78661 5.76842 6.18106 6.68452 5.29779 7.13136C5.80465 7.24611 6.26407 7.44186 6.66028 7.73182C7.18674 8.11711 7.57215 8.64722 7.81073 9.30983C7.81452 9.30606 7.81832 9.3023 7.82212 9.29855C8.30448 8.82317 8.91325 8.52463 9.60905 8.37275C8.68812 7.922 8.05394 6.97569 8.05394 5.88126C8.05394 4.35017 9.29513 3.10898 10.8262 3.10898C12.3573 3.10898 13.5985 4.35017 13.5985 5.88126C13.5985 6.97561 12.9644 7.92186 12.0436 8.37265C12.7396 8.52449 13.3486 8.82306 13.831 9.29854C14.5795 10.0361 14.9481 11.1249 14.9481 12.5176C14.9481 12.7799 14.7354 12.9926 14.473 12.9926C14.2107 12.9926 13.9981 12.7799 13.9981 12.5175C13.9981 11.2848 13.6738 10.4774 13.1642 9.97518C12.6532 9.4716 11.8802 9.20024 10.8266 9.20024C9.77294 9.20024 8.99993 9.4716 8.48896 9.97518C7.97939 10.4774 7.65513 11.2848 7.65513 12.5176C7.65513 12.7799 7.44247 12.9926 7.18013 12.9926C6.9178 12.9926 6.70513 12.7799 6.70513 12.5176C6.70513 11.6734 6.84053 10.941 7.11384 10.3307C7.0922 10.2895 7.0763 10.2444 7.06737 10.1962C6.91739 9.38749 6.57392 8.84586 6.09923 8.49845C5.61626 8.14499 4.94481 7.95427 4.07574 7.95427C3.05232 7.95427 2.30368 8.21784 1.80952 8.70485C1.31675 9.19047 1.00176 9.97257 1.00176 11.1702C1.00176 11.4326 0.789093 11.6452 0.526758 11.6452C0.264423 11.6452 0.0517578 11.4326 0.0517578 11.1702C0.0517578 9.81263 0.411052 8.74925 1.14268 8.02821C1.60624 7.57137 2.18892 7.28191 2.85378 7.13142C1.97043 6.68461 1.36482 5.76848 1.36482 4.71089ZM4.07572 2.95C3.1032 2.95 2.31482 3.73838 2.31482 4.71089C2.31482 5.68341 3.1032 6.47178 4.07572 6.47178C5.04823 6.47178 5.83661 5.68341 5.83661 4.71089C5.83661 3.73838 5.04823 2.95 4.07572 2.95ZM10.8262 4.05898C9.8198 4.05898 9.00394 4.87484 9.00394 5.88126C9.00394 6.88768 9.8198 7.70355 10.8262 7.70355C11.8326 7.70355 12.6485 6.88768 12.6485 5.88126C12.6485 4.87484 11.8326 4.05898 10.8262 4.05898Z",
    })
  );
}
import { Utils as Ot } from "@tldraw/core";
import {
  intersectRayBounds as fi,
  intersectRayEllipse as fce,
  intersectRayLineSegment as Sce,
} from "@tldraw/intersect";
import { Vec as fe } from "@tldraw/vec";
var Vt = "-0.03em";
var yo = [0.5, 0.5],
  eTe = Math.PI * 2,
  Hr = ".tldr",
  oo = {
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
var Vs = [
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
  Vle =
    typeof Window == "undefined"
      ? !1
      : /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  tTe = typeof Window == "undefined" ? !1 : /linux/i.test(navigator.userAgent),
  zr = [".png", ".svg", ".jpg", ".jpeg", ".gif"],
  Or = Vle ? [] : [".mp4", ".webm"];
function St(r) {
  if (r === null) return r;
  if (r instanceof Date) return new Date(r.getTime());
  if (typeof r == "object")
    if (typeof r[Symbol.iterator] == "function") {
      let e = [];
      if (r.length > 0) for (let t of r) e.push(St(t));
      return e;
    } else {
      let e = Object.keys(r),
        t = {};
      if (e.length > 0) for (let n of e) t[n] = St(r[n]);
      return t;
    }
  return r;
}
import { SVGContainer as pde, Utils as Qt } from "@tldraw/core";
import {
  intersectArcBounds as ude,
  intersectLineSegmentBounds as hde,
  intersectLineSegmentLineSegment as mde,
} from "@tldraw/intersect";
import { Vec as ge } from "@tldraw/vec";
import * as _e from "react";
import { TLShapeUtil as ode, Utils as xn } from "@tldraw/core";
import {
  intersectLineSegmentBounds as rde,
  intersectLineSegmentPolyline as sde,
  intersectRayBounds as ide,
} from "@tldraw/intersect";
import { Vec as wn } from "@tldraw/vec";
import * as vl from "react";
import { Utils as ul } from "@tldraw/core";
function $t(r, e) {
  let t = ul.getFromCache(e, r, () => {
    let [n, o] = r.size;
    return { minX: 0, maxX: n, minY: 0, maxY: o, width: n, height: o };
  });
  return ul.translateBounds(t, r.point);
}
var $le = {
  ["start"]: "left",
  ["middle"]: "center",
  ["end"]: "right",
  ["justify"]: "justify",
};
function hl(r = "start") {
  return $le[r];
}
var jn;
function Nle() {
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
      letterSpacing: Vt,
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
typeof window != "undefined" && (jn = Nle());
var Ns = "",
  ml = "",
  $s = [0, 0];
function gl() {
  Ns = "";
}
function Gn(r, e) {
  if (!r) return [16, 32];
  if (!jn) return [10, 10];
  if ((jn.parent || document.body.appendChild(jn), r === Ns && e === ml))
    return $s;
  (Ns = r), (ml = e), (jn.textContent = r), (jn.style.font = e);
  let t = jn.offsetWidth || 1,
    n = jn.offsetHeight || 1;
  return ($s = [t, n]), $s;
}
var Wle = new RegExp(
  `${[32, 160, 4961, 65792, 65793, 4153, 4241]
    .map((r) => String.fromCodePoint(r))
    .join("|")}`
);
function Vn(r, e, t, n, o, s = !1) {
  let a = "normal",
    i = Vt,
    c = Ule({
      text: r,
      wrap: s,
      width: o,
      fontSize: e,
      fontWeight: a,
      fontFamily: t,
      fontStyle: "normal",
      textAlign: "left",
      letterSpacing: Vt,
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
function Ule(r) {
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
    .split(Wle)
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
import * as $o from "react";
function fl({ id: r, bounds: e, labelSize: t, offset: n, scale: o = 1 }) {
  return $o.createElement(
    "defs",
    null,
    $o.createElement(
      "mask",
      { id: r + "_clip" },
      $o.createElement("rect", {
        x: -100,
        y: -100,
        width: e.width + 200,
        height: e.height + 200,
        fill: "white",
      }),
      $o.createElement("rect", {
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
import { intersectLineLine as Kle } from "@tldraw/intersect";
import Nt from "@tldraw/vec";
var Fr = Math.PI * 2,
  zt = class {
    static inwardEdgeNormal(e) {
      let t = Nt.sub(e[1], e[0]),
        n = Nt.len2(t);
      return [-t[0] / n, t[1] / n];
    }
    static outwardEdgeNormal(e) {
      return Nt.neg(zt.inwardEdgeNormal(e));
    }
    static isReflexVertex(e, t) {
      let n = e.length,
        o = e[(t + n - 1) % n],
        s = e[t],
        a = e[(t + 1) % n];
      return zt.leftSide(o, a, s) < 0;
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
      i < 0 && (i += Fr), c < 0 && (c += Fr);
      let u = 5,
        p = i > c ? i - c : i + Fr - c,
        m = (a ? -p : Fr - p) / u;
      d.push(o);
      for (let h = 1; h < u; ++h) {
        let g = i + m * h;
        d.push([t[0] + Math.cos(g) * n, t[1] + Math.sin(g) * n]);
      }
      return d.push(s), d;
    }
    static createOffsetEdge(e, t) {
      return e.map((n) => Nt.add(n, t));
    }
    static getOffsetPolygon(e, t = 0) {
      let n = zt.getEdges(e),
        o = n.map((a) =>
          zt.createOffsetEdge(a, Nt.mul(zt.outwardEdgeNormal(a), t))
        ),
        s = [];
      for (let a = 0; a < o.length; a++) {
        let d = o[a],
          i = o[(a + o.length - 1) % o.length],
          c = zt.edgesIntersection(i, d);
        c ? s.push(c) : zt.appendArc(s, n[a][0], t, i[1], d[0], !1);
      }
      return s;
    }
    static createPaddingPolygon(e, t = 0) {
      let n = e.map((s) => zt.createOffsetEdge(s, zt.inwardEdgeNormal(s))),
        o = [];
      for (let s = 0; s < n.length; s++) {
        let a = n[s],
          d = n[(s + n.length - 1) % n.length],
          i = zt.edgesIntersection(d, a);
        i ? o.push(i) : zt.appendArc(o, e[s][0], t, d[1], a[0], !0);
      }
      return o;
    }
  },
  Sl = zt;
l(Sl, "leftSide", Nt.isLeft);
function bl(r, e) {
  if (r.length < 3) throw Error("Polygon must have at least 3 points");
  let t = r.length;
  return r
    .map((n, o) => [n, r[(o + 1) % t]])
    .map(([n, o]) => {
      let s = Nt.mul(Nt.per(Nt.uni(Nt.sub(o, n))), e);
      return [Nt.add(n, s), Nt.add(o, s)];
    })
    .map((n, o, s) => {
      let a = Kle(n, s[(o + 1) % s.length]);
      if (a === void 0) throw Error("Expected an intersection");
      return a;
    });
}
import { Utils as xo } from "@tldraw/core";
var Tl = "#fafafa",
  Ws = "#343d45",
  wo = {
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
  _le = {
    light: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(wo).map(([r, e]) => [r, xo.lerpColor(e, Tl, 0.45)])
        )
      ),
      { ["white"]: "#ffffff", ["black"]: "#3d3d3d" }
    ),
    dark: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(wo).map(([r, e]) => [
            r,
            xo.lerpColor(xo.lerpColor(e, "#999999", 0.3), Ws, 0.4),
          ])
        )
      ),
      { ["white"]: "#1d1d1d", ["black"]: "#bbbbbb" }
    ),
  },
  ko = {
    light: w(S({}, wo), { ["white"]: "#1d1d1d" }),
    dark: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(wo).map(([r, e]) => [r, xo.lerpColor(e, Ws, 0.1)])
        )
      ),
      { ["white"]: "#cecece", ["black"]: "#cecece" }
    ),
  },
  jr = {
    light: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(wo).map(([r, e]) => [r, xo.lerpColor(e, Tl, 0.82)])
        )
      ),
      { ["white"]: "#fefefe" }
    ),
    dark: w(
      S(
        {},
        Object.fromEntries(
          Object.entries(wo).map(([r, e]) => [r, xo.lerpColor(e, Ws, 0.82)])
        )
      ),
      { ["white"]: "rgb(30,33,37)", ["black"]: "#1e1e1f" }
    ),
  },
  Yle = { ["small"]: 2, ["medium"]: 3.5, ["large"]: 5 },
  Zle = { ["small"]: 28, ["medium"]: 48, ["large"]: 96, auto: "auto" },
  Xle = {
    ["script"]: '"Caveat Brush"',
    ["sans"]: '"Source Sans Pro"',
    ["serif"]: '"Crimson Pro"',
    ["mono"]: '"Source Code Pro"',
  },
  qle = { ["script"]: 1, ["sans"]: 1, ["serif"]: 1, ["mono"]: 1 },
  Jle = { ["small"]: 24, ["medium"]: 36, ["large"]: 48, auto: "auto" };
function Qle(r) {
  return Yle[r];
}
function ro(r, e = "script") {
  return Zle[r] * qle[e];
}
function dn(r = "script") {
  return Xle[r];
}
function Us(r) {
  return Jle[r];
}
function kt(r) {
  let e = ro(r.size, r.font),
    t = dn(r.font),
    { scale: n = 1 } = r;
  return `${e * n}px/1 ${t}`;
}
function yl(r) {
  let e = Us(r.size),
    t = dn(r.font),
    { scale: n = 1 } = r;
  return `${e * n}px/1 ${t}`;
}
function Ks(r, e = !1) {
  let { color: t } = r,
    n = e ? "dark" : "light",
    o = t === "white" || t === "black" ? "yellow" : t;
  return {
    fill: _le[n][o],
    stroke: ko[n][o],
    color: e ? "#1d1d1d" : "#0d0d0d",
  };
}
function be(r, e) {
  let { color: t, size: n, isFilled: o } = r,
    s = Qle(n),
    a = e ? "dark" : "light";
  return { stroke: ko[a][t], fill: o ? jr[a][t] : "none", strokeWidth: s };
}
var ct = {
    color: "black",
    size: "small",
    isFilled: !1,
    dash: "draw",
    scale: 1,
  },
  vo = w(S({}, ct), { font: "script", textAlign: "middle" });
var xl = "  ",
  st = class {
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
        n.execCommand("insertText", !1, t) || st.insertTextFirefox(e, t),
        o === n.body
          ? e.blur()
          : o instanceof HTMLElement && o !== e && o.focus();
    }
    static set(e, t) {
      e.select(), st.insert(e, t);
    }
    static getSelection(e) {
      let { selectionStart: t, selectionEnd: n } = e;
      return e.value.slice(t || void 0, n || void 0);
    }
    static wrapSelection(e, t, n) {
      let { selectionStart: o, selectionEnd: s } = e,
        a = st.getSelection(e);
      st.insert(e, t + a + (n != null ? n : t)),
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
        return st.insert(e, i), (e.selectionStart = a), (o += i.length - d), i;
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
          u = c.replace(/^|\n/g, `$&${xl}`),
          p = u.length - c.length;
        e.setSelectionRange(i, n - 1),
          st.insert(e, u),
          e.setSelectionRange(t + 1, n + p);
      } else st.insert(e, xl);
    }
    static unindent(e) {
      let { selectionStart: t, selectionEnd: n, value: o } = e,
        s =
          o.lastIndexOf(
            `
`,
            t - 1
          ) + 1,
        a = st.findLineEnd(o, n),
        d = e.value.slice(s, a),
        i = d.replace(/(^|\n)(\t| {1,2})/g, "$1"),
        c = d.length - i.length;
      e.setSelectionRange(s, a), st.insert(e, i);
      let u = /\t| {1,2}/.exec(o.slice(s, t)),
        p = u ? u[0].length : 0,
        m = t - p;
      e.setSelectionRange(t - p, Math.max(m, n - c));
    }
  };
import * as et from "react";
var $n = et.memo(function ({
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
    let u = et.useRef(null),
      p = et.useRef(!1),
      m = et.useCallback(
        (y) => {
          c(v.normalizeText(y.currentTarget.value));
        },
        [c]
      ),
      h = et.useCallback(
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
                ? st.unindent(y.currentTarget)
                : st.indent(y.currentTarget),
              c == null || c(v.normalizeText(y.currentTarget.value)));
        },
        [c]
      ),
      g = et.useCallback(
        (y) => {
          y.currentTarget.setSelectionRange(0, 0), i == null || i();
        },
        [i]
      ),
      f = et.useCallback(
        (y) => {
          !d ||
            !p.current ||
            (document.activeElement === y.currentTarget &&
              y.currentTarget.select());
        },
        [d]
      ),
      T = et.useCallback(
        (y) => {
          d && y.stopPropagation();
        },
        [d]
      ),
      x = et.useRef(d);
    et.useEffect(() => {
      d
        ? ((x.current = !0),
          requestAnimationFrame(() => {
            p.current = !0;
            let y = u.current;
            y && (y.focus(), y.select());
          }))
        : x.current && (i == null || i(), (x.current = !1));
    }, [d, i]);
    let b = et.useRef(null);
    return (
      et.useLayoutEffect(() => {
        let y = b.current;
        if (!y) return;
        let R = Gn(t, e);
        (y.style.transform = `scale(${a}, ${a}) translate(${o}px, ${s}px)`),
          (y.style.width = R[0] + 1 + "px"),
          (y.style.height = R[1] + 1 + "px");
      }, [t, e, s, o, a]),
      et.createElement(
        ede,
        null,
        et.createElement(
          tde,
          { ref: b, hasText: !!t, isEditing: d, style: { font: e, color: n } },
          d
            ? et.createElement(nde, {
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
                onContextMenu: ft,
                onCopy: ft,
                onPaste: ft,
                onCut: ft,
              })
            : t,
          "\u200B"
        )
      )
    );
  }),
  ede = H("div", {
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
  wl = {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    letterSpacing: Vt,
  },
  tde = H(
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
      wl
    )
  ),
  nde = H(
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
        wl
      ),
      { "&:focus": { outline: "none", border: "none" } }
    )
  );
import No from "@tldraw/vec";
function Nn(
  r,
  e,
  { initialShape: t, transformOrigin: n, scaleX: o, scaleY: s }
) {
  if (r.rotation || t.isAspectRatioLocked) {
    let a = No.toFixed(No.mul(t.size, Math.min(Math.abs(o), Math.abs(s)))),
      d = No.toFixed([
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
      point: No.toFixed([e.minX, e.minY]),
      size: No.toFixed([e.width, e.height]),
    };
}
import kl from "@tldraw/vec";
function Wn(r, e) {
  return {
    size: kl.toFixed([e.width, e.height]),
    point: kl.toFixed([e.minX, e.minY]),
  };
}
var Te = class extends ode {
  constructor() {
    super(...arguments);
    l(this, "canBind", !1);
    l(this, "canEdit", !1);
    l(this, "canClone", !1);
    l(this, "isAspectRatioLocked", !1);
    l(this, "hideResizeHandles", !1);
    l(this, "bindingDistance", 16);
    l(this, "hitTestPoint", (e, t) =>
      xn.pointInBounds(t, this.getRotatedBounds(e))
    );
    l(this, "hitTestLineSegment", (e, t, n) => {
      let o = xn.getBoundsFromPoints([t, n]),
        s = this.getBounds(e);
      return xn.boundsContain(s, o) || e.rotation
        ? sde(t, n, xn.getRotatedCorners(this.getBounds(e))).didIntersect
        : rde(t, n, this.getBounds(e)).length > 0;
    });
    l(
      this,
      "create",
      (e) => (this.refMap.set(e.id, vl.createRef()), this.getShape(e))
    );
    l(this, "getCenter", (e) => xn.getBoundsCenter(this.getBounds(e)));
    l(this, "getExpandedBounds", (e) =>
      xn.expandBounds(this.getBounds(e), this.bindingDistance)
    );
    l(this, "getBindingPoint", (e, t, n, o, s, a) => {
      let d = this.getBounds(e),
        i = this.getExpandedBounds(e);
      if (!xn.pointInBounds(n, i)) return;
      let c = ide(o, s, i)
        .filter((T) => T.didIntersect)
        .map((T) => T.points[0]);
      if (!c.length) return;
      let u = this.getCenter(e),
        p = c.sort((T, x) => wn.dist(x, o) - wn.dist(T, o))[0],
        m = wn.med(n, p),
        h,
        g;
      a
        ? ((h = wn.dist(n, u) < 16 / 2 ? u : n), (g = 0))
        : (wn.distanceToLineSegment(n, m, u) < 16 / 2 ? (h = u) : (h = m),
          xn.pointInBounds(n, d)
            ? (g = this.bindingDistance)
            : (g = Math.max(
                this.bindingDistance,
                xn
                  .getBoundsSides(d)
                  .map((T) => wn.distanceToLineSegment(T[1][0], T[1][1], n))
                  .sort((T, x) => T - x)[0]
              )));
      let f = wn.divV(wn.sub(h, [i.minX, i.minY]), [i.width, i.height]);
      return { point: wn.clampV(f, 0, 1), distance: g };
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
          m = kt(e.style),
          h = Gn(e.label, m),
          g =
            ro(e.style.size, e.style.font) *
            ((c = e.style.scale) != null ? c : 1),
          f = dn(e.style.font).slice(1, -1),
          T = Vn(u.label, g, f, "middle", h[0], !1),
          x = this.getBounds(e);
        return (
          T.setAttribute(
            "transform",
            `translate(${x.width / 2 - h[0] / 2}, ${x.height / 2 - h[1] / 2})`
          ),
          T.setAttribute("fill", be(e.style, t).stroke),
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
import { Utils as Un } from "@tldraw/core";
import {
  intersectCircleCircle as ade,
  intersectCircleLineSegment as lde,
} from "@tldraw/intersect";
import Ee from "@tldraw/vec";
import Dl from "perfect-freehand";
function Pl(r, e, t, n) {
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
function Wo(r, e) {
  let { start: t, end: n } = r,
    o = Ee.dist(t.point, n.point),
    s = Ee.med(t.point, n.point),
    a = (o / 2) * e,
    d = Ee.uni(Ee.vec(t.point, n.point));
  return Ee.toFixed(Math.abs(a) < 10 ? s : Ee.add(s, Ee.mul(Ee.per(d), a)));
}
function Ml(r, e, t, n, o, s) {
  let a = Un.rng(r),
    d = be(e).strokeWidth,
    i = o ? Ee.nudge(t, n, d) : t,
    c = s ? Ee.nudge(n, t, d) : n,
    u = Dl([i, c], {
      size: d,
      thinning: 0.618 + a() * 0.2,
      easing: oo.easeOutQuad,
      simulatePressure: !0,
      streamline: 0,
      last: !0,
    });
  return Un.getSvgPathFromStroke(u);
}
function Bl(r, e, t, n, o, s, a, d, i, c) {
  let u = Un.rng(r),
    p = be(e).strokeWidth,
    m = o ? Ee.rotWith(t, a, p / i) : t,
    h = s ? Ee.rotWith(n, a, -(p / i)) : n,
    g = Ee.angle(a, m),
    f = Ee.angle(a, h),
    T = [],
    x = 8 + Math.floor((Math.abs(i) / 20) * 1 + u() / 2);
  for (let y = 0; y < x; y++) {
    let R = c(y / x),
      U = Un.lerpAngles(g, f, R);
    T.push(Ee.toFixed(Ee.nudgeAtAngle(a, U, d)));
  }
  let b = Dl([m, ...T, h], {
    size: 1 + p,
    thinning: 0.618 + u() * 0.2,
    easing: oo.easeOutQuad,
    simulatePressure: !1,
    streamline: 0,
    last: !0,
  });
  return Un.getSvgPathFromStroke(b);
}
function kn(r, e, t) {
  return Un.circleFromThreePoints(r, t, e);
}
function Gr(r, e, t, n, o) {
  let s = ade(r, e * 0.618, t, n).points;
  if (!s)
    return (
      v.warn("Could not find an intersection for the arrow head."),
      { left: r, right: r }
    );
  let a = o ? s[0] : s[1],
    d = a ? Ee.nudge(Ee.rotWith(a, r, Math.PI / 6), r, e * -0.382) : r,
    i = a ? Ee.nudge(Ee.rotWith(a, r, -Math.PI / 6), r, e * -0.382) : r;
  return { left: d, right: i };
}
function Vr(r, e, t) {
  let n = lde(r, t, r, e).points;
  if (!n)
    return (
      v.warn("Could not find an intersection for the arrow head."),
      { left: r, right: r }
    );
  let o = n[0],
    s = o ? Ee.rotWith(o, r, Math.PI / 6) : r,
    a = o ? Ee.rotWith(o, r, -Math.PI / 6) : r;
  return { left: s, right: a };
}
function Il(r, e, t, n, o) {
  let { left: s, right: a } = Gr(r, e, t, n, o);
  return `M ${s} L ${r} ${a}`;
}
function Cl(r, e, t) {
  let { left: n, right: o } = Vr(r, e, t);
  return `M ${n} L ${r} ${o}`;
}
function El(r, e, t, n, o, s) {
  let { strokeWidth: a } = be(r, !1),
    d = Ee.dist(e, n),
    i = Math.min(d / 3, a * 8),
    c = [];
  if (Ee.dist(t, Ee.toFixed(Ee.med(e, n))) < 1)
    c.push(`M ${e} L ${n}`), o && c.push(Cl(e, n, i)), s && c.push(Cl(n, e, i));
  else {
    let p = kn(e, t, n),
      m = [p[0], p[1]],
      h = p[2],
      g = so(m, h, e, n);
    c.push(`M ${e} A ${h} ${h} 0 0 ${g > 0 ? "1" : "0"} ${n}`),
      o && c.push(Il(e, i, m, h, g < 0)),
      s && c.push(Il(n, i, m, h, g >= 0));
  }
  return c.join(" ");
}
function Uo(r, e, t) {
  if (Ee.dist2(e, Ee.med(r, t)) <= 4) return [r, t];
  let n = [],
    o = kn(r, e, t),
    s = [o[0], o[1]],
    a = o[2],
    d = Ee.angle(s, r),
    i = Ee.angle(s, t);
  for (let c = 0; c < 20; c++) {
    let u = c / 19,
      p = Un.lerpAngles(d, i, u);
    n.push(Ee.nudgeAtAngle(s, p, a));
  }
  return n;
}
function Rl(r, e, t) {
  if (t === r || t === e) return !0;
  let n = Math.PI * 2,
    o = (e - r + n) % n,
    s = (t - r + n) % n;
  return o <= Math.PI != s > o;
}
function so(r, e, t, n) {
  let o = Un.getSweep(r, t, n);
  return e * (2 * Math.PI) * (o / (2 * Math.PI));
}
import { Utils as Al } from "@tldraw/core";
import dde from "@tldraw/vec";
import * as cn from "react";
import * as $r from "react";
function Io({ left: r, middle: e, right: t, stroke: n, strokeWidth: o }) {
  return $r.createElement(
    "g",
    null,
    $r.createElement("path", {
      className: "tl-stroke-hitarea",
      d: `M ${r} L ${e} ${t}`,
    }),
    $r.createElement("path", {
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
var Ll = cn.memo(function ({
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
  let p = dde.dist(n, s);
  if (p < 2) return null;
  let m = be(t, u),
    { strokeWidth: h } = m,
    g = 1 + h * 1.618,
    f = kn(n, o, s),
    T = [f[0], f[1]],
    x = f[2],
    b = so(T, x, n, s),
    y = Al.rng(e),
    R = oo[y() > 0 ? "easeInOutSine" : "easeInOutCubic"],
    U = c ? Bl(e, t, n, s, d, i, T, x, b, R) : Pl(n, s, f, a),
    { strokeDasharray: L, strokeDashoffset: k } = Al.getPerfectDashProps(
      Math.abs(b),
      g,
      t.dash,
      2,
      !1
    ),
    I = Math.min(p / 3, h * 8),
    q = d ? Gr(n, I, T, x, b < 0) : null,
    de = i ? Gr(s, I, T, x, b >= 0) : null;
  return cn.createElement(
    cn.Fragment,
    null,
    cn.createElement("path", { className: "tl-stroke-hitarea", d: U }),
    cn.createElement("path", {
      d: U,
      fill: c ? m.stroke : "none",
      stroke: m.stroke,
      strokeWidth: c ? 0 : g,
      strokeDasharray: L,
      strokeDashoffset: k,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      pointerEvents: "none",
    }),
    q &&
      cn.createElement(Io, {
        left: q.left,
        middle: n,
        right: q.right,
        stroke: m.stroke,
        strokeWidth: g,
      }),
    de &&
      cn.createElement(Io, {
        left: de.left,
        middle: s,
        right: de.right,
        stroke: m.stroke,
        strokeWidth: g,
      })
  );
});
import { Utils as cde } from "@tldraw/core";
import _s from "@tldraw/vec";
import * as pn from "react";
var Hl = pn.memo(function ({
  id: e,
  style: t,
  start: n,
  end: o,
  decorationStart: s,
  decorationEnd: a,
  isDraw: d,
  isDarkMode: i,
}) {
  let c = _s.dist(n, o);
  if (c < 2) return null;
  let u = be(t, i),
    { strokeWidth: p } = u,
    m = 1 + p * 1.618,
    h = d ? Ml(e, t, n, o, s, a) : "M" + _s.toFixed(n) + "L" + _s.toFixed(o),
    { strokeDasharray: g, strokeDashoffset: f } = cde.getPerfectDashProps(
      c,
      p * 1.618,
      t.dash,
      2,
      !1
    ),
    T = Math.min(c / 3, p * 8),
    x = s ? Vr(n, o, T) : null,
    b = a ? Vr(o, n, T) : null;
  return pn.createElement(
    pn.Fragment,
    null,
    pn.createElement("path", { className: "tl-stroke-hitarea", d: h }),
    pn.createElement("path", {
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
      pn.createElement(Io, {
        left: x.left,
        middle: n,
        right: x.right,
        stroke: u.stroke,
        strokeWidth: m,
      }),
    b &&
      pn.createElement(Io, {
        left: b.left,
        middle: o,
        right: b.right,
        stroke: u.stroke,
        strokeWidth: m,
      })
  );
});
var Ys = class extends Te {
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
            style: S(w(S({}, ct), { isFilled: !1 }), e.style),
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        );
      });
      l(
        this,
        "Component",
        Te.Component(
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
            var le, Ae;
            let {
                id: c,
                label: u = "",
                handles: { start: p, bend: m, end: h },
                decorations: g = {},
                style: f,
              } = e,
              T =
                (Ae =
                  (le = u == null ? void 0 : u.trim()) == null
                    ? void 0
                    : le.length) != null
                  ? Ae
                  : 0 > 0,
              x = ge.dist(m.point, ge.toFixed(ge.med(p.point, h.point))) < 1,
              b = kt(f),
              y = be(f, o.isDarkMode),
              R = T || t ? Gn(u, b) : [0, 0],
              U = this.getBounds(e),
              L = _e.useMemo(() => {
                let { start: Ce, bend: De, end: Ve } = e.handles;
                if (x) return ge.dist(Ce.point, Ve.point);
                let $e = kn(Ce.point, De.point, Ve.point),
                  jt = $e.slice(0, 2),
                  on = $e[2],
                  Lo = so(jt, on, Ce.point, Ve.point);
                return Math.abs(Lo);
              }, [e.handles]),
              k = Math.max(
                0.5,
                Math.min(1, Math.max(L / (R[1] + 128), L / (R[0] + 128)))
              ),
              I = _e.useMemo(() => {
                let Ce = this.getBounds(e);
                return ge.sub(
                  e.handles.bend.point,
                  ge.toFixed([Ce.width / 2, Ce.height / 2])
                );
              }, [e, k]),
              q = _e.useCallback(
                (Ce) => {
                  a == null || a({ id: c, label: Ce });
                },
                [a]
              ),
              de = x ? Hl : Ll;
            return _e.createElement(
              gde,
              S({ ref: i }, s),
              _e.createElement($n, {
                font: b,
                text: u,
                color: y.stroke,
                offsetX: I[0],
                offsetY: I[1],
                scale: k,
                isEditing: t,
                onChange: q,
                onBlur: d,
              }),
              _e.createElement(
                pde,
                { id: e.id + "_svg" },
                _e.createElement(
                  "defs",
                  null,
                  _e.createElement(
                    "mask",
                    { id: e.id + "_clip" },
                    _e.createElement("rect", {
                      x: -100,
                      y: -100,
                      width: U.width + 200,
                      height: U.height + 200,
                      fill: "white",
                    }),
                    _e.createElement("rect", {
                      x: U.width / 2 - (R[0] / 2) * k + I[0],
                      y: U.height / 2 - (R[1] / 2) * k + I[1],
                      width: R[0] * k,
                      height: R[1] * k,
                      rx: 4 * k,
                      ry: 4 * k,
                      fill: "black",
                      opacity: 1,
                    })
                  )
                ),
                _e.createElement(
                  "g",
                  {
                    pointerEvents: "none",
                    opacity: n ? 0.3 : 1,
                    mask: T || t ? `url(#${e.id}_clip)` : "",
                  },
                  _e.createElement(de, {
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
        Te.Indicator(({ shape: e, bounds: t }) => {
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
            u = kt(n),
            p = c ? Gn(s, u) : [0, 0],
            m = ge.dist(d.point, ge.toFixed(ge.med(a.point, i.point))) < 1,
            h = _e.useMemo(() => {
              let { start: b, bend: y, end: R } = e.handles;
              if (m) return ge.dist(b.point, R.point);
              let U = kn(b.point, y.point, R.point),
                L = U.slice(0, 2),
                k = U[2],
                I = so(L, k, b.point, R.point);
              return Math.abs(I);
            }, [e.handles]),
            g = Math.max(
              0.5,
              Math.min(1, Math.max(h / (p[1] + 128), h / (p[0] + 128)))
            ),
            f = _e.useMemo(() => {
              let b = this.getBounds(e);
              return ge.sub(e.handles.bend.point, [b.width / 2, b.height / 2]);
            }, [e, g]);
          return _e.createElement(
            _e.Fragment,
            null,
            c &&
              _e.createElement(fl, {
                id: e.id,
                scale: g,
                offset: f,
                bounds: t,
                labelSize: p,
              }),
            _e.createElement("path", {
              d: El(
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
              _e.createElement("rect", {
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
        let t = Qt.getFromCache(this.boundsCache, e, () => {
          let {
            handles: { start: n, bend: o, end: s },
          } = e;
          return Qt.getBoundsFromPoints(Uo(n.point, o.point, s.point));
        });
        return Qt.translateBounds(t, e.point);
      });
      l(this, "getRotatedBounds", (e) => {
        let {
            handles: { start: t, bend: n, end: o },
          } = e,
          s = Uo(t.point, n.point, o.point),
          { minX: a, minY: d, maxX: i, maxY: c } = Qt.getBoundsFromPoints(s);
        return (
          e.rotation !== 0 &&
            (s = s.map((u) =>
              ge.rotWith(u, [(a + i) / 2, (d + c) / 2], e.rotation || 0)
            )),
          Qt.translateBounds(Qt.getBoundsFromPoints(s), e.point)
        );
      });
      l(this, "getCenter", (e) => {
        let { start: t, end: n } = e.handles;
        return ge.add(e.point, ge.med(t.point, n.point));
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
          a = ge.sub(t, e.point),
          d = Uo(n.point, o.point, s.point);
        for (let i = 1; i < d.length; i++)
          if (ge.distanceToLineSegment(d[i - 1], d[i], a) < 1) return !0;
        return !1;
      });
      l(this, "hitTestLineSegment", (e, t, n) => {
        let {
            handles: { start: o, bend: s, end: a },
          } = e,
          d = ge.sub(t, e.point),
          i = ge.sub(n, e.point),
          c = Uo(o.point, s.point, a.point);
        for (let u = 1; u < c.length; u++)
          if (mde(c[u - 1], c[u], d, i).didIntersect) return !0;
        return !1;
      });
      l(this, "hitTestBounds", (e, t) => {
        let { start: n, end: o, bend: s } = e.handles,
          a = ge.add(e.point, n.point),
          d = ge.add(e.point, o.point);
        if (Qt.pointInBounds(a, t) || Qt.pointInBounds(d, t)) return !0;
        if (ge.isEqual(ge.med(n.point, o.point), s.point))
          return hde(a, d, t).length > 0;
        {
          let [i, c, u] = kn(n.point, s.point, o.point),
            p = ge.add(e.point, [i, c]);
          return ude(p, u, a, d, t).length > 0;
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
            u = Wo(i, c);
          return (
            (i.bend.point = u),
            { point: ge.toFixed([t.minX, t.minY]), handles: i, bend: c }
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
                  point: Wo(e.handles, e.bend),
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
        let n = Qt.deepMerge(e.handles, t),
          o = e.bend;
        if (
          ((n = Qt.deepMerge(n, {
            start: { point: ge.toFixed(n.start.point) },
            end: { point: ge.toFixed(n.end.point) },
          })),
          ge.isEqual(n.start.point, n.end.point))
        )
          return;
        if ("bend" in t) {
          let { start: c, end: u, bend: p } = n,
            m = ge.dist(c.point, u.point),
            h = ge.med(c.point, u.point),
            g = ge.angle(c.point, u.point),
            f = ge.uni(ge.vec(c.point, u.point)),
            T = ge.add(h, ge.mul(ge.per(f), m)),
            x = ge.sub(h, ge.mul(ge.per(f), m)),
            b = ge.nearestPointOnLineSegment(T, x, p.point, !0),
            R = ge.dist(h, b) / (m / 2);
          o = Qt.clamp(R, -0.99, 0.99);
          let U = ge.angle(c.point, b);
          ge.isEqual(h, Wo(n, o))
            ? (o = 0)
            : Rl(g, g + Math.PI, U) && (o *= -1);
        }
        let s = {
            point: e.point,
            bend: o,
            handles: w(S({}, n), {
              bend: w(S({}, n.bend), { point: Wo(n, o) }),
            }),
          },
          a = e.point,
          d = this.getBounds(S({}, s)),
          i = ge.sub([d.minX, d.minY], a);
        return (
          ge.isEqual(i, [0, 0]) ||
            (Object.values(s.handles).forEach((c) => {
              c.point = ge.toFixed(ge.sub(c.point, i));
            }),
            (s.point = ge.toFixed(ge.add(s.point, i)))),
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
            m = kt(e.style),
            h = Gn(e.label, m),
            g =
              ro(e.style.size, e.style.font) *
              ((c = e.style.scale) != null ? c : 1),
            f = dn(e.style.font).slice(1, -1),
            T = Vn(u.label, g, f, "start", h[0], !1),
            x,
            { start: b, bend: y, end: R } = e.handles;
          if (ge.dist(y.point, ge.toFixed(ge.med(b.point, R.point))) < 1)
            x = ge.dist(b.point, R.point);
          else {
            let le = kn(b.point, y.point, R.point),
              Ae = le.slice(0, 2),
              Ce = le[2],
              De = so(Ae, Ce, b.point, R.point);
            x = Math.abs(De);
          }
          let L = Math.max(
              0.5,
              Math.min(1, Math.max(x / (h[1] + 128), x / (h[0] + 128)))
            ),
            k = this.getBounds(e),
            I = ge.sub(e.handles.bend.point, [k.width / 2, k.height / 2]),
            q = k.width / 2 - (h[0] / 2) * L + I[0],
            de = k.height / 2 - (h[1] / 2) * L + I[1];
          return (
            T.setAttribute("transform", `translate(${q}, ${de})`),
            T.setAttribute("fill", be(e.style, t).stroke),
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
  gde = H("div", { width: "100%", height: "100%" });
import { SVGContainer as Js, Utils as bt } from "@tldraw/core";
import {
  intersectBoundsBounds as yde,
  intersectBoundsPolyline as Gl,
  intersectLineSegmentBounds as xde,
  intersectLineSegmentLineSegment as wde,
} from "@tldraw/intersect";
import { Vec as vn } from "@tldraw/vec";
import * as pt from "react";
import { Utils as Zs } from "@tldraw/core";
import fde from "@tldraw/vec";
import {
  getStrokeOutlinePoints as Sde,
  getStrokePoints as zl,
} from "perfect-freehand";
var bde = { easing: (r) => Math.sin((r * Math.PI) / 2), simulatePressure: !0 },
  Tde = { easing: (r) => r * r, simulatePressure: !1 };
function Xs(r) {
  let e = be(r.style);
  return w(
    S(
      {
        size: 1 + e.strokeWidth * 1.5,
        thinning: 0.65,
        streamline: 0.65,
        smoothing: 0.65,
      },
      r.points[1][2] === 0.5 ? bde : Tde
    ),
    { last: r.isComplete }
  );
}
function Ol(r) {
  return r.points.length < 2
    ? ""
    : Zs.getSvgPathFromStroke(zl(r.points, Xs(r)).map((e) => e.point));
}
function Fl(r, e) {
  return zl(r.points, e);
}
function jl(r) {
  if (r.points.length < 2) return "";
  let e = Xs(r),
    t = Fl(r, e);
  return Zs.getSvgPathFromStroke(Sde(t, e));
}
function qs(r) {
  let { points: e } = r;
  if (e.length < 2) return "M 0 0 L 0 0";
  let t = Xs(r),
    n = Fl(r, t),
    o = e[e.length - 1];
  return (
    fde.isEqual(n[0].point, o) || n.push({ point: o }),
    Zs.getSvgPathFromStrokePoints(n)
  );
}
var Qs = class extends Te {
  constructor() {
    super(...arguments);
    l(this, "type", "draw");
    l(this, "pointsBoundsCache", new WeakMap([]));
    l(this, "shapeBoundsCache", new Map());
    l(this, "rotatedCache", new WeakMap([]));
    l(this, "pointCache", {});
    l(this, "canClone", !0);
    l(this, "getShape", (e) =>
      bt.deepMerge(
        {
          id: "id",
          type: "draw",
          name: "Draw",
          parentId: "page",
          childIndex: 1,
          point: [0, 0],
          rotation: 0,
          style: ct,
          points: [],
          isComplete: !1,
        },
        e
      )
    );
    l(
      this,
      "Component",
      Te.Component(
        ({ shape: e, meta: t, isSelected: n, isGhost: o, events: s }, a) => {
          let { points: d, style: i, isComplete: c } = e,
            u = pt.useMemo(() => Ol(e), [d, i.size]),
            p = pt.useMemo(
              () => (i.dash === "draw" ? jl(e) : qs(e)),
              [d, i.size, i.dash, c]
            ),
            m = be(i, t.isDarkMode),
            { stroke: h, fill: g, strokeWidth: f } = m,
            T = this.getBounds(e);
          if (T.width <= f / 2 && T.height <= f / 2) {
            let L = 1 + f;
            return pt.createElement(
              Js,
              S({ ref: a, id: e.id + "_svg" }, s),
              pt.createElement("circle", {
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
            vn.dist(d[0], d[d.length - 1]) < f * 2;
          if (e.style.dash === "draw")
            return pt.createElement(
              Js,
              S({ ref: a, id: e.id + "_svg" }, s),
              pt.createElement(
                "g",
                { opacity: o ? 0.3 : 1 },
                pt.createElement("path", {
                  className: b || n ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                  d: p,
                }),
                b &&
                  pt.createElement("path", {
                    d: u,
                    stroke: "none",
                    fill: g,
                    strokeLinejoin: "round",
                    strokeLinecap: "round",
                    pointerEvents: "none",
                  }),
                pt.createElement("path", {
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
            U = 1 + f * 1.5;
          return pt.createElement(
            Js,
            S({ ref: a, id: e.id + "_svg" }, s),
            pt.createElement(
              "g",
              { opacity: o ? 0.3 : 1 },
              pt.createElement("path", {
                className: b && n ? "tl-fill-hitarea" : "tl-stroke-hitarea",
                d: p,
              }),
              pt.createElement("path", {
                d: p,
                fill: b ? g : "none",
                stroke: "none",
                strokeWidth: Math.min(4, f * 2),
                strokeLinejoin: "round",
                strokeLinecap: "round",
                pointerEvents: "none",
              }),
              pt.createElement("path", {
                d: p,
                fill: "none",
                stroke: h,
                strokeWidth: U,
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
      Te.Indicator(({ shape: e }) => {
        let { points: t } = e,
          n = pt.useMemo(() => qs(e), [t]),
          o = this.getBounds(e);
        return o.width < 4 && o.height < 4
          ? pt.createElement("circle", {
              x: o.width / 2,
              y: o.height / 2,
              r: 1,
            })
          : pt.createElement("path", { d: n });
      })
    );
    l(this, "transform", (e, t, { initialShape: n, scaleX: o, scaleY: s }) => {
      let a = bt.getFromCache(this.boundsCache, n, () =>
          bt.getBoundsFromPoints(n.points)
        ),
        d = n.points.map(([u, p, m]) => [
          t.width * (o < 0 ? 1 - u / a.width : u / a.width),
          t.height * (s < 0 ? 1 - p / a.height : p / a.height),
          m,
        ]),
        i = bt.getBoundsFromPoints(e.points),
        c = vn.sub([t.minX, t.minY], [i.minX, i.minY]);
      return { points: d, point: c };
    });
    l(this, "getBounds", (e) => {
      let t = !this.pointsBoundsCache.has(e.points),
        n = this.pointCache[e.id] !== e.point;
      if (t) {
        let o = bt.getBoundsFromPoints(e.points);
        this.pointsBoundsCache.set(e.points, o),
          this.shapeBoundsCache.set(e.id, bt.translateBounds(o, e.point)),
          (this.pointCache[e.id] = e.point);
      } else
        n &&
          !t &&
          ((this.pointCache[e.id] = e.point),
          this.shapeBoundsCache.set(
            e.id,
            bt.translateBounds(this.pointsBoundsCache.get(e.points), e.point)
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
      let n = vn.sub(t, e.point);
      return bt.pointInPolyline(n, e.points);
    });
    l(this, "hitTestLineSegment", (e, t, n) => {
      let { points: o, point: s } = e,
        a = vn.sub(t, s),
        d = vn.sub(n, s),
        i = this.getBounds(e);
      if (i.width < 8 && i.height < 8)
        return vn.distanceToLineSegment(t, n, bt.getBoundsCenter(i)) < 5;
      if (xde(a, d, i)) {
        for (let c = 1; c < o.length; c++)
          if (wde(o[c - 1], o[c], a, d).didIntersect) return !0;
      }
      return !1;
    });
    l(this, "hitTestBounds", (e, t) => {
      if (!e.rotation) {
        let s = this.getBounds(e);
        return (
          bt.boundsContain(t, s) ||
          ((bt.boundsContain(s, t) || yde(s, t).length > 0) &&
            Gl(bt.translateBounds(t, vn.neg(e.point)), e.points).length > 0)
        );
      }
      let n = this.getRotatedBounds(e),
        o = bt.getFromCache(this.rotatedCache, e, () => {
          let s = bt.getBoundsCenter(bt.getBoundsFromPoints(e.points));
          return e.points.map((a) => vn.rotWith(a, s, e.rotation || 0));
        });
      return (
        bt.boundsContain(t, n) ||
        Gl(bt.translateBounds(t, vn.neg(e.point)), o).length > 0
      );
    });
  }
};
import { SVGContainer as Ide, Utils as Cn } from "@tldraw/core";
import {
  intersectEllipseBounds as Cde,
  intersectLineSegmentEllipse as ei,
  intersectRayEllipse as Dde,
} from "@tldraw/intersect";
import { Vec as vt } from "@tldraw/vec";
import * as un from "react";
import { Utils as Vl } from "@tldraw/core";
import * as Kn from "react";
var $l = Kn.memo(function ({
  radius: e,
  style: t,
  isSelected: n,
  isDarkMode: o,
}) {
  let { stroke: s, strokeWidth: a, fill: d } = be(t, o),
    i = 1 + a * 1.618,
    c = Math.max(0, e[0] - i / 2),
    u = Math.max(0, e[1] - i / 2),
    p = Vl.perimeterOfEllipse(c, u),
    { strokeDasharray: m, strokeDashoffset: h } = Vl.getPerfectDashProps(
      p < 64 ? p * 2 : p,
      a * 1.618,
      t.dash,
      4
    );
  return Kn.createElement(
    Kn.Fragment,
    null,
    Kn.createElement("ellipse", {
      className: t.isFilled || n ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      cx: e[0],
      cy: e[1],
      rx: e[0],
      ry: e[1],
    }),
    Kn.createElement("ellipse", {
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
import * as In from "react";
import { Utils as Co } from "@tldraw/core";
import {
  getStrokeOutlinePoints as kde,
  getStrokePoints as vde,
} from "perfect-freehand";
function Nl(r, e, t) {
  let { strokeWidth: n } = be(t),
    o = Co.rng(r),
    s = e[0] + o() * n * 2,
    a = e[1] + o() * n * 2,
    d = Co.perimeterOfEllipse(s, a),
    i = [],
    c = Math.PI + Math.PI * o(),
    u = Math.abs(o()),
    p = Math.max(16, d / 10);
  for (let m = 0; m < p; m++) {
    let h = oo.easeInOutSine(m / (p + 1)),
      g = c * 2 + Math.PI * (2 + u) * h,
      f = Math.cos(g),
      T = Math.sin(g);
    i.push([s * f + e[0], a * T + e[1], h + 0.5 + o() / 2]);
  }
  return vde(i, {
    size: 1 + n * 2,
    thinning: 0.618,
    end: { taper: d / 8 },
    start: { taper: d / 12 },
    streamline: 0,
    simulatePressure: !0,
  });
}
function Wl(r, e, t) {
  let { strokeWidth: n } = be(t),
    o = Co.rng(r),
    s = e[0] + o() * n * 2,
    a = e[1] + o() * n * 2,
    d = Co.perimeterOfEllipse(s, a);
  return Co.getSvgPathFromStroke(
    kde(Nl(r, e, t), {
      size: 2 + n * 2,
      thinning: 0.618,
      end: { taper: d / 8 },
      start: { taper: d / 12 },
      streamline: 0,
      simulatePressure: !0,
    })
  );
}
function Nr(r, e, t) {
  return Co.getSvgPathFromStrokePoints(Nl(r, e, t));
}
var Ul = In.memo(function ({
  id: e,
  radius: t,
  style: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = be(n, s),
    c = Wl(e, t, n);
  return In.createElement(
    In.Fragment,
    null,
    In.createElement("ellipse", {
      className: n.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      cx: t[0],
      cy: t[1],
      rx: t[0],
      ry: t[1],
    }),
    n.isFilled &&
      In.createElement("path", {
        d: Nr(e, t, n),
        stroke: "none",
        fill: i,
        pointerEvents: "none",
      }),
    In.createElement("path", {
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
var ti = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "ellipse");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "canEdit", !0);
      l(this, "getShape", (e) =>
        Cn.deepMerge(
          {
            id: "id",
            type: "ellipse",
            name: "Ellipse",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            radius: [1, 1],
            rotation: 0,
            style: ct,
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        )
      );
      l(
        this,
        "Component",
        Te.Component(
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
                labelPoint: T = yo,
              } = e,
              x = kt(e.style),
              b = be(g, a.isDarkMode),
              y = b.strokeWidth,
              R = 1 + y * 1.618,
              U = Math.max(0, h[0] - R / 2),
              L = Math.max(0, h[1] - R / 2),
              k = g.dash === "draw" ? Ul : $l,
              I = un.useCallback(
                (q) => (c == null ? void 0 : c({ id: m, label: q })),
                [c]
              );
            return un.createElement(
              Pde,
              S({ ref: p }, i),
              un.createElement($n, {
                isEditing: s,
                onChange: I,
                onBlur: u,
                font: x,
                text: f,
                color: b.stroke,
                offsetX: (T[0] - 0.5) * d.width,
                offsetY: (T[1] - 0.5) * d.height,
              }),
              un.createElement(
                Ide,
                { id: e.id + "_svg", opacity: t ? 0.3 : 1 },
                o &&
                  un.createElement("ellipse", {
                    className: "tl-binding-indicator",
                    cx: h[0],
                    cy: h[1],
                    rx: U,
                    ry: L,
                    strokeWidth: this.bindingDistance,
                  }),
                un.createElement(k, {
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
        Te.Indicator(({ shape: e }) => {
          let { id: t, radius: n, style: o } = e,
            a = be(o).strokeWidth,
            d = 1 + a * 1.618,
            i = Math.max(0, n[0] - d / 2),
            c = Math.max(0, n[1] - d / 2);
          return o.dash === "draw"
            ? un.createElement("path", { d: Nr(t, n, o) })
            : un.createElement("ellipse", { cx: n[0], cy: n[1], rx: i, ry: c });
        })
      );
      l(
        this,
        "hitTestPoint",
        (e, t) =>
          Cn.pointInBounds(t, this.getRotatedBounds(e)) &&
          Cn.pointInEllipse(
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
          ei(t, n, this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0)
            .didIntersect
      );
      l(this, "getBounds", (e) =>
        Cn.getFromCache(this.boundsCache, e, () =>
          Cn.getRotatedEllipseBounds(
            e.point[0],
            e.point[1],
            e.radius[0],
            e.radius[1],
            0
          )
        )
      );
      l(this, "getRotatedBounds", (e) =>
        Cn.getRotatedEllipseBounds(
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
          Cn.boundsContained(n, t) ||
          Cde(this.getCenter(e), e.radius[0], e.radius[1], e.rotation || 0, t)
            .length > 0
        );
      });
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.radius !== e.radius || t.style !== e.style || t.label !== e.label
      );
      l(this, "getCenter", (e) => vt.add(e.point, e.radius));
      l(this, "getBindingPoint", (e, t, n, o, s, a) => {
        {
          let d = this.getExpandedBounds(e),
            i = this.getCenter(e),
            c,
            u;
          if (
            !Cn.pointInEllipse(
              n,
              i,
              e.radius[0] + this.bindingDistance,
              e.radius[1] + this.bindingDistance
            )
          )
            return;
          if (a)
            vt.dist(n, this.getCenter(e)) < 12
              ? (c = [0.5, 0.5])
              : (c = vt.divV(vt.sub(n, [d.minX, d.minY]), [d.width, d.height])),
              (u = 0);
          else {
            let p = Dde(
              o,
              s,
              i,
              e.radius[0],
              e.radius[1],
              e.rotation || 0
            ).points.sort((h, g) => vt.dist(h, o) - vt.dist(g, o))[0];
            if (
              (p ||
                (p = ei(
                  n,
                  i,
                  i,
                  e.radius[0],
                  e.radius[1],
                  e.rotation || 0
                ).points.sort((h, g) => vt.dist(h, n) - vt.dist(g, n))[0]),
              !p)
            )
              return;
            let m = vt.med(n, p);
            if (
              (vt.distanceToLineSegment(n, m, this.getCenter(e)) < 12
                ? (c = [0.5, 0.5])
                : (c = vt.divV(vt.sub(m, [d.minX, d.minY]), [
                    d.width,
                    d.height,
                  ])),
              Cn.pointInEllipse(
                n,
                i,
                e.radius[0],
                e.radius[1],
                e.rotation || 0
              ))
            )
              u = this.bindingDistance / 2;
            else {
              let h = ei(n, i, i, e.radius[0], e.radius[1], e.rotation || 0)
                .points[0];
              if (!h) return;
              u = Math.max(this.bindingDistance / 2, vt.dist(n, h));
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
        point: vt.toFixed([t.minX, t.minY]),
        radius: vt.div([t.width, t.height], 2),
      }));
    }
  },
  Pde = H("div", { width: "100%", height: "100%" });
import { SVGContainer as Mde, Utils as Bde } from "@tldraw/core";
import * as Dn from "react";
var ni = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "group");
      l(this, "canBind", !0);
      l(this, "getShape", (e) =>
        Bde.deepMerge(
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
            style: ct,
          },
          e
        )
      );
      l(
        this,
        "Component",
        Te.Component(
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
                Dn.createElement("line", {
                  key: i + "_" + x,
                  x1: f[0],
                  y1: f[1],
                  x2: T[0],
                  y2: T[1],
                })
              );
            return Dn.createElement(
              Mde,
              S({ ref: d }, a),
              t &&
                Dn.createElement("rect", {
                  className: "tl-binding-indicator",
                  strokeWidth: this.bindingDistance,
                }),
              Dn.createElement(
                "g",
                { opacity: n ? 0.3 : 1 },
                Dn.createElement("rect", {
                  x: 0,
                  y: 0,
                  width: c[0],
                  height: c[1],
                  fill: "transparent",
                  pointerEvents: "all",
                }),
                Dn.createElement(
                  Kl,
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
        Te.Indicator(({ shape: e }) => {
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
              Dn.createElement("line", {
                key: t + "_" + p,
                x1: c[0],
                y1: c[1],
                x2: u[0],
                y2: u[1],
              })
            );
          return Dn.createElement(
            Kl,
            { strokeLinecap: "round", pointerEvents: "stroke" },
            i
          );
        })
      );
      l(this, "getBounds", (e) => $t(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) => t.size !== e.size || t.style !== e.style
      );
    }
  },
  Kl = H("g", {
    strokeWidth: "calc(1.5px * var(--tl-scale))",
    strokeDasharray: "calc(1px * var(--tl-scale)), calc(3px * var(--tl-scale))",
  });
import { styled as _l } from "@stitches/react";
import { HTMLContainer as Ede, Utils as Rde } from "@tldraw/core";
import * as en from "react";
var oi = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "image");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "isAspectRatioLocked", !0);
      l(this, "showCloneHandles", !1);
      l(this, "getShape", (e) =>
        Rde.deepMerge(
          {
            id: "image",
            type: "image",
            name: "Image",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: w(S({}, ct), { isFilled: !0 }),
            assetId: "assetId",
          },
          e
        )
      );
      l(
        this,
        "Component",
        Te.Component(
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
              m = en.useRef(null),
              h = en.useRef(null);
            return (
              en.useLayoutEffect(() => {
                let g = h.current;
                if (!g) return;
                let [f, T] = c;
                (g.style.width = `${f}px`), (g.style.height = `${T}px`);
              }, [c]),
              en.createElement(
                Ede,
                S({ ref: i }, a),
                n &&
                  en.createElement("div", {
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
                en.createElement(
                  Ade,
                  {
                    ref: h,
                    isDarkMode: s.isDarkMode,
                    isFilled: u.isFilled,
                    isGhost: o,
                  },
                  en.createElement(Lde, {
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
        Te.Indicator(({ shape: e }) => {
          let {
            size: [t, n],
          } = e;
          return en.createElement("rect", {
            x: 0,
            y: 0,
            rx: 2,
            ry: 2,
            width: Math.max(1, t),
            height: Math.max(1, n),
          });
        })
      );
      l(this, "getBounds", (e) => $t(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) => t.size !== e.size || t.style !== e.style
      );
      l(this, "transform", Nn);
      l(this, "transformSingle", Wn);
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
  Ade = _l("div", {
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
  Lde = _l("img", {
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
import { SVGContainer as jde, Utils as Gde } from "@tldraw/core";
import * as mn from "react";
import * as Yl from "react";
function Zl({ strokeWidth: r, size: e }) {
  return Yl.createElement("rect", {
    className: "tl-binding-indicator",
    x: r,
    y: r,
    width: Math.max(0, e[0] - r / 2),
    height: Math.max(0, e[1] - r / 2),
    strokeWidth: 16 * 2,
  });
}
import { Utils as Hde } from "@tldraw/core";
import * as hn from "react";
var Xl = hn.memo(function ({
  id: e,
  style: t,
  size: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = be(t, s),
    c = 1 + d * 1.618,
    u = Math.max(0, n[0] - c / 2),
    p = Math.max(0, n[1] - c / 2),
    h = [
      [[c / 2, c / 2], [u, c / 2], u - c / 2],
      [[u, c / 2], [u, p], p - c / 2],
      [[u, p], [c / 2, p], u - c / 2],
      [[c / 2, p], [c / 2, c / 2], p - c / 2],
    ].map(([g, f, T], x) => {
      let { strokeDasharray: b, strokeDashoffset: y } = Hde.getPerfectDashProps(
        T,
        d * 1.618,
        t.dash
      );
      return hn.createElement("line", {
        key: e + "_" + x,
        x1: g[0],
        y1: g[1],
        x2: f[0],
        y2: f[1],
        strokeDasharray: b,
        strokeDashoffset: y,
      });
    });
  return hn.createElement(
    hn.Fragment,
    null,
    hn.createElement("rect", {
      className: o || t.isFilled ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      x: c / 2,
      y: c / 2,
      width: u,
      height: p,
      strokeWidth: 16,
    }),
    t.isFilled &&
      hn.createElement("rect", {
        x: c / 2,
        y: c / 2,
        width: u,
        height: p,
        fill: i,
        pointerEvents: "none",
      }),
    hn.createElement(
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
import * as Pn from "react";
import { Utils as Wr } from "@tldraw/core";
import yt from "@tldraw/vec";
import zde, { getStrokePoints as Ode } from "perfect-freehand";
function Fde(r, e, t) {
  let n = be(e),
    o = Wr.rng(r),
    s = n.strokeWidth,
    a = Math.max(0, t[0]),
    d = Math.max(0, t[1]),
    i = Array.from(Array(4)).map(() => [o() * s * 0.75, o() * s * 0.75]),
    c = yt.add([s / 2, s / 2], i[0]),
    u = yt.add([a - s / 2, s / 2], i[1]),
    p = yt.add([a - s / 2, d - s / 2], i[2]),
    m = yt.add([s / 2, d - s / 2], i[3]),
    h = Math.round(Math.abs(o() * 2 * 4)),
    g = Math.min(a / 4, s * 2),
    f = Math.min(d / 4, s * 2),
    T = Math.max(8, Math.floor(a / 16)),
    x = Math.max(8, Math.floor(d / 16)),
    b = Wr.rotateArray(
      [
        yt.pointsBetween(yt.add(c, [g, 0]), yt.sub(u, [g, 0]), T),
        yt.pointsBetween(yt.add(u, [0, f]), yt.sub(p, [0, f]), x),
        yt.pointsBetween(yt.sub(p, [g, 0]), yt.add(m, [g, 0]), T),
        yt.pointsBetween(yt.sub(m, [0, f]), yt.add(c, [0, f]), x),
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
function ql(r, e, t) {
  let { points: n } = Fde(r, e, t),
    { strokeWidth: o } = be(e);
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
function Jl(r, e, t) {
  let { points: n, options: o } = ql(r, e, t),
    s = zde(n, o);
  return Wr.getSvgPathFromStroke(s);
}
function Ur(r, e, t) {
  let { points: n, options: o } = ql(r, e, t);
  return Wr.getSvgPathFromStrokePoints(Ode(n, o));
}
var Ql = Pn.memo(function ({
  id: e,
  style: t,
  size: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { isFilled: a } = t,
    { stroke: d, strokeWidth: i, fill: c } = be(t, s),
    u = Jl(e, t, n),
    p = Ur(e, t, n);
  return Pn.createElement(
    Pn.Fragment,
    null,
    Pn.createElement("path", {
      className: t.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      d: p,
    }),
    a && Pn.createElement("path", { d: p, fill: c, pointerEvents: "none" }),
    Pn.createElement("path", {
      d: u,
      fill: d,
      stroke: d,
      strokeWidth: i,
      pointerEvents: "none",
    })
  );
});
var ri = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "rectangle");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "canEdit", !0);
      l(this, "getShape", (e) =>
        Gde.deepMerge(
          {
            id: "id",
            type: "rectangle",
            name: "Rectangle",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: ct,
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        )
      );
      l(
        this,
        "Component",
        Te.Component(
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
                labelPoint: T = yo,
              } = e,
              x = kt(g),
              b = be(g, a.isDarkMode),
              y = g.dash === "draw" ? Ql : Xl,
              R = mn.useCallback(
                (U) => (u == null ? void 0 : u({ id: m, label: U })),
                [u]
              );
            return mn.createElement(
              Vde,
              S({ ref: p }, i),
              mn.createElement($n, {
                isEditing: t,
                onChange: R,
                onBlur: c,
                font: x,
                text: f,
                color: b.stroke,
                offsetX: (T[0] - 0.5) * d.width,
                offsetY: (T[1] - 0.5) * d.height,
              }),
              mn.createElement(
                jde,
                { id: e.id + "_svg", opacity: s ? 0.3 : 1 },
                n &&
                  mn.createElement(Zl, { strokeWidth: b.strokeWidth, size: h }),
                mn.createElement(y, {
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
        Te.Indicator(({ shape: e }) => {
          let { id: t, style: n, size: o } = e,
            a = be(n, !1).strokeWidth;
          return n.dash === "draw"
            ? mn.createElement("path", { d: Ur(t, n, o) })
            : mn.createElement("rect", {
                x: a,
                y: a,
                rx: 1,
                ry: 1,
                width: Math.max(1, o[0] - a * 2),
                height: Math.max(1, o[1] - a * 2),
              });
        })
      );
      l(this, "getBounds", (e) => $t(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.size !== e.size || t.style !== e.style || t.label !== e.label
      );
      l(this, "transform", Nn);
      l(this, "transformSingle", Wn);
    }
  },
  Vde = H("div", { width: "100%", height: "100%" });
import { HTMLContainer as $de, Utils as Nde } from "@tldraw/core";
import { Vec as Wde } from "@tldraw/vec";
import * as Xe from "react";
var ii = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "sticky");
      l(this, "canBind", !0);
      l(this, "canEdit", !0);
      l(this, "canClone", !0);
      l(this, "hideResizeHandles", !0);
      l(this, "showCloneHandles", !0);
      l(this, "getShape", (e) =>
        Nde.deepMerge(
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
            style: vo,
          },
          e
        )
      );
      l(
        this,
        "Component",
        Te.Component(
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
            let u = yl(e.style),
              { color: p, fill: m } = Ks(e.style, t.isDarkMode),
              h = Xe.useRef(null),
              g = Xe.useRef(null),
              f = Xe.useRef(null),
              T = Xe.useRef(!1),
              x = Xe.useCallback((I) => {
                I.stopPropagation();
              }, []),
              b = Xe.useCallback(
                (I) => {
                  i == null ||
                    i({ id: e.id, type: e.type, text: v.normalizeText(I) });
                },
                [e.id]
              ),
              y = Xe.useCallback(
                (I) => {
                  b(I.currentTarget.value);
                },
                [i, b]
              ),
              R = Xe.useCallback(
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
                        ? st.unindent(I.currentTarget)
                        : st.indent(I.currentTarget),
                      i == null ||
                        i(
                          w(S({}, e), {
                            text: v.normalizeText(I.currentTarget.value),
                          })
                        ));
                },
                [e, i]
              ),
              U = Xe.useCallback((I) => {
                I.currentTarget.setSelectionRange(0, 0), d == null || d();
              }, []),
              L = Xe.useCallback(
                (I) => {
                  !a || !T.current || I.currentTarget.select();
                },
                [a]
              );
            Xe.useEffect(() => {
              if (a) {
                T.current = !0;
                let I = g.current;
                I.focus(), I.select();
              }
            }, [a]),
              Xe.useEffect(() => {
                let I = f.current,
                  { size: q } = e,
                  { offsetHeight: de } = I,
                  le = si - gn * 2,
                  Ae = q[1] - gn * 2;
                if (de === Ae) return;
                if (de > le) {
                  i == null || i({ id: e.id, size: [q[0], de + gn * 2] });
                  return;
                }
                if (de < le && q[1] > si) {
                  i == null || i({ id: e.id, size: [q[0], si] });
                  return;
                }
                let Ce = g.current;
                Ce == null || Ce.focus();
              }, [e.text, e.size[1], e.style]);
            let k = {
              font: u,
              color: p,
              textShadow: t.isDarkMode
                ? "0.5px 0.5px 2px rgba(255, 255, 255,.25)"
                : "0.5px 0.5px 2px rgba(255, 255, 255,.5)",
            };
            return Xe.createElement(
              $de,
              S({ ref: c }, n),
              Xe.createElement(
                Ude,
                {
                  ref: h,
                  isDarkMode: t.isDarkMode,
                  isGhost: o,
                  style: S({ backgroundColor: m }, k),
                },
                s &&
                  Xe.createElement("div", {
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
                Xe.createElement(
                  Kde,
                  { ref: f, isEditing: a, alignment: e.style.textAlign },
                  e.text,
                  "\u200B"
                ),
                a &&
                  Xe.createElement(_de, {
                    ref: g,
                    onPointerDown: x,
                    value: e.text,
                    onChange: y,
                    onKeyDown: R,
                    onFocus: L,
                    onBlur: U,
                    tabIndex: -1,
                    autoComplete: "false",
                    autoCapitalize: "false",
                    autoCorrect: "false",
                    autoSave: "false",
                    autoFocus: !0,
                    spellCheck: !0,
                    alignment: e.style.textAlign,
                    onContextMenu: ft,
                    onCopy: ft,
                    onPaste: ft,
                    onCut: ft,
                  })
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        Te.Indicator(({ shape: e }) => {
          let {
            size: [t, n],
          } = e;
          return Xe.createElement("rect", {
            x: 0,
            y: 0,
            rx: 3,
            ry: 3,
            width: Math.max(1, t),
            height: Math.max(1, n),
          });
        })
      );
      l(this, "getBounds", (e) => $t(e, this.boundsCache));
      l(
        this,
        "shouldRender",
        (e, t) => t.size !== e.size || t.style !== e.style || t.text !== e.text
      );
      l(
        this,
        "transform",
        (e, t, { scaleX: n, scaleY: o, transformOrigin: s }) => ({
          point: Wde.toFixed([
            t.minX + (t.width - e.size[0]) * (n < 0 ? 1 - s[0] : s[0]),
            t.minY + (t.height - e.size[1]) * (o < 0 ? 1 - s[1] : s[1]),
          ]),
        })
      );
      l(this, "transformSingle", (e) => e);
      l(this, "getSvgElement", (e, t) => {
        var p, m;
        let n = this.getBounds(e),
          o = Ks(e.style, t),
          s = Us(e.style.size) * ((p = e.style.scale) != null ? p : 1),
          a = dn(e.style.font).slice(1, -1),
          d = (m = e.style.textAlign) != null ? m : "start",
          i = Vn(e.text, s, a, d, n.width - gn * 2, !0);
        i.setAttribute("fill", o.color),
          i.setAttribute("transform", `translate(${gn}, ${gn})`);
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
  gn = 16,
  si = 200,
  Ude = H("div", {
    pointerEvents: "all",
    position: "relative",
    backgroundColor: "rgba(255, 220, 100)",
    fontFamily: "sans-serif",
    height: "100%",
    width: "100%",
    padding: gn + "px",
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
  ed = {
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word",
    letterSpacing: Vt,
  },
  Kde = H(
    "div",
    S(
      {
        position: "absolute",
        top: gn,
        left: gn,
        width: `calc(100% - ${gn * 2}px)`,
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
      ed
    )
  ),
  _de = H(
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
        ed
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
import { HTMLContainer as Yde, Utils as ai } from "@tldraw/core";
import { Vec as _n } from "@tldraw/vec";
import * as qe from "react";
var li = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "text");
      l(this, "isAspectRatioLocked", !0);
      l(this, "canEdit", !0);
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "bindingDistance", 16 / 2);
      l(this, "getShape", (e) =>
        ai.deepMerge(
          {
            id: "id",
            type: "text",
            name: "Text",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            rotation: 0,
            text: " ",
            style: vo,
          },
          e
        )
      );
      l(this, "texts", new Map());
      l(
        this,
        "Component",
        Te.Component(
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
              m = be(p, d.isDarkMode),
              h = kt(e.style),
              g = qe.useRef(null),
              f = qe.useRef(!1),
              T = qe.useRef(u);
            qe.useLayoutEffect(() => {
              if (u !== T.current) {
                let k = [0, 0];
                this.texts.set(e.id, u);
                let I = this.getBounds(e),
                  q = this.getBounds(e);
                switch (e.style.textAlign) {
                  case "start":
                    break;
                  case "middle": {
                    k = _n.div([q.width - I.width, 0], 2);
                    break;
                  }
                  case "end": {
                    k = [q.width - I.width, 0];
                    break;
                  }
                }
                (T.current = u),
                  a == null ||
                    a(
                      w(S({}, e), {
                        id: e.id,
                        point: _n.sub(e.point, k),
                        text: u,
                      })
                    );
              }
            }, [u]);
            let x = qe.useCallback(
                (k) => {
                  let I = [0, 0],
                    q = v.normalizeText(k.currentTarget.value),
                    de = this.getBounds(e);
                  this.texts.set(e.id, q);
                  let le = this.getBounds(w(S({}, e), { text: q }));
                  switch (e.style.textAlign) {
                    case "start":
                      break;
                    case "middle": {
                      I = _n.div([le.width - de.width, 0], 2);
                      break;
                    }
                    case "end": {
                      I = [le.width - de.width, 0];
                      break;
                    }
                  }
                  (T.current = q),
                    a == null ||
                      a(
                        w(S({}, e), {
                          id: e.id,
                          point: _n.sub(e.point, I),
                          text: q,
                        })
                      );
                },
                [e.id, e.point]
              ),
              b = qe.useCallback(
                (k) => {
                  if (k.key === "Escape") {
                    k.preventDefault(), k.stopPropagation(), s == null || s();
                    return;
                  }
                  if (k.key === "Tab" && e.text.length === 0) {
                    k.preventDefault();
                    return;
                  }
                  if (k.key === "Enter" && (k.metaKey || k.ctrlKey)) {
                    k.preventDefault(), k.stopPropagation(), g.current.blur();
                    return;
                  }
                  if (!(k.key === "Meta" || k.metaKey)) k.stopPropagation();
                  else if (k.key === "z" && k.metaKey) {
                    k.shiftKey
                      ? document.execCommand("redo", !1)
                      : document.execCommand("undo", !1),
                      k.stopPropagation(),
                      k.preventDefault();
                    return;
                  }
                  (k.metaKey || k.ctrlKey) &&
                    k.key === "=" &&
                    k.preventDefault(),
                    k.key === "Tab" &&
                      (k.preventDefault(),
                      k.shiftKey
                        ? st.unindent(k.currentTarget)
                        : st.indent(k.currentTarget),
                      a == null ||
                        a(
                          w(S({}, e), {
                            text: v.normalizeText(k.currentTarget.value),
                          })
                        ));
                },
                [e, a]
              ),
              y = qe.useCallback((k) => {
                k.currentTarget.setSelectionRange(0, 0), s == null || s();
              }, []),
              R = qe.useCallback(
                (k) => {
                  !o ||
                    !f.current ||
                    (document.activeElement === k.currentTarget &&
                      k.currentTarget.select());
                },
                [o]
              ),
              U = qe.useCallback(
                (k) => {
                  o && k.stopPropagation();
                },
                [o]
              ),
              L = qe.useRef(o);
            return (
              qe.useEffect(() => {
                o
                  ? ((L.current = !0),
                    this.texts.set(e.id, u),
                    requestAnimationFrame(() => {
                      f.current = !0;
                      let k = g.current;
                      k && (k.focus(), k.select());
                    }))
                  : L.current && ((L.current = !1), s == null || s());
              }, [o]),
              qe.createElement(
                Yde,
                S({ ref: c }, i),
                qe.createElement(
                  Xde,
                  { isGhost: n, isEditing: o, onPointerDown: U },
                  qe.createElement(
                    qde,
                    {
                      style: {
                        font: h,
                        color: m.stroke,
                        textAlign: hl(p.textAlign),
                      },
                    },
                    t &&
                      qe.createElement("div", {
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
                      ? qe.createElement(Jde, {
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
                          onPointerDown: U,
                          onContextMenu: ft,
                          onCopy: ft,
                          onPaste: ft,
                          onCut: ft,
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
        Te.Indicator(({ shape: e }) => {
          let { width: t, height: n } = this.getBounds(e);
          return qe.createElement("rect", { x: 0, y: 0, width: t, height: n });
        })
      );
      l(this, "getBounds", (e) => {
        let t = ai.getFromCache(this.boundsCache, e, () => {
          var s;
          if (!Yn)
            return {
              minX: 0,
              minY: 0,
              maxX: 10,
              maxY: 10,
              width: 10,
              height: 10,
            };
          Yn.parentNode || document.body.appendChild(Yn),
            (Yn.style.font = kt(e.style)),
            (Yn.textContent = (s = this.texts.get(e.id)) != null ? s : e.text);
          let n = Yn.offsetWidth || 1,
            o = Yn.offsetHeight || 1;
          return { minX: 0, maxX: n, minY: 0, maxY: o, width: n, height: o };
        });
        return ai.translateBounds(t, e.point);
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
            point: _n.toFixed([t.minX, t.minY]),
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
          point: _n.toFixed(_n.add(e.point, _n.sub(t, n))),
        };
      });
      l(this, "getSvgElement", (e, t) => {
        var c, u;
        let n = this.getBounds(e),
          o = be(e.style, t),
          s =
            ro(e.style.size, e.style.font) *
            ((c = e.style.scale) != null ? c : 1),
          a = dn(e.style.font).slice(1, -1),
          d = (u = e.style.textAlign) != null ? u : "middle",
          i = Vn(e.text, s, a, d, n.width, !1);
        return i.setAttribute("fill", o.stroke), i;
      });
    }
  },
  Yn;
function Zde() {
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
      letterSpacing: Vt,
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
typeof window != "undefined" && (Yn = Zde());
var Xde = H("div", {
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
  td = { whiteSpace: "pre-wrap", overflowWrap: "break-word" },
  qde = H(
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
        letterSpacing: Vt,
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
      td
    )
  ),
  Jde = H(
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
        td
      ),
      { "&:focus": { outline: "none", border: "none" } }
    )
  );
import { SVGContainer as oce, Utils as Zn } from "@tldraw/core";
import {
  intersectBoundsPolygon as rce,
  intersectLineSegmentPolyline as sce,
  intersectRayLineSegment as ice,
} from "@tldraw/intersect";
import It from "@tldraw/vec";
import * as nn from "react";
import { Utils as sd } from "@tldraw/core";
import nce from "@tldraw/vec";
import * as fn from "react";
import { Utils as Kr } from "@tldraw/core";
import io from "@tldraw/vec";
import Qde, { getStrokePoints as ece } from "perfect-freehand";
function tn(r, e = 0, t = 0) {
  let [n, o] = r,
    s = [
      [n / 2, 0],
      [n, o],
      [0, o],
    ];
  return (
    e && (s = bl(s, e)),
    t && (s = s.map((a) => io.rotWith(a, [n / 2, o / 2], t))),
    s
  );
}
function di(r) {
  let [e, t] = r,
    n = [
      [e / 2, 0],
      [e, t],
      [0, t],
    ];
  return [(n[0][0] + n[1][0] + n[2][0]) / 3, (n[0][1] + n[1][1] + n[2][1]) / 3];
}
function tce(r, e, t) {
  let [n, o] = e,
    s = Kr.rng(r),
    a = Array.from(Array(3)).map(() => [s() * t * 0.75, s() * t * 0.75]),
    d = [io.add([n / 2, 0], a[0]), io.add([n, o], a[1]), io.add([0, o], a[2])],
    i = Math.round(Math.abs(s() * 2 * 3)),
    c = Kr.rotateArray(
      [
        io.pointsBetween(d[0], d[1], 32),
        io.pointsBetween(d[1], d[2], 32),
        io.pointsBetween(d[2], d[0], 32),
      ],
      i
    );
  return { points: [...c.flat(), ...c[0]] };
}
function nd(r, e, t) {
  let { strokeWidth: n } = be(t),
    { points: o } = tce(r, e, n);
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
function od(r, e, t) {
  let { points: n, options: o } = nd(r, e, t),
    s = Qde(n, o);
  return Kr.getSvgPathFromStroke(s);
}
function rd(r, e, t) {
  let { points: n, options: o } = nd(r, e, t);
  return Kr.getSvgPathFromStrokePoints(ece(n, o));
}
var id = fn.memo(function ({
  id: e,
  size: t,
  style: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = be(n, s),
    c = 1 + d * 1.618,
    u = tn(t),
    m = sd.pointsToLineSegments(u, !0).map(([g, f], T) => {
      let { strokeDasharray: x, strokeDashoffset: b } = sd.getPerfectDashProps(
        nce.dist(g, f),
        d * 1.618,
        n.dash
      );
      return fn.createElement("line", {
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
  return fn.createElement(
    fn.Fragment,
    null,
    fn.createElement("polygon", {
      className: n.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      points: h,
    }),
    n.isFilled &&
      fn.createElement("polygon", {
        fill: i,
        points: h,
        pointerEvents: "none",
      }),
    fn.createElement("g", { pointerEvents: "stroke" }, m)
  );
});
import * as Mn from "react";
var ad = Mn.memo(function ({
  id: e,
  size: t,
  style: n,
  isSelected: o,
  isDarkMode: s,
}) {
  let { stroke: a, strokeWidth: d, fill: i } = be(n, s),
    c = od(e, t, n),
    u = rd(e, t, n);
  return Mn.createElement(
    Mn.Fragment,
    null,
    Mn.createElement("path", {
      className: n.isFilled || o ? "tl-fill-hitarea" : "tl-stroke-hitarea",
      d: u,
    }),
    n.isFilled &&
      Mn.createElement("path", { d: u, fill: i, pointerEvents: "none" }),
    Mn.createElement("path", {
      d: c,
      fill: a,
      stroke: a,
      strokeWidth: d,
      pointerEvents: "none",
    })
  );
});
import * as ld from "react";
function dd({ size: r }) {
  let e = tn(r).join();
  return ld.createElement("polygon", {
    className: "tl-binding-indicator",
    points: e,
    strokeWidth: 16 * 2,
  });
}
var ci = class extends Te {
    constructor() {
      super(...arguments);
      l(this, "type", "triangle");
      l(this, "canBind", !0);
      l(this, "canClone", !0);
      l(this, "canEdit", !0);
      l(this, "getShape", (e) =>
        Zn.deepMerge(
          {
            id: "id",
            type: "triangle",
            name: "Triangle",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: ct,
            label: "",
            labelPoint: [0.5, 0.5],
          },
          e
        )
      );
      l(
        this,
        "Component",
        Te.Component(
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
                labelPoint: T = yo,
              } = e,
              x = kt(f),
              b = be(f, d.isDarkMode),
              y = f.dash === "draw" ? ad : id,
              R = nn.useCallback(
                (L) => (c == null ? void 0 : c({ id: m, label: L })),
                [c]
              ),
              U = nn.useMemo(() => {
                let L = It.div(g, 2);
                return (di(g)[1] - L[1]) * 0.72;
              }, [g]);
            return nn.createElement(
              ace,
              S({ ref: p }, i),
              nn.createElement($n, {
                font: x,
                text: h,
                color: b.stroke,
                offsetX: (T[0] - 0.5) * t.width,
                offsetY: U + (T[1] - 0.5) * t.height,
                isEditing: o,
                onChange: R,
                onBlur: u,
              }),
              nn.createElement(
                oce,
                { id: e.id + "_svg", opacity: a ? 0.3 : 1 },
                n && nn.createElement(dd, { size: g }),
                nn.createElement(y, {
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
        Te.Indicator(({ shape: e }) => {
          let { size: t } = e;
          return nn.createElement("polygon", { points: tn(t).join() });
        })
      );
      l(
        this,
        "shouldRender",
        (e, t) =>
          t.size !== e.size || t.style !== e.style || t.label !== e.label
      );
      l(this, "getBounds", (e) => $t(e, this.boundsCache));
      l(this, "getExpandedBounds", (e) =>
        Zn.getBoundsFromPoints(
          tn(e.size, this.bindingDistance).map((t) => It.add(t, e.point))
        )
      );
      l(
        this,
        "hitTestLineSegment",
        (e, t, n) => sce(t, n, this.getPoints(e)).didIntersect
      );
      l(
        this,
        "hitTestBounds",
        (e, t) =>
          Zn.boundsContained(this.getBounds(e), t) ||
          rce(t, this.getPoints(e)).length > 0
      );
      l(this, "getBindingPoint", (e, t, n, o, s, a) => {
        let d = this.getExpandedBounds(e);
        if (!Zn.pointInBounds(n, d)) return;
        let i = tn(e.size).map((b) => It.add(b, e.point)),
          c = tn(e.size, this.bindingDistance).map((b) => It.add(b, e.point)),
          u = Zn.pointsToLineSegments(i, !0)
            .map(([b, y]) => It.distanceToLineSegment(b, y, n))
            .sort((b, y) => b - y)[0];
        if (!(Zn.pointInPolygon(n, c) || u < this.bindingDistance)) return;
        let p = Zn.pointsToLineSegments(c.concat([c[0]]))
          .map((b) => ice(o, s, b[0], b[1]))
          .filter((b) => b.didIntersect)
          .flatMap((b) => b.points);
        if (!p.length) return;
        let m = It.add(di(e.size), e.point),
          h = p.sort((b, y) => It.dist(y, o) - It.dist(b, o))[0],
          g = It.med(n, h),
          f,
          T;
        a
          ? ((f = It.dist(n, m) < 16 / 2 ? m : n), (T = 0))
          : (It.distanceToLineSegment(n, g, m) < 16 / 2 ? (f = m) : (f = g),
            Zn.pointInPolygon(n, i)
              ? (T = this.bindingDistance)
              : (T = Math.max(this.bindingDistance, u)));
        let x = It.divV(It.sub(f, [d.minX, d.minY]), [d.width, d.height]);
        return { point: It.clampV(x, 0, 1), distance: T };
      });
      l(this, "transform", Nn);
      l(this, "transformSingle", Wn);
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
      ].map((d) => It.rotWith(d, this.getCenter(e), t));
    }
  },
  ace = H("div", { width: "100%", height: "100%" });
import { styled as cd } from "@stitches/react";
import { HTMLContainer as lce, Utils as dce } from "@tldraw/core";
import * as gt from "react";
var pi = class extends Te {
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
        dce.deepMerge(
          {
            id: "video",
            type: "video",
            name: "Video",
            parentId: "page",
            childIndex: 1,
            point: [0, 0],
            size: [1, 1],
            rotation: 0,
            style: ct,
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
        Te.Component(
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
            let u = gt.useRef(null),
              p = gt.useRef(null),
              { currentTime: m = 0, size: h, isPlaying: g, style: f } = e;
            gt.useLayoutEffect(() => {
              let y = p.current;
              if (!y) return;
              let [R, U] = h;
              (y.style.width = `${R}px`), (y.style.height = `${U}px`);
            }, [h]),
              gt.useLayoutEffect(() => {
                let y = u.current;
                !y || (g ? y.play() : y.pause());
              }, [g]),
              gt.useLayoutEffect(() => {
                let y = u.current;
                !y || (m !== y.currentTime && (y.currentTime = m));
              }, [m]);
            let T = gt.useCallback(() => {
                i == null || i({ id: e.id, isPlaying: !0 });
              }, []),
              x = gt.useCallback(() => {
                i == null || i({ id: e.id, isPlaying: !1 });
              }, []),
              b = gt.useCallback(() => {
                let y = u.current;
                !y ||
                  !o ||
                  i == null ||
                  i({ id: e.id, currentTime: y.currentTime });
              }, [o]);
            return gt.createElement(
              lce,
              S({ ref: c }, d),
              n &&
                gt.createElement("div", {
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
              gt.createElement(
                cce,
                {
                  ref: p,
                  isDarkMode: a.isDarkMode,
                  isGhost: s,
                  isFilled: f.isFilled,
                },
                gt.createElement(
                  pce,
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
                  gt.createElement("source", { src: t.src })
                )
              )
            );
          }
        )
      );
      l(
        this,
        "Indicator",
        Te.Indicator(({ shape: e }) => {
          let {
            size: [t, n],
          } = e;
          return gt.createElement("rect", {
            x: 0,
            y: 0,
            rx: 2,
            ry: 2,
            width: Math.max(1, t),
            height: Math.max(1, n),
          });
        })
      );
      l(this, "getBounds", (e) => $t(e, this.boundsCache));
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
      l(this, "transform", Nn);
      l(this, "transformSingle", Wn);
    }
  },
  cce = cd("div", {
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
  pce = cd("video", {
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
var ui = new ri(),
  hi = new ci(),
  mi = new ti(),
  gi = new Qs(),
  Ko = new Ys(),
  uce = new li(),
  hce = new ni(),
  _r = new ii(),
  mce = new oi(),
  gce = new pi(),
  Bn = {
    ["rectangle"]: ui,
    ["triangle"]: hi,
    ["ellipse"]: mi,
    ["draw"]: gi,
    ["arrow"]: Ko,
    ["text"]: uce,
    ["group"]: hce,
    ["sticky"]: _r,
    ["image"]: mce,
    ["video"]: gce,
  },
  pd = (r) => (typeof r == "string" ? Bn[r] : Bn[r.type]);
var ud = !1,
  he = class {
    static getShapeUtil(e) {
      return pd(e);
    }
    static getSelectedShapes(e, t) {
      let n = he.getPage(e, t);
      return he.getSelectedIds(e, t).map((s) => n.shapes[s]);
    }
    static screenToWorld(e, t) {
      let n = he.getPageState(e, e.appState.currentPageId).camera;
      return fe.sub(fe.div(t, n.zoom), n.point);
    }
    static getCameraZoom(e) {
      return Ot.clamp(e, 0.1, 5);
    }
    static getPage(e, t) {
      return e.document.pages[t];
    }
    static getPageState(e, t) {
      return e.document.pageStates[t];
    }
    static getSelectedIds(e, t) {
      return he.getPageState(e, t).selectedIds;
    }
    static getShapes(e, t) {
      return Object.values(he.getPage(e, t).shapes);
    }
    static getCamera(e, t) {
      return he.getPageState(e, t).camera;
    }
    static getShape(e, t, n) {
      return he.getPage(e, n).shapes[t];
    }
    static getCenter(e) {
      return he.getShapeUtil(e).getCenter(e);
    }
    static getBounds(e) {
      return he.getShapeUtil(e).getBounds(e);
    }
    static getRotatedBounds(e) {
      return he.getShapeUtil(e).getRotatedBounds(e);
    }
    static getSelectedBounds(e) {
      return Ot.getCommonBounds(
        he
          .getSelectedShapes(e, e.appState.currentPageId)
          .map((t) => he.getShapeUtil(t).getBounds(t))
      );
    }
    static getParentId(e, t, n) {
      return he.getShape(e, t, n).parentId;
    }
    static getDocumentBranch(e, t, n) {
      let o = he.getShape(e, t, n);
      return o.children === void 0
        ? [t]
        : [t, ...o.children.flatMap((s) => he.getDocumentBranch(e, s, n))];
    }
    static getSelectedBranchSnapshot(e, t, n) {
      let o = he.getPage(e, t),
        s = he
          .getSelectedIds(e, t)
          .flatMap((a) => he.getDocumentBranch(e, a, t).map((d) => o.shapes[d]))
          .filter((a) => !a.isLocked)
          .map(Ot.deepClone);
      return n !== void 0 ? s.map((a) => S({ id: a.id }, n(a))) : s;
    }
    static getSelectedShapeSnapshot(e, t, n) {
      let o = he
        .getSelectedShapes(e, t)
        .filter((s) => !s.isLocked)
        .map(Ot.deepClone);
      return n !== void 0 ? o.map((s) => S({ id: s.id }, n(s))) : o;
    }
    static getAllEffectedShapeIds(e, t, n) {
      let o = he.getPage(e, n),
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
      let s = he.getSelectedIds(e, t),
        a = he.getPage(e, t),
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
        let p = he.getShape(e, c, o);
        if (p.isLocked) return;
        (p == null ? void 0 : p.type) === "group" &&
          (t.length === 1 || s) &&
          p.children.forEach((h, g) => {
            let f = he.getShape(e, h, o);
            if (f.isLocked) return;
            let T = n(f, g);
            T && ((a[h] = he.getBeforeShape(f, T)), (d[h] = T));
          });
        let m = n(p, u);
        m && ((a[c] = he.getBeforeShape(p, m)), (d[c] = m));
      });
      let i = Ot.deepMerge(e, {
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
                        let i = he.getShape(e, a.parentId, n);
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
                          let i = he.getShape(e, a.parentId, n);
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
      let o = he.getPage(e, n),
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
        (o = (n = he.getShapeUtil(e)).onSessionComplete) == null
          ? void 0
          : o.call(n, e);
      return t ? S(S({}, e), t) : e;
    }
    static onChildrenChange(e, t, n) {
      var s, a;
      if (!t.children) return;
      let o =
        (a = (s = he.getShapeUtil(t)).onChildrenChange) == null
          ? void 0
          : a.call(
              s,
              t,
              t.children.map((d) => he.getShape(e, d, n))
            );
      return o ? S(S({}, t), o) : t;
    }
    static updateArrowBindings(e, t) {
      var a, d, i, c, u, p;
      let n = { start: St(t.handles.start), end: St(t.handles.end) },
        o = {
          isBound: !1,
          handle: t.handles.start,
          point: fe.add(t.handles.start.point, t.point),
        },
        s = {
          isBound: !1,
          handle: t.handles.end,
          point: fe.add(t.handles.end.point, t.point),
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
          T = he.getShapeUtil(f),
          x = T.getBounds(f),
          b = T.getExpandedBounds(f),
          y = m ? Ot.expandBounds(x, g.distance) : x,
          { minX: R, minY: U, width: L, height: k } = b,
          I = fe.add(
            [R, U],
            fe.mulV([L, k], fe.rotWith(g.point, [0.5, 0.5], f.rotation || 0))
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
          T = he.getShapeUtil(f),
          x = T.getBounds(f),
          b = T.getExpandedBounds(f),
          y = m ? Ot.expandBounds(x, g.distance) : x,
          { minX: R, minY: U, width: L, height: k } = b,
          I = fe.add(
            [R, U],
            fe.mulV([L, k], fe.rotWith(g.point, [0.5, 0.5], f.rotation || 0))
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
          if (!h.binding.distance) n[m].point = fe.sub(h.point, t.point);
          else {
            let f = fe.uni(fe.sub(h.point, g.point));
            switch (h.target.type) {
              case "ellipse": {
                let T = fce(
                  g.point,
                  f,
                  h.center,
                  h.target.radius[0] +
                    (h.hasDecoration ? h.binding.distance : 0),
                  h.target.radius[1] +
                    (h.hasDecoration ? h.binding.distance : 0),
                  h.target.rotation || 0
                ).points.sort(
                  (x, b) => fe.dist(x, g.point) - fe.dist(b, g.point)
                );
                T[0] !== void 0 &&
                  (n[m].point = fe.toFixed(fe.sub(T[0], t.point)));
                break;
              }
              case "triangle": {
                let T = h.target.point,
                  x = tn(
                    h.target.size,
                    h.hasDecoration ? 16 : 0,
                    h.target.rotation
                  ).map((y) => fe.add(y, T)),
                  b = Ot.pointsToLineSegments(x, !0)
                    .map(([y, R]) => Sce(g.point, f, y, R))
                    .filter((y) => y.didIntersect)
                    .flatMap((y) => y.points)
                    .sort((y, R) => fe.dist(y, g.point) - fe.dist(R, g.point));
                b[0] !== void 0 &&
                  (n[m].point = fe.toFixed(fe.sub(b[0], t.point)));
                break;
              }
              default: {
                let T = fi(g.point, f, h.intersectBounds, h.target.rotation)
                  .filter((b) => b.didIntersect)
                  .map((b) => b.points[0])
                  .sort((b, y) => fe.dist(b, g.point) - fe.dist(y, g.point));
                if (!T[0]) continue;
                let x;
                if (
                  (g.isBound &&
                    (x = fi(g.point, f, g.intersectBounds, g.target.rotation)
                      .filter((y) => y.didIntersect)
                      .map((y) => y.points[0])
                      .sort(
                        (y, R) => fe.dist(y, g.point) - fe.dist(R, g.point)
                      )[0]),
                  g.isBound &&
                    (T.length < 2 ||
                      (x && T[0] && Math.ceil(fe.dist(T[0], x)) < 16 * 2.5) ||
                      Ot.boundsContain(h.expandedBounds, g.expandedBounds) ||
                      Ot.boundsCollide(h.expandedBounds, g.expandedBounds)))
                ) {
                  let b = fe.uni(fe.sub(g.point, h.point)),
                    y = fi(h.point, b, h.bounds, h.target.rotation)
                      .filter((R) => R.didIntersect)
                      .map((R) => R.points[0]);
                  if (!y[0]) continue;
                  (n[m].point = fe.toFixed(fe.sub(y[0], t.point))),
                    (n[m === "start" ? "end" : "start"].point = fe.toFixed(
                      fe.add(
                        fe.sub(y[0], t.point),
                        fe.mul(
                          b,
                          Math.min(
                            fe.dist(y[0], g.point),
                            16 *
                              2.5 *
                              (Ot.boundsContain(g.bounds, h.intersectBounds)
                                ? -1
                                : 1)
                          )
                        )
                      )
                    ));
                } else if (
                  !g.isBound &&
                  ((T[0] && fe.dist(T[0], g.point) < 16 * 2.5) ||
                    Ot.pointInBounds(g.point, h.intersectBounds))
                ) {
                  let b = fe.uni(fe.sub(h.center, g.point));
                  return (c = (i = he.getShapeUtil(t)).onHandleChange) == null
                    ? void 0
                    : c.call(i, t, {
                        [m]: w(S({}, t.handles[m]), {
                          point: fe.toFixed(
                            fe.add(
                              fe.sub(g.point, t.point),
                              fe.mul(b, 16 * 2.5)
                            )
                          ),
                        }),
                      });
                } else T[0] && (n[m].point = fe.toFixed(fe.sub(T[0], t.point)));
              }
            }
          }
      }
      return (p = (u = he.getShapeUtil(t)).onHandleChange) == null
        ? void 0
        : p.call(u, t, n);
    }
    static transform(e, t, n) {
      let o = he.getShapeUtil(e).transform(e, t, n);
      return o ? S(S({}, e), o) : e;
    }
    static transformSingle(e, t, n) {
      let o = he.getShapeUtil(e).transformSingle(e, t, n);
      return o ? S(S({}, e), o) : e;
    }
    static getRotatedShapeMutation(e, t, n, o) {
      var c, u;
      let s = fe.sub(t, e.point),
        a = fe.rotWith(t, n, o),
        d = fe.toFixed(fe.sub(a, s));
      if (e.handles !== void 0)
        return (u = (c = this.getShapeUtil(e)).onHandleChange) == null
          ? void 0
          : u.call(
              c,
              w(S({}, e), { point: d }),
              Object.fromEntries(
                Object.entries(e.handles).map(([m, h]) => {
                  let g = fe.toFixed(fe.rotWith(h.point, s, o));
                  return [m, w(S({}, h), { point: g })];
                })
              )
            );
      let i = Ot.clampRadians((e.rotation || 0) + o);
      return { point: d, rotation: i };
    }
    static updateParents(e, t, n) {
      let o = he.getPage(e, t);
      if (n.length === 0) return;
      let { shapes: s } = he.getPage(e, t),
        a = Array.from(new Set(n.map((d) => s[d].parentId).values())).filter(
          (d) => d !== o.id
        );
      for (let d of a) {
        let i = s[d];
        if (!i.children)
          throw Error(
            "A shape is parented to a shape without a children array."
          );
        he.onChildrenChange(e, i, t);
      }
      he.updateParents(e, t, a);
    }
    static getBinding(e, t, n) {
      return he.getPage(e, n).bindings[t];
    }
    static getBindings(e, t) {
      let n = he.getPage(e, t);
      return Object.values(n.bindings);
    }
    static getBindableShapeIds(e) {
      return he
        .getShapes(e, e.appState.currentPageId)
        .filter((t) => he.getShapeUtil(t).canBind)
        .sort((t, n) => n.childIndex - t.childIndex)
        .map((t) => t.id);
    }
    static getBindingsWithShapeIds(e, t, n) {
      return Array.from(
        new Set(
          he
            .getBindings(e, n)
            .filter((o) => t.includes(o.toId) || t.includes(o.fromId))
        ).values()
      );
    }
    static getRelatedBindings(e, t, n) {
      let o = new Set(t),
        s = he.getPage(e, n),
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
          he.fixNewLines,
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
      ud && console.warn(e);
    }
    static error(e) {
      ud && console.error(e);
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
      let n = he.getSvgString(e, t);
      return `data:image/svg+xml;base64,${window.btoa(unescape(n))}`;
    }
    static getImageForSvg(o) {
      return pe(this, arguments, function* (e, t = "png", n = {}) {
        let { scale: s = 2, quality: a = 1 } = n,
          d = he.getSvgString(e, s);
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
  v = he;
l(v, "copyStringToClipboard", (e) => {
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
  l(v, "flattenShape", (e, t) => {
    var n;
    return [
      t,
      ...((n = t.children) != null ? n : [])
        .map((o) => he.getShape(e, o, e.appState.currentPageId))
        .sort((o, s) => o.childIndex - s.childIndex)
        .flatMap((o) => he.flattenShape(e, o)),
    ];
  }),
  l(v, "flattenPage", (e, t) =>
    Object.values(e.document.pages[t].shapes)
      .sort((n, o) => n.childIndex - o.childIndex)
      .reduce((n, o) => [...n, ...he.flattenShape(e, o)], [])
  ),
  l(v, "getTopChildIndex", (e, t) => {
    let n = he.getShapes(e, t);
    return n.length === 0
      ? 1
      : n
          .filter((o) => o.parentId === t)
          .sort((o, s) => s.childIndex - o.childIndex)[0].childIndex + 1;
  }),
  l(v, "fixNewLines", /\r?\n|\r/g);
var bce = (r) => r.room,
  fd = function () {
    let e = me(),
      t = e.useStore(bce),
      [n, o] = Re.useState(!1),
      s = Re.useRef(0),
      a = Re.useCallback(() => {
        o(!0),
          v.copyStringToClipboard(window.location.href),
          clearTimeout(s.current),
          (s.current = setTimeout(() => o(!1), 1200));
      }, []),
      d = Re.useCallback(() => {
        o(!0);
        let u = window.location.href.split("/");
        (u[u.length - 2] = "v"),
          (u[u.length - 1] = Si.lns(u[u.length - 1])),
          v.copyStringToClipboard(u.join("/")),
          clearTimeout(s.current),
          (s.current = setTimeout(() => o(!1), 1200));
      }, []),
      i = Re.useCallback(
        () =>
          pe(this, null, function* () {
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
      c = Re.useCallback(
        () =>
          pe(this, null, function* () {
            var p;
            let u = Si.deepClone(e.document);
            e.setIsLoading(!0);
            try {
              if (e.callbacks.onAssetUpload)
                for (let h in u.assets) {
                  let g = u.assets[h];
                  if (g.src.includes("base64")) {
                    let f = Tce(
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
                  roomId: Si.uniqueId(),
                  pageId: e.currentPageId,
                  document: u,
                }),
              }).then((h) => h.json());
              (m == null ? void 0 : m.url)
                ? (window.location.href = m.url)
                : v.warn(m == null ? void 0 : m.message);
            } catch (m) {
              v.warn(m.message);
            }
            e.setIsLoading(!1);
          }),
        []
      );
    return Re.createElement(
      gd.Root,
      { dir: "ltr" },
      Re.createElement(
        Er,
        { id: "TD-MultiplayerMenuIcon", isActive: !!t },
        Re.createElement(pl, null)
      ),
      Re.createElement(
        Mt,
        {
          variant: "menu",
          id: "TD-MultiplayerMenu",
          side: "bottom",
          align: "start",
          sideOffset: 4,
        },
        Re.createElement(
          xe,
          { id: "TD-Multiplayer-CopyInviteLink", onClick: a, disabled: !t },
          Re.createElement(Yr, { id: "copy.invite.link" }),
          Re.createElement(
            ut,
            null,
            n ? Re.createElement(hd, null) : Re.createElement(md, null)
          )
        ),
        Re.createElement(
          xe,
          { id: "TD-Multiplayer-CopyReadOnlyLink", onClick: d, disabled: !t },
          Re.createElement(Yr, { id: "copy.readonly.link" }),
          Re.createElement(
            ut,
            null,
            n ? Re.createElement(hd, null) : Re.createElement(md, null)
          )
        ),
        Re.createElement(Pe, null),
        Re.createElement(
          xe,
          { id: "TD-Multiplayer-CreateMultiplayerProject", onClick: i },
          Re.createElement(
            "a",
            { href: `${window.location.origin}/r` },
            Re.createElement(Yr, { id: "create.multiplayer.project" })
          )
        ),
        Re.createElement(
          xe,
          { id: "TD-Multiplayer-CopyToMultiplayerProject", onClick: c },
          Re.createElement(Yr, { id: "copy.multiplayer.project" })
        )
      )
    );
  };
function Tce(r, e) {
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
import * as Wt from "@radix-ui/react-dropdown-menu";
import { CheckIcon as Cce, PlusIcon as Dce } from "@radix-ui/react-icons";
import * as ye from "react";
import { FormattedMessage as Pce, useIntl as Td } from "react-intl";
import * as Et from "@radix-ui/react-alert-dialog";
import {
  MixerVerticalIcon as yce,
  Pencil1Icon as xce,
} from "@radix-ui/react-icons";
import * as ke from "react";
import { FormattedMessage as bi, useIntl as wce } from "react-intl";
var kce = (r) => Object.keys(r.document.pages).length > 1;
function bd({ page: r, onOpen: e, onClose: t }) {
  let n = me(),
    o = wce(),
    [s, a] = ke.useState(!1),
    [d, i] = ke.useState(r.name || "Page"),
    c = n.useStore(kce),
    u = ke.useRef(null),
    p = ke.useCallback(() => {
      a(!1);
    }, []),
    m = ke.useCallback(() => {
      n.duplicatePage(r.id);
    }, [n]),
    h = ke.useCallback(() => {
      window.confirm("Are you sure you want to delete this page?") &&
        n.deletePage(r.id);
    }, [n]),
    g = ke.useCallback(
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
  let T = ke.useRef(r.name || "Page"),
    x = ke.useRef(T.current),
    b = ke.useCallback((L) => {
      let k = L.target.value.trimStart();
      (x.current = k), i(k);
    }, []),
    y = ke.useCallback((L) => {
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
              let k = u.current;
              k && (k.focus(), k.setSelectionRange(0, k.value.length));
            });
          break;
        }
      }
    }, []),
    R = ke.useRef(!1);
  ke.useEffect(
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
  let U = Lt();
  return ke.createElement(
    Et.Root,
    { open: s, onOpenChange: g },
    ke.createElement(
      Et.Trigger,
      { asChild: !0, "data-shy": "true" },
      ke.createElement(
        go,
        { bp: Qe },
        ke.createElement(ut, null, ke.createElement(yce, null))
      )
    ),
    ke.createElement(
      Et.Portal,
      { container: U.current },
      ke.createElement(Ice, { onPointerDown: p }),
      ke.createElement(
        vce,
        { dir: "ltr", onKeyDown: f, onKeyUp: f },
        ke.createElement(Pr, {
          ref: u,
          placeholder: o.formatMessage({ id: "page.name" }),
          value: d,
          onChange: b,
          onKeyDown: y,
          icon: ke.createElement(xce, null),
        }),
        ke.createElement(Pe, null),
        ke.createElement(
          Sd,
          { onSelect: m },
          ke.createElement(bi, { id: "duplicate" })
        ),
        ke.createElement(
          Sd,
          { disabled: !c, onSelect: h },
          ke.createElement(bi, { id: "delete" })
        ),
        ke.createElement(Pe, null),
        ke.createElement(
          Et.Cancel,
          { asChild: !0 },
          ke.createElement(je, null, ke.createElement(bi, { id: "cancel" }))
        )
      )
    )
  );
}
var vce = H(Et.Content, {
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
  Ice = H(Et.Overlay, {
    backgroundColor: "rgba(0, 0, 0, .15)",
    position: "absolute",
    pointerEvents: "all",
    inset: 0,
    zIndex: 999998,
  });
function Sd(t) {
  var n = t,
    { onSelect: r } = n,
    e = Je(n, ["onSelect"]);
  return ke.createElement(
    Et.Action,
    { asChild: !0, onClick: r, onSelect: r },
    ke.createElement(je, S({}, e))
  );
}
var Mce = (r) =>
    Object.values(r.document.pages).sort(
      (e, t) => (e.childIndex || 0) - (t.childIndex || 0)
    ),
  Bce = (r) => r.document.pages[r.appState.currentPageId].name,
  Ece = (r) => r.document.pages[r.appState.currentPageId].id;
function yd() {
  let r = me(),
    e = Td(),
    t = ye.useRef(!1),
    [n, o] = ye.useState(!1);
  ye.useEffect(() => {
    t.current !== n && (t.current = n);
  }, [n]);
  let s = ye.useCallback(() => {
      o(!1);
    }, [o]),
    a = ye.useCallback(
      (i) => {
        t.current !== i && o(i);
      },
      [o]
    ),
    d = r.useStore(Bce);
  return ye.createElement(
    Wt.Root,
    { dir: "ltr", open: n, onOpenChange: a },
    ye.createElement(
      Wt.Trigger,
      { dir: "ltr", asChild: !0, id: "TD-Page" },
      ye.createElement(
        we,
        { variant: "text" },
        d || e.formatMessage({ id: "page" })
      )
    ),
    ye.createElement(
      Mt,
      { variant: "menu", align: "start", sideOffset: 4 },
      n && ye.createElement(Rce, { onClose: s })
    )
  );
}
function Rce({ onClose: r }) {
  let e = me(),
    t = Td(),
    n = e.useStore(Mce),
    o = e.useStore(Ece),
    s = t.formatMessage({ id: "page" }),
    a = ye.useCallback(() => {
      let f = s + " " + (Object.keys(e.document.pages).length + 1);
      e.createPage(void 0, f);
    }, [e]),
    d = ye.useCallback(
      (f) => {
        r(), e.changePage(f);
      },
      [e]
    ),
    [i, c] = ye.useState(null),
    [u, p] = ye.useState(null),
    m = ye.useCallback((f) => {
      c(f.currentTarget.id),
        p(n.findIndex((T) => T.id === f.currentTarget.id)),
        (f.dataTransfer.effectAllowed = "move");
    }, []),
    h = ye.useCallback(
      (f) => {
        f.preventDefault();
        let T = n.findIndex((y) => y.id === f.currentTarget.id),
          x = f.currentTarget.getBoundingClientRect();
        (T = (f.clientY - x.top) / x.height < 0.5 ? T : T + 1), p(T);
      },
      [i, n]
    ),
    g = ye.useCallback(() => {
      i !== null && u !== null && e.movePage(i, u), c(null), p(null);
    }, [i, u]);
  return ye.createElement(
    ye.Fragment,
    null,
    ye.createElement(
      Wt.RadioGroup,
      { dir: "ltr", value: o, onValueChange: d },
      n.map((f, T) =>
        ye.createElement(
          Ace,
          {
            key: f.id,
            isDropAbove: T === u && T === 0,
            isDropBelow: u !== null && T === u - 1,
          },
          ye.createElement(
            Wt.RadioItem,
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
            ye.createElement(
              Lce,
              null,
              ye.createElement("span", { id: f.id }, f.name || s),
              ye.createElement(
                Wt.ItemIndicator,
                null,
                ye.createElement(ut, null, ye.createElement(Cce, null))
              )
            )
          ),
          ye.createElement(bd, { page: f, onClose: r })
        )
      )
    ),
    ye.createElement(Pe, null),
    ye.createElement(
      Wt.Item,
      { onSelect: a, asChild: !0 },
      ye.createElement(
        je,
        null,
        ye.createElement(
          "span",
          null,
          ye.createElement(Pce, { id: "create.page" })
        ),
        ye.createElement(ut, null, ye.createElement(Dce, null))
      )
    )
  );
}
var Ace = H("div", {
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
  Lce = H(je, { minWidth: 128 });
import * as qn from "@radix-ui/react-dropdown-menu";
import {
  TextAlignCenterIcon as Hce,
  TextAlignJustifyIcon as zce,
  TextAlignLeftIcon as Oce,
  TextAlignRightIcon as Fce,
} from "@radix-ui/react-icons";
import * as ce from "react";
import { FormattedMessage as Xn, useIntl as jce } from "react-intl";
var Gce = (r) => r.appState.currentStyle,
  Vce = (r) => r.document.pageStates[r.appState.currentPageId].selectedIds,
  $ce = Object.keys(vo),
  xd = {
    ["draw"]: ce.createElement($a, null),
    ["solid"]: ce.createElement(Na, null),
    ["dashed"]: ce.createElement(Ga, null),
    ["dotted"]: ce.createElement(Va, null),
  },
  Nce = {
    ["small"]: ce.createElement(Ua, null),
    ["medium"]: ce.createElement(Ka, null),
    ["large"]: ce.createElement(_a, null),
  },
  Wce = {
    ["start"]: ce.createElement(Oce, null),
    ["middle"]: ce.createElement(Hce, null),
    ["end"]: ce.createElement(Fce, null),
    ["justify"]: ce.createElement(zce, null),
  },
  Uce = (r) => (r.settings.isDarkMode ? "dark" : "light"),
  Kce = (r) => r.settings.keepStyleMenuOpen,
  _ce = (r) => {
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
  wd = ce.memo(function () {
    let e = me(),
      t = jce(),
      n = e.useStore(Uce),
      o = e.useStore(Kce),
      s = e.useStore(_ce),
      a = e.useStore(Gce),
      d = e.useStore(Vce),
      [i, c] = ce.useState(a),
      u = ce.useRef(a);
    ce.useEffect(() => {
      let {
          appState: { currentStyle: b },
          page: y,
          selectedIds: R,
        } = e,
        U = {};
      if (R.length <= 0) U = b;
      else {
        let L = new Set([]);
        e.selectedIds
          .map((k) => y.shapes[k])
          .forEach((k) => {
            $ce.forEach((I) => {
              if (!L.has(I))
                if (U[I] === void 0) U[I] = k.style[I];
                else {
                  if (U[I] === k.style[I]) return;
                  (U[I] = k.style[I]), L.add(I);
                }
            });
          });
      }
      JSON.stringify(U) !== JSON.stringify(u.current) &&
        ((u.current = U), c(U));
    }, [a, d]);
    let p = ce.useCallback((b) => {
        e.setSetting("keepStyleMenuOpen", b);
      }, []),
      m = ce.useCallback((b) => {
        e.style({ isFilled: b });
      }, []),
      h = ce.useCallback((b) => {
        e.style({ dash: b });
      }, []),
      g = ce.useCallback((b) => {
        e.style({ size: b });
      }, []),
      f = ce.useCallback((b) => {
        e.style({ font: b });
      }, []),
      T = ce.useCallback((b) => {
        e.style({ textAlign: b });
      }, []),
      x = ce.useCallback(
        (b) => {
          e.setMenuOpen(b);
        },
        [e]
      );
    return ce.createElement(
      qn.Root,
      { dir: "ltr", onOpenChange: x, open: o ? !0 : void 0 },
      ce.createElement(
        qn.Trigger,
        { asChild: !0, id: "TD-Styles" },
        ce.createElement(
          we,
          { "aria-label": t.formatMessage({ id: "styles" }), variant: "text" },
          ce.createElement(Xn, { id: "styles" }),
          ce.createElement(
            Zce,
            { style: { color: ko[n][i.color] } },
            i.isFilled &&
              ce.createElement(vs, {
                size: 16,
                stroke: "none",
                fill: jr[n][i.color],
              }),
            xd[i.dash]
          )
        )
      ),
      ce.createElement(
        Mt,
        {
          id: "TD-StylesMenu",
          side: "bottom",
          align: "end",
          sideOffset: 4,
          alignOffset: 4,
        },
        ce.createElement(
          _o,
          { variant: "tall", id: "TD-Styles-Color-Container" },
          ce.createElement(
            "span",
            null,
            ce.createElement(Xn, { id: "style.menu.color" })
          ),
          ce.createElement(
            Yce,
            null,
            Object.keys(ko.light).map((b) =>
              ce.createElement(
                qn.Item,
                {
                  key: b,
                  onSelect: He,
                  asChild: !0,
                  id: `TD-Styles-Color-Swatch-${b}`,
                },
                ce.createElement(
                  we,
                  {
                    variant: "icon",
                    isActive: i.color === b,
                    onClick: () => e.style({ color: b }),
                    "aria-label": t.formatMessage({ id: b }),
                  },
                  ce.createElement(vs, {
                    size: 18,
                    strokeWidth: 2.5,
                    fill: i.isFilled ? jr[n][b] : "transparent",
                    stroke: ko.light[b],
                  })
                )
              )
            )
          )
        ),
        ce.createElement(
          Pt,
          {
            variant: "styleMenu",
            checked: !!i.isFilled,
            onCheckedChange: m,
            id: "TD-Styles-Fill",
          },
          ce.createElement(Xn, { id: "style.menu.fill" })
        ),
        ce.createElement(
          _o,
          { id: "TD-Styles-Dash-Container" },
          ce.createElement(Xn, { id: "style.menu.dash" }),
          ce.createElement(
            Zr,
            { dir: "ltr", value: i.dash, onValueChange: h },
            Object.values(yn).map((b) =>
              ce.createElement(
                jo,
                {
                  key: b,
                  isActive: b === i.dash,
                  value: b,
                  onSelect: He,
                  bp: Qe,
                  id: `TD-Styles-Dash-${b}`,
                  "aria-label": t.formatMessage({ id: b }),
                },
                xd[b]
              )
            )
          )
        ),
        ce.createElement(
          _o,
          { id: "TD-Styles-Size-Container" },
          ce.createElement(Xn, { id: "style.menu.size" }),
          ce.createElement(
            Zr,
            { dir: "ltr", value: i.size, onValueChange: g },
            Object.values(kr).map((b) =>
              ce.createElement(
                jo,
                {
                  key: b,
                  isActive: b === i.size,
                  value: b,
                  onSelect: He,
                  bp: Qe,
                  id: `TD-Styles-Dash-${b}`,
                  "aria-label": t.formatMessage({ id: b }),
                },
                Nce[b]
              )
            )
          )
        ),
        (s === "text" || s === "label") &&
          ce.createElement(
            ce.Fragment,
            null,
            ce.createElement(Pe, null),
            ce.createElement(
              _o,
              { id: "TD-Styles-Font-Container" },
              ce.createElement(Xn, { id: "style.menu.font" }),
              ce.createElement(
                Zr,
                { dir: "ltr", value: i.font, onValueChange: f },
                Object.values(Oo).map((b) =>
                  ce.createElement(
                    jo,
                    {
                      key: b,
                      isActive: b === i.font,
                      value: b,
                      onSelect: He,
                      bp: Qe,
                      id: `TD-Styles-Font-${b}`,
                    },
                    ce.createElement(Xce, { fontStyle: b }, "Aa")
                  )
                )
              )
            ),
            s === "text" &&
              ce.createElement(
                _o,
                { id: "TD-Styles-Align-Container" },
                ce.createElement(Xn, { id: "style.menu.align" }),
                ce.createElement(
                  Zr,
                  { dir: "ltr", value: i.textAlign, onValueChange: T },
                  Object.values(Gt).map((b) =>
                    ce.createElement(
                      jo,
                      {
                        key: b,
                        isActive: b === i.textAlign,
                        value: b,
                        onSelect: He,
                        bp: Qe,
                        id: `TD-Styles-Align-${b}`,
                      },
                      Wce[b]
                    )
                  )
                )
              )
          ),
        ce.createElement(Pe, null),
        ce.createElement(
          Pt,
          {
            variant: "styleMenu",
            checked: o,
            onCheckedChange: p,
            id: "TD-Styles-Keep-Open",
          },
          ce.createElement(Xn, { id: "style.menu.keep.open" })
        )
      )
    );
  }),
  Yce = H("div", {
    display: "grid",
    gridTemplateColumns: "repeat(4, auto)",
    gap: 0,
  }),
  _o = H("div", {
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
  Zr = H(qn.DropdownMenuRadioGroup, {
    display: "flex",
    flexDirection: "row",
    gap: "$1",
  }),
  Zce = H("div", { display: "grid", "& > *": { gridColumn: 1, gridRow: 1 } }),
  Xce = H("div", {
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
import * as Xr from "@radix-ui/react-dropdown-menu";
import * as Ct from "react";
import { FormattedMessage as Yo } from "react-intl";
var qce = (r) => r.document.pageStates[r.appState.currentPageId].camera.zoom,
  kd = function () {
    let e = me(),
      t = e.useStore(qce);
    return Ct.createElement(
      Xr.Root,
      { dir: "ltr" },
      Ct.createElement(
        Xr.Trigger,
        { dir: "ltr", asChild: !0, id: "TD-Zoom" },
        Ct.createElement(
          Jce,
          { onDoubleClick: e.resetZoom, variant: "text" },
          Math.round(t * 100),
          "%"
        )
      ),
      Ct.createElement(
        Mt,
        { align: "end" },
        Ct.createElement(
          xe,
          { onSelect: He, onClick: e.zoomIn, kbd: "#+", id: "TD-Zoom-Zoom_In" },
          Ct.createElement(Yo, { id: "zoom.in" })
        ),
        Ct.createElement(
          xe,
          {
            onSelect: He,
            onClick: e.zoomOut,
            kbd: "#\u2212",
            id: "TD-Zoom-Zoom_Out",
          },
          Ct.createElement(Yo, { id: "zoom.out" })
        ),
        Ct.createElement(
          xe,
          {
            onSelect: He,
            onClick: e.resetZoom,
            kbd: "\u21E70",
            id: "TD-Zoom-Zoom_To_100%",
          },
          Ct.createElement(Yo, { id: "zoom.to" }),
          " 100%"
        ),
        Ct.createElement(
          xe,
          {
            onSelect: He,
            onClick: e.zoomToFit,
            kbd: "\u21E71",
            id: "TD-Zoom-To_Fit",
          },
          Ct.createElement(Yo, { id: "zoom.to.fit" })
        ),
        Ct.createElement(
          xe,
          {
            onSelect: He,
            onClick: e.zoomToSelection,
            kbd: "\u21E72",
            id: "TD-Zoom-To_Selection",
          },
          Ct.createElement(Yo, { id: "zoom.to.selection" })
        )
      )
    );
  },
  Jce = H(we, { minWidth: 56 });
function epe({
  readOnly: r,
  showPages: e,
  showMenu: t,
  showStyles: n,
  showZoom: o,
  showMultiplayerMenu: s,
}) {
  let a = me(),
    d = Qce();
  return at.createElement(
    tpe,
    null,
    (t || e) &&
      at.createElement(
        no,
        { side: "left", id: "TD-MenuPanel" },
        t && at.createElement(cl, { readOnly: r }),
        s && at.createElement(fd, null),
        e && at.createElement(yd, null)
      ),
    at.createElement(npe, null),
    (n || o) &&
      at.createElement(
        no,
        { side: "right" },
        a.readOnly
          ? at.createElement(ope, null, "Read Only")
          : at.createElement(
              at.Fragment,
              null,
              at.createElement(
                Xt,
                {
                  kbd: "#Z",
                  label: d.formatMessage({ id: "undo" }),
                  onClick: a.undo,
                  id: "TD-TopPanel-Undo",
                  "aria-label": d.formatMessage({ id: "undo" }),
                },
                at.createElement(Bs, null)
              ),
              at.createElement(
                Xt,
                {
                  kbd: "#\u21E7Z",
                  label: d.formatMessage({ id: "redo" }),
                  onClick: a.redo,
                  id: "TD-TopPanel-Redo",
                  "aria-label": d.formatMessage({ id: "redo" }),
                },
                at.createElement(Bs, { flipHorizontal: !0 })
              )
            ),
        o && at.createElement(kd, null),
        n && !r && at.createElement(wd, null)
      )
  );
}
var tpe = H("div", {
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
  npe = H("div", { flexGrow: 2, pointerEvents: "none" }),
  ope = H("div", {
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
  vd = at.memo(epe);
import rpe from "react";
function Id(r) {
  rpe.useEffect(() => {
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
import { Utils as Dt } from "@tldraw/core";
import { Vec as ve } from "@tldraw/vec";
import { del as Pve, get as spe, set as ipe } from "idb-keyval";
var Cd = "tldraw_clipboard";
function Dd() {
  return pe(this, null, function* () {
    return spe(Cd);
  });
}
function Pd(r) {
  return pe(this, null, function* () {
    return ipe(Cd, r);
  });
}
import { Utils as ape } from "@tldraw/core";
import * as ao from "idb-keyval";
import lpe from "zustand";
import dpe from "zustand/vanilla";
var Ti = class {
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
        return ao.set(this._idbId, this._state).catch((n) => console.error(n));
    });
    l(this, "applyPatch", (e, t) => {
      let n = this._state,
        o = ape.deepMerge(this._state, e),
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
      (this._state = St(e)),
      (this._snapshot = St(e)),
      (this.initialState = St(e)),
      (this.store = dpe(() => this._state)),
      (this.useStore = lpe(this.store)),
      (this.ready = new Promise((s) => {
        let a = "none";
        this._idbId
          ? ((a = "restored"),
            ao
              .get(this._idbId)
              .then((d) =>
                pe(this, null, function* () {
                  if (d) {
                    let i = d;
                    if (n) {
                      let u = yield ao.get(t + "_version");
                      u &&
                        u < n &&
                        ((i = o ? o(d, e, u) : e), (a = "migrated"));
                    }
                    yield ao.set(t + "_version", n || -1);
                    let c = this._state.appState.isEmptyCanvas;
                    (i = this.migrate(i)),
                      (this._state = St(i)),
                      (this._snapshot = St(i)),
                      (this._state.appState.isEmptyCanvas = c),
                      this.store.setState(this._state, !0);
                  } else yield ao.set(t + "_version", n || -1);
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
import { Utils as cpe } from "@tldraw/core";
import { Vec as Md } from "@tldraw/vec";
function Bd(r, e, t) {
  let { currentPageId: n } = r,
    o = e.map((m) => r.getShape(m)),
    s = o.map((m) => ({
      id: m.id,
      point: [...m.point],
      bounds: v.getBounds(m),
    })),
    a = cpe.getCommonBounds(s.map(({ bounds: m }) => m)),
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
    { before: u, after: p } = v.mutateShapes(
      r.state,
      e,
      (m) => (c[m.id] ? { point: c[m.id].next } : m),
      n,
      !1
    );
  return (
    o.forEach((m) => {
      if (m.type === "group") {
        let h = Md.sub(p[m.id].point, u[m.id].point);
        m.children.forEach((g) => {
          let f = r.getShape(g);
          (u[f.id] = { point: f.point }),
            (p[f.id] = { point: Md.add(f.point, h) });
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
function Ed(r, e) {
  return {
    id: "change_page",
    before: { appState: { currentPageId: r.currentPageId } },
    after: { appState: { currentPageId: e } },
  };
}
import { Utils as ppe } from "@tldraw/core";
function Rd(r, e) {
  var o;
  let t = r,
    n = new Set(e);
  for (; n.has(t); )
    t = ((o = /^.*(\d+)$/.exec(t)) == null ? void 0 : o[1])
      ? t.replace(/(\d+)(?=\D?)$/, (s) => (+s + 1).toString())
      : `${t} 1`;
  return t;
}
function Ad(r, e, t) {
  let n = { shapes: {}, bindings: {} },
    o = { shapes: {}, bindings: {} },
    s = [],
    a = new Set(),
    d = new Set();
  e
    .filter((c) => !v.getShape(r, c, t).isLocked)
    .forEach((c) => {
      a.add(c);
      let u = v.getShape(r, c, t);
      (n.shapes[c] = u),
        (o.shapes[c] = void 0),
        u.children !== void 0 &&
          u.children.forEach((p) => {
            a.add(p);
            let m = v.getShape(r, p, t);
            (n.shapes[p] = m), (o.shapes[p] = void 0);
          }),
        u.parentId !== t && s.push(v.getShape(r, u.parentId, t)),
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
          (n.shapes[c.id] = v.getShape(r, c.id, t))));
    });
  let i = v.getPage(r, t);
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
function Ld(r, e, t = ppe.uniqueId(), n = "Page") {
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
      name: Rd(
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
function yi(r, e, t = []) {
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
function Hd(r, e) {
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
var upe = (r, e) => {
  let t = S({}, r);
  return e.forEach((n) => (t[n] = void 0)), t;
};
function xi(r, e, t = r.currentPageId) {
  let {
      pageState: n,
      selectedIds: o,
      document: { assets: s },
    } = r,
    { before: a, after: d, assetsToRemove: i } = Ad(r.state, e, t),
    c = upe(s, i);
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
import { Utils as hpe } from "@tldraw/core";
import zd from "@tldraw/vec";
function Od(r, e, t) {
  let { currentPageId: n } = r,
    o = e.map((i) => r.getShape(i)),
    s = Object.fromEntries(mpe(o, t).map((i) => [i.id, i])),
    { before: a, after: d } = v.mutateShapes(
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
        let c = zd.sub(d[i.id].point, a[i.id].point);
        i.children.forEach((u) => {
          let p = r.getShape(u);
          (a[p.id] = { point: p.point }),
            (d[p.id] = { point: zd.add(p.point, c) });
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
function mpe(r, e) {
  let t = r.map((a) => {
      let d = v.getShapeUtil(a);
      return {
        id: a.id,
        point: [...a.point],
        bounds: d.getBounds(a),
        center: d.getCenter(a),
      };
    }),
    n = t.length,
    o = hpe.getCommonBounds(t.map(({ bounds: a }) => a)),
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
import { Utils as Zo } from "@tldraw/core";
function Fd(r, e) {
  let {
      currentPageId: t,
      pageState: { camera: n },
    } = r,
    o = r.document.pages[e],
    s = Zo.uniqueId(),
    a = Object.fromEntries([
      [o.id, s],
      ...Object.keys(o.shapes).map((u) => [u, Zo.uniqueId()]),
      ...Object.keys(o.bindings).map((u) => [u, Zo.uniqueId()]),
    ]),
    d = Object.fromEntries(
      Object.entries(o.shapes).map(([u, p]) => [
        a[u],
        w(S({}, Zo.deepClone(p)), { id: a[u], parentId: a[p.parentId] }),
      ])
    ),
    i = Object.fromEntries(
      Object.entries(o.bindings).map(([u, p]) => [
        a[u],
        w(S({}, Zo.deepClone(p)), {
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
import { Utils as Jn } from "@tldraw/core";
import { Vec as wi } from "@tldraw/vec";
function jd(r, e, t) {
  let { selectedIds: n, currentPageId: o, page: s, shapes: a } = r,
    d = { shapes: {}, bindings: {} },
    i = { shapes: {}, bindings: {} },
    c = {},
    u = e.map((h) => r.getShape(h)).filter((h) => !e.includes(h.parentId));
  u.forEach((h) => {
    let g = Jn.uniqueId();
    if (
      ((d.shapes[g] = void 0),
      (i.shapes[g] = w(S({}, Jn.deepClone(h)), {
        id: g,
        childIndex: v.getChildIndexAbove(r.state, h.id, o),
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
            T = Jn.uniqueId(),
            x = c[h.id];
          (d.shapes[T] = void 0),
            (i.shapes[T] = w(S({}, Jn.deepClone(f)), {
              id: T,
              parentId: x,
              childIndex: v.getChildIndexAbove(r.state, f.id, o),
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
          let g = Jn.uniqueId(),
            f = w(S({}, Jn.deepClone(h)), {
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
    let h = Jn.getCommonBounds(m.map((f) => v.getBounds(f))),
      g = Jn.getBoundsCenter(h);
    m.forEach((f) => {
      !f.point || (f.point = wi.sub(t, wi.sub(g, f.point)));
    });
  } else {
    let h = [16, 16];
    m.forEach((g) => {
      !g.point || (g.point = wi.add(g.point, h));
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
import { TLBoundsCorner as qr, Utils as Xo } from "@tldraw/core";
function ki(r, e, t) {
  let {
      selectedIds: n,
      currentPageId: o,
      page: { shapes: s },
    } = r,
    a = e.map((p) => v.getBounds(s[p])),
    d = e.length === 1 && s[e[0]].type === "group",
    i = Xo.getCommonBounds(a),
    { before: c, after: u } = v.mutateShapes(
      r.state,
      e,
      (p) => {
        let m = v.getBounds(p),
          h = p.parentId !== o;
        switch (t) {
          case "horizontal": {
            if (h && !d) {
              let f = v.getBounds(s[p.parentId]),
                x =
                  Xo.getRelativeTransformedBoundingBox(i, i, f, !0, !1).minX -
                  f.minX;
              return v
                .getShapeUtil(p)
                .transform(
                  p,
                  w(S({}, m), { minX: m.minX + x, maxX: m.maxX + x }),
                  {
                    type: qr.TopLeft,
                    scaleX: 1,
                    scaleY: 1,
                    initialShape: p,
                    transformOrigin: [0.5, 0.5],
                  }
                );
            }
            let g = Xo.getRelativeTransformedBoundingBox(i, i, m, !0, !1);
            return v.getShapeUtil(p).transform(p, g, {
              type: qr.TopLeft,
              scaleX: -1,
              scaleY: 1,
              initialShape: p,
              transformOrigin: [0.5, 0.5],
            });
          }
          case "vertical": {
            if (h && !d) {
              let f = v.getBounds(s[p.parentId]),
                x =
                  Xo.getRelativeTransformedBoundingBox(i, i, f, !1, !0).minY -
                  f.minY;
              return v
                .getShapeUtil(p)
                .transform(
                  p,
                  w(S({}, m), { minY: m.minY + x, maxY: m.maxY + x }),
                  {
                    type: qr.TopLeft,
                    scaleX: 1,
                    scaleY: 1,
                    initialShape: p,
                    transformOrigin: [0.5, 0.5],
                  }
                );
            }
            let g = Xo.getRelativeTransformedBoundingBox(i, i, m, !1, !0);
            return v.getShapeUtil(p).transform(p, g, {
              type: qr.TopLeft,
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
import { Utils as gpe } from "@tldraw/core";
function Gd(r, e, t, n) {
  var R, U;
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
    let k = r.getShape(L);
    if (!k.isLocked)
      if (k.children === void 0) c.push(k);
      else {
        let I = k.children.filter((q) => !r.getShape(q).isLocked);
        p.push(k),
          i.push(...I),
          c.push(...I.map((q) => r.getShape(q)).filter(Boolean));
      }
  }
  if (
    c.every((L) => L.parentId === c[0].parentId) &&
    c[0].parentId !== n &&
    ((R = r.getShape(c[0].parentId).children) == null ? void 0 : R.length) ===
      i.length
  )
    return;
  let m = v.flattenPage(r.state, n),
    h = Object.fromEntries(c.map((L) => [L.id, m.indexOf(L)])),
    g = c.sort((L, k) => h[L.id] - h[k.id]),
    f = n,
    T = (g.filter((L) => L.parentId === n)[0] || g[0]).childIndex,
    x = gpe.getCommonBounds(c.map((L) => v.getBounds(L)));
  for (
    o[t] = void 0,
      s[t] = v.getShapeUtil("group").create({
        id: t,
        childIndex: T,
        parentId: f,
        point: [x.minX, x.minY],
        size: [x.width, x.height],
        children: g.map((L) => L.id),
      }),
      g.forEach((L, k) => {
        if (L.parentId !== n) {
          let I = r.getShape(L.parentId);
          p.push(I);
        }
        (o[L.id] = w(S({}, o[L.id]), {
          parentId: L.parentId,
          childIndex: L.childIndex,
        })),
          (s[L.id] = w(S({}, s[L.id]), { parentId: t, childIndex: k + 1 }));
      });
    p.length > 0;

  ) {
    let L = p.pop();
    if (!L) break;
    let k = (
      ((U = o[L.id]) == null ? void 0 : U.children) || L.children
    ).filter((I) => I && !(i.includes(I) || u.includes(I)));
    k.length === 0
      ? ((o[L.id] = L),
        (s[L.id] = void 0),
        L.parentId !== n && (u.push(L.id), p.push(r.getShape(L.parentId))))
      : ((o[L.id] = w(S({}, o[L.id]), { children: L.children })),
        (s[L.id] = w(S({}, s[L.id]), { children: k })));
  }
  let { bindings: b } = r,
    y = new Set(u);
  return (
    b.forEach((L) => {
      for (let k of [L.toId, L.fromId])
        if (y.has(k)) {
          (a[L.id] = L), (d[L.id] = void 0);
          let I = r.getShape(k);
          I.handles &&
            Object.values(I.handles)
              .filter((q) => q.bindingId === L.id)
              .forEach((q) => {
                var de, le;
                (o[k] = w(S({}, o[k]), {
                  handles: w(S({}, (de = o[k]) == null ? void 0 : de.handles), {
                    [q.id]: { bindingId: L.id },
                  }),
                })),
                  u.includes(k) ||
                    (s[k] = w(S({}, s[k]), {
                      handles: w(
                        S({}, (le = s[k]) == null ? void 0 : le.handles),
                        { [q.id]: { bindingId: void 0 } }
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
import { Utils as fpe } from "@tldraw/core";
import { Vec as Vd } from "@tldraw/vec";
function $d(r, e, t, n, o) {
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
  let u = v.getTopChildIndex(r.state, o),
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
          children: R.children.filter((U) => U !== b.id),
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
          let U = r.getShape(b.fromId, n),
            k = Object.values(y.handles).find((q) => q.bindingId === b.id).id,
            I = d.after.shapes[U.id];
          I.handles = w(S({}, I.handles), {
            [k]: w(S({}, I.handles[k]), { bindingId: void 0 }),
          });
        } else {
          let U = r.getShape(b.fromId, n),
            L = Object.values(y.handles).find((k) => k.bindingId === b.id);
          (a.before.shapes[U.id] = {
            handles: { [L.id]: { bindingId: b.id } },
          }),
            (a.after.shapes[U.id] = {
              handles: { [L.id]: { bindingId: void 0 } },
            });
        }
      });
  let m = r.state.document.pageStates[o],
    h = fpe.getCommonBounds(p.map((b) => v.getBounds(b))),
    g = v.getCameraZoom(
      t.width < t.height
        ? (t.width - 128) / h.width
        : (t.height - 128) / h.height
    ),
    f = (t.width - h.width * g) / 2 / g,
    T = (t.height - h.height * g) / 2 / g,
    x = Vd.toFixed(Vd.add([-h.minX, -h.minY], [f, T]));
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
function Nd(r, e, t) {
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
function qo(r, e, t) {
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
              (a = v.mutateShapes(
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
              (a = v.mutateShapes(
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
              (a = v.mutateShapes(
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
              (a = v.mutateShapes(
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
function Wd(r, e, t) {
  let { page: n } = r;
  return {
    id: "rename_page",
    before: { document: { pages: { [e]: { name: n.name } } } },
    after: { document: { pages: { [e]: { name: t } } } },
  };
}
function vi(r, e, t) {
  let { currentPageId: n } = r,
    { before: o, after: s } = v.mutateShapes(
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
import { Utils as Ud } from "@tldraw/core";
var Spe = Math.PI * 2;
function Kd(r, e, t = -Spe / 4) {
  let { currentPageId: n } = r,
    o = {},
    s = {},
    a = e
      .flatMap((i) => {
        let c = r.getShape(i);
        return c.children ? c.children.map((u) => r.getShape(u)) : c;
      })
      .filter((i) => !i.isLocked),
    d = Ud.getBoundsCenter(Ud.getCommonBounds(a.map((i) => v.getBounds(i))));
  return (
    a.forEach((i) => {
      let c = v.getRotatedShapeMutation(i, v.getCenter(i), d, t);
      !c || ((o[i.id] = v.getBeforeShape(i, c)), (s[i.id] = c));
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
import { TLBoundsCorner as _d, Utils as bpe } from "@tldraw/core";
function Yd(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r,
    s = e.map((p) => r.getShape(p)),
    a = s.map((p) => v.getBounds(p)),
    d = bpe.getCommonBounds(a),
    i = e
      .flatMap((p) => {
        let m = r.getShape(p);
        return m.children ? m.children : m.id;
      })
      .filter((p) => !r.getShape(p).isLocked),
    { before: c, after: u } = v.mutateShapes(
      r.state,
      i,
      (p) => {
        let m = v.getBounds(p);
        switch (t) {
          case "horizontal": {
            let h = w(S({}, m), { minX: d.minX, maxX: d.maxX, width: d.width });
            return v.getShapeUtil(p).transformSingle(p, h, {
              type: _d.TopLeft,
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
            return v.getShapeUtil(p).transformSingle(p, h, {
              type: _d.TopLeft,
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
import { Vec as Ii } from "@tldraw/vec";
function Zd(r, e, t) {
  let { currentPageId: n, selectedIds: o } = r,
    s = e
      .flatMap((i) => v.getDocumentBranch(r.state, i, n))
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
            (d[i.id].point = Ii.toFixed(
              Ii.add(
                i.point,
                Ii.sub(
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
function Xd(r, e, t) {
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
function Jr(r, e, t) {
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
import { Vec as qd } from "@tldraw/vec";
function Jd(r, e, t) {
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
    i = v.mutateShapes(
      r.state,
      d,
      (u) => ({ point: qd.toFixed(qd.add(u.point, t)) }),
      n
    );
  return (
    (s.shapes = i.before),
    (a.shapes = i.after),
    v
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
function Qd(r, e, t, n) {
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
          T = (v.getChildIndexAbove(r.state, p.id, n) - g) / m.length;
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
                      .filter((U) => U.bindingId === b.id)
                      .forEach((U) => {
                        var L, k;
                        (s[y] = w(S({}, s[y]), {
                          handles: w(
                            S({}, (L = s[y]) == null ? void 0 : L.handles),
                            { [U.id]: { bindingId: b.id } }
                          ),
                        })),
                          h.includes(y) ||
                            (a[y] = w(S({}, a[y]), {
                              handles: w(
                                S({}, (k = a[y]) == null ? void 0 : k.handles),
                                { [U.id]: { bindingId: void 0 } }
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
function Ci(r, e, t) {
  let n = e.map((s) => s.id),
    o = v.mutateShapes(
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
function ec(r, e, t) {
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
import { Utils as Ut } from "@tldraw/core";
import { Vec as Do } from "@tldraw/vec";
function tc(r, e, t = {}) {
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
      h = v.getTopChildIndex(r.state, n),
      g = e.shapes
        .sort((x, b) => x.childIndex - b.childIndex)
        .map((x) => {
          let b = Ut.uniqueId();
          return (m[x.id] = b), w(S({}, Ut.deepClone(x)), { id: b });
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
          let b = Ut.uniqueId();
          m[x.id] = b;
          let y = m[x.toId],
            R = m[x.fromId];
          if (!y || !R) {
            if (R) {
              let I = u.shapes[R].handles;
              I &&
                Object.values(I).forEach((q) => {
                  q.bindingId === x.id && (q.bindingId = void 0);
                });
            }
            if (y) {
              let I = u.shapes[y].handles;
              I &&
                Object.values(I).forEach((q) => {
                  q.bindingId === x.id && (q.bindingId = void 0);
                });
            }
            return;
          }
          let U = u.shapes[R].handles;
          U &&
            Object.values(U).forEach((I) => {
              I.bindingId === x.id && (I.bindingId = b);
            }),
            u.shapes[y].handles &&
              Object.values(u.shapes[y].handles).forEach((I) => {
                I.bindingId === x.id && (I.bindingId = b);
              });
          let k = w(S({}, Ut.deepClone(x)), { id: b, toId: y, fromId: R });
          (i.bindings[k.id] = void 0), (u.bindings[k.id] = k);
        });
    let T = Object.values(u.shapes);
    if (T.length > 0)
      if (o) {
        let x = Ut.getCommonBounds(T.map((y) => v.getBounds(y))),
          b = Ut.getBoundsCenter(x);
        T.forEach((y) => {
          !y.point || (y.point = Do.sub(o, Do.sub(b, y.point)));
        });
      } else {
        let x = Ut.getCommonBounds(T.map(v.getBounds));
        if (
          !(Ut.boundsContain(r.viewport, x) || Ut.boundsCollide(r.viewport, x))
        ) {
          let b = Do.toFixed(r.getPagePoint(r.centerPoint)),
            y = Ut.centerBounds(x, b),
            R = Do.sub(Ut.getBoundsCenter(y), Ut.getBoundsCenter(x));
          T.forEach((U) => {
            U.point = Do.toFixed(Do.add(U.point, R));
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
var Po = {};
Tc(Po, {
  fileToBase64: () => Ei,
  fileToText: () => Ri,
  getImageSizeFromSrc: () => Ai,
  getVideoSizeFromSrc: () => Li,
  loadFileHandle: () => Di,
  migrate: () => Sn,
  openAssetsFromFileSystem: () => Bi,
  openFromFileSystem: () => Mi,
  saveFileHandle: () => Pi,
  saveToFileSystem: () => Qr,
});
function Sn(r, e) {
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
import {
  fileOpen as oc,
  fileSave as ype,
  supported as xpe,
} from "browser-fs-access";
import { get as wpe, set as kpe } from "idb-keyval";
var nc = { mode: "readwrite" },
  vpe = (r) =>
    pe(void 0, null, function* () {
      return (
        (yield r.queryPermission(nc)) === "granted" ||
        (yield r.requestPermission(nc)) === "granted"
      );
    });
function Di() {
  return pe(this, null, function* () {
    if (typeof Window == "undefined" || !("_location" in Window)) return;
    let r = yield wpe(`Tldraw_file_handle_${window.location.origin}`);
    return r || null;
  });
}
function Pi(r) {
  return pe(this, null, function* () {
    return kpe(`Tldraw_file_handle_${window.location.origin}`, r);
  });
}
function Qr(r, e, t) {
  return pe(this, null, function* () {
    let n = {
        name: r.name || "New Document",
        fileHandle: e != null ? e : null,
        document: r,
        assets: {},
      },
      o = JSON.stringify(n),
      s = new Blob([o], { type: "application/vnd.Tldraw+json" });
    if (e && !(yield vpe(e))) return null;
    let a = !xpe && (t == null ? void 0 : t.length) ? t : `${n.name}`,
      d = yield ype(
        s,
        {
          fileName: `${a}${Hr}`,
          description: "Tldraw File",
          extensions: [`${Hr}`],
        },
        e
      );
    return yield Pi(d), d;
  });
}
function Mi() {
  return pe(this, null, function* () {
    var o;
    let r = yield oc({
      description: "Tldraw File",
      extensions: [`${Hr}`],
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
    return yield Pi(n), { fileHandle: n, document: t.document };
  });
}
function Bi() {
  return pe(this, null, function* () {
    return oc({
      description: "Image or Video",
      extensions: [...zr, ...Or],
      multiple: !0,
    });
  });
}
function Ei(r) {
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
function Ri(r) {
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
function Ai(r) {
  return new Promise((e, t) => {
    let n = new Image();
    (n.onload = () => e([n.width, n.height])),
      (n.onerror = () => t(new Error("Could not get image size"))),
      (n.src = r);
  });
}
function Li(r) {
  return new Promise((e, t) => {
    let n = document.createElement("video");
    (n.onloadedmetadata = () => e([n.videoWidth, n.videoHeight])),
      (n.onerror = () => t(new Error("Could not get video size"))),
      (n.src = r);
  });
}
fr(Po, QDe);
import * as QDe from "browser-fs-access";
import { Utils as En } from "@tldraw/core";
import { Vec as Ge } from "@tldraw/vec";
var Ye = class {
  constructor(e) {
    this.app = e;
  }
};
var Hi = class extends Ye {
  constructor(e, t, n, o = !1) {
    super(e);
    l(this, "type", "arrow");
    l(this, "performanceMode");
    l(this, "status", "translatingHandle");
    l(this, "newStartBindingId", En.uniqueId());
    l(this, "draggedBindingId", En.uniqueId());
    l(this, "didBind", !1);
    l(this, "initialShape");
    l(this, "handleId");
    l(this, "bindableShapeIds");
    l(this, "initialBinding");
    l(this, "startBindingShapeId");
    l(this, "isCreate");
    l(this, "start", () => {});
    l(this, "update", () => {
      var U, L, k;
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
      let p = Ge.sub(t, Ge.add(c[u].point, e.point));
      if (n) {
        let I = o
            ? Ge.med(c.start.point, c.end.point)
            : c[u === "start" ? "end" : "start"].point,
          q = c[u].point,
          de = Ge.add(q, p),
          le = Ge.angle(I, de),
          Ae = Ge.rotWith(de, I, En.snapAngleToSegments(le, 24) - le);
        p = Ge.add(p, Ge.sub(Ae, de));
      }
      let m = Ge.add(c[u].point, p),
        h = {
          [u]: w(S({}, c[u]), {
            point: d ? Ge.snap(m, a) : Ge.toFixed(m),
            bindingId: void 0,
          }),
        },
        g = Bn["arrow"],
        f = (U = g.onHandleChange) == null ? void 0 : U.call(g, e, h);
      if (!f) return;
      let T = { shape: En.deepMerge(i, f), bindings: {} },
        x,
        b = T.shape.handles[this.handleId],
        y = T.shape.handles[this.handleId === "start" ? "end" : "start"];
      if (this.startBindingShapeId) {
        let I,
          q = this.app.page.shapes[this.startBindingShapeId],
          de = v.getShapeUtil(q),
          le = de.getCenter(q),
          Ae = T.shape.handles.start,
          Ce = T.shape.handles.end,
          De = Ge.add(Ae.point, T.shape.point);
        Ge.isEqual(De, le) && De[1]++;
        let Ve = le,
          $e = de.hitTestPoint(q, t),
          jt = Ge.uni(Ge.sub(De, Ve)),
          on = this.app.getBinding(this.newStartBindingId) !== void 0;
        !s &&
          !de.hitTestPoint(q, Ge.add(T.shape.point, Ce.point)) &&
          (I = this.findBindingPoint(
            i,
            q,
            "start",
            this.newStartBindingId,
            le,
            Ve,
            jt,
            $e
          )),
          I && !on
            ? ((this.didBind = !0),
              (T.bindings[this.newStartBindingId] = I),
              (T.shape = En.deepMerge(T.shape, {
                handles: { start: { bindingId: I.id } },
              })))
            : !I &&
              on &&
              ((this.didBind = !1),
              (T.bindings[this.newStartBindingId] = void 0),
              (T.shape = En.deepMerge(e, {
                handles: { start: { bindingId: void 0 } },
              })));
      }
      if (!s) {
        let I = Ge.add(y.point, T.shape.point),
          q = Ge.add(b.point, T.shape.point),
          de = Ge.uni(Ge.sub(q, I)),
          le = Ge.add(T.shape.point, T.shape.handles.start.point),
          Ae = Ge.add(T.shape.point, T.shape.handles.end.point),
          Ce = this.bindableShapeIds
            .map((De) => this.app.page.shapes[De])
            .sort((De, Ve) => Ve.childIndex - De.childIndex)
            .filter((De) => {
              if (De.isLocked) return !1;
              let Ve = v.getShapeUtil(De);
              return ![le, Ae].every(($e) => Ve.hitTestPoint(De, $e));
            });
        for (let De of Ce)
          if (
            ((x = this.findBindingPoint(
              i,
              De,
              this.handleId,
              this.draggedBindingId,
              q,
              I,
              de,
              o
            )),
            x)
          )
            break;
      }
      if (x)
        (this.didBind = !0),
          (T.bindings[this.draggedBindingId] = x),
          (T.shape = En.deepMerge(T.shape, {
            handles: { [this.handleId]: { bindingId: this.draggedBindingId } },
          }));
      else {
        this.didBind = this.didBind || !1;
        let I = i.handles[this.handleId].bindingId;
        I !== void 0 &&
          ((T.bindings[I] = void 0),
          (T.shape = En.deepMerge(T.shape, {
            handles: { [this.handleId]: { bindingId: void 0 } },
          })));
      }
      let R =
        (k = (L = v.getShapeUtil(T.shape)).onHandleChange) == null
          ? void 0
          : k.call(L, T.shape, T.shape.handles);
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
        s = v.onSessionComplete(this.app.page.shapes[e.id]),
        a =
          this.isCreate ||
          Ge.dist(s.handles.start.point, s.handles.end.point) < 4,
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
        a = v.onSessionComplete(this.app.page.shapes[e.id]),
        d = a.handles[s].bindingId,
        i = Ge.dist(a.handles.start.point, a.handles.end.point);
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
      let u = v.getShapeUtil(t.type).getBindingPoint(t, e, s, a, d, i);
      if (!!u)
        return {
          id: o,
          type: "arrow",
          fromId: e.id,
          toId: t.id,
          handleId: n,
          point: Ge.toFixed(u.point),
          distance: u.distance,
        };
    });
    var c, u, p;
    this.isCreate = o;
    let { currentPageId: s } = e.state.appState,
      a = e.state.document.pages[s];
    (this.handleId = n),
      (this.initialShape = St(a.shapes[t])),
      (this.bindableShapeIds = v
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
              !m.isLocked && En.pointInBounds(i, v.getShapeUtil(m).getBounds(m))
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
import { Utils as rc } from "@tldraw/core";
var zi = class extends Ye {
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
        d = rc.getBoundsFromPoints([s, a]),
        i = o.isCadSelectMode ? !n && s[0] < a[0] : n,
        c = new Set(),
        u = new Set(e);
      t.forEach(({ id: g, selectId: f }) => {
        let T = this.app.getShape(g);
        if (!c.has(f)) {
          let x = this.app.getShapeUtil(T);
          (i ? rc.boundsContain(d, x.getBounds(T)) : x.hitTestBounds(T, d))
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
import { Vec as tt } from "@tldraw/vec";
var Oi = class extends Ye {
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
        o = tt.sub(n, e);
      return (
        (this.topLeft = n),
        (this.shiftedPoints = this.points.map((a) =>
          tt.toFixed(tt.sub(a, o)).concat(a[2])
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
        let d = tt.sub(t, n);
        tt.len(d) > 3 / s &&
          (this.lockedDirection =
            Math.abs(d[0]) > Math.abs(d[1]) ? "horizontal" : "vertical");
      }
      if (o) {
        if (!this.isLocked && this.points.length > 2) {
          if (!this.lockedDirection) {
            let i = tt.sub(t, n);
            tt.len(i) > 3 / s &&
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
                    point: tt.toFixed(n.point),
                    points: n.points.map((o) => tt.toFixed(o)),
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
        n = tt.toFixed(tt.sub(e, t)).concat(e[2]);
      if (tt.isEqual(this.lastAdjustedPoint, n)) return;
      this.points.push(n), (this.lastAdjustedPoint = n);
      let o = [...this.topLeft],
        s = [Math.min(this.topLeft[0], e[0]), Math.min(this.topLeft[1], e[1])],
        a = tt.sub(s, t),
        d;
      return (
        o[0] !== s[0] || o[1] !== s[1]
          ? ((this.topLeft = s),
            (d = this.points.map((i) => tt.toFixed(tt.sub(i, a)).concat(i[2]))))
          : (d = [...this.shiftedPoints, tt.sub(n, a).concat(n[2])]),
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
      s = tt.sub(n, this.topLeft),
      a = this.initialShape.points.map((c) => tt.sub(c, s).concat(c[2]));
    this.isExtending = a.length > 0;
    let d = [];
    if (this.isExtending) {
      let c = a[a.length - 1];
      if (c) {
        d.push(c, c);
        let u = Math.floor(tt.dist(c, o) / 16);
        if (u > 1)
          for (let p = 0; p < u; p++) {
            let m = p / (u - 1);
            d.push(tt.lrp(c, o, m).concat(c[2]));
          }
        else d.push(o, o);
      }
    } else d.push(o);
    (this.points = [...a, ...d]),
      (this.shiftedPoints = this.points.map((c) => tt.add(c, s).concat(c[2]))),
      (this.lastAdjustedPoint = this.points[this.points.length - 1]);
  }
};
var Fi = class extends Ye {
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
import { Vec as Mo } from "@tldraw/vec";
var ji = class extends Ye {
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
        let c = Mo.sub(o, n);
        if (!this.isLocked && Mo.len(c) > 3 / s) {
          if (!this.lockedDirection) {
            let u = Mo.sub(o, n);
            this.lockedDirection =
              Math.abs(u[0]) > Math.abs(u[1]) ? "horizontal" : "vertical";
          }
          this.isLocked = !0;
        }
      } else this.isLocked && (this.isLocked = !1);
      this.isLocked &&
        (this.lockedDirection === "vertical" ? (o[0] = n[0]) : (o[1] = n[1]));
      let a = Mo.toFixed(Mo.add(n, Mo.sub(o, n))),
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
import { Utils as sc } from "@tldraw/core";
import { Vec as ic } from "@tldraw/vec";
var Gi = class extends Ye {
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
        d = sc.getBoundsCenter(this.bounds),
        i = ic.sub(o, d);
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
          let U = `${y}_${R}`;
          if ((x.add(U), this.grid[U] || (y === 0 && R === 0))) continue;
          let L = this.getClone(ic.add(this.shape.point, [y * c, R * u]), b);
          (s[L.id] = L), (this.grid[U] = L.id);
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
      let n = w(S({}, this.shape), { id: sc.uniqueId(), point: e });
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
import { Vec as Vi } from "@tldraw/vec";
var $i = class extends Ye {
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
        d = Vi.sub(n, s[a].point),
        i = {
          [a]: w(S({}, s[a]), {
            point: Vi.sub(Vi.add(s[a].point, d), o.point),
          }),
        },
        c =
          (p = (u = v.getShapeUtil(o)).onHandleChange) == null
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
                  [e.id]: v.onSessionComplete(
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
import { Utils as es } from "@tldraw/core";
import { Vec as ac } from "@tldraw/vec";
var Ni = class extends Ye {
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
        d = ac.angle(e, o) - this.initialAngle;
      return (
        s && (d = es.snapAngleToSegments(d, 24)),
        t.forEach(({ center: i, shape: c }) => {
          let { rotation: u = 0 } = c,
            p = 0;
          s && (p = es.snapAngleToSegments(u, 24) - u);
          let m = v.getRotatedShapeMutation(c, i, e, s ? d + p : d);
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
      s = v.getSelectedBranchSnapshot(e.state, t).filter((a) => !a.isLocked);
    if (s.length === 0) throw Error("No selected shapes!");
    if (e.rotationInfo.selectedIds === n.selectedIds) {
      if (e.rotationInfo.center === void 0)
        throw Error("We should have a center for rotation!");
      this.commonBoundsCenter = e.rotationInfo.center;
    } else
      (this.commonBoundsCenter = es.getBoundsCenter(
        es.getCommonBounds(s.map(v.getBounds))
      )),
        (e.rotationInfo.selectedIds = n.selectedIds),
        (e.rotationInfo.center = this.commonBoundsCenter);
    (this.initialShapes = s
      .filter((a) => a.children === void 0)
      .map((a) => ({
        shape: a,
        center: this.app.getShapeUtil(a).getCenter(a),
      }))),
      (this.initialAngle = ac.angle(this.commonBoundsCenter, o));
  }
};
import { TLBoundsCorner as Ipe, Utils as xt } from "@tldraw/core";
import { Vec as Bo } from "@tldraw/vec";
var Wi = class extends Ye {
  constructor(e, t = Ipe.BottomRight, n = !1) {
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
          .map((e) => xt.getBoundsWithCenter(v.getRotatedBounds(e))),
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
        b = m ? Bo.mul(Bo.sub(i, u), 2) : Bo.sub(i, u),
        y = xt.getTransformedBoundingBox(n, e, b, 0, p || o);
      m && (y = S(S({}, y), xt.centerBounds(y, xt.getBoundsCenter(n)))),
        T && (y = S(S({}, y), xt.snapBoundsToGrid(y, g)));
      let U = Bo.dist(i, c) - this.speed;
      this.speed = this.speed + U * (U > 1 ? 0.5 : 0.15);
      let L = [];
      if (
        ((f && !h) || (!f && h)) &&
        this.speed * a.zoom < 10 &&
        this.snapInfo.state === "ready"
      ) {
        let k = xt.getSnapPoints(
          xt.getBoundsWithCenter(y),
          this.snapInfo.bounds.filter(
            (I) => xt.boundsContain(d, I) || xt.boundsCollide(d, I)
          ),
          5 / a.zoom
        );
        k &&
          ((L = k.snapLines),
          (y = xt.getTransformedBoundingBox(
            n,
            e,
            Bo.sub(b, k.offset),
            0,
            p || o
          )));
      }
      return (
        (this.scaleX = y.scaleX),
        (this.scaleY = y.scaleY),
        t.forEach(
          ({ initialShape: k, initialShapeBounds: I, transformOrigin: q }) => {
            let de = xt.getRelativeTransformedBoundingBox(
              y,
              n,
              I,
              this.scaleX < 0,
              this.scaleY < 0
            );
            T && (de = xt.snapBoundsToGrid(de, g));
            let le = v.transform(this.app.getShape(k.id), de, {
              type: this.transformType,
              initialShape: k,
              scaleX: this.scaleX,
              scaleY: this.scaleY,
              transformOrigin: q,
            });
            x[k.id] = le;
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
        Bo.dist(this.app.originPoint, this.app.currentPoint) < 2
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
      (this.initialShapes = v
        .getSelectedBranchSnapshot(this.app.state, this.app.currentPageId)
        .filter((d) => !d.isLocked)),
      (this.initialShapeIds = this.initialShapes.map((d) => d.id)),
      (this.hasUnlockedShapes = this.initialShapes.length > 0),
      (this.isAllAspectRatioLocked = this.initialShapes.every(
        (d) => d.isAspectRatioLocked || v.getShapeUtil(d).isAspectRatioLocked
      ));
    let o = Object.fromEntries(
        this.initialShapes.map((d) => [d.id, v.getBounds(d)])
      ),
      s = Object.values(o);
    this.initialCommonBounds = xt.getCommonBounds(s);
    let a = xt.getBoundsFromPoints(s.map(xt.getBoundsCenter));
    this.shapeBounds = this.initialShapes.map((d) => {
      let i = o[d.id],
        c = xt.getBoundsCenter(i),
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
import { Utils as bn } from "@tldraw/core";
import { Vec as lo } from "@tldraw/vec";
var Ui = class extends Ye {
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
          .map((e) => bn.getBoundsWithCenter(v.getRotatedBounds(e))),
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
        x = g ? lo.mul(lo.sub(c, p), 2) : lo.sub(c, p),
        b = this.app.getShape(t.id),
        y = v.getShapeUtil(b),
        R = bn.getTransformedBoundingBox(
          n,
          e,
          x,
          b.rotation,
          h || b.isAspectRatioLocked || y.isAspectRatioLocked
        );
      g && (R = S(S({}, R), bn.centerBounds(R, bn.getBoundsCenter(n)))),
        s && (R = S(S({}, R), bn.snapBoundsToGrid(R, m)));
      let L = lo.dist(c, u) - this.speed;
      this.speed = this.speed + L * (L > 1 ? 0.5 : 0.15);
      let k = [];
      if (
        ((o && !f) || (!o && f)) &&
        !t.rotation &&
        this.speed * d.zoom < 10 &&
        this.snapInfo.state === "ready"
      ) {
        let q = bn.getSnapPoints(
          bn.getBoundsWithCenter(R),
          this.snapInfo.bounds.filter(
            (de) => bn.boundsContain(i, de) || bn.boundsCollide(i, de)
          ),
          5 / d.zoom
        );
        q &&
          ((k = q.snapLines),
          (R = bn.getTransformedBoundingBox(
            n,
            e,
            lo.sub(x, q.offset),
            b.rotation,
            h || b.isAspectRatioLocked || y.isAspectRatioLocked
          )));
      }
      let I = v.getShapeUtil(b).transformSingle(b, R, {
        initialShape: t,
        type: this.transformType,
        scaleX: R.scaleX,
        scaleY: R.scaleY,
        transformOrigin: [0.5, 0.5],
      });
      return (
        I && (T[b.id] = I),
        s && I && I.point && (I.point = lo.snap(I.point, m)),
        {
          appState: { snapLines: k },
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
        lo.dist(this.app.originPoint, this.app.currentPoint) < 2
      )
        return this.cancel();
      let n = {},
        o = {};
      return (
        (n[e.id] = this.isCreate ? void 0 : e),
        (o[e.id] = v.onSessionComplete(this.app.getShape(e.id))),
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
      (this.initialShapeBounds = v.getBounds(s)),
      (this.initialCommonBounds = v.getRotatedBounds(s)),
      (this.app.rotationInfo.selectedIds = [s.id]);
  }
};
import { Utils as Ft } from "@tldraw/core";
import { Vec as Ze } from "@tldraw/vec";
var Ki = class extends Ye {
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
          let u = Ft.getBoundsWithCenter(v.getRotatedBounds(c));
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
        U = Ze.sub(p, h),
        L = !1;
      this.isCreate ||
        (g && !this.isCloning
          ? ((this.isCloning = !0), (L = !0))
          : !g && this.isCloning && ((this.isCloning = !1), (L = !0))),
        f && (Math.abs(U[0]) < Math.abs(U[1]) ? (U[0] = 0) : (U[1] = 0));
      let I = Ze.dist(p, m) - this.speed;
      if (
        ((this.speed = this.speed + I * (I > 1 ? 0.5 : 0.15)),
        (this.snapLines = []),
        ((a && !T) || (!a && T)) &&
          this.speed * s.zoom < 10 &&
          this.snapInfo.state === "ready")
      ) {
        let q = Ft.getSnapPoints(
          Ft.getBoundsWithCenter(
            d
              ? Ft.snapBoundsToGrid(Ft.translateBounds(n, U), x)
              : Ft.translateBounds(n, U)
          ),
          (this.isCloning ? this.snapInfo.bounds : this.snapInfo.others).filter(
            (de) => Ft.boundsContain(c, de) || Ft.boundsCollide(c, de)
          ),
          5 / s.zoom
        );
        q && ((this.snapLines = q.snapLines), (U = Ze.sub(U, q.offset)));
      }
      if (((this.prev = U), this.isCloning))
        if (L) {
          if (
            (this.cloneInfo.state === "empty" && this.createCloneInfo(),
            this.cloneInfo.state === "empty")
          )
            throw Error;
          let { clones: q, clonedBindings: de } = this.cloneInfo;
          (this.isCloning = !0),
            o.forEach((le) => (b[le.id] = le)),
            t.forEach((le) => (y[le.id] = { point: le.point })),
            q.forEach((le) => {
              var Ae;
              if (
                ((y[le.id] = S({}, le)),
                le.parentId !== i && !u.includes(le.parentId))
              ) {
                let Ce =
                  ((Ae = y[le.parentId]) == null ? void 0 : Ae.children) ||
                  e[le.parentId];
                Ce.includes(le.id) ||
                  (y[le.parentId] = w(S({}, y[le.parentId]), {
                    children: [...Ce, le.id],
                  }));
              }
            });
          for (let le of de) b[le.id] = le;
          (R.selectedIds = q.map((le) => le.id)),
            q.forEach((le) => {
              y[le.id] = w(S({}, le), {
                point: d
                  ? Ze.snap(Ze.toFixed(Ze.add(le.point, U)), x)
                  : Ze.toFixed(Ze.add(le.point, U)),
              });
            });
        } else {
          if (this.cloneInfo.state === "empty") throw Error;
          let { clones: q } = this.cloneInfo;
          q.forEach((de) => {
            y[de.id] = {
              point: d
                ? Ze.snap(Ze.toFixed(Ze.add(de.point, U)), x)
                : Ze.toFixed(Ze.add(de.point, U)),
            };
          });
        }
      else if (L) {
        if (this.cloneInfo.state === "empty") throw Error;
        let { clones: q, clonedBindings: de } = this.cloneInfo;
        (this.isCloning = !1),
          o.forEach((le) => (b[le.id] = void 0)),
          q.forEach((le) => {
            le.parentId !== i &&
              (y[le.parentId] = w(S({}, y[le.parentId]), {
                children: e[le.parentId],
              }));
          }),
          q.forEach((le) => (y[le.id] = void 0)),
          t.forEach((le) => {
            y[le.id] = {
              point: d
                ? Ze.snap(Ze.toFixed(Ze.add(le.point, U)), x)
                : Ze.toFixed(Ze.add(le.point, U)),
            };
          });
        for (let le of de) b[le.id] = void 0;
        R.selectedIds = t.map((le) => le.id);
      } else
        t.forEach((q) => {
          y[q.id] = {
            point: d
              ? Ze.snap(Ze.toFixed(Ze.add(q.point, U)), x)
              : Ze.toFixed(Ze.add(q.point, U)),
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
        let m = Ft.uniqueId();
        (t[m] = t[p.id]), (a[p.id] = m);
        let h = w(S({}, Ft.deepClone(p)), {
          id: m,
          parentId: p.parentId,
          childIndex: v.getChildIndexAbove(this.app.state, p.id, o),
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
            let m = Ft.uniqueId(),
              h = w(S({}, Ft.deepClone(p)), {
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
    let d = (n ? v.getLinkedShapeIds(this.app.state, o, n, !1) : s)
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
      (this.initialCommonBounds = Ft.getCommonBounds(
        this.initialShapes.map(v.getRotatedBounds)
      )),
      (this.app.rotationInfo.selectedIds = [...this.app.selectedIds]);
  }
};
var Cpe = {
    ["arrow"]: Hi,
    ["brush"]: zi,
    ["draw"]: Oi,
    ["erase"]: ji,
    ["handle"]: $i,
    ["rotate"]: Ni,
    ["transform"]: Wi,
    ["transformSingle"]: Ui,
    ["translate"]: Ki,
    ["grid"]: Gi,
    ["edit"]: Fi,
  },
  lc = (r) => Cpe[r];
import { Utils as Ppe } from "@tldraw/core";
import Mpe from "@tldraw/vec";
import { Utils as Dpe } from "@tldraw/core";
var nt = class extends as {
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
      Dpe.isMobileSafari() && this.app.undoSelect(), this.setStatus("idle");
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
var er = class extends nt {
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
        d = Ppe.uniqueId(),
        i = Ko.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? Mpe.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("arrow", i.id, "end", !0),
        this.setStatus("creating");
    });
  }
};
import { Utils as Bpe } from "@tldraw/core";
var tr = class extends nt {
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
          d = Bpe.uniqueId(),
          i = gi.create({
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
import { TLBoundsCorner as Epe, Utils as Rpe } from "@tldraw/core";
import Ape from "@tldraw/vec";
var nr = class extends nt {
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
        d = Rpe.uniqueId(),
        i = mi.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? Ape.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("transformSingle", i.id, Epe.BottomRight, !0),
        this.setStatus("creating");
    });
  }
};
import Lpe from "@tldraw/vec";
var or = class extends nt {
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
            Lpe.dist(e.origin, e.point) > 3 &&
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
import { Utils as Hpe } from "@tldraw/core";
import zpe from "@tldraw/vec";
var rr = class extends nt {
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
        d = Hpe.uniqueId(),
        i = Ko.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? zpe.snap(e, t) : e,
          decorations: { start: void 0, end: void 0 },
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("arrow", i.id, "end", !0),
        this.setStatus("creating");
    });
  }
};
import { TLBoundsCorner as Ope, Utils as Fpe } from "@tldraw/core";
import jpe from "@tldraw/vec";
var sr = class extends nt {
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
        d = Fpe.uniqueId(),
        i = ui.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? jpe.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("transformSingle", i.id, Ope.BottomRight, !0),
        this.setStatus("creating");
    });
  }
};
import { Utils as ir } from "@tldraw/core";
import Rn from "@tldraw/vec";
var ar = class extends nt {
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
        n = ir.expandBounds(ir.getCommonBounds(t.map(v.getBounds)), 16),
        o = ir.getBoundsCenter(n),
        s = [n.width, n.height],
        a = [
          o[0] + s[0] * Math.floor((e[0] + s[0] / 2 - o[0]) / s[0]),
          o[1] + s[1] * Math.floor((e[1] + s[1] / 2 - o[1]) / s[1]),
        ],
        d = ir.centerBounds(n, a);
      this.app.shapes.some((c) => v.getShapeUtil(c).hitTestBounds(c, d)) ||
        this.app.duplicate(this.app.selectedIds, a);
    });
    l(this, "getShapeClone", (e, t) => {
      let n = this.app.getShape(e),
        o = v.getShapeUtil(n);
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
          let u = Rn.add(d, [s.width / 2, s.height / 2]),
            p = Rn.rotWith(u, a, n.rotation || 0);
          d = Rn.sub(p, [s.width / 2, s.height / 2]);
        }
        let i = ir.uniqueId(),
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
          : Rn.dist(e, t) > 3 &&
            (this.app.startSession("brush"), this.setStatus("brushing"));
        return;
      }
      switch (this.status) {
        case "pointingBoundsHandle": {
          if (!this.pointedBoundsHandle)
            throw Error("No pointed bounds handle");
          if (Rn.dist(e, t) > 3) {
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
                v.getDocumentBranch(this.app.state, o, this.app.currentPageId)
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
          Rn.dist(e, t) > 3 &&
            (this.app.startSession("brush"), this.setStatus("brushing"));
          break;
        }
        case "pointingClone": {
          Rn.dist(e, t) > 3 &&
            (this.setStatus("translatingClone"),
            this.app.startSession("translate"),
            this.app.updateSession());
          break;
        }
        case "pointingBounds": {
          Rn.dist(e, t) > 3 &&
            (this.setStatus("translating"),
            this.app.startSession("translate"),
            this.app.updateSession());
          break;
        }
        case "pointingHandle": {
          if (!this.pointedHandleId) throw Error("No pointed handle");
          if (Rn.dist(e, t) > 3) {
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
      v.getShapeUtil(t.type).canEdit &&
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
            ...v.getLinkedShapeIds(
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
        v.getShapeUtil(n.type).canEdit &&
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
import { Utils as Gpe } from "@tldraw/core";
import dc from "@tldraw/vec";
var lr = class extends nt {
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
            d = Gpe.uniqueId();
          this.shapeId = d;
          let i = _r.create({
              id: d,
              parentId: o,
              childIndex: a,
              point: n ? dc.snap(e, t) : e,
              style: S({}, s),
            }),
            c = _r.getBounds(i);
          (i.point = dc.sub(i.point, [c.width / 2, c.height / 2])),
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
import Vpe from "@tldraw/vec";
var dr = class extends nt {
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
        this.app.createTextShapeAtPoint(n ? Vpe.snap(e, t) : e, void 0, !0),
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
import { TLBoundsCorner as $pe, Utils as Npe } from "@tldraw/core";
import Wpe from "@tldraw/vec";
var cr = class extends nt {
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
        d = Npe.uniqueId(),
        i = hi.create({
          id: d,
          parentId: o,
          childIndex: a,
          point: n ? Wpe.snap(e, t) : e,
          style: S({}, s),
        });
      this.app.patchCreate([i]),
        this.app.startSession("transformSingle", i.id, $pe.BottomRight, !0),
        this.setStatus("creating");
    });
  }
};
var _i = Dt.uniqueId(),
  lt = class extends Ti {
    constructor(e, t = {}) {
      super(lt.defaultState, e, lt.version, (n, o, s) =>
        Sn(
          w(S({}, o), {
            document: w(S(S({}, o.document), n.document), { version: s }),
          }),
          lt.version
        )
      );
      l(this, "callbacks", {});
      l(this, "tools", {
        select: new ar(this),
        erase: new or(this),
        ["text"]: new dr(this),
        ["draw"]: new tr(this),
        ["ellipse"]: new nr(this),
        ["rectangle"]: new sr(this),
        ["triangle"]: new cr(this),
        ["line"]: new rr(this),
        ["arrow"]: new er(this),
        ["sticky"]: new lr(this),
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
        Dt.getBoundsFromPoints([
          [0, 0],
          [100, 100],
        ])
      );
      l(
        this,
        "rendererBounds",
        Dt.getBoundsFromPoints([
          [0, 0],
          [100, 100],
        ])
      );
      l(this, "selectHistory", { stack: [[]], pointer: 0 });
      l(this, "clipboard");
      l(this, "rotationInfo", { selectedIds: [], center: [0, 0] });
      l(this, "migrate", (e) => Sn(e, lt.version));
      l(this, "onReady", () => {
        var e, t;
        this.loadDocument(this.document),
          Di().then((n) => {
            this.fileSystemHandle = n;
          });
        try {
          this.patchState(
            w(S({}, Sn(this.state, lt.version)), {
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
              w(S({}, lt.defaultState), {
                appState: w(S({}, lt.defaultState.appState), {
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
              let h = v.getRelatedBindings(n, Object.keys(u), d),
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
                let b = v.updateArrowBindings(i, x);
                if ((g.add(x), b)) {
                  let y = S(S({}, x), b);
                  i.shapes[x.id] = y;
                }
              }),
                m.forEach((f) => {
                  if (!f) throw Error("no group!");
                  let T = f.children.filter((b) => i.shapes[b] !== void 0),
                    x = Dt.getCommonBounds(
                      T.map((b) => i.shapes[b])
                        .filter(Boolean)
                        .map((b) => v.getRotatedBounds(b))
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
                (v.warn(`Could not find the binding of ${d}`),
                delete p.bindingId),
              p.editingId &&
                !i.shapes[p.editingId] &&
                (v.warn("Could not find the editing shape!"),
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
              .filter((k) => !("text" in k))
              .forEach((k) => {
                let I = e[k.id];
                if (!!I) {
                  if (!(k.type === "arrow" || f.has(k.id))) {
                    e[k.id] = I;
                    return;
                  }
                  "decorations" in I &&
                    "decorations" in k &&
                    (e[k.id] = w(S({}, k), { decorations: I.decorations })),
                    (k.style = I.style);
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
                      selectedIds: u.filter((k) => T[k] !== void 0),
                      hoveredId: d ? (T[d] === void 0 ? void 0 : d) : void 0,
                      editingId: i,
                      bindingId: c ? (x[c] === void 0 ? void 0 : c) : void 0,
                    }),
                  }),
                }),
              }),
              R = y.document.pages[o],
              U = v.getRelatedBindings(y, Object.keys(T), o),
              L = new Set();
            return (
              U.forEach((k) => {
                if (!R.bindings[k.id]) return;
                let I = R.shapes[k.fromId];
                if (L.has(I)) return;
                let q = v.updateArrowBindings(R, I);
                if ((L.add(I), q)) {
                  let de = S(S({}, I), q);
                  R.shapes[I.id] = de;
                }
              }),
              Object.values(T).forEach((k) => {
                if (k.type !== "group") return;
                let I = k.children.filter((de) => R.shapes[de] !== void 0),
                  q = Dt.getCommonBounds(
                    I.map((de) => R.shapes[de])
                      .filter(Boolean)
                      .map((de) => v.getRotatedBounds(de))
                  );
                R.shapes[k.id] = w(S({}, k), {
                  point: [q.minX, q.minY],
                  size: [q.width, q.height],
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
          [s, a] = ve.sub(ve.div([0, 0], t), e),
          [d, i] = ve.sub(ve.div([n, o], t), e);
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
        let e = lt.defaultDocument;
        return (
          (e.pages.page.name = "Page 1"),
          this.resetHistory()
            .clearSelectHistory()
            .loadDocument(lt.defaultDocument)
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
              w(S({}, Sn(w(S({}, this.state), { document: e }), lt.version)), {
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
                Sn(
                  w(S({}, this.state), {
                    document: w(S({}, e), { pageStates: t }),
                  }),
                  lt.version
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
          Sn(o, o.document.version || 0),
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
              userId: _i,
              users: {
                [_i]: {
                  id: _i,
                  color: Vs[Math.floor(Math.random() * Vs.length)],
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
        let t = w(S({}, lt.defaultState), {
          settings: S({}, this.state.settings),
          document: e,
          appState: w(S(S({}, lt.defaultState.appState), this.state.appState), {
            currentPageId: Object.keys(e.pages)[0],
            disableAssets: this.disableAssets,
          }),
        });
        this.replaceState(Sn(t, lt.version), "loaded_document");
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
        pe(this, null, function* () {
          if (this.readOnly) return;
          let e = yield Qr(
            Sn(this.state, lt.version).document,
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
        pe(this, null, function* () {
          try {
            let t = yield Qr(this.document, null, e);
            (this.fileSystemHandle = t), this.persist({}), (this.isDirty = !1);
          } catch (t) {
            console.error(t.message);
          }
          return this;
        })
      );
      l(this, "openProject", () =>
        pe(this, null, function* () {
          if (!!this.isLocal)
            try {
              let e = yield Mi();
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
        pe(this, null, function* () {
          if (!this.disableAssets)
            try {
              let e = yield Bi();
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
        v.getPage(this.state, e || this.currentPageId)
      );
      l(this, "getShapes", (e = this.currentPageId) =>
        v.getShapes(this.state, e || this.currentPageId)
      );
      l(this, "getBindings", (e = this.currentPageId) =>
        v.getBindings(this.state, e || this.currentPageId)
      );
      l(this, "getShape", (e, t = this.currentPageId) =>
        v.getShape(this.state, e, t)
      );
      l(this, "getShapeBounds", (e, t = this.currentPageId) =>
        v.getBounds(this.getShape(e, t))
      );
      l(this, "getBinding", (e, t = this.currentPageId) =>
        v.getBinding(this.state, e, t)
      );
      l(this, "getPageState", (e = this.currentPageId) =>
        v.getPageState(this.state, e || this.currentPageId)
      );
      l(this, "getPagePoint", (e, t = this.currentPageId) => {
        let { camera: n } = this.getPageState(t);
        return ve.sub(ve.div(e, n.zoom), n.point);
      });
      l(this, "createPage", (e, t) => {
        if (this.readOnly) return this;
        let { width: n, height: o } = this.rendererBounds;
        return this.setState(Ld(this, [-n / 2, -o / 2], e, t));
      });
      l(this, "changePage", (e) => this.setState(Ed(this, e)));
      l(this, "movePage", (e, t) =>
        this.readOnly ? this : this.setState(Nd(this, e, t))
      );
      l(this, "renamePage", (e, t) =>
        this.readOnly ? this : this.setState(Wd(this, e, t))
      );
      l(this, "duplicatePage", (e) =>
        this.readOnly ? this : this.setState(Fd(this, e))
      );
      l(this, "deletePage", (e) =>
        this.readOnly
          ? this
          : Object.values(this.document.pages).length <= 1
          ? this
          : this.setState(Hd(this, e || this.currentPageId))
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
          Pd(o),
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
        pe(this, null, function* () {
          var c, u;
          if (this.readOnly) return;
          let n = [],
            o = [],
            s,
            a = (p) =>
              pe(this, null, function* () {
                let m = document.createElement("div");
                m.innerHTML = p;
                let h = m.firstChild;
                h.style.setProperty("background-color", "transparent");
                let g = yield v.getImageForSvg(h, "svg", {
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
                v.getShapeUtil("text").getShape({
                  id: Dt.uniqueId(),
                  type: "text",
                  parentId: this.appState.currentPageId,
                  text: v.normalizeText(p.trim()),
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
                pe(this, null, function* () {
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
              m = ve.add(p, [0, 0]);
            return (
              o.forEach((h, g) => {
                let f = v.getBounds(h);
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
              : Dd().then((p) => {
                  p && i(p);
                }),
            this
          );
        })
      );
      l(this, "getSvg", (...n) =>
        pe(
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
                let { fonts: h } = yield fetch(lt.assetSrc, {
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
                v.warn("Could not find tldraw-assets.json file.");
              }
            else
              a.textContent =
                "@import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Source+Code+Pro&family=Source+Sans+Pro&family=Crimson+Pro&display=block');";
            s.append(a), o.append(s);
            let d = e
                .map((h) => this.getShape(h, this.currentPageId))
                .sort((h, g) => h.childIndex - g.childIndex),
              i = Dt.getCommonBounds(d.map(v.getRotatedBounds)),
              c = (h) => {
                let g = v.getShapeUtil(h),
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
        pe(
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
            let o = v.getSvgString(n, 1);
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
            .map(St),
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
            .map(St),
          a = [
            ...new Set(
              n
                .map((d) => {
                  if (!!d.assetId) return this.document.assets[d.assetId];
                })
                .filter(Boolean)
                .map(St)
            ),
          ];
        return { shapes: n, bindings: s, assets: a };
      });
      l(this, "copyJson", (e = this.selectedIds) => {
        let t = this.getContent(e);
        return t && v.copyStringToClipboard(JSON.stringify(t)), this;
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
        this.setState(tc(this, e, t), "insert_content")
      );
      l(this, "getImage", (...n) =>
        pe(this, [...n], function* (e = "png", t = {}) {
          let {
              ids: o = this.selectedIds.length
                ? this.selectedIds
                : Object.keys(this.page.shapes),
            } = t,
            s = yield this.getSvg(o, { includeFonts: e !== "svg" });
          if (!s) return;
          if (e === "svg") {
            let d = v.getSvgString(s, 1);
            return new Blob([d], { type: "image/svg+xml" });
          }
          let a = yield v.getImageForSvg(s, e, t);
          if (!!a) return a;
        })
      );
      l(this, "copyImage", (...n) =>
        pe(this, [...n], function* (e = "png", t = {}) {
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
        pe(this, [...n], function* (e = "png", t = {}) {
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
        return this.setCamera(ve.toFixed(ve.sub(t.point, e)), t.zoom, "panned");
      });
      l(this, "pinchZoom", (e, t, n) => {
        let { camera: o } = this.pageState,
          s = ve.sub(o.point, ve.div(t, o.zoom)),
          a = n,
          d = ve.sub(ve.div(e, o.zoom), s),
          i = ve.sub(ve.div(e, a), s);
        return this.setCamera(
          ve.toFixed(ve.add(s, ve.sub(i, d))),
          a,
          "pinch_zoomed"
        );
      });
      l(this, "zoomTo", (e, t = this.centerPoint) => {
        let { zoom: n, point: o } = this.camera,
          s = ve.sub(ve.div(t, n), o),
          a = ve.sub(ve.div(t, e), o);
        return this.setCamera(
          ve.toFixed(ve.add(o, ve.sub(a, s))),
          e,
          "zoomed_camera"
        );
      });
      l(this, "zoomIn", () => {
        let e = Math.round((this.camera.zoom * 100) / 25),
          t = v.getCameraZoom((e + 1) * 0.25);
        return this.zoomTo(t);
      });
      l(this, "zoomOut", () => {
        let e = Math.round((this.camera.zoom * 100) / 25),
          t = v.getCameraZoom((e - 1) * 0.25);
        return this.zoomTo(t);
      });
      l(this, "zoomToFit", () => {
        let {
          shapes: e,
          pageState: { camera: t },
        } = this;
        if (e.length === 0) return this;
        let { rendererBounds: n } = this,
          o = Dt.getCommonBounds(e.map(v.getBounds)),
          s = v.getCameraZoom(
            Math.min((n.width - 128) / o.width, (n.height - 128) / o.height)
          );
        s = t.zoom === s || t.zoom < 1 ? Math.min(1, s) : s;
        let a = (n.width - o.width * s) / 2 / s,
          d = (n.height - o.height * s) / 2 / s;
        return this.setCamera(
          ve.toFixed(ve.sub([a, d], [o.minX, o.minY])),
          s,
          "zoomed_to_fit"
        );
      });
      l(this, "zoomToSelection", () => {
        if (this.selectedIds.length === 0) return this;
        let { rendererBounds: e } = this,
          t = v.getSelectedBounds(this.state),
          n = v.getCameraZoom(
            Math.min((e.width - 128) / t.width, (e.height - 128) / t.height)
          );
        n = this.camera.zoom === n || this.camera.zoom < 1 ? Math.min(1, n) : n;
        let o = (e.width - t.width * n) / 2 / n,
          s = (e.height - t.height * n) / 2 / n;
        return this.setCamera(
          ve.toFixed(ve.sub([o, s], [t.minX, t.minY])),
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
          s = Dt.getCommonBounds(e.map(v.getBounds)),
          a = (n.width - s.width * o) / 2 / o,
          d = (n.height - s.height * o) / 2 / o;
        return this.setCamera(
          ve.toFixed(ve.sub([a, d], [s.minX, s.minY])),
          this.camera.zoom,
          "zoomed_to_content"
        );
      });
      l(this, "resetZoom", () => this.zoomTo(1));
      l(
        this,
        "zoomBy",
        Dt.throttle((e, t) => {
          let { zoom: n } = this.camera,
            o = v.getCameraZoom(n - e * n);
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
          (v.warn(`Already in a session! (${this.session.constructor.name})`),
          this.cancelSession());
        let n = lc(e);
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
                v
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
          : this.setState(Ci(this, n, this.currentPageId), "updated_shapes");
      });
      l(this, "create", (e = [], t = []) =>
        e.length === 0 ? this : this.setState(yi(this, e, t))
      );
      l(this, "patchCreate", (e = [], t = []) =>
        e.length === 0 ? this : this.patchState(yi(this, e, t).after)
      );
      l(this, "delete", (e = this.selectedIds) => {
        var n, o;
        if (e.length === 0) return this;
        if (this.session) return this;
        let t = xi(this, e);
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
        this.setState(Zd(this, t, e))
      );
      l(this, "align", (e, t = this.selectedIds) =>
        t.length < 2 ? this : this.setState(Bd(this, t, e))
      );
      l(this, "distribute", (e, t = this.selectedIds) =>
        t.length < 3 ? this : this.setState(Od(this, t, e))
      );
      l(this, "stretch", (e, t = this.selectedIds) =>
        t.length < 2 ? this : this.setState(Yd(this, t, e))
      );
      l(this, "flipHorizontal", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(ki(this, e, "horizontal"))
      );
      l(this, "flipVertical", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(ki(this, e, "vertical"))
      );
      l(
        this,
        "moveToPage",
        (e, t = this.currentPageId, n = this.selectedIds) => {
          if (n.length === 0) return this;
          let { rendererBounds: o } = this;
          return this.setState($d(this, n, o, t, e)), this;
        }
      );
      l(this, "moveToBack", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(qo(this, e, "toBack"))
      );
      l(this, "moveBackward", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(qo(this, e, "backward"))
      );
      l(this, "moveForward", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(qo(this, e, "forward"))
      );
      l(this, "moveToFront", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(qo(this, e, "toFront"))
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
        return this.setState(Jd(this, n, ve.mul(e, o)));
      });
      l(this, "duplicate", (e = this.selectedIds, t) =>
        this.readOnly
          ? this
          : e.length === 0
          ? this
          : this.setState(jd(this, e, t))
      );
      l(this, "resetBounds", (e = this.selectedIds) => {
        let t = vi(this, e, this.currentPageId);
        return this.setState(vi(this, e, this.currentPageId), t.id);
      });
      l(this, "toggleHidden", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Jr(this, e, "isHidden"))
      );
      l(this, "toggleLocked", (e = this.selectedIds) =>
        e.length === 0 ? this : this.setState(Jr(this, e, "isLocked"))
      );
      l(this, "toggleAspectRatioLocked", (e = this.selectedIds) =>
        e.length === 0
          ? this
          : this.setState(Jr(this, e, "isAspectRatioLocked"))
      );
      l(this, "toggleDecoration", (e, t = this.selectedIds) =>
        t.length === 0 || !(e === "start" || e === "end")
          ? this
          : this.setState(Xd(this, t, e))
      );
      l(this, "setShapeProps", (e, t = this.selectedIds) =>
        this.setState(ec(this, t, e))
      );
      l(this, "rotate", (e = Math.PI * -0.5, t = this.selectedIds) => {
        if (t.length === 0) return this;
        let n = Kd(this, t, e);
        return n ? this.setState(n) : this;
      });
      l(
        this,
        "group",
        (e = this.selectedIds, t = Dt.uniqueId(), n = this.currentPageId) => {
          if (this.readOnly) return this;
          if (e.length === 1 && this.getShape(e[0], n).type === "group")
            return this.ungroup(e, n);
          if (e.length < 2) return this;
          let o = Gd(this, e, t, n);
          return o ? this.setState(o) : this;
        }
      );
      l(this, "ungroup", (e = this.selectedIds, t = this.currentPageId) => {
        if (this.readOnly) return this;
        let n = e
          .map((s) => this.getShape(s, t))
          .filter((s) => s.type === "group");
        if (n.length === 0) return this;
        let o = Qd(this, e, n, t);
        return o ? this.setState(o) : this;
      });
      l(this, "cancel", () => {
        var e, t;
        return (t = (e = this.currentTool).onCancel) == null || t.call(e), this;
      });
      l(this, "addMediaFromFiles", (n, ...o) =>
        pe(this, [n, ...o], function* (e, t = this.centerPoint) {
          this.setIsLoading(!0);
          let s = [],
            a = this.getPagePoint(t);
          for (let d of e) {
            let i = Dt.uniqueId(),
              c = d.name.match(/\.[0-9a-z]+$/i);
            if (!c) throw Error("No extension");
            let u = zr.includes(c[0].toLowerCase()),
              p = Or.includes(c[0].toLowerCase());
            if (!(u || p)) throw Error("Wrong extension");
            let m = u ? "image" : "video",
              h = u ? "image" : "video",
              g;
            try {
              if (this.callbacks.onAssetCreate) {
                let f = yield this.callbacks.onAssetCreate(this, d, i);
                if (!f) throw Error("Asset creation callback returned false");
                g = f;
              } else g = yield Ei(d);
              if (typeof g == "string") {
                let f = [0, 0];
                if (u) {
                  if (c[0] == ".svg") {
                    let b,
                      y = yield Ri(d),
                      R = this.getViewboxFromSVG(y);
                    R &&
                      ((b = R.split(" ")),
                      (f[0] = parseFloat(b[2])),
                      (f[1] = parseFloat(b[3])));
                  }
                  ve.isEqual(f, [0, 0]) && (f = yield Ai(g));
                } else f = yield Li(g);
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
            let d = ve.add(a, [0, 0]);
            s.forEach((c, u) => {
              let p = v.getBounds(c);
              u === 0 && ((d[0] -= p.width / 2), (d[1] -= p.height / 2)),
                (c.point = [...d]),
                (d[0] += p.width);
            });
            let i = Dt.getCommonBounds(s.map(v.getBounds));
            this.createShapes(...s),
              Dt.boundsContain(this.viewport, i) ||
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
        gl(),
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
        pe(this, null, function* () {
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
            n.call(this, w(S({}, e), { delta: ve.neg(e.delta) }), t);
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
            d = v.getShapeUtil(n),
            i = d.getCenter(n),
            c = d.getCenter(w(S({}, n), { size: a.size })),
            u = ve.sub(c, i);
          this.updateShapes({
            id: n.id,
            point: ve.sub(n.point, u),
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
          o = Ci(this, [n], this.currentPageId).after;
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
                ? this.patchState(xi(this, [e]).after, "delete_empty_text")
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
      l(this, "getShapeUtil", v.getShapeUtil);
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
        i = Bn["text"],
        c = i.create({
          id: t || Dt.uniqueId(),
          parentId: s,
          childIndex: d,
          point: e,
          style: S({}, a),
        }),
        u = i.getBounds(c);
      return (
        (c.point = ve.sub(c.point, [u.width / 2, u.height / 2])),
        n
          ? this.patchCreate([v.getShapeUtil(c.type).create(c)])
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
        u = Bn[t];
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
      return ve.toFixed([e / 2, t / 2]);
    }
    get currentGrid() {
      let { zoom: e } = this.camera;
      return e < 0.15 ? 8 * 16 : e < 1 ? 8 * 4 : 8 * 1;
    }
  },
  An = lt;
l(An, "version", 15.5),
  l(An, "defaultDocument", {
    id: "doc",
    name: "New Document",
    version: lt.version,
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
  l(An, "defaultState", {
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
      currentStyle: ct,
      isToolLocked: !1,
      isMenuOpen: !1,
      isEmptyCanvas: !1,
      eraseLine: [],
      snapLines: [],
      isLoading: !1,
      disableAssets: !1,
    },
    document: lt.defaultDocument,
  }),
  l(An, "assetSrc", "tldraw-assets.json");
var qRe = {
  select: ar,
  erase: or,
  ["text"]: dr,
  ["draw"]: tr,
  ["ellipse"]: nr,
  ["rectangle"]: sr,
  ["triangle"]: cr,
  ["line"]: rr,
  ["arrow"]: er,
  ["sticky"]: lr,
};
var Ype = Kpe,
  Zpe = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : !1;
function LAe({
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
  darkMode: h = Zpe,
  components: g,
  onMount: f,
  onChange: T,
  onChangePresence: x,
  onNewProject: b,
  onSaveProject: y,
  onSaveProjectAs: R,
  onOpenProject: U,
  onOpenMedia: L,
  onUndo: k,
  onRedo: I,
  onPersist: q,
  onPatch: de,
  onCommand: le,
  onChangePage: Ae,
  onAssetCreate: Ce,
  onAssetDelete: De,
  onAssetUpload: Ve,
  onSessionStart: $e,
  onSessionEnd: jt,
  onExport: on,
  hideCursors: Lo,
}) {
  let [co, ur] = Se.useState(r),
    [Ne, hr] = Se.useState(
      () =>
        new An(r, {
          onMount: f,
          onChange: T,
          onChangePresence: x,
          onNewProject: b,
          onSaveProject: y,
          onSaveProjectAs: R,
          onOpenProject: U,
          onOpenMedia: L,
          onUndo: k,
          onRedo: I,
          onPersist: q,
          onPatch: de,
          onCommand: le,
          onChangePage: Ae,
          onAssetDelete: De,
          onAssetCreate: Ce,
          onAssetUpload: Ve,
          onSessionStart: $e,
          onSessionEnd: jt,
        })
    ),
    [Ln, ts] = Se.useState(null),
    [Hn, Ho] = Se.useState(null),
    [zo, cc] = Se.useState(null),
    [pc, Yi] = Se.useState(null),
    uc = Se.useCallback((eo, mr, hc, mc) => {
      Yi(() => eo), ts(() => mc), Ho(() => mr), cc(() => hc);
    }, []);
  return (
    Se.useLayoutEffect(() => {
      if (r === co) return;
      let eo = new An(r, {
        onMount: f,
        onChange: T,
        onChangePresence: x,
        onNewProject: b,
        onSaveProject: y,
        onSaveProjectAs: R,
        onOpenProject: U,
        onOpenMedia: L,
        onUndo: k,
        onRedo: I,
        onPersist: q,
        onPatch: de,
        onCommand: le,
        onChangePage: Ae,
        onAssetDelete: De,
        onAssetCreate: Ce,
        onAssetUpload: Ve,
        onExport: on,
        onSessionStart: $e,
        onSessionEnd: jt,
      });
      ur(r), hr(eo);
    }, [co, r]),
    Se.useEffect(() => {
      !e ||
        (e.id === Ne.document.id ? Ne.updateDocument(e) : Ne.loadDocument(e));
    }, [e, Ne]),
    Se.useEffect(() => {
      Ne.setDisableAssets(m);
    }, [Ne, m]),
    Se.useEffect(() => {
      !t || Ne.changePage(t);
    }, [t, Ne]),
    Se.useEffect(() => {
      (Ne.readOnly = p),
        p || (Ne.selectNone(), Ne.cancelSession(), Ne.setEditingId());
    }, [Ne, p]),
    Se.useEffect(() => {
      h !== Ne.settings.isDarkMode && Ne.toggleDarkMode();
    }, [Ne, h]),
    Se.useEffect(() => {
      Ne.callbacks = {
        onMount: f,
        onChange: T,
        onChangePresence: x,
        onNewProject: b,
        onSaveProject: y,
        onSaveProjectAs: R,
        onOpenProject: U,
        onOpenMedia: L,
        onUndo: k,
        onRedo: I,
        onPersist: q,
        onPatch: de,
        onCommand: le,
        onChangePage: Ae,
        onAssetDelete: De,
        onAssetCreate: Ce,
        onAssetUpload: Ve,
        onExport: on,
        onSessionStart: $e,
        onSessionEnd: jt,
      };
    }, [f, T, x, b, y, R, U, L, k, I, q, de, le, Ae, De, Ce, Ve, on, $e, jt]),
    Se.useLayoutEffect(() => {
      var mr;
      if (
        typeof window == "undefined" ||
        !((mr = window.document) == null ? void 0 : mr.fonts)
      )
        return;
      function eo() {
        Ne.refreshBoundingBoxes();
      }
      return (
        window.document.fonts.addEventListener("loadingdone", eo),
        () => {
          window.document.fonts.removeEventListener("loadingdone", eo);
        }
      );
    }, [Ne]),
    Se.createElement(
      us.Provider,
      { value: Ne },
      Se.createElement(
        ms.Provider,
        {
          value: {
            onYes: Hn,
            onCancel: Ln,
            onNo: zo,
            dialogState: pc,
            setDialogState: Yi,
            openDialog: uc,
          },
        },
        Se.createElement(Xpe, {
          key: co || "Tldraw",
          id: co,
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
          hideCursors: Lo,
        })
      )
    )
  );
}
var Xpe = Se.memo(function ({
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
    var Ne, hr;
    let h = me(),
      [g, f] = Se.useState(null),
      T = Se.useRef(null),
      x = h.useStore(),
      { document: b, settings: y, appState: R, room: U } = x,
      L = x.appState.activeTool === "select",
      k = b.pages[R.currentPageId],
      I = b.pageStates[k.id],
      q = b.assets,
      { selectedIds: de } = I,
      le =
        de.length === 1 &&
        k.shapes[de[0]] &&
        v.getShapeUtil(k.shapes[de[0]].type).hideBounds,
      Ae =
        de.length === 1 &&
        k.shapes[de[0]] &&
        v.getShapeUtil(k.shapes[de[0]].type).hideResizeHandles,
      Ce = Se.useMemo(() => ({ isDarkMode: y.isDarkMode }), [y.isDarkMode]),
      De = y.isCadSelectMode ? !R.selectByContain : R.selectByContain,
      Ve = Se.useMemo(() => {
        let { selectByContain: Ln } = R,
          { isDarkMode: ts, isCadSelectMode: Hn } = y;
        if (ts) {
          let zo = Hn
            ? Ln
              ? "69, 155, 255"
              : "105, 209, 73"
            : "180, 180, 180";
          return {
            brushFill: `rgba(${zo}, ${Hn ? 0.08 : 0.05})`,
            brushStroke: `rgba(${zo}, ${Hn ? 0.5 : 0.25})`,
            brushDashStroke: `rgba(${zo}, .6)`,
            selected: "rgba(38, 150, 255, 1.000)",
            selectFill: "rgba(38, 150, 255, 0.05)",
            background: "#212529",
            foreground: "#49555f",
          };
        }
        let Ho = Hn ? (Ln ? "0, 89, 242" : "51, 163, 23") : "0,0,0";
        return {
          brushFill: `rgba(${Ho}, ${Hn ? 0.08 : 0.05})`,
          brushStroke: `rgba(${Ho}, ${Hn ? 0.4 : 0.25})`,
          brushDashStroke: `rgba(${Ho}, .6)`,
        };
      }, [y.isDarkMode, y.isCadSelectMode, R.selectByContain]),
      $e = h.session !== void 0,
      jt =
        ($e &&
          ((Ne = h.session) == null ? void 0 : Ne.constructor.name) !==
            "BrushSession") ||
        !L ||
        le ||
        !!I.editingId,
      on = $e || !L,
      Lo = ($e && x.appState.status !== "brushing") || !L,
      co = $e || !L || I.camera.zoom < 0.2,
      ur = Ba(y.language);
    return (
      Se.useLayoutEffect(() => {
        let Ln = T.current;
        !Ln || (y.isDarkMode ? Ln.classList.add(ss) : Ln.classList.remove(ss));
      }, [y.isDarkMode]),
      Id(T),
      Se.createElement(
        hs.Provider,
        { value: T },
        Se.createElement(
          _pe,
          { locale: ur.locale, messages: ur.messages },
          Se.createElement(Ha, { container: g }),
          Se.createElement(
            Jpe,
            { ref: T, tabIndex: -0 },
            Se.createElement(bs, null),
            Se.createElement(qpe, { focusableRef: T, autofocus: t }),
            Se.createElement(
              Ea,
              null,
              Se.createElement(
                Ype,
                { FallbackComponent: Ra },
                Se.createElement(Upe, {
                  id: e,
                  containerRef: T,
                  shapeUtils: Bn,
                  page: k,
                  pageState: I,
                  assets: q,
                  snapLines: R.snapLines,
                  eraseLine: R.eraseLine,
                  grid: 8,
                  users: U == null ? void 0 : U.users,
                  userId: U == null ? void 0 : U.userId,
                  theme: Ve,
                  meta: Ce,
                  components: p,
                  hideCursors: m,
                  hideBounds: jt,
                  hideHandles: on,
                  hideResizeHandles: Ae,
                  hideIndicators: Lo,
                  hideBindingHandles: !y.showBindingHandles,
                  hideCloneHandles: co,
                  hideRotateHandles: !y.showRotateHandles,
                  hideGrid: !y.showGrid,
                  showDashedBrush: De,
                  performanceMode:
                    (hr = h.session) == null ? void 0 : hr.performanceMode,
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
              Se.createElement(
                Qpe,
                { ref: f },
                y.isFocusMode
                  ? Se.createElement(Aa, { onSelect: h.toggleFocusMode })
                  : Se.createElement(
                      Se.Fragment,
                      null,
                      Se.createElement(vd, {
                        readOnly: c,
                        showPages: n,
                        showMenu: o,
                        showMultiplayerMenu: s,
                        showStyles: d,
                        showZoom: a,
                      }),
                      Se.createElement(eue, null),
                      i && !c && Se.createElement(il, null)
                    )
              )
          )
        )
      )
    );
  }),
  qpe = Se.memo(function ({ focusableRef: e, autofocus: t }) {
    return (
      Ji(e),
      Se.useEffect(() => {
        var n;
        t && ((n = e.current) == null || n.focus());
      }, [t]),
      null
    );
  }),
  Jpe = H("div", {
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
  Qpe = H("div", {
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
  eue = H("div", { flexGrow: 2 });
export {
  Gt as AlignStyle,
  Tr as AlignType,
  Ko as Arrow,
  cs as ColorStyle,
  yn as DashStyle,
  wr as Decoration,
  xr as DistributeType,
  gi as Draw,
  mi as Ellipse,
  ds as FlipType,
  Lc as FontSize,
  Oo as FontStyle,
  hce as Group,
  mce as Image,
  ls as MoveType,
  ui as Rectangle,
  We as SessionType,
  kr as SizeStyle,
  _r as Sticky,
  yr as StretchType,
  ps as TDAssetType,
  as as TDEventHandler,
  Fo as TDExportBackground,
  mo as TDExportType,
  Ie as TDShapeType,
  At as TDStatus,
  Ac as TDUserStatus,
  v as TLDR,
  uce as Text,
  LAe as Tldraw,
  An as TldrawApp,
  hi as Triangle,
  gce as Video,
  pd as getShapeUtil,
  Bn as shapeUtils,
  Rc as useFileSystem,
};
//# sourceMappingURL=index.mjs.map
