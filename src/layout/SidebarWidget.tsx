import useInstallPrompt from "../hooks/useInstallPrompt";

export default function SidebarWidget() {
  const { showInstallPrompt } = useInstallPrompt();

  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h5 className="mb-2 font-semibold text-gray-900 dark:text-white">
        Alucan Packaging Limited
      </h5>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Solution PWA 
      </p>
      <div className="flex gap-4 flex-col">

      {/* {promptVisible && (   */}
      <a
        onClick={showInstallPrompt}
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-red-500 text-theme-sm hover:bg-brand-600"
      >
        Install Bevcan v1
      </a>
      {/* )} */}
      <a
        href="https://tailadmin.com/pricing"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-black-500 text-theme-sm hover:bg-brand-600"
      >
        Purchase Plan
      </a>
      </div>
    </div>
  );
}
