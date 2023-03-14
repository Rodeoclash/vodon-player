declare const styled: <
  Type extends
    | import("@stitches/react/types/util").Function
    | keyof JSX.IntrinsicElements
    | import("react").ComponentType<any>,
  Composers extends (
    | string
    | import("@stitches/react/types/util").Function
    | import("react").ComponentType<any>
    | {
        [name: string]: unknown;
      }
  )[],
  CSS = import("@stitches/react/types/css-util").CSS<
    {
      micro: "(max-width: 370px)";
      sm: "(min-width: 640px)";
      md: "(min-width: 768px)";
      lg: "(min-width: 1024px)";
    },
    {
      colors: {
        bounds: string;
        boundsBg: string;
        hover: string;
        overlay: string;
        overlayContrast: string;
        panel: string;
        panelContrast: string;
        selected: string;
        selectedContrast: string;
        text: string;
        tooltip: string;
        tooltipContrast: string;
        warn: string;
        canvas: string;
      };
      shadows: {
        2: string;
        3: string;
        4: string;
        8: string;
        12: string;
        24: string;
        key: string;
        panel: string;
      };
      space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
      };
      fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
      };
      fonts: {
        ui: string;
        body: string;
        mono: string;
      };
      fontWeights: unknown;
      lineHeights: unknown;
      letterSpacings: unknown;
      sizes: unknown;
      borderWidths: {
        0: string;
      };
      borderStyles: unknown;
      radii: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
      };
      zIndices: unknown;
      transitions: unknown;
    },
    {
      gap: "space";
      gridGap: "space";
      columnGap: "space";
      gridColumnGap: "space";
      rowGap: "space";
      gridRowGap: "space";
      inset: "space";
      insetBlock: "space";
      insetBlockEnd: "space";
      insetBlockStart: "space";
      insetInline: "space";
      insetInlineEnd: "space";
      insetInlineStart: "space";
      margin: "space";
      marginTop: "space";
      marginRight: "space";
      marginBottom: "space";
      marginLeft: "space";
      marginBlock: "space";
      marginBlockEnd: "space";
      marginBlockStart: "space";
      marginInline: "space";
      marginInlineEnd: "space";
      marginInlineStart: "space";
      padding: "space";
      paddingTop: "space";
      paddingRight: "space";
      paddingBottom: "space";
      paddingLeft: "space";
      paddingBlock: "space";
      paddingBlockEnd: "space";
      paddingBlockStart: "space";
      paddingInline: "space";
      paddingInlineEnd: "space";
      paddingInlineStart: "space";
      scrollMargin: "space";
      scrollMarginTop: "space";
      scrollMarginRight: "space";
      scrollMarginBottom: "space";
      scrollMarginLeft: "space";
      scrollMarginBlock: "space";
      scrollMarginBlockEnd: "space";
      scrollMarginBlockStart: "space";
      scrollMarginInline: "space";
      scrollMarginInlineEnd: "space";
      scrollMarginInlineStart: "space";
      scrollPadding: "space";
      scrollPaddingTop: "space";
      scrollPaddingRight: "space";
      scrollPaddingBottom: "space";
      scrollPaddingLeft: "space";
      scrollPaddingBlock: "space";
      scrollPaddingBlockEnd: "space";
      scrollPaddingBlockStart: "space";
      scrollPaddingInline: "space";
      scrollPaddingInlineEnd: "space";
      scrollPaddingInlineStart: "space";
      top: "space";
      right: "space";
      bottom: "space";
      left: "space";
      fontSize: "fontSizes";
      background: "colors";
      backgroundColor: "colors";
      backgroundImage: "colors";
      borderImage: "colors";
      border: "colors";
      borderBlock: "colors";
      borderBlockEnd: "colors";
      borderBlockStart: "colors";
      borderBottom: "colors";
      borderBottomColor: "colors";
      borderColor: "colors";
      borderInline: "colors";
      borderInlineEnd: "colors";
      borderInlineStart: "colors";
      borderLeft: "colors";
      borderLeftColor: "colors";
      borderRight: "colors";
      borderRightColor: "colors";
      borderTop: "colors";
      borderTopColor: "colors";
      caretColor: "colors";
      color: "colors";
      columnRuleColor: "colors";
      outline: "colors";
      outlineColor: "colors";
      fill: "colors";
      stroke: "colors";
      textDecorationColor: "colors";
      fontFamily: "fonts";
      fontWeight: "fontWeights";
      lineHeight: "lineHeights";
      letterSpacing: "letterSpacings";
      blockSize: "sizes";
      minBlockSize: "sizes";
      maxBlockSize: "sizes";
      inlineSize: "sizes";
      minInlineSize: "sizes";
      maxInlineSize: "sizes";
      width: "sizes";
      minWidth: "sizes";
      maxWidth: "sizes";
      height: "sizes";
      minHeight: "sizes";
      maxHeight: "sizes";
      flexBasis: "sizes";
      gridTemplateColumns: "sizes";
      gridTemplateRows: "sizes";
      borderWidth: "borderWidths";
      borderTopWidth: "borderWidths";
      borderLeftWidth: "borderWidths";
      borderRightWidth: "borderWidths";
      borderBottomWidth: "borderWidths";
      borderStyle: "borderStyles";
      borderTopStyle: "borderStyles";
      borderLeftStyle: "borderStyles";
      borderRightStyle: "borderStyles";
      borderBottomStyle: "borderStyles";
      borderRadius: "radii";
      borderTopLeftRadius: "radii";
      borderTopRightRadius: "radii";
      borderBottomRightRadius: "radii";
      borderBottomLeftRadius: "radii";
      boxShadow: "shadows";
      textShadow: "shadows";
      transition: "transitions";
      zIndex: "zIndices";
    },
    {
      zStrokeWidth: () => (value: number | number[]) => {
        strokeWidth: string;
      };
    }
  >
>(
  type: Type,
  ...composers: {
    [K in keyof Composers]: string extends Composers[K]
      ? Composers[K]
      : Composers[K] extends
          | string
          | import("@stitches/react/types/util").Function
          | import("react").ComponentType<any>
      ? Composers[K]
      : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
          variants?:
            | {
                [x: string]: {
                  [x: string]: CSS;
                  [x: number]: CSS;
                };
              }
            | undefined;
          compoundVariants?:
            | (("variants" extends keyof Composers[K]
                ? Composers[K][keyof Composers[K] & "variants"] extends infer T
                  ? {
                      [Name in keyof T]?:
                        | import("@stitches/react/types/util").String
                        | import("@stitches/react/types/util").Widen<
                            keyof Composers[K][keyof Composers[K] &
                              "variants"][Name]
                          >
                        | undefined;
                    }
                  : never
                : import("@stitches/react/types/util").WideObject) & {
                css: CSS;
              })[]
            | undefined;
          defaultVariants?:
            | ("variants" extends keyof Composers[K]
                ? Composers[K][keyof Composers[K] &
                    "variants"] extends infer T_1
                  ? {
                      [Name_1 in keyof T_1]?:
                        | import("@stitches/react/types/util").String
                        | import("@stitches/react/types/util").Widen<
                            keyof Composers[K][keyof Composers[K] &
                              "variants"][Name_1]
                          >
                        | undefined;
                    }
                  : never
                : import("@stitches/react/types/util").WideObject)
            | undefined;
        } & CSS &
          (Composers[K] extends infer T_2
            ? {
                [K2 in keyof T_2]: K2 extends
                  | "compoundVariants"
                  | "defaultVariants"
                  | "variants"
                  ? unknown
                  : K2 extends keyof CSS
                  ? CSS[K2]
                  : unknown;
              }
            : never);
  }
) => import("@stitches/react/types/styled-component").StyledComponent<
  Type,
  import("@stitches/react/types/styled-component").StyledComponentProps<Composers>,
  {
    micro: "(max-width: 370px)";
    sm: "(min-width: 640px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 1024px)";
  },
  import("@stitches/react/types/css-util").CSS<
    {
      micro: "(max-width: 370px)";
      sm: "(min-width: 640px)";
      md: "(min-width: 768px)";
      lg: "(min-width: 1024px)";
    },
    {
      colors: {
        bounds: string;
        boundsBg: string;
        hover: string;
        overlay: string;
        overlayContrast: string;
        panel: string;
        panelContrast: string;
        selected: string;
        selectedContrast: string;
        text: string;
        tooltip: string;
        tooltipContrast: string;
        warn: string;
        canvas: string;
      };
      shadows: {
        2: string;
        3: string;
        4: string;
        8: string;
        12: string;
        24: string;
        key: string;
        panel: string;
      };
      space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
      };
      fontSizes: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
      };
      fonts: {
        ui: string;
        body: string;
        mono: string;
      };
      fontWeights: unknown;
      lineHeights: unknown;
      letterSpacings: unknown;
      sizes: unknown;
      borderWidths: {
        0: string;
      };
      borderStyles: unknown;
      radii: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
      };
      zIndices: unknown;
      transitions: unknown;
    },
    {
      gap: "space";
      gridGap: "space";
      columnGap: "space";
      gridColumnGap: "space";
      rowGap: "space";
      gridRowGap: "space";
      inset: "space";
      insetBlock: "space";
      insetBlockEnd: "space";
      insetBlockStart: "space";
      insetInline: "space";
      insetInlineEnd: "space";
      insetInlineStart: "space";
      margin: "space";
      marginTop: "space";
      marginRight: "space";
      marginBottom: "space";
      marginLeft: "space";
      marginBlock: "space";
      marginBlockEnd: "space";
      marginBlockStart: "space";
      marginInline: "space";
      marginInlineEnd: "space";
      marginInlineStart: "space";
      padding: "space";
      paddingTop: "space";
      paddingRight: "space";
      paddingBottom: "space";
      paddingLeft: "space";
      paddingBlock: "space";
      paddingBlockEnd: "space";
      paddingBlockStart: "space";
      paddingInline: "space";
      paddingInlineEnd: "space";
      paddingInlineStart: "space";
      scrollMargin: "space";
      scrollMarginTop: "space";
      scrollMarginRight: "space";
      scrollMarginBottom: "space";
      scrollMarginLeft: "space";
      scrollMarginBlock: "space";
      scrollMarginBlockEnd: "space";
      scrollMarginBlockStart: "space";
      scrollMarginInline: "space";
      scrollMarginInlineEnd: "space";
      scrollMarginInlineStart: "space";
      scrollPadding: "space";
      scrollPaddingTop: "space";
      scrollPaddingRight: "space";
      scrollPaddingBottom: "space";
      scrollPaddingLeft: "space";
      scrollPaddingBlock: "space";
      scrollPaddingBlockEnd: "space";
      scrollPaddingBlockStart: "space";
      scrollPaddingInline: "space";
      scrollPaddingInlineEnd: "space";
      scrollPaddingInlineStart: "space";
      top: "space";
      right: "space";
      bottom: "space";
      left: "space";
      fontSize: "fontSizes";
      background: "colors";
      backgroundColor: "colors";
      backgroundImage: "colors";
      borderImage: "colors";
      border: "colors";
      borderBlock: "colors";
      borderBlockEnd: "colors";
      borderBlockStart: "colors";
      borderBottom: "colors";
      borderBottomColor: "colors";
      borderColor: "colors";
      borderInline: "colors";
      borderInlineEnd: "colors";
      borderInlineStart: "colors";
      borderLeft: "colors";
      borderLeftColor: "colors";
      borderRight: "colors";
      borderRightColor: "colors";
      borderTop: "colors";
      borderTopColor: "colors";
      caretColor: "colors";
      color: "colors";
      columnRuleColor: "colors";
      outline: "colors";
      outlineColor: "colors";
      fill: "colors";
      stroke: "colors";
      textDecorationColor: "colors";
      fontFamily: "fonts";
      fontWeight: "fontWeights";
      lineHeight: "lineHeights";
      letterSpacing: "letterSpacings";
      blockSize: "sizes";
      minBlockSize: "sizes";
      maxBlockSize: "sizes";
      inlineSize: "sizes";
      minInlineSize: "sizes";
      maxInlineSize: "sizes";
      width: "sizes";
      minWidth: "sizes";
      maxWidth: "sizes";
      height: "sizes";
      minHeight: "sizes";
      maxHeight: "sizes";
      flexBasis: "sizes";
      gridTemplateColumns: "sizes";
      gridTemplateRows: "sizes";
      borderWidth: "borderWidths";
      borderTopWidth: "borderWidths";
      borderLeftWidth: "borderWidths";
      borderRightWidth: "borderWidths";
      borderBottomWidth: "borderWidths";
      borderStyle: "borderStyles";
      borderTopStyle: "borderStyles";
      borderLeftStyle: "borderStyles";
      borderRightStyle: "borderStyles";
      borderBottomStyle: "borderStyles";
      borderRadius: "radii";
      borderTopLeftRadius: "radii";
      borderTopRightRadius: "radii";
      borderBottomRightRadius: "radii";
      borderBottomLeftRadius: "radii";
      boxShadow: "shadows";
      textShadow: "shadows";
      transition: "transitions";
      zIndex: "zIndices";
    },
    {
      zStrokeWidth: () => (value: number | number[]) => {
        strokeWidth: string;
      };
    }
  >
>;
export declare const dark: string & {
  className: string;
  selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<
    {
      colors: {
        bounds: string;
        boundsBg: string;
        hover: string;
        overlay: string;
        overlayContrast: string;
        panel: string;
        panelContrast: string;
        selected: string;
        selectedContrast: string;
        text: string;
        tooltip: string;
        tooltipContrast: string;
        canvas: string;
      };
      shadows: {
        2: string;
        3: string;
        4: string;
        8: string;
        12: string;
        24: string;
        panel: string;
      };
    },
    ""
  >;
export { styled };
//# sourceMappingURL=stitches.config.d.ts.map
