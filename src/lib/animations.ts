

export const fadeIn = {
    initial: {opacity: 0.1, y: 20},
    whileInView: {opacity: 1, y: 0},
    transition: {duration: 0.5},
    viewport: {amount: 0.8, once: true}
}
export const hoverAnimation = {
    whileHover: { backgroundColor: "#3776a0ff"},
    transition: {duration: 0.1},
    whileTap: {scale: 0.98}
}