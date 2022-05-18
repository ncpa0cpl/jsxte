export type RendererHTMLAttributes = [string, string | undefined][];

export type HTMLElementStruct = {
  tag: string;
  key?: any;
  children: JSX.Element[];
  attributes: RendererHTMLAttributes;
};

export type Rewrap<T extends object> = T extends infer OBJ
  ? {
      [K in keyof OBJ]: OBJ[K] extends infer O ? O : never;
    }
  : never;

export type HTMLPropsFor<
  Attributes extends { attributes: Record<string, string> }
> = {
  [K in keyof Attributes["attributes"]]?: string;
};