export interface WidgetConfig<P = any> {
    id: string;
    Component: React.ComponentType<P>;
    props: P;
    /** Опционально: переопределить класс-обёртку */
    wrapperClassName?: string;
}