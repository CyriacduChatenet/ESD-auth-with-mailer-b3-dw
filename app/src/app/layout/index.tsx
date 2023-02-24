import { FC, PropsWithChildren } from 'react';

export const MainLayout: FC = ({ children }: PropsWithChildren) => {
	return <div>
        <nav>
            Links
        </nav>
        <>{children}</>
    </div>;
};
