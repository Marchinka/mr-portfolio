type Content = React.ReactNode | string;

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
    briefText: string;
    coverImg: string;
    components: Content[];
}