import { ENV_VAR } from "~/env";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <img className="h-8"
        src={`${ENV_VAR.VITE_APP_STORAGE_ENDPOINT}/icons/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png`} alt="Logo" />
    </>
  );
};
