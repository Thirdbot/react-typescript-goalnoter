import type { ReactNode } from "react";
type InfoProps = {
    mode:'hint' | 'warning'
    children: ReactNode;};

export default function InfoBox({mode,children}:InfoProps) {
    if (mode === 'hint') {
        return (<aside className="infobox infobox-hint">
            <p>{children}</p>
            </aside>
            );
        }
    return(
        <aside className="infobox infobox-warning   ">
            <h2>warning</h2>
            <p>{children}</p>
        </aside>
    )
    }
