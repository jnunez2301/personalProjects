export enum ProgramingLanguage{
    PYTHON = 'python',
    JAVASCRIPT = 'javascript',
    HTML = 'html',
    CSS = 'css',
    TYPESCRIPT = 'typescript'
}
export interface SharedCode {
    generatedUrl: string;
    code: string;
    languageOptions: {
        name: ProgramingLanguage,
        code: ProgramingLanguage
    };
}