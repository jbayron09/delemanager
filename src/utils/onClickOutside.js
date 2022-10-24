export default function onClickOutside(listening, setListening, componentRef, setIsOpen) {
    return () => {
        if (listening) return;
        if (!componentRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach(() => {
            document.addEventListener(`click`, (evt) => {
                if (componentRef.current.contains(evt.target)) return;
                setIsOpen(false);
            });
        });
    }
}