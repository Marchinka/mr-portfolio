type Content = React.ReactNode | string;

export interface Paragraph {
    title: string;
    components: Content[];
}

export interface ProjectModel {
    title: string;
    subTitle: string;
    color: string;
    agileTags: string[];
    designTags: string[];
    softwareTags: string[];
    back:string;
    route: string;
    next: string;
    briefText?: string | null;
    coverImg: string;
    paragraphs: Paragraph[];
}