import { useEffect, useState } from "react";

export const BackToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShow(window.pageYOffset > 200);
        window.addEventListener("scroll", handleScroll);

        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            data-show={show}
            onClick={toTop}
            data-tip="Back to top"
            className="btn tooltip btn-circle translate-y-4 scale-90 opacity-0 transition-all duration-300 data-[show=true]:translate-y-0 data-[show=true]:scale-100 data-[show=true]:opacity-100">
            <span className="iconify lucide--arrow-up size-5.5" />
        </button>
    );
};
