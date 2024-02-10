import { GithubButton } from '../GithubButton'
import { SiteButton } from '../SiteButton'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full h-16 px-2 border-t border-t-gray-700 flex items-center justify-center gap-4">
            <p className="text-xs text-gray-400 text-center">
                &copy; {currentYear} Matheus Silva. Todos os direitos
                reservados.
            </p>

            <SiteButton />
            <GithubButton />
        </footer>
    )
}
