
export function Footer() {

    return (
        <footer className="w-full py-4 border-t border-border mt-8">
            <div className="container text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Eazy Interview Portal. All rights reserved.
            </div>
        </footer>
    );
}