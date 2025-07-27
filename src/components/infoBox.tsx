import type { ReactNode } from "react";
type InfoProps = {
    mode:'hint' | 'warning'
    severity?: 'low' | 'medium' | 'high';
    children: ReactNode;};

export default function InfoBox({mode,children,severity}:InfoProps) {
    if (mode === 'hint') {
        return (<aside className="infobox infobox-hint">
            <p>{children}</p>
            </aside>
            );
        }
    return(
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>warning</h2>
            <p>{children}</p>
        </aside>
    )
    }
