import type { HTMLProps } from "./base-html-tag-props";
import type { AnchorTagProps } from "./prop-types/a-jsx-props";
import type { AreaTagProps } from "./prop-types/area-jsx-props";
import type { AudioTagProps } from "./prop-types/audio-jsx-props";
import type { BaseTagProps } from "./prop-types/base-jsx-props";
import type { BlockquoteTagProps } from "./prop-types/blockquote-jsx-props";
import type { ButtonTagProps } from "./prop-types/button-jsx-props";
import type { CanvasTagProps } from "./prop-types/canvas-jsx-props";
import type { ColTagProps } from "./prop-types/col-jsx-props";
import type { ColgroupTagProps } from "./prop-types/colgroup-jsx-props";
import type { DataTagProps } from "./prop-types/data-jsx-props";
import type { DelTagProps } from "./prop-types/del-jsx-props";
import type { DetailsTagProps } from "./prop-types/details-jsx-props";
import type { DialogTagProps } from "./prop-types/dialog-jsx-props";
import type { FieldsetTagProps } from "./prop-types/fieldset-jsx-prop";
import type { FormTagProps } from "./prop-types/form-jsx-props";
import type { HtmlTagProps } from "./prop-types/html-jsx-props";
import type { IframeTagProps } from "./prop-types/iframe-jsx-props";
import type { ImgTagProps } from "./prop-types/img-jsx-props";
import type { InputTagProps } from "./prop-types/input-jsx-props";
import type { InsTagProps } from "./prop-types/ins-jsx-props";
import type { LabelTagProps } from "./prop-types/label-jsx-props";
import type { LiTagProps } from "./prop-types/li-jsx.props";
import type { LinkTagProps } from "./prop-types/link-jsx-props";
import type { MapTagProps } from "./prop-types/map-jsx-props";
import type { MetaTagProps } from "./prop-types/meta-jsx-props";
import type { MeterTagProps } from "./prop-types/meter-jsx-props";
import type { ObjectTagProps } from "./prop-types/object-jsx-props";
import type { OlTagProps } from "./prop-types/ol-jsx-props";
import type { OptgroupTagProps } from "./prop-types/optgroup-jsx-props";
import type { OptionTagProps } from "./prop-types/option-jsx-props";
import type { OutputTagProps } from "./prop-types/output-jsx-props";
import type { ParamTagProps } from "./prop-types/param-jsx-props";
import type { ProgressTagProps } from "./prop-types/progress-jsx-props";
import type { QTagProps } from "./prop-types/q-jsx-props";
import type { ScriptTagProps } from "./prop-types/script-jsx-props";
import type { SelectTagProps } from "./prop-types/select-jsx-props";
import type { SourceTagProps } from "./prop-types/source-jsx-props";
import type { StyleTagProps } from "./prop-types/style-jsx-props";
import type { TdTagProps } from "./prop-types/td-jsx-props";
import type { TextareaTagProps } from "./prop-types/textarea-jsx-props";
import type { ThTagProps } from "./prop-types/th-jsx-props";

export type JSXTagElem = {
  type: "tag";
  tag:
    | string
    | ((props: JSX.ElementProps) => Element)
    | ((props: JSX.ElementProps) => Promise<Element>);
  props: JSX.ElementProps;
};

export type JSXTextNodeElem = {
  type: "textNode";
  text: string;
};

export type JSXSyncElem = JSXTagElem | JSXTextNodeElem;

declare global {
  namespace JSX {
    type PropsWithChildren<P extends object> = P & {
      children?: JSX.ElementChildren;
    };

    type Component<P extends object = {}> = (
      props: PropsWithChildren<P>
    ) => JSX.Element;

    type AsyncComponent<P extends object = {}> = (
      props: PropsWithChildren<P>
    ) => Promise<JSX.Element>;

    type ElementChildren =
      | JSX.Element
      | string
      | number
      | Array<
          JSX.Element | string | number | Array<JSX.Element | string | number>
        >;

    type ElementProps = {
      children?: ElementChildren;
      [k: string]: any;
    };

    type Element =
      | JSXTagElem
      | JSXTextNodeElem
      | Promise<JSXTagElem | JSXTextNodeElem>;

    type LibraryManagedAttributes<T, PropsWithChildren> = PropsWithChildren;

    interface IntrinsicElements {
      a: HTMLProps<AnchorTagProps>;
      abbr: HTMLProps;
      address: HTMLProps;
      area: HTMLProps<AreaTagProps>;
      article: HTMLProps;
      aside: HTMLProps;
      audio: HTMLProps<AudioTagProps>;
      b: HTMLProps;
      base: HTMLProps<BaseTagProps>;
      bdi: HTMLProps;
      bdo: HTMLProps;
      big: HTMLProps;
      blockquote: HTMLProps<BlockquoteTagProps>;
      body: HTMLProps;
      br: HTMLProps;
      button: HTMLProps<ButtonTagProps>;
      canvas: HTMLProps<CanvasTagProps>;
      caption: HTMLProps;
      cite: HTMLProps;
      code: HTMLProps;
      col: HTMLProps<ColTagProps>;
      colgroup: HTMLProps<ColgroupTagProps>;
      data: HTMLProps<DataTagProps>;
      datalist: HTMLProps;
      dd: HTMLProps;
      del: HTMLProps<DelTagProps>;
      details: HTMLProps<DetailsTagProps>;
      dfn: HTMLProps;
      dialog: HTMLProps<DialogTagProps>;
      div: HTMLProps;
      dl: HTMLProps;
      dt: HTMLProps;
      em: HTMLProps;
      embed: HTMLProps;
      fieldset: HTMLProps<FieldsetTagProps>;
      figcaption: HTMLProps;
      figure: HTMLProps;
      footer: HTMLProps;
      form: HTMLProps<FormTagProps>;
      h1: HTMLProps;
      h2: HTMLProps;
      h3: HTMLProps;
      h4: HTMLProps;
      h5: HTMLProps;
      h6: HTMLProps;
      head: HTMLProps;
      header: HTMLProps;
      hgroup: HTMLProps;
      hr: HTMLProps;
      html: HTMLProps<HtmlTagProps>;
      i: HTMLProps;
      iframe: HTMLProps<IframeTagProps>;
      img: HTMLProps<ImgTagProps>;
      input: HTMLProps<InputTagProps>;
      ins: HTMLProps<InsTagProps>;
      kbd: HTMLProps;
      keygen: HTMLProps;
      label: HTMLProps<LabelTagProps>;
      legend: HTMLProps;
      li: HTMLProps<LiTagProps>;
      link: HTMLProps<LinkTagProps>;
      main: HTMLProps;
      map: HTMLProps<MapTagProps>;
      mark: HTMLProps;
      menu: HTMLProps;
      menuitem: HTMLProps;
      meta: HTMLProps<MetaTagProps>;
      meter: HTMLProps<MeterTagProps>;
      nav: HTMLProps;
      noindex: HTMLProps;
      noscript: HTMLProps;
      object: HTMLProps<ObjectTagProps>;
      ol: HTMLProps<OlTagProps>;
      optgroup: HTMLProps<OptgroupTagProps>;
      option: HTMLProps<OptionTagProps>;
      output: HTMLProps<OutputTagProps>;
      p: HTMLProps;
      param: HTMLProps<ParamTagProps>;
      picture: HTMLProps;
      pre: HTMLProps;
      progress: HTMLProps<ProgressTagProps>;
      q: HTMLProps<QTagProps>;
      rp: HTMLProps;
      rt: HTMLProps;
      ruby: HTMLProps;
      s: HTMLProps;
      samp: HTMLProps;
      slot: HTMLProps;
      script: HTMLProps<ScriptTagProps>;
      section: HTMLProps;
      select: HTMLProps<SelectTagProps>;
      small: HTMLProps;
      source: HTMLProps<SourceTagProps>;
      span: HTMLProps;
      strong: HTMLProps;
      style: HTMLProps<StyleTagProps>;
      sub: HTMLProps;
      summary: HTMLProps;
      sup: HTMLProps;
      table: HTMLProps;
      template: HTMLProps;
      tbody: HTMLProps;
      td: HTMLProps<TdTagProps>;
      textarea: HTMLProps<TextareaTagProps>;
      tfoot: HTMLProps;
      th: HTMLProps<ThTagProps>;
      thead: HTMLProps;
      time: HTMLProps;
      title: HTMLProps;
      tr: HTMLProps;
      track: HTMLProps;
      u: HTMLProps;
      ul: HTMLProps;
      var: HTMLProps;
      video: HTMLProps;
      wbr: HTMLProps;
      webview: HTMLProps;

      // SVG
      svg: HTMLProps;

      // web components
    }
  }
}
