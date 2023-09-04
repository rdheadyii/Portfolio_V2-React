export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <h2>
                &copy; {year}. Russell D Heady II.
            </h2>
        </footer>
    );
}