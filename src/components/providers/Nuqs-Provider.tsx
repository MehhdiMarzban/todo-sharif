import { NuqsAdapter } from "nuqs/adapters/next/app";


/**
 * Provides the NuqsAdapter context to the application.
 *
 * This component must be mounted at the root of the application,
 * typically in the app/layout.tsx file.
 * @see https://github.com/paraboly/nuqs
 */
const NuqsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <NuqsAdapter>{children}</NuqsAdapter>;
};

export default NuqsProvider;
