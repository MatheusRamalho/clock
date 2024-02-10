import Link from 'next/link'

export const SiteButton = () => {
    return (
        <Link
            className="size-8 rounded-md bg-gray-700 flex items-center justify-center group hover:bg-gray-600"
            href="https://matheusramalho.dev"
            target="_blank"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-white group-hover:text-green-700"
            >
                <circle cx={12} cy={12} r={10} />
                <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20" />
            </svg>
        </Link>
    )
}
