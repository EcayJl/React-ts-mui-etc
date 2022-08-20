import MainMenuComponent from "../components/common/Menu";
import * as React from 'react'

interface ILayoutProps {
    children: React.ReactNode
}


const Layout: React.FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
    return(
        <React.Fragment>
            <MainMenuComponent />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
};

export default Layout;