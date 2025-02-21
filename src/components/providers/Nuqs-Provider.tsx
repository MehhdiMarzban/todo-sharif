import { NuqsAdapter } from "nuqs/adapters/next/app";

const NuqsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <NuqsAdapter>{children}</NuqsAdapter>;
};

export default NuqsProvider;
