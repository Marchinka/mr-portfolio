declare module '*.md' {
    const value: string; // markdown is just a string
    export default value;
}

declare module '!!raw-loader!*' {
    const content: string;
    export default content;
}