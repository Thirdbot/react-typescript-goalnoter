import type { ReactNode } from "react";

type InfoBoxProps = {
    mode: 'hint';
    children: ReactNode;
}

type InfoWarningProps = {
    mode:'warning'
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;};


type InfoProps = InfoBoxProps | InfoWarningProps;

export default function InfoBox(props:InfoProps) {
   const {mode,children} = props;
    if (mode === 'hint') {
        return (<aside className="infobox infobox-hint">
            <p>{children}</p>
            </aside>
            );
        }
    const {severity} = props
    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>warning</h2>
            <p>{children}</p>
        </aside>
    )
    }
