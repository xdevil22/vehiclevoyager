declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
declare module "*.html" {
  const value: string;
  export default value;
}

interface ImportMeta {
  glob<T>(pattern: string, options: {eager: true}): Record<string, T>;
  glob<T>(
    pattern: string,
    options?: {eager?: false},
  ): Record<string, () => Promise<T>>;
  globEager<T>(pattern: string): Record<string, T>;
}
