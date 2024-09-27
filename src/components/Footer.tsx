export const Footer = () => {
    return (
        <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-blue-950 bg-opacity-50">
            <div className="max-w-7xl mx-auto text-center text-sm text-blue-400">
                &copy; {new Date().getFullYear()} Deep Diver Dev. All rights reserved. Dive safely!
            </div>
        </footer>
    );
}